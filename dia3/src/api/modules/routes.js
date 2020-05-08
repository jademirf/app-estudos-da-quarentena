const { Router } = require('express')
const usuarioRoutes = require('./usuario')
const postRoutes = require('./post')
const comentarioRoutes = require('./comentarios')

const routes = Router()

routes.use(usuarioRoutes)
routes.use(postRoutes)
routes.use(comentarioRoutes)

module.exports = routes
