import request from 'superagent'

const baseUrl = '/api/noodles/'

export const getRecipes = query => {
  return request.get(baseUrl)
    .query({ search: query })
    .then(response => {
      return response.body
    })
}

export const getRecipeByID = id => {
  return request.get(`${baseUrl}${id}`)
    .then(response => response.body)
}

export const postFaveRecipe = recipe => {
  return request.post(baseUrl)
    .send(recipe)
    .then(response => response.body)
}

export const getFaveRecipes = () => {
  return request.get(`${baseUrl}faves`)
    .then(response => response.body)
}
