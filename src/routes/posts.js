const express = require("express");
const router = express.Router();
const postController = require("../controllers/Posts.js");
const authenticateToken = require("../middlewares/auth");
const logger = require("../middlewares/logger");

router.get("/", logger, authenticateToken, postController.getPost);

router.post("/add", logger, authenticateToken, postController.addPost);

router.put("/replace", logger, authenticateToken, postController.updatePost);

router.patch("/edit", logger, authenticateToken, postController.patchPost);

router.delete("/delete", logger, authenticateToken, postController.deletePost);

module.exports = router;
