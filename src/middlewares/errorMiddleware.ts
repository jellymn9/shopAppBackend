import { Request, Response, NextFunction } from "express";

import { CustomError } from "../utils/errorHandlers/errorHandler";

export default (
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  if (
    err instanceof CustomError &&
    err.statusCode >= 400 &&
    err.statusCode < 500
  ) {
    res.status(err.statusCode).send(err.message);
    return;
  }
  console.error("main error middleware:", err);
  res.status(500).send("Something broke!");
};
