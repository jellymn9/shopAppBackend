import express from "express";
import productController from "../controllers/productController";

const productRouter = express.Router();

productRouter.get("/", productController.getProducts);

productRouter.get("/:id", productController.getProduct);

export default productRouter;
