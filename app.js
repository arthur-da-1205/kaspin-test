require("dotenv").config();
const express = require("express");

const app = express();

const adminRouter = require("./routes/admin.routes");

app.get("/", (req, res) => {
  res.json({
    message: "API is Running",
  });
});

app.use(adminRouter);

app.listen(process.env.PORT, () => {
  console.log("Listening to port: 5000");
});
