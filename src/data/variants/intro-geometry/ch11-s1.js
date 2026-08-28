// Introduction to Geometry chapter 11 — variations for section 11.1 (Arc Measure, Arc Length, and Circumference).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer was worked twice by routes that do not share steps:
//    the arc-fraction (or circumference) formula forward, then an independent
//    re-check — plugging the answer back, a circumference proportion, or an
//    angle-times-radius comparison.
//  - Circles are drawn at their stated radii, and every marked central angle
//    is placed by cosine and sine of its own measure, so each numeric angle
//    label matches the drawn angle to well under a degree.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.

const s111 = [
  // s1 — circumference from the radius.
  [
    {
      q: 'A zamboni driver wants to know the distance once around the circular ice rink shown, which has radius $15$ meters. What is the rink’s circumference, in meters?',
      fig: {
        view: [-18, -18, 18, 18],
        elems: [
          { t: 'circle', c: [0, 0], r: 15 },
          { t: 'seg', a: [0, 0], b: [15, 0] },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [15, 0], label: 'A', dx: 12, dy: 0 },
        ],
      },
      choices: ['$30\\pi$', '$15\\pi$', '$225\\pi$', '$60\\pi$'],
      answer: 0,
      solution:
        'Route one, the radius formula: $C = 2\\pi r = 2\\pi \\cdot 15 = 30\\pi$ ✓. Route two, through the diameter: the rink is $d = 2 \\cdot 15 = 30$ meters across, and $C = \\pi d = 30\\pi$ — the same answer from a different formula ✓. (The choice $15\\pi$ is DROPPING THE FACTOR OF $2$, multiplying $\\pi$ by the radius instead of the diameter ✗; $225\\pi$ is COMPUTING THE AREA $\\pi r^2$ instead of the circumference ✗; $60\\pi$ is USING THE DIAMETER AS THE RADIUS, which doubles the answer ✗.)',
    },
    {
      q: 'A string of lights will run once around the rim of the circular carousel platform shown, whose radius is $12$ feet. How many feet of lights are needed?',
      fig: {
        view: [-15, -15, 15, 15],
        elems: [
          { t: 'circle', c: [0, 0], r: 12 },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'A', dx: 12, dy: 0 },
        ],
      },
      choices: ['$12\\pi$', '$24\\pi$', '$144\\pi$', '$48\\pi$'],
      answer: 1,
      solution:
        'Route one, the radius formula: $C = 2\\pi r = 2\\pi \\cdot 12 = 24\\pi$ ✓. Route two, through the diameter: the platform is $d = 2 \\cdot 12 = 24$ feet across, and $C = \\pi d = 24\\pi$, agreeing exactly ✓. (The choice $12\\pi$ is DROPPING THE FACTOR OF $2$ — that is $\\pi$ times the radius, not the diameter ✗; $144\\pi$ is COMPUTING THE AREA $\\pi r^2$ ✗; $48\\pi$ is USING THE DIAMETER AS THE RADIUS, doubling one time too many ✗.)',
    },
    {
      q: 'A landscaper edges the circular fountain basin shown, whose radius is $18$ meters, with a single ring of brick along its rim. How long is that ring of brick, in meters?',
      fig: {
        view: [-22, -22, 22, 22],
        elems: [
          { t: 'circle', c: [0, 0], r: 18 },
          { t: 'seg', a: [0, 0], b: [18, 0] },
          { t: 'label', p: [9, 0], text: '18', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [18, 0], label: 'A', dx: 12, dy: 0 },
        ],
      },
      choices: ['$18\\pi$', '$324\\pi$', '$72\\pi$', '$36\\pi$'],
      answer: 3,
      solution:
        'Route one, the radius formula: $C = 2\\pi r = 2\\pi \\cdot 18 = 36\\pi$ ✓. Route two, through the diameter: the basin is $d = 2 \\cdot 18 = 36$ meters across, so $C = \\pi d = 36\\pi$, the same length by a different road ✓. (The choice $18\\pi$ is DROPPING THE FACTOR OF $2$ ✗; $324\\pi$ is COMPUTING THE AREA $\\pi r^2$ instead of a length ✗; $72\\pi$ is USING THE DIAMETER AS THE RADIUS, so everything comes out doubled ✗.)',
    },
  ],
  // s2 — an arc has the measure of its central angle.
  [
    {
      q: 'On the Ferris wheel shown, gondolas $A$ and $B$ hang from spokes that meet at the hub $O$ with $\\angle AOB = 52^\\circ$. What is the measure of minor arc $AB$ of the wheel’s rim?',
      fig: {
        view: [-6, -6, 6, 6],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'seg', a: [0, 0], b: [5, 0] },
          { t: 'seg', a: [0, 0], b: [3.08, 3.94] },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [3.08, 3.94], r: 1.4, label: '52' },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [3.08, 3.94], label: 'B', dx: 10, dy: -8 },
        ],
      },
      choices: ['$104^\\circ$', '$52^\\circ$', '$308^\\circ$', '$26^\\circ$'],
      answer: 1,
      solution:
        'Route one, the definition: an arc’s measure IS the measure of its central angle, so minor arc $AB = 52^\\circ$ — no scaling of any kind ✓. Route two, a full-circle check: the major arc from $A$ to $B$ the long way around is $360^\\circ - 52^\\circ = 308^\\circ$, and $52^\\circ + 308^\\circ = 360^\\circ$, exactly one whole wheel ✓. (The choice $104^\\circ$ is DOUBLING THE CENTRAL ANGLE ✗; $308^\\circ$ is REPORTING THE MAJOR ARC instead of the minor one ✗; $26^\\circ$ is HALVING THE CENTRAL ANGLE ✗.)',
    },
    {
      q: 'On the radar screen shown, blips $A$ and $B$ sit on the outer ring, and the sight lines from the station $O$ to the two blips make $\\angle AOB = 108^\\circ$. What is the measure of minor arc $AB$ of the ring?',
      fig: {
        view: [-6, -6, 6, 6],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'seg', a: [0, 0], b: [5, 0] },
          { t: 'seg', a: [0, 0], b: [-1.55, 4.76] },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [-1.55, 4.76], r: 1.3, label: '108' },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [-1.55, 4.76], label: 'B', dx: -8, dy: -10 },
        ],
      },
      choices: ['$54^\\circ$', '$252^\\circ$', '$108^\\circ$', '$216^\\circ$'],
      answer: 2,
      solution:
        'Route one, the definition: an arc matches its central angle exactly, so minor arc $AB = 108^\\circ$ ✓. Route two, a full-circle check: the major arc the long way around measures $360^\\circ - 108^\\circ = 252^\\circ$, and $108^\\circ + 252^\\circ = 360^\\circ$, one complete ring ✓. (The choice $54^\\circ$ is HALVING THE CENTRAL ANGLE ✗; $252^\\circ$ is REPORTING THE MAJOR ARC ✗; $216^\\circ$ is DOUBLING THE CENTRAL ANGLE ✗.)',
    },
    {
      q: 'A dog is tied at the center $O$ of the circular exercise ring shown and can watch gate $A$ and feeder $B$ on the fence, where $\\angle AOB = 76^\\circ$. What is the measure of minor arc $AB$ of the fence?',
      fig: {
        view: [-6, -6, 6, 6],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'seg', a: [0, 0], b: [5, 0] },
          { t: 'seg', a: [0, 0], b: [1.21, 4.85] },
          { t: 'angle', at: [0, 0], from: [5, 0], to: [1.21, 4.85], r: 1.4, label: '76' },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [5, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [1.21, 4.85], label: 'B', dx: 8, dy: -10 },
        ],
      },
      choices: ['$152^\\circ$', '$284^\\circ$', '$38^\\circ$', '$76^\\circ$'],
      answer: 3,
      solution:
        'Route one, the definition: an arc’s degree measure equals its central angle, so minor arc $AB = 76^\\circ$ ✓. Route two, a full-circle check: the major arc around the far side of the fence is $360^\\circ - 76^\\circ = 284^\\circ$, and $76^\\circ + 284^\\circ = 360^\\circ$, the whole ring accounted for ✓. (The choice $152^\\circ$ is DOUBLING THE CENTRAL ANGLE ✗; $284^\\circ$ is REPORTING THE MAJOR ARC ✗; $38^\\circ$ is HALVING THE CENTRAL ANGLE ✗.)',
    },
  ],
  // s3 — circumference from the diameter.
  [
    {
      q: 'A round patio table is $14$ hands across at its widest — its diameter is $14$. A ribbon of trim runs once around its edge. How long is the trim?',
      choices: ['$14\\pi$', '$28\\pi$', '$7\\pi$', '$49\\pi$'],
      answer: 0,
      solution:
        'Route one, the diameter formula: $C = \\pi d = \\pi \\cdot 14 = 14\\pi$, with no conversion needed ✓. Route two, through the radius: half of $14$ is $r = 7$, and $C = 2\\pi r = 2\\pi \\cdot 7 = 14\\pi$, the same trim length ✓. (The choice $28\\pi$ is USING THE DIAMETER AS THE RADIUS in $2\\pi r$ — but $14$ is the whole way across ✗; $7\\pi$ is HALVING WHEN NO HALVING BELONGS, computing $\\pi r$ ✗; $49\\pi$ is COMPUTING THE AREA $\\pi r^2$ ✗.)',
    },
    {
      q: 'A circular trampoline measures $22$ feet from one side straight through the middle to the other. A safety pad wraps once around its outer edge. How many feet of padding is that?',
      choices: ['$44\\pi$', '$11\\pi$', '$22\\pi$', '$121\\pi$'],
      answer: 2,
      solution:
        'Route one, the diameter formula: the distance straight through the middle is the diameter, so $C = \\pi d = 22\\pi$ ✓. Route two, through the radius: $r = \\frac{22}{2} = 11$, and $C = 2\\pi r = 2\\pi \\cdot 11 = 22\\pi$, matching exactly ✓. (The choice $44\\pi$ is USING THE DIAMETER AS THE RADIUS, doubling a number that was already doubled ✗; $11\\pi$ is HALVING WHEN NO HALVING BELONGS, stopping at $\\pi r$ ✗; $121\\pi$ is COMPUTING THE AREA $\\pi r^2$ ✗.)',
    },
    {
      q: 'The widest crossing of a circular koi pond — straight over its center — is $34$ meters. A gravel path circles the pond right at the waterline. How long is the path, in meters?',
      choices: ['$68\\pi$', '$17\\pi$', '$289\\pi$', '$34\\pi$'],
      answer: 3,
      solution:
        'Route one, the diameter formula: a crossing through the center is a diameter, so $C = \\pi d = 34\\pi$ ✓. Route two, through the radius: $r = \\frac{34}{2} = 17$, and $C = 2\\pi r = 2\\pi \\cdot 17 = 34\\pi$, the same path length ✓. (The choice $68\\pi$ is USING THE DIAMETER AS THE RADIUS in $2\\pi r$ ✗; $17\\pi$ is HALVING WHEN NO HALVING BELONGS, computing only $\\pi r$ ✗; $289\\pi$ is COMPUTING THE AREA $\\pi r^2$, a completely different kind of quantity ✗.)',
    },
  ],
  // s4 — minor-arc length from radius and central angle.
  [
    {
      q: 'A curved footbridge follows minor arc $AB$ of the circular lagoon shown, which has center $O$ and radius $12$, with $\\angle AOB = 90^\\circ$. How long is the footbridge?',
      fig: {
        view: [-14, -14, 14, 14],
        elems: [
          { t: 'circle', c: [0, 0], r: 12 },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [0, 12] },
          { t: 'angle', at: [0, 0], from: [12, 0], to: [0, 12], r: 2.6, label: '90' },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [0, 12], label: 'B', dx: 0, dy: -12 },
        ],
      },
      choices: ['$6\\pi$', '$24\\pi$', '$12\\pi$', '$36\\pi$'],
      answer: 0,
      solution:
        'Route one, the arc-fraction formula: the arc is $\\frac{90}{360} = \\frac{1}{4}$ of the circle, the circumference is $2\\pi \\cdot 12 = 24\\pi$, and $\\frac{1}{4} \\cdot 24\\pi = 6\\pi$ ✓. Route two, a proportion re-check: $\\frac{6\\pi}{24\\pi} = \\frac{1}{4}$, and $\\frac{90}{360} = \\frac{1}{4}$ too — the bridge claims the same share of the circumference that its angle claims of $360^\\circ$ ✓. (The choice $24\\pi$ is SKIPPING THE FRACTION and reporting the whole circumference ✗; $12\\pi$ is TAKING HALF INSTEAD OF A QUARTER ✗; $36\\pi$ is COMPUTING THE SECTOR AREA $\\frac{1}{4} \\cdot 144\\pi$ instead of a length ✗.)',
    },
    {
      q: 'A model railway includes one curved section of track: minor arc $AB$ of the circle shown, with center $O$, radius $21$, and $\\angle AOB = 60^\\circ$. How long is the curved section?',
      fig: {
        view: [-25, -25, 25, 25],
        elems: [
          { t: 'circle', c: [0, 0], r: 21 },
          { t: 'seg', a: [0, 0], b: [21, 0] },
          { t: 'seg', a: [0, 0], b: [10.5, 18.19] },
          { t: 'angle', at: [0, 0], from: [21, 0], to: [10.5, 18.19], r: 4.6, label: '60' },
          { t: 'label', p: [10.5, 0], text: '21', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [21, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [10.5, 18.19], label: 'B', dx: 8, dy: -10 },
        ],
      },
      choices: ['$42\\pi$', '$7\\pi$', '$3.5\\pi$', '$73.5\\pi$'],
      answer: 1,
      solution:
        'Route one, the arc-fraction formula: the arc is $\\frac{60}{360} = \\frac{1}{6}$ of the circle, the circumference is $2\\pi \\cdot 21 = 42\\pi$, and $\\frac{1}{6} \\cdot 42\\pi = 7\\pi$ ✓. Route two, a proportion re-check: $\\frac{7\\pi}{42\\pi} = \\frac{1}{6}$, matching $\\frac{60}{360} = \\frac{1}{6}$ — the track takes the same share of the circumference as its angle takes of the full turn ✓. (The choice $42\\pi$ is SKIPPING THE FRACTION ✗; $3.5\\pi$ is TREATING THE RADIUS AS A DIAMETER, shrinking the circle to half size ✗; $73.5\\pi$ is COMPUTING THE SECTOR AREA $\\frac{1}{6} \\cdot 441\\pi$ ✗.)',
    },
    {
      q: 'The rounded edge of a fan-shaped stage is minor arc $AB$ of the circle shown, with center $O$, radius $15$, and $\\angle AOB = 60^\\circ$. What is the length of that rounded edge?',
      fig: {
        view: [-18, -18, 18, 18],
        elems: [
          { t: 'circle', c: [0, 0], r: 15 },
          { t: 'seg', a: [0, 0], b: [15, 0] },
          { t: 'seg', a: [0, 0], b: [7.5, 12.99] },
          { t: 'angle', at: [0, 0], from: [15, 0], to: [7.5, 12.99], r: 3.4, label: '60' },
          { t: 'label', p: [7.5, 0], text: '15', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [15, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [7.5, 12.99], label: 'B', dx: 8, dy: -10 },
        ],
      },
      choices: ['$30\\pi$', '$10\\pi$', '$5\\pi$', '$2.5\\pi$'],
      answer: 2,
      solution:
        'Route one, the arc-fraction formula: the arc is $\\frac{60}{360} = \\frac{1}{6}$ of the circle, the circumference is $2\\pi \\cdot 15 = 30\\pi$, and $\\frac{1}{6} \\cdot 30\\pi = 5\\pi$ ✓. Route two, a proportion re-check: $\\frac{5\\pi}{30\\pi} = \\frac{1}{6}$, exactly the share $\\frac{60}{360}$ promises ✓. (The choice $30\\pi$ is SKIPPING THE FRACTION and handing over the whole circumference ✗; $10\\pi$ is USING A THIRD OF THE CIRCLE INSTEAD OF A SIXTH, as if the angle were $120^\\circ$ ✗; $2.5\\pi$ is TREATING THE RADIUS AS A DIAMETER ✗.)',
    },
  ],
  // s5 — radius from an arc's measure and length.
  [
    {
      q: 'In the circle with center $O$ shown, minor arc $AB$ measures $135^\\circ$ and has length $12\\pi$. What is the radius of the circle?',
      fig: {
        view: [-19, -19, 19, 19],
        elems: [
          { t: 'circle', c: [0, 0], r: 16 },
          { t: 'seg', a: [0, 0], b: [16, 0] },
          { t: 'seg', a: [0, 0], b: [-11.31, 11.31] },
          { t: 'angle', at: [0, 0], from: [16, 0], to: [-11.31, 11.31], r: 3.6, label: '135' },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [-11.31, 11.31], label: 'B', dx: -10, dy: -8 },
        ],
      },
      choices: ['$32$', '$16$', '$6$', '$9.6$'],
      answer: 1,
      solution:
        'Route one, scale up to the full circle: a $135^\\circ$ arc is $\\frac{135}{360} = \\frac{3}{8}$ of the circle, so the whole circumference is $12\\pi \\cdot \\frac{8}{3} = 32\\pi$, and $2\\pi r = 32\\pi$ gives $r = 16$ ✓. Route two, plug the answer back in: with $r = 16$ the circumference is $32\\pi$, and $\\frac{3}{8} \\cdot 32\\pi = 12\\pi$, exactly the given arc length ✓. (The choice $32$ is STOPPING AT THE DIAMETER — $32$ is $2r$, not $r$ ✗; $6$ is SKIPPING THE FRACTION, solving $2\\pi r = 12\\pi$ as if the arc were the whole circle ✗; $9.6$ is USING THE MAJOR ARC, plugging $225^\\circ$ in place of $135^\\circ$ ✗.)',
    },
    {
      q: 'In the circle with center $O$ shown, minor arc $AB$ measures $90^\\circ$ and has length $5\\pi$. Find the radius of the circle.',
      fig: {
        view: [-12, -12, 12, 12],
        elems: [
          { t: 'circle', c: [0, 0], r: 10 },
          { t: 'seg', a: [0, 0], b: [10, 0] },
          { t: 'seg', a: [0, 0], b: [0, 10] },
          { t: 'angle', at: [0, 0], from: [10, 0], to: [0, 10], r: 2.2, label: '90' },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [10, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [0, 10], label: 'B', dx: 0, dy: -12 },
        ],
      },
      choices: ['$2.5$', '$20$', '$5$', '$10$'],
      answer: 3,
      solution:
        'Route one, scale up to the full circle: a $90^\\circ$ arc is $\\frac{90}{360} = \\frac{1}{4}$ of the circle, so the whole circumference is $4 \\cdot 5\\pi = 20\\pi$, and $2\\pi r = 20\\pi$ gives $r = 10$ ✓. Route two, plug the answer back in: with $r = 10$ the circumference is $20\\pi$, and a quarter of $20\\pi$ is $5\\pi$, exactly the given length ✓. (The choice $2.5$ is SKIPPING THE FRACTION, solving $2\\pi r = 5\\pi$ directly ✗; $20$ is STOPPING AT THE DIAMETER ✗; $5$ is GRABBING THE COEFFICIENT OF $5\\pi$ and calling it the radius ✗.)',
    },
    {
      q: 'In the circle with center $O$ shown, minor arc $AB$ measures $120^\\circ$ and has length $16\\pi$. What is the radius of the circle?',
      fig: {
        view: [-28, -28, 28, 28],
        elems: [
          { t: 'circle', c: [0, 0], r: 24 },
          { t: 'seg', a: [0, 0], b: [24, 0] },
          { t: 'seg', a: [0, 0], b: [-12, 20.78] },
          { t: 'angle', at: [0, 0], from: [24, 0], to: [-12, 20.78], r: 5, label: '120' },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [-12, 20.78], label: 'B', dx: -10, dy: -8 },
        ],
      },
      choices: ['$8$', '$48$', '$24$', '$12$'],
      answer: 2,
      solution:
        'Route one, scale up to the full circle: a $120^\\circ$ arc is $\\frac{120}{360} = \\frac{1}{3}$ of the circle, so the whole circumference is $3 \\cdot 16\\pi = 48\\pi$, and $2\\pi r = 48\\pi$ gives $r = 24$ ✓. Route two, plug the answer back in: with $r = 24$ the circumference is $48\\pi$, and a third of $48\\pi$ is $16\\pi$, exactly the length we were given ✓. (The choice $8$ is SKIPPING THE FRACTION, solving $2\\pi r = 16\\pi$ ✗; $48$ is STOPPING AT THE DIAMETER ✗; $12$ is USING THE MAJOR ARC, plugging $240^\\circ$ in place of $120^\\circ$ ✗.)',
    },
  ],
  // s6 — circumference ratio of two circles.
  [
    {
      q: 'A belt sander uses the two pulleys shown: a small one of radius $4$ and a large one of radius $14$. The circumference of the large pulley is how many times the circumference of the small one?',
      fig: {
        view: [-6, -16, 36, 16],
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'circle', c: [20, 0], r: 14 },
          { t: 'seg', a: [0, 0], b: [4, 0] },
          { t: 'seg', a: [20, 0], b: [34, 0] },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: -10 },
          { t: 'label', p: [27, 0], text: '14', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [20, 0], label: 'Q', dx: -10, dy: 10 },
        ],
      },
      choices: ['$12.25$', '$10$', '$7$', '$3.5$'],
      answer: 3,
      solution:
        'Route one, compute both: the small pulley has circumference $2\\pi \\cdot 4 = 8\\pi$ and the large one $2\\pi \\cdot 14 = 28\\pi$, and $\\frac{28\\pi}{8\\pi} = 3.5$ ✓. Route two, linear scaling: $C = 2\\pi r$ grows in lockstep with $r$, so the ratio of circumferences equals the ratio of radii, $\\frac{14}{4} = 3.5$ ✓. (The choice $12.25$ is SQUARING THE RATIO — that is how AREAS scale, not lengths ✗; $10$ is SUBTRACTING THE RADII instead of dividing them ✗; $7$ is MIXING A DIAMETER WITH A RADIUS, dividing $28$ by $4$ ✗.)',
    },
    {
      q: 'A snack tray holds a small round plate of radius $6$ and a large round platter of radius $15$, as shown. The rim of the platter is how many times as long as the rim of the plate?',
      fig: {
        view: [-8, -17, 41, 17],
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'circle', c: [24, 0], r: 15 },
          { t: 'seg', a: [0, 0], b: [6, 0] },
          { t: 'seg', a: [24, 0], b: [39, 0] },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [31.5, 0], text: '15', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'Q', dx: -10, dy: 10 },
        ],
      },
      choices: ['$2.5$', '$6.25$', '$9$', '$5$'],
      answer: 0,
      solution:
        'Route one, compute both: the plate’s rim is $2\\pi \\cdot 6 = 12\\pi$ and the platter’s rim is $2\\pi \\cdot 15 = 30\\pi$, and $\\frac{30\\pi}{12\\pi} = 2.5$ ✓. Route two, linear scaling: circumference is proportional to radius, so the ratio is simply $\\frac{15}{6} = 2.5$ ✓. (The choice $6.25$ is SQUARING THE RATIO, the scaling law for areas ✗; $9$ is SUBTRACTING THE RADII ✗; $5$ is MIXING A DIAMETER WITH A RADIUS, dividing $30$ by $6$ ✗.)',
    },
    {
      q: 'A craft kit contains a wooden ring of radius $4$ and an embroidery hoop of radius $18$, as shown. The hoop’s circumference is how many times the ring’s circumference?',
      fig: {
        view: [-6, -20, 45, 20],
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'circle', c: [25, 0], r: 18 },
          { t: 'seg', a: [0, 0], b: [4, 0] },
          { t: 'seg', a: [25, 0], b: [43, 0] },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: -10 },
          { t: 'label', p: [34, 0], text: '18', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [25, 0], label: 'Q', dx: -10, dy: 10 },
        ],
      },
      choices: ['$20.25$', '$14$', '$4.5$', '$9$'],
      answer: 2,
      solution:
        'Route one, compute both: the ring’s circumference is $2\\pi \\cdot 4 = 8\\pi$ and the hoop’s is $2\\pi \\cdot 18 = 36\\pi$, and $\\frac{36\\pi}{8\\pi} = 4.5$ ✓. Route two, linear scaling: circumference and radius grow together, so the ratio of circumferences is the ratio of radii, $\\frac{18}{4} = 4.5$ ✓. (The choice $20.25$ is SQUARING THE RATIO — areas do that, lengths never do ✗; $14$ is SUBTRACTING THE RADII ✗; $9$ is MIXING A DIAMETER WITH A RADIUS, dividing $36$ by $4$ ✗.)',
    },
  ],
  // s7 — complete turns of a rolling wheel.
  [
    {
      q: 'A unicycle wheel of radius $8$ inches rolls down a straight boardwalk without slipping, covering $800\\pi$ inches. How many complete turns does the wheel make?',
      choices: ['$100$', '$50$', '$25$', '$400$'],
      answer: 1,
      solution:
        'Route one, divide by the circumference: one turn rolls out $2\\pi \\cdot 8 = 16\\pi$ inches, and $\\frac{800\\pi}{16\\pi} = 50$ turns ✓. Route two, multiply back: $50$ turns at $16\\pi$ inches each cover $50 \\cdot 16\\pi = 800\\pi$ inches, exactly the boardwalk distance ✓. (The choice $100$ is DROPPING THE $2$ and dividing by $8\\pi$ ✗; $25$ is USING THE DIAMETER AS THE RADIUS, so each pretend turn covers $32\\pi$ ✗; $400$ is DIVIDING BY $2\\pi$ ALONE, ignoring the radius entirely ✗.)',
    },
    {
      q: 'A steamroller drum of radius $12$ rolls without slipping along $960\\pi$ units of fresh pavement. How many complete revolutions does the drum make?',
      choices: ['$80$', '$480$', '$20$', '$40$'],
      answer: 3,
      solution:
        'Route one, divide by the circumference: one revolution lays down $2\\pi \\cdot 12 = 24\\pi$ units, and $\\frac{960\\pi}{24\\pi} = 40$ revolutions ✓. Route two, multiply back: $40 \\cdot 24\\pi = 960\\pi$, exactly the stretch of pavement ✓. (The choice $80$ is DROPPING THE $2$ and dividing by $12\\pi$ ✗; $480$ is DIVIDING BY $2\\pi$ ALONE ✗; $20$ is USING THE DIAMETER AS THE RADIUS, pretending each revolution covers $48\\pi$ ✗.)',
    },
    {
      q: 'A hoop of radius $15$ is bowled along a gym floor without slipping and travels $1050\\pi$ units before falling over. How many complete turns did it make?',
      choices: ['$35$', '$70$', '$525$', '$17.5$'],
      answer: 0,
      solution:
        'Route one, divide by the circumference: one turn covers $2\\pi \\cdot 15 = 30\\pi$ units, and $\\frac{1050\\pi}{30\\pi} = 35$ turns ✓. Route two, multiply back: $35 \\cdot 30\\pi = 1050\\pi$, exactly the rolled distance — and note $17.5$ turns of a doubled circumference would claim the same distance, so only the correct circumference makes the whole-turn count come out whole ✓. (The choice $70$ is DROPPING THE $2$ and dividing by $15\\pi$ ✗; $525$ is DIVIDING BY $2\\pi$ ALONE ✗; $17.5$ is USING THE DIAMETER AS THE RADIUS, inflating each turn to $60\\pi$ ✗.)',
    },
  ],
  // s8 — the far arc from two central angles.
  [
    {
      q: 'Rest stops $A$, $B$, and $C$ sit on a circular walking trail with center $O$, as shown, where $\\angle AOB = 100^\\circ$ and $\\angle BOC = 115^\\circ$. What is the measure of arc $CA$ that does NOT pass through $B$?',
      fig: {
        view: [-5, -5, 5, 5],
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'seg', a: [0, 0], b: [4, 0] },
          { t: 'seg', a: [0, 0], b: [-0.69, 3.94] },
          { t: 'seg', a: [0, 0], b: [-3.28, -2.29] },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [-0.69, 3.94], r: 1, label: '100' },
          { t: 'angle', at: [0, 0], from: [-0.69, 3.94], to: [-3.28, -2.29], r: 1.3, label: '115' },
          { t: 'point', p: [0, 0], label: 'O', dx: 8, dy: 12 },
          { t: 'point', p: [4, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [-0.69, 3.94], label: 'B', dx: -8, dy: -10 },
          { t: 'point', p: [-3.28, -2.29], label: 'C', dx: -12, dy: 8 },
        ],
      },
      choices: ['$215^\\circ$', '$260^\\circ$', '$145^\\circ$', '$115^\\circ$'],
      answer: 2,
      solution:
        'Route one, subtract from the full circle: the three central angles at $O$ fill $360^\\circ$, so the angle for the arc from $C$ around to $A$ avoiding $B$ is $360^\\circ - 100^\\circ - 115^\\circ = 145^\\circ$, and an arc matches its central angle ✓. Route two, add the three arcs back up: $100^\\circ + 115^\\circ + 145^\\circ = 360^\\circ$, one complete trail ✓. (The choice $215^\\circ$ is ADDING THE TWO GIVEN ANGLES — that is the arc from $C$ to $A$ THROUGH $B$ ✗; $260^\\circ$ is SUBTRACTING ONLY $\\angle AOB$ from $360^\\circ$ ✗; $115^\\circ$ is CONFUSING ARC $CA$ WITH ARC $BC$ ✗.)',
    },
    {
      q: 'Cameras $A$, $B$, and $C$ are mounted on a circular ceiling rail with center $O$, as shown, with $\\angle AOB = 95^\\circ$ and $\\angle BOC = 130^\\circ$. Find the measure of arc $CA$ that does NOT contain $B$.',
      fig: {
        view: [-5, -5, 5, 5],
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'seg', a: [0, 0], b: [4, 0] },
          { t: 'seg', a: [0, 0], b: [-0.35, 3.98] },
          { t: 'seg', a: [0, 0], b: [-2.83, -2.83] },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [-0.35, 3.98], r: 1, label: '95' },
          { t: 'angle', at: [0, 0], from: [-0.35, 3.98], to: [-2.83, -2.83], r: 1.3, label: '130' },
          { t: 'point', p: [0, 0], label: 'O', dx: 8, dy: 12 },
          { t: 'point', p: [4, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [-0.35, 3.98], label: 'B', dx: -8, dy: -10 },
          { t: 'point', p: [-2.83, -2.83], label: 'C', dx: -12, dy: 8 },
        ],
      },
      choices: ['$135^\\circ$', '$225^\\circ$', '$265^\\circ$', '$130^\\circ$'],
      answer: 0,
      solution:
        'Route one, subtract from the full circle: the three central angles at $O$ fill $360^\\circ$, so the arc from $C$ around to $A$ avoiding $B$ measures $360^\\circ - 95^\\circ - 130^\\circ = 135^\\circ$ ✓. Route two, add the three arcs back up: $95^\\circ + 130^\\circ + 135^\\circ = 360^\\circ$, the whole rail accounted for ✓. (The choice $225^\\circ$ is ADDING THE TWO GIVEN ANGLES, which is the arc THROUGH $B$ ✗; $265^\\circ$ is SUBTRACTING ONLY $\\angle AOB$ from $360^\\circ$ ✗; $130^\\circ$ is CONFUSING ARC $CA$ WITH ARC $BC$ ✗.)',
    },
    {
      q: 'Three houses $A$, $B$, and $C$ back onto a circular cul-de-sac with center $O$, as shown, where $\\angle AOB = 105^\\circ$ and $\\angle BOC = 140^\\circ$. What is the measure of arc $CA$ that does NOT contain $B$?',
      fig: {
        view: [-5, -5, 5, 5],
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'seg', a: [0, 0], b: [4, 0] },
          { t: 'seg', a: [0, 0], b: [-1.04, 3.86] },
          { t: 'seg', a: [0, 0], b: [-1.69, -3.63] },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [-1.04, 3.86], r: 1, label: '105' },
          { t: 'angle', at: [0, 0], from: [-1.04, 3.86], to: [-1.69, -3.63], r: 1.3, label: '140' },
          { t: 'point', p: [0, 0], label: 'O', dx: 8, dy: 12 },
          { t: 'point', p: [4, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [-1.04, 3.86], label: 'B', dx: -8, dy: -10 },
          { t: 'point', p: [-1.69, -3.63], label: 'C', dx: -10, dy: 10 },
        ],
      },
      choices: ['$245^\\circ$', '$115^\\circ$', '$220^\\circ$', '$140^\\circ$'],
      answer: 1,
      solution:
        'Route one, subtract from the full circle: the three central angles at $O$ fill $360^\\circ$, so the arc from $C$ around to $A$ avoiding $B$ measures $360^\\circ - 105^\\circ - 140^\\circ = 115^\\circ$ ✓. Route two, add the three arcs back up: $105^\\circ + 140^\\circ + 115^\\circ = 360^\\circ$, one full loop of the cul-de-sac ✓. (The choice $245^\\circ$ is ADDING THE TWO GIVEN ANGLES — the long way around, THROUGH $B$ ✗; $220^\\circ$ is SUBTRACTING ONLY $\\angle BOC$ from $360^\\circ$ ✗; $140^\\circ$ is CONFUSING ARC $CA$ WITH ARC $BC$ ✗.)',
    },
  ],
  // s9 — radius from an arc, real-world flavor.
  [
    {
      q: 'A rotating sprinkler at the center $O$ of the circular lawn shown waters the wedge between $\\overline{OA}$ and $\\overline{OB}$. The watered arc $AB$ measures $45^\\circ$, and its curved outer edge is $2\\pi$ meters long. How far from the sprinkler does the water reach — that is, what is the lawn’s radius?',
      fig: {
        view: [-10, -10, 10, 10],
        elems: [
          { t: 'circle', c: [0, 0], r: 8 },
          { t: 'seg', a: [0, 0], b: [8, 0] },
          { t: 'seg', a: [0, 0], b: [5.66, 5.66] },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [5.66, 5.66], r: 1.8, label: '45' },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [8, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [5.66, 5.66], label: 'B', dx: 10, dy: -8 },
        ],
      },
      choices: ['$8$', '$16$', '$1$', '$2$'],
      answer: 0,
      solution:
        'Route one, scale up to the full circle: $45^\\circ$ is $\\frac{45}{360} = \\frac{1}{8}$ of a turn, so the full circumference is $8 \\cdot 2\\pi = 16\\pi$, and $2\\pi r = 16\\pi$ gives $r = 8$ ✓. Route two, plug the answer back in: a lawn of radius $8$ has circumference $16\\pi$, and one eighth of $16\\pi$ is $2\\pi$, exactly the watered edge ✓. (The choice $16$ is STOPPING AT THE DIAMETER ✗; $1$ is SKIPPING THE FRACTION, solving $2\\pi r = 2\\pi$ as if the sprinkler swept the whole lawn ✗; $2$ is GRABBING THE COEFFICIENT OF $2\\pi$ and calling it the radius ✗.)',
    },
    {
      q: 'A skateboarder rides the curved rim of a circular bowl from $A$ to $B$, shown. Her ride sweeps a $60^\\circ$ central angle at the bowl’s center $O$, and the curved path is $7\\pi$ feet long. What is the radius of the bowl?',
      fig: {
        view: [-25, -25, 25, 25],
        elems: [
          { t: 'circle', c: [0, 0], r: 21 },
          { t: 'seg', a: [0, 0], b: [21, 0] },
          { t: 'seg', a: [0, 0], b: [10.5, 18.19] },
          { t: 'angle', at: [0, 0], from: [21, 0], to: [10.5, 18.19], r: 4.6, label: '60' },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [21, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [10.5, 18.19], label: 'B', dx: 8, dy: -10 },
        ],
      },
      choices: ['$42$', '$3.5$', '$7$', '$21$'],
      answer: 3,
      solution:
        'Route one, scale up to the full circle: $60^\\circ$ is $\\frac{60}{360} = \\frac{1}{6}$ of a lap, so a full lap would be $6 \\cdot 7\\pi = 42\\pi$ feet, and $2\\pi r = 42\\pi$ gives $r = 21$ ✓. Route two, plug the answer back in: a bowl of radius $21$ has circumference $42\\pi$, and one sixth of $42\\pi$ is $7\\pi$, exactly her ride ✓. (The choice $42$ is STOPPING AT THE DIAMETER ✗; $3.5$ is SKIPPING THE FRACTION, solving $2\\pi r = 7\\pi$ ✗; $7$ is GRABBING THE COEFFICIENT OF $7\\pi$ and calling it the radius ✗.)',
    },
    {
      q: 'One slice of a giant fair pie spans a $72^\\circ$ central angle at the pie’s center $O$, shown, and the curved crust along the slice’s outer edge — arc $AB$ — measures $8\\pi$ inches. What is the radius of the pie?',
      fig: {
        view: [-24, -24, 24, 24],
        elems: [
          { t: 'circle', c: [0, 0], r: 20 },
          { t: 'seg', a: [0, 0], b: [20, 0] },
          { t: 'seg', a: [0, 0], b: [6.18, 19.02] },
          { t: 'angle', at: [0, 0], from: [20, 0], to: [6.18, 19.02], r: 4.4, label: '72' },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [20, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [6.18, 19.02], label: 'B', dx: 8, dy: -8 },
        ],
      },
      choices: ['$4$', '$40$', '$20$', '$8$'],
      answer: 2,
      solution:
        'Route one, scale up to the full circle: $72^\\circ$ is $\\frac{72}{360} = \\frac{1}{5}$ of the pie, so the full crust would be $5 \\cdot 8\\pi = 40\\pi$ inches, and $2\\pi r = 40\\pi$ gives $r = 20$ ✓. Route two, plug the answer back in: a pie of radius $20$ has circumference $40\\pi$, and one fifth of $40\\pi$ is $8\\pi$, exactly the slice’s crust ✓. (The choice $4$ is SKIPPING THE FRACTION, solving $2\\pi r = 8\\pi$ as if the slice were the whole pie ✗; $40$ is STOPPING AT THE DIAMETER ✗; $8$ is GRABBING THE COEFFICIENT OF $8\\pi$ and calling it the radius ✗.)',
    },
  ],
  // s10 — comparing two arc lengths on different circles.
  [
    {
      q: 'Two koi ponds are shown. A boardwalk follows a $120^\\circ$ arc of the pond with radius $6$, and another boardwalk follows a $60^\\circ$ arc of the pond with radius $9$. How do the boardwalk lengths compare?',
      fig: {
        view: [-8, -11, 30, 11],
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'circle', c: [19, 0], r: 9 },
          { t: 'seg', a: [0, 0], b: [6, 0] },
          { t: 'seg', a: [0, 0], b: [-3, 5.2] },
          { t: 'seg', a: [19, 0], b: [28, 0] },
          { t: 'seg', a: [19, 0], b: [23.5, 7.79] },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [-3, 5.2], r: 1.6, label: '120' },
          { t: 'angle', at: [19, 0], from: [28, 0], to: [23.5, 7.79], r: 2, label: '60' },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 12 },
          { t: 'label', p: [23.5, 0], text: '9', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [19, 0], label: 'P', dx: -10, dy: 10 },
        ],
      },
      choices: ['The $60^\\circ$ arc is longer', 'They have equal length', 'It cannot be determined', 'The $120^\\circ$ arc is longer'],
      answer: 3,
      solution:
        'Route one, compute both lengths: the $120^\\circ$ arc is $\\frac{120}{360} \\cdot 2\\pi \\cdot 6 = \\frac{1}{3} \\cdot 12\\pi = 4\\pi$, while the $60^\\circ$ arc is $\\frac{60}{360} \\cdot 2\\pi \\cdot 9 = \\frac{1}{6} \\cdot 18\\pi = 3\\pi$, and $4\\pi > 3\\pi$ ✓. Route two, compare angle-times-radius: arc length is proportional to the product of measure and radius, and $120 \\cdot 6 = 720$ beats $60 \\cdot 9 = 540$, the same verdict without touching $\\pi$ ✓. (The first choice is BETTING ON THE BIGGER RADIUS ALONE — the bigger pond’s arc only spans half the angle ✗; equal length is ASSUMING ANGLE AND RADIUS ALWAYS TRADE OFF EVENLY, which they only do when the products match ✗; the last choice is FORGETTING ARC LENGTH IS COMPUTABLE from measure and radius ✗.)',
    },
    {
      q: 'Two circular bike loops are shown. A painted lane covers a $30^\\circ$ arc of the loop with radius $24$, and another painted lane covers a $40^\\circ$ arc of the loop with radius $18$. How do the two painted lengths compare?',
      fig: {
        view: [-27, -27, 69, 27],
        elems: [
          { t: 'circle', c: [0, 0], r: 24 },
          { t: 'circle', c: [48, 0], r: 18 },
          { t: 'seg', a: [0, 0], b: [24, 0] },
          { t: 'seg', a: [0, 0], b: [20.78, 12] },
          { t: 'seg', a: [48, 0], b: [66, 0] },
          { t: 'seg', a: [48, 0], b: [61.79, 11.57] },
          { t: 'angle', at: [0, 0], from: [24, 0], to: [20.78, 12], r: 6, label: '30' },
          { t: 'angle', at: [48, 0], from: [66, 0], to: [61.79, 11.57], r: 5, label: '40' },
          { t: 'label', p: [12, 0], text: '24', dx: 0, dy: 12 },
          { t: 'label', p: [57, 0], text: '18', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [48, 0], label: 'P', dx: -10, dy: 10 },
        ],
      },
      choices: ['The $30^\\circ$ arc is longer', 'They have equal length', 'The $40^\\circ$ arc is longer', 'It cannot be determined'],
      answer: 1,
      solution:
        'Route one, compute both lengths: the $30^\\circ$ arc is $\\frac{30}{360} \\cdot 2\\pi \\cdot 24 = \\frac{1}{12} \\cdot 48\\pi = 4\\pi$, and the $40^\\circ$ arc is $\\frac{40}{360} \\cdot 2\\pi \\cdot 18 = \\frac{1}{9} \\cdot 36\\pi = 4\\pi$ — a perfect tie ✓. Route two, compare angle-times-radius: $30 \\cdot 24 = 720$ and $40 \\cdot 18 = 720$, and equal products mean equal arc lengths ✓. (The first choice is BETTING ON THE BIGGER RADIUS ALONE ✗; the third is JUDGING BY DEGREES ALONE — more degrees of a smaller circle can be the same distance ✗; the last is FORGETTING ARC LENGTH IS COMPUTABLE from measure and radius ✗.)',
    },
    {
      q: 'Two round observation decks are shown. A guard patrols a $135^\\circ$ arc of the deck with radius $8$, while a second guard patrols a $45^\\circ$ arc of the deck with radius $28$. Whose patrol path is longer?',
      fig: {
        view: [-10, -30, 70, 30],
        elems: [
          { t: 'circle', c: [0, 0], r: 8 },
          { t: 'circle', c: [40, 0], r: 28 },
          { t: 'seg', a: [0, 0], b: [8, 0] },
          { t: 'seg', a: [0, 0], b: [-5.66, 5.66] },
          { t: 'seg', a: [40, 0], b: [68, 0] },
          { t: 'seg', a: [40, 0], b: [59.8, 19.8] },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [-5.66, 5.66], r: 2, label: '135' },
          { t: 'angle', at: [40, 0], from: [68, 0], to: [59.8, 19.8], r: 6, label: '45' },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 12 },
          { t: 'label', p: [54, 0], text: '28', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [40, 0], label: 'P', dx: -10, dy: 10 },
        ],
      },
      choices: ['The $45^\\circ$ arc is longer', 'The $135^\\circ$ arc is longer', 'They have equal length', 'It cannot be determined'],
      answer: 0,
      solution:
        'Route one, compute both lengths: the $135^\\circ$ arc is $\\frac{135}{360} \\cdot 2\\pi \\cdot 8 = \\frac{3}{8} \\cdot 16\\pi = 6\\pi$, while the $45^\\circ$ arc is $\\frac{45}{360} \\cdot 2\\pi \\cdot 28 = \\frac{1}{8} \\cdot 56\\pi = 7\\pi$, and $7\\pi > 6\\pi$ — the small-looking $45^\\circ$ patrol wins ✓. Route two, compare angle-times-radius: $135 \\cdot 8 = 1080$ against $45 \\cdot 28 = 1260$, so the $45^\\circ$ arc is longer here too ✓. The lesson: a radius of $28$ is such a long lever that even one eighth of that huge deck outruns three eighths of the small one — RADIUS BEATS ANGLE in this matchup. (The choice of the $135^\\circ$ arc is JUDGING BY DEGREES ALONE ✗; equal length is ASSUMING ANGLE AND RADIUS ALWAYS TRADE OFF EVENLY — they only cancel when the products match ✗; the last choice is FORGETTING ARC LENGTH IS COMPUTABLE from measure and radius ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 11,
  sections: {
    '11.1': s111,
  },
}
