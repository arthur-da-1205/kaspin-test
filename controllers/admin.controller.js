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
  const result = JSON.parse(data);
  res.send(result);
};

exports.getKotaId = async (req, res) => {
  const id = req.body.kota_id;
  const { statusCode, data, headers } = await curly.get(url);
  const result = JSON.parse(data);

  const filterKota = result.filter((x) => x.address_kecamatan.kota_id === id);
  console.log(filterKota);
};
