const refreshTokenModel = require('../models/RefreshToken');
const userModel = require('../models/User');
const auth = require('../utils/auth');

exports.checkForTokenInTable = async (token) => {
  const payloadDetails = await refreshTokenModel.checkForTokenInTable(token);
  const user = await userModel.getUser(payloadDetails[0].user_id)
  const username = user[0].username;
  const x = auth.createJWTToken({sessionData: {id: payloadDetails.id, username: username}});
  return {token: x};
}

exports.insertRefreshTokenInTable = (userId, token) => {
  return refreshTokenModel.insertRefreshTokenInTable(userId, token);
}

exports.deleteRefreshTokenFromTable = (userId) => {
  return refreshTokenModel.deleteRefreshTokenFromTable(userId);
}