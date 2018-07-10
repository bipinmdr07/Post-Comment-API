const verifyJWTToken = require('./utils/auth').verifyJWTToken;

exports.authorize = (req, res, next) => {  
  const token = req.headers.authorization;
  // console.log(token);

  verifyJWTToken(token)
    .then((decodedToken) => {
      req.user = decodedToken.details;
      next();
    })
    .catch((err) => {
      res.status(400).json({ message: "Invalid auth token provided." });
    });
}