// Introduction to Geometry chapter 7 — variations for section 7.4 (Medians).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every numeric key was worked twice, by two routes that do not share
//    arithmetic: the 2:1 fraction against an add-and-ratio check, a coordinate
//    average against a 2:1 ride down one median, an equal-base-equal-height
//    argument against a shoelace computation from the figure's own
//    coordinates, a distance formula against the half-the-hypotenuse fact,
//    and a two-thirds scaling against a centroid computed outright. The two
//    routes must agree before a key is written down.
//  - Every figure was built from its own numbers: medians end at exact
//    midpoints, centroids sit at the exact average of the vertices, and each
//    stated area matches the area the drawn coordinates enclose.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section: HALVING THE MEDIAN,
//    SWAPPING THE 2:1 PIECES, PROMOTING THE RATIO TO 3:1, MEASURING FROM THE
//    WRONG END, ANSWERING THE SHORT PIECE, INVERTING THE FRACTION, ANSWERING
//    THE VERTEX PIECE, HALVING THE SUM, MIXING HALVES INTO THIRDS, HALVING
//    BOTH BASE AND HEIGHT, IMPORTING THE CENTROID'S THIRD, ANSWERING THE
//    COMPLEMENT, ANSWERING A CENTROID TRIANGLE, STOPPING AT ONE MEDIAN,
//    MISCOUNTING THE SLICES, PAYING OUT A MEDIAN'S HALF, STOPPING AT ONE
//    SLICE, ANSWERING THE WHOLE HYPOTENUSE, GRABBING HALF A LEG, ADDING THE
//    HALVES, AVERAGING ONLY TWO VERTICES, AVERAGING THE OTHER TWO, and
//    ANSWERING THE WHOLE MEDIAN.
//  - No two choices inside an item name the same value.

