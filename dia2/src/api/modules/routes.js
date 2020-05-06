const { Router } = require('express')
const usuarioRoutes = require('./usuario')
const postRoutes = require('./post')

const routes = Router()

routes.use(usuarioRoutes)
routes.use(postRoutes)

module.exports = routes
