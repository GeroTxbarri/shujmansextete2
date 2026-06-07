import { useOutletContext } from 'react-router-dom'
import { calcularMacros, OBJETIVO_LABEL, ACTIVIDAD_LABEL } from '../utils/macros'

export default function Dieta() {
  const { usuario } = useOutletContext()
  const macros = calcularMacros(usuario)

  if (!macros) return null

  const kcalProteinas = macros.proteinas * 4
  const kcalGrasas = macros.grasas * 9
  const kcalCarbs = macros.carbohidratos * 4

  const filas = [
    { nombre: 'Proteínas',     color: 'var(--clr-primary)', gramos: macros.proteinas,    kcal: kcalProteinas, regla: '2 g por kg de peso corporal' },
    { nombre: 'Grasas',        color: '#e8c468',            gramos: macros.grasas,       kcal: kcalGrasas,    regla: '1 g por kg de peso corporal' },
    { nombre: 'Carbohidratos', color: '#a0a0a0',            gramos: macros.carbohidratos, kcal: kcalCarbs,    regla: 'el resto de las calorías totales' },
  ]

  return (
    <div>
      <div className="dash-eyebrow">Nutrición</div>
      <h1 className="dash-title">Tu dieta</h1>
      <p className="dash-sub">
        Tu objetivo actual es <strong style={{ color: 'var(--clr-primary)' }}>{OBJETIVO_LABEL[usuario.objetivo]?.toLowerCase()}</strong>.
        Estos son los valores diarios recomendados según tu peso, altura, edad y nivel de actividad
        ({ACTIVIDAD_LABEL(usuario.actividadFisica)}).
      </p>

      <div className="reveal-hero">
        <div className="reveal-hero-value">{macros.calorias}</div>
        <div className="reveal-hero-label">Calorías totales recomendadas por día</div>
      </div>

      <div className="panel">
        <div className="panel-head">
          <h2 className="panel-title">Distribución de macronutrientes</h2>
          <span className="panel-note">Gramos / kcal aportadas</span>
        </div>

        <div className="macro-list">
          {filas.map((f, i) => (
            <div className="macro-row" key={f.nombre}>
              <span className="macro-name">
                <span className="macro-dot" style={{ background: f.color }} />
                {f.nombre}
              </span>
              <div className="macro-track">
                <div
                  className="macro-fill"
                  style={{
                    width: `${Math.round(f.kcal / macros.calorias * 100)}%`,
                    background: f.color,
                    animationDelay: `${i * 0.12}s`,
                  }}
                />
              </div>
              <span className="macro-amount"><strong>{f.gramos}</strong> g · {Math.round(f.kcal)} kcal</span>
            </div>
          ))}
        </div>
      </div>

      <div className="profile-grid cols-2">
        <div className="panel" style={{ marginBottom: 0 }}>
          <div className="panel-head">
            <h2 className="panel-title">Cómo se calculó</h2>
          </div>
          <p className="coming-soon-desc" style={{ marginBottom: 16 }}>
            Primero estimamos tu metabolismo basal (TMB) con la fórmula de Mifflin-St Jeor
            usando tu peso, altura, edad y sexo. Después lo ajustamos según tus
            días de entrenamiento semanales y tu objetivo.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {filas.map(f => (
              <li key={f.nombre} style={{ display: 'flex', gap: 12, fontSize: '0.92rem', color: 'var(--clr-text-muted)' }}>
                <span className="macro-dot" style={{ background: f.color, marginTop: 6 }} />
                <span><strong style={{ color: 'var(--clr-text)' }}>{f.nombre}:</strong> {f.regla}.</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="panel" style={{ marginBottom: 0 }}>
          <div className="panel-head">
            <h2 className="panel-title">Datos usados</h2>
          </div>
          <div className="macro-list" style={{ gap: 16 }}>
            <Dato label="Peso" valor={`${usuario.peso} kg`} />
            <Dato label="Altura" valor={`${usuario.altura} cm`} />
            <Dato label="Edad" valor={`${usuario.edad} años`} />
            <Dato label="Sexo" valor={usuario.sexo === 'M' ? 'Masculino' : 'Femenino'} />
            <Dato label="Actividad" valor={ACTIVIDAD_LABEL(usuario.actividadFisica)} />
            <Dato label="Objetivo" valor={OBJETIVO_LABEL[usuario.objetivo]} resaltado />
          </div>
          <p className="panel-note" style={{ marginTop: 24 }}>
            ¿Cambió algo? Actualizalo en Configuración de perfil y recalculamos al instante.
          </p>
        </div>
      </div>
    </div>
  )
}

function Dato({ label, valor, resaltado }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--clr-border)', paddingBottom: 12 }}>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--clr-text-faint)' }}>{label}</span>
      <span style={{ fontWeight: 600, color: resaltado ? 'var(--clr-primary)' : 'var(--clr-text)' }}>{valor}</span>
    </div>
  )
}
