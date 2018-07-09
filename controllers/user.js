const router = require('express').Router();
const userService = require('../services/userServices');
const bcrypt = require('bcrypt');

// getting all users
router.get('/', async (request, response) => {
  try {
    response.status(200).json(await userService.getAllUsers());
  } catch (err) {
    response.status(500).json({ err });
  }
});

// adding new user
router.post('/', async (request, response) => {
  const data = request.body;
  data.password = bcrypt.hashSync(data.password, 10);
  try {
    response.status(201).json(await userService.addNewUser(data));
  } catch (err) {
    response.status(502).json({ err });
  }
});

// getting particular user
router.get('/:id', async (request, response) => {
  try {
    response.status(200).json(await userService.getUser(request.params.id));
  } catch (err) {
    response.status(404).json({ err });
  }
});

//updating particular user
router.put('/:id', async (request, response) => {
  try {
    response.status(200).json(await userService.updateUser(request.params.id, request.body));
  } catch (err) {
    response.status(304).json({ err });
  }
});

// deleting particular user
router.delete(':/id', async (request, response) => {
  try {
    response.json(await userService.deleteUser(request.params.id));
  } catch (err) {
    response.status(304).json({ err });
  }
});

module.exports = router;