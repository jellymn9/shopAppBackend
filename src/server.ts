import express from "express";
import bodyParser from "body-parser";
import * as dotenv from "dotenv";
import cors from "cors";

import mainErrorMiddleware from "./middlewares/errorMiddleware";
import routes from "./routes/routes";

const envFile = `.env.${process.env.NODE_ENV}`;
dotenv.config({ path: envFile });

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());
//app.use(boolParser());

routes.forEach((router) => {
  app.use(router.route, router.router);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(mainErrorMiddleware);
