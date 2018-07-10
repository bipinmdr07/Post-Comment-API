const refreshTokenModel = require('../models/RefreshToken');
const userModel = require('../models/User');
const auth = require('../utils/auth');

const checkForTokenInTable = async (token) => {
  const payloadDetails = await refreshTokenModel.checkForTokenInTable(token);
  const user = await userModel.getUser(payloadDetails[0].user_id)
  const username = user[0].username;
  const x = auth.createJWTToken({sessionData: {id: payloadDetails.id, username: username}});
  return {token: x};
}

const insertRefreshTokenInTable = (userId, token) => {
  return refreshTokenModel.insertRefreshTokenInTable(userId, token);
}

const updateRefreshTokenInTable = (userId, token) => {
  return refreshTokenModel.select().where("user_id", userId).update(token);
}

const deleteRefreshTokenFromTable = (userId) => {
  return refreshTokenModel.deleteRefreshTokenFromTable(userId);
}

module.exports = {
  checkForTokenInTable,
  insertRefreshTokenInTable,
  deleteRefreshTokenFromTable
}