//const db = require("../models/index.js");
//import db from "../models/index";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

class UserService {
  prisma = new PrismaClient();

  createUser = async (username: string, password: string, email: string) => {
    try {
      const newEntry = await this.prisma.users.create({
        data: {
          id: uuidv4(),
          username,
          password,
          email,
        },
      });
      //console.log("new user entry: ", newEntry);
      return newEntry;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log("err: ", e?.name);
      if (e?.name === "SequelizeUniqueConstraintError") {
        // get to know more about sequalize errors
        const uniqueUsernameErr = new Error("Username must be unique!");
        throw uniqueUsernameErr;
      }
      throw new Error("Error occurred!");
    }
  };

  getUser = async (username: string) => {
    try {
      const user = await this.prisma.users.findUnique({
        where: { username: username },
      });
      if (!user) {
        throw new Error("User does not exist!");
      }
      return user;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      console.log("error", e); //Map error later
      throw new Error(e);
    }
  };
}

export default UserService;
