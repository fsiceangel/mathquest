// Introduction to Geometry chapter 14 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice by two genuinely different routes, and the
//    two routes had to agree before the key was written: multiplying the three
//    face areas vs. recovering the three edge lengths (slot 1); the center patch
//    of each face vs. the full census of the small cubes (slot 2); two
//    Pythagorean steps vs. the distance formula on corner coordinates (slot 3);
//    the right isosceles cross-section on a base diagonal vs. coordinates on the
//    base corners (slot 4); solving Euler for the faces vs. solving it for the
//    edges first (slot 5); face corners divided by the meeting number vs.
//    Euler on the same solid (slot 6); cubic centimeters divided by a thousand
//    vs. rebuilding the tank in decimeters (slot 7); the three separate factors
//    vs. a concrete numerical box (slot 8); the edge length from the surface
//    area vs. the ratio between area and volume (slot 9); counting the three
//    layers of edges vs. Euler on the prism (slot 10); the pyramid formula vs.
//    three copies filling the box (slot 11); one side per face vs. exhibiting
//    the slice (slot 12).
//  - Solids are drawn as oblique wireframes with dashed hidden edges. An
//    oblique drawing does not preserve length, so every stated dimension lives
//    in a label rather than in the picture.
//  - Figure labels are plain text: bare numerals and short phrases.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗.
//  - No two choices inside an item name the same value, and inside each slot the
//    three variations put the correct answer in three different positions.

