const express = require("express");
const router = express.Router();
const { userAuthorization } = require("../Auth/userAuth");
const { dashboardController } = require("../controllers/dashboardcontroller");

router.get("/", userAuthorization, dashboardController);

module.exports = router;
