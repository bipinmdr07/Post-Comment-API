const jwt = require('jsonwebtoken');
const lodash = require('lodash');

exports.verifyJWTToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err || !decodedToken) {
        return reject(err);
      }

      resolve(decodedToken);
    });
  });
}

exports.createJWTToken = (details) => {
  let token = null;
  if (typeof(details.validTimePeriod) !== 'undefined') {
    token = jwt.sign({
      data: details.sessionData
    }, process.env.JWT_SECRET, {
      expiresIn: details.validTimePeriod,
      algorithm: 'HS256',
    });
  // token without expiry
  } else {
    token = jwt.sign({
      data: details.sessionData
    }, process.env.JWT_SECRET, {
      algorithm: 'HS256'
    });
  }
  return token;
}