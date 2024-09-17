import express from "express";

import productController from "../controllers/productController";
import { getProductMiddleware } from "../middlewares/dataMiddleware";

const productRouter = express.Router();

productRouter.get("/", productController.getProducts);

productRouter.get("/:id", getProductMiddleware, productController.getProduct);

export default productRouter;
