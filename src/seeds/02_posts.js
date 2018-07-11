exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      const userIds = [1, 2, 3];

      var posts = [];
      for (let i = 0; i < 10; i++){
        const post = {
          "post": `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
          "user_id": userIds[Math.floor(Math.random() * 2) + 1]
        }
        posts.push(post);
      }

      return knex('posts').insert(posts);
    });
};
