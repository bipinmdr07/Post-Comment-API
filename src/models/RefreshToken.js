const model = require('../db.js');
const TABLE_NAME = 'user_tokens';

const checkForTokenInTable = (token) => {
  return model(TABLE_NAME)
    .select()
    .where('refresh_token', token);
}

const insertRefreshTokenInTable = (userId, token) => {
  return model(TABLE_NAME)
    .insert({"user_id": userId, "refresh_token": token});
}

const updateRefreshTokenInTable = (userId, token) => {
  return model(TABLE_NAME)
    .select("user_id", userId)
    .update({"user_id": userId, "refresh_token": token});
}

const deleteRefreshTokenFromTable = (userId) => {
  return model(TABLE_NAME)
    .select('user_id', userId).del();
}

module.exports = {
  checkForTokenInTable,
  insertRefreshTokenInTable,
  updateRefreshTokenInTable
}

exports.findRefreshTokenByUserId = (userId) => {
  return model(TABLE_NAME).select('user_id', userId);
}