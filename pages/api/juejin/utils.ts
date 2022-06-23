import dayjs from "dayjs";
import { ErrorCode } from "../../../contants/locale";
import connectRedis from "../../../lib/redis";

export const checkCookieIsExpired = async (redis?: any) => {
  const today = dayjs();
  let _redis;
  _redis = redis || (await connectRedis());
  const { expired, cookie } = await _redis.HGETALL("juejin");
  const diffDays = dayjs(expired).diff(today, "d");

  // 30 天有效期
  if (diffDays < 0) {
    return {
      error: "cookie已过期，请重新获取cookie提交",
      code: ErrorCode.CookieExpired,
    };
  }

  return { cookie };
};

export const baseHeaders = {
  "content-type": "application/json; charset=utf-8",
  "user-agent":
    "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
  "accept-encoding": "gzip, deflate, br",
  "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
  "sec-ch-ua":
    '"Chromium";v="88", "Google Chrome";v="88", ";Not A Brand";v="99"',
  "sec-ch-ua-mobile": "?0",
  referer: "https://juejin.cn/",
  accept: "*/*",
};
