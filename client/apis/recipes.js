import request from 'superagent'

const baseUrl = '/api/noodles/'

export const getRecipes = query => {
  return request.get(baseUrl)
    .query({ search: query })
    .then(response => {
      return response.body.hits
    })
}

export const getRecipeByID = id => {
  return request.get(`${baseUrl}${id}`)
    .then(response => response.body)
}
