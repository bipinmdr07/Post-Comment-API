
exports.up = function(knex, Promise) {
  return knex.schema.table('comments', (table) => {
    table.integer('user_id').unsigned().notNullable();
    table.integer('post_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');
    table.foreign('post_id').references('id').inTable('posts');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('comments', (table) => {
    table.dropColumn('user_id');
    table.dropColumn('post_id');
  });
};
