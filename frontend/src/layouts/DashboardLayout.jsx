import { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const NAV_ITEMS = [
  { to: '/dashboard',               label: 'Inicio',         icon: '🏠', end: true },
  { to: '/dashboard/dieta',         label: 'Dieta',          icon: '🍽️' },
  { to: '/dashboard/entrenamientos',label: 'Entrenamientos', icon: '🏋️' },
  { to: '/dashboard/metricas',      label: 'Métricas',       icon: '📊' },
]

export default function DashboardLayout() {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const usuarioGuardado = localStorage.getItem('usuario')

    if (!token || !usuarioGuardado) {
      navigate('/login', { replace: true })
      return
    }

    const usuarioParseado = JSON.parse(usuarioGuardado)
    if (!usuarioParseado.onboardingCompleto) {
      navigate('/onboarding', { replace: true })
      return
    }

    setUsuario(usuarioParseado)
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('usuario')
    localStorage.removeItem('macros')
    navigate('/')
  }

  if (!usuario) return null

  const iniciales = usuario.nombre
    .split(' ')
    .map(p => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <div className="app-shell">
      <div className={`sidebar-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />

      <aside className={`sidebar ${open ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <div className="nav-logo-icon">💪</div>
          Gym<span>Tracker</span>
        </div>

        <div className="sidebar-id">
          <div className="sidebar-id-badge">{iniciales}</div>
          <div style={{ minWidth: 0 }}>
            <div className="sidebar-id-name">{usuario.nombre}</div>
            <div className="sidebar-id-tag">Miembro #{String(usuario.id).padStart(4, '0')}</div>
          </div>
        </div>

        <nav className="sidebar-nav">
          <div className="sidebar-section-label">General</div>
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              <span className="sidebar-link-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}

          <div className="sidebar-section-label">Cuenta</div>
          <NavLink
            to="/dashboard/perfil"
            className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
            onClick={() => setOpen(false)}
          >
            <span className="sidebar-link-icon">⚙️</span>
            Configuración de perfil
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <button className="sidebar-logout" onClick={handleLogout}>
            <span>🚪</span> Cerrar sesión
          </button>
        </div>
      </aside>

      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minWidth: 0 }}>
        <div className="dash-topbar">
          <div className="dash-topbar-brand">
            Gym<span>Tracker</span>
          </div>
          <button className="dash-burger" onClick={() => setOpen(true)} aria-label="Abrir menú">
            <span /><span /><span />
          </button>
        </div>

        <main className="dash-main">
          <Outlet context={{ usuario, setUsuario }} />
        </main>
      </div>
    </div>
  )
}
