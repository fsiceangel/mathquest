// Introduction to Geometry chapter 3 — variations for section 3.6
// (Isosceles and Equilateral Triangles). All problems, figures, and solutions
// are original MathQuest content.
//
// House rules for this file:
//  - Every angle and every length was worked twice, by two routes that do not
//    share arithmetic: the $180^\circ$ sum against the fold down the axis of
//    symmetry, the equilateral $60^\circ$ against a perturbation ("how far is
//    this triangle from equilateral?"), an algebraic solve against a backward
//    test of the four printed candidates, one sub-triangle against the other
//    sub-triangle plus the straight angle, and a perimeter against the half
//    perimeter the fold creates. The two routes must agree before a key is
//    written down.
//  - Each slot keeps the shape of its base answer: a "which angles are equal"
//    stays a naming question, a "find each base angle" never quietly turns into
//    a "find the vertex angle", and a perimeter question is answered with a
//    perimeter and not with one side.
//  - Every figure was built from its own numbers. The isosceles triangles are
//    constructed with the apex directly above the midpoint of the base, so the
//    two ticked legs are equal by construction, and the half-base was set to
//    height $\times \tan(\text{vertex}/2)$ so that a printed angle really is
//    the angle drawn.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this section are: ANSWERING A NEIGHBORING
//    PAIR, ASSUMING ALL THREE ANGLES ARE EQUAL, ASSUMING THE TRIANGLE IS
//    EQUILATERAL, CONFUSING THE VERTEX ANGLE WITH A BASE ANGLE, MATCHING AN
//    ANGLE TO A SIDE THAT TOUCHES IT, DENYING THE CONVERSE, STOPPING AT
//    ISOSCELES, CONFUSING AN ANGLE MEASURE WITH A SIDE LENGTH, ANSWERING ONE
//    ANGLE INSTEAD OF THE PAIR, ADDING ALL THREE ANGLES, ASSUMING A RIGHT
//    ANGLE, DIVIDING 180 BY 2, USING 360 INSTEAD OF 180, ANSWERING THE
//    HALF-SQUARE CASE, FORGETTING TO SPLIT THE LEFTOVER, COPYING THE VERTEX
//    ANGLE, HALVING THE VERTEX ANGLE, SUBTRACTING ONLY ONE BASE ANGLE,
//    ANSWERING THE TWO BASE ANGLES TOGETHER, COPYING A BASE ANGLE, ANSWERING x
//    ITSELF, ANSWERING A BASE ANGLE INSTEAD OF THE VERTEX, DROPPING THE
//    CONSTANT, FORGETTING TO SPLIT THE LEFTOVER BETWEEN THE TWO LEGS, HALVING
//    THE PERIMETER, ADDING THE BASE INSTEAD OF SUBTRACTING, TREATING THE GIVEN
//    LENGTH AS A LEG, ANSWERING ONE SIDE INSTEAD OF THE PERIMETER, COUNTING
//    ONLY TWO SIDES, ANSWERING THE ANGLE ON THE OTHER SIDE OF THE FOOT,
//    ANSWERING THE HALF-ANGLE ITSELF, SUBTRACTING ONLY THE HALF-ANGLE,
//    FORGETTING TO BISECT, COUNTING ONLY ONE BASE ANGLE, and DIVIDING BY THE
//    MULTIPLIER.
//  - No two choices inside an item name the same value.

