const checkAuth = (req, res, next) => {
  if (req.cookies.Logged === "mySecret") {
    return next();
  }
  res.end("You are not logged in my dear friend!");
};

module.exports = checkAuth;
