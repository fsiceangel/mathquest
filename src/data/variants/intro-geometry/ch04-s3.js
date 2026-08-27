// Introduction to Geometry chapter 4 — variations for section 4.3
// (Same Base/Same Altitude). All problems, figures, and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every keyed area was worked twice, by two routes that do not share
//    arithmetic: the base/height principle against a recovered numeric height,
//    an area ratio against the whole-minus-piece complement, a tiling equation
//    (the pieces must rebuild the total) against the halving chain, and the
//    trapezoid fact proved once from each of the two parallel sides. The two
//    routes must agree before a key is written down.
//  - Figures are built from their own numbers: labeled lengths equal the
//    drawn coordinate lengths, every midpoint sits at the true midpoint,
//    every ratio point sits at its exact fraction of the segment, every
//    centroid is the exact vertex average, and where a height is labeled it
//    matches the given area exactly.
//  - Each distractor is one named mistake, named at the end of the solution
//    in CAPS. The traps running through this section are: DOUBLING, HALVING,
//    DEMANDING MORE INFORMATION, ANSWERING THE WHOLE AREA, QUARTERING,
//    DOUBLING INSTEAD OF HALVING, THIRDING AS IF AT THE CENTROID, INVERTING
//    THE RATIO, DOUBLING THE GIVEN AREA, COPYING A LENGTH, MULTIPLYING BY A
//    LENGTH, CONFUSING PERIMETER WITH AREA, TRUSTING THE SLANT, GUESSING FROM
//    SYMMETRY, ASSUMING A LONGER SIDE MEANS MORE AREA, EXPECTING LEFT AND
//    RIGHT TO DIFFER, FAVORING THE SYMMETRIC POSITION, EXPECTING THE ENDS TO
//    PINCH THE TRIANGLE, SMUGGLING THE PERIMETER IN, HALVING TWICE,
//    SUBTRACTING THE PIECES, AVERAGING THE PIECES, DOUBLING ONE PIECE,
//    ANSWERING THE OTHER PIECE, HALVING THE WHOLE, SUBTRACTING A LENGTH FROM
//    AN AREA, RATIO AGAINST THE WRONG BASE, HALVING AT THE MEDIAN, ANSWERING
//    A SIXTH, TAKING TWO THIRDS, STOPPING AFTER ONE HALVING, HALVING A THIRD
//    TIME, and TAKING THE COMPLEMENT.
//  - No two choices inside an item name the same value.

