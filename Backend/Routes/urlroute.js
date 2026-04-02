const express = require("express");
const { userAuthorization } = require("../Auth/userAuth");
const { urlController } = require("../controllers/urlcontroller");
const { redirectUrl } = require("../controllers/urlredirect");
const authorizeRoles = require("../Auth/roleauth");
const router = express.Router();
router.post(
  "/createshorturl",
  userAuthorization,
  authorizeRoles("admin", "user"),
  urlController,
);
router.get("/:shortUrl", redirectUrl);
module.exports = router;
