import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
//import { boolParser } from "express-query-boolean";

import mainErrorMiddleware from "./middlewares/errorMiddleware";
import routes from "./routes/routes";

const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());
//app.use(boolParser());

routes.forEach((router) => {
  app.use(router.route, router.router); //check if routers can be used with app.use in a different way
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(mainErrorMiddleware);
