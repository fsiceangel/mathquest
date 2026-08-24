// Introduction to Geometry — Chapter 15: Curved Surfaces
// All problems, explanations, and examples are original MathQuest content.

// ---- figure helpers: 3D solids drawn as 2D wireframe projections ----
const K = 0.3 // vertical squash factor for ellipses seen edge-on
const R2 = (x) => Math.round(x * 100) / 100

function ellArc(cx, cy, rx, deg0, deg1, n = 28) {
  const pts = []
  for (let i = 0; i <= n; i++) {
    const a = ((deg0 + ((deg1 - deg0) * i) / n) * Math.PI) / 180
    pts.push([R2(cx + rx * Math.cos(a)), R2(cy + K * rx * Math.sin(a))])
  }
  return pts
}

function dashedEllArc(cx, cy, rx, deg0, deg1, n = 8) {
  const p = ellArc(cx, cy, rx, deg0, deg1, n)
  const out = []
  for (let i = 0; i < n; i++) out.push({ t: 'seg', a: p[i], b: p[i + 1], dash: true })
  return out
}

function cylElems(r, h) {
  return [
    { t: 'curve', pts: ellArc(0, h, r, 0, 360) },
    { t: 'curve', pts: ellArc(0, 0, r, 180, 360) },
    ...dashedEllArc(0, 0, r, 0, 180),
    { t: 'seg', a: [-r, 0], b: [-r, h] },
    { t: 'seg', a: [r, 0], b: [r, h] },
  ]
}

function cylFig(r, h, rText, hText, extra = [], w) {
  const diam = rText.startsWith('d')
  return {
    ...(w ? { w } : {}),
    view: [-r - 1.3, -K * r - 1, r + 1.3, h + K * r + 1],
    elems: [
      ...cylElems(r, h),
      { t: 'seg', a: [diam ? -r : 0, h], b: [r, h], dash: true },
      { t: 'point', p: [0, h] },
      { t: 'label', p: [diam ? 0 : r / 2, h], text: rText, dx: 0, dy: -10 },
      { t: 'label', p: [r, h / 2], text: hText, dx: 20, dy: 0 },
      ...extra,
    ],
  }
}

function coneFig(r, h, rText, hText, lText, extra = [], w) {
  const diam = rText.startsWith('d')
  const elems = [
    { t: 'curve', pts: ellArc(0, 0, r, 180, 360) },
    ...dashedEllArc(0, 0, r, 0, 180),
    { t: 'seg', a: [-r, 0], b: [0, h] },
    { t: 'seg', a: [r, 0], b: [0, h] },
    { t: 'seg', a: [diam ? -r : 0, 0], b: [r, 0], dash: true },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [diam ? 0 : r / 2, 0], text: rText, dx: 0, dy: 14 },
  ]
  if (hText) {
    elems.push(
      { t: 'seg', a: [0, 0], b: [0, h], dash: true },
      { t: 'right', at: [0, 0], from: [r, 0], to: [0, h] },
      { t: 'label', p: [0, h / 2], text: hText, dx: -20, dy: 0 },
    )
  }
  if (lText) elems.push({ t: 'label', p: [r / 2, h / 2], text: lText, dx: 18, dy: 0 })
  return {
    ...(w ? { w } : {}),
    view: [-r - 1.3, -K * r - 1, r + 1.3, h + 1],
    elems: [...elems, ...extra],
  }
}

function sphereFig(r, rText, diam = false) {
  const elems = [
    { t: 'circle', c: [0, 0], r },
    { t: 'curve', pts: ellArc(0, 0, r, 180, 360) },
    ...dashedEllArc(0, 0, r, 0, 180),
    { t: 'point', p: [0, 0] },
  ]
  if (diam) {
    elems.push(
      { t: 'seg', a: [-r, 0], b: [r, 0], dash: true },
      { t: 'label', p: [0, r / 2], text: rText, dx: 0, dy: 0 },
    )
  } else {
    elems.push(
      { t: 'seg', a: [0, 0], b: [R2(r * 0.707), R2(r * 0.707)], dash: true },
      { t: 'label', p: [R2(r * 0.35), R2(r * 0.35)], text: rText, dx: 14, dy: 12 },
    )
  }
  return { view: [-r - 1, -r - 1, r + 1, r + 1], elems }
}

function hemiFig(r, rText) {
  return {
    view: [-r - 1, -K * r - 1, r + 1, r + 1],
    elems: [
      { t: 'arc', c: [0, 0], r, from: 0, to: 180 },
      { t: 'curve', pts: ellArc(0, 0, r, 180, 360) },
      ...dashedEllArc(0, 0, r, 0, 180),
      { t: 'point', p: [0, 0] },
      { t: 'seg', a: [0, 0], b: [r, 0], dash: true },
      { t: 'label', p: [r / 2, 0], text: rText, dx: 0, dy: 16 },
    ],
  }
}

function sectorFig(R, deg, rText, angText, arcText) {
  const rad = (d) => (d * Math.PI) / 180
  const mid = rad(deg / 2)
  const elems = [
    { t: 'arc', c: [0, 0], r: R, from: 0, to: deg },
    { t: 'seg', a: [0, 0], b: [R, 0] },
    { t: 'seg', a: [0, 0], b: [R2(R * Math.cos(rad(deg))), R2(R * Math.sin(rad(deg)))] },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [R / 2, 0], text: rText, dx: 0, dy: 14 },
  ]
  if (angText) elems.push({ t: 'label', p: [R2(0.45 * R * Math.cos(mid)), R2(0.45 * R * Math.sin(mid))], text: angText, dx: 0, dy: 4 })
  if (arcText) elems.push({ t: 'label', p: [R2(1.12 * R * Math.cos(mid)), R2(1.12 * R * Math.sin(mid))], text: arcText, dx: 0, dy: 0 })
  return { view: [-R - 2.5, -R - 2.5, R + 2.5, R + 2.5], elems }
}

function siloFig(r, h, rText, hText, w) {
  return {
    ...(w ? { w } : {}),
    view: [-r - 1.3, -K * r - 1, r + 1.3, h + r + 0.5],
    elems: [
      ...cylElems(r, h),
      { t: 'arc', c: [0, h], r, from: 0, to: 180 },
      { t: 'seg', a: [0, h], b: [r, h], dash: true },
      { t: 'point', p: [0, h] },
      { t: 'label', p: [r / 2, h], text: rText, dx: 0, dy: 14 },
      { t: 'label', p: [r, h / 2], text: hText, dx: 20, dy: 0 },
    ],
  }
}

function capsuleFig(r, h, rText, hText, w) {
  return {
    ...(w ? { w } : {}),
    view: [-r - 1.3, -r - 0.5, r + 1.3, h + r + 0.5],
    elems: [
      { t: 'seg', a: [-r, 0], b: [-r, h] },
      { t: 'seg', a: [r, 0], b: [r, h] },
      { t: 'arc', c: [0, h], r, from: 0, to: 180 },
      { t: 'arc', c: [0, 0], r, from: 180, to: 360 },
      { t: 'curve', pts: ellArc(0, h, r, 180, 360) },
      ...dashedEllArc(0, h, r, 0, 180),
      { t: 'curve', pts: ellArc(0, 0, r, 180, 360) },
      ...dashedEllArc(0, 0, r, 0, 180),
      { t: 'seg', a: [0, h], b: [r, h], dash: true },
      { t: 'point', p: [0, h] },
      { t: 'label', p: [r / 2, h], text: rText, dx: 0, dy: -10 },
      { t: 'label', p: [r, h / 2], text: hText, dx: 20, dy: 0 },
    ],
  }
}

function cupFig(r, h, rText, hText, extra = [], w) {
  return {
    ...(w ? { w } : {}),
    view: [-r - 1.3, -0.5, r + 1.3, h + K * r + 0.5],
    elems: [
      { t: 'seg', a: [0, 0], b: [-r, h] },
      { t: 'seg', a: [0, 0], b: [r, h] },
      { t: 'curve', pts: ellArc(0, h, r, 0, 360) },
      { t: 'seg', a: [0, h], b: [r, h], dash: true },
      { t: 'seg', a: [0, 0], b: [0, h], dash: true },
      { t: 'point', p: [0, h] },
      { t: 'label', p: [r / 2, h], text: rText, dx: 0, dy: -10 },
      { t: 'label', p: [0, h / 2], text: hText, dx: -18, dy: 0 },
      ...extra,
    ],
  }
}

