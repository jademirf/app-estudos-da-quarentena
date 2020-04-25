const express = require('express')
const routes = require('./routes')
require('dotenv').config()

class AppController {
  constructor() {
    this.app = express()
    this.middlewares()
    this.routes()
  }

  routes() {
    this.app.use('/api', routes)
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
  }
}

module.exports = new AppController().app
