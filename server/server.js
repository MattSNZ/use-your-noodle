const path = require('path')
const express = require('express')
// const cors = require('cors') // <- if you use this, npm install cors

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
// server.use(cors('*'))

const authRoutes = require('./routes/auth')
const noodleRoutes = require('./routes/noodles')

server.use('/api/v1', authRoutes)
server.use('/api/noodles', noodleRoutes)

server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

module.exports = server
