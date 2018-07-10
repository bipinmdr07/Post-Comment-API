const model = require('../db.js');
const TABLE_NAME = 'user_tokens';

exports.checkForTokenInTable = (token) => {
  return model(TABLE_NAME).select().where('token', token);
}

exports.insertRefreshTokenInTable = (userId, token) => {
  return model(TABLE_NAME).insert({userId: userId, token: token});
}

exports.deleteRefreshTokenFromTable = (userId) => {
  return model(TABLE_NAME).select('user_id', userId).del();
}