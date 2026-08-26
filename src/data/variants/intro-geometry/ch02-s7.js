// Introduction to Geometry chapter 2 — variations for section 2.7
// (Parallel Lines Revisited). All problems, figures, and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every angle was worked twice by two genuinely different routes — the
//    helper-parallel split and the extend-to-a-triangle route, or the
//    straight-line-at-a-vertex count and the triangle sum — and the two routes
//    must agree before a key is written down.
//  - Every figure is coordinate-exact. Each bend point was SOLVED for from the
//    two leg angles (never placed by eye), coordinates rounded to 2 decimals,
//    and every drawn angle re-checked against its printed label with a dot
//    product before the figure was written down.
//  - Each slot keeps the shape of its base answer: a zigzag-sum stays a
//    zigzag-sum, a prove-it-is-parallel question stays a reasoning question and
//    never quietly turns into an arithmetic question, and every item keeps
//    exactly 4 choices with a numeric answer index.
//  - Figure labels are plain text: the parallel lines are drawn as the plain
//    letters "l" and "m", and angle labels carry bare numbers.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this section are: TAKING THE SUPPLEMENT,
//    SUBTRACTING INSTEAD OF ADDING, ADDING INSTEAD OF SUBTRACTING, DOUBLING ONE
//    ANGLE, COPYING A GIVEN ANGLE, COPYING THE BEND, SPLITTING THE BEND EVENLY,
//    ANSWERING X ITSELF, ANSWERING THE OTHER END ANGLE, SUBTRACTING THE BEND
//    FROM 180, FORGETTING THE THIRD ANGLE AT THE TOP, TREATING THE RIGHT ANGLE
//    AS A STRAIGHT ANGLE, ADDING THE RIGHT ANGLE INSTEAD OF SUBTRACTING,
//    ANSWERING THE FAR BASE ANGLE, ANSWERING THE APEX ANGLE, USING THE
//    SUPPLEMENT AT THE MARKED VERTEX, DEMANDING EQUAL SAME-SIDE ANGLES,
//    DEMANDING SUPPLEMENTARY CORRESPONDING ANGLES, MATCHING SUPPLEMENTS INSTEAD
//    OF EQUALS, ADDING A SIZE CONDITION, and CLAIMING NOTHING FOLLOWS.
//  - No two choices inside an item name the same value, and no two correct
//    answers repeat within a variation slot (v1 with v1, v2 with v2, v3 with v3).

