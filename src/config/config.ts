import dotenv from "dotenv";
import { Dialect } from "sequelize";

dotenv.config({ path: "../.env" });

type DbConnectionT = {
  development: {
    port?: number;
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
  };
};

const connection: DbConnectionT = {
  development: {
    username: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_DATABASE || "",
    host: "localhost",
    dialect: "postgres",
  },
};

export default connection;
