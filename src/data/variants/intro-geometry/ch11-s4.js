// Introduction to Geometry chapter 11 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice by two genuinely different routes, and the
//    two routes had to agree before the key was written: radius bridge vs. the
//    direct link C^2 = 4·pi·A (slot 1); fraction of the circumference vs. a
//    per-degree rate (slot 2); circumference per turn vs. total degrees swept
//    (slot 3); the half-r-times-arc formula vs. the matching area fraction
//    (slot 4); squaring the scale factor vs. a concrete radius (slot 5);
//    computing all the semicircle areas vs. scale-factor reasoning (slot 6);
//    fraction of an hour vs. a per-minute rate (slot 7); sector minus triangle
//    vs. subtracting the far side of the chord from the whole circle (slot 8);
//    circle minus the diagonal-built square vs. summing the four corner
//    segments (slot 9); solving the ring equation vs. rebuilding the ring from
//    the answer (slot 10); dividing the shared distance vs. the radius-ratio
//    shortcut (slot 11); adding square plus half-disk vs. carving the window
//    out of its bounding rectangle (slot 12).
//  - Every figure is coordinate-exact: semicircles are arcs sitting on a
//    drawn diameter, inscribed-square vertices sit at (±r/√2, ±r/√2) to four
//    decimals, and ring figures are drawn at the true answer radii.
//  - Figure labels are plain text: bare numerals and the letters of points.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗.
//  - No two choices inside an item name the same value, and across the base
//    problem and its three variations every one of the four answer positions
//    is used exactly once.

