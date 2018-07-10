const Post = require('../models/Post');

exports.getAllPosts = (userId) => {
  let posts = Post.getAllPosts(userId);
  return posts
}

exports.addNewPost = (userId, data) => {
  let post = Post.addNewPost(data);
  return post;
}

exports.getPost = (id) => {
  let post = Post.getPost(id);
  return post;
}

exports.updatePost = (id, data) => {
  let post = Post.updatePost(id, data);
  return post;
}

exports.deletePost = (id) => {
  let post = Post.deletePost(id);
  return post;
}

exports.getPostsWithCommentsForUser = (userId) => {
  let postsComments = Post.getPostsWithCommentsForUser(userId);
  return postsComments;
}

exports.getPostWithCommentsForUser = (userId, postId) => {
  let postComments = Post.getPostWithCommentsForUser(userId, postId);
  return postComments;
}