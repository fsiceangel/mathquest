// Declarative figure renderer. Content files describe figures as plain data
// (math coordinates, y pointing up); this component maps them to SVG. Keeping
// figures as data lets the content validator check them and keeps authored
// chapters free of markup.
//
// fig = { w?, view: [x0, y0, x1, y1], grid?, elems: [...] }
// Element types (all coordinates in math space):
//   { t:'poly', pts:[[x,y],...], closed?, fill? }        polygon / polyline
//   { t:'seg', a:[x,y], b:[x,y], dash? }                 segment
//   { t:'line', a:[x,y], b:[x,y] }                       infinite line through a,b
//   { t:'circle', c:[x,y], r, fill? }
//   { t:'arc', c:[x,y], r, from, to }                    degrees, counterclockwise
//   { t:'point', p:[x,y], label?, dx?, dy? }
//   { t:'label', p:[x,y], text, dx?, dy? }               plain text (no LaTeX)
//   { t:'angle', at, from, to, r?, label? }              small arc marking angle
//   { t:'right', at, from, to, s? }                      right-angle square
//   { t:'tick', a, b, n? }                               equal-length tick marks
//   { t:'parabola', a, b, c }                            y = ax^2 + bx + c
//   { t:'curve', pts:[[x,y],...] }                       sampled curve
const PAD = 18

function norm([x, y]) {
  const len = Math.hypot(x, y) || 1
  return [x / len, y / len]
}

