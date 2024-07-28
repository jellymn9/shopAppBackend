import express, { Request, Response } from "express";
import "dotenv/config";

import userController from "../controllers/userController";
import verifyToken from "../middlewares/authMiddleware";
import {
  registerDataMiddleware,
  loginDataMiddleware,
} from "../middlewares/dataMiddleware";

const userRouter = express.Router();

const profile = {};

userRouter.route("/login");
userRouter.route("/register");

userRouter.use("/profile", verifyToken);

userRouter.post(
  "/register",
  registerDataMiddleware,
  userController.registerUser
);

userRouter.post("/login", loginDataMiddleware, userController.loginUser);

userRouter.get("/profile", (req: Request, res: Response) => {
  res.send({ data: profile });
});

export default userRouter;
