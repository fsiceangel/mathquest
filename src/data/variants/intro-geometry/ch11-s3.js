// Introduction to Geometry chapter 11 — variations for section 11.3 (Funky Areas).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed value was worked twice by routes that do not share arithmetic:
//    subtract-the-pieces against a factored difference of squares, a
//    sector-minus-triangle against a chord-and-apothem rebuild of the same
//    triangle, a direct subtraction against a scaling or proportion argument.
//  - Points on a circle are placed by exact trigonometry and written to
//    4 decimals: an inscribed-square vertex at (5.6569, 5.6569) really is 8
//    from the center, and every chord joins exact arc endpoints.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution: subtract-before-squaring, sector alone, side used as radius,
//    reversed subtraction, adding instead of subtracting.

const s113 = [
  // s1 — ring between concentric circles (figure).
  [
    {
      q: 'A flat steel washer is bounded by two circles sharing center $O$: the outer edge has radius $8$ and the hole has radius $6$, as shown. What is the area of the washer’s face (the ring between the two circles)?',
      fig: {
        view: [-9.5, -9.5, 9.5, 9.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 8 },
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'seg', a: [0, 0], b: [-6, 0] },
          { t: 'seg', a: [0, 0], b: [5.6569, 5.6569] },
          { t: 'label', p: [-3, 0], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [2.8284, 2.8284], text: '8', dx: 10, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-6, 0], label: 'A', dx: -12, dy: -8 },
          { t: 'point', p: [5.6569, 5.6569], label: 'B', dx: 10, dy: -8 },
        ],
      },
      choices: ['$4\\pi$', '$64\\pi$', '$28\\pi$', '$100\\pi$'],
      answer: 2,
      solution:
        'Plan in words first: ring $=$ outer circle $-$ inner circle. Outer: $\\pi \\cdot 8^2 = 64\\pi$; inner: $\\pi \\cdot 6^2 = 36\\pi$; ring: $64\\pi - 36\\pi = 28\\pi$ ✓. Re-check by factoring the difference of squares: $\\pi(8^2 - 6^2) = \\pi(8 - 6)(8 + 6) = \\pi \\cdot 2 \\cdot 14 = 28\\pi$ — the same number by a different arithmetic path ✓. (The choice $4\\pi$ is $\\pi(8 - 6)^2$, the SUBTRACT-BEFORE-SQUARING trap — square the radii first ✗; $64\\pi$ is the whole outer circle and FORGETS TO SUBTRACT the hole ✗; $100\\pi$ ADDS the two circles instead of subtracting ✗.)',
    },
    {
      q: 'An archery target is painted with two circles about the same center $O$, of radii $10$ and $7$, as shown. What is the area of the band between the two circles?',
      fig: {
        view: [-11.5, -11.5, 11.5, 11.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 10 },
          { t: 'circle', c: [0, 0], r: 7 },
          { t: 'seg', a: [0, 0], b: [-7, 0] },
          { t: 'seg', a: [0, 0], b: [7.0711, 7.0711] },
          { t: 'label', p: [-3.5, 0], text: '7', dx: 0, dy: -10 },
          { t: 'label', p: [3.5355, 3.5355], text: '10', dx: 12, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-7, 0], label: 'P', dx: -12, dy: -8 },
          { t: 'point', p: [7.0711, 7.0711], label: 'Q', dx: 10, dy: -8 },
        ],
      },
      choices: ['$51\\pi$', '$9\\pi$', '$100\\pi$', '$149\\pi$'],
      answer: 0,
      solution:
        'The band is the big circle minus the small one: $\\pi \\cdot 10^2 - \\pi \\cdot 7^2 = 100\\pi - 49\\pi = 51\\pi$ ✓. Confirm with the factored form: $\\pi(10 - 7)(10 + 7) = \\pi \\cdot 3 \\cdot 17 = 51\\pi$ ✓. (The choice $9\\pi$ is $\\pi(10 - 7)^2$, the SUBTRACT-BEFORE-SQUARING shortcut that never works ✗; $100\\pi$ is the entire outer circle, so it FORGETS TO SUBTRACT ✗; $149\\pi$ ADDS $100\\pi$ and $49\\pi$ instead of subtracting ✗.)',
    },
    {
      q: 'A circular skating rink of radius $9$ has a circular practice zone of radius $6$ marked around the same center $O$, as shown. What is the area of ice inside the rink but outside the practice zone?',
      fig: {
        view: [-10.5, -10.5, 10.5, 10.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 9 },
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'seg', a: [0, 0], b: [-6, 0] },
          { t: 'seg', a: [0, 0], b: [6.364, 6.364] },
          { t: 'label', p: [-3, 0], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [3.182, 3.182], text: '9', dx: 10, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-6, 0], label: 'M', dx: -12, dy: -8 },
          { t: 'point', p: [6.364, 6.364], label: 'N', dx: 10, dy: -8 },
        ],
      },
      choices: ['$9\\pi$', '$81\\pi$', '$117\\pi$', '$45\\pi$'],
      answer: 3,
      solution:
        'Ring $=$ rink $-$ practice zone $= \\pi \\cdot 9^2 - \\pi \\cdot 6^2 = 81\\pi - 36\\pi = 45\\pi$ ✓. Re-derive it by factoring: $\\pi(9 - 6)(9 + 6) = \\pi \\cdot 3 \\cdot 15 = 45\\pi$, matching the subtraction exactly ✓. (The choice $9\\pi$ is $\\pi(9 - 6)^2$ — SUBTRACT-BEFORE-SQUARING gives a wildly small ring ✗; $81\\pi$ is the whole rink, which FORGETS TO SUBTRACT the zone ✗; $117\\pi$ ADDS the two circles ✗.)',
    },
  ],
  // s2 — square minus inscribed circle (figure).
  [
    {
      q: 'A round rug is laid in a square room of side $8$, touching all four walls, as shown. What is the total area of bare floor left in the corners?',
      fig: {
        view: [-1, -1, 9, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 8], [0, 8]], fill: false },
          { t: 'circle', c: [4, 4], r: 4 },
          { t: 'seg', a: [4, 4], b: [8, 4], dash: true },
          { t: 'label', p: [6, 4], text: '4', dx: 0, dy: -10 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'point', p: [4, 4], label: 'O', dx: -10, dy: 10 },
        ],
      },
      choices: ['$16\\pi$', '$64 - 16\\pi$', '$64 - 64\\pi$', '$64 + 16\\pi$'],
      answer: 1,
      solution:
        'Plan: bare floor $=$ square $-$ circle. The rug touches all four walls, so its diameter equals the side $8$ and its radius is $4$. Square: $8^2 = 64$; rug: $\\pi \\cdot 4^2 = 16\\pi$; corners: $64 - 16\\pi$ ✓. Second route, by proportion: an inscribed circle always covers $\\frac{\\pi}{4} \\approx 78.5\\%$ of its square, so the corners hold about $21.5\\%$ of $64$, roughly $13.7$ — and $64 - 16\\pi \\approx 64 - 50.3 = 13.7$ ✓. (The choice $16\\pi$ reports THE RUG ITSELF instead of the bare floor ✗; $64 - 64\\pi$ USES THE SIDE AS THE RADIUS and turns negative ✗; $64 + 16\\pi$ ADDS the pieces instead of subtracting ✗.)',
    },
    {
      q: 'A circular mirror is mounted on a square wooden panel of side $14$, touching all four edges, as shown. How much of the panel’s area shows around the mirror?',
      fig: {
        view: [-1.5, -1.5, 15.5, 15.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [14, 14], [0, 14]], fill: false },
          { t: 'circle', c: [7, 7], r: 7 },
          { t: 'seg', a: [7, 7], b: [14, 7], dash: true },
          { t: 'label', p: [10.5, 7], text: '7', dx: 0, dy: -10 },
          { t: 'label', p: [7, 0], text: '14', dx: 0, dy: 14 },
          { t: 'point', p: [7, 7], label: 'O', dx: -10, dy: 10 },
        ],
      },
      choices: ['$196 - 196\\pi$', '$49\\pi$', '$196 + 49\\pi$', '$196 - 49\\pi$'],
      answer: 3,
      solution:
        'The mirror touches all four edges, so its diameter is $14$ and its radius is $7$. Visible wood $=$ square $-$ circle $= 14^2 - \\pi \\cdot 7^2 = 196 - 49\\pi$ ✓. Check the size by proportion: the circle fills $\\frac{\\pi}{4} \\approx 78.5\\%$ of the panel, leaving about $21.5\\%$ of $196$, roughly $42$ — and $196 - 49\\pi \\approx 196 - 153.9 = 42.1$ ✓. (The choice $196 - 196\\pi$ USES THE SIDE AS THE RADIUS and is negative ✗; $49\\pi$ is THE MIRROR ITSELF, not the wood around it ✗; $196 + 49\\pi$ ADDS instead of subtracting ✗.)',
    },
    {
      q: 'A square garden plot of side $18$ has a circular pond at its center touching all four sides, as shown. What area of the plot is left for planting?',
      fig: {
        view: [-2, -2, 20, 20],
        elems: [
          { t: 'poly', pts: [[0, 0], [18, 0], [18, 18], [0, 18]], fill: false },
          { t: 'circle', c: [9, 9], r: 9 },
          { t: 'seg', a: [9, 9], b: [18, 9], dash: true },
          { t: 'label', p: [13.5, 9], text: '9', dx: 0, dy: -10 },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: 14 },
          { t: 'point', p: [9, 9], label: 'O', dx: -10, dy: 10 },
        ],
      },
      choices: ['$324 - 81\\pi$', '$324 - 324\\pi$', '$81\\pi$', '$324 + 81\\pi$'],
      answer: 0,
      solution:
        'The pond touches all four sides, so its diameter equals the side $18$ and its radius is $9$. Planting area $=$ square $-$ circle $= 18^2 - \\pi \\cdot 9^2 = 324 - 81\\pi$ ✓. Sanity-check by proportion: the pond takes $\\frac{\\pi}{4} \\approx 78.5\\%$ of the plot, so about $21.5\\%$ of $324$, roughly $69.5$, remains — and $324 - 81\\pi \\approx 324 - 254.5 = 69.5$ ✓. (The choice $324 - 324\\pi$ USES THE SIDE AS THE RADIUS, a pond bigger than the garden ✗; $81\\pi$ is THE POND ITSELF ✗; $324 + 81\\pi$ ADDS the two areas ✗.)',
    },
  ],
  // s3 — quarter circle area (figure).
  [
    {
      q: 'A lawn sprinkler at $O$ waters the quarter-circle region of radius $12$ bounded by $\\overline{OP}$, $\\overline{OQ}$, and the arc, as shown. What area does it water?',
      fig: {
        view: [-1.8, -1.8, 14, 14],
        elems: [
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [0, 12] },
          { t: 'arc', c: [0, 0], r: 12, from: 0, to: 90 },
          { t: 'right', at: [0, 0], from: [12, 0], to: [0, 12] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'P', dx: 12, dy: 0 },
          { t: 'point', p: [0, 12], label: 'Q', dx: -10, dy: -8 },
        ],
      },
      choices: ['$144\\pi$', '$72\\pi$', '$6\\pi$', '$36\\pi$'],
      answer: 3,
      solution:
        'A quarter circle is a $90^\\circ$ sector, one fourth of the full circle: $\\frac{1}{4} \\cdot \\pi \\cdot 12^2 = \\frac{144\\pi}{4} = 36\\pi$ ✓. Reach it again by halving twice: the full circle is $144\\pi$, a half circle is $72\\pi$, and half of that half is the quarter, $36\\pi$ ✓. (The choice $144\\pi$ is the WHOLE CIRCLE ✗; $72\\pi$ STOPS AT THE HALF circle, one halving short ✗; $6\\pi$ is a quarter of the CIRCUMFERENCE $24\\pi$ — a length, not an area ✗.)',
    },
    {
      q: 'A quarter-circle stage of radius $20$ is bounded by two straight walls, $\\overline{OA}$ and $\\overline{OB}$, and a curved front edge, as shown. What is the floor area of the stage?',
      fig: {
        view: [-3, -3, 23, 23],
        elems: [
          { t: 'seg', a: [0, 0], b: [20, 0] },
          { t: 'seg', a: [0, 0], b: [0, 20] },
          { t: 'arc', c: [0, 0], r: 20, from: 0, to: 90 },
          { t: 'right', at: [0, 0], from: [20, 0], to: [0, 20] },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [20, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [0, 20], label: 'B', dx: -10, dy: -8 },
        ],
      },
      choices: ['$200\\pi$', '$100\\pi$', '$400\\pi$', '$10\\pi$'],
      answer: 1,
      solution:
        'The $90^\\circ$ sector is one fourth of the circle: $\\frac{1}{4} \\cdot \\pi \\cdot 20^2 = \\frac{400\\pi}{4} = 100\\pi$ ✓. Halve twice to confirm: full circle $400\\pi$, half circle $200\\pi$, quarter $100\\pi$ ✓. (The choice $400\\pi$ is the WHOLE CIRCLE ✗; $200\\pi$ STOPS AT THE HALF ✗; $10\\pi$ is a quarter of the CIRCUMFERENCE $40\\pi$, which measures the curved edge, not the floor ✗.)',
    },
    {
      q: 'A quarter-circle flower bed of radius $16$ fills a corner at $O$, bounded by $\\overline{OM}$, $\\overline{ON}$, and the arc, as shown. What is its area?',
      fig: {
        view: [-2.4, -2.4, 18.5, 18.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [16, 0] },
          { t: 'seg', a: [0, 0], b: [0, 16] },
          { t: 'arc', c: [0, 0], r: 16, from: 0, to: 90 },
          { t: 'right', at: [0, 0], from: [16, 0], to: [0, 16] },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'M', dx: 12, dy: 0 },
          { t: 'point', p: [0, 16], label: 'N', dx: -10, dy: -8 },
        ],
      },
      choices: ['$256\\pi$', '$128\\pi$', '$64\\pi$', '$8\\pi$'],
      answer: 2,
      solution:
        'One fourth of the full circle: $\\frac{1}{4} \\cdot \\pi \\cdot 16^2 = \\frac{256\\pi}{4} = 64\\pi$ ✓. Confirm by two halvings: the whole circle is $256\\pi$, the half is $128\\pi$, and halving again lands on $64\\pi$ ✓. (The choice $256\\pi$ is the WHOLE CIRCLE ✗; $128\\pi$ STOPS AT THE HALF circle ✗; $8\\pi$ is a quarter of the CIRCUMFERENCE $32\\pi$ — the bed’s curved border, not its area ✗.)',
    },
  ],
  // s4 — semicircle area from its diameter.
  [
    {
      q: 'A semicircular tunnel entrance is built on a diameter of length $12$. What is the area of the semicircle?',
      choices: ['$18\\pi$', '$72\\pi$', '$36\\pi$', '$6\\pi$'],
      answer: 0,
      solution:
        'Convert to the radius before anything else: the diameter is $12$, so the radius is $6$. The full circle would have area $\\pi \\cdot 6^2 = 36\\pi$, and half of that is $18\\pi$ ✓. Re-check straight from the diameter with the one-line formula $\\frac{\\pi d^2}{8} = \\frac{144\\pi}{8} = 18\\pi$ ✓. (The choice $72\\pi$ SQUARES THE DIAMETER as if it were the radius, then halves ✗; $36\\pi$ is the FULL CIRCLE, never cut in half ✗; $6\\pi$ is half the CIRCUMFERENCE $12\\pi$ — a length, not an area ✗.)',
    },
    {
      q: 'A protractor is shaped like a semicircle whose straight edge — its diameter — measures $16$. What is the protractor’s area?',
      choices: ['$64\\pi$', '$128\\pi$', '$32\\pi$', '$8\\pi$'],
      answer: 2,
      solution:
        'The diameter is $16$, so the radius is $8$; the full circle would be $\\pi \\cdot 8^2 = 64\\pi$, and the semicircle is half of it, $32\\pi$ ✓. The diameter formula agrees: $\\frac{\\pi d^2}{8} = \\frac{256\\pi}{8} = 32\\pi$ ✓. (The choice $128\\pi$ SQUARES THE DIAMETER before halving ✗; $64\\pi$ is the FULL CIRCLE ✗; $8\\pi$ is half the CIRCUMFERENCE $16\\pi$, a length ✗.)',
    },
    {
      q: 'A semicircular patio extends from the straight side of a house; that straight side, the patio’s diameter, is $20$ long. What is the area of the patio?',
      choices: ['$100\\pi$', '$50\\pi$', '$200\\pi$', '$10\\pi$'],
      answer: 1,
      solution:
        'Radius first: half of the $20$ diameter is $10$, so the full circle would be $\\pi \\cdot 10^2 = 100\\pi$ and the patio is half, $50\\pi$ ✓. Straight from the diameter: $\\frac{\\pi d^2}{8} = \\frac{400\\pi}{8} = 50\\pi$ ✓. (The choice $200\\pi$ SQUARES THE DIAMETER as a radius and halves ✗; $100\\pi$ is the FULL CIRCLE with no halving ✗; $10\\pi$ is half the CIRCUMFERENCE $20\\pi$ — the curved edge’s length, not the floor area ✗.)',
    },
  ],
  // s5 — circular segment between chord AB and arc AB, OA ⊥ OB (figure).
  [
    {
      q: 'In the circle with center $O$ and radius $14$ shown, radii $\\overline{OA}$ and $\\overline{OB}$ are perpendicular. What is the area of the circular segment between chord $\\overline{AB}$ and arc $AB$?',
      fig: {
        view: [-17.5, -17.5, 17.5, 17.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 14 },
          { t: 'seg', a: [0, 0], b: [14, 0] },
          { t: 'seg', a: [0, 0], b: [0, 14] },
          { t: 'seg', a: [14, 0], b: [0, 14] },
          { t: 'angle', at: [0, 0], from: [14, 0], to: [0, 14], r: 3.5, label: '90' },
          { t: 'label', p: [7, 0], text: '14', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [0, 14], label: 'B', dx: 0, dy: -12 },
        ],
      },
      choices: ['$49\\pi$', '$49\\pi - 98$', '$98$', '$49\\pi + 98$'],
      answer: 1,
      solution:
        'Plan: segment $=$ sector $-$ triangle. The $90^\\circ$ sector is a quarter circle: $\\frac{1}{4} \\cdot \\pi \\cdot 14^2 = 49\\pi$. Right triangle $AOB$ has legs $14$ and $14$: area $\\frac{1}{2} \\cdot 14 \\cdot 14 = 98$. Segment: $49\\pi - 98$ ✓. Rebuild the triangle by chord and height to confirm: chord $AB = 14\\sqrt{2}$ and the center sits $7\\sqrt{2}$ from it, so the triangle is $\\frac{1}{2} \\cdot 14\\sqrt{2} \\cdot 7\\sqrt{2} = 98$ again, and $49\\pi - 98 \\approx 55.9$ is a believable bite of the circle ✓. (The choice $49\\pi$ is the SECTOR ALONE, with the triangle never carved away ✗; $98$ is the TRIANGLE ALONE ✗; $49\\pi + 98$ ADDS the triangle instead of subtracting it ✗.)',
    },
    {
      q: 'Radii $\\overline{OP}$ and $\\overline{OQ}$ of a circle with center $O$ and radius $22$ are perpendicular, as shown. Find the area of the circular segment between chord $\\overline{PQ}$ and arc $PQ$.',
      fig: {
        view: [-26.5, -26.5, 26.5, 26.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 22 },
          { t: 'seg', a: [0, 0], b: [22, 0] },
          { t: 'seg', a: [0, 0], b: [0, 22] },
          { t: 'seg', a: [22, 0], b: [0, 22] },
          { t: 'angle', at: [0, 0], from: [22, 0], to: [0, 22], r: 5.5, label: '90' },
          { t: 'label', p: [11, 0], text: '22', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [22, 0], label: 'P', dx: 12, dy: 0 },
          { t: 'point', p: [0, 22], label: 'Q', dx: 0, dy: -12 },
        ],
      },
      choices: ['$121\\pi - 242$', '$121\\pi$', '$242$', '$121\\pi + 242$'],
      answer: 0,
      solution:
        'Segment $=$ sector $-$ triangle. The $90^\\circ$ sector is $\\frac{1}{4} \\cdot \\pi \\cdot 22^2 = 121\\pi$, and right triangle $POQ$ with legs $22$ and $22$ has area $\\frac{1}{2} \\cdot 22 \\cdot 22 = 242$, so the segment is $121\\pi - 242$ ✓. Recompute the triangle from the chord: $PQ = 22\\sqrt{2}$, the center lies $11\\sqrt{2}$ away, and $\\frac{1}{2} \\cdot 22\\sqrt{2} \\cdot 11\\sqrt{2} = 242$ — same triangle, different arithmetic, and $121\\pi - 242 \\approx 138.1$ stays sensibly positive ✓. (The choice $121\\pi$ is the SECTOR ALONE ✗; $242$ is the TRIANGLE ALONE ✗; $121\\pi + 242$ ADDS the triangle it should remove ✗.)',
    },
    {
      q: 'The circle shown has center $O$ and radius $20$, with $\\overline{OA} \\perp \\overline{OB}$. What is the area of the region between chord $\\overline{AB}$ and arc $AB$ (the circular segment)?',
      fig: {
        view: [-24, -24, 24, 24],
        elems: [
          { t: 'circle', c: [0, 0], r: 20 },
          { t: 'seg', a: [0, 0], b: [20, 0] },
          { t: 'seg', a: [0, 0], b: [0, 20] },
          { t: 'seg', a: [20, 0], b: [0, 20] },
          { t: 'angle', at: [0, 0], from: [20, 0], to: [0, 20], r: 5, label: '90' },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [20, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [0, 20], label: 'B', dx: 0, dy: -12 },
        ],
      },
      choices: ['$100\\pi$', '$200$', '$100\\pi - 200$', '$100\\pi + 200$'],
      answer: 2,
      solution:
        'Segment $=$ sector $-$ triangle. The quarter-circle sector is $\\frac{1}{4} \\cdot \\pi \\cdot 20^2 = 100\\pi$, and right triangle $AOB$ has legs $20$ and $20$: area $\\frac{1}{2} \\cdot 20 \\cdot 20 = 200$. Segment: $100\\pi - 200$ ✓. Verify the triangle by chord and height: chord $AB = 20\\sqrt{2}$ with the center $10\\sqrt{2}$ away gives $\\frac{1}{2} \\cdot 20\\sqrt{2} \\cdot 10\\sqrt{2} = 200$ once more, so the subtraction stands, with $100\\pi - 200 \\approx 114.2$ ✓. (The choice $100\\pi$ is the SECTOR ALONE ✗; $200$ is the TRIANGLE ALONE ✗; $100\\pi + 200$ ADDS instead of subtracting ✗.)',
    },
  ],
  // s6 — circle minus inscribed square (figure).
  [
    {
      q: 'A square is inscribed in a circle of radius $8$, with all four vertices on the circle as shown. What is the area inside the circle but outside the square?',
      fig: {
        view: [-10, -10, 10, 10],
        elems: [
          { t: 'circle', c: [0, 0], r: 8 },
          { t: 'poly', pts: [[5.6569, 5.6569], [-5.6569, 5.6569], [-5.6569, -5.6569], [5.6569, -5.6569]], fill: false },
          { t: 'seg', a: [-5.6569, -5.6569], b: [5.6569, 5.6569], dash: true },
          { t: 'label', p: [2.8284, 2.8284], text: '16', dx: 14, dy: 6 },
          { t: 'point', p: [0, 0], label: 'O', dx: -14, dy: -2 },
          { t: 'point', p: [5.6569, 5.6569], label: 'A', dx: 10, dy: -8 },
          { t: 'point', p: [-5.6569, 5.6569], label: 'B', dx: -10, dy: -8 },
          { t: 'point', p: [-5.6569, -5.6569], label: 'C', dx: -10, dy: 10 },
          { t: 'point', p: [5.6569, -5.6569], label: 'D', dx: 10, dy: 10 },
        ],
      },
      choices: ['$64\\pi - 256$', '$64\\pi - 64$', '$128 - 64\\pi$', '$64\\pi - 128$'],
      answer: 3,
      solution:
        'The square’s diagonal $\\overline{CA}$ is a diameter of the circle, so it has length $16$, and a square with diagonal $d$ has area $\\frac{d^2}{2} = \\frac{256}{2} = 128$. The circle has area $\\pi \\cdot 8^2 = 64\\pi$, so the leftover region is $64\\pi - 128$ ✓. Re-derive the square from its side: the side is $\\frac{16}{\\sqrt{2}} = 8\\sqrt{2}$, and $(8\\sqrt{2})^2 = 128$ — the same square area by a second route, and $64\\pi - 128 \\approx 73.1$ is positive, as four bulging slivers should be ✓. (The choice $64\\pi - 256$ TREATS THE DIAGONAL AS A SIDE and subtracts a square twice too big ✗; $64\\pi - 64$ USES THE RADIUS AS THE SIDE of the square ✗; $128 - 64\\pi$ SUBTRACTS IN THE WRONG ORDER and comes out negative ✗.)',
    },
    {
      q: 'The square shown is inscribed in a circle of radius $12$, its vertices on the circle. Find the area of the region inside the circle but outside the square.',
      fig: {
        view: [-14, -14, 14, 14],
        elems: [
          { t: 'circle', c: [0, 0], r: 12 },
          { t: 'poly', pts: [[8.4853, 8.4853], [-8.4853, 8.4853], [-8.4853, -8.4853], [8.4853, -8.4853]], fill: false },
          { t: 'seg', a: [-8.4853, -8.4853], b: [8.4853, 8.4853], dash: true },
          { t: 'label', p: [4.2427, 4.2427], text: '24', dx: 14, dy: 6 },
          { t: 'point', p: [0, 0], label: 'O', dx: -14, dy: -2 },
          { t: 'point', p: [8.4853, 8.4853], label: 'P', dx: 10, dy: -8 },
          { t: 'point', p: [-8.4853, 8.4853], label: 'Q', dx: -10, dy: -8 },
          { t: 'point', p: [-8.4853, -8.4853], label: 'R', dx: -10, dy: 10 },
          { t: 'point', p: [8.4853, -8.4853], label: 'S', dx: 10, dy: 10 },
        ],
      },
      choices: ['$144\\pi - 576$', '$144\\pi - 144$', '$144\\pi - 288$', '$288 - 144\\pi$'],
      answer: 2,
      solution:
        'The diagonal $\\overline{RP}$ is a diameter, length $24$, so the square’s area is $\\frac{d^2}{2} = \\frac{576}{2} = 288$; the circle’s is $\\pi \\cdot 12^2 = 144\\pi$; the leftover is $144\\pi - 288$ ✓. Second route through the side: the side is $\\frac{24}{\\sqrt{2}} = 12\\sqrt{2}$, and $(12\\sqrt{2})^2 = 288$ once more, so $144\\pi - 288 \\approx 164.4$, comfortably positive ✓. (The choice $144\\pi - 576$ TREATS THE DIAGONAL AS A SIDE ✗; $144\\pi - 144$ USES THE RADIUS AS THE SIDE ✗; $288 - 144\\pi$ is the subtraction REVERSED, a negative area ✗.)',
    },
    {
      q: 'A square sits inscribed in a circle of radius $15$, all four corners on the circle as shown. What is the total area of the four regions inside the circle but outside the square?',
      fig: {
        view: [-17.5, -17.5, 17.5, 17.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 15 },
          { t: 'poly', pts: [[10.6066, 10.6066], [-10.6066, 10.6066], [-10.6066, -10.6066], [10.6066, -10.6066]], fill: false },
          { t: 'seg', a: [-10.6066, -10.6066], b: [10.6066, 10.6066], dash: true },
          { t: 'label', p: [5.3033, 5.3033], text: '30', dx: 14, dy: 6 },
          { t: 'point', p: [0, 0], label: 'O', dx: -14, dy: -2 },
          { t: 'point', p: [10.6066, 10.6066], label: 'W', dx: 10, dy: -8 },
          { t: 'point', p: [-10.6066, 10.6066], label: 'X', dx: -10, dy: -8 },
          { t: 'point', p: [-10.6066, -10.6066], label: 'Y', dx: -10, dy: 10 },
          { t: 'point', p: [10.6066, -10.6066], label: 'Z', dx: 10, dy: 10 },
        ],
      },
      choices: ['$225\\pi - 450$', '$225\\pi - 900$', '$225\\pi - 225$', '$450 - 225\\pi$'],
      answer: 0,
      solution:
        'The diagonal $\\overline{YW}$ runs through the center, so it is a diameter of length $30$, giving the square area $\\frac{d^2}{2} = \\frac{900}{2} = 450$. The circle is $\\pi \\cdot 15^2 = 225\\pi$, so the four outside regions total $225\\pi - 450$ ✓. Confirm through the side: $\\frac{30}{\\sqrt{2}} = 15\\sqrt{2}$, and $(15\\sqrt{2})^2 = 450$ again, so $225\\pi - 450 \\approx 256.9$ — positive, as it must be ✓. (The choice $225\\pi - 900$ TREATS THE DIAGONAL AS A SIDE ✗; $225\\pi - 225$ USES THE RADIUS AS THE SIDE ✗; $450 - 225\\pi$ REVERSES the subtraction and goes negative ✗.)',
    },
  ],
  // s7 — circular segment with a non-right central angle (figure).
  [
    {
      q: 'In the circle with center $O$ and radius $6$, central angle $\\angle AOB = 120^\\circ$, as shown. What is the area of the circular segment between chord $\\overline{AB}$ and arc $AB$?',
      fig: {
        view: [-7.5, -7.5, 7.5, 7.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'seg', a: [0, 0], b: [6, 0] },
          { t: 'seg', a: [0, 0], b: [-3, 5.1962] },
          { t: 'seg', a: [6, 0], b: [-3, 5.1962] },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [-3, 5.1962], r: 1.4, label: '120' },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [-3, 5.1962], label: 'B', dx: -8, dy: -10 },
        ],
      },
      choices: ['$12\\pi - 9\\sqrt{3}$', '$12\\pi$', '$12\\pi - 18$', '$12\\pi - 9$'],
      answer: 0,
      solution:
        'Segment $=$ sector $-$ triangle. The $120^\\circ$ sector is $\\frac{120}{360} = \\frac{1}{3}$ of the circle: $\\frac{1}{3} \\cdot 36\\pi = 12\\pi$. Triangle $AOB$ has two sides of $6$ with $120^\\circ$ between them: $\\frac{1}{2} \\cdot 6 \\cdot 6 \\cdot \\sin 120^\\circ = 18 \\cdot \\frac{\\sqrt{3}}{2} = 9\\sqrt{3}$. Segment: $12\\pi - 9\\sqrt{3}$ ✓. Rebuild the triangle by chord and apothem: half the chord is $6 \\sin 60^\\circ = 3\\sqrt{3}$, so the chord is $6\\sqrt{3}$, the center sits $6 \\cos 60^\\circ = 3$ from it, and $\\frac{1}{2} \\cdot 6\\sqrt{3} \\cdot 3 = 9\\sqrt{3}$ once more ✓. (The choice $12\\pi$ is the SECTOR ALONE ✗; $12\\pi - 18$ PRETENDS THE TRIANGLE IS RIGHT and uses $\\frac{1}{2}r^2$ ✗; $12\\pi - 9$ SWAPS $\\sin 120^\\circ$ FOR $\\frac{1}{2}$, the value of $\\sin 30^\\circ$ ✗.)',
    },
    {
      q: 'A circle with center $O$ has radius $12$, and radii $\\overline{OP}$ and $\\overline{OQ}$ make a central angle of $120^\\circ$, as shown. Find the area of the circular segment between chord $\\overline{PQ}$ and arc $PQ$.',
      fig: {
        view: [-14.5, -14.5, 14.5, 14.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 12 },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [-6, 10.3923] },
          { t: 'seg', a: [12, 0], b: [-6, 10.3923] },
          { t: 'angle', at: [0, 0], from: [12, 0], to: [-6, 10.3923], r: 2.8, label: '120' },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'P', dx: 12, dy: 0 },
          { t: 'point', p: [-6, 10.3923], label: 'Q', dx: -8, dy: -10 },
        ],
      },
      choices: ['$48\\pi$', '$48\\pi - 72$', '$48\\pi - 36$', '$48\\pi - 36\\sqrt{3}$'],
      answer: 3,
      solution:
        'The $120^\\circ$ sector is a third of the circle: $\\frac{1}{3} \\cdot 144\\pi = 48\\pi$. Triangle $POQ$ has two sides of $12$ enclosing $120^\\circ$: $\\frac{1}{2} \\cdot 12 \\cdot 12 \\cdot \\sin 120^\\circ = 72 \\cdot \\frac{\\sqrt{3}}{2} = 36\\sqrt{3}$. Segment: $48\\pi - 36\\sqrt{3}$ ✓. Check the triangle by chord and apothem: half-chord $12 \\sin 60^\\circ = 6\\sqrt{3}$ makes the chord $12\\sqrt{3}$, the apothem is $12 \\cos 60^\\circ = 6$, and $\\frac{1}{2} \\cdot 12\\sqrt{3} \\cdot 6 = 36\\sqrt{3}$ agrees ✓. (The choice $48\\pi$ is the SECTOR ALONE ✗; $48\\pi - 72$ PRETENDS THE TRIANGLE IS RIGHT with $\\frac{1}{2}r^2$ ✗; $48\\pi - 36$ SWAPS $\\sin 120^\\circ$ FOR $\\frac{1}{2}$ ✗.)',
    },
    {
      q: 'In the circle shown, with center $O$ and radius $12$, the central angle $\\angle AOB$ measures $150^\\circ$. What is the area of the circular segment between chord $\\overline{AB}$ and arc $AB$?',
      fig: {
        view: [-14.5, -14.5, 14.5, 14.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 12 },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [-10.3923, 6] },
          { t: 'seg', a: [12, 0], b: [-10.3923, 6] },
          { t: 'angle', at: [0, 0], from: [12, 0], to: [-10.3923, 6], r: 2.8, label: '150' },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -8, dy: 12 },
          { t: 'point', p: [12, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [-10.3923, 6], label: 'B', dx: -10, dy: -10 },
        ],
      },
      choices: ['$60\\pi$', '$60\\pi - 36$', '$60\\pi - 72$', '$60\\pi - 36\\sqrt{3}$'],
      answer: 1,
      solution:
        'The $150^\\circ$ sector is $\\frac{150}{360} = \\frac{5}{12}$ of the circle: $\\frac{5}{12} \\cdot 144\\pi = 60\\pi$. Triangle $AOB$ has two sides of $12$ enclosing $150^\\circ$: $\\frac{1}{2} \\cdot 12 \\cdot 12 \\cdot \\sin 150^\\circ = 72 \\cdot \\frac{1}{2} = 36$. Segment: $60\\pi - 36$ ✓. Re-check the triangle by base and height: take $\\overline{OA}$ as the base; the height from $B$ to that line is $12 \\sin 30^\\circ = 6$, so the area is $\\frac{1}{2} \\cdot 12 \\cdot 6 = 36$ again ✓. (The choice $60\\pi$ is the SECTOR ALONE ✗; $60\\pi - 72$ PRETENDS THE TRIANGLE IS RIGHT and uses $\\frac{1}{2}r^2$ ✗; $60\\pi - 36\\sqrt{3}$ SWAPS $\\sin 150^\\circ$ FOR $\\sin 60^\\circ$ ✗.)',
    },
  ],
  // s8 — ring from the outer circumference and inner radius.
  [
    {
      q: 'Two circles share a center. The outer circle has circumference $16\\pi$, and the inner circle has radius $5$. What is the area of the ring between them?',
      choices: ['$231\\pi$', '$9\\pi$', '$39\\pi$', '$64\\pi$'],
      answer: 2,
      solution:
        'Decode the outer radius first: $2\\pi R = 16\\pi$ gives $R = 8$. Ring $= \\pi \\cdot 8^2 - \\pi \\cdot 5^2 = 64\\pi - 25\\pi = 39\\pi$ ✓. Re-check by factoring: $\\pi(8 - 5)(8 + 5) = \\pi \\cdot 3 \\cdot 13 = 39\\pi$ ✓. (The choice $231\\pi$ USES THE CIRCUMFERENCE NUMBER AS A RADIUS, computing $256\\pi - 25\\pi$ ✗; $9\\pi$ is $\\pi(8 - 5)^2$, the SUBTRACT-BEFORE-SQUARING trap ✗; $64\\pi$ is the outer circle with the hole NEVER SUBTRACTED ✗.)',
    },
    {
      q: 'A circular fountain stands at the exact center of a circular plaza. The plaza’s outer edge has circumference $24\\pi$, and the fountain has radius $7$. What is the area of plaza pavement around the fountain?',
      choices: ['$527\\pi$', '$25\\pi$', '$144\\pi$', '$95\\pi$'],
      answer: 3,
      solution:
        'Decode the plaza’s radius from its circumference: $2\\pi R = 24\\pi$ gives $R = 12$. Pavement $=$ plaza $-$ fountain $= \\pi \\cdot 12^2 - \\pi \\cdot 7^2 = 144\\pi - 49\\pi = 95\\pi$ ✓. Factor to confirm: $\\pi(12 - 7)(12 + 7) = \\pi \\cdot 5 \\cdot 19 = 95\\pi$ ✓. (The choice $527\\pi$ USES THE CIRCUMFERENCE NUMBER AS A RADIUS, $576\\pi - 49\\pi$ ✗; $25\\pi$ is $\\pi(12 - 7)^2$, SUBTRACT-BEFORE-SQUARING ✗; $144\\pi$ NEVER SUBTRACTS the fountain ✗.)',
    },
    {
      q: 'A round pond has a small circular island at its exact center. The pond’s outer circumference is $22\\pi$, and the island has radius $4$. What is the area of the water?',
      choices: ['$121\\pi$', '$105\\pi$', '$49\\pi$', '$468\\pi$'],
      answer: 1,
      solution:
        'The pond’s radius comes from its circumference: $2\\pi R = 22\\pi$ gives $R = 11$. Water $=$ pond $-$ island $= \\pi \\cdot 11^2 - \\pi \\cdot 4^2 = 121\\pi - 16\\pi = 105\\pi$ ✓. Factored re-count: $\\pi(11 - 4)(11 + 4) = \\pi \\cdot 7 \\cdot 15 = 105\\pi$ ✓. (The choice $121\\pi$ is the whole pond, NEVER SUBTRACTING the island ✗; $49\\pi$ is $\\pi(11 - 4)^2$, the SUBTRACT-BEFORE-SQUARING trap ✗; $468\\pi$ USES THE CIRCUMFERENCE NUMBER AS A RADIUS, $484\\pi - 16\\pi$ ✗.)',
    },
  ],
  // s9 — lens overlap of two quarter circles in a square (figure).
  [
    {
      q: 'In square $ABCD$ with side $6$, a quarter circle of radius $6$ centered at $A$ and another centered at $C$ are drawn, as shown. What is the area of the lens-shaped overlap of the two quarter circles?',
      fig: {
        view: [-1, -1, 7, 7],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 6], [0, 6]], fill: false },
          { t: 'arc', c: [0, 0], r: 6, from: 0, to: 90 },
          { t: 'arc', c: [6, 6], r: 6, from: 180, to: 270 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'B', dx: 12, dy: 8 },
          { t: 'point', p: [6, 6], label: 'C', dx: 12, dy: -8 },
          { t: 'point', p: [0, 6], label: 'D', dx: -10, dy: -8 },
        ],
      },
      choices: ['$36 - 18\\pi$', '$18\\pi - 36$', '$9\\pi$', '$18\\pi$'],
      answer: 1,
      solution:
        'Each quarter circle has area $\\frac{1}{4} \\cdot 36\\pi = 9\\pi$, and together the two cover the whole square while overlapping only in the lens: (quarter) $+$ (quarter) $=$ (square) $+$ (overlap), so the overlap is $9\\pi + 9\\pi - 36 = 18\\pi - 36$ ✓. Build it a second way from circular segments: each half of the lens is a quarter circle minus the right triangle on diagonal $\\overline{BD}$, which is $9\\pi - \\frac{1}{2} \\cdot 6 \\cdot 6 = 9\\pi - 18$, and two such segments give $18\\pi - 36$ again ✓. (The choice $36 - 18\\pi$ is the subtraction REVERSED — it is negative ✗; $9\\pi$ is ONE QUARTER CIRCLE, not the overlap ✗; $18\\pi$ adds the quarters but NEVER SUBTRACTS THE SQUARE ✗.)',
    },
    {
      q: 'Square $PQRS$ has side $8$. One quarter circle of radius $8$ is centered at $P$ and another at the opposite corner $R$, as shown. Find the area of the lens-shaped region where the two quarter circles overlap.',
      fig: {
        view: [-1, -1, 9, 9],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 8], [0, 8]], fill: false },
          { t: 'arc', c: [0, 0], r: 8, from: 0, to: 90 },
          { t: 'arc', c: [8, 8], r: 8, from: 180, to: 270 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'Q', dx: 12, dy: 8 },
          { t: 'point', p: [8, 8], label: 'R', dx: 12, dy: -8 },
          { t: 'point', p: [0, 8], label: 'S', dx: -10, dy: -8 },
        ],
      },
      choices: ['$64 - 32\\pi$', '$16\\pi$', '$32\\pi - 64$', '$32\\pi$'],
      answer: 2,
      solution:
        'Each quarter circle is $\\frac{1}{4} \\cdot 64\\pi = 16\\pi$, and the two of them tile the square except that the lens is covered twice: $16\\pi + 16\\pi = 64 + \\text{overlap}$, so the overlap is $32\\pi - 64$ ✓. Segment route as a cross-check: half the lens is a quarter circle minus the triangle on diagonal $\\overline{QS}$, $16\\pi - \\frac{1}{2} \\cdot 8 \\cdot 8 = 16\\pi - 32$, and doubling gives $32\\pi - 64 \\approx 36.5$, a bit more than half the square — matching the picture ✓. (The choice $64 - 32\\pi$ is REVERSED and negative ✗; $16\\pi$ is ONE QUARTER CIRCLE by itself ✗; $32\\pi$ adds the two quarters and NEVER SUBTRACTS THE SQUARE ✗.)',
    },
    {
      q: 'In square $WXYZ$ with side $10$, quarter circles of radius $10$ are drawn centered at the opposite corners $W$ and $Y$, as shown. What is the area of the overlap of the two quarter circles (the lens in the middle)?',
      fig: {
        view: [-1.5, -1.5, 11.5, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 10], [0, 10]], fill: false },
          { t: 'arc', c: [0, 0], r: 10, from: 0, to: 90 },
          { t: 'arc', c: [10, 10], r: 10, from: 180, to: 270 },
          { t: 'label', p: [5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'W', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'X', dx: 12, dy: 8 },
          { t: 'point', p: [10, 10], label: 'Y', dx: 12, dy: -8 },
          { t: 'point', p: [0, 10], label: 'Z', dx: -10, dy: -8 },
        ],
      },
      choices: ['$50\\pi - 100$', '$100 - 50\\pi$', '$25\\pi$', '$50\\pi$'],
      answer: 0,
      solution:
        'Each quarter circle has area $\\frac{1}{4} \\cdot 100\\pi = 25\\pi$; the two together blanket the square, double-counting only the lens, so the lens is $25\\pi + 25\\pi - 100 = 50\\pi - 100$ ✓. Confirm by segments: half the lens is a quarter circle minus the triangle on diagonal $\\overline{XZ}$, $25\\pi - \\frac{1}{2} \\cdot 10 \\cdot 10 = 25\\pi - 50$, and two halves make $50\\pi - 100 \\approx 57.1$, just over half the square ✓. (The choice $100 - 50\\pi$ is the REVERSED subtraction, a negative number ✗; $25\\pi$ is ONE QUARTER CIRCLE ✗; $50\\pi$ NEVER SUBTRACTS THE SQUARE ✗.)',
    },
  ],
  // s10 — big circle containing two half-size circles side by side (figure).
  [
    {
      q: 'A round cookie of radius $8$ is decorated with two circular chocolate disks of radius $4$ set side by side, each touching the cookie’s edge and each other, as shown. What area of the cookie is left uncovered?',
      fig: {
        view: [-9.5, -9.5, 9.5, 9.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 8 },
          { t: 'circle', c: [-4, 0], r: 4 },
          { t: 'circle', c: [4, 0], r: 4 },
          { t: 'seg', a: [4, 0], b: [8, 0], dash: true },
          { t: 'label', p: [6, 0], text: '4', dx: 0, dy: -10 },
          { t: 'seg', a: [0, 0], b: [0, 8], dash: true },
          { t: 'label', p: [0, 5], text: '8', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 16 },
          { t: 'point', p: [-4, 0], label: 'P', dx: -12, dy: 8 },
          { t: 'point', p: [4, 0], label: 'Q', dx: 12, dy: 8 },
        ],
      },
      choices: ['$32\\pi$', '$48\\pi$', '$16\\pi$', '$96\\pi$'],
      answer: 0,
      solution:
        'Whole minus parts: $\\pi \\cdot 8^2 - 2 \\cdot \\pi \\cdot 4^2 = 64\\pi - 32\\pi = 32\\pi$ ✓. Re-check by scaling: halving a radius quarters an area, so each disk is $\\frac{1}{4}$ of the cookie and the pair covers $\\frac{1}{2}$ of it — the uncovered part is the other half, $\\frac{1}{2} \\cdot 64\\pi = 32\\pi$ ✓. (The choice $48\\pi$ SUBTRACTS ONLY ONE disk, $64\\pi - 16\\pi$ ✗; $16\\pi$ is ONE DISK, the wrong region entirely ✗; $96\\pi$ ADDS the disks to the cookie instead of removing them ✗.)',
    },
    {
      q: 'Inside a circular tabletop of radius $10$ sit two circular serving trays of radius $5$, side by side so that each touches the table’s rim and the other tray, as shown. How much tabletop area is not covered by a tray?',
      fig: {
        view: [-12, -12, 12, 12],
        elems: [
          { t: 'circle', c: [0, 0], r: 10 },
          { t: 'circle', c: [-5, 0], r: 5 },
          { t: 'circle', c: [5, 0], r: 5 },
          { t: 'seg', a: [5, 0], b: [10, 0], dash: true },
          { t: 'label', p: [7.5, 0], text: '5', dx: 0, dy: -10 },
          { t: 'seg', a: [0, 0], b: [0, 10], dash: true },
          { t: 'label', p: [0, 6.5], text: '10', dx: 14, dy: 0 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 16 },
          { t: 'point', p: [-5, 0], label: 'M', dx: -12, dy: 8 },
          { t: 'point', p: [5, 0], label: 'N', dx: 12, dy: 8 },
        ],
      },
      choices: ['$75\\pi$', '$50\\pi$', '$25\\pi$', '$150\\pi$'],
      answer: 1,
      solution:
        'Whole minus parts: $\\pi \\cdot 10^2 - 2 \\cdot \\pi \\cdot 5^2 = 100\\pi - 50\\pi = 50\\pi$ ✓. Scaling confirms it: each tray’s radius is half the table’s, so each tray covers a quarter of the table’s area and the pair covers half, leaving the other half, $\\frac{1}{2} \\cdot 100\\pi = 50\\pi$ ✓. (The choice $75\\pi$ SUBTRACTS ONLY ONE tray ✗; $25\\pi$ is ONE TRAY, not the bare tabletop ✗; $150\\pi$ ADDS the trays instead of removing them ✗.)',
    },
    {
      q: 'A big circle of radius $12$ encloses two circles of radius $6$ set side by side, each tangent to the big circle and to each other, as shown. What is the area inside the big circle but outside both smaller circles?',
      fig: {
        view: [-14, -14, 14, 14],
        elems: [
          { t: 'circle', c: [0, 0], r: 12 },
          { t: 'circle', c: [-6, 0], r: 6 },
          { t: 'circle', c: [6, 0], r: 6 },
          { t: 'seg', a: [6, 0], b: [12, 0], dash: true },
          { t: 'label', p: [9, 0], text: '6', dx: 0, dy: -10 },
          { t: 'seg', a: [0, 0], b: [0, 12], dash: true },
          { t: 'label', p: [0, 8], text: '12', dx: 14, dy: 0 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 16 },
          { t: 'point', p: [-6, 0], label: 'P', dx: -12, dy: 8 },
          { t: 'point', p: [6, 0], label: 'Q', dx: 12, dy: 8 },
        ],
      },
      choices: ['$108\\pi$', '$36\\pi$', '$216\\pi$', '$72\\pi$'],
      answer: 3,
      solution:
        'Whole minus parts: $\\pi \\cdot 12^2 - 2 \\cdot \\pi \\cdot 6^2 = 144\\pi - 72\\pi = 72\\pi$ ✓. Scaling gives the same answer without any squaring: each small circle has half the radius, hence a quarter of the area, so the two together cover exactly half of $144\\pi$, and the region left over is the other half, $72\\pi$ ✓. (The choice $108\\pi$ SUBTRACTS ONLY ONE small circle, $144\\pi - 36\\pi$ ✗; $36\\pi$ is ONE SMALL CIRCLE, the wrong region ✗; $216\\pi$ ADDS all three circles together ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 11,
  sections: {
    '11.3': s113,
  },
}
