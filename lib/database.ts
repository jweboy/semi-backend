import "reflect-metadata";
import { DatabaseType, DataSource, getConnectionManager } from "typeorm";
import { AppDataSource } from "../src/data-source";

const createDatabase = async () => {
  const appDataSource = await AppDataSource.initialize();
  return appDataSource;
};

let database: DataSource;

export const getDatabaseConnection = async () => {
  // @ts-ignore
  // console.log("default=>", database);
  try {
    if (!database) {
      database = await createDatabase();
    }
  } catch (error) {
    console.log("err->", error);
    database = await createDatabase();
    if (database) {
      console.log(333, database.isInitialized);
    }
  }

  return database;
};
