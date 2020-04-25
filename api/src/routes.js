const { Router } = require('express')
const userController = require('./api/controller/usuario.controller')
const commentController = require('./api/controller/post.controller')

const routes = Router()
/* user routes */
routes.post('/register', userController.createUser)

/* get user posts */
routes.get('/user/:id', userController.findUserPosts)

/* Create new post */
routes.post('/:userId/newpost', userController.createPost)

/* Get post */
routes.get('/posts', commentController.getAllPosts)
routes.get('/post/:postId/', commentController.getPost)

/* Create post Comment */
routes.post('/post/:postId/', commentController.createPostComment)

module.exports = routes
