import productRouter from "./products.js";
import userRouter from "./users.js";

const appRoutes = [
  { route: "/products", router: productRouter },
  { route: "/user", router: userRouter },
];

export default appRoutes;
