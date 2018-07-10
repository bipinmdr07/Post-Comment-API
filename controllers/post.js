const router = require('express').Router();
const postServices = require('../services/postServices');
const authorize = require('../middlewares').authorize;

// getting all post
router.get('/', authorize, async (request, response) => {
  try {
    console.log(get);
    response.status(200).json(await postServices.getAllPosts());
  } catch (err) {
    response.status(404).json({ err: "Not found" });
  }
});

// adding new post
router.post('/', authorize, async (request, response) => {
  try {
    response.status(201).json(await postServices.addNewPost(request.body));
  } catch (err) {
    response.status(400).json({ err });
  }
});

// getting particular posts
router.get('/:id', async (request, response) => {
  try {
    response.status(200).json(await postServices.getPost(request.params.id));
  } catch (err) {
    responsse.status(404).json({ err });
  }
});

// updating particular post
router.put('/:id', authorize, async (request, response) => {
  try {
    response.status(200).json(await postServices.updatePost(request.params.id));
  } catch (err) {
    response.status(404).json({ err });
  }
});

// deleting particular post
router.delete(':/id', async (request, response) => {
  try {
    response.status(200).json(await postServices.deletePost(request.params.id));
  } catch (err) {
    response.status(304).json({ err });
  }
});

module.exports = router;