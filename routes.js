const router = require('express').Router();

const userController = require('./controllers/user');
const postController = require('./controllers/post');
const commentController = require('./controllers/comment');

router.get('/', (request, response) => {
  response  .json({
    AppName: "Post Comment Authorization",
  });
});

router.use("/users", userController);
router.use("/posts", postController);
router.use("/comments", commentController);

module.exports = router;