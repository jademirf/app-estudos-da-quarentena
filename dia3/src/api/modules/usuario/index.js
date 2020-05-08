const { Router } = require('express')
const usuarioController = require('./usuario.controller')
const authetication = require('../../middlewares/authentication.middleware')

const usuarioRoutes = Router()

usuarioRoutes.post('/register', usuarioController.criarUsuario)
usuarioRoutes.get('/usuario', authetication, usuarioController.getUsuario)
usuarioRoutes.put('/usuario', authetication, usuarioController.updateUsuario)
usuarioRoutes.delete(
  '/usuario',
  authetication,
  usuarioController.deletarUsuario
)

usuarioRoutes.post('/login', usuarioController.login)

module.exports = usuarioRoutes
