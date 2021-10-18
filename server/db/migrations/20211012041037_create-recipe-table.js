exports.up = (knex, Promise) => {
  return knex.schema.createTable('recipes', table => {
    table.increments('id')
    table.string('external_id')
    table.string('label')
    table.string('image')
    table.string('source')
    table.string('url')
    table.integer('yield')
    table.string('cuisine_type')
    table.string('meal_type')
    table.string('dish_type')
    table.integer('total_time')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('recipes')
}
