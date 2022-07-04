require("dotenv").config();
const jwt = require("jsonwebtoken");
const { curly } = require("node-libcurl");

const url = "https://kasirpintar.co.id/allAddress.txt";

exports.loginAdmin = (req, res) => {
  // dummy user
  const user = {
    id: 1,
    username: "arthur",
    email: "arthur@app.com",
  };

  jwt.sign({ user }, process.env.ACCESS_TOKEN, (err, token) => {
    res.json({
      user,
      token,
    });
  });
};

exports.getData = async (req, res) => {
  const { statusCode, data, headers } = await curly.get(url);
  res.json({ data });
};
