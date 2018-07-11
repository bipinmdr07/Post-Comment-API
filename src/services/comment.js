const commentModel = require('../models/Comment');

/**
 * 
 * @param {number} postId 
 * @param {number} userId 
 * 
 * @returns promise
 */
const getAllComments = (postId, userId) => {
  return commentModel.getAllComments(postId, userId);
}

/**
 * 
 * @param {number} postId 
 * @param {object} data 
 * @param {number} userId 
 * 
 * @returns promise
 */
const addNewComment = (postId, data, userId) => {
  return commentModel.addNewComment(postId, data, userId);
}

/**
 * 
 * @param {number} id 
 * @param {object} data 
 * @param {number} userId 
 * 
 * @returns promise
 */
const updateComment = (id, data, userId) => {
  return commentModel.updateComment(id, data, userId);
}

/**
 * 
 * @param {number} id 
 * @param {number} userId 
 * 
 * @returns promise
 */
const deleteComment = (id, userId) => {
  return commentModel.deleteComment(id, userId);
}

// exporting the functions
module.exports = {
  getAllComments,
  addNewComment,
  updateComment,
  deleteComment
}