// Introduction to Geometry chapter 15 — variations for the printable worksheet.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key anywhere in
//    this file. Answers copy the base worksheet’s formatting: a bare '$196\pi$'
//    for a single volume, area, or length, '$\frac{1372\pi}{3}$' when a volume
//    keeps a denominator of $3$, the paired form
//    '$\ell = 26$ and $S = 360\pi$' for the slot that asks for two things at
//    once, and a bare fraction '$\frac{72}{25}$' for a water-level rise.
//  - Every answer keeps $\pi$ exact — no decimals stand in for it.
//  - Every answer was worked twice by two genuinely different routes, and the
//    routes had to agree before the key was written: base area times height vs.
//    the tin inside its square box, where a circle takes $\frac{\pi}{4}$ of the
//    square (slot 1); Pythagoras on the two legs and $\pi r \ell$ vs. squaring
//    the sum $(r + h)^2$ and reading the unrolled wall as a fraction of a full
//    disk (slot 2); the $\frac{4}{3}\pi r^3$ formula vs. two thirds of the snug
//    cylinder (slot 3); unrolling the label vs. the closed jar’s whole surface
//    minus its two lids (slot 4); clearing the $\frac{1}{3}$ vs. scaling a
//    cone of height $1$ (slot 5); dome plus disk vs. cutting a whole sphere in
//    two and sharing the skin and the two new disks (slot 6); the volumes set
//    equal vs. the snug-cylinder two-thirds fact run backwards (slot 7); the
//    two pieces added vs. three silos poured together to make whole cylinders
//    (slot 8); displaced volume over base area vs. an equal-volume can spread
//    by the ratio of base areas (slot 9); arc length rolled into a base circle
//    vs. the base radius as the same fraction of the slant, with the volume
//    read off the matching cylinder (slot 10).
//  - Slot 9 keeps the same ball in all three lanes on purpose and changes only
//    the tank around it, so the three rises can be compared; the three settings
//    are worded as three different scenes.
//  - Every solid is drawn as a 2D wireframe projection with dashed hidden
//    curves. That projection does not preserve length, so every dimension a
//    solver needs is written on the figure as a plain text label. Figure labels
//    are plain text: 'r = 7', 'h = 4', a bare numeral, or the letter 'ℓ'.
//  - Pin deviations: none. Every keyed answer is the pinned one.

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
  return {
    ...(w ? { w } : {}),
    view: [-r - 1.3, -K * r - 1, r + 1.3, h + K * r + 1],
    elems: [
      ...cylElems(r, h),
      { t: 'seg', a: [0, h], b: [r, h], dash: true },
      { t: 'point', p: [0, h] },
      { t: 'label', p: [r / 2, h], text: rText, dx: 0, dy: -10 },
      { t: 'label', p: [r, h / 2], text: hText, dx: 20, dy: 0 },
      ...extra,
    ],
  }
}

function coneFig(r, h, rText, hText, lText, extra = [], w) {
  const elems = [
    { t: 'curve', pts: ellArc(0, 0, r, 180, 360) },
    ...dashedEllArc(0, 0, r, 0, 180),
    { t: 'seg', a: [-r, 0], b: [0, h] },
    { t: 'seg', a: [r, 0], b: [0, h] },
    { t: 'seg', a: [0, 0], b: [r, 0], dash: true },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [r / 2, 0], text: rText, dx: 0, dy: 14 },
    { t: 'seg', a: [0, 0], b: [0, h], dash: true },
    { t: 'right', at: [0, 0], from: [r, 0], to: [0, h] },
    { t: 'label', p: [0, h / 2], text: hText, dx: -20, dy: 0 },
  ]
  if (lText) elems.push({ t: 'label', p: [r / 2, h / 2], text: lText, dx: 18, dy: 0 })
  return {
    ...(w ? { w } : {}),
    view: [-r - 1.3, -K * r - 1, r + 1.3, h + 1],
    elems: [...elems, ...extra],
  }
}

