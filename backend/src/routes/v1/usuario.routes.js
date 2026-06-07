import { Router } from 'express'
import { usuarioController } from '../../controllers/usuario.controller.js'
import { authMiddleware } from '../../middlewares/auth.js'

const router = Router()
router.put('/onboarding', authMiddleware.authenticate, usuarioController.onboarding)
export default router
