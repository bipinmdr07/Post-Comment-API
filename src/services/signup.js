const bcrypt = require('bcrypt');

const userModel = require('../models/User');

exports.addNewUser = async (userInfo) => {
  const {username, email, password} = userInfo;
  const passwordBcrypted = bcrypt.hashSync(password, 10);
  try {
    return await userModel.addNewUser({ username: username, password: passwordBcrypted, email: email });
  } catch (err) {
    response.status(502).json({ error: "Signup Failed!!!" });
  }
}