function tankBallFig(R, H, r, cy, rText, ballText, w) {
  return {
    ...(w ? { w } : {}),
    view: [-R - 1.3, -K * R - 1, R + 1.3, H + K * R + 1],
    elems: [
      ...cylElems(R, H),
      { t: 'circle', c: [0, cy], r },
      { t: 'seg', a: [0, cy], b: [R2(0.707 * r), R2(cy + 0.707 * r)], dash: true },
      { t: 'label', p: [R2(0.35 * r), R2(cy + 0.35 * r)], text: ballText, dx: 14, dy: 10 },
      { t: 'seg', a: [0, H], b: [R, H], dash: true },
      { t: 'point', p: [0, H] },
      { t: 'label', p: [R / 2, H], text: rText, dx: 0, dy: -10 },
    ],
  }
}

// ---- Section 15.1: Cylinders ----
const s151 = {
  id: '15.1',
  title: 'Cylinders',
  learn: {
    concepts: [
      {
        heading: 'A stack of circles',
        body: 'A cylinder is what you get when a circle sweeps straight upward: a soup can, a paper-towel tube, a round pillar. Its volume works exactly like a prism\'s — area of the base times the height. The base is a circle of area $\\pi r^2$, so the volume is $V = \\pi r^2 h$.',
      },
      {
        heading: 'Unroll the label',
        body: 'Here is the key trick of this whole chapter: curved surfaces can often be flattened without stretching. Peel the label off a can and cut it with one straight vertical snip — it flattens into a rectangle! Its height is the can\'s height $h$, and its width wrapped exactly once around the circular top, so the width is the circumference $2\\pi r$. That is why the lateral (side) surface area of a cylinder is $2\\pi r \\times h = 2\\pi rh$.',
      },
      {
        heading: 'Add the two lids',
        body: 'The total surface area of a closed cylinder is the unrolled tube plus the two circular lids, each of area $\\pi r^2$. So $S = 2\\pi r^2 + 2\\pi rh$. Before you compute, always ask which surfaces the problem actually wants: a label has no lids, an open tank is missing its top, a pipe might have no ends at all.',
      },
      {
        heading: 'Keep $\\pi$ exact, and run formulas backwards',
        body: 'An answer like $45\\pi$ is exact; $141.37$ is only an approximation. Leave $\\pi$ in your answers unless a problem asks you to estimate. And every formula runs in reverse: if you know the volume and the radius, divide by $\\pi r^2$ to find the height, and if you know the volume and the height, divide and then take a square root to find $r$.',
      },
    ],
    examples: [
      {
        problem: 'Find the volume of a cylinder with radius $4$ and height $9$.',
        steps: [
          'The base is a circle of radius $4$, so its area is $\\pi \\cdot 4^2 = 16\\pi$.',
          'The cylinder is that base swept up through a height of $9$, so multiply: $V = 16\\pi \\cdot 9$.',
          'That gives $V = 144\\pi$. Leave it exact — no rounding needed!',
        ],
        answer: '$144\\pi$',
        fig: cylFig(4, 9, 'r = 4', 'h = 9'),
      },
      {
        problem: 'Find the total surface area of a closed cylinder with radius $3$ and height $7$.',
        steps: [
          'Unroll the side into a rectangle: one side is the height $7$, and the other side wrapped once around the top circle, so it is the circumference $2\\pi \\cdot 3 = 6\\pi$. The tube contributes $6\\pi \\cdot 7 = 42\\pi$.',
          'Now the two lids: each is a circle of area $\\pi \\cdot 3^2 = 9\\pi$, so together they give $18\\pi$.',
          'Total: $S = 42\\pi + 18\\pi = 60\\pi$.',
        ],
        answer: '$60\\pi$',
        fig: cylFig(3, 7, 'r = 3', 'h = 7'),
      },
      {
        problem: 'A cylinder has volume $250\\pi$ and radius $5$. Find its height.',
        steps: [
          'Write down what the volume formula says: $\\pi \\cdot 5^2 \\cdot h = 250\\pi$.',
          'The base area is $25\\pi$, so $25\\pi \\cdot h = 250\\pi$.',
          'Divide both sides by $25\\pi$: $h = 10$. Check: $\\pi \\cdot 25 \\cdot 10 = 250\\pi$. ✓',
        ],
        answer: '$h = 10$',
        fig: cylFig(5, 7, 'r = 5', 'h = ?'),
      },
    ],
  },
  problems: [
    {
      q: 'A cylinder has radius $3$ and height $5$. What is its volume?',
      fig: cylFig(3, 5, 'r = 3', 'h = 5'),
      choices: ['$15\\pi$', '$45\\pi$', '$90\\pi$', '$30\\pi$'],
      answer: 1,
      solution: 'Volume is base area times height: $V = \\pi r^2 h = \\pi \\cdot 3^2 \\cdot 5 = 45\\pi$. Watch the square: $\\pi \\cdot 3 \\cdot 5 = 15\\pi$ skips squaring the radius, and $30\\pi$ is the lateral surface area $2\\pi rh$ — a completely different measurement.',
    },
    {
      q: 'What is the lateral (side) surface area of a cylinder with radius $2$ and height $7$?',
      choices: ['$28\\pi$', '$14\\pi$', '$36\\pi$', '$56\\pi$'],
      answer: 0,
      solution: 'Unroll the side into a rectangle: its width is the circumference $2\\pi \\cdot 2 = 4\\pi$ and its height is $7$, so the area is $4\\pi \\cdot 7 = 28\\pi$. The choice $14\\pi$ misses the $2$ in $2\\pi r$, and $56\\pi$ treats the radius as if it were $4$, the diameter.',
    },
    {
      q: 'Find the total surface area of a closed cylinder with radius $5$ and height $6$.',
      fig: cylFig(5, 6, 'r = 5', 'h = 6'),
      choices: ['$60\\pi$', '$85\\pi$', '$110\\pi$', '$80\\pi$'],
      answer: 2,
      solution: 'The tube unrolls to $2\\pi \\cdot 5 \\cdot 6 = 60\\pi$, and the two lids add $2 \\cdot \\pi \\cdot 5^2 = 50\\pi$, for a total of $110\\pi$. The choice $60\\pi$ is the tube alone, and $85\\pi$ remembers only one of the two lids.',
    },
    {
      q: 'A cylinder has diameter $10$ and height $4$. What is its volume?',
      fig: cylFig(5, 4, 'd = 10', 'h = 4'),
      choices: ['$400\\pi$', '$100\\pi$', '$40\\pi$', '$200\\pi$'],
      answer: 1,
      solution: 'The diameter is $10$, so the radius is $5$ — always convert first! Then $V = \\pi \\cdot 5^2 \\cdot 4 = 100\\pi$. Plugging the full diameter into $\\pi r^2 h$ gives $400\\pi$, four times too big, because the radius got doubled and then squared.',
    },
    {
      q: 'A paper label wraps exactly once around a can of radius $3$ and height $11$, with no overlap. What is the area of the label?',
      fig: cylFig(3, 11, 'r = 3', 'h = 11', [], 260),
      choices: ['$33\\pi$', '$18\\pi$', '$84\\pi$', '$66\\pi$'],
      answer: 3,
      solution: 'Flattened out, the label is a rectangle: height $11$ and width equal to the circumference $2\\pi \\cdot 3 = 6\\pi$, so its area is $66\\pi$. The choice $84\\pi$ adds the two lids of the can — but a label never covers those! And $33\\pi$ forgets the $2$ in $2\\pi r$.',
    },
    {
      q: 'A cylinder has volume $192\\pi$ and radius $8$. What is its height?',
      fig: cylFig(8, 3, 'r = 8', 'h = ?'),
      choices: ['$3$', '$24$', '$6$', '$12$'],
      answer: 0,
      solution: 'Run the volume formula backwards: $\\pi \\cdot 8^2 \\cdot h = 192\\pi$, so $64h = 192$ and $h = 3$. The choice $24$ comes from dividing by $8$ instead of by $8^2 = 64$ — the base area uses the radius squared.',
    },
    {
      q: 'A cylinder has volume $245\\pi$ and height $5$. What is its radius?',
      choices: ['$7$', '$49$', '$14$', '$5$'],
      answer: 0,
      solution: 'From $\\pi r^2 \\cdot 5 = 245\\pi$ we get $r^2 = 49$. Do not stop there — $49$ is the radius squared. Taking the square root gives $r = 7$. Check: $\\pi \\cdot 49 \\cdot 5 = 245\\pi$. ✓',
    },
    {
      q: 'A cylindrical water tank has radius $6$ and height $10$. It is filled to exactly half its height. What is the volume of the water?',
      fig: cylFig(6, 10, 'r = 6', 'h = 10', [...dashedEllArc(0, 5, 6, 180, 360), { t: 'label', p: [0, 5], text: 'water', dx: 0, dy: 16 }]),
      choices: ['$360\\pi$', '$90\\pi$', '$180\\pi$', '$60\\pi$'],
      answer: 2,
      solution: 'The water itself forms a cylinder with the same radius $6$ but only half the height, $5$. So its volume is $\\pi \\cdot 36 \\cdot 5 = 180\\pi$. Equivalently, take half of the full tank\'s $360\\pi$. Halving the height halves the volume — the base circle is unchanged.',
    },
    {
      q: 'A cylinder of radius $2$ is full of water to a height of $9$. All the water is poured into an empty cylinder of radius $3$. How deep is the water in the new cylinder?',
      choices: ['$6$', '$9$', '$3$', '$4$'],
      answer: 3,
      solution: 'The amount of water never changes: $V = \\pi \\cdot 2^2 \\cdot 9 = 36\\pi$. In the new cylinder the base area is $\\pi \\cdot 3^2 = 9\\pi$, so the depth is $36\\pi \\div 9\\pi = 4$. The tempting answer $6$ scales the height by $\\frac{2}{3}$, but depth scales by the ratio of base AREAS, which is $\\frac{4}{9}$.',
    },
    {
      q: 'A closed cylinder has radius $3$ and total surface area $90\\pi$. What is its height?',
      choices: ['$15$', '$9$', '$12$', '$13.5$'],
      answer: 2,
      solution: 'Total surface is lids plus tube: $2\\pi \\cdot 3^2 + 2\\pi \\cdot 3 \\cdot h = 90\\pi$, so $18 + 6h = 90$ and $h = 12$. The choice $15$ divides $90$ by $6$ without removing the two lids first, and $13.5$ removes only one lid.',
    },
  ],
}

