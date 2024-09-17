import { Request, Response, NextFunction } from "express";

import {
  isInvalidEmail,
  isInvalidPassword,
  isInvalidUsername,
  isInvalidId,
} from "../utils/validators";
import { CustomError } from "../utils/errorHandler";
import {
  RegisterUserI,
  DataMiddlewareI,
  LoginUserI,
  GetProductI,
} from "../types/reqDataTypes";

const dataMiddleware: DataMiddlewareI = (findError, dataSource = "body") => {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[dataSource];
    const dataError = findError(data);
    try {
      if (dataError) {
        throw dataError;
      }
      next();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      next(new CustomError(e.message ?? e[0], 400));
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
  console.log(
    "passs: ",
    isInvalidPassword(password)?.password,
    "username: ",
    isInvalidUsername(username)?.username
  );
  return (
    isInvalidPassword(password)?.password ||
    isInvalidUsername(username)?.username
  );
}

function getProduct({ id }: GetProductI) {
  return isInvalidId(id);
}

export const registerDataMiddleware = dataMiddleware(registerUserDataError);
export const loginDataMiddleware = dataMiddleware(loginUser);
export const getProductMiddleware = dataMiddleware(getProduct, "params");
