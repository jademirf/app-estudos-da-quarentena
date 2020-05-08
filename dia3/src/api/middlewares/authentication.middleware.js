const jwt = require('jsonwebtoken')

class AuthController {
  auth(req, res, next) {
    try {
      const { authorization } = req.headers
      if (!authorization) return res.sendStatus(401)

      const token = authorization.split(' ')[1]

      if (!token) return res.sendStatus(401)

      const decoded = jwt.verify(token, process.env.SECRET_KEY)

      req.user = {
        email: decoded.email,
        id: decoded.id,
      }
      next()
    } catch (error) {
      return res.status(401).json({ error: error.message })
    }
  }
}

module.exports = new AuthController().auth
