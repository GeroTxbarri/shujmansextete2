import bcrypt from 'bcrypt'
import { usuarioRepository } from '../repositories/usuario.repository.js'
import { generarToken } from '../utils/jwt.js'

export const authService = {
  async login(email, password) {
    const usuario = await usuarioRepository.findByEmail(email)
    if (!usuario) throw new Error('Credenciales incorrectas')

    const valido = await bcrypt.compare(password, usuario.password)
    if (!valido) throw new Error('Credenciales incorrectas')

    const token = generarToken({ id: usuario.id, email: usuario.email })
    const { password: _, ...usuarioSinPassword } = usuario
    return { token, usuario: usuarioSinPassword }
  },

  async register(data) {
    const existe = await usuarioRepository.findByEmail(data.email)
    if (existe) throw new Error('El email ya está registrado')

    const hashedPassword = await bcrypt.hash(data.password, 10)
    const usuario = await usuarioRepository.create({
      ...data,
      password: hashedPassword
    })

    const token = generarToken({ id: usuario.id, email: usuario.email })
    const { password: _, ...usuarioSinPassword } = usuario
    return { token, usuario: usuarioSinPassword }
  }
}