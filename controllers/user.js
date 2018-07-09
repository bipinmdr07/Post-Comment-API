const router = require('express').Router();
const userService = require('../services/userServices');

// getting all users
router.get('/', (request, response) => {
  userService
    .getAllUsers()
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

// adding new user
router.post('/', (request, response) => {
  userService
    .addNewUser(request.body)
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

// getting particular user
router.get('/:id', (request, response) => {
  userService
    .getUser(request.params.id)
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

//updating particular user
router.put('/:id', (request, response) => {
  userService
    .updateUser(request.params.id)
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

// deleting particular user
router.delete(':/id', (request, response) => {
  userService
    .deleteUser(request.params.id)
    .then((data) => {
      response.status(200).json({ data });
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

module.exports = router;