function sectorFig(R, deg, rText, angText) {
  const rad = (d) => (d * Math.PI) / 180
  const mid = rad(deg / 2)
  return {
    view: [-R - 2.5, -R - 2.5, R + 2.5, R + 2.5],
    elems: [
      { t: 'arc', c: [0, 0], r: R, from: 0, to: deg },
      { t: 'seg', a: [0, 0], b: [R, 0] },
      { t: 'seg', a: [0, 0], b: [R2(R * Math.cos(rad(deg))), R2(R * Math.sin(rad(deg)))] },
      { t: 'point', p: [0, 0] },
      { t: 'label', p: [R / 2, 0], text: rText, dx: 0, dy: 14 },
      { t: 'label', p: [R2(0.45 * R * Math.cos(mid)), R2(0.45 * R * Math.sin(mid))], text: angText, dx: 0, dy: 4 },
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

// cylinder with a cone roof — the silo of slot 8, drawn the way the base
// worksheet draws it, with both heights labelled since the projection squashes
// vertical distances.
function siloConeFig(r, hCyl, hCone, rText, cylText, coneText, w) {
  const top = hCyl + hCone
  return {
    ...(w ? { w } : {}),
    view: [-r - 1.3, -K * r - 1, r + 1.3, top + 1],
    elems: [
      ...cylElems(r, hCyl),
      { t: 'seg', a: [-r, hCyl], b: [0, top] },
      { t: 'seg', a: [r, hCyl], b: [0, top] },
      { t: 'seg', a: [0, hCyl], b: [0, top], dash: true },
      { t: 'seg', a: [0, hCyl], b: [r, hCyl], dash: true },
      { t: 'point', p: [0, hCyl] },
      { t: 'label', p: [r / 2, hCyl], text: rText, dx: 0, dy: 16 },
      { t: 'label', p: [r, hCyl / 2], text: cylText, dx: 16, dy: 0 },
      { t: 'label', p: [0, hCyl + hCone / 2], text: coneText, dx: -12, dy: 0 },
    ],
  }
}

const worksheet = [
  // slot 1 — volume of a cylinder.
  //          Lanes: r 7, h 4 -> 196π; r 9, h 2 -> 162π; r 10, h 3 -> 300π.
  [
    {
      q: 'A tin of shortbread is a cylinder with radius $7$ and height $4$. Find its volume.',
      fig: cylFig(7, 4, 'r = 7', 'h = 4'),
      answer: '$196\\pi$',
      solution:
        'Volume is the area of the base times the height. The base is a circle of radius $7$, so its area is $\\pi \\cdot 7^2 = 49\\pi$, and the tin stands $4$ tall: $V = 49\\pi \\cdot 4 = 196\\pi$ ✓. Second route, through the square box the tin fits into: the smallest box around the tin has a $14$ by $14$ square base — the diameter measured each way — and height $4$, so the box holds $14 \\times 14 \\times 4 = 784$. At every level of the stack the tin’s circular slice sits inside a square slice and covers $\\frac{\\pi r^2}{(2r)^2} = \\frac{\\pi}{4}$ of it, and that same fraction of the whole box is $\\frac{\\pi}{4} \\times 784 = 196\\pi$ ✓.',
    },
    {
      q: 'A shallow cake pan is a cylinder with radius $9$ and depth $2$. Find the volume it holds when it is filled level with the rim.',
      fig: cylFig(9, 2, 'r = 9', 'h = 2'),
      answer: '$162\\pi$',
      solution:
        'Volume is the area of the base times the height. The base circle has area $\\pi \\cdot 9^2 = 81\\pi$, and the batter stands $2$ deep: $V = 81\\pi \\cdot 2 = 162\\pi$ ✓. Second route, through the square box the pan fits into: the smallest box around the pan has an $18$ by $18$ square base and height $2$, holding $18 \\times 18 \\times 2 = 648$. A circle covers $\\frac{\\pi}{4}$ of the square drawn around it, and that ratio holds at every level of the stack, so the pan holds $\\frac{\\pi}{4} \\times 648 = 162\\pi$ ✓. It is a wide, low shape, so the width does most of the work here — the radius is squared while the depth is only multiplied.',
    },
    {
      q: 'A round slab of cheese is a cylinder with radius $10$ and thickness $3$. Find its volume.',
      fig: cylFig(10, 3, 'r = 10', 'h = 3'),
      answer: '$300\\pi$',
      solution:
        'Volume is the area of the base times the height. The circular face has area $\\pi \\cdot 10^2 = 100\\pi$, and the slab is $3$ thick: $V = 100\\pi \\cdot 3 = 300\\pi$ ✓. Second route, through the square box the slab fits into: a box just big enough to hold the slab has a $20$ by $20$ square base and height $3$, with volume $20 \\times 20 \\times 3 = 1200$. Every horizontal slice of the cheese is a circle filling $\\frac{\\pi}{4}$ of the square slice around it, so the cheese is $\\frac{\\pi}{4} \\times 1200 = 300\\pi$ ✓.',
    },
  ],

  // slot 2 — a cone’s slant height and its total surface area.
  //          Lanes: r 10, h 24 -> ℓ 26, S 360π; r 15, h 8 -> ℓ 17, S 480π;
  //          r 20, h 21 -> ℓ 29, S 980π.
  [
    {
      q: 'A cone-shaped tent has base radius $10$ and height $24$. Find its slant height and the total area of its fabric, counting both the sloping wall and the sewn-in circular floor.',
      fig: coneFig(10, 24, 'r = 10', 'h = 24', 'ℓ', [], 210),
      answer: '$\\ell = 26$ and $S = 360\\pi$',
      solution:
        'The radius, the height, and the slant meet in a right triangle with the slant as the hypotenuse, so $\\ell = \\sqrt{10^2 + 24^2} = \\sqrt{100 + 576} = \\sqrt{676} = 26$. The sloping wall has area $\\pi r \\ell = \\pi \\cdot 10 \\cdot 26 = 260\\pi$, the floor is a disk of area $\\pi \\cdot 10^2 = 100\\pi$, and together $S = 260\\pi + 100\\pi = 360\\pi$ ✓. Second route, squaring the sum instead of the two legs and then unrolling the wall: $(r + h)^2 = 34^2 = 1156$, and expanding that square gives $r^2 + 2rh + h^2$, so $\\ell^2 = r^2 + h^2 = 1156 - 2 \\cdot 10 \\cdot 24 = 1156 - 480 = 676$ and $\\ell = 26$ again. Now cut the wall up its side and lay it flat: it becomes a slice of a circle of radius $26$, a circle whose whole area is $\\pi \\cdot 26^2 = 676\\pi$. The slice’s curved edge used to wrap the base, so it measures $20\\pi$ out of the full circle’s $52\\pi$, making the slice $\\frac{20\\pi}{52\\pi} = \\frac{5}{13}$ of the circle: $\\frac{5}{13} \\cdot 676\\pi = 260\\pi$. Adding the floor disk $100\\pi$ gives $360\\pi$ ✓.',
    },
    {
      q: 'A pile of sand at a building site is a cone with base radius $15$ and height $8$. Find its slant height and its total surface area, counting the sloping surface together with the circle of ground it covers.',
      fig: coneFig(15, 8, 'r = 15', 'h = 8', 'ℓ'),
      answer: '$\\ell = 17$ and $S = 480\\pi$',
      solution:
        'The radius, the height, and the slant form a right triangle with the slant as the hypotenuse, so $\\ell = \\sqrt{15^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17$. The sloping surface is $\\pi r \\ell = \\pi \\cdot 15 \\cdot 17 = 255\\pi$ and the ground circle is $\\pi \\cdot 15^2 = 225\\pi$, so $S = 255\\pi + 225\\pi = 480\\pi$ ✓. Second route, squaring the sum instead of the two legs and then unrolling the slope: $(r + h)^2 = 23^2 = 529$, and since that expands to $r^2 + 2rh + h^2$ we get $\\ell^2 = 529 - 2 \\cdot 15 \\cdot 8 = 529 - 240 = 289$, giving $\\ell = 17$ again. Peel the sloping surface off and flatten it: it is a slice of a circle of radius $17$, whose full area would be $\\pi \\cdot 17^2 = 289\\pi$. The slice’s curved edge measures $30\\pi$ out of that circle’s $34\\pi$, so the slice is $\\frac{30\\pi}{34\\pi} = \\frac{15}{17}$ of it: $\\frac{15}{17} \\cdot 289\\pi = 255\\pi$. With the ground circle $225\\pi$ the total is $480\\pi$ ✓.',
    },
    {
      q: 'A solid wooden cone has radius $20$ and height $21$. Find its slant height and the total area of its surface, sloping side and flat base together.',
      fig: coneFig(20, 21, 'r = 20', 'h = 21', 'ℓ'),
      answer: '$\\ell = 29$ and $S = 980\\pi$',
      solution:
        'The radius, the height, and the slant sit in a right triangle with the slant as the hypotenuse, so $\\ell = \\sqrt{20^2 + 21^2} = \\sqrt{400 + 441} = \\sqrt{841} = 29$. The sloping side has area $\\pi r \\ell = \\pi \\cdot 20 \\cdot 29 = 580\\pi$ and the base disk is $\\pi \\cdot 20^2 = 400\\pi$, so $S = 580\\pi + 400\\pi = 980\\pi$ ✓. Second route, squaring the sum instead of the two legs and then unrolling the side: $(r + h)^2 = 41^2 = 1681$, and because that expands to $r^2 + 2rh + h^2$ we get $\\ell^2 = 1681 - 2 \\cdot 20 \\cdot 21 = 1681 - 840 = 841$, so $\\ell = 29$ once more. Slit the sloping side and lay it flat: it becomes a slice of a circle of radius $29$, whose whole area is $\\pi \\cdot 29^2 = 841\\pi$. The slice’s curved edge is the base circumference $40\\pi$ out of the full $58\\pi$, so the slice is $\\frac{40\\pi}{58\\pi} = \\frac{20}{29}$ of the circle: $\\frac{20}{29} \\cdot 841\\pi = 580\\pi$. Adding the base disk $400\\pi$ gives $980\\pi$ ✓.',
    },
  ],

  // slot 3 — volume of a sphere from its diameter.
  //          Lanes: d 36 -> 7776π; d 30 -> 4500π; d 14 -> 1372π/3.
  [
    {
      q: 'A giant beach ball has diameter $36$. Find its volume.',
      answer: '$7776\\pi$',
      solution:
        'Convert to the radius before anything else: $r = \\frac{36}{2} = 18$. Then $V = \\frac{4}{3}\\pi \\cdot 18^3 = \\frac{4}{3} \\cdot 5832\\pi = 4 \\cdot 1944\\pi = 7776\\pi$ ✓. Second route, through the can the ball just fits into: a cylinder that touches the ball at the sides, the top, and the bottom has radius $18$ and height equal to the diameter $36$, so it holds $\\pi \\cdot 18^2 \\cdot 36 = 324\\pi \\cdot 36 = 11664\\pi$. A snug ball fills exactly two thirds of its can, and $\\frac{2}{3} \\cdot 11664\\pi = 7776\\pi$ ✓. Feeding the diameter into the formula instead of the radius would multiply the answer by $8$, since the radius is cubed.',
    },
    {
      q: 'A hollow glass globe has diameter $30$. Find the volume of space it encloses.',
      answer: '$4500\\pi$',
      solution:
        'Convert to the radius first: $r = \\frac{30}{2} = 15$. Then $V = \\frac{4}{3}\\pi \\cdot 15^3 = \\frac{4}{3} \\cdot 3375\\pi = 4 \\cdot 1125\\pi = 4500\\pi$ ✓. Second route, through the can the globe just fits into: a cylinder touching the globe all around has radius $15$ and height equal to the diameter $30$, holding $\\pi \\cdot 225 \\cdot 30 = 6750\\pi$. A snug ball takes up two thirds of its can, and $\\frac{2}{3} \\cdot 6750\\pi = 4500\\pi$ ✓.',
    },
    {
      q: 'A carved stone ball sits on a gatepost. The ball is a sphere of diameter $14$. Find its volume.',
      answer: '$\\frac{1372\\pi}{3}$',
      solution:
        'Halve the diameter to get the radius: $r = \\frac{14}{2} = 7$. Then $V = \\frac{4}{3}\\pi \\cdot 7^3 = \\frac{4}{3} \\cdot 343\\pi = \\frac{1372\\pi}{3}$ ✓. Nothing cancels the $3$ here, so leave the answer as a fraction rather than reaching for a decimal. Second route, through the can the ball just fits into: that cylinder has radius $7$ and height equal to the diameter $14$, so it holds $\\pi \\cdot 49 \\cdot 14 = 686\\pi$. The snug ball fills two thirds of it: $\\frac{2}{3} \\cdot 686\\pi = \\frac{1372\\pi}{3}$ ✓.',
    },
  ],

  // slot 4 — area of a label that wraps once around a jar, no overlap.
  //          Lanes: r 6, h 7 -> 84π; r 11, h 5 -> 110π; r 8, h 9 -> 144π.
  [
    {
      q: 'A paper band wraps exactly once around the side of a cylindrical candle of radius $6$ and height $7$, covering the whole side with no overlap. Find the area of the band.',
      answer: '$84\\pi$',
      solution:
        'Peel the band off and cut it with one straight snip: it flattens into a rectangle. Its height is the candle’s height $7$, and its width is whatever wrapped once around, the circumference $2\\pi \\cdot 6 = 12\\pi$. Area: $12\\pi \\cdot 7 = 84\\pi$ ✓. Second route, starting from the whole closed can and taking the lids away: a sealed cylinder of radius $6$ and height $7$ has surface $2\\pi r^2 + 2\\pi rh = 2\\pi \\cdot 6 \\cdot (6 + 7) = 12\\pi \\cdot 13 = 156\\pi$. The two circular ends account for $2 \\cdot \\pi \\cdot 6^2 = 72\\pi$ of that, and a band never covers them, so the band is $156\\pi - 72\\pi = 84\\pi$ ✓.',
    },
    {
      q: 'A printed strip wraps exactly once around the side of a wide biscuit tin of radius $11$ and height $5$, with no overlap. Find the area of the strip.',
      answer: '$110\\pi$',
      solution:
        'Unrolled, the strip is a rectangle: its height is the tin’s height $5$, and its width is the distance once around the tin, $2\\pi \\cdot 11 = 22\\pi$. Area: $22\\pi \\cdot 5 = 110\\pi$ ✓. Second route, starting from the whole closed tin and taking the lids away: sealed, the tin has surface $2\\pi r(r + h) = 2\\pi \\cdot 11 \\cdot (11 + 5) = 22\\pi \\cdot 16 = 352\\pi$. Its top and bottom are circles of $\\pi \\cdot 121 = 121\\pi$ each, $242\\pi$ together, and the strip covers none of that: $352\\pi - 242\\pi = 110\\pi$ ✓. On such a wide, low tin the two lids are more than twice the strip — worth noticing before adding anything by habit.',
    },
    {
      q: 'A sticker wraps exactly once around the side of a cylindrical thermos of radius $8$ and height $9$, covering the whole side with no overlap. Find the area of the sticker.',
      answer: '$144\\pi$',
      solution:
        'Flattened out, the sticker is a rectangle: height $9$, and width equal to the way once around the thermos, $2\\pi \\cdot 8 = 16\\pi$. Area: $16\\pi \\cdot 9 = 144\\pi$ ✓. Second route, starting from the whole closed thermos and taking the lids away: sealed top and bottom, it has surface $2\\pi r(r + h) = 2\\pi \\cdot 8 \\cdot (8 + 9) = 16\\pi \\cdot 17 = 272\\pi$. The two end circles are $\\pi \\cdot 64 = 64\\pi$ each, $128\\pi$ in all, and the sticker covers only the side: $272\\pi - 128\\pi = 144\\pi$ ✓.',
    },
  ],

  // slot 5 — a cone’s height from its volume and radius.
  //          Lanes: V 264π, r 6 -> 22; V 300π, r 6 -> 25; V 216π, r 9 -> 8.
  [
    {
      q: 'A cone-shaped hole drilled in a block has volume $264\\pi$ and radius $6$. Find its depth.',
      answer: '$22$',
      solution:
        'Write what the cone formula says and solve for the missing height: $\\frac{1}{3}\\pi \\cdot 6^2 \\cdot h = 264\\pi$. Multiply both sides by $3$ to clear the fraction: $36h = 792$, so $h = 22$ ✓. Second route, by scaling a cone of depth $1$: a cone of radius $6$ and depth $1$ has volume $\\frac{1}{3}\\pi \\cdot 36 \\cdot 1 = 12\\pi$. Making the hole deeper never changes its opening, so the volume grows in direct proportion to the depth, and the hole is $\\frac{264\\pi}{12\\pi} = 22$ of those unit cones deep ✓.',
    },
    {
      q: 'A cone-shaped spire on a clock tower has volume $300\\pi$ and base radius $6$. Find its height.',
      answer: '$25$',
      solution:
        'Write what the cone formula says and solve for the missing height: $\\frac{1}{3}\\pi \\cdot 6^2 \\cdot h = 300\\pi$. Multiplying both sides by $3$ gives $36h = 900$, so $h = 25$ ✓. Second route, by scaling a cone of height $1$: a cone with radius $6$ and height $1$ holds $\\frac{1}{3}\\pi \\cdot 36 = 12\\pi$. The base circle stays the same however tall the spire is built, so volume and height rise together in direct proportion, and $\\frac{300\\pi}{12\\pi} = 25$ ✓.',
    },
    {
      q: 'A cone of modelling clay has volume $216\\pi$ and base radius $9$. Find its height.',
      answer: '$8$',
      solution:
        'Write what the cone formula says and solve for the missing height: $\\frac{1}{3}\\pi \\cdot 9^2 \\cdot h = 216\\pi$. Multiplying both sides by $3$ gives $81h = 648$, so $h = 8$ ✓. Second route, by scaling a cone of height $1$: a cone of radius $9$ and height $1$ has volume $\\frac{1}{3}\\pi \\cdot 81 = 27\\pi$, and since the base never changes the volume is proportional to the height, so this cone is $\\frac{216\\pi}{27\\pi} = 8$ tall ✓. Note how wide and squat it is — a big base buys height cheaply.',
    },
  ],

  // slot 6 — TOTAL surface area of a solid hemisphere, flat base included.
  //          Lanes: r 5 -> 75π; r 4 -> 48π; r 7 -> 147π.
  [
    {
      q: 'A glass paperweight is a solid hemisphere of radius $5$. Find its total surface area, the curved dome and the flat base together.',
      answer: '$75\\pi$',
      solution:
        'Two pieces. The dome is half of a sphere’s skin: $\\frac{1}{2} \\cdot 4\\pi \\cdot 5^2 = \\frac{1}{2} \\cdot 100\\pi = 50\\pi$. The flat base is a disk of area $\\pi \\cdot 25 = 25\\pi$. Total: $50\\pi + 25\\pi = 75\\pi$ ✓. Second route, cutting a whole ball in two and counting every surface at once: a sphere of radius $5$ has $4\\pi \\cdot 25 = 100\\pi$ of skin, and slicing it through the center creates two brand-new flat disks, one on each half, of $25\\pi$ each. So the two halves show $100\\pi + 50\\pi = 150\\pi$ of surface between them, and the halves match, so each carries $\\frac{150\\pi}{2} = 75\\pi$ ✓. The flat disk is the piece most people leave out.',
    },
    {
      q: 'A wooden door knob is a solid hemisphere of radius $4$. Find its total surface area, including the flat circle where it meets the door.',
      answer: '$48\\pi$',
      solution:
        'Two pieces. The dome is half of a sphere’s skin: $\\frac{1}{2} \\cdot 4\\pi \\cdot 4^2 = \\frac{1}{2} \\cdot 64\\pi = 32\\pi$. The flat circle is a disk of area $\\pi \\cdot 16 = 16\\pi$. Total: $32\\pi + 16\\pi = 48\\pi$ ✓. Second route, cutting a whole ball in two and counting every surface at once: a sphere of radius $4$ has $4\\pi \\cdot 16 = 64\\pi$ of skin, and one cut through the center exposes a fresh disk of $16\\pi$ on each half. The two halves together show $64\\pi + 32\\pi = 96\\pi$, and each identical half carries $\\frac{96\\pi}{2} = 48\\pi$ ✓.',
    },
    {
      q: 'A stone garden ornament is a solid hemisphere of radius $7$. Find its total surface area, curved top and flat base together.',
      answer: '$147\\pi$',
      solution:
        'Two pieces. The curved top is half of a sphere’s skin: $\\frac{1}{2} \\cdot 4\\pi \\cdot 7^2 = \\frac{1}{2} \\cdot 196\\pi = 98\\pi$. The flat base is a disk of area $\\pi \\cdot 49 = 49\\pi$. Total: $98\\pi + 49\\pi = 147\\pi$ ✓. Second route, cutting a whole ball in two and counting every surface at once: a sphere of radius $7$ carries $4\\pi \\cdot 49 = 196\\pi$ of skin, and the cut through its center adds a new flat disk of $49\\pi$ to each half. The two halves show $196\\pi + 98\\pi = 294\\pi$ altogether, so one half has $\\frac{294\\pi}{2} = 147\\pi$ ✓. Either way the answer is three disks’ worth, $3\\pi r^2$.',
    },
  ],

  // slot 7 — a cylinder melted and recast as ONE sphere; find the sphere.
  //          Lanes: cylinder r 14, h 63 (12348π) -> 21; r 12, h 54 (7776π) ->
  //          18; r 2, h 9 (36π) -> 3.
  [
    {
      q: 'A glassworks stores its glass as a tall solid column, a cylinder of radius $14$ and height $63$. The whole column is melted and re-formed as one solid ball. Find the ball’s radius.',
      answer: '$21$',
      solution:
        'Melting moves the glass around but never changes how much there is, so the two volumes are equal. The column holds $\\pi \\cdot 14^2 \\cdot 63 = \\pi \\cdot 196 \\cdot 63 = 12348\\pi$, and the ball holds $\\frac{4}{3}\\pi R^3$, so $\\frac{4}{3}R^3 = 12348$, giving $R^3 = 3 \\cdot \\frac{12348}{4} = 3 \\cdot 3087 = 9261$. Bracket that cube root between friendly numbers: $20^3 = 8000$ is too small and $22^3 = 10648$ is too big, and $21^3 = 9261$ hits it exactly, so $R = 21$ ✓. Second route, through the can the finished ball would fit into: whatever $R$ turns out to be, the ball fills exactly two thirds of the smallest cylinder around it, so that cylinder must hold $\\frac{3}{2} \\cdot 12348\\pi = 18522\\pi$. But that cylinder has radius $R$ and height $2R$, so its volume is $\\pi R^2 \\cdot 2R = 2\\pi R^3$. Hence $2R^3 = 18522$, $R^3 = 9261$, and $R = 21$ ✓.',
    },
    {
      q: 'A pillar of candle wax is a cylinder of radius $12$ and height $54$. It is melted and poured into a single spherical mould that it fills exactly. Find the radius of the sphere.',
      answer: '$18$',
      solution:
        'Melting conserves volume, so set the two volumes equal. The pillar holds $\\pi \\cdot 12^2 \\cdot 54 = \\pi \\cdot 144 \\cdot 54 = 7776\\pi$, and the mould holds $\\frac{4}{3}\\pi R^3$, so $\\frac{4}{3}R^3 = 7776$, giving $R^3 = 5832$ and $R = 18$ ✓. Second route, through the can the finished ball would fit into: the ball fills two thirds of the smallest cylinder around it, so that cylinder holds $\\frac{3}{2} \\cdot 7776\\pi = 11664\\pi$; being of radius $R$ and height $2R$, it also holds $2\\pi R^3$. So $2R^3 = 11664$, $R^3 = 5832$, and since $18 \\times 18 \\times 18 = 5832$ the radius is $18$ ✓. The wax grew shorter and fatter, but not by the factor the height suggests — lengths follow the cube root of a volume.',
    },
    {
      q: 'A short cylinder of chocolate with radius $2$ and height $9$ is melted and rolled into one solid ball. Find the ball’s radius.',
      answer: '$3$',
      solution:
        'Melting conserves volume, so the two are equal. The cylinder holds $\\pi \\cdot 2^2 \\cdot 9 = 36\\pi$, and the ball holds $\\frac{4}{3}\\pi R^3$, so $\\frac{4}{3}R^3 = 36$, giving $R^3 = 27$ and $R = 3$ ✓. Second route, through the can the finished ball would fit into: the ball takes up two thirds of the smallest cylinder around it, so that cylinder holds $\\frac{3}{2} \\cdot 36\\pi = 54\\pi$; with radius $R$ and height $2R$ it holds $2\\pi R^3$, so $2R^3 = 54$, $R^3 = 27$, and $R = 3$ ✓.',
    },
  ],

  // slot 8 — silo: a cylinder with a cone roof, total volume.
  //          Lanes: cyl r 2 h 10 + cone h 6 -> 48π; cyl r 4 h 11 + cone h 9
  //          -> 224π; cyl r 2 h 13 + cone h 9 -> 64π.
  [
    {
      q: 'A grain silo is a cylinder of radius $2$ and height $10$, topped by a cone of radius $2$ and height $6$. Find the silo’s total volume.',
      fig: siloConeFig(2, 10, 6, 'r = 2', '10', '6', 170),
      answer: '$48\\pi$',
      solution:
        'Cut the silo into the two familiar solids and add them. The body is a cylinder: $\\pi \\cdot 2^2 \\cdot 10 = 40\\pi$. The roof is a cone: $\\frac{1}{3}\\pi \\cdot 2^2 \\cdot 6 = \\frac{24\\pi}{3} = 8\\pi$. Total: $40\\pi + 8\\pi = 48\\pi$ ✓. Second route, pouring three silos together so no fraction ever appears: three cone roofs fill one whole cylinder of radius $2$ and height $6$, so three silos hold three body cylinders plus one roof-height cylinder, all of radius $2$. That is $\\pi \\cdot 4 \\cdot (10 + 10 + 10 + 6) = 4\\pi \\cdot 36 = 144\\pi$ for three silos, so one silo holds $\\frac{144\\pi}{3} = 48\\pi$ ✓.',
    },
    {
      q: 'A water tower is a cylinder of radius $4$ and height $11$ with a cone roof of radius $4$ and height $9$. Find the total volume it encloses.',
      fig: siloConeFig(4, 11, 9, 'r = 4', '11', '9', 200),
      answer: '$224\\pi$',
      solution:
        'Cut the tower into the two familiar solids and add them. The tank body is a cylinder: $\\pi \\cdot 4^2 \\cdot 11 = 16\\pi \\cdot 11 = 176\\pi$. The roof is a cone: $\\frac{1}{3}\\pi \\cdot 16 \\cdot 9 = \\frac{144\\pi}{3} = 48\\pi$. Total: $176\\pi + 48\\pi = 224\\pi$ ✓. Second route, pouring three towers together so no fraction ever appears: three cone roofs stack up to exactly one cylinder of radius $4$ and height $9$, so three towers hold three body cylinders plus one roof-height cylinder: $\\pi \\cdot 16 \\cdot (11 + 11 + 11 + 9) = 16\\pi \\cdot 42 = 672\\pi$. One tower is a third of that, $\\frac{672\\pi}{3} = 224\\pi$ ✓.',
    },
    {
      q: 'A model lighthouse is a cylinder of radius $2$ and height $13$, capped by a cone of radius $2$ and height $9$. Find its total volume.',
      fig: siloConeFig(2, 13, 9, 'r = 2', '13', '9', 140),
      answer: '$64\\pi$',
      solution:
        'Cut the lighthouse into the two familiar solids and add them. The tower is a cylinder: $\\pi \\cdot 2^2 \\cdot 13 = 52\\pi$. The cap is a cone: $\\frac{1}{3}\\pi \\cdot 4 \\cdot 9 = \\frac{36\\pi}{3} = 12\\pi$. Total: $52\\pi + 12\\pi = 64\\pi$ ✓. Second route, pouring three lighthouses together so no fraction ever appears: three cone caps fill one cylinder of radius $2$ and height $9$, so three lighthouses hold three tower cylinders plus one cap-height cylinder: $\\pi \\cdot 4 \\cdot (13 + 13 + 13 + 9) = 4\\pi \\cdot 48 = 192\\pi$, and one of them is $\\frac{192\\pi}{3} = 64\\pi$ ✓. The cap is more than two thirds as tall as the tower yet adds less than a quarter as much volume — that is the $\\frac{1}{3}$ at work.',
    },
  ],

  // slot 9 — a ball of radius 6 (volume 288π) sunk in three different tanks.
  //          Lanes: tank r 10 -> 72/25; tank r 12 -> 2; tank r 15 -> 32/25.
  [
    {
      q: 'A cylindrical rain barrel of radius $10$ holds water. A solid ball of radius $6$ is lowered in until it is completely under the surface. By how much does the water level rise?',
      fig: tankBallFig(10, 14, 6, 6, 'r = 10', '6'),
      answer: '$\\frac{72}{25}$',
      solution:
        'The ball shoves aside exactly its own volume of water: $\\frac{4}{3}\\pi \\cdot 6^3 = \\frac{4}{3} \\cdot 216\\pi = 288\\pi$. That water has nowhere to go but up, spreading as a thin layer across the barrel’s whole base, which has area $\\pi \\cdot 10^2 = 100\\pi$. So the rise is $\\frac{288\\pi}{100\\pi} = \\frac{288}{100} = \\frac{72}{25}$ ✓. Second route, by swapping the ball for a can of the same volume and then spreading it wider: the smallest cylinder around the ball has radius $6$ and height $12$, holding $\\pi \\cdot 36 \\cdot 12 = 432\\pi$, and the snug ball fills two thirds of it, $288\\pi$. Since $288\\pi = \\pi \\cdot 36 \\cdot 8$, the ball displaces just as much as a can of radius $6$ standing $8$ deep. Pour that can into a barrel of radius $10$ instead and the base it must cover grows by $\\left(\\frac{10}{6}\\right)^2$, so the depth shrinks by the same factor: rise $= 8 \\cdot \\frac{36}{100} = \\frac{288}{100} = \\frac{72}{25}$ ✓, a shade under $3$.',
    },
    {
      q: 'A cylindrical fish tank of radius $12$ contains water. A solid stone ornament, a ball of radius $6$, is set on the bottom and is completely covered by the water. By how much does the water level rise?',
      fig: tankBallFig(12, 15, 6, 6, 'r = 12', '6'),
      answer: '$2$',
      solution:
        'The ornament pushes aside its own volume of water: $\\frac{4}{3}\\pi \\cdot 6^3 = 288\\pi$. That water rises as an even layer over the tank’s whole base, of area $\\pi \\cdot 12^2 = 144\\pi$, so the rise is $\\frac{288\\pi}{144\\pi} = 2$ ✓. Second route, by swapping the ball for a can of the same volume and then spreading it wider: the smallest cylinder around the ball has radius $6$ and height $12$, holding $432\\pi$, of which the snug ball is two thirds, $288\\pi$; and since $288\\pi = \\pi \\cdot 36 \\cdot 8$, the ball displaces as much as a can of radius $6$ and depth $8$. Spread over a tank of radius $12$, the base is $\\left(\\frac{12}{6}\\right)^2 = 4$ times as large, so the depth is a quarter as much: $8 \\cdot \\frac{1}{4} = 2$ ✓.',
    },
    {
      q: 'A cylindrical drum of radius $15$ is partly filled with water. A solid ball of radius $6$ is dropped in and sinks right under the surface. By how much does the water level rise?',
      fig: tankBallFig(15, 16, 6, 6, 'r = 15', '6'),
      answer: '$\\frac{32}{25}$',
      solution:
        'The ball displaces its own volume: $\\frac{4}{3}\\pi \\cdot 6^3 = 288\\pi$. Spread as a layer over the drum’s base, of area $\\pi \\cdot 15^2 = 225\\pi$, that gives a rise of $\\frac{288\\pi}{225\\pi} = \\frac{288}{225} = \\frac{32}{25}$ ✓, since $9$ divides both. Second route, by swapping the ball for a can of the same volume and then spreading it wider: the smallest cylinder around the ball has radius $6$ and height $12$, holding $432\\pi$, and the snug ball fills two thirds of that, $288\\pi = \\pi \\cdot 36 \\cdot 8$ — the same as a can of radius $6$ standing $8$ deep. In a drum of radius $15$ the base is $\\left(\\frac{15}{6}\\right)^2 = \\frac{25}{4}$ times as large, so the depth is $\\frac{4}{25}$ of $8$: $8 \\cdot \\frac{4}{25} = \\frac{32}{25}$ ✓. The wider the drum, the smaller the rise, and it falls with the SQUARE of the radius, not the radius itself.',
    },
  ],

  // slot 10 — a sector rolled into a cone; find the cone’s VOLUME.
  //           Lanes: 216° of radius 20 -> base 12, height 16, 768π;
  //           288° of radius 25 -> base 20, height 15, 2000π;
  //           216° of radius 10 -> base 6, height 8, 96π.
  [
    {
      q: 'A $216^\\circ$ sector is cut from a circle of radius $20$ and rolled into a cone, with the two straight edges taped together. Find the volume of the cone.',
      fig: sectorFig(20, 216, '20', '216°'),
      answer: '$768\\pi$',
      solution:
        'Rolling the paper up turns the sector’s curved edge into the base circle and the sector’s radius into the slant height. The arc is $\\frac{216}{360} = \\frac{3}{5}$ of the full circumference $2\\pi \\cdot 20 = 40\\pi$, so it measures $24\\pi$; setting $2\\pi r = 24\\pi$ gives a base radius of $r = 12$, and the slant is $\\ell = 20$. The height comes from the right triangle: $h = \\sqrt{20^2 - 12^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16$. Then $V = \\frac{1}{3}\\pi \\cdot 12^2 \\cdot 16 = \\frac{2304\\pi}{3} = 768\\pi$ ✓. Second route, comparing radii directly and finishing through a cylinder: the base circumference and the sector’s full circumference are in the ratio $\\frac{216}{360} = \\frac{3}{5}$, and both carry the same factor of $2\\pi$, so the base radius is that same fraction of the slant: $r = \\frac{3}{5} \\cdot 20 = 12$. For the height, notice $12$ and $20$ are $4$ times $3$ and $5$, so the triangle is a scaled $3$-$4$-$5$ and its third side is $4 \\times 4 = 16$. Finally, a cylinder of radius $12$ and height $16$ holds $\\pi \\cdot 144 \\cdot 16 = 2304\\pi$, and three cones of matching base and height fill it exactly, so the cone holds $\\frac{2304\\pi}{3} = 768\\pi$ ✓.',
    },
    {
      q: 'A paper party hat is made by cutting a $288^\\circ$ sector from a circle of radius $25$ and joining its two straight edges. Find the volume the hat encloses.',
      fig: sectorFig(25, 288, '25', '288°'),
      answer: '$2000\\pi$',
      solution:
        'Rolling the paper up turns the sector’s curved edge into the rim of the hat and the sector’s radius into the slant height. The arc is $\\frac{288}{360} = \\frac{4}{5}$ of the full circumference $2\\pi \\cdot 25 = 50\\pi$, so it measures $40\\pi$; from $2\\pi r = 40\\pi$ the rim has radius $r = 20$, and the slant is $\\ell = 25$. The height is $h = \\sqrt{25^2 - 20^2} = \\sqrt{625 - 400} = \\sqrt{225} = 15$. Then $V = \\frac{1}{3}\\pi \\cdot 20^2 \\cdot 15 = \\frac{6000\\pi}{3} = 2000\\pi$ ✓. Second route, comparing radii directly and finishing through a cylinder: the rim circle and the sector’s full circle are in the ratio $\\frac{288}{360} = \\frac{4}{5}$, and since both circumferences carry the same $2\\pi$, the rim radius is that fraction of the slant: $r = \\frac{4}{5} \\cdot 25 = 20$. For the height, $20$ and $25$ are $5$ times $4$ and $5$, a scaled $3$-$4$-$5$ triangle, so the third side is $5 \\times 3 = 15$. A cylinder of radius $20$ and height $15$ holds $\\pi \\cdot 400 \\cdot 15 = 6000\\pi$, and three such cones fill it, so the hat encloses $\\frac{6000\\pi}{3} = 2000\\pi$ ✓.',
    },
    {
      q: 'A $216^\\circ$ sector of a circle of radius $10$ is rolled up into a cone. Find the cone’s volume.',
      fig: sectorFig(10, 216, '10', '216°'),
      answer: '$96\\pi$',
      solution:
        'Rolling the paper up turns the sector’s curved edge into the base circle and the sector’s radius into the slant height. The arc is $\\frac{216}{360} = \\frac{3}{5}$ of the full circumference $2\\pi \\cdot 10 = 20\\pi$, so it measures $12\\pi$; from $2\\pi r = 12\\pi$ the base radius is $r = 6$, and the slant is $\\ell = 10$. The height is $h = \\sqrt{10^2 - 6^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8$. Then $V = \\frac{1}{3}\\pi \\cdot 6^2 \\cdot 8 = \\frac{288\\pi}{3} = 96\\pi$ ✓. Second route, comparing radii directly and finishing through a cylinder: the base circle and the sector’s full circle stand in the ratio $\\frac{216}{360} = \\frac{3}{5}$, and both circumferences carry the same $2\\pi$, so the base radius is $r = \\frac{3}{5} \\cdot 10 = 6$. For the height, $6$ and $10$ are $2$ times $3$ and $5$, so the triangle is a doubled $3$-$4$-$5$ and its third side is $2 \\times 4 = 8$. A cylinder of radius $6$ and height $8$ holds $\\pi \\cdot 36 \\cdot 8 = 288\\pi$, and three cones of that base and height fill it, so the cone holds $\\frac{288\\pi}{3} = 96\\pi$ ✓.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 15,
  worksheet,
}
