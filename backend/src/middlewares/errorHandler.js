export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err.message)

  const erroresConocidos = {
    'Credenciales incorrectas': 401,
    'El email ya está registrado': 409
  }

  const status = erroresConocidos[err.message] || 500
  res.status(status).json({ success: false, message: err.message })
}