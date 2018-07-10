const router = require('express').Router();
const bcrypt = require('bcrypt');

const userController = require('./controllers/user');
const postController = require('./controllers/post');
const commentController = require('./controllers/comment');
const signupController = require('./controllers/signup');
const loginController = require('./controllers/login');
const refreshTokenController = require('./controllers/refreshToken');

const auth = require('./utils/auth');

router.get('/', (request, response) => {
  response .json({
    AppName: process.env.APP_NAME,
  });
});

// router.use("/refresh", refreshTokenController);
router.use("/signup", signupController);
router.use("/login", loginController);
router.use("/users", userController);
router.use("/posts", postController);
router.use("/comments", commentController);

module.exports = router;