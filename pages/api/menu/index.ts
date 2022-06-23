import { NextApiResponse } from "next";
import { getDatabaseConnection } from "../../../lib/database";
import Menu from "../../../src/entity/Menu";

const handler = async (_, res: NextApiResponse) => {
  const db = await getDatabaseConnection();
  const [items, total] = await db
    .getRepository(Menu)
    .createQueryBuilder("menu")
    .leftJoinAndSelect("menu.items", "submenu") // 查找关联表
    .orderBy("menu.id", "ASC")
    .getManyAndCount();

  res.json({ data: { total, items } });
};

export default handler;
