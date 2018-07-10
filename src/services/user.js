const User = require('../models/User');

exports.getAllUsers = () => {
  let response = User.getAllUsers();
  return response;
}

exports.addNewUser = (data) => {
  let response = User.addNewUser(data)
  return response;
}

exports.getUser = (id) => {
  let response = User.getUser(id);
  return response;
}

exports.updateUser = (id) => {
  let response = User.updateUser(id);
  return response;
}

exports.deleteUser = (id) => {
  let response = User.deleteUser(id);
  return response;
}