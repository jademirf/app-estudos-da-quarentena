const { Usuario, Post } = require('../../database/models')

class UserController {
  async createUser(req, res, next) {
    try {
      const { nome, email, senha, sobreNome } = req.body
      const usuario = await Usuario.create({
        nome,
        email,
        senha,
        sobreNome,
      })
      return res.json(usuario)
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }

  async findUserPosts(req, res, next) {
    try {
      const posts = await Usuario.findByPk(req.params.id, {
        attributes: [],
        include: [
          {
            model: Post,
          },
        ],
      })
      return res.json(posts)
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }

  async createPost(req, res, next) {
    try {
      const { userId } = req.params
      if (!userId) return res.status(400).send('please send a userId')
      const usuario = await Usuario.findByPk(userId)
      const posts = await usuario.createPost(req.body)
      return res.json(posts)
    } catch (error) {
      return res.status(400).json(error.message)
    }
  }
}

module.exports = new UserController()
