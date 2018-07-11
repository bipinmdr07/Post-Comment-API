const router = require('express').Router();
const commentServices = require('../services/comment');
const authorize = require('../middlewares').authorize;

// getting all comments
router.get('/', async (request, response) => {
  try {
    response.status(200).json(await commentServices.getAllComments(request.query.postId, request.user.id));
  } catch (err) {
    response.status(500).json({ error: "No Comments found" });
  }
});

// adding new comment
router.post('/', async (request, response) => {
  try {
    response.status(201).json(await commentServices.addNewComment(request.query.postId, request.body, params.user.id));
  } catch (err) {
    response.status(400).json({ error: "Failed to create new comment" });
  }
});

// updating particular comment
router.put('/:id', async (request, response) => {
  try {
    response.status(200).json(await commentServices.updateComment(request.params.id, request.body, request.user.id));
  } catch (err) {
    response.status(404).json({ error: "Update operation failed for comment" });
  }
});

// deleting particular comment
router.delete('/:id', async (request, response) => {
  try {
    response.status(200).json(await commentServices.deleteComment(request.params.id, request.user.id));
  } catch (err) {
    response.status(304).json({ error: "Delete operation failed for comment" });
  }
});

module.exports = router;