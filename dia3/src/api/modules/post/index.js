const { Router } = require('express')
const postController = require('./post.controller')
const authetication = require('../../middlewares/authentication.middleware')
const postRoutes = Router()

postRoutes.post('/post', authetication, postController.criarPost)
postRoutes.get('/post', authetication, postController.getUsuarioPosts)
postRoutes.delete('/post', authetication, postController.deletePostById)
postRoutes.put('/post', authetication, postController.updatePostById)

module.exports = postRoutes
