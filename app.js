require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRouter = require("./routes/admin.routes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "API is Running",
  });
});

app.use(adminRouter);

app.listen(process.env.PORT, () => {
  console.log("Listening to port: 5000");
});
