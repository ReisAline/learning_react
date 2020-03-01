const express = require('express')

module.exports = function(sever){
  //API Routes
  const router = express.Router()
  sever.use('/api',router)
  //TODO Routes
  const todoServer = require('../api/todo/todoServer')
  todoServer.register(router,'/todos')
}