const db = require('../db');
const TABLE_NAME = 'users';

const getAllUsers = () => {
  return db(TABLE_NAME)
    .select();
}

const addNewUser = (data) => {
  return db(TABLE_NAME)
    .insert(data, 'id');
}

const getUser = (id) => {
  return db(TABLE_NAME)
    .select()
    .where('id', id);
}

const updateUser = (id, data) => {
  return db(TABLE_NAME)
    .select()
    .where('id', id)
    .update(data);
}

const deleteUser = (id, data) => {
  return db(TABLE_NAME)
    .select()
    .where('id', id)
    .del();
}

const checkForUser = (username) => {
  return db(TABLE_NAME)
    .select()
    .where('username', username);
}

module.exports = {
  getAllUsers,
  addNewUser,
  getUser,
  updateUser,
  deleteUser, checkForUser
}