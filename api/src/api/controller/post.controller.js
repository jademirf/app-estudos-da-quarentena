const { Post, Comentario } = require('../../database/models')

class PostController {
  async createPostComment(req, res, next) {
    try {
      const { postId } = req.params
      if (!postId) return res.status(400).send('router needed any params')
      const post = await Post.findByPk(postId)
      const comentario = await post.createComentario(req.body)
      return res.json(comentario)
    } catch (error) {
      return res.satus(400).json(error.message)
    }
  }

  async getPost(req, res, next) {
    try {
      const { postId } = req.params
      if (!postId) return res.status(400).send('router needed any params')
      const post = await Post.findByPk(postId, {
        include: [{ model: Comentario }],
      })

      return res.json({ post })
    } catch (error) {
      return res.satus(400).json(error.message)
    }
  }

  async getAllPosts(req, res, next) {
    try {
      const posts = await Post.findAll()
      return res.json(posts)
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }
}

module.exports = new PostController()
