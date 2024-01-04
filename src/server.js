import express from "express";

import appRoutes from "./routes/routes.js";

const app = express();
const port = 3000;

appRoutes.forEach((router) => {
  app.use(router.route, router.router);
});

// app.use('/birds', birds)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
