exports.up = (knex, Promise) => {
  return knex.schema.createTable('favourite_recipes', table => {
    table.increments('id').primary()
    table.integer('recipe_id')
    table.integer('user_id')
    table.foreign('recipe_id').references('recipes.id')
    table.foreign('user_id').references('users.id')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('favourite_recipes')
}
