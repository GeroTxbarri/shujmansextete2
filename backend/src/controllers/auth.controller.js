import { authService } from '../services/auth.service.js'

export const authController = {
  async login(req, res, next) {
    try {
      const { email, password } = req.body
      const resultado = await authService.login(email, password)
      res.json({ success: true, data: resultado })
    } catch (error) {
      next(error)
    }
  },

  async register(req, res, next) {
    try {
      const { email, password, nombre } = req.body
      const resultado = await authService.register({ email, password, nombre })
      res.status(201).json({ success: true, data: resultado })
    } catch (error) {
      next(error)
    }
  }
}