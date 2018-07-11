const db = require('../db');
const TABLE_NAME = 'comments';

const getAllComments = (postId) => {
  return db(TABLE_NAME)
    .select()
    .where('post_id', postId);
}

const addNewComment = (postId, data, userId) => {
  const { comment } = data;
  console.log(comment)
  return db(TABLE_NAME)
    .insert({ comment: comment, post_id: postId, user_id: userId });
}

const updateComment = (id, data, userId) => {
  return db(TABLE_NAME)
    .select()
    .where({id: id, user_id: userId})
    .update(data);
}

const deleteComment = (id, userId) => {
  return db(TABLE_NAME)
    .select()
    .where({id: id, user_id, userId})
    .del();
}

module.exports = {
  getAllComments,
  addNewComment,
  updateComment,
  deleteComment
}