const challenge = [
  // slot 1 — three different face areas of a box give its volume.
  // Lane: 8, 12, 24 -> 48 / 12, 15, 20 -> 60 / 10, 18, 45 -> 90.
  [
    {
      q: 'A gift box is a rectangular block. Its front face has area $24$, its right-hand face has area $8$, and its top face has area $12$. What is the volume of the box?',
      fig: {
        view: [-1.3, -1.4, 6.6, 4.8],
        alt: 'Oblique wireframe of a rectangular box with hidden edges dashed, the front face marked area 24, the right face area 8, and the top face area 12',
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2, 0], [4.2, 2.8], [0, 2.8]], fill: false },
          { t: 'seg', a: [4.2, 0], b: [5.3, 0.8] },
          { t: 'seg', a: [4.2, 2.8], b: [5.3, 3.6] },
          { t: 'seg', a: [0, 2.8], b: [1.1, 3.6] },
          { t: 'seg', a: [5.3, 0.8], b: [5.3, 3.6] },
          { t: 'seg', a: [1.1, 3.6], b: [5.3, 3.6] },
          { t: 'seg', a: [0, 0], b: [1.1, 0.8], dash: true },
          { t: 'seg', a: [1.1, 0.8], b: [5.3, 0.8], dash: true },
          { t: 'seg', a: [1.1, 0.8], b: [1.1, 3.6], dash: true },
          { t: 'label', p: [2.1, 1.4], text: 'area 24', dx: 0, dy: 4 },
          { t: 'label', p: [4.75, 1.9], text: 'area 8', dx: 10, dy: 0 },
          { t: 'label', p: [2.75, 3.2], text: 'area 12', dx: 0, dy: -4 },
        ],
      },
      choices: ['$48$', '$44$', '$12$', '$2304$'],
      answer: 0,
      solution:
        'Name the edges $l$, $w$, $h$, so the three different faces have areas $lw$, $lh$, and $wh$. Multiplying all three areas multiplies every edge exactly twice: $(lwh)^2 = 8 \\times 12 \\times 24 = 2304$, so $V = \\sqrt{2304} = 48$ ✓. Check a second, independent way by digging out the edges themselves: dividing the product of two areas by the third isolates one edge, $\\frac{8 \\times 12}{24} = 4 = l^2$, so $l = 2$; then $w = \\frac{8}{2} = 4$ and $h = \\frac{12}{2} = 6$, and $V = 2 \\times 4 \\times 6 = 48$ ✓ (and $2 \\times 4 = 8$, $2 \\times 6 = 12$, $4 \\times 6 = 24$ all match the picture). (The choice $44$ is ADDING THE THREE FACE AREAS ✗; the choice $12$ is ADDING THE THREE EDGE LENGTHS instead of multiplying them ✗; the choice $2304$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'A chocolate box is a rectangular block whose front face has area $20$, whose right-hand face has area $12$, and whose top face has area $15$. What is the volume of the box?',
      fig: {
        view: [-1.3, -1.4, 6.6, 5.4],
        alt: 'Oblique wireframe of a rectangular box with hidden edges dashed, the front face marked area 20, the right face area 12, and the top face area 15',
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 3.2], [0, 3.2]], fill: false },
          { t: 'seg', a: [4, 0], b: [5.3, 1] },
          { t: 'seg', a: [4, 3.2], b: [5.3, 4.2] },
          { t: 'seg', a: [0, 3.2], b: [1.3, 4.2] },
          { t: 'seg', a: [5.3, 1], b: [5.3, 4.2] },
          { t: 'seg', a: [1.3, 4.2], b: [5.3, 4.2] },
          { t: 'seg', a: [0, 0], b: [1.3, 1], dash: true },
          { t: 'seg', a: [1.3, 1], b: [5.3, 1], dash: true },
          { t: 'seg', a: [1.3, 1], b: [1.3, 4.2], dash: true },
          { t: 'label', p: [2, 1.6], text: 'area 20', dx: 0, dy: 4 },
          { t: 'label', p: [4.65, 2.1], text: 'area 12', dx: 10, dy: 0 },
          { t: 'label', p: [2.65, 3.7], text: 'area 15', dx: 0, dy: -4 },
        ],
      },
      choices: ['$47$', '$60$', '$12$', '$3600$'],
      answer: 1,
      solution:
        'Write the edges as $l$, $w$, $h$; the three faces have areas $lw$, $lh$, and $wh$, and their product counts every edge twice: $(lwh)^2 = 12 \\times 15 \\times 20 = 3600$, so $V = \\sqrt{3600} = 60$ ✓. Check a second, independent way by recovering the edges: $\\frac{12 \\times 15}{20} = 9 = l^2$, so $l = 3$; then $w = \\frac{12}{3} = 4$ and $h = \\frac{15}{3} = 5$, and $V = 3 \\times 4 \\times 5 = 60$ ✓ (and $3 \\times 4 = 12$, $3 \\times 5 = 15$, $4 \\times 5 = 20$ all match). (The choice $47$ is ADDING THE THREE FACE AREAS ✗; the choice $12$ is ADDING THE THREE EDGE LENGTHS instead of multiplying them ✗; the choice $3600$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'A storage crate is a rectangular block. Its front face has area $45$, its right-hand face has area $10$, and its top face has area $18$. What is the volume of the crate?',
      fig: {
        view: [-1.3, -1.4, 6.8, 4.5],
        alt: 'Oblique wireframe of a long low rectangular box with hidden edges dashed, the front face marked area 45, the right face area 10, and the top face area 18',
        elems: [
          { t: 'poly', pts: [[0, 0], [4.6, 0], [4.6, 2.6], [0, 2.6]], fill: false },
          { t: 'seg', a: [4.6, 0], b: [5.5, 0.7] },
          { t: 'seg', a: [4.6, 2.6], b: [5.5, 3.3] },
          { t: 'seg', a: [0, 2.6], b: [0.9, 3.3] },
          { t: 'seg', a: [5.5, 0.7], b: [5.5, 3.3] },
          { t: 'seg', a: [0.9, 3.3], b: [5.5, 3.3] },
          { t: 'seg', a: [0, 0], b: [0.9, 0.7], dash: true },
          { t: 'seg', a: [0.9, 0.7], b: [5.5, 0.7], dash: true },
          { t: 'seg', a: [0.9, 0.7], b: [0.9, 3.3], dash: true },
          { t: 'label', p: [2.3, 1.3], text: 'area 45', dx: 0, dy: 4 },
          { t: 'label', p: [5.05, 1.65], text: 'area 10', dx: 10, dy: 0 },
          { t: 'label', p: [2.75, 2.95], text: 'area 18', dx: 0, dy: -4 },
        ],
      },
      choices: ['$73$', '$16$', '$8100$', '$90$'],
      answer: 3,
      solution:
        'Let the edges be $l$, $w$, $h$, so the three faces measure $lw$, $lh$, and $wh$. Their product is the volume squared, since each edge appears twice: $(lwh)^2 = 10 \\times 18 \\times 45 = 8100$, so $V = \\sqrt{8100} = 90$ ✓. Check a second, independent way by pulling out the edges: $\\frac{10 \\times 18}{45} = 4 = l^2$, so $l = 2$; then $w = \\frac{10}{2} = 5$ and $h = \\frac{18}{2} = 9$, and $V = 2 \\times 5 \\times 9 = 90$ ✓ (and $2 \\times 5 = 10$, $2 \\times 9 = 18$, $5 \\times 9 = 45$ all match). (The choice $73$ is ADDING THE THREE FACE AREAS ✗; the choice $16$ is ADDING THE THREE EDGE LENGTHS instead of multiplying them ✗; the choice $8100$ is FORGETTING THE SQUARE ROOT ✗.)',
    },
  ],

  // slot 2 — painted big cube; count the small cubes with exactly one painted face.
  // Lane: 4 by 4 by 4 -> 24 / 5 by 5 by 5 -> 54 / 7 by 7 by 7 -> 150.
  [
    {
      q: 'A $4 \\times 4 \\times 4$ tower is glued together from $64$ unit cubes, and then every outside surface is sprayed gold. How many of the unit cubes end up with exactly one gold face?',
      choices: ['$96$', '$24$', '$8$', '$16$'],
      answer: 1,
      solution:
        'A unit cube gets exactly one gold face when it sits in the middle of a face of the tower, touching no edge. Stripping the border from a $4 \\times 4$ face leaves a $(4 - 2) \\times (4 - 2) = 2 \\times 2$ patch, so each face contributes $4$ cubes and the six faces give $6 \\times 4 = 24$ ✓. Check a second, independent way with a full census of all $64$ cubes: the $8$ corners carry three gold faces, each of the $12$ edges carries $4 - 2 = 2$ non-corner cubes with two gold faces for $12 \\times 2 = 24$, and the hidden core is a $2 \\times 2 \\times 2$ block of $8$ unpainted cubes. What is left over has exactly one gold face: $64 - 8 - 24 - 8 = 24$ ✓. (The choice $96$ is COUNTING PAINTED SQUARES INSTEAD OF CUBES, $6 \\times 4^2$ ✗; the choice $8$ is REPORTING THE UNPAINTED CORE ✗; the choice $16$ is COUNTING A WHOLE FACE OF THE TOWER, border included ✗.)',
    },
    {
      q: 'A solid block measuring $5 \\times 5 \\times 5$ is assembled from $125$ small cubes, and its entire outside is dipped in blue dye. How many of the small cubes come out with exactly one blue face?',
      choices: ['$27$', '$36$', '$54$', '$150$'],
      answer: 2,
      solution:
        'Exactly one blue face means sitting in the interior of a face of the block, off every edge. Removing the border of a $5 \\times 5$ face leaves a $(5 - 2) \\times (5 - 2) = 3 \\times 3$ patch, so each face gives $9$ cubes and the total is $6 \\times 9 = 54$ ✓. Check a second, independent way by sorting all $125$ cubes: $8$ corner cubes have three blue faces, the $12$ edges hold $5 - 2 = 3$ non-corner cubes apiece for $12 \\times 3 = 36$ two-face cubes, and the untouched core is $3 \\times 3 \\times 3 = 27$ cubes. The remainder is the one-face group: $125 - 8 - 36 - 27 = 54$ ✓. (The choice $27$ is REPORTING THE UNDYED CORE ✗; the choice $36$ is COUNTING THE EDGE CUBES, which have two blue faces ✗; the choice $150$ is COUNTING BLUE SQUARES INSTEAD OF CUBES, $6 \\times 5^2$ ✗.)',
    },
    {
      q: 'A $7 \\times 7 \\times 7$ display cube is stacked from $343$ wooden cubes, and every exposed surface is varnished. How many of the wooden cubes have varnish on exactly one face?',
      choices: ['$125$', '$60$', '$294$', '$150$'],
      answer: 3,
      solution:
        'One varnished face means living in the middle region of a face, clear of all four edges. Peeling the border off a $7 \\times 7$ face leaves a $(7 - 2) \\times (7 - 2) = 5 \\times 5$ patch, which is $25$ cubes per face, so the count is $6 \\times 25 = 150$ ✓. Check a second, independent way by accounting for all $343$ cubes: $8$ corners have three varnished faces, the $12$ edges carry $7 - 2 = 5$ non-corner cubes each for $12 \\times 5 = 60$ two-face cubes, and the sealed core is $5 \\times 5 \\times 5 = 125$ cubes with no varnish. Everything else has exactly one: $343 - 8 - 60 - 125 = 150$ ✓. (The choice $125$ is REPORTING THE UNVARNISHED CORE ✗; the choice $60$ is COUNTING THE EDGE CUBES, which have two varnished faces ✗; the choice $294$ is COUNTING VARNISHED SQUARES INSTEAD OF CUBES, $6 \\times 7^2$ ✗.)',
    },
  ],

  // slot 3 — space diagonal of a cube, radical answer.
  // Lane: edge 7 / edge 11 / edge 13.
  [
    {
      q: 'A cube-shaped packing crate has every edge $7$ ft long. A straight brace runs from one bottom corner to the opposite top corner, right through the middle of the crate. How long is the brace?',
      fig: {
        view: [-1, -1.2, 5.9, 5.5],
        alt: 'Oblique wireframe of a cube with hidden edges dashed, two edges marked 7, and the space diagonal drawn from the front bottom left corner to the back top right corner marked with a question mark',
        elems: [
          { t: 'poly', pts: [[0, 0], [3.4, 0], [3.4, 3.4], [0, 3.4]], fill: false },
          { t: 'seg', a: [3.4, 0], b: [4.65, 0.95] },
          { t: 'seg', a: [3.4, 3.4], b: [4.65, 4.35] },
          { t: 'seg', a: [0, 3.4], b: [1.25, 4.35] },
          { t: 'seg', a: [4.65, 0.95], b: [4.65, 4.35] },
          { t: 'seg', a: [1.25, 4.35], b: [4.65, 4.35] },
          { t: 'seg', a: [0, 0], b: [1.25, 0.95], dash: true },
          { t: 'seg', a: [1.25, 0.95], b: [4.65, 0.95], dash: true },
          { t: 'seg', a: [1.25, 0.95], b: [1.25, 4.35], dash: true },
          { t: 'seg', a: [0, 0], b: [4.65, 4.35] },
          { t: 'label', p: [1.7, 0], text: '7', dy: 18 },
          { t: 'label', p: [0, 1.7], text: '7', dx: -12, dy: 4 },
          { t: 'label', p: [2.325, 2.175], text: '?', dx: 11, dy: 7 },
        ],
      },
      choices: ['$7\\sqrt{3}$', '$7\\sqrt{2}$', '$21$', '$14$'],
      answer: 0,
      solution:
        'Take two Pythagorean steps. Across the floor of the crate the diagonal is $\\sqrt{7^2 + 7^2} = \\sqrt{98} = 7\\sqrt{2}$, and the brace is the hypotenuse of a right triangle with that floor diagonal and the vertical edge $7$ as legs: $\\sqrt{(7\\sqrt{2})^2 + 7^2} = \\sqrt{98 + 49} = \\sqrt{147} = 7\\sqrt{3}$ ✓. Check a second, independent way with coordinates: put the starting corner at $(0, 0, 0)$ and the opposite corner at $(7, 7, 7)$; the distance between them is $\\sqrt{7^2 + 7^2 + 7^2} = \\sqrt{3 \\times 49} = 7\\sqrt{3}$ ✓. (The choice $7\\sqrt{2}$ is STOPPING AT THE FLOOR DIAGONAL, which crosses only one face ✗; the choice $21$ is TREATING $\\sqrt{3}$ AS $3$ ✗; the choice $14$ is WALKING TWO EDGES instead of cutting through the middle ✗.)',
    },
    {
      q: 'A block of ice is a perfect cube with edges of $11$ cm. A thin crack runs straight from one corner to the corner farthest away from it, passing through the interior. How long is the crack?',
      fig: {
        view: [-1.2, -1.2, 5.4, 5],
        alt: 'Oblique wireframe of a cube with hidden edges dashed, two edges marked 11, and the space diagonal drawn from the front bottom left corner to the back top right corner marked with a question mark',
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [3, 3], [0, 3]], fill: false },
          { t: 'seg', a: [3, 0], b: [4.15, 0.85] },
          { t: 'seg', a: [3, 3], b: [4.15, 3.85] },
          { t: 'seg', a: [0, 3], b: [1.15, 3.85] },
          { t: 'seg', a: [4.15, 0.85], b: [4.15, 3.85] },
          { t: 'seg', a: [1.15, 3.85], b: [4.15, 3.85] },
          { t: 'seg', a: [0, 0], b: [1.15, 0.85], dash: true },
          { t: 'seg', a: [1.15, 0.85], b: [4.15, 0.85], dash: true },
          { t: 'seg', a: [1.15, 0.85], b: [1.15, 3.85], dash: true },
          { t: 'seg', a: [0, 0], b: [4.15, 3.85] },
          { t: 'label', p: [1.5, 0], text: '11', dy: 18 },
          { t: 'label', p: [0, 1.5], text: '11', dx: -14, dy: 4 },
          { t: 'label', p: [2.075, 1.925], text: '?', dx: 11, dy: 7 },
        ],
      },
      choices: ['$11\\sqrt{2}$', '$22$', '$11\\sqrt{3}$', '$33$'],
      answer: 2,
      solution:
        'Two Pythagorean steps do it. On the bottom face the diagonal is $\\sqrt{11^2 + 11^2} = \\sqrt{242} = 11\\sqrt{2}$, and the crack is the hypotenuse of a right triangle whose legs are that diagonal and the vertical edge $11$: $\\sqrt{(11\\sqrt{2})^2 + 11^2} = \\sqrt{242 + 121} = \\sqrt{363} = 11\\sqrt{3}$ ✓. Check a second, independent way with coordinates: the two corners can be placed at $(0, 0, 0)$ and $(11, 11, 11)$, so the distance is $\\sqrt{11^2 + 11^2 + 11^2} = \\sqrt{3 \\times 121} = 11\\sqrt{3}$ ✓. (The choice $11\\sqrt{2}$ is STOPPING AT THE FACE DIAGONAL ✗; the choice $22$ is WALKING TWO EDGES instead of cutting through the interior ✗; the choice $33$ is TREATING $\\sqrt{3}$ AS $3$ ✗.)',
    },
    {
      q: 'A wooden puzzle box is a cube with edge $13$ in. A metal rod is fitted inside so that it joins two corners that do not share any face. How long is the rod?',
      fig: {
        view: [-1.2, -1.2, 6.2, 5.8],
        alt: 'Oblique wireframe of a cube with hidden edges dashed, two edges marked 13, and the space diagonal drawn from the front bottom left corner to the back top right corner marked with a question mark',
        elems: [
          { t: 'poly', pts: [[0, 0], [3.6, 0], [3.6, 3.6], [0, 3.6]], fill: false },
          { t: 'seg', a: [3.6, 0], b: [4.9, 1] },
          { t: 'seg', a: [3.6, 3.6], b: [4.9, 4.6] },
          { t: 'seg', a: [0, 3.6], b: [1.3, 4.6] },
          { t: 'seg', a: [4.9, 1], b: [4.9, 4.6] },
          { t: 'seg', a: [1.3, 4.6], b: [4.9, 4.6] },
          { t: 'seg', a: [0, 0], b: [1.3, 1], dash: true },
          { t: 'seg', a: [1.3, 1], b: [4.9, 1], dash: true },
          { t: 'seg', a: [1.3, 1], b: [1.3, 4.6], dash: true },
          { t: 'seg', a: [0, 0], b: [4.9, 4.6] },
          { t: 'label', p: [1.8, 0], text: '13', dy: 18 },
          { t: 'label', p: [0, 1.8], text: '13', dx: -14, dy: 4 },
          { t: 'label', p: [2.45, 2.3], text: '?', dx: 11, dy: 7 },
        ],
      },
      choices: ['$13\\sqrt{2}$', '$26$', '$39$', '$13\\sqrt{3}$'],
      answer: 3,
      solution:
        'Corners that share no face are opposite ends of a space diagonal, so take two Pythagorean steps. The diagonal of one face is $\\sqrt{13^2 + 13^2} = \\sqrt{338} = 13\\sqrt{2}$, and the rod is the hypotenuse of a right triangle with legs $13\\sqrt{2}$ and $13$: $\\sqrt{338 + 169} = \\sqrt{507} = 13\\sqrt{3}$ ✓. Check a second, independent way with coordinates: the corners sit at $(0, 0, 0)$ and $(13, 13, 13)$, so the distance is $\\sqrt{13^2 + 13^2 + 13^2} = \\sqrt{3 \\times 169} = 13\\sqrt{3}$ ✓. (The choice $13\\sqrt{2}$ is STOPPING AT THE FACE DIAGONAL, which joins corners that do share a face ✗; the choice $26$ is WALKING TWO EDGES instead of cutting through the interior ✗; the choice $39$ is TREATING $\\sqrt{3}$ AS $3$ ✗.)',
    },
  ],

  // slot 4 — square pyramid with all eight edges equal; volume is a radical.
  // Lane: edge 12 -> 288 root 2 / edge 18 -> 972 root 2 / edge 24 -> 2304 root 2.
  [
    {
      q: 'A camping tent is shaped like a square pyramid in which all eight edges are equal to $12$ ft — the four edges around the square floor and the four edges climbing to the peak. What is the volume of the tent?',
      fig: {
        view: [-1, -1.5, 5.9, 4.4],
        alt: 'Oblique wireframe of a square pyramid with the two hidden base edges and the hidden lateral edge dashed, a dashed height from the center of the base to the apex, one base edge marked 12 and one edge to the apex marked 12',
        elems: [
          { t: 'seg', a: [0, 0], b: [3.4, 0] },
          { t: 'seg', a: [3.4, 0], b: [4.6, 1] },
          { t: 'seg', a: [4.6, 1], b: [1.2, 1], dash: true },
          { t: 'seg', a: [1.2, 1], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.3, 3.2] },
          { t: 'seg', a: [3.4, 0], b: [2.3, 3.2] },
          { t: 'seg', a: [4.6, 1], b: [2.3, 3.2] },
          { t: 'seg', a: [1.2, 1], b: [2.3, 3.2], dash: true },
          { t: 'seg', a: [2.3, 0.5], b: [2.3, 3.2], dash: true },
          { t: 'label', p: [1.7, 0], text: '12', dy: 18 },
          { t: 'label', p: [1.15, 1.6], text: '12', dx: -10, dy: 0 },
        ],
      },
      choices: ['$288\\sqrt{2}$', '$288\\sqrt{3}$', '$576$', '$864\\sqrt{2}$'],
      answer: 0,
      solution:
        'Slice the tent along a diagonal of its floor. That cross-section is a triangle whose base is the floor diagonal $12\\sqrt{2}$ and whose two other sides are edges of length $12$; since $12^2 + 12^2 = (12\\sqrt{2})^2$, the triangle is right-angled at the peak, so the height to its hypotenuse is half the hypotenuse, $6\\sqrt{2}$. Then $V = \\frac{1}{3} \\times 12^2 \\times 6\\sqrt{2} = \\frac{1}{3} \\times 144 \\times 6\\sqrt{2} = 288\\sqrt{2}$ ✓. Check a second, independent way with coordinates: put the floor corners at $(\\pm 6, \\pm 6, 0)$ and the peak at $(0, 0, h)$. An edge to the peak then satisfies $6^2 + 6^2 + h^2 = 12^2$, so $h^2 = 144 - 72 = 72$ and $h = 6\\sqrt{2}$, giving $V = \\frac{1}{3} \\times 144 \\times 6\\sqrt{2} = 288\\sqrt{2}$ ✓. (The choice $288\\sqrt{3}$ is MEASURING TO THE MIDDLE OF A FLOOR EDGE INSTEAD OF A CORNER, which gives $h = \\sqrt{144 - 36}$ ✗; the choice $576$ is USING THE SLANTED EDGE $12$ AS THE HEIGHT ✗; the choice $864\\sqrt{2}$ is FORGETTING THE FACTOR $\\frac{1}{3}$ ✗.)',
    },
    {
      q: 'A glass ornament is a square pyramid whose eight edges are all $18$ mm long — the four around the square base and the four rising to the tip. What is the volume of the ornament?',
      fig: {
        view: [-1, -1.5, 6.4, 4.7],
        alt: 'Oblique wireframe of a square pyramid with the two hidden base edges and the hidden lateral edge dashed, a dashed height from the center of the base to the apex, one base edge marked 18 and one edge to the apex marked 18',
        elems: [
          { t: 'seg', a: [0, 0], b: [3.8, 0] },
          { t: 'seg', a: [3.8, 0], b: [5.1, 1.05] },
          { t: 'seg', a: [5.1, 1.05], b: [1.3, 1.05], dash: true },
          { t: 'seg', a: [1.3, 1.05], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.55, 3.5] },
          { t: 'seg', a: [3.8, 0], b: [2.55, 3.5] },
          { t: 'seg', a: [5.1, 1.05], b: [2.55, 3.5] },
          { t: 'seg', a: [1.3, 1.05], b: [2.55, 3.5], dash: true },
          { t: 'seg', a: [2.55, 0.525], b: [2.55, 3.5], dash: true },
          { t: 'label', p: [1.9, 0], text: '18', dy: 18 },
          { t: 'label', p: [1.275, 1.75], text: '18', dx: -10, dy: 0 },
        ],
      },
      choices: ['$972\\sqrt{3}$', '$972\\sqrt{2}$', '$1944$', '$2916\\sqrt{2}$'],
      answer: 1,
      solution:
        'Cut the ornament along a diagonal of its base. The cross-section has base $18\\sqrt{2}$, the base diagonal, and two sides of length $18$; because $18^2 + 18^2 = (18\\sqrt{2})^2$, the tip is a right angle, so the height to the hypotenuse is half of it, $9\\sqrt{2}$. Then $V = \\frac{1}{3} \\times 18^2 \\times 9\\sqrt{2} = \\frac{1}{3} \\times 324 \\times 9\\sqrt{2} = 972\\sqrt{2}$ ✓. Check a second, independent way with coordinates: base corners at $(\\pm 9, \\pm 9, 0)$ and tip at $(0, 0, h)$ give $9^2 + 9^2 + h^2 = 18^2$, so $h^2 = 324 - 162 = 162$ and $h = 9\\sqrt{2}$, and $V = \\frac{1}{3} \\times 324 \\times 9\\sqrt{2} = 972\\sqrt{2}$ ✓. (The choice $972\\sqrt{3}$ is MEASURING TO THE MIDDLE OF A BASE EDGE INSTEAD OF A CORNER, which gives $h = \\sqrt{324 - 81}$ ✗; the choice $1944$ is USING THE SLANTED EDGE $18$ AS THE HEIGHT ✗; the choice $2916\\sqrt{2}$ is FORGETTING THE FACTOR $\\frac{1}{3}$ ✗.)',
    },
    {
      q: 'A stone monument is a square pyramid with all eight of its edges equal to $24$ m — the four base edges and the four edges leading up to the apex. What is the volume of the monument?',
      fig: {
        view: [-1, -1.4, 5.6, 4.2],
        alt: 'Oblique wireframe of a square pyramid with the two hidden base edges and the hidden lateral edge dashed, a dashed height from the center of the base to the apex, one base edge marked 24 and one edge to the apex marked 24',
        elems: [
          { t: 'seg', a: [0, 0], b: [3.2, 0] },
          { t: 'seg', a: [3.2, 0], b: [4.3, 0.9] },
          { t: 'seg', a: [4.3, 0.9], b: [1.1, 0.9], dash: true },
          { t: 'seg', a: [1.1, 0.9], b: [0, 0], dash: true },
          { t: 'seg', a: [0, 0], b: [2.15, 3] },
          { t: 'seg', a: [3.2, 0], b: [2.15, 3] },
          { t: 'seg', a: [4.3, 0.9], b: [2.15, 3] },
          { t: 'seg', a: [1.1, 0.9], b: [2.15, 3], dash: true },
          { t: 'seg', a: [2.15, 0.45], b: [2.15, 3], dash: true },
          { t: 'label', p: [1.6, 0], text: '24', dy: 18 },
          { t: 'label', p: [1.075, 1.5], text: '24', dx: -10, dy: 0 },
        ],
      },
      choices: ['$2304\\sqrt{3}$', '$4608$', '$2304\\sqrt{2}$', '$6912\\sqrt{2}$'],
      answer: 2,
      solution:
        'Slice the monument through the apex along a diagonal of the base. The cross-section is a triangle with base $24\\sqrt{2}$ and two sides of $24$, and $24^2 + 24^2 = (24\\sqrt{2})^2$, so the angle at the apex is right and the height to the hypotenuse is half of it, $12\\sqrt{2}$. Then $V = \\frac{1}{3} \\times 24^2 \\times 12\\sqrt{2} = \\frac{1}{3} \\times 576 \\times 12\\sqrt{2} = 2304\\sqrt{2}$ ✓. Check a second, independent way with coordinates: base corners at $(\\pm 12, \\pm 12, 0)$ and apex at $(0, 0, h)$ give $12^2 + 12^2 + h^2 = 24^2$, so $h^2 = 576 - 288 = 288$ and $h = 12\\sqrt{2}$, and $V = \\frac{1}{3} \\times 576 \\times 12\\sqrt{2} = 2304\\sqrt{2}$ ✓. (The choice $2304\\sqrt{3}$ is MEASURING TO THE MIDDLE OF A BASE EDGE INSTEAD OF A CORNER, which gives $h = \\sqrt{576 - 144}$ ✗; the choice $4608$ is USING THE SLANTED EDGE $24$ AS THE HEIGHT ✗; the choice $6912\\sqrt{2}$ is FORGETTING THE FACTOR $\\frac{1}{3}$ ✗.)',
    },
  ],

  // slot 5 — all faces triangles, so F = 2V - 4.
  // Lane: 16 vertices -> 28 / 25 vertices -> 46 / 30 vertices -> 56.
  [
    {
      q: 'A cut crystal has $16$ corners, and every one of its flat faces is a triangle. How many faces does it have?',
      choices: ['$32$', '$28$', '$42$', '$24$'],
      answer: 1,
      solution:
        'Triangular faces tie the edges to the faces: listing sides face by face gives $3F$, and each edge is listed by the two faces sharing it, so $E = \\frac{3F}{2}$. Feed that into $V - E + F = 2$: $16 - \\frac{3F}{2} + F = 2$ becomes $16 - \\frac{F}{2} = 2$, so $\\frac{F}{2} = 14$ and $F = 28$ ✓. Check a second, independent way by solving for the edges first: Euler rearranges to $F = 2 - V + E$, and substituting into $2E = 3F$ gives $2E = 3(2 - 16 + E) = 3E - 42$, so $E = 42$; then $F = 2 - 16 + 42 = 28$ ✓ (and $16 - 42 + 28 = 2$). (The choice $32$ is DROPPING THE $-4$ in $F = 2V - 4$ ✗; the choice $42$ is REPORTING THE EDGE COUNT ✗; the choice $24$ is SUBTRACTING BEFORE DOUBLING, computing $2(16 - 4)$ ✗.)',
    },
    {
      q: 'A model of a virus shell is a polyhedron with $25$ vertices whose faces are all triangles. How many faces does the model have?',
      choices: ['$50$', '$69$', '$46$', '$42$'],
      answer: 2,
      solution:
        'Because every face is a triangle, counting sides face by face gives $3F$, and every edge is counted twice, so $E = \\frac{3F}{2}$. Put that into $V - E + F = 2$: $25 - \\frac{3F}{2} + F = 2$, that is $25 - \\frac{F}{2} = 2$, so $\\frac{F}{2} = 23$ and $F = 46$ ✓. Check a second, independent way by finding the edges first: Euler gives $F = 2 - V + E$, and $2E = 3F$ then reads $2E = 3(2 - 25 + E) = 3E - 69$, so $E = 69$ and $F = 2 - 25 + 69 = 46$ ✓ (and $25 - 69 + 46 = 2$). (The choice $50$ is DROPPING THE $-4$ in $F = 2V - 4$ ✗; the choice $69$ is REPORTING THE EDGE COUNT ✗; the choice $42$ is SUBTRACTING BEFORE DOUBLING, computing $2(25 - 4)$ ✗.)',
    },
    {
      q: 'A folded paper sculpture is a polyhedron whose faces are every one a triangle, and it has $30$ vertices. How many faces does the sculpture have?',
      choices: ['$56$', '$60$', '$84$', '$52$'],
      answer: 0,
      solution:
        'All-triangle faces mean the sides listed face by face come to $3F$, with each edge appearing in that list twice, so $E = \\frac{3F}{2}$. Substituting into $V - E + F = 2$ gives $30 - \\frac{3F}{2} + F = 2$, so $30 - \\frac{F}{2} = 2$, $\\frac{F}{2} = 28$, and $F = 56$ ✓. Check a second, independent way by chasing the edges first: from Euler, $F = 2 - V + E$, and $2E = 3F$ becomes $2E = 3(2 - 30 + E) = 3E - 84$, so $E = 84$ and $F = 2 - 30 + 84 = 56$ ✓ (and $30 - 84 + 56 = 2$). (The choice $60$ is DROPPING THE $-4$ in $F = 2V - 4$ ✗; the choice $84$ is REPORTING THE EDGE COUNT ✗; the choice $52$ is SUBTRACTING BEFORE DOUBLING, computing $2(30 - 4)$ ✗.)',
    },
  ],

  // slot 6 — F faces of p sides with q meeting at a vertex give V = pF/q.
  // Lane: 20 triangles, 5 per vertex -> 12 / 6 squares, 3 per vertex -> 8 /
  // 4 triangles, 3 per vertex -> 4.
  [
    {
      q: 'A twenty-sided game die has $20$ triangular faces, and exactly $5$ of those faces meet at every corner. Counting face corners, how many corners does the die have?',
      choices: ['$60$', '$30$', '$20$', '$12$'],
      answer: 3,
      solution:
        'Count the corners face by face: $20$ triangles $\\times$ $3$ corners each $= 60$ face corners. Every corner of the die is where $5$ faces meet, so each one was counted $5$ times: $V = \\frac{60}{5} = 12$ ✓. Check a second, independent way with Euler: the same faces list $60$ sides and each edge is shared by two faces, so $E = \\frac{60}{2} = 30$, and $V - E + F = 2$ gives $V = 2 + 30 - 20 = 12$ ✓ (and $12 - 30 + 20 = 2$). The die is an icosahedron, whose $12$ corners are the points where five triangles meet. (The choice $60$ is REPORTING THE RAW FACE-CORNER TOTAL, before sharing ✗; the choice $30$ is REPORTING THE EDGE COUNT ✗; the choice $20$ is COPYING THE NUMBER OF FACES ✗.)',
    },
    {
      q: 'Each of the $6$ faces of a solid paperweight is a square with $4$ sides, and exactly $3$ of the faces meet at each of its vertices. Using face corners, how many vertices does the paperweight have?',
      choices: ['$8$', '$12$', '$24$', '$6$'],
      answer: 0,
      solution:
        'Total the corners face by face: $6 \\times 4 = 24$ face corners in the list. Each vertex of the paperweight gathers $3$ of them, one from each face meeting there, so $V = \\frac{24}{3} = 8$ ✓. Check a second, independent way with Euler: the $24$ listed sides pair up into edges, so $E = \\frac{24}{2} = 12$, and $V - E + F = 2$ gives $V = 2 + 12 - 6 = 8$ ✓ — the paperweight is a cube. (The choice $12$ is REPORTING THE EDGE COUNT ✗; the choice $24$ is REPORTING THE RAW FACE-CORNER TOTAL, before sharing ✗; the choice $6$ is COPYING THE NUMBER OF FACES ✗.)',
    },
    {
      q: 'A charm on a bracelet has $4$ triangular faces, with exactly $3$ faces meeting at every vertex. Using face corners, how many vertices does the charm have?',
      choices: ['$12$', '$4$', '$6$', '$3$'],
      answer: 1,
      solution:
        'List the corners face by face: $4$ triangles $\\times$ $3$ corners each $= 12$ face corners. Each vertex of the charm is shared by $3$ faces, so it appears $3$ times in that list: $V = \\frac{12}{3} = 4$ ✓. Check a second, independent way with Euler: the $12$ listed sides pair into edges, so $E = \\frac{12}{2} = 6$, and $V - E + F = 2$ gives $V = 2 + 6 - 4 = 4$ ✓. The charm is a triangular pyramid, whose four corners are easy to see. (The choice $12$ is REPORTING THE RAW FACE-CORNER TOTAL, before sharing ✗; the choice $6$ is REPORTING THE EDGE COUNT ✗; the choice $3$ is COPYING THE NUMBER OF FACES MEETING AT A VERTEX ✗.)',
    },
  ],

  // slot 7 — a tank measured in centimeters, answer in liters.
  // Lane: 80 by 50 by 25 -> 100 L / 70 by 40 by 25 -> 70 L / 80 by 40 by 25 -> 80 L.
  [
    {
      q: 'A rectangular terrarium measures $80$ cm by $50$ cm by $25$ cm. Filled to the brim, how many liters of water would it hold? (One liter is $1000$ cubic centimeters.)',
      choices: ['$4$ liters', '$10$ liters', '$100$ liters', '$1000$ liters'],
      answer: 2,
      solution:
        'Find the volume in cubic centimeters first: $80 \\times 50 \\times 25 = 100{,}000$ cubic centimeters. Now convert, $1000$ cubic centimeters to the liter: $\\frac{100{,}000}{1000} = 100$ liters ✓. Check a second, independent way by changing units before multiplying: $10$ cm make a decimeter, so the tank is $8$ dm by $5$ dm by $2.5$ dm, and $8 \\times 5 \\times 2.5 = 100$ cubic decimeters — and one cubic decimeter is exactly one liter, so $100$ liters ✓. (The choice $4$ liters is MULTIPLYING ONLY THE FLOOR DIMENSIONS, $80 \\times 50$ ✗; the choice $10$ liters is DIVIDING BY $10{,}000$ INSTEAD OF $1000$ ✗; the choice $1000$ liters is DIVIDING BY $100$ INSTEAD OF $1000$ ✗.)',
    },
    {
      q: 'A picnic cooler has a rectangular inside measuring $70$ cm by $40$ cm by $25$ cm. How many liters does it hold? (One liter is $1000$ cubic centimeters.)',
      choices: ['$7$ liters', '$700$ liters', '$1$ liter', '$70$ liters'],
      answer: 3,
      solution:
        'Volume in cubic centimeters first: $70 \\times 40 \\times 25 = 70{,}000$ cubic centimeters. Converting at $1000$ cubic centimeters per liter gives $\\frac{70{,}000}{1000} = 70$ liters ✓. Check a second, independent way by switching to decimeters before multiplying: the cooler is $7$ dm by $4$ dm by $2.5$ dm, so its volume is $7 \\times 4 \\times 2.5 = 70$ cubic decimeters, and a cubic decimeter is a liter, so $70$ liters ✓. (The choice $7$ liters is DIVIDING BY $10{,}000$ INSTEAD OF $1000$ ✗; the choice $700$ liters is DIVIDING BY $100$ INSTEAD OF $1000$ ✗; the choice $1$ liter is MULTIPLYING ONLY TWO OF THE THREE DIMENSIONS, $40 \\times 25$ ✗.)',
    },
    {
      q: 'A rectangular water trough for a hen house measures $80$ cm long, $40$ cm wide, and $25$ cm deep. How many liters of water does it take to fill it? (One liter is $1000$ cubic centimeters.)',
      choices: ['$80$ liters', '$8$ liters', '$800$ liters', '$2$ liters'],
      answer: 0,
      solution:
        'Start with cubic centimeters: $80 \\times 40 \\times 25 = 80{,}000$ cubic centimeters. Then divide by $1000$ for liters: $\\frac{80{,}000}{1000} = 80$ liters ✓. Check a second, independent way by converting the sides first: in decimeters the trough is $8$ by $4$ by $2.5$, so the volume is $8 \\times 4 \\times 2.5 = 80$ cubic decimeters, and one cubic decimeter is one liter, giving $80$ liters ✓. (The choice $8$ liters is DIVIDING BY $10{,}000$ INSTEAD OF $1000$ ✗; the choice $800$ liters is DIVIDING BY $100$ INSTEAD OF $1000$ ✗; the choice $2$ liters is MULTIPLYING ONLY TWO OF THE THREE DIMENSIONS, $80 \\times 25$ ✗.)',
    },
  ],

  // slot 8 — every dimension scaled by k, so the volume scales by k cubed.
  // Lane: tripled -> 27 times / halved -> one eighth / times four -> 64 times.
  [
    {
      q: 'A designer takes a shipping crate and triples its length, its width, and its height. What happens to the volume of the crate?',
      choices: ['it is $3$ times as large', 'it is $27$ times as large', 'it is $9$ times as large', 'it is $\\frac{1}{27}$ as large'],
      answer: 1,
      solution:
        'Each of the three dimensions brings its own factor of $3$ into the product: $V_{\\text{new}} = (3l)(3w)(3h) = 27 \\, lwh$, so the volume is $27$ times as large ✓. Check a second, independent way on a concrete crate: a $2$ by $3$ by $4$ crate has volume $24$, and tripled it becomes $6$ by $9$ by $12$ with volume $648$; since $\\frac{648}{24} = 27$, the volume is $27$ times as large ✓. (The choice $3$ times is SCALING LIKE A LENGTH, which is how one edge grows ✗; the choice $9$ times is SCALING LIKE AN AREA, which is how one face grows ✗; the choice $\\frac{1}{27}$ is TURNING THE GROWTH INTO A SHRINK ✗.)',
    },
    {
      q: 'A model maker builds a copy of a toy chest with every dimension exactly half the original. What happens to the volume?',
      choices: ['it is $\\frac{1}{8}$ as large', 'it is $\\frac{1}{2}$ as large', 'it is $\\frac{1}{4}$ as large', 'it is $\\frac{1}{6}$ as large'],
      answer: 0,
      solution:
        'Every one of the three dimensions contributes a factor of $\\frac{1}{2}$: $V_{\\text{new}} = \\left(\\frac{l}{2}\\right)\\left(\\frac{w}{2}\\right)\\left(\\frac{h}{2}\\right) = \\frac{lwh}{8}$, so the copy holds $\\frac{1}{8}$ as much ✓. Check a second, independent way on a concrete chest: a $4$ by $6$ by $8$ chest has volume $192$, and halved it becomes $2$ by $3$ by $4$ with volume $24$; since $\\frac{24}{192} = \\frac{1}{8}$, the volume is $\\frac{1}{8}$ as large ✓. (The choice $\\frac{1}{2}$ is SCALING LIKE A LENGTH ✗; the choice $\\frac{1}{4}$ is SCALING LIKE AN AREA ✗; the choice $\\frac{1}{6}$ is ADDING THE THREE HALVINGS instead of multiplying them ✗.)',
    },
    {
      q: 'A sandbox is rebuilt with its length, its width, and its depth all multiplied by $4$. What happens to the volume of sand it takes to fill?',
      choices: ['it is $4$ times as large', 'it is $16$ times as large', 'it is $64$ times as large', 'it is $12$ times as large'],
      answer: 2,
      solution:
        'The three dimensions each bring a factor of $4$: $V_{\\text{new}} = (4l)(4w)(4h) = 64 \\, lwh$, so the sandbox swallows $64$ times as much sand ✓. Check a second, independent way on a concrete box: a $1$ by $2$ by $3$ box has volume $6$, and enlarged it becomes $4$ by $8$ by $12$ with volume $384$; since $\\frac{384}{6} = 64$, the volume is $64$ times as large ✓. (The choice $4$ times is SCALING LIKE A LENGTH ✗; the choice $16$ times is SCALING LIKE AN AREA, which is how the floor grows ✗; the choice $12$ times is MULTIPLYING THE SCALE FACTOR BY THE THREE DIMENSIONS instead of cubing it ✗.)',
    },
  ],

  // slot 9 — a cube’s surface area gives its volume through the edge.
  // Lane: 600 -> 1000 / 216 -> 216 / 486 -> 729.
  [
    {
      q: 'A solid concrete block is a cube with total surface area $600$ square units. What is its volume?',
      choices: ['$100$', '$600$', '$10$', '$1000$'],
      answer: 3,
      solution:
        'Go through the edge. A cube has $6$ equal square faces, so $6s^2 = 600$ gives $s^2 = 100$ and $s = 10$; then $V = 10^3 = 1000$ cubic units ✓. Check a second, independent way by running the question backwards: a cube of volume $1000$ has edge $\\sqrt[3]{1000} = 10$, and its surface area is $6 \\times 10^2 = 600$ square units, exactly the area given ✓. (The choice $100$ is STOPPING AT $s^2$, the area of one face ✗; the choice $600$ is COPYING THE SURFACE AREA ✗; the choice $10$ is REPORTING THE EDGE LENGTH ✗.)',
    },
    {
      q: 'A block of cheese is a cube whose six faces have a combined area of $216$ square units. What is the volume of the cheese?',
      choices: ['$36$', '$216$', '$6$', '$46656$'],
      answer: 1,
      solution:
        'Travel through the edge. The six square faces give $6s^2 = 216$, so $s^2 = 36$ and $s = 6$; then $V = 6^3 = 216$ cubic units ✓. Check a second, independent way by working backwards: a cube of volume $216$ has edge $\\sqrt[3]{216} = 6$, and its surface area is $6 \\times 6^2 = 216$ square units, matching the given area ✓. The two numbers landing on $216$ is a coincidence of this particular cube, not a rule. (The choice $36$ is STOPPING AT $s^2$, the area of one face ✗; the choice $6$ is REPORTING THE EDGE LENGTH ✗; the choice $46656$ is CUBING $s^2$ INSTEAD OF $s$ ✗.)',
    },
    {
      q: 'A cardboard carton is a cube, and the cardboard covering its six faces measures $486$ square units in all. What is the volume of the carton?',
      choices: ['$81$', '$486$', '$729$', '$9$'],
      answer: 2,
      solution:
        'The route runs through the edge. Six equal faces give $6s^2 = 486$, so $s^2 = 81$ and $s = 9$; then $V = 9^3 = 729$ cubic units ✓. Check a second, independent way by reversing the question: a cube of volume $729$ has edge $\\sqrt[3]{729} = 9$, and its surface area is $6 \\times 9^2 = 486$ square units, exactly what was given ✓. (The choice $81$ is STOPPING AT $s^2$, the area of one face ✗; the choice $486$ is COPYING THE SURFACE AREA ✗; the choice $9$ is REPORTING THE EDGE LENGTH ✗.)',
    },
  ],

  // slot 10 — a prism on n-gon bases has 3n edges.
  // Lane: 11-gon -> 33 / 9-gon -> 27 / 12-gon -> 36.
  [
    {
      q: 'A pencil holder is a prism whose two bases are regular $11$-sided polygons. How many edges does it have?',
      choices: ['$33$', '$22$', '$13$', '$44$'],
      answer: 0,
      solution:
        'Count the edges in three layers: $11$ edges run around the top polygon, $11$ around the bottom one, and $11$ uprights join matching corners, so $E = 11 + 11 + 11 = 33$ ✓. Check a second, independent way with Euler: the prism has $V = 2 \\times 11 = 22$ corners and $F = 11 + 2 = 13$ faces (eleven side panels plus the two ends), so $E = V + F - 2 = 22 + 13 - 2 = 33$ ✓. (The choice $22$ is COUNTING ONLY THE TWO RINGS and forgetting the uprights ✗; the choice $13$ is REPORTING THE FACE COUNT ✗; the choice $44$ is COUNTING FOUR RINGS OF $11$, as though the side panels each brought a fresh edge ✗.)',
    },
    {
      q: 'A garden lantern is built as a prism with two regular $9$-sided bases. How many edges does the lantern have?',
      choices: ['$18$', '$11$', '$36$', '$27$'],
      answer: 3,
      solution:
        'Take the edges layer by layer: $9$ around the top base, $9$ around the bottom base, and $9$ vertical edges linking the two, giving $E = 9 + 9 + 9 = 27$ ✓. Check a second, independent way with Euler: there are $V = 2 \\times 9 = 18$ corners and $F = 9 + 2 = 11$ faces, so $E = V + F - 2 = 18 + 11 - 2 = 27$ ✓. (The choice $18$ is COUNTING ONLY THE TWO RINGS and forgetting the uprights ✗; the choice $11$ is REPORTING THE FACE COUNT ✗; the choice $36$ is COUNTING FOUR RINGS OF $9$ ✗.)',
    },
    {
      q: 'A decorative candle is a prism whose top and bottom are regular $12$-sided polygons. How many edges does the candle have?',
      choices: ['$24$', '$36$', '$14$', '$48$'],
      answer: 1,
      solution:
        'Sort the edges into three layers: $12$ around the top, $12$ around the bottom, and $12$ vertical edges joining matching corners, so $E = 12 + 12 + 12 = 36$ ✓. Check a second, independent way with Euler: the candle has $V = 2 \\times 12 = 24$ corners and $F = 12 + 2 = 14$ faces, so $E = V + F - 2 = 24 + 14 - 2 = 36$ ✓. (The choice $24$ is COUNTING ONLY THE TWO RINGS and forgetting the uprights ✗; the choice $14$ is REPORTING THE FACE COUNT ✗; the choice $48$ is COUNTING FOUR RINGS OF $12$ ✗.)',
    },
  ],

  // slot 11 — pyramid on the bottom face of a box with its apex at the center of
  // the top face fills one third, whatever the dimensions.
  // Lane: 30 by 20 by 12 / 24 by 24 by 15 / 40 by 25 by 18. Answer is always 1/3.
  [
    {
      q: 'A glass display case measures $30$ cm by $20$ cm by $12$ cm. Inside it stands a solid pyramid whose base is the whole bottom of the case and whose tip touches the center of the lid. What fraction of the case does the pyramid fill?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution:
        'The pyramid’s base is the $30$ by $20$ floor, area $600$, and its height is the full $12$ cm, since height is measured straight up from the base plane no matter where the tip sits above it. So the pyramid holds $\\frac{1}{3} \\times 600 \\times 12 = 2400$ cubic centimeters while the case holds $30 \\times 20 \\times 12 = 7200$, and $\\frac{2400}{7200} = \\frac{1}{3}$ ✓. Check a second, independent way without any numbers: sliding the tip sideways across the lid leaves every horizontal slice the same shape and the same area, so it does not change the volume; slide the tip over to a top corner, and three copies of the resulting pyramid — one standing on each of three faces that meet at the opposite corner — pack the case exactly, so each is $\\frac{1}{3}$ of it ✓. (The choice $\\frac{1}{2}$ is BORROWING THE FLAT-FIGURE RULE, where a triangle is half its rectangle ✗; the choice $\\frac{1}{6}$ is HALVING AND THEN TAKING A THIRD ✗; the choice $\\frac{2}{3}$ is REPORTING THE EMPTY SPACE AROUND THE PYRAMID ✗.)',
    },
    {
      q: 'A cake box is $24$ in long, $24$ in wide, and $15$ in tall. A pyramid-shaped cake sits inside with its square base covering the bottom of the box and its point just touching the center of the top. What fraction of the box does the cake fill?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{6}$'],
      answer: 0,
      solution:
        'The base is the $24$ by $24$ bottom, area $576$, and the height is the full $15$ in, because height is measured perpendicular to the base whatever the point sits over. The cake is therefore $\\frac{1}{3} \\times 576 \\times 15 = 2880$ cubic inches against a box of $24 \\times 24 \\times 15 = 8640$, and $\\frac{2880}{8640} = \\frac{1}{3}$ ✓. Check a second, independent way with no numbers at all: sliding the point across the top keeps every horizontal slice the same size, so the volume never moves; slide it to a top corner, and three such pyramids — one on each of three faces meeting at the far corner — fill the box exactly, making each one $\\frac{1}{3}$ ✓. (The choice $\\frac{1}{2}$ is BORROWING THE FLAT-FIGURE RULE, where a triangle is half its rectangle ✗; the choice $\\frac{2}{3}$ is REPORTING THE EMPTY SPACE AROUND THE CAKE ✗; the choice $\\frac{1}{6}$ is HALVING AND THEN TAKING A THIRD ✗.)',
    },
    {
      q: 'A rectangular planter is $40$ cm by $25$ cm by $18$ cm. Soil is heaped inside it in the shape of a pyramid: its base is the whole floor of the planter and its peak reaches the center of the open top. What fraction of the planter does the soil fill?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{6}$', '$\\frac{2}{3}$'],
      answer: 1,
      solution:
        'The heap has base the $40$ by $25$ floor, area $1000$, and height the full $18$ cm, since height is the straight-up distance from the base plane regardless of where the peak sits. So the soil is $\\frac{1}{3} \\times 1000 \\times 18 = 6000$ cubic centimeters and the planter is $40 \\times 25 \\times 18 = 18{,}000$, giving $\\frac{6000}{18{,}000} = \\frac{1}{3}$ ✓. Check a second, independent way with no numbers: sliding the peak sideways across the top leaves every horizontal slice unchanged in shape and area, so the volume stays put; slide it to a top corner, and three copies of that pyramid — one on each of three faces meeting at the opposite corner — fill the planter exactly, so each is $\\frac{1}{3}$ ✓. (The choice $\\frac{1}{2}$ is BORROWING THE FLAT-FIGURE RULE, where a triangle is half its rectangle ✗; the choice $\\frac{1}{6}$ is HALVING AND THEN TAKING A THIRD ✗; the choice $\\frac{2}{3}$ is REPORTING THE EMPTY SPACE AROUND THE SOIL ✗.)',
    },
  ],

  // slot 12 — the most sides a plane slice of a named solid can have.
  // Lane: triangular prism -> 5 / pentagonal pyramid -> 6 / pentagonal prism -> 7.
  [
    {
      q: 'What is the greatest number of sides a flat cross-section of a triangular prism can have?',
      choices: ['$3$', '$4$', '$6$', '$5$'],
      answer: 3,
      solution:
        'Every side of a cross-section is made where the cutting plane crosses one face of the solid, and a plane meets a flat face in at most one segment. A triangular prism has $2$ triangular ends and $3$ rectangular sides, $5$ faces in all, so no slice can show more than $5$ sides ✓. Check a second, independent way by building the slice: tilt the plane gently so that it enters through one triangular end and leaves through the other. The two ends are parallel, so it cuts them in two parallel segments, and on the way it crosses all three rectangles, giving $2 + 3 = 5$ sides — the ceiling is reached ✓. (The choice $3$ is ASSUMING EVERY SLICE COPIES THE TRIANGULAR END ✗; the choice $4$ is STOPPING AT THE STRAIGHT-DOWN SLICE, which gives a rectangle ✗; the choice $6$ is COUNTING THE CORNERS OF THE PRISM INSTEAD OF ITS FACES ✗.)',
    },
    {
      q: 'What is the greatest number of sides a flat cross-section of a pentagonal pyramid can have?',
      choices: ['$3$', '$5$', '$6$', '$10$'],
      answer: 2,
      solution:
        'Each side of a cross-section comes from the plane crossing one face, and one face can give at most one segment. A pentagonal pyramid has $5$ triangular faces plus its pentagonal base, $6$ faces altogether, so $6$ sides is the ceiling ✓. Check a second, independent way by producing such a slice: start from the plane of the base, choose a chord that shaves one corner off the pentagon, and tilt the plane about that chord so the far side lifts up into the pyramid. The tilted plane still meets the base along that chord, and just above the base the solid is very nearly the whole pentagon, so the plane crosses all five triangles as well. The slice is a hexagon, one side on the base and one on each triangle, $1 + 5 = 6$ sides, so the ceiling is met ✓. (The choice $3$ is STOPPING AT A SLICE THROUGH THE APEX, which gives a triangle ✗; the choice $5$ is ASSUMING EVERY SLICE COPIES THE PENTAGONAL BASE ✗; the choice $10$ is COUNTING THE EDGES OF THE PYRAMID INSTEAD OF ITS FACES ✗.)',
    },
    {
      q: 'What is the greatest number of sides a flat cross-section of a pentagonal prism can have?',
      choices: ['$7$', '$5$', '$6$', '$10$'],
      answer: 0,
      solution:
        'A cross-section gains one side for each face the plane crosses, and a plane can cut a given flat face in at most one segment. A pentagonal prism has $2$ pentagonal ends and $5$ rectangular sides, so it offers $7$ faces and no slice can beat $7$ sides ✓. Check a second, independent way by exhibiting the slice: tilt a plane so that it enters through one pentagonal end and exits through the other. Those ends are parallel, so it cuts them in two parallel segments, and along the way it crosses all five rectangles, giving $2 + 5 = 7$ sides ✓. (The choice $5$ is ASSUMING EVERY SLICE COPIES THE PENTAGONAL END ✗; the choice $6$ is BORROWING THE CUBE’S HEXAGON, ignoring the two extra faces this prism has ✗; the choice $10$ is COUNTING THE CORNERS OF THE PRISM INSTEAD OF ITS FACES ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 14,
  challenge,
}
