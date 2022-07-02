require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.verifiToken = (req, res, next) => {
  // Get Headers
  const bearerHeader = req.headers.authorization;

  if (typeof bearerHeader === "undefined") {
    return res.sendStatus(403);
  }

  const bearerToken = bearerHeader.split(" ")[1];
  jwt.verify(bearerToken, process.env.ACCESS_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
  });

  next();
};
