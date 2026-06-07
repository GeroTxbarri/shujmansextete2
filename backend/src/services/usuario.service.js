import { usuarioRepository } from '../repositories/usuario.repository.js'
import { calcularMacros } from '../utils/macros.js'

export const usuarioService = {
  async completarOnboarding(usuarioId, datos) {
    const { edad, peso, altura, sexo, actividadFisica, objetivo } = datos

    const usuario = await usuarioRepository.update(usuarioId, {
      edad,
      peso,
      altura,
      sexo,
      actividadFisica,
      objetivo,
      onboardingCompleto: true
    })

    const macros = calcularMacros({ edad, peso, altura, sexo, actividadFisica, objetivo })
    const { password: _, ...usuarioSinPassword } = usuario

    return { usuario: usuarioSinPassword, macros }
  }
}
