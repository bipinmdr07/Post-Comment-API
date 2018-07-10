const bcrypt = require('bcrypt');

exports.seed = async function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(async function() {
      const postIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      var comments = [];
      for (var i = 0; i < 25; i++){
        const postId = Math.floor(Math.random() * 9) + 1;
        const userData = await knex('posts').select().where('id', postId);//Math.floor(Math.random() * 2) + 1;
        const userId = userData[0].user_id;
        const comment = {
          comment: "Lorem Ipsum Comment",
          post_id: postId,
          user_id: userId
        }

        comments.push(comment);
      }

      return knex('comments').insert(comments);
    })
};
