const express = require("express");
const router = express.Router();
const loginController = require("../controllers/Login.js");
const logger = require("../middlewares/logger");

router.post("/", logger, loginController.login);

module.exports = router;