export function Fig({ fig }) {
  const [x0, y0, x1, y1] = fig.view
  const w = fig.w || 320
  const s = (w - 2 * PAD) / (x1 - x0)
  const h = Math.round(2 * PAD + (y1 - y0) * s)
  const X = (x) => PAD + (x - x0) * s
  const Y = (y) => h - PAD - (y - y0) * s
  const P = ([x, y]) => `${X(x)},${Y(y)}`

  const parts = []
  let key = 0
  const k = () => key++

  if (fig.grid) {
    // Keep unit squares whenever they stay at least 11px apart on screen, so a
    // solution that says "count three squares right" matches what is drawn.
    const step = Math.max(1, Math.ceil(11 / s))
    const gridLines = []
    for (let gx = Math.ceil(x0); gx <= x1; gx += step) {
      gridLines.push(<line key={k()} x1={X(gx)} y1={Y(y0)} x2={X(gx)} y2={Y(y1)} className="fig-grid" />)
    }
    for (let gy = Math.ceil(y0); gy <= y1; gy += step) {
      gridLines.push(<line key={k()} x1={X(x0)} y1={Y(gy)} x2={X(x1)} y2={Y(gy)} className="fig-grid" />)
    }
    parts.push(<g key={k()}>{gridLines}</g>)
    if (x0 <= 0 && x1 >= 0) parts.push(<line key={k()} x1={X(0)} y1={Y(y0)} x2={X(0)} y2={Y(y1)} className="fig-axis" />)
    if (y0 <= 0 && y1 >= 0) parts.push(<line key={k()} x1={X(x0)} y1={Y(0)} x2={X(x1)} y2={Y(0)} className="fig-axis" />)
    const stepPx = step * s
    const labelStep = step * (stepPx >= 28 ? 1 : stepPx >= 14 ? 2 : 4)
    for (let gx = Math.ceil(x0 / labelStep) * labelStep; gx <= x1; gx += labelStep) {
      if (gx !== 0 && y0 <= 0 && y1 >= 0) {
        parts.push(<text key={k()} x={X(gx)} y={Y(0) + 14} className="fig-ticklabel" textAnchor="middle">{gx}</text>)
      }
    }
    for (let gy = Math.ceil(y0 / labelStep) * labelStep; gy <= y1; gy += labelStep) {
      if (gy !== 0 && x0 <= 0 && x1 >= 0) {
        parts.push(<text key={k()} x={X(0) - 7} y={Y(gy) + 4} className="fig-ticklabel" textAnchor="end">{gy}</text>)
      }
    }
  }

  for (const e of fig.elems || []) {
    switch (e.t) {
      case 'poly': {
        const pts = e.pts.map(P).join(' ')
        if (e.closed === false) parts.push(<polyline key={k()} points={pts} className="fig-stroke" fill="none" />)
        else parts.push(<polygon key={k()} points={pts} className={e.fill === false ? 'fig-stroke' : 'fig-shape'} />)
        break
      }
      case 'seg':
        parts.push(
          <line key={k()} x1={X(e.a[0])} y1={Y(e.a[1])} x2={X(e.b[0])} y2={Y(e.b[1])}
            className={e.hl ? 'fig-ray' : 'fig-stroke'} strokeDasharray={e.dash ? '6 5' : undefined} />,
        )
        break
      case 'line': {
        const [dx, dy] = norm([e.b[0] - e.a[0], e.b[1] - e.a[1]])
        const L = (x1 - x0 + y1 - y0) * 4
        parts.push(
          <line key={k()} x1={X(e.a[0] - dx * L)} y1={Y(e.a[1] - dy * L)} x2={X(e.a[0] + dx * L)} y2={Y(e.a[1] + dy * L)} className="fig-stroke" />,
        )
        break
      }
      case 'circle':
        parts.push(
          <circle key={k()} cx={X(e.c[0])} cy={Y(e.c[1])} r={e.r * s}
            className={e.fill ? 'fig-shape' : 'fig-stroke'} fill={e.fill ? undefined : 'none'} />,
        )
        break
      case 'arc': {
        const pts = []
        const a0 = (e.from * Math.PI) / 180
        const a1 = (e.to * Math.PI) / 180
        for (let i = 0; i <= 48; i++) {
          const a = a0 + ((a1 - a0) * i) / 48
          pts.push(`${X(e.c[0] + e.r * Math.cos(a))},${Y(e.c[1] + e.r * Math.sin(a))}`)
        }
        parts.push(<polyline key={k()} points={pts.join(' ')} className="fig-stroke" fill="none" />)
        break
      }
      case 'point': {
        parts.push(
          <circle key={k()} cx={X(e.p[0])} cy={Y(e.p[1])} r="3.5" className={e.open ? 'fig-point-open' : 'fig-point'} />,
        )
        if (e.label) {
          parts.push(
            <text key={k()} x={X(e.p[0]) + (e.dx ?? 8)} y={Y(e.p[1]) + (e.dy ?? -8)} className="fig-label">{e.label}</text>,
          )
        }
        break
      }
      case 'label':
        parts.push(
          <text key={k()} x={X(e.p[0]) + (e.dx ?? 0)} y={Y(e.p[1]) + (e.dy ?? 0)} className="fig-label" textAnchor="middle">{e.text}</text>,
        )
        break
      case 'angle': {
        const r = e.r ?? 0.55
        const u = norm([e.from[0] - e.at[0], e.from[1] - e.at[1]])
        const v = norm([e.to[0] - e.at[0], e.to[1] - e.at[1]])
        let a0 = Math.atan2(u[1], u[0])
        let a1 = Math.atan2(v[1], v[0])
        if (a1 < a0) a1 += 2 * Math.PI
        if (a1 - a0 > Math.PI) [a0, a1] = [a1, a0 + 2 * Math.PI]
        const pts = []
        for (let i = 0; i <= 24; i++) {
          const a = a0 + ((a1 - a0) * i) / 24
          pts.push(`${X(e.at[0] + r * Math.cos(a))},${Y(e.at[1] + r * Math.sin(a))}`)
        }
        parts.push(<polyline key={k()} points={pts.join(' ')} className="fig-stroke" fill="none" />)
        if (e.label) {
          const mid = (a0 + a1) / 2
          parts.push(
            <text key={k()} x={X(e.at[0] + r * 2 * Math.cos(mid))} y={Y(e.at[1] + r * 2 * Math.sin(mid)) + 4}
              className="fig-label" textAnchor="middle">{e.label}</text>,
          )
        }
        break
      }
      case 'right': {
        const size = e.s ?? 0.38
        const u = norm([e.from[0] - e.at[0], e.from[1] - e.at[1]])
        const v = norm([e.to[0] - e.at[0], e.to[1] - e.at[1]])
        const p1 = [e.at[0] + u[0] * size, e.at[1] + u[1] * size]
        const p2 = [p1[0] + v[0] * size, p1[1] + v[1] * size]
        const p3 = [e.at[0] + v[0] * size, e.at[1] + v[1] * size]
        parts.push(<polyline key={k()} points={`${P(p1)} ${P(p2)} ${P(p3)}`} className="fig-stroke" fill="none" />)
        break
      }
      case 'tick': {
        const n = e.n ?? 1
        const [dx, dy] = norm([e.b[0] - e.a[0], e.b[1] - e.a[1]])
        const [nx, ny] = [-dy, dx]
        const mx = (e.a[0] + e.b[0]) / 2
        const my = (e.a[1] + e.b[1]) / 2
        const tickLen = 0.22
        const gap = 0.18
        for (let i = 0; i < n; i++) {
          const off = (i - (n - 1) / 2) * gap
          const cx = mx + dx * off
          const cy = my + dy * off
          parts.push(
            <line key={k()} x1={X(cx - nx * tickLen)} y1={Y(cy - ny * tickLen)} x2={X(cx + nx * tickLen)} y2={Y(cy + ny * tickLen)} className="fig-stroke" />,
          )
        }
        break
      }
      case 'parabola': {
        const pts = []
        for (let i = 0; i <= 64; i++) {
          const x = x0 + ((x1 - x0) * i) / 64
          const y = e.a * x * x + e.b * x + e.c
          if (y >= y0 - 2 && y <= y1 + 2) pts.push(`${X(x)},${Y(y)}`)
        }
        parts.push(<polyline key={k()} points={pts.join(' ')} className="fig-curve" fill="none" />)
        break
      }
      case 'curve':
        parts.push(<polyline key={k()} points={e.pts.map(P).join(' ')} className="fig-curve" fill="none" />)
        break
    }
  }

  return (
    <div className="fig-wrap">
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} role="img" aria-label={fig.alt || 'figure'}>
        {parts}
      </svg>
    </div>
  )
}
