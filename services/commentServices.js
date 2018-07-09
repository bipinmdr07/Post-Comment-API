const Comment = require('../models/Comment');

exports.getAllComments = (postId) => {
  let comments = Comment.getAllComments(postId);
  return comments;
}

exports.addNewComment = (postId, data) => {
  let comment = Comment.addNewComment(data);
  return comment;
}

exports.updateComment = (id, data) => {
  let comment = Comment.updateComment(id, data);
  return comment;
}

exports.deleteComment = (id) => {
  let comment = Comment.deleteComment(id);
  return comment;
}