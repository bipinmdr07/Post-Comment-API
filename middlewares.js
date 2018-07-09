const verifyJWTToken = require('./libs/auth').verifyJWTToken();

exports.verifyJWTMiddleware = (req, res, next) => {
  let token = (req.method === 'POST')? req.body.token : req.query.token;

  verifyJWTToken(token)
    .then((decodedToken) => {
      req.user = decodedToken.details;
      next();
    })
    .catch((err) => {
      res.status(400).json({ message: "Invalid auth token provided." });
    });
}