import { Router } from 'express'
import v1Routes from './v1/index.js'

const router = Router()

router.get('/health', (req, res) => {
  res.json({ success: true, message: 'Server is running 🚀', timestamp: new Date().toISOString() })
})

router.use('/v1', v1Routes)
export default router