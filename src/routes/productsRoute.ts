import express from "express";

import productController from "../controllers/productController";
import {
  getProductMiddleware,
  getProductsMiddleware,
} from "../middlewares/dataMiddleware";

const productRouter = express.Router();

productRouter.get("/", getProductsMiddleware, productController.getProducts);

productRouter.get("/:id", getProductMiddleware, productController.getProduct);

export default productRouter;
