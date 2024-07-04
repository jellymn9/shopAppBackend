import { RoutesT } from "./routesTypes";

import productRouter from "./products";
import userRouter from "./users";

const routes: RoutesT = [
  { route: "/products", router: productRouter },
  { route: "/user", router: userRouter },
];

export default routes;
