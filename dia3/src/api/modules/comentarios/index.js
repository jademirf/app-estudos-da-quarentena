const { Router } = require('express')
const comentarioController = require('./comentario.controller')
const authetication = require('../../middlewares/authentication.middleware')

const routes = Router()

routes.post(
  '/novocomentario',
  authetication,
  comentarioController.criarComentario
)

module.exports = routes
