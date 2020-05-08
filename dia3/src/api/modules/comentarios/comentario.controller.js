const { comentario: Comentario } = require('../../../database/models')

class ComentarioController {
  async criarComentario(req, res, next) {
    try {
      const { id } = req.user
      const { postId } = req.query
      const comentario = await Comentario.create({
        texto: req.body.texto,
        usuarioId: id,
        postId,
      })

      return res.json(comentario)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}

module.exports = new ComentarioController()
