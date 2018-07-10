const bcrypt = require('bcrypt');

const User = require('../models/User');
const auth = require('../utils/auth');
const RefreshTokenModel = require('../models/RefreshToken');

exports.checkForUser = async (req) => {
  const {username, password} = req;

  console.log(password);

  const user = await User.checkForUser(username);
  let payload = null;
  console.log(user[0].password);
  console.log(bcrypt.compareSync(password, user[0].password));  
  
  if (bcrypt.compareSync(password, user[0].password)) {
    payload = {id: user[0].id, username: user[0].username};
  }

  if (payload !== null) {
    const tokens = ({
      success: true,
      token: auth.createJWTToken({
        sessionData: payload,
        validTimePeriod: 60
      }),
      refreshToken: auth.createJWTToken({
        sessionData: payload
      })
    });

    await RefreshTokenModel.insertRefreshTokenInTable(payload.id, tokens.refreshToken);
    return tokens;
  } else {
    throw new Error("invalid credentials");
  }
}

