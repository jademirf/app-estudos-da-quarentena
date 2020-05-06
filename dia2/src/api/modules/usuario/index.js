const { Router } = require('express')
const usuarioController = require('./usuario.controller')

const usuarioRoutes = Router()

usuarioRoutes.post('/register', usuarioController.criarUsuario)
usuarioRoutes.get('/usuario', usuarioController.getUsuario)
usuarioRoutes.put('/usuario', usuarioController.updateUsuario)
usuarioRoutes.delete('/usuario/:email', usuarioController.deletarUsuario)

module.exports = usuarioRoutes
