require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.loginAdmin = (req, res) => {
  // dummy user
  const user = {
    id: 1,
    username: "arthur",
    email: "arthur@app.com",
  };

  jwt.sign({ user }, process.env.ACCESS_TOKEN, (err, token) => {
    res.json({
      token,
    });
  });
};

exports.getData = (req, res) => {
  return res.json({
    data: "Preparing fetch data...",
  });
};
