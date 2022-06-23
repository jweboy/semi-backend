import dayjs from "dayjs";
import { NextApiRequest, NextApiResponse } from "next";
import { request } from "undici";
import { ErrorCode } from "../../../../contants/locale";
import { JUEJIN_REQUEST_URL } from "../../../../contants/url";
import { getDatabaseConnection } from "../../../../lib/database";
import connectRedis from "../../../../lib/redis";
import Signin from "../../../../src/entity/Signin";
import { baseHeaders, checkCookieIsExpired } from "../utils";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const redis = await connectRedis();
  const { cookie, error, code } = await checkCookieIsExpired(redis);
  const { body } = req;
  const data = JSON.parse(body);

  // 检查cookie是否在有效期内
  if (error) {
    res.status(code).json({ msg: error, code, data: null });
    return;
  }

  // 首次没有存入 cookie，就将 cookie 值存入到 redis 里
  if (cookie == null) {
    const today = dayjs();
    const laterDays = today.add(30, "d");

    await redis.HSET("juejin", "cookie", data.cookie);
    await redis.HSET(
      "juejin",
      "expired",
      laterDays.format("YYYY-MM-DD HH:mm:ss")
    );
  }

  // 组合请求 header
  const headers = { ...baseHeaders, cookie: data.cookie };

  // 打卡签到
  const result = await request(`${JUEJIN_REQUEST_URL}/check_in`, {
    headers,
    method: "POST",
  }).then(({ body }) => body.json());

  // 打卡成功就将结果存入到数据库中
  if (result.err_no === 0) {
    const db = await getDatabaseConnection();
    const repository = db.getRepository(Signin);
    await repository
      .createQueryBuilder()
      .insert()
      .into(Signin)
      .values(result.data)
      .execute();
    res.status(200).json({
      data: result.data,
      code: 0,
    });
  } else {
    res.status(200).json({
      msg: result.err_msg,
      code: ErrorCode.SignedIn,
      data: null,
    });
  }
};

export default handler;
