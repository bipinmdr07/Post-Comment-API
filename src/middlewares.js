const verifyJWTToken = require('./utils/auth').verifyJWTToken;

exports.authorize = (request, response, next) => {
  const token = request.headers.authorization;

  verifyJWTToken(token)
    .then((decodedToken) => {
      request.user = decodedToken.data;
      next();
    })
    .catch((err) => {
      response.status(400).json({ message: "Invalid auth token provided." });
      next(err);
    });
}

exports.logger = (err, req, res, next) => {
  console.log(err);
  next(err);
}