const router = require('express').Router();
const refreshTokenServices = require('../services/refreshToken');

router.post('/', async (req, res) => {
  const { refreshToken } = req.body;
  try {
    res.status(200).json(await refreshTokenServices.checkForTokenInTable(refreshToken));
  } catch (err) {
    res.status(404).json({err});
  }
});

module.exports = router;