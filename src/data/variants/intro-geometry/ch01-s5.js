// Introduction to Geometry chapter 1 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is exactly a question,
//    an `answer` STRING, and a solution. There is no `choices` key anywhere in
//    this file and no `answer` is a number, because nothing is offered to pick
//    from — the wording has to say what is being asked and in what form.
//  - Every count was checked twice: once with the pair formula
//    $\frac{n(n-1)}{2}$ and once by adding the ladder $(n-1) + (n-2) + \cdots + 1$.
//  - Every arc measure was checked twice: once by arc addition inside the
//    semicircle and once as a linear pair of angles at the center.
//  - Every counterexample was checked by arithmetic, and the solution walks the
//    small cases that PASS before the one that fails — that is the whole point
//    of the slot.
//  - Figures are coordinate-exact. Circle points are placed with cosine and
//    sine at a stated angle and rounded to two decimals; the length figures are
//    drawn to scale (slot 6 v2 and v3 are drawn at half scale, so the picture
//    stays a readable width while the ratios stay honest).
//  - Traps that run through the file. HALVING INSTEAD OF DOUBLING. SQUARING THE
//    RADIUS. FORGETTING TO DIVIDE BY TWO. COUNTING ONLY NEIGHBORING PAIRS.
//    SUBTRACTING FROM 360 INSTEAD OF 180. ADDING WHEN THE PART IS THE UNKNOWN.
//    READING THE FIRST LETTER AS ANYTHING BUT THE ENDPOINT. STOPPING AT THE
//    CASES THAT WORK.

