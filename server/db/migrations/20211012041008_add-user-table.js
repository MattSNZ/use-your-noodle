exports.up = (knex, Promise) => {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('username')
    table.string('hash')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users')
}
