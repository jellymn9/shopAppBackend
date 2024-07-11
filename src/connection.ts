import { Sequelize } from "sequelize";
import dbConfig from "./config/config";

const sequelizeConnection = new Sequelize(
  dbConfig.development.database,
  dbConfig.development.username,
  dbConfig.development.password,
  dbConfig.development
);

export default sequelizeConnection;
