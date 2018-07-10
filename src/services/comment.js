const commentModel = require('../models/Comment');

const getAllComments = (postId) => {
  return commentModel.getAllComments(postId);
}

const addNewComment = (postId, data) => {
  return commentModel.addNewComment(data);
}

const updateComment = (id, data) => {
  return commentModel.updateComment(id, data);
}

const deleteComment = (id) => {
  return commentModel.deleteComment(id);
}

module.exports = {
  getAllComments,
  addNewComment,
  updateComment,
  deleteComment
}