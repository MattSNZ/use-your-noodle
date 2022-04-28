const knex = require('knex')
const env = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
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
    .insert(faveObj, 'id')
}

const insertRecipe = (recipe, user, db = connection) => {
  return db('recipes')
    .insert(recipe, 'id')
}

module.exports = {
  getFaveRecipes,
  insertRecipe,
  insertFavouriteRecipe,
  connection
}
