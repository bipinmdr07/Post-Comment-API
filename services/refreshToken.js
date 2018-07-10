const router = require('express').Router();
const refreshTokenServices = require('../services/refreshToken');

exports.checkForTokenInTable = (token) => {
  return refreshTokenServices.checkForTokenInTable(token);
}

exports.insertRefreshTokenInTable = (userId, token) => {
  return refreshTokenServices.insertRefreshTokenInTable(userId, token);
}

exports.deleteRefreshTokenFromTable = (userId) => {
  return refreshTokenServices.deleteRefreshTokenFromTable(userId);
}