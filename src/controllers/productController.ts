import { Request, Response } from "express";
import productService from "../services/products";

const getProducts = async (req: Request, res: Response) => {
  const { isForward } = req.body;
  try {
    const products = await productService.readProducts(isForward);

    res.status(200).send({ products });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    res.status(400).send(e?.message);
  }
};

export default { getProducts };