const db = require('../db');
const TABLE_NAME = 'users';

exports.getAllUsers = () => {
  return db(TABLE_NAME).select();
}

exports.addNewUser = (data) => {
  return db(TABLE_NAME).insert(data, 'id');
}

exports.getUser = (id) => {
  return db(TABLE_NAME).select().where('id', id);
}

exports.updateUser = (id, data) => {
  return db(TABLE_NAME).select().where('id', id).update(data);
}

exports.deleteUser = (id, data) => {
  return db(TABLE_NAME).select().where('id', id).del();
}