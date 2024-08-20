import express, { Request, Response } from "express";
import { faker } from "@faker-js/faker";
import productController from "../controllers/productController";

const productRouter = express.Router();

productRouter.get("/", productController.getProducts);

productRouter.get("/:product", (req: Request, res: Response) => {
  const product = {
    id: "a501ae48-cd94-427c-8229-0d00a6993228",
    product: faker.commerce.product(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
  };
  res.send({ data: JSON.stringify(product) });
});

export default productRouter;
