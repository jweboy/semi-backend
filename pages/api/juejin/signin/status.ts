// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dayjs from "dayjs";
import type { NextApiRequest, NextApiResponse } from "next";
import { ErrorCode } from "../../../../contants/locale";
import { getDatabaseConnection } from "../../../../lib/database";
import { request } from "undici";
import { JUEJIN_REQUEST_URL } from "../../../../contants/url";
import { baseHeaders, checkCookieIsExpired } from "../utils";
import Signin from "../../../../src/entity/Signin";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseByPagination<Signin>>
) {
  const { cookie, error, code } = await checkCookieIsExpired();

  if (error) {
    res.status(code).json({ msg: error, code, data: null });
    return;
  }

  // 查询今日是否已经签到
  const result = await request(`${JUEJIN_REQUEST_URL}/get_today_status`, {
    headers: { ...baseHeaders, cookie },
  }).then(({ body }) => body.json());

  if (result.err_no === 0) {
    const db = await getDatabaseConnection();
    const repository = db.getRepository(Signin);
    const { incr_point, sum_point } = await repository
      .createQueryBuilder()
      .orderBy("signin.update_time", "DESC")
      .getOne();
    res.json({
      data: {
        // status: result.data ? SigninStatus.Ok : SigninStatus.Not,
        incr_point,
        sum_point,
        cookie,
      },
    });
  } else {
    res.json({
      msg: !cookie ? "未找到存储的cookie，请重新提交cookie" : "服务器错误",
      code: !cookie ? ErrorCode.NoCookie : ErrorCode.ServerError,
      data: null,
    });
  }
}
