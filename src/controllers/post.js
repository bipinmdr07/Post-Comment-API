const router = require('express').Router();
const postServices = require('../services/post');
const authorize = require('../middlewares').authorize;

// getting all post
router.get('/', authorize, async (request, response) => {
  // request.user {id: id, username: 'username'}
  try {
    response.status(200).json(await postServices.getPostsWithCommentsForUser(request.user.id));
  } catch (err) {
    response.status(404).json({ err: 'Not found' });
  }
});

// adding new post
router.post('/', authorize, async (request, response) => {
  try {
    response.status(201).json(await postServices.addNewPost(request.user.id, request.body));
  } catch (err) {
    response.status(400).json({ err });
  }
});

// getting particular posts
router.get('/:id', async (request, response) => {
  try {
    response.status(200).json(await postServices.getPost(request.params.id, requst.user.id));
  } catch (err) {
    response.status(404).json({ err });
  }
});

// updating particular post
router.put('/:id', authorize, async (request, response) => {
  try {
    response.status(200).json(await postServices.updatePost(request.params.id, request.body, request.user.id));
  } catch (err) {
    response.status(404).json({ err });
  }
});

// deleting particular post
router.delete(':/id', authorize, async (request, response) => {
  try {
    response.status(200).json(await postServices.deletePost(request.params.id, request.user.id));
  } catch (err) {
    response.status(304).json({ err });
  }
});

module.exports = router;
