const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  const password = bcrypt.hashSync("password", 10);
  return knex('users').del()
    .then(function () {

      // create a dummy user datas
      let users = []
      for (let i = 0; i < 3; i++) {
        const user = {
          username: "user" + i,
          password: password,
          email: "example" + i + "@gmail.com"
        }
        users.push(user);
      }

      return Promise.all([
        knex('users').insert(users)
          .then(() => {
            console.log("Seeding Complete!!!")
          })
          .catch((error) => {
            console.log(`Error seeding data: ${error}`);
          })
      ])

      
      // Inserts seed entries
      return knex('users').insert(
        users
      );
    });
};
