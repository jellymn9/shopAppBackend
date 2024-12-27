import { RoutesT } from "./routesTypes";
import productRouter from "./productsRoute";
import userRouter from "./usersRoute";

const routes: RoutesT = [
  { route: "/products", router: productRouter },
  { route: "/user", router: userRouter },
];

export default routes;
