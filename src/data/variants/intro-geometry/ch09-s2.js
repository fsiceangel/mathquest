// Introduction to Geometry chapter 9 — variations for section 9.2 (Angles in a Polygon).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed value was worked twice by routes that do not share arithmetic:
//    the triangle-split count against the boundary-walk total 180n - 360, the
//    regular-angle quotient against the exterior-partner subtraction, an
//    algebraic angle sum against a fraction-of-the-whole share, a straight
//    subtraction against an average-and-deviations count. Both routes must
//    agree before a key is written down, and every solution rebuilds its sum.
//  - Regular polygons are drawn on circumscribed circles of radius 3, so every
//    marked angle and every tick-marked side is what the label claims.
//    Irregular polygons were solved from their stated interior angles
//    (closure of the side vectors), so drawn angles match labels to well
//    under a degree. Exterior angles are drawn with one genuinely extended side.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.

const s92 = [
  // s1 — interior angle sum via the triangle split from one vertex.
  [
    {
      q: 'A beekeeper sketches one hexagonal cell of a honeycomb and adds wax strut lines from corner $A$ to every corner it can reach, as shown. The struts split the cell into triangles. What is the sum of the interior angles of a hexagon?',
      fig: {
        view: [-3.3, -3, 3.6, 3],
        elems: [
          { t: 'poly', pts: [[3, 0], [1.5, 2.6], [-1.5, 2.6], [-3, 0], [-1.5, -2.6], [1.5, -2.6]], fill: false },
          { t: 'seg', a: [3, 0], b: [-1.5, 2.6], dash: true },
          { t: 'seg', a: [3, 0], b: [-3, 0], dash: true },
          { t: 'seg', a: [3, 0], b: [-1.5, -2.6], dash: true },
          { t: 'point', p: [3, 0], label: 'A', dx: 12, dy: 0 },
        ],
      },
      choices: ['$1080^\\circ$', '$900^\\circ$', '$720^\\circ$', '$360^\\circ$'],
      answer: 2,
      solution:
        'The three struts from $A$ cut the cell into $6 - 2 = 4$ triangles, and every scrap of every corner angle lands inside one of them, so the interior angles sum to $4 \\cdot 180^\\circ = 720^\\circ$ ✓. Check a second, independent way with a boundary walk: one lap around the cell turns you through $360^\\circ$ of exterior angle, and each interior angle is $180^\\circ$ minus a turn, so the sum is $6 \\cdot 180^\\circ - 360^\\circ = 1080^\\circ - 360^\\circ = 720^\\circ$ ✓. (The choice $1080^\\circ$ is USING $n$ TRIANGLES instead of $n - 2$ ✗; $900^\\circ$ is USING $n - 1$ TRIANGLES ✗; $360^\\circ$ is QUOTING THE EXTERIOR-ANGLE TOTAL, a different sum entirely ✗.)',
    },
    {
      q: 'A metalworker lays out a nonagon — nine sides — for a vent cover and scores guide lines from corner $A$ to every corner not beside it, as shown, splitting the plate into triangles. Use the triangles to find the sum of the interior angles of a nonagon.',
      fig: {
        view: [-3.3, -3.2, 3.3, 3.4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.93, 2.3], [-2.95, 0.52], [-2.6, -1.5], [-1.03, -2.82], [1.03, -2.82], [2.6, -1.5], [2.95, 0.52], [1.93, 2.3]], fill: false },
          { t: 'seg', a: [0, 3], b: [-2.95, 0.52], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.6, -1.5], dash: true },
          { t: 'seg', a: [0, 3], b: [-1.03, -2.82], dash: true },
          { t: 'seg', a: [0, 3], b: [1.03, -2.82], dash: true },
          { t: 'seg', a: [0, 3], b: [2.6, -1.5], dash: true },
          { t: 'seg', a: [0, 3], b: [2.95, 0.52], dash: true },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$1260^\\circ$', '$1620^\\circ$', '$1440^\\circ$', '$360^\\circ$'],
      answer: 0,
      solution:
        'The six score lines from $A$ split the nonagon into $9 - 2 = 7$ triangles, and the triangle angles tile the nonagon’s corners exactly, so the sum is $7 \\cdot 180^\\circ = 1260^\\circ$ ✓. Check a second, independent way with a boundary walk: a full lap spins you through $360^\\circ$ of exterior angle, so the interiors total $9 \\cdot 180^\\circ - 360^\\circ = 1620^\\circ - 360^\\circ = 1260^\\circ$ ✓. (The choice $1620^\\circ$ is USING $n$ TRIANGLES instead of $n - 2$ ✗; $1440^\\circ$ is USING $n - 1$ TRIANGLES ✗; $360^\\circ$ is QUOTING THE EXTERIOR-ANGLE TOTAL ✗.)',
    },
    {
      q: 'The rim of a clock face is a dodecagon — one side for each hour mark. The figure shows it fanned into triangles by the diagonals from the corner labeled $A$. What is the sum of the interior angles of a dodecagon?',
      fig: {
        view: [-3.4, -3.3, 3.4, 3.5],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.5, 2.6], [-2.6, 1.5], [-3, 0], [-2.6, -1.5], [-1.5, -2.6], [0, -3], [1.5, -2.6], [2.6, -1.5], [3, 0], [2.6, 1.5], [1.5, 2.6]], fill: false },
          { t: 'seg', a: [0, 3], b: [-2.6, 1.5], dash: true },
          { t: 'seg', a: [0, 3], b: [-3, 0], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.6, -1.5], dash: true },
          { t: 'seg', a: [0, 3], b: [-1.5, -2.6], dash: true },
          { t: 'seg', a: [0, 3], b: [0, -3], dash: true },
          { t: 'seg', a: [0, 3], b: [1.5, -2.6], dash: true },
          { t: 'seg', a: [0, 3], b: [2.6, -1.5], dash: true },
          { t: 'seg', a: [0, 3], b: [3, 0], dash: true },
          { t: 'seg', a: [0, 3], b: [2.6, 1.5], dash: true },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$2160^\\circ$', '$1980^\\circ$', '$360^\\circ$', '$1800^\\circ$'],
      answer: 3,
      solution:
        'The nine diagonals from $A$ fan the dodecagon into $12 - 2 = 10$ triangles — count them in the figure — so the interior angles total $10 \\cdot 180^\\circ = 1800^\\circ$ ✓. Check a second, independent way with a boundary walk: one full lap turns through $360^\\circ$, so the interiors total $12 \\cdot 180^\\circ - 360^\\circ = 2160^\\circ - 360^\\circ = 1800^\\circ$ ✓. (The choice $2160^\\circ$ is USING $n$ TRIANGLES instead of $n - 2$ ✗; $1980^\\circ$ is USING $n - 1$ TRIANGLES ✗; $360^\\circ$ is QUOTING THE EXTERIOR-ANGLE TOTAL ✗.)',
    },
  ],
  // s2 — each interior angle of a regular polygon.
  [
    {
      q: 'A metal sign blank is the regular octagon shown, with all eight sides congruent as the tick marks indicate. What is the measure of the marked interior angle?',
      fig: {
        view: [-3.2, -3.1, 3.2, 3.1],
        elems: [
          { t: 'poly', pts: [[2.772, 1.148], [1.148, 2.772], [-1.148, 2.772], [-2.772, 1.148], [-2.772, -1.148], [-1.148, -2.772], [1.148, -2.772], [2.772, -1.148]], fill: false },
          { t: 'angle', at: [2.772, 1.148], from: [2.772, -1.148], to: [1.148, 2.772], r: 0.85, label: '?' },
          { t: 'tick', a: [2.772, 1.148], b: [1.148, 2.772], n: 1 },
          { t: 'tick', a: [1.148, 2.772], b: [-1.148, 2.772], n: 1 },
          { t: 'tick', a: [-1.148, 2.772], b: [-2.772, 1.148], n: 1 },
          { t: 'tick', a: [-2.772, 1.148], b: [-2.772, -1.148], n: 1 },
          { t: 'tick', a: [-2.772, -1.148], b: [-1.148, -2.772], n: 1 },
          { t: 'tick', a: [-1.148, -2.772], b: [1.148, -2.772], n: 1 },
          { t: 'tick', a: [1.148, -2.772], b: [2.772, -1.148], n: 1 },
          { t: 'tick', a: [2.772, -1.148], b: [2.772, 1.148], n: 1 },
        ],
      },
      choices: ['$45^\\circ$', '$135^\\circ$', '$108^\\circ$', '$120^\\circ$'],
      answer: 1,
      solution:
        'The octagon’s interior angles total $(8 - 2) \\cdot 180^\\circ = 1080^\\circ$, and a regular octagon shares that evenly among $8$ corners: $\\frac{1080^\\circ}{8} = 135^\\circ$ ✓. Check a second, independent way through the exterior partner: each exterior angle of a regular octagon is $\\frac{360^\\circ}{8} = 45^\\circ$, and interior and exterior sit on a straight line, so the interior is $180^\\circ - 45^\\circ = 135^\\circ$ ✓. (The choice $45^\\circ$ is REPORTING THE EXTERIOR ANGLE ✗; $108^\\circ$ is BORROWING THE REGULAR PENTAGON’S ANGLE ✗; $120^\\circ$ is BORROWING THE REGULAR HEXAGON’S ANGLE ✗.)',
    },
    {
      q: 'A commemorative medallion is struck as the regular nonagon shown — nine congruent sides, marked with ticks. Find the measure of the interior angle marked with the question mark.',
      fig: {
        view: [-3.3, -3.1, 3.3, 3.4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.928, 2.298], [-2.954, 0.521], [-2.598, -1.5], [-1.026, -2.819], [1.026, -2.819], [2.598, -1.5], [2.954, 0.521], [1.928, 2.298]], fill: false },
          { t: 'angle', at: [0, 3], from: [-1.928, 2.298], to: [1.928, 2.298], r: 0.9, label: '?' },
          { t: 'tick', a: [0, 3], b: [-1.928, 2.298], n: 1 },
          { t: 'tick', a: [-1.928, 2.298], b: [-2.954, 0.521], n: 1 },
          { t: 'tick', a: [-2.954, 0.521], b: [-2.598, -1.5], n: 1 },
          { t: 'tick', a: [-2.598, -1.5], b: [-1.026, -2.819], n: 1 },
          { t: 'tick', a: [-1.026, -2.819], b: [1.026, -2.819], n: 1 },
          { t: 'tick', a: [1.026, -2.819], b: [2.598, -1.5], n: 1 },
          { t: 'tick', a: [2.598, -1.5], b: [2.954, 0.521], n: 1 },
          { t: 'tick', a: [2.954, 0.521], b: [1.928, 2.298], n: 1 },
          { t: 'tick', a: [1.928, 2.298], b: [0, 3], n: 1 },
        ],
      },
      choices: ['$40^\\circ$', '$135^\\circ$', '$144^\\circ$', '$140^\\circ$'],
      answer: 3,
      solution:
        'The nonagon’s interior angles total $(9 - 2) \\cdot 180^\\circ = 1260^\\circ$, split evenly among $9$ equal corners: $\\frac{1260^\\circ}{9} = 140^\\circ$ ✓. Check a second, independent way with the exterior partner: each exterior angle is $\\frac{360^\\circ}{9} = 40^\\circ$, so the interior is $180^\\circ - 40^\\circ = 140^\\circ$ ✓. (The choice $40^\\circ$ is REPORTING THE EXTERIOR ANGLE ✗; $135^\\circ$ is BORROWING THE REGULAR OCTAGON’S ANGLE ✗; $144^\\circ$ is BORROWING THE REGULAR DECAGON’S ANGLE ✗.)',
    },
    {
      q: 'A serving tray is cut as the regular dodecagon shown, its twelve congruent sides marked with ticks. What is the measure of the marked interior angle?',
      fig: {
        view: [-3.3, -3.2, 3.3, 3.4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.5, 2.598], [-2.598, 1.5], [-3, 0], [-2.598, -1.5], [-1.5, -2.598], [0, -3], [1.5, -2.598], [2.598, -1.5], [3, 0], [2.598, 1.5], [1.5, 2.598]], fill: false },
          { t: 'angle', at: [0, 3], from: [-1.5, 2.598], to: [1.5, 2.598], r: 0.8, label: '?' },
          { t: 'tick', a: [0, 3], b: [-1.5, 2.598], n: 1 },
          { t: 'tick', a: [-1.5, 2.598], b: [-2.598, 1.5], n: 1 },
          { t: 'tick', a: [-2.598, 1.5], b: [-3, 0], n: 1 },
          { t: 'tick', a: [-3, 0], b: [-2.598, -1.5], n: 1 },
          { t: 'tick', a: [-2.598, -1.5], b: [-1.5, -2.598], n: 1 },
          { t: 'tick', a: [-1.5, -2.598], b: [0, -3], n: 1 },
          { t: 'tick', a: [0, -3], b: [1.5, -2.598], n: 1 },
          { t: 'tick', a: [1.5, -2.598], b: [2.598, -1.5], n: 1 },
          { t: 'tick', a: [2.598, -1.5], b: [3, 0], n: 1 },
          { t: 'tick', a: [3, 0], b: [2.598, 1.5], n: 1 },
          { t: 'tick', a: [2.598, 1.5], b: [1.5, 2.598], n: 1 },
          { t: 'tick', a: [1.5, 2.598], b: [0, 3], n: 1 },
        ],
      },
      choices: ['$150^\\circ$', '$30^\\circ$', '$144^\\circ$', '$135^\\circ$'],
      answer: 0,
      solution:
        'The dodecagon’s interior angles total $(12 - 2) \\cdot 180^\\circ = 1800^\\circ$, and a regular dodecagon splits that evenly: $\\frac{1800^\\circ}{12} = 150^\\circ$ ✓. Check a second, independent way with the exterior partner: each exterior angle is $\\frac{360^\\circ}{12} = 30^\\circ$, so the interior is $180^\\circ - 30^\\circ = 150^\\circ$ ✓. (The choice $30^\\circ$ is REPORTING THE EXTERIOR ANGLE ✗; $144^\\circ$ is BORROWING THE REGULAR DECAGON’S ANGLE ✗; $135^\\circ$ is BORROWING THE REGULAR OCTAGON’S ANGLE ✗.)',
    },
  ],
  // s3 — the exterior-angle sum is 360 degrees no matter the side count.
  [
    {
      q: 'A muralist tapes off a convex $17$-sided border and walks it once, writing down the exterior angle at every corner as she turns through it. When she adds up all $17$ recorded angles, what total must she get?',
      choices: ['$360^\\circ$', '$2700^\\circ$', '$3060^\\circ$', '$720^\\circ$'],
      answer: 0,
      solution:
        'Each corner’s exterior angle is exactly the turn she makes there, and one complete trip around the border spins her through exactly one full rotation — so the $17$ turns must total $360^\\circ$, with the side count playing no role at all ✓. Check a second, independent way from the interior sum: the interiors total $(17 - 2) \\cdot 180^\\circ = 2700^\\circ$, each exterior is $180^\\circ$ minus its interior, and $17 \\cdot 180^\\circ - 2700^\\circ = 3060^\\circ - 2700^\\circ = 360^\\circ$ ✓. (The choice $2700^\\circ$ is REPORTING THE INTERIOR SUM ✗; $3060^\\circ$ is STOPPING AT $17 \\cdot 180^\\circ$ without subtracting the interiors ✗; $720^\\circ$ is CHARGING TWO FULL SPINS for a single lap ✗.)',
    },
    {
      q: 'A watchmaker files a gear blank into a convex $31$-gon and marks one exterior angle at each of its $31$ vertices. The angles come out in all different sizes, yet their total is forced. What is the sum of the $31$ exterior angles?',
      choices: ['$5580^\\circ$', '$180^\\circ$', '$360^\\circ$', '$5220^\\circ$'],
      answer: 2,
      solution:
        'Trace the blank’s edge once: at each vertex the edge direction swings through that vertex’s exterior angle, and after all $31$ vertices the direction has come back to its start — one full rotation, so the exterior angles total $360^\\circ$ whatever their individual sizes ✓. Check a second, independent way from the interior sum: the interiors total $(31 - 2) \\cdot 180^\\circ = 5220^\\circ$, so the exteriors total $31 \\cdot 180^\\circ - 5220^\\circ = 5580^\\circ - 5220^\\circ = 360^\\circ$ ✓. (The choice $5580^\\circ$ is STOPPING AT $31 \\cdot 180^\\circ$ ✗; $180^\\circ$ is CHARGING HALF A SPIN — a lap is a whole rotation, not half ✗; $5220^\\circ$ is REPORTING THE INTERIOR SUM ✗.)',
    },
    {
      q: 'A city plaza is bounded by a convex walkway with $45$ sides. A delivery drone flies the whole boundary once, pivoting at every vertex through that vertex’s exterior angle. What do the $45$ pivots add up to?',
      choices: ['$7740^\\circ$', '$360^\\circ$', '$8^\\circ$', '$8100^\\circ$'],
      answer: 1,
      solution:
        'After one complete circuit the drone faces its starting direction again, so its pivots must add up to exactly one full rotation: $360^\\circ$. Forty-five sides, three sides, three thousand sides — the total never budges ✓. Check a second, independent way from the interior sum: the interiors total $(45 - 2) \\cdot 180^\\circ = 7740^\\circ$, so the exteriors total $45 \\cdot 180^\\circ - 7740^\\circ = 8100^\\circ - 7740^\\circ = 360^\\circ$ ✓. (The choice $7740^\\circ$ is REPORTING THE INTERIOR SUM ✗; $8^\\circ$ is REPORTING ONE EXTERIOR ANGLE of a regular $45$-gon instead of the whole sum ✗; $8100^\\circ$ is STOPPING AT $45 \\cdot 180^\\circ$ ✗.)',
    },
  ],
  // s4 — each exterior angle of a regular polygon, drawn with an extended side.
  [
    {
      q: 'A regular pentagonal flower bed sits beside a straight walkway, and the figure shows one side of the bed extended along the walkway with dashes. What is the measure of the marked exterior angle?',
      fig: {
        view: [-3.2, -3.2, 3.8, 3.3],
        elems: [
          { t: 'poly', pts: [[0, 3], [-2.85, 0.93], [-1.76, -2.43], [1.76, -2.43], [2.85, 0.93]], fill: false },
          { t: 'seg', a: [1.76, -2.43], b: [3.4, -2.43], dash: true },
          { t: 'angle', at: [1.76, -2.43], from: [3.4, -2.43], to: [2.85, 0.93], r: 1, label: '?' },
        ],
      },
      choices: ['$108^\\circ$', '$36^\\circ$', '$60^\\circ$', '$72^\\circ$'],
      answer: 3,
      solution:
        'The five exterior angles of a regular pentagon are equal and total $360^\\circ$, so each one is $\\frac{360^\\circ}{5} = 72^\\circ$ ✓. Check a second, independent way through the interior: each interior angle is $\\frac{(5 - 2) \\cdot 180^\\circ}{5} = 108^\\circ$, and the exterior angle completes the straight line along the walkway: $180^\\circ - 108^\\circ = 72^\\circ$ ✓. (The choice $108^\\circ$ is REPORTING THE INTERIOR ANGLE ✗; $36^\\circ$ is SPLITTING $180^\\circ$ INSTEAD OF $360^\\circ$ among the five corners ✗; $60^\\circ$ is BORROWING THE REGULAR HEXAGON’S EXTERIOR ANGLE ✗.)',
    },
    {
      q: 'A mason sets a regular hexagonal paver against a chalk line, extending one side with dashes as shown. Find the measure of the marked exterior angle.',
      fig: {
        view: [-3.3, -3, 3.8, 2.9],
        elems: [
          { t: 'poly', pts: [[3, 0], [1.5, 2.6], [-1.5, 2.6], [-3, 0], [-1.5, -2.6], [1.5, -2.6]], fill: false },
          { t: 'seg', a: [1.5, -2.6], b: [3.4, -2.6], dash: true },
          { t: 'angle', at: [1.5, -2.6], from: [3.4, -2.6], to: [3, 0], r: 1, label: '?' },
        ],
      },
      choices: ['$120^\\circ$', '$60^\\circ$', '$30^\\circ$', '$72^\\circ$'],
      answer: 1,
      solution:
        'A regular hexagon’s six equal exterior angles must total $360^\\circ$, so each is $\\frac{360^\\circ}{6} = 60^\\circ$ ✓. Check a second, independent way through the interior: each interior angle is $\\frac{(6 - 2) \\cdot 180^\\circ}{6} = 120^\\circ$, and along the chalk line the exterior angle is its partner: $180^\\circ - 120^\\circ = 60^\\circ$ ✓. (The choice $120^\\circ$ is REPORTING THE INTERIOR ANGLE ✗; $30^\\circ$ is SPLITTING $180^\\circ$ INSTEAD OF $360^\\circ$ ✗; $72^\\circ$ is BORROWING THE REGULAR PENTAGON’S EXTERIOR ANGLE ✗.)',
    },
    {
      q: 'A commemorative token is a regular polygon with $20$ sides. In the figure, one side is extended with dashes past a vertex. What is the measure of the marked exterior angle?',
      fig: {
        view: [-3.2, -3.3, 3.9, 3.2],
        elems: [
          { t: 'poly', pts: [[2.96, 0.47], [2.67, 1.36], [2.12, 2.12], [1.36, 2.67], [0.47, 2.96], [-0.47, 2.96], [-1.36, 2.67], [-2.12, 2.12], [-2.67, 1.36], [-2.96, 0.47], [-2.96, -0.47], [-2.67, -1.36], [-2.12, -2.12], [-1.36, -2.67], [-0.47, -2.96], [0.47, -2.96], [1.36, -2.67], [2.12, -2.12], [2.67, -1.36], [2.96, -0.47]], fill: false },
          { t: 'seg', a: [0.47, -2.96], b: [2.5, -2.96], dash: true },
          { t: 'angle', at: [0.47, -2.96], from: [2.5, -2.96], to: [1.36, -2.67], r: 1.3, label: '?' },
        ],
      },
      choices: ['$162^\\circ$', '$9^\\circ$', '$18^\\circ$', '$36^\\circ$'],
      answer: 2,
      solution:
        'The $20$ equal exterior angles of a regular $20$-gon must total $360^\\circ$, so each is $\\frac{360^\\circ}{20} = 18^\\circ$ ✓. Check a second, independent way through the interior: each interior angle is $\\frac{(20 - 2) \\cdot 180^\\circ}{20} = \\frac{3240^\\circ}{20} = 162^\\circ$, and the exterior angle finishes the straight line: $180^\\circ - 162^\\circ = 18^\\circ$ ✓. (The choice $162^\\circ$ is REPORTING THE INTERIOR ANGLE ✗; $9^\\circ$ is SPLITTING $180^\\circ$ INSTEAD OF $360^\\circ$ ✗; $36^\\circ$ is USING HALF THE SIDE COUNT, $\\frac{360^\\circ}{10}$ ✗.)',
    },
  ],
  // s5 — interior angle sum of a bigger polygon.
  [
    {
      q: 'A surveyor’s map of an $11$-sided park is shown with sight lines drawn from corner $A$ to every corner visible from it, splitting the park into triangles. What is the sum of the interior angles of an $11$-gon?',
      fig: {
        view: [-3.3, -3.2, 3.3, 3.4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.62, 2.52], [-2.73, 1.25], [-2.97, -0.43], [-2.27, -1.96], [-0.85, -2.88], [0.85, -2.88], [2.27, -1.96], [2.97, -0.43], [2.73, 1.25], [1.62, 2.52]], fill: false },
          { t: 'seg', a: [0, 3], b: [-2.73, 1.25], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.97, -0.43], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.27, -1.96], dash: true },
          { t: 'seg', a: [0, 3], b: [-0.85, -2.88], dash: true },
          { t: 'seg', a: [0, 3], b: [0.85, -2.88], dash: true },
          { t: 'seg', a: [0, 3], b: [2.27, -1.96], dash: true },
          { t: 'seg', a: [0, 3], b: [2.97, -0.43], dash: true },
          { t: 'seg', a: [0, 3], b: [2.73, 1.25], dash: true },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$1620^\\circ$', '$1980^\\circ$', '$1800^\\circ$', '$1440^\\circ$'],
      answer: 0,
      solution:
        'The eight sight lines from $A$ split the park into $11 - 2 = 9$ triangles, and the triangle angles rebuild the park’s corners exactly, so the interior angles total $9 \\cdot 180^\\circ = 1620^\\circ$ ✓. Check a second, independent way with a boundary walk: one lap turns through $360^\\circ$ of exterior angle, so the interiors total $11 \\cdot 180^\\circ - 360^\\circ = 1980^\\circ - 360^\\circ = 1620^\\circ$ ✓. (The choice $1980^\\circ$ is USING $n$ TRIANGLES instead of $n - 2$ ✗; $1800^\\circ$ is USING $n - 1$ TRIANGLES ✗; $1440^\\circ$ is USING $n - 3$, overshooting the correction ✗.)',
    },
    {
      q: 'A stained-glass window is a $14$-sided polygon, and its lead cames run from corner $A$ to every other corner they can reach, as shown, dividing the glass into triangular panes. What is the sum of the interior angles of a $14$-gon?',
      fig: {
        view: [-3.3, -3.2, 3.3, 3.4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.3, 2.7], [-2.35, 1.87], [-2.92, 0.67], [-2.92, -0.67], [-2.35, -1.87], [-1.3, -2.7], [0, -3], [1.3, -2.7], [2.35, -1.87], [2.92, -0.67], [2.92, 0.67], [2.35, 1.87], [1.3, 2.7]], fill: false },
          { t: 'seg', a: [0, 3], b: [-2.35, 1.87], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.92, 0.67], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.92, -0.67], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.35, -1.87], dash: true },
          { t: 'seg', a: [0, 3], b: [-1.3, -2.7], dash: true },
          { t: 'seg', a: [0, 3], b: [0, -3], dash: true },
          { t: 'seg', a: [0, 3], b: [1.3, -2.7], dash: true },
          { t: 'seg', a: [0, 3], b: [2.35, -1.87], dash: true },
          { t: 'seg', a: [0, 3], b: [2.92, -0.67], dash: true },
          { t: 'seg', a: [0, 3], b: [2.92, 0.67], dash: true },
          { t: 'seg', a: [0, 3], b: [2.35, 1.87], dash: true },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$2520^\\circ$', '$2340^\\circ$', '$2160^\\circ$', '$360^\\circ$'],
      answer: 2,
      solution:
        'The eleven cames from $A$ divide the window into $14 - 2 = 12$ triangular panes, so the interior angles total $12 \\cdot 180^\\circ = 2160^\\circ$ ✓. Check a second, independent way with a boundary walk: a full lap around the frame turns through $360^\\circ$, so the interiors total $14 \\cdot 180^\\circ - 360^\\circ = 2520^\\circ - 360^\\circ = 2160^\\circ$ ✓. (The choice $2520^\\circ$ is USING $n$ TRIANGLES instead of $n - 2$ ✗; $2340^\\circ$ is USING $n - 1$ TRIANGLES ✗; $360^\\circ$ is QUOTING THE EXTERIOR-ANGLE TOTAL ✗.)',
    },
    {
      q: 'The rim of a game board is a $16$-sided polygon, shown with fold lines from corner $A$ to every non-adjacent corner, splitting the rim’s interior into triangles. Find the sum of the interior angles of a $16$-gon.',
      fig: {
        view: [-3.4, -3.3, 3.4, 3.5],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.15, 2.77], [-2.12, 2.12], [-2.77, 1.15], [-3, 0], [-2.77, -1.15], [-2.12, -2.12], [-1.15, -2.77], [0, -3], [1.15, -2.77], [2.12, -2.12], [2.77, -1.15], [3, 0], [2.77, 1.15], [2.12, 2.12], [1.15, 2.77]], fill: false },
          { t: 'seg', a: [0, 3], b: [-2.12, 2.12], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.77, 1.15], dash: true },
          { t: 'seg', a: [0, 3], b: [-3, 0], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.77, -1.15], dash: true },
          { t: 'seg', a: [0, 3], b: [-2.12, -2.12], dash: true },
          { t: 'seg', a: [0, 3], b: [-1.15, -2.77], dash: true },
          { t: 'seg', a: [0, 3], b: [0, -3], dash: true },
          { t: 'seg', a: [0, 3], b: [1.15, -2.77], dash: true },
          { t: 'seg', a: [0, 3], b: [2.12, -2.12], dash: true },
          { t: 'seg', a: [0, 3], b: [2.77, -1.15], dash: true },
          { t: 'seg', a: [0, 3], b: [3, 0], dash: true },
          { t: 'seg', a: [0, 3], b: [2.77, 1.15], dash: true },
          { t: 'seg', a: [0, 3], b: [2.12, 2.12], dash: true },
          { t: 'point', p: [0, 3], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$2880^\\circ$', '$2520^\\circ$', '$2700^\\circ$', '$2340^\\circ$'],
      answer: 1,
      solution:
        'The thirteen fold lines from $A$ split the interior into $16 - 2 = 14$ triangles, so the interior angles total $14 \\cdot 180^\\circ = 2520^\\circ$ ✓. Check a second, independent way with a boundary walk: one lap turns through $360^\\circ$, so the interiors total $16 \\cdot 180^\\circ - 360^\\circ = 2880^\\circ - 360^\\circ = 2520^\\circ$ ✓. (The choice $2880^\\circ$ is USING $n$ TRIANGLES instead of $n - 2$ ✗; $2700^\\circ$ is USING $n - 1$ TRIANGLES ✗; $2340^\\circ$ is USING $n - 3$, overshooting the correction ✗.)',
    },
  ],
  // s6 — regular exterior angle given, find the side count.
  [
    {
      q: 'A trail-marking robot drives a closed convex loop, turning exactly $24^\\circ$ at every corner, and after one complete trip it is back at its start facing its original direction. How many sides does its loop have?',
      choices: ['$13$', '$17$', '$15$', '$24$'],
      answer: 2,
      solution:
        'Each $24^\\circ$ turn is an exterior angle, and one full trip spins the robot through exactly $360^\\circ$, so the number of corners is $\\frac{360^\\circ}{24^\\circ} = 15$ ✓. Check a second, independent way through the interior angles: each interior angle is $180^\\circ - 24^\\circ = 156^\\circ$, and $15$ of them total $15 \\cdot 156^\\circ = 2340^\\circ$, which matches $(15 - 2) \\cdot 180^\\circ = 2340^\\circ$ exactly ✓. Rebuild: $15$ turns of $24^\\circ$ make $360^\\circ$, one full spin ✓. (The choice $13$ is SUBTRACTING $2$ — the $n - 2$ correction belongs to the triangle count, not here ✗; $17$ is ADDING $2$ for the same imaginary reason ✗; $24$ is ECHOING THE TURN as a side count ✗.)',
    },
    {
      q: 'A woodworker miters the ends of identical frame pieces so that at each corner of the finished convex frame, the edge direction turns through an exterior angle of $45^\\circ$. How many pieces does the frame use?',
      choices: ['$4$', '$6$', '$10$', '$8$'],
      answer: 3,
      solution:
        'Going once around the frame, the edge direction must turn through $360^\\circ$ in all, so the corner count is $\\frac{360^\\circ}{45^\\circ} = 8$ — an octagonal frame ✓. Check a second, independent way through the interior angles: each interior angle is $180^\\circ - 45^\\circ = 135^\\circ$, and $8$ of them total $8 \\cdot 135^\\circ = 1080^\\circ = (8 - 2) \\cdot 180^\\circ$ ✓. Rebuild: $8 \\times 45^\\circ = 360^\\circ$, exactly one spin ✓. (The choice $4$ is SPLITTING $180^\\circ$ INSTEAD OF $360^\\circ$ ✗; $6$ is SUBTRACTING $2$ from the correct count ✗; $10$ is ADDING $2$ to it ✗.)',
    },
    {
      q: 'Walking the fence around a convex sculpture garden, a surveyor pivots through $40^\\circ$ at every fence post, and one complete circuit spins her around exactly once. How many sides does the fence have?',
      choices: ['$9$', '$11$', '$7$', '$18$'],
      answer: 0,
      solution:
        'The pivots are the exterior angles, and one circuit makes them total $360^\\circ$, so there are $\\frac{360^\\circ}{40^\\circ} = 9$ posts and $9$ sides ✓. Check a second, independent way through the interior angles: each interior angle is $180^\\circ - 40^\\circ = 140^\\circ$, and a polygon whose $n$ equal angles are $140^\\circ$ must satisfy $(n - 2) \\cdot 180^\\circ = 140^\\circ n$, which gives $40n = 360$ and $n = 9$ again ✓. Rebuild: $9 \\times 40^\\circ = 360^\\circ$ ✓. (The choice $11$ is ADDING $2$ to the quotient ✗; $7$ is SUBTRACTING $2$ from it ✗; $18$ is CHARGING TWO FULL SPINS, $\\frac{720^\\circ}{40^\\circ}$ ✗.)',
    },
  ],
  // s7 — regular interior angle given, find the side count.
  [
    {
      q: 'A jeweler’s pendant is the regular polygon shown, and every one of its interior angles measures $144^\\circ$. How many sides does the pendant have?',
      fig: {
        view: [-3.2, -3.2, 3.2, 3.4],
        elems: [
          { t: 'poly', pts: [[0, 3], [-1.76, 2.43], [-2.85, 0.93], [-2.85, -0.93], [-1.76, -2.43], [0, -3], [1.76, -2.43], [2.85, -0.93], [2.85, 0.93], [1.76, 2.43]], fill: false },
          { t: 'angle', at: [0, 3], from: [-1.76, 2.43], to: [1.76, 2.43], r: 0.9, label: '144' },
        ],
      },
      choices: ['$36$', '$10$', '$8$', '$12$'],
      answer: 1,
      solution:
        'Cross to the exterior partner: each exterior angle is $180^\\circ - 144^\\circ = 36^\\circ$, and the exterior angles must total $360^\\circ$, so $n = \\frac{360^\\circ}{36^\\circ} = 10$ — a decagon, and the figure’s sides count to ten ✓. Check a second, independent way with algebra on the interior sum: $(n - 2) \\cdot 180^\\circ = 144^\\circ n$ gives $180n - 360 = 144n$, so $36n = 360$ and $n = 10$ again ✓. (The choice $36$ is REPORTING THE EXTERIOR ANGLE instead of the side count ✗; $8$ is SUBTRACTING $2$ from the true count ✗; $12$ is ADDING $2$ to it ✗.)',
    },
    {
      q: 'One piece of a mosaic border is the regular polygon shown, whose interior angle at every vertex is $162^\\circ$. Find its number of sides.',
      fig: {
        view: [-3.2, -3.2, 3.2, 3.2],
        elems: [
          { t: 'poly', pts: [[2.96, 0.47], [2.67, 1.36], [2.12, 2.12], [1.36, 2.67], [0.47, 2.96], [-0.47, 2.96], [-1.36, 2.67], [-2.12, 2.12], [-2.67, 1.36], [-2.96, 0.47], [-2.96, -0.47], [-2.67, -1.36], [-2.12, -2.12], [-1.36, -2.67], [-0.47, -2.96], [0.47, -2.96], [1.36, -2.67], [2.12, -2.12], [2.67, -1.36], [2.96, -0.47]], fill: false },
          { t: 'angle', at: [0.47, 2.96], from: [-0.47, 2.96], to: [1.36, 2.67], r: 0.7, label: '162' },
        ],
      },
      choices: ['$20$', '$18$', '$9$', '$22$'],
      answer: 0,
      solution:
        'Cross to the exterior partner: $180^\\circ - 162^\\circ = 18^\\circ$ at each vertex, and the exteriors total $360^\\circ$, so $n = \\frac{360^\\circ}{18^\\circ} = 20$ sides ✓. Check a second, independent way with algebra on the interior sum: $(n - 2) \\cdot 180^\\circ = 162^\\circ n$ gives $180n - 360 = 162n$, so $18n = 360$ and $n = 20$ again ✓. (The choice $18$ is REPORTING THE EXTERIOR ANGLE ✗; $9$ is DIVIDING INTERIOR BY EXTERIOR, $\\frac{162}{18}$ ✗; $22$ is ADDING $2$ to the true count ✗.)',
    },
    {
      q: 'Every corner of the regular polygon shown — the cross-section of a planter box — opens at $135^\\circ$. How many sides does it have?',
      fig: {
        view: [-3.1, -3.1, 3.1, 3.1],
        elems: [
          { t: 'poly', pts: [[2.77, 1.15], [1.15, 2.77], [-1.15, 2.77], [-2.77, 1.15], [-2.77, -1.15], [-1.15, -2.77], [1.15, -2.77], [2.77, -1.15]], fill: false },
          { t: 'angle', at: [1.15, 2.77], from: [-1.15, 2.77], to: [2.77, 1.15], r: 0.85, label: '135' },
        ],
      },
      choices: ['$45$', '$6$', '$10$', '$8$'],
      answer: 3,
      solution:
        'Cross to the exterior partner: $180^\\circ - 135^\\circ = 45^\\circ$ at each corner, and the exteriors total $360^\\circ$, so $n = \\frac{360^\\circ}{45^\\circ} = 8$ — count the figure’s sides to confirm the octagon ✓. Check a second, independent way with algebra on the interior sum: $(n - 2) \\cdot 180^\\circ = 135^\\circ n$ gives $180n - 360 = 135n$, so $45n = 360$ and $n = 8$ again ✓. (The choice $45$ is REPORTING THE EXTERIOR ANGLE instead of the side count ✗; $6$ is SUBTRACTING $2$ from the true count ✗; $10$ is ADDING $2$ to it ✗.)',
    },
  ],
  // s8 — algebraic angle marks: find the largest angle.
  [
    {
      q: 'The five corners of the pentagonal banner shown are marked $2x$, $3x$, $4x$, $4x$, and $5x$. What is the measure of the banner’s largest angle?',
      fig: {
        view: [-1.3, -1.3, 6.3, 6.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.46, 0], [5.2, 1], [5.2, 2.5], [0, 5.5]], fill: false },
          { t: 'angle', at: [0, 0], from: [3.46, 0], to: [0, 5.5], r: 0.9, label: '3x' },
          { t: 'angle', at: [3.46, 0], from: [5.2, 1], to: [0, 0], r: 0.9, label: '5x' },
          { t: 'angle', at: [5.2, 1], from: [5.2, 2.5], to: [3.46, 0], r: 0.6, label: '4x' },
          { t: 'angle', at: [5.2, 2.5], from: [0, 5.5], to: [5.2, 1], r: 0.6, label: '4x' },
          { t: 'angle', at: [0, 5.5], from: [0, 0], to: [5.2, 2.5], r: 1, label: '2x' },
        ],
      },
      choices: ['$30^\\circ$', '$120^\\circ$', '$60^\\circ$', '$150^\\circ$'],
      answer: 3,
      solution:
        'A pentagon’s interior angles total $(5 - 2) \\cdot 180^\\circ = 540^\\circ$, so $2x + 3x + 4x + 4x + 5x = 18x = 540$ and $x = 30$. The largest angle is $5x = 150^\\circ$ ✓. Check a second, independent way with shares: the largest angle owns $5$ of the $18$ ratio parts, so it is $\\frac{5}{18} \\times 540^\\circ = 150^\\circ$ ✓. Rebuild: $60^\\circ + 90^\\circ + 120^\\circ + 120^\\circ + 150^\\circ = 540^\\circ$ ✓. (The choice $30^\\circ$ is STOPPING AT $x$ ✗; $120^\\circ$ is GRABBING THE RUNNER-UP, $4x$ ✗; $60^\\circ$ is GRABBING THE SMALLEST, $2x$ ✗.)',
    },
    {
      q: 'A kite panel is the quadrilateral shown, with its corners marked $2x$, $3x$, $5x$, and $5x$. Find the measure of the panel’s largest angle.',
      fig: {
        view: [-1.3, -1.3, 7.7, 4.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [6.07, 2.85], [3.14, 3.48]], fill: false },
          { t: 'angle', at: [0, 0], from: [7, 0], to: [3.14, 3.48], r: 1, label: '2x' },
          { t: 'angle', at: [7, 0], from: [6.07, 2.85], to: [0, 0], r: 1, label: '3x' },
          { t: 'angle', at: [6.07, 2.85], from: [3.14, 3.48], to: [7, 0], r: 0.7, label: '5x' },
          { t: 'angle', at: [3.14, 3.48], from: [0, 0], to: [6.07, 2.85], r: 0.7, label: '5x' },
        ],
      },
      choices: ['$24^\\circ$', '$120^\\circ$', '$72^\\circ$', '$48^\\circ$'],
      answer: 1,
      solution:
        'A quadrilateral’s interior angles total $(4 - 2) \\cdot 180^\\circ = 360^\\circ$, so $2x + 3x + 5x + 5x = 15x = 360$ and $x = 24$. The largest angle is $5x = 120^\\circ$ ✓. Check a second, independent way with shares: the largest angle owns $5$ of the $15$ ratio parts, so it is $\\frac{5}{15} \\times 360^\\circ = \\frac{1}{3} \\times 360^\\circ = 120^\\circ$ ✓. Rebuild: $48^\\circ + 72^\\circ + 120^\\circ + 120^\\circ = 360^\\circ$ ✓. (The choice $24^\\circ$ is STOPPING AT $x$ ✗; $72^\\circ$ is GRABBING THE MIDDLE ANGLE, $3x$ ✗; $48^\\circ$ is GRABBING THE SMALLEST, $2x$ ✗.)',
    },
    {
      q: 'The floor plan of a pentagonal courtyard is shown, its corner angles marked $2x$, $2x$, $3x$, $4x$, and $4x$. What is the measure of the courtyard’s largest corner?',
      fig: {
        view: [-1.3, -1.3, 6.2, 6.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.36, 0], [5.04, 2.09], [4.36, 4.18], [1.93, 5.94]], fill: false },
          { t: 'angle', at: [0, 0], from: [4.36, 0], to: [1.93, 5.94], r: 1, label: '2x' },
          { t: 'angle', at: [4.36, 0], from: [5.04, 2.09], to: [0, 0], r: 0.8, label: '3x' },
          { t: 'angle', at: [5.04, 2.09], from: [4.36, 4.18], to: [4.36, 0], r: 0.6, label: '4x' },
          { t: 'angle', at: [4.36, 4.18], from: [1.93, 5.94], to: [5.04, 2.09], r: 0.6, label: '4x' },
          { t: 'angle', at: [1.93, 5.94], from: [0, 0], to: [4.36, 4.18], r: 0.9, label: '2x' },
        ],
      },
      choices: ['$36^\\circ$', '$108^\\circ$', '$144^\\circ$', '$72^\\circ$'],
      answer: 2,
      solution:
        'A pentagon’s interior angles total $(5 - 2) \\cdot 180^\\circ = 540^\\circ$, so $2x + 2x + 3x + 4x + 4x = 15x = 540$ and $x = 36$. The largest corner is $4x = 144^\\circ$ ✓. Check a second, independent way with shares: the largest corner owns $4$ of the $15$ ratio parts, so it is $\\frac{4}{15} \\times 540^\\circ = 144^\\circ$ ✓. Rebuild: $72^\\circ + 72^\\circ + 108^\\circ + 144^\\circ + 144^\\circ = 540^\\circ$ ✓. (The choice $36^\\circ$ is STOPPING AT $x$ ✗; $108^\\circ$ is GRABBING THE RUNNER-UP, $3x$ ✗; $72^\\circ$ is GRABBING THE SMALLEST, $2x$ ✗.)',
    },
  ],
  // s9 — all interior angles given but one.
  [
    {
      q: 'Pentagon $ABCDE$, the outline of a plaza, has marked angles of $112^\\circ$ at $B$, $119^\\circ$ at $C$, $104^\\circ$ at $D$, and $105^\\circ$ at $E$, as shown. What is the measure of the angle at $A$?',
      fig: {
        view: [-1.5, -1.2, 6.8, 5.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [5.97, 2.41], [4.21, 4.59], [-0.43, 2.42]], fill: false },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [-0.43, 2.42], r: 0.9, label: '?' },
          { t: 'angle', at: [5, 0], from: [5.97, 2.41], to: [0, 0], r: 0.9, label: '112' },
          { t: 'angle', at: [5.97, 2.41], from: [4.21, 4.59], to: [5, 0], r: 0.7, label: '119' },
          { t: 'angle', at: [4.21, 4.59], from: [-0.43, 2.42], to: [5.97, 2.41], r: 0.7, label: '104' },
          { t: 'angle', at: [-0.43, 2.42], from: [0, 0], to: [4.21, 4.59], r: 0.55, label: '105' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [5.97, 2.41], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [4.21, 4.59], label: 'D', dx: 10, dy: -8 },
          { t: 'point', p: [-0.43, 2.42], label: 'E', dx: -12, dy: -6 },
        ],
      },
      choices: ['$100^\\circ$', '$280^\\circ$', '$104^\\circ$', '$205^\\circ$'],
      answer: 0,
      solution:
        'A pentagon’s interior angles total $(5 - 2) \\cdot 180^\\circ = 540^\\circ$. The four known angles give $112 + 119 + 104 + 105 = 440$, so $\\angle A = 540^\\circ - 440^\\circ = 100^\\circ$ ✓. Check a second, independent way with the average: a pentagon’s angles average $\\frac{540^\\circ}{5} = 108^\\circ$, and the four knowns sit $+4$, $+11$, $-4$, and $-3$ from it — a net $+8$ — so $\\angle A$ must sit $8$ below average: $108^\\circ - 8^\\circ = 100^\\circ$ ✓. Rebuild: $100 + 112 + 119 + 104 + 105 = 540$ ✓. (The choice $280^\\circ$ is USING THE HEXAGON TOTAL, $720^\\circ - 440^\\circ$ ✗; $104^\\circ$ is COPYING A GIVEN ✗; $205^\\circ$ is DROPPING AN ANGLE, $540^\\circ - 335^\\circ$ after losing the $105^\\circ$ ✗.)',
    },
    {
      q: 'The hexagonal floor of a gazebo has interior angles of $128^\\circ$, $132^\\circ$, $105^\\circ$, $110^\\circ$, and $115^\\circ$ at five of its corners, as shown. Find the measure of the angle at the sixth corner, $A$.',
      fig: {
        view: [-2, -1.2, 5.8, 5.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.5, 0], [4.98, 1.89], [4.53, 4.45], [0.54, 4.8], [-1.09, 1.3]], fill: false },
          { t: 'angle', at: [0, 0], from: [3.5, 0], to: [-1.09, 1.3], r: 0.8, label: '?' },
          { t: 'angle', at: [3.5, 0], from: [4.98, 1.89], to: [0, 0], r: 0.9, label: '128' },
          { t: 'angle', at: [4.98, 1.89], from: [4.53, 4.45], to: [3.5, 0], r: 0.6, label: '132' },
          { t: 'angle', at: [4.53, 4.45], from: [0.54, 4.8], to: [4.98, 1.89], r: 0.7, label: '105' },
          { t: 'angle', at: [0.54, 4.8], from: [-1.09, 1.3], to: [4.53, 4.45], r: 0.7, label: '110' },
          { t: 'angle', at: [-1.09, 1.3], from: [0, 0], to: [0.54, 4.8], r: 0.55, label: '115' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
        ],
      },
      choices: ['$310^\\circ$', '$132^\\circ$', '$245^\\circ$', '$130^\\circ$'],
      answer: 3,
      solution:
        'A hexagon’s interior angles total $(6 - 2) \\cdot 180^\\circ = 720^\\circ$. The five known angles give $128 + 132 + 105 + 110 + 115 = 590$, so the sixth is $720^\\circ - 590^\\circ = 130^\\circ$ ✓. Check a second, independent way with the average: a hexagon’s angles average $\\frac{720^\\circ}{6} = 120^\\circ$, and the five knowns sit $+8$, $+12$, $-15$, $-10$, and $-5$ from it — a net $-10$ — so the sixth must sit $10$ above average: $120^\\circ + 10^\\circ = 130^\\circ$ ✓. Rebuild: $130 + 128 + 132 + 105 + 110 + 115 = 720$ ✓. (The choice $310^\\circ$ is USING THE HEPTAGON TOTAL, $900^\\circ - 590^\\circ$ ✗; $132^\\circ$ is COPYING A GIVEN ✗; $245^\\circ$ is DROPPING AN ANGLE, $720^\\circ - 475^\\circ$ after losing the $115^\\circ$ ✗.)',
    },
    {
      q: 'Four corners of the pentagonal window frame shown measure $125^\\circ$, $105^\\circ$, $115^\\circ$, and $110^\\circ$. What is the measure of the fifth corner, at $A$?',
      fig: {
        view: [-1.3, -1.2, 7.2, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [6.49, 2.13], [4.69, 4.27], [0.27, 3.09]], fill: false },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [0.27, 3.09], r: 0.9, label: '?' },
          { t: 'angle', at: [5, 0], from: [6.49, 2.13], to: [0, 0], r: 0.9, label: '125' },
          { t: 'angle', at: [6.49, 2.13], from: [4.69, 4.27], to: [5, 0], r: 0.7, label: '105' },
          { t: 'angle', at: [4.69, 4.27], from: [0.27, 3.09], to: [6.49, 2.13], r: 0.7, label: '115' },
          { t: 'angle', at: [0.27, 3.09], from: [0, 0], to: [4.69, 4.27], r: 0.6, label: '110' },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
        ],
      },
      choices: ['$265^\\circ$', '$85^\\circ$', '$110^\\circ$', '$195^\\circ$'],
      answer: 1,
      solution:
        'A pentagon’s interior angles total $(5 - 2) \\cdot 180^\\circ = 540^\\circ$. The four known corners give $125 + 105 + 115 + 110 = 455$, so the corner at $A$ is $540^\\circ - 455^\\circ = 85^\\circ$ ✓. Check a second, independent way with the average: a pentagon’s angles average $\\frac{540^\\circ}{5} = 108^\\circ$, and the knowns sit $+17$, $-3$, $+7$, and $+2$ from it — a net $+23$ — so $A$ must sit $23$ below average: $108^\\circ - 23^\\circ = 85^\\circ$ ✓. Rebuild: $85 + 125 + 105 + 115 + 110 = 540$ ✓. (The choice $265^\\circ$ is USING THE HEXAGON TOTAL, $720^\\circ - 455^\\circ$ ✗; $110^\\circ$ is COPYING A GIVEN ✗; $195^\\circ$ is DROPPING AN ANGLE, $540^\\circ - 345^\\circ$ after losing the $110^\\circ$ ✗.)',
    },
  ],
  // s10 — interior angle is a multiple of the exterior angle: find n.
  [
    {
      q: 'At every vertex of a certain regular polygon, the interior angle and the exterior angle split their straight line in the ratio $3 : 1$ — the interior angle is three times the exterior one. How many sides does the polygon have?',
      choices: ['$6$', '$4$', '$8$', '$10$'],
      answer: 2,
      solution:
        'Let the exterior angle be $e$. The interior angle is $3e$, and the two fill a straight line: $e + 3e = 4e = 180^\\circ$, so $e = 45^\\circ$ and $n = \\frac{360^\\circ}{45^\\circ} = 8$ ✓. Check a second, independent way with the interior sum: the interior angle is $3 \\cdot \\frac{360^\\circ}{n}$, so $n \\cdot 3 \\cdot \\frac{360^\\circ}{n} = 1080^\\circ$ must equal $(n - 2) \\cdot 180^\\circ = 180n - 360$, giving $180n = 1440$ and $n = 8$ again ✓. Rebuild: a regular octagon has interior angle $135^\\circ$ and exterior angle $45^\\circ$, and $135 = 3 \\times 45$ ✓. (The choice $6$ is DIVIDING $180^\\circ$ BY $3$, forgetting the exterior’s own part of the line ✗; $4$ is SPLITTING $360^\\circ$ INSTEAD OF $180^\\circ$ into the four parts ✗; $10$ is MISCOUNTING THE PARTS, splitting $180^\\circ$ into five ✗.)',
    },
    {
      q: 'A collector’s coin is struck as a regular polygon in which each interior angle is $8$ times as large as the exterior angle at the same vertex. How many sides does the coin have?',
      choices: ['$18$', '$16$', '$9$', '$20$'],
      answer: 0,
      solution:
        'With exterior angle $e$, the interior is $8e$, and together they make the straight line: $e + 8e = 9e = 180^\\circ$, so $e = 20^\\circ$ and $n = \\frac{360^\\circ}{20^\\circ} = 18$ ✓. Check a second, independent way with the interior sum: the interior angle is $8 \\cdot \\frac{360^\\circ}{n}$, so $n$ of them total $2880^\\circ$, and setting $2880 = 180n - 360$ gives $180n = 3240$ and $n = 18$ again ✓. Rebuild: a regular $18$-gon has interior angle $160^\\circ$ and exterior angle $20^\\circ$, and $160 = 8 \\times 20$ ✓. (The choice $16$ is DIVIDING $180^\\circ$ BY $8$, dropping the exterior’s part of the line ✗; $9$ is STOPPING AT THE PART COUNT, the $9$ in $9e = 180^\\circ$ ✗; $20$ is REPORTING THE EXTERIOR ANGLE as a side count ✗.)',
    },
    {
      q: 'A decorative gear is cut as a regular polygon whose interior angle at each vertex measures $11$ times the exterior angle there. Find the number of sides of the gear.',
      choices: ['$22$', '$12$', '$15$', '$24$'],
      answer: 3,
      solution:
        'With exterior angle $e$, the interior is $11e$, and the straight line gives $e + 11e = 12e = 180^\\circ$, so $e = 15^\\circ$ and $n = \\frac{360^\\circ}{15^\\circ} = 24$ ✓. Check a second, independent way with the interior sum: the interior angle is $11 \\cdot \\frac{360^\\circ}{n}$, so $n$ of them total $3960^\\circ$, and setting $3960 = 180n - 360$ gives $180n = 4320$ and $n = 24$ again ✓. Rebuild: a regular $24$-gon has interior angle $165^\\circ$ and exterior angle $15^\\circ$, and $165 = 11 \\times 15$ ✓. (The choice $22$ is DIVIDING $180^\\circ$ BY $11$, dropping the exterior’s part of the line ✗; $12$ is STOPPING AT THE PART COUNT, the $12$ in $12e = 180^\\circ$ ✗; $15$ is REPORTING THE EXTERIOR ANGLE as a side count ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 9,
  sections: {
    '9.2': s92,
  },
}
