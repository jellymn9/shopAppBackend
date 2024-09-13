import { Request, Response, NextFunction } from "express";

import {
  isInvalidEmail,
  isInvalidPassword,
  isInvalidUsername,
} from "../utils/validators";
import { CustomError } from "../utils/errorHandlers/errorHandler";
import {
  RegisterUserI,
  DataMiddlewareI,
  LoginUserI,
} from "../types/reqDataTypes";

const dataMiddleware: DataMiddlewareI = (findError) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req.body;
    const dataError = findError(data);
    try {
      if (dataError) {
        throw dataError;
      }
      next();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      // res.status(400).send(e);
      next(new CustomError(e.message, 400));
    }
  };
};

function registerUserDataError({ username, password, email }: RegisterUserI) {
  return (
    isInvalidEmail(email)?.email ||
    isInvalidPassword(password)?.password ||
    isInvalidUsername(username)?.username
  );
}

function loginUser({ username, password }: LoginUserI) {
  return (
    isInvalidPassword(password)?.password ||
    isInvalidUsername(username)?.username
  );
}

export const registerDataMiddleware = dataMiddleware(registerUserDataError);
export const loginDataMiddleware = dataMiddleware(loginUser);
