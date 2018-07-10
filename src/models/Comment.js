const db = require('../db');
const TABLE_NAME = 'comments';

const getAllComments = () => {
  return db(TABLE_NAME)
    .select();
}

const addNewComment = (data) => {
  return db(TABLE_NAME)
    .insert(data);
}

const updateComment = (id) => {
  return db(TABLE_NAME)
    .select()
    .where('id', id)
    .update(data);
}

const deleteComment = (id) => {
  return db(TABLE_NAME)
    .select()
    .where('id', id)
    .del();
}

module.exports = {
  getAllComments,
  addNewComment,
  updateComment,
  deleteComment
}