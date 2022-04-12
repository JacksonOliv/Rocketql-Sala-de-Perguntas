const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const { get } = require('express/lib/response')
const QuestionController = require('./Controllers/QuestionController')
const RoomController = require('./Controllers/RoomController')

const route = express.Router()

route.get('/', (req, res) => res.render("Index", {page: 'enter-room'}))
route.get('/create-password', (req, res) => res.render("index", {page: 'create-password'}))

route.post('/create-room', RoomController.create)
route.get('/room/:room', RoomController.open)
route.post('/enterroom', RoomController.enter)

route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:action', QuestionController.index)
module.exports = route