const { v4: uuidv4 } = require("uuid");
const posts = [];

const getPost = (req, res) => {
  const id = req.params.id;
  post = posts.find((pt) => pt.id === id);
  // TODO RETURN POST
};

// POST
const addPost = (req, res) => {
  // Get new post parameters and generate random uuid, then append.
  const postToAdd = req.params.post;
  postToAdd.id = uuidv4();
  posts.append(postToAdd);
};

// PUT
const updatePost = (req, res) => {
  const post = req.params.post;
  // Find the index of post which is to be updated and update it.
  indexToUpdate = posts.findIndex((pt) => pt.id === post.id);
  posts[indexToUpdate] = post;
};

//PATCH
const patchPost = (req, res) => {
  const post = req.params.post;
  // Find the index of post which is to be updated and update the requested part of the post.
  indexToUpdate = posts.findIndex((pt) => pt.id === post.id);
  posts[indexToUpdate] = { ...posts[indexToUpdate], ...posts };
};

// DELETE
const deletePost = (req, res) => {
  const post = req.params.post;
  // Filter posts such that the post which is to be deleted is not included.
  posts = posts.filter((pt) => pt.id !== post.id);
};

module.exports = {
  getPost,
  addPost,
  updatePost,
  patchPost,
  deletePost,
};
