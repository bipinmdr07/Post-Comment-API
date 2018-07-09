const db = require('../db');
const TABLE_NAME = 'comments';

exports.getAllComments = () => {
  return db(TABLE_NAME).select();
}

exports.addNewComment = (data) => {
  return db(TABLE_NAME).insert(data);
}

exports.updateComment = (id) => {
  return db(TABLE_NAME).select().where('id', id).update(data);
}

exports.deleteComment = (id) => {
  return db(TABLE_NAME).select().where('id', id).del();
}