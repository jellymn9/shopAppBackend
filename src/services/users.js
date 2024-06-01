//import user from "../database/models/user.cjs";
import db from "../database/models/index.cjs";

//const sequelize = new Sequelize();
console.log("db: ", db);

class UserService {
  //userModel = user();

  createUser = async (username, password, email) => {
    try {
      const newEntry = await db.User.create({
        username,
        password,
        email,
      });
      console.log("new user entry: ", newEntry);
      return newEntry;
    } catch (e) {
      console.log("user entry error: ", e);
      return e; //add error mapper
    }
  };
}

export default UserService;
