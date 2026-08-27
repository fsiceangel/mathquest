// Introduction to Geometry chapter 10 — variations for section 10.3 (The Triangle Inequality).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed value was worked twice by routes that do not share arithmetic:
//    the |a - b| < c < a + b window against the three separate inequalities,
//    a counting formula against an explicit list, a shortest-two check against
//    an endpoint test. Both routes must agree before a key is written down.
//  - Triangles are drawn with the longer given side on the x-axis and the apex
//    placed by a Pythagorean decomposition, so every labeled side length is
//    exact (for example, an apex at (2.52, 8.64) really is 9 from the origin).
//    Path figures use 3-4-5-family legs so each labeled distance is exact.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution: closed-vs-open interval, counting endpoints, adding instead of
//    subtracting for the lower bound, checking the wrong pair of sides.

const s103 = [
  // s1 — which triple can be the sides of a triangle.
  [
    {
      q: 'A carpenter saws braces to the lengths listed below. Which set of three braces could be joined end to end into a triangular truss?',
      choices: ['$4$, $7$, $12$', '$3$, $9$, $12$', '$6$, $7$, $12$', '$2$, $4$, $13$'],
      answer: 2,
      solution:
        'Test the two shortest braces against the longest each time: only $6$, $7$, $12$ passes, since $6 + 7 = 13 > 12$ ✓. Confirm the winner a second way by writing out all three inequalities: $6 + 12 = 18 > 7$ ✓ and $7 + 12 = 19 > 6$ ✓, so every pair beats its third side. (The triple $4$, $7$, $12$ has $4 + 7 = 11 < 12$, a SUM TOO SMALL to reach across ✗; $3$, $9$, $12$ has $3 + 9 = 12$ exactly, a FLAT, zero-area figure — EQUALITY DOES NOT COUNT ✗; $2$, $4$, $13$ fails wildly, with $2 + 4 = 6$ not even half of $13$ ✗.)',
    },
    {
      q: 'Three steel rods are to be welded tip to tip into a triangular bicycle frame. Which set of rod lengths makes a genuine triangle?',
      choices: ['$4$, $8$, $11$', '$5$, $6$, $11$', '$1$, $3$, $10$', '$4$, $6$, $11$'],
      answer: 0,
      solution:
        'Run the shortest-two check on each set: $4 + 8 = 12 > 11$ ✓, so $4$, $8$, $11$ works. Double-check it with the full list of inequalities: $4 + 11 = 15 > 8$ ✓ and $8 + 11 = 19 > 4$ ✓ — all three pairs pass. (The set $5$, $6$, $11$ has $5 + 6 = 11$ exactly: the rods lie FLAT along the long one, and EQUALITY IS NOT ENOUGH ✗; $4$, $6$, $11$ has $4 + 6 = 10 < 11$, a SUM TOO SMALL ✗; $1$, $3$, $10$ misses by a mile, since $1 + 3 = 4$ is nowhere near $10$ ✗.)',
    },
    {
      q: 'A landscaper is edging a triangular flower bed with three straight timbers. Which trio of timber lengths could form the border?',
      choices: ['$3$, $7$, $11$', '$4$, $7$, $11$', '$2$, $3$, $14$', '$3$, $9$, $11$'],
      answer: 3,
      solution:
        'Check the two shortest timbers against the longest: $3 + 9 = 12 > 11$ ✓, so $3$, $9$, $11$ closes up into a real triangle. Verify with the other two inequalities: $3 + 11 = 14 > 9$ ✓ and $9 + 11 = 20 > 3$ ✓. (The trio $3$, $7$, $11$ has $3 + 7 = 10 < 11$, a SUM TOO SMALL ✗; $4$, $7$, $11$ has $4 + 7 = 11$ exactly — the timbers lie FLAT with no area, and the inequality must be STRICT ✗; $2$, $3$, $14$ fails wildly, $2 + 3 = 5$ against $14$ ✗.)',
    },
  ],
  // s2 — the open window for the third side (figure).
  [
    {
      q: 'Two sides of a triangle have lengths $9$ and $13$. Which describes all possible lengths $c$ of the third side?',
      fig: {
        view: [-1.4, -1.2, 14.4, 9.8],
        elems: [
          { t: 'seg', a: [0, 0], b: [13, 0] },
          { t: 'seg', a: [0, 0], b: [2.52, 8.64] },
          { t: 'seg', a: [13, 0], b: [2.52, 8.64], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [13, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [2.52, 8.64], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [6.5, 0], text: '13', dx: 0, dy: 14 },
          { t: 'label', p: [1.26, 4.32], text: '9', dx: -12, dy: 0 },
          { t: 'label', p: [7.76, 4.32], text: 'c', dx: 12, dy: -6 },
        ],
      },
      choices: ['$4 \\le c \\le 22$', '$9 < c < 13$', '$4 < c < 22$', '$0 < c < 22$'],
      answer: 2,
      solution:
        'The third side must beat the difference and stay under the sum: $13 - 9 < c < 13 + 9$, so $4 < c < 22$ ✓. Rebuild the window from the separate inequalities: $c + 9 > 13$ forces $c > 4$, and $9 + 13 > c$ forces $c < 22$ — both strict ✓. (The choice $4 \\le c \\le 22$ is a CLOSED INTERVAL: at $c = 4$ or $c = 22$ the sides lie flat with zero area ✗; $9 < c < 13$ assumes the third side must sit BETWEEN THE TWO GIVEN SIDES, but $c = 6$ works fine since $6 + 9 = 15 > 13$ ✗; $0 < c < 22$ DROPS THE LOWER BOUND, yet a side of length $2$ could never reach across ✗.)',
    },
    {
      q: 'In the triangle shown, two of the sides measure $8$ and $11$. Which describes every possible length $c$ of the remaining side?',
      fig: {
        view: [-1.3, -1.2, 12.2, 8.8],
        elems: [
          { t: 'seg', a: [0, 0], b: [11, 0] },
          { t: 'seg', a: [0, 0], b: [2.24, 7.68] },
          { t: 'seg', a: [11, 0], b: [2.24, 7.68], dash: true },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 8 },
          { t: 'point', p: [11, 0], label: 'Q', dx: 10, dy: 8 },
          { t: 'point', p: [2.24, 7.68], label: 'R', dx: 0, dy: -12 },
          { t: 'label', p: [5.5, 0], text: '11', dx: 0, dy: 14 },
          { t: 'label', p: [1.12, 3.84], text: '8', dx: -12, dy: 0 },
          { t: 'label', p: [6.62, 3.84], text: 'c', dx: 12, dy: -6 },
        ],
      },
      choices: ['$3 \\le c \\le 19$', '$3 < c < 19$', '$8 < c < 11$', '$0 < c < 19$'],
      answer: 1,
      solution:
        'Difference and sum bracket the third side: $11 - 8 < c < 11 + 8$, so $3 < c < 19$ ✓. Check it inequality by inequality: $c + 8 > 11$ gives $c > 3$, and $8 + 11 > c$ gives $c < 19$, with both endpoints excluded ✓. (The choice $3 \\le c \\le 19$ is the CLOSED-INTERVAL trap — at either endpoint the triangle collapses flat ✗; $8 < c < 11$ wrongly demands the third side sit BETWEEN THE GIVEN TWO, but $c = 5$ passes every check ✗; $0 < c < 19$ FORGETS THE LOWER BOUND from the difference ✗.)',
    },
    {
      q: 'The triangle below has sides of lengths $5$ and $13$, and an unknown third side $c$. Which inequality captures exactly the possible values of $c$?',
      fig: {
        view: [-1.3, -1.2, 14.4, 5.9],
        elems: [
          { t: 'seg', a: [0, 0], b: [13, 0] },
          { t: 'seg', a: [0, 0], b: [1.4, 4.8] },
          { t: 'seg', a: [13, 0], b: [1.4, 4.8], dash: true },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 8 },
          { t: 'point', p: [13, 0], label: 'E', dx: 10, dy: 8 },
          { t: 'point', p: [1.4, 4.8], label: 'F', dx: 0, dy: -12 },
          { t: 'label', p: [6.5, 0], text: '13', dx: 0, dy: 14 },
          { t: 'label', p: [0.7, 2.4], text: '5', dx: -12, dy: 0 },
          { t: 'label', p: [7.2, 2.4], text: 'c', dx: 12, dy: -6 },
        ],
      },
      choices: ['$8 < c < 18$', '$8 \\le c \\le 18$', '$5 < c < 13$', '$0 < c < 18$'],
      answer: 0,
      solution:
        'The window runs from the difference to the sum: $13 - 5 < c < 13 + 5$, so $8 < c < 18$ ✓. Confirm from scratch: $c + 5 > 13$ forces $c > 8$, and $5 + 13 > c$ forces $c < 18$; the inequalities stay strict because $c = 8$ or $c = 18$ flattens the triangle into a segment ✓. (The choice $8 \\le c \\le 18$ CLOSES THE INTERVAL and admits the two flat cases ✗; $5 < c < 13$ pretends the third side must land BETWEEN THE GIVEN SIDES — but $c = 16$ is legal since $5 + 13 = 18 > 16$ ✗; $0 < c < 18$ keeps only the sum and FORGETS THE LOWER BOUND ✗.)',
    },
  ],
  // s3 — the degenerate (flat) case.
  [
    {
      q: 'Can segments of lengths $5$, $7$, and $12$ form a triangle?',
      choices: [
        'Yes — because $5 + 12 > 7$',
        'No — $5 + 7$ equals $12$, so the segments lie flat',
        'Yes — any three positive lengths can be bent into a triangle',
        'No — $5 + 7$ is less than $12$',
      ],
      answer: 1,
      solution:
        'The binding check is the two shortest segments against the longest: $5 + 7 = 12$, which merely EQUALS the third side instead of beating it ✓. Picture it: the $5$ and the $7$ stretch out along the $12$, their far ends just meeting its endpoints — a flat figure with zero area, not a triangle ✓. (The check $5 + 12 > 7$ tests the WRONG PAIR: it is true but never in doubt ✗; "any three lengths work" ignores the inequality entirely ✗; and $5 + 7$ is not LESS than $12$ — it is exactly equal, which is a different failure ✗.)',
    },
    {
      q: 'Marisol claims she can build a triangle out of sticks of lengths $4$, $4$, and $8$. Is she right?',
      choices: [
        'Yes — two equal sides always make an isosceles triangle',
        'Yes — because $4 + 8 > 4$',
        'No — $4 + 4$ is less than $8$',
        'No — $4 + 4$ equals $8$, so the sticks lie flat',
      ],
      answer: 3,
      solution:
        'Check the two shortest sticks against the longest: $4 + 4 = 8$ exactly, so the two short sticks lie down flat along the long one and never lift off the line — zero area, no triangle ✓. Second route, through the strictness of the inequality: a triangle needs $a + b > c$ with room to spare, and here the "$>$" fails by the thinnest possible margin, the degenerate case ✓. (Equal sides do NOT rescue it — the ISOSCELES label only applies once a triangle exists ✗; $4 + 8 > 4$ checks the WRONG PAIR ✗; and $4 + 4$ is EQUAL to $8$, not less — misreading equality as "less than" is its own mistake ✗.)',
    },
    {
      q: 'A welding student tries to join bars of lengths $7$, $8$, and $15$ into a triangular bracket. Will it close up into a triangle?',
      choices: [
        'No — $7 + 8$ equals $15$, so the figure is flat',
        'Yes — because $8 + 15 > 7$',
        'Yes — since $7 + 8 \\ge 15$',
        'No — $7 + 8$ is less than $15$',
      ],
      answer: 0,
      solution:
        'Two shortest against the longest: $7 + 8 = 15$, an exact tie. The short bars reach the ends of the long bar only by lying flat along it, so the "bracket" is a doubled-over segment, not a triangle ✓. Confirm via the strictness rule: a genuine triangle demands $7 + 8 > 15$ STRICTLY, and equality is precisely the degenerate case the rule excludes ✓. (The check $8 + 15 > 7$ uses the WRONG PAIR — the longest side needs no help ✗; "$7 + 8 \\ge 15$" swaps in a NON-STRICT inequality, which is exactly the trap ✗; and $7 + 8$ is not LESS than $15$, it is equal — a different failure than falling short ✗.)',
    },
  ],
  // s4 — counting integer third sides.
  [
    {
      q: 'Two sides of a triangle have lengths $3$ and $14$. How many integer lengths are possible for the third side?',
      choices: ['$5$', '$7$', '$6$', '$16$'],
      answer: 0,
      solution:
        'The window is $14 - 3 < c < 14 + 3$, so $11 < c < 17$. List the integers strictly inside: $12, 13, 14, 15, 16$ — five of them ✓. Count again by formula: the smallest legal integer is $11 + 1 = 12$ and the largest is $17 - 1 = 16$, giving $16 - 12 + 1 = 5$ ✓. (The answer $7$ COUNTS BOTH ENDPOINTS, but $c = 11$ and $c = 17$ each flatten the triangle ✗; $6$ COUNTS ONE ENDPOINT ✗; $16$ FORGETS THE LOWER BOUND and counts everything in $0 < c < 17$ ✗.)',
    },
    {
      q: 'A triangle has two sides of lengths $6$ and $10$. How many different integer values could its third side take?',
      choices: ['$13$', '$11$', '$15$', '$12$'],
      answer: 1,
      solution:
        'The third side lives in $10 - 6 < c < 10 + 6$, that is, $4 < c < 16$. The integers strictly inside run $5, 6, \\ldots, 15$, and $15 - 5 + 1 = 11$ ✓. Sanity-check the fence posts a second way: $c = 5$ works since $5 + 6 = 11 > 10$, and $c = 15$ works since $6 + 10 = 16 > 15$, while $c = 4$ and $c = 16$ both produce exact-equality flat figures — so the list is exactly $5$ through $15$ ✓. (The answer $13$ COUNTS BOTH ENDPOINTS ✗; $12$ COUNTS ONE ENDPOINT ✗; $15$ DROPS THE LOWER BOUND, counting all of $1, \\ldots, 15$ ✗.)',
    },
    {
      q: 'Two sides of a triangle measure $7$ and $12$. How many integer lengths could the third side have?',
      choices: ['$15$', '$14$', '$13$', '$18$'],
      answer: 2,
      solution:
        'The window is $12 - 7 < c < 12 + 7$, so $5 < c < 19$: the integers $6, 7, \\ldots, 18$, and $18 - 6 + 1 = 13$ ✓. Recount by trimming the endpoints from the closed range: $5$ through $19$ holds $15$ integers, and removing the two illegal endpoints $5$ and $19$ leaves $15 - 2 = 13$ ✓. (The answer $15$ COUNTS BOTH ENDPOINTS, but $7 + 5 = 12$ and $7 + 12 = 19$ are flat, not triangular ✗; $14$ COUNTS ONE ENDPOINT ✗; $18$ FORGETS THE LOWER BOUND and counts $1$ through $18$ ✗.)',
    },
  ],
  // s5 — counting integer third sides, stick dressing.
  [
    {
      q: 'Theo is framing a triangular kite. He has glued dowels of lengths $2$ and $6$ in place, and his bin holds one dowel of every integer length. How many different dowels from the bin could complete the frame?',
      choices: ['$5$', '$4$', '$3$', '$7$'],
      answer: 2,
      solution:
        'The closing dowel $c$ must satisfy $6 - 2 < c < 6 + 2$, so $4 < c < 8$: only $5$, $6$, and $7$ — three dowels ✓. Verify each candidate directly: $2 + 5 = 7 > 6$ ✓, $2 + 6 = 8 > 6$ ✓, $2 + 7 = 9 > 8$? — check the right pair: for $c = 7$ the longest side is $7$, and $2 + 6 = 8 > 7$ ✓; meanwhile $c = 4$ gives $2 + 4 = 6$, flat, and $c = 8$ gives $2 + 6 = 8$, flat again ✓. (The answer $5$ COUNTS BOTH ENDPOINTS ✗; $4$ COUNTS ONE ENDPOINT ✗; $7$ FORGETS THE LOWER BOUND and counts every length below $8$ ✗.)',
    },
    {
      q: 'Priya is staking a triangular pea trellis. Two bamboo stakes, of lengths $3$ and $10$, are already tied; the garden shed has stakes in every integer length. How many different shed stakes could serve as the third side?',
      choices: ['$5$', '$7$', '$6$', '$12$'],
      answer: 0,
      solution:
        'The third stake needs $10 - 3 < c < 10 + 3$, so $7 < c < 13$: the integers $8, 9, 10, 11, 12$ — five stakes ✓. Count a second way: the closed run from $7$ to $13$ holds $13 - 7 + 1 = 7$ integers, and striking the two flat endpoints ($3 + 7 = 10$ and $3 + 10 = 13$) leaves $7 - 2 = 5$ ✓. (The answer $7$ COUNTS BOTH ENDPOINTS ✗; $6$ COUNTS ONE ENDPOINT ✗; $12$ FORGETS THE LOWER BOUND and counts all of $1, \\ldots, 12$ — but a stake of length $4$ could never bridge the gap ✗.)',
    },
    {
      q: 'A chef arranges skewers into a triangle on a display board. Two skewers, of lengths $4$ and $10$, are pinned down, and the drawer holds skewers of every integer length. How many drawer skewers could close the triangle?',
      choices: ['$9$', '$13$', '$8$', '$7$'],
      answer: 3,
      solution:
        'The closing skewer satisfies $10 - 4 < c < 10 + 4$, so $6 < c < 14$: the integers $7, 8, \\ldots, 13$, which is $13 - 7 + 1 = 7$ ✓. Probe the boundary a second way: $c = 7$ passes because $4 + 7 = 11 > 10$, and $c = 13$ passes because $4 + 10 = 14 > 13$; one step further out, $c = 6$ and $c = 14$ each hit exact equality and lie flat ✓. (The answer $9$ COUNTS BOTH ENDPOINTS ✗; $8$ COUNTS ONE ENDPOINT ✗; $13$ DROPS THE LOWER BOUND, counting every skewer shorter than $14$ ✗.)',
    },
  ],
  // s6 — a detour bounds the straight-line distance (figure).
  [
    {
      q: 'Ravi paddles $1.2$ km straight from the dock to a buoy, then $0.7$ km straight from the buoy to an island. The buoy is not on the straight line from the dock to the island. What can Ravi conclude about the straight-line distance from the dock to the island?',
      fig: {
        view: [-0.35, -0.3, 1.75, 1.35],
        elems: [
          { t: 'seg', a: [0, 0], b: [0.72, 0.96] },
          { t: 'seg', a: [0.72, 0.96], b: [1.28, 0.54] },
          { t: 'seg', a: [0, 0], b: [1.28, 0.54], dash: true },
          { t: 'point', p: [0, 0], label: 'Dock', dx: 0, dy: 16 },
          { t: 'point', p: [0.72, 0.96], label: 'Buoy', dx: 0, dy: -10 },
          { t: 'point', p: [1.28, 0.54], label: 'Island', dx: 10, dy: 14 },
          { t: 'label', p: [0.36, 0.48], text: '1.2 km', dx: -22, dy: -6 },
          { t: 'label', p: [1, 0.75], text: '0.7 km', dx: 16, dy: -6 },
        ],
      },
      choices: ['It is exactly $0.5$ km', 'It is less than $1.9$ km', 'It is more than $1.9$ km', 'It is exactly $1.9$ km'],
      answer: 1,
      solution:
        'Dock, buoy, and island form a triangle, and the straight side loses to the detour: the direct distance is LESS than $1.2 + 0.7 = 1.9$ km, strictly, since the buoy is off the line ✓. The other side of the window agrees: the distance also exceeds $1.2 - 0.7 = 0.5$ km, so it sits strictly between $0.5$ and $1.9$ km ✓. (Exactly $1.9$ km would need the three points COLLINEAR, which is ruled out ✗; "more than $1.9$" REVERSES the inequality — a detour can never be the short way ✗; exactly $0.5$ km quotes the DIFFERENCE, the other flat case, as if it were forced ✗.)',
    },
    {
      q: 'A cyclist rides $2.4$ km straight from her apartment to a bakery, then $1.8$ km straight from the bakery to the library. The bakery is not on the straight road between apartment and library. What must be true of the straight-line distance from her apartment to the library?',
      fig: {
        view: [-0.5, -0.4, 3.5, 2.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [1.44, 1.92] },
          { t: 'seg', a: [1.44, 1.92], b: [2.88, 0.84] },
          { t: 'seg', a: [0, 0], b: [2.88, 0.84], dash: true },
          { t: 'point', p: [0, 0], label: 'Apartment', dx: 10, dy: 16 },
          { t: 'point', p: [1.44, 1.92], label: 'Bakery', dx: 0, dy: -12 },
          { t: 'point', p: [2.88, 0.84], label: 'Library', dx: 6, dy: 16 },
          { t: 'label', p: [0.72, 0.96], text: '2.4 km', dx: -24, dy: -4 },
          { t: 'label', p: [2.16, 1.38], text: '1.8 km', dx: 18, dy: -8 },
        ],
      },
      choices: ['It is more than $4.2$ km', 'It is exactly $4.2$ km', 'It is less than $4.2$ km', 'It is exactly $0.6$ km'],
      answer: 2,
      solution:
        'The two legs through the bakery form a detour, and a detour always beats the straight road: the direct distance is strictly LESS than $2.4 + 1.8 = 4.2$ km ✓. Cross-check with the full window: the distance also tops $2.4 - 1.8 = 0.6$ km, so all we can pin down is $0.6 < d < 4.2$, which the "less than $4.2$" statement respects ✓. (Exactly $4.2$ km is the FLAT case, needing all three places on one line ✗; "more than $4.2$" REVERSES the triangle inequality ✗; exactly $0.6$ km mistakes the DIFFERENCE bound for the answer — it is a floor, not a value ✗.)',
    },
    {
      q: 'A ranger hikes $0.8$ km straight from the lookout tower to a stream crossing, then $1.5$ km straight from the crossing to the trailhead. The crossing is not on the straight line from tower to trailhead. What can the ranger conclude about the straight-line distance from the tower to the trailhead?',
      fig: {
        view: [-0.35, -0.3, 2.35, 1],
        elems: [
          { t: 'seg', a: [0, 0], b: [0.48, 0.64] },
          { t: 'seg', a: [0.48, 0.64], b: [1.92, 0.22] },
          { t: 'seg', a: [0, 0], b: [1.92, 0.22], dash: true },
          { t: 'point', p: [0, 0], label: 'Tower', dx: 2, dy: 16 },
          { t: 'point', p: [0.48, 0.64], label: 'Crossing', dx: 0, dy: -10 },
          { t: 'point', p: [1.92, 0.22], label: 'Trailhead', dx: 0, dy: 16 },
          { t: 'label', p: [0.24, 0.32], text: '0.8 km', dx: -22, dy: -6 },
          { t: 'label', p: [1.2, 0.43], text: '1.5 km', dx: 8, dy: -12 },
        ],
      },
      choices: ['It is less than $2.3$ km', 'It is exactly $2.3$ km', 'It is exactly $0.7$ km', 'It is more than $2.3$ km'],
      answer: 0,
      solution:
        'Tower, crossing, and trailhead are the corners of a triangle, so the direct side is strictly shorter than the two-leg detour: less than $0.8 + 1.5 = 2.3$ km ✓. The lower half of the window confirms only a floor, not a value: the distance is more than $1.5 - 0.8 = 0.7$ km, so it lies somewhere strictly inside $(0.7, 2.3)$ ✓. (Exactly $2.3$ km demands the COLLINEAR, flat arrangement the problem excludes ✗; exactly $0.7$ km promotes the DIFFERENCE bound to an answer ✗; "more than $2.3$" points the inequality the WRONG WAY ✗.)',
    },
  ],
  // s7 — isosceles with two given lengths: the inequality forces the perimeter.
  [
    {
      q: 'An isosceles triangle has sides of lengths $5$ and $11$. What is its perimeter?',
      choices: ['$21$', '$27$', '$16$', 'it cannot be determined'],
      answer: 1,
      solution:
        'Isosceles means the third side repeats one of the given two, so the triangle is $5, 5, 11$ or $5, 11, 11$. The short repeat dies on the inequality: $5 + 5 = 10 < 11$, so $5, 5, 11$ cannot close up ✗. That leaves $5, 11, 11$, and its perimeter is $5 + 11 + 11 = 27$ ✓. Confirm the survivor passes every check: $11 + 11 = 22 > 5$ ✓ and $5 + 11 = 16 > 11$ ✓. (The answer $21$ REPEATS THE SHORT SIDE even though that triangle is impossible ✗; $16$ adds only the TWO GIVEN sides and forgets the repeat ✗; "cannot be determined" misses that the inequality breaks the tie all by itself ✗.)',
    },
    {
      q: 'An isosceles triangle has two of its side lengths equal to $3$ and $7$. Find its perimeter.',
      choices: ['$17$', '$13$', '$10$', 'it cannot be determined'],
      answer: 0,
      solution:
        'The repeated side is either $3$ or $7$. Try the short repeat first: $3, 3, 7$ needs $3 + 3 = 6 > 7$, which fails, so no such triangle exists ✗. The long repeat works: $3, 7, 7$ has $3 + 7 = 10 > 7$ ✓ and $7 + 7 = 14 > 3$ ✓, so the sides are forced and the perimeter is $3 + 7 + 7 = 17$ ✓. (The answer $13$ comes from REPEATING THE SHORT SIDE, an impossible triangle ✗; $10$ adds just the TWO GIVEN lengths ✗; "cannot be determined" overlooks that the triangle inequality eliminated one case ✗.)',
    },
    {
      q: 'A jeweler bends wire into an isosceles triangle whose sides include the lengths $6$ and $13$. How much wire does the triangle use — that is, what is its perimeter?',
      choices: ['$25$', 'it cannot be determined', '$19$', '$32$'],
      answer: 3,
      solution:
        'Two of the sides match, so the triangle is $6, 6, 13$ or $6, 13, 13$. The short repeat fails the inequality: $6 + 6 = 12 < 13$, so those two sides cannot reach across the $13$ ✗. The remaining candidate $6, 13, 13$ passes everything — $13 + 13 = 26 > 6$ ✓ and $6 + 13 = 19 > 13$ ✓ — so the perimeter is $6 + 13 + 13 = 32$ ✓. (The answer $25$ builds on the SHORT REPEAT that the inequality just outlawed ✗; $19$ totals only the TWO GIVEN sides ✗; "cannot be determined" ignores that one of the two cases self-destructs ✗.)',
    },
  ],
  // s8 — which value CANNOT be the third side (figure).
  [
    {
      q: 'A triangle has integer side lengths, two of which are $7$ and $11$. Which of the following CANNOT be the third side?',
      fig: {
        view: [-1.2, -1, 12.2, 6.7],
        elems: [
          { t: 'seg', a: [0, 0], b: [11, 0] },
          { t: 'seg', a: [0, 0], b: [4.2, 5.6] },
          { t: 'seg', a: [11, 0], b: [4.2, 5.6], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [11, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [4.2, 5.6], label: 'C', dx: 0, dy: -12 },
          { t: 'label', p: [5.5, 0], text: '11', dx: 0, dy: 14 },
          { t: 'label', p: [2.1, 2.8], text: '7', dx: -12, dy: 0 },
          { t: 'label', p: [7.6, 2.8], text: 'x', dx: 12, dy: -6 },
        ],
      },
      choices: ['$5$', '$4$', '$10$', '$17$'],
      answer: 1,
      solution:
        'The window is $11 - 7 < x < 11 + 7$, so $4 < x < 18$, and $x = 4$ sits exactly ON the lower fence: it is out ✓. Test it directly for confirmation: with $x = 4$, the check $4 + 7 = 11$ merely EQUALS the longest side, a flat figure ✓. (Each other choice lands strictly inside the window: $x = 5$ works since $5 + 7 = 12 > 11$ ✗; $x = 10$ works since $7 + 10 = 17 > 11$ ✗; $x = 17$ works since $7 + 11 = 18 > 17$ ✗ — reject $17$ only if you MISTAKE THE WINDOW for $x < 11$, the longest given side.)',
    },
    {
      q: 'The triangle shown has integer side lengths, two of which are $5$ and $9$. Which value CANNOT be the length of the third side?',
      fig: {
        view: [-1.2, -1, 10.2, 5.1],
        elems: [
          { t: 'seg', a: [0, 0], b: [9, 0] },
          { t: 'seg', a: [0, 0], b: [3, 4] },
          { t: 'seg', a: [9, 0], b: [3, 4], dash: true },
          { t: 'point', p: [0, 0], label: 'P', dx: -10, dy: 8 },
          { t: 'point', p: [9, 0], label: 'Q', dx: 10, dy: 8 },
          { t: 'point', p: [3, 4], label: 'R', dx: 0, dy: -12 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [1.5, 2], text: '5', dx: -12, dy: 0 },
          { t: 'label', p: [6, 2], text: 'x', dx: 12, dy: -6 },
        ],
      },
      choices: ['$6$', '$13$', '$14$', '$9$'],
      answer: 2,
      solution:
        'The third side must obey $9 - 5 < x < 9 + 5$, that is, $4 < x < 14$ — and $x = 14$ sits exactly ON the upper fence ✓. Check it head-on: with $x = 14$ the two given sides give $5 + 9 = 14$, an exact tie, so the sides lie flat along the would-be third side ✓. (The other choices all fit: $x = 6$ has $5 + 6 = 11 > 9$ ✗; $x = 9$ has $5 + 9 = 14 > 9$ ✗; $x = 13$ has $5 + 9 = 14 > 13$ — still strictly more ✗. Rejecting $13$ is the COUNTING-THE-ENDPOINT reflex one step early ✗.)',
    },
    {
      q: 'A triangle with integer side lengths has two sides measuring $9$ and $14$. Which of these CANNOT be its third side?',
      fig: {
        view: [-1.2, -1, 15.2, 8.3],
        elems: [
          { t: 'seg', a: [0, 0], b: [14, 0] },
          { t: 'seg', a: [0, 0], b: [5.4, 7.2] },
          { t: 'seg', a: [14, 0], b: [5.4, 7.2], dash: true },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 8 },
          { t: 'point', p: [14, 0], label: 'E', dx: 10, dy: 8 },
          { t: 'point', p: [5.4, 7.2], label: 'F', dx: 0, dy: -12 },
          { t: 'label', p: [7, 0], text: '14', dx: 0, dy: 14 },
          { t: 'label', p: [2.7, 3.6], text: '9', dx: -12, dy: 0 },
          { t: 'label', p: [9.7, 3.6], text: 'x', dx: 12, dy: -6 },
        ],
      },
      choices: ['$23$', '$6$', '$15$', '$22$'],
      answer: 0,
      solution:
        'The window is $14 - 9 < x < 14 + 9$, so $5 < x < 23$, and $x = 23$ lands exactly ON the sum: excluded ✓. Verify directly: at $x = 23$ the given sides yield $9 + 14 = 23$, only an equality, so the triangle collapses into a segment ✓. (The rest sit safely inside: $x = 6$ has $6 + 9 = 15 > 14$ ✗; $x = 15$ has $9 + 14 = 23 > 15$ ✗; $x = 22$ has $9 + 14 = 23 > 22$, still a strict win ✗ — throwing out $22$ is the CLOSED-INTERVAL reflex, stopping one integer too soon ✗.)',
    },
  ],
  // s9 — the perimeter window.
  [
    {
      q: 'Two sides of a triangle measure $6$ and $10$. Which describes all possible values of the perimeter $p$?',
      choices: ['$20 \\le p \\le 32$', '$20 < p < 32$', '$4 < p < 16$', '$16 < p < 32$'],
      answer: 1,
      solution:
        'The third side $c$ obeys $10 - 6 < c < 10 + 6$, so $4 < c < 16$; since $p = 6 + 10 + c = 16 + c$, adding $16$ across gives $20 < p < 32$ ✓. Sanity-check the ends: as $c$ shrinks toward $4$ the perimeter slides toward $16 + 4 = 20$ without arriving, and as $c$ grows toward $16$ it slides toward $32$ — both flat cases stay out of reach ✓. (The choice $20 \\le p \\le 32$ CLOSES THE INTERVAL and admits the degenerate figures ✗; $4 < p < 16$ quotes the THIRD-SIDE window as if it were the perimeter ✗; $16 < p < 32$ FORGETS THE LOWER BOUND on $c$, letting $c$ start at $0$ ✗.)',
    },
    {
      q: 'A triangle has two sides of lengths $7$ and $11$. Which inequality describes every possible perimeter $p$?',
      choices: ['$22 < p < 36$', '$22 \\le p \\le 36$', '$4 < p < 18$', '$18 < p < 36$'],
      answer: 0,
      solution:
        'The third side satisfies $11 - 7 < c < 11 + 7$, so $4 < c < 18$; with $p = 18 + c$, the window shifts to $22 < p < 36$ ✓. Rebuild the endpoints independently: the flat configurations use $c = 4$ (perimeter $22$) and $c = 18$ (perimeter $36$), and a genuine triangle must land strictly between the two ✓. (The choice $22 \\le p \\le 36$ is the CLOSED-INTERVAL trap: the fence values belong to flat figures ✗; $4 < p < 18$ reports the THIRD-SIDE window instead of the perimeter ✗; $18 < p < 36$ DROPS THE LOWER BOUND, treating any tiny $c$ as legal ✗.)',
    },
    {
      q: 'Two sides of a triangle have lengths $8$ and $14$. Which describes exactly the possible perimeters $p$?',
      choices: ['$6 < p < 22$', '$28 \\le p \\le 44$', '$28 < p < 44$', '$22 < p < 44$'],
      answer: 2,
      solution:
        'First fence in the third side: $14 - 8 < c < 14 + 8$, so $6 < c < 22$. The perimeter is $p = 8 + 14 + c = 22 + c$, and adding $22$ to every part gives $28 < p < 44$ ✓. Check by the extremes: the flat figures at $c = 6$ and $c = 22$ would have perimeters $28$ and $44$, and every honest triangle falls strictly between them ✓. (The choice $6 < p < 22$ hands back the THIRD-SIDE window unshifted ✗; $28 \\le p \\le 44$ CLOSES THE INTERVAL around two zero-area figures ✗; $22 < p < 44$ FORGETS THE LOWER BOUND on $c$, as if $c$ could be nearly $0$ ✗.)',
    },
  ],
  // s10 — which value COULD be the straight-line distance (figure).
  [
    {
      q: 'A ferry sails straight from port $A$ to lighthouse $B$ ($7$ km), then straight from $B$ to harbor $C$ ($4$ km). Which of these could be the straight-line distance from $A$ to $C$?',
      fig: {
        view: [-1.2, -1, 9.3, 6.8],
        elems: [
          { t: 'seg', a: [0, 0], b: [4.2, 5.6] },
          { t: 'seg', a: [4.2, 5.6], b: [8.04, 4.48] },
          { t: 'seg', a: [0, 0], b: [8.04, 4.48], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4.2, 5.6], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [8.04, 4.48], label: 'C', dx: 12, dy: 0 },
          { t: 'label', p: [2.1, 2.8], text: '7', dx: -12, dy: -4 },
          { t: 'label', p: [6.12, 5.04], text: '4', dx: 8, dy: -10 },
          { t: 'label', p: [4.02, 2.24], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$3$ km', '$9.5$ km', '$11$ km', '$12$ km'],
      answer: 1,
      solution:
        'The distance $AC$ is fenced by the two legs: $7 - 4 < AC < 7 + 4$, so $3 < AC < 11$, and $9.5$ sits comfortably inside ✓. Confirm $9.5$ by the two raw checks: $4 + 7 = 11 > 9.5$, and $4 + 9.5 = 13.5 > 7$ — every pair beats the third side ✓. (The value $3$ km is the LOWER ENDPOINT, where $C$ folds back onto the line through $A$ and $B$ ✗; $11$ km is the UPPER ENDPOINT, the legs laid perfectly straight ✗; $12$ km is BEYOND THE REACH of a $7$ km and a $4$ km leg entirely ✗.)',
    },
    {
      q: 'A courier van drives straight from the depot $A$ to an office $B$ ($9$ km), then straight from $B$ to a warehouse $C$ ($6$ km). Which of these could be the straight-line distance from $A$ to $C$?',
      fig: {
        view: [-1.3, -1, 12.5, 8.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [5.4, 7.2] },
          { t: 'seg', a: [5.4, 7.2], b: [11.16, 5.52] },
          { t: 'seg', a: [0, 0], b: [11.16, 5.52], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [5.4, 7.2], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [11.16, 5.52], label: 'C', dx: 12, dy: 0 },
          { t: 'label', p: [2.7, 3.6], text: '9', dx: -12, dy: -4 },
          { t: 'label', p: [8.28, 6.36], text: '6', dx: 8, dy: -10 },
          { t: 'label', p: [5.58, 2.76], text: '?', dx: 0, dy: 14 },
        ],
      },
      choices: ['$15$ km', '$3$ km', '$16$ km', '$13.5$ km'],
      answer: 3,
      solution:
        'The window for $AC$ runs from the difference to the sum of the legs: $9 - 6 < AC < 9 + 6$, so $3 < AC < 15$, and $13.5$ lies strictly inside ✓. Double-check $13.5$ against the raw inequalities: $6 + 9 = 15 > 13.5$ ✓ and $6 + 13.5 = 19.5 > 9$ ✓, so a triangle with these three distances exists ✓. (The value $15$ km is the UPPER ENDPOINT — it needs $A$, $B$, $C$ in a perfect line ✗; $3$ km is the LOWER ENDPOINT, the fold-back flat case ✗; $16$ km OVERSHOOTS what two legs totaling $15$ km can span ✗.)',
    },
    {
      q: 'A homing pigeon flies straight from its loft $A$ to a barn $B$ ($10$ km), then straight from $B$ to a grain silo $C$ ($3$ km). Which of these could be the straight-line distance from $A$ to $C$?',
      fig: {
        view: [-1.2, -1, 10.2, 9.3],
        elems: [
          { t: 'seg', a: [0, 0], b: [6, 8] },
          { t: 'seg', a: [6, 8], b: [8.88, 7.16] },
          { t: 'seg', a: [0, 0], b: [8.88, 7.16], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [6, 8], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [8.88, 7.16], label: 'C', dx: 12, dy: 2 },
          { t: 'label', p: [3, 4], text: '10', dx: -14, dy: -4 },
          { t: 'label', p: [7.44, 7.58], text: '3', dx: 10, dy: -10 },
          { t: 'label', p: [4.44, 3.58], text: '?', dx: 6, dy: 14 },
        ],
      },
      choices: ['$8.5$ km', '$7$ km', '$13$ km', '$14$ km'],
      answer: 0,
      solution:
        'The legs fence the distance: $10 - 3 < AC < 10 + 3$, so $7 < AC < 13$, and $8.5$ falls strictly inside ✓. Confirm $8.5$ with the raw checks: $3 + 10 = 13 > 8.5$ ✓ and $3 + 8.5 = 11.5 > 10$ ✓ — the short leg plus the candidate still beats the long leg, which is the check that bites ✓. (The value $7$ km is the LOWER ENDPOINT, where the silo folds back onto line $AB$ ✗; $13$ km is the UPPER ENDPOINT, the perfectly straight flight ✗; $14$ km lies BEYOND THE REACH of legs totaling $13$ km ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 10,
  sections: {
    '10.3': s103,
  },
}
