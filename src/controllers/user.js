const router = require('express').Router();
const userService = require('../services/user');
const bcrypt = require('bcrypt');

// getting all users
router.get('/', async (request, response) => {
  try {
    response.status(200).json(await userService.getAllUsers());
  } catch (err) {
    response.status(500).json({ error: "Error getting users" });
  }
});

// getting particular user
router.get('/:id', async (request, response) => {
  try {
    response.status(200).json(await userService.getUser(request.params.id));
  } catch (err) {
    response.status(404).json({ error: "Requested User could not be found" });
  }
});

//updating particular user
router.put('/:id', async (request, response) => {
  try {
    response.status(200).json(await userService.updateUser(request.params.id, request.body));
  } catch (err) {
    response.status(304).json({ error: "Update operation for user failed" });
  }
});

// deleting particular user
router.delete(':/id', async (request, response) => {
  try {
    response.json(await userService.deleteUser(request.params.id));
  } catch (err) {
    response.status(304).json({ error: "Delete operation failed for User" });
  }
});

module.exports = router;