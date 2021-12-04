const express = require("express");
const router = express.Router();
const postController = require("../controllers/posts");

/* GET home page. */
router.get("/", postController.getPostsForHomePage);

// GET /login
router.get("/login", function (req, res, next) {
  res.render("loginform.html");
});

// GET /login
router.post("/login", function (req, res, next) {
  if (req.body.username && req.body.password) {
    console.log("username", req.body.username);
    User.authenticate(
      req.body.username,
      req.body.password,
      function (error, user) {
        if (error || !user) {
          let err = new Error("Wrong username or password.");
          err.status = 401;
          return next(err);
        } else {
          req.session.userId = user._id;
          return res.redirect("/");
        }
      }
    );
  } else {
    let err = new Error("All fields required.");
    err.status = 400;
    return next(err);
  }
});
