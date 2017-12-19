const { Router } = require("express");
const cookieParser = require("cookie-parser");
const checkAuth = require("./checkAuth");

const routerAuth = Router();

routerAuth.use(cookieParser());
routerAuth.use(checkAuth);
routerAuth.get("/", (req, res) => {
  console.log(req.cookies);
  res.send("You are in the home directory of API Auth my dear friend");
});

routerAuth.get("/then", (req, res) => {
  res.send("You are at then");
});

module.exports = routerAuth;
