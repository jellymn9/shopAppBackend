const express = require("express");
const { faker } = require("@faker-js/faker");
//import * as bcrypt from "bcrypt"; //change this
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv/config");
const bodyParser = require("body-parser");

//const userService = require("../services/users.js");
const UserController = require("../controllers/userController.js");

const verifyToken = require("../middlewares/authMiddleware.js");

//const userServiceInstance = new userService();
const userController = new UserController();

const userRouter = express.Router(); //use Router class later

const user = {
  userId: faker.string.uuid(),
  username: "Jelena", //faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: process.env.USER_PASSWORD, // bcrypt.hash(process.env.USER_PASSWORD, 10), use this for storing in db
  //faker.internet.password(),
  createdAt: faker.date.past(),
};

console.log("bla: ");

const profile = {};

const users = [user];

userRouter.route("/login");
userRouter.route("/register");

userRouter.use("/profile", verifyToken);

userRouter.post("/register", userController.registerUser);

userRouter.post("/login", userController.loginUser);

userRouter.get("/profile", (req, res) => {
  res.send({ data: profile });
});

module.exports = userRouter;
