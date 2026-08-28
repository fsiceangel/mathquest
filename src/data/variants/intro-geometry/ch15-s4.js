// Introduction to Geometry chapter 15 — variations for section 15.4 (Problems:
// composite solids, recasting, and displacement).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is worked twice along routes that share no arithmetic:
//    once by slicing the solid into named pieces and adding (or by the volume
//    bookkeeping the problem is about), and once through a re-pour that never
//    repeats the first sum — a hemisphere traded for the cone of height 2r that
//    holds exactly as much, a cone traded for the cylinder a third as tall, a
//    ball traded for the puck it flattens into, a dome unrolled as extra wall.
//    A check that repeats the same multiplication is not a check.
//  - Every figure is drawn from its own numbers, with each dimension the solver
//    needs written on it as plain text: a projection squashes lengths, so a
//    length that is only drawn is a length the reader cannot use.
//  - Each distractor is one named mistake, named in CAPS at the end.

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

// a filled cone standing point-down with a solid dome resting on its rim
function treatFig(r, h, rText, hText, w) {
  return {
    ...(w ? { w } : {}),
    view: [-r - 1.3, -1, r + 1.3, h + r + 1.2],
    elems: [
      { t: 'seg', a: [0, 0], b: [-r, h] },
      { t: 'seg', a: [0, 0], b: [r, h] },
      { t: 'curve', pts: ellArc(0, h, r, 180, 360) },
      ...dashedEllArc(0, h, r, 0, 180),
      { t: 'arc', c: [0, h], r, from: 0, to: 180 },
      { t: 'seg', a: [0, 0], b: [0, h], dash: true },
      { t: 'seg', a: [0, h], b: [r, h], dash: true },
      { t: 'point', p: [0, h] },
      { t: 'label', p: [r / 2, h], text: rText, dx: 0, dy: 16 },
      { t: 'label', p: [0, h / 2], text: hText, dx: -20, dy: 0 },
    ],
  }
}

