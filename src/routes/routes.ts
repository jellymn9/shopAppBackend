import { RoutesT } from "./routesTypes.ts";

import productRouter from "./products.ts";
import userRouter from "./users.ts";

const routes: RoutesT = [
  { route: "/products", router: productRouter },
  { route: "/user", router: userRouter },
];

export default routes;
