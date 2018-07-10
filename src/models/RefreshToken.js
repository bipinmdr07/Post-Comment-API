const model = require('../db.js');
const TABLE_NAME = 'user_tokens';

exports.checkForTokenInTable = (token) => {
  return model(TABLE_NAME).select().where('refresh_token', token);
}

exports.insertRefreshTokenInTable = (userId, token) => {
  return model(TABLE_NAME).insert({"user_id": userId, "refresh_token": token});
}

exports.updateRefreshTokenInTable = (userId, token) => {
  return model(TABLE_NAME).select("user_id", userId).update({"user_id": userId, "refresh_token": token});
}

exports.deleteRefreshTokenFromTable = (userId) => {
  return model(TABLE_NAME).select('user_id', userId).del();
}

exports.findRefreshTokenByUserId = (userId) => {
  return model(TABLE_NAME).select('user_id', userId);
}