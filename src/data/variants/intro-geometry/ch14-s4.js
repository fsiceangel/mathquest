// Introduction to Geometry chapter 14 — variations for section 14.4 (Regular Polyhedra).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is worked twice along routes that share no arithmetic:
//    once through the counting rule the problem is about (the Greek name, the
//    halving trick E = Fn/2, the corner census V = Fn/m, or Euler's
//    V - E + F = 2), and once through an independent picture — a model built
//    layer by layer and counted by hand, or a face-side handshake that never
//    touches Euler. A check that repeats the same multiplication is not a check.
//  - Every figure is an oblique wireframe of the solid the problem names: the
//    edges on the near side are solid, the edges hidden behind the solid are
//    dashed. Visibility is computed from the projection, so each dashed edge is
//    genuinely one that a viewer could not see.
//  - Each distractor is one named mistake, named in CAPS at the end.

const s144 = [
  // s1 — how many regular polyhedra there are. The count is always five; only
  // the setting and the wording move.
  [
    {
      q: 'A craft club is folding one paper model of every regular polyhedron there is — every solid whose faces are all copies of a single regular polygon, with the same number of faces meeting at each corner. How many different models will end up on the table?',
      fig: {
        view: [-2.6, -3.2, 2.6, 2.6],
        elems: [
          { t: 'seg', a: [2, 0], b: [0, 2] },
          { t: 'seg', a: [-2, 0], b: [0, 2] },
          { t: 'seg', a: [-2, 0], b: [-0.9, -0.64] },
          { t: 'seg', a: [-0.9, -0.64], b: [0, 2] },
          { t: 'seg', a: [2, 0], b: [-0.9, -0.64] },
          { t: 'seg', a: [2, 0], b: [0, -2] },
          { t: 'seg', a: [-2, 0], b: [0, -2] },
          { t: 'seg', a: [-0.9, -0.64], b: [0, -2] },
          { t: 'seg', a: [2, 0], b: [0.9, 0.64], dash: true },
          { t: 'seg', a: [0.9, 0.64], b: [0, 2], dash: true },
          { t: 'seg', a: [0.9, 0.64], b: [-2, 0], dash: true },
          { t: 'seg', a: [0.9, 0.64], b: [0, -2], dash: true },
          { t: 'label', p: [0, -2.7], text: 'one model already folded', dy: 6 },
        ],
      },
      choices: ['$5$', '$4$', '$6$', 'infinitely many'],
      answer: 0,
      solution:
        'Route one, the corner census: at least $3$ faces meet at every corner, and their angles must total less than $360^\\circ$ or the faces lie flat instead of folding. Equilateral triangles bring $60^\\circ$ apiece, so $3$, $4$, or $5$ of them fit ($180^\\circ$, $240^\\circ$, $300^\\circ$); squares bring $90^\\circ$, so only $3$ fit ($270^\\circ$); regular pentagons bring $108^\\circ$, so only $3$ fit ($324^\\circ$). That is $3 + 1 + 1 = 5$ workable corners, one solid apiece ✓. Check a second, independent way, by folding them one at a time: $4$ triangles close up into the tetrahedron, $8$ into the octahedron, $20$ into the icosahedron, $6$ squares into the cube, and $12$ pentagons into the dodecahedron — five finished models, and no sixth face shape left to try ✓. (The choice $4$ is COUNTING ONLY THE SOLIDS WHOSE GREEK NAMES COUNT FACES — tetra, octa, dodeca, icosa — and leaving the cube off the table ✗; the choice $6$ is ADDING A HEXAGON MODEL, though three hexagons at a corner already total $360^\\circ$ and lie flat ✗; the choice infinitely many is BORROWING THE RULE FOR REGULAR POLYGONS, where every side count works ✗.)',
    },
    {
      q: 'A game designer wants one fair die shaped like each regular polyhedron — a solid with identical regular polygon faces and identical corners. How many dice will the finished set contain?',
      fig: {
        view: [-2.9, -3.3, 2.9, 2.6],
        elems: [
          { t: 'seg', a: [2.32, 2.11], b: [0.88, 1.09] },
          { t: 'seg', a: [0.88, 1.09], b: [0.88, -2.11] },
          { t: 'seg', a: [2.32, -1.09], b: [0.88, -2.11] },
          { t: 'seg', a: [2.32, 2.11], b: [2.32, -1.09] },
          { t: 'seg', a: [-2.32, 1.09], b: [-2.32, -2.11] },
          { t: 'seg', a: [-0.88, 2.11], b: [-2.32, 1.09] },
          { t: 'seg', a: [2.32, 2.11], b: [-0.88, 2.11] },
          { t: 'seg', a: [0.88, 1.09], b: [-2.32, 1.09] },
          { t: 'seg', a: [0.88, -2.11], b: [-2.32, -2.11] },
          { t: 'seg', a: [-0.88, 2.11], b: [-0.88, -1.09], dash: true },
          { t: 'seg', a: [-0.88, -1.09], b: [-2.32, -2.11], dash: true },
          { t: 'seg', a: [2.32, -1.09], b: [-0.88, -1.09], dash: true },
          { t: 'label', p: [0, -2.8], text: 'the first die in the set', dy: 6 },
        ],
      },
      choices: ['$3$', '$6$', '$5$', 'infinitely many'],
      answer: 2,
      solution:
        'Route one, the corner census: a corner needs at least $3$ faces and an angle total under $360^\\circ$. Triangles ($60^\\circ$) allow $3$, $4$, or $5$ per corner; squares ($90^\\circ$) allow $3$ only, since $4$ would give $360^\\circ$; pentagons ($108^\\circ$) allow $3$ only, since $4$ would give $432^\\circ$. Five workable corners means five dice ✓. Check a second, independent way, by rolling out the finished set: a $4$-face tetrahedron, a $6$-face cube, an $8$-face octahedron, a $12$-face dodecahedron, and a $20$-face icosahedron all close up into real solids, and no face shape larger than a pentagon can start a corner at all — five dice, no more ✓. (The choice $3$ is COUNTING THE USABLE FACE SHAPES — triangle, square, pentagon — instead of the solids, which misses the three different triangle corners ✗; the choice $6$ is COUNTING A HEXAGON DIE as a sixth member ✗; the choice infinitely many is TREATING SOLIDS LIKE POLYGONS, where every side count works ✗.)',
    },
    {
      q: 'A jeweler is cutting a display tray of crystal pendants, one shaped like each regular polyhedron that exists. How many pendants belong on the tray?',
      fig: {
        view: [-0.9, -1.6, 5.1, 4.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [4.2, 0] },
          { t: 'seg', a: [0, 0], b: [1.9, 3.6] },
          { t: 'seg', a: [4.2, 0], b: [1.9, 3.6] },
          { t: 'seg', a: [0, 0], b: [2.4, 1.5], dash: true },
          { t: 'seg', a: [4.2, 0], b: [2.4, 1.5], dash: true },
          { t: 'seg', a: [1.9, 3.6], b: [2.4, 1.5], dash: true },
          { t: 'label', p: [2.1, -1], text: 'the smallest pendant on the tray', dy: 6 },
        ],
      },
      choices: ['$4$', 'infinitely many', '$6$', '$5$'],
      answer: 3,
      solution:
        'Route one, the corner census: every corner needs at least $3$ faces whose angles total less than $360^\\circ$. Triangles at $60^\\circ$ give three usable corners ($3$, $4$, or $5$ triangles); squares at $90^\\circ$ give one ($3$ squares); pentagons at $108^\\circ$ give one ($3$ pentagons); hexagons at $120^\\circ$ give none, since three of them already total exactly $360^\\circ$. Five corners, five pendants ✓. Check a second, independent way, by cutting them: the tetrahedron ($4$ triangles), octahedron ($8$ triangles), icosahedron ($20$ triangles), cube ($6$ squares), and dodecahedron ($12$ pentagons) are each a genuine solid, so the tray holds five ✓. (The choice $4$ is TAKING ONE PENDANT PER USABLE FACE SHAPE and counting the hexagon among them ✗; the choice infinitely many is COPYING THE POLYGON RULE, where a regular polygon exists for every side count ✗; the choice $6$ is REPORTING A FACE COUNT — the cube’s six — instead of how many solids the family holds ✗.)',
    },
  ],
  // s2 — how many faces a named member of the family has.
  [
    {
      q: 'A paper lantern is folded as an icosahedron. How many faces does the lantern have?',
      fig: {
        w: 360,
        view: [-2.55, -2.6, 2.55, 2.6],
        elems: [
          { t: 'seg', a: [0, 2.1], b: [-1.53, 1.12] },
          { t: 'seg', a: [0, 2.1], b: [2.05, 1.12] },
          { t: 'seg', a: [0, 2.1], b: [-1.79, 0.45] },
          { t: 'seg', a: [-1.53, 1.12], b: [-1.79, 0.45] },
          { t: 'seg', a: [0, 2.1], b: [0.42, 0.45] },
          { t: 'seg', a: [-1.79, 0.45], b: [0.42, 0.45] },
          { t: 'seg', a: [0.42, 0.45], b: [2.05, 1.12] },
          { t: 'seg', a: [2.05, 1.12], b: [1.79, -0.45] },
          { t: 'seg', a: [-1.79, 0.45], b: [-2.05, -1.12] },
          { t: 'seg', a: [-1.79, 0.45], b: [-0.85, -1.54] },
          { t: 'seg', a: [0.42, 0.45], b: [-0.85, -1.54] },
          { t: 'seg', a: [-2.05, -1.12], b: [-0.85, -1.54] },
          { t: 'seg', a: [0.42, 0.45], b: [1.53, -1.12] },
          { t: 'seg', a: [2.05, 1.12], b: [1.53, -1.12] },
          { t: 'seg', a: [-0.85, -1.54], b: [1.53, -1.12] },
          { t: 'seg', a: [1.53, -1.12], b: [1.79, -0.45] },
          { t: 'seg', a: [-2.05, -1.12], b: [0, -2.1] },
          { t: 'seg', a: [-0.85, -1.54], b: [0, -2.1] },
          { t: 'seg', a: [1.53, -1.12], b: [0, -2.1] },
          { t: 'seg', a: [0, 2.1], b: [0.85, 1.54], dash: true },
          { t: 'seg', a: [0.85, 1.54], b: [-1.53, 1.12], dash: true },
          { t: 'seg', a: [0.85, 1.54], b: [2.05, 1.12], dash: true },
          { t: 'seg', a: [0.85, 1.54], b: [-0.42, -0.45], dash: true },
          { t: 'seg', a: [-1.53, 1.12], b: [-0.42, -0.45], dash: true },
          { t: 'seg', a: [0.85, 1.54], b: [1.79, -0.45], dash: true },
          { t: 'seg', a: [-0.42, -0.45], b: [1.79, -0.45], dash: true },
          { t: 'seg', a: [-1.53, 1.12], b: [-2.05, -1.12], dash: true },
          { t: 'seg', a: [-0.42, -0.45], b: [-2.05, -1.12], dash: true },
          { t: 'seg', a: [-0.42, -0.45], b: [0, -2.1], dash: true },
          { t: 'seg', a: [1.79, -0.45], b: [0, -2.1], dash: true },
        ],
      },
      choices: ['$12$', '$30$', '$60$', '$20$'],
      answer: 3,
      solution:
        'Route one, the name: the family names count faces in Greek, and icosa means twenty, so an icosahedron carries $20$ triangular faces ✓. Check a second, independent way, by taking the lantern apart in layers: a cap of $5$ triangles meets at the top point, a cap of $5$ meets at the bottom point, and a band of $10$ triangles runs around the middle, alternating point-up and point-down. That is $5 + 10 + 5 = 20$ faces ✓. (The choice $12$ is REPORTING THE CORNER COUNT of the lantern instead of its faces ✗; the choice $30$ is REPORTING THE EDGE COUNT, the number of folds ✗; the choice $60$ is MULTIPLYING THE $12$ CORNERS BY THE $5$ TRIANGLES AT EACH and forgetting that this names every triangle three times, once per corner ✗.)',
    },
    {
      q: 'A puzzle box holds a solid wooden tetrahedron. How many flat faces does the wooden piece have?',
      fig: {
        view: [-3.4, -3.1, 3.4, 3.1],
        elems: [
          { t: 'seg', a: [2.75, 2.51], b: [1.04, -2.51] },
          { t: 'seg', a: [1.04, -2.51], b: [-1.04, -1.29] },
          { t: 'seg', a: [2.75, 2.51], b: [-2.75, 1.29] },
          { t: 'seg', a: [1.04, -2.51], b: [-2.75, 1.29] },
          { t: 'seg', a: [-1.04, -1.29], b: [-2.75, 1.29] },
          { t: 'seg', a: [2.75, 2.51], b: [-1.04, -1.29], dash: true },
        ],
      },
      choices: ['$3$', '$4$', '$6$', '$8$'],
      answer: 1,
      solution:
        'Route one, the name: tetra means four, so a tetrahedron has $4$ triangular faces ✓. Check a second, independent way, by assembling one: stand a triangle on the table for the floor, lift a single point above it, and join that point to the three floor corners. The three joins fence off three triangular walls, and the floor makes a fourth face: $3 + 1 = 4$ ✓. (The choice $3$ is COUNTING THE WALLS AND FORGETTING THE FLOOR ✗; the choice $6$ is REPORTING THE EDGE COUNT of the wooden piece ✗; the choice $8$ is HANDING BACK THE OCTAHEDRON’S FACE COUNT, a different member of the family ✗.)',
    },
    {
      q: 'A sugar cube sits on a saucer. How many faces does the cube have?',
      fig: {
        view: [-1, -1, 5.2, 4.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [3, 3], [0, 3]], fill: false },
          { t: 'seg', a: [3, 0], b: [4.1, 0.85] },
          { t: 'seg', a: [3, 3], b: [4.1, 3.85] },
          { t: 'seg', a: [0, 3], b: [1.1, 3.85] },
          { t: 'seg', a: [4.1, 0.85], b: [4.1, 3.85] },
          { t: 'seg', a: [1.1, 3.85], b: [4.1, 3.85] },
          { t: 'seg', a: [0, 0], b: [1.1, 0.85], dash: true },
          { t: 'seg', a: [1.1, 0.85], b: [4.1, 0.85], dash: true },
          { t: 'seg', a: [1.1, 0.85], b: [1.1, 3.85], dash: true },
        ],
      },
      choices: ['$4$', '$8$', '$6$', '$12$'],
      answer: 2,
      solution:
        'Route one, count the faces in opposite pairs: top and bottom, front and back, left and right — three pairs, so $3 \\times 2 = 6$ square faces ✓. Check a second, independent way, by reading the cube as a prism: a cube is a square prism, which is two square ends joined by a ring of side panels. The ring has one panel per side of the square, so $4$ panels, and the two ends bring the total to $4 + 2 = 6$ ✓. (The choice $4$ is COUNTING THE RING OF SIDE PANELS ONLY and missing the top and bottom ✗; the choice $8$ is REPORTING THE CORNER COUNT of the cube ✗; the choice $12$ is REPORTING THE EDGE COUNT ✗.)',
    },
  ],
  // s3 — naming the solid from a description of its faces.
  [
    {
      q: 'A sealed metal solid has faces that are all squares, with the same number meeting at every corner. Which member of the family is it?',
      fig: {
        view: [-1.1, -1.9, 3.5, 3.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.4, 0], [2.4, 2.4], [0, 2.4]], fill: false },
          { t: 'label', p: [1.2, -1.1], text: 'every face of the sealed solid', dy: 6 },
        ],
      },
      choices: ['the octahedron', 'the cube', 'the dodecahedron', 'the icosahedron'],
      answer: 1,
      solution:
        'Route one, walk the family and read off face shapes: the tetrahedron, octahedron, and icosahedron are built from equilateral triangles, the dodecahedron from regular pentagons, and only the cube from squares — so the sealed solid is the cube ✓. Check a second, independent way, from the corner: a square contributes $90^\\circ$, and a corner needs at least $3$ faces with a total under $360^\\circ$. Three squares give $270^\\circ$, which folds; four give exactly $360^\\circ$, which lies flat. So a square-faced solid must have exactly $3$ faces at every corner, and a solid with $3$ squares at each corner is the box shape, the cube ✓. (The choice the octahedron is HEARING "EIGHT" AND PICTURING THE EIGHT CORNERS OF A BOX, though its $8$ faces are triangles ✗; the choice the dodecahedron is THE PENTAGON SPECIALIST, not the square one ✗; the choice the icosahedron is $20$ TRIANGLES, the largest triangle solid, not a square-faced one ✗.)',
    },
    {
      q: 'A paper globe is pieced together from $20$ identical equilateral triangles, with the same number meeting at each corner. Which solid is the globe?',
      fig: {
        view: [-1.2, -2.1, 4.2, 3.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [1.5, 2.6]], fill: false },
          { t: 'label', p: [1.5, -1.2], text: 'each of the twenty pieces', dy: 6 },
        ],
      },
      choices: ['the icosahedron', 'the dodecahedron', 'the octahedron', 'the cube'],
      answer: 0,
      solution:
        'Route one, the name: icosa means twenty, so a solid of $20$ regular faces is the icosahedron ✓. Check a second, independent way, by eliminating the rest of the family on their own face counts: the tetrahedron has $4$ faces, the cube $6$, the octahedron $8$, and the dodecahedron $12$ — none of them reaches $20$, and the family has only five members, so the globe is the one that remains ✓. (The choice the dodecahedron is MATCHING $20$ TO THE WRONG TALLY: $20$ is its corner count, while its $12$ faces are pentagons ✗; the choice the octahedron is TRIANGLE-FACED BUT EIGHT OF THEM ✗; the choice the cube is SQUARE-FACED, so its pieces would not be triangles at all ✗.)',
    },
    {
      q: 'A mineral sample has grown into a solid with exactly $4$ flat faces, every one an equilateral triangle, and the same number of faces at each corner. Name the solid.',
      fig: {
        view: [-1.1, -1.9, 3.7, 3.1],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.6, 0], [1.3, 2.25]], fill: false },
          { t: 'label', p: [1.3, -1.1], text: 'each of the four faces', dy: 6 },
        ],
      },
      choices: ['the cube', 'the icosahedron', 'the octahedron', 'the tetrahedron'],
      answer: 3,
      solution:
        'Route one, the name: the Greek prefixes count faces, and tetra means four, so a solid with $4$ regular faces is the tetrahedron ✓. Check a second, independent way, by counting the sample’s parts from scratch: the $4$ triangles offer $4 \\times 3 = 12$ sides in the list, and every edge is shared by two faces, so $E = \\frac{12}{2} = 6$. Euler’s formula then gives $V = 2 + E - F = 2 + 6 - 4 = 4$ corners. A solid with only four corners is a triangle standing on a triangle — the tetrahedron ✓. (The choice the cube is SQUARE-FACED, and it carries $6$ faces rather than $4$ ✗; the choice the icosahedron is TRIANGLE-FACED BUT TWENTY OF THEM ✗; the choice the octahedron is TRIANGLE-FACED BUT EIGHT OF THEM — reading the four as the four triangles of one half ✗.)',
    },
  ],
  // s4 — how many edges a named member of the family has.
  [
    {
      q: 'A sculptor bends wire into the skeleton of a tetrahedron, using one straight piece of wire for each edge. How many pieces of wire does the skeleton need?',
      fig: {
        view: [-0.8, -1.4, 4.2, 3.7],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.4, 0] },
          { t: 'seg', a: [0, 0], b: [1.5, 2.9] },
          { t: 'seg', a: [3.4, 0], b: [1.5, 2.9] },
          { t: 'seg', a: [0, 0], b: [1.9, 1.2], dash: true },
          { t: 'seg', a: [3.4, 0], b: [1.9, 1.2], dash: true },
          { t: 'seg', a: [1.5, 2.9], b: [1.9, 1.2], dash: true },
        ],
      },
      choices: ['$4$', '$12$', '$6$', '$3$'],
      answer: 2,
      solution:
        'Route one, the halving trick: a tetrahedron has $4$ triangular faces, so listing every side of every face gives $4 \\times 3 = 12$ sides. Each edge of the solid belongs to two faces, so the list names every edge twice: $E = \\frac{12}{2} = 6$ wires ✓. Check a second, independent way, from the corners: a tetrahedron has $4$ corners, and every pair of corners is joined by a wire — the sculptor can trace that in the drawing, where each corner sends a wire to all three others. The number of pairs is $\\frac{4 \\times 3}{2} = 6$ ✓. (The choice $4$ is REPORTING THE FACE COUNT instead of the edge count ✗; the choice $12$ is FORGETTING TO HALVE the list of $4 \\times 3$ face sides ✗; the choice $3$ is COUNTING ONLY THE TRIANGLE ON THE TABLE and stopping ✗.)',
    },
    {
      q: 'A model builder glues a cube-shaped frame out of drinking straws, laying one straight straw along every edge of the cube. How many straws does the frame use?',
      fig: {
        view: [-1, -1, 5.4, 5.1],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [3, 3], [0, 3]], fill: false },
          { t: 'seg', a: [3, 0], b: [4.2, 0.95] },
          { t: 'seg', a: [3, 3], b: [4.2, 3.95] },
          { t: 'seg', a: [0, 3], b: [1.2, 3.95] },
          { t: 'seg', a: [4.2, 0.95], b: [4.2, 3.95] },
          { t: 'seg', a: [1.2, 3.95], b: [4.2, 3.95] },
          { t: 'seg', a: [0, 0], b: [1.2, 0.95], dash: true },
          { t: 'seg', a: [1.2, 0.95], b: [4.2, 0.95], dash: true },
          { t: 'seg', a: [1.2, 0.95], b: [1.2, 3.95], dash: true },
        ],
      },
      choices: ['$12$', '$6$', '$24$', '$8$'],
      answer: 0,
      solution:
        'Route one, the halving trick: a cube has $6$ square faces, so listing every side of every face gives $6 \\times 4 = 24$ entries, and each straw is shared by the two faces that meet along it. Halving removes the double count: $E = \\frac{24}{2} = 12$ straws ✓. Check a second, independent way, by gluing the frame in layers, which never multiplies face counts at all: $4$ straws close the square lying on the table, $4$ uprights rise from its corners, and $4$ more close the square across the top. The tally is $4 + 4 + 4 = 12$ ✓. (The choice $6$ is REPORTING THE FACE COUNT instead of the straws ✗; the choice $24$ is FORGETTING TO HALVE the list of face sides ✗; the choice $8$ is REPORTING THE CORNER COUNT, where the straws are glued together ✗.)',
    },
    {
      q: 'A climbing dome is welded in the shape of an icosahedron, with one straight steel strut along every edge. How many struts does the frame use?',
      fig: {
        w: 360,
        view: [-2.6, -2.7, 2.6, 2.7],
        elems: [
          { t: 'seg', a: [0, 2.2], b: [-1.66, 1.26] },
          { t: 'seg', a: [0, 2.2], b: [2.08, 1.26] },
          { t: 'seg', a: [0, 2.2], b: [-1.7, 0.25] },
          { t: 'seg', a: [-1.66, 1.26], b: [-1.7, 0.25] },
          { t: 'seg', a: [0, 2.2], b: [0.62, 0.25] },
          { t: 'seg', a: [-1.7, 0.25], b: [0.62, 0.25] },
          { t: 'seg', a: [0.62, 0.25], b: [2.08, 1.26] },
          { t: 'seg', a: [-1.66, 1.26], b: [-2.08, -1.26] },
          { t: 'seg', a: [-1.7, 0.25], b: [-2.08, -1.26] },
          { t: 'seg', a: [-1.7, 0.25], b: [-0.67, -1.89] },
          { t: 'seg', a: [0.62, 0.25], b: [-0.67, -1.89] },
          { t: 'seg', a: [-2.08, -1.26], b: [-0.67, -1.89] },
          { t: 'seg', a: [0.62, 0.25], b: [1.66, -1.26] },
          { t: 'seg', a: [2.08, 1.26], b: [1.66, -1.26] },
          { t: 'seg', a: [-0.67, -1.89], b: [1.66, -1.26] },
          { t: 'seg', a: [-2.08, -1.26], b: [0, -2.2] },
          { t: 'seg', a: [-0.67, -1.89], b: [0, -2.2] },
          { t: 'seg', a: [1.66, -1.26], b: [0, -2.2] },
          { t: 'seg', a: [0, 2.2], b: [0.67, 1.89], dash: true },
          { t: 'seg', a: [0.67, 1.89], b: [-1.66, 1.26], dash: true },
          { t: 'seg', a: [0.67, 1.89], b: [2.08, 1.26], dash: true },
          { t: 'seg', a: [0.67, 1.89], b: [-0.62, -0.25], dash: true },
          { t: 'seg', a: [-1.66, 1.26], b: [-0.62, -0.25], dash: true },
          { t: 'seg', a: [0.67, 1.89], b: [1.7, -0.25], dash: true },
          { t: 'seg', a: [2.08, 1.26], b: [1.7, -0.25], dash: true },
          { t: 'seg', a: [-0.62, -0.25], b: [1.7, -0.25], dash: true },
          { t: 'seg', a: [-0.62, -0.25], b: [-2.08, -1.26], dash: true },
          { t: 'seg', a: [1.66, -1.26], b: [1.7, -0.25], dash: true },
          { t: 'seg', a: [-0.62, -0.25], b: [0, -2.2], dash: true },
          { t: 'seg', a: [1.7, -0.25], b: [0, -2.2], dash: true },
        ],
      },
      choices: ['$20$', '$30$', '$60$', '$12$'],
      answer: 1,
      solution:
        'Route one, the halving trick: the dome has $20$ triangular faces, so the list of face sides runs to $20 \\times 3 = 60$, and each strut carries two of those sides because two triangles meet along it. Halving gives $E = \\frac{60}{2} = 30$ struts ✓. Check a second, independent way, by welding the frame in layers: the top point sends $5$ struts down to an upper ring of $5$ corners, that ring closes with $5$ struts, a zigzag of $10$ struts joins it to the lower ring of $5$ corners, that ring closes with $5$, and the bottom point takes $5$. Adding: $5 + 5 + 10 + 5 + 5 = 30$ ✓. (The choice $20$ is REPORTING THE FACE COUNT instead of the struts ✗; the choice $60$ is FORGETTING TO HALVE the list of face sides ✗; the choice $12$ is REPORTING THE CORNER COUNT, where the struts bolt together ✗.)',
    },
  ],
  // s5 — a solid with F triangular faces has E = 3F/2 edges.
  [
    {
      q: 'A box kite is covered with $12$ triangular panels, and every edge of the frame is a seam where exactly two panels meet. How many seams does the kite have?',
      choices: ['$36$', '$12$', '$24$', '$18$'],
      answer: 3,
      solution:
        'Route one, the halving trick: each of the $12$ panels has $3$ sides, so the list of panel sides is $12 \\times 3 = 36$ long. Every seam appears twice in that list, once for each panel it joins, so $E = \\frac{36}{2} = 18$ seams ✓. Check a second, independent way, by building a kite with exactly $12$ triangular panels and counting its seams by hand: glue two hexagonal pyramids base to base, $6$ panels above and $6$ below. The shared hexagon rim contributes $6$ seams, each of the $6$ rim corners runs a seam up to the top point, and another $6$ run down to the bottom point: $6 + 6 + 6 = 18$ ✓. (The choice $36$ is FORGETTING TO HALVE, counting every seam once per panel ✗; the choice $12$ is COPYING THE PANEL COUNT ✗; the choice $24$ is COUNTING FOUR SIDES ON EVERY PANEL, $\\frac{12 \\times 4}{2}$, as though the panels were quadrilaterals ✗.)',
    },
    {
      q: 'A dome tent is sewn from $30$ triangular pieces of fabric, and every edge of the dome is a seam shared by exactly two pieces. How many seams are sewn?',
      choices: ['$90$', '$60$', '$45$', '$15$'],
      answer: 2,
      solution:
        'Route one, the halving trick: the $30$ triangles offer $30 \\times 3 = 90$ sides in total, and each seam swallows two of them, one from each piece it joins. So $E = \\frac{90}{2} = 45$ seams ✓. Check a second, independent way, by sewing a dome that really has $30$ triangles and counting its seams directly: take a fifteen-sided ring and pull one point up above it and one point down below it, giving $15$ triangles on top and $15$ underneath. The ring itself is $15$ seams, $15$ more run up to the top point, and $15$ run down to the bottom point: $15 + 15 + 15 = 45$ ✓. (The choice $90$ is FORGETTING TO HALVE the list of fabric sides ✗; the choice $60$ is COUNTING FOUR SIDES ON EVERY PIECE, $\\frac{30 \\times 4}{2}$, instead of three ✗; the choice $15$ is HALVING THE PIECE COUNT rather than the list of sides ✗.)',
    },
    {
      q: 'A cut gemstone has $26$ triangular facets, and every edge of the stone is the ridge where exactly two facets meet. How many edges does the stone have?',
      choices: ['$78$', '$39$', '$13$', '$52$'],
      answer: 1,
      solution:
        'Route one, the halving trick: the $26$ facets contribute $26 \\times 3 = 78$ sides, and each ridge is counted twice in that list because two facets share it. So $E = \\frac{78}{2} = 39$ edges ✓. Check a second, independent way, by cutting a stone with exactly $26$ triangular facets and counting its ridges by hand: start from a thirteen-sided girdle and bring the crown to a single point above it and the pavilion to a single point below, which gives $13$ facets up and $13$ down. The girdle is $13$ ridges, $13$ ridges climb to the top point, and $13$ drop to the bottom point: $13 + 13 + 13 = 39$ ✓. (The choice $78$ is FORGETTING TO HALVE the list of facet sides ✗; the choice $13$ is HALVING THE FACET COUNT instead of the list of sides ✗; the choice $52$ is COUNTING FOUR SIDES ON EVERY FACET, $\\frac{26 \\times 4}{2}$, though the facets are triangles ✗.)',
    },
  ],
  // s6 — Euler's formula with the corner count and the edge count given, solving
  // for the number of faces. Route two builds a solid that really has those
  // numbers and counts its faces by hand.
  [
    {
      q: 'A glass ornament is a convex solid: $10$ corners, and $24$ edges where two panes meet. How many panes of glass does the ornament have?',
      choices: ['$16$', '$12$', '$36$', '$14$'],
      answer: 0,
      solution:
        'Route one, Euler’s formula: for any convex solid $V - E + F = 2$, so $10 - 24 + F = 2$, which gives $F = 2 - 10 + 24 = 16$ panes ✓. Check a second, independent way, by building an ornament with exactly $10$ corners and $24$ edges and counting its panes by hand: take a ring of four points on top and four points below, staggered so the sides are triangles, then pull one extra point up above the top square and one extra point down below the bottom square. Corners: $4 + 4 + 2 = 10$, and edges: $4$ around the top square, $4$ around the bottom square, $8$ zigzagging between them, $4$ up to the high point and $4$ down to the low point, for $4 + 4 + 8 + 4 + 4 = 24$. Its panes are the $8$ zigzag triangles plus $4$ under the high point plus $4$ over the low point, and $8 + 4 + 4 = 16$ ✓. (The choice $12$ is SUBTRACTING THE $2$, $24 - 10 - 2$, when the formula adds it ✗; the choice $36$ is ADDING ALL THREE NUMBERS, $10 + 24 + 2$, instead of following the signs ✗; the choice $14$ is FORGETTING THE $2$ altogether and stopping at $24 - 10$ ✗.)',
    },
    {
      q: 'A canvas tent is stretched over a rigid convex frame with $11$ corner joints and $20$ poles, where each pole is an edge shared by two canvas panels. How many panels of canvas does the tent need?',
      choices: ['$9$', '$7$', '$31$', '$11$'],
      answer: 3,
      solution:
        'Route one, Euler’s formula: $V - E + F = 2$ gives $11 - 20 + F = 2$, so $F = 2 - 11 + 20 = 11$ panels ✓. Check a second, independent way, by pitching a tent that really has $11$ joints and $20$ poles and counting its panels: lay a ten-sided ring on the ground and raise one joint above the middle of it. Joints: $10 + 1 = 11$, and poles: $10$ around the ring plus $10$ rising to the peak, for $20$. The canvas covers $10$ sloping triangles plus the ten-sided floor, and $10 + 1 = 11$ ✓. (The choice $9$ is FORGETTING THE $2$ and stopping at $20 - 11$ ✗; the choice $7$ is SUBTRACTING THE $2$, $20 - 11 - 2$, when the formula adds it ✗; the choice $31$ is ADDING THE TWO GIVEN NUMBERS, $11 + 20$, instead of following the signs ✗.)',
    },
    {
      q: 'A convex paperweight is cut so that it has $16$ corners and $32$ polished edges. How many flat faces does the paperweight have?',
      choices: ['$16$', '$50$', '$18$', '$14$'],
      answer: 2,
      solution:
        'Route one, Euler’s formula: $V - E + F = 2$ gives $16 - 32 + F = 2$, so $F = 2 - 16 + 32 = 18$ faces ✓. Check a second, independent way, by cutting a stone with exactly $16$ corners and $32$ edges and counting its faces by hand: set an eight-sided top face above an eight-sided bottom face, turned so that the two rings are staggered and the band between them is a zigzag of triangles. Corners: $8 + 8 = 16$, and edges: $8$ around the top, $8$ around the bottom, and $16$ zigzagging between the rings, for $8 + 8 + 16 = 32$. Its faces are the top eight-sided face, the bottom eight-sided face, and the $16$ triangles of the band: $1 + 1 + 16 = 18$ ✓. (The choice $16$ is FORGETTING THE $2$ and stopping at $32 - 16$ ✗; the choice $50$ is ADDING ALL THREE NUMBERS, $16 + 32 + 2$, instead of following the signs ✗; the choice $14$ is SUBTRACTING THE $2$, $32 - 16 - 2$, when the formula adds it ✗.)',
    },
  ],
  // s7 — Euler's formula with the face count and the edge count given, solving
  // for the number of corners.
  [
    {
      q: 'A convex crystal has $22$ flat faces and $42$ edges. How many corners does the crystal have?',
      choices: ['$20$', '$22$', '$64$', '$18$'],
      answer: 1,
      solution:
        'Route one, Euler’s formula: $V - E + F = 2$ becomes $V - 42 + 22 = 2$, so $V = 2 + 42 - 22 = 22$ corners ✓. Check a second, independent way, by growing a crystal that really has $22$ faces and $42$ edges and counting its corners: stand a twenty-one-sided base flat and draw every one of its corners up to a single point above the middle. Faces: $21$ sloping triangles plus the base, for $22$, and edges: $21$ around the base plus $21$ climbing to the point, for $42$. Its corners are the $21$ around the base plus the one on top, and $21 + 1 = 22$ ✓. (The choice $20$ is FORGETTING THE $2$ and stopping at $42 - 22$ ✗; the choice $64$ is ADDING THE TWO GIVEN NUMBERS, $22 + 42$, instead of following the signs ✗; the choice $18$ is SUBTRACTING THE $2$, $42 - 22 - 2$, when the formula adds it ✗.)',
    },
    {
      q: 'A convex lampshade frame is soldered from $28$ wires, and the panels stretched across it number $16$. Each wire is an edge shared by two panels. How many solder joints does the frame have?',
      choices: ['$44$', '$12$', '$14$', '$46$'],
      answer: 2,
      solution:
        'Route one, Euler’s formula: $V - E + F = 2$ becomes $V - 28 + 16 = 2$, so $V = 2 + 28 - 16 = 14$ joints ✓. Check a second, independent way, by soldering a frame that really carries $16$ panels on $28$ wires and counting its joints: set a seven-sided ring above a seven-sided ring, turned so that the band between them is a zigzag of triangles. Panels: the two seven-sided ends plus $14$ triangles, for $16$, and wires: $7$ around the top, $7$ around the bottom, $14$ zigzagging, for $7 + 7 + 14 = 28$. Its joints are the $7$ on the top ring and the $7$ on the bottom ring: $7 + 7 = 14$ ✓. (The choice $12$ is FORGETTING THE $2$ and stopping at $28 - 16$ ✗; the choice $44$ is ADDING THE TWO GIVEN NUMBERS, $16 + 28$ ✗; the choice $46$ is ADDING ALL THREE NUMBERS, $16 + 28 + 2$, instead of following the signs ✗.)',
    },
    {
      q: 'A wooden puzzle block is convex, with $13$ painted faces and $24$ sanded edges. How many corners does the block have?',
      choices: ['$13$', '$11$', '$37$', '$9$'],
      answer: 0,
      solution:
        'Route one, Euler’s formula: $V - E + F = 2$ becomes $V - 24 + 13 = 2$, so $V = 2 + 24 - 13 = 13$ corners ✓. Check a second, independent way, by carving a block that really has $13$ faces and $24$ edges and counting its corners: start from a twelve-sided slab and taper every side up to one point above the middle. Faces: $12$ sloping triangles plus the flat bottom, for $13$, and edges: $12$ around the bottom plus $12$ rising to the point, for $24$. Its corners are the $12$ around the bottom plus the one on top: $12 + 1 = 13$ ✓. (The choice $11$ is FORGETTING THE $2$ and stopping at $24 - 13$ ✗; the choice $37$ is ADDING THE TWO GIVEN NUMBERS, $13 + 24$ ✗; the choice $9$ is SUBTRACTING THE $2$, $24 - 13 - 2$, when the formula adds it ✗.)',
    },
  ],
  // s8 — Euler's formula with the face count and the corner count given, solving
  // for the number of edges. Route two is a face-side handshake, which never
  // touches Euler.
  [
    {
      q: 'A convex display case has $12$ glass faces — $2$ of them eight-sided, $6$ of them squares, and $4$ of them triangles — and $16$ corners. How many metal edges hold the glass together?',
      choices: ['$28$', '$4$', '$26$', '$30$'],
      answer: 2,
      solution:
        'Route one, Euler’s formula: $V - E + F = 2$ becomes $16 - E + 12 = 2$, so $E = 16 + 12 - 2 = 26$ edges ✓. Check a second, independent way, with a face-side handshake that never uses Euler: add up the sides of all the faces, $2 \\times 8 + 6 \\times 4 + 4 \\times 3 = 16 + 24 + 12 = 52$, and note that every metal edge is the meeting place of exactly two faces, so it is counted twice in that total. Then $E = \\frac{52}{2} = 26$ ✓. (The choice $28$ is FORGETTING TO SUBTRACT THE $2$ and stopping at $16 + 12$ ✗; the choice $30$ is ADDING THE $2$, $16 + 12 + 2$, when the formula subtracts it ✗; the choice $4$ is SUBTRACTING THE COUNTS, $16 - 12$, instead of adding them ✗.)',
    },
    {
      q: 'A convex garden pavilion has $9$ roof-and-floor surfaces and $9$ corner posts. How many beams run along the creases where two surfaces meet?',
      choices: ['$18$', '$16$', '$32$', '$20$'],
      answer: 1,
      solution:
        'Route one, Euler’s formula: $V - E + F = 2$ becomes $9 - E + 9 = 2$, so $E = 9 + 9 - 2 = 16$ beams ✓. Check a second, independent way, by raising a pavilion that really has $9$ surfaces and $9$ posts and counting its beams directly: lay an eight-sided floor and draw all eight of its corners up to a single peak. Surfaces: $8$ roof triangles plus the floor, for $9$, and posts: $8$ around the floor plus the peak, for $9$. Its beams are the $8$ around the floor plus the $8$ rising to the peak: $8 + 8 = 16$ ✓. (The choice $18$ is FORGETTING TO SUBTRACT THE $2$ and stopping at $9 + 9$ ✗; the choice $20$ is ADDING THE $2$, $9 + 9 + 2$, when the formula subtracts it ✗; the choice $32$ is the total of all the surface sides, $8 \\times 3 + 8$, with NO HALVING for the two surfaces on each beam ✗.)',
    },
    {
      q: 'A convex tin lantern is punched from $20$ faces — $2$ six-sided and $18$ triangular — held at $15$ corners. How many folded edges does the lantern have?',
      choices: ['$35$', '$37$', '$5$', '$33$'],
      answer: 3,
      solution:
        'Route one, Euler’s formula: $V - E + F = 2$ becomes $15 - E + 20 = 2$, so $E = 15 + 20 - 2 = 33$ edges ✓. Check a second, independent way, with a face-side handshake that never uses Euler: the faces offer $2 \\times 6 + 18 \\times 3 = 12 + 54 = 66$ sides between them, and each folded edge joins two faces, so it appears twice in that list. Then $E = \\frac{66}{2} = 33$ ✓. (The choice $35$ is FORGETTING TO SUBTRACT THE $2$ and stopping at $15 + 20$ ✗; the choice $37$ is ADDING THE $2$, $15 + 20 + 2$, when the formula subtracts it ✗; the choice $5$ is SUBTRACTING THE COUNTS, $20 - 15$, instead of adding them ✗.)',
    },
  ],
  // s9 — the greatest number of equilateral triangles that can meet at one
  // corner. The answer is always five; only the setting and the wording move.
  [
    {
      q: 'Equilateral triangles cut from card are taped together edge to edge around a single point, and then the taped sheet is lifted off the table into a real corner. What is the greatest number of triangles that can meet at that one corner?',
      fig: {
        view: [-2.4, -3.0, 2.4, 2.2],
        elems: [
          { t: 'seg', a: [0, 0], b: [2, 0] },
          { t: 'seg', a: [0, 0], b: [1, 1.73] },
          { t: 'seg', a: [0, 0], b: [-1, 1.73] },
          { t: 'seg', a: [0, 0], b: [-2, 0] },
          { t: 'seg', a: [0, 0], b: [-1, -1.73] },
          { t: 'seg', a: [0, 0], b: [1, -1.73] },
          { t: 'seg', a: [2, 0], b: [1, 1.73] },
          { t: 'seg', a: [1, 1.73], b: [-1, 1.73] },
          { t: 'seg', a: [-1, 1.73], b: [-2, 0] },
          { t: 'seg', a: [-2, 0], b: [-1, -1.73] },
          { t: 'seg', a: [-1, -1.73], b: [1, -1.73] },
          { t: 'label', p: [1.5, -0.85], text: 'gap', dx: 6 },
          { t: 'label', p: [0, -2.5], text: 'five triangles taped, one gap left', dy: 6 },
        ],
      },
      choices: ['$3$', '$6$', '$4$', '$5$'],
      answer: 3,
      solution:
        'Route one, the angle budget: each equilateral triangle brings $60^\\circ$ to the shared point, so $n$ triangles bring $60n$ degrees. A flat sheet fills exactly $360^\\circ$ and cannot be lifted into a corner, so a real corner needs $60n < 360$, which means $n < 6$, and the largest whole number under $6$ is $5$ ✓. Check a second, independent way, by taping and lifting instead of adding angles: tape six triangles around the point and the card lies flat on the table with no gap, so nothing folds up. Peel one off and a $60^\\circ$ gap opens; pinch the gap shut and the remaining five bow into a genuine peak. Five triangles fold, six do not, so the greatest number is $5$ ✓. (The choice $3$ is the FEWEST that will close a corner, not the most ✗; the choice $6$ is the FLAT ARRANGEMENT, $6 \\times 60^\\circ = 360^\\circ$, which never leaves the table ✗; the choice $4$ is STOPPING AT A FAMILIAR CORNER instead of pushing to the largest one that still folds ✗.)',
    },
    {
      q: 'A sculptor welds identical equilateral steel plates together so that several of them share one welded point, and the point must come to a true peak rather than lie flat. At most, how many plates can meet at that peak?',
      fig: {
        view: [-0.6, -1.2, 3.4, 3.0],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.8, 0], [1.4, 2.42]], fill: false },
          { t: 'angle', at: [0, 0], from: [2.8, 0], to: [1.4, 2.42], r: 0.62, label: '60' },
          { t: 'label', p: [1.4, -0.7], text: 'each corner of a plate is 60 degrees', dy: 6 },
        ],
      },
      choices: ['$5$', '$6$', '$3$', '$4$'],
      answer: 0,
      solution:
        'Route one, the angle budget: every corner of an equilateral plate measures $60^\\circ$, so $n$ plates at the peak use $60n$ degrees. The plates around a true peak must leave the flat, and flat is exactly $360^\\circ$, so the welded corner needs $60n < 360$, giving $n < 6$ and a largest whole value of $5$ ✓. Check a second, independent way, by looking at solids the sculptor could weld rather than at angles: plates can meet three at a peak, four at a peak, and five at a peak, and each of those closes up into a finished piece. A sixth plate at the same point flattens the peak into a plate-sized floor, and a flat point is no peak at all, so welding stops at $5$ ✓. (The choice $6$ is the FLAT ARRANGEMENT, $6 \\times 60^\\circ = 360^\\circ$, which leaves no peak to weld ✗; the choice $3$ is the SMALLEST peak that works, not the largest ✗; the choice $4$ is STOPPING ONE PLATE SHORT of the largest peak that still rises ✗.)',
    },
    {
      q: 'A quilter is joining equilateral patches around one shared point so that the quilt puckers into a raised knob instead of lying smooth. What is the largest number of patches she can join at that point?',
      fig: {
        view: [-2.4, -3.0, 2.4, 2.2],
        elems: [
          { t: 'seg', a: [0, 0], b: [2, 0] },
          { t: 'seg', a: [0, 0], b: [1, 1.73] },
          { t: 'seg', a: [0, 0], b: [-1, 1.73] },
          { t: 'seg', a: [0, 0], b: [-2, 0] },
          { t: 'seg', a: [0, 0], b: [-1, -1.73] },
          { t: 'seg', a: [2, 0], b: [1, 1.73] },
          { t: 'seg', a: [1, 1.73], b: [-1, 1.73] },
          { t: 'seg', a: [-1, 1.73], b: [-2, 0] },
          { t: 'seg', a: [-2, 0], b: [-1, -1.73] },
          { t: 'label', p: [0.9, -1.15], text: 'room for more', dx: 8 },
          { t: 'label', p: [0, -2.5], text: 'four patches joined so far', dy: 6 },
        ],
      },
      choices: ['$4$', '$5$', '$6$', '$3$'],
      answer: 1,
      solution:
        'Route one, the angle budget: each patch brings a $60^\\circ$ corner to the shared point, so $n$ patches use $60n$ degrees. Smooth quilt means the corners fill $360^\\circ$ exactly; a raised knob means they fill less. So the quilter needs $60n < 360$, hence $n < 6$, and the largest whole number below $6$ is $5$ ✓. Check a second, independent way, by pinning fabric instead of adding angles: with four patches pinned there is a wide gap and the knob rises easily. Pin a fifth and the gap narrows to $60^\\circ$, and the knob still rises when that gap is sewn shut. Pin a sixth and the gap closes on its own with the fabric flat against the table, so the knob disappears. Five is the last count that puckers ✓. (The choice $4$ is STOPPING AT THE PICTURE instead of asking whether one more patch still fits ✗; the choice $6$ is the SMOOTH FLAT ARRANGEMENT, $6 \\times 60^\\circ = 360^\\circ$, which raises nothing ✗; the choice $3$ is the FEWEST that will pucker, not the most ✗.)',
    },
  ],
  // s10 — the corner census V = Fp/q: F faces of p sides each, q of them meeting
  // at every corner.
  [
    {
      q: 'A sealed solid is built from $4$ triangular panels, and exactly $3$ panels meet at every corner. How many corners does the solid have?',
      choices: ['$12$', '$6$', '$4$', '$3$'],
      answer: 2,
      solution:
        'Route one, the corner census: the $4$ panels carry $4 \\times 3 = 12$ panel-corners between them. Each corner of the finished solid is a spot where $3$ of those panel-corners are pressed together, so the number of corners is $\\frac{12}{3} = 4$ ✓. Check a second, independent way, through the edges and Euler’s formula, which never divides by $3$: the panels carry $12$ sides, and each edge of the solid is one seam where two sides are joined, so $E = \\frac{12}{2} = 6$. Then $V - E + F = 2$ gives $V = 2 + 6 - 4 = 4$ ✓. (The choice $12$ is the RAW PANEL-CORNER TOTAL, $4 \\times 3$, never divided by the number meeting at a corner ✗; the choice $6$ is the EDGE COUNT, found by dividing by $2$ instead of by $3$ ✗; the choice $3$ is COPYING OUT THE NUMBER MEETING AT EACH CORNER as if it were the answer ✗.)',
    },
    {
      q: 'A mineral crystallizes as a regular octahedron: $8$ equilateral triangular faces, with $4$ faces meeting at each corner. How many corners does the crystal have?',
      choices: ['$24$', '$12$', '$4$', '$6$'],
      answer: 3,
      solution:
        'Route one, the corner census: the $8$ faces carry $8 \\times 3 = 24$ face-corners between them, and every corner of the crystal is a spot where $4$ of those come together. So the crystal has $\\frac{24}{4} = 6$ corners ✓. Check a second, independent way, by building the shape and counting its points by hand, with no division at all: the octahedron is a square laid flat with one point pulled straight up above its center and one point pulled straight down below its center. That is $4$ points around the square, plus the high point, plus the low point, and $4 + 1 + 1 = 6$ ✓. (The choice $24$ is the RAW FACE-CORNER TOTAL, $8 \\times 3$, never divided by the number meeting at a corner ✗; the choice $12$ is DIVIDING BY $2$, which counts edges, not corners ✗; the choice $4$ is COPYING OUT THE NUMBER OF FACES AT A CORNER as if it were the answer ✗.)',
    },
    {
      q: 'A garden lamp is built as a regular dodecahedron: $12$ panes of glass, each a regular pentagon, with $3$ panes meeting at every corner of the lamp. How many corners does the lamp have?',
      choices: ['$20$', '$60$', '$30$', '$12$'],
      answer: 0,
      solution:
        'Route one, the corner census: the $12$ panes carry $12 \\times 5 = 60$ pane-corners between them, and every corner of the lamp is a spot where $3$ of those are pressed together. So the lamp has $\\frac{60}{3} = 20$ corners ✓. Check a second, independent way, by assembling the lamp and counting its corners in layers, with no division at all: the top pane rests on $5$ corners; one edge drops from each of those to a ring of $5$ corners below; a second ring of $5$ corners sits under that one; and the bottom pane closes on the last $5$. The tally is $5 + 5 + 5 + 5 = 20$ ✓. (The choice $60$ is the RAW PANE-CORNER TOTAL, $12 \\times 5$, never divided by the number meeting at a corner ✗; the choice $30$ is DIVIDING BY $2$, which counts edges, not corners ✗; the choice $12$ is COPYING OUT THE PANE COUNT as if it were the corner count ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 14,
  sections: { '14.4': s144 },
}
