import express from "express";

import productController from "../controllers/productController";
import {
  getProductMiddleware,
  getProductsBatchMiddleware,
  getProductsMiddleware,
} from "../middlewares/dataMiddleware";

const productRouter = express.Router();

productRouter.get("/", getProductsMiddleware, productController.getProducts);

productRouter.get("/:id", getProductMiddleware, productController.getProduct);

productRouter.post(
  "/",
  getProductsBatchMiddleware,
  productController.getProductsBatch
);

export default productRouter;
