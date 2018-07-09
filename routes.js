const router = require('express').Router();
const bcrypt = require('bcrypt');

const userController = require('./controllers/user');
const postController = require('./controllers/post');
const commentController = require('./controllers/comment');

const db = require('./db');
const auth = require('./libs/auth');
// const paramsCheck = require('./middlewares');

router.get('/', (request, response) => {
  response  .json({
    AppName: "Post Comment Authorization",
  });
});

// router.post('*', paramsCheck['username', 'password']);

router.post('/login', (request, response) => {
  let { username, password } = request.body;

  db('users').where('username', username)
    .then((user) => user[0] )
    .then((user) => {
      if (bcrypt.compare(password, user.password)) {
        return {id: user.id, username: user.username};
      }
    })
    .then((user) => {
      response.status(200)
        .json({
          success: true,
          token: auth.createJWTToken({
            sessionData: user,
            validTimePeriod: 60
          })
        })
    })
    .catch((error) => {
      response.status(500).json({ error });
    });
});

router.use("/users", userController);
router.use("/posts", postController);
router.use("/comments", commentController);

module.exports = router;