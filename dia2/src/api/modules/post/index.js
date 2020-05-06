const { Router } = require('express')
const postController = require('./post.controller')

const postRoutes = Router()

postRoutes.post('/post', postController.criarPost)
postRoutes.get('/post', postController.getUsuarioPostsByEmail)

module.exports = postRoutes
