import { Link } from 'react-router-dom'

const features = [
  {
    icon: '🏋️',
    title: 'Registrá cada entrenamiento',
    desc: 'Llevá el registro de tus sesiones, series, repeticiones y pesos con total precisión.',
  },
  {
    icon: '📈',
    title: 'Seguí tu progreso',
    desc: 'Visualizá tu evolución con gráficos claros y comparativas semana a semana.',
  },
  {
    icon: '🏆',
    title: 'Superá tus récords',
    desc: 'Tu personal record siempre visible. Cada sesión es una oportunidad de mejora.',
  },
  {
    icon: '💪',
    title: 'Rutinas personalizadas',
    desc: 'Armá tus propias rutinas y organizalas por grupos musculares o días de la semana.',
  },
  {
    icon: '📊',
    title: 'Estadísticas detalladas',
    desc: 'Volumen total, frecuencia de entrenamiento, tendencias musculares y mucho más.',
  },
  {
    icon: '🔥',
    title: 'Racha de entrenamientos',
    desc: 'Mantené tu motivación alta con un sistema de rachas diarias y logros desbloqueables.',
  },
]

const steps = [
  {
    num: '01',
    title: 'Creá tu cuenta',
    desc: 'Registrate gratis en segundos. Sin tarjeta de crédito, sin compromisos.',
  },
  {
    num: '02',
    title: 'Armá tu rutina',
    desc: 'Configurá tus ejercicios favoritos y organizalos por días de entrenamiento.',
  },
  {
    num: '03',
    title: 'Entrenás y registrás',
    desc: 'Durante cada sesión, anotás tus series y repeticiones en tiempo real.',
  },
  {
    num: '04',
    title: 'Crecés sin límites',
    desc: 'Analizá tu progreso y ajustá tu entrenamiento para seguir mejorando.',
  },
]

export default function Landing() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          <div className="nav-logo-icon">💪</div>
          Gym<span>Tracker</span>
        </div>
        <div className="nav-actions">
          <Link to="/login" className="btn btn-outline">Iniciar sesión</Link>
          <Link to="/register" className="btn btn-primary">Empezar gratis</Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="container">
          <div className="hero-inner">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Lanzamiento · 100% gratuito
            </div>

            <h1 className="hero-title">
              Tu gym, tu reglas,<br />
              tu <span className="highlight">progreso</span> al{' '}
              <span className="highlight-accent">máximo</span>
            </h1>

            <p className="hero-subtitle">
              Registrá cada entrenamiento, seguí tu evolución y superá tus
              récords personales. Todo en un solo lugar, simple y sin excusas.
            </p>

            <div className="hero-actions">
              <Link to="/register" className="btn btn-primary btn-lg" id="hero-cta-register">
                🚀 Empezar ahora
              </Link>
              <Link to="/login" className="btn btn-outline btn-lg" id="hero-cta-login">
                Iniciar sesión
              </Link>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-value">100%</div>
                <div className="hero-stat-label">Gratuito</div>
              </div>
              <div className="hero-stat-divider" />
              <div>
                <div className="hero-stat-value">∞</div>
                <div className="hero-stat-label">Ejercicios</div>
              </div>
              <div className="hero-stat-divider" />
              <div>
                <div className="hero-stat-value">0</div>
                <div className="hero-stat-label">Excusas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="container">
          <p className="section-label">Funcionalidades</p>
          <h2 className="section-title">Todo lo que necesitás<br />para entrenar mejor</h2>
          <p className="section-sub">
            Sin complicaciones, sin pagas ocultas. Solo las herramientas que
            realmente necesitás para mejorar cada día.
          </p>

          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-card-title">{f.title}</h3>
                <p className="feature-card-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="container">
          <p className="section-label">Cómo funciona</p>
          <h2 className="section-title">Simple de arrancar,<br />poderoso para crecer</h2>
          <p className="section-sub" style={{ marginBottom: '60px' }}>
            En 4 pasos estás entrenando de manera inteligente.
          </p>

          <div className="how-steps">
            {steps.map((s) => (
              <div className="how-step" key={s.num}>
                <div className="step-num">{s.num}</div>
                <h3 className="step-title">{s.title}</h3>
                <p className="step-desc">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container">
          <div className="cta-box">
            <h2 className="cta-title">
              ¿Listo para <span style={{ color: 'var(--clr-primary)' }}>transformarte</span>?
            </h2>
            <p className="cta-sub">
              Unete hoy. Es gratis, siempre.
            </p>
            <Link to="/register" className="btn btn-primary btn-lg" id="footer-cta">
              Crear cuenta gratis 🔥
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 <strong>GymTracker</strong>. Hecho con 💪 para los que no se rinden.</p>
      </footer>
    </>
  )
}
