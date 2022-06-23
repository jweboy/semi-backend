import { createClient } from "redis";

const { REDIS_PASSWORD, REDIS_URL, REDIS_CONTAINER_NAME, NODE_ENV } =
  process.env;

const isDev = NODE_ENV === "development";
const isProd = NODE_ENV === "production";

async function connectRedis() {
  let redisClient = createClient({
    password: REDIS_PASSWORD,
    database: 1,
    url: REDIS_URL,
    // ...(isDev && { url: REDIS_URL }),
    // ...(isProd && {
    //   socket: { host: REDIS_CONTAINER_NAME },
    // }),
  });
  await redisClient.connect();
  return redisClient;
}

export default connectRedis;
