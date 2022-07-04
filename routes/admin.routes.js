const express = require("express");

const router = express.Router();

const middleware = require("../middlewares/admin.middleware");
const adminController = require("../controllers/admin.controller");

router.post("/api/admin-login", adminController.loginAdmin);

router.get(
  "/api/admin-data",
  [middleware.verifiToken],
  adminController.getData
);

router.get(
  "/api/data-kotaid",
  [middleware.verifiToken],
  adminController.getKotaId
);

module.exports = router;
