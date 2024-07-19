import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserService from "../services/users.ts";

class UserController {
  userService = new UserService();

  registerUser = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.userService.createUser(
        username,
        hashedPassword,
        email
      );

      res.status(200).send({ user });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      //change this later
      res.status(400).send(e?.message); //422 status code could work too
    }
  };

  loginUser = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    try {
      const user = await this.userService.getUser(username);
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
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      // change type later
      res.status(401).send(e?.message); //check out status code
    }
  };
}

export default UserController;
