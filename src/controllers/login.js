const router = require('express').Router();
const bcrypt = require('bcrypt');

const loginServices = require('../services/login');
const auth = require('../utils/auth');

router.post('/', async (request, response) => {
  try {
    const tokens = await loginServices.checkForUser(request.body);
    response.status(200).json(tokens);
  } catch (err) {
    response.status(404).json({message: "Invalid User Credentials"});
  }
});

module.exports = router;