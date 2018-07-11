const refreshTokenModel = require('../models/RefreshToken');
const userModel = require('../models/User');
const auth = require('../utils/auth');

/**
 * Check if the refresh token is being stored in the database before sending another token to requested user,
 * if refresh token does not exist throw an error,
 * else extract the user details from the refresh token, and generate new access token and send to user
 * 
 * @param {String} token
 * 
 * @returns Object 
 */
const checkForTokenInTable = async (token) => {
  const payloadDetails = await refreshTokenModel.checkForTokenInTable(token);
  const user = await userModel.getUser(payloadDetails[0].user_id)
  const username = user[0].username;
  const x = auth.createJWTToken({sessionData: {id: payloadDetails.id, username: username}});
  return {token: x};
}

/**
 * 
 * @param {number} userId 
 * @param {String} token 
 * 
 * @returns promise
 */
const insertRefreshTokenInTable = (userId, token) => {
  return refreshTokenModel.insertRefreshTokenInTable(userId, token);
}

const updateRefreshTokenInTable = (userId, token) => {
  return refreshTokenModel.select().where("user_id", userId).update(token);
}

/**
 * 
 * @param {Integer} userId 
 * 
 * @returns Promise
 */
const deleteRefreshTokenFromTable = (userId) => {
  return refreshTokenModel.deleteRefreshTokenFromTable(userId);
}

module.exports = {
  checkForTokenInTable,
  insertRefreshTokenInTable,
  deleteRefreshTokenFromTable
}