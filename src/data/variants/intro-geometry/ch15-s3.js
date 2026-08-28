// Introduction to Geometry chapter 15 — variations for section 15.3 (Spheres).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is worked twice along routes that share no arithmetic:
//    once through the sphere formula the problem is about, and once through an
//    independent picture — the snug can and its two thirds, the ring of four
//    great circles, a scaling factor applied to a sphere whose size is already
//    known, or a pair of solids glued back together. The two routes are built so
//    their intermediate numbers differ; a check that repeats the same
//    multiplication is not a check.
//  - The three formulas in play are $V = \frac{4}{3}\pi r^3$, $S = 4\pi r^2$,
//    and, for a solid hemisphere, a total surface of $3\pi r^2$ — the dome plus
//    the flat disk the cut exposes.
//  - Lengths scale by $k$, areas by $k^2$, volumes by $k^3$. Half the diameter
//    before anything else; the radius is what every formula wants.
//  - Figures are wireframes: the front half of each equator is solid, the back
//    half dashed, and the radius or diameter is a dashed segment from the center.
//    The projection does not preserve length, so no dimension is left to be read
//    off the drawing — every one of them is written into a plain-text label.
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

function tankBallFig(R, H, r, cy, rText, ballText) {
  return {
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

const s153 = [
  // s1 — volume of a sphere straight from the radius.
  [
    {
      q: 'A weather balloon is inflated until it is a sphere of radius $12$ meters. What volume of gas does it hold?',
      fig: sphereFig(12, 'r = 12'),
      choices: ['$576\\pi$', '$2304\\pi$', '$6912\\pi$', '$1728\\pi$'],
      answer: 1,
      solution:
        'Route one, the volume formula: $V = \\frac{4}{3}\\pi r^3$, and $12^3 = 1728$, so $V = \\frac{4}{3} \\cdot 1728\\pi = 4 \\cdot 576\\pi = 2304\\pi$ cubic meters ✓. Check a second, independent way, through the snug can: the shortest cylinder the balloon fits inside has radius $12$ and height $24$, so it holds $\\pi \\cdot 144 \\cdot 24 = 3456\\pi$, and a snug ball fills exactly two thirds of its can, giving $\\frac{2}{3} \\cdot 3456\\pi = 2304\\pi$ ✓. (The choice $6912\\pi$ is DROPPING THE DIVISION BY THREE and reporting $4\\pi r^3$ ✗; the choice $576\\pi$ is REPORTING THE SURFACE AREA $4\\pi r^2$, which squares the radius where volume cubes it ✗; the choice $1728\\pi$ is LEAVING OUT THE FACTOR $\\frac{4}{3}$ and reporting $\\pi r^3$ ✗.)',
    },
    {
      q: 'A garden ornament is a solid stone ball of radius $9$ centimeters. What is the volume of the stone?',
      fig: sphereFig(9, 'r = 9'),
      choices: ['$324\\pi$', '$2916\\pi$', '$972\\pi$', '$729\\pi$'],
      answer: 2,
      solution:
        'Route one, the volume formula: $9^3 = 729$, so $V = \\frac{4}{3}\\pi \\cdot 729 = 4 \\cdot 243\\pi = 972\\pi$ cubic centimeters ✓. Check a second, independent way, through the snug can: a cylinder of radius $9$ and height $18$ wraps the ball exactly and holds $\\pi \\cdot 81 \\cdot 18 = 1458\\pi$; the ball takes two thirds of it, $\\frac{2}{3} \\cdot 1458\\pi = 972\\pi$ ✓. (The choice $2916\\pi$ is DROPPING THE DIVISION BY THREE, $4\\pi r^3$ ✗; the choice $324\\pi$ is REPORTING THE SURFACE AREA $4\\pi r^2$ instead of the volume ✗; the choice $729\\pi$ is LEAVING OUT THE FACTOR $\\frac{4}{3}$ and reporting $\\pi r^3$ ✗.)',
    },
    {
      q: 'A glass bead is a sphere of radius $2$ millimeters. What is its volume?',
      fig: sphereFig(2, 'r = 2'),
      choices: ['$16\\pi$', '$32\\pi$', '$8\\pi$', '$\\frac{32\\pi}{3}$'],
      answer: 3,
      solution:
        'Route one, the volume formula: $2^3 = 8$, so $V = \\frac{4}{3}\\pi \\cdot 8 = \\frac{32\\pi}{3}$ cubic millimeters ✓. Check a second, independent way, through the snug can: the bead just fits a cylinder of radius $2$ and height $4$, which holds $\\pi \\cdot 4 \\cdot 4 = 16\\pi$, and the bead fills two thirds of that, $\\frac{2}{3} \\cdot 16\\pi = \\frac{32\\pi}{3}$ ✓. (The choice $32\\pi$ is DROPPING THE DIVISION BY THREE, $4\\pi r^3$ ✗; the choice $16\\pi$ is REPORTING THE SURFACE AREA $4\\pi r^2$ ✗; the choice $8\\pi$ is LEAVING OUT THE FACTOR $\\frac{4}{3}$ and reporting $\\pi r^3$ ✗.)',
    },
  ],
  // s2 — surface area of a sphere straight from the radius.
  [
    {
      q: 'A rubber ball of radius $4$ inches is to be coated in paint. How much area must the paint cover?',
      choices: ['$64\\pi$', '$16\\pi$', '$32\\pi$', '$\\frac{256\\pi}{3}$'],
      answer: 0,
      solution:
        'Route one, four great circles: $S = 4\\pi r^2 = 4\\pi \\cdot 16 = 64\\pi$ square inches ✓. Check a second, independent way, by unrolling the snug can’s wall: the curved wall of the cylinder that hugs the ball has the same area as the ball’s skin, and that wall unrolls into a rectangle of width $2\\pi \\cdot 4 = 8\\pi$ and height $8$, giving $8\\pi \\cdot 8 = 64\\pi$ ✓. (The choice $16\\pi$ is REPORTING ONE GREAT CIRCLE, $\\pi r^2$, when the skin is four of them ✗; the choice $32\\pi$ is TAKING HALF THE SKIN, the dome of a hemisphere ✗; the choice $\\frac{256\\pi}{3}$ is ANSWERING WITH THE VOLUME, which cubes the radius where area squares it ✗.)',
    },
    {
      q: 'A spherical lamp globe has radius $8$ centimeters. Its whole outside is to be covered in gold leaf. How much gold leaf is needed?',
      choices: ['$64\\pi$', '$256\\pi$', '$128\\pi$', '$\\frac{2048\\pi}{3}$'],
      answer: 1,
      solution:
        'Route one, four great circles: $S = 4\\pi \\cdot 8^2 = 4\\pi \\cdot 64 = 256\\pi$ square centimeters ✓. Check a second, independent way, by unrolling the snug can’s wall: the cylinder that hugs the globe has radius $8$ and height $16$, and its curved wall — equal in area to the globe’s skin — unrolls into a rectangle of width $2\\pi \\cdot 8 = 16\\pi$ and height $16$, so $16\\pi \\cdot 16 = 256\\pi$ ✓. (The choice $64\\pi$ is REPORTING ONE GREAT CIRCLE, $\\pi r^2$ ✗; the choice $128\\pi$ is TAKING HALF THE SKIN, a hemisphere’s dome ✗; the choice $\\frac{2048\\pi}{3}$ is ANSWERING WITH THE VOLUME ✗.)',
    },
    {
      q: 'A spherical water tank of radius $10$ feet needs one coat of sealant over its entire outer surface. How many square feet is that?',
      choices: ['$100\\pi$', '$200\\pi$', '$400\\pi$', '$\\frac{4000\\pi}{3}$'],
      answer: 2,
      solution:
        'Route one, four great circles: $S = 4\\pi \\cdot 10^2 = 400\\pi$ square feet ✓. Check a second, independent way, by unrolling the snug can’s wall: the tank fits a cylinder of radius $10$ and height $20$, whose curved wall matches the tank’s skin and unrolls into a rectangle of width $2\\pi \\cdot 10 = 20\\pi$ and height $20$, so $20\\pi \\cdot 20 = 400\\pi$ ✓. (The choice $100\\pi$ is REPORTING ONE GREAT CIRCLE, $\\pi r^2$ ✗; the choice $200\\pi$ is TAKING HALF THE SKIN, a dome without the rest of the tank ✗; the choice $\\frac{4000\\pi}{3}$ is ANSWERING WITH THE VOLUME ✗.)',
    },
  ],
  // s3 — volume when the diameter is handed over instead of the radius.
  [
    {
      q: 'A spherical gas tank has diameter $30$ meters. What is its volume?',
      fig: sphereFig(15, 'd = 30', true),
      choices: ['$4500\\pi$', '$36000\\pi$', '$900\\pi$', '$13500\\pi$'],
      answer: 0,
      solution:
        'Route one, halve the diameter first: $r = \\frac{30}{2} = 15$, and $15^3 = 3375$, so $V = \\frac{4}{3}\\pi \\cdot 3375 = 4 \\cdot 1125\\pi = 4500\\pi$ cubic meters ✓. Check a second, independent way, by scaling a sphere whose size is already known: a sphere of radius $3$ has volume $36\\pi$, and radius $15$ is $5$ times radius $3$, so the volume is $5^3 = 125$ times as large: $36\\pi \\cdot 125 = 4500\\pi$ ✓. (The choice $36000\\pi$ is USING THE DIAMETER AS THE RADIUS — and since the radius is cubed, that inflates the answer eightfold ✗; the choice $13500\\pi$ is DROPPING THE DIVISION BY THREE, $4\\pi r^3$ ✗; the choice $900\\pi$ is REPORTING THE SURFACE AREA $4\\pi r^2$ ✗.)',
    },
    {
      q: 'A beach ball measures $24$ inches across. How much air does it hold?',
      fig: sphereFig(12, 'd = 24', true),
      choices: ['$18432\\pi$', '$576\\pi$', '$2304\\pi$', '$6912\\pi$'],
      answer: 2,
      solution:
        'Route one, halve the diameter first: across means the diameter, so $r = \\frac{24}{2} = 12$ and $12^3 = 1728$, giving $V = \\frac{4}{3}\\pi \\cdot 1728 = 2304\\pi$ cubic inches ✓. Check a second, independent way, by scaling a sphere whose size is already known: a sphere of radius $3$ has volume $36\\pi$, and radius $12$ is $4$ times radius $3$, so the volume is $4^3 = 64$ times as large: $36\\pi \\cdot 64 = 2304\\pi$ ✓. (The choice $18432\\pi$ is USING THE DIAMETER AS THE RADIUS, which multiplies the true volume by $8$ ✗; the choice $6912\\pi$ is DROPPING THE DIVISION BY THREE, $4\\pi r^3$ ✗; the choice $576\\pi$ is REPORTING THE SURFACE AREA $4\\pi r^2$ ✗.)',
    },
    {
      q: 'A scoop of sorbet is pressed into a sphere of diameter $8$ centimeters. What is its volume?',
      fig: sphereFig(4, 'd = 8', true),
      choices: ['$\\frac{2048\\pi}{3}$', '$64\\pi$', '$\\frac{1024\\pi}{3}$', '$\\frac{256\\pi}{3}$'],
      answer: 3,
      solution:
        'Route one, halve the diameter first: $r = \\frac{8}{2} = 4$, and $4^3 = 64$, so $V = \\frac{4}{3}\\pi \\cdot 64 = \\frac{256\\pi}{3}$ cubic centimeters ✓. Check a second, independent way, by scaling a sphere whose size is already known: a sphere of radius $1$ has volume $\\frac{4\\pi}{3}$, and radius $4$ is $4$ times that, so the volume is $4^3 = 64$ times as large: $\\frac{4\\pi}{3} \\cdot 64 = \\frac{256\\pi}{3}$ ✓. (The choice $\\frac{2048\\pi}{3}$ is USING THE DIAMETER AS THE RADIUS ✗; the choice $\\frac{1024\\pi}{3}$ is HALVING THE VOLUME AT THE END instead of halving the diameter at the start ✗; the choice $64\\pi$ is REPORTING THE SURFACE AREA $4\\pi r^2$ ✗.)',
    },
  ],
  // s4 — volume of a solid hemisphere.
  [
    {
      q: 'A paperweight is a solid glass hemisphere of radius $9$ centimeters. What is its volume?',
      fig: hemiFig(9, 'r = 9'),
      choices: ['$972\\pi$', '$729\\pi$', '$81\\pi$', '$486\\pi$'],
      answer: 3,
      solution:
        'Route one, half a sphere: $V = \\frac{1}{2} \\cdot \\frac{4}{3}\\pi \\cdot 9^3 = \\frac{2}{3}\\pi \\cdot 729 = 486\\pi$ cubic centimeters ✓. Check a second, independent way, through the snug half-can: the shortest cylinder the dome fits inside has radius $9$ and height $9$, so it holds $\\pi \\cdot 81 \\cdot 9 = 729\\pi$, and the dome fills two thirds of it, $\\frac{2}{3} \\cdot 729\\pi = 486\\pi$ ✓. (The choice $972\\pi$ is REPORTING THE WHOLE SPHERE and never halving it ✗; the choice $729\\pi$ is REPORTING THE SNUG CAN, $\\pi r^3$, with the two thirds thrown away ✗; the choice $81\\pi$ is STOPPING AT $\\pi r^2$, an area where a volume was asked for ✗.)',
    },
    {
      q: 'Snow is heaped into a solid dome — a hemisphere of radius $12$ feet. What is the volume of the snow?',
      fig: hemiFig(12, 'r = 12'),
      choices: ['$1152\\pi$', '$2304\\pi$', '$1728\\pi$', '$144\\pi$'],
      answer: 0,
      solution:
        'Route one, half a sphere: $V = \\frac{1}{2} \\cdot \\frac{4}{3}\\pi \\cdot 12^3 = \\frac{2}{3}\\pi \\cdot 1728 = 1152\\pi$ cubic feet ✓. Check a second, independent way, through the snug half-can: a cylinder of radius $12$ and height $12$ just covers the heap and holds $\\pi \\cdot 144 \\cdot 12 = 1728\\pi$, and the dome takes two thirds of that, $\\frac{2}{3} \\cdot 1728\\pi = 1152\\pi$ ✓. (The choice $2304\\pi$ is REPORTING THE WHOLE SPHERE without halving ✗; the choice $1728\\pi$ is REPORTING THE SNUG CAN, $\\pi r^3$ ✗; the choice $144\\pi$ is STOPPING AT $\\pi r^2$, an area rather than a volume ✗.)',
    },
    {
      q: 'A scoop of ice cream sits on a flat wafer as a solid hemisphere of radius $4$ centimeters. What is its volume?',
      fig: hemiFig(4, 'r = 4'),
      choices: ['$\\frac{256\\pi}{3}$', '$\\frac{128\\pi}{3}$', '$64\\pi$', '$16\\pi$'],
      answer: 1,
      solution:
        'Route one, half a sphere: $V = \\frac{1}{2} \\cdot \\frac{4}{3}\\pi \\cdot 4^3 = \\frac{2}{3}\\pi \\cdot 64 = \\frac{128\\pi}{3}$ cubic centimeters ✓. Check a second, independent way, through the snug half-can: a cylinder of radius $4$ and height $4$ just covers the scoop and holds $\\pi \\cdot 16 \\cdot 4 = 64\\pi$, and the scoop fills two thirds of it, $\\frac{2}{3} \\cdot 64\\pi = \\frac{128\\pi}{3}$ ✓. (The choice $\\frac{256\\pi}{3}$ is REPORTING THE WHOLE SPHERE and forgetting that only half of it is there ✗; the choice $64\\pi$ is REPORTING THE SNUG CAN, $\\pi r^3$ ✗; the choice $16\\pi$ is STOPPING AT $\\pi r^2$ ✗.)',
    },
  ],
  // s5 — total surface area of a solid hemisphere: the dome plus the flat disk.
  [
    {
      q: 'A granite marker is a solid hemisphere of radius $8$ inches. Every face of it is polished, the curved dome and the flat circular bottom alike. What is the total polished area?',
      fig: hemiFig(8, 'r = 8'),
      choices: ['$128\\pi$', '$256\\pi$', '$192\\pi$', '$64\\pi$'],
      answer: 2,
      solution:
        'Route one, piece by piece: the dome is half a sphere’s skin, $\\frac{1}{2} \\cdot 4\\pi \\cdot 64 = 128\\pi$, and the cut exposes a flat disk of area $\\pi \\cdot 64 = 64\\pi$. Together $128\\pi + 64\\pi = 192\\pi$ square inches ✓. Check a second, independent way, by gluing two markers back together: two identical solid hemispheres show, between them, one whole sphere’s skin $4\\pi \\cdot 64 = 256\\pi$ plus two flat disks $2 \\cdot 64\\pi = 128\\pi$, a total of $384\\pi$ for the pair, so one of them carries $\\frac{384\\pi}{2} = 192\\pi$ ✓. (The choice $128\\pi$ is STOPPING AT THE DOME and leaving the new flat face unpolished ✗; the choice $256\\pi$ is REPORTING THE WHOLE SPHERE’S SKIN, though half of it was cut away ✗; the choice $64\\pi$ is REPORTING ONLY THE FLAT DISK ✗.)',
    },
    {
      q: 'A solid brass hemisphere of radius $10$ centimeters is to be gilded all over, including the flat circle it rests on. How much area must the gilding cover?',
      fig: hemiFig(10, 'r = 10'),
      choices: ['$300\\pi$', '$200\\pi$', '$400\\pi$', '$100\\pi$'],
      answer: 0,
      solution:
        'Route one, piece by piece: the dome is $\\frac{1}{2} \\cdot 4\\pi \\cdot 100 = 200\\pi$ and the flat circle is $\\pi \\cdot 100 = 100\\pi$, so the gilding covers $200\\pi + 100\\pi = 300\\pi$ square centimeters ✓. Check a second, independent way, by gluing two of them back together: the pair shows one whole sphere’s skin $4\\pi \\cdot 100 = 400\\pi$ plus two flat circles $2 \\cdot 100\\pi = 200\\pi$, which is $600\\pi$ for two pieces, so one piece has $\\frac{600\\pi}{2} = 300\\pi$ ✓. (The choice $200\\pi$ is STOPPING AT THE DOME and forgetting the flat circle the cut created ✗; the choice $400\\pi$ is REPORTING THE WHOLE SPHERE’S SKIN ✗; the choice $100\\pi$ is REPORTING ONLY THE FLAT CIRCLE ✗.)',
    },
    {
      q: 'A wooden half-ball of radius $12$ centimeters is painted over its entire surface, curved part and flat part together. What area does the paint cover?',
      fig: hemiFig(12, 'r = 12'),
      choices: ['$288\\pi$', '$432\\pi$', '$576\\pi$', '$144\\pi$'],
      answer: 1,
      solution:
        'Route one, piece by piece: the curved part is $\\frac{1}{2} \\cdot 4\\pi \\cdot 144 = 288\\pi$ and the flat part is $\\pi \\cdot 144 = 144\\pi$, so the paint covers $288\\pi + 144\\pi = 432\\pi$ square centimeters ✓. Check a second, independent way, by gluing two half-balls back together: the pair shows a whole sphere’s skin $4\\pi \\cdot 144 = 576\\pi$ plus two flat faces $2 \\cdot 144\\pi = 288\\pi$, so the two pieces carry $864\\pi$ and one carries $\\frac{864\\pi}{2} = 432\\pi$ ✓. (The choice $288\\pi$ is STOPPING AT THE CURVED PART and skipping the flat face ✗; the choice $576\\pi$ is REPORTING THE WHOLE SPHERE’S SKIN ✗; the choice $144\\pi$ is REPORTING ONLY THE FLAT FACE ✗.)',
    },
  ],
  // s6 — scale the radius, ask what happens to the volume.
  [
    {
      q: 'A model ball is rebuilt three times as wide: its radius is tripled. The volume of the new ball is the volume of the old one multiplied by what number?',
      choices: ['$27$', '$9$', '$3$', '$81$'],
      answer: 0,
      solution:
        'Route one, straight from the formula: replacing $r$ by $3r$ gives $\\frac{4}{3}\\pi (3r)^3 = \\frac{4}{3}\\pi \\cdot 27r^3$, so the volume is multiplied by $3^3 = 27$ ✓. Check a second, independent way, with two real spheres: a sphere of radius $10$ has volume $\\frac{4}{3}\\pi \\cdot 1000 = \\frac{4000\\pi}{3}$, and a sphere of radius $30$ has volume $\\frac{4}{3}\\pi \\cdot 27000 = 36000\\pi$; dividing, $36000\\pi \\div \\frac{4000\\pi}{3} = 36000 \\cdot \\frac{3}{4000} = 27$ ✓. (The choice $3$ is REPORTING THE LENGTH FACTOR, which is what happens to the radius itself, not to the volume ✗; the choice $9$ is REPORTING THE AREA FACTOR $3^2$, which is what happens to the skin ✗; the choice $81$ is SCALING ONE TIME TOO MANY, $3^4$ ✗.)',
    },
    {
      q: 'A spherical balloon is blown up until its radius is four times what it was. Its volume is multiplied by what number?',
      choices: ['$4$', '$16$', '$256$', '$64$'],
      answer: 3,
      solution:
        'Route one, straight from the formula: replacing $r$ by $4r$ gives $\\frac{4}{3}\\pi (4r)^3 = \\frac{4}{3}\\pi \\cdot 64r^3$, so the volume is multiplied by $4^3 = 64$ ✓. Check a second, independent way, with two real spheres: radius $5$ gives $\\frac{4}{3}\\pi \\cdot 125 = \\frac{500\\pi}{3}$ and radius $20$ gives $\\frac{4}{3}\\pi \\cdot 8000 = \\frac{32000\\pi}{3}$; dividing, $\\frac{32000}{500} = 64$ ✓. (The choice $4$ is REPORTING THE LENGTH FACTOR, what happens to the radius ✗; the choice $16$ is REPORTING THE AREA FACTOR $4^2$, what happens to the skin ✗; the choice $256$ is SCALING ONE TIME TOO MANY, $4^4$ ✗.)',
    },
    {
      q: 'A sculptor plans a bronze ball whose radius is five times the radius of her clay model. The bronze ball’s volume is the model’s volume multiplied by what number?',
      choices: ['$25$', '$125$', '$5$', '$625$'],
      answer: 1,
      solution:
        'Route one, straight from the formula: replacing $r$ by $5r$ gives $\\frac{4}{3}\\pi (5r)^3 = \\frac{4}{3}\\pi \\cdot 125r^3$, so the volume is multiplied by $5^3 = 125$ ✓. Check a second, independent way, with two real spheres: radius $2$ gives $\\frac{4}{3}\\pi \\cdot 8 = \\frac{32\\pi}{3}$ and radius $10$ gives $\\frac{4}{3}\\pi \\cdot 1000 = \\frac{4000\\pi}{3}$; dividing, $\\frac{4000}{32} = 125$ ✓. (The choice $5$ is REPORTING THE LENGTH FACTOR ✗; the choice $25$ is REPORTING THE AREA FACTOR $5^2$ ✗; the choice $625$ is SCALING ONE TIME TOO MANY, $5^4$ ✗.)',
    },
  ],
  // s7 — scale the radius, ask what happens to the surface area.
  [
    {
      q: 'A globe is remade with its radius multiplied by $5$. Its surface area is multiplied by what number?',
      choices: ['$5$', '$125$', '$10$', '$25$'],
      answer: 3,
      solution:
        'Route one, straight from the formula: replacing $r$ by $5r$ gives $4\\pi (5r)^2 = 4\\pi \\cdot 25r^2$, so the surface area is multiplied by $5^2 = 25$ ✓. Check a second, independent way, with two real spheres: radius $3$ has surface area $4\\pi \\cdot 9 = 36\\pi$ and radius $15$ has $4\\pi \\cdot 225 = 900\\pi$; dividing, $\\frac{900}{36} = 25$ ✓. (The choice $5$ is REPORTING THE LENGTH FACTOR, what happens to the radius itself ✗; the choice $125$ is REPORTING THE VOLUME FACTOR $5^3$, since area uses the square and volume the cube ✗; the choice $10$ is MULTIPLYING BY TWO INSTEAD OF SQUARING, as though two dimensions meant doubling ✗.)',
    },
    {
      q: 'A ball bearing is replaced by one of exactly double the radius. Its surface area is multiplied by what number?',
      choices: ['$2$', '$8$', '$4$', '$16$'],
      answer: 2,
      solution:
        'Route one, straight from the formula: replacing $r$ by $2r$ gives $4\\pi (2r)^2 = 4\\pi \\cdot 4r^2$, so the surface area is multiplied by $2^2 = 4$ ✓. Check a second, independent way, with two real spheres: radius $9$ has surface area $4\\pi \\cdot 81 = 324\\pi$ and radius $18$ has $4\\pi \\cdot 324 = 1296\\pi$; dividing, $\\frac{1296}{324} = 4$ ✓. (The choice $2$ is REPORTING THE LENGTH FACTOR ✗; the choice $8$ is REPORTING THE VOLUME FACTOR $2^3$ ✗; the choice $16$ is SQUARING TWICE, $(2^2)^2$, when one square is all an area needs ✗.)',
    },
    {
      q: 'A soap bubble grows until its radius is six times its starting radius. Its surface area is multiplied by what number?',
      choices: ['$36$', '$6$', '$216$', '$12$'],
      answer: 0,
      solution:
        'Route one, straight from the formula: replacing $r$ by $6r$ gives $4\\pi (6r)^2 = 4\\pi \\cdot 36r^2$, so the surface area is multiplied by $6^2 = 36$ ✓. Check a second, independent way, with two real spheres: radius $1$ has surface area $4\\pi$ and radius $6$ has $4\\pi \\cdot 36 = 144\\pi$; dividing, $\\frac{144}{4} = 36$ ✓. (The choice $6$ is REPORTING THE LENGTH FACTOR ✗; the choice $216$ is REPORTING THE VOLUME FACTOR $6^3$ ✗; the choice $12$ is MULTIPLYING BY TWO INSTEAD OF SQUARING ✗.)',
    },
  ],
  // s8 — the surface area is handed over; recover the radius.
  [
    {
      q: 'A sphere has surface area $784\\pi$. What is its radius?',
      choices: ['$28$', '$196$', '$14$', '$784$'],
      answer: 2,
      solution:
        'Route one, undo the formula in two steps: $4\\pi r^2 = 784\\pi$, so dividing by $4\\pi$ gives $r^2 = 196$, and taking the square root gives $r = 14$ ✓. Check a second, independent way, by comparing with a sphere already known and using the square rule: a sphere of radius $7$ has surface area $4\\pi \\cdot 49 = 196\\pi$, and $784\\pi$ is $4$ times that. Area scales as the square of the length factor, so $k^2 = 4$ and $k = 2$, giving $r = 2 \\cdot 7 = 14$ ✓. (The choice $28$ is REPORTING THE DIAMETER instead of the radius ✗; the choice $196$ is STOPPING AT $r^2$ and never taking the square root ✗; the choice $784$ is READING OFF THE NUMBER IN FRONT OF $\\pi$ with neither step done ✗.)',
    },
    {
      q: 'The skin of a spherical balloon measures $1024\\pi$ square centimeters. What is the balloon’s radius?',
      choices: ['$32$', '$16$', '$256$', '$1024$'],
      answer: 1,
      solution:
        'Route one, undo the formula in two steps: $4\\pi r^2 = 1024\\pi$, so $r^2 = 256$ and $r = 16$ centimeters ✓. Check a second, independent way, by comparing with a sphere already known and using the square rule: a sphere of radius $4$ has surface area $4\\pi \\cdot 16 = 64\\pi$, and $1024\\pi \\div 64\\pi = 16$. Since areas scale by $k^2$, $k^2 = 16$ gives $k = 4$, so $r = 4 \\cdot 4 = 16$ ✓. (The choice $32$ is REPORTING THE DIAMETER ✗; the choice $256$ is STOPPING AT $r^2$ ✗; the choice $1024$ is READING OFF THE NUMBER IN FRONT OF $\\pi$ and doing neither step ✗.)',
    },
    {
      q: 'A model planet is built so that its surface area is $900\\pi$ square inches. What is its radius?',
      choices: ['$225$', '$30$', '$900$', '$15$'],
      answer: 3,
      solution:
        'Route one, undo the formula in two steps: $4\\pi r^2 = 900\\pi$, so $r^2 = 225$ and $r = 15$ inches ✓. Check a second, independent way, by comparing with a sphere already known and using the square rule: a sphere of radius $5$ has surface area $4\\pi \\cdot 25 = 100\\pi$, and $900\\pi \\div 100\\pi = 9$. Areas scale by $k^2$, so $k = 3$ and $r = 3 \\cdot 5 = 15$ ✓. (The choice $30$ is REPORTING THE DIAMETER ✗; the choice $225$ is STOPPING AT $r^2$ ✗; the choice $900$ is READING OFF THE NUMBER IN FRONT OF $\\pi$ ✗.)',
    },
  ],
  // s9 — the room left over inside a snug cylinder once the sphere is in it.
  [
    {
      q: 'A chocolate truffle is a sphere of radius $2$ centimeters. It is set in a cylindrical gift tin of radius $2$ centimeters and height $4$ centimeters, touching the wall, the lid and the base, and the tin is then packed all around it with cocoa powder. What volume of cocoa powder does the tin hold?',
      fig: tankBallFig(2, 4, 2, 2, 'r = 2', '2'),
      choices: ['$\\frac{32\\pi}{3}$', '$\\frac{16\\pi}{3}$', '$16\\pi$', '$8\\pi$'],
      answer: 1,
      solution:
        'Route one, subtract the truffle from the tin: the tin holds $\\pi \\cdot 4 \\cdot 4 = 16\\pi$ and the truffle takes $\\frac{4}{3}\\pi \\cdot 8 = \\frac{32\\pi}{3}$, so the powder fills $16\\pi - \\frac{32\\pi}{3} = \\frac{48\\pi - 32\\pi}{3} = \\frac{16\\pi}{3}$ cubic centimeters ✓. Check a second, independent way, by scaling the smallest snug pair: a ball of radius $1$ in its snug tin leaves $2\\pi - \\frac{4\\pi}{3} = \\frac{2\\pi}{3}$ of room. Every length here is $2$ times as long, and volumes scale by $2^3 = 8$, so the powder comes to $8 \\cdot \\frac{2\\pi}{3} = \\frac{16\\pi}{3}$ ✓. (The choice $\\frac{32\\pi}{3}$ is REPORTING THE TRUFFLE ITSELF rather than the room around it ✗; the choice $16\\pi$ is REPORTING THE WHOLE TIN and never subtracting ✗; the choice $8\\pi$ is ASSUMING THE BALL FILLS HALF THE TIN, when a snug ball always fills two thirds ✗.)',
    },
    {
      q: 'A ball of radius $6$ centimeters is packed in a cylindrical can of radius $6$ centimeters and height $12$ centimeters, snug against the side, the top and the bottom. How much air is trapped in the can?',
      fig: tankBallFig(6, 12, 6, 6, 'r = 6', '6'),
      choices: ['$288\\pi$', '$432\\pi$', '$216\\pi$', '$144\\pi$'],
      answer: 3,
      solution:
        'Route one, subtract the ball from the can: the can holds $\\pi \\cdot 36 \\cdot 12 = 432\\pi$ and the ball takes $\\frac{4}{3}\\pi \\cdot 216 = 288\\pi$, so the air is $432\\pi - 288\\pi = 144\\pi$ cubic centimeters ✓. Check a second, independent way, by scaling the smallest snug pair: a ball of radius $1$ in its snug can leaves $2\\pi - \\frac{4\\pi}{3} = \\frac{2\\pi}{3}$. Lengths here are $6$ times as long and volumes scale by $6^3 = 216$, so the trapped air is $216 \\cdot \\frac{2\\pi}{3} = 144\\pi$ ✓. (The choice $288\\pi$ is REPORTING THE BALL instead of the space around it ✗; the choice $432\\pi$ is REPORTING THE WHOLE CAN with no subtraction ✗; the choice $216\\pi$ is ASSUMING THE BALL FILLS HALF THE CAN rather than two thirds ✗.)',
    },
    {
      q: 'A sphere of radius $9$ feet rests inside a cylindrical silo of radius $9$ feet and height $18$ feet, touching the wall, the roof and the floor. Sand is poured in around it until the silo is full. What volume of sand goes in?',
      fig: tankBallFig(9, 18, 9, 9, 'r = 9', '9'),
      choices: ['$972\\pi$', '$1458\\pi$', '$486\\pi$', '$729\\pi$'],
      answer: 2,
      solution:
        'Route one, subtract the sphere from the silo: the silo holds $\\pi \\cdot 81 \\cdot 18 = 1458\\pi$ and the sphere takes $\\frac{4}{3}\\pi \\cdot 729 = 972\\pi$, so the sand fills $1458\\pi - 972\\pi = 486\\pi$ cubic feet ✓. Check a second, independent way, by scaling the smallest snug pair: a sphere of radius $1$ in its snug silo leaves $2\\pi - \\frac{4\\pi}{3} = \\frac{2\\pi}{3}$ of room. Lengths here are $9$ times as long and volumes scale by $9^3 = 729$, so the sand is $729 \\cdot \\frac{2\\pi}{3} = 486\\pi$ ✓. (The choice $972\\pi$ is REPORTING THE SPHERE rather than the gap around it ✗; the choice $1458\\pi$ is REPORTING THE WHOLE SILO and forgetting the sphere is in the way ✗; the choice $729\\pi$ is ASSUMING THE SPHERE FILLS HALF THE SILO instead of two thirds ✗.)',
    },
  ],
  // s10 — melt several spheres, recast as one, and find the new radius.
  [
    {
      q: 'Twenty-seven glass beads, each a sphere of radius $1$ millimeter, are melted together and blown into a single sphere. What is the radius of that sphere?',
      choices: ['$3$', '$27$', '$9$', '$6$'],
      answer: 0,
      solution:
        'Route one, melting keeps the volume: each bead holds $\\frac{4}{3}\\pi \\cdot 1 = \\frac{4\\pi}{3}$, so the pot holds $27 \\cdot \\frac{4\\pi}{3} = 36\\pi$. Setting $\\frac{4}{3}\\pi R^3 = 36\\pi$ gives $R^3 = 27$ and $R = 3$ millimeters ✓. Check a second, independent way, with the scaling rule and no volumes at all: $27$ times the volume means the lengths grow by the cube root of $27$, which is $3$, so the new radius is $3 \\cdot 1 = 3$; running it forward, a radius $3$ times as long gives $3^3 = 27$ times the volume, exactly the $27$ beads ✓. (The choice $27$ is MISTAKING THE VOLUME FACTOR FOR THE LENGTH FACTOR ✗; the choice $9$ is DIVIDING THE COUNT BY THREE instead of taking its cube root ✗; the choice $6$ is REPORTING THE DIAMETER of the new sphere ✗.)',
    },
    {
      q: 'A candlemaker melts $125$ wax spheres of radius $1$ centimeter and pours the wax into one spherical mold. What is the radius of the mold?',
      choices: ['$125$', '$25$', '$5$', '$10$'],
      answer: 2,
      solution:
        'Route one, melting keeps the volume: each little sphere holds $\\frac{4\\pi}{3}$, so the wax comes to $125 \\cdot \\frac{4\\pi}{3} = \\frac{500\\pi}{3}$. Setting $\\frac{4}{3}\\pi R^3 = \\frac{500\\pi}{3}$ gives $R^3 = 125$ and $R = 5$ centimeters ✓. Check a second, independent way, with the scaling rule and no volumes at all: $125$ times the volume means lengths grow by $\\sqrt[3]{125} = 5$, so the new radius is $5 \\cdot 1 = 5$; forward, a radius $5$ times as long multiplies the volume by $5^3 = 125$ ✓. (The choice $125$ is MISTAKING THE VOLUME FACTOR FOR THE LENGTH FACTOR ✗; the choice $25$ is DIVIDING THE COUNT BY FIVE instead of taking its cube root ✗; the choice $10$ is REPORTING THE DIAMETER ✗.)',
    },
    {
      q: 'Eight lead spheres, each of radius $3$ centimeters, are melted down and cast as one solid sphere. What is its radius?',
      choices: ['$24$', '$216$', '$12$', '$6$'],
      answer: 3,
      solution:
        'Route one, melting keeps the volume: each sphere holds $\\frac{4}{3}\\pi \\cdot 27 = 36\\pi$, so the lead comes to $8 \\cdot 36\\pi = 288\\pi$. Setting $\\frac{4}{3}\\pi R^3 = 288\\pi$ gives $R^3 = 216$ and $R = 6$ centimeters ✓. Check a second, independent way, with the scaling rule and no volumes at all: $8$ times the volume means lengths grow by $\\sqrt[3]{8} = 2$, so the new radius is $2 \\cdot 3 = 6$; forward, $6^3 = 216$ and $8 \\cdot 3^3 = 8 \\cdot 27 = 216$, the same ✓. (The choice $24$ is ADDING THE RADII, $8 \\cdot 3$, as though metal stacked end to end ✗; the choice $216$ is REPORTING $R^3$ and never taking the cube root ✗; the choice $12$ is REPORTING THE DIAMETER ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 15,
  sections: { '15.3': s153 },
}
