//import "fs";
//require("dotenv/config");
import dotenv from "dotenv";

dotenv.config({ path: "../../../shopAppBE/.env" });

export default {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: "localhost",
    dialect: "postgres",
  },
  // "test": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_test",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // },
  // "production": {
  //   "username": "root",
  //   "password": null,
  //   "database": "database_production",
  //   "host": "127.0.0.1",
  //   "dialect": "mysql"
  // }
};
