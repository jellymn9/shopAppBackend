import { Request, Response, NextFunction } from "express";

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

export type MiddlewareT = {
  (req: Request, res: Response, next: NextFunction): void;
};

type FindErrorFunctionT<A> = (a: A) => { message: string } | void;

export interface DataMiddlewareI {
  <T>(
    findError: FindErrorFunctionT<T>,
    dataSource?: "body" | "params" | "query"
  ): MiddlewareT;
}