// ---- Section 15.2: Cones ----
const s152 = {
  id: '15.2',
  title: 'Cones',
  learn: {
    concepts: [
      {
        heading: 'A third of its cylinder',
        body: 'A cone is a circular base with every point joined to one apex above it. If you built a cone and a cylinder with the same base and the same height, you could fill the cone with water and pour it into the cylinder exactly three times. That experiment is the formula: $V = \\frac{1}{3}\\pi r^2 h$ — the same $\\frac{1}{3}$ that pyramids have, because a cone is really a pyramid with a circular base.',
      },
      {
        heading: 'Height versus slant height',
        body: 'A cone has two different "heights," and mixing them up is the classic error. The height $h$ runs straight down the middle from apex to base center. The slant height $\\ell$ runs along the outside surface from the apex to the base\'s edge. They form a right triangle with the radius, so $\\ell = \\sqrt{r^2 + h^2}$. The slant is always the hypotenuse — the longest of the three.',
      },
      {
        heading: 'Unroll the cone: a sector appears',
        body: 'Cut a paper cone straight up its side and flatten it. You get a sector (a pizza slice) of a circle whose radius is the slant height $\\ell$. Why is its area $\\pi r \\ell$? The sector\'s curved edge used to wrap around the base, so its arc length is $2\\pi r$, out of a full circle of circumference $2\\pi\\ell$. The sector is the fraction $\\frac{2\\pi r}{2\\pi \\ell} = \\frac{r}{\\ell}$ of the full circle, so its area is $\\frac{r}{\\ell} \\cdot \\pi \\ell^2 = \\pi r \\ell$.',
      },
      {
        heading: 'Rolling a sector into a cone',
        body: 'This works in reverse too! Roll any sector into a cone: the sector\'s radius becomes the slant height, and the sector\'s arc length becomes the base circumference. So set arc length $= 2\\pi r$ to find the base radius. The total surface area of a closed cone is the sector plus the base disk: $S = \\pi r \\ell + \\pi r^2$.',
      },
    ],
    examples: [
      {
        problem: 'A cone has radius $6$ and height $8$. Find its volume and its total surface area.',
        steps: [
          'Volume first: $V = \\frac{1}{3}\\pi \\cdot 6^2 \\cdot 8 = \\frac{1}{3} \\cdot 288\\pi = 96\\pi$.',
          'For surface area we need the slant height: $\\ell = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$.',
          'Lateral surface: $\\pi r \\ell = \\pi \\cdot 6 \\cdot 10 = 60\\pi$. Base disk: $\\pi \\cdot 6^2 = 36\\pi$. Total: $60\\pi + 36\\pi = 96\\pi$.',
          'A fun coincidence: this cone\'s volume and total surface area are both $96\\pi$ — same number, different units!',
        ],
        answer: '$V = 96\\pi$ and $S = 96\\pi$',
        fig: coneFig(6, 8, 'r = 6', 'h = 8', 'ℓ'),
      },
      {
        problem: 'A $120^\\circ$ sector is cut from a circle of radius $12$ and rolled into a cone. Find the cone\'s base radius and height.',
        steps: [
          'The sector\'s arc is $\\frac{120}{360} = \\frac{1}{3}$ of the full circumference $2\\pi \\cdot 12 = 24\\pi$, so the arc length is $8\\pi$.',
          'Rolling it up, the arc becomes the base circumference: $2\\pi r = 8\\pi$, so $r = 4$. The sector\'s radius becomes the slant height: $\\ell = 12$.',
          'Now the right triangle: $h = \\sqrt{\\ell^2 - r^2} = \\sqrt{144 - 16} = \\sqrt{128} = 8\\sqrt{2}$.',
        ],
        answer: '$r = 4$ and $h = 8\\sqrt{2}$',
        fig: sectorFig(12, 120, '12', '120°'),
      },
      {
        problem: 'A cone and a cylinder both have radius $5$ and height $9$. How do their volumes compare?',
        steps: [
          'The cylinder: $V = \\pi \\cdot 25 \\cdot 9 = 225\\pi$.',
          'The cone: $V = \\frac{1}{3}\\pi \\cdot 25 \\cdot 9 = 75\\pi$.',
          'The cone holds exactly one third as much: $\\frac{75\\pi}{225\\pi} = \\frac{1}{3}$. That is always true when the base and height match — the $\\frac{1}{3}$ in the formula is the whole story.',
        ],
        answer: 'The cone\'s volume, $75\\pi$, is exactly $\\frac{1}{3}$ of the cylinder\'s $225\\pi$',
      },
    ],
  },
  problems: [
    {
      q: 'A cone has radius $3$ and height $7$. What is its volume?',
      fig: coneFig(3, 7, 'r = 3', 'h = 7'),
      choices: ['$63\\pi$', '$7\\pi$', '$21\\pi$', '$42\\pi$'],
      answer: 2,
      solution: 'A cone is one third of its cylinder: $V = \\frac{1}{3}\\pi \\cdot 3^2 \\cdot 7 = \\frac{63\\pi}{3} = 21\\pi$. The choice $63\\pi$ is the full cylinder — the $\\frac{1}{3}$ went missing. And $7\\pi$ forgets to square the radius.',
    },
    {
      q: 'A cone has radius $5$ and height $12$. What is its slant height?',
      fig: coneFig(5, 12, 'r = 5', 'h = 12', 'ℓ = ?'),
      choices: ['$13$', '$17$', '$12$', '$\\sqrt{119}$'],
      answer: 0,
      solution: 'The radius, height, and slant height form a right triangle with the slant as hypotenuse: $\\ell = \\sqrt{5^2 + 12^2} = \\sqrt{169} = 13$. The choice $\\sqrt{119}$ subtracts instead of adds — but the slant is the longest side, so we must add. And $17$ just adds $5 + 12$, which is not how right triangles work.',
    },
    {
      q: 'A cone has radius $5$ and slant height $13$. What is its lateral (curved) surface area?',
      choices: ['$60\\pi$', '$65\\pi$', '$90\\pi$', '$130\\pi$'],
      answer: 1,
      solution: 'The lateral surface unrolls into a sector of radius $\\ell$, with area $\\pi r \\ell = \\pi \\cdot 5 \\cdot 13 = 65\\pi$. The choice $60\\pi$ uses the height $12$ instead of the slant — but the surface lies along the slant, not down the middle. $90\\pi$ is the total surface including the base disk.',
    },
    {
      q: 'Find the total surface area of a closed cone with radius $3$ and height $4$.',
      fig: coneFig(3, 4, 'r = 3', 'h = 4'),
      choices: ['$15\\pi$', '$21\\pi$', '$33\\pi$', '$24\\pi$'],
      answer: 3,
      solution: 'First the slant: $\\ell = \\sqrt{3^2 + 4^2} = 5$. Lateral surface: $\\pi \\cdot 3 \\cdot 5 = 15\\pi$; base disk: $\\pi \\cdot 3^2 = 9\\pi$; total $24\\pi$. The choice $15\\pi$ stops before adding the base, and $21\\pi$ plugs the height into $\\pi r \\ell$ where the slant belongs.',
    },
    {
      q: 'A cone has diameter $12$ and height $10$. What is its volume?',
      fig: coneFig(6, 10, 'd = 12', 'h = 10'),
      choices: ['$480\\pi$', '$120\\pi$', '$360\\pi$', '$40\\pi$'],
      answer: 1,
      solution: 'Diameter $12$ means radius $6$. Then $V = \\frac{1}{3}\\pi \\cdot 6^2 \\cdot 10 = \\frac{360\\pi}{3} = 120\\pi$. Using $12$ as the radius gives $480\\pi$, and dropping the $\\frac{1}{3}$ gives $360\\pi$ — two traps in one problem!',
    },
    {
      q: 'A cone has volume $48\\pi$ and radius $4$. What is its height?',
      choices: ['$3$', '$12$', '$9$', '$6$'],
      answer: 2,
      solution: 'Set up $\\frac{1}{3}\\pi \\cdot 16 \\cdot h = 48\\pi$. Multiply both sides by $3$ to clear the fraction: $16h = 144$, so $h = 9$. The choice $3$ comes from solving $16h = 48$ — forgetting that the $\\frac{1}{3}$ must be undone first.',
    },
    {
      q: 'A cone has radius $9$ and slant height $15$. What is its volume?',
      fig: coneFig(9, 12, 'r = 9', 'h = ?', 'ℓ = 15'),
      choices: ['$324\\pi$', '$405\\pi$', '$972\\pi$', '$135\\pi$'],
      answer: 0,
      solution: 'Volume needs the vertical height, not the slant! From the right triangle, $h = \\sqrt{15^2 - 9^2} = \\sqrt{144} = 12$. Then $V = \\frac{1}{3}\\pi \\cdot 81 \\cdot 12 = 324\\pi$. The choice $405\\pi$ plugs the slant $15$ straight in as the height, and $135\\pi$ is the lateral surface area $\\pi r \\ell$.',
    },
    {
      q: 'A sector with radius $10$ and arc length $12\\pi$ is rolled into a cone (the two straight edges are taped together). What is the height of the cone?',
      fig: sectorFig(10, 216, '10', null, 'arc = 12π'),
      choices: ['$8$', '$6$', '$10$', '$12$'],
      answer: 0,
      solution: 'When a sector rolls up, its radius becomes the slant height ($\\ell = 10$) and its arc becomes the base circumference: $2\\pi r = 12\\pi$, so $r = 6$. Then $h = \\sqrt{10^2 - 6^2} = \\sqrt{64} = 8$. The choices $6$ and $10$ are the base radius and slant height — real lengths, but not the one asked for.',
    },
    {
      q: 'A $240^\\circ$ sector is cut from a circle of radius $9$ and rolled into a cone. What is the radius of the cone\'s base?',
      fig: sectorFig(9, 240, '9', '240°'),
      choices: ['$9$', '$3$', '$12$', '$6$'],
      answer: 3,
      solution: 'The arc length is $\\frac{240}{360} = \\frac{2}{3}$ of the full circumference $2\\pi \\cdot 9 = 18\\pi$, which is $12\\pi$. Rolling up, that arc becomes the base circumference: $2\\pi r = 12\\pi$, so $r = 6$. The choice $9$ is the sector\'s radius, which becomes the slant height, not the base radius.',
    },
    {
      q: 'A cylinder has radius $4$ and height $6$. A cone also has radius $4$. What must the cone\'s height be for the two volumes to be equal?',
      choices: ['$6$', '$18$', '$2$', '$12$'],
      answer: 1,
      solution: 'With the same base, a cone holds only $\\frac{1}{3}$ as much per unit of height, so it needs triple the height: $3 \\cdot 6 = 18$. Check: cylinder $\\pi \\cdot 16 \\cdot 6 = 96\\pi$ and cone $\\frac{1}{3}\\pi \\cdot 16 \\cdot 18 = 96\\pi$. ✓ The choice $2$ divides by $3$ instead — that would make the cone even smaller.',
    },
  ],
}

