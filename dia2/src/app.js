const express = require('express')
const routes = require('./api/modules/routes')
const bodyParser = require('body-parser')

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
    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: true }))
  }
}

module.exports = new AppController().app
