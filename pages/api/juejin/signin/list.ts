// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getDatabaseConnection } from "../../../../lib/database";
import Signin from "../../../../src/entity/Signin";

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<ResponseByPagination<Signin>>
) {
  try {
    const db = await getDatabaseConnection();
    const repository = db.getRepository(Signin);
    const [items, total] = await repository
      .createQueryBuilder()
      .orderBy("signin.update_time", "DESC")
      .getManyAndCount();

    res.status(200).json({
      data: { items, total },
      code: 0,
    });
  } catch (err) {
    res.status(500).json({ data: null, code: 10, msg: "服务器错误" });
  }
}