// ---- Section 15.3: Spheres ----
const s153 = {
  id: '15.3',
  title: 'Spheres',
  learn: {
    concepts: [
      {
        heading: 'The volume of a sphere',
        body: 'A sphere is the set of all points at distance $r$ from a center — a perfectly round ball. Its volume is $V = \\frac{4}{3}\\pi r^3$. Notice the cube: volume is three-dimensional, so the radius appears three times. A quick sanity check: the sphere fits inside a cylinder of radius $r$ and height $2r$ (volume $2\\pi r^3$), and $\\frac{4}{3}\\pi r^3$ is exactly $\\frac{2}{3}$ of that — the ball fills two thirds of its snug can.',
      },
      {
        heading: 'The surface of a sphere',
        body: 'The surface area is $S = 4\\pi r^2$ — exactly four times the area of a circle with the same radius. Picture slicing a sphere through its center: the flat cut is a disk of area $\\pi r^2$, and the sphere\'s curved skin is precisely four of those disks. Squared radius for area, cubed radius for volume — the exponent always matches the dimension.',
      },
      {
        heading: 'Hemispheres and the hidden disk',
        body: 'Cut a sphere in half and you get a hemisphere. Its volume is simply half: $\\frac{2}{3}\\pi r^3$. But surface area has a trap! Halving the sphere gives a dome of area $\\frac{1}{2} \\cdot 4\\pi r^2 = 2\\pi r^2$ — and the cut also exposes a brand-new flat disk of area $\\pi r^2$. A solid hemisphere\'s total surface is $2\\pi r^2 + \\pi r^2 = 3\\pi r^2$. Always ask: is the flat face part of the surface, or is it glued to something?',
      },
      {
        heading: 'Scaling: the $k$, $k^2$, $k^3$ rule',
        body: 'If you scale a sphere\'s radius by a factor $k$, every length scales by $k$, every area by $k^2$, and every volume by $k^3$. Double the radius: surface area is multiplied by $4$ and volume by $8$. This rule is not special to spheres — it works for every solid shape — but spheres make it easiest to see.',
      },
    ],
    examples: [
      {
        problem: 'Find the volume and surface area of a sphere with radius $3$.',
        steps: [
          'Volume: $V = \\frac{4}{3}\\pi \\cdot 3^3 = \\frac{4}{3} \\cdot 27\\pi = 36\\pi$.',
          'Surface area: $S = 4\\pi \\cdot 3^2 = 36\\pi$.',
          'Both are $36\\pi$! Radius $3$ is the one sphere where volume and surface area agree as numbers — because $\\frac{4}{3}r^3 = 4r^2$ exactly when $r = 3$.',
        ],
        answer: '$V = 36\\pi$ and $S = 36\\pi$',
        fig: sphereFig(3, 'r = 3'),
      },
      {
        problem: 'A solid hemisphere has radius $6$. Find its volume and its total surface area.',
        steps: [
          'Volume is half a sphere: $V = \\frac{1}{2} \\cdot \\frac{4}{3}\\pi \\cdot 6^3 = \\frac{2}{3} \\cdot 216\\pi = 144\\pi$.',
          'The dome is half the sphere\'s skin: $\\frac{1}{2} \\cdot 4\\pi \\cdot 36 = 72\\pi$.',
          'Do not forget the flat cut face — a disk of area $\\pi \\cdot 6^2 = 36\\pi$. Total surface: $72\\pi + 36\\pi = 108\\pi$.',
        ],
        answer: '$V = 144\\pi$ and $S = 108\\pi$',
        fig: hemiFig(6, 'r = 6'),
      },
      {
        problem: 'A sphere of radius $3$ fits snugly inside a cylinder: it touches the side, the top, and the bottom. What fraction of the cylinder does the sphere fill?',
        steps: [
          'Snug means the cylinder has radius $3$ and height equal to the sphere\'s diameter, $6$.',
          'Cylinder: $\\pi \\cdot 9 \\cdot 6 = 54\\pi$. Sphere: $\\frac{4}{3}\\pi \\cdot 27 = 36\\pi$.',
          'Fraction: $\\frac{36\\pi}{54\\pi} = \\frac{2}{3}$. A snug sphere always fills exactly two thirds of its cylinder, no matter the radius — one of the most famous facts in all of geometry.',
        ],
        answer: '$\\frac{2}{3}$',
        fig: tankBallFig(3, 6, 3, 3, 'r = 3', '3'),
      },
    ],
  },
  problems: [
    {
      q: 'What is the volume of a sphere with radius $6$?',
      fig: sphereFig(6, 'r = 6'),
      choices: ['$288\\pi$', '$144\\pi$', '$864\\pi$', '$216\\pi$'],
      answer: 0,
      solution: 'Cube the radius: $V = \\frac{4}{3}\\pi \\cdot 6^3 = \\frac{4}{3} \\cdot 216\\pi = 288\\pi$. The choice $864\\pi$ forgets to divide by $3$, and $144\\pi$ is the surface area $4\\pi r^2$ — squared instead of cubed.',
    },
    {
      q: 'What is the surface area of a sphere with radius $5$?',
      choices: ['$25\\pi$', '$50\\pi$', '$\\frac{500\\pi}{3}$', '$100\\pi$'],
      answer: 3,
      solution: 'Surface area is four great circles: $S = 4\\pi \\cdot 5^2 = 100\\pi$. The choice $25\\pi$ is just one circle, $50\\pi$ is two (a hemisphere\'s dome), and $\\frac{500\\pi}{3}$ is the volume — check which question is being asked!',
    },
    {
      q: 'A sphere has diameter $12$. What is its volume?',
      fig: sphereFig(6, 'd = 12', true),
      choices: ['$2304\\pi$', '$288\\pi$', '$144\\pi$', '$576\\pi$'],
      answer: 1,
      solution: 'Halve the diameter first: $r = 6$. Then $V = \\frac{4}{3}\\pi \\cdot 216 = 288\\pi$. Using $12$ as the radius gives $2304\\pi$ — and because the radius gets CUBED, that error inflates the answer by a factor of $8$, not just $2$.',
    },
    {
      q: 'What is the volume of a solid hemisphere with radius $3$?',
      fig: hemiFig(3, 'r = 3'),
      choices: ['$36\\pi$', '$27\\pi$', '$18\\pi$', '$9\\pi$'],
      answer: 2,
      solution: 'A hemisphere is half a sphere: $V = \\frac{1}{2} \\cdot \\frac{4}{3}\\pi \\cdot 27 = \\frac{1}{2} \\cdot 36\\pi = 18\\pi$. The choice $36\\pi$ is the whole sphere, and $27\\pi$ is $\\pi r^3$ with the fractions lost along the way.',
    },
    {
      q: 'What is the TOTAL surface area of a solid hemisphere with radius $4$, including its flat circular base?',
      fig: hemiFig(4, 'r = 4'),
      choices: ['$32\\pi$', '$64\\pi$', '$16\\pi$', '$48\\pi$'],
      answer: 3,
      solution: 'Two pieces: the dome is half a sphere\'s skin, $\\frac{1}{2} \\cdot 4\\pi \\cdot 16 = 32\\pi$, and the flat base is a disk of area $\\pi \\cdot 16 = 16\\pi$. Total: $48\\pi$. The choice $32\\pi$ forgets the flat disk — cutting a sphere in half creates new surface! And $64\\pi$ is the whole sphere\'s area.',
    },
    {
      q: 'The radius of a sphere is doubled. Its volume is multiplied by what number?',
      choices: ['$2$', '$4$', '$8$', '$6$'],
      answer: 2,
      solution: 'Volume contains $r^3$, so scaling $r$ by $2$ scales the volume by $2^3 = 8$. You can see it in the formula: $\\frac{4}{3}\\pi(2r)^3 = 8 \\cdot \\frac{4}{3}\\pi r^3$. The factor $4$ is what happens to the SURFACE area, and $2$ is what happens to lengths.',
    },
    {
      q: 'The radius of a sphere is tripled. Its surface area is multiplied by what number?',
      choices: ['$3$', '$9$', '$27$', '$6$'],
      answer: 1,
      solution: 'Surface area contains $r^2$, so tripling $r$ multiplies the area by $3^2 = 9$. The choice $27 = 3^3$ is the volume factor — areas use the square of the scale factor, volumes use the cube.',
    },
    {
      q: 'A sphere has surface area $196\\pi$. What is its radius?',
      choices: ['$7$', '$14$', '$49$', '$196$'],
      answer: 0,
      solution: 'Set $4\\pi r^2 = 196\\pi$, so $r^2 = 49$ and $r = 7$. Remember both steps: divide by $4\\pi$, then take the square root. Stopping at $49$ leaves the radius squared, and $14$ is the diameter.',
    },
    {
      q: 'A sphere of radius $5$ fits snugly inside a cylinder of radius $5$ and height $10$. What is the volume of the space inside the cylinder but outside the sphere?',
      fig: tankBallFig(5, 10, 5, 5, 'r = 5', '5'),
      choices: ['$\\frac{250\\pi}{3}$', '$\\frac{500\\pi}{3}$', '$250\\pi$', '$125\\pi$'],
      answer: 0,
      solution: 'Cylinder: $\\pi \\cdot 25 \\cdot 10 = 250\\pi$. Sphere: $\\frac{4}{3}\\pi \\cdot 125 = \\frac{500\\pi}{3}$. The gap is $250\\pi - \\frac{500\\pi}{3} = \\frac{750\\pi - 500\\pi}{3} = \\frac{250\\pi}{3}$ — exactly one third of the cylinder, since the snug sphere fills the other two thirds. The choice $\\frac{500\\pi}{3}$ is the sphere itself.',
    },
    {
      q: 'Eight solid metal spheres of radius $1$ are melted down and recast as one single sphere. What is the radius of the big sphere?',
      choices: ['$8$', '$2$', '$4$', '$3$'],
      answer: 1,
      solution: 'Melting keeps volume: $8 \\cdot \\frac{4}{3}\\pi \\cdot 1^3 = \\frac{4}{3}\\pi r^3$, so $r^3 = 8$ and $r = 2$. This is the scaling rule in reverse: $8$ times the volume means only $\\sqrt[3]{8} = 2$ times the radius. The choice $8$ mistakes the volume factor for the length factor.',
    },
  ],
}

