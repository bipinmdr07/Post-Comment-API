const db = require('../db');

exports.getAllUsers = () => {
  let user = db('users').select();
  console.log(user);
  return user
}

exports.addNewUser = (data) => {
  // console.log(data);
  let x = db('users').insert(data, 'id');
  // console.log(x.error);
  // if (x.error !== 'undefined') {
  //   // throw x.error.detail
  //   // console.log()
  // }
  // return x;
  x.then((response) => {
    console.log(response);
    return response;
  })
  .catch((error) => {
    throw new Error(error);
  })
}

exports.getUser = (id) => {
  let user = db('users').select().where('id', id);
}

exports.updateUser = (id, data) => {
  let user = db('users').select().where('id', id).update(data, [id]);
}

exports.deleteUser = (id) => {
  let user = db('users').select().where('id', id).del();
}