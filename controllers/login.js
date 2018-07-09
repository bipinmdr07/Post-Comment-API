const router = require('express').Router();
const bcrypt = require('bcrypt');

const loginServices = require('../services/login');
const auth = require('../utils/auth');

router.post('/', async (request, response) => {
  const {username, password} = request.body;
  const user = await loginServices.checkForUser(username);
  let payload = null;
  if (bcrypt.compare(password, user[0].password)) {
    payload = {id: user[0].id, username: user[0].username}
  }

  try {
    response.status(200).json({
      success: true,
      token: auth.createJWTToken({
        sessionData: payload,
        validTimePeriod: 60
      }),
      refreshToken: auth.createJWTToken({
        sessionData: payload
      })
    })
  } catch (err) {
    response.status(500).json({ err });
  }
});

module.exports = router;