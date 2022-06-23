declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_TYPE: "mysql";
      DATABASE_HOST: string;
      DATABASE_PORT: number;
      DATABASE_USERNAME: string;
      DATABASE_PASSWORD: string;
      DATABASE_NAME: string;
      NODE_ENV: "development" | "production";
      REDIS_PASSWORD: string;
      REDIS_URL: string;
      REDIS_CONTAINER_NAME: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