const s43 = [
  // s1 — shared base, apexes on a parallel line: equal areas.
  [
    {
      q: 'Triangles $PQR$ and $SQR$ share base $QR$, and the apexes $P$ and $S$ lie on the same line parallel to $QR$, as shown. If $[PQR] = 23$, what is $[SQR]$?',
      fig: {
        view: [-2, -1.5, 10, 7],
        elems: [
          { t: 'seg', a: [-1, 5.75], b: [9, 5.75], dash: true },
          { t: 'poly', pts: [[0, 0], [8, 0], [1.5, 5.75]], fill: false },
          { t: 'poly', pts: [[0, 0], [8, 0], [6, 5.75]], fill: false },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 12 },
          { t: 'point', p: [8, 0], label: 'R', dx: 10, dy: 12 },
          { t: 'point', p: [1.5, 5.75], label: 'P', dx: -4, dy: -10 },
          { t: 'point', p: [6, 5.75], label: 'S', dx: 6, dy: -10 },
          { t: 'label', p: [4, -0.7], text: '8' },
        ],
      },
      choices: ['$23$', '$46$', '$11.5$', 'It cannot be determined'],
      answer: 0,
      solution:
        'Both triangles stand on the same base $QR$, and because $P$ and $S$ ride one line parallel to $QR$, the two apexes sit at the same height above it — parallel lines never drift apart. Same base and same height force $[SQR] = [PQR] = 23$ ✓. Check a second, independent way by recovering the height. The figure marks $QR = 8$, so $[PQR] = 23$ gives $\\frac{1}{2} \\cdot 8 \\cdot h = 23$, meaning $h = 5.75$. Apex $S$ enjoys that identical $h$, so $[SQR] = \\frac{1}{2} \\cdot 8 \\cdot 5.75 = 23$ ✓ — the same number from raw arithmetic. (The choice $46$ is DOUBLING, as if the two triangles had to add rather than match ✗; $11.5$ is HALVING, as if $S$ owned only part of the base ✗; "It cannot be determined" is DEMANDING MORE INFORMATION when base and height already settle everything ✗.)',
    },
    {
      q: 'In the figure, triangles $MKL$ and $NKL$ hang below the shared base $KL$, with $M$ and $N$ on one line parallel to $KL$. If $[MKL] = 35$, what is $[NKL]$?',
      fig: {
        view: [-2, -8.5, 11.5, 1.8],
        elems: [
          { t: 'seg', a: [-1, -7], b: [11, -7], dash: true },
          { t: 'poly', pts: [[0, 0], [10, 0], [2, -7]], fill: false },
          { t: 'poly', pts: [[0, 0], [10, 0], [7.5, -7]], fill: false },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: -6 },
          { t: 'point', p: [10, 0], label: 'L', dx: 10, dy: -6 },
          { t: 'point', p: [2, -7], label: 'M', dx: -4, dy: 14 },
          { t: 'point', p: [7.5, -7], label: 'N', dx: 6, dy: 14 },
          { t: 'label', p: [5, 0.6], text: '10' },
        ],
      },
      choices: ['$70$', '$17.5$', '$35$', 'It cannot be determined'],
      answer: 2,
      solution:
        'Flipping the picture upside down changes nothing: $MKL$ and $NKL$ stand on the same base $KL$, and $M$ and $N$ ride one line parallel to it, so both apexes hang the same distance below the base. Same base, same height, same area: $[NKL] = 35$ ✓. Check a second, independent way with numbers. The figure marks $KL = 10$, so $[MKL] = 35$ gives $\\frac{1}{2} \\cdot 10 \\cdot h = 35$ and $h = 7$; then $[NKL] = \\frac{1}{2} \\cdot 10 \\cdot 7 = 35$ ✓ — the height cancels out of the comparison entirely. (The choice $70$ is DOUBLING the given area ✗; $17.5$ is HALVING it ✗; "It cannot be determined" is DEMANDING MORE INFORMATION, though the parallel line already pins the height ✗.)',
    },
    {
      q: 'A landscaper stakes out two triangular flower beds $DEF$ and $GEF$ on the same edge $EF$, driving stakes $D$ and $G$ along one straight path parallel to $EF$, as shown. Bed $DEF$ covers an area of $31$. What area does bed $GEF$ cover?',
      fig: {
        view: [-2, -1.5, 10, 9],
        elems: [
          { t: 'seg', a: [-1, 7.75], b: [9, 7.75], dash: true },
          { t: 'poly', pts: [[0, 0], [8, 0], [2, 7.75]], fill: false },
          { t: 'poly', pts: [[0, 0], [8, 0], [6.5, 7.75]], fill: false },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 12 },
          { t: 'point', p: [8, 0], label: 'F', dx: 10, dy: 12 },
          { t: 'point', p: [2, 7.75], label: 'D', dx: -4, dy: -10 },
          { t: 'point', p: [6.5, 7.75], label: 'G', dx: 6, dy: -10 },
          { t: 'label', p: [4, -0.7], text: '8' },
        ],
      },
      choices: ['$62$', 'It cannot be determined', '$15.5$', '$31$'],
      answer: 3,
      solution:
        'Both beds grow from the same edge $EF$, and their far stakes $D$ and $G$ stand on one path parallel to $EF$ — so each stake is the same distance from the edge. Equal base, equal height: $[GEF] = [DEF] = 31$ ✓. Check a second, independent way by computing. The figure marks $EF = 8$, so $31 = \\frac{1}{2} \\cdot 8 \\cdot h$ gives $h = 7.75$, and bed $GEF$ then measures $\\frac{1}{2} \\cdot 8 \\cdot 7.75 = 31$ ✓ — the two beds trade shape for slant at no cost in area. (The choice $62$ is DOUBLING ✗; $15.5$ is HALVING ✗; "It cannot be determined" is DEMANDING MORE INFORMATION that the parallel path already supplies ✗.)',
    },
  ],
  // s2 — a midpoint of a side halves the area.
  [
    {
      q: 'In triangle $PQR$ shown, $N$ is the midpoint of $QR$ and $[PQR] = 52$. What is $[PQN]$?',
      fig: {
        view: [-1.5, -1.5, 14.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [13, 0], [3, 8]] },
          { t: 'seg', a: [3, 8], b: [6.5, 0] },
          { t: 'seg', a: [3, 8], b: [3, 0], dash: true },
          { t: 'right', at: [3, 0], from: [3, 8], to: [6.5, 0] },
          { t: 'tick', a: [0, 0], b: [6.5, 0], n: 1 },
          { t: 'tick', a: [6.5, 0], b: [13, 0], n: 1 },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 12 },
          { t: 'point', p: [13, 0], label: 'R', dx: 10, dy: 12 },
          { t: 'point', p: [3, 8], label: 'P', dx: 0, dy: -12 },
          { t: 'point', p: [6.5, 0], label: 'N', dx: 0, dy: 14 },
          { t: 'label', p: [2.4, 4], text: '8' },
        ],
      },
      choices: ['$52$', '$26$', '$13$', '$104$'],
      answer: 1,
      solution:
        'The median $PN$ hands triangles $PQN$ and $PRN$ equal bases ($QN = NR$) and one shared height — the dashed perpendicular from $P$ serves them both. Equal base and equal height mean equal area, so each piece is half: $[PQN] = \\frac{1}{2} \\cdot 52 = 26$ ✓. Check a second, independent way by tiling: the two pieces cover triangle $PQR$ exactly, so writing $[PQN] = [PRN] = x$ gives the equation $x + x = 52$, and $x = 26$ ✓ — no halving formula in sight, just the fact that the pieces rebuild the whole. (The choice $52$ is ANSWERING THE WHOLE AREA ✗; $13$ is QUARTERING, one halving too many ✗; $104$ is DOUBLING INSTEAD OF HALVING ✗.)',
    },
    {
      q: 'In triangle $DEF$ shown, $M$ is the midpoint of $EF$ and $[DEF] = 58$. What is $[DMF]$?',
      fig: {
        view: [-1.5, -1.5, 16, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [14.5, 0], [4, 8]] },
          { t: 'seg', a: [4, 8], b: [7.25, 0] },
          { t: 'seg', a: [4, 8], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [4, 8], to: [7.25, 0] },
          { t: 'tick', a: [0, 0], b: [7.25, 0], n: 1 },
          { t: 'tick', a: [7.25, 0], b: [14.5, 0], n: 1 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 12 },
          { t: 'point', p: [14.5, 0], label: 'F', dx: 10, dy: 12 },
          { t: 'point', p: [4, 8], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [7.25, 0], label: 'M', dx: 0, dy: 14 },
          { t: 'label', p: [3.4, 4], text: '8' },
        ],
      },
      choices: ['$58$', '$14.5$', '$116$', '$29$'],
      answer: 3,
      solution:
        'This time the question asks for the far piece, but the median does not care: $DM$ gives triangles $DEM$ and $DMF$ equal bases ($EM = MF$) and the same height from $D$, so the two pieces match, and each is $\\frac{1}{2} \\cdot 58 = 29$ ✓. Check a second, independent way by testing the printed candidates against the tiling requirement that the two equal pieces rebuild $58$. Try $58$: $58 + 58 = 116$ ✗. Try $14.5$: $14.5 + 14.5 = 29$ ✗. Try $116$: far past the whole ✗. Try $29$: $29 + 29 = 58$ ✓ — exactly one candidate fills the triangle. (The choice $58$ is ANSWERING THE WHOLE AREA ✗; $14.5$ is QUARTERING ✗; $116$ is DOUBLING INSTEAD OF HALVING ✗.)',
    },
    {
      q: 'A triangular garden $GHK$ has area $60$. A straight path runs from corner $K$ to the midpoint $M$ of the opposite side $GH$, as shown. What is the area of piece $KGM$?',
      fig: {
        view: [-1.5, -1.5, 16.5, 9.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [4, 8]] },
          { t: 'seg', a: [4, 8], b: [7.5, 0] },
          { t: 'seg', a: [4, 8], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [4, 8], to: [7.5, 0] },
          { t: 'tick', a: [0, 0], b: [7.5, 0], n: 1 },
          { t: 'tick', a: [7.5, 0], b: [15, 0], n: 1 },
          { t: 'point', p: [0, 0], label: 'G', dx: -10, dy: 12 },
          { t: 'point', p: [15, 0], label: 'H', dx: 10, dy: 12 },
          { t: 'point', p: [4, 8], label: 'K', dx: 0, dy: -12 },
          { t: 'point', p: [7.5, 0], label: 'M', dx: 0, dy: 14 },
          { t: 'label', p: [3.4, 4], text: '8' },
          { t: 'label', p: [11.5, -0.7], text: '15' },
        ],
      },
      choices: ['$30$', '$60$', '$15$', '$20$'],
      answer: 0,
      solution:
        'The path $KM$ is a median of the garden: it splits $GH$ into equal halves while both pieces keep the same height from $K$. Equal base, equal height — so the path is a perfect area-halver, and $[KGM] = \\frac{1}{2} \\cdot 60 = 30$ ✓. Check a second, independent way from the figure’s numbers: $GH = 15$ and the height is $8$, and indeed $\\frac{1}{2} \\cdot 15 \\cdot 8 = 60$ matches the given area; the piece $KGM$ stands on $GM = 7.5$ with that same height, so $[KGM] = \\frac{1}{2} \\cdot 7.5 \\cdot 8 = 30$ ✓. (The choice $60$ is ANSWERING THE WHOLE AREA ✗; $15$ is QUARTERING ✗; $20$ is THIRDING AS IF AT THE CENTROID, but a single median cuts halves, not thirds ✗.)',
    },
  ],
  // s3 — D on the side, ratio of pieces: near piece given, find the far piece.
  [
    {
      q: 'In the figure, $W$ lies on side $UV$ of triangle $TUV$ with $UW = 2$ and $WV = 8$. If $[TUW] = 7$, what is $[TWV]$?',
      fig: {
        view: [-1.5, -1.5, 11.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [3, 5]] },
          { t: 'seg', a: [3, 5], b: [2, 0] },
          { t: 'point', p: [0, 0], label: 'U', dx: -10, dy: 12 },
          { t: 'point', p: [10, 0], label: 'V', dx: 10, dy: 12 },
          { t: 'point', p: [3, 5], label: 'T', dx: 0, dy: -12 },
          { t: 'point', p: [2, 0], label: 'W', dx: -2, dy: 14 },
          { t: 'label', p: [1, -0.6], text: '2' },
          { t: 'label', p: [6, -0.6], text: '8' },
        ],
      },
      choices: ['$35$', '$14$', '$28$', '$1.75$'],
      answer: 2,
      solution:
        'Triangles $TUW$ and $TWV$ share the apex $T$, and their bases lie on one line, so they share one height — areas therefore compare exactly as bases do: $[TUW] : [TWV] = UW : WV = 2 : 8 = 1 : 4$. The far piece is $4$ times the near one: $[TWV] = 4 \\cdot 7 = 28$ ✓. Check a second, independent way through the whole triangle: $[TUW]$ owns the fraction $\\frac{2}{10}$ of $[TUV]$, so $[TUV] = 7 \\cdot 5 = 35$, and the far piece is what remains: $35 - 7 = 28$ ✓. (The choice $1.75$ is INVERTING THE RATIO, dividing by $4$ instead of multiplying ✗; $35$ is ANSWERING THE WHOLE AREA ✗; $14$ is DOUBLING THE GIVEN AREA, a guess that never consults the ratio ✗.)',
    },
    {
      q: 'Point $N$ lies on side $KL$ of triangle $JKL$ with $KN = 3$ and $NL = 6$. If $[JKN] = 8$, what is $[JNL]$?',
      fig: {
        view: [-1.5, -1.5, 10.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [4, 4]] },
          { t: 'seg', a: [4, 4], b: [3, 0] },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: 12 },
          { t: 'point', p: [9, 0], label: 'L', dx: 10, dy: 12 },
          { t: 'point', p: [4, 4], label: 'J', dx: 0, dy: -12 },
          { t: 'point', p: [3, 0], label: 'N', dx: -2, dy: 14 },
          { t: 'label', p: [1.5, -0.6], text: '3' },
          { t: 'label', p: [6, -0.6], text: '6' },
        ],
      },
      choices: ['$16$', '$4$', '$24$', '$6$'],
      answer: 0,
      solution:
        'From the shared apex $J$, both little triangles use the same height, so their areas sit in the ratio of their bases: $[JKN] : [JNL] = KN : NL = 3 : 6 = 1 : 2$. So $[JNL] = 2 \\cdot 8 = 16$ ✓. Check a second, independent way via the whole: $[JKN]$ is the fraction $\\frac{3}{9} = \\frac{1}{3}$ of $[JKL]$, so $[JKL] = 3 \\cdot 8 = 24$, and subtracting the near piece leaves $24 - 8 = 16$ ✓ — two roads, one answer, and the height never had to be found. (The choice $4$ is INVERTING THE RATIO, shrinking the piece with the LONGER base ✗; $24$ is ANSWERING THE WHOLE AREA ✗; $6$ is COPYING A LENGTH, echoing $NL$ itself, which is not an area at all ✗.)',
    },
    {
      q: 'A triangular sail $XYZ$ is seamed from corner $X$ to a point $D$ on edge $YZ$, with $YD = 5$ and $DZ = 10$, as shown. The piece $XYD$ has area $9$. What is the area of piece $XDZ$?',
      fig: {
        view: [-1.5, -1.5, 16.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [15, 0], [6, 6]] },
          { t: 'seg', a: [6, 6], b: [5, 0] },
          { t: 'point', p: [0, 0], label: 'Y', dx: -10, dy: 12 },
          { t: 'point', p: [15, 0], label: 'Z', dx: 10, dy: 12 },
          { t: 'point', p: [6, 6], label: 'X', dx: 0, dy: -12 },
          { t: 'point', p: [5, 0], label: 'D', dx: -2, dy: 14 },
          { t: 'label', p: [2.5, -0.6], text: '5' },
          { t: 'label', p: [10, -0.6], text: '10' },
        ],
      },
      choices: ['$27$', '$18$', '$4.5$', '$90$'],
      answer: 1,
      solution:
        'The seam runs from the shared corner $X$, so the two pieces of sail have one height and their areas follow their bases: $[XYD] : [XDZ] = YD : DZ = 5 : 10 = 1 : 2$. The far piece is twice the near one: $[XDZ] = 2 \\cdot 9 = 18$ ✓. Check a second, independent way through the full sail: $[XYD]$ is $\\frac{5}{15} = \\frac{1}{3}$ of the whole, so the whole is $3 \\cdot 9 = 27$, and $27 - 9 = 18$ ✓. (The choice $4.5$ is INVERTING THE RATIO ✗; $27$ is ANSWERING THE WHOLE AREA instead of the far piece ✗; $90$ is MULTIPLYING BY A LENGTH, $9 \\cdot 10$, which mixes an area with a base length ✗.)',
    },
  ],
  // s4 — conceptual: apex slides along a parallel line, area unchanged.
  [
    {
      q: 'A bead is threaded on a long straight wire that runs parallel to a thin rod. A rubber band is stretched from the two ends of the rod around the bead, outlining a triangle. What happens to the area of that triangle as the bead slides along the wire?',
      choices: [
        'The area grows, because the rubber band stretches longer',
        'The area shrinks as the triangle leans over',
        'The area first grows and then shrinks',
        'The area stays exactly the same the whole way',
      ],
      answer: 3,
      solution:
        'The triangle always stands on the rod as its base, and its height is the gap between rod and wire — a gap that parallel lines keep constant forever. The area $\\frac{1}{2}bh$ has both $b$ and $h$ frozen, so it never moves ✓. Check with concrete numbers: a rod of length $10$ with the wire $4$ away gives $\\frac{1}{2} \\cdot 10 \\cdot 4 = 20$ whether the bead sits at one end, in the middle, or far down the wire — the bead’s position never enters the formula ✓. The rubber band itself does stretch, but that is the perimeter changing, not the area. (The first choice is CONFUSING PERIMETER WITH AREA ✗; the second is TRUSTING THE SLANT, which costs no area at all ✗; the third is GUESSING FROM SYMMETRY instead of from the formula ✗.)',
    },
    {
      q: 'In a drawing app, the two base corners of a triangle are locked in place, and the third vertex is dragged along a guide line that is parallel to the base. The app displays the area of the triangle at every moment. What does the readout do during the drag?',
      choices: [
        'The readout never changes during the drag',
        'The readout climbs the farther the vertex travels',
        'The readout drops steadily as the triangle tips over',
        'The readout depends on whether the vertex moves left or right',
      ],
      answer: 0,
      solution:
        'The app is computing $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$. The base corners are locked, so the base is fixed; the guide line is parallel to the base, so the vertex keeps a constant perpendicular distance from it. Neither input moves, so the readout never changes ✓. Check a second, independent way with a spot test: lock a base of length $6$ with the guide $5$ away, and the readout says $\\frac{1}{2} \\cdot 6 \\cdot 5 = 15$ at the start of the drag, in the middle, and at the end — three positions, one number ✓. Left-right position is data the formula never reads. (The second choice is ASSUMING A LONGER SIDE MEANS MORE AREA, but only the height matters, not the slanted sides ✗; the third is TRUSTING THE SLANT ✗; the fourth is EXPECTING LEFT AND RIGHT TO DIFFER when the height is identical both ways ✗.)',
    },
    {
      q: 'Two nails are hammered into a wall at the same height, and a hook slides along a straight rail higher up that is parallel to the line through the nails. A string is stretched around the two nails and the hook, outlining a triangle. Which statement is true as the hook slides?',
      choices: [
        'The triangle has its biggest area when the hook is exactly above the midpoint between the nails',
        'The area of the triangle is unchanged, no matter where the hook stops',
        'The area shrinks as the hook nears an end of the rail',
        'Both the area and the perimeter of the triangle stay fixed',
      ],
      answer: 1,
      solution:
        'The nail-to-nail segment is the base, and the height is the distance from the rail down to the line through the nails — constant, because the rail is parallel to that line. With base and height both fixed, $\\frac{1}{2}bh$ gives one unchanging area wherever the hook stops ✓. Check a second, independent way by sliding in your head from any spot to any other: at every instant the base has not moved and the height has not moved, so no instant can change the area — a quantity that never changes along the way ends where it began ✓. The string, on the other hand, must lengthen as the hook slides far to one side. (The first choice is FAVORING THE SYMMETRIC POSITION, which only looks special ✗; the third is EXPECTING THE ENDS TO PINCH THE TRIANGLE ✗; the fourth is SMUGGLING THE PERIMETER IN — the string length changes even though the area does not ✗.)',
    },
  ],
  // s5 — a diagonal cuts a parallelogram into two equal halves.
  [
    {
      q: 'A tabletop is built in the shape of a parallelogram with area $74$. A carpenter saws it along one of its diagonals into two triangular leaves. What is the area of each leaf?',
      choices: ['$74$', '$37$', '$148$', '$18.5$'],
      answer: 1,
      solution:
        'A diagonal of a parallelogram cuts it into two congruent triangles: opposite sides of a parallelogram are equal, and the diagonal is shared, so the two triangles match side for side for side and must have equal areas. Each leaf is $\\frac{1}{2} \\cdot 74 = 37$ ✓. Check a second, independent way through the formulas: the parallelogram measures $bh$, while each triangle stands on the same base with the same height and measures $\\frac{1}{2}bh$ — half by construction. And the guard: the two leaves rebuild the top, $37 + 37 = 74$ ✓. (The choice $148$ is DOUBLING INSTEAD OF HALVING ✗; $18.5$ is HALVING TWICE, as if each triangle were then halved again ✗; $74$ is ANSWERING THE WHOLE AREA ✗.)',
    },
    {
      q: 'Parallelogram $JKLM$ has area $48$, and diagonal $JL$ is drawn. What is $[JKL]$?',
      choices: ['$96$', '$12$', '$24$', '$48$'],
      answer: 2,
      solution:
        'The diagonal $JL$ splits the parallelogram into triangles $JKL$ and $JLM$. Sides $JK$ and $LM$ are equal, sides $KL$ and $MJ$ are equal, and $JL$ belongs to both triangles — three matching sides, so the triangles are congruent and split the area evenly: $[JKL] = \\frac{1}{2} \\cdot 48 = 24$ ✓. Check a second, independent way by base and height: triangle $JKL$ stands on base $JK$ with the full height of the parallelogram above it, so $[JKL] = \\frac{1}{2}bh$ while the parallelogram is $bh = 48$ — half of $48$ is $24$, and $24 + 24 = 48$ rebuilds the whole ✓. (The choice $96$ is DOUBLING INSTEAD OF HALVING ✗; $12$ is HALVING TWICE ✗; $48$ is ANSWERING THE WHOLE AREA ✗.)',
    },
    {
      q: 'A parallelogram-shaped sticker of area $86$ is cut along a diagonal into two triangles. What is the area of each triangle?',
      choices: ['$86$', '$21.5$', '$172$', '$43$'],
      answer: 3,
      solution:
        'Fold the sticker along the cut: opposite sides of a parallelogram are equal and the diagonal is shared, so the two triangles are congruent copies of each other, and congruent shapes have equal areas. Each triangle takes half: $\\frac{1}{2} \\cdot 86 = 43$ ✓. Check a second, independent way with the formulas: each triangle uses the parallelogram’s own base and its own height, so it measures $\\frac{1}{2}bh$ against the parallelogram’s $bh = 86$ — exactly half, and the tiling guard $43 + 43 = 86$ closes the check ✓. (The choice $172$ is DOUBLING INSTEAD OF HALVING ✗; $21.5$ is HALVING TWICE ✗; $86$ is ANSWERING THE WHOLE AREA, the sticker before the cut ✗.)',
    },
  ],
  // s6 — a diagonal splits a quadrilateral; add the two triangle areas.
  [
    {
      q: 'In quadrilateral $WXYZ$ shown, diagonal $WY$ splits it into two triangles with $[WXY] = 19$ and $[WYZ] = 28$. What is the area of quadrilateral $WXYZ$?',
      fig: {
        view: [-1.5, -5.5, 10.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 5], [9, 1], [6, -4]], fill: false },
          { t: 'seg', a: [0, 0], b: [9, 1], dash: true },
          { t: 'point', p: [0, 0], label: 'W', dx: -10, dy: 0 },
          { t: 'point', p: [4, 5], label: 'X', dx: 0, dy: -12 },
          { t: 'point', p: [9, 1], label: 'Y', dx: 12, dy: 0 },
          { t: 'point', p: [6, -4], label: 'Z', dx: 0, dy: 14 },
        ],
      },
      choices: ['$47$', '$9$', '$23.5$', '$56$'],
      answer: 0,
      solution:
        'The diagonal $WY$ tiles the quadrilateral with two triangles — together they cover everything, and they overlap nowhere — so the areas simply add: $[WXYZ] = 19 + 28 = 47$ ✓. Check a second, independent way by running the split backwards: removing triangle $WXY$ from a $47$-unit quadrilateral must leave $47 - 19 = 28$, which is $[WYZ]$ ✓, and removing $WYZ$ leaves $47 - 28 = 19$ ✓ — the only printed candidate whose two gaps rebuild both given pieces. (The choice $9$ is SUBTRACTING THE PIECES, $28 - 19$ ✗; $23.5$ is AVERAGING THE PIECES ✗; $56$ is DOUBLING ONE PIECE, $2 \\cdot 28$ ✗.)',
    },
    {
      q: 'Diagonal $KM$ of quadrilateral $KLMN$ shown cuts it into triangle $KLM$ with area $14$ and triangle $KMN$ with area $19$. What is $[KLMN]$?',
      fig: {
        view: [-1.5, -6.5, 11.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 4], [10, 0], [4, -5]], fill: false },
          { t: 'seg', a: [0, 0], b: [10, 0], dash: true },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: 0 },
          { t: 'point', p: [5, 4], label: 'L', dx: 0, dy: -12 },
          { t: 'point', p: [10, 0], label: 'M', dx: 12, dy: 0 },
          { t: 'point', p: [4, -5], label: 'N', dx: 0, dy: 14 },
        ],
      },
      choices: ['$5$', '$33$', '$16.5$', '$38$'],
      answer: 1,
      solution:
        'Cutting along the diagonal is the standard first move for any quadrilateral: triangles $KLM$ and $KMN$ share the cut $KM$, cover all of $KLMN$ between them, and overlap only along the cut itself, which has no area. So $[KLMN] = 14 + 19 = 33$ ✓. Check a second, independent way with the complement: a total of $33$ must give back each piece when the other is removed, and indeed $33 - 14 = 19$ ✓ and $33 - 19 = 14$ ✓ — both restorations succeed at once, which no other choice manages. (The choice $5$ is SUBTRACTING THE PIECES ✗; $16.5$ is AVERAGING THE PIECES ✗; $38$ is DOUBLING ONE PIECE, $2 \\cdot 19$ ✗.)',
    },
    {
      q: 'A four-sided plot of land $ABCD$ is divided by a straight fence along diagonal $BD$, as shown. The two triangular fields measure $[ABD] = 22$ and $[BCD] = 29$. How much area does the whole plot enclose?',
      fig: {
        view: [-1.5, -5.5, 11.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 5], [10, 2], [7, -4]], fill: false },
          { t: 'seg', a: [3, 5], b: [7, -4], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 0 },
          { t: 'point', p: [3, 5], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [10, 2], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [7, -4], label: 'D', dx: 0, dy: 14 },
        ],
      },
      choices: ['$7$', '$25.5$', '$51$', '$44$'],
      answer: 2,
      solution:
        'The fence along $BD$ splits the plot into the two triangular fields with nothing left over and nothing counted twice, so the plot is their sum: $[ABCD] = 22 + 29 = 51$ ✓. Check a second, independent way by walking the fence the other direction: whichever field you subtract from the total must leave the other, and $51 - 22 = 29$ ✓ while $51 - 29 = 22$ ✓ — the candidate passes both removals. (The choice $7$ is SUBTRACTING THE PIECES, $29 - 22$ ✗; $25.5$ is AVERAGING THE PIECES, splitting the difference instead of adding ✗; $44$ is DOUBLING ONE PIECE, $2 \\cdot 22$ ✗.)',
    },
  ],
  // s7 — D on the side; the near piece as a fraction of the whole.
  [
    {
      q: 'In the triangle shown, $P$ lies on $YZ$ with $YP = 3$ and $PZ = 7$, and $[XYZ] = 50$. What is $[XYP]$?',
      fig: {
        view: [-1.5, -1.5, 11.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [4, 6]] },
          { t: 'seg', a: [4, 6], b: [3, 0] },
          { t: 'seg', a: [4, 6], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [4, 6], to: [10, 0] },
          { t: 'point', p: [0, 0], label: 'Y', dx: -10, dy: 12 },
          { t: 'point', p: [10, 0], label: 'Z', dx: 10, dy: 12 },
          { t: 'point', p: [4, 6], label: 'X', dx: 0, dy: -12 },
          { t: 'point', p: [3, 0], label: 'P', dx: -4, dy: 14 },
          { t: 'label', p: [1.5, -0.6], text: '3' },
          { t: 'label', p: [6.5, -0.6], text: '7' },
        ],
      },
      choices: ['$35$', '$25$', '$15$', '$47$'],
      answer: 2,
      solution:
        'Triangle $XYP$ shares the height from $X$ with the whole triangle, so it claims the fraction $\\frac{YP}{YZ} = \\frac{3}{10}$ of the total: $[XYP] = \\frac{3}{10} \\cdot 50 = 15$ ✓. Check a second, independent way through the other piece: $[XPZ] = \\frac{7}{10} \\cdot 50 = 35$, and what the far piece leaves behind is $50 - 35 = 15$ ✓ — two different fractions, one leftover, same answer. (The choice $35$ is ANSWERING THE OTHER PIECE, the one on base $PZ$ ✗; $25$ is HALVING THE WHOLE, as if $P$ were the midpoint of $YZ$ ✗; $47$ is SUBTRACTING A LENGTH FROM AN AREA, $50 - 3$, which mixes units that cannot meet ✗.)',
    },
    {
      q: 'Point $G$ lies on side $EF$ of triangle $DEF$ with $EG = 2$ and $GF = 3$. If $[DEF] = 45$, what is $[DEG]$?',
      fig: {
        view: [-1.5, -1.5, 6.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [5, 0], [1.5, 4]] },
          { t: 'seg', a: [1.5, 4], b: [2, 0] },
          { t: 'seg', a: [1.5, 4], b: [1.5, 0], dash: true },
          { t: 'right', at: [1.5, 0], from: [1.5, 4], to: [5, 0] },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 12 },
          { t: 'point', p: [5, 0], label: 'F', dx: 10, dy: 12 },
          { t: 'point', p: [1.5, 4], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [2, 0], label: 'G', dx: 4, dy: 14 },
          { t: 'label', p: [1, -0.6], text: '2' },
          { t: 'label', p: [3.5, -0.6], text: '3' },
        ],
      },
      choices: ['$27$', '$30$', '$22.5$', '$18$'],
      answer: 3,
      solution:
        'The little triangle $DEG$ and the whole triangle $DEF$ use the same height from $D$, so the little one takes the fraction of the area that its base takes of $EF$: $\\frac{EG}{EF} = \\frac{2}{5}$, and $[DEG] = \\frac{2}{5} \\cdot 45 = 18$ ✓. Check a second, independent way via the complementary piece: $[DGF] = \\frac{3}{5} \\cdot 45 = 27$, so the piece on $EG$ must be $45 - 27 = 18$ ✓. (The choice $27$ is ANSWERING THE OTHER PIECE ✗; $22.5$ is HALVING THE WHOLE, treating $G$ as a midpoint when the bases are plainly $2$ and $3$ ✗; $30$ is RATIO AGAINST THE WRONG BASE, computing $\\frac{2}{3}$ of $45$ with $GF$ in the denominator instead of all of $EF$ ✗.)',
    },
    {
      q: 'A triangular banner $PQR$ has a seam from corner $P$ to a point $K$ on edge $QR$, with $QK = 5$ and $KR = 7$, as shown. The whole banner has area $60$. What is the area of piece $PQK$?',
      fig: {
        view: [-1.5, -1.5, 13.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [4, 7]] },
          { t: 'seg', a: [4, 7], b: [5, 0] },
          { t: 'seg', a: [4, 7], b: [4, 0], dash: true },
          { t: 'right', at: [4, 0], from: [4, 7], to: [12, 0] },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 12 },
          { t: 'point', p: [12, 0], label: 'R', dx: 10, dy: 12 },
          { t: 'point', p: [4, 7], label: 'P', dx: 0, dy: -12 },
          { t: 'point', p: [5, 0], label: 'K', dx: 4, dy: 14 },
          { t: 'label', p: [2.5, -0.6], text: '5' },
          { t: 'label', p: [8.5, -0.6], text: '7' },
        ],
      },
      choices: ['$25$', '$35$', '$30$', '$55$'],
      answer: 0,
      solution:
        'Both pieces of the banner hang from the same corner $P$, so they share $P$’s height and split the area exactly as $K$ splits the edge: $QK : KR = 5 : 7$ means the whole $60$ divides into $5 + 7 = 12$ shares of $5$ each, and piece $PQK$ takes the $5$ shares: $5 \\cdot 5 = 25$ ✓. Check a second, independent way from the far side: $[PKR] = \\frac{7}{12} \\cdot 60 = 35$, and the seam leaves $60 - 35 = 25$ for the other piece ✓. (The choice $35$ is ANSWERING THE OTHER PIECE ✗; $30$ is HALVING THE WHOLE, though the seam is not a median ✗; $55$ is SUBTRACTING A LENGTH FROM AN AREA, $60 - 5$ ✗.)',
    },
  ],
  // s8 — trapezoid: triangles on the same parallel base pair have equal areas.
  [
    {
      q: 'In trapezoid $ABCD$ shown, $AB$ is parallel to $DC$ and both diagonals are drawn. If $[ABD] = 27$, what is $[ABC]$?',
      fig: {
        view: [-1.5, -1.5, 10.5, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [7, 4], [2, 4]], fill: false },
          { t: 'seg', a: [0, 0], b: [7, 4] },
          { t: 'seg', a: [9, 0], b: [2, 4] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 12 },
          { t: 'point', p: [9, 0], label: 'B', dx: 10, dy: 12 },
          { t: 'point', p: [7, 4], label: 'C', dx: 8, dy: -10 },
          { t: 'point', p: [2, 4], label: 'D', dx: -8, dy: -10 },
          { t: 'label', p: [4.5, -0.7], text: '9' },
        ],
      },
      choices: ['$54$', '$13.5$', 'It cannot be determined', '$27$'],
      answer: 3,
      solution:
        'Triangles $ABD$ and $ABC$ stand on the same base $AB$, and their apexes $D$ and $C$ both ride line $DC$, which is parallel to $AB$ — so the two apexes share one height, and $[ABC] = [ABD] = 27$ ✓. Check a second, independent way from the OTHER pair of parallel sides: triangles $ACD$ and $BCD$ stand on base $DC$ with apexes $A$ and $B$ on the parallel line $AB$, so $[ACD] = [BCD]$. The trapezoid tiles two ways, $[ABD] + [BCD] = [ABC] + [ACD]$, and canceling the equal pair leaves $[ABC] = [ABD] = 27$ ✓ — the top base proves what the bottom base claimed. (The choice $54$ is DOUBLING ✗; $13.5$ is HALVING ✗; "It cannot be determined" is DEMANDING MORE INFORMATION the parallel sides already provide ✗.)',
    },
    {
      q: 'Trapezoid $WXYZ$ shown has $WX$ parallel to $ZY$, with diagonals $WY$ and $XZ$ drawn. If $[WXZ] = 31$, what is $[WXY]$?',
      fig: {
        view: [-1.5, -1.5, 12.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [9, 5], [3, 5]], fill: false },
          { t: 'seg', a: [0, 0], b: [9, 5] },
          { t: 'seg', a: [11, 0], b: [3, 5] },
          { t: 'point', p: [0, 0], label: 'W', dx: -10, dy: 12 },
          { t: 'point', p: [11, 0], label: 'X', dx: 10, dy: 12 },
          { t: 'point', p: [9, 5], label: 'Y', dx: 8, dy: -10 },
          { t: 'point', p: [3, 5], label: 'Z', dx: -8, dy: -10 },
          { t: 'label', p: [5.5, -0.7], text: '11' },
        ],
      },
      choices: ['$62$', '$31$', '$15.5$', 'It cannot be determined'],
      answer: 1,
      solution:
        'Both triangles grow from the same base $WX$, and their apexes $Z$ and $Y$ sit on line $ZY$, parallel to $WX$ — a parallel line holds every one of its points at the same distance from $WX$. Same base, same height: $[WXY] = [WXZ] = 31$ ✓. Check a second, independent way by sliding: carry the apex from $Z$ along the top side to $Y$; at every moment of the slide the base is untouched and the height is the fixed gap between the parallels, so the area cannot change en route, and it arrives at $Y$ still worth $31$ ✓. (The choice $62$ is DOUBLING ✗; $15.5$ is HALVING ✗; "It cannot be determined" is DEMANDING MORE INFORMATION, though parallelism already locks the height ✗.)',
    },
    {
      q: 'In trapezoid $JKLM$ shown, $JK$ is parallel to $ML$ and the two segments $JL$ and $KM$ are drawn. If $[JKM] = 29$, what is $[JKL]$?',
      fig: {
        view: [-1.5, -1.5, 9.5, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [6.5, 3.5], [1.5, 3.5]], fill: false },
          { t: 'seg', a: [0, 0], b: [6.5, 3.5] },
          { t: 'seg', a: [8, 0], b: [1.5, 3.5] },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 12 },
          { t: 'point', p: [8, 0], label: 'K', dx: 10, dy: 12 },
          { t: 'point', p: [6.5, 3.5], label: 'L', dx: 8, dy: -10 },
          { t: 'point', p: [1.5, 3.5], label: 'M', dx: -8, dy: -10 },
          { t: 'label', p: [4, -0.7], text: '8' },
        ],
      },
      choices: ['$29$', '$58$', 'It cannot be determined', '$14.5$'],
      answer: 0,
      solution:
        'Triangles $JKM$ and $JKL$ share base $JK$, and their apexes $M$ and $L$ lie on side $ML$, which runs parallel to $JK$ — so each apex stands the same height above the base, and $[JKL] = [JKM] = 29$ ✓. Check a second, independent way using the top side instead: $[JML]$ and $[KML]$ stand on base $ML$ with apexes $J$ and $K$ on the parallel line $JK$, so they are equal; since $[JKM] + [KML]$ and $[JKL] + [JML]$ each fill the trapezoid, canceling the equal pair forces $[JKL] = [JKM] = 29$ ✓. (The choice $58$ is DOUBLING ✗; $14.5$ is HALVING ✗; "It cannot be determined" is DEMANDING MORE INFORMATION that the parallel sides already gave ✗.)',
    },
  ],
  // s9 — centroid: the triangle on one side is a third of the whole.
  [
    {
      q: 'The three medians of triangle $DEF$ shown meet at the point $P$, and $[DEF] = 54$. What is $[PEF]$?',
      fig: {
        view: [-1.5, -1.5, 11.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [2, 6]] },
          { t: 'seg', a: [2, 6], b: [5, 0] },
          { t: 'seg', a: [0, 0], b: [6, 3] },
          { t: 'seg', a: [10, 0], b: [1, 3] },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 12 },
          { t: 'point', p: [10, 0], label: 'F', dx: 10, dy: 12 },
          { t: 'point', p: [2, 6], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [4, 2], label: 'P', dx: 8, dy: -8 },
        ],
      },
      choices: ['$18$', '$27$', '$13.5$', '$9$'],
      answer: 0,
      solution:
        'Joining the point where the medians meet to the three vertices carves the triangle into three pieces of EQUAL area, so each piece — $[PEF]$ included — is one third of the whole: $\\frac{54}{3} = 18$ ✓. Check a second, independent way through heights: the medians meet one third of the way up each median, so $P$ floats at one third of $D$’s height above $EF$; then $[PEF] = \\frac{1}{2} \\cdot EF \\cdot \\frac{h}{3}$, exactly a third of $\\frac{1}{2} \\cdot EF \\cdot h = 54$, giving $18$ again ✓. Guard: $18 + 18 + 18 = 54$ ✓. (The choice $27$ is HALVING AT THE MEDIAN, the reflex from the midpoint problems ✗; $13.5$ is QUARTERING ✗; $9$ is ANSWERING A SIXTH — the six SMALL median triangles have that area, not the piece on $EF$ ✗.)',
    },
    {
      q: 'In triangle $XYZ$ shown, the three medians meet at the centroid $G$ and $[XYZ] = 39$. What is $[GYZ]$?',
      fig: {
        view: [-1.5, -1.5, 10.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [3, 6]] },
          { t: 'seg', a: [3, 6], b: [4.5, 0] },
          { t: 'seg', a: [0, 0], b: [6, 3] },
          { t: 'seg', a: [9, 0], b: [1.5, 3] },
          { t: 'point', p: [0, 0], label: 'Y', dx: -10, dy: 12 },
          { t: 'point', p: [9, 0], label: 'Z', dx: 10, dy: 12 },
          { t: 'point', p: [3, 6], label: 'X', dx: 0, dy: -12 },
          { t: 'point', p: [4, 2], label: 'G', dx: 8, dy: -8 },
        ],
      },
      choices: ['$19.5$', '$6.5$', '$13$', '$26$'],
      answer: 2,
      solution:
        'The segments from the centroid to the three vertices split any triangle into three equal-area pieces, so the piece resting on $YZ$ holds one third: $[GYZ] = \\frac{39}{3} = 13$ ✓. Check a second, independent way by naming the other pieces: $[GZX]$ and $[GXY]$ each equal $[GYZ]$, so calling the common value $x$ gives $3x = 39$ and $x = 13$ ✓ — an equation built from the tiling, not from a division rule. Behind the scenes the centroid sits one third of the way up from every side, which is why no piece can outgrow another. (The choice $19.5$ is HALVING AT THE MEDIAN ✗; $6.5$ is ANSWERING A SIXTH, the area of one of the six small median triangles ✗; $26$ is TAKING TWO THIRDS, the share of the OTHER two pieces combined ✗.)',
    },
    {
      q: 'The three medians of triangle $KLM$ shown cross at the single point $T$, and $[KLM] = 66$. What is $[TKL]$?',
      fig: {
        view: [-1.5, -1.5, 12.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [11, 0], [4, 6]] },
          { t: 'seg', a: [4, 6], b: [5.5, 0] },
          { t: 'seg', a: [0, 0], b: [7.5, 3] },
          { t: 'seg', a: [11, 0], b: [2, 3] },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: 12 },
          { t: 'point', p: [11, 0], label: 'L', dx: 10, dy: 12 },
          { t: 'point', p: [4, 6], label: 'M', dx: 0, dy: -12 },
          { t: 'point', p: [5, 2], label: 'T', dx: 8, dy: -8 },
        ],
      },
      choices: ['$33$', '$11$', '$44$', '$22$'],
      answer: 3,
      solution:
        'Connecting $T$ — the meeting point of the medians — to the vertices divides triangle $KLM$ into three pieces of equal area, so $[TKL] = \\frac{66}{3} = 22$ ✓. Check a second, independent way with heights: $T$ rides each median one third of the way from the side toward the opposite vertex, so its height above $KL$ is $\\frac{h}{3}$ where $h$ is $M$’s height. Then $[TKL] = \\frac{1}{2} \\cdot KL \\cdot \\frac{h}{3} = \\frac{1}{3}[KLM] = 22$ ✓, and the guard $22 \\cdot 3 = 66$ closes it. (The choice $33$ is HALVING AT THE MEDIAN, importing the midpoint rule where it does not belong ✗; $11$ is ANSWERING A SIXTH ✗; $44$ is TAKING TWO THIRDS — the rest of the triangle, not the piece asked for ✗.)',
    },
  ],
  // s10 — midpoint chain: quarter the area with two medians.
  [
    {
      q: 'In triangle $GHJ$ shown, $K$ is the midpoint of $HJ$ and $L$ is the midpoint of $GK$. If $[GHJ] = 32$, what is $[GHL]$?',
      fig: {
        view: [-1.5, -1.5, 11.5, 7.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [3, 6]] },
          { t: 'seg', a: [3, 6], b: [5, 0] },
          { t: 'seg', a: [0, 0], b: [4, 3] },
          { t: 'tick', a: [0, 0], b: [5, 0], n: 1 },
          { t: 'tick', a: [5, 0], b: [10, 0], n: 1 },
          { t: 'tick', a: [3, 6], b: [4, 3], n: 2 },
          { t: 'tick', a: [4, 3], b: [5, 0], n: 2 },
          { t: 'point', p: [0, 0], label: 'H', dx: -10, dy: 12 },
          { t: 'point', p: [10, 0], label: 'J', dx: 10, dy: 12 },
          { t: 'point', p: [3, 6], label: 'G', dx: 0, dy: -12 },
          { t: 'point', p: [5, 0], label: 'K', dx: 0, dy: 14 },
          { t: 'point', p: [4, 3], label: 'L', dx: 10, dy: 0 },
        ],
      },
      choices: ['$16$', '$4$', '$8$', '$32$'],
      answer: 2,
      solution:
        'Halve twice. The median $GK$ splits triangle $GHJ$ evenly, so $[GHK] = \\frac{1}{2} \\cdot 32 = 16$. Inside triangle $GHK$, the segment $HL$ runs to the midpoint of side $GK$ — a median of THAT triangle — so it halves again: $[GHL] = \\frac{1}{2} \\cdot 16 = 8$ ✓. Check a second, independent way by naming all the pieces: the two segments cut $GHJ$ into $[GHL]$, $[HLK]$, and $[GKJ]$. The median $HL$ makes the first two equal, say $x$ each, and $[GKJ] = 16$; then $x + x + 16 = 32$ forces $x = 8$ ✓ — an equation, not a chain of halvings. (The choice $16$ is STOPPING AFTER ONE HALVING ✗; $4$ is HALVING A THIRD TIME ✗; $32$ is ANSWERING THE WHOLE AREA ✗.)',
    },
    {
      q: 'In triangle $DEF$ shown, $M$ is the midpoint of $EF$ and $N$ is the midpoint of $DM$. If $[DEF] = 48$, what is $[DEN]$?',
      fig: {
        view: [-1.5, -1.5, 10.5, 6.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [2, 5]] },
          { t: 'seg', a: [2, 5], b: [4.5, 0] },
          { t: 'seg', a: [0, 0], b: [3.25, 2.5] },
          { t: 'tick', a: [0, 0], b: [4.5, 0], n: 1 },
          { t: 'tick', a: [4.5, 0], b: [9, 0], n: 1 },
          { t: 'tick', a: [2, 5], b: [3.25, 2.5], n: 2 },
          { t: 'tick', a: [3.25, 2.5], b: [4.5, 0], n: 2 },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 12 },
          { t: 'point', p: [9, 0], label: 'F', dx: 10, dy: 12 },
          { t: 'point', p: [2, 5], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [4.5, 0], label: 'M', dx: 0, dy: 14 },
          { t: 'point', p: [3.25, 2.5], label: 'N', dx: 10, dy: 0 },
        ],
      },
      choices: ['$24$', '$12$', '$6$', '$48$'],
      answer: 1,
      solution:
        'Two medians, two halvings. First, $DM$ is a median of triangle $DEF$, so $[DEM] = \\frac{1}{2} \\cdot 48 = 24$. Second, inside triangle $DEM$ the segment $EN$ reaches the midpoint of $DM$, so $EN$ is a median there and $[DEN] = \\frac{1}{2} \\cdot 24 = 12$ ✓. Check a second, independent way with a tiling equation: the cuts split $DEF$ into $[DEN]$, $[ENM]$, and $[DMF]$, where $[DEN] = [ENM] = x$ (equal halves of $DEM$) and $[DMF] = 24$. Then $x + x + 24 = 48$, so $x = 12$ ✓. (The choice $24$ is STOPPING AFTER ONE HALVING ✗; $6$ is HALVING A THIRD TIME, reaching an eighth ✗; $48$ is ANSWERING THE WHOLE AREA ✗.)',
    },
    {
      q: 'In triangle $XYZ$ shown, $W$ is the midpoint of $YZ$ and $V$ is the midpoint of $XW$. If $[XYZ] = 56$, what is $[XYV]$?',
      fig: {
        view: [-1.5, -1.5, 13.5, 8.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [4, 7]] },
          { t: 'seg', a: [4, 7], b: [6, 0] },
          { t: 'seg', a: [0, 0], b: [5, 3.5] },
          { t: 'tick', a: [0, 0], b: [6, 0], n: 1 },
          { t: 'tick', a: [6, 0], b: [12, 0], n: 1 },
          { t: 'tick', a: [4, 7], b: [5, 3.5], n: 2 },
          { t: 'tick', a: [5, 3.5], b: [6, 0], n: 2 },
          { t: 'point', p: [0, 0], label: 'Y', dx: -10, dy: 12 },
          { t: 'point', p: [12, 0], label: 'Z', dx: 10, dy: 12 },
          { t: 'point', p: [4, 7], label: 'X', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'W', dx: 0, dy: 14 },
          { t: 'point', p: [5, 3.5], label: 'V', dx: 10, dy: 0 },
        ],
      },
      choices: ['$28$', '$7$', '$42$', '$14$'],
      answer: 3,
      solution:
        'Stack the median fact. The median $XW$ halves the big triangle: $[XYW] = \\frac{1}{2} \\cdot 56 = 28$. Then, inside triangle $XYW$, the segment $YV$ runs to the midpoint of $XW$ — a median of the smaller triangle — and halves it too: $[XYV] = \\frac{1}{2} \\cdot 28 = 14$ ✓. Check a second, independent way by accounting for every piece: the two segments carve $XYZ$ into $[XYV] = [YVW] = x$ (twin halves of $XYW$) plus $[XWZ] = 28$, and $x + x + 28 = 56$ delivers $x = 14$ ✓ — the quarters have nowhere to hide. (The choice $28$ is STOPPING AFTER ONE HALVING ✗; $7$ is HALVING A THIRD TIME ✗; $42$ is TAKING THE COMPLEMENT, reporting the three pieces left behind instead of the one asked for ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 4,
  sections: {
    '4.3': s43,
  },
}
