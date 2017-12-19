const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.send("You are in the home directory of API my dear friend");
});

router.get("/then", (req, res) => {
  res.send("You are at then");
});

module.exports = router;