const worksheet = [
  // p1 — name a segment, a ray, and a line with symbols. Three-part answers;
  //      v3 turns the slot around and asks for the meanings instead.
  [
    {
      q: 'Points $M$ and $N$ are two distinct points. Write the correct symbol for each of these three figures: (a) the ray that starts at $N$ and passes through $M$, (b) the segment with endpoints $M$ and $N$, (c) the line through $M$ and $N$.',
      answer: '(a) $\\overrightarrow{NM}$, (b) $\\overline{MN}$, (c) line $MN$',
      solution:
        'Take them one at a time. A ray gets a single arrow, and the FIRST letter is always the endpoint it starts from, so a ray starting at $N$ is $\\overrightarrow{NM}$. A segment gets a plain bar because it stops at both ends: $\\overline{MN}$. A line runs forever in both directions and is written as line $MN$. Second route as a swap test: swap the two letters in each name and see what changes. $\\overline{NM}$ is the same segment ✓ and line $NM$ is the same line ✓, but $\\overrightarrow{MN}$ points the opposite way from $\\overrightarrow{NM}$ ✗ — only the ray cares about order, which confirms the ray is the one whose first letter had to be $N$. READING THE FIRST LETTER AS ANYTHING BUT THE ENDPOINT is the trap: writing $\\overrightarrow{MN}$ for part (a) hands back the ray that shoots off the other way ✗.',
    },
    {
      q: 'Points $R$ and $S$ are two distinct points. Write the correct symbol for each of these three figures: (a) the line through $R$ and $S$, (b) the ray that starts at $R$ and passes through $S$, (c) the segment from $R$ to $S$.',
      answer: '(a) line $RS$, (b) $\\overrightarrow{RS}$, (c) $\\overline{RS}$',
      solution:
        'A line has no ends at all, so it is written as line $RS$ (or line $SR$ — either is fine). A ray has exactly one end, marked by the arrow, and the starting point is named first: $\\overrightarrow{RS}$. A segment has two ends and takes the plain bar: $\\overline{RS}$. Second route by counting endpoints instead of by matching pictures: the three figures have $0$, $1$, and $2$ endpoints in that order, and the three symbols carry a bare name, one arrow, and a flat bar in that same order ✓. WRITING A RAY FOR THE LINE is the trap: $\\overrightarrow{RS}$ misses every point on the far side of $R$ ✗, so it is only a piece of line $RS$.',
    },
    {
      q: 'Points $G$ and $H$ are two distinct points. In words, describe exactly what each of these three names refers to: (a) $\\overline{GH}$, (b) $\\overrightarrow{HG}$, (c) line $GH$.',
      answer: '(a) the segment with endpoints $G$ and $H$, which stops at both ends; (b) the ray that starts at $H$, passes through $G$, and continues forever past $G$; (c) the line through $G$ and $H$, which runs forever in both directions',
      solution:
        'Read the decoration on top of each name. A flat bar means a segment, so $\\overline{GH}$ is the piece between $G$ and $H$ and nothing more. One arrow means a ray, and the first letter is the endpoint, so $\\overrightarrow{HG}$ begins at $H$, travels through $G$, and keeps going past $G$ forever. No decoration at all means the whole line, endless both ways. Second route as a containment check: the segment sits inside the ray, and the ray sits inside the line, so the three names should describe figures that grow from smallest to largest — bar, arrow, line ✓. If a description ever made the ray smaller than the segment, something would be wrong. CONFUSING THE ARROW WITH THE BAR is the trap: calling $\\overrightarrow{HG}$ "the segment from $H$ to $G$" ✗ throws away the endless tail past $G$.',
    },
  ],

  // p2 — radius to diameter. Lanes: 3.5 -> 7, 8 -> 16, 2.5 -> 5.
  [
    {
      q: 'A circle with center $O$ has radius $3.5$, as shown. Find the length of a diameter of this circle.',
      fig: {
        view: [-4.5, -4.5, 4.5, 4.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3.5 },
          { t: 'seg', a: [0, 0], b: [0, 3.5] },
          { t: 'label', p: [0, 1.75], text: '3.5', dx: 14, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: -14, dy: 10 },
          { t: 'point', p: [0, 3.5], label: 'P', dx: 8, dy: -8 },
        ],
      },
      answer: '$7$',
      solution:
        'A diameter is a chord that passes through the center, so it is two radii laid end to end: $2 \\times 3.5 = 7$. Second route by running the operation backward: if the diameter really is $7$, then half of it should land back on the radius, and $7 \\div 2 = 3.5$ ✓. HALVING INSTEAD OF DOUBLING is the trap: $3.5 \\div 2 = 1.75$ ✗ is shorter than the radius we were handed, which cannot be right for the longest chord in the circle. SQUARING THE RADIUS gives $12.25$ ✗ — that is an area idea, not a length.',
    },
    {
      q: 'A circle with center $O$ has radius $8$, as shown. Find the length of a diameter of this circle.',
      fig: {
        view: [-9.5, -9.5, 9.5, 9.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 8 },
          { t: 'seg', a: [0, 0], b: [-8, 0] },
          { t: 'label', p: [-4, 0], text: '8', dx: 0, dy: -10 },
          { t: 'point', p: [0, 0], label: 'O', dx: 10, dy: 12 },
          { t: 'point', p: [-8, 0], label: 'M', dx: -14, dy: 0 },
        ],
      },
      answer: '$16$',
      solution:
        'Two radii meeting at the center make a diameter, so the diameter is $2 \\times 8 = 16$. Second route by walking across the circle: start at the far left edge, go $8$ to reach $O$, then $8$ more to reach the right edge, and $8 + 8 = 16$ ✓. HALVING INSTEAD OF DOUBLING gives $4$ ✗, which is even shorter than one radius. SQUARING THE RADIUS gives $64$ ✗.',
    },
    {
      q: 'A circle with center $O$ has radius $2.5$, as shown. Find the length of a diameter of this circle.',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 2.5 },
          { t: 'seg', a: [0, 0], b: [1.77, -1.77] },
          { t: 'label', p: [0.88, -0.88], text: '2.5', dx: 16, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: -6 },
          { t: 'point', p: [1.77, -1.77], label: 'T', dx: 10, dy: 12 },
        ],
      },
      answer: '$5$',
      solution:
        'The diameter is twice the radius no matter which direction the radius is drawn in: $2 \\times 2.5 = 5$. Second route in halves: $2.5$ is one half of $5$, since $5 \\div 2 = 2.5$ ✓, so a diameter of $5$ is exactly two of these radii. THINKING A SLANTED RADIUS IS SHORTER is the trap here — every radius of one circle has the same length, so tilting $\\overline{OT}$ changes nothing ✗. HALVING INSTEAD OF DOUBLING gives $1.25$ ✗.',
    },
  ],

  // p3 — segments determined by collinear points. Lanes: 11 -> 55, 7 -> 21,
  //      12 -> 66. The dots are drawn without letters: eleven or twelve labelled
  //      points on one short line is unreadable in print.
  [
    {
      q: 'Eleven points lie on a line. How many different segments have both endpoints among these eleven points?',
      fig: {
        view: [-1, -2, 11, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [10, 0] },
          { t: 'point', p: [0, 0] },
          { t: 'point', p: [1, 0] },
          { t: 'point', p: [2, 0] },
          { t: 'point', p: [3, 0] },
          { t: 'point', p: [4, 0] },
          { t: 'point', p: [5, 0] },
          { t: 'point', p: [6, 0] },
          { t: 'point', p: [7, 0] },
          { t: 'point', p: [8, 0] },
          { t: 'point', p: [9, 0] },
          { t: 'point', p: [10, 0] },
        ],
      },
      answer: '$55$',
      solution:
        'A segment is nothing but a pair of endpoints, so counting segments means counting pairs. Each of the $11$ points can partner with the other $10$, giving $11 \\times 10 = 110$ — but that counts every segment twice, once from each end, so the answer is $\\frac{11 \\times 10}{2} = 55$. Second route by climbing the ladder instead of using the formula: the leftmost point starts $10$ segments, the next point starts $9$ brand-new ones, then $8$, and so on down to $1$. Adding $10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1$ in pairs that make $11$ gives five elevens plus the leftover $5$, which is $55 + 0 = 55$ ✓. FORGETTING TO DIVIDE BY TWO is the trap: $110$ ✗ counts $\\overline{AB}$ and $\\overline{BA}$ as two different segments. COUNTING ONLY NEIGHBORING PAIRS gives $10$ ✗ and skips every segment that jumps over a point.',
    },
    {
      q: 'Yara marks seven points along a perfectly straight footpath. How many different segments have both endpoints among her seven marks?',
      fig: {
        view: [-1, -2, 7, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [6, 0] },
          { t: 'point', p: [0, 0] },
          { t: 'point', p: [1, 0] },
          { t: 'point', p: [2, 0] },
          { t: 'point', p: [3, 0] },
          { t: 'point', p: [4, 0] },
          { t: 'point', p: [5, 0] },
          { t: 'point', p: [6, 0] },
        ],
      },
      answer: '$21$',
      solution:
        'Count pairs of marks: each of the $7$ points pairs with the other $6$, which is $7 \\times 6 = 42$, and then divide by $2$ because a segment gets counted once from each end. That gives $\\frac{7 \\times 6}{2} = 21$. Second route by the ladder: the first mark starts $6$ segments, the second starts $5$ new ones, then $4$, $3$, $2$, $1$, and $6 + 5 + 4 + 3 + 2 + 1 = 21$ ✓. FORGETTING TO DIVIDE BY TWO gives $42$ ✗. COUNTING ONLY NEIGHBORING PAIRS gives $6$ ✗, which misses long segments such as the one joining the first mark to the last.',
    },
    {
      q: 'Twelve points lie on a line. How many different segments have both endpoints among these twelve points?',
      fig: {
        view: [-1, -2, 12, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [11, 0] },
          { t: 'point', p: [0, 0] },
          { t: 'point', p: [1, 0] },
          { t: 'point', p: [2, 0] },
          { t: 'point', p: [3, 0] },
          { t: 'point', p: [4, 0] },
          { t: 'point', p: [5, 0] },
          { t: 'point', p: [6, 0] },
          { t: 'point', p: [7, 0] },
          { t: 'point', p: [8, 0] },
          { t: 'point', p: [9, 0] },
          { t: 'point', p: [10, 0] },
          { t: 'point', p: [11, 0] },
        ],
      },
      answer: '$66$',
      solution:
        'Each of the $12$ points pairs with the other $11$, so there are $12 \\times 11 = 132$ ordered choices and $\\frac{12 \\times 11}{2} = 66$ actual segments. Second route by the ladder: $11 + 10 + 9 + \\cdots + 1$. Pair the ends up — $11 + 1 = 12$, $10 + 2 = 12$, $9 + 3 = 12$, $8 + 4 = 12$, $7 + 5 = 12$ — that is five twelves, which is $60$, plus the lonely $6$ in the middle, for $66$ ✓. FORGETTING TO DIVIDE BY TWO gives $132$ ✗. MULTIPLYING BY ITSELF gives $12 \\times 12 = 144$ ✗, which lets a point pair with itself, and a segment needs two different endpoints.',
    },
  ],

  // p4 — find a counterexample to an "every..." claim. Each solution walks the
  //      cases that pass before the one that fails.
  [
    {
      q: 'Find a counterexample to the claim: "Every multiple of $9$ has digits that add up to exactly $9$."',
      answer: '$99$ (its digits add to $9 + 9 = 18$, not $9$)',
      solution:
        'Test the claim in order and it looks unstoppable: $9$ has digit sum $9$ ✓, $18$ gives $1 + 8 = 9$ ✓, $27$ gives $2 + 7 = 9$ ✓, $36$ gives $3 + 6 = 9$ ✓, $45$ gives $4 + 5 = 9$ ✓. Now try $99$. It is a multiple of $9$, since $99 = 9 \\times 11$, and its digits add to $9 + 9 = 18$ ✗, which is not $9$. One failure is all it takes to kill an "every" claim. Second route by a different counterexample, to be sure the first one was not a fluke: $189 = 9 \\times 21$, and $1 + 8 + 9 = 18$ ✗ as well. What is true is that the digit sum is a MULTIPLE of $9$, which is a weaker and much more useful claim. STOPPING AT THE CASES THAT WORK is the trap: five successes in a row prove nothing at all.',
    },
    {
      q: 'Find a counterexample to the claim: "Every two-digit multiple of $7$ is written with two different digits."',
      answer: '$77$ (it is $7 \\times 11$, and both of its digits are $7$)',
      solution:
        'Walk the two-digit multiples of $7$ in order: $14$ ✓, $21$ ✓, $28$ ✓, $35$ ✓, $42$ ✓, $49$ ✓, $56$ ✓, $63$ ✓, $70$ ✓ — nine in a row with two different digits, which makes the claim feel safe. Then comes $77 = 7 \\times 11$, whose two digits are both $7$ ✗. Claim broken. Second route as a concrete check on the counterexample itself: $77 \\div 7 = 11$ exactly, so $77$ really is a multiple of $7$ ✓, and it really has two digits ✓, so it qualifies as a test case rather than being disqualified on a technicality. STOPPING AT THE CASES THAT WORK is the trap once more — the very next case after nine successes is the one that fails.',
    },
    {
      q: 'Find a counterexample to the claim: "Every whole number is smaller than its own double."',
      answer: '$0$ (its double is $0$, and $0$ is not smaller than $0$)',
      solution:
        'Try a few whole numbers: $3$ doubles to $6$, and $3 < 6$ ✓; $5$ doubles to $10$, and $5 < 10$ ✓; $7$ doubles to $14$, and $7 < 14$ ✓; even $100$ doubles to $200$ ✓. Now try the smallest whole number of all, $0$. Its double is $2 \\times 0 = 0$, and $0 < 0$ is false ✗ — equal is not smaller. Second route by looking at the gap instead of the numbers: doubling a number adds another copy of it, so the double beats the original by exactly the number itself. That gap is positive for every whole number except $0$, where the gap is $0$ ✓, which pins down $0$ as the only counterexample there is. FORGETTING THE EDGE CASE is the trap: $0$ is a whole number, so the claim has to survive it, and it does not.',
    },
  ],

  // p5 — write the converse and judge it. v2 has a converse that is TRUE, so
  //      "the converse always fails" is not a pattern a student can lean on.
  [
    {
      q: 'Write the converse of this true statement: "If a segment is a radius of a circle, then one of its endpoints is the center of the circle." Then decide whether the converse is true or false, and say why.',
      answer: 'Converse: "If one endpoint of a segment is the center of a circle, then the segment is a radius of that circle." It is false — a short segment from the center to a point inside the circle has an endpoint at the center but is not a radius.',
      solution:
        'The converse swaps the if-part and the then-part, so it reads: "If one endpoint of a segment is the center of a circle, then the segment is a radius of that circle." Now hunt for a counterexample. Draw a circle of radius $6$ and a segment from the center out to a point at distance $2$. One endpoint is the center ✓, but the other endpoint sits inside the circle, not ON it, so the segment is not a radius ✗. The converse is false. Second route by stretching the same segment the other way: take a segment from the center to a point at distance $9$. Again one endpoint is the center, and again it fails to be a radius, this time because it pokes out past the circle ✗. Two different ways to fail means the converse is broken from both sides. ASSUMING THE CONVERSE COMES FREE is the trap: the original statement is true, and that tells you nothing about which way the flipped version lands.',
    },
    {
      q: 'Write the converse of this true statement: "If a point is inside a circle, then its distance from the center is less than the radius." Then decide whether the converse is true or false, and say why.',
      answer: 'Converse: "If a point’s distance from the center is less than the radius, then the point is inside the circle." It is true — that comparison is exactly what being inside the circle means.',
      solution:
        'Swap the halves to build the converse: "If a point’s distance from the center is less than the radius, then the point is inside the circle." This one is true, and it is true for a special reason — the statement and its converse are the two halves of a DEFINITION. The radius sorts every point in the plane into three camps by one comparison: distance less than the radius means inside, distance equal to the radius means on the circle, distance greater than the radius means outside. Second route by trying to break it, which is the honest way to test a converse: take a circle of radius $10$ and a point at distance $4$. Since $4 < 10$, the converse claims the point is inside — and it is ✓. There is no room for a counterexample, because a point at distance less than $10$ cannot be on the circle (that needs exactly $10$) or outside it (that needs more than $10$). ASSUMING THE CONVERSE ALWAYS FAILS is the trap here: converses are not free, but sometimes they are true, and definitions always work in both directions.',
    },
    {
      q: 'Write the converse of this true statement: "If two angles are both right angles, then they have the same measure." Then decide whether the converse is true or false, and say why.',
      answer: 'Converse: "If two angles have the same measure, then they are both right angles." It is false — two angles measuring $40^\\circ$ each have the same measure and neither one is a right angle.',
      solution:
        'The converse swaps the halves: "If two angles have the same measure, then they are both right angles." One counterexample sinks it. Picture two angles of $40^\\circ$ each. They have the same measure ✓, and neither is a right angle ✗, so the converse is false. Second route with a completely different pair, to show the failure is everywhere and not a one-off: two angles of $150^\\circ$ each also match in measure and are both far too big to be right angles ✗. In fact ANY shared measure other than $90^\\circ$ breaks the converse, so counterexamples are infinite in supply, while the original statement stays perfectly true because every right angle measures $90^\\circ$. ASSUMING THE CONVERSE COMES FREE is the trap: a true statement guarantees nothing about its flipped version.',
    },
  ],

  // p6 — adding lengths along a line. v1 adds the two parts; v2 and v3 hand
  //      over the whole and one part, so the unknown has to be subtracted out.
  [
    {
      q: 'Points $D$, $E$, and $F$ lie on a line, with $E$ between $D$ and $F$. If $DE = 5$ and $EF = 9$, find $DF$.',
      fig: {
        view: [-1.5, -2.5, 15.5, 2.5],
        elems: [
          { t: 'line', a: [0, 0], b: [14, 0] },
          { t: 'point', p: [0, 0], label: 'D', dx: 0, dy: -12 },
          { t: 'point', p: [5, 0], label: 'E', dx: 0, dy: -12 },
          { t: 'point', p: [14, 0], label: 'F', dx: 0, dy: -12 },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 14 },
          { t: 'label', p: [9.5, 0], text: '9', dx: 0, dy: 14 },
        ],
      },
      answer: '$14$',
      solution:
        'Because $E$ sits BETWEEN $D$ and $F$, the two short pieces stack up to the whole: $DF = DE + EF = 5 + 9 = 14$. Second route with a ruler instead of a rule: park $D$ at the $0$ mark of a number line. Then $E$ lands at $5$, and $F$ lands $9$ further along at $5 + 9 = 14$, so $DF = 14 - 0 = 14$ ✓. SUBTRACTING WHEN THE WHOLE IS THE UNKNOWN is the trap: $9 - 5 = 4$ ✗ would make the whole segment shorter than the piece $EF$ inside it, which is impossible. Note also that the adding-up fact needs the betweenness — if $F$ sat between $D$ and $E$ instead, the arithmetic would change completely.',
    },
    {
      q: 'Points $M$, $N$, and $T$ lie on a line, with $N$ between $M$ and $T$. If $MT = 15$ and $NT = 6$, find $MN$.',
      fig: {
        view: [-1.5, -3, 11.5, 4],
        elems: [
          { t: 'line', a: [0, 0], b: [10, 0] },
          { t: 'point', p: [0, 0], label: 'M', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'N', dx: 0, dy: -12 },
          { t: 'point', p: [10, 0], label: 'T', dx: 0, dy: -12 },
          { t: 'label', p: [3, 0], text: '?', dx: 0, dy: 16 },
          { t: 'label', p: [8, 0], text: '6', dx: 0, dy: 16 },
          { t: 'seg', a: [0, 2.2], b: [10, 2.2], dash: true },
          { t: 'label', p: [5, 2.2], text: '15', dx: 0, dy: -8 },
        ],
      },
      answer: '$9$',
      solution:
        'This time the whole is known and one piece is missing. Since $N$ is between $M$ and $T$, we still have $MN + NT = MT$, which reads $MN + 6 = 15$, so $MN = 15 - 6 = 9$. Second route with a number line: put $M$ at $0$, so $T$ lands at $15$. Point $N$ is $6$ short of $T$, which places it at $15 - 6 = 9$, and $MN = 9 - 0 = 9$ ✓. Check by rebuilding the whole: $9 + 6 = 15$ ✓. ADDING WHEN THE PART IS THE UNKNOWN is the trap: $15 + 6 = 21$ ✗ makes a piece longer than the entire segment that contains it.',
    },
    {
      q: 'Points $X$, $Y$, and $Z$ lie on a line, with $Y$ between $X$ and $Z$. If $XZ = 22$ and $XY = 14$, find $YZ$.',
      fig: {
        view: [-1.5, -3, 12.5, 4],
        elems: [
          { t: 'line', a: [0, 0], b: [11, 0] },
          { t: 'point', p: [0, 0], label: 'X', dx: 0, dy: -12 },
          { t: 'point', p: [7, 0], label: 'Y', dx: 0, dy: -12 },
          { t: 'point', p: [11, 0], label: 'Z', dx: 0, dy: -12 },
          { t: 'label', p: [3.5, 0], text: '14', dx: 0, dy: 16 },
          { t: 'label', p: [9, 0], text: '?', dx: 0, dy: 16 },
          { t: 'seg', a: [0, 2.2], b: [11, 2.2], dash: true },
          { t: 'label', p: [5.5, 2.2], text: '22', dx: 0, dy: -8 },
        ],
      },
      answer: '$8$',
      solution:
        'The two pieces make the whole, so $XY + YZ = XZ$, which reads $14 + YZ = 22$. Peel off the known piece: $YZ = 22 - 14 = 8$. Second route with a number line: set $X$ at $0$, so $Z$ sits at $22$ and $Y$ sits at $14$. The distance from $Y$ to $Z$ is then $22 - 14 = 8$ ✓, and rebuilding gives $14 + 8 = 22$ ✓. ADDING WHEN THE PART IS THE UNKNOWN is the trap: $22 + 14 = 36$ ✗. SUBTRACTING BACKWARD gives $14 - 22 = -8$ ✗, and a length is never negative — always take the whole minus the part.',
    },
  ],

  // p7 — chords determined by points on a circle. Lanes: 4 -> 6, 6 -> 15,
  //      8 -> 28. Circle points placed with cosine and sine at radius 3.
  [
    {
      q: 'Points $W$, $X$, $Y$, and $Z$ lie on a circle. How many different chords have both endpoints among these four points?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'point', p: [2.12, 2.12], label: 'W', dx: 10, dy: -10 },
          { t: 'point', p: [-2.12, 2.12], label: 'X', dx: -12, dy: -10 },
          { t: 'point', p: [-2.12, -2.12], label: 'Y', dx: -12, dy: 12 },
          { t: 'point', p: [2.12, -2.12], label: 'Z', dx: 10, dy: 12 },
        ],
      },
      answer: '$6$',
      solution:
        'A chord is a segment with both endpoints on the circle, so a chord is just a PAIR of the marked points. Counting pairs: each of the $4$ points partners with the other $3$, giving $4 \\times 3 = 12$, and then we halve it because each chord was counted from both ends: $\\frac{4 \\times 3}{2} = 6$. Second route by listing every chord by name, which is short enough to do here: $\\overline{WX}$, $\\overline{WY}$, $\\overline{WZ}$, $\\overline{XY}$, $\\overline{XZ}$, $\\overline{YZ}$ — six of them, and no more, since any other name is one of these with the letters swapped ✓. FORGETTING TO DIVIDE BY TWO gives $12$ ✗. COUNTING ONLY NEIGHBORING PAIRS gives $4$ ✗ and drops the two chords that cross the middle.',
    },
    {
      q: 'Points $P$, $Q$, $R$, $S$, $T$, and $U$ lie on a circle. How many different chords have both endpoints among these six points?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'point', p: [3, 0], label: 'P', dx: 12, dy: 0 },
          { t: 'point', p: [1.5, 2.6], label: 'Q', dx: 10, dy: -10 },
          { t: 'point', p: [-1.5, 2.6], label: 'R', dx: -12, dy: -10 },
          { t: 'point', p: [-3, 0], label: 'S', dx: -14, dy: 0 },
          { t: 'point', p: [-1.5, -2.6], label: 'T', dx: -12, dy: 12 },
          { t: 'point', p: [1.5, -2.6], label: 'U', dx: 10, dy: 14 },
        ],
      },
      answer: '$15$',
      solution:
        'Each chord is a pair of the six marked points. Each point pairs with the other $5$, which is $6 \\times 5 = 30$ ordered picks, and halving for the double count gives $\\frac{6 \\times 5}{2} = 15$. Second route by the ladder: $P$ starts $5$ chords, $Q$ adds $4$ that are brand new, $R$ adds $3$, $S$ adds $2$, $T$ adds $1$, and $U$ adds none that have not already been named. Then $5 + 4 + 3 + 2 + 1 = 15$ ✓. FORGETTING TO DIVIDE BY TWO gives $30$ ✗. COUNTING ONLY NEIGHBORING PAIRS gives $6$ ✗ — the six short chords around the rim — and misses every chord that reaches across the circle.',
    },
    {
      q: 'Points $K$, $L$, $M$, $N$, $P$, $Q$, $R$, and $S$ lie on a circle. How many different chords have both endpoints among these eight points?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'point', p: [2.9, 0.78], label: 'K', dx: 12, dy: -4 },
          { t: 'point', p: [1.5, 2.6], label: 'L', dx: 10, dy: -10 },
          { t: 'point', p: [-0.78, 2.9], label: 'M', dx: -6, dy: -12 },
          { t: 'point', p: [-2.6, 1.5], label: 'N', dx: -14, dy: -6 },
          { t: 'point', p: [-2.9, -0.78], label: 'P', dx: -14, dy: 6 },
          { t: 'point', p: [-1.5, -2.6], label: 'Q', dx: -12, dy: 12 },
          { t: 'point', p: [0.78, -2.9], label: 'R', dx: 4, dy: 16 },
          { t: 'point', p: [2.6, -1.5], label: 'S', dx: 12, dy: 10 },
        ],
      },
      answer: '$28$',
      solution:
        'Count pairs of the eight points: $8 \\times 7 = 56$ ordered picks, halved because $\\overline{KL}$ and $\\overline{LK}$ are the same chord, so $\\frac{8 \\times 7}{2} = 28$. Second route by the ladder: $7 + 6 + 5 + 4 + 3 + 2 + 1$. Pair the ends — $7 + 1 = 8$, $6 + 2 = 8$, $5 + 3 = 8$ — three eights make $24$, plus the leftover $4$ in the middle, for $28$ ✓. FORGETTING TO DIVIDE BY TWO gives $56$ ✗. MULTIPLYING BY ITSELF gives $8 \\times 8 = 64$ ✗, which would let a point pair with itself, and that is not a chord at all.',
    },
  ],

  // p8 — inside / on / outside by one comparison with the radius. The verdicts
  //      appear in a different order in each variation, so the pattern cannot
  //      be guessed; v1 opens with a point that is OUTSIDE.
  [
    {
      q: 'A circle with center $O$ has radius $5$. Point $R$ satisfies $OR = 6.5$, point $S$ satisfies $OS = 5$, and point $T$ satisfies $OT = 2$. State for each point whether it is inside the circle, on the circle, or outside the circle.',
      fig: {
        view: [-7, -6.5, 7, 6.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'seg', a: [0, 0], b: [-4.98, 4.18], dash: true },
          { t: 'seg', a: [0, 0], b: [4.33, 2.5], dash: true },
          { t: 'seg', a: [0, 0], b: [1, -1.73], dash: true },
          { t: 'label', p: [-2.49, 2.09], text: '6.5', dx: -6, dy: -10 },
          { t: 'label', p: [2.17, 1.25], text: '5', dx: 12, dy: 4 },
          { t: 'label', p: [0.5, -0.87], text: '2', dx: 14, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: -14, dy: -4 },
          { t: 'point', p: [-4.98, 4.18], label: 'R', dx: -14, dy: -6 },
          { t: 'point', p: [4.33, 2.5], label: 'S', dx: 12, dy: -6 },
          { t: 'point', p: [1, -1.73], label: 'T', dx: 10, dy: 12 },
        ],
      },
      answer: '$R$ is outside, $S$ is on the circle, $T$ is inside',
      solution:
        'One comparison settles each point: measure its distance from $O$ against the radius $5$. For $R$, $6.5 > 5$, so $R$ is outside ✓. For $S$, $5 = 5$ exactly, so $S$ sits right on the circle ✓ — the circle IS the set of points at distance exactly $5$. For $T$, $2 < 5$, so $T$ is inside ✓. Second route by sorting all four numbers on one line: $2$, then $5$, then $6.5$, with the radius $5$ standing in the middle as the referee. Everything to the left of $5$ is inside, everything to the right is outside, and the number sitting on $5$ is on the circle ✓ — same three verdicts, found without comparing anything twice. ASSUMING THE ANSWERS COME IN A TIDY ORDER is the trap: here the very first point is the outside one. THINKING THE CENTER IS ON THE CIRCLE is the other trap — $O$ is at distance $0$, so it is inside.',
    },
    {
      q: 'A circle with center $O$ has radius $8$. Point $J$ satisfies $OJ = 8$, point $K$ satisfies $OK = 9.6$, and point $L$ satisfies $OL = 3$. State for each point whether it is inside the circle, on the circle, or outside the circle.',
      fig: {
        view: [-11, -9.5, 10, 10],
        elems: [
          { t: 'circle', c: [0, 0], r: 8 },
          { t: 'seg', a: [0, 0], b: [4.59, 6.55], dash: true },
          { t: 'seg', a: [0, 0], b: [-9.02, 3.28], dash: true },
          { t: 'seg', a: [0, 0], b: [0.52, -2.95], dash: true },
          { t: 'label', p: [2.3, 3.28], text: '8', dx: 12, dy: 2 },
          { t: 'label', p: [-4.51, 1.64], text: '9.6', dx: 0, dy: -10 },
          { t: 'label', p: [0.26, -1.48], text: '3', dx: 14, dy: 4 },
          { t: 'point', p: [0, 0], label: 'O', dx: -14, dy: -4 },
          { t: 'point', p: [4.59, 6.55], label: 'J', dx: 10, dy: -8 },
          { t: 'point', p: [-9.02, 3.28], label: 'K', dx: -14, dy: -6 },
          { t: 'point', p: [0.52, -2.95], label: 'L', dx: 10, dy: 12 },
        ],
      },
      answer: '$J$ is on the circle, $K$ is outside, $L$ is inside',
      solution:
        'Compare each distance with the radius $8$. For $J$, $8 = 8$, so $J$ is on the circle ✓. For $K$, $9.6 > 8$, so $K$ is outside ✓. For $L$, $3 < 8$, so $L$ is inside ✓. Second route by asking how far each point would have to move to land on the circle: $J$ moves $0$ ✓, $K$ would have to come in $9.6 - 8 = 1.6$ ✓, and $L$ would have to go out $8 - 3 = 5$ ✓. A point that must come IN to reach the circle started outside, and a point that must go OUT started inside — the same three verdicts by a completely different question. COMPARING AGAINST THE DIAMETER is the trap: $9.6 < 16$ ✗ would wrongly call $K$ inside, but the referee is the radius, never the diameter.',
    },
    {
      q: 'A circle with center $O$ has radius $10$. Point $D$ satisfies $OD = 7.5$, point $E$ satisfies $OE = 12$, and point $F$ satisfies $OF = 10$. State for each point whether it is inside the circle, on the circle, or outside the circle.',
      fig: {
        view: [-13.5, -11.5, 12.5, 12],
        elems: [
          { t: 'circle', c: [0, 0], r: 10 },
          { t: 'seg', a: [0, 0], b: [3.17, 6.8], dash: true },
          { t: 'seg', a: [0, 0], b: [-11.28, -4.1], dash: true },
          { t: 'seg', a: [0, 0], b: [9.4, -3.42], dash: true },
          { t: 'label', p: [1.59, 3.4], text: '7.5', dx: 14, dy: 2 },
          { t: 'label', p: [-5.64, -2.05], text: '12', dx: -4, dy: 14 },
          { t: 'label', p: [4.7, -1.71], text: '10', dx: 4, dy: 14 },
          { t: 'point', p: [0, 0], label: 'O', dx: -14, dy: 8 },
          { t: 'point', p: [3.17, 6.8], label: 'D', dx: 10, dy: -8 },
          { t: 'point', p: [-11.28, -4.1], label: 'E', dx: -14, dy: 10 },
          { t: 'point', p: [9.4, -3.42], label: 'F', dx: 12, dy: 8 },
        ],
      },
      answer: '$D$ is inside, $E$ is outside, $F$ is on the circle',
      solution:
        'Hold each distance up against the radius $10$. For $D$, $7.5 < 10$, so $D$ is inside ✓. For $E$, $12 > 10$, so $E$ is outside ✓. For $F$, $10 = 10$, so $F$ is on the circle ✓. Second route through the diameter as a sanity check on the picture: the diameter is $2 \\times 10 = 20$, so the whole circle is only $20$ wide. A point $12$ from the center is more than half of that away and has to poke out past the rim ✓, while a point $7.5$ away has not even reached the rim ✓. COMPARING AGAINST THE DIAMETER is the trap: $12 < 20$ ✗ would call $E$ inside, which the picture flatly contradicts. CALLING THE ON-THE-CIRCLE POINT "INSIDE" is the other trap — inside demands strictly less than $10$, and $F$ is exactly $10$.',
    },
  ],

  // p9 — diameter splits the circle into two 180-degree semicircles. Lanes:
  //      36 -> 144, 58 -> 122, 15 -> 165. The point on the circle is placed at
  //      (180 - arc) degrees on a circle of radius 3.
  [
    {
      q: '$\\overline{JK}$ is a diameter of the circle with center $O$, and $L$ is a point on the circle with arc $JL = 36^\\circ$. Find the measure of arc $LK$.',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-2.43, 1.76] },
          { t: 'angle', at: [0, 0], from: [-2.43, 1.76], to: [-3, 0], r: 0.9, label: '36' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'J', dx: -12, dy: 8 },
          { t: 'point', p: [3, 0], label: 'K', dx: 12, dy: 0 },
          { t: 'point', p: [-2.43, 1.76], label: 'L', dx: -12, dy: -8 },
        ],
      },
      answer: '$144^\\circ$',
      solution:
        'A diameter cuts the circle into two semicircles of $180^\\circ$ each. Arc $JL$ and arc $LK$ sit side by side inside the semicircle that contains $L$, so they must add to $180^\\circ$: arc $LK = 180^\\circ - 36^\\circ = 144^\\circ$. Second route through the angles at the center instead of the arcs: $J$, $O$, and $K$ are collinear, so $\\angle JOL$ and $\\angle LOK$ form a linear pair and add to $180^\\circ$. That gives $\\angle LOK = 180^\\circ - 36^\\circ = 144^\\circ$, and a central angle has the same measure as the arc it opens onto, so arc $LK = 144^\\circ$ ✓. Rebuild to check: $36 + 144 = 180$ ✓. SUBTRACTING FROM 360 INSTEAD OF 180 is the trap: $324^\\circ$ ✗ is the arc that runs from $L$ the long way around THROUGH $K$ and back to $J$, not the short arc from $L$ to $K$.',
    },
    {
      q: '$\\overline{MN}$ is a diameter of the circle with center $O$, and $P$ is a point on the circle with arc $MP = 58^\\circ$. Find the measure of arc $PN$.',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-1.59, 2.54] },
          { t: 'angle', at: [0, 0], from: [-1.59, 2.54], to: [-3, 0], r: 0.8, label: '58' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'M', dx: -14, dy: 0 },
          { t: 'point', p: [3, 0], label: 'N', dx: 12, dy: 0 },
          { t: 'point', p: [-1.59, 2.54], label: 'P', dx: -10, dy: -10 },
        ],
      },
      answer: '$122^\\circ$',
      solution:
        'The diameter $\\overline{MN}$ splits the circle into two semicircles of $180^\\circ$. Arcs $MP$ and $PN$ together fill the semicircle on $P$’s side, so arc $PN = 180^\\circ - 58^\\circ = 122^\\circ$. Second route with a linear pair: $M$, $O$, and $N$ lie on one straight line, so $\\angle MOP$ and $\\angle PON$ add to $180^\\circ$, giving $\\angle PON = 122^\\circ$, and the arc matches its central angle ✓. Rebuild: $58 + 122 = 180$ ✓. SUBTRACTING FROM 360 INSTEAD OF 180 gives $302^\\circ$ ✗, which is the long way round. SUBTRACTING FROM 90 gives $32^\\circ$ ✗ — a semicircle is $180^\\circ$, not $90^\\circ$.',
    },
    {
      q: '$\\overline{RS}$ is a diameter of the circle with center $O$, and $T$ is a point on the circle with arc $RT = 15^\\circ$. Find the measure of arc $TS$.',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-2.9, 0.78] },
          { t: 'angle', at: [0, 0], from: [-2.9, 0.78], to: [-3, 0], r: 1.1, label: '15' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'R', dx: -14, dy: 12 },
          { t: 'point', p: [3, 0], label: 'S', dx: 12, dy: 0 },
          { t: 'point', p: [-2.9, 0.78], label: 'T', dx: -8, dy: -10 },
        ],
      },
      answer: '$165^\\circ$',
      solution:
        'Arc $RT$ and arc $TS$ make up one semicircle, which measures $180^\\circ$, so arc $TS = 180^\\circ - 15^\\circ = 165^\\circ$. Second route with a linear pair at the center: $R$, $O$, $S$ are collinear, so $\\angle ROT + \\angle TOS = 180^\\circ$, and $\\angle TOS = 165^\\circ$, which is the measure of arc $TS$ ✓. Rebuild: $15 + 165 = 180$ ✓. A quick reasonableness check: $T$ is drawn very close to $R$, so arc $TS$ should be nearly a whole semicircle, and $165^\\circ$ is just shy of $180^\\circ$ ✓. SUBTRACTING FROM 360 INSTEAD OF 180 gives $345^\\circ$ ✗, and that arc would have to swing all the way past $S$ and back.',
    },
  ],

  // p10 — an if-then claim that survives several tests and then breaks. Each
  //       solution lists the passing cases first, in order.
  [
    {
      q: 'Consider the claim: "If a whole number is a multiple of both $4$ and $10$, then it is a multiple of $40$." Find a counterexample, and show why it breaks the claim.',
      answer: '$20$ (it is $4 \\times 5$ and $10 \\times 2$, but $20$ is not a multiple of $40$)',
      solution:
        'The cases that come to mind first all pass. $40$ is a multiple of $4$ and of $10$, and it is a multiple of $40$ ✓. So is $80$ ✓. So is $120$ ✓. Three straight successes — and none of them tests anything, because they were all multiples of $40$ to begin with. Now walk up the multiples of $10$ instead and keep the ones that are also multiples of $4$. $10$ is not a multiple of $4$, so skip it. $20$ is: $20 = 4 \\times 5$ ✓ and $20 = 10 \\times 2$ ✓, so $20$ meets the claim’s condition. Check the conclusion: the multiples of $40$ run $40, 80, 120, \\ldots$, and $20$ is not among them ✗. Condition met, conclusion broken — that is a counterexample. Second route that explains WHY the claim fails, instead of just finding one case: the smallest number that is a multiple of both $4$ and $10$ is their least common multiple. Since $4 = 2 \\times 2$ and $10 = 2 \\times 5$ already share a factor of $2$, the least common multiple is $2 \\times 2 \\times 5 = 20$, not $40$ ✓. Every multiple of $20$ that is not a multiple of $40$ works too, so $60$ is a second correct answer. MULTIPLYING THE TWO NUMBERS TOGETHER is the trap: $4 \\times 10 = 40$ only counts the shared factor of $2$ twice.',
    },
    {
      q: 'Consider the claim: "If $n$ is a whole number, then $2^n + 1$ is prime." Find a counterexample, and show why it breaks the claim.',
      answer: '$n = 3$ (then $2^n + 1 = 9 = 3 \\times 3$, which is not prime)',
      solution:
        'Work up from the bottom. At $n = 0$: $1 + 1 = 2$, prime ✓. At $n = 1$: $2 + 1 = 3$, prime ✓. At $n = 2$: $4 + 1 = 5$, prime ✓. Three in a row, and the pattern looks convincing. Then $n = 3$: $8 + 1 = 9$, and $9 = 3 \\times 3$ ✗, which is not prime. Second route as an independent check on the arithmetic, doubling instead of using powers: start at $1$ and double three times — $1, 2, 4, 8$ — so $2^3 = 8$ and $2^3 + 1 = 9$ ✓, and $9$ divides evenly by $3$ ✓. One counterexample is enough, and this one arrives on the very fourth try. STOPPING AT THE CASES THAT WORK is the trap. MISREADING $2^n$ AS $2n$ is the other trap: $2 \\times 3 + 1 = 7$ ✗ is prime and would hide the counterexample entirely.',
    },
    {
      q: 'Consider the claim: "If a whole number is a multiple of $11$, then it is written with an even number of digits." Find a counterexample, and show why it breaks the claim.',
      answer: '$121$ (it is $11 \\times 11$, and it has $3$ digits, which is an odd number of digits)',
      solution:
        'Run through the multiples of $11$ in order: $11$, $22$, $33$, $44$, $55$, $66$, $77$, $88$, $99$ — nine of them, every one with exactly $2$ digits, and $2$ is even ✓. The claim survives all nine. The next multiple is $110$, which has $3$ digits ✗, and the one after that, $121 = 11 \\times 11$, has $3$ digits as well ✗. Either one finishes the claim off. Second route as a check that the counterexample really is a multiple of $11$: $121 \\div 11 = 11$ exactly ✓, and counting its digits gives $1$, $2$, $1$, which is $3$ digits, an odd number ✓. STOPPING AT THE CASES THAT WORK is the trap — the two-digit multiples all happen to agree with the claim, and there are just enough of them to feel like evidence.',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 1,
  worksheet,
}
