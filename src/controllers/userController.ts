import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { controllerWrapper } from "../utils/errorHandler";
import userService from "../services/usersService";

const registerUser = controllerWrapper(async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await userService.createUser(username, hashedPassword, email);

  res.status(200).send({ user });
});

const loginUser = controllerWrapper(async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await userService.getUser(username);
  const hashedPassword = user.password;
  const isPasswordMatch = await bcrypt.compare(password, hashedPassword);
  if (!isPasswordMatch) {
    throw new Error("Authentication failed!");
  }
  const token = jwt.sign(
    {
      userId: user.id,
    },
    process.env.JWT_SECRET || "",
    {
      expiresIn: "1h",
    }
  );
  res.send({ token });
});

export default { loginUser, registerUser };
