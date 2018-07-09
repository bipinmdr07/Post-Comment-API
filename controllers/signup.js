const router = require('express').Router();
const bcrypt = require('bcrypt');

const userService = require('../services/userServices');

router.post('/', async (request, response) => {
  const data = request.body;
  data.password = bcrypt.hashSync(data.password, 10);
  try {
    console.log(data);
    const x = await userService.addNewUser(data);
    response.statusCode(201).json(x);
  } catch (err) {
    response.status(502).json({ err });
  }
});

module.exports = router;