const s27 = [
  // s1 — the zigzag bend is the SUM of the two angles at the parallels.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A folded path runs from $A$ on $\\ell$ down to a bend at $P$ and on to $B$ on $m$, making a $33^\\circ$ angle with $\\ell$ at $A$ and a $52^\\circ$ angle with $m$ at $B$. What is $\\angle APB$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.41, 3], b: [0.9, 1.5] },
          { t: 'seg', a: [-0.27, 0], b: [0.9, 1.5] },
          { t: 'point', p: [-1.41, 3], label: 'A', dx: -4, dy: -8 },
          { t: 'point', p: [0.9, 1.5], label: 'P', dx: 14, dy: 4 },
          { t: 'point', p: [-0.27, 0], label: 'B', dx: -4, dy: 16 },
          { t: 'label', p: [-2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [-2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-1.41, 3], from: [3, 3], to: [0.9, 1.5], r: 0.8, label: '33' },
          { t: 'angle', at: [-0.27, 0], from: [3, 0], to: [0.9, 1.5], r: 0.8, label: '52' },
          { t: 'angle', at: [0.9, 1.5], from: [-1.41, 3], to: [-0.27, 0], r: 0.6, label: '?' },
        ],
      },
      choices: ['$95^\\circ$', '$19^\\circ$', '$66^\\circ$', '$85^\\circ$'],
      answer: 3,
      solution:
        'Slide a helper line through $P$ parallel to both $\\ell$ and $m$. It cuts $\\angle APB$ into an upper piece and a lower piece. The upper piece and the $33^\\circ$ angle at $A$ are alternate interior angles for $\\ell$ and the helper, so the upper piece is $33^\\circ$; the lower piece and the $52^\\circ$ angle at $B$ are alternate interior angles for the helper and $m$, so the lower piece is $52^\\circ$. Adding, $\\angle APB = 33^\\circ + 52^\\circ = 85^\\circ$ ✓. Check a second, independent way with no helper line at all: extend $\\overrightarrow{AP}$ past $P$ until it strikes $m$ at a point $Q$. That makes $AQ$ an ordinary transversal, so the angle it makes with $m$ at $Q$ equals the $33^\\circ$ it makes with $\\ell$ at $A$ (alternate interior angles). Now look at triangle $PQB$: it has $\\angle PQB = 33^\\circ$ and $\\angle PBQ = 52^\\circ$, and $\\angle APB$ sits on the straight line $AQ$ at $P$, which makes it the exterior angle of that triangle at $P$. An exterior angle equals the sum of the two remote interior angles, so $\\angle APB = 33^\\circ + 52^\\circ = 85^\\circ$ ✓. (The choice $95^\\circ$ is TAKING THE SUPPLEMENT of the right answer ✗; $19^\\circ$ is SUBTRACTING INSTEAD OF ADDING ✗; $66^\\circ$ is DOUBLING ONE ANGLE, from $2 \\times 33^\\circ$ ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A wire runs from $G$ on $\\ell$ to a bend at $N$ and then on to $H$ on $m$. It leaves $\\ell$ at $46^\\circ$ and arrives at $m$ at $29^\\circ$. What is $\\angle GNH$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-0.25, 3], b: [1.2, 1.5] },
          { t: 'seg', a: [-1.51, 0], b: [1.2, 1.5] },
          { t: 'point', p: [-0.25, 3], label: 'G', dx: -4, dy: -8 },
          { t: 'point', p: [1.2, 1.5], label: 'N', dx: 14, dy: 4 },
          { t: 'point', p: [-1.51, 0], label: 'H', dx: -4, dy: 16 },
          { t: 'label', p: [-2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [-2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-0.25, 3], from: [3, 3], to: [1.2, 1.5], r: 0.7, label: '46' },
          { t: 'angle', at: [-1.51, 0], from: [3, 0], to: [1.2, 1.5], r: 0.9, label: '29' },
          { t: 'angle', at: [1.2, 1.5], from: [-0.25, 3], to: [-1.51, 0], r: 0.55, label: '?' },
        ],
      },
      choices: ['$75^\\circ$', '$105^\\circ$', '$17^\\circ$', '$92^\\circ$'],
      answer: 0,
      solution:
        'Draw the helper parallel through $N$. It splits $\\angle GNH$ into two pieces, and each piece is an alternate interior angle of one of the given angles: the upper piece matches the $46^\\circ$ at $G$, the lower piece matches the $29^\\circ$ at $H$. So $\\angle GNH = 46^\\circ + 29^\\circ = 75^\\circ$ ✓. Check a second, independent way by building a triangle instead: run $\\overrightarrow{GN}$ onward until it lands on $m$ at a point $Q$. The transversal $GQ$ meets $m$ at the same $46^\\circ$ it made with $\\ell$, by alternate interior angles, so $\\angle NQH = 46^\\circ$. In triangle $NQH$ the two angles away from $N$ are $46^\\circ$ and $29^\\circ$, and $\\angle GNH$ is the exterior angle at $N$, so it equals those two remote angles added: $46^\\circ + 29^\\circ = 75^\\circ$ ✓. (The choice $105^\\circ$ is TAKING THE SUPPLEMENT ✗; $17^\\circ$ is SUBTRACTING INSTEAD OF ADDING ✗; $92^\\circ$ is DOUBLING ONE ANGLE, from $2 \\times 46^\\circ$ ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A ribbon is creased at $V$, running up to $U$ on $\\ell$ and down to $W$ on $m$. It makes a $24^\\circ$ angle with $\\ell$ at $U$ and a $58^\\circ$ angle with $m$ at $W$. What is $\\angle UVW$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.74, 3], b: [1.4, 1.6] },
          { t: 'seg', a: [0.4, 0], b: [1.4, 1.6] },
          { t: 'point', p: [-1.74, 3], label: 'U', dx: -4, dy: -8 },
          { t: 'point', p: [1.4, 1.6], label: 'V', dx: 14, dy: 4 },
          { t: 'point', p: [0.4, 0], label: 'W', dx: -4, dy: 16 },
          { t: 'label', p: [-2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [-2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-1.74, 3], from: [3, 3], to: [1.4, 1.6], r: 0.95, label: '24' },
          { t: 'angle', at: [0.4, 0], from: [3, 0], to: [1.4, 1.6], r: 0.7, label: '58' },
          { t: 'angle', at: [1.4, 1.6], from: [-1.74, 3], to: [0.4, 0], r: 0.6, label: '?' },
        ],
      },
      choices: ['$98^\\circ$', '$34^\\circ$', '$82^\\circ$', '$48^\\circ$'],
      answer: 2,
      solution:
        'A helper line through $V$ parallel to $\\ell$ and $m$ splits the crease angle in two. The upper piece is an alternate interior angle of the $24^\\circ$ at $U$, and the lower piece is an alternate interior angle of the $58^\\circ$ at $W$, so $\\angle UVW = 24^\\circ + 58^\\circ = 82^\\circ$ ✓. Check a second, independent way without the helper: extend $\\overrightarrow{UV}$ until it hits $m$ at a point $Q$. As a transversal, $UQ$ makes the same $24^\\circ$ with $m$ at $Q$ that it makes with $\\ell$ at $U$. Triangle $VQW$ then has remote interior angles $24^\\circ$ and $58^\\circ$, and $\\angle UVW$ is its exterior angle at $V$, so $\\angle UVW = 24^\\circ + 58^\\circ = 82^\\circ$ ✓. Two different pictures, one answer. (The choice $98^\\circ$ is TAKING THE SUPPLEMENT ✗; $34^\\circ$ is SUBTRACTING INSTEAD OF ADDING ✗; $48^\\circ$ is DOUBLING ONE ANGLE, from $2 \\times 24^\\circ$ ✗.)',
    },
  ],
  // s2 — a converse proves parallelism; vary WHICH angle pair is handed over.
  [
    {
      q: 'A transversal cuts lines $u$ and $v$, and the two alternate interior angles it makes both measure $74^\\circ$. What can you conclude?',
      choices: [
        'Nothing follows — angle measures alone never prove parallelism',
        'They meet far off the page, at a very small angle',
        'The lines are parallel, since equal alternate interior angles force it',
        'The lines are parallel, but only because $74^\\circ$ is acute',
      ],
      answer: 2,
      solution:
        'Every parallel-line angle fact runs backwards as well as forwards. Forwards: parallel lines make equal alternate interior angles. Backwards — the converse — a transversal that makes equal alternate interior angles forces the two lines to be parallel. From $74^\\circ = 74^\\circ$ we get $u \\parallel v$ ✓. Check a second, independent way by trying to make the lines meet. If $u$ and $v$ crossed on one side of the transversal, they would close up a triangle with it. In that triangle, one marked angle appears as an interior angle, $74^\\circ$, and at the other vertex the interior angle is the supplement of the other marked angle, $180^\\circ - 74^\\circ = 106^\\circ$. Those two corners already use $74 + 106 = 180^\\circ$, leaving $0^\\circ$ for the third corner — impossible ✗. The same count rules out a crossing on the other side, so the lines never meet ✓. (The first choice is CLAIMING NOTHING FOLLOWS, throwing away the converse ✗; the meeting-off-the-page choice is the very thing the triangle count rules out ✗; the last choice is ADDING A SIZE CONDITION — the converse never asks whether an angle is acute ✗.)',
    },
    {
      q: 'A transversal crosses lines $g$ and $h$, making corresponding angles of $122^\\circ$ and $122^\\circ$. What can you conclude?',
      choices: [
        'Nothing follows — corresponding angles are equal for any pair of lines',
        'The two lines meet somewhere beyond the edge of the page',
        'They are parallel only if the two angles had been supplementary instead',
        'They are parallel, because equal corresponding angles force it',
      ],
      answer: 3,
      solution:
        'The corresponding-angle fact has a converse too, and the converse is what this problem hands you: equal corresponding angles force the lines to be parallel, so $g \\parallel h$ ✓. Check a second, independent way by thinking of each angle as a tilt reading. The angle a line makes with the transversal is a complete record of how that line is aimed — turn the line by even one degree and the reading changes. Both $g$ and $h$ read $122^\\circ$ against the same transversal, so they are aimed the same way; two lines aimed the same way that are not the same line can never close the gap between them ✓. (The first choice is CLAIMING NOTHING FOLLOWS — corresponding angles are equal only when the lines are parallel, which is exactly why the reading is informative ✗; the meeting choice contradicts the equal tilt readings ✗; the third choice is DEMANDING SUPPLEMENTARY CORRESPONDING ANGLES — supplementary is the test for SAME-SIDE interior angles, not for corresponding ones ✗.)',
    },
    {
      q: 'A transversal meets lines $w$ and $z$, and the two alternate exterior angles it makes both measure $63^\\circ$. What can you conclude?',
      choices: [
        'Nothing follows — only interior angles say anything about parallelism',
        'The lines are parallel, because equal alternate exterior angles force it',
        'The lines must cross, since the angles sit on opposite sides',
        'The lines are parallel only if $63^\\circ$ is doubled somewhere in the figure',
      ],
      answer: 1,
      solution:
        'Alternate exterior angles sit outside the two lines on opposite sides of the transversal, and like every other pair in the family they come with a converse: equal alternate exterior angles force the lines to be parallel, so $w \\parallel z$ ✓. Check a second, independent way by translating the outside angles into inside ones. Each alternate exterior angle has a vertical twin tucked between the two lines, and vertical angles are equal, so those twins measure $63^\\circ$ each. The two twins lie between the lines on opposite sides of the transversal, which makes them a pair of alternate INTERIOR angles — equal, so the interior converse applies and the lines are parallel ✓. The outside pair and the inside pair tell the same story. (The first choice is CLAIMING NOTHING FOLLOWS, forgetting the vertical-angle twins ✗; the crossing choice reads "opposite sides" as evidence of a meeting, but opposite sides is just where alternate angles live ✗; the last choice is ADDING A SIZE CONDITION nothing in the converse requires ✗.)',
    },
  ],
  // s3 — bend angle given, recover the angle at the second parallel.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel, the bend angle $\\angle APB$ measures $112^\\circ$, and the path makes a $47^\\circ$ angle with $\\ell$ at $A$. What angle does the path make with $m$ at $B$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-0.91, 3], b: [0.4, 1.6] },
          { t: 'seg', a: [-0.35, 0], b: [0.4, 1.6] },
          { t: 'point', p: [-0.91, 3], label: 'A', dx: 0, dy: -8 },
          { t: 'point', p: [0.4, 1.6], label: 'P', dx: 14, dy: 4 },
          { t: 'point', p: [-0.35, 0], label: 'B', dx: -4, dy: 16 },
          { t: 'label', p: [-2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [-2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-0.91, 3], from: [3, 3], to: [0.4, 1.6], r: 0.6, label: '47' },
          { t: 'angle', at: [0.4, 1.6], from: [-0.91, 3], to: [-0.35, 0], r: 0.5, label: '112' },
          { t: 'angle', at: [-0.35, 0], from: [3, 0], to: [0.4, 1.6], r: 0.8, label: '?' },
        ],
      },
      choices: ['$47^\\circ$', '$65^\\circ$', '$112^\\circ$', '$159^\\circ$'],
      answer: 1,
      solution:
        'The helper parallel through $P$ cuts the $112^\\circ$ bend into two pieces. The piece facing $\\ell$ is an alternate interior angle of the $47^\\circ$ at $A$, so it is $47^\\circ$, which leaves $112^\\circ - 47^\\circ = 65^\\circ$ for the piece facing $m$ — and that piece is an alternate interior angle of the angle at $B$, so the angle at $B$ is $65^\\circ$ ✓. Check a second, independent way with a triangle. Extend $\\overrightarrow{AP}$ past $P$ until it meets $m$ at $Q$; the transversal $AQ$ makes $47^\\circ$ with $m$ at $Q$, matching its $47^\\circ$ with $\\ell$. In triangle $PQB$, the angle $\\angle APB$ is the exterior angle at $P$, so it equals the sum of the two remote interior angles: $112^\\circ = 47^\\circ + \\angle PBQ$, giving $\\angle PBQ = 65^\\circ$ ✓. (The choice $47^\\circ$ is COPYING A GIVEN ANGLE, as if the two end angles had to match ✗; $112^\\circ$ is COPYING THE BEND ✗; $159^\\circ$ is ADDING INSTEAD OF SUBTRACTING, from $112 + 47$ ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A cable bends at $Q$ between them, running to $F$ on $\\ell$ and to $G$ on $m$. If $\\angle FQG = 86^\\circ$ and the cable makes a $39^\\circ$ angle with $\\ell$ at $F$, what angle does it make with $m$ at $G$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.05, 3], b: [0.8, 1.5] },
          { t: 'seg', a: [-0.6, 0], b: [0.8, 1.5] },
          { t: 'point', p: [-1.05, 3], label: 'F', dx: 0, dy: -8 },
          { t: 'point', p: [0.8, 1.5], label: 'Q', dx: 14, dy: 4 },
          { t: 'point', p: [-0.6, 0], label: 'G', dx: -4, dy: 16 },
          { t: 'label', p: [-2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [-2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-1.05, 3], from: [3, 3], to: [0.8, 1.5], r: 0.7, label: '39' },
          { t: 'angle', at: [0.8, 1.5], from: [-1.05, 3], to: [-0.6, 0], r: 0.5, label: '86' },
          { t: 'angle', at: [-0.6, 0], from: [3, 0], to: [0.8, 1.5], r: 0.8, label: '?' },
        ],
      },
      choices: ['$39^\\circ$', '$86^\\circ$', '$47^\\circ$', '$125^\\circ$'],
      answer: 2,
      solution:
        'Slide a helper line through $Q$ parallel to both lines. It divides the $86^\\circ$ bend into the piece toward $\\ell$, which equals the $39^\\circ$ at $F$ by alternate interior angles, and the piece toward $m$, which equals the angle at $G$ the same way. So the angle at $G$ is $86^\\circ - 39^\\circ = 47^\\circ$ ✓. Check a second, independent way using a triangle instead of a helper line: continue $\\overrightarrow{FQ}$ until it strikes $m$ at $R$. The transversal $FR$ makes $39^\\circ$ with $m$ at $R$, matching its angle with $\\ell$. In triangle $QRG$ the bend $\\angle FQG$ is the exterior angle at $Q$, so $86^\\circ = 39^\\circ + \\angle QGR$ and $\\angle QGR = 47^\\circ$ ✓. (The choice $39^\\circ$ is COPYING A GIVEN ANGLE ✗; $86^\\circ$ is COPYING THE BEND ✗; $125^\\circ$ is ADDING INSTEAD OF SUBTRACTING, from $86 + 39$ ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A path from $M$ on $\\ell$ bends at $N$ and continues to $P$ on $m$. Given that $\\angle MNP = 128^\\circ$ and the path makes a $71^\\circ$ angle with $\\ell$ at $M$, what angle does it make with $m$ at $P$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-0.72, 3], b: [-0.2, 1.5] },
          { t: 'seg', a: [-1.17, 0], b: [-0.2, 1.5] },
          { t: 'point', p: [-0.72, 3], label: 'M', dx: 0, dy: -8 },
          { t: 'point', p: [-0.2, 1.5], label: 'N', dx: 14, dy: 4 },
          { t: 'point', p: [-1.17, 0], label: 'P', dx: -4, dy: 16 },
          { t: 'label', p: [-2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [-2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-0.72, 3], from: [3, 3], to: [-0.2, 1.5], r: 0.5, label: '71' },
          { t: 'angle', at: [-0.2, 1.5], from: [-0.72, 3], to: [-1.17, 0], r: 0.45, label: '128' },
          { t: 'angle', at: [-1.17, 0], from: [3, 0], to: [-0.2, 1.5], r: 0.85, label: '?' },
        ],
      },
      choices: ['$57^\\circ$', '$71^\\circ$', '$128^\\circ$', '$52^\\circ$'],
      answer: 0,
      solution:
        'Draw the helper parallel through $N$. The bend splits into a piece toward $\\ell$, equal to the $71^\\circ$ at $M$ by alternate interior angles, and a piece toward $m$, equal to the angle at $P$. Subtracting, the angle at $P$ is $128^\\circ - 71^\\circ = 57^\\circ$ ✓. Check a second, independent way with a triangle: run $\\overrightarrow{MN}$ on until it reaches $m$ at $R$. The transversal $MR$ makes $71^\\circ$ with $m$ at $R$. In triangle $NRP$ the bend is the exterior angle at $N$, so $128^\\circ = 71^\\circ + \\angle NPR$, giving $\\angle NPR = 57^\\circ$ ✓. Sanity check the shape of the answer: the bend has to be larger than either end angle, and $128 > 71$ and $128 > 57$ ✓. (The choice $71^\\circ$ is COPYING A GIVEN ANGLE ✗; $128^\\circ$ is COPYING THE BEND ✗; $52^\\circ$ is TAKING THE SUPPLEMENT of the bend, $180 - 128$, instead of subtracting the known end angle ✗.)',
    },
  ],
  // s4 — same-side interior angles: supplementary proves parallel, otherwise not.
  [
    {
      q: 'A transversal crosses lines $c$ and $d$. The two same-side interior angles measure $108^\\circ$ and $72^\\circ$. Are the lines parallel?',
      choices: [
        'Yes — the two angles add to $180^\\circ$, which forces the lines to be parallel',
        'No — same-side interior angles have to be equal',
        'No — both angles would need to be $90^\\circ$',
        'It cannot be decided without a third angle',
      ],
      answer: 0,
      solution:
        'Same-side interior angles between parallel lines are supplementary, and the converse holds as well: if they are supplementary, the lines must be parallel. Here $108^\\circ + 72^\\circ = 180^\\circ$ ✓, so $c \\parallel d$. Check a second, independent way by trying to force a crossing. Suppose $c$ and $d$ met on the side where those two angles sit. Then the transversal and the two lines would bound a triangle whose corners include both marked angles, $108^\\circ$ and $72^\\circ$ — already $180^\\circ$, leaving nothing for the third corner ✗. On the other side of the transversal the interior angles are the supplements, $72^\\circ$ and $108^\\circ$, which add to $180^\\circ$ as well, so a crossing is impossible there too ✓. No crossing anywhere means parallel. (The choice "must be equal" is DEMANDING EQUAL SAME-SIDE ANGLES, which happens only in the special $90^\\circ$ case ✗; the "both $90^\\circ$" choice is that same mistake pushed one step further ✗; "cannot be decided" is CLAIMING NOTHING FOLLOWS, when the supplementary converse decides it outright ✗.)',
    },
    {
      q: 'A transversal crosses lines $p$ and $q$. The two same-side interior angles measure $118^\\circ$ and $68^\\circ$. Are the lines parallel?',
      choices: [
        'Yes — same-side interior angles are always supplementary',
        'No — the two angles add to $186^\\circ$, not $180^\\circ$',
        'Yes — the angles are unequal, and unequal same-side angles force parallel lines',
        'It cannot be decided without knowing a third angle',
      ],
      answer: 1,
      solution:
        'Run the fact forwards, not backwards. IF the lines were parallel, their same-side interior angles would have to add to $180^\\circ$. These add to $118^\\circ + 68^\\circ = 186^\\circ$, which is not $180^\\circ$, so the lines are not parallel ✗ — they cross somewhere. Check a second, independent way by asking what the second angle would have had to be. Holding the first line and the transversal still, the line through the second crossing point that IS parallel to the first makes a same-side interior angle of $180^\\circ - 118^\\circ = 62^\\circ$. The line we were given makes $68^\\circ$ instead, so it is tilted $6^\\circ$ away from the parallel direction ✓ — and a line tilted even slightly from the parallel one must eventually meet it. (The first choice states as always-true what is only true FOR PARALLEL LINES ✗; the "unequal" choice is DEMANDING EQUAL SAME-SIDE ANGLES turned inside out — equality was never the test ✗; "cannot be decided" is CLAIMING NOTHING FOLLOWS, when two same-side interior angles settle the question by themselves ✗.)',
    },
    {
      q: 'A transversal crosses lines $s$ and $t$. The two same-side interior angles measure $104^\\circ$ and $76^\\circ$. Are the lines parallel?',
      choices: [
        'No — for parallel lines these two angles must be equal',
        'No — they add to more than $180^\\circ$',
        'It cannot be decided from two angle measures',
        'Yes — the angles add to exactly $180^\\circ$, which forces the lines to be parallel',
      ],
      answer: 3,
      solution:
        'Add them: $104^\\circ + 76^\\circ = 180^\\circ$. Supplementary same-side interior angles force parallel lines, by the converse of the same-side fact, so $s \\parallel t$ ✓. Check a second, independent way by converting to a pair we can compare directly. The $76^\\circ$ angle has a linear-pair partner on the other side of the transversal measuring $180^\\circ - 76^\\circ = 104^\\circ$, and that partner is an alternate interior angle of the given $104^\\circ$. Two alternate interior angles that are equal force the lines to be parallel ✓ — a different converse, reached through a linear pair, agreeing with the first route. (The "must be equal" choice is DEMANDING EQUAL SAME-SIDE ANGLES ✗; "more than $180^\\circ$" misadds the given numbers, which land on $180^\\circ$ exactly ✗; "cannot be decided" is CLAIMING NOTHING FOLLOWS ✗.)',
    },
  ],
  // s5 — two segments from a point on l down to two points on m.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel. From point $K$ on $\\ell$, segments run down to $R$ and $S$ on $m$, making the marked angles $53^\\circ$ and $63^\\circ$ with $m$. What is $\\angle RKS$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-2.06, 0], b: [0.2, 3] },
          { t: 'seg', a: [1.73, 0], b: [0.2, 3] },
          { t: 'point', p: [0.2, 3], label: 'K', dx: 0, dy: -8 },
          { t: 'point', p: [-2.06, 0], label: 'R', dx: -6, dy: 16 },
          { t: 'point', p: [1.73, 0], label: 'S', dx: 8, dy: 16 },
          { t: 'label', p: [-2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-2.06, 0], from: [3, 0], to: [0.2, 3], r: 0.75, label: '53' },
          { t: 'angle', at: [1.73, 0], from: [-3, 0], to: [0.2, 3], r: 0.75, label: '63' },
          { t: 'angle', at: [0.2, 3], from: [-2.06, 0], to: [1.73, 0], r: 0.6, label: '?' },
        ],
      },
      choices: ['$53^\\circ$', '$63^\\circ$', '$116^\\circ$', '$64^\\circ$'],
      answer: 3,
      solution:
        'Look along the line $\\ell$ at $K$. Three angles sit side by side there and together they make a straight $180^\\circ$: on the left, a copy of the $53^\\circ$ at $R$ (alternate interior angles for the transversal $KR$); in the middle, $\\angle RKS$; on the right, a copy of the $63^\\circ$ at $S$ (alternate interior angles for the transversal $KS$). So $\\angle RKS = 180^\\circ - 53^\\circ - 63^\\circ = 64^\\circ$ ✓. Check a second, independent way that never mentions $\\ell$ at all: $K$, $R$, and $S$ form a triangle whose angles at $R$ and $S$ are the two marked ones, $53^\\circ$ and $63^\\circ$. The triangle sum then gives $\\angle RKS = 180^\\circ - 53^\\circ - 63^\\circ = 64^\\circ$ ✓. The two routes match — and lining them up side by side is exactly how the triangle-sum rule gets proved. (The choice $53^\\circ$ or $63^\\circ$ is COPYING A GIVEN ANGLE ✗; $116^\\circ$ is FORGETTING THE THIRD ANGLE AT THE TOP, stopping at $53 + 63$ ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. Two guy wires drop from $W$ on $\\ell$ to anchors $G$ and $H$ on $m$, meeting $m$ at the marked angles $62^\\circ$ and $67^\\circ$. What is $\\angle GWH$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.3, 0], b: [0.3, 3] },
          { t: 'seg', a: [1.57, 0], b: [0.3, 3] },
          { t: 'point', p: [0.3, 3], label: 'W', dx: 0, dy: -8 },
          { t: 'point', p: [-1.3, 0], label: 'G', dx: -6, dy: 16 },
          { t: 'point', p: [1.57, 0], label: 'H', dx: 8, dy: 16 },
          { t: 'label', p: [-2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-1.3, 0], from: [3, 0], to: [0.3, 3], r: 0.7, label: '62' },
          { t: 'angle', at: [1.57, 0], from: [-3, 0], to: [0.3, 3], r: 0.7, label: '67' },
          { t: 'angle', at: [0.3, 3], from: [-1.3, 0], to: [1.57, 0], r: 0.55, label: '?' },
        ],
      },
      choices: ['$62^\\circ$', '$51^\\circ$', '$67^\\circ$', '$129^\\circ$'],
      answer: 1,
      solution:
        'At $W$ the line $\\ell$ runs straight through, so the angles stacked along it add to $180^\\circ$. To the left of $\\angle GWH$ sits a copy of the $62^\\circ$ at $G$, and to the right sits a copy of the $67^\\circ$ at $H$; both copies come from alternate interior angles across the parallels. Hence $\\angle GWH = 180^\\circ - 62^\\circ - 67^\\circ = 51^\\circ$ ✓. Check a second, independent way inside triangle $WGH$, forgetting $\\ell$ entirely: its angles at $G$ and $H$ are the marked $62^\\circ$ and $67^\\circ$, so the triangle sum leaves $\\angle GWH = 180^\\circ - 129^\\circ = 51^\\circ$ ✓. (The choice $62^\\circ$ or $67^\\circ$ is COPYING A GIVEN ANGLE ✗; $129^\\circ$ is FORGETTING THE THIRD ANGLE AT THE TOP and reporting $62 + 67$ ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. From $Q$ on $\\ell$, two struts run down to $J$ and $L$ on $m$, meeting $m$ at the marked angles $45^\\circ$ and $56^\\circ$. What is $\\angle JQL$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-2.7, 0], b: [0.3, 3] },
          { t: 'seg', a: [2.32, 0], b: [0.3, 3] },
          { t: 'point', p: [0.3, 3], label: 'Q', dx: 0, dy: -8 },
          { t: 'point', p: [-2.7, 0], label: 'J', dx: -6, dy: 16 },
          { t: 'point', p: [2.32, 0], label: 'L', dx: 8, dy: 16 },
          { t: 'label', p: [-2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [2.9, 0.35], text: 'm', dy: 4 },
          { t: 'angle', at: [-2.7, 0], from: [3, 0], to: [0.3, 3], r: 0.8, label: '45' },
          { t: 'angle', at: [2.32, 0], from: [-3, 0], to: [0.3, 3], r: 0.8, label: '56' },
          { t: 'angle', at: [0.3, 3], from: [-2.7, 0], to: [2.32, 0], r: 0.5, label: '?' },
        ],
      },
      choices: ['$45^\\circ$', '$101^\\circ$', '$79^\\circ$', '$56^\\circ$'],
      answer: 2,
      solution:
        'Walk along $\\ell$ through $Q$: the three angles resting on that straight line are a copy of the $45^\\circ$ at $J$, then $\\angle JQL$, then a copy of the $56^\\circ$ at $L$, each copy justified by alternate interior angles across the parallel lines. A straight line is $180^\\circ$, so $\\angle JQL = 180^\\circ - 45^\\circ - 56^\\circ = 79^\\circ$ ✓. Check a second, independent way with the triangle $QJL$ alone, using no parallel-line fact at all: its angles at $J$ and $L$ are $45^\\circ$ and $56^\\circ$, so $\\angle JQL = 180^\\circ - 101^\\circ = 79^\\circ$ ✓. (The choice $45^\\circ$ or $56^\\circ$ is COPYING A GIVEN ANGLE ✗; $101^\\circ$ is FORGETTING THE THIRD ANGLE AT THE TOP, handing back $45 + 56$ ✗.)',
    },
  ],
  // s6 — zigzag with algebraic labels: build the equation, then answer the
  // angle that was asked for (never x itself).
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel. The zigzag makes an angle of $2x + 6^\\circ$ with $\\ell$ at $A$, an angle of $x - 4^\\circ$ with $m$ at $B$, and $\\angle APB = 80^\\circ$. What is the angle at $A$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0.56, 3], b: [1.5, 1.5] },
          { t: 'seg', a: [-2.21, 0], b: [1.5, 1.5] },
          { t: 'point', p: [0.56, 3], label: 'A', dx: 0, dy: -8 },
          { t: 'point', p: [1.5, 1.5], label: 'P', dx: 14, dy: 4 },
          { t: 'point', p: [-2.21, 0], label: 'B', dx: -4, dy: 16 },
          { t: 'label', p: [2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [0.56, 3], from: [3, 3], to: [1.5, 1.5], r: 0.55, label: '2x+6' },
          { t: 'angle', at: [1.5, 1.5], from: [0.56, 3], to: [-2.21, 0], r: 0.5, label: '80' },
          { t: 'angle', at: [-2.21, 0], from: [3, 0], to: [1.5, 1.5], r: 0.9, label: 'x-4' },
        ],
      },
      choices: ['$26^\\circ$', '$22^\\circ$', '$58^\\circ$', '$40^\\circ$'],
      answer: 2,
      solution:
        'The helper parallel through $P$ makes the bend the SUM of the two end angles, so $(2x + 6^\\circ) + (x - 4^\\circ) = 80^\\circ$. That is $3x + 2^\\circ = 80^\\circ$, so $3x = 78^\\circ$ and $x = 26^\\circ$. The question asks for the angle at $A$, which is $2x + 6^\\circ = 2(26^\\circ) + 6^\\circ = 58^\\circ$ ✓. Check a second, independent way by building the same equation from a triangle rather than a helper line: extend $\\overrightarrow{AP}$ to meet $m$ at $Q$, so the transversal $AQ$ carries the angle $2x + 6^\\circ$ down to $Q$, and in triangle $PQB$ the bend is the exterior angle at $P$, forcing $80^\\circ = (2x + 6^\\circ) + (x - 4^\\circ)$ — the same equation from a different picture ✓. Now substitute back as a final check: the angle at $B$ is $x - 4^\\circ = 22^\\circ$, and $58 + 22 = 80$ ✓. (The choice $26^\\circ$ is ANSWERING X ITSELF ✗; $22^\\circ$ is ANSWERING THE OTHER END ANGLE ✗; $40^\\circ$ is SPLITTING THE BEND EVENLY, from $80 \\div 2$, as if the two ends had to match ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A path from $C$ on $\\ell$ bends at $Q$ and runs on to $D$ on $m$. It makes an angle of $x + 15^\\circ$ with $\\ell$ at $C$, an angle of $3x$ with $m$ at $D$, and $\\angle CQD = 111^\\circ$. What is the angle at $D$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.25, 3], b: [0.6, 1.5] },
          { t: 'seg', a: [0.11, 0], b: [0.6, 1.5] },
          { t: 'point', p: [-1.25, 3], label: 'C', dx: 0, dy: -8 },
          { t: 'point', p: [0.6, 1.5], label: 'Q', dx: 14, dy: 4 },
          { t: 'point', p: [0.11, 0], label: 'D', dx: -4, dy: 16 },
          { t: 'label', p: [-2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [-2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-1.25, 3], from: [3, 3], to: [0.6, 1.5], r: 0.7, label: 'x+15' },
          { t: 'angle', at: [0.6, 1.5], from: [-1.25, 3], to: [0.11, 0], r: 0.45, label: '111' },
          { t: 'angle', at: [0.11, 0], from: [3, 0], to: [0.6, 1.5], r: 0.6, label: '3x' },
        ],
      },
      choices: ['$72^\\circ$', '$24^\\circ$', '$39^\\circ$', '$69^\\circ$'],
      answer: 0,
      solution:
        'Drop a helper line through $Q$ parallel to $\\ell$ and $m$: it splits the bend into two alternate interior copies, one of each end angle, so the bend is their sum. That gives $(x + 15^\\circ) + 3x = 111^\\circ$, so $4x + 15^\\circ = 111^\\circ$, $4x = 96^\\circ$, and $x = 24^\\circ$. The angle at $D$ is $3x = 72^\\circ$ ✓. Check a second, independent way with a triangle: extend $\\overrightarrow{CQ}$ until it meets $m$ at $R$, so the transversal carries $x + 15^\\circ$ down to $R$; in triangle $QRD$ the bend $\\angle CQD$ is the exterior angle at $Q$ and therefore equals the two remote interior angles added, $(x + 15^\\circ) + 3x$ — the same equation, reached without ever drawing a helper parallel ✓. Substituting back: the angle at $C$ is $24 + 15 = 39^\\circ$, and $39 + 72 = 111$ ✓. (The choice $24^\\circ$ is ANSWERING X ITSELF ✗; $39^\\circ$ is ANSWERING THE OTHER END ANGLE ✗; $69^\\circ$ is SUBTRACTING THE BEND FROM 180, treating the bend as half of a straight line ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A strip is creased at $S$, reaching $R$ on $\\ell$ and $T$ on $m$. It makes an angle of $2x - 12^\\circ$ with $\\ell$ at $R$, an angle of $x + 5^\\circ$ with $m$ at $T$, and $\\angle RST = 68^\\circ$. What is the angle at $R$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-0.32, 3], b: [1.6, 1.5] },
          { t: 'seg', a: [-1, 0], b: [1.6, 1.5] },
          { t: 'point', p: [-0.32, 3], label: 'R', dx: 0, dy: -8 },
          { t: 'point', p: [1.6, 1.5], label: 'S', dx: 14, dy: 4 },
          { t: 'point', p: [-1, 0], label: 'T', dx: -4, dy: 16 },
          { t: 'label', p: [-2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [-2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-0.32, 3], from: [3, 3], to: [1.6, 1.5], r: 0.7, label: '2x-12' },
          { t: 'angle', at: [1.6, 1.5], from: [-0.32, 3], to: [-1, 0], r: 0.5, label: '68' },
          { t: 'angle', at: [-1, 0], from: [3, 0], to: [1.6, 1.5], r: 0.85, label: 'x+5' },
        ],
      },
      choices: ['$25^\\circ$', '$34^\\circ$', '$30^\\circ$', '$38^\\circ$'],
      answer: 3,
      solution:
        'A helper line through $S$ parallel to both lines cuts the crease into two alternate interior copies, one of each end angle, so the crease equals their sum: $(2x - 12^\\circ) + (x + 5^\\circ) = 68^\\circ$. Then $3x - 7^\\circ = 68^\\circ$, so $3x = 75^\\circ$ and $x = 25^\\circ$. The angle at $R$ is $2x - 12^\\circ = 50^\\circ - 12^\\circ = 38^\\circ$ ✓. Check a second, independent way with a triangle instead: extend $\\overrightarrow{RS}$ until it lands on $m$ at $U$; the transversal $RU$ carries $2x - 12^\\circ$ down to $U$, and in triangle $SUT$ the crease is the exterior angle at $S$, so it equals the remote interior angles added, $(2x - 12^\\circ) + (x + 5^\\circ)$ ✓ — the same equation with no helper line in sight. Substituting back: the angle at $T$ is $25 + 5 = 30^\\circ$, and $38 + 30 = 68$ ✓. (The choice $25^\\circ$ is ANSWERING X ITSELF ✗; $30^\\circ$ is ANSWERING THE OTHER END ANGLE ✗; $34^\\circ$ is SPLITTING THE BEND EVENLY, from $68 \\div 2$ ✗.)',
    },
  ],
  // s7 — equal corresponding angles single out which lines are parallel.
  [
    {
      q: 'A transversal crosses lines $p$, $q$, and $r$ in turn, making corresponding angles of $66^\\circ$ with $p$, $66^\\circ$ with $q$, and $114^\\circ$ with $r$. Which lines must be parallel?',
      choices: ['$p$ and $q$ only', '$q$ and $r$ only', '$p$ and $r$ only', 'All three'],
      answer: 0,
      solution:
        'Equal corresponding angles prove parallelism, and only equal ones do. Lines $p$ and $q$ both read $66^\\circ$ against this transversal, so $p \\parallel q$ ✓. Line $r$ reads $114^\\circ$, a different number, so it is aimed differently and must cut across the other two ✗. The answer is $p$ and $q$ only. Check a second, independent way by treating each reading as a tilt. The angle a line makes with a fixed transversal is a complete record of its direction, so two lines share a direction exactly when they share a reading. Sort the readings: $66^\\circ$, $66^\\circ$, $114^\\circ$ — one group of two and one loner. Only the group of two can be parallel ✓. (The choices $q$ and $r$ or $p$ and $r$ are MATCHING SUPPLEMENTS INSTEAD OF EQUALS: $114^\\circ$ is the supplement of $66^\\circ$, and supplementary is the test for SAME-SIDE interior angles, not for corresponding ones ✗; "All three" would need all three readings to agree, and $114^\\circ$ does not ✗.)',
    },
    {
      q: 'A transversal crosses lines $d$, $e$, and $f$ in turn, making corresponding angles of $53^\\circ$ with $d$, $127^\\circ$ with $e$, and $127^\\circ$ with $f$. Which lines must be parallel?',
      choices: ['$d$ and $e$ only', '$d$ and $f$ only', '$e$ and $f$ only', 'All three'],
      answer: 2,
      solution:
        'Corresponding angles that are equal force parallel lines. Lines $e$ and $f$ both read $127^\\circ$, so $e \\parallel f$ ✓, while $d$ reads $53^\\circ$ and is therefore tilted differently and crosses both of them ✗. The answer is $e$ and $f$ only. Check a second, independent way by asking what it would take for $d$ to join the pair. For $d$ to be parallel to $e$, the corresponding angle at $d$ would have to be $127^\\circ$; it is $53^\\circ$, short by $74^\\circ$, and a line off by $74^\\circ$ is nowhere near parallel — it slices straight across ✓. (The choices $d$ and $e$ or $d$ and $f$ are MATCHING SUPPLEMENTS INSTEAD OF EQUALS, since $53^\\circ$ and $127^\\circ$ add to $180^\\circ$ and look temptingly related ✗; "All three" ignores that $d$ reads a different number ✗.)',
    },
    {
      q: 'A transversal crosses lines $j$, $k$, and $n$ in turn, making corresponding angles of $85^\\circ$ with $j$, $95^\\circ$ with $k$, and $85^\\circ$ with $n$. Which lines must be parallel?',
      choices: ['All three', '$j$ and $n$ only', '$j$ and $k$ only', '$k$ and $n$ only'],
      answer: 1,
      solution:
        'Sort the readings: $j$ and $n$ both make $85^\\circ$ with the transversal, and equal corresponding angles force parallel lines, so $j \\parallel n$ ✓. Line $k$ makes $95^\\circ$, a different reading, so it is aimed differently and crosses the other two ✗. The answer is $j$ and $n$ only. Check a second, independent way by suppose-and-see: if $k$ were parallel to $j$, then the corresponding angles at $j$ and $k$ would have to be equal, and $85 \\ne 95$ ✗ — so that assumption dies immediately, and the same argument kills $k \\parallel n$ ✓. Being close is not being equal; $10^\\circ$ of tilt is still tilt. (The choices $j$ and $k$ or $k$ and $n$ are MATCHING SUPPLEMENTS INSTEAD OF EQUALS — $85^\\circ$ and $95^\\circ$ add to $180^\\circ$, but for CORRESPONDING angles the test is equality ✗; "All three" would need all three readings to agree ✗.)',
    },
  ],
  // s8 — transversal plus a ray perpendicular to one of the parallels.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A transversal meets $\\ell$ at $A$ with a $62^\\circ$ angle and meets $m$ at $B$. A ray at $B$ is perpendicular to $m$. What is the angle marked between that ray and the transversal?',
      fig: {
        view: [-3.4, -1.2, 3.6, 3.3],
        elems: [
          { t: 'seg', a: [-3, 2.4], b: [3, 2.4] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-0.9, 2.4], b: [0.64, -0.5] },
          { t: 'seg', a: [0.38, 0], b: [0.38, 1.8] },
          { t: 'point', p: [-0.9, 2.4], label: 'A', dx: -4, dy: -8 },
          { t: 'point', p: [0.38, 0], label: 'B', dx: 6, dy: 16 },
          { t: 'label', p: [-2.7, 2.7], text: 'l', dy: 4 },
          { t: 'label', p: [-2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-0.9, 2.4], from: [3, 2.4], to: [0.38, 0], r: 0.7, label: '62' },
          { t: 'right', at: [0.38, 0], from: [3, 0], to: [0.38, 1.8] },
          { t: 'angle', at: [0.38, 0], from: [0.38, 1.8], to: [-0.9, 2.4], r: 0.9, label: '?' },
        ],
      },
      choices: ['$62^\\circ$', '$28^\\circ$', '$118^\\circ$', '$152^\\circ$'],
      answer: 1,
      solution:
        'Chase it in two steps. The transversal makes $62^\\circ$ with $\\ell$ at $A$, and alternate interior angles carry that same $62^\\circ$ down to $B$, sitting between the transversal and $m$ on the left. The perpendicular ray uses up a full $90^\\circ$ from $m$, so the gap left between the ray and the transversal is $90^\\circ - 62^\\circ = 28^\\circ$ ✓. Check a second, independent way with a right triangle. Because $\\ell \\parallel m$, a ray perpendicular to $m$ is perpendicular to $\\ell$ as well; extend it up until it meets $\\ell$ at a point $F$. Triangle $ABF$ then has a right angle at $F$, and its angle at $A$ is the given $62^\\circ$ (it lies along $\\ell$ between $A$ and $F$). The triangle sum leaves $180^\\circ - 90^\\circ - 62^\\circ = 28^\\circ$ for the angle at $B$ — and that angle at $B$ is the marked one, between $BA$ and the upward ray ✓. (The choice $62^\\circ$ is COPYING A GIVEN ANGLE and forgetting the perpendicular ✗; $118^\\circ$ is TREATING THE RIGHT ANGLE AS A STRAIGHT ANGLE, from $180 - 62$ ✗; $152^\\circ$ is ADDING THE RIGHT ANGLE INSTEAD OF SUBTRACTING, from $90 + 62$ ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A transversal meets $\\ell$ at $G$ with a $24^\\circ$ angle and meets $m$ at $H$. A ray at $H$ is perpendicular to $m$. What is the angle marked between that ray and the transversal?',
      fig: {
        view: [-3.4, -1.0, 3.6, 2.0],
        elems: [
          { t: 'seg', a: [-3, 1.2], b: [3, 1.2] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.5, 1.2], b: [2.09, -0.4] },
          { t: 'seg', a: [1.2, 0], b: [1.2, 0.9] },
          { t: 'point', p: [-1.5, 1.2], label: 'G', dx: -4, dy: -8 },
          { t: 'point', p: [1.2, 0], label: 'H', dx: 6, dy: 16 },
          { t: 'label', p: [-2.7, 1.5], text: 'l', dy: 4 },
          { t: 'label', p: [-2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-1.5, 1.2], from: [3, 1.2], to: [1.2, 0], r: 0.6, label: '24' },
          { t: 'right', at: [1.2, 0], from: [3, 0], to: [1.2, 0.9], s: 0.3 },
          { t: 'angle', at: [1.2, 0], from: [1.2, 0.9], to: [-1.5, 1.2], r: 0.5, label: '?' },
        ],
      },
      choices: ['$24^\\circ$', '$114^\\circ$', '$156^\\circ$', '$66^\\circ$'],
      answer: 3,
      solution:
        'Two steps again. Alternate interior angles copy the $24^\\circ$ from $G$ down to $H$, where it sits between the transversal and $m$. The perpendicular ray stands a full $90^\\circ$ off $m$, so the angle between the ray and the transversal is $90^\\circ - 24^\\circ = 66^\\circ$ ✓. Check a second, independent way with a right triangle: since $\\ell \\parallel m$, the ray perpendicular to $m$ is also perpendicular to $\\ell$, so extend it to meet $\\ell$ at $F$. In triangle $GHF$ the angle at $F$ is $90^\\circ$ and the angle at $G$ is the given $24^\\circ$, leaving $180^\\circ - 90^\\circ - 24^\\circ = 66^\\circ$ at $H$ — exactly the marked angle ✓. Shallow transversal, wide gap: the smaller the angle with the parallels, the closer the marked angle creeps to $90^\\circ$. (The choice $24^\\circ$ is COPYING A GIVEN ANGLE ✗; $156^\\circ$ is TREATING THE RIGHT ANGLE AS A STRAIGHT ANGLE, from $180 - 24$ ✗; $114^\\circ$ is ADDING THE RIGHT ANGLE INSTEAD OF SUBTRACTING, from $90 + 24$ ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A transversal meets $\\ell$ at $M$ with a $49^\\circ$ angle and meets $m$ at $N$. A ray at $N$ is perpendicular to $m$. What is the angle marked between that ray and the transversal?',
      fig: {
        view: [-3.4, -1.2, 3.6, 3.3],
        elems: [
          { t: 'seg', a: [-3, 2.4], b: [3, 2.4] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.2, 2.4], b: [1.32, -0.5] },
          { t: 'seg', a: [0.89, 0], b: [0.89, 1.8] },
          { t: 'point', p: [-1.2, 2.4], label: 'M', dx: -4, dy: -8 },
          { t: 'point', p: [0.89, 0], label: 'N', dx: 6, dy: 16 },
          { t: 'label', p: [-2.7, 2.7], text: 'l', dy: 4 },
          { t: 'label', p: [-2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-1.2, 2.4], from: [3, 2.4], to: [0.89, 0], r: 0.7, label: '49' },
          { t: 'right', at: [0.89, 0], from: [3, 0], to: [0.89, 1.8] },
          { t: 'angle', at: [0.89, 0], from: [0.89, 1.8], to: [-1.2, 2.4], r: 0.9, label: '?' },
        ],
      },
      choices: ['$41^\\circ$', '$49^\\circ$', '$131^\\circ$', '$139^\\circ$'],
      answer: 0,
      solution:
        'The transversal makes $49^\\circ$ with $\\ell$ at $M$, and alternate interior angles hand that same $49^\\circ$ to $N$, between the transversal and $m$. The perpendicular ray takes $90^\\circ$ off $m$, so what is left between the ray and the transversal is $90^\\circ - 49^\\circ = 41^\\circ$ ✓. Check a second, independent way with a right triangle. A ray perpendicular to $m$ is perpendicular to $\\ell$ too, since the lines are parallel; extend it to hit $\\ell$ at $F$. Triangle $MNF$ has a right angle at $F$ and the given $49^\\circ$ at $M$, so its third angle is $180^\\circ - 90^\\circ - 49^\\circ = 41^\\circ$, and that third angle is the marked one at $N$ ✓. Notice the two pieces at $N$, $49^\\circ$ and $41^\\circ$, rebuild the right angle: $49 + 41 = 90$ ✓. (The choice $49^\\circ$ is COPYING A GIVEN ANGLE ✗; $131^\\circ$ is TREATING THE RIGHT ANGLE AS A STRAIGHT ANGLE, from $180 - 49$ ✗; $139^\\circ$ is ADDING THE RIGHT ANGLE INSTEAD OF SUBTRACTING, from $90 + 49$ ✗.)',
    },
  ],
  // s9 — a line through the apex parallel to the opposite side.
  [
    {
      q: 'In triangle $ABC$, $\\angle B = 68^\\circ$ and $\\angle C = 47^\\circ$. A line through $A$ is drawn parallel to $BC$, and $D$ is a point on it on the same side as $B$. What is the angle $x = \\angle DAB$?',
      fig: {
        view: [-2.1, -0.8, 5.0, 3.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2, 0], [1.27, 3.14]], fill: false },
          { t: 'seg', a: [-0.83, 3.14], b: [3.37, 3.14], dash: true },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 8 },
          { t: 'point', p: [4.2, 0], label: 'C', dx: 10, dy: 8 },
          { t: 'point', p: [1.27, 3.14], label: 'A', dx: 4, dy: -10 },
          { t: 'point', p: [-0.83, 3.14], label: 'D', dx: -10, dy: -4 },
          { t: 'angle', at: [0, 0], from: [4.2, 0], to: [1.27, 3.14], r: 0.6, label: '68' },
          { t: 'angle', at: [4.2, 0], from: [0, 0], to: [1.27, 3.14], r: 0.9, label: '47' },
          { t: 'angle', at: [1.27, 3.14], from: [-0.83, 3.14], to: [0, 0], r: 0.55, label: 'x' },
        ],
      },
      choices: ['$65^\\circ$', '$47^\\circ$', '$112^\\circ$', '$68^\\circ$'],
      answer: 3,
      solution:
        'Treat $AB$ as a transversal for the two parallel lines $AD$ and $BC$. The angle $x$ at $A$ and $\\angle B$ at $B$ sit between the parallels on opposite sides of $AB$, which makes them alternate interior angles — equal. So $x = 68^\\circ$ ✓, and the measure of $\\angle C$ never enters. Check a second, independent way by filling the straight line at $A$ from the other end. The triangle sum gives $\\angle A = 180^\\circ - 68^\\circ - 47^\\circ = 65^\\circ$, and on the far side of $\\angle A$ sits a copy of $\\angle C = 47^\\circ$ (alternate interior angles, this time with $AC$ as the transversal). The line $AD$ is straight, so the three angles at $A$ fill $180^\\circ$: $x = 180^\\circ - 65^\\circ - 47^\\circ = 68^\\circ$ ✓. Same answer, and the second route is the classic proof that a triangle holds $180^\\circ$. (The choice $47^\\circ$ is ANSWERING THE FAR BASE ANGLE, $\\angle C$ ✗; $65^\\circ$ is ANSWERING THE APEX ANGLE, $\\angle A$ ✗; $112^\\circ$ is TAKING THE SUPPLEMENT of $\\angle B$ ✗.)',
    },
    {
      q: 'In triangle $PQR$, $\\angle Q = 57^\\circ$ and $\\angle R = 76^\\circ$. A line through $P$ is drawn parallel to $QR$, and $S$ is a point on it on the same side as $Q$. What is the angle $x = \\angle SPQ$?',
      fig: {
        view: [-1.6, -0.8, 4.6, 3.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.7, 0], [1.95, 3]], fill: false },
          { t: 'seg', a: [-0.15, 3], b: [4.05, 3], dash: true },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 8 },
          { t: 'point', p: [2.7, 0], label: 'R', dx: 10, dy: 8 },
          { t: 'point', p: [1.95, 3], label: 'P', dx: 6, dy: -8 },
          { t: 'point', p: [-0.15, 3], label: 'S', dx: -10, dy: -4 },
          { t: 'angle', at: [0, 0], from: [2.7, 0], to: [1.95, 3], r: 0.6, label: '57' },
          { t: 'angle', at: [2.7, 0], from: [0, 0], to: [1.95, 3], r: 0.9, label: '76' },
          { t: 'angle', at: [1.95, 3], from: [-0.15, 3], to: [0, 0], r: 0.55, label: 'x' },
        ],
      },
      choices: ['$76^\\circ$', '$123^\\circ$', '$57^\\circ$', '$47^\\circ$'],
      answer: 2,
      solution:
        'The segment $PQ$ cuts across the parallel lines $PS$ and $QR$, so it is a transversal. The angle $x$ lies between the parallels on one side of $PQ$ and $\\angle Q$ lies between them on the other side: alternate interior angles, hence equal. So $x = 57^\\circ$ ✓, with $\\angle R$ playing no part. Check a second, independent way by accounting for the whole straight line at $P$. The triangle sum gives $\\angle P = 180^\\circ - 57^\\circ - 76^\\circ = 47^\\circ$, and beyond $\\angle P$ on the other side lies a copy of $\\angle R = 76^\\circ$ (alternate interior angles with $PR$ as transversal). Since $S$, $P$ and the far end of the parallel line are collinear, those three angles total $180^\\circ$: $x = 180^\\circ - 47^\\circ - 76^\\circ = 57^\\circ$ ✓. (The choice $76^\\circ$ is ANSWERING THE FAR BASE ANGLE, $\\angle R$ ✗; $47^\\circ$ is ANSWERING THE APEX ANGLE, $\\angle P$ ✗; $123^\\circ$ is TAKING THE SUPPLEMENT of $\\angle Q$ ✗.)',
    },
    {
      q: 'In triangle $KLM$, $\\angle L = 83^\\circ$ and $\\angle M = 42^\\circ$. A line through $K$ is drawn parallel to $LM$, and $N$ is a point on it on the same side as $L$. What is the angle $x = \\angle NKL$?',
      fig: {
        view: [-2.4, -0.8, 5.0, 4.0],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2, 0], [0.42, 3.41]], fill: false },
          { t: 'seg', a: [-1.68, 3.41], b: [2.52, 3.41], dash: true },
          { t: 'point', p: [0, 0], label: 'L', dx: -10, dy: 8 },
          { t: 'point', p: [4.2, 0], label: 'M', dx: 10, dy: 8 },
          { t: 'point', p: [0.42, 3.41], label: 'K', dx: 8, dy: -6 },
          { t: 'point', p: [-1.68, 3.41], label: 'N', dx: -10, dy: -4 },
          { t: 'angle', at: [0, 0], from: [4.2, 0], to: [0.42, 3.41], r: 0.6, label: '83' },
          { t: 'angle', at: [4.2, 0], from: [0, 0], to: [0.42, 3.41], r: 0.9, label: '42' },
          { t: 'angle', at: [0.42, 3.41], from: [-1.68, 3.41], to: [0, 0], r: 0.5, label: 'x' },
        ],
      },
      choices: ['$83^\\circ$', '$42^\\circ$', '$55^\\circ$', '$97^\\circ$'],
      answer: 0,
      solution:
        'Use $KL$ as a transversal for the parallel lines $KN$ and $LM$. The angle $x$ and $\\angle L$ sit between the parallels on opposite sides of $KL$, so they are alternate interior angles and therefore equal: $x = 83^\\circ$ ✓. The given $\\angle M$ is not needed for this route. Check a second, independent way by sweeping the straight line at $K$. The triangle sum gives $\\angle K = 180^\\circ - 83^\\circ - 42^\\circ = 55^\\circ$, and past $\\angle K$ on the other side sits a copy of $\\angle M = 42^\\circ$, alternate interior with $KM$ as the transversal. The parallel line through $K$ is straight, so $x + 55^\\circ + 42^\\circ = 180^\\circ$, giving $x = 83^\\circ$ ✓. (The choice $42^\\circ$ is ANSWERING THE FAR BASE ANGLE, $\\angle M$ ✗; $55^\\circ$ is ANSWERING THE APEX ANGLE, $\\angle K$ ✗; $97^\\circ$ is TAKING THE SUPPLEMENT of $\\angle L$ ✗.)',
    },
  ],
  // s10 — a second segment from the point on l down to m.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A transversal from $A$ on $\\ell$ makes a $45^\\circ$ angle with $\\ell$ and meets $m$ at $B$. A second segment from $A$ meets $m$ at $C$, and $\\angle ACB = 98^\\circ$ (marked at $C$). What is $\\angle BAC$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 2.5], b: [3, 2.5] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.9, 2.5], b: [0.6, 0] },
          { t: 'seg', a: [-1.9, 2.5], b: [-1.55, 0] },
          { t: 'point', p: [-1.9, 2.5], label: 'A', dx: -4, dy: -8 },
          { t: 'point', p: [0.6, 0], label: 'B', dx: 8, dy: 16 },
          { t: 'point', p: [-1.55, 0], label: 'C', dx: -12, dy: 16 },
          { t: 'label', p: [2.7, 2.8], text: 'l', dy: 4 },
          { t: 'label', p: [2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-1.9, 2.5], from: [3, 2.5], to: [0.6, 0], r: 0.7, label: '45' },
          { t: 'angle', at: [-1.55, 0], from: [0.6, 0], to: [-1.9, 2.5], r: 0.5, label: '98' },
          { t: 'angle', at: [-1.9, 2.5], from: [0.6, 0], to: [-1.55, 0], r: 1.15, label: '?' },
        ],
      },
      choices: ['$45^\\circ$', '$53^\\circ$', '$37^\\circ$', '$82^\\circ$'],
      answer: 2,
      solution:
        'Two steps. The transversal $AB$ makes $45^\\circ$ with $\\ell$ at $A$, so alternate interior angles give $\\angle ABC = 45^\\circ$ at $B$. Then the triangle sum in $ABC$ finishes it: $\\angle BAC = 180^\\circ - 98^\\circ - 45^\\circ = 37^\\circ$ ✓. Check a second, independent way without ever using the triangle sum, by counting angles along $\\ell$ at $A$ instead. Three angles rest on that straight line: the given $45^\\circ$ between $\\ell$ and $AB$, then $\\angle BAC$, then the angle between $AC$ and $\\ell$ heading the other way. That last angle is an alternate interior angle of $\\angle ACB$ across the transversal $AC$, so it measures $98^\\circ$. A straight line holds $180^\\circ$, so $\\angle BAC = 180^\\circ - 45^\\circ - 98^\\circ = 37^\\circ$ ✓. (The choice $45^\\circ$ is COPYING A GIVEN ANGLE ✗; $82^\\circ$ is USING THE SUPPLEMENT AT THE MARKED VERTEX, $180 - 98$, and stopping there ✗; $53^\\circ$ is that same supplement carried into the triangle sum, $180 - 45 - 82$ ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A transversal from $G$ on $\\ell$ makes a $62^\\circ$ angle with $\\ell$ and meets $m$ at $H$. A second segment from $G$ meets $m$ at $J$, and $\\angle GJH = 95^\\circ$ (marked at $J$). What is $\\angle HGJ$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 2.5], b: [3, 2.5] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.6, 2.5], b: [-0.27, 0] },
          { t: 'seg', a: [-1.6, 2.5], b: [-1.38, 0] },
          { t: 'point', p: [-1.6, 2.5], label: 'G', dx: -4, dy: -8 },
          { t: 'point', p: [-0.27, 0], label: 'H', dx: 8, dy: 16 },
          { t: 'point', p: [-1.38, 0], label: 'J', dx: -12, dy: 16 },
          { t: 'label', p: [2.7, 2.8], text: 'l', dy: 4 },
          { t: 'label', p: [2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-1.6, 2.5], from: [3, 2.5], to: [-0.27, 0], r: 0.7, label: '62' },
          { t: 'angle', at: [-1.38, 0], from: [-0.27, 0], to: [-1.6, 2.5], r: 0.5, label: '95' },
          { t: 'angle', at: [-1.6, 2.5], from: [-0.27, 0], to: [-1.38, 0], r: 1.15, label: '?' },
        ],
      },
      choices: ['$33^\\circ$', '$23^\\circ$', '$62^\\circ$', '$85^\\circ$'],
      answer: 1,
      solution:
        'Step one: the transversal $GH$ makes $62^\\circ$ with $\\ell$, so it makes $62^\\circ$ with $m$ at $H$ as well — $\\angle GHJ = 62^\\circ$ by alternate interior angles. Step two: the triangle sum in $GHJ$ gives $\\angle HGJ = 180^\\circ - 95^\\circ - 62^\\circ = 23^\\circ$ ✓. Check a second, independent way by adding up the angles sitting on $\\ell$ at $G$: the given $62^\\circ$, then $\\angle HGJ$, then the angle between $GJ$ and $\\ell$ running the other way. That last one is an alternate interior angle of the marked $\\angle GJH$, so it is $95^\\circ$, and the straight line forces $62^\\circ + \\angle HGJ + 95^\\circ = 180^\\circ$, giving $\\angle HGJ = 23^\\circ$ ✓ — no triangle sum required. (The choice $62^\\circ$ is COPYING A GIVEN ANGLE ✗; $85^\\circ$ is USING THE SUPPLEMENT AT THE MARKED VERTEX, $180 - 95$ ✗; $33^\\circ$ is that supplement fed into the triangle sum, $180 - 62 - 85$ ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A transversal from $R$ on $\\ell$ makes a $48^\\circ$ angle with $\\ell$ and meets $m$ at $S$. A second segment from $R$ meets $m$ at $T$, and $\\angle RTS = 78^\\circ$ (marked at $T$). What is $\\angle SRT$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 2.5], b: [3, 2.5] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.3, 2.5], b: [0.95, 0] },
          { t: 'seg', a: [-1.3, 2.5], b: [-1.83, 0] },
          { t: 'point', p: [-1.3, 2.5], label: 'R', dx: -4, dy: -8 },
          { t: 'point', p: [0.95, 0], label: 'S', dx: 8, dy: 16 },
          { t: 'point', p: [-1.83, 0], label: 'T', dx: -12, dy: 16 },
          { t: 'label', p: [2.7, 2.8], text: 'l', dy: 4 },
          { t: 'label', p: [2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-1.3, 2.5], from: [3, 2.5], to: [0.95, 0], r: 0.7, label: '48' },
          { t: 'angle', at: [-1.83, 0], from: [0.95, 0], to: [-1.3, 2.5], r: 0.5, label: '78' },
          { t: 'angle', at: [-1.3, 2.5], from: [0.95, 0], to: [-1.83, 0], r: 1.15, label: '?' },
        ],
      },
      choices: ['$30^\\circ$', '$48^\\circ$', '$102^\\circ$', '$54^\\circ$'],
      answer: 3,
      solution:
        'Step one: alternate interior angles across the parallels copy the $48^\\circ$ from $R$ down to $S$, so $\\angle RST = 48^\\circ$. Step two: the triangle sum in $RST$ gives $\\angle SRT = 180^\\circ - 78^\\circ - 48^\\circ = 54^\\circ$ ✓. Check a second, independent way by working entirely along $\\ell$. At $R$ the straight line carries three angles in a row: the given $48^\\circ$ on one side, then $\\angle SRT$, then the angle between $RT$ and $\\ell$ on the far side, which is an alternate interior angle of the marked $78^\\circ$. So $48^\\circ + \\angle SRT + 78^\\circ = 180^\\circ$ and $\\angle SRT = 54^\\circ$ ✓. (The choice $48^\\circ$ is COPYING A GIVEN ANGLE ✗; $102^\\circ$ is USING THE SUPPLEMENT AT THE MARKED VERTEX, $180 - 78$ ✗; $30^\\circ$ is that supplement pushed through the triangle sum, $180 - 48 - 102$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 2,
  sections: {
    '2.7': s27,
  },
}
