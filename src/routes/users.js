import express from "express";
import faker from "@faker-js/faker";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";

import verifyToken from "../middlewares/authMiddleware";

const userRouter = express.Router();

const user = {
  userId: faker.string.uuid(),
  username: "Jelena", //faker.internet.userName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: bcrypt.hash(process.env.USER_PASSWORD, 10), //faker.internet.password(),
  createdAt: faker.date.past(),
};

const profile = {};

const users = [user];

userRouter.use("/profile", verifyToken);

userRouter.get("/login", (req, res) => {
  const { username, password } = req.body;
  const matchedUser = users.find((u) => u.username === username);
  if (!user) {
  }
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
