const userModel = require('../models/User');

const getAllUsers = () => {
  return userModel.getAllUsers();
}

const addNewUser = (data) => {
  return userModel.addNewUser(data)
}

const getUser = (id) => {
  return userModel.getUser(id);
}

const updateUser = (id) => {
  return userModel.updateUser(id);
}

const deleteUser = (id) => {
  return userModel.deleteUser(id);
}

module.exports = {
  getAllUsers,
  addNewUser,
  getUser,
  updateUser,
  deleteUser
}