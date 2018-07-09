exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', (table) => {
      table.increments('id').primary();
      table.string('username');
      table.string('password');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('posts', (table) => {
      table.increments('id').primary();
      table.text('post');

      table.timestamps(true, true);
    }),

    knex.schema.createTable('comments', (table) => {
      table.increments('id').primary();
      table.text('comment');

      table.timestamps(true, true);
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('posts'),
    kenx.schema.dropTable('comments'),
  ])
};
