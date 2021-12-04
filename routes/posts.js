const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController.js");
const auth = require("../auth");

router.get("/", function (req, res, next) {
  res.redirect("/");
});

router.get("/posts/:id", auth.requiresLogin, postController.getPost);

router.post("/add", auth.requiresLogin, postController.addPost);

router.get("/edit/:id", auth.requiresLogin, postController.updatePost);

router.post("/replace/:id", auth.requiresLogin, postController.patchPost);

router.get("/delete/:id", auth.requiresLogin, postController.deletePost);

router.get("/get/:id", auth.requiresLogin, postController.getPost);

module.exports = router;
