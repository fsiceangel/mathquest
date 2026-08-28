// Introduction to Geometry chapter 16 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer was worked twice along routes that share no steps, and
//    the two routes had to agree before the key was written: step by step vs.
//    the single combined rule the pair of moves adds up to (slots 1, 5, 8, 10,
//    12); the quadrant argument vs. a concrete sample point (slot 2); the area
//    factor $k^2$ vs. building a triangle with the stated area and measuring
//    the image (slot 3); reading the slide off the given pair vs. carrying the
//    offset between the two starting points across (slot 4); the quarter-turn
//    rules vs. splitting the turn into $180^\circ$ and $90^\circ$ (slot 6);
//    reflecting B under the road vs. reflecting A under it (slot 7); the
//    symmetry group closing on itself vs. exhibiting a pinwheel that has the
//    symmetry and nothing else (slot 9); the square root of the area factor vs.
//    a unit square scaled until its area matches (slot 11).
//  - Figures are coordinate grids drawn the way the chapter draws them: a
//    dashed segment for a mirror line or for the auxiliary reflection, plain
//    points for the named vertices. Labels are plain text, never math.
//  - No figure carries the value the question asks for.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution and marked ✗.
//  - No two choices inside an item name the same value, and inside each slot
//    the three variations put the correct answer in three different positions.

