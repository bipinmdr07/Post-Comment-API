const bcrypt = require('bcrypt');

const User = require('../models/User');
const auth = require('../utils/auth');
const RefreshTokenModel = require('../models/RefreshToken');

exports.checkForUser = async (req) => {
  const {username, password} = req;
  const user = await User.checkForUser(username);
  let payload = null;  
  
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

    const x = await RefreshTokenModel.findRefreshTokenByUserId(payload.id);
    if (x.length === 0){
      await RefreshTokenModel.insertRefreshTokenInTable(payload.id, tokens.refreshToken);
    } else {
      await RefreshTokenModel.updateRefreshTokenInTable(payload.id, tokens.refreshToken);
    }
    return tokens;
  } else {
    throw new Error("invalid credentials");
  }
}

