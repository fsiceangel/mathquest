// Introduction to Geometry chapter 16 — variations for section 16.1 (Translations).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is reached twice along routes that share no steps:
//    once by driving the coordinate rule one coordinate at a time, and once by
//    an independent second route — walking the slide out square by square on
//    the grid, undoing the slide from the image, reading the same slide off a
//    second matching pair of vertices, or testing a candidate rule on a point
//    whose trip is easy to see.
//  - Figures are coordinate-exact: a point drawn at (4, -1) sits at (4, -1) in
//    the view box. Labels are plain text, never LaTeX, and a figure never
//    carries the very number the question asks for.
//  - Each distractor is one named mistake — adding where the rule subtracts,
//    swapping the horizontal slide with the vertical one, running the slide
//    backwards, or sliding the wrong point — and it is named in CAPS.

const s161 = [
  // s1 — the image of a single point under a stated rule.
  [
    {
      q: 'A firefly sits at $P(-3, 5)$ on a coordinate grid. It drifts by the translation $(x, y) \\to (x + 7, y - 9)$. Where does the firefly land?',
      fig: {
        view: [-5, -1, 2, 7],
        grid: true,
        elems: [
          { t: 'point', p: [-3, 5], label: 'P', dx: 0, dy: -10 },
        ],
      },
      choices: ['$(4, -4)$', '$(4, 14)$', '$(-10, 14)$', '$(-12, 12)$'],
      answer: 0,
      solution:
        'Route one, take the rule one coordinate at a time: a translation never lets the two coordinates mix, so the first coordinate answers only to $+7$ and the second only to $-9$. From $x = -3$ we get $-3 + 7 = 4$, and from $y = 5$ we get $5 - 9 = -4$, so the firefly lands at $(4, -4)$ ✓. Check a second, independent way, by walking the grid: stand on $P$ and step seven squares to the right, counting the vertical lines $-2, -1, 0, 1, 2, 3, 4$ — the walk stops on the line $x = 4$. Now step nine squares straight down from height $5$: five steps bring the firefly to the $x$-axis and four more carry it to $-4$. The walk ends at $(4, -4)$ ✓. (The choice $(4, 14)$ is ADDING $9$ WHERE THE RULE SUBTRACTS IT, flying up when the rule says down ✗; the choice $(-10, 14)$ is RUNNING THE RULE BACKWARDS, which finds the point that would land on $P$ rather than where $P$ itself goes ✗; the choice $(-12, 12)$ is SWAPPING THE TWO SLIDES, moving $9$ across and $7$ up when the rule asks for $7$ across and $9$ down ✗.)',
    },
    {
      q: 'On a treasure map drawn over a coordinate grid, a marker rests at $P(8, -6)$. The map’s key says every marker must be redrawn by the translation $(x, y) \\to (x - 11, y + 4)$. Where does this marker go?',
      fig: {
        view: [-1, -8, 10, 1],
        grid: true,
        elems: [
          { t: 'point', p: [8, -6], label: 'P', dx: 0, dy: -10 },
        ],
      },
      choices: ['$(19, -10)$', '$(-3, -10)$', '$(12, -17)$', '$(-3, -2)$'],
      answer: 3,
      solution:
        'Route one, take the rule one coordinate at a time: the first coordinate loses $11$, giving $8 - 11 = -3$, and the second gains $4$, giving $-6 + 4 = -2$. The marker belongs at $(-3, -2)$ ✓. Check a second, independent way, by walking the grid: from $P$ walk eleven squares to the left. Eight of those steps bring the marker to the vertical line $x = 0$, and the remaining three carry it to $x = -3$. Then climb four squares from height $-6$, passing $-5$, $-4$, $-3$, and stopping at $-2$. The walk ends at $(-3, -2)$ ✓. (The choice $(19, -10)$ is RUNNING THE RULE BACKWARDS, adding $11$ and subtracting $4$ ✗; the choice $(-3, -10)$ is SUBTRACTING $4$ WHERE THE RULE ADDS IT, dropping the marker instead of raising it ✗; the choice $(12, -17)$ is SWAPPING THE TWO SLIDES, moving $4$ across and $11$ down ✗.)',
    },
    {
      q: 'A chess piece stands at $P(-7, -3)$ on a giant coordinate board. A single move slides it by $(x, y) \\to (x + 2, y + 10)$. What square does it reach?',
      fig: {
        view: [-9, -5, 1, 2],
        grid: true,
        elems: [
          { t: 'point', p: [-7, -3], label: 'P', dx: 0, dy: -10 },
        ],
      },
      choices: ['$(-9, -13)$', '$(-5, 7)$', '$(-5, -13)$', '$(3, -1)$'],
      answer: 1,
      solution:
        'Route one, take the rule one coordinate at a time: the first coordinate gains $2$, so $-7 + 2 = -5$, and the second gains $10$, so $-3 + 10 = 7$. The piece reaches $(-5, 7)$ ✓. Check a second, independent way, by walking the grid: step two squares to the right of $P$, from $x = -7$ past $-6$ to $-5$. Then climb ten squares from height $-3$: three of them reach the $x$-axis and the other seven keep going to $7$. The walk ends at $(-5, 7)$ ✓. (The choice $(-9, -13)$ is RUNNING THE RULE BACKWARDS, subtracting both slides instead of adding them ✗; the choice $(-5, -13)$ is SUBTRACTING $10$ WHERE THE RULE ADDS IT, sliding down the board rather than up ✗; the choice $(3, -1)$ is SWAPPING THE TWO SLIDES, moving $10$ across and $2$ up ✗.)',
    },
  ],
  // s2 — turn a description of a slide into a coordinate rule.
  [
    {
      q: 'A window on a computer screen is dragged $3$ units to the right and $6$ units down. Which rule describes the drag?',
      choices: ['$(x, y) \\to (x - 3, y + 6)$', '$(x, y) \\to (x + 3, y - 6)$', '$(x, y) \\to (x + 6, y - 3)$', '$(x, y) \\to (x - 3, y - 6)$'],
      answer: 1,
      solution:
        'Route one, translate the words into signs: moving right pushes a point toward larger first coordinates, so the horizontal part of the rule is $+3$; moving down pushes it toward smaller second coordinates, so the vertical part is $-6$. The rule is $(x, y) \\to (x + 3, y - 6)$ ✓. Check a second, independent way, by dragging one corner and testing the four rules against it: put the window’s corner at the origin. Three squares right of the origin is the line $x = 3$, and six squares below the origin is the line $y = -6$, so the corner must finish at $(3, -6)$. Feeding $(0, 0)$ through the four rules gives $(-3, 6)$, $(3, -6)$, $(6, -3)$, and $(-3, -6)$, and only the second matches ✓. (The choice $(x - 3, y + 6)$ is READING RIGHT AS LEFT AND DOWN AS UP, the exact reverse trip ✗; the choice $(x + 6, y - 3)$ is SWAPPING THE TWO DISTANCES, dragging $6$ across and $3$ down ✗; the choice $(x - 3, y - 6)$ is TREATING RIGHT AS A SUBTRACTION, though rightward motion always grows the first coordinate ✗.)',
    },
    {
      q: 'A chess app slides a highlighted square $7$ units left and $4$ units up. Which coordinate rule does the app use?',
      choices: ['$(x, y) \\to (x + 7, y - 4)$', '$(x, y) \\to (x - 4, y + 7)$', '$(x, y) \\to (x - 7, y + 4)$', '$(x, y) \\to (x + 7, y + 4)$'],
      answer: 2,
      solution:
        'Route one, translate the words into signs: leftward motion shrinks the first coordinate, so the horizontal part is $-7$; upward motion grows the second coordinate, so the vertical part is $+4$. The rule is $(x, y) \\to (x - 7, y + 4)$ ✓. Check a second, independent way, by testing the rules on a convenient square: take the square at $(7, 0)$. Seven steps to its left lands on the line $x = 0$, and four steps up from the $x$-axis lands on $y = 4$, so this square must finish at $(0, 4)$. Running $(7, 0)$ through the four rules gives $(14, -4)$, $(3, 7)$, $(0, 4)$, and $(14, 4)$, and only the third one agrees ✓. (The choice $(x + 7, y - 4)$ is READING LEFT AS RIGHT AND UP AS DOWN, the reverse of the intended slide ✗; the choice $(x - 4, y + 7)$ is SWAPPING THE TWO DISTANCES, sliding $4$ across and $7$ up ✗; the choice $(x + 7, y + 4)$ is TREATING LEFT AS AN ADDITION, though leftward motion always shrinks the first coordinate ✗.)',
    },
    {
      q: 'A stagehand pushes a prop cart $9$ units right and $2$ units up on a stage marked out as a coordinate grid. Which rule records the push?',
      choices: ['$(x, y) \\to (x - 9, y - 2)$', '$(x, y) \\to (x + 2, y + 9)$', '$(x, y) \\to (x + 9, y - 2)$', '$(x, y) \\to (x + 9, y + 2)$'],
      answer: 3,
      solution:
        'Route one, translate the words into signs: pushing right grows the first coordinate by $9$, and pushing up grows the second by $2$, so the rule is $(x, y) \\to (x + 9, y + 2)$ ✓. Check a second, independent way, by following one wheel: set a wheel of the cart at $(-9, -2)$. Nine squares to its right is the line $x = 0$, and two squares above it is the line $y = 0$, so that wheel must roll to the origin. Sending $(-9, -2)$ through the four rules gives $(-18, -4)$, $(-7, 7)$, $(0, -4)$, and $(0, 0)$, and only the last one puts the wheel at the origin ✓. (The choice $(x - 9, y - 2)$ is REVERSING BOTH DIRECTIONS, pulling the cart left and down ✗; the choice $(x + 2, y + 9)$ is SWAPPING THE TWO DISTANCES, pushing $2$ across and $9$ up ✗; the choice $(x + 9, y - 2)$ is TREATING UP AS A SUBTRACTION, though upward motion always grows the second coordinate ✗.)',
    },
  ],
  // s3 — read the rule off a pre-image and its image on the grid.
  [
    {
      q: 'The triangle with vertices $(1, 2)$, $(3, 2)$, and $(1, 5)$ is slid to the triangle with vertices $(-2, 4)$, $(0, 4)$, and $(-2, 7)$. Which translation was used?',
      fig: {
        view: [-4, 0, 5, 8],
        grid: true,
        elems: [
          { t: 'poly', pts: [[1, 2], [3, 2], [1, 5]] },
          { t: 'poly', pts: [[-2, 4], [0, 4], [-2, 7]] },
          { t: 'seg', a: [1, 2], b: [-2, 4], dash: true },
          { t: 'point', p: [1, 2], label: 'A', dx: 10, dy: 12 },
          { t: 'point', p: [1, 5], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [-2, 4], label: "A'", dx: -12, dy: 12 },
          { t: 'point', p: [-2, 7], label: "C'", dx: -12, dy: -4 },
        ],
      },
      choices: ['$(x, y) \\to (x + 3, y - 2)$', '$(x, y) \\to (x + 2, y - 3)$', '$(x, y) \\to (x - 3, y - 2)$', '$(x, y) \\to (x - 3, y + 2)$'],
      answer: 3,
      solution:
        'Route one, subtract a matching pair of coordinates: the corner $A(1, 2)$ is the right-angle corner of the first triangle, and the matching corner of the image is $A\'(-2, 4)$. Horizontally the change is $-2 - 1 = -3$; vertically it is $4 - 2 = 2$. The rule is $(x, y) \\to (x - 3, y + 2)$ ✓. Check a second, independent way, by counting squares between a different pair of corners: the tall vertex $C$ sits at $(1, 5)$ and its image $C\'$ sits at $(-2, 7)$. Walking from $C$ to $C\'$ takes three squares left and two squares up — the very same trip, which is what makes the motion a translation rather than a turn. Three left and two up is $(x, y) \\to (x - 3, y + 2)$ ✓. (The choice $(x + 3, y - 2)$ is READING THE SLIDE FROM THE IMAGE BACK TO THE ORIGINAL, which undoes the motion instead of describing it ✗; the choice $(x + 2, y - 3)$ is SWAPPING THE HORIZONTAL AND VERTICAL DISTANCES ✗; the choice $(x - 3, y - 2)$ is GETTING THE HORIZONTAL SLIDE RIGHT BUT SENDING THE TRIANGLE DOWN, though the image sits higher than the original ✗.)',
    },
    {
      q: 'A flag on a map has corners at $(2, 3)$, $(5, 3)$, and $(2, 7)$. After the map is redrawn, the same flag has corners at $(8, -1)$, $(11, -1)$, and $(8, 3)$. Which translation redrew it?',
      fig: {
        view: [0, -3, 13, 9],
        grid: true,
        elems: [
          { t: 'poly', pts: [[2, 3], [5, 3], [2, 7]] },
          { t: 'poly', pts: [[8, -1], [11, -1], [8, 3]] },
          { t: 'seg', a: [2, 3], b: [8, -1], dash: true },
          { t: 'point', p: [2, 3], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [2, 7], label: 'C', dx: -12, dy: -4 },
          { t: 'point', p: [8, -1], label: "A'", dx: -6, dy: 16 },
          { t: 'point', p: [8, 3], label: "C'", dx: -14, dy: -4 },
        ],
      },
      choices: ['$(x, y) \\to (x + 6, y - 4)$', '$(x, y) \\to (x - 6, y + 4)$', '$(x, y) \\to (x + 4, y - 6)$', '$(x, y) \\to (x + 6, y + 4)$'],
      answer: 0,
      solution:
        'Route one, subtract a matching pair of coordinates: the corner $A(2, 3)$ becomes $A\'(8, -1)$. Horizontally, $8 - 2 = 6$; vertically, $-1 - 3 = -4$. The rule is $(x, y) \\to (x + 6, y - 4)$ ✓. Check a second, independent way, by counting squares between a different pair of corners: the top corner $C$ sits at $(2, 7)$ and its image $C\'$ sits at $(8, 3)$. Walking from $C$ to $C\'$ takes six squares right and four squares down, exactly the trip $A$ made — every point of a translated figure travels the same way. Six right and four down reads as $(x, y) \\to (x + 6, y - 4)$ ✓. (The choice $(x - 6, y + 4)$ is TRACING THE SLIDE FROM THE NEW FLAG BACK TO THE OLD ONE, which is the return trip ✗; the choice $(x + 4, y - 6)$ is SWAPPING THE HORIZONTAL AND VERTICAL DISTANCES ✗; the choice $(x + 6, y + 4)$ is CARRYING THE FLAG UPWARD, though every image corner sits four squares lower than its original ✗.)',
    },
    {
      q: 'A quilt patch is cut with corners at $(5, 6)$, $(8, 6)$, and $(5, 10)$. When it is sewn onto the quilt its corners sit at $(-3, 3)$, $(0, 3)$, and $(-3, 7)$. Which translation moved the patch?',
      fig: {
        view: [-5, 1, 10, 12],
        grid: true,
        elems: [
          { t: 'poly', pts: [[5, 6], [8, 6], [5, 10]] },
          { t: 'poly', pts: [[-3, 3], [0, 3], [-3, 7]] },
          { t: 'seg', a: [5, 6], b: [-3, 3], dash: true },
          { t: 'point', p: [5, 6], label: 'A', dx: 12, dy: 10 },
          { t: 'point', p: [5, 10], label: 'C', dx: 12, dy: 0 },
          { t: 'point', p: [-3, 3], label: "A'", dx: -12, dy: 10 },
          { t: 'point', p: [-3, 7], label: "C'", dx: -12, dy: -4 },
        ],
      },
      choices: ['$(x, y) \\to (x + 8, y + 3)$', '$(x, y) \\to (x - 3, y - 8)$', '$(x, y) \\to (x - 8, y - 3)$', '$(x, y) \\to (x - 8, y + 3)$'],
      answer: 2,
      solution:
        'Route one, subtract a matching pair of coordinates: the corner $A(5, 6)$ ends up at $A\'(-3, 3)$. Horizontally, $-3 - 5 = -8$; vertically, $3 - 6 = -3$. The rule is $(x, y) \\to (x - 8, y - 3)$ ✓. Check a second, independent way, by counting squares between a different pair of corners: the tall corner $C$ starts at $(5, 10)$ and finishes at $(-3, 7)$. Getting there takes eight squares left and three squares down, the identical trip $A$ made, which confirms that one single slide carries the whole patch. Eight left and three down is $(x, y) \\to (x - 8, y - 3)$ ✓. (The choice $(x + 8, y + 3)$ is DESCRIBING THE TRIP FROM THE SEWN PATCH BACK TO THE CUT ONE ✗; the choice $(x - 3, y - 8)$ is SWAPPING THE HORIZONTAL AND VERTICAL DISTANCES, sliding $3$ across and $8$ down ✗; the choice $(x - 8, y + 3)$ is LIFTING THE PATCH INSTEAD OF LOWERING IT, though each image corner sits three squares below its original ✗.)',
    },
  ],
  // s4 — run a known rule backwards to recover the pre-image.
  [
    {
      q: 'The translation $(x, y) \\to (x - 6, y + 3)$ carries a weather balloon from point $A$ to the point $A\'(-1, 7)$. What were the balloon’s starting coordinates?',
      fig: {
        view: [-4, 0, 4, 9],
        grid: true,
        elems: [
          { t: 'point', p: [-1, 7], label: "A'", dx: -14, dy: -4 },
        ],
      },
      choices: ['$(5, 4)$', '$(-7, 10)$', '$(5, 10)$', '$(2, 1)$'],
      answer: 0,
      solution:
        'Route one, set up the two equations the rule promises: if $A = (a, b)$, then $a - 6 = -1$ and $b + 3 = 7$. The first gives $a = -1 + 6 = 5$ and the second gives $b = 7 - 3 = 4$, so $A = (5, 4)$ ✓. Check a second, independent way, by walking backwards on the grid: the rule pushes every point six squares left and three squares up, so retracing the balloon’s path means walking six squares right and three squares down from $A\'$. Starting at $(-1, 7)$, six squares right passes $0, 1, 2, 3, 4$ and stops at $5$, and three squares down from height $7$ lands on $4$. The retraced path begins at $(5, 4)$ ✓. (The choice $(-7, 10)$ is APPLYING THE RULE FORWARD A SECOND TIME instead of undoing it, which finds where $A\'$ would go next ✗; the choice $(5, 10)$ is UNDOING THE HORIZONTAL SLIDE BUT NOT THE VERTICAL ONE, climbing when the retraced path should descend ✗; the choice $(2, 1)$ is UNDOING THE SLIDES WITH THEIR ROLES SWAPPED, moving $3$ across and $6$ down ✗.)',
    },
    {
      q: 'A design program applies the translation $(x, y) \\to (x + 9, y - 2)$ to a logo. One anchor point of the logo ends up at $(4, 6)$. Where was that anchor point before the program ran?',
      fig: {
        view: [-1, -1, 7, 8],
        grid: true,
        elems: [
          { t: 'point', p: [4, 6], label: "A'", dx: 14, dy: 0 },
        ],
      },
      choices: ['$(13, 4)$', '$(-5, 4)$', '$(-5, 8)$', '$(6, -3)$'],
      answer: 2,
      solution:
        'Route one, set up the two equations the rule promises: writing the anchor as $(a, b)$, the program guarantees $a + 9 = 4$ and $b - 2 = 6$. So $a = 4 - 9 = -5$ and $b = 6 + 2 = 8$, putting the anchor at $(-5, 8)$ ✓. Check a second, independent way, by walking backwards on the grid: the program slides everything nine squares right and two squares down, so the anchor’s old home lies nine squares left and two squares up from $(4, 6)$. Nine squares left of $x = 4$ crosses the $y$-axis after four steps and finishes five more steps out at $x = -5$; two squares up from height $6$ is height $8$. The old home is $(-5, 8)$ ✓. (The choice $(13, 4)$ is RUNNING THE RULE FORWARD ONE MORE TIME rather than reversing it ✗; the choice $(-5, 4)$ is REVERSING THE HORIZONTAL SLIDE ONLY, dropping the anchor when the reversal should raise it ✗; the choice $(6, -3)$ is RUNNING THE SLIDES FORWARD WITH THEIR ROLES SWAPPED instead of reversing them, moving $2$ across and $9$ down ✗.)',
    },
    {
      q: 'A submarine’s navigation log records that the translation $(x, y) \\to (x - 2, y - 7)$ moved the sub from a point $A$ to the point $(6, -12)$. What was $A$?',
      fig: {
        view: [-2, -15, 10, -7],
        grid: true,
        elems: [
          { t: 'point', p: [6, -12], label: "A'", dx: 14, dy: 0 },
        ],
      },
      choices: ['$(4, -19)$', '$(8, -5)$', '$(8, -19)$', '$(13, -10)$'],
      answer: 1,
      solution:
        'Route one, set up the two equations the rule promises: with $A = (a, b)$, the log says $a - 2 = 6$ and $b - 7 = -12$. Then $a = 6 + 2 = 8$ and $b = -12 + 7 = -5$, so the sub started at $(8, -5)$ ✓. Check a second, independent way, by walking backwards on the grid: the recorded move goes two squares left and seven squares down, so the sub’s earlier position sits two squares right and seven squares up from $(6, -12)$. Two right of $x = 6$ is $x = 8$; seven up from a depth of $-12$ passes $-11, -10, -9, -8, -7, -6$ and stops at $-5$. The earlier position is $(8, -5)$ ✓. (The choice $(4, -19)$ is REPEATING THE RECORDED MOVE instead of reversing it ✗; the choice $(8, -19)$ is REVERSING THE HORIZONTAL PART ONLY, diving deeper when the reversal should rise ✗; the choice $(13, -10)$ is REVERSING THE TWO SLIDES IN EACH OTHER’S PLACE, moving $7$ across and $2$ up ✗.)',
    },
  ],
  // s5 — the image of one named endpoint of a translated segment.
  [
    {
      q: 'A zip line runs in a straight segment from $P(2, -1)$ to $Q(6, 3)$. The whole line is rebuilt by the translation $(x, y) \\to (x + 1, y - 5)$. Where does the endpoint $Q$ end up?',
      fig: {
        view: [0, -3, 8, 5],
        grid: true,
        elems: [
          { t: 'seg', a: [2, -1], b: [6, 3] },
          { t: 'point', p: [2, -1], label: 'P', dx: -10, dy: 12 },
          { t: 'point', p: [6, 3], label: 'Q', dx: 12, dy: 0 },
        ],
      },
      choices: ['$(3, -6)$', '$(5, 8)$', '$(7, -2)$', '$(7, 8)$'],
      answer: 2,
      solution:
        'Route one, send $Q$ through the rule on its own: each endpoint of a translated segment makes the trip independently, so $Q(6, 3)$ goes to $(6 + 1, 3 - 5) = (7, -2)$ ✓. Check a second, independent way, through the other endpoint and the shape of the segment: $P(2, -1)$ moves to $(2 + 1, -1 - 5) = (3, -6)$. The rebuilt line has to be a congruent copy of the old one pointing the same way, and the old line climbs from $P$ to $Q$ by four squares right and four squares up. Starting from the new $P$ at $(3, -6)$ and going four right and four up gives $(3 + 4, -6 + 4) = (7, -2)$, which is where the new $Q$ must be ✓. (The choice $(3, -6)$ is TRANSLATING THE WRONG ENDPOINT, reporting the image of $P$ when the question names $Q$ ✗; the choice $(5, 8)$ is RUNNING THE RULE BACKWARDS on $Q$ ✗; the choice $(7, 8)$ is ADDING $5$ WHERE THE RULE SUBTRACTS IT, lifting the line instead of lowering it ✗.)',
    },
    {
      q: 'A drawbridge is drawn as the segment from $P(-1, 3)$ to $Q(4, -2)$. An engineer redraws it using the translation $(x, y) \\to (x - 3, y - 6)$. What is the image of the endpoint $Q$?',
      fig: {
        view: [-3, -4, 6, 5],
        grid: true,
        elems: [
          { t: 'seg', a: [-1, 3], b: [4, -2] },
          { t: 'point', p: [-1, 3], label: 'P', dx: -10, dy: -6 },
          { t: 'point', p: [4, -2], label: 'Q', dx: 12, dy: 4 },
        ],
      },
      choices: ['$(-4, -3)$', '$(1, -8)$', '$(7, 4)$', '$(1, 4)$'],
      answer: 1,
      solution:
        'Route one, send $Q$ through the rule on its own: every point of the bridge takes the same trip but keeps its own starting place, so $Q(4, -2)$ goes to $(4 - 3, -2 - 6) = (1, -8)$ ✓. Check a second, independent way, through the other endpoint and the shape of the segment: $P(-1, 3)$ moves to $(-1 - 3, 3 - 6) = (-4, -3)$. The redrawn bridge is a congruent copy of the old one aimed the same way, and the old bridge runs from $P$ to $Q$ by five squares right and five squares down. From the new $P$ at $(-4, -3)$, five right and five down gives $(-4 + 5, -3 - 5) = (1, -8)$, so the new $Q$ sits there ✓. (The choice $(-4, -3)$ is TRANSLATING THE WRONG ENDPOINT, handing back the image of $P$ ✗; the choice $(7, 4)$ is RUNNING THE RULE BACKWARDS on $Q$ ✗; the choice $(1, 4)$ is ADDING $6$ WHERE THE RULE SUBTRACTS IT, raising the bridge rather than lowering it ✗.)',
    },
    {
      q: 'A crack in a windshield runs as a straight segment from $P(-4, 6)$ to $Q(0, -3)$. On a diagram of a second windshield the same crack is drawn after the translation $(x, y) \\to (x + 11, y + 2)$. Where does the endpoint $P$ land?',
      fig: {
        view: [-6, -5, 3, 8],
        grid: true,
        elems: [
          { t: 'seg', a: [-4, 6], b: [0, -3] },
          { t: 'point', p: [-4, 6], label: 'P', dx: -10, dy: -6 },
          { t: 'point', p: [0, -3], label: 'Q', dx: 12, dy: 4 },
        ],
      },
      choices: ['$(11, -1)$', '$(-15, 4)$', '$(7, 4)$', '$(7, 8)$'],
      answer: 3,
      solution:
        'Route one, send $P$ through the rule on its own: the endpoint keeps its own coordinates and adds the slide, so $P(-4, 6)$ lands at $(-4 + 11, 6 + 2) = (7, 8)$ ✓. Check a second, independent way, through the other endpoint and the shape of the segment: $Q(0, -3)$ lands at $(0 + 11, -3 + 2) = (11, -1)$. The new crack is a congruent copy of the old one pointing the same way, and going from $Q$ to $P$ on the first windshield means four squares left and nine squares up. From the new $Q$ at $(11, -1)$, four left and nine up gives $(11 - 4, -1 + 9) = (7, 8)$, so that is where the new $P$ sits ✓. (The choice $(11, -1)$ is TRANSLATING THE WRONG ENDPOINT, reporting the image of $Q$ when the question names $P$ ✗; the choice $(-15, 4)$ is RUNNING THE RULE BACKWARDS on $P$ ✗; the choice $(7, 4)$ is SUBTRACTING $2$ WHERE THE RULE ADDS IT, lowering the crack instead of raising it ✗.)',
    },
  ],
  // s6 — two translations in a row collapse into one.
  [
    {
      q: 'A robot vacuum first slides by $(x, y) \\to (x - 4, y + 2)$ and then by $(x, y) \\to (x + 9, y - 7)$. Which single translation would take it from start to finish in one move?',
      choices: ['$(x, y) \\to (x + 13, y - 9)$', '$(x, y) \\to (x + 5, y - 5)$', '$(x, y) \\to (x - 5, y + 5)$', '$(x, y) \\to (x + 5, y + 9)$'],
      answer: 1,
      solution:
        'Route one, add the slides: horizontal distances pile up on horizontal distances, so $-4$ followed by $+9$ comes to $-4 + 9 = 5$. Vertically, $+2$ followed by $-7$ comes to $2 - 7 = -5$. One move of $5$ right and $5$ down does everything the two moves did: $(x, y) \\to (x + 5, y - 5)$ ✓. Check a second, independent way, by pushing a point all the way through: start the vacuum at the origin. The first slide carries $(0, 0)$ to $(-4, 2)$, and the second carries $(-4, 2)$ to $(-4 + 9, 2 - 7) = (5, -5)$. A single translation is completely determined by where it sends one point, and the rule that sends the origin to $(5, -5)$ is $(x, y) \\to (x + 5, y - 5)$ ✓. (The choice $(x + 13, y - 9)$ is SUBTRACTING THE FIRST SLIDE FROM THE SECOND instead of adding the two together ✗; the choice $(x - 5, y + 5)$ is RUNNING BOTH MOVES IN REVERSE, which drives the vacuum back to its starting corner ✗; the choice $(x + 5, y + 9)$ is ADDING THE SIZES OF THE TWO VERTICAL SLIDES AND IGNORING THAT THEY PULL OPPOSITE WAYS ✗.)',
    },
    {
      q: 'A puck on an air-hockey table is bumped by $(x, y) \\to (x - 6, y + 1)$ and then bumped again by $(x, y) \\to (x + 14, y + 5)$. Which single translation matches the pair of bumps?',
      choices: ['$(x, y) \\to (x + 20, y + 4)$', '$(x, y) \\to (x - 8, y - 6)$', '$(x, y) \\to (x + 6, y + 8)$', '$(x, y) \\to (x + 8, y + 6)$'],
      answer: 3,
      solution:
        'Route one, add the slides: horizontally, $-6$ then $+14$ leaves a net $-6 + 14 = 8$. Vertically, $+1$ then $+5$ makes $1 + 5 = 6$, since both bumps push the same way. The pair together is $(x, y) \\to (x + 8, y + 6)$ ✓. Check a second, independent way, by pushing a point all the way through: place the puck at $(6, 0)$. The first bump sends it to $(0, 1)$, and the second sends that to $(0 + 14, 1 + 5) = (14, 6)$. So the combined move carries $(6, 0)$ to $(14, 6)$, a trip of $8$ across and $6$ up, and the rule for that trip is $(x, y) \\to (x + 8, y + 6)$ ✓. (The choice $(x + 20, y + 4)$ is SUBTRACTING THE FIRST BUMP FROM THE SECOND rather than adding them ✗; the choice $(x - 8, y - 6)$ is REVERSING THE WHOLE JOURNEY, the move that would send the puck home ✗; the choice $(x + 6, y + 8)$ is SWAPPING THE TWO TOTALS, sending the puck $6$ across and $8$ up ✗.)',
    },
    {
      q: 'A camera on a track pans by $(x, y) \\to (x + 3, y - 8)$ and then by $(x, y) \\to (x - 12, y - 1)$. Which single translation has the same effect as both pans together?',
      choices: ['$(x, y) \\to (x - 9, y - 9)$', '$(x, y) \\to (x - 15, y + 7)$', '$(x, y) \\to (x + 9, y + 9)$', '$(x, y) \\to (x + 15, y - 9)$'],
      answer: 0,
      solution:
        'Route one, add the slides: horizontally, $+3$ then $-12$ nets $3 - 12 = -9$, since the second pan more than cancels the first. Vertically, $-8$ then $-1$ makes $-8 - 1 = -9$. Together the pans amount to $(x, y) \\to (x - 9, y - 9)$ ✓. Check a second, independent way, by pushing a point all the way through: aim the camera at $(9, 9)$. The first pan takes it to $(12, 1)$, and the second takes that to $(12 - 12, 1 - 1) = (0, 0)$. The two pans together therefore carry $(9, 9)$ to the origin, a trip of $9$ left and $9$ down, and the rule for that trip is $(x, y) \\to (x - 9, y - 9)$ ✓. (The choice $(x - 15, y + 7)$ is SUBTRACTING THE FIRST PAN FROM THE SECOND instead of adding the two ✗; the choice $(x + 9, y + 9)$ is REVERSING BOTH PANS, the move that would return the camera to its first aim ✗; the choice $(x + 15, y - 9)$ is ADDING THE SIZES OF THE TWO HORIZONTAL PANS AND OVERLOOKING THAT THEY PULL OPPOSITE WAYS ✗.)',
    },
  ],
  // s7 — one corner of a rectangle pins the slide; a second corner is asked for.
  [
    {
      q: 'A photograph is taped to a wall as a rectangle with corners $(2, 1)$, $(6, 1)$, $(6, 4)$, and $(2, 4)$. It is translated so that the corner $A(2, 1)$ now sits at $(-3, -2)$. Where does the corner $B(6, 4)$ end up?',
      fig: {
        view: [-5, -4, 8, 6],
        grid: true,
        elems: [
          { t: 'poly', pts: [[2, 1], [6, 1], [6, 4], [2, 4]] },
          { t: 'seg', a: [2, 1], b: [-3, -2], dash: true },
          { t: 'point', p: [2, 1], label: 'A', dx: 8, dy: 14 },
          { t: 'point', p: [6, 4], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [-3, -2], label: "A'", dx: -14, dy: 6 },
        ],
      },
      choices: ['$(11, 7)$', '$(1, 7)$', '$(1, 1)$', '$(3, -1)$'],
      answer: 2,
      solution:
        'Route one, read the slide off $A$ and hand it to $B$: from $(2, 1)$ to $(-3, -2)$ the first coordinate falls by $5$ and the second falls by $3$, so the rule is $(x, y) \\to (x - 5, y - 3)$. Applying it to $B(6, 4)$ gives $(6 - 5, 4 - 3) = (1, 1)$ ✓. Check a second, independent way, by rebuilding the rectangle at its new address: the photograph keeps its shape, so from the new position of $A$ the corner $B$ still sits four squares to the right and three squares up, exactly as it did before the move. Starting at $(-3, -2)$ and stepping four right and three up lands on $(-3 + 4, -2 + 3) = (1, 1)$ ✓. (The choice $(11, 7)$ is SLIDING $B$ THE WRONG WAY ALONG THE RULE, back toward where the photograph came from ✗; the choice $(1, 7)$ is LIFTING $B$ BY $3$ WHEN THE MOVE LOWERS IT BY $3$ ✗; the choice $(3, -1)$ is SWAPPING THE TWO PARTS OF THE SLIDE, moving $3$ across and $5$ down ✗.)',
    },
    {
      q: 'A rug in a floor plan is the rectangle with corners $(-2, 0)$, $(3, 0)$, $(3, 4)$, and $(-2, 4)$. The rug is translated so that the corner $A(-2, 0)$ comes to rest at $(5, -3)$. Where is the corner $B(3, 4)$ afterward?',
      fig: {
        view: [-4, -5, 7, 6],
        grid: true,
        elems: [
          { t: 'poly', pts: [[-2, 0], [3, 0], [3, 4], [-2, 4]] },
          { t: 'seg', a: [-2, 0], b: [5, -3], dash: true },
          { t: 'point', p: [-2, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [3, 4], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [5, -3], label: "A'", dx: 14, dy: 4 },
        ],
      },
      choices: ['$(10, 1)$', '$(-4, 7)$', '$(10, 7)$', '$(0, 11)$'],
      answer: 0,
      solution:
        'Route one, read the slide off $A$ and hand it to $B$: from $(-2, 0)$ to $(5, -3)$ the first coordinate climbs by $7$ and the second falls by $3$, so the drag is $(x, y) \\to (x + 7, y - 3)$. Applying that to $B(3, 4)$ gives $(3 + 7, 4 - 3) = (10, 1)$ ✓. Check a second, independent way, by rebuilding the rug at its new address: dragging a rug does not stretch or spin it, so $B$ still stands five squares right of $A$ and four squares above it. From the new $A$ at $(5, -3)$, five right and four up gives $(5 + 5, -3 + 4) = (10, 1)$ ✓. (The choice $(-4, 7)$ is DRAGGING $B$ BACKWARDS ALONG THE RULE, toward the rug’s old spot ✗; the choice $(10, 7)$ is RAISING $B$ BY $3$ WHEN THE DRAG LOWERS IT BY $3$ ✗; the choice $(0, 11)$ is SWAPPING THE TWO PARTS OF THE DRAG, moving $3$ across and $7$ up ✗.)',
    },
    {
      q: 'A solar panel is drawn as the rectangle with corners $(0, -1)$, $(5, -1)$, $(5, 2)$, and $(0, 2)$. In a revised plan the whole panel has been translated so that the corner $A(0, -1)$ sits at $(-4, 6)$. Where does the corner $B(5, 2)$ sit in the revised plan?',
      fig: {
        view: [-6, -3, 7, 8],
        grid: true,
        elems: [
          { t: 'poly', pts: [[0, -1], [5, -1], [5, 2], [0, 2]] },
          { t: 'seg', a: [0, -1], b: [-4, 6], dash: true },
          { t: 'point', p: [0, -1], label: 'A', dx: 10, dy: 14 },
          { t: 'point', p: [5, 2], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [-4, 6], label: "A'", dx: -14, dy: -4 },
        ],
      },
      choices: ['$(9, -5)$', '$(1, -5)$', '$(12, -2)$', '$(1, 9)$'],
      answer: 3,
      solution:
        'Route one, read the slide off $A$ and hand it to $B$: from $(0, -1)$ to $(-4, 6)$ the first coordinate falls by $4$ and the second climbs by $7$, so the shift is $(x, y) \\to (x - 4, y + 7)$. Applying it to $B(5, 2)$ gives $(5 - 4, 2 + 7) = (1, 9)$ ✓. Check a second, independent way, by rebuilding the panel at its new address: the revised plan uses the same panel, so $B$ still lies five squares right of $A$ and three squares above it. From the new $A$ at $(-4, 6)$, five right and three up gives $(-4 + 5, 6 + 3) = (1, 9)$ ✓. (The choice $(9, -5)$ is SHIFTING $B$ IN THE OPPOSITE DIRECTION, back toward the original plan ✗; the choice $(1, -5)$ is LOWERING $B$ BY $7$ WHEN THE SHIFT RAISES IT BY $7$ ✗; the choice $(12, -2)$ is SWAPPING THE TWO PARTS OF THE SHIFT, moving $7$ across and $4$ down ✗.)',
    },
  ],
  // s8 — what a translation does and does not change.
  [
    {
      q: 'A translation is applied to a figure. Which statement about the image is true?',
      choices: [
        'the image is a mirror copy of the original',
        'the image is congruent to the original and faces the same way',
        'the image is larger than the original',
        'the image is congruent to the original but turned a quarter turn',
      ],
      answer: 1,
      solution:
        'Route one, argue from what a slide is: a translation moves every single point the same distance in the same direction. Pick any two points of the figure; both travel along the same arrow, so the gap between them is untouched, and if no distance changes then neither the size nor the shape can change. Nothing turns either, since every arrow points the same way, so a corner that opened toward the upper right still opens toward the upper right. The image is congruent to the original and faces the same way ✓. Check a second, independent way, on a figure you can measure: slide the triangle $(0, 0)$, $(6, 0)$, $(0, 2)$ by $(x, y) \\to (x - 5, y + 4)$ to get $(-5, 4)$, $(1, 4)$, $(-5, 6)$. The bottom edge was $6$ long and is still $6$ long; the upright edge was $2$ and is still $2$; the right angle sits at the first listed vertex in both. Tracing the three vertices in the order listed runs counterclockwise before the slide and counterclockwise after it, so the copy is congruent and unturned ✓. (The choice about a mirror copy names WHAT A REFLECTION DOES, and a reflection reverses the way a figure faces ✗; the choice about a larger image names WHAT A DILATION DOES, and a translation never resizes ✗; the choice about a quarter turn names WHAT A ROTATION DOES, and a translation never spins the figure ✗.)',
    },
    {
      q: 'A figure on the coordinate plane is translated. Which of these can the translation change?',
      choices: [
        'its position, and nothing else',
        'its position and its size',
        'its position and the way it faces',
        'its size and its shape, but not its position',
      ],
      answer: 0,
      solution:
        'Route one, argue from what a slide is: every point of the figure rides the same arrow, so each point ends up somewhere new — the position certainly changes. But because all the arrows agree, the distance between any two points of the figure is exactly what it was, which pins down both the size and the shape, and the direction from one point to another is also exactly what it was, which pins down the way the figure faces. Position, and nothing else ✓. Check a second, independent way, on a figure you can measure: slide the rectangle $(1, 0)$, $(9, 0)$, $(9, 3)$, $(1, 3)$ by $(x, y) \\to (x + 2, y - 6)$ to get $(3, -6)$, $(11, -6)$, $(11, -3)$, $(3, -3)$. The long sides measure $8$ before and after; the short sides measure $3$ before and after; the long side runs horizontally in both. Every measurement survives, and only the address on the plane is new ✓. (The choice naming size is CONFUSING A SLIDE WITH A DILATION, the transformation that shrinks or stretches ✗; the choice naming the way it faces is CONFUSING A SLIDE WITH A ROTATION OR A REFLECTION, the transformations that turn or flip ✗; the choice that leaves the position alone GETS THE ONE THING A TRANSLATION REALLY DOES EXACTLY BACKWARDS ✗.)',
    },
    {
      q: 'A translation slides a triangle across the coordinate plane. Comparing the image with the original triangle, what is different?',
      choices: [
        'the lengths of its sides',
        'the sizes of its angles',
        'only the coordinates of its vertices',
        'the order its vertices are traced around the triangle',
      ],
      answer: 2,
      solution:
        'Route one, argue from what a slide is: the rule $(x, y) \\to (x + a, y + b)$ hands every vertex a new pair of numbers, so the coordinates plainly change. Yet any two vertices move by the same $a$ and the same $b$, so the difference between their coordinates is untouched, and the side joining them keeps its exact length. Sides of the same lengths build the same triangle, so the angles are unchanged too, and no arrow turns, so tracing the vertices still runs around the triangle the same way. Only the coordinates of the vertices are different ✓. Check a second, independent way, on a triangle you can measure: slide $(0, 0)$, $(8, 0)$, $(0, 6)$ by $(x, y) \\to (x - 7, y + 1)$ to get $(-7, 1)$, $(1, 1)$, $(-7, 7)$. The horizontal leg is $8$ in both, the vertical leg is $6$ in both, and the slanted side closes both triangles at length $10$. Equal sides force equal angles, and both lists of vertices run counterclockwise. Six numbers changed and nothing else did ✓. (The choice naming side lengths WOULD MAKE THE IMAGE A DIFFERENT SIZE, which is a dilation and not a slide ✗; the choice naming angle sizes WOULD BEND THE TRIANGLE INTO A NEW SHAPE, which no rigid motion does ✗; the choice naming the tracing order WOULD REVERSE THE WAY THE TRIANGLE FACES, which is what a reflection does ✗.)',
    },
  ],
  // s9 — recover the rule from one pair, then use it on a second point.
  [
    {
      q: 'A translation carries $A(-2, 3)$ to $A\'(3, -1)$. Where does the same translation carry $B(6, 2)$?',
      fig: {
        view: [-4, -3, 8, 5],
        grid: true,
        elems: [
          { t: 'seg', a: [-2, 3], b: [3, -1], dash: true },
          { t: 'point', p: [-2, 3], label: 'A', dx: -12, dy: -4 },
          { t: 'point', p: [3, -1], label: "A'", dx: -6, dy: 16 },
          { t: 'point', p: [6, 2], label: 'B', dx: 12, dy: 0 },
        ],
      },
      choices: ['$(1, 6)$', '$(11, 6)$', '$(2, 7)$', '$(11, -2)$'],
      answer: 3,
      solution:
        'Route one, name the rule and then use it: comparing $A$ with $A\'$, the first coordinate goes from $-2$ to $3$, a change of $3 - (-2) = 5$, and the second goes from $3$ to $-1$, a change of $-1 - 3 = -4$. The rule is $(x, y) \\to (x + 5, y - 4)$, and it sends $B(6, 2)$ to $(6 + 5, 2 - 4) = (11, -2)$ ✓. Check a second, independent way, by copying the arrow: the dashed segment from $A$ to $A\'$ runs five squares right and four squares down, and in a translation every point rides an arrow of exactly that length and direction. Lay the same arrow with its tail on $B(6, 2)$: five squares right of $x = 6$ is $x = 11$, and four squares down from height $2$ passes $1, 0, -1$ and stops at $-2$. The arrow’s head lands on $(11, -2)$ ✓. (The choice $(1, 6)$ is POINTING THE ARROW BACKWARDS at $B$, five left and four up ✗; the choice $(11, 6)$ is RAISING $B$ BY $4$ WHEN THE ARROW DESCENDS BY $4$ ✗; the choice $(2, 7)$ is SWAPPING THE ARROW’S TWO LEGS, moving $4$ across and $5$ up ✗.)',
    },
    {
      q: 'A translation moves $A(6, -4)$ to the point $(-1, 2)$. Where does that translation move $B(-3, -5)$?',
      fig: {
        view: [-5, -7, 8, 4],
        grid: true,
        elems: [
          { t: 'seg', a: [6, -4], b: [-1, 2], dash: true },
          { t: 'point', p: [6, -4], label: 'A', dx: 12, dy: 4 },
          { t: 'point', p: [-1, 2], label: "A'", dx: -12, dy: -4 },
          { t: 'point', p: [-3, -5], label: 'B', dx: -12, dy: 4 },
        ],
      },
      choices: ['$(4, -11)$', '$(-10, 1)$', '$(-10, -11)$', '$(3, -12)$'],
      answer: 1,
      solution:
        'Route one, name the rule and then use it: from $A$ to its image the first coordinate goes from $6$ to $-1$, a change of $-1 - 6 = -7$, and the second goes from $-4$ to $2$, a change of $2 - (-4) = 6$. So the rule is $(x, y) \\to (x - 7, y + 6)$, and it moves $B(-3, -5)$ to $(-3 - 7, -5 + 6) = (-10, 1)$ ✓. Check a second, independent way, by copying the arrow: the dashed segment from $A$ to its image runs seven squares left and six squares up, and a translation gives every point that identical arrow. Put its tail on $B(-3, -5)$: seven squares left of $x = -3$ is $x = -10$, and six squares up from $-5$ passes $-4, -3, -2, -1, 0$ and stops at $1$. The head lands on $(-10, 1)$ ✓. (The choice $(4, -11)$ is REVERSING THE ARROW at $B$, seven right and six down ✗; the choice $(-10, -11)$ is DROPPING $B$ BY $6$ WHEN THE ARROW CLIMBS BY $6$ ✗; the choice $(3, -12)$ is SWAPPING THE ARROW’S TWO LEGS, moving $6$ across and $7$ down ✗.)',
    },
    {
      q: 'A translation sends $A(-5, -2)$ to the point $(2, 6)$. Where does it send $B(3, -9)$?',
      fig: {
        view: [-7, -11, 5, 8],
        grid: true,
        elems: [
          { t: 'seg', a: [-5, -2], b: [2, 6], dash: true },
          { t: 'point', p: [-5, -2], label: 'A', dx: -12, dy: 4 },
          { t: 'point', p: [2, 6], label: "A'", dx: -12, dy: -4 },
          { t: 'point', p: [3, -9], label: 'B', dx: 12, dy: 4 },
        ],
      },
      choices: ['$(-4, -17)$', '$(10, -17)$', '$(10, -1)$', '$(11, -2)$'],
      answer: 2,
      solution:
        'Route one, name the rule and then use it: the first coordinate of $A$ goes from $-5$ to $2$, a change of $2 - (-5) = 7$, and the second goes from $-2$ to $6$, a change of $6 - (-2) = 8$. The rule is $(x, y) \\to (x + 7, y + 8)$, and it sends $B(3, -9)$ to $(3 + 7, -9 + 8) = (10, -1)$ ✓. Check a second, independent way, by copying the arrow: the dashed segment from $A$ to its image runs seven squares right and eight squares up, and every point of a translated plane rides a copy of that one arrow. Set its tail on $B(3, -9)$: seven right of $x = 3$ is $x = 10$, and eight up from a depth of $-9$ passes $-8$ through $-2$ and stops at $-1$. The head lands on $(10, -1)$ ✓. (The choice $(-4, -17)$ is TURNING THE ARROW AROUND at $B$, seven left and eight down ✗; the choice $(10, -17)$ is SINKING $B$ BY $8$ WHEN THE ARROW RISES BY $8$ ✗; the choice $(11, -2)$ is SWAPPING THE ARROW’S TWO LEGS, moving $8$ across and $7$ up ✗.)',
    },
  ],
  // s10 — the same translation applied three times over.
  [
    {
      q: 'A translation $T$ moves the origin to $(-2, 3)$. Starting from the point $(11, -4)$, a beetle is moved by $T$, then by $T$ again, and then by $T$ once more. Where does the beetle finish?',
      choices: ['$(5, 5)$', '$(9, -1)$', '$(-6, 9)$', '$(7, 2)$'],
      answer: 0,
      solution:
        'Route one, add up the three slides first: one turn of $T$ carries a point $2$ left and $3$ up, because that is the trip the origin makes. Three turns therefore carry it $3 \\cdot 2 = 6$ left and $3 \\cdot 3 = 9$ up, a single slide of $(x, y) \\to (x - 6, y + 9)$. From $(11, -4)$ that gives $(11 - 6, -4 + 9) = (5, 5)$ ✓. Check a second, independent way, one step at a time: after the first move the beetle is at $(11 - 2, -4 + 3) = (9, -1)$; after the second it is at $(9 - 2, -1 + 3) = (7, 2)$; after the third it is at $(7 - 2, 2 + 3) = (5, 5)$ ✓. (The choice $(9, -1)$ is STOPPING AFTER ONE MOVE ✗; the choice $(7, 2)$ is STOPPING AFTER TWO MOVES ✗; the choice $(-6, 9)$ is REPORTING THE TOTAL SLIDE ITSELF and never applying it to the beetle’s starting point ✗.)',
    },
    {
      q: 'A translation $T$ takes the origin to $(4, -1)$. A game piece at $(-7, 9)$ is moved by $T$ three times in a row. What are its final coordinates?',
      choices: ['$(-3, 8)$', '$(12, -3)$', '$(1, 7)$', '$(5, 6)$'],
      answer: 3,
      solution:
        'Route one, add up the three slides first: since $T$ carries the origin to $(4, -1)$, one turn of $T$ moves any point $4$ right and $1$ down. Three turns move it $3 \\cdot 4 = 12$ right and $3 \\cdot 1 = 3$ down, which is the single slide $(x, y) \\to (x + 12, y - 3)$. From $(-7, 9)$ that gives $(-7 + 12, 9 - 3) = (5, 6)$ ✓. Check a second, independent way, one step at a time: the first move puts the piece at $(-7 + 4, 9 - 1) = (-3, 8)$; the second puts it at $(-3 + 4, 8 - 1) = (1, 7)$; the third puts it at $(1 + 4, 7 - 1) = (5, 6)$ ✓. (The choice $(-3, 8)$ is HALTING AFTER THE FIRST MOVE ✗; the choice $(1, 7)$ is HALTING AFTER THE SECOND MOVE ✗; the choice $(12, -3)$ is HANDING BACK THE COMBINED SLIDE rather than the point it acts on ✗.)',
    },
    {
      q: 'A translation $T$ sends the origin to $(-3, -2)$. A marble sitting at $(12, 5)$ is pushed by $T$, then by $T$, then by $T$. Where does the marble come to rest?',
      choices: ['$(9, 3)$', '$(3, -1)$', '$(-9, -6)$', '$(6, 1)$'],
      answer: 1,
      solution:
        'Route one, add up the three slides first: $T$ takes the origin to $(-3, -2)$, so a single push moves any point $3$ left and $2$ down, and three pushes move it $3 \\cdot 3 = 9$ left and $3 \\cdot 2 = 6$ down. That is the single slide $(x, y) \\to (x - 9, y - 6)$, and from $(12, 5)$ it gives $(12 - 9, 5 - 6) = (3, -1)$ ✓. Check a second, independent way, one step at a time: the first push leaves the marble at $(12 - 3, 5 - 2) = (9, 3)$; the second leaves it at $(9 - 3, 3 - 2) = (6, 1)$; the third leaves it at $(6 - 3, 1 - 2) = (3, -1)$ ✓. (The choice $(9, 3)$ is COUNTING ONLY THE FIRST PUSH ✗; the choice $(6, 1)$ is COUNTING ONLY THE FIRST TWO PUSHES ✗; the choice $(-9, -6)$ is REPORTING THE TOTAL PUSH ITSELF, forgetting that the marble started at $(12, 5)$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 16,
  sections: { '16.1': s161 },
}
