
exports.up = function(knex, Promise) {
  return knex.schema.table('posts', (table) => {
    table.integer('user_id').unsigned().notNullable();
    table.foreign('user_id').references('id').inTable('users');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('posts', (table) => {
    // table.dropForeign('user_id', ['user_id']);
    table.dropColumn('user_id')
  });
};
