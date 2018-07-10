const db = require('../db.js');
const TABLE_NAME = 'posts';
const COMMENT_TABLE_NAME = 'comments';

exports.getAllPosts = (userId) => {
  return db(TABLE_NAME).select().where('user_id', userId);
}

exports.addNewPost = (data) => {
  return db(TABLE_NAME).insert(data, ['id']);
}

exports.getPost = (id) => {
  return db(TABLE_NAME).select().where('id', id)
    .then((data) => data[0]);
}

exports.updatePost = (id, data) => {
   return db(TABLE_NAME).select().where('id', id).update(data);
}

exports.deletePost = (id) => {
  return db(TABLE_NAME).select().where('id', id).del();
}

// get comments along with post and filter
exports.getPostsWithCommentsForUser = (userId) => {
  return db(TABLE_NAME).select().where('user_id', userId).innerJoin(COMMENT_TABLE_NAME, COMMENT_TABLE_NAME.postId, TABLE_NAME.id)
}

exports.getPostWithCommentsForUser = (userId, postId) => {
  return db(TABLE_NAME).select().where('user_id', userId).where('post_id', postId).innerJoin(COMMENT_TABLE_NAME, COMMENT_TABLE_NAME.postId, TABLE_NAME.id);
}