const s74 = [
  // s1 — the 2:1 ratio, conceptually.
  [
    {
      q: 'Wren cuts a scalene triangle out of stiff cardboard, draws the segment from one corner to the midpoint of the opposite edge, and balances the triangle on a pencil tip. The balance point lands on her segment — but not at its middle. How does the balance point split the segment?',
      choices: [
        'Into two equal halves — the balance point is the segment’s midpoint',
        'The corner-side piece is exactly twice the midpoint-side piece',
        'The midpoint-side piece is exactly twice the corner-side piece',
        'The corner-side piece is exactly three times the midpoint-side piece',
      ],
      answer: 1,
      solution:
        'The balance point of a triangle is its centroid, where the three medians cross, and the centroid divides every median $2:1$ with the longer piece touching the vertex — so the corner-side piece is twice the midpoint-side piece ✓. Check a second, independent way on an easy triangle, say $(0,0)$, $(6,0)$, $(0,6)$: the centroid averages the vertices to $(2, 2)$, and along the median from $(0,0)$ to the midpoint $(3,3)$, the corner piece runs $\\sqrt{4 + 4} = 2\\sqrt{2}$ while the rest runs $\\sqrt{1 + 1} = \\sqrt{2}$ — a clean $2:1$ ✓. (Equal halves is HALVING THE MEDIAN, which the pencil tip itself refutes since Wren saw it off-middle ✗; twice on the midpoint side is SWAPPING THE 2:1 PIECES — the centroid is pulled toward the far edge, not glued to it ✗; three times is PROMOTING THE RATIO TO 3:1 ✗.)',
    },
    {
      q: 'An ant starts at the midpoint of one side of a triangle and walks along the median toward the opposite vertex. What fraction of the median’s total length has the ant covered at the moment it passes through the centroid?',
      choices: ['$\\frac{2}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{1}{4}$'],
      answer: 2,
      solution:
        'The centroid divides the median $2:1$ with the SHORT piece next to the midpoint, so the ant covers the short third first: $\\frac{1}{3}$ of the median ✓. Check a second, independent way with coordinates: in the triangle $(0,0)$, $(4,0)$, $(0,4)$ the ant walks from the midpoint $(2, 2)$ toward $(0, 0)$; the whole median measures $2\\sqrt{2}$, the centroid sits at $\\left(\\frac{4}{3}, \\frac{4}{3}\\right)$, and the walk so far measures $\\sqrt{\\frac{4}{9} + \\frac{4}{9}} = \\frac{2\\sqrt{2}}{3}$ — exactly one third of the whole ✓. (The fraction $\\frac{2}{3}$ is MEASURING FROM THE WRONG END — that is the vertex’s share, and the ant started at the midpoint ✗; $\\frac{1}{2}$ is HALVING THE MEDIAN, but the centroid is never a median’s midpoint ✗; $\\frac{1}{4}$ is PROMOTING THE RATIO TO 3:1 ✗.)',
    },
    {
      q: 'A median of a triangle measures $m$ units from vertex to midpoint, and the centroid $G$ lies on it. In terms of $m$, how long are the vertex-to-$G$ piece and the $G$-to-midpoint piece, in that order?',
      choices: [
        '$\\frac{m}{2}$ and $\\frac{m}{2}$',
        '$\\frac{m}{3}$ and $\\frac{2m}{3}$',
        '$\\frac{3m}{4}$ and $\\frac{m}{4}$',
        '$\\frac{2m}{3}$ and $\\frac{m}{3}$',
      ],
      answer: 3,
      solution:
        'The centroid splits each median $2:1$ with the longer share at the vertex: $\\frac{2m}{3}$ from the vertex to $G$, then $\\frac{m}{3}$ from $G$ to the midpoint, and indeed $\\frac{2m}{3} + \\frac{m}{3} = m$ ✓. Check a second, independent way with vectors: $G = \\frac{A + B + C}{3}$ and the midpoint of $\\overline{BC}$ is $M = \\frac{B + C}{2}$, so $G = A + \\frac{2}{3}(M - A)$ — the centroid rides exactly two thirds of the way from the vertex, leaving one third beyond it ✓. (Equal pieces is HALVING THE MEDIAN ✗; $\\frac{m}{3}$ first is SWAPPING THE 2:1 PIECES, putting the short share at the vertex ✗; $\\frac{3m}{4}$ and $\\frac{m}{4}$ is PROMOTING THE RATIO TO 3:1 ✗.)',
    },
  ],
  // s2 — median length given, vertex-to-centroid distance wanted.
  [
    {
      q: 'In triangle $DEF$, the median $\\overline{DN}$ runs $24$ units from vertex $D$ to the midpoint $N$ of $\\overline{EF}$, and the three medians cross at $G$. Find $DG$.',
      choices: ['$16$', '$12$', '$8$', '$36$'],
      answer: 0,
      solution:
        'The vertex piece of a median is two thirds of it: $DG = \\frac{2}{3} \\cdot 24 = 16$ ✓. Check a second, independent way through the leftover: $GN = 24 - 16 = 8$, and $16 : 8 = 2 : 1$ with the longer share at the vertex — exactly the centroid’s promise ✓. (The choice $12$ is HALVING THE MEDIAN, treating $G$ as the median’s midpoint ✗; $8$ is ANSWERING THE SHORT PIECE, the $G$-to-$N$ part ✗; $36$ is INVERTING THE FRACTION — dividing $24$ by $\\frac{2}{3}$ instead of multiplying, which lands beyond the median’s far end ✗.)',
    },
    {
      q: 'A triangular garden has a straight gravel path of length $27$ meters running from one corner to the midpoint of the opposite edge. A fountain stands at the garden’s balance point (its centroid), which lies on this path. How far is the fountain from the corner?',
      choices: ['$13.5$', '$18$', '$9$', '$40.5$'],
      answer: 1,
      solution:
        'The centroid claims two thirds of the path on the corner side: $\\frac{2}{3} \\cdot 27 = 18$ meters ✓. Check a second, independent way by splitting the whole path: the remaining stretch to the edge’s midpoint is $27 - 18 = 9$, and $18 : 9 = 2 : 1$ — the long piece at the corner, as the $2:1$ rule demands ✓. (The choice $13.5$ is HALVING THE MEDIAN ✗; $9$ is ANSWERING THE SHORT PIECE, the fountain-to-edge stretch ✗; $40.5$ is INVERTING THE FRACTION, dividing by $\\frac{2}{3}$ and overshooting the whole path ✗.)',
    },
    {
      q: 'Median $\\overline{XM}$ of triangle $XYZ$ is $36$ units long, and the three medians meet at point $T$. What is the distance $XT$?',
      choices: ['$12$', '$18$', '$54$', '$24$'],
      answer: 3,
      solution:
        'The point where the medians meet is the centroid, and it sits two thirds of the way from each vertex: $XT = \\frac{2}{3} \\cdot 36 = 24$ ✓. Check a second, independent way with the tail end: $TM = 36 - 24 = 12$, and $24 : 12 = 2 : 1$, longer piece at $X$ ✓. (The choice $18$ is HALVING THE MEDIAN ✗; $12$ is ANSWERING THE SHORT PIECE, $TM$ ✗; $54$ is INVERTING THE FRACTION, $36 \\div \\frac{2}{3}$, which is longer than the median itself ✗.)',
    },
  ],
  // s3 — centroid-to-midpoint distance given, whole median wanted.
  [
    {
      q: 'The centroid $G$ of triangle $ABC$ sits $7$ units from the midpoint of side $\\overline{BC}$. How long is the entire median drawn to $\\overline{BC}$?',
      choices: ['$21$', '$14$', '$10.5$', '$28$'],
      answer: 0,
      solution:
        'The centroid-to-midpoint piece is the SHORT third of a median, so the whole median is $3 \\cdot 7 = 21$ ✓. Check a second, independent way by assembling the pieces: the vertex piece is twice the short one, $AG = 2 \\cdot 7 = 14$, and $14 + 7 = 21$ ✓. (The choice $14$ is ANSWERING THE VERTEX PIECE, the $A$-to-$G$ stretch rather than the full median ✗; $10.5$ is SWAPPING THE 2:1 PIECES, treating $7$ as the two-thirds share so the median shrinks to $\\frac{3}{2} \\cdot 7$ ✗; $28$ is PROMOTING THE RATIO TO 3:1, multiplying by $4$ ✗.)',
    },
    {
      q: 'In triangle $PQR$, the three medians intersect at $K$, and $K$ lies $10$ cm from the midpoint of $\\overline{PQ}$. Find the length of the median from $R$.',
      choices: ['$20$', '$15$', '$30$', '$40$'],
      answer: 2,
      solution:
        'The distance from the centroid to a side’s midpoint is one third of that median, so the median from $R$ measures $3 \\cdot 10 = 30$ cm ✓. Check a second, independent way from the vertex side: $RK = 2 \\cdot 10 = 20$, and the two pieces rebuild the median, $20 + 10 = 30$, in the ratio $2:1$ ✓. (The choice $20$ is ANSWERING THE VERTEX PIECE, $RK$ alone ✗; $15$ is SWAPPING THE 2:1 PIECES, reading $10$ as the long share ✗; $40$ is PROMOTING THE RATIO TO 3:1 ✗.)',
    },
    {
      q: 'A designer marks the balance point of a triangular tabletop and measures $11$ inches from that point to the middle of one edge. How long is the full brace that runs from the opposite corner to that edge’s middle?',
      choices: ['$22$', '$16.5$', '$44$', '$33$'],
      answer: 3,
      solution:
        'The brace is a median, and the balance point — the centroid — leaves only a third of it on the edge side. The whole brace is therefore $3 \\cdot 11 = 33$ inches ✓. Check a second, independent way piece by piece: the corner-to-centroid part is $2 \\cdot 11 = 22$, and $22 + 11 = 33$ with $22 : 11 = 2 : 1$, the long piece at the corner ✓. (The choice $22$ is ANSWERING THE VERTEX PIECE ✗; $16.5$ is SWAPPING THE 2:1 PIECES, taking $11$ for the two-thirds share ✗; $44$ is PROMOTING THE RATIO TO 3:1 ✗.)',
    },
  ],
  // s4 — centroid of a coordinate triangle (figure).
  [
    {
      q: 'Triangle $ABC$ has vertices $A(0, 0)$, $B(9, 0)$, and $C(6, 12)$. Find the coordinates of its centroid $G$.',
      fig: {
        view: [-1.5, -1.5, 10.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [6, 12]], fill: false },
          { t: 'seg', a: [0, 0], b: [7.5, 6], dash: true },
          { t: 'seg', a: [9, 0], b: [3, 6], dash: true },
          { t: 'seg', a: [6, 12], b: [4.5, 0], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [9, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 12], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [5, 4], label: 'G', dx: 12, dy: 0 },
        ],
      },
      choices: ['$(7.5, 6)$', '$(5, 4)$', '$(5.5, 8)$', '$(5, 6)$'],
      answer: 1,
      solution:
        'Average the three vertices: $G = \\left(\\frac{0 + 9 + 6}{3}, \\frac{0 + 0 + 12}{3}\\right) = (5, 4)$ ✓. Check a second, independent way by riding one median: from $C(6, 12)$ to the midpoint $(4.5, 0)$ of $\\overline{AB}$, two thirds of the trip is $C + \\frac{2}{3}(-1.5, -12) = (5, 4)$ ✓. (The point $(7.5, 6)$ is HALVING THE SUM — dividing by $2$ instead of $3$, which happens to be the midpoint of $\\overline{BC}$ ✗; $(5.5, 8)$ is MEASURING FROM THE WRONG END, riding two thirds up from the midpoint instead of down from $C$ ✗; $(5, 6)$ is MIXING HALVES INTO THIRDS — thirding the $x$-sum but halving the height ✗.)',
    },
    {
      q: 'Triangle $ABC$ has vertices $A(0, 0)$, $B(12, 0)$, and $C(3, 9)$. Where do its three medians cross?',
      fig: {
        view: [-1.5, -1.5, 13.5, 10.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [3, 9]], fill: false },
          { t: 'seg', a: [0, 0], b: [7.5, 4.5], dash: true },
          { t: 'seg', a: [12, 0], b: [1.5, 4.5], dash: true },
          { t: 'seg', a: [3, 9], b: [6, 0], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [12, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [3, 9], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [5, 3], label: 'G', dx: 12, dy: -2 },
        ],
      },
      choices: ['$(7.5, 4.5)$', '$(4, 6)$', '$(5, 3)$', '$(5, 4.5)$'],
      answer: 2,
      solution:
        'The medians cross at the centroid, the average of the vertices: $\\left(\\frac{0 + 12 + 3}{3}, \\frac{0 + 0 + 9}{3}\\right) = (5, 3)$ ✓. Check a second, independent way down the median from $C$: it ends at the midpoint $(6, 0)$ of $\\overline{AB}$, and two thirds of the way is $C + \\frac{2}{3}(3, -9) = (5, 3)$ ✓. (The point $(7.5, 4.5)$ is HALVING THE SUM, which coincides with the midpoint of $\\overline{BC}$ ✗; $(4, 6)$ is MEASURING FROM THE WRONG END, two thirds up from $(6, 0)$ toward $C$ ✗; $(5, 4.5)$ is MIXING HALVES INTO THIRDS — the $x$-average is right but the height got halved ✗.)',
    },
    {
      q: 'Triangle $ABC$ has vertices $A(0, 0)$, $B(15, 0)$, and $C(6, 12)$. Find its centroid.',
      fig: {
        view: [-1.5, -1.5, 16.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [6, 12]], fill: false },
          { t: 'seg', a: [0, 0], b: [10.5, 6], dash: true },
          { t: 'seg', a: [15, 0], b: [3, 6], dash: true },
          { t: 'seg', a: [6, 12], b: [7.5, 0], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [15, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 12], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [7, 4], label: 'G', dx: 12, dy: -2 },
        ],
      },
      choices: ['$(10.5, 6)$', '$(6.5, 8)$', '$(7, 6)$', '$(7, 4)$'],
      answer: 3,
      solution:
        'The centroid averages the vertices: $\\left(\\frac{0 + 15 + 6}{3}, \\frac{0 + 0 + 12}{3}\\right) = (7, 4)$ ✓. Check a second, independent way along the median from $C(6, 12)$ to the midpoint $(7.5, 0)$ of $\\overline{AB}$: two thirds of the descent is $C + \\frac{2}{3}(1.5, -12) = (7, 4)$ ✓. (The point $(10.5, 6)$ is HALVING THE SUM — it is the midpoint of $\\overline{BC}$, not the centroid ✗; $(6.5, 8)$ is MEASURING FROM THE WRONG END, two thirds up from the midpoint ✗; $(7, 6)$ is MIXING HALVES INTO THIRDS, halving the height while thirding the $x$-sum ✗.)',
    },
  ],
  // s5 — a median halves the area (figure).
  [
    {
      q: 'The triangular sail shown has area $64$ square feet. A seam runs from corner $A$ to the midpoint $M$ of the opposite edge $\\overline{BC}$. What is the area of the piece $ABM$?',
      fig: {
        view: [-1.5, -1.5, 17.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [6, 8]], fill: false },
          { t: 'seg', a: [0, 0], b: [11, 4], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [6, 8], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [11, 4], label: 'M', dx: 12, dy: -4 },
        ],
      },
      choices: ['$32$', '$16$', '$\\frac{64}{3}$', '$48$'],
      answer: 0,
      solution:
        'The seam $\\overline{AM}$ is a median: the two pieces have equal bases $BM = MC$ and share the same height from $A$, so each holds half the sail, $\\frac{64}{2} = 32$ square feet ✓. Check a second, independent way with the figure’s coordinates: $A(0, 0)$, $B(16, 0)$, $M(11, 4)$ give area $\\frac{1}{2}\\left|16 \\cdot 4 - 11 \\cdot 0\\right| = 32$ ✓ — and the whole sail is $\\frac{1}{2} \\cdot 16 \\cdot 8 = 64$, so the piece is exactly half ✓. (The choice $16$ is HALVING BOTH BASE AND HEIGHT, which quarters the area instead ✗; $\\frac{64}{3}$ is IMPORTING THE CENTROID’S THIRD — the one-third rule needs the centroid, and $M$ is a midpoint ✗; $48$ is ANSWERING THE COMPLEMENT of the quartering mistake, $64 - 16$ ✗.)',
    },
    {
      q: 'Triangle $PQR$ has area $90$, and $N$ is the midpoint of $\\overline{QR}$, as shown. Find the area of triangle $PQN$.',
      fig: {
        view: [-1.5, -1.5, 16.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [4, 12]], fill: false },
          { t: 'seg', a: [0, 0], b: [9.5, 6], dash: true },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 10 },
          { t: 'point', p: [15, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [4, 12], label: 'R', dx: 0, dy: -12 },
          { t: 'point', p: [9.5, 6], label: 'N', dx: 12, dy: -4 },
        ],
      },
      choices: ['$30$', '$22.5$', '$45$', '$60$'],
      answer: 2,
      solution:
        'Since $QN = NR$, the median $\\overline{PN}$ splits $PQR$ into two triangles with equal bases and the same height from $P$ — equal areas, so $[PQN] = \\frac{90}{2} = 45$ ✓. Check a second, independent way from the drawn coordinates: $P(0, 0)$, $Q(15, 0)$, $N(9.5, 6)$ enclose $\\frac{1}{2}\\left|15 \\cdot 6 - 9.5 \\cdot 0\\right| = 45$ ✓, while the whole triangle encloses $\\frac{1}{2} \\cdot 15 \\cdot 12 = 90$ ✓. (The choice $30$ is IMPORTING THE CENTROID’S THIRD, a rule that belongs to $G$, not to a midpoint ✗; $22.5$ is HALVING BOTH BASE AND HEIGHT ✗; $60$ is ANSWERING THE COMPLEMENT of that thirding mistake, $90 - 30$ ✗.)',
    },
    {
      q: 'A triangular pennant $DEF$ has area $56$. The segment from $D$ to the midpoint $M$ of $\\overline{EF}$ divides it into two pieces, as shown. What is the area of piece $DEM$?',
      fig: {
        view: [-1.5, -1.5, 15.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [6, 8]], fill: false },
          { t: 'seg', a: [0, 0], b: [10, 4], dash: true },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [6, 8], label: 'F', dx: 0, dy: -12 },
          { t: 'point', p: [10, 4], label: 'M', dx: 12, dy: -4 },
        ],
      },
      choices: ['$14$', '$\\frac{56}{3}$', '$42$', '$28$'],
      answer: 3,
      solution:
        'A median shares the area evenly: $\\overline{EM}$ and $\\overline{MF}$ are equal bases under the same height from $D$, so $[DEM] = \\frac{56}{2} = 28$ ✓. Check a second, independent way with the coordinates in the figure: $D(0, 0)$, $E(14, 0)$, $M(10, 4)$ give $\\frac{1}{2}\\left|14 \\cdot 4 - 10 \\cdot 0\\right| = 28$ ✓, and the full pennant is $\\frac{1}{2} \\cdot 14 \\cdot 8 = 56$ ✓ — the two pieces are rarely congruent, but they always measure the same. (The choice $14$ is HALVING BOTH BASE AND HEIGHT ✗; $\\frac{56}{3}$ is IMPORTING THE CENTROID’S THIRD ✗; $42$ is ANSWERING THE COMPLEMENT of the quartering mistake, $56 - 14$ ✗.)',
    },
  ],
  // s6 — three medians cut the triangle into six equal pieces (figure).
  [
    {
      q: 'All three medians of triangle $ABC$, whose area is $132$, are drawn in the figure, dividing it into six small triangles. Find the area of one of them.',
      fig: {
        view: [-1.5, -1.5, 23.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [22, 0], [2, 12]], fill: false },
          { t: 'seg', a: [0, 0], b: [12, 6], dash: true },
          { t: 'seg', a: [22, 0], b: [1, 6], dash: true },
          { t: 'seg', a: [2, 12], b: [11, 0], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [22, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [2, 12], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [8, 4], label: 'G', dx: 10, dy: -6 },
        ],
      },
      choices: ['$22$', '$44$', '$66$', '$33$'],
      answer: 0,
      solution:
        'The three medians always cut a triangle into six triangles of EQUAL area, so each slice holds $\\frac{132}{6} = 22$ ✓. Check a second, independent way on one slice from the figure: the slice with corners $A(0, 0)$, the midpoint $(11, 0)$ of $\\overline{AB}$, and the centroid $G(8, 4)$ encloses $\\frac{1}{2}\\left|11 \\cdot 4 - 8 \\cdot 0\\right| = 22$ ✓ — and six such slices rebuild $6 \\cdot 22 = 132$ ✓. (The choice $44$ is ANSWERING A CENTROID TRIANGLE — the two-slice triangle like $GBC$ holds a third, not a sixth ✗; $66$ is STOPPING AT ONE MEDIAN, which only halves the triangle ✗; $33$ is MISCOUNTING THE SLICES as four ✗.)',
    },
    {
      q: 'A triangular tile of area $84$ is scored along all three of its medians, as shown, and snapped into six small triangular pieces. What is the area of each piece?',
      fig: {
        view: [-1.5, -1.5, 15.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [4, 12]], fill: false },
          { t: 'seg', a: [0, 0], b: [9, 6], dash: true },
          { t: 'seg', a: [14, 0], b: [2, 6], dash: true },
          { t: 'seg', a: [4, 12], b: [7, 0], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [14, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [4, 12], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [6, 4], label: 'G', dx: 10, dy: -6 },
        ],
      },
      choices: ['$21$', '$14$', '$28$', '$42$'],
      answer: 1,
      solution:
        'Even in a lopsided triangle the six median slices are perfectly fair shares, so each piece measures $\\frac{84}{6} = 14$ ✓. Check a second, independent way straight from the drawing: the slice with corners $A(0, 0)$, the midpoint $(7, 0)$ of $\\overline{AB}$, and the centroid $G(6, 4)$ has area $\\frac{1}{2}\\left|7 \\cdot 4 - 6 \\cdot 0\\right| = 14$ ✓, and $6 \\cdot 14 = 84$ restores the tile ✓. (The choice $28$ is ANSWERING A CENTROID TRIANGLE, the one-third piece made of two slices ✗; $42$ is STOPPING AT ONE MEDIAN ✗; $21$ is MISCOUNTING THE SLICES as four ✗.)',
    },
    {
      q: 'The three medians of triangle $DEF$ in the figure cut it into six small triangles. If $DEF$ has area $108$, how much area does each small triangle carry?',
      fig: {
        view: [-1.5, -1.5, 19.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [18, 0], [6, 12]], fill: false },
          { t: 'seg', a: [0, 0], b: [12, 6], dash: true },
          { t: 'seg', a: [18, 0], b: [3, 6], dash: true },
          { t: 'seg', a: [6, 12], b: [9, 0], dash: true },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [18, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [6, 12], label: 'F', dx: 0, dy: -12 },
          { t: 'point', p: [8, 4], label: 'G', dx: 10, dy: -6 },
        ],
      },
      choices: ['$27$', '$36$', '$18$', '$54$'],
      answer: 2,
      solution:
        'Six slices, all equal: each carries $\\frac{108}{6} = 18$ ✓. Check a second, independent way on a single slice: the triangle with corners $D(0, 0)$, the midpoint $(9, 0)$ of $\\overline{DE}$, and the centroid $G(8, 4)$ encloses $\\frac{1}{2}\\left|9 \\cdot 4 - 8 \\cdot 0\\right| = 18$ ✓, and six of those give back $108$ ✓. (The choice $36$ is ANSWERING A CENTROID TRIANGLE — joining $G$ to two vertices sweeps up two slices, a third of the whole ✗; $54$ is STOPPING AT ONE MEDIAN ✗; $27$ is MISCOUNTING THE SLICES as four ✗.)',
    },
  ],
  // s7 — a centroid triangle holds one third of the area.
  [
    {
      q: 'Triangle $ABC$ has area $105$, and its medians meet at $G$. Find the area of triangle $GAB$.',
      choices: ['$35$', '$52.5$', '$17.5$', '$70$'],
      answer: 0,
      solution:
        'Joining $G$ to the three vertices splits the triangle into $GAB$, $GBC$, and $GCA$, and each is built from two of the six equal median slices — a third of the whole apiece: $\\frac{105}{3} = 35$ ✓. Check a second, independent way through the slices themselves: each of the six slices holds $\\frac{105}{6} = 17.5$, and triangle $GAB$ contains exactly the two slices that lean on side $\\overline{AB}$, so $2 \\cdot 17.5 = 35$ ✓. (The choice $52.5$ is PAYING OUT A MEDIAN’S HALF, but $\\overline{GA}$ and $\\overline{GB}$ are not medians ✗; $17.5$ is STOPPING AT ONE SLICE of the two ✗; $70$ is ANSWERING THE COMPLEMENT, the two thirds outside $GAB$ ✗.)',
    },
    {
      q: 'The medians of triangle $PQR$ meet at point $G$, and the triangle’s area is $69$. What is the area of triangle $GQR$?',
      choices: ['$34.5$', '$23$', '$11.5$', '$46$'],
      answer: 1,
      solution:
        'The centroid deals the triangle into three equal shares $GPQ$, $GQR$, $GRP$, so $[GQR] = \\frac{69}{3} = 23$ ✓. Check a second, independent way by counting slices: the medians make six equal slices of $\\frac{69}{6} = 11.5$ each, and $GQR$ is assembled from the two slices touching $\\overline{QR}$, giving $2 \\cdot 11.5 = 23$ ✓. (The choice $34.5$ is PAYING OUT A MEDIAN’S HALF — only a true median halves the area, and $\\overline{GQ}$ is not one ✗; $11.5$ is STOPPING AT ONE SLICE ✗; $46$ is ANSWERING THE COMPLEMENT, everything outside $GQR$ ✗.)',
    },
    {
      q: 'Joining the centroid $G$ of triangle $XYZ$ to the three vertices cuts the triangle into three pieces. If the area of $XYZ$ is $87$, find the area of piece $GXZ$.',
      choices: ['$14.5$', '$43.5$', '$29$', '$58$'],
      answer: 2,
      solution:
        'The three pieces $GXY$, $GYZ$, $GXZ$ each contain two of the six equal median slices, so each is one third of the triangle: $\\frac{87}{3} = 29$ ✓. Check a second, independent way from the slices: one slice is $\\frac{87}{6} = 14.5$, and the two slices leaning on $\\overline{XZ}$ total $2 \\cdot 14.5 = 29$ ✓. (The choice $43.5$ is PAYING OUT A MEDIAN’S HALF, though no side of piece $GXZ$ is a median of $XYZ$ ✗; $14.5$ is STOPPING AT ONE SLICE ✗; $58$ is ANSWERING THE COMPLEMENT, the other two pieces combined ✗.)',
    },
  ],
  // s8 — median length from coordinates (figure).
  [
    {
      q: 'Triangle $ABC$ has vertices $A(0, 0)$, $B(30, 0)$, and $C(0, 16)$, with a right angle at $A$, as shown. How long is the median from $A$?',
      fig: {
        view: [-2, -2, 32, 18],
        elems: [
          { t: 'poly', pts: [[0, 0], [30, 0], [0, 16]], fill: false },
          { t: 'right', at: [0, 0], from: [30, 0], to: [0, 16], s: 1.2 },
          { t: 'seg', a: [0, 0], b: [15, 8], dash: true },
          { t: 'label', p: [15, 0], text: '30', dx: 0, dy: 14 },
          { t: 'label', p: [0, 8], text: '16', dx: -12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [30, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 16], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [15, 8], label: 'M', dx: 12, dy: -4 },
        ],
      },
      choices: ['$15$', '$17$', '$23$', '$34$'],
      answer: 1,
      solution:
        'The median from $A$ ends at the midpoint of $\\overline{BC}$: $M = \\left(\\frac{30 + 0}{2}, \\frac{0 + 16}{2}\\right) = (15, 8)$, and its length is $\\sqrt{15^2 + 8^2} = \\sqrt{225 + 64} = \\sqrt{289} = 17$ ✓. Check a second, independent way with the right angle: the hypotenuse is $BC = \\sqrt{30^2 + 16^2} = \\sqrt{1156} = 34$, and the median to the hypotenuse of a right triangle is always half the hypotenuse — $\\frac{34}{2} = 17$ ✓. (The choice $34$ is ANSWERING THE WHOLE HYPOTENUSE instead of the median ✗; $15$ is GRABBING HALF A LEG, the $x$-coordinate of $M$ alone ✗; $23$ is ADDING THE HALVES $15 + 8$ instead of squaring them ✗.)',
    },
    {
      q: 'The right triangle in the figure has vertices $A(0, 0)$, $B(20, 0)$, and $C(0, 48)$. Find the length of the median drawn from $A$ to $\\overline{BC}$.',
      fig: {
        w: 190,
        view: [-2.5, -2.5, 22, 50],
        elems: [
          { t: 'poly', pts: [[0, 0], [20, 0], [0, 48]], fill: false },
          { t: 'right', at: [0, 0], from: [20, 0], to: [0, 48], s: 1.6 },
          { t: 'seg', a: [0, 0], b: [10, 24], dash: true },
          { t: 'label', p: [10, 0], text: '20', dx: 0, dy: 14 },
          { t: 'label', p: [0, 24], text: '48', dx: -14, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -8, dy: 12 },
          { t: 'point', p: [20, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 48], label: 'C', dx: -8, dy: -8 },
          { t: 'point', p: [10, 24], label: 'M', dx: 12, dy: -4 },
        ],
      },
      choices: ['$24$', '$34$', '$26$', '$52$'],
      answer: 2,
      solution:
        'The midpoint of $\\overline{BC}$ is $M = \\left(\\frac{20 + 0}{2}, \\frac{0 + 48}{2}\\right) = (10, 24)$, so the median from $A$ measures $\\sqrt{10^2 + 24^2} = \\sqrt{100 + 576} = \\sqrt{676} = 26$ ✓. Check a second, independent way through the hypotenuse: the legs lie along the axes, so the right angle is at $A$, $BC = \\sqrt{400 + 2304} = \\sqrt{2704} = 52$, and the median to the hypotenuse is half of it: $\\frac{52}{2} = 26$ ✓. (The choice $52$ is ANSWERING THE WHOLE HYPOTENUSE ✗; $24$ is GRABBING HALF A LEG, only the $y$-coordinate of $M$ ✗; $34$ is ADDING THE HALVES $10 + 24$ without squaring ✗.)',
    },
    {
      q: 'Triangle $ABC$ has $A(0, 0)$, $B(32, 0)$, and $C(0, 60)$, as shown. What is the length of its median from vertex $A$?',
      fig: {
        w: 220,
        view: [-3, -3, 35, 63],
        elems: [
          { t: 'poly', pts: [[0, 0], [32, 0], [0, 60]], fill: false },
          { t: 'right', at: [0, 0], from: [32, 0], to: [0, 60], s: 2 },
          { t: 'seg', a: [0, 0], b: [16, 30], dash: true },
          { t: 'label', p: [16, 0], text: '32', dx: 0, dy: 14 },
          { t: 'label', p: [0, 30], text: '60', dx: -14, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -8, dy: 12 },
          { t: 'point', p: [32, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 60], label: 'C', dx: -8, dy: -8 },
          { t: 'point', p: [16, 30], label: 'M', dx: 12, dy: -4 },
        ],
      },
      choices: ['$30$', '$46$', '$68$', '$34$'],
      answer: 3,
      solution:
        'The far side’s midpoint is $M = \\left(\\frac{32 + 0}{2}, \\frac{0 + 60}{2}\\right) = (16, 30)$, so the median from $A$ is $\\sqrt{16^2 + 30^2} = \\sqrt{256 + 900} = \\sqrt{1156} = 34$ ✓. Check a second, independent way using the right angle at $A$: the hypotenuse is $BC = \\sqrt{32^2 + 60^2} = \\sqrt{1024 + 3600} = \\sqrt{4624} = 68$, and the median to the hypotenuse is half of it, $\\frac{68}{2} = 34$ ✓. (The choice $68$ is ANSWERING THE WHOLE HYPOTENUSE ✗; $30$ is GRABBING HALF A LEG ✗; $46$ is ADDING THE HALVES $16 + 30$ instead of using the distance formula ✗.)',
    },
  ],
  // s9 — centroid from three general coordinates (figure).
  [
    {
      q: 'Triangle $DEF$ has vertices $D(1, 3)$, $E(7, 5)$, and $F(4, 10)$. Where is its centroid?',
      fig: {
        view: [-0.5, 1.5, 8.5, 11.5],
        elems: [
          { t: 'poly', pts: [[1, 3], [7, 5], [4, 10]], fill: false },
          { t: 'seg', a: [1, 3], b: [5.5, 7.5], dash: true },
          { t: 'seg', a: [7, 5], b: [2.5, 6.5], dash: true },
          { t: 'seg', a: [4, 10], b: [4, 4], dash: true },
          { t: 'point', p: [1, 3], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [7, 5], label: 'E', dx: 12, dy: 4 },
          { t: 'point', p: [4, 10], label: 'F', dx: 0, dy: -12 },
          { t: 'point', p: [4, 6], label: 'G', dx: -10, dy: -6 },
        ],
      },
      choices: ['$(4, 6)$', '$(4, 4)$', '$(6, 9)$', '$(5.5, 7.5)$'],
      answer: 0,
      solution:
        'Average all three vertices: $x = \\frac{1 + 7 + 4}{3} = 4$ and $y = \\frac{3 + 5 + 10}{3} = 6$, so $G(4, 6)$ ✓. Check a second, independent way down a convenient median: the midpoint of $\\overline{DE}$ is $(4, 4)$, so the median from $F(4, 10)$ is vertical, and two thirds of the drop is $10 - \\frac{2}{3} \\cdot 6 = 6$ — the point $(4, 6)$ again ✓. (The point $(4, 4)$ is AVERAGING ONLY TWO VERTICES, the midpoint of $\\overline{DE}$ ✗; $(5.5, 7.5)$ is AVERAGING THE OTHER TWO, the midpoint of $\\overline{EF}$ ✗; $(6, 9)$ is HALVING THE SUM instead of thirding it ✗.)',
    },
    {
      q: 'Find the centroid of triangle $TUV$ with $T(2, 2)$, $U(9, 4)$, and $V(4, 9)$.',
      fig: {
        view: [0.5, 0.5, 10.5, 10.5],
        elems: [
          { t: 'poly', pts: [[2, 2], [9, 4], [4, 9]], fill: false },
          { t: 'seg', a: [2, 2], b: [6.5, 6.5], dash: true },
          { t: 'seg', a: [9, 4], b: [3, 5.5], dash: true },
          { t: 'seg', a: [4, 9], b: [5.5, 3], dash: true },
          { t: 'point', p: [2, 2], label: 'T', dx: -10, dy: 10 },
          { t: 'point', p: [9, 4], label: 'U', dx: 12, dy: 4 },
          { t: 'point', p: [4, 9], label: 'V', dx: 0, dy: -12 },
          { t: 'point', p: [5, 5], label: 'G', dx: -10, dy: -6 },
        ],
      },
      choices: ['$(5.5, 3)$', '$(7.5, 7.5)$', '$(5, 5)$', '$(6.5, 6.5)$'],
      answer: 2,
      solution:
        'The centroid is the average of the three vertices: $x = \\frac{2 + 9 + 4}{3} = 5$ and $y = \\frac{2 + 4 + 9}{3} = 5$, so $G(5, 5)$ ✓. Check a second, independent way along the median from $V$: it ends at the midpoint $(5.5, 3)$ of $\\overline{TU}$, and two thirds of the trip from $V(4, 9)$ is $(4, 9) + \\frac{2}{3}(1.5, -6) = (5, 5)$ ✓. (The point $(5.5, 3)$ is AVERAGING ONLY TWO VERTICES, the midpoint of $\\overline{TU}$ ✗; $(6.5, 6.5)$ is AVERAGING THE OTHER TWO, the midpoint of $\\overline{UV}$ ✗; $(7.5, 7.5)$ is HALVING THE SUM, dividing by $2$ instead of $3$ ✗.)',
    },
    {
      q: 'Triangle $JKL$ has $J(3, 1)$, $K(9, 5)$, and $L(6, 12)$. Compute its centroid.',
      fig: {
        view: [1.5, -0.5, 10.5, 13.5],
        elems: [
          { t: 'poly', pts: [[3, 1], [9, 5], [6, 12]], fill: false },
          { t: 'seg', a: [3, 1], b: [7.5, 8.5], dash: true },
          { t: 'seg', a: [9, 5], b: [4.5, 6.5], dash: true },
          { t: 'seg', a: [6, 12], b: [6, 3], dash: true },
          { t: 'point', p: [3, 1], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [9, 5], label: 'K', dx: 12, dy: 4 },
          { t: 'point', p: [6, 12], label: 'L', dx: 0, dy: -12 },
          { t: 'point', p: [6, 6], label: 'G', dx: -10, dy: -6 },
        ],
      },
      choices: ['$(6, 3)$', '$(9, 9)$', '$(7.5, 8.5)$', '$(6, 6)$'],
      answer: 3,
      solution:
        'Third the sums: $x = \\frac{3 + 9 + 6}{3} = 6$ and $y = \\frac{1 + 5 + 12}{3} = 6$, so the centroid is $(6, 6)$ ✓. Check a second, independent way on the vertical median: the midpoint of $\\overline{JK}$ is $(6, 3)$, so the median from $L(6, 12)$ runs straight down, and two thirds of its length $9$ puts the centroid at height $12 - 6 = 6$ — the point $(6, 6)$ ✓. (The point $(6, 3)$ is AVERAGING ONLY TWO VERTICES, the midpoint of $\\overline{JK}$ ✗; $(7.5, 8.5)$ is AVERAGING THE OTHER TWO, the midpoint of $\\overline{KL}$ ✗; $(9, 9)$ is HALVING THE SUM ✗.)',
    },
  ],
  // s10 — vertex-to-centroid distance from coordinates (figure).
  [
    {
      q: 'Triangle $ABC$ has $A(0, 0)$, $B(24, 0)$, and $C(0, 10)$. The median from $A$ reaches the midpoint $M$ of $\\overline{BC}$ and has length $13$, as shown. Find the distance from $A$ to the centroid $G$.',
      fig: {
        view: [-2, -2, 26, 12],
        elems: [
          { t: 'poly', pts: [[0, 0], [24, 0], [0, 10]], fill: false },
          { t: 'seg', a: [0, 0], b: [12, 5], dash: true },
          { t: 'label', p: [6, 2.5], text: '13', dx: 2, dy: -10 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [24, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 10], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [12, 5], label: 'M', dx: 12, dy: -4 },
          { t: 'point', p: [8, 10 / 3], label: 'G', dx: 4, dy: 14 },
        ],
      },
      choices: ['$\\frac{26}{3}$', '$\\frac{13}{3}$', '$\\frac{13}{2}$', '$13$'],
      answer: 0,
      solution:
        'The centroid takes two thirds of the median on the vertex side: $AG = \\frac{2}{3} \\cdot 13 = \\frac{26}{3}$ ✓. Check a second, independent way through coordinates: $G = \\left(\\frac{0 + 24 + 0}{3}, \\frac{0 + 0 + 10}{3}\\right) = \\left(8, \\frac{10}{3}\\right)$, and $AG = \\sqrt{64 + \\frac{100}{9}} = \\sqrt{\\frac{676}{9}} = \\frac{26}{3}$ ✓. (The choice $\\frac{13}{3}$ is ANSWERING THE SHORT PIECE, the $G$-to-$M$ third ✗; $\\frac{13}{2}$ is HALVING THE MEDIAN ✗; $13$ is ANSWERING THE WHOLE MEDIAN rather than the part up to $G$ ✗.)',
    },
    {
      q: 'In triangle $ABC$ with $A(0, 0)$, $B(16, 0)$, and $C(0, 12)$, the median $\\overline{AM}$ has length $10$, as shown. How far does vertex $A$ sit from the centroid $G$?',
      fig: {
        view: [-1.5, -1.5, 17.5, 13.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [16, 0], [0, 12]], fill: false },
          { t: 'seg', a: [0, 0], b: [8, 6], dash: true },
          { t: 'label', p: [4, 3], text: '10', dx: 2, dy: -10 },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 10 },
          { t: 'point', p: [16, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 12], label: 'C', dx: -10, dy: -8 },
          { t: 'point', p: [8, 6], label: 'M', dx: 12, dy: -4 },
          { t: 'point', p: [16 / 3, 4], label: 'G', dx: 4, dy: 14 },
        ],
      },
      choices: ['$\\frac{10}{3}$', '$\\frac{20}{3}$', '$5$', '$10$'],
      answer: 1,
      solution:
        'Two thirds of the median belongs to the vertex: $AG = \\frac{2}{3} \\cdot 10 = \\frac{20}{3}$ ✓. Check a second, independent way from the centroid’s coordinates: $G = \\left(\\frac{0 + 16 + 0}{3}, \\frac{0 + 0 + 12}{3}\\right) = \\left(\\frac{16}{3}, 4\\right)$, so $AG = \\sqrt{\\frac{256}{9} + 16} = \\sqrt{\\frac{400}{9}} = \\frac{20}{3}$ ✓. (The choice $\\frac{10}{3}$ is ANSWERING THE SHORT PIECE, $GM$ ✗; $5$ is HALVING THE MEDIAN ✗; $10$ is ANSWERING THE WHOLE MEDIAN, sailing past $G$ all the way to $M$ ✗.)',
    },
    {
      q: 'Triangle $ABC$ has $A(0, 0)$, $B(14, 0)$, and $C(0, 48)$; the median from $A$ measures $25$, as shown. What is $AG$, where $G$ is the centroid?',
      fig: {
        w: 150,
        view: [-2, -2, 16, 50],
        elems: [
          { t: 'poly', pts: [[0, 0], [14, 0], [0, 48]], fill: false },
          { t: 'seg', a: [0, 0], b: [7, 24], dash: true },
          { t: 'label', p: [3.5, 12], text: '25', dx: 12, dy: 0 },
          { t: 'point', p: [0, 0], label: 'A', dx: -8, dy: 12 },
          { t: 'point', p: [14, 0], label: 'B', dx: 10, dy: 10 },
          { t: 'point', p: [0, 48], label: 'C', dx: -8, dy: -8 },
          { t: 'point', p: [7, 24], label: 'M', dx: 12, dy: -4 },
          { t: 'point', p: [14 / 3, 16], label: 'G', dx: 12, dy: 4 },
        ],
      },
      choices: ['$\\frac{25}{3}$', '$\\frac{25}{2}$', '$25$', '$\\frac{50}{3}$'],
      answer: 3,
      solution:
        'The vertex-to-centroid distance is two thirds of the median: $AG = \\frac{2}{3} \\cdot 25 = \\frac{50}{3}$ ✓. Check a second, independent way by locating $G$ outright: $G = \\left(\\frac{0 + 14 + 0}{3}, \\frac{0 + 0 + 48}{3}\\right) = \\left(\\frac{14}{3}, 16\\right)$, and $AG = \\sqrt{\\frac{196}{9} + 256} = \\sqrt{\\frac{2500}{9}} = \\frac{50}{3}$ ✓. (The choice $\\frac{25}{3}$ is ANSWERING THE SHORT PIECE, the centroid-to-midpoint third ✗; $\\frac{25}{2}$ is HALVING THE MEDIAN ✗; $25$ is ANSWERING THE WHOLE MEDIAN ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 7,
  sections: { '7.4': s74 },
}
