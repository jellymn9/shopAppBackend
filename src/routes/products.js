import express from "express";
import { faker } from "@faker-js/faker";

const productRouter = express.Router();

// router.use((req, res, next) => { // put auth middleware here
//     console.log('Time: ', Date.now())
//     next()
//   })

productRouter.get("/", (req, res) => {
  const products = new Array(10).fill({
    // consder using faker multiply instead
    id: faker.string.uuid(),
    product: faker.commerce.product(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
  });
  res.send({ data: JSON.stringify(products) });
});

productRouter.get("/:product", (req, res) => {
  const product = {
    id: "a501ae48-cd94-427c-8229-0d00a6993228",
    product: faker.commerce.product(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
  };
  res.send({ data: JSON.stringify(product) });
});

export default productRouter;
