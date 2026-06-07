import { usuarioService } from '../services/usuario.service.js'

const SEXOS = ['M', 'F']
const OBJETIVOS = ['ganar', 'mantener', 'perder']

export const usuarioController = {
  async onboarding(req, res, next) {
    try {
      const { edad, peso, altura, sexo, actividadFisica, objetivo } = req.body

      if (
        !Number.isFinite(edad) || edad <= 0 ||
        !Number.isFinite(peso) || peso <= 0 ||
        !Number.isFinite(altura) || altura <= 0 ||
        !Number.isFinite(actividadFisica) || actividadFisica < 0 || actividadFisica > 7 ||
        !SEXOS.includes(sexo) ||
        !OBJETIVOS.includes(objetivo)
      ) {
        return res.status(400).json({ success: false, message: 'Datos de onboarding inválidos' })
      }

      const resultado = await usuarioService.completarOnboarding(req.usuario.id, {
        edad, peso, altura, sexo, actividadFisica, objetivo
      })

      res.json({ success: true, data: resultado })
    } catch (error) {
      next(error)
    }
  }
}