// ---- Section 15.4: Problems ----
const s154 = {
  id: '15.4',
  title: 'Problems',
  learn: {
    concepts: [
      {
        heading: 'Slice composite solids into friends',
        body: 'A silo, a capsule, an ice-cream cone — complicated shapes are usually familiar shapes glued together. For volume, just add the pieces. For surface area, be pickier: only count what is actually exposed. Where two pieces are glued, both touching faces vanish — a hemisphere sitting on a cylinder hides both the dome\'s flat disk and the cylinder\'s top lid.',
      },
      {
        heading: 'Melting conserves volume',
        body: 'When metal, wax, or ice cream is melted and recast into a new shape, no material appears or disappears — the volume is conserved. So write one equation: old volume $=$ new volume, and solve for the unknown dimension. Surface area is NOT conserved (a flattened shape has much more skin), which is exactly why these problems always work with volume.',
      },
      {
        heading: 'Water-level rises are volume in disguise',
        body: 'Drop a solid object into a cylindrical tank of water and the level rises: the object shoves aside exactly its own volume of water. That displaced water forms a thin cylinder-shaped layer across the whole tank, so $\\text{rise} = \\dfrac{\\text{object\'s volume}}{\\text{base area of the tank}}$. The object\'s shape never matters — only its volume.',
      },
    ],
    examples: [
      {
        problem: 'A grain silo is a cylinder of radius $4$ and height $10$, topped with a hemisphere dome of radius $4$. What is its total volume?',
        steps: [
          'Slice it into two friends: a cylinder and a hemisphere.',
          'Cylinder: $\\pi \\cdot 16 \\cdot 10 = 160\\pi$. Hemisphere: $\\frac{2}{3}\\pi \\cdot 4^3 = \\frac{128\\pi}{3}$.',
          'Add, using a common denominator: $\\frac{480\\pi}{3} + \\frac{128\\pi}{3} = \\frac{608\\pi}{3}$.',
        ],
        answer: '$\\frac{608\\pi}{3}$',
        fig: siloFig(4, 10, 'r = 4', 'h = 10', 240),
      },
      {
        problem: 'A solid metal sphere of radius $6$ is melted and recast into a cylinder of radius $6$. How tall is the cylinder?',
        steps: [
          'Melting conserves volume, so set the two volumes equal: $\\frac{4}{3}\\pi \\cdot 6^3 = \\pi \\cdot 6^2 \\cdot h$.',
          'The left side is $\\frac{4}{3} \\cdot 216\\pi = 288\\pi$, and the right side is $36\\pi h$.',
          'So $36h = 288$ and $h = 8$. Check: $\\pi \\cdot 36 \\cdot 8 = 288\\pi$. ✓',
        ],
        answer: '$h = 8$',
      },
      {
        problem: 'A cylindrical tank of radius $5$ holds water. A solid ball of radius $3$ is dropped in and sinks below the surface. How much does the water level rise?',
        steps: [
          'The ball displaces its own volume of water: $\\frac{4}{3}\\pi \\cdot 27 = 36\\pi$.',
          'That water spreads into a thin cylindrical layer over the tank\'s whole base, which has area $\\pi \\cdot 25 = 25\\pi$.',
          'Rise $= \\dfrac{36\\pi}{25\\pi} = \\dfrac{36}{25}$. The ball\'s roundness is irrelevant — only its volume matters.',
        ],
        answer: '$\\frac{36}{25}$',
        fig: tankBallFig(5, 8, 3, 3, 'r = 5', '3'),
      },
    ],
  },
  problems: [
    {
      q: 'An ice-cream treat is a cone of radius $3$ and height $4$, completely filled, topped with a solid hemisphere scoop of radius $3$. What is the total volume of ice cream?',
      fig: {
        view: [-4.3, -1, 4.3, 8.2],
        elems: [
          { t: 'seg', a: [0, 0], b: [-3, 4] },
          { t: 'seg', a: [0, 0], b: [3, 4] },
          { t: 'curve', pts: ellArc(0, 4, 3, 180, 360) },
          ...dashedEllArc(0, 4, 3, 0, 180),
          { t: 'arc', c: [0, 4], r: 3, from: 0, to: 180 },
          { t: 'seg', a: [0, 0], b: [0, 4], dash: true },
          { t: 'seg', a: [0, 4], b: [3, 4], dash: true },
          { t: 'point', p: [0, 4] },
          { t: 'label', p: [1.5, 4], text: 'r = 3', dx: 0, dy: 16 },
          { t: 'label', p: [0, 2], text: 'h = 4', dx: -20, dy: 0 },
        ],
      },
      choices: ['$54\\pi$', '$48\\pi$', '$18\\pi$', '$30\\pi$'],
      answer: 3,
      solution: 'Cone: $\\frac{1}{3}\\pi \\cdot 9 \\cdot 4 = 12\\pi$. Hemisphere: $\\frac{2}{3}\\pi \\cdot 27 = 18\\pi$. Total: $12\\pi + 18\\pi = 30\\pi$. The choice $54\\pi$ drops the $\\frac{1}{3}$ from the cone, and $48\\pi$ uses a full sphere on top instead of half.',
    },
    {
      q: 'A medicine capsule is a cylinder of radius $2$ and height $7$ with a hemisphere glued onto each end. What is its total volume?',
      fig: capsuleFig(2, 7, 'r = 2', '7', 200),
      choices: ['$\\frac{116\\pi}{3}$', '$\\frac{100\\pi}{3}$', '$\\frac{148\\pi}{3}$', '$28\\pi$'],
      answer: 0,
      solution: 'The two hemispheres snap together into one whole sphere of radius $2$: volume $\\frac{4}{3}\\pi \\cdot 8 = \\frac{32\\pi}{3}$. The cylinder gives $\\pi \\cdot 4 \\cdot 7 = 28\\pi = \\frac{84\\pi}{3}$. Total: $\\frac{84\\pi + 32\\pi}{3} = \\frac{116\\pi}{3}$. The choice $\\frac{100\\pi}{3}$ counts only one end cap, and $\\frac{148\\pi}{3}$ puts a FULL sphere on each end.',
    },
    {
      q: 'A toy rocket is a cylinder of radius $3$ and height $8$, topped by a cone of radius $3$ and height $4$. What is the rocket\'s total volume?',
      fig: {
        w: 260,
        view: [-4.3, -1.9, 4.3, 13],
        elems: [
          ...cylElems(3, 8),
          { t: 'seg', a: [-3, 8], b: [0, 12] },
          { t: 'seg', a: [3, 8], b: [0, 12] },
          { t: 'seg', a: [0, 8], b: [0, 12], dash: true },
          { t: 'seg', a: [0, 8], b: [3, 8], dash: true },
          { t: 'point', p: [0, 8] },
          { t: 'label', p: [1.5, 8], text: 'r = 3', dx: 0, dy: 16 },
          { t: 'label', p: [3, 4], text: '8', dx: 16, dy: 0 },
          { t: 'label', p: [0, 10], text: '4', dx: -12, dy: 0 },
        ],
      },
      choices: ['$108\\pi$', '$84\\pi$', '$72\\pi$', '$96\\pi$'],
      answer: 1,
      solution: 'Cylinder body: $\\pi \\cdot 9 \\cdot 8 = 72\\pi$. Cone nose: $\\frac{1}{3}\\pi \\cdot 9 \\cdot 4 = 12\\pi$. Total: $84\\pi$. The choice $108\\pi$ treats the nose as a full cylinder ($36\\pi$) instead of a cone, and $72\\pi$ forgets the nose entirely.',
    },
    {
      q: 'A solid metal sphere of radius $3$ is melted and recast into a cylinder of radius $2$. What is the height of the cylinder?',
      choices: ['$4$', '$18$', '$9$', '$6$'],
      answer: 2,
      solution: 'Volume is conserved: $\\frac{4}{3}\\pi \\cdot 27 = \\pi \\cdot 4 \\cdot h$, so $36\\pi = 4\\pi h$ and $h = 9$. The new shape is taller than you might guess because its base ($4\\pi$) is small — the same volume in a narrower container stands taller.',
    },
    {
      q: 'A metal cylinder of radius $6$ and height $4$ is melted down and recast into solid spheres of radius $3$. How many spheres are made?',
      choices: ['$4$', '$3$', '$6$', '$12$'],
      answer: 0,
      solution: 'Cylinder volume: $\\pi \\cdot 36 \\cdot 4 = 144\\pi$. Each sphere: $\\frac{4}{3}\\pi \\cdot 27 = 36\\pi$. Number of spheres: $144\\pi \\div 36\\pi = 4$. Everything divides out cleanly — a good sign we set up volumes, not surface areas.',
    },
    {
      q: 'A cylindrical tank of radius $4$ contains water. A solid metal ball of radius $2$ is dropped in and sinks completely below the surface. By how much does the water level rise?',
      fig: tankBallFig(4, 8, 2, 2, 'r = 4', '2'),
      choices: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$2$', '$\\frac{1}{2}$'],
      answer: 1,
      solution: 'The ball displaces its own volume: $\\frac{4}{3}\\pi \\cdot 8 = \\frac{32\\pi}{3}$. Spread over the tank\'s base area $\\pi \\cdot 16 = 16\\pi$, the rise is $\\frac{32\\pi}{3} \\div 16\\pi = \\frac{2}{3}$. Displaced volume $\\div$ base area — the ball\'s shape never enters the calculation.',
    },
    {
      q: 'A cone-shaped cup with radius $3$ and height $9$ is full of juice. All the juice is poured into an empty cylindrical glass, also of radius $3$. How deep is the juice in the glass?',
      fig: cupFig(3, 9, 'r = 3', 'h = 9'),
      choices: ['$9$', '$6$', '$4.5$', '$3$'],
      answer: 3,
      solution: 'The juice: $\\frac{1}{3}\\pi \\cdot 9 \\cdot 9 = 27\\pi$. In the glass, depth $= 27\\pi \\div (\\pi \\cdot 9) = 3$ — exactly one third of the cone\'s height, which makes sense: with matching bases, a cone holds a third of what a cylinder of the same height holds.',
    },
    {
      q: 'A grain silo is a cylinder of radius $5$ and height $8$, topped with a hemisphere dome of radius $5$. The outside — the cylindrical wall and the dome, but not the floor — is painted. What area gets painted?',
      fig: siloFig(5, 8, 'r = 5', 'h = 8', 260),
      choices: ['$155\\pi$', '$180\\pi$', '$130\\pi$', '$105\\pi$'],
      answer: 2,
      solution: 'Wall: $2\\pi \\cdot 5 \\cdot 8 = 80\\pi$. Dome: half a sphere\'s skin, $2\\pi \\cdot 25 = 50\\pi$. Painted area: $130\\pi$. No disks appear anywhere: the floor is excluded, and where the dome meets the wall both flat circles are glued out of sight. The choice $155\\pi$ paints the floor too.',
    },
    {
      q: 'Container A is a cone with radius $4$ and height $8$. Container B is a hemisphere bowl with radius $4$. Which holds more?',
      choices: [
        'They hold exactly the same amount: $\\frac{128\\pi}{3}$ each',
        'The cone holds $\\frac{64\\pi}{3}$ more',
        'The hemisphere holds $\\frac{64\\pi}{3}$ more',
        'The cone holds $\\frac{128\\pi}{3}$ more',
      ],
      answer: 0,
      solution: 'Cone: $\\frac{1}{3}\\pi \\cdot 16 \\cdot 8 = \\frac{128\\pi}{3}$. Hemisphere: $\\frac{2}{3}\\pi \\cdot 64 = \\frac{128\\pi}{3}$. A perfect tie! This always happens when the cone\'s height is double the shared radius: $\\frac{1}{3}\\pi r^2(2r) = \\frac{2}{3}\\pi r^3$, exactly the hemisphere formula.',
    },
    {
      q: 'A cylindrical glass of radius $3$ holds water $4$ deep. Three solid glass marbles, each of radius $1$, are dropped in and sink to the bottom. What is the new depth of the water?',
      choices: ['$\\frac{4}{9}$', '$5$', '$\\frac{40}{9}$', '$\\frac{40}{3}$'],
      answer: 2,
      solution: 'The marbles together displace $3 \\cdot \\frac{4}{3}\\pi \\cdot 1^3 = 4\\pi$. Over the base area $9\\pi$, the level rises $\\frac{4\\pi}{9\\pi} = \\frac{4}{9}$. New depth: $4 + \\frac{4}{9} = \\frac{40}{9}$. The choice $\\frac{4}{9}$ is only the rise — the question asks for the final depth.',
    },
  ],
}

