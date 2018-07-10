const router = require('express').Router();
const refreshTokenServices = require('../services/refreshToken');
const userTokensModel = require('../models/RefreshToken');

router.post('/', async (req, res) => {
  const { refreshToken } = req.body;

  return await refreshTokenServices.checkForTokenInTable(refreshToken);
  // creturn a;
})