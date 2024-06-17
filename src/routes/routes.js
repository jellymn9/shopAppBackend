const productRouter = require("./products.js");
const userRouter = require("./users.js");

const appRoutes = [
  { route: "/products", router: productRouter },
  { route: "/user", router: userRouter },
];

module.exports = appRoutes;