const challenge = [
  // slot 1 — circumference from area.
  // Lane: 144π -> 24π / 289π -> 34π / 16π -> 8π.
  [
    {
      q: 'A circular skating rink covers an area of $144\\pi$ square meters. How long is the fence that runs around its edge?',
      choices: ['$12\\pi$', '$24\\pi$', '$144\\pi$', '$48\\pi$'],
      answer: 1,
      solution:
        'Cross the bridge through the radius: $\\pi r^2 = 144\\pi$ gives $r^2 = 144$, so $r = 12$, and the fence measures $C = 2\\pi \\cdot 12 = 24\\pi$ meters ✓. Check a second, independent way with the direct link $C^2 = 4\\pi \\cdot A$: here $C = \\sqrt{4\\pi \\cdot 144\\pi} = \\sqrt{576\\pi^2} = 24\\pi$ ✓. (The choice $12\\pi$ is FORGETTING THE $2$ IN $2\\pi r$ ✗; the choice $144\\pi$ is REUSING THE AREA NUMBER as a circumference ✗; the choice $48\\pi$ is TREATING THE DIAMETER $24$ AS THE RADIUS ✗.)',
    },
    {
      q: 'A round wall mirror has an area of $289\\pi$ square centimeters, and a braided cord is to be glued all the way around its rim. Exactly how much cord is needed?',
      choices: ['$17\\pi$', '$289\\pi$', '$68\\pi$', '$34\\pi$'],
      answer: 3,
      solution:
        'The radius comes first: $\\pi r^2 = 289\\pi$ gives $r^2 = 289$, so $r = 17$, and the rim measures $C = 2\\pi \\cdot 17 = 34\\pi$ centimeters ✓. Check a second, independent way with $C^2 = 4\\pi \\cdot A$: $C = \\sqrt{4\\pi \\cdot 289\\pi} = \\sqrt{1156\\pi^2} = 34\\pi$ ✓. (The choice $17\\pi$ is FORGETTING THE $2$ IN $2\\pi r$ ✗; the choice $289\\pi$ is REUSING THE AREA NUMBER as a circumference ✗; the choice $68\\pi$ is TREATING THE DIAMETER $34$ AS THE RADIUS ✗.)',
    },
    {
      q: 'A circular badge has an area of $16\\pi$ square centimeters. What is the length of the gold edging around its border?',
      choices: ['$16\\pi$', '$32\\pi$', '$8\\pi$', '$4\\pi$'],
      answer: 2,
      solution:
        'Pass through the radius: $\\pi r^2 = 16\\pi$ gives $r^2 = 16$, so $r = 4$, and the edging measures $C = 2\\pi \\cdot 4 = 8\\pi$ centimeters ✓. Check a second, independent way with $C^2 = 4\\pi \\cdot A$: $C = \\sqrt{4\\pi \\cdot 16\\pi} = \\sqrt{64\\pi^2} = 8\\pi$ ✓. (The choice $16\\pi$ is REUSING THE AREA NUMBER as a circumference ✗; the choice $32\\pi$ is PLUGGING THE AREA COEFFICIENT INTO $2\\pi r$ ✗; the choice $4\\pi$ is FORGETTING THE $2$ IN $2\\pi r$ ✗.)',
    },
  ],

  // slot 2 — arc length.
  // Lane: 45° r=28 -> 7π / 24° r=45 -> 6π / 75° r=24 -> 10π.
  [
    {
      q: 'A curved garden path follows a $45^\\circ$ arc along the edge of a circular lawn of radius $28$. How long is the path?',
      choices: ['$7\\pi$', '$3.5\\pi$', '$14\\pi$', '$56\\pi$'],
      answer: 0,
      solution:
        'The full circumference is $2\\pi \\cdot 28 = 56\\pi$, and a $45^\\circ$ arc is $\\frac{45}{360} = \\frac{1}{8}$ of the circle, so the path measures $\\frac{1}{8} \\cdot 56\\pi = 7\\pi$ ✓. Check a second, independent way with a per-degree rate: each degree of arc is worth $\\frac{56\\pi}{360} = \\frac{7\\pi}{45}$, and $45$ degrees give $45 \\cdot \\frac{7\\pi}{45} = 7\\pi$ ✓. (The choice $3.5\\pi$ is USING $\\pi r$ INSTEAD OF $2\\pi r$ ✗; the choice $14\\pi$ is TREATING $45^\\circ$ AS A QUARTER OF THE CIRCLE ✗; the choice $56\\pi$ is SKIPPING THE FRACTION and reporting the whole circumference ✗.)',
    },
    {
      q: 'A model railway bends through a $24^\\circ$ arc of a circle of radius $45$. What length of track lies along the bend?',
      choices: ['$3\\pi$', '$6\\pi$', '$12\\pi$', '$90\\pi$'],
      answer: 1,
      solution:
        'The circumference is $2\\pi \\cdot 45 = 90\\pi$, and $\\frac{24}{360} = \\frac{1}{15}$, so the bend measures $\\frac{1}{15} \\cdot 90\\pi = 6\\pi$ ✓. Check a second, independent way with a per-degree rate: each degree is worth $\\frac{90\\pi}{360} = \\frac{\\pi}{4}$, and $24$ degrees give $24 \\cdot \\frac{\\pi}{4} = 6\\pi$ ✓. (The choice $3\\pi$ is USING $\\pi r$ INSTEAD OF $2\\pi r$ ✗; the choice $12\\pi$ is DIVIDING BY $180$ AS IF THAT WERE A FULL TURN ✗; the choice $90\\pi$ is SKIPPING THE FRACTION and reporting the whole circumference ✗.)',
    },
    {
      q: 'With a compass set to radius $24$, Mira draws a $75^\\circ$ arc. How long is the curve she has drawn?',
      choices: ['$5\\pi$', '$20\\pi$', '$48\\pi$', '$10\\pi$'],
      answer: 3,
      solution:
        'The circumference is $2\\pi \\cdot 24 = 48\\pi$, and $\\frac{75}{360} = \\frac{5}{24}$, so the arc measures $\\frac{5}{24} \\cdot 48\\pi = 10\\pi$ ✓. Check a second, independent way with a per-degree rate: each degree is worth $\\frac{48\\pi}{360} = \\frac{2\\pi}{15}$, and $75$ degrees give $75 \\cdot \\frac{2\\pi}{15} = 10\\pi$ ✓. (The choice $5\\pi$ is USING $\\pi r$ INSTEAD OF $2\\pi r$ ✗; the choice $20\\pi$ is DIVIDING BY $180$ AS IF THAT WERE A FULL TURN ✗; the choice $48\\pi$ is SKIPPING THE FRACTION and reporting the whole circumference ✗.)',
    },
  ],

  // slot 3 — rolling wheel distance in inches.
  // Lane: r=7, 60 turns -> 840π / r=8, 75 -> 1200π / r=6, 90 -> 1080π.
  [
    {
      q: 'A scooter wheel of radius $7$ inches rolls in a straight line without slipping and makes exactly $60$ complete turns. How far does the scooter travel?',
      choices: ['$420\\pi$ inches', '$2940\\pi$ inches', '$840\\pi$ inches', '$1680\\pi$ inches'],
      answer: 2,
      solution:
        'One turn rolls out one circumference: $2\\pi \\cdot 7 = 14\\pi$ inches, so $60$ turns roll out $60 \\cdot 14\\pi = 840\\pi$ inches ✓. Check a second, independent way through the total spin: $60$ turns sweep $60 \\cdot 360^\\circ = 21600^\\circ$, and that fraction of the circumference is $\\frac{21600}{360} \\cdot 14\\pi = 840\\pi$ inches ✓. (The choice $420\\pi$ is USING $\\pi r$ AS THE CIRCUMFERENCE ✗; the choice $2940\\pi$ is MULTIPLYING BY THE AREA $49\\pi$ ✗; the choice $1680\\pi$ is USING $2\\pi d$, doubling on top of the diameter ✗.)',
    },
    {
      q: 'Each wheel of a wheelbarrow has radius $8$ inches. Exactly how far does the wheelbarrow move while a wheel makes $75$ complete turns without slipping?',
      choices: ['$1200\\pi$ inches', '$600\\pi$ inches', '$4800\\pi$ inches', '$2400\\pi$ inches'],
      answer: 0,
      solution:
        'One turn covers one circumference: $2\\pi \\cdot 8 = 16\\pi$ inches, so $75$ turns cover $75 \\cdot 16\\pi = 1200\\pi$ inches ✓. Check a second, independent way through the total spin: $75$ turns sweep $75 \\cdot 360^\\circ = 27000^\\circ$, and $\\frac{27000}{360} \\cdot 16\\pi = 1200\\pi$ inches ✓. (The choice $600\\pi$ is USING $\\pi r$ AS THE CIRCUMFERENCE ✗; the choice $4800\\pi$ is MULTIPLYING BY THE AREA $64\\pi$ ✗; the choice $2400\\pi$ is USING $2\\pi d$, doubling on top of the diameter ✗.)',
    },
    {
      q: 'A delivery cart wheel of radius $6$ inches makes exactly $90$ complete turns rolling without slipping. What distance does the cart cover?',
      choices: ['$540\\pi$ inches', '$3240\\pi$ inches', '$2160\\pi$ inches', '$1080\\pi$ inches'],
      answer: 3,
      solution:
        'Each turn rolls out one circumference: $2\\pi \\cdot 6 = 12\\pi$ inches, so $90$ turns roll out $90 \\cdot 12\\pi = 1080\\pi$ inches ✓. Check a second, independent way through the total spin: $90$ turns sweep $90 \\cdot 360^\\circ = 32400^\\circ$, and $\\frac{32400}{360} \\cdot 12\\pi = 1080\\pi$ inches ✓. (The choice $540\\pi$ is USING $\\pi r$ AS THE CIRCUMFERENCE ✗; the choice $3240\\pi$ is MULTIPLYING BY THE AREA $36\\pi$ ✗; the choice $2160\\pi$ is USING $2\\pi d$, doubling on top of the diameter ✗.)',
    },
  ],

  // slot 4 — sector area from radius and arc length (area = ½·r·arc).
  // Lane: r=12, 8π -> 48π / r=10, 7π -> 35π / r=16, 5π -> 40π.
  [
    {
      q: 'A folding paper fan opens into a sector of radius $12$ whose curved outer edge has length $8\\pi$. What is the area of the open fan?',
      choices: ['$96\\pi$', '$48\\pi$', '$144\\pi$', '$4\\pi$'],
      answer: 1,
      solution:
        'A sector is the pizza-slice cousin of $\\frac{1}{2}bh$: its area is $\\frac{1}{2} \\cdot r \\cdot \\text{arc} = \\frac{1}{2} \\cdot 12 \\cdot 8\\pi = 48\\pi$ ✓. Check a second, independent way through the fraction: the full circumference is $24\\pi$, so the fan is $\\frac{8\\pi}{24\\pi} = \\frac{1}{3}$ of the circle, and $\\frac{1}{3} \\cdot 144\\pi = 48\\pi$ ✓. (The choice $96\\pi$ is DROPPING THE $\\frac{1}{2}$ from the formula ✗; the choice $144\\pi$ is REPORTING THE WHOLE CIRCLE’S AREA ✗; the choice $4\\pi$ is HALVING THE ARC ALONE and forgetting the radius ✗.)',
    },
    {
      q: 'A slice of round flatbread is a sector of radius $10$, and its curved crust measures $7\\pi$. What is the area of the slice?',
      choices: ['$70\\pi$', '$100\\pi$', '$35\\pi$', '$\\frac{7\\pi}{2}$'],
      answer: 2,
      solution:
        'Sector area is $\\frac{1}{2} \\cdot r \\cdot \\text{arc} = \\frac{1}{2} \\cdot 10 \\cdot 7\\pi = 35\\pi$ ✓. Check a second, independent way through the fraction: the circumference is $20\\pi$, so the slice is $\\frac{7\\pi}{20\\pi} = \\frac{7}{20}$ of the circle, and $\\frac{7}{20} \\cdot 100\\pi = 35\\pi$ ✓. (The choice $70\\pi$ is DROPPING THE $\\frac{1}{2}$ from the formula ✗; the choice $100\\pi$ is REPORTING THE WHOLE CIRCLE’S AREA ✗; the choice $\\frac{7\\pi}{2}$ is HALVING THE ARC ALONE and forgetting the radius ✗.)',
    },
    {
      q: 'A lighthouse beam sweeps out a sector of radius $16$ on the water, and the far curved boundary of the lit region has length $5\\pi$. What area does the beam light up?',
      choices: ['$40\\pi$', '$80\\pi$', '$256\\pi$', '$2.5\\pi$'],
      answer: 0,
      solution:
        'Sector area is $\\frac{1}{2} \\cdot r \\cdot \\text{arc} = \\frac{1}{2} \\cdot 16 \\cdot 5\\pi = 40\\pi$ ✓. Check a second, independent way through the fraction: the circumference is $32\\pi$, so the lit sector is $\\frac{5\\pi}{32\\pi} = \\frac{5}{32}$ of the circle, and $\\frac{5}{32} \\cdot 256\\pi = 40\\pi$ ✓. (The choice $80\\pi$ is DROPPING THE $\\frac{1}{2}$ from the formula ✗; the choice $256\\pi$ is REPORTING THE WHOLE CIRCLE’S AREA ✗; the choice $2.5\\pi$ is HALVING THE ARC ALONE and forgetting the radius ✗.)',
    },
  ],

  // slot 5 — percent area increase from a percent radius increase.
  // Lane: +20% -> +44% / +30% -> +69% / +100% -> +300%.
  [
    {
      q: 'A pizzeria upgrades its medium pizza by increasing the radius by $20\\%$. By what percent does the amount of pizza (the area) increase?',
      choices: ['$20\\%$', '$40\\%$', '$144\\%$', '$44\\%$'],
      answer: 3,
      solution:
        'The new radius is $1.2$ times the old, so the new area is $1.2^2 = 1.44$ times the old — an increase of $44\\%$ ✓. Check a second, independent way with a concrete radius: from $r = 10$ to $r = 12$ the area goes from $100\\pi$ to $144\\pi$, a jump of $44\\pi$ on a base of $100\\pi$, which is $44\\%$ ✓. (The choice $20\\%$ is SCALING THE AREA LINEARLY with the radius ✗; the choice $40\\%$ is DOUBLING THE PERCENT instead of squaring the scale factor ✗; the choice $144\\%$ is REPORTING THE NEW TOTAL instead of the increase ✗.)',
    },
    {
      q: 'A landscaper widens a circular flower bed, stretching its radius by $30\\%$. By what percent does the planting area grow?',
      choices: ['$69\\%$', '$30\\%$', '$60\\%$', '$169\\%$'],
      answer: 0,
      solution:
        'The new radius is $1.3$ times the old, so the new area is $1.3^2 = 1.69$ times the old — an increase of $69\\%$ ✓. Check a second, independent way with a concrete radius: from $r = 10$ to $r = 13$ the area climbs from $100\\pi$ to $169\\pi$, a gain of $69\\pi$ on $100\\pi$, which is $69\\%$ ✓. (The choice $30\\%$ is SCALING THE AREA LINEARLY with the radius ✗; the choice $60\\%$ is DOUBLING THE PERCENT instead of squaring the scale factor ✗; the choice $169\\%$ is REPORTING THE NEW TOTAL instead of the increase ✗.)',
    },
    {
      q: 'When a round balloon is inflated further, the radius of its circular shadow increases by $100\\%$. By what percent does the area of the shadow increase?',
      choices: ['$100\\%$', '$400\\%$', '$300\\%$', '$200\\%$'],
      answer: 2,
      solution:
        'The new radius is $2$ times the old, so the new area is $2^2 = 4$ times the old — that is $400\\%$ OF the old area, an increase of $300\\%$ ✓. Check a second, independent way with a concrete radius: from $r = 10$ to $r = 20$ the area goes from $100\\pi$ to $400\\pi$, a gain of $300\\pi$ on $100\\pi$, which is $300\\%$ ✓. (The choice $100\\%$ is SCALING THE AREA LINEARLY with the radius ✗; the choice $200\\%$ is DOUBLING THE PERCENT instead of squaring the scale factor ✗; the choice $400\\%$ is REPORTING THE NEW TOTAL instead of the increase ✗.)',
    },
  ],

  // slot 6 — big semicircle vs several small semicircles on the same diameter
  // (figure). Lane: r=9 vs three r=3 -> 3 / r=10 vs five r=2 -> 5 /
  // r=12 vs six r=2 -> 6. Small diameters tile the big diameter exactly.
  [
    {
      q: 'A decorative archway is a semicircle of radius $9$ drawn on a diameter $\\overline{AB}$. Along the same diameter, three side-by-side semicircles of radius $3$ are drawn, as shown. The area of the large semicircle is how many times the total area of the three small ones?',
      fig: {
        view: [-10.5, -1.5, 10.5, 10.5],
        alt: 'Semicircle of radius 9 on diameter AB with three radius-3 semicircles side by side on the same diameter',
        elems: [
          { t: 'seg', a: [-9, 0], b: [9, 0] },
          { t: 'arc', c: [0, 0], r: 9, from: 0, to: 180 },
          { t: 'arc', c: [-6, 0], r: 3, from: 0, to: 180 },
          { t: 'arc', c: [0, 0], r: 3, from: 0, to: 180 },
          { t: 'arc', c: [6, 0], r: 3, from: 0, to: 180 },
          { t: 'label', p: [6, 0], text: '3', dx: 0, dy: 14 },
          { t: 'label', p: [0, 9], text: '9', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-9, 0], label: 'A', dx: -12, dy: 8 },
          { t: 'point', p: [9, 0], label: 'B', dx: 12, dy: 8 },
        ],
      },
      choices: ['$9$', '$1$', '$3$', '$\\frac{3}{2}$'],
      answer: 2,
      solution:
        'The large semicircle holds $\\frac{1}{2} \\cdot 81\\pi = \\frac{81\\pi}{2}$, and each small one holds $\\frac{1}{2} \\cdot 9\\pi = \\frac{9\\pi}{2}$, so the three together hold $\\frac{27\\pi}{2}$ — and $\\frac{81\\pi}{2} \\div \\frac{27\\pi}{2} = 3$ ✓. Check a second, independent way by scaling: each small semicircle is a $\\frac{1}{3}$-scale copy of the large one, so it holds $\\frac{1}{9}$ of its area, and three of them hold $\\frac{3}{9} = \\frac{1}{3}$ — the large one is $3$ times the trio ✓. (The choice $9$ is COMPARING WITH ONE SMALL SEMICIRCLE instead of all three ✗; the choice $1$ is SCALING AREAS LINEARLY — the arcs tie, the areas do not ✗; the choice $\\frac{3}{2}$ is DROPPING THE HALF ON THE SMALL PIECES ONLY ✗.)',
    },
    {
      q: 'A wave pattern for a quilt border is built from a semicircle of radius $10$ on a diameter $\\overline{AB}$, with five side-by-side semicircles of radius $2$ stitched along the same diameter, as shown. The area under the big wave is how many times the total area under the five little waves?',
      fig: {
        view: [-11.5, -1.5, 11.5, 11.5],
        alt: 'Semicircle of radius 10 on diameter AB with five radius-2 semicircles side by side on the same diameter',
        elems: [
          { t: 'seg', a: [-10, 0], b: [10, 0] },
          { t: 'arc', c: [0, 0], r: 10, from: 0, to: 180 },
          { t: 'arc', c: [-8, 0], r: 2, from: 0, to: 180 },
          { t: 'arc', c: [-4, 0], r: 2, from: 0, to: 180 },
          { t: 'arc', c: [0, 0], r: 2, from: 0, to: 180 },
          { t: 'arc', c: [4, 0], r: 2, from: 0, to: 180 },
          { t: 'arc', c: [8, 0], r: 2, from: 0, to: 180 },
          { t: 'label', p: [8, 0], text: '2', dx: 0, dy: 14 },
          { t: 'label', p: [0, 10], text: '10', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-10, 0], label: 'A', dx: -12, dy: 8 },
          { t: 'point', p: [10, 0], label: 'B', dx: 12, dy: 8 },
        ],
      },
      choices: ['$25$', '$5$', '$1$', '$\\frac{5}{2}$'],
      answer: 1,
      solution:
        'The big wave covers $\\frac{1}{2} \\cdot 100\\pi = 50\\pi$, and each little one covers $\\frac{1}{2} \\cdot 4\\pi = 2\\pi$, so the five together cover $10\\pi$ — and $\\frac{50\\pi}{10\\pi} = 5$ ✓. Check a second, independent way by scaling: each little semicircle is a $\\frac{1}{5}$-scale copy, holding $\\frac{1}{25}$ of the big area, and five of them hold $\\frac{5}{25} = \\frac{1}{5}$ — the big wave is $5$ times the group ✓. (The choice $25$ is COMPARING WITH ONE SMALL SEMICIRCLE instead of all five ✗; the choice $1$ is SCALING AREAS LINEARLY — the arcs tie, the areas do not ✗; the choice $\\frac{5}{2}$ is DROPPING THE HALF ON THE SMALL PIECES ONLY ✗.)',
    },
    {
      q: 'A bridge design shows one great semicircular span of radius $12$ over a diameter $\\overline{AB}$, with six side-by-side semicircular ripples of radius $2$ drawn along the same diameter, as shown. The area under the great span is how many times the total area under the six ripples?',
      fig: {
        view: [-13.5, -1.5, 13.5, 13.5],
        alt: 'Semicircle of radius 12 on diameter AB with six radius-2 semicircles side by side on the same diameter',
        elems: [
          { t: 'seg', a: [-12, 0], b: [12, 0] },
          { t: 'arc', c: [0, 0], r: 12, from: 0, to: 180 },
          { t: 'arc', c: [-10, 0], r: 2, from: 0, to: 180 },
          { t: 'arc', c: [-6, 0], r: 2, from: 0, to: 180 },
          { t: 'arc', c: [-2, 0], r: 2, from: 0, to: 180 },
          { t: 'arc', c: [2, 0], r: 2, from: 0, to: 180 },
          { t: 'arc', c: [6, 0], r: 2, from: 0, to: 180 },
          { t: 'arc', c: [10, 0], r: 2, from: 0, to: 180 },
          { t: 'label', p: [10, 0], text: '2', dx: 0, dy: 14 },
          { t: 'label', p: [0, 12], text: '12', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-12, 0], label: 'A', dx: -12, dy: 8 },
          { t: 'point', p: [12, 0], label: 'B', dx: 12, dy: 8 },
        ],
      },
      choices: ['$36$', '$1$', '$3$', '$6$'],
      answer: 3,
      solution:
        'The great span covers $\\frac{1}{2} \\cdot 144\\pi = 72\\pi$, and each ripple covers $\\frac{1}{2} \\cdot 4\\pi = 2\\pi$, so the six together cover $12\\pi$ — and $\\frac{72\\pi}{12\\pi} = 6$ ✓. Check a second, independent way by scaling: each ripple is a $\\frac{1}{6}$-scale copy, holding $\\frac{1}{36}$ of the span’s area, and six of them hold $\\frac{6}{36} = \\frac{1}{6}$ — the span is $6$ times the group ✓. (The choice $36$ is COMPARING WITH ONE SMALL SEMICIRCLE instead of all six ✗; the choice $1$ is SCALING AREAS LINEARLY — the arcs tie, the areas do not ✗; the choice $3$ is DROPPING THE HALF ON THE SMALL PIECES ONLY ✗.)',
    },
  ],

  // slot 7 — minute-hand tip distance.
  // Lane: 9 cm, 50 min -> 15π / 6 cm, 45 min -> 9π / 12 cm, 35 min -> 14π.
  [
    {
      q: 'The minute hand of a classroom clock is $9$ cm long. Exactly how far does its tip travel in $50$ minutes?',
      choices: ['$18\\pi$ cm', '$15\\pi$ cm', '$7.5\\pi$ cm', '$3\\pi$ cm'],
      answer: 1,
      solution:
        'In $50$ minutes the hand sweeps $\\frac{50}{60} = \\frac{5}{6}$ of a full turn, and the tip rides a circle of radius $9$ with circumference $18\\pi$: distance $\\frac{5}{6} \\cdot 18\\pi = 15\\pi$ cm ✓. Check a second, independent way minute by minute: each minute the tip covers $\\frac{18\\pi}{60} = \\frac{3\\pi}{10}$ cm, and $50$ minutes give $50 \\cdot \\frac{3\\pi}{10} = 15\\pi$ cm ✓. (The choice $18\\pi$ is REPORTING A FULL HOUR’S TRIP ✗; the choice $7.5\\pi$ is USING $\\pi r$ AS THE CIRCUMFERENCE ✗; the choice $3\\pi$ is USING THE LEFTOVER $10$ MINUTES instead of the $50$ ✗.)',
    },
    {
      q: 'A kitchen timer’s pointer is $6$ cm long and circles the dial once per hour, like a minute hand. Exactly how far does its tip move in $45$ minutes?',
      choices: ['$12\\pi$ cm', '$4.5\\pi$ cm', '$3\\pi$ cm', '$9\\pi$ cm'],
      answer: 3,
      solution:
        'In $45$ minutes the pointer sweeps $\\frac{45}{60} = \\frac{3}{4}$ of a turn, and the tip rides a circle of circumference $2\\pi \\cdot 6 = 12\\pi$: distance $\\frac{3}{4} \\cdot 12\\pi = 9\\pi$ cm ✓. Check a second, independent way minute by minute: each minute the tip covers $\\frac{12\\pi}{60} = \\frac{\\pi}{5}$ cm, and $45$ minutes give $45 \\cdot \\frac{\\pi}{5} = 9\\pi$ cm ✓. (The choice $12\\pi$ is REPORTING A FULL HOUR’S TRIP ✗; the choice $4.5\\pi$ is USING $\\pi r$ AS THE CIRCUMFERENCE ✗; the choice $3\\pi$ is USING THE LEFTOVER $15$ MINUTES instead of the $45$ ✗.)',
    },
    {
      q: 'The minute hand of a railway station clock is $12$ cm long. Exactly how far does its tip travel in $35$ minutes?',
      choices: ['$14\\pi$ cm', '$24\\pi$ cm', '$7\\pi$ cm', '$10\\pi$ cm'],
      answer: 0,
      solution:
        'In $35$ minutes the hand sweeps $\\frac{35}{60} = \\frac{7}{12}$ of a turn, and the tip rides a circle of circumference $2\\pi \\cdot 12 = 24\\pi$: distance $\\frac{7}{12} \\cdot 24\\pi = 14\\pi$ cm ✓. Check a second, independent way minute by minute: each minute the tip covers $\\frac{24\\pi}{60} = \\frac{2\\pi}{5}$ cm, and $35$ minutes give $35 \\cdot \\frac{2\\pi}{5} = 14\\pi$ cm ✓. (The choice $24\\pi$ is REPORTING A FULL HOUR’S TRIP ✗; the choice $7\\pi$ is USING $\\pi r$ AS THE CIRCUMFERENCE ✗; the choice $10\\pi$ is USING THE LEFTOVER $25$ MINUTES instead of the $35$ ✗.)',
    },
  ],

  // slot 8 — circular segment cut by chord AB where OA ⊥ OB (figure).
  // Lane: r=20 -> 100π−200 / r=26 -> 169π−338 / r=18 -> 81π−162.
  [
    {
      q: 'A circular pond has center $O$ and radius $20$. Two straight walkways $\\overline{OA}$ and $\\overline{OB}$ run from the center to the shore and meet at a right angle, and a rope is stretched along chord $\\overline{AB}$, as shown. What is the area of the sliver of pond between the rope and the shore arc?',
      fig: {
        view: [-25, -25, 25, 25],
        alt: 'Circle of radius 20 with perpendicular radii OA and OB and chord AB',
        elems: [
          { t: 'circle', c: [0, 0], r: 20 },
          { t: 'seg', a: [0, 0], b: [20, 0] },
          { t: 'seg', a: [0, 0], b: [0, 20] },
          { t: 'seg', a: [20, 0], b: [0, 20] },
          { t: 'angle', at: [0, 0], from: [20, 0], to: [0, 20], r: 4.5, label: '90' },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [20, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [0, 20], label: 'B', dx: 0, dy: -12 },
        ],
      },
      choices: ['$100\\pi - 200$', '$200 - 100\\pi$', '$100\\pi$', '$100\\pi - 400$'],
      answer: 0,
      solution:
        'Segment $=$ sector $-$ triangle: the $90^\\circ$ sector is $\\frac{1}{4} \\cdot 400\\pi = 100\\pi$, and right triangle $AOB$ with legs $20$ and $20$ has area $\\frac{1}{2} \\cdot 20 \\cdot 20 = 200$, so the sliver is $100\\pi - 200$ ✓. Check a second, independent way from the far side of the rope: the rest of the pond is the triangle plus the remaining $270^\\circ$ sector, $200 + \\frac{3}{4} \\cdot 400\\pi = 200 + 300\\pi$, and subtracting from the full $400\\pi$ leaves $100\\pi - 200$ ✓. (The choice $200 - 100\\pi$ is REVERSING THE SUBTRACTION into a negative area ✗; the choice $100\\pi$ is REPORTING THE WHOLE SECTOR without carving off the triangle ✗; the choice $100\\pi - 400$ is FORGETTING THE HALF IN THE TRIANGLE AREA ✗.)',
    },
    {
      q: 'In a circular metal disc with center $O$ and radius $26$, the radii $\\overline{OA}$ and $\\overline{OB}$ are perpendicular, and a straight cut is made along chord $\\overline{AB}$, as shown. What is the area of the curved piece that falls away?',
      fig: {
        view: [-32, -32, 32, 32],
        alt: 'Circle of radius 26 with perpendicular radii OA and OB and chord AB',
        elems: [
          { t: 'circle', c: [0, 0], r: 26 },
          { t: 'seg', a: [0, 0], b: [26, 0] },
          { t: 'seg', a: [0, 0], b: [0, 26] },
          { t: 'seg', a: [26, 0], b: [0, 26] },
          { t: 'angle', at: [0, 0], from: [26, 0], to: [0, 26], r: 5.5, label: '90' },
          { t: 'label', p: [13, 0], text: '26', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [26, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [0, 26], label: 'B', dx: 0, dy: -12 },
        ],
      },
      choices: ['$338 - 169\\pi$', '$169\\pi$', '$169\\pi - 338$', '$169\\pi - 676$'],
      answer: 2,
      solution:
        'Segment $=$ sector $-$ triangle: the $90^\\circ$ sector is $\\frac{1}{4} \\cdot 676\\pi = 169\\pi$, and right triangle $AOB$ with legs $26$ and $26$ has area $\\frac{1}{2} \\cdot 26 \\cdot 26 = 338$, so the piece is $169\\pi - 338$ ✓. Check a second, independent way from the far side of the cut: the kept piece is the triangle plus the remaining $270^\\circ$ sector, $338 + \\frac{3}{4} \\cdot 676\\pi = 338 + 507\\pi$, and subtracting from the full $676\\pi$ leaves $169\\pi - 338$ ✓. (The choice $338 - 169\\pi$ is REVERSING THE SUBTRACTION into a negative area ✗; the choice $169\\pi$ is REPORTING THE WHOLE SECTOR without carving off the triangle ✗; the choice $169\\pi - 676$ is FORGETTING THE HALF IN THE TRIANGLE AREA ✗.)',
    },
    {
      q: 'A round cookie of radius $18$ has center $O$, and the radii $\\overline{OA}$ and $\\overline{OB}$ meet at a right angle. A straight knife cut along chord $\\overline{AB}$ removes one curved bite, as shown. What is the area of the bite?',
      fig: {
        view: [-22, -22, 22, 22],
        alt: 'Circle of radius 18 with perpendicular radii OA and OB and chord AB',
        elems: [
          { t: 'circle', c: [0, 0], r: 18 },
          { t: 'seg', a: [0, 0], b: [18, 0] },
          { t: 'seg', a: [0, 0], b: [0, 18] },
          { t: 'seg', a: [18, 0], b: [0, 18] },
          { t: 'angle', at: [0, 0], from: [18, 0], to: [0, 18], r: 4, label: '90' },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [18, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [0, 18], label: 'B', dx: 0, dy: -12 },
        ],
      },
      choices: ['$81\\pi$', '$81\\pi - 162$', '$162 - 81\\pi$', '$81\\pi - 324$'],
      answer: 1,
      solution:
        'Segment $=$ sector $-$ triangle: the $90^\\circ$ sector is $\\frac{1}{4} \\cdot 324\\pi = 81\\pi$, and right triangle $AOB$ with legs $18$ and $18$ has area $\\frac{1}{2} \\cdot 18 \\cdot 18 = 162$, so the bite is $81\\pi - 162$ ✓. Check a second, independent way from the far side of the cut: the rest of the cookie is the triangle plus the remaining $270^\\circ$ sector, $162 + \\frac{3}{4} \\cdot 324\\pi = 162 + 243\\pi$, and subtracting from the full $324\\pi$ leaves $81\\pi - 162$ ✓. (The choice $81\\pi$ is REPORTING THE WHOLE SECTOR without carving off the triangle ✗; the choice $162 - 81\\pi$ is REVERSING THE SUBTRACTION into a negative area ✗; the choice $81\\pi - 324$ is FORGETTING THE HALF IN THE TRIANGLE AREA ✗.)',
    },
  ],

  // slot 9 — circle minus inscribed square (figure).
  // Lane: r=9 -> 81π−162 / r=14 -> 196π−392 / r=8 -> 64π−128.
  // Square vertices at (±r/√2, ±r/√2), four decimals.
  [
    {
      q: 'A square game board is inscribed in a circular tabletop of radius $9$, with its corners touching the rim, as shown. What is the area of the tabletop left uncovered outside the board?',
      fig: {
        view: [-11, -11, 11, 11],
        alt: 'Square inscribed in a circle of radius 9 with a dashed diagonal of length 18',
        elems: [
          { t: 'circle', c: [0, 0], r: 9 },
          { t: 'poly', pts: [[6.364, 6.364], [-6.364, 6.364], [-6.364, -6.364], [6.364, -6.364]], fill: false },
          { t: 'seg', a: [-6.364, -6.364], b: [6.364, 6.364], dash: true },
          { t: 'label', p: [3.182, 3.182], text: '18', dx: 14, dy: 8 },
          { t: 'point', p: [0, 0], label: 'O', dx: -4, dy: -12 },
          { t: 'point', p: [6.364, 6.364], label: 'A', dx: 12, dy: -8 },
          { t: 'point', p: [-6.364, 6.364], label: 'B', dx: -12, dy: -8 },
          { t: 'point', p: [-6.364, -6.364], label: 'C', dx: -12, dy: 8 },
          { t: 'point', p: [6.364, -6.364], label: 'D', dx: 12, dy: 8 },
        ],
      },
      choices: ['$162 - 81\\pi$', '$81\\pi - 324$', '$81\\pi - 81$', '$81\\pi - 162$'],
      answer: 3,
      solution:
        'The board’s diagonal $\\overline{CA}$ is a diameter of the circle, length $18$, so the square’s area is $\\frac{d^2}{2} = \\frac{324}{2} = 162$, and the uncovered part is circle minus square: $81\\pi - 162$ ✓. Check a second, independent way through the four slivers: each $90^\\circ$ segment between a side of the board and the rim has area $\\frac{1}{4} \\cdot 81\\pi - \\frac{1}{2} \\cdot 81 = \\frac{81\\pi}{4} - \\frac{81}{2}$, and four of them total $81\\pi - 162$ ✓. (The choice $162 - 81\\pi$ is REVERSING THE SUBTRACTION into a negative area ✗; the choice $81\\pi - 324$ is FORGETTING THE HALF IN $\\frac{d^2}{2}$ ✗; the choice $81\\pi - 81$ is USING THE RADIUS AS THE SQUARE’S SIDE ✗.)',
    },
    {
      q: 'A square pane of glass is fitted inside a round window frame of radius $14$, its corners just touching the circle, as shown. What is the area of the frame’s circle that the pane does not cover?',
      fig: {
        view: [-17, -17, 17, 17],
        alt: 'Square inscribed in a circle of radius 14 with a dashed diagonal of length 28',
        elems: [
          { t: 'circle', c: [0, 0], r: 14 },
          { t: 'poly', pts: [[9.8995, 9.8995], [-9.8995, 9.8995], [-9.8995, -9.8995], [9.8995, -9.8995]], fill: false },
          { t: 'seg', a: [-9.8995, -9.8995], b: [9.8995, 9.8995], dash: true },
          { t: 'label', p: [4.9497, 4.9497], text: '28', dx: 14, dy: 8 },
          { t: 'point', p: [0, 0], label: 'O', dx: -4, dy: -12 },
          { t: 'point', p: [9.8995, 9.8995], label: 'A', dx: 12, dy: -8 },
          { t: 'point', p: [-9.8995, 9.8995], label: 'B', dx: -12, dy: -8 },
          { t: 'point', p: [-9.8995, -9.8995], label: 'C', dx: -12, dy: 8 },
          { t: 'point', p: [9.8995, -9.8995], label: 'D', dx: 12, dy: 8 },
        ],
      },
      choices: ['$196\\pi - 784$', '$196\\pi - 392$', '$392 - 196\\pi$', '$196\\pi - 196$'],
      answer: 1,
      solution:
        'The pane’s diagonal $\\overline{CA}$ is a diameter, length $28$, so the square’s area is $\\frac{d^2}{2} = \\frac{784}{2} = 392$, and the uncovered region is $196\\pi - 392$ ✓. Check a second, independent way through the four slivers: each $90^\\circ$ segment between a side of the pane and the circle has area $\\frac{1}{4} \\cdot 196\\pi - \\frac{1}{2} \\cdot 196 = 49\\pi - 98$, and four of them total $196\\pi - 392$ ✓. (The choice $196\\pi - 784$ is FORGETTING THE HALF IN $\\frac{d^2}{2}$ ✗; the choice $392 - 196\\pi$ is REVERSING THE SUBTRACTION into a negative area ✗; the choice $196\\pi - 196$ is USING THE RADIUS AS THE SQUARE’S SIDE ✗.)',
    },
    {
      q: 'A commemorative coin of radius $8$ carries a square design whose corners touch the coin’s edge, as shown. What is the area of the coin face outside the square design?',
      fig: {
        view: [-10, -10, 10, 10],
        alt: 'Square inscribed in a circle of radius 8 with a dashed diagonal of length 16',
        elems: [
          { t: 'circle', c: [0, 0], r: 8 },
          { t: 'poly', pts: [[5.6569, 5.6569], [-5.6569, 5.6569], [-5.6569, -5.6569], [5.6569, -5.6569]], fill: false },
          { t: 'seg', a: [-5.6569, -5.6569], b: [5.6569, 5.6569], dash: true },
          { t: 'label', p: [2.8284, 2.8284], text: '16', dx: 14, dy: 8 },
          { t: 'point', p: [0, 0], label: 'O', dx: -4, dy: -12 },
          { t: 'point', p: [5.6569, 5.6569], label: 'A', dx: 12, dy: -8 },
          { t: 'point', p: [-5.6569, 5.6569], label: 'B', dx: -12, dy: -8 },
          { t: 'point', p: [-5.6569, -5.6569], label: 'C', dx: -12, dy: 8 },
          { t: 'point', p: [5.6569, -5.6569], label: 'D', dx: 12, dy: 8 },
        ],
      },
      choices: ['$64\\pi - 256$', '$128 - 64\\pi$', '$64\\pi - 128$', '$64\\pi - 64$'],
      answer: 2,
      solution:
        'The design’s diagonal $\\overline{CA}$ is a diameter, length $16$, so the square’s area is $\\frac{d^2}{2} = \\frac{256}{2} = 128$, and the leftover face is $64\\pi - 128$ ✓. Check a second, independent way through the four slivers: each $90^\\circ$ segment between a side of the square and the edge has area $\\frac{1}{4} \\cdot 64\\pi - \\frac{1}{2} \\cdot 64 = 16\\pi - 32$, and four of them total $64\\pi - 128$ ✓. (The choice $64\\pi - 256$ is FORGETTING THE HALF IN $\\frac{d^2}{2}$ ✗; the choice $128 - 64\\pi$ is REVERSING THE SUBTRACTION into a negative area ✗; the choice $64\\pi - 64$ is USING THE RADIUS AS THE SQUARE’S SIDE ✗.)',
    },
  ],

  // slot 10 — ring with outer radius a multiple of the inner; find the inner
  // radius (figure). Lane: 2×, 147π -> 7 / 4×, 240π -> 4 / 2×, 12π -> 2.
  // Figures drawn at the true answer radii.
  [
    {
      q: 'A circular running track forms a ring between two concentric circles with center $O$, as shown. The outer radius is exactly twice the inner radius, and the track surface has area $147\\pi$. What is the inner radius?',
      fig: {
        view: [-17, -17, 17, 17],
        alt: 'Ring between concentric circles with the outer radius twice the inner radius',
        elems: [
          { t: 'circle', c: [0, 0], r: 14 },
          { t: 'circle', c: [0, 0], r: 7 },
          { t: 'seg', a: [0, 0], b: [-7, 0] },
          { t: 'seg', a: [0, 0], b: [9.8995, 9.8995] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-7, 0], label: 'A', dx: -12, dy: -8 },
          { t: 'point', p: [9.8995, 9.8995], label: 'B', dx: 10, dy: -8 },
        ],
      },
      choices: ['$14$', '$49$', '$7\\sqrt{3}$', '$7$'],
      answer: 3,
      solution:
        'Let the inner radius be $r$, so the outer is $2r$: the ring holds $\\pi(2r)^2 - \\pi r^2 = 4\\pi r^2 - \\pi r^2 = 3\\pi r^2$, and $3\\pi r^2 = 147\\pi$ gives $r^2 = 49$, so $r = 7$ ✓. Check a second, independent way by rebuilding the ring: inner radius $7$ makes the outer $14$, and $\\pi \\cdot 14^2 - \\pi \\cdot 7^2 = 196\\pi - 49\\pi = 147\\pi$ ✓ — exactly the stated area. (The choice $14$ is ANSWERING THE OUTER RADIUS ✗; the choice $49$ is STOPPING AT $r^2$ ✗; the choice $7\\sqrt{3}$ is SUBTRACTING RADII BEFORE SQUARING, which wrongly shrinks the ring to $\\pi r^2$ ✗.)',
    },
    {
      q: 'On an archery target with center $O$, the ring between the innermost circle and the outermost circle has area $240\\pi$, and the outer radius is exactly four times the inner radius, as shown. Find the inner radius.',
      fig: {
        view: [-19, -19, 19, 19],
        alt: 'Ring between concentric circles with the outer radius four times the inner radius',
        elems: [
          { t: 'circle', c: [0, 0], r: 16 },
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'seg', a: [0, 0], b: [-4, 0] },
          { t: 'seg', a: [0, 0], b: [11.3137, 11.3137] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-4, 0], label: 'A', dx: -12, dy: -8 },
          { t: 'point', p: [11.3137, 11.3137], label: 'B', dx: 10, dy: -8 },
        ],
      },
      choices: ['$4$', '$16$', '$8$', '$28$'],
      answer: 0,
      solution:
        'Let the inner radius be $r$, so the outer is $4r$: the ring holds $\\pi(4r)^2 - \\pi r^2 = 16\\pi r^2 - \\pi r^2 = 15\\pi r^2$, and $15\\pi r^2 = 240\\pi$ gives $r^2 = 16$, so $r = 4$ ✓. Check a second, independent way by rebuilding the ring: inner radius $4$ makes the outer $16$, and $\\pi \\cdot 16^2 - \\pi \\cdot 4^2 = 256\\pi - 16\\pi = 240\\pi$ ✓. (The choice $16$ is STOPPING AT $r^2$ ✗; the choice $8$ is ANSWERING THE INNER DIAMETER ✗; the choice $28$ is READING FOUR TIMES AS FOUR MORE — an outer radius of $r + 4$ turns the equation into $(8r + 16)\\pi = 240\\pi$ ✗.)',
    },
    {
      q: 'A metal washer is the ring between two concentric circles with center $O$, as shown. Its outer radius is exactly twice its inner radius, and the metal has area $12\\pi$. What is the inner radius?',
      fig: {
        view: [-5, -5, 5, 5],
        alt: 'Ring between concentric circles with the outer radius twice the inner radius',
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'circle', c: [0, 0], r: 2 },
          { t: 'seg', a: [0, 0], b: [-2, 0] },
          { t: 'seg', a: [0, 0], b: [2.8284, 2.8284] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-2, 0], label: 'A', dx: -12, dy: -8 },
          { t: 'point', p: [2.8284, 2.8284], label: 'B', dx: 10, dy: -8 },
        ],
      },
      choices: ['$4$', '$2$', '$2\\sqrt{3}$', '$\\sqrt{3}$'],
      answer: 1,
      solution:
        'Let the inner radius be $r$, so the outer is $2r$: the metal holds $\\pi(2r)^2 - \\pi r^2 = 3\\pi r^2$, and $3\\pi r^2 = 12\\pi$ gives $r^2 = 4$, so $r = 2$ ✓. Check a second, independent way by rebuilding the washer: inner radius $2$ makes the outer $4$, and $\\pi \\cdot 4^2 - \\pi \\cdot 2^2 = 16\\pi - 4\\pi = 12\\pi$ ✓. (The choice $4$ is ANSWERING THE OUTER RADIUS ✗; the choice $2\\sqrt{3}$ is SUBTRACTING RADII BEFORE SQUARING, which wrongly shrinks the ring to $\\pi r^2$ ✗; the choice $\\sqrt{3}$ is USING THE OUTER CIRCLE ALONE, solving $4\\pi r^2 = 12\\pi$ ✗.)',
    },
  ],

  // slot 11 — two wheels rolling the same distance.
  // Lane: toy r=5, 100 turns vs r=25 -> 20 / vs r=20 -> 25 /
  // toy r=7, 84 turns vs r=21 -> 28.
  [
    {
      q: 'A toy car wheel of radius $5$ inches and a bicycle wheel of radius $25$ inches roll along the same stretch of sidewalk. If the toy wheel makes $100$ complete turns, how many does the bicycle wheel make?',
      choices: ['$500$', '$100$', '$20$', '$4$'],
      answer: 2,
      solution:
        'The shared distance is $100 \\cdot 2\\pi \\cdot 5 = 1000\\pi$ inches, and the bicycle wheel’s circumference is $2\\pi \\cdot 25 = 50\\pi$ inches, so it turns $\\frac{1000\\pi}{50\\pi} = 20$ times ✓. Check a second, independent way by ratio: the bicycle wheel’s radius is $5$ times the toy’s, so one bicycle turn covers as much ground as $5$ toy turns, and $100 \\div 5 = 20$ ✓. (The choice $500$ is MULTIPLYING BY THE RADIUS RATIO instead of dividing ✗; the choice $100$ is ASSUMING EQUAL TURNS FOR EQUAL DISTANCE ✗; the choice $4$ is DIVIDING BY THE RADIUS $25$ instead of the ratio $5$ ✗.)',
    },
    {
      q: 'A toy truck wheel of radius $5$ inches makes $100$ complete turns crossing a courtyard. A cart wheel of radius $20$ inches rolls exactly the same distance. How many complete turns does the cart wheel make?',
      choices: ['$400$', '$100$', '$5$', '$25$'],
      answer: 3,
      solution:
        'The courtyard crossing measures $100 \\cdot 2\\pi \\cdot 5 = 1000\\pi$ inches, and the cart wheel’s circumference is $2\\pi \\cdot 20 = 40\\pi$ inches, so it turns $\\frac{1000\\pi}{40\\pi} = 25$ times ✓. Check a second, independent way by ratio: the cart wheel’s radius is $4$ times the toy’s, so each of its turns is worth $4$ toy turns, and $100 \\div 4 = 25$ ✓. (The choice $400$ is MULTIPLYING BY THE RADIUS RATIO instead of dividing ✗; the choice $100$ is ASSUMING EQUAL TURNS FOR EQUAL DISTANCE ✗; the choice $5$ is DIVIDING BY THE RADIUS $20$ instead of the ratio $4$ ✗.)',
    },
    {
      q: 'A stroller wheel of radius $7$ inches makes $84$ complete turns along a path, and a tractor wheel of radius $21$ inches then rolls the very same path. How many complete turns does the tractor wheel make?',
      choices: ['$28$', '$252$', '$84$', '$4$'],
      answer: 0,
      solution:
        'The path measures $84 \\cdot 2\\pi \\cdot 7 = 1176\\pi$ inches, and the tractor wheel’s circumference is $2\\pi \\cdot 21 = 42\\pi$ inches, so it turns $\\frac{1176\\pi}{42\\pi} = 28$ times ✓. Check a second, independent way by ratio: the tractor wheel’s radius is $3$ times the stroller’s, so each of its turns is worth $3$ stroller turns, and $84 \\div 3 = 28$ ✓. (The choice $252$ is MULTIPLYING BY THE RADIUS RATIO instead of dividing ✗; the choice $84$ is ASSUMING EQUAL TURNS FOR EQUAL DISTANCE ✗; the choice $4$ is DIVIDING BY THE RADIUS $21$ instead of the ratio $3$ ✗.)',
    },
  ],

  // slot 12 — window: square topped by a semicircle on its top side (figure).
  // Lane: side 12 -> 144+18π / side 4 -> 16+2π / side 6 -> 36+9π/2.
  [
    {
      q: 'A barn window is a square of side $12$ topped by a semicircle whose diameter is the top side of the square, as shown. What is the total area of the window?',
      fig: {
        view: [-1, -1, 13, 19.5],
        alt: 'Square of side 12 topped by a semicircle of radius 6 on its top side',
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [12, 12], [0, 12]], fill: false },
          { t: 'arc', c: [6, 12], r: 6, from: 0, to: 180 },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'label', p: [12, 6], text: '12', dx: 12, dy: 0 },
          { t: 'point', p: [6, 12], label: 'M', dx: 0, dy: 14 },
        ],
      },
      choices: ['$144 + 36\\pi$', '$144 + 9\\pi$', '$144 + 18\\pi$', '$144 + 72\\pi$'],
      answer: 2,
      solution:
        'Add the parts: the square gives $144$, and the semicircle sits on a diameter of $12$, so its radius is $6$ and its area is $\\frac{1}{2}\\pi \\cdot 6^2 = 18\\pi$ — total $144 + 18\\pi$ ✓. Check a second, independent way from the outside in: the window fits in a $12 \\times 18$ rectangle of area $216$, and the only part of that rectangle not window is the top strip beside the semicircle, a $12 \\times 6$ rectangle minus the half-disk, $72 - 18\\pi$; so the window is $216 - (72 - 18\\pi) = 144 + 18\\pi$ ✓. (The choice $144 + 36\\pi$ is FORGETTING TO HALVE THE CIRCLE ✗; the choice $144 + 9\\pi$ is HALVING TWICE ✗; the choice $144 + 72\\pi$ is USING THE SIDE AS THE RADIUS ✗.)',
    },
    {
      q: 'A dollhouse window is a square of side $4$ with a semicircle built on its top side as a diameter, as shown. Find the window’s total area.',
      fig: {
        view: [-1, -1, 5, 7],
        alt: 'Square of side 4 topped by a semicircle of radius 2 on its top side',
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 4], [0, 4]], fill: false },
          { t: 'arc', c: [2, 4], r: 2, from: 0, to: 180 },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [4, 2], text: '4', dx: 12, dy: 0 },
          { t: 'point', p: [2, 4], label: 'M', dx: 0, dy: 14 },
        ],
      },
      choices: ['$16 + 2\\pi$', '$16 + 4\\pi$', '$16 + \\pi$', '$16 + 8\\pi$'],
      answer: 0,
      solution:
        'Add the parts: the square gives $16$, and the semicircle sits on a diameter of $4$, so its radius is $2$ and its area is $\\frac{1}{2}\\pi \\cdot 2^2 = 2\\pi$ — total $16 + 2\\pi$ ✓. Check a second, independent way from the outside in: the window fits in a $4 \\times 6$ rectangle of area $24$, and the only part not window is the top strip beside the semicircle, a $4 \\times 2$ rectangle minus the half-disk, $8 - 2\\pi$; so the window is $24 - (8 - 2\\pi) = 16 + 2\\pi$ ✓. (The choice $16 + 4\\pi$ is FORGETTING TO HALVE THE CIRCLE ✗; the choice $16 + \\pi$ is HALVING TWICE ✗; the choice $16 + 8\\pi$ is USING THE SIDE AS THE RADIUS ✗.)',
    },
    {
      q: 'A bakery’s display window is a square of side $6$ crowned by a semicircle whose diameter is the square’s top side, as shown. What is the total area of the display window?',
      fig: {
        view: [-1, -1, 7, 10.5],
        alt: 'Square of side 6 topped by a semicircle of radius 3 on its top side',
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 6], [0, 6]], fill: false },
          { t: 'arc', c: [3, 6], r: 3, from: 0, to: 180 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [6, 3], text: '6', dx: 12, dy: 0 },
          { t: 'point', p: [3, 6], label: 'M', dx: 0, dy: 14 },
        ],
      },
      choices: ['$36 + 9\\pi$', '$36 + \\frac{9\\pi}{2}$', '$36 + \\frac{9\\pi}{4}$', '$36 + 18\\pi$'],
      answer: 1,
      solution:
        'Add the parts: the square gives $36$, and the semicircle sits on a diameter of $6$, so its radius is $3$ and its area is $\\frac{1}{2}\\pi \\cdot 3^2 = \\frac{9\\pi}{2}$ — total $36 + \\frac{9\\pi}{2}$ ✓. Check a second, independent way from the outside in: the window fits in a $6 \\times 9$ rectangle of area $54$, and the only part not window is the top strip beside the semicircle, a $6 \\times 3$ rectangle minus the half-disk, $18 - \\frac{9\\pi}{2}$; so the window is $54 - \\left(18 - \\frac{9\\pi}{2}\\right) = 36 + \\frac{9\\pi}{2}$ ✓. (The choice $36 + 9\\pi$ is FORGETTING TO HALVE THE CIRCLE ✗; the choice $36 + \\frac{9\\pi}{4}$ is HALVING TWICE ✗; the choice $36 + 18\\pi$ is USING THE SIDE AS THE RADIUS ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 11,
  challenge,
}
