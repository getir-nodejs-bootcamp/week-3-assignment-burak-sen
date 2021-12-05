const { v4: uuidv4 } = require("uuid");
const { posts } = require("../../fake-db/posts");

const getPost = (id) => {
  return new Promise((resolve, reject) => {
    const post = posts.find((pt) => pt.id === id);
    if (post) resolve(post);
    reject({ message: "Requested post has not been found." });
  });
};

const addPost = (postToAdd) => {
  // Get new post parameters and generate random uuid, then push.
  return new Promise((resolve, reject) => {
    const postIndex = posts.findIndex(
      (post) =>
        post.title === postToAdd.title && post.author === postToAdd.author
    );
    if (postIndex != -1)
      reject({
        message: `An author can not have two posts with the same title.`,
      });

    postToAdd.id = uuidv4();
    posts.push(postToAdd);
    console.log("posts", posts);
    resolve({ message: `New post with title ${postToAdd.title} is added.` });
  });
};

const updatePost = (post) => {
  // Find the index of post which is to be updated and update it.
  return new Promise((resolve, reject) => {
    indexToUpdate = posts.findIndex((pt) => pt.id === post.id);
    if (indexToUpdate == -1)
      reject({ message: `Post with ${post.id} has not been found.` });
    posts[indexToUpdate] = post;
    resolve({ message: `Post with ${post.id} is updated.` });
  });
};

const patchPost = (post) => {
  // Find the index of post which is to be updated and update the requested part of the post.
  return new Promise((resolve, reject) => {
    indexToUpdate = posts.findIndex((pt) => pt.id === post.id);
    if (indexToUpdate == -1)
      reject({ message: `Post with ${post.id} has not been found.` });
    posts[indexToUpdate] = { ...posts[indexToUpdate], ...posts };
    resolve({ message: `Post with ${post.id} is updated.` });
  });
};

const deletePost = (id) => {
  // Filter posts such that the post which is to be deleted is not included.
  return new Promise((resolve, reject) => {
    const postIndex = posts.findIndex((pt) => pt.id === id);
    if (postIndex === -1)
      reject({ message: `Post with ${id} does not exist.` });
    posts.splice(postIndex);
    resolve({ message: `Post with ${id} is deleted` });
  });
};

module.exports = {
  getPost,
  addPost,
  updatePost,
  patchPost,
  deletePost,
};
