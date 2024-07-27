import { Request, Response, NextFunction } from "express";

import {
  RegisterUserI,
  DataMiddlewareI,
  LoginUserI,
} from "../types/reqDataTypes";
import { isEmpty } from "../utils/validators";

const dataMiddleware: DataMiddlewareI = (findError) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const dataError = findError(data);
    try {
      if (dataError) {
        throw new Error(dataError);
      }
      next();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      res.status(400).send(e?.message);
    }
  };
};

function registerUserDataError(registerData: RegisterUserI) {
  if (isEmpty(registerData.email)) {
    return "Email is missing!";
  } else if (isEmpty(registerData.password)) {
    return "Password is missing!";
  } else if (isEmpty(registerData.username)) {
    return "Username is missing!";
  }
  return;
}

function loginUser(loginData: LoginUserI) {
  if (isEmpty(loginData.password)) {
    return "Password is missing!";
  } else if (isEmpty(loginData.username)) {
    return "Username is missing!";
  }
  return;
}

export const registerDataMiddleware = dataMiddleware<RegisterUserI>(
  registerUserDataError
);
export const loginDataMiddleware = dataMiddleware(loginUser);
