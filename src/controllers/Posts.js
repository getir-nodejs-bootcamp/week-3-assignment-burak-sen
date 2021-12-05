const postService = require("../services/Posts");
const getPost = (req, res) => {
  postService
    .getPost(req.body.id)
    .then((message) => {
      res.status(200).send(message);
    })
    .catch((message) => {
      res.status(404).send(message);
    });
};

// POST
const addPost = (req, res) => {
  // Get new post parameters and generate random uuid, then append.
  postService
    .addPost(req.body)
    .then((message) => {
      res.status(200).send(message);
    })
    .catch((message) => {
      res.status(404).send(message);
    });
};

// PUT
const updatePost = (req, res) => {
  postService
    .updatePost(req.body)
    .then((message) => {
      res.status(200).send(message);
    })
    .catch((message) => {
      res.status(404).send(message);
    });
};

//PATCH
const patchPost = (req, res) => {
  postService
    .getPost(req.body)
    .then((message) => {
      res.status(200).send(message);
    })
    .catch((message) => {
      res.status(404).send(message);
    });
};

// DELETE
const deletePost = (req, res) => {
  postService
    .deletePost(req.body.id)
    .then((message) => {
      res.status(200).send(message);
    })
    .catch((message) => {
      res.status(404).send(message);
    });
};

module.exports = {
  getPost,
  addPost,
  updatePost,
  patchPost,
  deletePost,
};
