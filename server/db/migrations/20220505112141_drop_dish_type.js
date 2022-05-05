exports.up = (knex, Promise) => {
  return knex.schema.alterTable('recipes', table => {
    table.dropColumn('dish_type')
  })
}

exports.down = (knex, Promise) => {
  return
}
