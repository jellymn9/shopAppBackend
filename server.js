const express = require("express");
const bodyParser = require("body-parser");

const appRoutes = require("./src/routes/routes.js");

const app = express();
const port = 3000;

app.use(bodyParser.json());

appRoutes.forEach((router) => {
  app.use(router.route, router.router); //check if routers can be uded with app.use in a different way
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
