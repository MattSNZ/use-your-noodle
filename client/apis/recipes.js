import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

const acceptJsonHeader = { Accept: 'application/json' }

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
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(recipe)
    .then(response => response.body)
}

export const getFaveRecipes = () => {
  return request.get(`${baseUrl}faves`)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .then(response => {
      console.log(response.body)
      return response.body
    })
}
