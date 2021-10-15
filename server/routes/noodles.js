const request = require('superagent')

const express = require('express')
const router = express.Router()

// const db = require('../db/db')

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

router.get('/:id', (req, res) => {
  const id = req.params.id

  return request.get(`${baseUrl}/${id}`)
    .then(response => res.json(response.body))
    .catch(err => {
      console.log(err.message)
      return res.status(500).send('500 error :(')
    })
})

module.exports = router
