const router = require('express').Router();
const postServices = require('../services/post');
const authorize = require('../middlewares').authorize;

// getting all post
router.get('/', authorize, async (request, response) => {
  try {
    response.status(200).json(await postServices.getAllPosts(request.user.id));
  } catch (err) {
    response.status(404).json({ error: 'Cannot find your requested post' });
  }
});

// adding new post
router.post('/', authorize, async (request, response) => {
  try {
    response.status(201).json(await postServices.addNewPost(request.user.id, request.body));
  } catch (err) {
    response.status(400).json({ error: "Failed to create new Post" });
  }
});

// getting particular posts
router.get('/:id', async (request, response) => {
  try {
    response.status(200).json(await postServices.getPost(request.params.id, requst.user.id));
  } catch (err) {
    response.status(404).json({ error: "Failed to get your requested post" });
  }
});

// updating particular post
router.put('/:id', authorize, async (request, response) => {
  try {
    response.status(200).json(await postServices.updatePost(request.params.id, request.body, request.user.id));
  } catch (err) {
    response.status(404).json({ error: "Failed to update the post" });
  }
});

// deleting particular post
router.delete(':/id', authorize, async (request, response) => {
  try {
    response.status(200).json(await postServices.deletePost(request.params.id, request.user.id));
  } catch (err) {
    response.status(304).json({ error: "Failed to delete your requested post" });
  }
});

module.exports = router;
