const db = require('../db.js');
const TABLE_NAME = 'posts';

exports.getAllPosts = () => {
  return db(TABLE_NAME).select()
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