const s36 = [
  // s1 — equal sides are marked; name the angles that must match.
  [
    {
      q: 'In triangle $DEF$ the tick marks show that $DE = DF$. Which angles must be equal?',
      fig: {
        view: [-1, -1, 5, 4.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 3]], fill: false },
          { t: 'point', p: [0, 0], label: 'E', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'F', dx: 10, dy: 10 },
          { t: 'point', p: [2, 3], label: 'D', dx: 0, dy: -10 },
          { t: 'tick', a: [2, 3], b: [0, 0], n: 1 },
          { t: 'tick', a: [2, 3], b: [4, 0], n: 1 },
        ],
      },
      choices: ['$\\angle D = \\angle E$', '$\\angle D = \\angle F$', '$\\angle E = \\angle F$', 'All three angles must be equal'],
      answer: 2,
      solution:
        'Equal angles sit OPPOSITE equal sides, so start by naming what each leg faces. Leg $\\overline{DE}$ is faced by $\\angle F$, and leg $\\overline{DF}$ is faced by $\\angle E$; the legs are equal, so $\\angle E = \\angle F$ ✓ — the two angles that touch the base $\\overline{EF}$. Check a second, independent way with a mirror instead of a theorem. Fold the triangle along the crease that runs from $D$ to the midpoint of $\\overline{EF}$: the crease sends $E$ to $F$ and $F$ to $E$, and since $DE = DF$ the two halves land exactly on top of each other. A fold that carries $\\angle E$ onto $\\angle F$ can only do so if the two angles are the same size ✓. $\\angle D$ is left over as the vertex angle and is free to be anything. (The choice $\\angle D = \\angle E$ is ANSWERING A NEIGHBORING PAIR, two angles that happen to sit next to each other rather than opposite the equal sides ✗; $\\angle D = \\angle F$ is the same slip on the other side ✗; "All three" is ASSUMING ALL THREE ANGLES ARE EQUAL, which needs all three SIDES equal, and only two are marked ✗.)',
    },
    {
      q: 'In triangle $PQR$, $PQ = PR$. Which angle does NOT have to be equal to either of the other two?',
      fig: {
        view: [-1, -1, 5.2, 4.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2, 0], [2.1, 3.4]], fill: false },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 10 },
          { t: 'point', p: [4.2, 0], label: 'R', dx: 10, dy: 10 },
          { t: 'point', p: [2.1, 3.4], label: 'P', dx: 0, dy: -10 },
          { t: 'tick', a: [2.1, 3.4], b: [0, 0], n: 1 },
          { t: 'tick', a: [2.1, 3.4], b: [4.2, 0], n: 1 },
        ],
      },
      choices: ['$\\angle Q$', '$\\angle P$', '$\\angle R$', 'Every angle matches the other two'],
      answer: 1,
      solution:
        'The equal sides $\\overline{PQ}$ and $\\overline{PR}$ are the legs, and they meet at $P$, so $\\angle P$ is the vertex angle. The Base Angle Theorem ties down the two angles opposite the legs — $\\angle R$ (opposite $\\overline{PQ}$) and $\\angle Q$ (opposite $\\overline{PR}$) — and says nothing about $\\angle P$, so $\\angle P$ is the free one ✓. Check a second, independent way by bending the triangle instead of quoting the theorem. Pin two sticks of equal length together at $P$ and swing them like scissors: $\\angle P$ opens and closes freely, taking any value from a sliver up to nearly $180^\\circ$, and at every setting the two base angles stay level with each other because the picture stays symmetric about the line through $P$ ✓. The angle you can change at will is the one that need not match. (The choice $\\angle Q$ is CONFUSING THE VERTEX ANGLE WITH A BASE ANGLE ✗; $\\angle R$ is the same slip on the other side ✗; "Every angle matches" is ASSUMING THE TRIANGLE IS EQUILATERAL, which would take a third tick mark on $\\overline{QR}$ ✗.)',
    },
    {
      q: 'A pennant is cut as triangle $STU$, and the tick marks show that its two long edges $TS$ and $TU$ are equal. Which two angles of the pennant must be equal?',
      fig: {
        view: [-1, -1, 4.6, 5.1],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.6, 0], [1.8, 3.9]], fill: false },
          { t: 'point', p: [0, 0], label: 'S', dx: -10, dy: 10 },
          { t: 'point', p: [3.6, 0], label: 'U', dx: 10, dy: 10 },
          { t: 'point', p: [1.8, 3.9], label: 'T', dx: 0, dy: -10 },
          { t: 'tick', a: [1.8, 3.9], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.8, 3.9], b: [3.6, 0], n: 1 },
        ],
      },
      choices: ['$\\angle T = \\angle S$', '$\\angle T = \\angle U$', 'All three angles are equal', '$\\angle S = \\angle U$'],
      answer: 3,
      solution:
        'Track what each equal edge faces. Edge $\\overline{TS}$ is opposite $\\angle U$, and edge $\\overline{TU}$ is opposite $\\angle S$; the two edges are equal, so their opposite angles are equal: $\\angle S = \\angle U$ ✓, the pair sitting on the short bottom edge. Check a second, independent way by comparing sizes rather than by naming. In any triangle the longer side faces the bigger angle. If $\\angle S$ were bigger than $\\angle U$, then the edge facing $\\angle S$ — that is $\\overline{TU}$ — would have to be longer than the edge facing $\\angle U$, which is $\\overline{TS}$. The tick marks say those two edges are the same length, so neither angle can outgrow the other, and they must be equal ✓. (The choice $\\angle T = \\angle S$ is MATCHING AN ANGLE TO A SIDE THAT TOUCHES IT instead of the side across from it ✗; $\\angle T = \\angle U$ is the same slip mirrored ✗; "All three" is ASSUMING ALL THREE ANGLES ARE EQUAL, which would need the bottom edge marked too ✗.)',
    },
  ],
  // s2 — the equilateral angle, approached from three directions.
  [
    {
      q: 'A floor tile is cut as an equilateral triangle. What is the sum of two of its angles?',
      choices: ['$120^\\circ$', '$60^\\circ$', '$180^\\circ$', '$90^\\circ$'],
      answer: 0,
      solution:
        'Equilateral means equiangular, and three equal angles share $180^\\circ$, so each is $180^\\circ \\div 3 = 60^\\circ$. Two of them come to $60^\\circ + 60^\\circ = 120^\\circ$ ✓. Check a second, independent way without ever finding one angle. The three angles are identical, so any two of them make up two of the three equal shares of the triangle — that is $\\frac{2}{3}$ of $180^\\circ$, and $\\frac{2}{3} \\times 180^\\circ = 120^\\circ$ ✓. A third look agrees: two angles plus the leftover third must reach $180^\\circ$, and the leftover is one share, so the pair is $180^\\circ$ minus one share. (The choice $60^\\circ$ is ANSWERING ONE ANGLE INSTEAD OF THE PAIR ✗; $180^\\circ$ is ADDING ALL THREE ANGLES ✗; $90^\\circ$ is ASSUMING A RIGHT ANGLE hides in the tile, which no equilateral triangle has ✗.)',
    },
    {
      q: 'All three angles of a triangle are exactly the same size as one another. How big is each one?',
      choices: ['$90^\\circ$', '$45^\\circ$', '$120^\\circ$', '$60^\\circ$'],
      answer: 3,
      solution:
        'Three equal angles split $180^\\circ$ into three equal parts, so each is $180^\\circ \\div 3 = 60^\\circ$ ✓. Check a second, independent way by cutting the triangle in half. Drop a straight segment from the top corner to the midpoint of the opposite side; it meets that side squarely and slices the triangle into two matching right triangles, halving the top angle. Inside one of those halves the angles are $90^\\circ$, half of the top angle, and one whole bottom angle. Calling the equal angle $a$, this reads $90^\\circ + \\frac{a}{2} + a = 180^\\circ$, so $\\frac{3a}{2} = 90^\\circ$ and $a = 60^\\circ$ ✓ — different equation, same answer. Equal angles also force equal sides, so this triangle is equilateral. (The choice $90^\\circ$ is DIVIDING 180 BY 2 instead of by three angles ✗; $120^\\circ$ is USING 360 INSTEAD OF 180 ✗; $45^\\circ$ is ANSWERING THE HALF-SQUARE CASE, the base angle of a square cut along its diagonal ✗.)',
    },
    {
      q: 'Every angle of triangle $XYZ$ measures $60^\\circ$. What can you conclude about its sides?',
      choices: [
        'Only two of the sides must be equal',
        'All three sides must be equal',
        'The sides can all be different lengths',
        'Each side must measure $60$',
      ],
      answer: 1,
      solution:
        'Use the bridge from angles back to sides — the converse of the Base Angle Theorem — twice. From $\\angle X = \\angle Y$, the sides opposite them are equal: $\\overline{YZ} = \\overline{XZ}$. From $\\angle Y = \\angle Z$, the sides opposite THOSE are equal: $\\overline{XZ} = \\overline{XY}$. Chaining the two gives $\\overline{XY} = \\overline{YZ} = \\overline{XZ}$, so the triangle is equilateral ✓. Check a second, independent way by comparing rather than quoting. In any triangle a longer side faces a bigger angle, so if one side of $XYZ$ beat another in length, the angle facing it would beat the other angle in size. Every angle here is $60^\\circ$, so no angle beats another, so no side can beat another, and all three lengths tie ✓. (The choice "only two" is STOPPING AT ISOSCELES after using the bridge once ✗; "all different" is DENYING THE CONVERSE, which runs perfectly well backwards ✗; "each side must measure $60$" is CONFUSING AN ANGLE MEASURE WITH A SIDE LENGTH — the angles are fixed but the tile can be any size ✗.)',
    },
  ],
  // s3 — vertex angle given, find each base angle.
  [
    {
      q: 'A tent flap is cut as triangle $GHK$ with $KG = KH$. The vertex angle at $K$ measures $38^\\circ$. How big is each base angle?',
      fig: {
        view: [-1.2, -1, 3.95, 5.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.7546, 0], [1.3773, 4]], fill: false },
          { t: 'point', p: [0, 0], label: 'G', dx: -10, dy: 10 },
          { t: 'point', p: [2.7546, 0], label: 'H', dx: 10, dy: 10 },
          { t: 'point', p: [1.3773, 4], label: 'K', dx: 0, dy: -10 },
          { t: 'tick', a: [1.3773, 4], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.3773, 4], b: [2.7546, 0], n: 1 },
          { t: 'angle', at: [1.3773, 4], from: [0, 0], to: [2.7546, 0], r: 0.9, label: '38' },
          { t: 'angle', at: [0, 0], from: [2.7546, 0], to: [1.3773, 4], r: 0.55, label: '?' },
        ],
      },
      choices: ['$142^\\circ$', '$38^\\circ$', '$19^\\circ$', '$71^\\circ$'],
      answer: 3,
      solution:
        'The equal legs $KG$ and $KH$ make the base angles at $G$ and $H$ equal. Those two share whatever the vertex angle leaves: $180^\\circ - 38^\\circ = 142^\\circ$, so each base angle is $\\frac{142^\\circ}{2} = 71^\\circ$ ✓. Check a second, independent way by folding the flap down its middle. The crease runs from $K$ to the midpoint of $\\overline{GH}$, lands on the base at a square corner, and cuts the vertex angle into two halves of $\\frac{38^\\circ}{2} = 19^\\circ$. One folded half is a right triangle holding $90^\\circ$ and $19^\\circ$, so its third angle — a base angle — is $90^\\circ - 19^\\circ = 71^\\circ$ ✓, found without subtracting from $180^\\circ$ at all. (The choice $142^\\circ$ is FORGETTING TO SPLIT THE LEFTOVER, which belongs to two angles ✗; $38^\\circ$ is COPYING THE VERTEX ANGLE ✗; $19^\\circ$ is HALVING THE VERTEX ANGLE instead of halving the leftover ✗.)',
    },
    {
      q: 'In triangle $JKL$, $LJ = LK$ and the vertex angle at $L$ measures $42^\\circ$. What is each base angle?',
      fig: {
        view: [-1.2, -1, 3.5, 4.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.3032, 0], [1.1516, 3]], fill: false },
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 10 },
          { t: 'point', p: [2.3032, 0], label: 'K', dx: 10, dy: 10 },
          { t: 'point', p: [1.1516, 3], label: 'L', dx: 0, dy: -10 },
          { t: 'tick', a: [1.1516, 3], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.1516, 3], b: [2.3032, 0], n: 1 },
          { t: 'angle', at: [1.1516, 3], from: [0, 0], to: [2.3032, 0], r: 0.6, label: '42' },
          { t: 'angle', at: [0, 0], from: [2.3032, 0], to: [1.1516, 3], r: 0.8, label: '?' },
        ],
      },
      choices: ['$69^\\circ$', '$138^\\circ$', '$42^\\circ$', '$21^\\circ$'],
      answer: 0,
      solution:
        'Equal legs give equal base angles at $J$ and $K$. Together they get $180^\\circ - 42^\\circ = 138^\\circ$, so each one is $\\frac{138^\\circ}{2} = 69^\\circ$ ✓. Check a second, independent way by testing the four printed candidates against the locked relation vertex $+ 2 \\times$ base $= 180^\\circ$, solving nothing. Try $138$: $42 + 276 = 318$ ✗. Try $42$: $42 + 84 = 126$ ✗. Try $21$: $42 + 42 = 84$ ✗. Try $69$: $42 + 138 = 180$ ✓ — exactly one candidate closes the triangle, and it is the one the subtraction named. (The choice $138^\\circ$ is FORGETTING TO SPLIT THE LEFTOVER ✗; $42^\\circ$ is COPYING THE VERTEX ANGLE ✗; $21^\\circ$ is HALVING THE VERTEX ANGLE ✗.)',
    },
    {
      q: 'A bracket is shaped as triangle $RST$ with $TR = TS$, and the angle at the peak $T$ is $32^\\circ$. What does each of the two bottom angles measure?',
      fig: {
        view: [-1.4, -1, 3.8, 5.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.4086, 0], [1.2043, 4.2]], fill: false },
          { t: 'point', p: [0, 0], label: 'R', dx: -10, dy: 10 },
          { t: 'point', p: [2.4086, 0], label: 'S', dx: 10, dy: 10 },
          { t: 'point', p: [1.2043, 4.2], label: 'T', dx: 0, dy: -10 },
          { t: 'tick', a: [1.2043, 4.2], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.2043, 4.2], b: [2.4086, 0], n: 1 },
          { t: 'angle', at: [1.2043, 4.2], from: [0, 0], to: [2.4086, 0], r: 0.95, label: '32' },
          { t: 'angle', at: [0, 0], from: [2.4086, 0], to: [1.2043, 4.2], r: 0.5, label: '?' },
        ],
      },
      choices: ['$148^\\circ$', '$16^\\circ$', '$74^\\circ$', '$32^\\circ$'],
      answer: 2,
      solution:
        'The equal sides $TR$ and $TS$ force the bottom angles at $R$ and $S$ to match, and the two of them share $180^\\circ - 32^\\circ = 148^\\circ$, so each is $\\frac{148^\\circ}{2} = 74^\\circ$ ✓. Check a second, independent way by measuring from the equilateral triangle instead of from $180^\\circ$. An equilateral triangle has $60^\\circ$ everywhere. This peak is $60^\\circ - 32^\\circ = 28^\\circ$ narrower than that, and every degree the peak gives up has to be picked up by the two bottom angles, which share it evenly: $\\frac{28^\\circ}{2} = 14^\\circ$ each. So each bottom angle is $60^\\circ + 14^\\circ = 74^\\circ$ ✓. Guard: $74 + 74 + 32 = 180$ ✓. (The choice $148^\\circ$ is FORGETTING TO SPLIT THE LEFTOVER ✗; $32^\\circ$ is COPYING THE VERTEX ANGLE ✗; $16^\\circ$ is HALVING THE VERTEX ANGLE ✗.)',
    },
  ],
  // s4 — equal angles are given; name the sides that must match.
  [
    {
      q: 'In triangle $DEF$, $\\angle D = \\angle F$. Which sides must be equal?',
      choices: ['$DE = DF$', '$DE = EF$', '$DF = EF$', 'All three sides'],
      answer: 1,
      solution:
        'Run the bridge backwards: the converse of the Base Angle Theorem says the sides OPPOSITE equal angles are equal. The side opposite $\\angle D$ is $\\overline{EF}$, and the side opposite $\\angle F$ is $\\overline{DE}$, so $DE = EF$ ✓. The third side $\\overline{DF}$ joins the two equal angles and is the base, free to be any length. Check a second, independent way with a mirror. Flip the triangle over and set the copy on the original so that $D$ lands on $F$ and $F$ lands on $D$. The two angles are equal, so the copy fits, and the side that ran from $E$ to $D$ now covers the side that ran from $E$ to $F$ — two segments can only cover each other if they are the same length ✓. (The choice $DE = DF$ is MATCHING AN ANGLE TO A SIDE THAT TOUCHES IT ✗; $DF = EF$ is the same slip on the other end ✗; "All three" is ASSUMING THE TRIANGLE IS EQUILATERAL, which would need all three angles equal ✗.)',
    },
    {
      q: 'In triangle $PQR$, $\\angle P = \\angle Q$. Which side must be equal in length to $PR$?',
      choices: ['$PQ$', 'All three sides are equal', '$QR$', 'No side has to equal $PR$'],
      answer: 2,
      solution:
        'The angles named are $\\angle P$ and $\\angle Q$, so look across from each. Opposite $\\angle P$ is $\\overline{QR}$; opposite $\\angle Q$ is $\\overline{PR}$. Equal angles have equal opposite sides, so $QR = PR$ ✓. Check a second, independent way by comparing sizes. Suppose $\\overline{QR}$ were longer than $\\overline{PR}$. The bigger side always faces the bigger angle, so $\\angle P$ (facing $\\overline{QR}$) would be bigger than $\\angle Q$ (facing $\\overline{PR}$) — contradicting the given equality. The same argument blocks $\\overline{PR}$ from being the longer one, so the two lengths tie ✓. Side $\\overline{PQ}$ is the base here and stays independent. (The choice $PQ$ is MATCHING AN ANGLE TO A SIDE THAT TOUCHES IT — $\\overline{PQ}$ touches both named angles instead of facing them ✗; "All three" is ASSUMING THE TRIANGLE IS EQUILATERAL ✗; "No side has to" is DENYING THE CONVERSE, which is a genuine theorem ✗.)',
    },
    {
      q: 'The angles at $X$ and at $Y$ of triangle $XYZ$ both measure $55^\\circ$. Which two sides must be equal?',
      choices: ['$XZ$ and $YZ$', '$XY$ and $XZ$', '$XY$ and $YZ$', 'All three sides'],
      answer: 0,
      solution:
        'Two equal angles make the triangle isosceles, and the equal sides are the ones facing those angles. Facing $\\angle X$ is $\\overline{YZ}$; facing $\\angle Y$ is $\\overline{XZ}$. So $XZ = YZ$ ✓ — the two sides that meet at $Z$, with $\\overline{XY}$ left as the base. Check a second, independent way by finding the third angle and folding. Since $\\angle Z = 180^\\circ - 55^\\circ - 55^\\circ = 70^\\circ$, the crease from $Z$ to the midpoint of $\\overline{XY}$ splits the triangle into two pieces with angles $55^\\circ$, $35^\\circ$, $90^\\circ$ each — identical pieces, mirror images. The piece on the left carries $\\overline{XZ}$ and the piece on the right carries $\\overline{YZ}$ in exactly the matching position, so those two sides have the same length ✓. (The choice $XY$ and $XZ$ is MATCHING AN ANGLE TO A SIDE THAT TOUCHES IT ✗; $XY$ and $YZ$ is the same slip mirrored ✗; "All three" is ASSUMING THE TRIANGLE IS EQUILATERAL, which would take a third $55^\\circ$ and the angles would then have to be $60^\\circ$ ✗.)',
    },
  ],
  // s5 — base angles given, find the vertex angle.
  [
    {
      q: 'In triangle $FGH$ the legs $HF$ and $HG$ are equal, and each base angle measures $68^\\circ$. What is the vertex angle at $H$?',
      fig: {
        view: [-1.2, -1, 3.95, 4.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.7474, 0], [1.3737, 3.4]], fill: false },
          { t: 'point', p: [0, 0], label: 'F', dx: -10, dy: 10 },
          { t: 'point', p: [2.7474, 0], label: 'G', dx: 10, dy: 10 },
          { t: 'point', p: [1.3737, 3.4], label: 'H', dx: 0, dy: -10 },
          { t: 'tick', a: [1.3737, 3.4], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.3737, 3.4], b: [2.7474, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [2.7474, 0], to: [1.3737, 3.4], r: 0.7, label: '68' },
          { t: 'angle', at: [2.7474, 0], from: [1.3737, 3.4], to: [0, 0], r: 0.7, label: '68' },
          { t: 'angle', at: [1.3737, 3.4], from: [0, 0], to: [2.7474, 0], r: 0.6, label: '?' },
        ],
      },
      choices: ['$112^\\circ$', '$136^\\circ$', '$44^\\circ$', '$68^\\circ$'],
      answer: 2,
      solution:
        'Both base angles are given, so they eat $68^\\circ + 68^\\circ = 136^\\circ$ of the triangle, leaving $180^\\circ - 136^\\circ = 44^\\circ$ for the vertex angle at $H$ ✓. Check a second, independent way by comparing the triangle with an equilateral one. If the base angles were $60^\\circ$, the vertex would be $60^\\circ$ too. Each base angle here runs $68^\\circ - 60^\\circ = 8^\\circ$ over that, and the two of them together have taken $16^\\circ$ extra out of the same fixed $180^\\circ$ — so the vertex must give up all $16^\\circ$: $60^\\circ - 16^\\circ = 44^\\circ$ ✓. Both routes land together, and $44 + 68 + 68 = 180$ ✓. (The choice $112^\\circ$ is SUBTRACTING ONLY ONE BASE ANGLE, stopping at $180 - 68$ ✗; $136^\\circ$ is ANSWERING THE TWO BASE ANGLES TOGETHER ✗; $68^\\circ$ is COPYING A BASE ANGLE ✗.)',
    },
    {
      q: 'An isosceles triangle $QRS$ has $SQ = SR$, and the two angles on its base each measure $76^\\circ$. How large is the angle at $S$?',
      fig: {
        view: [-1.8, -1, 3.8, 5.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [1.9946, 0], [0.9973, 4]], fill: false },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 10 },
          { t: 'point', p: [1.9946, 0], label: 'R', dx: 10, dy: 10 },
          { t: 'point', p: [0.9973, 4], label: 'S', dx: 0, dy: -10 },
          { t: 'tick', a: [0.9973, 4], b: [0, 0], n: 1 },
          { t: 'tick', a: [0.9973, 4], b: [1.9946, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [1.9946, 0], to: [0.9973, 4], r: 0.55, label: '76' },
          { t: 'angle', at: [1.9946, 0], from: [0.9973, 4], to: [0, 0], r: 0.55, label: '76' },
          { t: 'angle', at: [0.9973, 4], from: [0, 0], to: [1.9946, 0], r: 0.75, label: '?' },
        ],
      },
      choices: ['$104^\\circ$', '$152^\\circ$', '$76^\\circ$', '$28^\\circ$'],
      answer: 3,
      solution:
        'The two base angles together take $2 \\times 76^\\circ = 152^\\circ$, so the vertex angle at $S$ is $180^\\circ - 152^\\circ = 28^\\circ$ ✓. Check a second, independent way by folding along the line of symmetry from $S$ to the midpoint of $\\overline{QR}$. The crease meets the base at a square corner, so one folded half is a right triangle containing $90^\\circ$, the $76^\\circ$ base angle, and half of the vertex angle. That half must be $180^\\circ - 90^\\circ - 76^\\circ = 14^\\circ$, so the whole vertex angle is $2 \\times 14^\\circ = 28^\\circ$ ✓. The triangle is a tall thin spike, which matches such a narrow peak. (The choice $104^\\circ$ is SUBTRACTING ONLY ONE BASE ANGLE ✗; $152^\\circ$ is ANSWERING THE TWO BASE ANGLES TOGETHER ✗; $76^\\circ$ is COPYING A BASE ANGLE ✗.)',
    },
    {
      q: 'A roof truss forms triangle $UVW$ with $WU = WV$. Each angle where the truss meets the ceiling measures $64^\\circ$. What is the angle at the ridge $W$?',
      fig: {
        view: [-1, -1, 4.55, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.5118, 0], [1.7559, 3.6]], fill: false },
          { t: 'point', p: [0, 0], label: 'U', dx: -10, dy: 10 },
          { t: 'point', p: [3.5118, 0], label: 'V', dx: 10, dy: 10 },
          { t: 'point', p: [1.7559, 3.6], label: 'W', dx: 0, dy: -10 },
          { t: 'tick', a: [1.7559, 3.6], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.7559, 3.6], b: [3.5118, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [3.5118, 0], to: [1.7559, 3.6], r: 0.75, label: '64' },
          { t: 'angle', at: [3.5118, 0], from: [1.7559, 3.6], to: [0, 0], r: 0.75, label: '64' },
          { t: 'angle', at: [1.7559, 3.6], from: [0, 0], to: [3.5118, 0], r: 0.55, label: '?' },
        ],
      },
      choices: ['$116^\\circ$', '$52^\\circ$', '$128^\\circ$', '$64^\\circ$'],
      answer: 1,
      solution:
        'The two ceiling angles use $64^\\circ + 64^\\circ = 128^\\circ$, so the ridge angle at $W$ is $180^\\circ - 128^\\circ = 52^\\circ$ ✓. Check a second, independent way by testing the printed candidates against the relation vertex $+ 2 \\times$ base $= 180^\\circ$ instead of subtracting. Try $116$: $116 + 128 = 244$ ✗. Try $128$: $128 + 128 = 256$ ✗. Try $64$: $64 + 128 = 192$ ✗. Try $52$: $52 + 128 = 180$ ✓ — one survivor. As a bonus reading, $64^\\circ$ is $4^\\circ$ above the equilateral $60^\\circ$ at each end, so the ridge sits $8^\\circ$ below $60^\\circ$, at $52^\\circ$ ✓. (The choice $116^\\circ$ is SUBTRACTING ONLY ONE BASE ANGLE ✗; $128^\\circ$ is ANSWERING THE TWO BASE ANGLES TOGETHER ✗; $64^\\circ$ is COPYING A BASE ANGLE ✗.)',
    },
  ],
  // s6 — base and vertex angles as linear expressions; report the vertex angle.
  [
    {
      q: 'A stained-glass triangle has two equal sides. Each of its base angles measures $(4x + 4)^\\circ$, and the vertex angle between the equal sides measures $(3x + 7)^\\circ$. How big is the vertex angle?',
      fig: {
        view: [-1, -1, 3.75, 4.0],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.7313, 0], [1.3656, 2.8]], fill: false },
          { t: 'tick', a: [1.3656, 2.8], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.3656, 2.8], b: [2.7313, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [2.7313, 0], to: [1.3656, 2.8], r: 0.8, label: '4x+4' },
          { t: 'angle', at: [2.7313, 0], from: [1.3656, 2.8], to: [0, 0], r: 0.8, label: '4x+4' },
          { t: 'angle', at: [1.3656, 2.8], from: [0, 0], to: [2.7313, 0], r: 0.55, label: '3x+7' },
        ],
      },
      choices: ['$52^\\circ$', '$64^\\circ$', '$45^\\circ$', '$15^\\circ$'],
      answer: 0,
      solution:
        'There are TWO base angles, so the angle sum reads $2(4x + 4) + (3x + 7) = 180$. Expanding gives $8x + 8 + 3x + 7 = 11x + 15 = 180$, so $11x = 165$ and $x = 15$. The vertex angle is $3(15) + 7 = 45 + 7 = 52^\\circ$ ✓. Check a second, independent way by starting from the candidates and never solving that equation. If the vertex angle really is $52^\\circ$, then each base angle has to be $\\frac{180 - 52}{2} = 64^\\circ$; setting $4x + 4 = 64$ gives $x = 15$, and that same $x$ turns $3x + 7$ into $52$ ✓ — the two expressions agree at one value of $x$. Test $45^\\circ$ the same way: the base angles would be $\\frac{180 - 45}{2} = 67.5^\\circ$, so $4x + 4 = 67.5$ gives $x = 15.875$, and $3x + 7$ then reads $54.625$, not $45$ ✗. (The choice $64^\\circ$ is ANSWERING A BASE ANGLE INSTEAD OF THE VERTEX ✗; $15^\\circ$ is ANSWERING x ITSELF ✗; $45^\\circ$ is DROPPING THE CONSTANT, reporting $3x$ and forgetting the $+7$ ✗.)',
    },
    {
      q: 'A triangular flag has two equal sides. Its two base angles each measure $(4x + 14)^\\circ$, and the vertex angle where the equal sides meet measures $(6x + 26)^\\circ$. What is the vertex angle?',
      fig: {
        view: [-1, -1, 5.4, 3.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.3634, 0], [2.1817, 2.6]], fill: false },
          { t: 'tick', a: [2.1817, 2.6], b: [0, 0], n: 1 },
          { t: 'tick', a: [2.1817, 2.6], b: [4.3634, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [4.3634, 0], to: [2.1817, 2.6], r: 0.85, label: '4x+14' },
          { t: 'angle', at: [4.3634, 0], from: [2.1817, 2.6], to: [0, 0], r: 0.85, label: '4x+14' },
          { t: 'angle', at: [2.1817, 2.6], from: [0, 0], to: [4.3634, 0], r: 0.5, label: '6x+26' },
        ],
      },
      choices: ['$50^\\circ$', '$80^\\circ$', '$9^\\circ$', '$54^\\circ$'],
      answer: 1,
      solution:
        'Count the base angle twice: $2(4x + 14) + (6x + 26) = 180$, so $8x + 28 + 6x + 26 = 14x + 54 = 180$, giving $14x = 126$ and $x = 9$. The vertex angle is $6(9) + 26 = 54 + 26 = 80^\\circ$ ✓. Check a second, independent way by folding the flag instead of adding all three angles. The crease from the vertex to the midpoint of the base makes a right triangle holding $90^\\circ$, one whole base angle, and half the vertex angle, so base angle $= 90^\\circ - \\frac{\\text{vertex}}{2}$. In symbols, $4x + 14 = 90 - \\frac{6x + 26}{2} = 90 - 3x - 13 = 77 - 3x$, so $7x = 63$ and $x = 9$ ✓ — a different equation reaching the same $x$, and the vertex angle is again $80^\\circ$. Guard: $50 + 50 + 80 = 180$ ✓. (The choice $50^\\circ$ is ANSWERING A BASE ANGLE INSTEAD OF THE VERTEX ✗; $9^\\circ$ is ANSWERING x ITSELF ✗; $54^\\circ$ is DROPPING THE CONSTANT, reporting $6x$ and forgetting the $+26$ ✗.)',
    },
    {
      q: 'The two equal sides of an isosceles brooch meet at its top point. Each base angle measures $(5x + 22)^\\circ$ and the top angle measures $(2x + 16)^\\circ$. What is the top angle?',
      fig: {
        view: [-1.3, -1, 4.2, 5.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.8592, 0], [1.4296, 4.4]], fill: false },
          { t: 'tick', a: [1.4296, 4.4], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.4296, 4.4], b: [2.8592, 0], n: 1 },
          { t: 'angle', at: [0, 0], from: [2.8592, 0], to: [1.4296, 4.4], r: 0.6, label: '5x+22' },
          { t: 'angle', at: [2.8592, 0], from: [1.4296, 4.4], to: [0, 0], r: 0.6, label: '5x+22' },
          { t: 'angle', at: [1.4296, 4.4], from: [0, 0], to: [2.8592, 0], r: 0.95, label: '2x+16' },
        ],
      },
      choices: ['$72^\\circ$', '$10^\\circ$', '$36^\\circ$', '$20^\\circ$'],
      answer: 2,
      solution:
        'Both base angles carry the same expression, so the sum is $2(5x + 22) + (2x + 16) = 180$, that is $10x + 44 + 2x + 16 = 12x + 60 = 180$, so $12x = 120$ and $x = 10$. The top angle is $2(10) + 16 = 36^\\circ$ ✓. Check a second, independent way with the fold down the axis of symmetry, which never uses the full $180^\\circ$ sum. Half of the brooch is a right triangle whose angles are $90^\\circ$, one base angle, and half the top angle, so base angle $= 90^\\circ - \\frac{\\text{top}}{2}$: $5x + 22 = 90 - \\frac{2x + 16}{2} = 90 - x - 8 = 82 - x$, giving $6x = 60$ and $x = 10$ ✓. The top angle is $36^\\circ$ and each base angle is $5(10) + 22 = 72^\\circ$; guard: $72 + 72 + 36 = 180$ ✓. (The choice $72^\\circ$ is ANSWERING A BASE ANGLE INSTEAD OF THE VERTEX ✗; $10^\\circ$ is ANSWERING x ITSELF ✗; $20^\\circ$ is DROPPING THE CONSTANT, reporting $2x$ and forgetting the $+16$ ✗.)',
    },
  ],
  // s7 — perimeter and base given; find each leg.
  [
    {
      q: 'Triangle $DEF$ has $FD = FE$, a perimeter of $44$, and a base $DE$ of length $10$. How long is each leg?',
      fig: {
        view: [-1.4, -1.5, 4.4, 5.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [1.5, 4.9]], fill: false },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [3, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [1.5, 4.9], label: 'F', dx: 0, dy: -10 },
          { t: 'tick', a: [1.5, 4.9], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.5, 4.9], b: [3, 0], n: 1 },
          { t: 'label', p: [1.5, 0], text: '10', dx: 0, dy: 16 },
        ],
      },
      choices: ['$34$', '$22$', '$27$', '$17$'],
      answer: 3,
      solution:
        'The perimeter counts both legs and the base. Take the base away first: $44 - 10 = 34$ belongs to the two legs together, and they are equal, so each leg is $\\frac{34}{2} = 17$ ✓. Check a second, independent way using the fold. The crease from $F$ to the midpoint of $\\overline{DE}$ cuts the whole boundary into two identical halves, so each half is worth $\\frac{44}{2} = 22$. One half consists of a single leg plus half the base, and half the base is $\\frac{10}{2} = 5$, so the leg is $22 - 5 = 17$ ✓ — no subtraction of the whole base anywhere. Sanity check with the triangle inequality: $17 + 17 = 34 > 10$ ✓, so the triangle exists. (The choice $34$ is FORGETTING TO SPLIT THE LEFTOVER BETWEEN THE TWO LEGS ✗; $22$ is HALVING THE PERIMETER and stopping there ✗; $27$ is ADDING THE BASE INSTEAD OF SUBTRACTING, computing $\\frac{44 + 10}{2}$ ✗.)',
    },
    {
      q: 'An isosceles banner $KLM$ has $MK = ML$. Its perimeter is $55$ and its base $KL$ measures $9$. How long is each of the two equal sides?',
      fig: {
        view: [-1.8, -1.5, 4.2, 6.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.4, 0], [1.2, 5.9]], fill: false },
          { t: 'point', p: [0, 0], label: 'K', dx: -10, dy: 10 },
          { t: 'point', p: [2.4, 0], label: 'L', dx: 10, dy: 10 },
          { t: 'point', p: [1.2, 5.9], label: 'M', dx: 0, dy: -10 },
          { t: 'tick', a: [1.2, 5.9], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.2, 5.9], b: [2.4, 0], n: 1 },
          { t: 'label', p: [1.2, 0], text: '9', dx: 0, dy: 16 },
        ],
      },
      choices: ['$46$', '$32$', '$23$', '$37$'],
      answer: 2,
      solution:
        'Strip off the base: $55 - 9 = 46$ is what the two equal sides share, so each is $\\frac{46}{2} = 23$ ✓. Check a second, independent way by testing the printed candidates against the perimeter, solving nothing. Try $46$: $46 + 46 + 9 = 101$ ✗. Try $32$: $32 + 32 + 9 = 73$ ✗. Try $37$: $37 + 37 + 9 = 83$ ✗. Try $23$: $23 + 23 + 9 = 55$ ✓ — exactly one candidate rebuilds the banner. Triangle inequality: $23 + 23 = 46 > 9$ ✓, and a tall narrow banner is what the figure shows. (The choice $46$ is FORGETTING TO SPLIT THE LEFTOVER BETWEEN THE TWO LEGS ✗; $32$ is ADDING THE BASE INSTEAD OF SUBTRACTING, computing $\\frac{55 + 9}{2}$ ✗; $37$ is TREATING THE GIVEN LENGTH AS A LEG, which would leave $55 - 9 - 9 = 37$ for the third side ✗.)',
    },
    {
      q: 'A kite spar frame is the isosceles triangle $RST$ with $TR = TS$. The frame uses $38$ inches of rod in all, and the base $RS$ is $6$ inches. How long is each of the two equal rods?',
      fig: {
        view: [-1.8, -1.5, 4.0, 6.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [2.2, 0], [1.1, 5.7]], fill: false },
          { t: 'point', p: [0, 0], label: 'R', dx: -10, dy: 10 },
          { t: 'point', p: [2.2, 0], label: 'S', dx: 10, dy: 10 },
          { t: 'point', p: [1.1, 5.7], label: 'T', dx: 0, dy: -10 },
          { t: 'tick', a: [1.1, 5.7], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.1, 5.7], b: [2.2, 0], n: 1 },
          { t: 'label', p: [1.1, 0], text: '6', dx: 0, dy: 16 },
        ],
      },
      choices: ['$16$', '$32$', '$22$', '$19$'],
      answer: 0,
      solution:
        'All $38$ inches of rod go into two equal sides plus the base. Remove the base: $38 - 6 = 32$ inches for the pair, so each equal rod is $\\frac{32}{2} = 16$ inches ✓. Check a second, independent way with the fold. Creasing from $T$ to the midpoint of $\\overline{RS}$ splits the whole rim into two identical halves of $\\frac{38}{2} = 19$ inches each, and each half is one full rod plus half the base, $\\frac{6}{2} = 3$ inches. So a rod is $19 - 3 = 16$ inches ✓. Triangle inequality: $16 + 16 = 32 > 6$ ✓. (The choice $32$ is FORGETTING TO SPLIT THE LEFTOVER BETWEEN THE TWO LEGS ✗; $19$ is HALVING THE PERIMETER and stopping there ✗; $22$ is ADDING THE BASE INSTEAD OF SUBTRACTING, computing $\\frac{38 + 6}{2}$ ✗.)',
    },
  ],
  // s8 — equilateral triangle with three side expressions; report the perimeter.
  [
    {
      q: 'The equilateral triangle $DEF$ shown has sides written as $2x + 2$, $3x - 4$, and $x + 8$. What is its perimeter?',
      fig: {
        view: [-1.4, -1.6, 5.4, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 3.4641]], fill: false },
          { t: 'point', p: [0, 0], label: 'D', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'E', dx: 10, dy: 10 },
          { t: 'point', p: [2, 3.4641], label: 'F', dx: 0, dy: -10 },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [4, 0], b: [2, 3.4641], n: 1 },
          { t: 'tick', a: [2, 3.4641], b: [0, 0], n: 1 },
          { t: 'label', p: [2, 0], text: '2x+2', dx: 0, dy: 16 },
          { t: 'label', p: [3, 1.73205], text: '3x-4', dx: 18, dy: -4 },
          { t: 'label', p: [1, 1.73205], text: 'x+8', dx: -18, dy: -4 },
        ],
      },
      choices: ['$14$', '$42$', '$28$', '$6$'],
      answer: 1,
      solution:
        'Equilateral means every side matches, so pick a pair and set them equal: $2x + 2 = 3x - 4$ gives $x = 6$. Each side is then $2(6) + 2 = 14$, and the perimeter is $3 \\times 14 = 42$ ✓. Check a second, independent way using the OTHER pair and a different final step. Setting $3x - 4 = x + 8$ gives $2x = 12$, so $x = 6$ again, from an equation that never mentions $2x + 2$. Now add the three expressions straight up, since the perimeter is their total: $(2x + 2) + (3x - 4) + (x + 8) = 6x + 6$, and at $x = 6$ that is $36 + 6 = 42$ ✓ — reached without computing a single side. Guard: all three expressions read $14$ at $x = 6$ ✓. (The choice $14$ is ANSWERING ONE SIDE INSTEAD OF THE PERIMETER ✗; $28$ is COUNTING ONLY TWO SIDES ✗; $6$ is ANSWERING x ITSELF ✗.)',
    },
    {
      q: 'A road sign is an equilateral triangle whose three sides are labeled $2x + 4$, $3x - 3$, and $x + 11$ centimeters. What is the perimeter of the sign?',
      fig: {
        view: [-1.4, -1.6, 5.0, 4.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.6, 0], [1.8, 3.1177]], fill: false },
          { t: 'point', p: [0, 0], label: 'G', dx: -10, dy: 10 },
          { t: 'point', p: [3.6, 0], label: 'H', dx: 10, dy: 10 },
          { t: 'point', p: [1.8, 3.1177], label: 'J', dx: 0, dy: -10 },
          { t: 'tick', a: [0, 0], b: [3.6, 0], n: 1 },
          { t: 'tick', a: [3.6, 0], b: [1.8, 3.1177], n: 1 },
          { t: 'tick', a: [1.8, 3.1177], b: [0, 0], n: 1 },
          { t: 'label', p: [1.8, 0], text: '2x+4', dx: 0, dy: 16 },
          { t: 'label', p: [2.7, 1.55885], text: '3x-3', dx: 18, dy: -4 },
          { t: 'label', p: [0.9, 1.55885], text: 'x+11', dx: -18, dy: -4 },
        ],
      },
      choices: ['$54$', '$18$', '$36$', '$7$'],
      answer: 0,
      solution:
        'All three sides are the same length, so $2x + 4 = 3x - 3$ gives $x = 7$. One side is $2(7) + 4 = 18$ cm, and the perimeter is $3 \\times 18 = 54$ cm ✓. Check a second, independent way from a different pair and a different total. Setting $x + 11 = 3x - 3$ gives $2x = 14$, so $x = 7$ once more, with no use of $2x + 4$. The perimeter is the sum of the three labels: $(2x + 4) + (3x - 3) + (x + 11) = 6x + 12$, which at $x = 7$ is $42 + 12 = 54$ ✓ — the same number by a route that skips the single side entirely. Guard: the labels read $18$, $18$, and $18$ ✓, so the sign really is equilateral. (The choice $18$ is ANSWERING ONE SIDE INSTEAD OF THE PERIMETER ✗; $36$ is COUNTING ONLY TWO SIDES ✗; $7$ is ANSWERING x ITSELF ✗.)',
    },
    {
      q: 'An equilateral badge has its three edges marked $2x + 5$, $4x - 3$, and $x + 9$. What is the total distance around the badge?',
      fig: {
        view: [-1.4, -1.6, 5.2, 4.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.8, 0], [1.9, 3.2909]], fill: false },
          { t: 'point', p: [0, 0], label: 'M', dx: -10, dy: 10 },
          { t: 'point', p: [3.8, 0], label: 'N', dx: 10, dy: 10 },
          { t: 'point', p: [1.9, 3.2909], label: 'P', dx: 0, dy: -10 },
          { t: 'tick', a: [0, 0], b: [3.8, 0], n: 1 },
          { t: 'tick', a: [3.8, 0], b: [1.9, 3.2909], n: 1 },
          { t: 'tick', a: [1.9, 3.2909], b: [0, 0], n: 1 },
          { t: 'label', p: [1.9, 0], text: '2x+5', dx: 0, dy: 16 },
          { t: 'label', p: [2.85, 1.64545], text: '4x-3', dx: 18, dy: -4 },
          { t: 'label', p: [0.95, 1.64545], text: 'x+9', dx: -18, dy: -4 },
        ],
      },
      choices: ['$13$', '$26$', '$4$', '$39$'],
      answer: 3,
      solution:
        'Equal edges let you match any two expressions: $2x + 5 = 4x - 3$ gives $2x = 8$, so $x = 4$. One edge is $2(4) + 5 = 13$, and the distance around is $3 \\times 13 = 39$ ✓. Check a second, independent way with the untouched pair and with a sum. From $4x - 3 = x + 9$ comes $3x = 12$, so $x = 4$ again, this time without the edge $2x + 5$ appearing at all. Adding the three labels gives the perimeter directly: $(2x + 5) + (4x - 3) + (x + 9) = 7x + 11$, and at $x = 4$ that is $28 + 11 = 39$ ✓. Guard: the three labels read $13$, $13$, $13$ ✓. (The choice $13$ is ANSWERING ONE SIDE INSTEAD OF THE PERIMETER ✗; $26$ is COUNTING ONLY TWO SIDES ✗; $4$ is ANSWERING x ITSELF ✗.)',
    },
  ],
  // s9 — a base angle is bisected and the bisector lands on the far leg.
  [
    {
      q: 'In the figure, $AB = AC$, $\\angle A = 44^\\circ$, and $\\overline{BD}$ bisects $\\angle ABC$, meeting $\\overline{AC}$ at $D$. What is $\\angle BDC$?',
      fig: {
        view: [-1.2, -1, 4.2, 4.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [1.5, 3.7126]], fill: false },
          { t: 'seg', a: [0, 0], b: [2.3575, 1.5902] },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [3, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [1.5, 3.7126], label: 'A', dx: 0, dy: -10 },
          { t: 'point', p: [2.3575, 1.5902], label: 'D', dx: 12, dy: -6 },
          { t: 'tick', a: [1.5, 3.7126], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.5, 3.7126], b: [3, 0], n: 1 },
          { t: 'angle', at: [1.5, 3.7126], from: [0, 0], to: [3, 0], r: 0.8, label: '44' },
          { t: 'angle', at: [0, 0], from: [1.5, 3.7126], to: [2.3575, 1.5902], r: 0.65 },
          { t: 'angle', at: [0, 0], from: [2.3575, 1.5902], to: [3, 0], r: 0.65 },
          { t: 'angle', at: [2.3575, 1.5902], from: [0, 0], to: [3, 0], r: 0.4, label: '?' },
        ],
      },
      choices: ['$102^\\circ$', '$34^\\circ$', '$146^\\circ$', '$78^\\circ$'],
      answer: 3,
      solution:
        'Base angles first: $AB = AC$ gives $\\angle ABC = \\angle ACB = \\frac{180^\\circ - 44^\\circ}{2} = 68^\\circ$. The bisector cuts $\\angle ABC$ into two halves of $\\frac{68^\\circ}{2} = 34^\\circ$, so triangle $BDC$ holds $\\angle DBC = 34^\\circ$ and $\\angle BCD = 68^\\circ$, leaving $\\angle BDC = 180^\\circ - 34^\\circ - 68^\\circ = 78^\\circ$ ✓. Check a second, independent way through the OTHER small triangle. In triangle $ABD$ the angles are $44^\\circ$ at $A$ and $34^\\circ$ at $B$, so $\\angle ADB = 180^\\circ - 44^\\circ - 34^\\circ = 102^\\circ$. Points $A$, $D$, and $C$ lie on one straight line, so the two angles at $D$ fill a straight angle: $\\angle BDC = 180^\\circ - 102^\\circ = 78^\\circ$ ✓. The two sub-triangles agree. (The choice $102^\\circ$ is ANSWERING THE ANGLE ON THE OTHER SIDE OF THE FOOT, namely $\\angle ADB$ ✗; $34^\\circ$ is ANSWERING THE HALF-ANGLE ITSELF ✗; $146^\\circ$ is SUBTRACTING ONLY THE HALF-ANGLE, stopping at $180 - 34$ ✗.)',
    },
    {
      q: 'In triangle $ABC$, $AB = AC$ and $\\angle A = 24^\\circ$. The ray $\\overline{BD}$ splits $\\angle ABC$ into two equal parts and meets $\\overline{AC}$ at $D$. What is $\\angle BDC$?',
      fig: {
        view: [-1.6, -1, 3.6, 5.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [2, 0], [1, 4.7046]], fill: false },
          { t: 'seg', a: [0, 0], b: [1.7063, 1.3816] },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [2, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [1, 4.7046], label: 'A', dx: 0, dy: -10 },
          { t: 'point', p: [1.7063, 1.3816], label: 'D', dx: 12, dy: -6 },
          { t: 'tick', a: [1, 4.7046], b: [0, 0], n: 1 },
          { t: 'tick', a: [1, 4.7046], b: [2, 0], n: 1 },
          { t: 'angle', at: [1, 4.7046], from: [0, 0], to: [2, 0], r: 1.0, label: '24' },
          { t: 'angle', at: [0, 0], from: [1, 4.7046], to: [1.7063, 1.3816], r: 0.62 },
          { t: 'angle', at: [0, 0], from: [1.7063, 1.3816], to: [2, 0], r: 0.62 },
          { t: 'angle', at: [1.7063, 1.3816], from: [0, 0], to: [2, 0], r: 0.35, label: '?' },
        ],
      },
      choices: ['$117^\\circ$', '$63^\\circ$', '$39^\\circ$', '$24^\\circ$'],
      answer: 1,
      solution:
        'The equal legs give $\\angle ABC = \\angle ACB = \\frac{180^\\circ - 24^\\circ}{2} = 78^\\circ$. Halving $\\angle ABC$ makes $\\angle DBC = \\frac{78^\\circ}{2} = 39^\\circ$, and in triangle $BDC$ the third angle is $\\angle BDC = 180^\\circ - 39^\\circ - 78^\\circ = 63^\\circ$ ✓. Check a second, independent way inside triangle $ABD$: its angles are $24^\\circ$ at $A$ and $39^\\circ$ at $B$, so $\\angle ADB = 180^\\circ - 24^\\circ - 39^\\circ = 117^\\circ$. Since $A$, $D$, $C$ are collinear, $\\angle BDC = 180^\\circ - 117^\\circ = 63^\\circ$ ✓. Notice the answer is acute here, because the narrow $24^\\circ$ peak makes the base angles steep. (The choice $117^\\circ$ is ANSWERING THE ANGLE ON THE OTHER SIDE OF THE FOOT ✗; $39^\\circ$ is ANSWERING THE HALF-ANGLE ITSELF ✗; $24^\\circ$ is FORGETTING TO BISECT, using the whole $78^\\circ$ twice and landing back on $\\angle A$ ✗.)',
    },
    {
      q: 'A brace $\\overline{BD}$ runs from corner $B$ of the isosceles triangle $ABC$ to a point $D$ on side $\\overline{AC}$, cutting $\\angle ABC$ exactly in half. Given $AB = AC$ and $\\angle A = 48^\\circ$, what is $\\angle BDC$?',
      fig: {
        view: [-1.2, -1, 4.4, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.2, 0], [1.6, 3.5937]], fill: false },
          { t: 'seg', a: [0, 0], b: [2.4823, 1.6119] },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [3.2, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [1.6, 3.5937], label: 'A', dx: 0, dy: -10 },
          { t: 'point', p: [2.4823, 1.6119], label: 'D', dx: 12, dy: -6 },
          { t: 'tick', a: [1.6, 3.5937], b: [0, 0], n: 1 },
          { t: 'tick', a: [1.6, 3.5937], b: [3.2, 0], n: 1 },
          { t: 'angle', at: [1.6, 3.5937], from: [0, 0], to: [3.2, 0], r: 0.75, label: '48' },
          { t: 'angle', at: [0, 0], from: [1.6, 3.5937], to: [2.4823, 1.6119], r: 0.68 },
          { t: 'angle', at: [0, 0], from: [2.4823, 1.6119], to: [3.2, 0], r: 0.68 },
          { t: 'angle', at: [2.4823, 1.6119], from: [0, 0], to: [3.2, 0], r: 0.4, label: '?' },
        ],
      },
      choices: ['$99^\\circ$', '$33^\\circ$', '$81^\\circ$', '$48^\\circ$'],
      answer: 2,
      solution:
        'Start with the base angles: $\\angle ABC = \\angle ACB = \\frac{180^\\circ - 48^\\circ}{2} = 66^\\circ$. The brace halves $\\angle ABC$, so $\\angle DBC = \\frac{66^\\circ}{2} = 33^\\circ$, and triangle $BDC$ gives $\\angle BDC = 180^\\circ - 33^\\circ - 66^\\circ = 81^\\circ$ ✓. Check a second, independent way with triangle $ABD$, which shares nothing with that subtraction: its angles are $48^\\circ$ at $A$ and $33^\\circ$ at $B$, so $\\angle ADB = 180^\\circ - 48^\\circ - 33^\\circ = 99^\\circ$. The points $A$, $D$, $C$ lie in a line, so $\\angle BDC = 180^\\circ - 99^\\circ = 81^\\circ$ ✓. Both sub-triangles tell the same story, and $81^\\circ$ is just under a right angle, matching the figure. (The choice $99^\\circ$ is ANSWERING THE ANGLE ON THE OTHER SIDE OF THE FOOT ✗; $33^\\circ$ is ANSWERING THE HALF-ANGLE ITSELF ✗; $48^\\circ$ is FORGETTING TO BISECT and using the full $66^\\circ$ twice, which lands back on $\\angle A$ ✗.)',
    },
  ],
  // s10 — one angle is a stated multiple of another; find the vertex angle.
  [
    {
      q: 'In triangle $ABC$, $AB = AC$, and each base angle is four times as large as $\\angle A$. What is $\\angle A$?',
      choices: ['$20^\\circ$', '$80^\\circ$', '$36^\\circ$', '$45^\\circ$'],
      answer: 0,
      solution:
        'Since $AB = AC$, the base angles $\\angle B$ and $\\angle C$ are equal, and each is four times $\\angle A$. Adding all three: $\\angle A + 4\\angle A + 4\\angle A = 9\\angle A = 180^\\circ$, so $\\angle A = 20^\\circ$ ✓. Check a second, independent way by testing the printed candidates instead of solving. If $\\angle A$ were $80^\\circ$, each base angle would be $4 \\times 80^\\circ = 320^\\circ$, which alone overshoots the whole triangle ✗. If it were $45^\\circ$, the base angles would be $180^\\circ$ each ✗. If it were $36^\\circ$, they would be $144^\\circ$ each, totalling $324^\\circ$ ✗. If it is $20^\\circ$, the base angles are $80^\\circ$ each and $20 + 80 + 80 = 180$ ✓ — one survivor. (The choice $80^\\circ$ is ANSWERING A BASE ANGLE INSTEAD OF THE VERTEX ✗; $36^\\circ$ is COUNTING ONLY ONE BASE ANGLE, solving $\\angle A + 4\\angle A = 180^\\circ$ ✗; $45^\\circ$ is DIVIDING BY THE MULTIPLIER, computing $\\frac{180}{4}$ ✗.)',
    },
    {
      q: 'A triangle $KLM$ has $KL = KM$, and the angle at $K$ is three times as large as the angle at $L$. How big is $\\angle K$?',
      choices: ['$36^\\circ$', '$60^\\circ$', '$108^\\circ$', '$135^\\circ$'],
      answer: 2,
      solution:
        'The equal sides $KL$ and $KM$ make $\\angle L = \\angle M$, so the vertex angle at $K$ is three times EACH of them. Writing $\\angle L = \\angle M = b$ gives $3b + b + b = 5b = 180^\\circ$, so $b = 36^\\circ$ and $\\angle K = 3 \\times 36^\\circ = 108^\\circ$ ✓. Check a second, independent way by solving for the vertex angle directly, never naming $b$. Each base angle is one third of $\\angle K$, and the two base angles together are $180^\\circ - \\angle K$, so $\\frac{2}{3}\\angle K = 180^\\circ - \\angle K$. Adding $\\angle K$ to both sides gives $\\frac{5}{3}\\angle K = 180^\\circ$, so $\\angle K = 180^\\circ \\times \\frac{3}{5} = 108^\\circ$ ✓. Guard: $108 + 36 + 36 = 180$ ✓, and $108 = 3 \\times 36$ ✓. Past $90^\\circ$, so this triangle is obtuse. (The choice $36^\\circ$ is ANSWERING A BASE ANGLE INSTEAD OF THE VERTEX ✗; $135^\\circ$ is COUNTING ONLY ONE BASE ANGLE, solving $3b + b = 180^\\circ$ ✗; $60^\\circ$ is DIVIDING BY THE MULTIPLIER, computing $\\frac{180}{3}$ ✗.)',
    },
    {
      q: 'Triangle $DEF$ has $DE = DF$, and the vertex angle at $D$ is twice as large as the angle at $E$. What is $\\angle D$?',
      choices: ['$45^\\circ$', '$60^\\circ$', '$120^\\circ$', '$90^\\circ$'],
      answer: 3,
      solution:
        'The equal sides give $\\angle E = \\angle F$, each of them half of $\\angle D$. So $\\angle D + \\frac{\\angle D}{2} + \\frac{\\angle D}{2} = 2\\angle D = 180^\\circ$, giving $\\angle D = 90^\\circ$ ✓ — the two base angles are $45^\\circ$ each. Check a second, independent way by building the triangle rather than solving for it. Draw a square and cut along one diagonal. The half you hold has a full $90^\\circ$ corner, and because the diagonal is a line of symmetry it splits each of the square’s other corners fairly, giving $45^\\circ$ and $45^\\circ$. That half-square has two equal sides meeting at the square corner, so it is isosceles with vertex angle $90^\\circ$, and $90^\\circ$ is exactly twice $45^\\circ$ ✓ — the triangle described, with no equation used. (The choice $45^\\circ$ is ANSWERING A BASE ANGLE INSTEAD OF THE VERTEX ✗; $120^\\circ$ is COUNTING ONLY ONE BASE ANGLE, solving $2b + b = 180^\\circ$ and doubling $60$ ✗; $60^\\circ$ is DIVIDING BY THE MULTIPLIER, computing $\\frac{180}{3}$, which is the equilateral case and would make every angle equal ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 3,
  sections: {
    '3.6': s36,
  },
}
