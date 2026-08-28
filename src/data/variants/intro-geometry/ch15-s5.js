// Introduction to Geometry chapter 15 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer was worked twice along routes that share no steps, and
//    the two routes had to agree before the key was written: combining the two
//    solids algebraically vs. counting the pair in conefuls (slot 1); the
//    lateral area chain forwards vs. running the same chain backwards from the
//    answer (slot 2); cancelling the two formulas vs. the thin-cone
//    decomposition $V = \frac{1}{3}Sr$ (slot 3); the missing fraction of the
//    whole tank vs. the empty column measured as its own cylinder (slot 4); the
//    cube of the similarity factor vs. the small cone measured from its own
//    radius and height (slot 5); adding the cubes of the radii vs. adding the
//    three volumes outright or scaling a smaller triple (slot 6); one sphere
//    plus a sleeve vs. assembling three closed pieces and subtracting the glued
//    faces (slot 7); displaced volume over base area vs. weighing the risen
//    layer (slot 8); the sector’s own area vs. the base radius fed into
//    $\pi r \ell$ (slot 9); routing through the length ratio vs. exhibiting two
//    concrete spheres (slot 10); both volumes divided outright vs. stretching
//    the snug two-thirds by the extra height (slot 11); equating the two
//    volumes vs. adjusting the equal-radius case for a narrower cone (slot 12).
//  - Cylinders, cones, spheres and sectors are drawn by the same construction
//    the chapter itself uses: a base circle seen edge-on is squashed into an
//    ellipse and its hidden half is dashed. That projection does not preserve
//    length, so every dimension a solver needs is written on the figure as a
//    plain text label rather than measured off it.
//  - Figure labels are plain text: bare numerals and short phrases.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗.
//  - No two choices inside an item name the same value, and inside each slot the
//    three variations put the correct answer in three different positions.

const K = 0.3 // vertical squash factor for a base circle seen edge-on
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

