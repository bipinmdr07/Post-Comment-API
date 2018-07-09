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
  console.log(details)
  
  if (typeof(details) !== 'object') {
    details = {}
  }

  if (!details.validTimePeriod || typeof(details.validTimePeriod) !== 'number') {
    details.validTimePeriod = 60;
  }

  details.sessionData = lodash.reduce(details.sessionData || {}, (memo, val, key) => {
    if (typeof(val) !== 'function') {
      memo[key] = val;
    }
    return memo;
  }, {});

  console.log(details);

  let token = jwt.sign({
    data: details.sessionData
  }, process.env.JWT_SECRET, {
    expiresIn: details.validTimePeriod,
    algorithm: 'HS256',
  });

  let refreshToken = jwt.sign({
    data: details.sessionData
  }, process.env.JWT_SECRET, {
    algorithm: 'HS256',
  });

  return [token, refreshToken];
}