import { useOutletContext } from 'react-router-dom'
import { calcularMacros } from '../utils/macros'

export default function Metricas() {
  const { usuario } = useOutletContext()
  const macros = calcularMacros(usuario)
  const imc = usuario.peso && usuario.altura
    ? usuario.peso / Math.pow(usuario.altura / 100, 2)
    : null

  const imcCategoria = (valor) => {
    if (valor < 18.5) return 'Bajo peso'
    if (valor < 25)   return 'Saludable'
    if (valor < 30)   return 'Sobrepeso'
    return 'Obesidad'
  }

  return (
    <div>
      <div className="dash-eyebrow">Seguimiento</div>
      <h1 className="dash-title">Métricas</h1>
      <p className="dash-sub">
        Una foto de tu estado físico actual, calculada a partir de los datos de tu perfil.
        Pronto vas a poder ver la evolución de estos números a lo largo del tiempo.
      </p>

      <div className="scoreboard">
        <div className="scoreboard-cell">
          <div className="scoreboard-label">Peso actual</div>
          <div className="scoreboard-value">{usuario.peso}<span className="unit">kg</span></div>
        </div>
        <div className="scoreboard-cell">
          <div className="scoreboard-label">Altura</div>
          <div className="scoreboard-value">{usuario.altura}<span className="unit">cm</span></div>
        </div>
        <div className="scoreboard-cell">
          <div className="scoreboard-label">IMC</div>
          <div className="scoreboard-value gold">{imc?.toFixed(1)}</div>
        </div>
        <div className="scoreboard-cell">
          <div className="scoreboard-label">Categoría IMC</div>
          <div className="scoreboard-value" style={{ fontSize: '1.4rem' }}>{imc && imcCategoria(imc)}</div>
        </div>
      </div>

      <div className="profile-grid cols-2">
        <div className="panel" style={{ marginBottom: 0 }}>
          <div className="panel-head">
            <h2 className="panel-title">Gasto energético</h2>
            <span className="panel-note">Estimado</span>
          </div>
          <div className="macro-list" style={{ gap: 16 }}>
            <Dato label="Edad" valor={`${usuario.edad} años`} />
            <Dato label="Sexo" valor={usuario.sexo === 'M' ? 'Masculino' : 'Femenino'} />
            <Dato label="Días de actividad" valor={`${usuario.actividadFisica} por semana`} />
            <Dato label="Calorías diarias objetivo" valor={`${macros?.calorias} kcal`} resaltado />
          </div>
        </div>

        <div className="coming-soon" style={{ borderTop: 'none', marginTop: 0, padding: '8px 0' }}>
          <span className="coming-soon-tag">Próximamente</span>
          <h2 className="coming-soon-title" style={{ fontSize: '1.5rem' }}>Gráficos de evolución</h2>
          <p className="coming-soon-desc">
            Vamos a sumar gráficos de peso, volumen de entrenamiento y composición corporal
            semana a semana, para que puedas ver tu progreso real con el tiempo —
            no solo una foto del presente.
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
