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

export type MiddlewareT = {
  (req: Request, res: Response, next: NextFunction): void;
};

type FindErrorFunctionT<A> = (a: A) => string | void;

export interface DataMiddlewareI {
  <T>(findError: FindErrorFunctionT<T>): MiddlewareT;
}
