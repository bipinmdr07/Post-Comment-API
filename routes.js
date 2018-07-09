const router = require('express').Router();
const bcrypt = require('bcrypt');

const userController = require('./controllers/user');
const postController = require('./controllers/post');
const commentController = require('./controllers/comment');
const signupController = require('./controllers/signup');
const loginController = require('./controllers/login');

const db = require('./db');
const auth = require('./utils/auth');
// const paramsCheck = require('./middlewares');

router.get('/', (request, response) => {
  response  .json({
    AppName: process.env.APP_NAME,
  });
});

// router.post('/login', (request, response) => {
//   let { username, password } = request.body;

//   db('users').where('username', username)
//     .then((user) => user[0] )
//     .then((user) => {
//       if (bcrypt.compare(password, user.password)) {
//         return {id: user.id, username: user.username};
//       }
//     })
//     .then((user) => {
//       response.status(200)
//         .json({
//           success: true,
//           token: auth.createJWTToken({
//             sessionData: user,
//             validTimePeriod: 60
//           })
//         })
//     })
//     .catch((error) => {
//       response.status(500).json({ error });
//     });
// });

router.use("/signup", signupController);
router.use("/login", loginController);
router.use("/users", userController);
router.use("/posts", postController);
router.use("/comments", commentController);

module.exports = router;