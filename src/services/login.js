const bcrypt = require('bcrypt');

const User = require('../models/User');
const auth = require('../utils/auth');
const RefreshTokenModel = require('../models/RefreshToken');

/**
 * When user login by providing the username and password,
 * first we will check for the existence of user in the database using the username provided by the user,
 * then we will show error if the user does not exists, else we will validate the password provided by the user,
 * If both matched then we will extract the username and id of the user for JWT payload and pass it to generate
 * two tokens
 * 1. authorize_token: token
 * 2. refresh_token: refreshToken
 * 
 * and send it back to front end
 * 
 * @param {object} req 
 * 
 * @returns Object
 */
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
        validTimePeriod: '155 d'
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

