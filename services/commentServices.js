const db = require('../db');

exports.getAllComments = (postId) => {
  let comments = db('comments').select().where('post_id', [postId]);
}

exports.addNewComment = (postId, data) => {
  let comment = db('comments').insert(data, ['id', 'comment'])
}

exports.updateComment = (id, data) => {
  let comment = db('comments').where('id', id).update(data, 'id');
}

exports.deleteComment = (id) => {
  let comment = db('comments').where('id', id).del();
}