const challenge = [
  // slot 1 — a quarter-turn followed by a flip over the x-axis. The pair is the
  // single reflection over the line y = -x, which is the second route.
  // Lane: (7, 3) -> (-3, -7) / (-5, 8) -> (-8, 5) / (4, -11) -> (11, -4).
  [
    {
      q: 'A pixel of a logo sits at $(7, 3)$. The design program rotates the whole logo $90^\\circ$ counterclockwise about the origin and then reflects the result over the x-axis. Where does that pixel finish?',
      choices: ['$(-3, -7)$', '$(-3, 7)$', '$(3, 7)$', '$(3, -7)$'],
      answer: 0,
      solution:
        'Take the moves one at a time. The $90^\\circ$ counterclockwise rule is $(x, y) \\to (-y, x)$, so $(7, 3)$ swings to $(-3, 7)$; the x-axis mirror then flips the $y$-coordinate, giving $(-3, -7)$ ✓. Check a second, independent way by folding the two moves into one rule: the pair sends $(x, y) \\to (-y, x) \\to (-y, -x)$, which is exactly the reflection over the line $y = -x$. Feeding $(7, 3)$ into $(-y, -x)$ gives $(-3, -7)$ in a single step, and the midpoint of $(7, 3)$ and $(-3, -7)$ is $(2, -2)$, which does lie on $y = -x$ ✓. (The choice $(-3, 7)$ is STOPPING AFTER THE ROTATION and never reflecting ✗; the choice $(3, 7)$ is DOING THE TWO MOVES IN THE OPPOSITE ORDER, reflecting first and rotating second ✗; the choice $(3, -7)$ is TREATING THE QUARTER-TURN AS A PLAIN COORDINATE SWAP with no sign change, which is the mirror $y = x$ rather than a rotation ✗.)',
    },
    {
      q: 'A drone starts above the point $(-5, 8)$ on a map. Its flight plan rotates its position $90^\\circ$ counterclockwise about the origin and then reflects the result over the x-axis. What is the final position?',
      choices: ['$(-8, -5)$', '$(8, -5)$', '$(8, 5)$', '$(-8, 5)$'],
      answer: 3,
      solution:
        'Work through the moves in order. The rotation rule $(x, y) \\to (-y, x)$ carries $(-5, 8)$ to $(-8, -5)$, and reflecting over the x-axis flips the second coordinate to give $(-8, 5)$ ✓. Check a second, independent way with the combined rule: rotating and then flipping sends $(x, y) \\to (-y, x) \\to (-y, -x)$, the reflection over the line $y = -x$. Applying $(-y, -x)$ to $(-5, 8)$ gives $(-8, 5)$ at once, and the midpoint of the start and the finish, $\\left(-\\frac{13}{2}, \\frac{13}{2}\\right)$, sits on $y = -x$ ✓. (The choice $(-8, -5)$ is STOPPING AFTER THE ROTATION ✗; the choice $(8, -5)$ is DOING THE TWO MOVES IN THE OPPOSITE ORDER ✗; the choice $(8, 5)$ is TREATING THE QUARTER-TURN AS A PLAIN COORDINATE SWAP, the mirror $y = x$ instead of a rotation ✗.)',
    },
    {
      q: 'A stitch in an embroidery pattern is at $(4, -11)$. The machine turns the pattern $90^\\circ$ counterclockwise about the origin and then flips it over the x-axis. Where is that stitch afterward?',
      choices: ['$(11, 4)$', '$(11, -4)$', '$(-11, 4)$', '$(-11, -4)$'],
      answer: 1,
      solution:
        'Handle the turn first. By $(x, y) \\to (-y, x)$, the point $(4, -11)$ rotates to $(11, 4)$, and the x-axis mirror flips the height to give $(11, -4)$ ✓. Check a second, independent way by combining the moves: the rotation followed by the flip is $(x, y) \\to (-y, x) \\to (-y, -x)$, the reflection over $y = -x$, and that rule sends $(4, -11)$ straight to $(11, -4)$. The midpoint $\\left(\\frac{15}{2}, -\\frac{15}{2}\\right)$ lies on $y = -x$, as a reflection over that line demands ✓. (The choice $(11, 4)$ is STOPPING AFTER THE ROTATION ✗; the choice $(-11, 4)$ is DOING THE TWO MOVES IN THE OPPOSITE ORDER ✗; the choice $(-11, -4)$ is TREATING THE QUARTER-TURN AS A PLAIN COORDINATE SWAP over the line $y = x$ ✗.)',
    },
  ],

  // slot 2 — CONCEPT: which quadrant the image lands in. Only one choice is
  // true of the situation as worded; the other three are the three other
  // transformations a student mixes up with the one that was named.
  // Lane: QIV under a half-turn -> II / QIII over the y-axis -> IV /
  // QI over the y-axis -> II.
  [
    {
      q: 'A point $(a, b)$ has $a > 0$ and $b < 0$. It is rotated $180^\\circ$ about the origin. In which quadrant does the image lie?',
      choices: ['Quadrant I', 'Quadrant III', 'Quadrant II', 'Quadrant IV'],
      answer: 2,
      solution:
        'Read the signs. With $a > 0$ and $b < 0$ the point sits in Quadrant IV, and the half-turn rule $(a, b) \\to (-a, -b)$ makes the first coordinate negative and the second positive — negative across, positive up is Quadrant II ✓. Check a second, independent way with a sample point: $(3, -4)$ obeys the conditions, and a $180^\\circ$ turn carries it to $(-3, 4)$, which is plotted three units left and four units up, in Quadrant II ✓. (The choice Quadrant IV is REPORTING THE QUADRANT THE POINT STARTED IN, as though a half-turn left it where it was ✗; the choice Quadrant III is FLIPPING ONLY THE FIRST COORDINATE, which is a reflection over the y-axis rather than a rotation ✗; the choice Quadrant I is FLIPPING ONLY THE SECOND COORDINATE, which is a reflection over the x-axis ✗.)',
    },
    {
      q: 'A point $(a, b)$ has $a < 0$ and $b < 0$. It is reflected over the y-axis. In which quadrant does the image lie?',
      choices: ['Quadrant I', 'Quadrant IV', 'Quadrant II', 'Quadrant III'],
      answer: 1,
      solution:
        'Both coordinates are negative, so the point starts in Quadrant III. The y-axis mirror is $(a, b) \\to (-a, b)$: the first coordinate turns positive while the second stays negative, and right of the axis but below it is Quadrant IV ✓. Check a second, independent way with a sample point: $(-6, -2)$ fits the description, and reflecting it over the y-axis gives $(6, -2)$, six units right and two units down — Quadrant IV ✓. (The choice Quadrant III is REPORTING THE STARTING QUADRANT, as though the mirror did nothing ✗; the choice Quadrant I is FLIPPING BOTH COORDINATES, which is a $180^\\circ$ rotation rather than one reflection ✗; the choice Quadrant II is USING THE x-AXIS AS THE MIRROR, which flips the wrong coordinate ✗.)',
    },
    {
      q: 'The corner of a logo is plotted at $(p, q)$, where $p$ is positive and $q$ is positive. The logo is reflected over the y-axis. Which quadrant contains the image of that corner?',
      choices: ['Quadrant III', 'Quadrant I', 'Quadrant IV', 'Quadrant II'],
      answer: 3,
      solution:
        'Both coordinates are positive, so the corner starts in Quadrant I. Reflecting over the y-axis applies $(p, q) \\to (-p, q)$, turning the first coordinate negative while the height is untouched, and left of the axis but above it is Quadrant II ✓. Check a second, independent way with a sample point: $(5, 1)$ satisfies the conditions, and its mirror image across the y-axis is $(-5, 1)$, which is plotted five units left and one unit up, in Quadrant II ✓. (The choice Quadrant I is REPORTING THE STARTING QUADRANT, as though the mirror left the point alone ✗; the choice Quadrant III is FLIPPING BOTH COORDINATES, a $180^\\circ$ rotation instead of a single reflection ✗; the choice Quadrant IV is USING THE x-AXIS AS THE MIRROR, flipping the height rather than the width ✗.)',
    },
  ],

  // slot 3 — area under a negative scale factor: the sign never reaches the
  // area, and the multiplier is k^2 rather than |k|.
  // Lane: area 6, k = -3 -> 54 / area 11, k = -2 -> 44 / area 9, k = -4 -> 144.
  [
    {
      q: 'A triangular sail with area $6$ square units is redrawn by a dilation centered at the origin with scale factor $k = -3$. What is the area of the new sail?',
      choices: ['$18$', '$9$', '$-54$', '$54$'],
      answer: 3,
      solution:
        'A dilation stretches both dimensions, so areas are multiplied by $k^2 = (-3)^2 = 9$, and the image covers $6 \\cdot 9 = 54$ square units ✓. Check a second, independent way by building a triangle with the stated area: a base of $4$ and a height of $3$ give area $\\frac{1}{2}(4)(3) = 6$. The dilation multiplies every length by $|-3| = 3$, so the base becomes $12$ and the height becomes $9$, and the image has area $\\frac{1}{2}(12)(9) = 54$ ✓. (The choice $18$ is SCALING THE AREA BY $|k|$ INSTEAD OF $k^2$, which is how lengths scale, not areas ✗; the choice $-54$ is LETTING THE NEGATIVE SIGN THROUGH, but the minus only flips the sail to the far side of the center and no region has negative area ✗; the choice $9$ is REPORTING THE AREA MULTIPLIER $k^2$ RATHER THAN THE AREA ITSELF ✗.)',
    },
    {
      q: 'A triangular flag has area $11$ square units. A dilation centered at the origin with scale factor $k = -2$ is applied to it. What is the area of the image?',
      choices: ['$44$', '$22$', '$-44$', '$4$'],
      answer: 0,
      solution:
        'Area picks up a factor of $k^2 = (-2)^2 = 4$, since both dimensions of the flag are stretched, so the image has area $11 \\cdot 4 = 44$ square units ✓. Check a second, independent way with a concrete triangle of the same area: a base of $11$ and a height of $2$ give $\\frac{1}{2}(11)(2) = 11$. Every length is multiplied by $|-2| = 2$, making the base $22$ and the height $4$, so the image has area $\\frac{1}{2}(22)(4) = 44$ ✓. (The choice $22$ is SCALING THE AREA BY $|k|$ INSTEAD OF $k^2$ ✗; the choice $-44$ is CARRYING THE NEGATIVE SIGN INTO THE AREA, though the sign only sends the flag to the opposite side of the center ✗; the choice $4$ is REPORTING THE AREA MULTIPLIER $k^2$ RATHER THAN THE AREA ✗.)',
    },
    {
      q: 'A triangular tile covers $9$ square units. A dilation centered at the origin with scale factor $k = -4$ is applied to the tile. What area does the image cover?',
      choices: ['$36$', '$16$', '$144$', '$-144$'],
      answer: 2,
      solution:
        'Both dimensions of the tile are stretched, so area is multiplied by $k^2 = (-4)^2 = 16$, giving $9 \\cdot 16 = 144$ square units ✓. Check a second, independent way by choosing a triangle with area $9$: a base of $6$ and a height of $3$ give $\\frac{1}{2}(6)(3) = 9$. Lengths are multiplied by $|-4| = 4$, so the base becomes $24$ and the height becomes $12$, and $\\frac{1}{2}(24)(12) = 144$ ✓. (The choice $36$ is SCALING THE AREA BY $|k|$ INSTEAD OF $k^2$ ✗; the choice $16$ is REPORTING THE AREA MULTIPLIER $k^2$ INSTEAD OF THE AREA ✗; the choice $-144$ is KEEPING THE NEGATIVE SIGN, though a dilation with $k < 0$ flips the tile across the center without making its area negative ✗.)',
    },
  ],
  // slot 4 — a translation is read off one matched pair and carried to a
  // second point. Second route: the offset between the two starting points is
  // preserved, so it can be added to the known image instead.
  // Lane: (5,-2)->(1,3) on (6,-1) -> (2,4) / (-3,7)->(2,1) on (9,-4) ->
  // (14,-10) / (8,1)->(3,-6) on (-2,10) -> (-7,3).
  [
    {
      q: 'A single translation slides a whole map. It sends the town at $(5, -2)$ to $(1, 3)$. Where does it send the lighthouse at $(6, -1)$?',
      fig: {
        view: [-1, -4, 8, 5],
        grid: true,
        elems: [
          { t: 'seg', a: [5, -2], b: [1, 3], dash: true },
          { t: 'point', p: [5, -2], label: 'T', dx: 12, dy: 8 },
          { t: 'point', p: [1, 3], label: "T'", dx: -12, dy: -6 },
          { t: 'point', p: [6, -1], label: 'L', dx: 12, dy: 4 },
        ],
      },
      choices: ['$(11, -5)$', '$(2, 4)$', '$(10, -6)$', '$(-4, 5)$'],
      answer: 1,
      solution:
        'Read the slide off the matched pair: from $5$ to $1$ is $-4$ across, and from $-2$ to $3$ is $+5$ up, so the rule is $(x, y) \\to (x - 4, y + 5)$. Applying it to the lighthouse gives $(6 - 4, -1 + 5) = (2, 4)$ ✓. Check a second, independent way without ever writing the rule: a translation carries the whole map rigidly, so the lighthouse keeps its position relative to the town. The lighthouse sits $1$ unit right and $1$ unit up from the town, so its image sits $1$ unit right and $1$ unit up from $(1, 3)$, at $(2, 4)$ ✓. (The choice $(10, -6)$ is RUNNING THE SLIDE BACKWARDS, $4$ right and $5$ down ✗; the choice $(-4, 5)$ is REPORTING THE SLIDE ITSELF instead of the image of the lighthouse ✗; the choice $(11, -5)$ is SWAPPING THE TWO COMPONENTS OF THE SLIDE, moving $5$ across and $4$ up or down ✗.)',
    },
    {
      q: 'One translation moves every piece on a game board. It sends the piece at $(-3, 7)$ to $(2, 1)$. Where does it send the piece at $(9, -4)$?',
      fig: {
        view: [-5, -6, 11, 9],
        grid: true,
        elems: [
          { t: 'seg', a: [-3, 7], b: [2, 1], dash: true },
          { t: 'point', p: [-3, 7], label: 'P', dx: -12, dy: -6 },
          { t: 'point', p: [2, 1], label: "P'", dx: 12, dy: 8 },
          { t: 'point', p: [9, -4], label: 'Q', dx: 12, dy: 4 },
        ],
      },
      choices: ['$(4, 2)$', '$(5, -6)$', '$(14, -10)$', '$(3, 1)$'],
      answer: 2,
      solution:
        'Compare the matched pair: $2 - (-3) = 5$ across and $1 - 7 = -6$ up, so the rule is $(x, y) \\to (x + 5, y - 6)$. The second piece lands at $(9 + 5, -4 - 6) = (14, -10)$ ✓. Check a second, independent way by carrying the offset: the second piece sits $12$ units right and $11$ units down from the first, and a translation preserves that offset exactly, so its image sits $12$ right and $11$ down from $(2, 1)$, at $(14, -10)$ ✓. (The choice $(4, 2)$ is RUNNING THE SLIDE BACKWARDS, $5$ left and $6$ up ✗; the choice $(5, -6)$ is REPORTING THE SLIDE ITSELF rather than the image ✗; the choice $(3, 1)$ is SWAPPING THE TWO COMPONENTS OF THE SLIDE, moving $6$ across and $5$ up or down ✗.)',
    },
    {
      q: 'A quilt block is slid across a design grid by one translation, which sends the corner at $(8, 1)$ to $(3, -6)$. Where does the same translation send the bead at $(-2, 10)$?',
      fig: {
        view: [-4, -8, 10, 12],
        grid: true,
        elems: [
          { t: 'seg', a: [8, 1], b: [3, -6], dash: true },
          { t: 'point', p: [8, 1], label: 'C', dx: 12, dy: 4 },
          { t: 'point', p: [3, -6], label: "C'", dx: 12, dy: 8 },
          { t: 'point', p: [-2, 10], label: 'B', dx: -12, dy: -6 },
        ],
      },
      choices: ['$(-7, 3)$', '$(3, 17)$', '$(-5, -7)$', '$(-9, 5)$'],
      answer: 0,
      solution:
        'Read the slide from the corner: $3 - 8 = -5$ across and $-6 - 1 = -7$ up, so the rule is $(x, y) \\to (x - 5, y - 7)$. The bead lands at $(-2 - 5, 10 - 7) = (-7, 3)$ ✓. Check a second, independent way by carrying the offset: the bead sits $10$ units left and $9$ units above the corner, and a rigid slide keeps that relationship, so the image of the bead sits $10$ left and $9$ above $(3, -6)$, at $(-7, 3)$ ✓. (The choice $(3, 17)$ is RUNNING THE SLIDE BACKWARDS, $5$ right and $7$ up ✗; the choice $(-5, -7)$ is REPORTING THE SLIDE ITSELF instead of the image ✗; the choice $(-9, 5)$ is SWAPPING THE TWO COMPONENTS OF THE SLIDE, moving $7$ across and $5$ up or down ✗.)',
    },
  ],

  // slot 5 — CONCEPT: name the single transformation a composition amounts to.
  // Lane: 90 ccw then 180 -> 270 ccw / y = x then y = -x -> half-turn /
  // half-turn then x-axis -> reflection over the y-axis.
  [
    {
      q: 'A figure is rotated $90^\\circ$ counterclockwise about the origin, and the result is rotated $180^\\circ$ about the origin. The two turns together have the same effect as which single transformation?',
      choices: [
        'a $90^\\circ$ counterclockwise rotation about the origin',
        'a $180^\\circ$ rotation about the origin',
        'a reflection over the line $y = x$',
        'a $270^\\circ$ counterclockwise rotation about the origin',
      ],
      answer: 3,
      solution:
        'Rotations about the same center add their angles, and $90^\\circ + 180^\\circ = 270^\\circ$ counterclockwise ✓. Check a second, independent way by tracking a point through the rules: the first turn sends $(x, y) \\to (-y, x)$, and the half-turn flips both signs of that, giving $(y, -x)$ — which is exactly the $270^\\circ$ counterclockwise rule. Trying it on $(1, 0)$: the quarter-turn puts it at $(0, 1)$ and the half-turn puts it at $(0, -1)$, three quarters of the way around ✓. (The choice a $90^\\circ$ counterclockwise rotation is SUBTRACTING THE TWO ANGLES instead of adding them ✗; the choice a $180^\\circ$ rotation is REMEMBERING ONLY THE BIGGER TURN and ignoring the quarter-turn ✗; the choice a reflection over $y = x$ is ASSUMING A TWO-STEP COMPOSITION MUST FLIP THE FIGURE OVER, but two rotations preserve orientation ✗.)',
    },
    {
      q: 'A figure is reflected over the line $y = x$, and the result is reflected over the line $y = -x$. The two mirrors together have the same effect as which single transformation?',
      choices: [
        'a reflection over the x-axis',
        'a rotation of $180^\\circ$ about the origin',
        'a rotation of $90^\\circ$ counterclockwise about the origin',
        'a translation',
      ],
      answer: 1,
      solution:
        'Track a point through the two mirror rules: $y = x$ gives $(x, y) \\to (y, x)$, and $y = -x$ turns $(y, x)$ into $(-x, -y)$. Flipping both signs is the half-turn rule, so the pair is a $180^\\circ$ rotation about the origin ✓. Check a second, independent way with the angle between the mirrors: two reflections over lines that cross make a rotation about the crossing point through twice the angle between them. The lines $y = x$ and $y = -x$ are perpendicular, so the rotation is $2 \\cdot 90^\\circ = 180^\\circ$ about their crossing point, the origin. Testing $(3, 1)$: the first mirror sends it to $(1, 3)$ and the second sends that to $(-3, -1)$ ✓. (The choice a reflection over the x-axis is ASSUMING TWO REFLECTIONS STAY A REFLECTION, but each one reverses orientation and the second restores it ✗; the choice a $90^\\circ$ counterclockwise rotation is USING THE ANGLE BETWEEN THE MIRRORS INSTEAD OF TWICE THAT ANGLE ✗; the choice a translation is APPLYING THE PARALLEL-MIRROR RULE TO MIRRORS THAT CROSS ✗.)',
    },
    {
      q: 'A figure is rotated $180^\\circ$ about the origin, and the result is reflected over the x-axis. The two moves together have the same effect as which single transformation?',
      choices: [
        'a reflection over the line $y = x$',
        'a $180^\\circ$ rotation about the origin',
        'a reflection over the y-axis',
        'a reflection over the x-axis',
      ],
      answer: 2,
      solution:
        'Track a point through the rules: the half-turn sends $(x, y) \\to (-x, -y)$, and the x-axis mirror flips the second coordinate back, leaving $(-x, y)$. Flipping only the first coordinate is the y-axis mirror ✓. Check a second, independent way with an orientation count and one sample point: a rotation preserves orientation and a reflection reverses it, so the pair reverses orientation and must be a reflection. Sending $(4, 6)$ through the two moves gives $(-4, -6)$ and then $(-4, 6)$, whose midpoint with $(4, 6)$ is $(0, 6)$ — a point on the y-axis, so the y-axis is the mirror ✓. (The choice a reflection over the x-axis is COUNTING ONLY THE SECOND MOVE, as though the half-turn changed nothing ✗; the choice a $180^\\circ$ rotation is COUNTING ONLY THE FIRST MOVE ✗; the choice a reflection over $y = x$ is ASSUMING THE COMPOSITION SWAPS THE COORDINATES, but neither move ever trades $x$ for $y$ ✗.)',
    },
  ],

  // slot 6 — a 270 degree counterclockwise turn, (x, y) -> (y, -x). Second
  // route: split it as a half-turn followed by a quarter-turn.
  // Lane: (2,-9) -> (-9,-2) / (-6,-11) -> (-11,6) / (-13,8) -> (8,13).
  [
    {
      q: 'A radar sweep carries a blip at $(2, -9)$ through a $270^\\circ$ counterclockwise rotation about the origin. Where does the blip end up?',
      choices: ['$(9, 2)$', '$(-2, 9)$', '$(-9, 2)$', '$(-9, -2)$'],
      answer: 3,
      solution:
        'The $270^\\circ$ counterclockwise rule is $(x, y) \\to (y, -x)$, so the blip moves to $(-9, -2)$ ✓. Check a second, independent way by splitting the turn into $180^\\circ$ and then $90^\\circ$: the half-turn sends $(2, -9)$ to $(-2, 9)$, and the quarter-turn rule $(x, y) \\to (-y, x)$ sends that to $(-9, -2)$. The quadrants agree too: the blip starts in Quadrant IV, and three counterclockwise quarter-turns run IV to I to II to III, ending in Quadrant III, where $(-9, -2)$ lies ✓. (The choice $(9, 2)$ is USING THE $90^\\circ$ COUNTERCLOCKWISE RULE $(-y, x)$ instead of the $270^\\circ$ rule ✗; the choice $(-2, 9)$ is TURNING ONLY $180^\\circ$ and stopping halfway ✗; the choice $(-9, 2)$ is SWAPPING THE COORDINATES WITHOUT THE SIGN CHANGE, which is the mirror $y = x$ rather than a rotation ✗.)',
    },
    {
      q: 'A crane arm points at $(-6, -11)$ from its pivot at the origin. The operator swings the arm $270^\\circ$ counterclockwise. Where does its tip end up?',
      choices: ['$(-11, 6)$', '$(11, -6)$', '$(6, 11)$', '$(-11, -6)$'],
      answer: 0,
      solution:
        'Apply the $270^\\circ$ counterclockwise rule $(x, y) \\to (y, -x)$ to the tip: it lands at $(-11, 6)$ ✓. Check a second, independent way by splitting the swing: a $180^\\circ$ turn takes $(-6, -11)$ to $(6, 11)$, and a further $90^\\circ$ counterclockwise turn, $(x, y) \\to (-y, x)$, takes that to $(-11, 6)$. Both the start and the finish are $\\sqrt{36 + 121} = \\sqrt{157}$ from the pivot, as a rotation requires ✓. (The choice $(11, -6)$ is USING THE $90^\\circ$ COUNTERCLOCKWISE RULE $(-y, x)$ ✗; the choice $(6, 11)$ is SWINGING ONLY $180^\\circ$ and stopping halfway ✗; the choice $(-11, -6)$ is SWAPPING THE COORDINATES WITH NO SIGN CHANGE, the mirror $y = x$ instead of a turn ✗.)',
    },
    {
      q: 'A spinner arm reaches the point $(-13, 8)$ from its center at the origin. It is rotated $270^\\circ$ counterclockwise. What are the coordinates of the tip afterward?',
      choices: ['$(13, -8)$', '$(8, 13)$', '$(-8, -13)$', '$(8, -13)$'],
      answer: 1,
      solution:
        'The $270^\\circ$ counterclockwise rule $(x, y) \\to (y, -x)$ carries the tip to $(8, 13)$ ✓. Check a second, independent way by splitting the rotation: a half-turn sends $(-13, 8)$ to $(13, -8)$, and a $90^\\circ$ counterclockwise turn, $(x, y) \\to (-y, x)$, sends that to $(8, 13)$. The quadrants agree as well: the tip starts in Quadrant II, and three counterclockwise quarter-turns run II to III to IV to I, ending in Quadrant I where $(8, 13)$ lies ✓. (The choice $(-8, -13)$ is USING THE $90^\\circ$ COUNTERCLOCKWISE RULE $(-y, x)$ ✗; the choice $(13, -8)$ is TURNING ONLY $180^\\circ$ ✗; the choice $(8, -13)$ is SWAPPING THE COORDINATES WITHOUT THE SIGN CHANGE, a reflection over $y = x$ rather than a rotation ✗.)',
    },
  ],

  // slot 7 — shortest path from A down to the x-axis and on to B. Reflect one
  // endpoint under the road and measure straight across; the second route
  // reflects the other endpoint instead.
  // Lane: A(0,5) B(12,3) -> 4sqrt13 / A(0,5) B(16,7) -> 20 /
  // A(0,9) B(20,11) -> 20sqrt2.
  [
    {
      q: 'A courier starts at $A(0, 5)$, must touch the straight canal that runs along the x-axis, and then continue to a depot at $B(12, 3)$. What is the shortest possible total distance?',
      fig: {
        view: [-1, -5, 13, 7],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 5], b: [12, -3], dash: true },
          { t: 'seg', a: [12, 3], b: [12, -3], dash: true },
          { t: 'point', p: [0, 5], label: 'A', dx: -10, dy: -4 },
          { t: 'point', p: [12, 3], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [12, -3], label: "B'", dx: 12, dy: 8 },
        ],
      },
      choices: ['$2\\sqrt{37}$', '$13$', '$4\\sqrt{13}$', '$20$'],
      answer: 2,
      solution:
        'Reflect the depot under the canal: $B(12, 3)$ becomes $B\'(12, -3)$. Every path that touches the canal has the same length as the matching path from $A$ to $B\'$, and the shortest of those is the straight one, $AB\' = \\sqrt{12^2 + (5 - (-3))^2} = \\sqrt{144 + 64} = \\sqrt{208} = 4\\sqrt{13}$ ✓. Check a second, independent way by reflecting the other endpoint instead: put $A$ under the canal at $A\'(0, -5)$ and measure straight to $B(12, 3)$, giving $\\sqrt{12^2 + (3 - (-5))^2} = \\sqrt{144 + 64} = 4\\sqrt{13}$ — the same length, as it must be ✓. (The choice $2\\sqrt{37}$ is SUBTRACTING THE TWO HEIGHTS INSTEAD OF ADDING THEM, which measures the direct flight from $A$ to $B$ and never reaches the canal ✗; the choice $13$ is DROPPING $B$ ONTO THE CANAL AT $(12, 0)$ INSTEAD OF ACROSS IT ✗; the choice $20$ is TAKING THE CORNERED ROUTE straight down to the canal, along it, and back up ✗.)',
    },
    {
      q: 'A hiker at $A(0, 5)$ has to fill a bottle at the stream running along the x-axis and then reach a shelter at $B(16, 7)$. What is the shortest total distance she can walk?',
      fig: {
        view: [-1, -9, 17, 9],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 5], b: [16, -7], dash: true },
          { t: 'seg', a: [16, 7], b: [16, -7], dash: true },
          { t: 'point', p: [0, 5], label: 'A', dx: -10, dy: -4 },
          { t: 'point', p: [16, 7], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [16, -7], label: "B'", dx: 12, dy: 8 },
        ],
      },
      choices: ['$20$', '$2\\sqrt{65}$', '$28$', '$\\sqrt{281}$'],
      answer: 0,
      solution:
        'Reflect the shelter under the stream: $B(16, 7)$ becomes $B\'(16, -7)$. Any route that touches the stream matches a route to $B\'$ of the same length, and the shortest is the straight segment $AB\' = \\sqrt{16^2 + (5 - (-7))^2} = \\sqrt{256 + 144} = \\sqrt{400} = 20$ ✓. Check a second, independent way by reflecting the hiker instead: from $A\'(0, -5)$ straight to $B(16, 7)$ is $\\sqrt{16^2 + (7 - (-5))^2} = \\sqrt{256 + 144} = 20$, matching exactly ✓. (The choice $2\\sqrt{65}$ is SUBTRACTING THE TWO HEIGHTS INSTEAD OF ADDING THEM, the direct $A$-to-$B$ walk that skips the stream ✗; the choice $28$ is TAKING THE CORNERED ROUTE down to the stream, along it, and back up ✗; the choice $\\sqrt{281}$ is DROPPING $B$ ONTO THE STREAM AT $(16, 0)$ INSTEAD OF REFLECTING IT ACROSS ✗.)',
    },
    {
      q: 'A robot vacuum begins at $A(0, 9)$, must touch the charging strip laid along the x-axis, and then park at $B(20, 11)$. What is the shortest total distance it can travel?',
      fig: {
        view: [-1, -13, 21, 13],
        grid: true,
        elems: [
          { t: 'seg', a: [0, 9], b: [20, -11], dash: true },
          { t: 'seg', a: [20, 11], b: [20, -11], dash: true },
          { t: 'point', p: [0, 9], label: 'A', dx: -10, dy: -4 },
          { t: 'point', p: [20, 11], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [20, -11], label: "B'", dx: 12, dy: 8 },
        ],
      },
      choices: ['$2\\sqrt{101}$', '$\\sqrt{481}$', '$40$', '$20\\sqrt{2}$'],
      answer: 3,
      solution:
        'Reflect the parking spot under the strip: $B(20, 11)$ becomes $B\'(20, -11)$. Every touching route has a partner of equal length running to $B\'$, and the shortest partner is the straight one, $AB\' = \\sqrt{20^2 + (9 - (-11))^2} = \\sqrt{400 + 400} = \\sqrt{800} = 20\\sqrt{2}$ ✓. Check a second, independent way by reflecting the start instead: from $A\'(0, -9)$ straight to $B(20, 11)$ is $\\sqrt{20^2 + (11 - (-9))^2} = \\sqrt{800} = 20\\sqrt{2}$, the same distance ✓. (The choice $2\\sqrt{101}$ is SUBTRACTING THE TWO HEIGHTS INSTEAD OF ADDING THEM, the direct trip that never touches the strip ✗; the choice $\\sqrt{481}$ is DROPPING $B$ ONTO THE STRIP AT $(20, 0)$ INSTEAD OF ACROSS IT ✗; the choice $40$ is TAKING THE CORNERED ROUTE down to the strip, along it, and back up ✗.)',
    },
  ],

  // slot 8 — dilate from the origin, then translate. Second route: undo the
  // pair backwards from the keyed answer.
  // Lane: (10,-15) k 2/5 then (x-3, y+8) -> (1,2) / (14,-21) k 3/7 then
  // (x-10, y+4) -> (-4,-5) / (-18,27) k 1/9 then (x+7, y-12) -> (5,-9).
  [
    {
      q: 'The point $(10, -15)$ is dilated from the origin with scale factor $\\frac{2}{5}$, and the image is then translated by $(x, y) \\to (x - 3, y + 8)$. Where does the point finish?',
      choices: ['$(4, -6)$', '$(7, -7)$', '$(1, 2)$', '$(7, -14)$'],
      answer: 2,
      solution:
        'Do the dilation first, since it is named first: multiplying both coordinates by $\\frac{2}{5}$ turns $(10, -15)$ into $(4, -6)$. The translation then shifts that $3$ left and $8$ up, to $(1, 2)$ ✓. Check a second, independent way by undoing the pair from the answer: reversing the slide sends $(1, 2)$ back to $(1 + 3, 2 - 8) = (4, -6)$, and undoing the dilation multiplies by $\\frac{5}{2}$ to give $(10, -15)$ — the point we started with ✓. (The choice $(4, -6)$ is STOPPING AFTER THE DILATION and never sliding ✗; the choice $(7, -7)$ is TRANSLATING THE ORIGINAL POINT WITHOUT DILATING IT ✗; the choice $(7, -14)$ is RUNNING THE SLIDE BACKWARDS after a correct dilation ✗.)',
    },
    {
      q: 'The point $(14, -21)$ is dilated from the origin with scale factor $\\frac{3}{7}$, and the image is then translated by $(x, y) \\to (x - 10, y + 4)$. What is the final position?',
      choices: ['$(-4, -5)$', '$(6, -9)$', '$(4, -17)$', '$(16, -13)$'],
      answer: 0,
      solution:
        'Take the dilation first: multiplying both coordinates by $\\frac{3}{7}$ sends $(14, -21)$ to $(6, -9)$. The slide then moves that $10$ left and $4$ up, landing on $(-4, -5)$ ✓. Check a second, independent way by running the pair backwards from the answer: undoing the slide takes $(-4, -5)$ to $(-4 + 10, -5 - 4) = (6, -9)$, and undoing the dilation multiplies by $\\frac{7}{3}$ to return $(14, -21)$ ✓. (The choice $(6, -9)$ is STOPPING AFTER THE DILATION ✗; the choice $(4, -17)$ is TRANSLATING THE ORIGINAL POINT AND SKIPPING THE DILATION ✗; the choice $(16, -13)$ is RUNNING THE SLIDE BACKWARDS after a correct dilation ✗.)',
    },
    {
      q: 'The point $(-18, 27)$ is dilated from the origin with scale factor $\\frac{1}{9}$, and the image is then translated by $(x, y) \\to (x + 7, y - 12)$. Where does it end up?',
      choices: ['$(-2, 3)$', '$(5, -9)$', '$(-11, 15)$', '$(-9, 15)$'],
      answer: 1,
      solution:
        'Shrink first, as the problem states: dividing both coordinates by $9$ carries $(-18, 27)$ to $(-2, 3)$. The slide then moves that $7$ right and $12$ down, to $(5, -9)$ ✓. Check a second, independent way by undoing both moves from the answer: reversing the slide sends $(5, -9)$ back to $(5 - 7, -9 + 12) = (-2, 3)$, and undoing the dilation multiplies by $9$ to recover $(-18, 27)$ ✓. (The choice $(-2, 3)$ is STOPPING AFTER THE DILATION ✗; the choice $(-11, 15)$ is TRANSLATING THE ORIGINAL POINT WITHOUT SHRINKING IT ✗; the choice $(-9, 15)$ is RUNNING THE SLIDE BACKWARDS after a correct dilation ✗.)',
    },
  ],

  // slot 9 — CONCEPT: what a stated rotational symmetry forces. Only the
  // doubled angle is guaranteed; mirrors and regularity are not.
  // Lane: 120 -> 240 / 60 -> 120 / 45 -> 90.
  [
    {
      q: 'A figure is carried onto itself by a $120^\\circ$ rotation about its center. Which statement MUST be true?',
      choices: [
        'it also has $240^\\circ$ rotational symmetry',
        'it also has $60^\\circ$ rotational symmetry',
        'it must be an equilateral triangle',
        'it must have three lines of symmetry',
      ],
      answer: 0,
      solution:
        'Apply the given turn twice. If one $120^\\circ$ turn lands the figure exactly on itself, then a second $120^\\circ$ turn does the same again, and the two together are a $240^\\circ$ turn about the same center, so $240^\\circ$ rotational symmetry is forced ✓. Check a second, independent way by exhibiting a figure that has the stated symmetry and nothing more: a pinwheel with three identical curved blades comes back to itself after $120^\\circ$ and after $240^\\circ$, but it has no mirror line at all and it is neither a triangle nor regular. Its blades are swept, so a $60^\\circ$ turn leaves them pointing the wrong way. That single figure kills the other three statements while satisfying this one ✓. (The choice $60^\\circ$ rotational symmetry is HALVING THE ANGLE, but nothing says a $120^\\circ$ turn can be split ✗; the choice it must be an equilateral triangle is CONFUSING THE SYMMETRY WITH ONE FAMILIAR FIGURE THAT HAS IT ✗; the choice three lines of symmetry is ASSUMING ROTATIONAL SYMMETRY DRAGS MIRROR SYMMETRY ALONG WITH IT ✗.)',
    },
    {
      q: 'A figure is carried onto itself by a $60^\\circ$ rotation about its center. Which statement MUST be true?',
      choices: [
        'it must have six lines of symmetry',
        'it also has $30^\\circ$ rotational symmetry',
        'it must be a regular hexagon',
        'it also has $120^\\circ$ rotational symmetry',
      ],
      answer: 3,
      solution:
        'Do the given turn twice. One $60^\\circ$ turn maps the figure onto itself, so a second one does too, and the two together make a $120^\\circ$ turn about the same center — that symmetry is guaranteed ✓. Check a second, independent way by exhibiting a figure with the stated symmetry and nothing more: a pinwheel with six identical swept blades returns to itself after $60^\\circ$ and after $120^\\circ$, yet it has no mirror lines and it is not a hexagon, and turning it only $30^\\circ$ leaves every blade halfway between two slots. That one figure rules out the other three statements ✓. (The choice $30^\\circ$ rotational symmetry is HALVING THE GIVEN ANGLE, which nothing guarantees ✗; the choice it must be a regular hexagon is CONFUSING THE SYMMETRY WITH ONE FAMILIAR FIGURE THAT HAS IT ✗; the choice six lines of symmetry is ASSUMING ROTATIONAL SYMMETRY FORCES MIRROR SYMMETRY ✗.)',
    },
    {
      q: 'A figure is carried onto itself by a $45^\\circ$ rotation about its center. Which statement MUST be true?',
      choices: [
        'it must be a regular octagon',
        'it also has $22.5^\\circ$ rotational symmetry',
        'it also has $90^\\circ$ rotational symmetry',
        'it must have eight lines of symmetry',
      ],
      answer: 2,
      solution:
        'Repeat the given turn. A $45^\\circ$ rotation maps the figure onto itself, so doing it a second time maps it onto itself again, and the two turns together are a $90^\\circ$ rotation about the same center ✓. Check a second, independent way by exhibiting a figure that has the stated symmetry and nothing more: a pinwheel with eight identical swept blades matches itself after $45^\\circ$ and after $90^\\circ$, but it has no mirror line, it is not an octagon, and a $22.5^\\circ$ turn leaves the blades between slots. That figure disposes of the other three statements ✓. (The choice $22.5^\\circ$ rotational symmetry is HALVING THE GIVEN ANGLE with nothing to justify it ✗; the choice it must be a regular octagon is CONFUSING THE SYMMETRY WITH ONE FAMILIAR FIGURE THAT HAS IT ✗; the choice eight lines of symmetry is ASSUMING ROTATIONAL SYMMETRY BRINGS MIRROR SYMMETRY WITH IT ✗.)',
    },
  ],

  // slot 10 — mirror over y = x, then a quarter-turn. The pair is the single
  // reflection over the y-axis, which is the second route.
  // Lane: (3,7) -> (-3,7) / (-2,6) -> (2,6) / (5,-8) -> (-5,-8).
  [
    {
      q: 'A vertex of a kite is at $(3, 7)$. The kite is reflected over the line $y = x$, and the image is then rotated $90^\\circ$ counterclockwise about the origin. Where does that vertex end up?',
      fig: {
        view: [-1, -1, 9, 9],
        grid: true,
        elems: [
          { t: 'seg', a: [-1, -1], b: [9, 9], dash: true },
          { t: 'point', p: [3, 7], label: 'V', dx: -10, dy: -6 },
        ],
      },
      choices: ['$(7, 3)$', '$(-3, 7)$', '$(3, -7)$', '$(-7, -3)$'],
      answer: 1,
      solution:
        'Take the mirror first. Reflecting over $y = x$ trades the coordinates, so $(3, 7)$ becomes $(7, 3)$, and the quarter-turn rule $(x, y) \\to (-y, x)$ then sends that to $(-3, 7)$ ✓. Check a second, independent way by combining the two moves into one rule: the pair sends $(x, y) \\to (y, x) \\to (-x, y)$, which flips only the first coordinate — the reflection over the y-axis. That rule takes $(3, 7)$ straight to $(-3, 7)$, a point at the same height and the same distance from the y-axis ✓. (The choice $(7, 3)$ is STOPPING AFTER THE MIRROR and never rotating ✗; the choice $(3, -7)$ is DOING THE TWO MOVES IN THE OPPOSITE ORDER, rotating first and reflecting second ✗; the choice $(-7, -3)$ is USING THE y-AXIS AS THE MIRROR instead of the line $y = x$ ✗.)',
    },
    {
      q: 'A corner of a paper snowflake sits at $(-2, 6)$. The snowflake is reflected over the line $y = x$, and that image is rotated $90^\\circ$ counterclockwise about the origin. What are the coordinates of the corner afterward?',
      fig: {
        view: [-3, -3, 7, 7],
        grid: true,
        elems: [
          { t: 'seg', a: [-3, -3], b: [7, 7], dash: true },
          { t: 'point', p: [-2, 6], label: 'C', dx: -10, dy: -6 },
        ],
      },
      choices: ['$(6, -2)$', '$(-2, -6)$', '$(-6, 2)$', '$(2, 6)$'],
      answer: 3,
      solution:
        'Reflect before rotating. The mirror $y = x$ trades the coordinates, turning $(-2, 6)$ into $(6, -2)$, and the rule $(x, y) \\to (-y, x)$ then carries that to $(2, 6)$ ✓. Check a second, independent way with the combined rule: the mirror followed by the quarter-turn is $(x, y) \\to (y, x) \\to (-x, y)$, the reflection over the y-axis. It sends $(-2, 6)$ directly to $(2, 6)$, and the midpoint of those two points is $(0, 6)$, which sits on the y-axis exactly as a mirror image should ✓. (The choice $(6, -2)$ is STOPPING AFTER THE MIRROR ✗; the choice $(-2, -6)$ is DOING THE TWO MOVES IN THE OPPOSITE ORDER ✗; the choice $(-6, 2)$ is USING THE y-AXIS AS THE MIRROR instead of the line $y = x$ ✗.)',
    },
    {
      q: 'A marker on a board game is at $(5, -8)$. The board is flipped over the line $y = x$ and the result is spun $90^\\circ$ counterclockwise about the origin. Where is the marker then?',
      fig: {
        view: [-9, -9, 6, 6],
        grid: true,
        elems: [
          { t: 'seg', a: [-9, -9], b: [6, 6], dash: true },
          { t: 'point', p: [5, -8], label: 'M', dx: 12, dy: 4 },
        ],
      },
      choices: ['$(-8, 5)$', '$(5, 8)$', '$(-5, -8)$', '$(8, -5)$'],
      answer: 2,
      solution:
        'Flip first. Reflecting over $y = x$ swaps the coordinates, so $(5, -8)$ becomes $(-8, 5)$, and the quarter-turn rule $(x, y) \\to (-y, x)$ then sends that to $(-5, -8)$ ✓. Check a second, independent way by folding the moves together: the mirror followed by the turn is $(x, y) \\to (y, x) \\to (-x, y)$, which is the reflection over the y-axis, and it takes $(5, -8)$ to $(-5, -8)$ in one step — the same depth, the same distance from the y-axis, opposite side ✓. (The choice $(-8, 5)$ is STOPPING AFTER THE FLIP ✗; the choice $(5, 8)$ is DOING THE TWO MOVES IN THE OPPOSITE ORDER ✗; the choice $(8, -5)$ is USING THE y-AXIS AS THE MIRROR rather than the line $y = x$ ✗.)',
    },
  ],

  // slot 11 — from an area factor back to a length factor: take the square
  // root. Second route: scale a concrete square until its area matches.
  // Lane: areas x5 -> sqrt5 / x13 -> sqrt13 / x7 -> sqrt7.
  [
    {
      q: 'A dilation multiplies the area of every figure it touches by $5$. What is its positive scale factor?',
      choices: ['$5$', '$\\sqrt{5}$', '$25$', '$\\frac{5}{2}$'],
      answer: 1,
      solution:
        'A dilation with scale factor $k$ stretches both dimensions, so areas are multiplied by $k^2$. Setting $k^2 = 5$ and keeping the positive root gives $k = \\sqrt{5}$ ✓. Check a second, independent way with a concrete square: a square of side $10$ has area $100$, and its image must have area $500$. A square of area $500$ has side $\\sqrt{500} = 10\\sqrt{5}$, so the sides grew by the factor $\\frac{10\\sqrt{5}}{10} = \\sqrt{5}$ ✓. (The choice $5$ is COPYING THE AREA FACTOR AS THE SCALE FACTOR, which would multiply areas by $25$ instead ✗; the choice $25$ is SQUARING WHEN THE PROBLEM CALLS FOR A SQUARE ROOT ✗; the choice $\\frac{5}{2}$ is HALVING THE AREA FACTOR instead of taking its square root ✗.)',
    },
    {
      q: 'Every figure a certain dilation touches comes out with $13$ times its original area. What is the positive scale factor of the dilation?',
      choices: ['$13$', '$169$', '$\\frac{13}{2}$', '$\\sqrt{13}$'],
      answer: 3,
      solution:
        'Lengths are multiplied by $k$ and areas by $k^2$, since a dilation stretches a figure in both directions at once. From $k^2 = 13$ the positive scale factor is $k = \\sqrt{13}$ ✓. Check a second, independent way with a concrete square: start with side $10$ and area $100$; the image must have area $1300$, so its side is $\\sqrt{1300} = 10\\sqrt{13}$, and the sides grew by $\\frac{10\\sqrt{13}}{10} = \\sqrt{13}$ ✓. (The choice $13$ is COPYING THE AREA FACTOR AS THE SCALE FACTOR, which would multiply areas by $169$ ✗; the choice $169$ is SQUARING INSTEAD OF TAKING A SQUARE ROOT ✗; the choice $\\frac{13}{2}$ is HALVING THE AREA FACTOR rather than taking its square root ✗.)',
    },
    {
      q: 'A dilation is designed so that the area of every image is $7$ times the area of the original. What is its positive scale factor?',
      choices: ['$\\sqrt{7}$', '$7$', '$49$', '$\\frac{7}{2}$'],
      answer: 0,
      solution:
        'Because a dilation scales a figure in both directions, area picks up a factor of $k^2$. Solving $k^2 = 7$ and taking the positive root gives $k = \\sqrt{7}$ ✓. Check a second, independent way with a concrete square: a square of side $10$ has area $100$, so its image has area $700$ and side $\\sqrt{700} = 10\\sqrt{7}$; the ratio of the sides is $\\frac{10\\sqrt{7}}{10} = \\sqrt{7}$ ✓. (The choice $7$ is COPYING THE AREA FACTOR AS THE SCALE FACTOR, which would multiply areas by $49$ ✗; the choice $49$ is SQUARING INSTEAD OF TAKING A SQUARE ROOT ✗; the choice $\\frac{7}{2}$ is HALVING THE AREA FACTOR instead of rooting it ✗.)',
    },
  ],

  // slot 12 — two parallel mirrors make a translation of TWICE the gap, in the
  // direction from the first mirror to the second.
  // Lane: y = 1 then y = 5 -> (x, y + 8) / y = -2 then y = 4 -> (x, y + 12) /
  // x = 6 then x = 1 -> (x - 10, y).
  [
    {
      q: 'A figure is reflected over the line $y = 1$, and the image is then reflected over the line $y = 5$. Which single translation does the same job?',
      fig: {
        view: [-1, -2, 8, 8],
        grid: true,
        elems: [
          { t: 'seg', a: [-1, 1], b: [8, 1], dash: true },
          { t: 'seg', a: [-1, 5], b: [8, 5], dash: true },
          { t: 'label', p: [6.5, 1], text: 'y = 1', dx: 0, dy: 14 },
          { t: 'label', p: [6.5, 5], text: 'y = 5', dx: 0, dy: -8 },
        ],
      },
      choices: [
        '$(x, y) \\to (x, y + 8)$',
        '$(x, y) \\to (x, y + 4)$',
        '$(x, y) \\to (x, y - 8)$',
        '$(x, y) \\to (x + 8, y)$',
      ],
      answer: 0,
      solution:
        'Send a test point through both mirrors. Take $(0, 0)$: it sits $1$ below $y = 1$, so it lands $1$ above at $(0, 2)$; that image sits $3$ below $y = 5$, so it lands $3$ above at $(0, 8)$. The point rose $8$ with no sideways drift, which is $(x, y) \\to (x, y + 8)$ ✓. Check a second, independent way with the rules themselves: the mirror $y = 1$ sends $y \\to 2 - y$, and the mirror $y = 5$ sends that to $10 - (2 - y) = y + 8$, while $x$ is untouched by both. The same fact in words: two parallel mirrors make a translation of twice the gap between them, and the gap is $5 - 1 = 4$, so the slide is $8$ in the direction from the first mirror toward the second ✓. (The choice $(x, y + 4)$ is FORGETTING TO DOUBLE THE GAP ✗; the choice $(x, y - 8)$ is SLIDING FROM THE SECOND MIRROR TOWARD THE FIRST, the wrong direction ✗; the choice $(x + 8, y)$ is SLIDING PARALLEL TO THE MIRRORS instead of across them ✗.)',
    },
    {
      q: 'A shape is reflected over the line $y = -2$, and that image is reflected over the line $y = 4$. Which single translation has the same effect?',
      fig: {
        view: [-1, -5, 8, 7],
        grid: true,
        elems: [
          { t: 'seg', a: [-1, -2], b: [8, -2], dash: true },
          { t: 'seg', a: [-1, 4], b: [8, 4], dash: true },
          { t: 'label', p: [6.5, -2], text: 'y = -2', dx: 0, dy: 14 },
          { t: 'label', p: [6.5, 4], text: 'y = 4', dx: 0, dy: -8 },
        ],
      },
      choices: [
        '$(x, y) \\to (x, y + 6)$',
        '$(x, y) \\to (x, y + 12)$',
        '$(x, y) \\to (x, y - 12)$',
        '$(x, y) \\to (x + 12, y)$',
      ],
      answer: 1,
      solution:
        'Push a test point through both mirrors. Take $(0, 0)$: it is $2$ above $y = -2$, so it drops to $2$ below, at $(0, -4)$; that point is $8$ below $y = 4$, so it rises to $8$ above, at $(0, 12)$. The net move is $12$ straight up with no sideways drift, which is $(x, y) \\to (x, y + 12)$ ✓. Check a second, independent way with the rules: the mirror $y = -2$ sends $y \\to -4 - y$, and the mirror $y = 4$ sends that to $8 - (-4 - y) = y + 12$, leaving $x$ alone. Said another way, two parallel mirrors give a translation of twice the gap, and the gap is $4 - (-2) = 6$, so the slide is $12$ in the direction from the first mirror to the second ✓. (The choice $(x, y + 6)$ is FORGETTING TO DOUBLE THE GAP ✗; the choice $(x, y - 12)$ is SLIDING FROM THE SECOND MIRROR TOWARD THE FIRST ✗; the choice $(x + 12, y)$ is SLIDING PARALLEL TO THE MIRRORS instead of across them ✗.)',
    },
    {
      q: 'A design is reflected over the line $x = 6$, and the image is then reflected over the line $x = 1$. Which single translation matches the pair?',
      fig: {
        view: [-2, -1, 9, 6],
        grid: true,
        elems: [
          { t: 'seg', a: [6, -1], b: [6, 6], dash: true },
          { t: 'seg', a: [1, -1], b: [1, 6], dash: true },
          { t: 'label', p: [6, 5], text: 'x = 6', dx: 20, dy: 0 },
          { t: 'label', p: [1, 5], text: 'x = 1', dx: -20, dy: 0 },
        ],
      },
      choices: [
        '$(x, y) \\to (x - 5, y)$',
        '$(x, y) \\to (x + 10, y)$',
        '$(x, y) \\to (x - 10, y)$',
        '$(x, y) \\to (x, y - 10)$',
      ],
      answer: 2,
      solution:
        'Run a test point through both mirrors. Take $(0, 0)$: it is $6$ left of $x = 6$, so it lands $6$ right of it, at $(12, 0)$; that point is $11$ right of $x = 1$, so it lands $11$ left of it, at $(-10, 0)$. The net move is $10$ to the left with no change in height, which is $(x, y) \\to (x - 10, y)$ ✓. Check a second, independent way with the rules: the mirror $x = 6$ sends $x \\to 12 - x$, and the mirror $x = 1$ sends that to $2 - (12 - x) = x - 10$, while $y$ never moves. The same result comes from the parallel-mirror fact: the gap is $6 - 1 = 5$, so the slide is $10$, running from the first mirror toward the second, which here means to the left ✓. (The choice $(x - 5, y)$ is FORGETTING TO DOUBLE THE GAP ✗; the choice $(x + 10, y)$ is SLIDING TOWARD THE FIRST MIRROR INSTEAD OF THE SECOND ✗; the choice $(x, y - 10)$ is SLIDING PARALLEL TO THE MIRRORS instead of across them ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 16,
  challenge,
}
