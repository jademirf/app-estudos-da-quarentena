const { usuario: Usuario } = require('../../../database/models')

class UsuarioController {
  async criarUsuario(req, res, next) {
    try {
      const { nome, sobrenome, email, senha } = req.body
      if (!nome || !sobrenome || !email || !senha)
        throw new Error('parametros invalidos!!')
      const usuario = await Usuario.create(req.body)
      return res.json(usuario)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async getUsuario(req, res, next) {
    try {
      const { email } = req.query
      if (!email) throw new Error('Parametros invalidos!!')
      const usuario = await Usuario.findOne({
        where: {
          email,
        },
      })
      if (!usuario)
        return res.status(400).send('usuario não encontrado no banco de dados!')
      return res.json(usuario)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async updateUsuario(req, res, next) {
    try {
      const { email } = req.query

      if (!email) throw new Error('parametros invalidos')
      const usuario = await Usuario.update(req.body, {
        where: {
          email,
        },
      })
      return res.json(usuario)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  async deletarUsuario(req, res, next) {
    try {
      const { email } = req.params
      if (!email) throw new Error('parametros invalidos')
      const usuario = await Usuario.findOne({
        where: {
          email,
        },
      })
      if (!usuario) throw new Error('usuario não encontrado no banco de dados!')
      await usuario.destroy()
      return res.sendStatus(200)
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }
}

module.exports = new UsuarioController()
