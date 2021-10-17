// const db = require('../db/db')
const { insertRecipe, getFaveRecipes } = require('../db/db')

const request = require('superagent')
const camel = require('camelcase-keys')

const express = require('express')
const router = express.Router()

const baseUrl = 'https://api.edamam.com/api/recipes/v2'
const authQueryObj = {
  type: 'public',
  app_id: process.env.API_ID,
  app_key: process.env.API_KEY
}
const searchQueryObj = {
  random: true,
  field: ['uri',
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

// Search for query string api/noodles/?search=BLAH
router.get('/', (req, res) => {
  searchQueryObj.q = req.query.search

  return request.get(baseUrl)
    .query({ ...authQueryObj, ...searchQueryObj })
    .then(response => res.json(response.body))
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

router.get('/fave', (req, res) => {
  getFaveRecipes()
    .then(recipes => res.json(camel(recipes)))
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  return request.get(`${baseUrl}/${id}`)
    .then(response => res.json(response.body))
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

router.post('/', (req, res) => {
  const recipe = req.body

  insertRecipe(recipe)
    .then(idArr => {
      recipe.id = idArr[0]
      res.json(camel(recipe))
      return null
    })
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

module.exports = router
