const db = require('../db');

exports.getAllPosts = (userId) => {
  let posts = db('posts').select().where('user_id', userId);
}

exports.addNewPost = (userId, data) => {
  let post = db('posts').insert(data, ['id', 'post']);
}

exports.getPost = (id) => {
  let post = db('posts').select().where('id', id);
}

exports.updatePost = (id, data) => {
  let post = db('posts').select().where('id', id).update(data, [id]);
}

exports.deletePost = (id) => {
  let post = db('posts').select().where('id', id).del();
}