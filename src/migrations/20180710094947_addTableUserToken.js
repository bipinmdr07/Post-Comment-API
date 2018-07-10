
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('user_tokens', (t) => {
      t.increments('id').primary();
      t.integer('user_id').notNull();
      t.string('refresh_token').notNull();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('user_tokens')
  ]);
};
