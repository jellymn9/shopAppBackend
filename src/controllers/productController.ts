import { Request, Response, NextFunction } from "express";
import productService from "../services/products";
import { CustomError } from "../utils/errorHandlers/errorHandler";
import { ControllerFnT } from "../types/types";
import { errorMapper } from "../utils/errorHandlers/errorHandler";

const controllerWrapper = (fn: ControllerFnT) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: unknown) {
      //console.log("ERROR !:", e);
      next(new CustomError(errorMapper(e), 400));
    }
  };
};

const getProducts = controllerWrapper(async (req: Request, res: Response) => {
  const { isForward, page } = req.body;
  const products = await productService.readProducts(isForward, page);
  res.status(200).send({ products });
});

const getProduct = controllerWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await productService.readProduct(id);
  res.status(200).send({ product });
});

export default { getProducts, getProduct };
