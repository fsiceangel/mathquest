// Introduction to Geometry chapter 11 — variations for section 11.2 (Area).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed value was worked twice by routes that do not share arithmetic:
//    the area formula against the wedge-rearrangement picture, a sector
//    fraction against a congruent-slices count or a whole-minus-minor
//    subtraction, an unknown radius against direct substitution back into
//    the original condition. Both routes must agree before a key is written.
//  - Figures are coordinate-exact: every drawn radius matches its label,
//    and every sector boundary radius sits at the exact angle its marker
//    claims. Reflex sectors are marked with an arc plus a plain-text label,
//    matching the base problem's convention.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution.

const s112 = [
  // s1 — area of a circle from its radius (figure).
  [
    {
      q: 'A circular wall mirror has radius $9$ inches, as shown. What is its area in square inches?',
      fig: {
        view: [-10.5, -10.5, 10.5, 10.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 9 },
          { t: 'seg', a: [0, 0], b: [9, 0] },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [9, 0], label: 'A', dx: 12, dy: 0 },
        ],
      },
      choices: ['$18\\pi$', '$324\\pi$', '$81\\pi$', '$9\\pi$'],
      answer: 2,
      solution:
        'The area formula gives $\\pi r^2 = \\pi \\cdot 9^2 = 81\\pi$ ✓. Check a second, independent way with the wedge picture: slice the mirror into thin wedges and lay them out alternating point-up and point-down — they fit into a near-rectangle of height $9$ and width $\\pi \\cdot 9 = 9\\pi$, and $9 \\cdot 9\\pi = 81\\pi$ ✓. (The choice $18\\pi$ is CONFUSING AREA WITH CIRCUMFERENCE — $2\\pi r$ doubles the radius instead of squaring it ✗; $324\\pi$ is SQUARING THE DIAMETER — $18^2 = 324$, but only the radius belongs in $\\pi r^2$ ✗; $9\\pi$ is FORGETTING TO SQUARE, computing $\\pi r$ instead of $\\pi r^2$ ✗.)',
    },
    {
      q: 'A backyard trampoline is a circle of radius $14$ feet, as shown. How many square feet of jumping surface does it have?',
      fig: {
        view: [-16, -16, 16, 16],
        elems: [
          { t: 'circle', c: [0, 0], r: 14 },
          { t: 'seg', a: [0, 0], b: [14, 0] },
          { t: 'label', p: [7, 0], text: '14', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'A', dx: 12, dy: 0 },
        ],
      },
      choices: ['$28\\pi$', '$196\\pi$', '$784\\pi$', '$14\\pi$'],
      answer: 1,
      solution:
        'The area formula gives $\\pi r^2 = \\pi \\cdot 14^2 = 196\\pi$ ✓. Check a second, independent way with the wedge picture: thin wedges rearrange into a near-rectangle of height $14$ and width $\\pi \\cdot 14 = 14\\pi$, so the area is $14 \\cdot 14\\pi = 196\\pi$ ✓. (The choice $28\\pi$ is CONFUSING AREA WITH CIRCUMFERENCE — that is $2\\pi \\cdot 14$ ✗; $784\\pi$ is SQUARING THE DIAMETER — $28^2 = 784$ ✗; $14\\pi$ is FORGETTING TO SQUARE the radius ✗.)',
    },
    {
      q: 'The floor of a merry-go-round is a circle of radius $12$ meters, as shown. What is the area of the floor in square meters?',
      fig: {
        view: [-14, -14, 14, 14],
        elems: [
          { t: 'circle', c: [0, 0], r: 12 },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'A', dx: 12, dy: 0 },
        ],
      },
      choices: ['$24\\pi$', '$576\\pi$', '$12\\pi$', '$144\\pi$'],
      answer: 3,
      solution:
        'The area formula gives $\\pi r^2 = \\pi \\cdot 12^2 = 144\\pi$ ✓. Check a second, independent way with the wedge picture: thin wedges rearrange into a near-rectangle of height $12$ and width $\\pi \\cdot 12 = 12\\pi$, and $12 \\cdot 12\\pi = 144\\pi$ ✓. (The choice $24\\pi$ is CONFUSING AREA WITH CIRCUMFERENCE — $2\\pi \\cdot 12 = 24\\pi$ measures the rim, not the floor ✗; $576\\pi$ is SQUARING THE DIAMETER — $24^2$ ✗; $12\\pi$ is FORGETTING TO SQUARE ✗.)',
    },
  ],
  // s2 — area of a circle from its diameter (figure).
  [
    {
      q: 'A round crepe griddle has diameter $16$ inches, as shown. What is its cooking area in square inches?',
      fig: {
        view: [-9.5, -9.5, 9.5, 9.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 8 },
          { t: 'seg', a: [-8, 0], b: [8, 0] },
          { t: 'label', p: [0, 0], text: '16', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-8, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [8, 0], label: 'Q', dx: 12, dy: 0 },
        ],
      },
      choices: ['$64\\pi$', '$256\\pi$', '$16\\pi$', '$128\\pi$'],
      answer: 0,
      solution:
        'Convert to the radius first: the diameter is $16$, so $r = 8$, and the area is $\\pi \\cdot 8^2 = 64\\pi$ ✓. Check a second, independent way with the diameter form of the formula: $\\frac{\\pi d^2}{4} = \\frac{\\pi \\cdot 256}{4} = 64\\pi$ — the same answer with the halving built in at the end ✓. (The choice $256\\pi$ is SQUARING THE DIAMETER — $16$ went into $\\pi r^2$ without being halved ✗; $16\\pi$ is COMPUTING THE CIRCUMFERENCE, $\\pi d$ ✗; $128\\pi$ is HALVING AFTER SQUARING — $\\frac{256}{2}$, but the formula divides $d^2$ by $4$, not $2$ ✗.)',
    },
    {
      q: 'A station wall clock is a circle of diameter $18$ inches, as shown. What is the area of its face in square inches?',
      fig: {
        view: [-10.5, -10.5, 10.5, 10.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 9 },
          { t: 'seg', a: [-9, 0], b: [9, 0] },
          { t: 'label', p: [0, 0], text: '18', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-9, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [9, 0], label: 'Q', dx: 12, dy: 0 },
        ],
      },
      choices: ['$324\\pi$', '$18\\pi$', '$81\\pi$', '$162\\pi$'],
      answer: 2,
      solution:
        'Convert to the radius first: the diameter is $18$, so $r = 9$, and the area is $\\pi \\cdot 9^2 = 81\\pi$ ✓. Check a second, independent way with the diameter form: $\\frac{\\pi d^2}{4} = \\frac{\\pi \\cdot 324}{4} = 81\\pi$ ✓. (The choice $324\\pi$ is SQUARING THE DIAMETER — $18^2$ straight into the formula ✗; $18\\pi$ is COMPUTING THE CIRCUMFERENCE, $\\pi d$ ✗; $162\\pi$ is HALVING AFTER SQUARING — $\\frac{324}{2}$ instead of $\\frac{324}{4}$ ✗.)',
    },
    {
      q: 'A circular fountain pool has diameter $20$ meters, as shown. How many square meters of ground does it cover?',
      fig: {
        view: [-11.5, -11.5, 11.5, 11.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 10 },
          { t: 'seg', a: [-10, 0], b: [10, 0] },
          { t: 'label', p: [0, 0], text: '20', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-10, 0], label: 'P', dx: -12, dy: 0 },
          { t: 'point', p: [10, 0], label: 'Q', dx: 12, dy: 0 },
        ],
      },
      choices: ['$200\\pi$', '$100\\pi$', '$400\\pi$', '$20\\pi$'],
      answer: 1,
      solution:
        'Convert to the radius first: the diameter is $20$, so $r = 10$, and the area is $\\pi \\cdot 10^2 = 100\\pi$ ✓. Check a second, independent way with the diameter form: $\\frac{\\pi d^2}{4} = \\frac{\\pi \\cdot 400}{4} = 100\\pi$ ✓. (The choice $400\\pi$ is SQUARING THE DIAMETER ✗; $20\\pi$ is COMPUTING THE CIRCUMFERENCE, $\\pi d$ ✗; $200\\pi$ is HALVING AFTER SQUARING — $\\frac{400}{2}$, one division short ✗.)',
    },
  ],
  // s3 — area of a sector (figure).
  [
    {
      q: 'A lawn sprinkler at $O$ sprays water over the $90^\\circ$ sector of radius $6$ meters shown, between $\\overline{OA}$ and $\\overline{OB}$. What area of lawn gets watered?',
      fig: {
        view: [-7.5, -7.5, 7.5, 7.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'seg', a: [0, 0], b: [6, 0] },
          { t: 'seg', a: [0, 0], b: [0, 6] },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [0, 6], r: 1.4, label: '90' },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [0, 6], label: 'B', dx: 0, dy: -12 },
        ],
      },
      choices: ['$36\\pi$', '$3\\pi$', '$18\\pi$', '$9\\pi$'],
      answer: 3,
      solution:
        'The fraction formula gives $\\frac{90}{360} \\cdot \\pi \\cdot 6^2 = \\frac{1}{4} \\cdot 36\\pi = 9\\pi$ ✓. Check a second, independent way by counting congruent slices: four $90^\\circ$ sectors tile the whole circle exactly, so each one holds $\\frac{36\\pi}{4} = 9\\pi$ ✓. (The choice $36\\pi$ is FORGETTING THE FRACTION and reporting the whole circle ✗; $3\\pi$ is COMPUTING ARC LENGTH — $\\frac{1}{4} \\cdot 12\\pi$ measures the curved edge, not the region ✗; $18\\pi$ is DIVIDING BY $180$ — $\\frac{90}{180} \\cdot 36\\pi$, but a full turn is $360^\\circ$ ✗.)',
    },
    {
      q: 'A folding paper fan opens into the $120^\\circ$ sector of radius $6$ inches shown, between $\\overline{OA}$ and $\\overline{OB}$. What is the area of the opened fan?',
      fig: {
        view: [-7.5, -7.5, 7.5, 7.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'seg', a: [0, 0], b: [6, 0] },
          { t: 'seg', a: [0, 0], b: [-3, 5.196] },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [-3, 5.196], r: 1.4, label: '120' },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [6, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [-3, 5.196], label: 'B', dx: -10, dy: -8 },
        ],
      },
      choices: ['$12\\pi$', '$36\\pi$', '$4\\pi$', '$24\\pi$'],
      answer: 0,
      solution:
        'The fraction formula gives $\\frac{120}{360} \\cdot \\pi \\cdot 6^2 = \\frac{1}{3} \\cdot 36\\pi = 12\\pi$ ✓. Check a second, independent way by counting congruent slices: three $120^\\circ$ sectors tile the whole circle, so each holds $\\frac{36\\pi}{3} = 12\\pi$ ✓. (The choice $36\\pi$ is FORGETTING THE FRACTION — that is the entire circle ✗; $4\\pi$ is COMPUTING ARC LENGTH, $\\frac{1}{3} \\cdot 12\\pi$ ✗; $24\\pi$ is DIVIDING BY $180$ — $\\frac{120}{180} \\cdot 36\\pi$ uses half a turn where a full turn belongs ✗.)',
    },
    {
      q: 'A harbor searchlight at $O$ sweeps out the $45^\\circ$ sector of radius $12$ shown, between $\\overline{OA}$ and $\\overline{OB}$. What is the area of the lit region?',
      fig: {
        view: [-14, -14, 14, 14],
        elems: [
          { t: 'circle', c: [0, 0], r: 12 },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [8.485, 8.485] },
          { t: 'angle', at: [0, 0], from: [12, 0], to: [8.485, 8.485], r: 2.8, label: '45' },
          { t: 'label', p: [6, 0], text: '12', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [8.485, 8.485], label: 'B', dx: 10, dy: -8 },
        ],
      },
      choices: ['$3\\pi$', '$144\\pi$', '$18\\pi$', '$36\\pi$'],
      answer: 2,
      solution:
        'The fraction formula gives $\\frac{45}{360} \\cdot \\pi \\cdot 12^2 = \\frac{1}{8} \\cdot 144\\pi = 18\\pi$ ✓. Check a second, independent way by counting congruent slices: eight $45^\\circ$ sectors tile the whole circle, so each holds $\\frac{144\\pi}{8} = 18\\pi$ ✓. (The choice $144\\pi$ is FORGETTING THE FRACTION — the full circle ✗; $3\\pi$ is COMPUTING ARC LENGTH, $\\frac{1}{8} \\cdot 24\\pi$ ✗; $36\\pi$ is DIVIDING BY $180$ — $\\frac{45}{180} \\cdot 144\\pi$ ✗.)',
    },
  ],
  // s4 — radius of a circle from its area.
  [
    {
      q: 'A circular skating rink covers an area of $121\\pi$ square meters. What is the radius of the rink?',
      choices: ['$121$', '$11$', '$22$', '$60.5$'],
      answer: 1,
      solution:
        'From $\\pi r^2 = 121\\pi$ we get $r^2 = 121$, and taking the square root gives $r = 11$ ✓. Check a second, independent way by substituting back: a radius of $11$ gives area $\\pi \\cdot 11^2 = 121\\pi$, exactly the area given ✓. (The choice $121$ is STOPPING AT $r^2$ — the $121$ inside the area is the radius squared, not the radius ✗; $22$ is REPORTING THE DIAMETER ✗; $60.5$ is DIVIDING BY TWO INSTEAD OF TAKING THE SQUARE ROOT — undoing a square takes a root, not a halving ✗.)',
    },
    {
      q: 'The circular floor of a lighthouse has area $169\\pi$ square feet. Find the radius of the floor.',
      choices: ['$169$', '$26$', '$84.5$', '$13$'],
      answer: 3,
      solution:
        'From $\\pi r^2 = 169\\pi$ we get $r^2 = 169$, so $r = 13$ ✓. Check a second, independent way by substituting back: radius $13$ gives $\\pi \\cdot 13^2 = 169\\pi$, matching the given area ✓. (The choice $169$ is STOPPING AT $r^2$ ✗; $26$ is REPORTING THE DIAMETER ✗; $84.5$ is DIVIDING BY TWO INSTEAD OF TAKING THE SQUARE ROOT — $\\frac{169}{2}$ has nothing to do with undoing a square ✗.)',
    },
    {
      q: 'A giant circular parachute canopy spreads over $225\\pi$ square feet of ground. What is its radius?',
      choices: ['$15$', '$225$', '$30$', '$112.5$'],
      answer: 0,
      solution:
        'From $\\pi r^2 = 225\\pi$ we get $r^2 = 225$, so $r = 15$ ✓. Check a second, independent way by substituting back: radius $15$ gives $\\pi \\cdot 15^2 = 225\\pi$, exactly as stated ✓. (The choice $225$ is STOPPING AT $r^2$ ✗; $30$ is REPORTING THE DIAMETER ✗; $112.5$ is DIVIDING BY TWO INSTEAD OF TAKING THE SQUARE ROOT ✗.)',
    },
  ],
  // s5 — how many times bigger: area ratio of two circles (figure).
  [
    {
      q: 'A round button (circle $P$) has radius $2$ and a dinner plate (circle $Q$) has radius $10$, as shown. The area of the plate is how many times the area of the button?',
      fig: {
        view: [-4, -11, 26, 11],
        elems: [
          { t: 'circle', c: [0, 0], r: 2 },
          { t: 'circle', c: [15, 0], r: 10 },
          { t: 'seg', a: [0, 0], b: [2, 0] },
          { t: 'seg', a: [15, 0], b: [25, 0] },
          { t: 'label', p: [1, 0], text: '2', dx: 0, dy: -10 },
          { t: 'label', p: [20, 0], text: '10', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [15, 0], label: 'Q', dx: -10, dy: 10 },
        ],
      },
      choices: ['$25$', '$5$', '$64$', '$96$'],
      answer: 0,
      solution:
        'Compute both areas: the button has $\\pi \\cdot 2^2 = 4\\pi$ and the plate has $\\pi \\cdot 10^2 = 100\\pi$, and $\\frac{100\\pi}{4\\pi} = 25$ ✓. Check a second, independent way by scaling: the radius is multiplied by $\\frac{10}{2} = 5$, and areas scale with the SQUARE of the factor, so the area is multiplied by $5^2 = 25$ ✓. (The choice $5$ is SCALING THE AREA LIKE A LENGTH — $5$ is the ratio of the radii, and only lengths scale that way ✗; $64$ is SQUARING THE DIFFERENCE OF THE RADII, $(10 - 2)^2$, which compares nothing to nothing ✗; $96$ is SUBTRACTING THE AREAS, $100 - 4$, when the question asks for a ratio ✗.)',
    },
    {
      q: 'A cookie (circle $A$) has radius $3$ cm and a pizza (circle $B$) has radius $12$ cm, as shown. How many times the cookie’s area is the pizza’s area?',
      fig: {
        view: [-4.5, -13, 31, 13],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'circle', c: [18, 0], r: 12 },
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [18, 0], b: [30, 0] },
          { t: 'label', p: [1.5, 0], text: '3', dx: 0, dy: -10 },
          { t: 'label', p: [24, 0], text: '12', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [18, 0], label: 'B', dx: -10, dy: 10 },
        ],
      },
      choices: ['$4$', '$81$', '$135$', '$16$'],
      answer: 3,
      solution:
        'Compute both areas: the cookie has $\\pi \\cdot 3^2 = 9\\pi$ and the pizza has $\\pi \\cdot 12^2 = 144\\pi$, and $\\frac{144\\pi}{9\\pi} = 16$ ✓. Check a second, independent way by scaling: the radius grows by a factor of $\\frac{12}{3} = 4$, so the area grows by $4^2 = 16$ ✓. (The choice $4$ is SCALING THE AREA LIKE A LENGTH — that is the radius ratio ✗; $81$ is SQUARING THE DIFFERENCE OF THE RADII, $(12 - 3)^2$ ✗; $135$ is SUBTRACTING THE AREAS, $144 - 9$, instead of dividing them ✗.)',
    },
    {
      q: 'A coin (circle $C$) has radius $2$ and the lid of a rain barrel (circle $D$) has radius $18$, as shown. The lid’s area is how many times the coin’s area?',
      fig: {
        view: [-3.5, -19, 42, 19],
        elems: [
          { t: 'circle', c: [0, 0], r: 2 },
          { t: 'circle', c: [23, 0], r: 18 },
          { t: 'seg', a: [0, 0], b: [2, 0] },
          { t: 'seg', a: [23, 0], b: [41, 0] },
          { t: 'label', p: [1, 0], text: '2', dx: 0, dy: -10 },
          { t: 'label', p: [32, 0], text: '18', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'C', dx: -10, dy: 10 },
          { t: 'point', p: [23, 0], label: 'D', dx: -10, dy: 10 },
        ],
      },
      choices: ['$9$', '$320$', '$81$', '$256$'],
      answer: 2,
      solution:
        'Compute both areas: the coin has $\\pi \\cdot 2^2 = 4\\pi$ and the lid has $\\pi \\cdot 18^2 = 324\\pi$, and $\\frac{324\\pi}{4\\pi} = 81$ ✓. Check a second, independent way by scaling: the radius is multiplied by $\\frac{18}{2} = 9$, so the area is multiplied by $9^2 = 81$ ✓. (The choice $9$ is SCALING THE AREA LIKE A LENGTH — the radius ratio, unsquared ✗; $256$ is SQUARING THE DIFFERENCE OF THE RADII, $(18 - 2)^2$ ✗; $320$ is SUBTRACTING THE AREAS, $324 - 4$, when a “how many times” question wants a quotient ✗.)',
    },
  ],
  // s6 — area of a circle from its circumference.
  [
    {
      q: 'The rim of a circular trampoline net measures $26\\pi$ feet around. What is the area enclosed by the rim?',
      choices: ['$676\\pi$', '$169\\pi$', '$26\\pi$', '$13\\pi$'],
      answer: 1,
      solution:
        'Cross the bridge to the radius: $2\\pi r = 26\\pi$ gives $r = 13$, and then the area is $\\pi \\cdot 13^2 = 169\\pi$ ✓. Check a second, independent way straight from the circumference: $A = \\frac{C^2}{4\\pi} = \\frac{(26\\pi)^2}{4\\pi} = \\frac{676\\pi^2}{4\\pi} = 169\\pi$ ✓. (The choice $676\\pi$ is SQUARING THE $26$ WITHOUT CROSSING TO THE RADIUS — $26$ is the circumference coefficient, not the radius ✗; $26\\pi$ is ANSWERING WITH THE CIRCUMFERENCE ✗; $13\\pi$ is FORGETTING TO SQUARE THE RADIUS after finding $r = 13$ ✗.)',
    },
    {
      q: 'A circular garden bed needs $24\\pi$ meters of edging to go all the way around. How many square meters of soil does the bed contain?',
      choices: ['$576\\pi$', '$24\\pi$', '$12\\pi$', '$144\\pi$'],
      answer: 3,
      solution:
        'Cross the bridge to the radius: $2\\pi r = 24\\pi$ gives $r = 12$, so the area is $\\pi \\cdot 12^2 = 144\\pi$ ✓. Check a second, independent way straight from the circumference: $A = \\frac{C^2}{4\\pi} = \\frac{576\\pi^2}{4\\pi} = 144\\pi$ ✓. (The choice $576\\pi$ is SQUARING THE $24$ WITHOUT CROSSING TO THE RADIUS ✗; $24\\pi$ is ANSWERING WITH THE CIRCUMFERENCE ✗; $12\\pi$ is FORGETTING TO SQUARE THE RADIUS ✗.)',
    },
    {
      q: 'A running track forms a circle whose length is $28\\pi$ meters. What is the area of the field inside the track?',
      choices: ['$784\\pi$', '$14\\pi$', '$196\\pi$', '$28\\pi$'],
      answer: 2,
      solution:
        'Cross the bridge to the radius: $2\\pi r = 28\\pi$ gives $r = 14$, so the area is $\\pi \\cdot 14^2 = 196\\pi$ ✓. Check a second, independent way straight from the circumference: $A = \\frac{C^2}{4\\pi} = \\frac{784\\pi^2}{4\\pi} = 196\\pi$ ✓. (The choice $784\\pi$ is SQUARING THE $28$ WITHOUT CROSSING TO THE RADIUS ✗; $28\\pi$ is ANSWERING WITH THE CIRCUMFERENCE ✗; $14\\pi$ is FORGETTING TO SQUARE THE RADIUS ✗.)',
    },
  ],
  // s7 — area of a reflex (major) sector (figure).
  [
    {
      q: 'A cat door is cut from a circle of radius $4$, and the flap that remains is the $270^\\circ$ sector shown (the larger region between $\\overline{OA}$ and $\\overline{OB}$). What is the area of the flap?',
      fig: {
        view: [-5.5, -5.5, 5.5, 5.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'seg', a: [0, 0], b: [4, 0] },
          { t: 'seg', a: [0, 0], b: [0, -4] },
          { t: 'arc', c: [0, 0], r: 1, from: 0, to: 270 },
          { t: 'label', p: [-1.273, 1.273], text: '270', dx: 0, dy: 4 },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: 12, dy: 10 },
          { t: 'point', p: [4, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [0, -4], label: 'B', dx: 0, dy: 14 },
        ],
      },
      choices: ['$4\\pi$', '$16\\pi$', '$12\\pi$', '$6\\pi$'],
      answer: 2,
      solution:
        'The fraction formula gives $\\frac{270}{360} \\cdot \\pi \\cdot 4^2 = \\frac{3}{4} \\cdot 16\\pi = 12\\pi$ ✓. Check a second, independent way as whole minus minor: the missing slice is $90^\\circ$, a quarter of the circle, so the flap is $16\\pi - \\frac{1}{4} \\cdot 16\\pi = 16\\pi - 4\\pi = 12\\pi$ ✓. (The choice $4\\pi$ is TAKING THE MINOR SECTOR — the $90^\\circ$ slice that was cut away ✗; $16\\pi$ is FORGETTING THE FRACTION and reporting the whole circle ✗; $6\\pi$ is COMPUTING ARC LENGTH, $\\frac{3}{4} \\cdot 8\\pi$ ✗.)',
    },
    {
      q: 'A pie of radius $6$ inches has one $60^\\circ$ slice missing; the $300^\\circ$ sector shown (the larger region between $\\overline{OA}$ and $\\overline{OB}$) is what remains. What is the area of the remaining pie?',
      fig: {
        view: [-7.5, -7.5, 7.5, 7.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'seg', a: [0, 0], b: [6, 0] },
          { t: 'seg', a: [0, 0], b: [3, -5.196] },
          { t: 'arc', c: [0, 0], r: 1.2, from: 0, to: 300 },
          { t: 'label', p: [-1.819, 1.05], text: '300', dx: 0, dy: 4 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: 10, dy: 12 },
          { t: 'point', p: [6, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [3, -5.196], label: 'B', dx: 10, dy: 8 },
        ],
      },
      choices: ['$30\\pi$', '$6\\pi$', '$36\\pi$', '$10\\pi$'],
      answer: 0,
      solution:
        'The fraction formula gives $\\frac{300}{360} \\cdot \\pi \\cdot 6^2 = \\frac{5}{6} \\cdot 36\\pi = 30\\pi$ ✓. Check a second, independent way as whole minus minor: the missing slice is $60^\\circ$, a sixth of the circle, so what remains is $36\\pi - \\frac{36\\pi}{6} = 36\\pi - 6\\pi = 30\\pi$ ✓. (The choice $6\\pi$ is TAKING THE MINOR SECTOR — the slice that was eaten ✗; $36\\pi$ is FORGETTING THE FRACTION — the whole pie ✗; $10\\pi$ is COMPUTING ARC LENGTH, $\\frac{5}{6} \\cdot 12\\pi$ ✗.)',
    },
    {
      q: 'In the circle with center $O$ and radius $6$, what is the area of the sector with central angle $210^\\circ$ (the larger region between $\\overline{OA}$ and $\\overline{OB}$)?',
      fig: {
        view: [-7.5, -7.5, 7.5, 7.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'seg', a: [0, 0], b: [6, 0] },
          { t: 'seg', a: [0, 0], b: [-5.196, -3] },
          { t: 'arc', c: [0, 0], r: 1.2, from: 0, to: 210 },
          { t: 'label', p: [-0.543, 2.028], text: '210', dx: 0, dy: 4 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: 6, dy: 14 },
          { t: 'point', p: [6, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [-5.196, -3], label: 'B', dx: -10, dy: 10 },
        ],
      },
      choices: ['$36\\pi$', '$21\\pi$', '$15\\pi$', '$7\\pi$'],
      answer: 1,
      solution:
        'The fraction formula gives $\\frac{210}{360} \\cdot \\pi \\cdot 6^2 = \\frac{7}{12} \\cdot 36\\pi = 21\\pi$ ✓. Check a second, independent way as whole minus minor: the other side of the two radii is a $150^\\circ$ sector of area $\\frac{150}{360} \\cdot 36\\pi = 15\\pi$, and $36\\pi - 15\\pi = 21\\pi$ ✓. (The choice $15\\pi$ is TAKING THE MINOR SECTOR — the $150^\\circ$ region on the wrong side of the radii ✗; $36\\pi$ is FORGETTING THE FRACTION ✗; $7\\pi$ is COMPUTING ARC LENGTH, $\\frac{7}{12} \\cdot 12\\pi$ ✗.)',
    },
  ],
  // s8 — radius of the circle from a sector's area (figure).
  [
    {
      q: 'A quarter-circle stage apron — the $90^\\circ$ sector shown between $\\overline{OA}$ and $\\overline{OB}$ — has area $25\\pi$ square feet. What is the radius of the circle?',
      fig: {
        view: [-11.5, -11.5, 11.5, 11.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 10 },
          { t: 'seg', a: [0, 0], b: [10, 0] },
          { t: 'seg', a: [0, 0], b: [0, 10] },
          { t: 'angle', at: [0, 0], from: [10, 0], to: [0, 10], r: 2.4, label: '90' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [10, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [0, 10], label: 'B', dx: 0, dy: -12 },
        ],
      },
      choices: ['$100$', '$5$', '$20$', '$10$'],
      answer: 3,
      solution:
        'A $90^\\circ$ sector is $\\frac{90}{360} = \\frac{1}{4}$ of the circle, so the full circle has area $4 \\cdot 25\\pi = 100\\pi$; then $\\pi r^2 = 100\\pi$ gives $r^2 = 100$ and $r = 10$ ✓. Check a second, independent way by substituting back: a circle of radius $10$ has area $100\\pi$, and a quarter of that is $25\\pi$, exactly the apron ✓. (The choice $100$ is STOPPING AT $r^2$ ✗; $5$ is TREATING THE SECTOR AS THE WHOLE CIRCLE — solving $\\pi r^2 = 25\\pi$ ignores the $90^\\circ$ ✗; $20$ is REPORTING THE DIAMETER ✗.)',
    },
    {
      q: 'The $144^\\circ$ sector shown between $\\overline{OA}$ and $\\overline{OB}$ is a wedge of stained glass with area $90\\pi$ square inches. Find the radius of the circle.',
      fig: {
        view: [-17, -17, 17, 17],
        elems: [
          { t: 'circle', c: [0, 0], r: 15 },
          { t: 'seg', a: [0, 0], b: [15, 0] },
          { t: 'seg', a: [0, 0], b: [-12.135, 8.817] },
          { t: 'angle', at: [0, 0], from: [15, 0], to: [-12.135, 8.817], r: 3.5, label: '144' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [15, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [-12.135, 8.817], label: 'B', dx: -12, dy: -6 },
        ],
      },
      choices: ['$225$', '$15$', '$30$', '$6$'],
      answer: 1,
      solution:
        'The sector is $\\frac{144}{360} = \\frac{2}{5}$ of the circle, so the full circle has area $\\frac{5}{2} \\cdot 90\\pi = 225\\pi$; then $\\pi r^2 = 225\\pi$ gives $r^2 = 225$ and $r = 15$ ✓. Check a second, independent way by substituting back: radius $15$ gives a circle of area $225\\pi$, and $\\frac{2}{5} \\cdot 225\\pi = 90\\pi$, exactly the wedge ✓. (The choice $225$ is STOPPING AT $r^2$ ✗; $30$ is REPORTING THE DIAMETER ✗; $6$ is INVERTING THE FRACTION — multiplying $90$ by $\\frac{2}{5}$ instead of dividing gives $36$, whose square root is $6$ ✗.)',
    },
    {
      q: 'A slice of round flatbread — the $60^\\circ$ sector shown between $\\overline{OA}$ and $\\overline{OB}$ — has area $24\\pi$ square centimeters. What is the radius of the flatbread?',
      fig: {
        view: [-14, -14, 14, 14],
        elems: [
          { t: 'circle', c: [0, 0], r: 12 },
          { t: 'seg', a: [0, 0], b: [12, 0] },
          { t: 'seg', a: [0, 0], b: [6, 10.392] },
          { t: 'angle', at: [0, 0], from: [12, 0], to: [6, 10.392], r: 2.8, label: '60' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [12, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [6, 10.392], label: 'B', dx: 6, dy: -10 },
        ],
      },
      choices: ['$12$', '$144$', '$24$', '$2$'],
      answer: 0,
      solution:
        'A $60^\\circ$ sector is $\\frac{60}{360} = \\frac{1}{6}$ of the circle, so the full circle has area $6 \\cdot 24\\pi = 144\\pi$; then $\\pi r^2 = 144\\pi$ gives $r^2 = 144$ and $r = 12$ ✓. Check a second, independent way by substituting back: radius $12$ gives a circle of area $144\\pi$, and a sixth of that is $24\\pi$, exactly the slice ✓. (The choice $144$ is STOPPING AT $r^2$ ✗; $24$ is REPORTING THE DIAMETER ✗; $2$ is INVERTING THE FRACTION — multiplying $24$ by $\\frac{1}{6}$ instead of dividing gives $4$, whose square root is $2$ ✗.)',
    },
  ],
  // s9 — radius where the area number meets the circumference number.
  [
    {
      q: 'For what radius is a circle’s area (in square units) equal to TWICE its circumference (in units)?',
      choices: ['$2$', '$8$', '$1$', '$4$'],
      answer: 3,
      solution:
        'Set up the equation: $\\pi r^2 = 2 \\cdot 2\\pi r = 4\\pi r$. Dividing both sides by $\\pi r$ (fine, since $r \\neq 0$) leaves $r = 4$ ✓. Check a second, independent way by substituting back: radius $4$ gives area $16\\pi$ and circumference $8\\pi$, and $16\\pi$ is exactly twice $8\\pi$ ✓. (The choice $2$ is DROPPING THE “TWICE” — solving the plain equality $\\pi r^2 = 2\\pi r$ ✗; $1$ is PUTTING THE TWICE ON THE WRONG SIDE — $2\\pi r^2 = 2\\pi r$ gives $r = 1$ ✗; $8$ is REPORTING THE DIAMETER ✗.)',
    },
    {
      q: 'A circle’s area (in square units) comes out to FOUR TIMES its circumference (in units). What is its radius?',
      choices: ['$2$', '$16$', '$8$', '$\\frac{1}{2}$'],
      answer: 2,
      solution:
        'Set up the equation: $\\pi r^2 = 4 \\cdot 2\\pi r = 8\\pi r$. Dividing both sides by $\\pi r$ leaves $r = 8$ ✓. Check a second, independent way by substituting back: radius $8$ gives area $64\\pi$ and circumference $16\\pi$, and $64\\pi = 4 \\cdot 16\\pi$ ✓. (The choice $2$ is DROPPING THE FACTOR OF FOUR — the plain equality $\\pi r^2 = 2\\pi r$ ✗; $\\frac{1}{2}$ is PUTTING THE FOUR ON THE WRONG SIDE — $4\\pi r^2 = 2\\pi r$ gives $r = \\frac{1}{2}$ ✗; $16$ is REPORTING THE DIAMETER ✗.)',
    },
    {
      q: 'For what radius is a circle’s area (in square units) only HALF its circumference (in units)?',
      choices: ['$2$', '$1$', '$4$', '$\\pi$'],
      answer: 1,
      solution:
        'Set up the equation: $\\pi r^2 = \\frac{1}{2} \\cdot 2\\pi r = \\pi r$. Dividing both sides by $\\pi r$ leaves $r = 1$ ✓. Check a second, independent way by substituting back: radius $1$ gives area $\\pi$ and circumference $2\\pi$, and $\\pi$ is exactly half of $2\\pi$ ✓. (The choice $2$ is SOLVING THE PLAIN EQUALITY — area equal to the FULL circumference happens at $r = 2$ ✗; $4$ is PUTTING THE HALF ON THE WRONG SIDE — $\\frac{1}{2}\\pi r^2 = 2\\pi r$ gives $r = 4$ ✗; $\\pi$ is LEAVING $\\pi$ IN THE ANSWER — every $\\pi$ cancels from the equation ✗.)',
    },
  ],
  // s10 — a sector whose area equals a full circle of radius R (figure).
  [
    {
      q: 'The $250^\\circ$ sector shown (the larger region between $\\overline{OA}$ and $\\overline{OB}$) of a circle with radius $6$ has the same area as a full circle of radius $R$. What is $R$?',
      fig: {
        view: [-7.5, -7.5, 7.5, 7.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'seg', a: [0, 0], b: [6, 0] },
          { t: 'seg', a: [0, 0], b: [-2.052, -5.638] },
          { t: 'arc', c: [0, 0], r: 1.2, from: 0, to: 250 },
          { t: 'label', p: [-1.204, 1.72], text: '250', dx: 0, dy: 4 },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: 12, dy: 8 },
          { t: 'point', p: [6, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [-2.052, -5.638], label: 'B', dx: -10, dy: 10 },
        ],
      },
      choices: ['$25$', '$5$', '$10$', '$6$'],
      answer: 1,
      solution:
        'The sector is $\\frac{250}{360} = \\frac{25}{36}$ of a circle with area $36\\pi$, so its area is $\\frac{25}{36} \\cdot 36\\pi = 25\\pi$; setting $\\pi R^2 = 25\\pi$ gives $R^2 = 25$ and $R = 5$ ✓. Check a second, independent way by substituting back: a full circle of radius $5$ has area $25\\pi$, and $\\frac{25\\pi}{36\\pi} = \\frac{25}{36}$, which is exactly $\\frac{250}{360}$ of the big circle ✓. (The choice $25$ is STOPPING AT $R^2$ ✗; $10$ is REPORTING THE DIAMETER ✗; $6$ is REUSING THE GIVEN RADIUS — a $250^\\circ$ sector holds less than its own full circle ✗.)',
    },
    {
      q: 'A $45^\\circ$ sector of a circle with radius $16$ (shown between $\\overline{OA}$ and $\\overline{OB}$) has the same area as a full circle of radius $R$. Find $R$.',
      fig: {
        view: [-18, -18, 18, 18],
        elems: [
          { t: 'circle', c: [0, 0], r: 16 },
          { t: 'seg', a: [0, 0], b: [16, 0] },
          { t: 'seg', a: [0, 0], b: [11.314, 11.314] },
          { t: 'angle', at: [0, 0], from: [16, 0], to: [11.314, 11.314], r: 4, label: '45' },
          { t: 'label', p: [8, 0], text: '16', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [11.314, 11.314], label: 'B', dx: 10, dy: -8 },
        ],
      },
      choices: ['$32$', '$16\\sqrt{2}$', '$4\\sqrt{2}$', '$16$'],
      answer: 2,
      solution:
        'The sector is $\\frac{45}{360} = \\frac{1}{8}$ of a circle with area $\\pi \\cdot 16^2 = 256\\pi$, so its area is $32\\pi$; setting $\\pi R^2 = 32\\pi$ gives $R^2 = 32$ and $R = \\sqrt{32} = 4\\sqrt{2}$ ✓. Check a second, independent way by substituting back: $(4\\sqrt{2})^2 = 16 \\cdot 2 = 32$, so a circle of radius $4\\sqrt{2}$ has area $32\\pi$, and eight copies of $32\\pi$ rebuild the full $256\\pi$ ✓. (The choice $32$ is STOPPING AT $R^2$ ✗; $16\\sqrt{2}$ is MIS-SIMPLIFYING THE ROOT — $\\sqrt{32} = \\sqrt{16} \\cdot \\sqrt{2}$, and $\\sqrt{16}$ is $4$, not $16$ ✗; $16$ is REUSING THE GIVEN RADIUS ✗.)',
    },
    {
      q: 'A $90^\\circ$ sector of a circle with radius $6$ (shown between $\\overline{OA}$ and $\\overline{OB}$) has the same area as a full circle of radius $R$. What is $R$?',
      fig: {
        view: [-7.5, -7.5, 7.5, 7.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 6 },
          { t: 'seg', a: [0, 0], b: [6, 0] },
          { t: 'seg', a: [0, 0], b: [0, 6] },
          { t: 'angle', at: [0, 0], from: [6, 0], to: [0, 6], r: 1.4, label: '90' },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 12 },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [6, 0], label: 'A', dx: 12, dy: 0 },
          { t: 'point', p: [0, 6], label: 'B', dx: 0, dy: -12 },
        ],
      },
      choices: ['$3$', '$9$', '$6$', '$1.5$'],
      answer: 0,
      solution:
        'The sector is $\\frac{90}{360} = \\frac{1}{4}$ of a circle with area $36\\pi$, so its area is $9\\pi$; setting $\\pi R^2 = 9\\pi$ gives $R^2 = 9$ and $R = 3$ ✓. Check a second, independent way by substituting back: a circle of radius $3$ has area $9\\pi$, and four copies of $9\\pi$ rebuild the full $36\\pi$ — a quarter sector matched exactly ✓. (The choice $9$ is STOPPING AT $R^2$ ✗; $6$ is FORGETTING THE QUARTER — solving $\\pi R^2 = 36\\pi$ matches the whole circle instead of the sector ✗; $1.5$ is QUARTERING THE RADIUS — scaling the length by $\\frac{1}{4}$ when it is the AREA that gets quartered ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 11,
  sections: {
    '11.2': s112,
  },
}
