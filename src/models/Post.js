const db = require('../db.js');
const TABLE_NAME = 'posts';
// const COMMENT_TABLE_NAME = 'comments';

const getAllPosts = (userId) => {
  return db(TABLE_NAME)
    .select()
    .where('user_id', userId);
}

const addNewPost = (userId, data) => {
  const { post } = data;
  return db(TABLE_NAME)
    .insert({ 
      post: post,
      user_id: userId
    }, ['id']);
}

const getPost = (id, userId) => {
  return db(TABLE_NAME)
    .select()
    .where({ id: id, user_id: userId })
    .then((data) => data[0]);
}

const updatePost = (id, data, userId) => {
  return db(TABLE_NAME)
    .select().where({
      id: id,
      user_id: userId
    })
    .update(data);
}

const deletePost = (id, userId) => {
  return db(TABLE_NAME)
    .select()
    .where({
      id: id,
      user_id: userId
    })
    .del();
}

module.exports = {
  getAllPosts,
  addNewPost,
  getPost,
  updatePost,
  deletePost
}