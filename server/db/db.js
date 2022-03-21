const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

const getFaveRecipes = (user, db = connection) => {
  return db('recipes')
    .leftJoin('favourite_recipes', 'recipes.id', '=', 'favourite_recipes.recipe_id')
    .select('recipes.*')
    .where('favourite_recipes.user_id', user.id)
}

const insertFavouriteRecipe = (recipe, user, db = connection) => {
  faveObj = {
    recipe_id: recipe.id,
    user_id: user.id
  }
  return db('favourite_recipes')
    .insert(faveObj)
}

const insertRecipe = (recipe, user, db = connection) => {
  return db('recipes')
    .insert(recipe)
}

module.exports = {
  getFaveRecipes,
  insertRecipe,
  insertFavouriteRecipe,
  connection
}
