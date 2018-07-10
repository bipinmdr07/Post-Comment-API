const router = require('express').Router();
const commentServices = require('../services/comment');
const authorize = require('../middlewares').authorize;

// getting all comments
router.get('/', async (request, response) => {
  try {
    response.status(200).json(await commentServices.getAllComments());
  } catch (err) {
    response.status(500).json({ err });
  }
});

// adding new comment
router.post('/', async (request, response) => {
  try {
    response.status(201).json(await commentServices.addNewComment(request.body));
  } catch (err) {
    response.status(400).json({ err });
  }
});

// updating particular comment
router.put('/:id', async (request, response) => {
  try {
    response.status(200).json(await commentServices.updateComment(request.params.id));
  } catch (err) {
    response.status(404).json({ err });
  }
});

// deleting particular comment
router.delete('/:id', async (request, response) => {
  try {
    response.status(200).json(await commentServices.deleteComment(request.params.id));
  } catch (err) {
    response.status(304).json({ err });
  }
});

module.exports = router;