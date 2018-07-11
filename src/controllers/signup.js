const router = require('express').Router();

const signupService = require('../services/signup');

// adding new User
router.post('/', async (request, response) => {
  try {
    response.status(201).json(await signupService.addNewUser(request.body));
  } catch (err) {
    response.status(502).json({ err });
  }
});

module.exports = router;