// a cylinder with a cone stuck on one end
function rocketFig(r, h, hc, rText, hText, hcText, w) {
  return {
    ...(w ? { w } : {}),
    view: [-r - 1.3, -K * r - 1, r + 1.3, h + hc + 1],
    elems: [
      ...cylElems(r, h),
      { t: 'seg', a: [-r, h], b: [0, h + hc] },
      { t: 'seg', a: [r, h], b: [0, h + hc] },
      { t: 'seg', a: [0, h], b: [0, h + hc], dash: true },
      { t: 'seg', a: [0, h], b: [r, h], dash: true },
      { t: 'point', p: [0, h] },
      { t: 'label', p: [r / 2, h], text: rText, dx: 0, dy: 16 },
      { t: 'label', p: [r, h / 2], text: hText, dx: 16, dy: 0 },
      { t: 'label', p: [0, h + hc / 2], text: hcText, dx: -12, dy: 0 },
    ],
  }
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

function cupFig(r, h, rText, hText, w) {
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

const s154 = [
  // s1 — a filled cone with a solid hemisphere resting on its rim. Route two
  // trades the dome for the cone of height 2r that holds exactly as much, so the
  // two heights can be added over one shared base circle.
  [
    {
      q: 'A waffle cone of radius $3$ and height $8$ is packed solid with frozen yogurt, and a solid hemisphere scoop of radius $3$ is pressed onto the rim. How much frozen yogurt is on the cone altogether?',
      fig: treatFig(3, 8, 'r = 3', 'h = 8', 230),
      choices: ['$42\\pi$', '$90\\pi$', '$60\\pi$', '$24\\pi$'],
      answer: 0,
      solution:
        'Route one, one piece at a time: the packed cone holds $\\frac{1}{3}\\pi \\cdot 3^2 \\cdot 8 = 24\\pi$, and the scoop is half a sphere, $\\frac{2}{3}\\pi \\cdot 27 = 18\\pi$. Together: $24\\pi + 18\\pi = 42\\pi$ ✓. Check a second, independent way, by trading the dome for a cone: a hemisphere of radius $r$ holds exactly as much as a cone of radius $r$ and height $2r$, so the scoop could be repacked into a cone of radius $3$ and height $6$. Both pieces now stand on the same circle of radius $3$, so their heights simply add, and one cone of height $8 + 6 = 14$ holds $\\frac{1}{3}\\pi \\cdot 9 \\cdot 14 = 42\\pi$ ✓. (The choice $90\\pi$ DROPS THE $\\frac{1}{3}$ FROM THE CONE, charging $72\\pi$ for the pastry instead of $24\\pi$ ✗; the choice $60\\pi$ PUTS A WHOLE SPHERE ON TOP, $36\\pi$ where only the half-sphere $18\\pi$ belongs ✗; the choice $24\\pi$ MEASURES THE CONE AND FORGETS THE SCOOP ✗.)',
    },
    {
      q: 'A paper snow-cone cup of radius $6$ and height $4$ is filled level with shaved ice, and a solid dome of shaved ice — a hemisphere of radius $6$ — is heaped on top. What is the total volume of ice?',
      fig: treatFig(6, 4, 'r = 6', 'h = 4', 240),
      choices: ['$288\\pi$', '$192\\pi$', '$336\\pi$', '$48\\pi$'],
      answer: 1,
      solution:
        'Route one, one piece at a time: the cup holds $\\frac{1}{3}\\pi \\cdot 36 \\cdot 4 = 48\\pi$, and the dome is half a sphere, $\\frac{2}{3}\\pi \\cdot 216 = 144\\pi$. Total: $48\\pi + 144\\pi = 192\\pi$ ✓. Check a second, independent way, by reshaping the dome: a hemisphere of radius $6$ holds as much as a cone of radius $6$ and height $12$, so the whole treat could be repacked as one cone standing on the same circle with height $4 + 12 = 16$. That cone holds $\\frac{1}{3}\\pi \\cdot 36 \\cdot 16 = 12\\pi \\cdot 16 = 192\\pi$ ✓. (The choice $288\\pi$ DROPS THE $\\frac{1}{3}$ FROM THE CUP, calling it $144\\pi$ ✗; the choice $336\\pi$ HEAPS A WHOLE SPHERE ON TOP, $288\\pi$ instead of the half-sphere $144\\pi$ ✗; the choice $48\\pi$ IS THE CUP ALONE, with the dome left uncounted ✗.)',
    },
    {
      q: 'A glass paperweight is moulded as a solid cone of radius $6$ and height $10$ with a solid glass dome — a hemisphere of radius $6$ — fused onto its flat end. What volume of glass does the paperweight contain?',
      fig: treatFig(6, 10, 'r = 6', 'h = 10', 220),
      choices: ['$504\\pi$', '$408\\pi$', '$264\\pi$', '$144\\pi$'],
      answer: 2,
      solution:
        'Route one, one piece at a time: the cone is $\\frac{1}{3}\\pi \\cdot 36 \\cdot 10 = 120\\pi$ and the dome is $\\frac{2}{3}\\pi \\cdot 216 = 144\\pi$, so the glass totals $120\\pi + 144\\pi = 264\\pi$ ✓. Check a second, independent way, by recasting the dome as a cone: a hemisphere of radius $6$ matches a cone of radius $6$ and height $12$, and that cone shares the paperweight’s base circle, so the two heights add to $10 + 12 = 22$. One cone of radius $6$ and height $22$ holds $\\frac{1}{3}\\pi \\cdot 36 \\cdot 22 = 12\\pi \\cdot 22 = 264\\pi$ ✓. (The choice $504\\pi$ DROPS THE $\\frac{1}{3}$ FROM THE CONE, pricing it at $360\\pi$ ✗; the choice $408\\pi$ FUSES ON A WHOLE SPHERE, $288\\pi$ rather than the half-sphere $144\\pi$ ✗; the choice $144\\pi$ IS THE DOME ALONE, with the cone left out ✗.)',
    },
  ],
  // s2 — a capsule: a cylinder with a hemisphere on each end. Route two carves
  // the capsule out of the smallest cylinder that contains it and subtracts the
  // snug-can leftover, so nothing from route one is reused.
  [
    {
      q: 'A fishing float is a cylinder of radius $2$ and height $9$ with a solid hemisphere of radius $2$ moulded onto each end. What is the float’s total volume?',
      fig: capsuleFig(2, 9, 'r = 2', '9', 200),
      choices: ['$\\frac{124\\pi}{3}$', '$\\frac{140\\pi}{3}$', '$\\frac{172\\pi}{3}$', '$36\\pi$'],
      answer: 1,
      solution:
        'Route one, snap the two ends together: the hemispheres are halves of the same size ball, so together they make one whole sphere of radius $2$, worth $\\frac{4}{3}\\pi \\cdot 8 = \\frac{32\\pi}{3}$. The tube adds $\\pi \\cdot 4 \\cdot 9 = 36\\pi = \\frac{108\\pi}{3}$, and $\\frac{108\\pi + 32\\pi}{3} = \\frac{140\\pi}{3}$ ✓. Check a second, independent way, by carving instead of adding: the smallest cylinder that swallows the float has radius $2$ and height $9 + 2 + 2 = 13$, so $\\pi \\cdot 4 \\cdot 13 = 52\\pi$ of wood. The only waste is the ring of air around the two round ends, and those ends form a ball snug inside a can of radius $2$ and height $4$; a snug ball fills two thirds of its can, so the waste is one third of $\\pi \\cdot 4 \\cdot 4 = 16\\pi$, namely $\\frac{16\\pi}{3}$. That leaves $52\\pi - \\frac{16\\pi}{3} = \\frac{156\\pi - 16\\pi}{3} = \\frac{140\\pi}{3}$ ✓. (The choice $\\frac{124\\pi}{3}$ COUNTS ONLY ONE END CAP, $36\\pi + \\frac{16\\pi}{3}$ ✗; the choice $\\frac{172\\pi}{3}$ PUTS A FULL SPHERE ON EACH END, $36\\pi + \\frac{64\\pi}{3}$ ✗; the choice $36\\pi$ IS THE TUBE ALONE, with both caps missing ✗.)',
    },
    {
      q: 'A vitamin gel-cap is a cylinder of radius $3$ and height $10$ closed off by a hemisphere of radius $3$ at each end. How much gel does one capsule hold?',
      fig: capsuleFig(3, 10, 'r = 3', '10', 220),
      choices: ['$90\\pi$', '$108\\pi$', '$126\\pi$', '$162\\pi$'],
      answer: 2,
      solution:
        'Route one, snap the two ends together: the two hemispheres join into one sphere of radius $3$, worth $\\frac{4}{3}\\pi \\cdot 27 = 36\\pi$, and the tube holds $\\pi \\cdot 9 \\cdot 10 = 90\\pi$. Total: $90\\pi + 36\\pi = 126\\pi$ ✓. Check a second, independent way, by carving instead of adding: the smallest cylinder containing the capsule has radius $3$ and height $10 + 3 + 3 = 16$, giving $\\pi \\cdot 9 \\cdot 16 = 144\\pi$. What that cylinder holds and the capsule does not is the air around the rounded ends, which is what is left when a snug ball sits in a can of radius $3$ and height $6$ — one third of $\\pi \\cdot 9 \\cdot 6 = 54\\pi$, so $18\\pi$. Then $144\\pi - 18\\pi = 126\\pi$ ✓. (The choice $108\\pi$ COUNTS ONLY ONE END CAP, $90\\pi + 18\\pi$ ✗; the choice $162\\pi$ CLOSES EACH END WITH A FULL SPHERE, $90\\pi + 72\\pi$ ✗; the choice $90\\pi$ IS THE TUBE ALONE, with both caps missing ✗.)',
    },
    {
      q: 'A farm water tank is a cylinder of radius $6$ and height $5$ with a hemispherical bulge of radius $6$ welded onto each end. What is the tank’s capacity?',
      fig: capsuleFig(6, 5, 'r = 6', '5', 260),
      choices: ['$180\\pi$', '$324\\pi$', '$756\\pi$', '$468\\pi$'],
      answer: 3,
      solution:
        'Route one, snap the two ends together: the two bulges form one sphere of radius $6$, holding $\\frac{4}{3}\\pi \\cdot 216 = 288\\pi$, and the barrel holds $\\pi \\cdot 36 \\cdot 5 = 180\\pi$. Capacity: $180\\pi + 288\\pi = 468\\pi$ ✓. Check a second, independent way, by carving instead of adding: the smallest cylinder that contains the tank has radius $6$ and height $5 + 6 + 6 = 17$, holding $\\pi \\cdot 36 \\cdot 17 = 612\\pi$. The gap between that cylinder and the tank is the air left when a snug ball sits in a can of radius $6$ and height $12$ — one third of $\\pi \\cdot 36 \\cdot 12 = 432\\pi$, so $144\\pi$. Then $612\\pi - 144\\pi = 468\\pi$ ✓. (The choice $324\\pi$ WELDS ON ONLY ONE BULGE, $180\\pi + 144\\pi$ ✗; the choice $756\\pi$ MAKES EACH BULGE A FULL SPHERE, $180\\pi + 576\\pi$ ✗; the choice $180\\pi$ IS THE BARREL ALONE, with both bulges missing ✗.)',
    },
  ],
  // s3 — a cylinder with a cone stuck on one end. Route two shrinks the cone to
  // the cylinder a third as tall that holds the same, then measures one cylinder.
  [
    {
      q: 'A model rocket is a solid cylinder of radius $2$ and height $9$ with a solid nose cone of radius $2$ and height $6$ fixed on top. What is the rocket’s total volume?',
      fig: rocketFig(2, 9, 6, 'r = 2', '9', '6', 220),
      choices: ['$60\\pi$', '$36\\pi$', '$44\\pi$', '$20\\pi$'],
      answer: 2,
      solution:
        'Route one, one piece at a time: the body is $\\pi \\cdot 4 \\cdot 9 = 36\\pi$ and the nose is $\\frac{1}{3}\\pi \\cdot 4 \\cdot 6 = 8\\pi$, so the rocket totals $36\\pi + 8\\pi = 44\\pi$ ✓. Check a second, independent way, by flattening the nose into the body: a cone holds a third of what the cylinder on the same base with the same height holds, so the nose could be squashed into a cylinder of radius $2$ and height $\\frac{6}{3} = 2$. The whole rocket then becomes a single cylinder of radius $2$ and height $9 + 2 = 11$: $\\pi \\cdot 4 \\cdot 11 = 44\\pi$ ✓. (The choice $60\\pi$ TREATS THE NOSE AS A FULL CYLINDER, $24\\pi$ rather than $8\\pi$ ✗; the choice $36\\pi$ IS THE BODY ALONE, with the nose forgotten ✗; the choice $20\\pi$ PUTS THE $\\frac{1}{3}$ ON THE BODY TOO, $12\\pi + 8\\pi$, though only the cone earns it ✗.)',
    },
    {
      q: 'A wax crayon is a cylinder of radius $4$ and height $7$ ending in a sharpened cone-shaped tip of radius $4$ and height $3$. How much wax is in one crayon?',
      fig: rocketFig(4, 7, 3, 'r = 4', '7', '3', 240),
      choices: ['$160\\pi$', '$112\\pi$', '$136\\pi$', '$128\\pi$'],
      answer: 3,
      solution:
        'Route one, one piece at a time: the barrel is $\\pi \\cdot 16 \\cdot 7 = 112\\pi$ and the tip is $\\frac{1}{3}\\pi \\cdot 16 \\cdot 3 = 16\\pi$, so the crayon holds $112\\pi + 16\\pi = 128\\pi$ ✓. Check a second, independent way, by melting the tip flat: a cone is a third of the cylinder on the same base with the same height, so the tip remelts into a disc of radius $4$ and height $\\frac{3}{3} = 1$. The crayon becomes one plain cylinder of radius $4$ and height $7 + 1 = 8$: $\\pi \\cdot 16 \\cdot 8 = 128\\pi$ ✓. (The choice $160\\pi$ TREATS THE TIP AS A FULL CYLINDER, $48\\pi$ rather than $16\\pi$ ✗; the choice $112\\pi$ IS THE BARREL ALONE, with the tip forgotten ✗; the choice $136\\pi$ HALVES THE TIP INSTEAD OF TAKING A THIRD, adding $24\\pi$ ✗.)',
    },
    {
      q: 'A carved wooden lighthouse ornament is a solid cylinder of radius $5$ and height $8$ with a solid cone of radius $5$ and height $6$ fixed on top as its pointed roof. What is the volume of wood in the ornament?',
      fig: rocketFig(5, 8, 6, 'r = 5', '8', '6', 240),
      choices: ['$250\\pi$', '$350\\pi$', '$200\\pi$', '$275\\pi$'],
      answer: 0,
      solution:
        'Route one, one piece at a time: the drum is $\\pi \\cdot 25 \\cdot 8 = 200\\pi$ and the roof is $\\frac{1}{3}\\pi \\cdot 25 \\cdot 6 = 50\\pi$, so the ornament holds $200\\pi + 50\\pi = 250\\pi$ ✓. Check a second, independent way, by shortening the roof instead of taking a third of it: a cone matches the cylinder on the same base with a third of the height, so the roof is the same wood as a slab of radius $5$ and height $\\frac{6}{3} = 2$. Stacked on the drum that gives one cylinder of radius $5$ and height $8 + 2 = 10$: $\\pi \\cdot 25 \\cdot 10 = 250\\pi$ ✓. (The choice $350\\pi$ TREATS THE ROOF AS A FULL CYLINDER, $150\\pi$ rather than $50\\pi$ ✗; the choice $200\\pi$ IS THE DRUM ALONE, with the roof forgotten ✗; the choice $275\\pi$ HALVES THE ROOF INSTEAD OF TAKING A THIRD, adding $75\\pi$ ✗.)',
    },
  ],
  // s4 — a sphere melted and recast as a cylinder, solving for the height.
  // Route two never solves an equation: it rewrites the ball as the puck of
  // radius R and height 4R/3 that holds the same, then squeezes that puck into
  // the narrower mould, where a smaller base area forces a taller stack.
  [
    {
      q: 'A solid silver sphere of radius $6$ is melted down and poured into a cylindrical ingot mould of radius $3$, filling it exactly. How tall is the finished ingot?',
      choices: ['$24$', '$96$', '$8$', '$32$'],
      answer: 3,
      solution:
        'Route one, melting keeps the volume: the sphere is $\\frac{4}{3}\\pi \\cdot 216 = 288\\pi$, and the ingot is $\\pi \\cdot 3^2 \\cdot h = 9\\pi h$. Setting them equal, $9h = 288$, so $h = 32$ ✓. Check a second, independent way, by squeezing a puck rather than solving an equation: a ball of radius $R$ holds as much as a flat disc of radius $R$ and height $\\frac{4R}{3}$, so this silver could first be cast as a disc of radius $6$ and height $8$. Now narrow the mould from radius $6$ to radius $3$: the radius is halved, so the base area falls to a quarter, and the same silver must stand four times as tall — $8 \\times 4 = 32$ ✓. (The choice $24$ DROPS THE $\\frac{4}{3}$ from the ball, melting only $216\\pi$ ✗; the choice $96$ DIVIDES BY THE MOULD’S RADIUS $3$ INSTEAD OF ITS BASE AREA $9\\pi$ ✗; the choice $8$ USES THE SPHERE’S OWN BASE AREA $36\\pi$ as though the mould had not changed width ✗.)',
    },
    {
      q: 'A candle maker melts a solid ball of wax of radius $6$ and pours all of it into a cylindrical candle mould of radius $2$. How tall does the candle stand?',
      choices: ['$72$', '$54$', '$144$', '$8$'],
      answer: 0,
      solution:
        'Route one, melting keeps the volume: the ball is $\\frac{4}{3}\\pi \\cdot 216 = 288\\pi$, and the candle is $\\pi \\cdot 2^2 \\cdot h = 4\\pi h$. Then $4h = 288$, so $h = 72$ ✓. Check a second, independent way, by squeezing a puck: the ball of radius $6$ holds the same wax as a disc of radius $6$ and height $\\frac{4 \\cdot 6}{3} = 8$. Narrowing the mould from radius $6$ to radius $2$ cuts the radius to a third, so the base area falls to a ninth and the wax must climb nine times as high: $8 \\times 9 = 72$ ✓. (The choice $54$ DROPS THE $\\frac{4}{3}$ from the ball, pouring only $216\\pi$ ✗; the choice $144$ DIVIDES BY THE MOULD’S RADIUS $2$ INSTEAD OF ITS BASE AREA $4\\pi$ ✗; the choice $8$ IS THE HEIGHT BEFORE THE MOULD NARROWS, using the ball’s own base area $36\\pi$ ✗.)',
    },
    {
      q: 'A brass sphere of diameter $18$ is melted and cast as a solid cylindrical roller of radius $6$. What is the roller’s length?',
      choices: ['$216$', '$27$', '$12$', '$9$'],
      answer: 1,
      solution:
        'Route one, melting keeps the volume: halve the diameter first, so the sphere has radius $9$ and volume $\\frac{4}{3}\\pi \\cdot 729 = 972\\pi$. The roller is $\\pi \\cdot 36 \\cdot \\ell$, so $36\\ell = 972$ and $\\ell = 27$ ✓. Check a second, independent way, by squeezing a puck: a ball of radius $9$ holds as much as a disc of radius $9$ and height $\\frac{4 \\cdot 9}{3} = 12$. Narrowing from radius $9$ to radius $6$ scales the radius by $\\frac{2}{3}$, so the base area scales by $\\frac{4}{9}$ and the length must grow by $\\frac{9}{4}$: $12 \\cdot \\frac{9}{4} = 27$ ✓. (The choice $216$ USES THE DIAMETER $18$ AS THE RADIUS, which inflates the brass eightfold to $7776\\pi$ ✗; the choice $12$ IS THE LENGTH BEFORE THE MOULD NARROWS, dividing by the sphere’s own base area $81\\pi$ ✗; the choice $9$ USES THE SURFACE FORMULA $4\\pi r^2 = 324\\pi$ where the volume formula belongs ✗.)',
    },
  ],
  // s5 — a cylinder melted into equal balls. Route two cuts the cylinder into
  // columns as wide as one ball and slices each column into puck-thick layers,
  // so the count comes out without ever dividing two volumes.
  [
    {
      q: 'A solid copper cylinder of radius $6$ and height $8$ is melted down and recast as ball bearings of radius $3$. How many bearings does the copper make?',
      choices: ['$12$', '$8$', '$24$', '$4$'],
      answer: 1,
      solution:
        'Route one, divide the volumes: the cylinder is $\\pi \\cdot 36 \\cdot 8 = 288\\pi$ and each bearing is $\\frac{4}{3}\\pi \\cdot 27 = 36\\pi$, so the copper makes $288\\pi \\div 36\\pi = 8$ bearings ✓. Check a second, independent way, by cutting rather than dividing: one bearing holds the same copper as a puck of radius $3$ and height $4$, since $\\frac{4 \\cdot 3}{3} = 4$. The cylinder’s base of radius $6$ has four times the area of a circle of radius $3$, so the block is four columns of radius $3$, each $8$ tall, and each column splits into $8 \\div 4 = 2$ pucks. That is $4 \\times 2 = 8$ ✓. (The choice $12$ POURS EACH BEARING AS A HEMISPHERE, $24\\pi$ apiece ✗; the choice $24$ SQUARES THE BEARING’S RADIUS INSTEAD OF CUBING IT, $\\frac{4}{3}\\pi \\cdot 9 = 12\\pi$ apiece ✗; the choice $4$ COMPARES THE TWO BASE CIRCLES, $36\\pi$ against $9\\pi$, instead of the two volumes ✗.)',
    },
    {
      q: 'A slab of scented wax shaped as a cylinder of radius $9$ and height $4$ is melted and moulded into spherical bath bombs of radius $3$. How many bath bombs are moulded?',
      choices: ['$27$', '$3$', '$12$', '$9$'],
      answer: 3,
      solution:
        'Route one, divide the volumes: the slab is $\\pi \\cdot 81 \\cdot 4 = 324\\pi$ and each bomb is $\\frac{4}{3}\\pi \\cdot 27 = 36\\pi$, so the wax makes $324\\pi \\div 36\\pi = 9$ bombs ✓. Check a second, independent way, by cutting rather than dividing: each bomb is the same wax as a puck of radius $3$ and height $4$. The slab’s base of radius $9$ has $9$ times the area of a circle of radius $3$, so the slab is $9$ columns of radius $3$ — and since the slab is already exactly $4$ tall, every column is precisely one puck. That is $9$ bombs ✓. (The choice $27$ SQUARES THE BOMB’S RADIUS INSTEAD OF CUBING IT, $12\\pi$ apiece ✗; the choice $3$ TREATS THE MELTED SLAB AS A CONE, keeping only a third of the wax ✗; the choice $12$ DROPS THE $\\frac{4}{3}$ from the bomb, charging $27\\pi$ apiece ✗.)',
    },
    {
      q: 'A chocolatier melts a solid chocolate cylinder of radius $6$ and height $14$ and pipes it into spherical truffles of radius $3$. How many truffles are made?',
      choices: ['$42$', '$4$', '$14$', '$21$'],
      answer: 2,
      solution:
        'Route one, divide the volumes: the cylinder is $\\pi \\cdot 36 \\cdot 14 = 504\\pi$ and each truffle is $\\frac{4}{3}\\pi \\cdot 27 = 36\\pi$, so there are $504\\pi \\div 36\\pi = 14$ truffles ✓. Check a second, independent way, by cutting rather than dividing: a truffle holds the same chocolate as a puck of radius $3$ and height $4$. The cylinder’s base of radius $6$ is four times the area of a circle of radius $3$, so the block is four columns of radius $3$ and height $14$, and each column yields $\\frac{14}{4} = 3.5$ pucks. Four columns give $4 \\times 3.5 = 14$ ✓. (The choice $42$ SQUARES THE TRUFFLE’S RADIUS INSTEAD OF CUBING IT, $12\\pi$ apiece ✗; the choice $21$ PIPES EACH TRUFFLE AS A HEMISPHERE, $24\\pi$ apiece ✗; the choice $4$ COMPARES THE TWO BASE CIRCLES, $36\\pi$ against $9\\pi$, instead of the two volumes ✗.)',
    },
  ],
  // s6 — a sunken ball raises the water level. Route two flattens the ball into
  // its equal puck and then spreads that puck across the wider tank, so the rise
  // appears as a height scaled by an area ratio, not as a quotient of volumes.
  [
    {
      q: 'A cylindrical rain barrel of radius $6$ is part full of water. A solid stone ball of radius $3$ is lowered in and sinks right under the surface. By how much does the water level rise?',
      fig: tankBallFig(6, 10, 3, 3, 'r = 6', '3', 240),
      choices: ['$1$', '$6$', '$4$', '$\\frac{3}{4}$'],
      answer: 0,
      solution:
        'Route one, displaced volume over base area: the ball shoves aside its own volume, $\\frac{4}{3}\\pi \\cdot 27 = 36\\pi$, and that water spreads across the barrel’s base, $\\pi \\cdot 36 = 36\\pi$. The rise is $\\frac{36\\pi}{36\\pi} = 1$ ✓. Check a second, independent way, by flattening the ball first: a ball of radius $3$ holds as much as a puck of radius $3$ and height $4$. That puck has to spread out over a barrel whose base is four times as wide in area, and a layer that spreads over four times the area is a quarter as thick: $\\frac{4}{4} = 1$ ✓. (The choice $6$ DIVIDES BY THE BARREL’S RADIUS $6$ INSTEAD OF ITS BASE AREA $36\\pi$ ✗; the choice $4$ SPREADS THE WATER OVER THE BALL’S OWN FOOTPRINT $9\\pi$ rather than the barrel’s ✗; the choice $\\frac{3}{4}$ DROPS THE $\\frac{4}{3}$ from the ball, displacing only $27\\pi$ ✗.)',
    },
    {
      q: 'A cylindrical fish tank of radius $8$ holds water. A solid glass ornament in the shape of a ball of radius $4$ is set on the gravel and is completely covered by the water. How far does the water level rise?',
      fig: tankBallFig(8, 12, 4, 4, 'r = 8', '4', 260),
      choices: ['$\\frac{32}{3}$', '$1$', '$\\frac{4}{3}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution:
        'Route one, displaced volume over base area: the ball displaces $\\frac{4}{3}\\pi \\cdot 64 = \\frac{256\\pi}{3}$, and the tank’s base area is $\\pi \\cdot 64 = 64\\pi$. The rise is $\\frac{256\\pi}{3} \\div 64\\pi = \\frac{4}{3}$ ✓. Check a second, independent way, by flattening the ball first: a ball of radius $4$ holds as much as a puck of radius $4$ and height $\\frac{4 \\cdot 4}{3} = \\frac{16}{3}$. Spread that puck over a tank whose base area is four times as large and the layer is a quarter as thick: $\\frac{16}{3} \\div 4 = \\frac{4}{3}$ ✓. (The choice $\\frac{32}{3}$ DIVIDES BY THE TANK’S RADIUS $8$ INSTEAD OF ITS BASE AREA $64\\pi$ ✗; the choice $1$ DROPS THE $\\frac{4}{3}$ from the ball, displacing only $64\\pi$ ✗; the choice $\\frac{2}{3}$ SINKS ONLY HALF A BALL, using a hemisphere’s $\\frac{128\\pi}{3}$ ✗.)',
    },
    {
      q: 'A cylindrical flower vase of radius $9$ is filled partway with water. A solid marble ball of radius $3$ is dropped in and settles at the bottom, fully under water. By how much does the water level rise?',
      fig: tankBallFig(9, 14, 3, 3, 'r = 9', '3', 260),
      choices: ['$4$', '$2$', '$\\frac{1}{3}$', '$\\frac{4}{9}$'],
      answer: 3,
      solution:
        'Route one, displaced volume over base area: the marble displaces $\\frac{4}{3}\\pi \\cdot 27 = 36\\pi$, and the vase’s base area is $\\pi \\cdot 81 = 81\\pi$. The rise is $\\frac{36\\pi}{81\\pi} = \\frac{4}{9}$ ✓. Check a second, independent way, by flattening the marble first: it holds as much as a puck of radius $3$ and height $4$. The vase’s base is nine times the area of that puck’s face, so the same water lies nine times thinner: $\\frac{4}{9}$ ✓. (The choice $4$ DIVIDES BY THE VASE’S RADIUS $9$ INSTEAD OF ITS BASE AREA $81\\pi$ ✗; the choice $2$ USES THE VASE’S CIRCUMFERENCE $18\\pi$ WHERE ITS BASE AREA BELONGS ✗; the choice $\\frac{1}{3}$ DROPS THE $\\frac{4}{3}$ from the marble, displacing only $27\\pi$ ✗.)',
    },
  ],
  // s7 — a full cone poured into a cylinder. Route two carries the cone straight
  // over as the cylinder a third as tall and then rescales for any change of
  // width, so no volume is ever divided by a base area twice.
  [
    {
      q: 'A cone-shaped paper cup of radius $6$ and height $15$ is filled to the brim with lemonade. The lemonade is tipped into an empty cylindrical tumbler, also of radius $6$. How deep does the lemonade stand in the tumbler?',
      fig: cupFig(6, 15, 'r = 6', 'h = 15', 240),
      choices: ['$15$', '$5$', '$7.5$', '$30$'],
      answer: 1,
      solution:
        'Route one, volume over base area: the cup holds $\\frac{1}{3}\\pi \\cdot 36 \\cdot 15 = 180\\pi$, and the tumbler’s base area is $\\pi \\cdot 36 = 36\\pi$, so the lemonade stands $\\frac{180\\pi}{36\\pi} = 5$ deep ✓. Check a second, independent way, without computing either volume: the cup and the tumbler share the same base circle, and a cone holds exactly one third of what a cylinder of the same height on that circle holds. So the lemonade fills one third of the cup’s height: $\\frac{15}{3} = 5$ ✓. (The choice $15$ DROPS THE $\\frac{1}{3}$ FROM THE CONE, filling the tumbler to the cup’s own height ✗; the choice $7.5$ HALVES THE HEIGHT INSTEAD OF TAKING A THIRD ✗; the choice $30$ DIVIDES BY THE TUMBLER’S RADIUS $6$ INSTEAD OF ITS BASE AREA $36\\pi$ ✗.)',
    },
    {
      q: 'A conical funnel of radius $4$ and height $21$ is full of cooking oil, plugged at the tip. The plug is pulled and every drop runs into a cylindrical jar of radius $4$. How deep is the oil in the jar?',
      fig: cupFig(4, 21, 'r = 4', 'h = 21', 200),
      choices: ['$7$', '$21$', '$10.5$', '$28$'],
      answer: 0,
      solution:
        'Route one, volume over base area: the funnel holds $\\frac{1}{3}\\pi \\cdot 16 \\cdot 21 = 112\\pi$, and the jar’s base area is $\\pi \\cdot 16 = 16\\pi$, so the oil stands $\\frac{112\\pi}{16\\pi} = 7$ deep ✓. Check a second, independent way, without computing either volume: funnel and jar sit on the same size circle, and a cone holds one third of the cylinder of matching height on that circle. So the oil reaches one third of the funnel’s height: $\\frac{21}{3} = 7$ ✓. (The choice $21$ DROPS THE $\\frac{1}{3}$ FROM THE CONE, filling the jar to the funnel’s own height ✗; the choice $10.5$ HALVES THE HEIGHT INSTEAD OF TAKING A THIRD ✗; the choice $28$ DIVIDES BY THE JAR’S RADIUS $4$ INSTEAD OF ITS BASE AREA $16\\pi$ ✗.)',
    },
    {
      q: 'A cone-shaped paper cup of radius $5$ and height $24$ is brimming with maple syrup. All of it is poured into a wide empty cylindrical bowl of radius $10$. How deep is the syrup in the bowl?',
      fig: cupFig(5, 24, 'r = 5', 'h = 24', 200),
      choices: ['$6$', '$20$', '$2$', '$8$'],
      answer: 2,
      solution:
        'Route one, volume over base area: the cup holds $\\frac{1}{3}\\pi \\cdot 25 \\cdot 24 = 200\\pi$, and the bowl’s base area is $\\pi \\cdot 100 = 100\\pi$, so the syrup lies $\\frac{200\\pi}{100\\pi} = 2$ deep ✓. Check a second, independent way, in two easy steps instead of one division: the cup holds as much as a cylinder of radius $5$ and height $\\frac{24}{3} = 8$, since a cone is a third of the cylinder that matches it. Now widen from radius $5$ to radius $10$: the radius doubles, so the base area quadruples, and the same syrup lies a quarter as deep — $\\frac{8}{4} = 2$ ✓. (The choice $6$ DROPS THE $\\frac{1}{3}$ FROM THE CONE, pouring $600\\pi$ into the bowl ✗; the choice $8$ FORGETS THAT THE BOWL IS WIDER, dividing by the cup’s base area $25\\pi$ ✗; the choice $20$ DIVIDES BY THE BOWL’S RADIUS $10$ INSTEAD OF ITS BASE AREA $100\\pi$ ✗.)',
    },
  ],
  // s8 — the outside skin of a domed tower: curved wall plus dome, no floor and
  // no hidden disks. Route two replaces the dome with wall: half a sphere’s skin
  // equals the side of a cylinder of radius r and height r, so the whole job is
  // one tall wall of height h + r.
  [
    {
      q: 'A grain silo is a cylinder of radius $4$ whose wall stands $9$ high, closed on top by a hemisphere dome of radius $4$. The outside of the wall and the dome are sealed with weatherproof paint; the floor is not. What area is painted?',
      fig: siloFig(4, 9, 'r = 4', 'h = 9', 240),
      choices: ['$120\\pi$', '$88\\pi$', '$136\\pi$', '$104\\pi$'],
      answer: 3,
      solution:
        'Route one, piece by piece: the wall unrolls into a rectangle $2\\pi \\cdot 4$ wide and $9$ tall, so $72\\pi$. The dome is half a sphere’s skin, $\\frac{1}{2} \\cdot 4\\pi \\cdot 16 = 32\\pi$. No disks appear anywhere — the floor is not painted, and the circle where the dome meets the wall is a seam, not a surface. Painted: $72\\pi + 32\\pi = 104\\pi$ ✓. Check a second, independent way, by turning the dome into more wall: a sphere’s curved skin matches the side of the can that fits it snugly, so half a sphere of radius $4$ matches the side of a cylinder of radius $4$ and height $4$. The painter is then sealing one continuous wall of radius $4$ and height $9 + 4 = 13$: $2\\pi \\cdot 4 \\cdot 13 = 104\\pi$ ✓. (The choice $120\\pi$ PAINTS THE FLOOR TOO, adding a disk of $16\\pi$ ✗; the choice $88\\pi$ CAPS THE SILO WITH A FLAT LID of $16\\pi$ instead of a dome ✗; the choice $136\\pi$ USES A WHOLE SPHERE’S SKIN, $64\\pi$, where only the top half is exposed ✗.)',
    },
    {
      q: 'A small observatory is a cylindrical drum of radius $6$ with a wall $5$ high, topped by a hemispherical dome of radius $6$. Copper sheeting will cover the outside of the drum wall and the dome, but not the floor. How much sheeting is needed?',
      fig: siloFig(6, 5, 'r = 6', 'h = 5', 260),
      choices: ['$96\\pi$', '$132\\pi$', '$204\\pi$', '$168\\pi$'],
      answer: 1,
      solution:
        'Route one, piece by piece: the drum wall unrolls into a rectangle $2\\pi \\cdot 6$ wide and $5$ tall, so $60\\pi$. The dome is half a sphere’s skin, $\\frac{1}{2} \\cdot 4\\pi \\cdot 36 = 72\\pi$. Nothing flat is exposed: the floor is excluded and the join between dome and wall is a seam. Sheeting: $60\\pi + 72\\pi = 132\\pi$ ✓. Check a second, independent way, by turning the dome into more wall: half a sphere of radius $6$ has the same skin as the side of a cylinder of radius $6$ and height $6$, so the whole job is one wall of radius $6$ and height $5 + 6 = 11$: $2\\pi \\cdot 6 \\cdot 11 = 132\\pi$ ✓. (The choice $168\\pi$ SHEETS THE FLOOR TOO, adding a disk of $36\\pi$ ✗; the choice $96\\pi$ CLOSES THE TOP WITH A FLAT LID of $36\\pi$ instead of a dome ✗; the choice $204\\pi$ USES A WHOLE SPHERE’S SKIN, $144\\pi$, where only the upper half shows ✗.)',
    },
    {
      q: 'A stone lighthouse keeper’s hut is a cylinder of radius $7$ with walls $5$ high under a hemispherical roof of radius $7$. The curved wall and the roof are to be whitewashed on the outside; the floor is left bare. What area gets whitewashed?',
      fig: siloFig(7, 5, 'r = 7', 'h = 5', 260),
      choices: ['$168\\pi$', '$266\\pi$', '$119\\pi$', '$217\\pi$'],
      answer: 0,
      solution:
        'Route one, piece by piece: the wall unrolls into a rectangle $2\\pi \\cdot 7$ wide and $5$ tall, giving $70\\pi$, and the roof is half a sphere’s skin, $\\frac{1}{2} \\cdot 4\\pi \\cdot 49 = 98\\pi$. No flat circle is painted: the floor is bare and the ring where roof meets wall is a seam. Whitewashed: $70\\pi + 98\\pi = 168\\pi$ ✓. Check a second, independent way, by turning the roof into more wall: a hemisphere of radius $7$ has the same curved skin as the side of a cylinder of radius $7$ and height $7$, so the whitewasher faces one unbroken wall of radius $7$ and height $5 + 7 = 12$: $2\\pi \\cdot 7 \\cdot 12 = 168\\pi$ ✓. (The choice $217\\pi$ WHITEWASHES THE FLOOR TOO, adding a disk of $49\\pi$ ✗; the choice $119\\pi$ ROOFS THE HUT WITH A FLAT LID of $49\\pi$ instead of a dome ✗; the choice $266\\pi$ USES A WHOLE SPHERE’S SKIN, $196\\pi$, though only the top half is out in the weather ✗.)',
    },
  ],
  // s9 — a cone whose height is twice the shared radius ties with the hemisphere
  // of that radius. Route two measures both against the snug can of radius r and
  // height 2r: the cone fills a third of it, and so does half a snug ball.
  [
    {
      q: 'Two party servers are set out side by side. Server A is a cone of radius $12$ and height $24$; server B is a hemispherical punch bowl of radius $12$. Which one holds more?',
      choices: [
        'The hemisphere holds $1152\\pi$ more',
        'The cone holds $2304\\pi$ more',
        'They hold exactly the same amount: $1152\\pi$ each',
        'The cone holds $576\\pi$ more',
      ],
      answer: 2,
      solution:
        'Route one, measure each: the cone holds $\\frac{1}{3}\\pi \\cdot 144 \\cdot 24 = 1152\\pi$, and the bowl holds $\\frac{2}{3}\\pi \\cdot 12^3 = \\frac{2}{3}\\pi \\cdot 1728 = 1152\\pi$. Neither wins ✓. Check a second, independent way, by pouring both into one measuring can: take the can of radius $12$ and height $24$, which holds $\\pi \\cdot 144 \\cdot 24 = 3456\\pi$. The cone stands on that can’s own base with that can’s own height, so it fills exactly a third of it. A ball fits snugly in that same can and fills two thirds of it, so half a ball fills one third. Both servers fill one third of the same can, and a third of $3456\\pi$ is $1152\\pi$ ✓. (The choice the hemisphere holds $1152\\pi$ more comes from TREATING THE BOWL AS A WHOLE SPHERE, $2304\\pi$ ✗; the choice the cone holds $2304\\pi$ more comes from DROPPING THE $\\frac{1}{3}$ FROM THE CONE, calling it $3456\\pi$ ✗; the choice the cone holds $576\\pi$ more comes from MEASURING THE BOWL WITH $\\frac{1}{3}\\pi r^3 = 576\\pi$, borrowing the cone’s fraction instead of the hemisphere’s $\\frac{2}{3}$ ✗.)',
    },
    {
      q: 'A garden center sells two planters of the same price: a cone-shaped one of radius $15$ and depth $30$, and a bowl-shaped one that is a hemisphere of radius $15$. Which planter takes more soil?',
      choices: [
        'The cone holds $4500\\pi$ more',
        'The hemisphere holds $2250\\pi$ more',
        'The cone holds $1125\\pi$ more',
        'They hold exactly the same amount: $2250\\pi$ each',
      ],
      answer: 3,
      solution:
        'Route one, measure each: the cone takes $\\frac{1}{3}\\pi \\cdot 225 \\cdot 30 = 2250\\pi$ of soil, and the bowl takes $\\frac{2}{3}\\pi \\cdot 15^3 = \\frac{2}{3}\\pi \\cdot 3375 = 2250\\pi$. The two planters tie ✓. Check a second, independent way, by filling one measuring can: the can of radius $15$ and height $30$ holds $\\pi \\cdot 225 \\cdot 30 = 6750\\pi$. The cone shares that can’s base and height, so it takes a third of it. A ball sits snugly in the same can and takes two thirds, so the bowl — half that ball — takes a third as well. Both are a third of $6750\\pi$, which is $2250\\pi$ ✓. (The choice the cone holds $4500\\pi$ more comes from DROPPING THE $\\frac{1}{3}$ FROM THE CONE, calling it $6750\\pi$ ✗; the choice the hemisphere holds $2250\\pi$ more comes from FILLING A WHOLE SPHERE, $4500\\pi$, where only the bowl’s half belongs ✗; the choice the cone holds $1125\\pi$ more comes from MEASURING THE BOWL WITH $\\frac{1}{3}\\pi r^3 = 1125\\pi$ instead of $\\frac{2}{3}\\pi r^3$ ✗.)',
    },
    {
      q: 'A candle maker owns two moulds: a cone of radius $7$ and height $14$, and a hemisphere of radius $7$. Which mould takes more wax?',
      choices: [
        'The cone holds $\\frac{1372\\pi}{3}$ more',
        'They hold exactly the same amount: $\\frac{686\\pi}{3}$ each',
        'The cone holds $\\frac{343\\pi}{3}$ more',
        'The hemisphere holds $\\frac{686\\pi}{3}$ more',
      ],
      answer: 1,
      solution:
        'Route one, measure each: the cone takes $\\frac{1}{3}\\pi \\cdot 49 \\cdot 14 = \\frac{686\\pi}{3}$ of wax, and the hemisphere takes $\\frac{2}{3}\\pi \\cdot 7^3 = \\frac{2}{3}\\pi \\cdot 343 = \\frac{686\\pi}{3}$. The moulds tie ✓. Check a second, independent way, by pouring both into one measuring can: the can of radius $7$ and height $14$ holds $\\pi \\cdot 49 \\cdot 14 = 686\\pi$. The cone matches that can’s base and height, so it takes exactly a third of it. A ball fits snugly in the same can and takes two thirds, so half a ball takes one third. Both moulds are one third of $686\\pi$ ✓. (The choice the cone holds $\\frac{1372\\pi}{3}$ more comes from DROPPING THE $\\frac{1}{3}$ FROM THE CONE, calling it $686\\pi$ ✗; the choice the cone holds $\\frac{343\\pi}{3}$ more comes from MEASURING THE HEMISPHERE WITH $\\frac{1}{3}\\pi r^3$ instead of $\\frac{2}{3}\\pi r^3$ ✗; the choice the hemisphere holds $\\frac{686\\pi}{3}$ more comes from FILLING A WHOLE SPHERE, $\\frac{1372\\pi}{3}$, where only half the mould exists ✗.)',
    },
  ],
  // s10 — sunken marbles, and the question asks for the finished depth, not the
  // rise. Route two weighs everything under the waterline at once — the original
  // water plus the glass that joined it — so the rise is never computed.
  [
    {
      q: 'A cylindrical drinking glass of radius $2$ holds water $5$ deep. Four solid glass marbles, each of radius $1$, are dropped in and sink until every one of them is under the water. What is the new depth of the water?',
      choices: ['$\\frac{19}{3}$', '$\\frac{4}{3}$', '$6$', '$\\frac{23}{3}$'],
      answer: 0,
      solution:
        'Route one, rise then add: the four marbles displace $4 \\cdot \\frac{4}{3}\\pi \\cdot 1^3 = \\frac{16\\pi}{3}$, and the glass’s base area is $\\pi \\cdot 4 = 4\\pi$, so the level climbs $\\frac{16\\pi}{3} \\div 4\\pi = \\frac{4}{3}$. The new depth is $5 + \\frac{4}{3} = \\frac{19}{3}$ ✓. Check a second, independent way, by weighing everything under the waterline at once: below the new surface the glass is packed with water and marbles and nothing else. The water was $\\pi \\cdot 4 \\cdot 5 = 20\\pi = \\frac{60\\pi}{3}$ and the marbles are $\\frac{16\\pi}{3}$, so the contents total $\\frac{76\\pi}{3}$. Spread across the base $4\\pi$, that column stands $\\frac{76\\pi}{3} \\div 4\\pi = \\frac{19}{3}$ high ✓. (The choice $\\frac{4}{3}$ REPORTS THE RISE INSTEAD OF THE FINAL DEPTH ✗; the choice $6$ DROPS THE $\\frac{4}{3}$ from each marble, displacing $4\\pi$ and lifting the level by only $1$ ✗; the choice $\\frac{23}{3}$ DIVIDES BY THE GLASS’S RADIUS $2$ INSTEAD OF ITS BASE AREA $4\\pi$ ✗.)',
    },
    {
      q: 'A cylindrical bucket of radius $6$ holds water $8$ deep. Fifteen solid glass marbles, each of radius $1$, are tipped in; they sink to the bottom and are completely covered by the water. How deep is the water now?',
      choices: ['$\\frac{5}{9}$', '$\\frac{77}{9}$', '$\\frac{34}{3}$', '$28$'],
      answer: 1,
      solution:
        'Route one, rise then add: the fifteen marbles displace $15 \\cdot \\frac{4}{3}\\pi \\cdot 1^3 = 20\\pi$, and the bucket’s base area is $\\pi \\cdot 36 = 36\\pi$, so the level climbs $\\frac{20\\pi}{36\\pi} = \\frac{5}{9}$. The new depth is $8 + \\frac{5}{9} = \\frac{72 + 5}{9} = \\frac{77}{9}$ ✓. Check a second, independent way, by weighing everything under the waterline at once: below the surface the bucket holds water and glass and nothing else — $\\pi \\cdot 36 \\cdot 8 = 288\\pi$ of water plus $20\\pi$ of glass, so $308\\pi$ in all. Over the base $36\\pi$ that column stands $\\frac{308\\pi}{36\\pi} = \\frac{77}{9}$ ✓. (The choice $\\frac{5}{9}$ REPORTS THE RISE INSTEAD OF THE FINAL DEPTH ✗; the choice $\\frac{34}{3}$ DIVIDES BY THE BUCKET’S RADIUS $6$ INSTEAD OF ITS BASE AREA $36\\pi$, lifting the level by $\\frac{10}{3}$ ✗; the choice $28$ SPREADS THE WATER OVER ONE MARBLE’S FOOTPRINT $\\pi$ rather than the bucket’s base ✗.)',
    },
    {
      q: 'A cylindrical canister of radius $4$ holds apple juice $6$ deep. Eight solid steel beads, each of radius $1$, are dropped in and sink completely below the surface. What is the juice’s new depth?',
      choices: ['$\\frac{2}{3}$', '$\\frac{50}{3}$', '$\\frac{13}{2}$', '$\\frac{20}{3}$'],
      answer: 3,
      solution:
        'Route one, rise then add: the eight beads displace $8 \\cdot \\frac{4}{3}\\pi \\cdot 1^3 = \\frac{32\\pi}{3}$, and the canister’s base area is $\\pi \\cdot 16 = 16\\pi$, so the level climbs $\\frac{32\\pi}{3} \\div 16\\pi = \\frac{2}{3}$. The new depth is $6 + \\frac{2}{3} = \\frac{20}{3}$ ✓. Check a second, independent way, by weighing everything under the surface at once: beneath it sit $\\pi \\cdot 16 \\cdot 6 = 96\\pi$ of juice and $\\frac{32\\pi}{3}$ of steel, and nothing else, for $\\frac{288\\pi + 32\\pi}{3} = \\frac{320\\pi}{3}$ of contents. Over the base $16\\pi$ that column stands $\\frac{320\\pi}{3} \\div 16\\pi = \\frac{20}{3}$ ✓. (The choice $\\frac{2}{3}$ REPORTS THE RISE INSTEAD OF THE FINAL DEPTH ✗; the choice $\\frac{50}{3}$ SPREADS THE JUICE OVER ONE BEAD’S FOOTPRINT $\\pi$ rather than the canister’s base ✗; the choice $\\frac{13}{2}$ DROPS THE $\\frac{4}{3}$ from each bead, displacing $8\\pi$ and lifting the level by only $\\frac{1}{2}$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 15,
  sections: { '15.4': s154 },
}