// A cone standing on its base: apex at (0, h), base center at (0, 0).
function coneFig(r, h, rText, hText, lText, extra = [], w) {
  const elems = [
    { t: 'curve', pts: ellArc(0, 0, r, 180, 360) },
    ...dashedEllArc(0, 0, r, 0, 180),
    { t: 'seg', a: [-r, 0], b: [0, h] },
    { t: 'seg', a: [r, 0], b: [0, h] },
    { t: 'seg', a: [0, 0], b: [r, 0], dash: true },
    { t: 'point', p: [0, 0] },
    { t: 'label', p: [r / 2, 0], text: rText, dx: 0, dy: 14 },
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

// A capsule: a cylindrical tube of radius r and height h capped by a hemisphere
// at each end.
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

// A flat sector of radius R opening through deg degrees, drawn from the
// positive x-axis counterclockwise.
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

// A cylinder of radius R and height H holding a ball of radius r whose center
// sits at height cy. Both the tank radius and the tank height carry labels,
// since the projection shortens neither predictably.
function tankBallFig(R, H, r, cy, rText, hText, w) {
  return {
    ...(w ? { w } : {}),
    view: [-R - 1.3, -K * R - 1, R + 1.3, H + K * R + 1],
    elems: [
      ...cylElems(R, H),
      { t: 'circle', c: [0, cy], r },
      { t: 'seg', a: [0, H], b: [R, H], dash: true },
      { t: 'point', p: [0, H] },
      { t: 'label', p: [R / 2, H], text: rText, dx: 0, dy: -10 },
      { t: 'label', p: [R, H / 2], text: hText, dx: 20, dy: 0 },
    ],
  }
}

const challenge = [
  // slot 1 — a cone and a cylinder share a radius and a height; their combined
  // volume is (4/3)pi r^2 h, so the total gives h.
  // Lane: r 6, total 624pi -> 13 / r 6, total 672pi -> 14 / r 9, total 1944pi -> 18.
  [
    {
      q: 'A candle maker fills two molds with melted wax. One mold is a cylinder and the other is a cone, and both have radius $6$ cm and both have the same height $h$. The two candles together use $624\\pi$ cubic centimeters of wax. What is $h$?',
      choices: ['$13$', '$26$', '$52$', '$78$'],
      answer: 0,
      solution:
        'Combine the two molds before doing any algebra. The cylinder holds $\\pi \\cdot 6^2 \\cdot h = 36\\pi h$ and the cone holds one third of that, $12\\pi h$, so together they hold $36\\pi h + 12\\pi h = 48\\pi h$. Setting $48\\pi h = 624\\pi$ gives $h = 13$ ✓. Check a second, independent way by counting in conefuls: a cylinder is exactly $3$ conefuls, so the pair is $4$ conefuls, and one coneful must be $\\frac{624\\pi}{4} = 156\\pi$; from $\\frac{1}{3}\\pi \\cdot 36 \\cdot h = 12\\pi h = 156\\pi$ we again get $h = 13$, and the two candles measure $468\\pi$ and $156\\pi$, which do add to $624\\pi$ ✓. (The choice $26$ is APPLYING THE $\\frac{1}{3}$ TO THE CYLINDER AS WELL AS THE CONE, solving $24\\pi h = 624\\pi$ ✗; the choice $52$ is FORGETTING THE CYLINDER and solving with the cone alone ✗; the choice $78$ is FORGETTING TO SQUARE THE RADIUS, solving $8\\pi h = 624\\pi$ ✗.)',
    },
    {
      q: 'A wooden toy set holds one solid cone and one solid cylinder, both turned from the same dowel so that both have radius $6$ and both stand the same height $h$. The two pieces together take up $672\\pi$ cubic units of wood. What is $h$?',
      choices: ['$28$', '$56$', '$14$', '$84$'],
      answer: 2,
      solution:
        'Add the two solids first, then solve once. The cylinder is $\\pi \\cdot 6^2 \\cdot h = 36\\pi h$ and the cone is a third of it, $12\\pi h$, so the pair is $48\\pi h$; from $48\\pi h = 672\\pi$ we get $h = 14$ ✓. Check a second, independent way by counting conefuls: the cylinder equals $3$ conefuls, so the two pieces are $4$ conefuls and each coneful is $\\frac{672\\pi}{4} = 168\\pi$; then $12\\pi h = 168\\pi$ gives $h = 14$, and the pieces measure $504\\pi$ and $168\\pi$, which add to $672\\pi$ ✓. (The choice $28$ is APPLYING THE $\\frac{1}{3}$ TO THE CYLINDER AS WELL AS THE CONE, solving $24\\pi h = 672\\pi$ ✗; the choice $56$ is FORGETTING THE CYLINDER and solving with the cone alone ✗; the choice $84$ is FORGETTING TO SQUARE THE RADIUS, solving $8\\pi h = 672\\pi$ ✗.)',
    },
    {
      q: 'A garden sculpture is welded from a hollow cone and a hollow cylinder that stand side by side. Each has radius $9$ and each has height $h$, and the two shells enclose $1944\\pi$ cubic units in all. What is $h$?',
      choices: ['$36$', '$72$', '$162$', '$18$'],
      answer: 3,
      solution:
        'Combine before solving. The cylinder encloses $\\pi \\cdot 9^2 \\cdot h = 81\\pi h$ and the cone encloses a third of that, $27\\pi h$, so the pair encloses $108\\pi h$; from $108\\pi h = 1944\\pi$ we get $h = 18$ ✓. Check a second, independent way in conefuls: the cylinder is $3$ conefuls, so the sculpture is $4$ conefuls and one coneful is $\\frac{1944\\pi}{4} = 486\\pi$; then $27\\pi h = 486\\pi$ gives $h = 18$, and the two shells measure $1458\\pi$ and $486\\pi$, which add to $1944\\pi$ ✓. (The choice $36$ is APPLYING THE $\\frac{1}{3}$ TO THE CYLINDER AS WELL AS THE CONE, solving $54\\pi h = 1944\\pi$ ✗; the choice $72$ is FORGETTING THE CYLINDER and solving with the cone alone ✗; the choice $162$ is FORGETTING TO SQUARE THE RADIUS, solving $12\\pi h = 1944\\pi$ ✗.)',
    },
  ],

  // slot 2 — a lateral area gives the slant, the slant gives the height, the
  // height gives the volume.
  // Lane: r 7, LSA 175pi -> 392pi / r 12, LSA 156pi -> 240pi / r 5, LSA 65pi -> 100pi.
  [
    {
      q: 'A canvas tent is a cone pitched on a circle of ground of radius $7$. Its sloping wall is sewn from a single piece of canvas covering $175\\pi$ square units, and the tent has no floor panel. How much air does the tent enclose?',
      choices: ['$1176\\pi$', '$392\\pi$', '$\\frac{1225\\pi}{3}$', '$294\\pi$'],
      answer: 1,
      solution:
        'The canvas is the lateral surface, which unrolls into a sector of area $\\pi r \\ell$, so $\\pi \\cdot 7 \\cdot \\ell = 175\\pi$ and the slant height is $\\ell = 25$. The radius, the height and the slant meet in a right triangle with the slant as the hypotenuse, so $h = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$, and $V = \\frac{1}{3}\\pi \\cdot 49 \\cdot 24 = 392\\pi$ ✓. Check a second, independent way by running the chain backwards from the answer: an interior of $392\\pi$ standing on ground of radius $7$ forces $h = \\frac{3 \\cdot 392}{49} = 24$, which puts the slant at $\\sqrt{49 + 576} = 25$ and the canvas at $\\pi \\cdot 7 \\cdot 25 = 175\\pi$ — exactly the piece the tent was cut from ✓. (The choice $\\frac{1225\\pi}{3}$ is USING THE SLANT $25$ AS THE HEIGHT ✗; the choice $1176\\pi$ is DROPPING THE $\\frac{1}{3}$ and measuring the cylinder instead ✗; the choice $294\\pi$ is SUBTRACTING THE RADIUS FROM THE SLANT, $25 - 7$, instead of using the right triangle ✗.)',
    },
    {
      q: 'A cardboard megaphone is a cone with an open mouth of radius $12$ and no base disk. Its curved surface measures $156\\pi$ square units. What is the volume of the cone?',
      choices: ['$48\\pi$', '$624\\pi$', '$240\\pi$', '$720\\pi$'],
      answer: 2,
      solution:
        'The curved surface is $\\pi r \\ell$, so $\\pi \\cdot 12 \\cdot \\ell = 156\\pi$ and $\\ell = 13$. The slant is the hypotenuse of the right triangle built on the radius and the height, so $h = \\sqrt{13^2 - 12^2} = \\sqrt{25} = 5$, and $V = \\frac{1}{3}\\pi \\cdot 144 \\cdot 5 = 240\\pi$ ✓. Check a second, independent way by working backwards from the answer: a volume of $240\\pi$ over a base of radius $12$ needs $h = \\frac{3 \\cdot 240}{144} = 5$, so the slant is $\\sqrt{144 + 25} = 13$ and the curved surface is $\\pi \\cdot 12 \\cdot 13 = 156\\pi$, matching the given area ✓. (The choice $624\\pi$ is USING THE SLANT $13$ AS THE HEIGHT ✗; the choice $720\\pi$ is DROPPING THE $\\frac{1}{3}$ ✗; the choice $48\\pi$ is SUBTRACTING THE RADIUS FROM THE SLANT, $13 - 12$, instead of using the right triangle ✗.)',
    },
    {
      q: 'A metal funnel is a cone whose wide rim has radius $5$. The metal in its curved wall covers $65\\pi$ square units, and the funnel has no base. How much does the cone hold?',
      choices: ['$\\frac{325\\pi}{3}$', '$300\\pi$', '$90\\pi$', '$100\\pi$'],
      answer: 3,
      solution:
        'The wall is the lateral surface $\\pi r \\ell$, so $\\pi \\cdot 5 \\cdot \\ell = 65\\pi$ and $\\ell = 13$. Then the right triangle on the radius and the height gives $h = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$, and $V = \\frac{1}{3}\\pi \\cdot 25 \\cdot 12 = 100\\pi$ ✓. Check a second, independent way by reversing the chain: a capacity of $100\\pi$ on a rim of radius $5$ demands $h = \\frac{3 \\cdot 100}{25} = 12$, so the slant is $\\sqrt{25 + 144} = 13$ and the wall covers $\\pi \\cdot 5 \\cdot 13 = 65\\pi$, exactly what was given ✓. (The choice $\\frac{325\\pi}{3}$ is USING THE SLANT $13$ AS THE HEIGHT ✗; the choice $300\\pi$ is DROPPING THE $\\frac{1}{3}$ ✗; the choice $90\\pi$ is ADDING A BASE DISK THE FUNNEL DOES NOT HAVE, reporting the area $65\\pi + 25\\pi$ instead of the volume ✗.)',
    },
  ],

  // slot 3 — a sphere whose volume is k times its surface area has r = 3k.
  // Lane: three times -> 9 / five times -> 15 / seven times -> 21.
  [
    {
      q: 'A soap bubble is blown until the number measuring its volume is exactly three times the number measuring its surface area. What is its radius?',
      choices: ['$9$', '$3$', '$12$', '$1$'],
      answer: 0,
      solution:
        'Write the condition out: $\\frac{4}{3}\\pi r^3 = 3 \\cdot 4\\pi r^2$. Divide both sides by $4\\pi r^2$, which is safe because the radius is not zero, and only $\\frac{r}{3} = 3$ survives, so $r = 9$ ✓. Check a second, independent way with the thin-cone picture: slice the ball into a swarm of skinny cones with their tips at the center and their tiny bases paving the skin, so every one of them has height $r$ and together their bases make up the whole surface, giving $V = \\frac{1}{3}Sr$. For the volume to be $3$ times the surface we need $\\frac{r}{3} = 3$, so $r = 9$; and indeed $V = \\frac{4}{3}\\pi \\cdot 729 = 972\\pi$ while $S = 4\\pi \\cdot 81 = 324\\pi$, and $972 = 3 \\times 324$ ✓. (The choice $3$ is STOPPING AT THE FAMILIAR CASE where volume and surface area are simply equal ✗; the choice $12$ is USING $\\pi r^3$ FOR THE VOLUME, dropping the $\\frac{4}{3}$ ✗; the choice $1$ is REVERSING THE CONDITION and making the surface area three times the volume ✗.)',
    },
    {
      q: 'A ball bearing is manufactured so that the number giving its volume is five times the number giving its surface area. What is its radius?',
      choices: ['$5$', '$15$', '$3$', '$20$'],
      answer: 1,
      solution:
        'State the condition as an equation: $\\frac{4}{3}\\pi r^3 = 5 \\cdot 4\\pi r^2$. Dividing both sides by $4\\pi r^2$ leaves $\\frac{r}{3} = 5$, so $r = 15$ ✓. Check a second, independent way with the thin-cone picture: chop the ball into slender cones whose tips meet at the center, each of height $r$, whose little bases together tile the skin; adding their volumes gives $V = \\frac{1}{3}Sr$, so the volume beats the surface area by the factor $\\frac{r}{3}$, and $\\frac{r}{3} = 5$ gives $r = 15$. Testing it, $V = \\frac{4}{3}\\pi \\cdot 3375 = 4500\\pi$ and $S = 4\\pi \\cdot 225 = 900\\pi$, and $4500 = 5 \\times 900$ ✓. (The choice $5$ is COPYING THE MULTIPLIER AS THE RADIUS, forgetting to undo the $\\frac{1}{3}$ ✗; the choice $3$ is STOPPING AT THE FAMILIAR CASE where volume and surface area are equal ✗; the choice $20$ is USING $\\pi r^3$ FOR THE VOLUME, dropping the $\\frac{4}{3}$ ✗.)',
    },
    {
      q: 'A model planet is built so that the number measuring its volume is seven times the number measuring its surface area. What is its radius?',
      choices: ['$7$', '$3$', '$28$', '$21$'],
      answer: 3,
      solution:
        'Turn the sentence into algebra: $\\frac{4}{3}\\pi r^3 = 7 \\cdot 4\\pi r^2$. Divide both sides by $4\\pi r^2$ and what remains is $\\frac{r}{3} = 7$, so $r = 21$ ✓. Check a second, independent way with the thin-cone picture: think of the ball as countless narrow cones with tips at the center and bases paving the surface. Each has height $r$ and the bases add up to $S$, so $V = \\frac{1}{3}Sr$ and the volume outruns the surface area by exactly $\\frac{r}{3}$; setting that to $7$ gives $r = 21$. Checking, $V = \\frac{4}{3}\\pi \\cdot 9261 = 12348\\pi$ and $S = 4\\pi \\cdot 441 = 1764\\pi$, and $12348 = 7 \\times 1764$ ✓. (The choice $7$ is COPYING THE MULTIPLIER AS THE RADIUS, forgetting to undo the $\\frac{1}{3}$ ✗; the choice $3$ is STOPPING AT THE FAMILIAR CASE where volume and surface area are equal ✗; the choice $28$ is USING $\\pi r^3$ FOR THE VOLUME, dropping the $\\frac{4}{3}$ ✗.)',
    },
  ],

  // slot 4 — a tank is part full; the answer is the MISSING part, not the water.
  // Lane: r 5 h 12, three fifths full -> 120pi / r 6 h 15, three quarters full
  // -> 135pi / r 3 h 20, three fifths full -> 72pi.
  [
    {
      q: 'A cylindrical rain barrel has radius $5$ and height $12$. After a storm it stands exactly three-fifths full. How much more water would it take to fill the barrel to the brim?',
      choices: ['$120\\pi$', '$180\\pi$', '$300\\pi$', '$60\\pi$'],
      answer: 0,
      solution:
        'Work with the part that is missing. The whole barrel holds $\\pi \\cdot 5^2 \\cdot 12 = 300\\pi$, and if three fifths are already wet then two fifths are empty, so the water still needed is $\\frac{2}{5} \\cdot 300\\pi = 120\\pi$ ✓. Check a second, independent way by measuring the empty column on its own: it is a cylinder of the same radius $5$ whose height is the missing two fifths of $12$, that is $\\frac{24}{5}$, and its volume is $\\pi \\cdot 25 \\cdot \\frac{24}{5} = 120\\pi$ ✓. (The choice $180\\pi$ is REPORTING THE WATER ALREADY IN THE BARREL ✗; the choice $300\\pi$ is REPORTING THE WHOLE BARREL, as though it started empty ✗; the choice $60\\pi$ is TAKING ONLY ONE FIFTH, as if a single fifth were missing ✗.)',
    },
    {
      q: 'A cylindrical fish tank has radius $6$ and height $15$. It is filled to exactly three-quarters of its height. How much more water is needed to bring it up to the rim?',
      choices: ['$405\\pi$', '$135\\pi$', '$540\\pi$', '$180\\pi$'],
      answer: 1,
      solution:
        'Go straight for the empty share. The tank holds $\\pi \\cdot 6^2 \\cdot 15 = 540\\pi$ in total, and three quarters of it is water, so one quarter is air: the water still needed is $\\frac{1}{4} \\cdot 540\\pi = 135\\pi$ ✓. Check a second, independent way by treating the empty space as its own cylinder: it has radius $6$ and height $\\frac{15}{4}$, so its volume is $\\pi \\cdot 36 \\cdot \\frac{15}{4} = 135\\pi$ ✓. (The choice $405\\pi$ is REPORTING THE WATER ALREADY IN THE TANK ✗; the choice $540\\pi$ is REPORTING THE WHOLE TANK, as though it started empty ✗; the choice $180\\pi$ is DIVIDING THE TANK INTO THIRDS instead of quarters ✗.)',
    },
    {
      q: 'A tall cylindrical vase has radius $3$ and height $20$. Water reaches exactly three-fifths of the way up. How much more water will the vase take before it overflows?',
      choices: ['$108\\pi$', '$180\\pi$', '$72\\pi$', '$36\\pi$'],
      answer: 2,
      solution:
        'Chase the empty part. The full vase is $\\pi \\cdot 3^2 \\cdot 20 = 180\\pi$, and with three fifths already filled, two fifths are still air, so the extra water is $\\frac{2}{5} \\cdot 180\\pi = 72\\pi$ ✓. Check a second, independent way by measuring the empty column directly: it is a cylinder of radius $3$ whose height is $\\frac{2}{5} \\cdot 20 = 8$, so its volume is $\\pi \\cdot 9 \\cdot 8 = 72\\pi$ ✓. (The choice $108\\pi$ is REPORTING THE WATER ALREADY IN THE VASE ✗; the choice $180\\pi$ is REPORTING THE WHOLE VASE, as though it started empty ✗; the choice $36\\pi$ is TAKING ONLY ONE FIFTH, as if a single fifth were missing ✗.)',
    },
  ],

  // slot 5 — a cone cut by a plane parallel to its base; the small cone on top is
  // similar to the whole, so its volume scales by the CUBE of the factor.
  // Lane: r 12 h 15 cut halfway -> 90pi / r 15 h 18 cut two thirds up -> 50pi /
  // r 14 h 6 cut halfway -> 49pi.
  [
    {
      q: 'A cone-shaped paper cup has radius $12$ and height $15$. A plane parallel to the base slices it exactly halfway up. What is the volume of the small cone above the slice?',
      fig: coneFig(12, 15, 'r = 12', 'h = 15', null, [
        ...dashedEllArc(0, 7.5, 6, 0, 360, 16),
        { t: 'label', p: [-6, 7.5], text: 'cut', dx: -12, dy: 0 },
      ], 260),
      choices: ['$360\\pi$', '$180\\pi$', '$90\\pi$', '$720\\pi$'],
      answer: 2,
      solution:
        'Start from the whole cone, $V = \\frac{1}{3}\\pi \\cdot 12^2 \\cdot 15 = 720\\pi$. The piece above the cut is a smaller copy of the whole cone with scale factor $\\frac{1}{2}$, and volume scales by the cube of the factor, so the top piece is $\\left(\\frac{1}{2}\\right)^3 = \\frac{1}{8}$ of it: $\\frac{720\\pi}{8} = 90\\pi$ ✓. Check a second, independent way by measuring the little cone on its own terms: its height is $\\frac{15}{2} = 7.5$, and because the cut is halfway up the cone the circle there has radius $\\frac{12}{2} = 6$, so $V = \\frac{1}{3}\\pi \\cdot 36 \\cdot 7.5 = 90\\pi$ ✓. (The choice $360\\pi$ is ASSUMING HALF THE HEIGHT MEANS HALF THE VOLUME ✗; the choice $180\\pi$ is SCALING BY THE SQUARE OF THE FACTOR instead of the cube ✗; the choice $720\\pi$ is REPORTING THE WHOLE CONE ✗.)',
    },
    {
      q: 'A cone-shaped hopper has radius $15$ and height $18$. A plate parallel to the base is slid in two-thirds of the way up from the base. What is the volume of the small cone above the plate?',
      fig: coneFig(15, 18, 'r = 15', 'h = 18', null, [
        ...dashedEllArc(0, 12, 5, 0, 360, 16),
        { t: 'label', p: [-5, 12], text: 'cut', dx: -12, dy: 0 },
      ], 260),
      choices: ['$450\\pi$', '$150\\pi$', '$400\\pi$', '$50\\pi$'],
      answer: 3,
      solution:
        'The whole hopper is $V = \\frac{1}{3}\\pi \\cdot 15^2 \\cdot 18 = 1350\\pi$. The plate sits at height $\\frac{2}{3} \\cdot 18 = 12$, so the cone left above it is only $18 - 12 = 6$ tall — a copy of the whole cone at scale factor $\\frac{6}{18} = \\frac{1}{3}$. Volume scales by the cube, so the top piece is $\\frac{1350\\pi}{27} = 50\\pi$ ✓. Check a second, independent way by using the small cone directly: at that level the circle has radius $\\frac{15}{3} = 5$, and with height $6$ the volume is $\\frac{1}{3}\\pi \\cdot 25 \\cdot 6 = 50\\pi$ ✓. (The choice $450\\pi$ is SCALING LIKE A LENGTH, taking $\\frac{1}{3}$ of the whole cone ✗; the choice $150\\pi$ is SCALING BY THE SQUARE OF THE FACTOR instead of the cube ✗; the choice $400\\pi$ is MEASURING THE CUT FROM THE WRONG END, using the factor $\\frac{2}{3}$ ✗.)',
    },
    {
      q: 'A wide, shallow cone has radius $14$ and height $6$. A cut parallel to the base is made exactly halfway up. What is the volume of the small cone above the cut?',
      fig: coneFig(14, 6, 'r = 14', 'h = 6', null, [
        ...dashedEllArc(0, 3, 7, 0, 360, 16),
        { t: 'label', p: [-7, 3], text: 'cut', dx: -12, dy: 0 },
      ], 260),
      choices: ['$196\\pi$', '$49\\pi$', '$98\\pi$', '$392\\pi$'],
      answer: 1,
      solution:
        'Take the whole cone first: $V = \\frac{1}{3}\\pi \\cdot 14^2 \\cdot 6 = 392\\pi$. The cap above a halfway cut is similar to the whole cone with scale factor $\\frac{1}{2}$, and volume follows the cube of the factor, so the cap is $\\frac{392\\pi}{8} = 49\\pi$ ✓. Check a second, independent way by building the little cone from its own measurements: it stands $\\frac{6}{2} = 3$ tall on a circle of radius $\\frac{14}{2} = 7$, so $V = \\frac{1}{3}\\pi \\cdot 49 \\cdot 3 = 49\\pi$ ✓. (The choice $196\\pi$ is ASSUMING HALF THE HEIGHT MEANS HALF THE VOLUME ✗; the choice $98\\pi$ is SCALING BY THE SQUARE OF THE FACTOR instead of the cube ✗; the choice $392\\pi$ is REPORTING THE WHOLE CONE ✗.)',
    },
  ],

  // slot 6 — melting conserves volume, so the CUBES of the radii add.
  // Lane: 6, 8, 10 -> 12 / 12, 16, 20 -> 24 / 3, 10, 18 -> 19.
  [
    {
      q: 'Three solid silver spheres with radii $6$, $8$ and $10$ are melted together and poured into a single spherical mold. What is the radius of the new sphere?',
      choices: ['$24$', '$1728$', '$8$', '$12$'],
      answer: 3,
      solution:
        'Melting keeps the volume, and every volume carries the same factor $\\frac{4}{3}\\pi$, so that factor cancels and the CUBES of the radii are what add: $R^3 = 6^3 + 8^3 + 10^3 = 216 + 512 + 1000 = 1728$, and $\\sqrt[3]{1728} = 12$, so $R = 12$ ✓. Check a second, independent way by scaling a smaller family: the radii are $2 \\times 3$, $2 \\times 4$ and $2 \\times 5$, and $3^3 + 4^3 + 5^3 = 27 + 64 + 125 = 216 = 6^3$, so spheres of radii $3$, $4$, $5$ fuse into one of radius $6$; doubling every length in that picture doubles the answer too, giving $R = 12$ ✓. (The choice $24$ is ADDING THE RADII, $6 + 8 + 10$, as though lengths combined ✗; the choice $1728$ is FORGETTING THE CUBE ROOT and reporting $R^3$ ✗; the choice $8$ is AVERAGING THE THREE RADII ✗.)',
    },
    {
      q: 'A jeweller melts three gold balls of radii $12$, $16$ and $20$ and recasts all the metal as one ball. What is its radius?',
      choices: ['$24$', '$48$', '$13824$', '$16$'],
      answer: 0,
      solution:
        'Volume is conserved and the common factor $\\frac{4}{3}\\pi$ cancels from both sides, so the cubes of the radii are what add: $R^3 = 12^3 + 16^3 + 20^3 = 1728 + 4096 + 8000 = 13824$, and $\\sqrt[3]{13824} = 24$ ✓. Check a second, independent way by scaling a smaller family: the radii are $4 \\times 3$, $4 \\times 4$ and $4 \\times 5$, and $3^3 + 4^3 + 5^3 = 216 = 6^3$, so radii $3$, $4$, $5$ merge into radius $6$; multiplying every length by $4$ turns that into $R = 4 \\times 6 = 24$ ✓. (The choice $48$ is ADDING THE RADII, $12 + 16 + 20$, as though lengths combined ✗; the choice $13824$ is FORGETTING THE CUBE ROOT and reporting $R^3$ ✗; the choice $16$ is AVERAGING THE THREE RADII ✗.)',
    },
    {
      q: 'Three solid wax spheres with radii $3$, $10$ and $18$ are melted down and formed into one sphere. What is the radius of that sphere?',
      choices: ['$31$', '$19$', '$6859$', '$\\sqrt{433}$'],
      answer: 1,
      solution:
        'Nothing is lost in the melting, and the factor $\\frac{4}{3}\\pi$ sits on both sides, so it cancels and the cubes of the radii add: $R^3 = 3^3 + 10^3 + 18^3 = 27 + 1000 + 5832 = 6859$, and $\\sqrt[3]{6859} = 19$, so $R = 19$ ✓. Check a second, independent way by adding the three volumes outright: $\\frac{4}{3}\\pi \\cdot 27 = 36\\pi$, $\\frac{4}{3}\\pi \\cdot 1000 = \\frac{4000\\pi}{3}$ and $\\frac{4}{3}\\pi \\cdot 5832 = 7776\\pi$, which total $\\frac{108\\pi + 4000\\pi + 23328\\pi}{3} = \\frac{27436\\pi}{3}$; setting $\\frac{4}{3}\\pi R^3$ equal to that gives $R^3 = 6859$, and since $6859$ sits between $10^3$ and $20^3$ and ends in a $9$, the only candidate is $19$ — and $19^3 = 19 \\times 361 = 6859$ ✓. (The choice $31$ is ADDING THE RADII, $3 + 10 + 18$, as though lengths combined ✗; the choice $6859$ is FORGETTING THE CUBE ROOT and reporting $R^3$ ✗; the choice $\\sqrt{433}$ is ADDING THE SURFACE AREAS instead of the volumes ✗.)',
    },
  ],

  // slot 7 — TOTAL surface of a capsule: the tube plus one whole sphere’s worth
  // of caps. No flat disk is ever exposed.
  // Lane: r 4 h 6 -> 112pi / r 5 h 8 -> 180pi / r 7 h 4 -> 252pi.
  [
    {
      q: 'A bath toy is a capsule: a cylindrical tube of radius $4$ and height $6$ with a hemisphere glued onto each end. The whole outside is to be coated in rubber. What area does the coating cover?',
      fig: capsuleFig(4, 6, 'r = 4', '6', 220),
      choices: ['$144\\pi$', '$80\\pi$', '$48\\pi$', '$112\\pi$'],
      answer: 3,
      solution:
        'Unroll the tube into a rectangle of width $2\\pi \\cdot 4 = 8\\pi$ and height $6$, giving $48\\pi$. The two hemisphere caps, pushed together, are exactly one whole sphere of radius $4$, so their skins come to $4\\pi \\cdot 16 = 64\\pi$. Nothing else is exposed, so the coating covers $48\\pi + 64\\pi = 112\\pi$ ✓. Check a second, independent way by assembling the toy from three closed pieces and subtracting what the glue hides: a solid hemisphere has total surface $3\\pi r^2 = 48\\pi$, so the two caps bring $96\\pi$, and a closed cylinder brings $2\\pi \\cdot 4 \\cdot 6 + 2\\pi \\cdot 16 = 48\\pi + 32\\pi = 80\\pi$, for $176\\pi$ in all. Gluing buries four flat disks — one on each cap and one at each end of the tube — which removes $4 \\cdot 16\\pi = 64\\pi$, leaving $176\\pi - 64\\pi = 112\\pi$ ✓. (The choice $144\\pi$ is ADDING TWO PHANTOM DISKS, counting flat faces that are glued out of sight ✗; the choice $80\\pi$ is COUNTING ONLY ONE CAP’S WORTH of sphere skin ✗; the choice $48\\pi$ is STOPPING AT THE TUBE and forgetting the caps ✗.)',
    },
    {
      q: 'A pill-shaped bead is a cylinder of radius $5$ and height $8$ with a hemisphere on each end. Its entire surface is painted. How much area gets painted?',
      fig: capsuleFig(5, 8, 'r = 5', '8', 220),
      choices: ['$180\\pi$', '$230\\pi$', '$130\\pi$', '$80\\pi$'],
      answer: 0,
      solution:
        'Flatten the tube: it becomes a rectangle $2\\pi \\cdot 5 = 10\\pi$ wide and $8$ tall, so $80\\pi$. The two caps fit together into a single sphere of radius $5$, contributing $4\\pi \\cdot 25 = 100\\pi$. The painted area is therefore $80\\pi + 100\\pi = 180\\pi$ ✓. Check a second, independent way by building the bead out of three closed pieces and then subtracting the hidden faces: each solid hemisphere has surface $3\\pi \\cdot 25 = 75\\pi$, so the pair gives $150\\pi$, and the closed cylinder gives $2\\pi \\cdot 5 \\cdot 8 + 2\\pi \\cdot 25 = 130\\pi$, a total of $280\\pi$. Four flat disks vanish into the two joints, costing $4 \\cdot 25\\pi = 100\\pi$, and $280\\pi - 100\\pi = 180\\pi$ ✓. (The choice $230\\pi$ is ADDING TWO PHANTOM DISKS, counting flat faces that are glued out of sight ✗; the choice $130\\pi$ is COUNTING ONLY ONE CAP’S WORTH of sphere skin ✗; the choice $80\\pi$ is STOPPING AT THE TUBE and forgetting the caps ✗.)',
    },
    {
      q: 'A short, fat roller is a cylinder of radius $7$ and height $4$ finished with a hemisphere at each end. The whole outer surface is wrapped in foil. What area of foil is needed?',
      fig: capsuleFig(7, 4, 'r = 7', '4', 220),
      choices: ['$350\\pi$', '$154\\pi$', '$252\\pi$', '$56\\pi$'],
      answer: 2,
      solution:
        'The tube unrolls into a rectangle of width $2\\pi \\cdot 7 = 14\\pi$ and height $4$, so it needs $56\\pi$. The two hemisphere ends join into one complete sphere of radius $7$, needing $4\\pi \\cdot 49 = 196\\pi$. Altogether the foil covers $56\\pi + 196\\pi = 252\\pi$ ✓. Check a second, independent way by adding three closed pieces and deleting the glued faces: a solid hemisphere measures $3\\pi \\cdot 49 = 147\\pi$, so the two ends give $294\\pi$, and the closed cylinder gives $2\\pi \\cdot 7 \\cdot 4 + 2\\pi \\cdot 49 = 56\\pi + 98\\pi = 154\\pi$, making $448\\pi$. The two joints bury four disks worth $4 \\cdot 49\\pi = 196\\pi$, and $448\\pi - 196\\pi = 252\\pi$ ✓. (The choice $350\\pi$ is ADDING TWO PHANTOM DISKS, counting flat faces that are glued out of sight ✗; the choice $154\\pi$ is COUNTING ONLY ONE CAP’S WORTH of sphere skin ✗; the choice $56\\pi$ is STOPPING AT THE TUBE and forgetting the caps ✗.)',
    },
  ],

  // slot 8 — a sunken solid pushes aside its own volume; the rise is that volume
  // divided by the TANK’s base area.
  // Lane: tank 4, cone 3 by 8 -> 3/2 / tank 10, cone 5 by 12 -> 1 /
  // tank 9, cone 6 by 9 -> 4/3.
  [
    {
      q: 'A cylindrical tank of radius $4$ holds water. A solid metal cone of radius $3$ and height $8$ is lowered in until it is completely under the surface. By how much does the water level rise?',
      choices: ['$\\frac{9}{2}$', '$\\frac{3}{2}$', '$\\frac{8}{3}$', '$6$'],
      answer: 1,
      solution:
        'A submerged object shoves aside exactly its own volume of water, and the cone measures $\\frac{1}{3}\\pi \\cdot 3^2 \\cdot 8 = 24\\pi$. That water spreads into a flat layer across the whole floor of the tank, whose area is $\\pi \\cdot 4^2 = 16\\pi$, so the rise is $\\frac{24\\pi}{16\\pi} = \\frac{3}{2}$ ✓. Check a second, independent way by weighing the risen layer instead: a layer of depth $\\frac{3}{2}$ sitting across a tank of radius $4$ is itself a cylinder of volume $\\pi \\cdot 16 \\cdot \\frac{3}{2} = 24\\pi$, precisely the volume the cone brought with it ✓. (The choice $\\frac{9}{2}$ is DROPPING THE $\\frac{1}{3}$ and treating the cone as a cylinder ✗; the choice $\\frac{8}{3}$ is DIVIDING BY THE CONE’S BASE AREA instead of the tank’s ✗; the choice $6$ is DIVIDING BY THE TANK’S RADIUS instead of its base area ✗.)',
    },
    {
      q: 'A wide cylindrical vat of radius $10$ is partly full of water. A solid cone of radius $5$ and height $12$ is dropped in and sinks right under. By how much does the water level rise?',
      choices: ['$3$', '$4$', '$1$', '$10$'],
      answer: 2,
      solution:
        'The cone displaces its own volume, $\\frac{1}{3}\\pi \\cdot 5^2 \\cdot 12 = 100\\pi$. That displaced water forms a thin layer over the whole floor of the vat, which has area $\\pi \\cdot 10^2 = 100\\pi$, so the level climbs $\\frac{100\\pi}{100\\pi} = 1$ ✓. Check a second, independent way by measuring the new layer: a layer $1$ deep across a floor of radius $10$ is a cylinder of volume $\\pi \\cdot 100 \\cdot 1 = 100\\pi$, matching the cone exactly ✓. (The choice $3$ is DROPPING THE $\\frac{1}{3}$ and treating the cone as a cylinder ✗; the choice $4$ is DIVIDING BY THE CONE’S BASE AREA instead of the vat’s ✗; the choice $10$ is DIVIDING BY THE VAT’S RADIUS instead of its base area ✗.)',
    },
    {
      q: 'A cylindrical bucket of radius $9$ contains water. A solid cone of radius $6$ and height $9$ is placed inside and settles completely below the surface. By how much does the water level rise?',
      choices: ['$\\frac{4}{3}$', '$4$', '$3$', '$12$'],
      answer: 0,
      solution:
        'Only the cone’s volume matters, and that is $\\frac{1}{3}\\pi \\cdot 6^2 \\cdot 9 = 108\\pi$. The pushed-aside water spreads over the bucket’s floor of area $\\pi \\cdot 9^2 = 81\\pi$, so the rise is $\\frac{108\\pi}{81\\pi} = \\frac{4}{3}$ ✓. Check a second, independent way by rebuilding that layer: depth $\\frac{4}{3}$ across a floor of radius $9$ makes a cylinder of volume $\\pi \\cdot 81 \\cdot \\frac{4}{3} = 108\\pi$, exactly the cone’s volume ✓. (The choice $4$ is DROPPING THE $\\frac{1}{3}$ and treating the cone as a cylinder ✗; the choice $3$ is DIVIDING BY THE CONE’S BASE AREA instead of the bucket’s ✗; the choice $12$ is DIVIDING BY THE BUCKET’S RADIUS instead of its base area ✗.)',
    },
  ],

  // slot 9 — rolling a sector into a cone does not stretch the paper, so the
  // cone’s LATERAL area is the sector’s area.
  // Lane: 180 degrees of radius 12 -> 72pi / 240 degrees of radius 15 -> 150pi /
  // 288 degrees of radius 20 -> 320pi.
  [
    {
      q: 'A half-disk of radius $12$ is cut from a sheet of paper and its two straight edges are taped together to make an open cone. What is the lateral surface area of that cone?',
      fig: sectorFig(12, 180, '12', '180°'),
      choices: ['$144\\pi$', '$108\\pi$', '$36\\pi$', '$72\\pi$'],
      answer: 3,
      solution:
        'Rolling paper bends it but never stretches it, so the cone’s curved surface has exactly the area of the flat half-disk: $\\frac{180}{360} \\cdot \\pi \\cdot 12^2 = \\frac{1}{2} \\cdot 144\\pi = 72\\pi$ ✓. Check a second, independent way through the cone’s own measurements: the curved edge of the half-disk has length $\\frac{1}{2} \\cdot 2\\pi \\cdot 12 = 12\\pi$, and rolled up it becomes the base circumference, so $2\\pi r = 12\\pi$ and $r = 6$; the straight edge of the half-disk becomes the slant, $\\ell = 12$; then $\\pi r \\ell = \\pi \\cdot 6 \\cdot 12 = 72\\pi$ ✓. (The choice $144\\pi$ is USING THE WHOLE DISK instead of the half that was cut out ✗; the choice $108\\pi$ is ADDING A BASE DISK the rolled cone does not have ✗; the choice $36\\pi$ is USING THE BASE RADIUS AS THE SLANT HEIGHT, computing $\\pi \\cdot 6 \\cdot 6$ ✗.)',
    },
    {
      q: 'A $240^\\circ$ sector is cut from a circle of radius $15$ and rolled up into an open cone. What is the lateral surface area of the cone?',
      fig: sectorFig(15, 240, '15', '240°'),
      choices: ['$225\\pi$', '$150\\pi$', '$250\\pi$', '$100\\pi$'],
      answer: 1,
      solution:
        'Rolling does not stretch the paper, so the curved surface of the cone is just the sector laid flat: $\\frac{240}{360} \\cdot \\pi \\cdot 15^2 = \\frac{2}{3} \\cdot 225\\pi = 150\\pi$ ✓. Check a second, independent way through the cone itself: the sector’s arc is $\\frac{2}{3} \\cdot 2\\pi \\cdot 15 = 20\\pi$, and that arc becomes the base circumference, so $2\\pi r = 20\\pi$ and $r = 10$; the sector’s radius becomes the slant, $\\ell = 15$; then $\\pi r \\ell = \\pi \\cdot 10 \\cdot 15 = 150\\pi$ ✓. (The choice $225\\pi$ is USING THE WHOLE DISK instead of the sector that was cut out ✗; the choice $250\\pi$ is ADDING A BASE DISK the rolled cone does not have ✗; the choice $100\\pi$ is USING THE BASE RADIUS AS THE SLANT HEIGHT, computing $\\pi \\cdot 10 \\cdot 10$ ✗.)',
    },
    {
      q: 'A $288^\\circ$ sector of a circle of radius $20$ is rolled into an open cone with its straight edges joined. What is the lateral surface area of the cone?',
      fig: sectorFig(20, 288, '20', '288°'),
      choices: ['$400\\pi$', '$576\\pi$', '$320\\pi$', '$256\\pi$'],
      answer: 2,
      solution:
        'Paper does not stretch when it is rolled, so the cone’s curved surface equals the flat sector: $\\frac{288}{360} \\cdot \\pi \\cdot 20^2 = \\frac{4}{5} \\cdot 400\\pi = 320\\pi$ ✓. Check a second, independent way by finding the cone’s own dimensions: the arc measures $\\frac{4}{5} \\cdot 2\\pi \\cdot 20 = 32\\pi$, and it becomes the base circumference, so $2\\pi r = 32\\pi$ and $r = 16$; the sector’s radius becomes the slant, $\\ell = 20$; then $\\pi r \\ell = \\pi \\cdot 16 \\cdot 20 = 320\\pi$ ✓. (The choice $400\\pi$ is USING THE WHOLE DISK instead of the sector that was cut out ✗; the choice $576\\pi$ is ADDING A BASE DISK the rolled cone does not have ✗; the choice $256\\pi$ is USING THE BASE RADIUS AS THE SLANT HEIGHT, computing $\\pi \\cdot 16 \\cdot 16$ ✗.)',
    },
  ],

  // slot 10 — areas scale as k^2 and volumes as k^3, so route through the LENGTH
  // ratio.
  // Lane: 4:49 -> 8:343 / 16:81 -> 64:729 / 25:64 -> 125:512.
  [
    {
      q: 'Two spheres have surface areas in the ratio $4:49$. What is the ratio of their volumes?',
      choices: ['$8:343$', '$2:7$', '$4:49$', '$16:2401$'],
      answer: 0,
      solution:
        'Every scaling question should travel through the length ratio. Surface areas grow like $k^2$, so $k^2 = \\frac{4}{49}$ gives $k = \\frac{2}{7}$; volumes grow like $k^3$, so the volume ratio is $\\left(\\frac{2}{7}\\right)^3 = \\frac{8}{343}$, that is $8:343$ ✓. Check a second, independent way by exhibiting two actual spheres: radii $2$ and $7$ have surface areas $4\\pi \\cdot 4 = 16\\pi$ and $4\\pi \\cdot 49 = 196\\pi$, and $16:196$ reduces to $4:49$, so this pair is legitimate; their volumes are $\\frac{32\\pi}{3}$ and $\\frac{1372\\pi}{3}$, and $32:1372$ reduces to $8:343$ ✓. (The choice $2:7$ is REPORTING THE LENGTH RATIO, the halfway step ✗; the choice $4:49$ is COPYING THE SURFACE-AREA RATIO ✗; the choice $16:2401$ is SQUARING THE AREA RATIO, jumping from areas to volumes without passing through lengths ✗.)',
    },
    {
      q: 'Two spheres have surface areas in the ratio $16:81$. What is the ratio of their volumes?',
      choices: ['$4:9$', '$16:81$', '$256:6561$', '$64:729$'],
      answer: 3,
      solution:
        'Go through the length ratio first. Areas scale as $k^2$, so $k^2 = \\frac{16}{81}$ and $k = \\frac{4}{9}$; volumes scale as $k^3$, so the volume ratio is $\\left(\\frac{4}{9}\\right)^3 = \\frac{64}{729}$, that is $64:729$ ✓. Check a second, independent way with two concrete spheres: radii $4$ and $9$ have surface areas $4\\pi \\cdot 16 = 64\\pi$ and $4\\pi \\cdot 81 = 324\\pi$, and $64:324$ reduces to $16:81$, so the pair fits the description; their volumes are $\\frac{256\\pi}{3}$ and $\\frac{2916\\pi}{3}$, and $256:2916$ reduces to $64:729$ ✓. (The choice $4:9$ is REPORTING THE LENGTH RATIO, the halfway step ✗; the choice $16:81$ is COPYING THE SURFACE-AREA RATIO ✗; the choice $256:6561$ is SQUARING THE AREA RATIO instead of passing through lengths ✗.)',
    },
    {
      q: 'Two spheres have surface areas in the ratio $25:64$. What is the ratio of their volumes?',
      choices: ['$5:8$', '$125:512$', '$25:64$', '$625:4096$'],
      answer: 1,
      solution:
        'Find the length ratio before anything else. Since areas scale as $k^2$, $k^2 = \\frac{25}{64}$ gives $k = \\frac{5}{8}$; volumes scale as $k^3$, so the answer is $\\left(\\frac{5}{8}\\right)^3 = \\frac{125}{512}$, that is $125:512$ ✓. Check a second, independent way by naming two spheres that really do this: radii $5$ and $8$ have surface areas $4\\pi \\cdot 25 = 100\\pi$ and $4\\pi \\cdot 64 = 256\\pi$, and $100:256$ reduces to $25:64$; their volumes are $\\frac{500\\pi}{3}$ and $\\frac{2048\\pi}{3}$, and $500:2048$ reduces to $125:512$ ✓. (The choice $5:8$ is REPORTING THE LENGTH RATIO, the halfway step ✗; the choice $25:64$ is COPYING THE SURFACE-AREA RATIO ✗; the choice $625:4096$ is SQUARING THE AREA RATIO instead of passing through lengths ✗.)',
    },
  ],

  // slot 11 — the biggest ball that fits a tall cylinder is limited by the
  // RADIUS, and the extra height dilutes the famous two thirds.
  // Lane: r 5 h 14 -> 10/21 / r 3 h 10 -> 2/5 / r 2 h 9 -> 8/27.
  [
    {
      q: 'The largest ball that will fit is dropped into a cylindrical canister of radius $5$ and height $14$. What fraction of the canister’s volume does the ball occupy?',
      fig: tankBallFig(5, 14, 5, 5, 'r = 5', 'h = 14', 260),
      choices: ['$\\frac{2}{3}$', '$\\frac{5}{14}$', '$\\frac{10}{21}$', '$\\frac{5}{42}$'],
      answer: 2,
      solution:
        'The ball is squeezed by whichever measurement runs out first. Its diameter cannot exceed the canister’s width $10$ nor its height $14$, so the width is the binding one and the ball has radius $5$. Then the ball is $\\frac{4}{3}\\pi \\cdot 125 = \\frac{500\\pi}{3}$ and the canister is $\\pi \\cdot 25 \\cdot 14 = 350\\pi$, so the fraction is $\\frac{500\\pi}{3} \\div 350\\pi = \\frac{500}{1050} = \\frac{10}{21}$ ✓. Check a second, independent way by starting from the snug case: a ball of radius $5$ exactly fills two thirds of the can that hugs it, the one of radius $5$ and height $10$. Our canister is the same width but $\\frac{14}{10}$ times as tall, so the same ball is spread over that much more volume and the fraction shrinks to $\\frac{2}{3} \\cdot \\frac{10}{14} = \\frac{20}{42} = \\frac{10}{21}$ ✓. (The choice $\\frac{2}{3}$ is ASSUMING A SNUG FIT and ignoring the four units of spare height ✗; the choice $\\frac{5}{14}$ is USING $\\pi r^3$ FOR THE BALL, dropping the $\\frac{4}{3}$ ✗; the choice $\\frac{5}{42}$ is USING THE CONE FORMULA $\\frac{1}{3}\\pi r^3$ for the ball ✗.)',
    },
    {
      q: 'A cylindrical jar has radius $3$ and height $10$. The biggest ball that fits is placed inside. What fraction of the jar’s volume does the ball take up?',
      fig: tankBallFig(3, 10, 3, 3, 'r = 3', 'h = 10', 260),
      choices: ['$\\frac{2}{5}$', '$\\frac{2}{3}$', '$\\frac{3}{10}$', '$\\frac{1}{10}$'],
      answer: 0,
      solution:
        'Ask what limits the ball. Its diameter must fit both the width $6$ and the height $10$, and the width is the tighter of the two, so the ball has radius $3$. The ball is $\\frac{4}{3}\\pi \\cdot 27 = 36\\pi$ and the jar is $\\pi \\cdot 9 \\cdot 10 = 90\\pi$, so the fraction is $\\frac{36\\pi}{90\\pi} = \\frac{2}{5}$ ✓. Check a second, independent way from the snug case: this ball would fill exactly two thirds of the can that hugs it, radius $3$ and height $6$. The real jar is the same width but $\\frac{10}{6}$ times taller, so the fraction thins out to $\\frac{2}{3} \\cdot \\frac{6}{10} = \\frac{2}{5}$ ✓. (The choice $\\frac{2}{3}$ is ASSUMING A SNUG FIT and ignoring the spare height ✗; the choice $\\frac{3}{10}$ is USING $\\pi r^3$ FOR THE BALL, dropping the $\\frac{4}{3}$ ✗; the choice $\\frac{1}{10}$ is USING THE CONE FORMULA $\\frac{1}{3}\\pi r^3$ for the ball ✗.)',
    },
    {
      q: 'A narrow cylindrical tube has radius $2$ and height $9$. The largest ball that will go in is dropped down it. What fraction of the tube’s volume does the ball fill?',
      fig: tankBallFig(2, 9, 2, 2, 'r = 2', 'h = 9', 260),
      choices: ['$\\frac{2}{9}$', '$\\frac{8}{27}$', '$\\frac{2}{3}$', '$\\frac{2}{27}$'],
      answer: 1,
      solution:
        'Decide first what caps the ball. Its diameter has to clear the width $4$ and the height $9$, and the width is far tighter, so the ball has radius $2$. Then the ball is $\\frac{4}{3}\\pi \\cdot 8 = \\frac{32\\pi}{3}$ against a tube of $\\pi \\cdot 4 \\cdot 9 = 36\\pi$, giving $\\frac{32\\pi}{3} \\div 36\\pi = \\frac{32}{108} = \\frac{8}{27}$ ✓. Check a second, independent way through the snug case: the ball fills two thirds of the can that hugs it, radius $2$ and height $4$. The tube is the same width but $\\frac{9}{4}$ times as tall, so the fraction drops to $\\frac{2}{3} \\cdot \\frac{4}{9} = \\frac{8}{27}$ ✓. (The choice $\\frac{2}{3}$ is ASSUMING A SNUG FIT and ignoring the five units of spare height ✗; the choice $\\frac{2}{9}$ is USING $\\pi r^3$ FOR THE BALL, dropping the $\\frac{4}{3}$ ✗; the choice $\\frac{2}{27}$ is USING THE CONE FORMULA $\\frac{1}{3}\\pi r^3$ for the ball ✗.)',
    },
  ],

  // slot 12 — melting conserves volume: a hemisphere of radius r poured into a
  // cone of radius R fills it to height h = 2r^3 / R^2.
  // Lane: scoop 10 into cone 10 -> 20 / scoop 6 into cone 4 -> 27 /
  // scoop 4 into cone 2 -> 32.
  [
    {
      q: 'A hemisphere of sorbet with radius $10$ sits on an empty cone whose opening also has radius $10$. The sorbet melts and fills the cone exactly to the brim, with nothing left over. How deep is the cone?',
      choices: ['$20$', '$40$', '$\\frac{20}{3}$', '$10$'],
      answer: 0,
      solution:
        'Melting moves the sorbet but does not change how much there is, so set the two volumes equal: $\\frac{2}{3}\\pi \\cdot 10^3 = \\frac{1}{3}\\pi \\cdot 10^2 \\cdot h$. The left side is $\\frac{2000\\pi}{3}$ and the right side is $\\frac{100\\pi}{3}h$, so $100h = 2000$ and $h = 20$ ✓. Check a second, independent way with letters instead of numbers: when the scoop and the cone share a radius $r$, the equation reads $\\frac{2}{3}\\pi r^3 = \\frac{1}{3}\\pi r^2 h$, and dividing by $\\frac{1}{3}\\pi r^2$ leaves $h = 2r$ — a cone exactly twice as deep as it is wide across the radius always holds precisely one hemisphere. With $r = 10$ that is $h = 20$, and the cone then measures $\\frac{1}{3}\\pi \\cdot 100 \\cdot 20 = \\frac{2000\\pi}{3}$, the scoop’s volume exactly ✓. (The choice $40$ is USING A WHOLE SPHERE instead of a hemisphere ✗; the choice $\\frac{20}{3}$ is FORGETTING THE CONE’S $\\frac{1}{3}$ ✗; the choice $10$ is ASSUMING THE CONE IS AS DEEP AS ITS RADIUS ✗.)',
    },
    {
      q: 'A hemisphere-shaped scoop of ice cream with radius $6$ is balanced on a narrow empty cone whose rim has radius $4$. It melts and fills the cone exactly to the top. How tall is the cone?',
      choices: ['$54$', '$9$', '$12$', '$27$'],
      answer: 3,
      solution:
        'Volume is conserved, so equate the two: the scoop is $\\frac{2}{3}\\pi \\cdot 6^3 = 144\\pi$ and the cone is $\\frac{1}{3}\\pi \\cdot 4^2 \\cdot h = \\frac{16\\pi}{3}h$. From $\\frac{16}{3}h = 144$ we get $h = \\frac{144 \\cdot 3}{16} = 27$ ✓. Check a second, independent way by adjusting the matching-radius case: a cone of radius $6$ would need height $2 \\cdot 6 = 12$ to swallow this scoop. Narrowing the rim from $6$ to $4$ shrinks the base area by $\\left(\\frac{4}{6}\\right)^2 = \\frac{4}{9}$, so the same volume has to stand $\\frac{9}{4}$ times as tall: $12 \\cdot \\frac{9}{4} = 27$ ✓. (The choice $54$ is USING A WHOLE SPHERE instead of a hemisphere ✗; the choice $9$ is FORGETTING THE CONE’S $\\frac{1}{3}$ ✗; the choice $12$ is USING THE SCOOP’S RADIUS FOR THE CONE instead of the rim’s ✗.)',
    },
    {
      q: 'A hemisphere of frozen yogurt with radius $4$ rests on an empty cone whose rim has radius $2$. When it melts it fills the cone precisely to the brim. How tall is the cone?',
      choices: ['$64$', '$8$', '$32$', '$\\frac{32}{3}$'],
      answer: 2,
      solution:
        'Nothing is gained or lost in melting, so match the volumes: the hemisphere is $\\frac{2}{3}\\pi \\cdot 4^3 = \\frac{128\\pi}{3}$ and the cone is $\\frac{1}{3}\\pi \\cdot 2^2 \\cdot h = \\frac{4\\pi}{3}h$. From $\\frac{4}{3}h = \\frac{128}{3}$ we get $4h = 128$ and $h = 32$ ✓. Check a second, independent way by starting from the matching-radius case: a cone of radius $4$ would need height $2 \\cdot 4 = 8$ to hold this scoop. Halving the rim to radius $2$ cuts the base area to a quarter, so the height must be four times as great: $8 \\cdot 4 = 32$ ✓. (The choice $64$ is USING A WHOLE SPHERE instead of a hemisphere ✗; the choice $8$ is USING THE SCOOP’S RADIUS FOR THE CONE instead of the rim’s ✗; the choice $\\frac{32}{3}$ is FORGETTING THE CONE’S $\\frac{1}{3}$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 15,
  challenge,
}
