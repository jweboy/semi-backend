import "reflect-metadata";
import { DataSource } from "typeorm";
import Menu from "./entity/Menu";
import Signin from "./entity/Signin";
import Submenu from "./entity/Submenu";

const {
  DATABASE_TYPE,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_NAME,
} = process.env;

export const AppDataSource = new DataSource({
  type: DATABASE_TYPE,
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  username: DATABASE_USERNAME,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [Menu, Submenu, Signin],
  migrations: [],
  subscribers: [],
});
