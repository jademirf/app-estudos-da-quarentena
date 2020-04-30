const express = require('express')

class AppController {
  constructor() {
    this.app = express()
  }

  routes() {}

  middlewares() {}
}

module.exports = new AppController().app
