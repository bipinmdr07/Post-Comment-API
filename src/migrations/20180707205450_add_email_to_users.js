
exports.up = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.string('email').notNullable();
    table.unique(['username', 'email']);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', (table) => {
    table.dropUnique(['username', 'email']);
    table.dropColumn('email');
  })
}; 
