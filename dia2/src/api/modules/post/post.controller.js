const { post: Post, usuario: Usuario } = require('../../../database/models')

class PostController {
  async criarPost(req, res, next) {
    try {
      const post = await Post.create(req.body)
      return res.json(post)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async getUsuarioPostsByEmail(req, res, next) {
    try {
      const { email } = req.query
      const usuario = await Usuario.findOne({
        where: {
          email,
        },
      })
      if (!usuario) throw new Error('usuario não encontrado')
      const posts = await usuario.getPosts()
      return res.json(posts)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new PostController()
