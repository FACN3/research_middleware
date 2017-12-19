const express = require("express");
const router = require("./router");
const routerAuth = require("./routerAuth");
const port = 3000;
const app = express();
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.use("/api/v1", router);

app.use("/api/auth", routerAuth);

app.get("*", (req, res) => {
  res.send("Page Not Found");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`We are listeing http://localhost:${port}`);
});
