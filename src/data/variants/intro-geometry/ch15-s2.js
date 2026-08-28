// Introduction to Geometry chapter 15 — variations for section 15.2 (Cones).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is worked twice along routes that share no steps: once
//    through the cone formula the section teaches, and once through a second
//    picture of the same solid — pouring the cone into the cylinder that shares
//    its base, slicing the curved surface into thin triangles, unrolling it flat
//    into a sector, or factoring a difference of squares out of the
//    radius-height-slant right triangle.
//  - Every cone and every sector is drawn by the same construction the section
//    itself uses: the base circle is squashed into an ellipse seen edge-on and
//    its hidden half is dashed. That projection does not preserve length, so
//    every dimension a solver needs is written on the figure as a plain text
//    label rather than measured off it.
//  - Each distractor is one named mistake, named in CAPS at the end.

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

// A cone standing on its base: apex at (0, h), base center at (0, 0). A radius
// label beginning with "d" is read as a diameter and is drawn straight across.
function coneFig(r, h, rText, hText, lText) {
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
  return { view: [-r - 1.3, -K * r - 1, r + 1.3, h + 1], elems }
}

// A flat sector of radius R opening counterclockwise from the positive x-axis.
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

const s152 = [
  // s1 — volume of a cone from its radius and its height.
  [
    {
      q: 'A steel spike on a gatepost is a cone with base radius $2$ centimeters and height $21$ centimeters. How much steel is in the spike, in cubic centimeters?',
      // A cone this narrow and this tall needs a wider view and a narrower
      // drawing than the helper’s default, or it comes out a thread on a wall.
      fig: { ...coneFig(2, 21, 'r = 2', 'h = 21'), w: 200, view: [-6.4, -1.6, 6.4, 22] },
      choices: ['$28\\pi$', '$84\\pi$', '$14\\pi$', '$294\\pi$'],
      answer: 0,
      solution:
        'Route one, the cone formula: $V = \\frac{1}{3}\\pi r^2 h$, and taking the third of the height first, $\\frac{1}{3} \\cdot 21 = 7$, so $V = \\pi \\cdot 2^2 \\cdot 7 = 28\\pi$ cubic centimeters ✓. Check a second, independent way, by casting: a straight-sided rod with the same circular base and the same height is a disk of area $\\pi \\cdot 2^2 = 4\\pi$ swept up $21$ centimeters, so it takes $84\\pi$ of steel. Three spikes this size melt down into exactly that rod, so one spike is $\\frac{84\\pi}{3} = 28\\pi$ ✓. (The choice $84\\pi$ is REPORTING THE WHOLE ROD, with the $\\frac{1}{3}$ dropped ✗; the choice $14\\pi$ is FORGETTING TO SQUARE THE RADIUS, $\\frac{1}{3}\\pi \\cdot 2 \\cdot 21$ ✗; the choice $294\\pi$ is SWAPPING THE RADIUS AND THE HEIGHT, $\\frac{1}{3}\\pi \\cdot 21^2 \\cdot 2$ ✗.)',
    },
    {
      q: 'A plastic funnel is a cone with radius $4$ inches and height $6$ inches. What is its volume, in cubic inches?',
      fig: coneFig(4, 6, 'r = 4', 'h = 6'),
      choices: ['$96\\pi$', '$8\\pi$', '$48\\pi$', '$32\\pi$'],
      answer: 3,
      solution:
        'Route one, the cone formula: $V = \\frac{1}{3}\\pi r^2 h$, and taking the third of the height first, $\\frac{1}{3} \\cdot 6 = 2$, so $V = \\pi \\cdot 4^2 \\cdot 2 = 32\\pi$ cubic inches ✓. Check a second, independent way, by pouring: a can with the same base and the same height is a disk of area $\\pi \\cdot 16 = 16\\pi$ swept up $6$ inches, holding $96\\pi$. Three funnelfuls fill that can exactly, so the funnel holds $\\frac{96\\pi}{3} = 32\\pi$ ✓. (The choice $96\\pi$ is REPORTING THE WHOLE CAN, with the $\\frac{1}{3}$ dropped ✗; the choice $8\\pi$ is FORGETTING TO SQUARE THE RADIUS, $\\frac{1}{3}\\pi \\cdot 4 \\cdot 6$ ✗; the choice $48\\pi$ is SWAPPING THE RADIUS AND THE HEIGHT, $\\frac{1}{3}\\pi \\cdot 6^2 \\cdot 4$ ✗.)',
    },
    {
      q: 'Sand is heaped into a cone with radius $6$ feet and height $5$ feet. What is the volume of the heap, in cubic feet?',
      fig: coneFig(6, 5, 'r = 6', 'h = 5'),
      choices: ['$180\\pi$', '$60\\pi$', '$10\\pi$', '$50\\pi$'],
      answer: 1,
      solution:
        'Route one, the cone formula: $V = \\frac{1}{3}\\pi r^2 h$, and taking the third of the squared radius first, $\\frac{1}{3} \\cdot 36 = 12$, so $V = \\pi \\cdot 12 \\cdot 5 = 60\\pi$ cubic feet ✓. Check a second, independent way, by pouring: a drum with the same base and the same height is a disk of area $\\pi \\cdot 36 = 36\\pi$ swept up $5$ feet, holding $180\\pi$. Three heaps this size fill that drum, so one heap is $\\frac{180\\pi}{3} = 60\\pi$ ✓. (The choice $180\\pi$ is REPORTING THE WHOLE DRUM, with the $\\frac{1}{3}$ dropped ✗; the choice $10\\pi$ is FORGETTING TO SQUARE THE RADIUS, $\\frac{1}{3}\\pi \\cdot 6 \\cdot 5$ ✗; the choice $50\\pi$ is SWAPPING THE RADIUS AND THE HEIGHT, $\\frac{1}{3}\\pi \\cdot 5^2 \\cdot 6$ ✗.)',
    },
  ],
  // s2 — slant height from the radius and the height: the right triangle inside.
  [
    {
      q: 'A cone-shaped tent has base radius $8$ feet and height $15$ feet. A seam runs up the outside of the tent from the ground to the peak. How long is that seam, in feet?',
      fig: coneFig(8, 15, 'r = 8', 'h = 15', 'ℓ = ?'),
      choices: ['$23$', '$17$', '$\\sqrt{161}$', '$15$'],
      answer: 1,
      solution:
        'Route one, the right triangle inside the tent: the radius, the height, and the seam meet at right angles at the center of the floor, with the seam as the hypotenuse, so $\\ell = \\sqrt{8^2 + 15^2} = \\sqrt{64 + 225} = \\sqrt{289} = 17$ feet ✓. Check a second, independent way, without ever adding the squares: the same triangle says $\\ell^2 - 15^2 = 64$, and a difference of squares factors, so $(\\ell - 15)(\\ell + 15) = 64$. The two factors differ by $30$, and the only such pair multiplying to $64$ is $2$ and $32$, giving $\\ell - 15 = 2$ and $\\ell = 17$ ✓. (The choice $23$ is ADDING THE TWO LENGTHS, $8 + 15$, which is not how a right triangle works ✗; the choice $\\sqrt{161}$ is SUBTRACTING THE SQUARES, $\\sqrt{225 - 64}$, though the seam is the longest of the three ✗; the choice $15$ is REPORTING THE HEIGHT, which runs up the middle rather than along the outside ✗.)',
    },
    {
      q: 'A circus big top is a cone with base radius $12$ meters and height $16$ meters. A guy rope is stretched taut from the top of the center pole down the canvas to the rim. How long is the rope, in meters?',
      fig: coneFig(12, 16, 'r = 12', 'h = 16', 'ℓ = ?'),
      choices: ['$28$', '$16$', '$20$', '$4\\sqrt{7}$'],
      answer: 2,
      solution:
        'Route one, the right triangle inside the tent: the base radius and the center pole are the legs and the rope is the hypotenuse, so $\\ell = \\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20$ meters ✓. Check a second, independent way, without ever adding the squares: the same triangle says $\\ell^2 - 16^2 = 144$, so $(\\ell - 16)(\\ell + 16) = 144$. The factors differ by $32$, and $4 \\times 36 = 144$ is the pair that does it, giving $\\ell - 16 = 4$ and $\\ell = 20$ ✓. (The choice $28$ is ADDING THE TWO LENGTHS, $12 + 16$ ✗; the choice $16$ is REPORTING THE CENTER POLE, which stands up the middle rather than lying along the canvas ✗; the choice $4\\sqrt{7}$ is SUBTRACTING THE SQUARES, $\\sqrt{256 - 144}$, which makes the hypotenuse shorter than a leg ✗.)',
    },
    {
      q: 'The nose cone of a model rocket has base radius $7$ centimeters and height $24$ centimeters. A decal stripe runs straight up its outside from the base rim to the tip. How long is the stripe, in centimeters?',
      fig: coneFig(7, 24, 'r = 7', 'h = 24', 'ℓ = ?'),
      choices: ['$31$', '$24$', '$\\sqrt{527}$', '$25$'],
      answer: 3,
      solution:
        'Route one, the right triangle inside the nose cone: the base radius and the height are the legs and the stripe is the hypotenuse, so $\\ell = \\sqrt{7^2 + 24^2} = \\sqrt{49 + 576} = \\sqrt{625} = 25$ centimeters ✓. Check a second, independent way, without ever adding the squares: the same triangle says $\\ell^2 - 24^2 = 49$, so $(\\ell - 24)(\\ell + 24) = 49$. The factors differ by $48$, and $49$ has only the pair $1$ and $49$, giving $\\ell - 24 = 1$ and $\\ell = 25$ ✓. (The choice $31$ is ADDING THE TWO LENGTHS, $7 + 24$ ✗; the choice $24$ is REPORTING THE HEIGHT, which runs up the middle rather than along the surface ✗; the choice $\\sqrt{527}$ is SUBTRACTING THE SQUARES, $\\sqrt{576 - 49}$, though the stripe is the longest of the three ✗.)',
    },
  ],
  // s3 — lateral (curved) surface area from the radius and the slant height.
  [
    {
      q: 'A party hat is a cone with base radius $6$ centimeters and slant height $10$ centimeters. It has no bottom. How much paper is in the hat, in square centimeters?',
      choices: ['$96\\pi$', '$48\\pi$', '$36\\pi$', '$60\\pi$'],
      answer: 3,
      solution:
        'Route one, the curved-surface formula: the paper is the lateral surface, $\\pi r \\ell = \\pi \\cdot 6 \\cdot 10 = 60\\pi$ square centimeters ✓. Check a second, independent way, by slicing the hat into thin triangles: cut from the tip down to the rim over and over, and the hat falls into many slivers, each one a thin triangle whose height is the slant $10$ and whose tiny base sits on the rim. Their bases together make up the whole rim, of length $2\\pi \\cdot 6 = 12\\pi$, so their areas total $\\frac{1}{2} \\cdot 12\\pi \\cdot 10 = 60\\pi$ ✓. (The choice $96\\pi$ is ADDING THE BASE DISK, $60\\pi + 36\\pi$, to a hat that is open at the bottom ✗; the choice $48\\pi$ is USING THE HEIGHT $8$ IN PLACE OF THE SLANT, but the paper lies along the slant, not up the middle ✗; the choice $36\\pi$ is REPORTING THE BASE DISK $\\pi r^2$ instead of the curved surface ✗.)',
    },
    {
      q: 'A lampshade is the curved side of a cone with base radius $5$ inches and slant height $11$ inches, open at the bottom. How much fabric does it take, in square inches?',
      choices: ['$55\\pi$', '$80\\pi$', '$110\\pi$', '$25\\pi$'],
      answer: 0,
      solution:
        'Route one, the curved-surface formula: the fabric is the lateral surface, $\\pi r \\ell = \\pi \\cdot 5 \\cdot 11 = 55\\pi$ square inches ✓. Check a second, independent way, by slicing the shade into thin triangles: cut it from the tip down to the rim again and again, and it falls into slivers, each a thin triangle of height $11$ standing on a tiny piece of the rim. Those pieces add up to the whole rim, $2\\pi \\cdot 5 = 10\\pi$, so the total area is $\\frac{1}{2} \\cdot 10\\pi \\cdot 11 = 55\\pi$ ✓. (The choice $80\\pi$ is ADDING THE BASE DISK, $55\\pi + 25\\pi$, to a shade that is open at the bottom ✗; the choice $110\\pi$ is USING THE DIAMETER $10$ WHERE THE RADIUS BELONGS ✗; the choice $25\\pi$ is REPORTING THE BASE DISK $\\pi r^2$ instead of the curved surface ✗.)',
    },
    {
      q: 'A castle turret is roofed with a cone of base radius $10$ feet and slant height $12$ feet. Only the sloping surface is tiled. How many square feet of tile does the roof need?',
      choices: ['$220\\pi$', '$240\\pi$', '$120\\pi$', '$100\\pi$'],
      answer: 2,
      solution:
        'Route one, the curved-surface formula: the tiles cover the lateral surface, $\\pi r \\ell = \\pi \\cdot 10 \\cdot 12 = 120\\pi$ square feet ✓. Check a second, independent way, by slicing the roof into thin triangles: cut from the peak straight down to the eaves over and over, and the roof falls into slivers, each a thin triangle of height $12$ resting on a tiny arc of the eaves. Those arcs together make the whole rim, $2\\pi \\cdot 10 = 20\\pi$, so the tiled area is $\\frac{1}{2} \\cdot 20\\pi \\cdot 12 = 120\\pi$ ✓. (The choice $220\\pi$ is ADDING THE BASE DISK, $120\\pi + 100\\pi$, though nobody tiles the ceiling under the roof ✗; the choice $240\\pi$ is USING THE DIAMETER $20$ WHERE THE RADIUS BELONGS ✗; the choice $100\\pi$ is REPORTING THE BASE DISK $\\pi r^2$ instead of the sloping surface ✗.)',
    },
  ],
  // s4 — total surface area of a closed cone: find the slant, then add the base disk.
  [
    {
      q: 'A solid wooden cone has base radius $12$ inches and height $5$ inches. Every part of its outside is varnished, including the flat circular bottom. What is the total surface area, in square inches?',
      fig: coneFig(12, 5, 'r = 12', 'h = 5'),
      choices: ['$204\\pi$', '$348\\pi$', '$300\\pi$', '$156\\pi$'],
      answer: 2,
      solution:
        'Route one, the two pieces of the formula: the slant comes from the right triangle, $\\ell = \\sqrt{12^2 + 5^2} = \\sqrt{169} = 13$. Then the curved surface is $\\pi r \\ell = \\pi \\cdot 12 \\cdot 13 = 156\\pi$ and the bottom is a disk of area $\\pi \\cdot 12^2 = 144\\pi$, so the varnish covers $156\\pi + 144\\pi = 300\\pi$ square inches ✓. Check a second, independent way, by unrolling the cone into its flat net: the curved part flattens into a sector of a circle of radius $13$, and its curved edge is the old base rim, of length $2\\pi \\cdot 12 = 24\\pi$, out of that circle’s full $26\\pi$. So the sector is $\\frac{24\\pi}{26\\pi} = \\frac{12}{13}$ of a circle of area $\\pi \\cdot 169 = 169\\pi$, which is $156\\pi$; laying the base disk of $144\\pi$ beside it gives $300\\pi$ ✓. (The choice $156\\pi$ is STOPPING AT THE CURVED SURFACE and leaving the bottom bare ✗; the choice $204\\pi$ is USING THE HEIGHT $5$ WHERE THE SLANT BELONGS, $\\pi \\cdot 12 \\cdot 5 + 144\\pi$ ✗; the choice $348\\pi$ is ADDING THE LEGS to get a slant of $17$ instead of using the right triangle ✗.)',
    },
    {
      q: 'A marble paperweight is a cone with base radius $12$ centimeters and height $9$ centimeters. The whole outside, flat bottom included, is polished. What is the polished area, in square centimeters?',
      fig: coneFig(12, 9, 'r = 12', 'h = 9'),
      choices: ['$180\\pi$', '$324\\pi$', '$396\\pi$', '$252\\pi$'],
      answer: 1,
      solution:
        'Route one, the two pieces of the formula: the slant comes from the right triangle, $\\ell = \\sqrt{12^2 + 9^2} = \\sqrt{225} = 15$. The curved surface is $\\pi r \\ell = \\pi \\cdot 12 \\cdot 15 = 180\\pi$ and the bottom is a disk of area $\\pi \\cdot 144 = 144\\pi$, so the polish covers $180\\pi + 144\\pi = 324\\pi$ square centimeters ✓. Check a second, independent way, by unrolling the paperweight into its flat net: the curved part flattens into a sector of a circle of radius $15$, and its curved edge is the old rim, of length $2\\pi \\cdot 12 = 24\\pi$, out of that circle’s full $30\\pi$. The sector is therefore $\\frac{24\\pi}{30\\pi} = \\frac{4}{5}$ of a circle of area $225\\pi$, which is $180\\pi$; adding the base disk $144\\pi$ gives $324\\pi$ ✓. (The choice $180\\pi$ is STOPPING AT THE CURVED SURFACE and forgetting the flat bottom ✗; the choice $252\\pi$ is USING THE HEIGHT $9$ WHERE THE SLANT BELONGS, $\\pi \\cdot 12 \\cdot 9 + 144\\pi$ ✗; the choice $396\\pi$ is ADDING THE LEGS to get a slant of $21$ instead of using the right triangle ✗.)',
    },
    {
      q: 'A craft cone of foam has base radius $9$ inches and height $12$ inches, and it is to be covered in felt from the tip all the way around and across the flat bottom. How much felt does that take, in square inches?',
      fig: coneFig(9, 12, 'r = 9', 'h = 12'),
      choices: ['$216\\pi$', '$189\\pi$', '$135\\pi$', '$270\\pi$'],
      answer: 0,
      solution:
        'Route one, the two pieces of the formula: the slant comes from the right triangle, $\\ell = \\sqrt{9^2 + 12^2} = \\sqrt{225} = 15$. The curved surface is $\\pi r \\ell = \\pi \\cdot 9 \\cdot 15 = 135\\pi$ and the bottom is a disk of area $\\pi \\cdot 81 = 81\\pi$, so the felt covers $135\\pi + 81\\pi = 216\\pi$ square inches ✓. Check a second, independent way, by unrolling the cone into its flat net: the curved part flattens into a sector of a circle of radius $15$, and its curved edge is the old rim, of length $2\\pi \\cdot 9 = 18\\pi$, out of that circle’s full $30\\pi$. The sector is $\\frac{18\\pi}{30\\pi} = \\frac{3}{5}$ of a circle of area $225\\pi$, which is $135\\pi$; the base disk of $81\\pi$ lies beside it, for $216\\pi$ ✓. (The choice $135\\pi$ is STOPPING AT THE CURVED SURFACE and leaving the bottom uncovered ✗; the choice $189\\pi$ is USING THE HEIGHT $12$ WHERE THE SLANT BELONGS, $\\pi \\cdot 9 \\cdot 12 + 81\\pi$ ✗; the choice $270\\pi$ is ADDING THE LEGS to get a slant of $21$ instead of using the right triangle ✗.)',
    },
  ],
  // s5 — volume when the DIAMETER is handed over instead of the radius.
  [
    {
      q: 'A pile of mulch is a cone $18$ feet across at the ground and $4$ feet tall. What is the volume of the pile, in cubic feet?',
      fig: coneFig(9, 4, 'd = 18', 'h = 4'),
      choices: ['$108\\pi$', '$432\\pi$', '$324\\pi$', '$12\\pi$'],
      answer: 0,
      solution:
        'Route one, halve the diameter and then use the formula: $18$ feet across means $r = 9$, so $V = \\frac{1}{3}\\pi \\cdot 9^2 \\cdot 4 = 27\\pi \\cdot 4 = 108\\pi$ cubic feet ✓. Check a second, independent way, by pouring: a drum with the same $18$-foot mouth and the same $4$-foot height is a disk of area $\\pi \\cdot 81 = 81\\pi$ swept up $4$ feet, holding $324\\pi$. Three piles this size fill that drum, so one pile is $\\frac{324\\pi}{3} = 108\\pi$ ✓. (The choice $432\\pi$ is USING THE DIAMETER $18$ AS THE RADIUS ✗; the choice $324\\pi$ is REPORTING THE WHOLE DRUM, with the $\\frac{1}{3}$ dropped ✗; the choice $12\\pi$ is FORGETTING TO SQUARE THE RADIUS, $\\frac{1}{3}\\pi \\cdot 9 \\cdot 4$ ✗.)',
    },
    {
      q: 'Road salt is heaped into a cone $22$ meters across at its base and $3$ meters high. How many cubic meters of salt are in the heap?',
      fig: coneFig(11, 3, 'd = 22', 'h = 3'),
      choices: ['$484\\pi$', '$363\\pi$', '$11\\pi$', '$121\\pi$'],
      answer: 3,
      solution:
        'Route one, halve the diameter and then use the formula: $22$ meters across means $r = 11$, and taking the third of the height first, $\\frac{1}{3} \\cdot 3 = 1$, so $V = \\pi \\cdot 11^2 \\cdot 1 = 121\\pi$ cubic meters ✓. Check a second, independent way, by pouring: a silo with the same $22$-meter base and the same $3$-meter height is a disk of area $\\pi \\cdot 121 = 121\\pi$ swept up $3$ meters, holding $363\\pi$. Three heaps this size fill it, so one heap is $\\frac{363\\pi}{3} = 121\\pi$ ✓. (The choice $484\\pi$ is USING THE DIAMETER $22$ AS THE RADIUS ✗; the choice $363\\pi$ is REPORTING THE WHOLE SILO, with the $\\frac{1}{3}$ dropped ✗; the choice $11\\pi$ is FORGETTING TO SQUARE THE RADIUS, $\\frac{1}{3}\\pi \\cdot 11 \\cdot 3$ ✗.)',
    },
    {
      q: 'A cone-shaped paper cup measures $8$ centimeters across the rim, and its point sits $15$ centimeters straight down below the center of that rim. What is the volume of the cup, in cubic centimeters?',
      fig: coneFig(4, 15, 'd = 8', 'h = 15'),
      choices: ['$320\\pi$', '$240\\pi$', '$80\\pi$', '$20\\pi$'],
      answer: 2,
      solution:
        'Route one, halve the diameter and then use the formula: $8$ centimeters across means $r = 4$, and taking the third of the height first, $\\frac{1}{3} \\cdot 15 = 5$, so $V = \\pi \\cdot 4^2 \\cdot 5 = 80\\pi$ cubic centimeters ✓. Check a second, independent way, by pouring: a straight-sided cup with the same $8$-centimeter rim and the same $15$-centimeter depth is a disk of area $\\pi \\cdot 16 = 16\\pi$ swept down $15$ centimeters, holding $240\\pi$. Three pointed cupfuls fill that one, so the pointed cup holds $\\frac{240\\pi}{3} = 80\\pi$ ✓. (The choice $320\\pi$ is USING THE DIAMETER $8$ AS THE RADIUS ✗; the choice $240\\pi$ is REPORTING THE STRAIGHT-SIDED CUP, with the $\\frac{1}{3}$ dropped ✗; the choice $20\\pi$ is FORGETTING TO SQUARE THE RADIUS, $\\frac{1}{3}\\pi \\cdot 4 \\cdot 15$ ✗.)',
    },
  ],
  // s6 — the volume and the radius are given; work backwards to the height.
  [
    {
      q: 'A cone-shaped bird feeder holds $228\\pi$ cubic centimeters of seed when it is packed full, and the circular lid on its top has radius $6$ centimeters. How deep is the feeder, in centimeters?',
      choices: ['$\\frac{19}{3}$', '$114$', '$57$', '$19$'],
      answer: 3,
      solution:
        'Route one, undo the formula: $\\frac{1}{3}\\pi \\cdot 6^2 \\cdot h = 228\\pi$. Taking the third of the squared radius first, $\\frac{1}{3} \\cdot 36 = 12$, so $12h = 228$ and $h = 19$ centimeters ✓. Check a second, independent way, by comparing with a straight-sided tin of the same lid: a tin holding $228\\pi$ would need height $\\frac{228\\pi}{36\\pi} = \\frac{19}{3}$. A cone is only a third as roomy at every depth, so the feeder must reach three times as far down: $3 \\cdot \\frac{19}{3} = 19$. Filling it back confirms it, $\\frac{1}{3}\\pi \\cdot 36 \\cdot 19 = 12 \\cdot 19\\pi = 228\\pi$ ✓. (The choice $\\frac{19}{3}$ is NEVER UNDOING THE $\\frac{1}{3}$, solving $36h = 228$, which measures the straight-sided tin instead ✗; the choice $57$ is TRIPLING TWICE, once to clear the fraction and once more for the tin comparison, when either step alone already gets there ✗; the choice $114$ is DIVIDING BY THE RADIUS INSTEAD OF ITS SQUARE, $\\frac{3 \\cdot 228}{6}$ ✗.)',
    },
    {
      q: 'A grain hopper is a cone that holds $588\\pi$ cubic feet, and the circular opening at its top has radius $7$ feet. How tall is the hopper, in feet?',
      choices: ['$12$', '$36$', '$252$', '$4$'],
      answer: 1,
      solution:
        'Route one, undo the formula: $\\frac{1}{3}\\pi \\cdot 7^2 \\cdot h = 588\\pi$. Multiply both sides by $3$, giving $49h = 1764$, so $h = 36$ feet ✓. Check a second, independent way, by comparing with a straight-sided bin of the same opening: a bin holding $588\\pi$ would need height $\\frac{588\\pi}{49\\pi} = 12$. A cone is only a third as roomy at every height, so it needs three times that: $3 \\times 12 = 36$. Pouring back confirms it, $\\frac{1}{3}\\pi \\cdot 49 \\cdot 36 = 588\\pi$ ✓. (The choice $12$ is NEVER UNDOING THE $\\frac{1}{3}$, solving $49h = 588$ ✗; the choice $4$ is DIVIDING BY $3$ WHERE ONE MUST MULTIPLY ✗; the choice $252$ is DIVIDING BY THE RADIUS INSTEAD OF ITS SQUARE, $\\frac{3 \\cdot 588}{7}$ ✗.)',
    },
    {
      q: 'A conical coffee filter holds $490\\pi$ cubic centimeters of water when full, and its rim is a circle of radius $7$ centimeters. How deep is the filter, in centimeters?',
      choices: ['$30$', '$210$', '$10$', '$\\frac{10}{3}$'],
      answer: 0,
      solution:
        'Route one, undo the formula: $\\frac{1}{3}\\pi \\cdot 7^2 \\cdot h = 490\\pi$. Multiply both sides by $3$, giving $49h = 1470$, so $h = 30$ centimeters ✓. Check a second, independent way, by comparing with a straight-sided cup of the same rim: a cup holding $490\\pi$ would need height $\\frac{490\\pi}{49\\pi} = 10$. A cone is only a third as roomy at every depth, so the filter must reach three times as far down: $3 \\times 10 = 30$. Pouring back confirms it, $\\frac{1}{3}\\pi \\cdot 49 \\cdot 30 = 490\\pi$ ✓. (The choice $10$ is NEVER UNDOING THE $\\frac{1}{3}$, solving $49h = 490$ ✗; the choice $\\frac{10}{3}$ is DIVIDING BY $3$ WHERE ONE MUST MULTIPLY ✗; the choice $210$ is DIVIDING BY THE RADIUS INSTEAD OF ITS SQUARE, $\\frac{3 \\cdot 490}{7}$ ✗.)',
    },
  ],
  // s7 — volume when the SLANT is given: recover the true height first.
  [
    {
      q: 'A wooden spinning top is a cone with base radius $12$ centimeters and slant height $13$ centimeters. What is its volume, in cubic centimeters?',
      fig: coneFig(12, 5, 'r = 12', 'h = ?', 'ℓ = 13'),
      choices: ['$624\\pi$', '$156\\pi$', '$240\\pi$', '$720\\pi$'],
      answer: 2,
      solution:
        'Route one, find the true height and then use the formula: volume is measured straight up the middle, so $h = \\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = \\sqrt{25} = 5$, and $V = \\frac{1}{3}\\pi \\cdot 144 \\cdot 5 = 48\\pi \\cdot 5 = 240\\pi$ cubic centimeters ✓. Check a second, independent way, by factoring and pouring: a difference of squares gives $h^2 = (13 - 12)(13 + 12) = 1 \\times 25 = 25$, so $h = 5$. A drum with the same base and that height holds $\\pi \\cdot 144 \\cdot 5 = 720\\pi$, and three tops this size fill it, so the top is $\\frac{720\\pi}{3} = 240\\pi$ ✓. (The choice $624\\pi$ is USING THE SLANT $13$ AS THE HEIGHT, which leans along the outside instead of standing up the middle ✗; the choice $720\\pi$ is REPORTING THE WHOLE DRUM, with the $\\frac{1}{3}$ dropped ✗; the choice $156\\pi$ is COMPUTING THE CURVED SURFACE AREA $\\pi r \\ell$, which is an area rather than a volume ✗.)',
    },
    {
      q: 'A vase is shaped like a cone standing on its point, with a rim of radius $8$ inches and a slanted side $17$ inches long. How much water does it hold, in cubic inches?',
      fig: coneFig(8, 15, 'r = 8', 'h = ?', 'ℓ = 17'),
      choices: ['$320\\pi$', '$192\\pi$', '$960\\pi$', '$136\\pi$'],
      answer: 0,
      solution:
        'Route one, find the true height and then use the formula: the depth runs straight down the middle, so $h = \\sqrt{17^2 - 8^2} = \\sqrt{289 - 64} = \\sqrt{225} = 15$, and $V = \\frac{1}{3}\\pi \\cdot 64 \\cdot 15 = \\pi \\cdot 64 \\cdot 5 = 320\\pi$ cubic inches ✓. Check a second, independent way, by factoring and pouring: a difference of squares gives $h^2 = (17 - 8)(17 + 8) = 9 \\times 25 = 225$, so $h = 15$. A straight-sided jar with the same rim and that depth holds $\\pi \\cdot 64 \\cdot 15 = 960\\pi$, and three vasefuls fill it, so the vase holds $\\frac{960\\pi}{3} = 320\\pi$ ✓. (The choice $192\\pi$ is SUBTRACTING THE LENGTHS INSTEAD OF THEIR SQUARES, taking $h = 17 - 8 = 9$ where the factoring gives $9 \\times 25$ ✗; the choice $960\\pi$ is REPORTING THE STRAIGHT-SIDED JAR, with the $\\frac{1}{3}$ dropped ✗; the choice $136\\pi$ is COMPUTING THE CURVED SURFACE AREA $\\pi r \\ell$, an area rather than a volume ✗.)',
    },
    {
      q: 'A candle is molded as a cone with base radius $8$ centimeters and slant height $10$ centimeters. How much wax is in it, in cubic centimeters?',
      fig: coneFig(8, 6, 'r = 8', 'h = ?', 'ℓ = 10'),
      choices: ['$384\\pi$', '$80\\pi$', '$\\frac{640\\pi}{3}$', '$128\\pi$'],
      answer: 3,
      solution:
        'Route one, find the true height and then use the formula: the wax is measured against the height up the middle, so $h = \\sqrt{10^2 - 8^2} = \\sqrt{100 - 64} = \\sqrt{36} = 6$, and $V = \\frac{1}{3}\\pi \\cdot 64 \\cdot 6 = \\pi \\cdot 64 \\cdot 2 = 128\\pi$ cubic centimeters ✓. Check a second, independent way, by factoring and pouring: a difference of squares gives $h^2 = (10 - 8)(10 + 8) = 2 \\times 18 = 36$, so $h = 6$. A cylinder of wax with the same base and that height would take $\\pi \\cdot 64 \\cdot 6 = 384\\pi$, and three candles this size fill it, so one candle is $\\frac{384\\pi}{3} = 128\\pi$ ✓. (The choice $\\frac{640\\pi}{3}$ is USING THE SLANT $10$ AS THE HEIGHT, though the slant leans along the outside ✗; the choice $384\\pi$ is REPORTING THE WHOLE CYLINDER, with the $\\frac{1}{3}$ dropped ✗; the choice $80\\pi$ is COMPUTING THE CURVED SURFACE AREA $\\pi r \\ell$, an area rather than a volume ✗.)',
    },
  ],
  // s8 — a sector is rolled into a cone: the radius becomes the slant, the arc becomes the rim.
  [
    {
      q: 'A sheet-metal sector has two straight edges $20$ inches long and a curved edge of length $24\\pi$ inches. It is rolled up and the two straight edges are welded together, making a cone. How tall is that cone, in inches?',
      fig: sectorFig(20, 216, '20', null, 'arc = 24π'),
      choices: ['$12$', '$16$', '$4\\sqrt{34}$', '$20$'],
      answer: 1,
      solution:
        'Route one, read off the rolled cone and use the right triangle: the straight edges become the slant, $\\ell = 20$, and the curved edge becomes the base rim, so $2\\pi r = 24\\pi$ and $r = 12$. Then $h = \\sqrt{20^2 - 12^2} = \\sqrt{400 - 144} = \\sqrt{256} = 16$ inches ✓. Check a second, independent way, through the diameter and a factoring: a circle of circumference $24\\pi$ has diameter $24$, since circumference is $\\pi$ times diameter, so the base radius is $12$. For the height, factor the difference of squares: $h^2 = (20 - 12)(20 + 12) = 8 \\times 32 = 256$, so $h = 16$ ✓. (The choice $12$ is REPORTING THE BASE RADIUS, a real length but not the one asked for ✗; the choice $20$ is REPORTING THE SLANT, which leans along the outside ✗; the choice $4\\sqrt{34}$ is ADDING THE SQUARES, $\\sqrt{400 + 144}$, as though the slant were a leg rather than the hypotenuse ✗.)',
    },
    {
      q: 'A paper sector has straight edges of length $15$ centimeters and a curved edge measuring $18\\pi$ centimeters. Taping the straight edges together turns it into a cone. What is the height of the cone, in centimeters?',
      fig: sectorFig(15, 216, '15', null, 'arc = 18π'),
      choices: ['$9$', '$3\\sqrt{34}$', '$15$', '$12$'],
      answer: 3,
      solution:
        'Route one, read off the rolled cone and use the right triangle: the straight edges become the slant, $\\ell = 15$, and the curved edge becomes the base rim, so $2\\pi r = 18\\pi$ and $r = 9$. Then $h = \\sqrt{15^2 - 9^2} = \\sqrt{225 - 81} = \\sqrt{144} = 12$ centimeters ✓. Check a second, independent way, through the diameter and a factoring: a circle of circumference $18\\pi$ has diameter $18$, so the base radius is $9$. For the height, factor the difference of squares: $h^2 = (15 - 9)(15 + 9) = 6 \\times 24 = 144$, so $h = 12$ ✓. (The choice $9$ is REPORTING THE BASE RADIUS instead of the height ✗; the choice $15$ is REPORTING THE SLANT, which runs along the taped surface ✗; the choice $3\\sqrt{34}$ is ADDING THE SQUARES, $\\sqrt{225 + 81}$, as though the slant were a leg ✗.)',
    },
    {
      q: 'A leather sector has straight edges $25$ centimeters long and a curved edge of length $14\\pi$ centimeters. Stitching the straight edges together forms a cone. How tall is the cone, in centimeters?',
      fig: sectorFig(25, 100.8, '25', null, 'arc = 14π'),
      choices: ['$7$', '$25$', '$24$', '$\\sqrt{674}$'],
      answer: 2,
      solution:
        'Route one, read off the rolled cone and use the right triangle: the stitched edges become the slant, $\\ell = 25$, and the curved edge becomes the base rim, so $2\\pi r = 14\\pi$ and $r = 7$. Then $h = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24$ centimeters ✓. Check a second, independent way, through the diameter and a factoring: a circle of circumference $14\\pi$ has diameter $14$, so the base radius is $7$. For the height, factor the difference of squares: $h^2 = (25 - 7)(25 + 7) = 18 \\times 32 = 576$, so $h = 24$ ✓. (The choice $7$ is REPORTING THE BASE RADIUS instead of the height ✗; the choice $25$ is REPORTING THE SLANT, which runs along the stitched surface ✗; the choice $\\sqrt{674}$ is ADDING THE SQUARES, $\\sqrt{625 + 49}$, as though the slant were a leg rather than the hypotenuse ✗.)',
    },
  ],
  // s9 — a sector given by its angle is rolled up: find the base radius.
  [
    {
      q: 'A quarter of a circular sheet of radius $16$ inches — a $90^\\circ$ sector — is rolled into a cone. What is the radius of the cone’s base, in inches?',
      fig: sectorFig(16, 90, '16', '90°'),
      choices: ['$4$', '$12$', '$16$', '$8$'],
      answer: 0,
      solution:
        'Route one, follow the arc: the sector takes $\\frac{90}{360} = \\frac{1}{4}$ of the full circumference $2\\pi \\cdot 16 = 32\\pi$, so its curved edge is $8\\pi$ long. Rolled up, that edge becomes the base rim: $2\\pi r = 8\\pi$, so $r = 4$ inches ✓. Check a second, independent way, through areas: the sector is $\\frac{1}{4}$ of a disk of area $\\pi \\cdot 16^2 = 256\\pi$, which is $64\\pi$, and rolling changes no area, so that becomes the cone’s curved surface $\\pi r \\ell$ with $\\ell = 16$. From $16\\pi r = 64\\pi$ we again get $r = 4$ ✓. (The choice $16$ is REPORTING THE SHEET’S RADIUS, which becomes the slant height, not the base radius ✗; the choice $8$ is DIVIDING THE ARC BY $\\pi$ INSTEAD OF $2\\pi$, which hands back the diameter ✗; the choice $12$ is ROLLING UP THE LEFTOVER $270^\\circ$ PIECE, whose arc is $24\\pi$ ✗.)',
    },
    {
      q: 'A $30^\\circ$ sector is cut from a circle of radius $36$ centimeters and rolled into a slender cone. What is the radius of the cone’s base, in centimeters?',
      fig: sectorFig(36, 30, '36', '30°'),
      choices: ['$6$', '$36$', '$3$', '$33$'],
      answer: 2,
      solution:
        'Route one, follow the arc: the sector takes $\\frac{30}{360} = \\frac{1}{12}$ of the full circumference $2\\pi \\cdot 36 = 72\\pi$, so its curved edge is $6\\pi$ long. Rolled up, that edge becomes the base rim: $2\\pi r = 6\\pi$, so $r = 3$ centimeters ✓. Check a second, independent way, through areas: the sector is $\\frac{1}{12}$ of a disk of area $\\pi \\cdot 36^2 = 1296\\pi$, which is $108\\pi$, and rolling changes no area, so it becomes the curved surface $\\pi r \\ell$ with $\\ell = 36$. From $36\\pi r = 108\\pi$ we again get $r = 3$ ✓. (The choice $36$ is REPORTING THE ORIGINAL RADIUS, which becomes the slant height ✗; the choice $6$ is DIVIDING THE ARC BY $\\pi$ INSTEAD OF $2\\pi$, which hands back the diameter ✗; the choice $33$ is ROLLING UP THE LEFTOVER $330^\\circ$ PIECE, whose arc is $66\\pi$ ✗.)',
    },
    {
      q: 'A $108^\\circ$ sector is cut from a circular tarpaulin of radius $40$ feet and rolled into a cone. What is the radius of the cone’s base, in feet?',
      fig: sectorFig(40, 108, '40', '108°'),
      choices: ['$24$', '$12$', '$40$', '$28$'],
      answer: 1,
      solution:
        'Route one, follow the arc: the sector takes $\\frac{108}{360} = \\frac{3}{10}$ of the full circumference $2\\pi \\cdot 40 = 80\\pi$, so its curved edge is $24\\pi$ long. Rolled up, that edge becomes the base rim: $2\\pi r = 24\\pi$, so $r = 12$ feet ✓. Check a second, independent way, through areas: the sector is $\\frac{3}{10}$ of a disk of area $\\pi \\cdot 40^2 = 1600\\pi$, which is $480\\pi$, and rolling changes no area, so it becomes the curved surface $\\pi r \\ell$ with $\\ell = 40$. From $40\\pi r = 480\\pi$ we again get $r = 12$ ✓. (The choice $40$ is REPORTING THE TARPAULIN’S RADIUS, which becomes the slant height ✗; the choice $24$ is DIVIDING THE ARC BY $\\pi$ INSTEAD OF $2\\pi$, which hands back the diameter ✗; the choice $28$ is ROLLING UP THE LEFTOVER $252^\\circ$ PIECE, whose arc is $56\\pi$ ✗.)',
    },
  ],
  // s10 — matching a given cylinder on the same base: the cone triples the height.
  [
    {
      q: 'A soup can is a cylinder of radius $3$ inches and height $5$ inches. A cone-shaped paper cup has radius $3$ inches as well. How tall must the cup be to hold exactly as much as the can?',
      choices: ['$5$', '$45$', '$15$', '$\\frac{5}{3}$'],
      answer: 2,
      solution:
        'Route one, set the two volumes equal: the can holds $\\pi \\cdot 3^2 \\cdot 5 = 45\\pi$, so the cup must satisfy $\\frac{1}{3}\\pi \\cdot 9 \\cdot h = 45\\pi$, which is $3h = 45$ and $h = 15$ inches ✓. Check a second, independent way, by comparing shapes of the same height: a cup of radius $3$ and height $5$ would hold only a third of what the can holds, $15\\pi$ against $45\\pi$. A cone’s volume grows in step with its height, so tripling the height triples the contents, and $3 \\times 5 = 15$ brings $15\\pi$ up to $45\\pi$ ✓. (The choice $5$ is COPYING THE CAN’S HEIGHT, which leaves the cup holding only a third as much ✗; the choice $\\frac{5}{3}$ is DIVIDING THE HEIGHT BY $3$ RATHER THAN MULTIPLYING, which makes the shortfall worse ✗; the choice $45$ is FORGETTING TO SQUARE THE RADIUS, solving $\\frac{1}{3}\\pi \\cdot 3 \\cdot h = 45\\pi$ ✗.)',
    },
    {
      q: 'A cylindrical bucket has radius $6$ inches and height $7$ inches. A cone-shaped funnel also has radius $6$ inches. How tall must the funnel be to hold exactly as much as the bucket?',
      choices: ['$21$', '$7$', '$126$', '$\\frac{7}{3}$'],
      answer: 0,
      solution:
        'Route one, set the two volumes equal: the bucket holds $\\pi \\cdot 6^2 \\cdot 7 = 252\\pi$, so the funnel must satisfy $\\frac{1}{3}\\pi \\cdot 36 \\cdot h = 252\\pi$, which is $12h = 252$ and $h = 21$ inches ✓. Check a second, independent way, by comparing shapes of the same height: a funnel of radius $6$ and height $7$ would hold only a third of the bucket, $84\\pi$ against $252\\pi$. Volume keeps step with height, so tripling the height triples the contents, and $3 \\times 7 = 21$ carries $84\\pi$ up to $252\\pi$ ✓. (The choice $7$ is COPYING THE BUCKET’S HEIGHT, which leaves the funnel holding a third as much ✗; the choice $\\frac{7}{3}$ is DIVIDING THE HEIGHT BY $3$ RATHER THAN MULTIPLYING ✗; the choice $126$ is FORGETTING TO SQUARE THE RADIUS, solving $\\frac{1}{3}\\pi \\cdot 6 \\cdot h = 252\\pi$ ✗.)',
    },
    {
      q: 'A test tube with a flat bottom is a cylinder of radius $2$ centimeters and height $11$ centimeters. A cone-shaped tube has radius $2$ centimeters at its rim. How deep must the cone-shaped tube be to hold exactly as much?',
      choices: ['$11$', '$66$', '$\\frac{11}{3}$', '$33$'],
      answer: 3,
      solution:
        'Route one, set the two volumes equal: the flat-bottomed tube holds $\\pi \\cdot 2^2 \\cdot 11 = 44\\pi$, so the cone-shaped tube must satisfy $\\frac{1}{3}\\pi \\cdot 4 \\cdot h = 44\\pi$, which is $4h = 132$ and $h = 33$ centimeters ✓. Check a second, independent way, by comparing shapes of the same depth: at any shared depth the cone holds exactly one third of what the cylinder holds, so the cone has to reach three times as far down to catch up: $3 \\times 11 = 33$. Pouring back confirms it, $\\frac{1}{3}\\pi \\cdot 4 \\cdot 33 = 44\\pi$ ✓. (The choice $11$ is COPYING THE CYLINDER’S DEPTH, which leaves the cone holding a third as much ✗; the choice $\\frac{11}{3}$ is DIVIDING THE DEPTH BY $3$ RATHER THAN MULTIPLYING ✗; the choice $66$ is FORGETTING TO SQUARE THE RADIUS, solving $\\frac{1}{3}\\pi \\cdot 2 \\cdot h = 44\\pi$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 15,
  sections: { '15.2': s152 },
}
