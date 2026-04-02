const express = require("express");
const router = express.Router();
const { userAuthorization } = require("../Auth/userAuth");
const { dashboardController } = require("../controllers/dashboardcontroller");
const authorizeRoles = require("../Auth/roleauth");

router.get(
  "/",
  userAuthorization,
  authorizeRoles("admin", "user"),
  dashboardController,
);

module.exports = router;
