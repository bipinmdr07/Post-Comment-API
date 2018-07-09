const User = require('../models/User');

exports.checkForUser = (username) => {
  return User.checkForUser(username);
}