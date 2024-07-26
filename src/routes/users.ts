import express, { Request, Response } from "express";
// import faker from "@faker-js/faker";
import "dotenv/config";

import userController from "../controllers/userController";
import verifyToken from "../middlewares/authMiddleware";

const userRouter = express.Router();

const profile = {};

userRouter.route("/login");
userRouter.route("/register");

userRouter.use("/profile", verifyToken);

userRouter.post("/register", userController.registerUser);

userRouter.post("/login", userController.loginUser);

userRouter.get("/profile", (req: Request, res: Response) => {
  res.send({ data: profile });
});

export default userRouter;
