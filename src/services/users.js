const db = require("../models/index.js");
const { v4: uuidv4 } = require("uuid");

class UserService {
  createUser = async (username, password, email) => {
    try {
      const newEntry = await db.User.create({
        id: uuidv4(),
        username,
        password,
        email,
      });
      console.log("new user entry: ", newEntry);
      return newEntry;
    } catch (e) {
      console.log("err: ", e?.name);
      if (e?.name === "SequelizeUniqueConstraintError") {
        // get to know more about sequalize errors
        const uniqueUsernameErr = new Error("Username must be unique!");
        throw uniqueUsernameErr;
      }
      //console.log("user entry error: ", e);
      throw newError("Error occurred!");
    }
  };

  getUser = async (username) => {
    try {
      const user = await db.User.findOne({
        where: { username: username },
      });
      if (!user) {
        throw new Error("User does not exist!");
      }
      return user;
    } catch (e) {
      console.log("error", e); //Map error later
      throw new Error(e);
    }
  };
}

module.exports = UserService;
