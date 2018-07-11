const postModel = require('../models/Post');

const getAllPosts = (userId) => {
  return postModel.getAllPosts(userId);
}

const addNewPost = (userId, data) => {
  return postModel.addNewPost(userId, data);
}

const getPost = (id, userId) => {
  return postModel.getPost(id, userId);
}

const updatePost = (id, data, userId) => {
  return postModel.updatePost(id, data, userId);
}

const deletePost = (id, userId) => {
  return postModel.deletePost(id, userId);
}

module.exports = {
  getAllPosts,
  addNewPost,
  getPost,
  updatePost,
  deletePost
}