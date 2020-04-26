const jwt = require('jsonwebtoken')

class AuthController {
  async authentication(req, res, next) {
    try {
      const { authorization } = req.headers
      if (!authorization) return res.sendStatus(401)

      const token = authorization.split(' ')[1]
      if (!token) return res.sendStatus(401)
      const { email, id } = jwt.verify(token, process.env.JWT_SECRET)
      req.user = {
        email,
        id,
      }
      return next()
    } catch (error) {
      return res.sendStatus(400)
    }
  }
}

module.exports = new AuthController().authentication
