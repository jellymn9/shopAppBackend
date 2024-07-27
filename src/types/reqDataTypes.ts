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

// export type ReqDataT = RegisterUserI | LoginUserI;

export type MiddlewareT = {
  (req: Request, res: Response, next: NextFunction): void;
};

export interface DataMiddlewareI {
  <T>(findError: (data: T) => string | void): MiddlewareT;
}
