const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

const getFaveRecipes = (db = connection) => {
  return db('recipes')
}

const insertRecipe = (recipe, db = connection) => {
  return db('recipes')
    .insert(recipe)
}

module.exports = {
  getFaveRecipes,
  insertRecipe,
  connection
}
