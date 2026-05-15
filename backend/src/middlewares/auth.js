import { verifyToken } from '../utils/jwt.js'

export const authMiddleware = {
  authenticate(req, res, next) {
    try {
      const authHeader = req.headers.authorization
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Token requerido' })
      }

      const token = authHeader.split(' ')[1]
      const payload = verifyToken(token)
      req.usuario = payload
      next()
    } catch (error) {
      return res.status(401).json({ success: false, message: 'Token inválido o expirado' })
    }
  }
}
