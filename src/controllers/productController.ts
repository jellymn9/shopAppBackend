import { Request, Response } from "express";

import productService from "../services/products";
import { controllerWrapper } from "../utils/errorHandler";
import { mapElementsToNumbers } from "../utils/helpers";

const getProducts = controllerWrapper(async (req: Request, res: Response) => {
  const { isForward, page, skip, cursor } = req.query;

  const products = await productService.readProducts(
    !!isForward,
    Number(page),
    mapElementsToNumbers(skip as Array<string>),
    cursor && String(cursor)
  );
  res.status(200).send({ products });
});

const getProduct = controllerWrapper(async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await productService.readProduct(id);
  res.status(200).send({ product });
});

export default { getProducts, getProduct };
