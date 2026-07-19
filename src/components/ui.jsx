import { Star, ArrowLeft } from './icons.jsx'

export function StarBar({ stars, size = 18 }) {
  return (
    <span className="starbar" role="img" aria-label={`${stars} of 3 stars`}>
      {[0, 1, 2].map((i) => (
        <Star key={i} filled={i < stars} size={size} />
      ))}
    </span>
  )
}

export function ProgressRing({ pct, size = 120, stroke = 10, children }) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--line)" strokeWidth={stroke} />
        <circle
          className="ring-fg"
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct / 100)}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="ring-label">{children}</div>
    </div>
  )
}

const CONFETTI_COLORS = ['var(--coral)', 'var(--teal)', 'var(--violet)', 'var(--gold)', 'var(--green)']

export function Confetti({ count = 20 }) {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <i
          key={i}
          style={{
            '--dx': `${((i * 37) % 100) - 50}vw`,
            '--delay': `${(i % 7) * 0.08}s`,
            '--rot': `${((i * 131) % 720) - 360}deg`,
            background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
            left: `${(i * 53) % 100}%`,
          }}
        />
      ))}
    </div>
  )
}

export function BackLink({ href, children }) {
  return (
    <a className="backlink no-print" href={href}>
      <ArrowLeft size={16} />
      <span>{children}</span>
    </a>
  )
}
