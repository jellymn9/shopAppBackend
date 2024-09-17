import { Prisma } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

import { ControllerFnT } from "../types/types";

export class CustomError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const errorMapper = (e: unknown) => {
  // improve further later...
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    return JSON.stringify(e?.meta?.message);
  }
  // if (e instanceof Prisma.PrismaClientUnknownRequestError) {
  //   return "Unknown error occured";
  // }
  if (e instanceof Error) {
    return e?.message;
  }
  return "Unknown error!";
};

export const controllerWrapper = (fn: ControllerFnT) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res);
    } catch (e: unknown) {
      next(new CustomError(errorMapper(e), 400));
    }
  };
};