// ---- Chapter challenge: 12 harder mixed problems ----
const challenge = [
  {
    q: 'A cone and a cylinder have the same radius $6$ and the same height $h$. Together their volumes total $192\\pi$. Find $h$.',
    choices: ['$12$', '$4$', '$16$', '$3$'],
    answer: 1,
    solution: 'Cylinder: $36\\pi h$. Cone: $\\frac{1}{3} \\cdot 36\\pi h = 12\\pi h$. Together: $48\\pi h = 192\\pi$, so $h = 4$. Combining the two solids FIRST keeps the algebra to one tidy equation.',
  },
  {
    q: 'A cone has radius $8$ and lateral surface area $136\\pi$. What is its volume?',
    choices: ['$320\\pi$', '$\\frac{1088\\pi}{3}$', '$960\\pi$', '$136\\pi$'],
    answer: 0,
    solution: 'From $\\pi r \\ell = 136\\pi$ with $r = 8$, the slant is $\\ell = 17$. The height comes from the right triangle: $h = \\sqrt{17^2 - 8^2} = \\sqrt{225} = 15$. Then $V = \\frac{1}{3}\\pi \\cdot 64 \\cdot 15 = 320\\pi$. The choice $\\frac{1088\\pi}{3}$ plugs the slant $17$ in as the height — volume always wants the vertical height.',
  },
  {
    q: 'For what radius are a sphere\'s volume and surface area equal as numbers?',
    choices: ['$1$', '$4$', '$3$', '$6$'],
    answer: 2,
    solution: 'Set $\\frac{4}{3}\\pi r^3 = 4\\pi r^2$. Divide both sides by $4\\pi r^2$: $\\frac{r}{3} = 1$, so $r = 3$. Check: volume $36\\pi$ and surface $36\\pi$. ✓ For $r < 3$ the surface number is bigger; for $r > 3$ the volume number wins — cubes eventually beat squares.',
  },
  {
    q: 'A cylindrical tank with radius $5$ and height $12$ is exactly two-thirds full of water. How much more water is needed to fill it to the brim?',
    choices: ['$200\\pi$', '$300\\pi$', '$150\\pi$', '$100\\pi$'],
    answer: 3,
    solution: 'The empty part is the top third of the tank: a cylinder of radius $5$ and height $\\frac{12}{3} = 4$, with volume $\\pi \\cdot 25 \\cdot 4 = 100\\pi$. The choice $200\\pi$ is the water already inside, and $300\\pi$ is the whole tank.',
  },
  {
    q: 'A cone has radius $6$ and height $12$. It is sliced by a plane parallel to its base, halfway up. What is the volume of the small cone above the slice?',
    fig: coneFig(6, 12, 'r = 6', 'h = 12', null, [...dashedEllArc(0, 6, 3, 0, 360, 16)], 260),
    choices: ['$18\\pi$', '$72\\pi$', '$36\\pi$', '$27\\pi$'],
    answer: 0,
    solution: 'The whole cone has volume $\\frac{1}{3}\\pi \\cdot 36 \\cdot 12 = 144\\pi$. The small cone on top is similar to the whole one with scale factor $\\frac{1}{2}$, so its volume is $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$ of the total: $\\frac{144\\pi}{8} = 18\\pi$. The choice $72\\pi$ assumes half the height means half the volume — but volume scales with the CUBE of the factor.',
  },
  {
    q: 'Three solid metal spheres with radii $3$, $4$, and $5$ are melted together and recast as a single sphere. What is its radius?',
    choices: ['$12$', '$4$', '$6$', '$8$'],
    answer: 2,
    solution: 'Volumes add, so the cubes of the radii add: $r^3 = 3^3 + 4^3 + 5^3 = 27 + 64 + 125 = 216$, giving $r = 6$. Radii themselves never add ($3 + 4 + 5 = 12$ is the trap) — a delightful cousin of the Pythagorean triple, one dimension up.',
  },
  {
    q: 'A capsule is a cylinder of radius $3$ and height $10$ with a hemisphere glued onto each end. What is its total surface area?',
    fig: capsuleFig(3, 10, 'r = 3', '10', 220),
    choices: ['$114\\pi$', '$96\\pi$', '$78\\pi$', '$132\\pi$'],
    answer: 1,
    solution: 'The tube: $2\\pi \\cdot 3 \\cdot 10 = 60\\pi$. The two hemisphere caps together make one full sphere\'s skin: $4\\pi \\cdot 9 = 36\\pi$. Total: $96\\pi$. Notice there are NO flat disks anywhere — every flat face is glued to another and disappears. The choice $114\\pi$ adds two phantom disks of $9\\pi$ each.',
  },
  {
    q: 'A cylindrical tank of radius $6$ holds water. A solid metal cone of radius $3$ and height $4$ is dropped in and sinks completely. By how much does the water level rise?',
    choices: ['$3$', '$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$'],
    answer: 3,
    solution: 'The cone displaces its volume: $\\frac{1}{3}\\pi \\cdot 9 \\cdot 4 = 12\\pi$. Over the tank\'s base area $\\pi \\cdot 36 = 36\\pi$, the rise is $\\frac{12\\pi}{36\\pi} = \\frac{1}{3}$. Even though the sunken object is a cone, the displaced water forms a flat cylindrical layer — always divide by the TANK\'s base area.',
  },
  {
    q: 'A $270^\\circ$ sector of a circle of radius $8$ is rolled into a cone. What is the lateral surface area of the cone?',
    fig: sectorFig(8, 270, '8', '270°'),
    choices: ['$48\\pi$', '$64\\pi$', '$16\\pi$', '$36\\pi$'],
    answer: 0,
    solution: 'Rolling paper does not stretch it, so the cone\'s lateral surface area IS the sector\'s area: $\\frac{270}{360} \\cdot \\pi \\cdot 8^2 = \\frac{3}{4} \\cdot 64\\pi = 48\\pi$. As a check: the arc is $\\frac{3}{4} \\cdot 16\\pi = 12\\pi$, so the base radius is $6$, and $\\pi r \\ell = \\pi \\cdot 6 \\cdot 8 = 48\\pi$. ✓',
  },
  {
    q: 'Two spheres have surface areas in the ratio $9:25$. What is the ratio of their volumes?',
    choices: ['$9:25$', '$3:5$', '$27:125$', '$81:625$'],
    answer: 2,
    solution: 'Surface areas scale as $k^2$, so the radii are in the ratio $\\sqrt{9}:\\sqrt{25} = 3:5$. Volumes scale as $k^3$, giving $27:125$. Route every scaling problem through the LENGTH ratio first — jumping straight from areas to volumes is where the choice $81:625$ (squaring again) comes from.',
  },
  {
    q: 'The largest possible sphere is placed inside a cylinder of radius $4$ and height $10$. What fraction of the cylinder\'s volume does the sphere fill?',
    fig: tankBallFig(4, 10, 4, 4, 'r = 4', '4', 260),
    choices: ['$\\frac{2}{3}$', '$\\frac{1}{2}$', '$\\frac{4}{5}$', '$\\frac{8}{15}$'],
    answer: 3,
    solution: 'The sphere is limited by the cylinder\'s radius: $r = 4$ (its diameter $8$ fits under the height $10$ with room to spare). Sphere: $\\frac{4}{3}\\pi \\cdot 64 = \\frac{256\\pi}{3}$. Cylinder: $\\pi \\cdot 16 \\cdot 10 = 160\\pi$. Fraction: $\\frac{256}{3 \\cdot 160} = \\frac{8}{15}$. The famous $\\frac{2}{3}$ only applies when the fit is snug ($h = 2r$) — here extra height dilutes the fraction.',
  },
  {
    q: 'A hemisphere scoop of ice cream with radius $3$ sits on top of an empty cone with radius $3$. When the ice cream melts, it fills the cone exactly to the brim. What is the height of the cone?',
    choices: ['$3$', '$6$', '$9$', '$2$'],
    answer: 1,
    solution: 'Melting conserves volume: $\\frac{2}{3}\\pi \\cdot 27 = \\frac{1}{3}\\pi \\cdot 9 \\cdot h$, so $18\\pi = 3\\pi h$ and $h = 6$. Neatly, $h = 2r$: a cone exactly twice as tall as its radius always holds precisely one hemisphere\'s worth.',
  },
]

