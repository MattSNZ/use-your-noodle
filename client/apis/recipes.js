import request from 'superagent'

const baseUrl = 'https://api.edamam.com/api/recipes/v2'
const authQueryObj = {
  type: 'public',
  app_id: 'f75abf70',
  app_key: process.env.API_KEY
}
const searchQueryObj = {
  random: true,
  field: [
    'uri',
    'label',
    'image',
    'source',
    'url',
    'yield',
    'ingredientLines',
    'ingredients',
    'totalTime',
    'cuisineType',
    'mealType',
    'dishType'
  ]
}

export const getRecipes = (query) => {
  searchQueryObj.q = query

  return request.get(baseUrl)
    .query({ ...authQueryObj, ...searchQueryObj })
    .then(response => response.body)
}

export const getRecipeByID = id => {
  return request.get(baseUrl + '/' + id)
    .query(authQueryObj)
    .then(response => response.body)
}
