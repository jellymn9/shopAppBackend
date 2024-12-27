import { Request, Response, NextFunction } from "express";
import { ValidationReturnT } from "./types";

export interface RegisterUserI {
  username: string;
  password: string;
  email: string;
}

export interface LoginUserI {
  username: string;
  password: string;
}

export interface GetProductI {
  id: string;
}

export interface GetProductsI {
  isForward: string;
  page: string;
  skip: string;
  cursor: string;
}

export type MiddlewareT = {
  (req: Request, res: Response, next: NextFunction): void;
};

type FindErrorFunctionT<A> = (a: A) => ValidationReturnT;

export interface DataMiddlewareI {
  <T>(
    findError: FindErrorFunctionT<T>,
    dataSource?: "body" | "params" | "query"
  ): MiddlewareT;
}

export interface GetProductsBatch {
  ids: Array<string>;
}
