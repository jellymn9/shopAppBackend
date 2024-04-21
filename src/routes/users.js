import express from "express";
import { faker } from "@faker-js/faker";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import bodyParser from "body-parser";

import verifyToken from "../middlewares/authMiddleware.js";

const userRouter = express.Router();

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

userRouter.use("/profile", verifyToken);
userRouter.use("/login", bodyParser.json());

userRouter.post("/login", (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  const matchedUser = users.find((u) => u.username === username);
  console.log("username: ", username);
  if (!user) {
  }

  console.log("pass: ", typeof password);

  const passwordMatch = bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    res.status(401).json({ error: "Authentication failed" });
  }
  const token = jwt.sign(
    { userId: matchedUser.userId },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  res.send({ token });
});

userRouter.get("/profile", (req, res) => {
  res.send({ data: profile });
});

export default userRouter;
