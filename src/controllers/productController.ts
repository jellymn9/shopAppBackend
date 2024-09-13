import { Request, Response, NextFunction } from "express";
import productService from "../services/products";
import { CustomError } from "../utils/errorHandlers/errorHandler";

const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  const { isForward, page } = req.body;
  try {
    const products = await productService.readProducts(isForward, page);

    res.status(200).send({ products });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    next(e);
    //res.status(400).send(e?.message);
  }
};

const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const product = await productService.readProduct(id);

    res.status(200).send({ product });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    //res.status(400).send(e?.message);
    //console.log("blaaaaa");
    next(new CustomError(e.message, 400));
  }
};

export default { getProducts, getProduct };
