const {
  post: Post,
  usuario: Usuario,
  comentario: Comentario,
} = require('../../../database/models')

class PostController {
  async criarPost(req, res, next) {
    try {
      const { id } = req.user
      const post = await Post.create({
        ...req.body,
        usuarioId: id,
      })
      return res.json(post)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async getUsuarioPosts(req, res, next) {
    try {
      const { id } = req.user
      const posts = await Usuario.findByPk(id, {
        attributes: [],
        include: {
          model: Post,
          include: {
            model: Comentario,
          },
        },
      })

      return res.json(posts)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async deletePostById(req, res, next) {
    try {
      const { postId } = req.query
      const { id } = req.user
      const post = await Post.destroy({
        where: {
          id: postId,
          usuarioId: id,
        },
        returning: true,
      })
      return res.json(post)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }

  async updatePostById(req, res, next) {
    try {
      const { postId } = req.query
      const { id } = req.user
      const post = await Post.update(req.body, {
        where: {
          id: postId,
          usuarioId: id,
        },
        returning: true,
      })
      return res.json(post)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

module.exports = new PostController()
