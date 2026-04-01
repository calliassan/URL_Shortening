const express = require("express");
const { userAuthorization } = require("../Auth/userAuth");
const { urlController } = require("../controllers/urlcontroller");
const { redirectUrl } = require("../controllers/urlredirect");
const router = express.Router();
router.post("/createshorturl", userAuthorization, urlController);
router.get("/:shortUrl", redirectUrl);
module.exports = router;
