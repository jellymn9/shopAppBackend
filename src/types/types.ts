import { Request, Response } from "express";

export type ControllerFnT = {
  (request: Request, response: Response): Promise<void>;
};
