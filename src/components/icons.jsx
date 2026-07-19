// Hand-authored icon set — simple 2px strokes on a 24px grid.
function Svg({ children, size = 20, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  )
}

export const ArrowLeft = (p) => (
  <Svg {...p}>
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </Svg>
)

export const ArrowRight = (p) => (
  <Svg {...p}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </Svg>
)

export const Lock = (p) => (
  <Svg {...p}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </Svg>
)

export const Printer = (p) => (
  <Svg {...p}>
    <path d="M6 9V3h12v6" />
    <rect x="6" y="14" width="12" height="7" />
    <path d="M6 17H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
  </Svg>
)

export const Check = (p) => (
  <Svg {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
)

export const Cross = (p) => (
  <Svg {...p}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Svg>
)

export const Bulb = (p) => (
  <Svg {...p}>
    <path d="M9 18h6" />
    <path d="M10 22h4" />
    <path d="M12 2a7 7 0 0 0-4.2 12.6c.7.6 1.2 1.5 1.2 2.4h6c0-.9.5-1.8 1.2-2.4A7 7 0 0 0 12 2z" />
  </Svg>
)

export const Target = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" />
  </Svg>
)

export const Trophy = (p) => (
  <Svg {...p}>
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M7 4h10v6a5 5 0 0 1-10 0z" />
    <path d="M7 6H4a1 1 0 0 0-1 1c0 2.2 1.8 4 4 4" />
    <path d="M17 6h3a1 1 0 0 1 1 1c0 2.2-1.8 4-4 4" />
  </Svg>
)

export function Star({ filled = false, size = 18, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? 'var(--gold)' : 'none'}
      stroke={filled ? 'var(--gold)' : 'var(--line-strong)'}
      strokeWidth="2"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" />
    </svg>
  )
}

export function Logo({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill="var(--accent, var(--coral))" />
      <path
        d="M16 5.5l2.4 8.1 8.1 2.4-8.1 2.4L16 26.5l-2.4-8.1-8.1-2.4 8.1-2.4z"
        fill="#FFFDF9"
      />
    </svg>
  )
}