// ---- Worksheet: 10 free-response (1-6 practice, 7-10 challenge) ----
const worksheet = [
  {
    q: 'Find the volume of a cylinder with radius $5$ and height $7$.',
    fig: cylFig(5, 7, 'r = 5', 'h = 7'),
    answer: '$175\\pi$',
    solution: 'Volume is base area times height: $V = \\pi \\cdot 5^2 \\cdot 7 = 175\\pi$. Keep the $\\pi$ — the answer is exact that way.',
  },
  {
    q: 'A cone has radius $8$ and height $6$. Find its slant height and its total surface area.',
    fig: coneFig(8, 6, 'r = 8', 'h = 6', 'ℓ'),
    answer: '$\\ell = 10$ and $S = 144\\pi$',
    solution: 'Slant: $\\ell = \\sqrt{8^2 + 6^2} = \\sqrt{100} = 10$. Then the lateral surface is $\\pi r \\ell = 80\\pi$ and the base disk is $\\pi \\cdot 64 = 64\\pi$, so the total is $80\\pi + 64\\pi = 144\\pi$.',
  },
  {
    q: 'A sphere has diameter $18$. Find its volume.',
    answer: '$972\\pi$',
    solution: 'Convert to the radius first: $r = 9$. Then $V = \\frac{4}{3}\\pi \\cdot 9^3 = \\frac{4}{3} \\cdot 729\\pi = 972\\pi$. Using the diameter by mistake would be $8$ times too big, since the radius gets cubed.',
  },
  {
    q: 'A rectangular label wraps exactly once around a cylindrical jar of radius $4$ and height $9$, with no overlap. Find the area of the label.',
    answer: '$72\\pi$',
    solution: 'Unrolled, the label is a rectangle: height $9$, width equal to the circumference $2\\pi \\cdot 4 = 8\\pi$. Area: $8\\pi \\cdot 9 = 72\\pi$. No lids — a label only covers the side.',
  },
  {
    q: 'A cone has volume $100\\pi$ and radius $5$. Find its height.',
    answer: '$12$',
    solution: 'Set $\\frac{1}{3}\\pi \\cdot 25 \\cdot h = 100\\pi$. Multiply both sides by $3$: $25h = 300$, so $h = 12$. Check: $\\frac{1}{3}\\pi \\cdot 25 \\cdot 12 = 100\\pi$. ✓',
  },
  {
    q: 'Find the total surface area of a solid hemisphere with radius $2$, including its flat base.',
    answer: '$12\\pi$',
    solution: 'The dome is half a sphere\'s surface: $\\frac{1}{2} \\cdot 4\\pi \\cdot 4 = 8\\pi$. The flat base is a disk: $\\pi \\cdot 4 = 4\\pi$. Total: $8\\pi + 4\\pi = 12\\pi$. The disk is the piece most people forget!',
  },
  {
    q: 'A metal cylinder of radius $6$ and height $8$ is melted and recast into a single solid sphere. Find the radius of the sphere.',
    answer: '$6$',
    solution: 'Volume is conserved: $\\pi \\cdot 36 \\cdot 8 = \\frac{4}{3}\\pi r^3$, so $288 = \\frac{4}{3}r^3$ and $r^3 = 216$, giving $r = 6$. A pleasant surprise: the sphere ends up with the same radius the cylinder had.',
  },
  {
    q: 'A silo is built from a cylinder of radius $3$ and height $10$, topped by a cone of radius $3$ and height $4$. Find the silo\'s total volume.',
    fig: {
      w: 220,
      view: [-4.3, -1.9, 4.3, 15],
      elems: [
        ...cylElems(3, 10),
        { t: 'seg', a: [-3, 10], b: [0, 14] },
        { t: 'seg', a: [3, 10], b: [0, 14] },
        { t: 'seg', a: [0, 10], b: [0, 14], dash: true },
        { t: 'seg', a: [0, 10], b: [3, 10], dash: true },
        { t: 'point', p: [0, 10] },
        { t: 'label', p: [1.5, 10], text: 'r = 3', dx: 0, dy: 16 },
        { t: 'label', p: [3, 5], text: '10', dx: 16, dy: 0 },
        { t: 'label', p: [0, 12], text: '4', dx: -12, dy: 0 },
      ],
    },
    answer: '$102\\pi$',
    solution: 'Cylinder: $\\pi \\cdot 9 \\cdot 10 = 90\\pi$. Cone roof: $\\frac{1}{3}\\pi \\cdot 9 \\cdot 4 = 12\\pi$. Total: $90\\pi + 12\\pi = 102\\pi$. Composite solids are just familiar pieces added together.',
  },
  {
    q: 'A cylindrical tank of radius $10$ contains water. A solid sphere of radius $5$ is lowered in until it is completely submerged. By how much does the water level rise?',
    fig: tankBallFig(10, 12, 5, 5, 'r = 10', '5'),
    answer: '$\\frac{5}{3}$',
    solution: 'The sphere displaces its own volume: $\\frac{4}{3}\\pi \\cdot 125 = \\frac{500\\pi}{3}$. That spreads over the tank\'s base area $\\pi \\cdot 100 = 100\\pi$, so the rise is $\\frac{500\\pi}{3} \\div 100\\pi = \\frac{5}{3}$.',
  },
  {
    q: 'A $288^\\circ$ sector of a circle of radius $15$ is rolled into a cone. Find the volume of the cone.',
    fig: sectorFig(15, 288, '15', '288°'),
    answer: '$432\\pi$',
    solution: 'The arc length is $\\frac{288}{360} = \\frac{4}{5}$ of the circumference $2\\pi \\cdot 15 = 30\\pi$, which is $24\\pi$. Rolled up, that is the base circumference: $2\\pi r = 24\\pi$, so $r = 12$, and the slant is the sector\'s radius, $\\ell = 15$. Height: $h = \\sqrt{15^2 - 12^2} = \\sqrt{81} = 9$. Volume: $\\frac{1}{3}\\pi \\cdot 144 \\cdot 9 = 432\\pi$.',
  },
]

export default {
  id: 'intro-geometry-ch15',
  book: 'intro-geometry',
  number: 15,
  title: 'Curved Surfaces',
  intro:
    'Prisms and pyramids have flat faces, but so much of the world is curved — soup cans, party hats, basketballs, grain silos. In this chapter you will measure cylinders, cones, and spheres, and discover that unrolling a curved surface flat explains exactly where each formula comes from. Keep your answers exact: $\\pi$ is a number we name, not one we round!',
  sections: [s151, s152, s153, s154],
  challenge,
  worksheet,
}
