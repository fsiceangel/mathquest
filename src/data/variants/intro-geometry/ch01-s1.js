// Introduction to Geometry chapter 1 — variations for section 1.2
// (Points, Lines, and Planes). All problems, figures, and solutions are
// original MathQuest content.
//
// House rules for this file:
//  - Every count was worked twice: once by the pair formula and once by a
//    hand list or a small-case build-up, and the two routes must agree before
//    a key is written down.
//  - Each slot keeps the shape of its base answer: a notation question stays a
//    notation question, a count stays a count, a "how many planes" question
//    never quietly turns into a "how many lines" question.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this section are: READING THE LETTERS
//    BACKWARD, CONFUSING THE ARROW WITH A BAR, TREATING A RAY AS A LINE,
//    TREATING A SEGMENT AS A LINE, COUNTING THE TWO DIRECTIONS SEPARATELY,
//    ANCHORING AT THE WRONG POINT, MISSING THE SHARED ENDPOINT, COUNTING
//    NAMES INSTEAD OF LINES, COUNTING THE POINTS, COUNTING EACH SEGMENT
//    TWICE, ADDING ONE TERM TOO MANY, SQUARING INSTEAD OF PAIRING, DOUBLING
//    THE POINTS, and ANSWERING THE LINES QUESTION.
//  - No two choices inside an item name the same value.

const s12 = [
  // s1 — notation recognition: bar, arrow, and line, read in both directions.
  [
    {
      q: 'The symbol $\\overrightarrow{JK}$ is read aloud as "ray $JK$." Which description matches it?',
      choices: [
        'It stops at $J$ and at $K$',
        'It starts at $J$, passes through $K$, and goes on forever',
        'It starts at $K$, passes through $J$, and goes on forever',
        'It runs forever in both directions',
      ],
      answer: 1,
      solution:
        'For a ray, the FIRST letter is the endpoint and the arrow points away from it, so $\\overrightarrow{JK}$ is anchored at $J$, travels through $K$, and never stops ✓. Check a second, independent way by asking what the other spelling would mean: if the letters could be swapped freely, $\\overrightarrow{JK}$ and $\\overrightarrow{KJ}$ would be the same figure — but those two together cover the entire line, and neither one alone does, so the order must carry real information, and the only letter that can be the anchor is the one written first ✓. (Stopping at both letters is CONFUSING THE ARROW WITH A BAR — that is what $\\overline{JK}$ means ✗; starting at $K$ is READING THE LETTERS BACKWARD ✗; running forever both ways is TREATING A RAY AS A LINE ✗.)',
    },
    {
      q: 'Amara writes $\\overline{RS}$ — a plain bar with no arrowheads on either end. Which figure has she named?',
      choices: [
        'the line through $R$ and $S$',
        'the ray that starts at $R$ and passes through $S$',
        'the segment from $R$ to $S$',
        'the ray that starts at $S$ and passes through $R$',
      ],
      answer: 2,
      solution:
        'Arrowheads are the symbol’s way of saying "this keeps going." A plain bar has none, so the figure stops at both letters: $\\overline{RS}$ is the segment from $R$ to $S$ ✓. Check a second, independent way by counting endpoints instead of reading arrowheads: a segment has two endpoints, a ray has one, a line has none. The bar names both $R$ and $S$ as the places where the figure quits, which is two endpoints — segment ✓. Notice too that $\\overline{RS}$ and $\\overline{SR}$ are the same figure, exactly as you would expect for something with no direction at all. (Choosing the line is TREATING A SEGMENT AS A LINE ✗; either ray choice is CONFUSING THE ARROW WITH A BAR, inventing an arrowhead that was never drawn ✗.)',
    },
    {
      q: 'Which symbol names the figure that begins at point $K$, passes through point $L$, and continues forever past $L$?',
      choices: ['$\\overline{KL}$', 'line $KL$', '$\\overrightarrow{LK}$', '$\\overrightarrow{KL}$'],
      answer: 3,
      solution:
        'The figure has exactly one endpoint and one direction, so it is a ray, which means an arrow on top; the endpoint goes first, so it is $\\overrightarrow{KL}$ ✓. Check a second, independent way by testing which points each candidate contains. The figure described contains $K$, contains $L$, and contains everything past $L$ — but nothing on the far side of $K$. Only $\\overrightarrow{KL}$ does that: $\\overline{KL}$ throws away everything past $L$ ✗, line $KL$ wrongly keeps the points beyond $K$ ✗, and $\\overrightarrow{LK}$ keeps the points beyond $K$ while throwing away the ones past $L$ ✗. One survivor ✓. (The choice $\\overline{KL}$ is CONFUSING THE ARROW WITH A BAR; the choice line $KL$ is TREATING A RAY AS A LINE; the choice $\\overrightarrow{LK}$ is READING THE LETTERS BACKWARD.)',
    },
  ],
  // s2 — two points pin a line; one point does not.
  [
    {
      q: 'Nadia marks two different points $M$ and $N$ on her paper. How many different lines can she draw that pass through both marks?',
      choices: ['exactly one', 'exactly two', 'none', 'infinitely many'],
      answer: 0,
      solution:
        'Through two distinct points there is exactly one line — this is one of the starting rules of geometry, and it is why a ruler laid across two dots can only land one way ✓. Check a second, independent way with a hands-on test: rest a ruler on $M$ alone and you can spin it to any angle you like, so one point leaves infinitely many choices. Now press the ruler onto $N$ as well; every spin except one lifts off $N$, so the second point locks the ruler in place ✓. Locked in exactly one position means exactly one line. (The choice "none" forgets that a line can always be drawn through two marks ✗; "exactly two" is COUNTING THE TWO DIRECTIONS SEPARATELY, as if going $M$-to-$N$ and $N$-to-$M$ gave different lines ✗; "infinitely many" is the answer for a SINGLE point, not for two ✗.)',
    },
    {
      q: 'How many different lines pass through one single point $T$?',
      choices: ['none', 'exactly one', 'infinitely many', 'exactly two'],
      answer: 2,
      solution:
        'One point pins down nothing but the place where the line must cross; the line is still free to tilt any way it likes, so there are infinitely many lines through $T$ ✓. Check a second, independent way by simply listing some: draw the horizontal line through $T$, then the vertical one, then tilt a little and draw another, then tilt a little less and draw another. Every new tilt gives a brand-new line and the tilts never run out ✓. A second point is what finally stops the spinning. (The choice "none" is impossible — the horizontal line alone already works ✗; "exactly one" is the answer for TWO points, not one ✗; "exactly two" is COUNTING THE TWO DIRECTIONS SEPARATELY, counting the horizontal and vertical lines and stopping there ✗.)',
    },
    {
      q: 'Two distinct points $U$ and $V$ are marked on a page. Which statement about lines through both points is true?',
      choices: [
        'No line passes through both of them',
        'Many different lines pass through both of them',
        'Exactly two lines pass through both of them',
        'Exactly one line passes through both of them',
      ],
      answer: 3,
      solution:
        'Exactly one line passes through two distinct points ✓ — that is the postulate the whole chapter leans on. Check a second, independent way by supposing otherwise: if two different lines both went through $U$ and $V$, they would agree at $U$, agree at $V$, and so lie flat on top of each other everywhere in between and beyond — which makes them one line, not two ✗. The only way out is that there was just one line all along ✓. (The choice "no line" is false the moment you pick up a ruler ✗; "many different lines" is the answer for ONE point ✗; "exactly two" is COUNTING THE TWO DIRECTIONS SEPARATELY ✗.)',
    },
  ],
  // s3 — a ray is its endpoint plus its direction, nothing more.
  [
    {
      q: 'Points $J$, $K$, and $L$ lie on a line in that order. Which ray is exactly the same as $\\overrightarrow{LK}$?',
      fig: {
        view: [-1, -2, 8, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [7, 0] },
          { t: 'point', p: [0, 0], label: 'J', dx: 0, dy: -12 },
          { t: 'point', p: [3, 0], label: 'K', dx: 0, dy: -12 },
          { t: 'point', p: [7, 0], label: 'L', dx: 0, dy: -12 },
        ],
      },
      choices: ['$\\overrightarrow{LJ}$', '$\\overrightarrow{JL}$', '$\\overrightarrow{KJ}$', '$\\overline{LJ}$'],
      answer: 0,
      solution:
        'A ray is nothing but an endpoint plus a direction. $\\overrightarrow{LK}$ is anchored at $L$ and aims leftward through $K$ — and $\\overrightarrow{LJ}$ is anchored at $L$ and aims leftward through $J$. Same anchor, same direction, so the same set of points ✓. Check a second, independent way by listing what each figure contains. $\\overrightarrow{LK}$ holds $L$, $K$, $J$, and everything to the left of $J$; $\\overrightarrow{LJ}$ holds exactly that same collection ✓. Meanwhile $\\overrightarrow{JL}$ holds points to the RIGHT of $L$, which $\\overrightarrow{LK}$ does not ✗, and $\\overrightarrow{KJ}$ misses $L$ itself ✗. (The choice $\\overrightarrow{JL}$ is ANCHORING AT THE WRONG POINT and pointing the wrong way; $\\overrightarrow{KJ}$ is ANCHORING AT THE WRONG POINT, starting one stop too far along; $\\overline{LJ}$ is CONFUSING THE ARROW WITH A BAR — it stops dead at $J$ instead of sailing past it.)',
    },
    {
      q: 'Points $R$, $S$, and $T$ lie on a line in that order. Which ray is the opposite ray of $\\overrightarrow{SR}$?',
      fig: {
        view: [-1, -2, 7, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [6, 0] },
          { t: 'point', p: [0, 0], label: 'R', dx: 0, dy: -12 },
          { t: 'point', p: [2.5, 0], label: 'S', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'T', dx: 0, dy: -12 },
        ],
      },
      choices: ['$\\overrightarrow{RS}$', '$\\overrightarrow{ST}$', '$\\overrightarrow{TS}$', '$\\overrightarrow{RT}$'],
      answer: 1,
      solution:
        'Opposite rays must share their endpoint and point in opposite directions. $\\overrightarrow{SR}$ is anchored at $S$ and heads left, so its opposite is anchored at $S$ too and heads right: that is $\\overrightarrow{ST}$ ✓. Check a second, independent way by seeing whether the pair rebuilds the whole line. $\\overrightarrow{SR}$ covers $S$ and everything left of it; $\\overrightarrow{ST}$ covers $S$ and everything right of it; glue them and you get every point of the line, overlapping only at $S$ ✓ — which is exactly what opposite rays are supposed to do. (The choice $\\overrightarrow{RS}$ is ANCHORING AT THE WRONG POINT, starting at $R$ instead of $S$ ✗; $\\overrightarrow{TS}$ is MISSING THE SHARED ENDPOINT — it does aim the other way, but from $T$, so the pair overlaps in a whole stretch instead of a single point ✗; $\\overrightarrow{RT}$ is ANCHORING AT THE WRONG POINT and is really the same ray as $\\overrightarrow{RS}$ ✗.)',
    },
    {
      q: 'Points $U$, $V$, and $W$ lie on a line in that order. Which pair listed below is a pair of opposite rays?',
      fig: {
        view: [-1, -2, 9, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [8, 0] },
          { t: 'point', p: [0, 0], label: 'U', dx: 0, dy: -12 },
          { t: 'point', p: [3.5, 0], label: 'V', dx: 0, dy: -12 },
          { t: 'point', p: [8, 0], label: 'W', dx: 0, dy: -12 },
        ],
      },
      choices: [
        '$\\overrightarrow{UV}$ and $\\overrightarrow{UW}$',
        '$\\overrightarrow{UW}$ and $\\overrightarrow{VW}$',
        '$\\overrightarrow{VU}$ and $\\overrightarrow{VW}$',
        '$\\overrightarrow{WU}$ and $\\overrightarrow{WV}$',
      ],
      answer: 2,
      solution:
        'Opposite rays need two things at once: the same endpoint, and directions that disagree. $\\overrightarrow{VU}$ and $\\overrightarrow{VW}$ are both anchored at $V$, one aiming left and one aiming right ✓. Check a second, independent way by testing which points each pair shares. The pair $\\overrightarrow{VU}$, $\\overrightarrow{VW}$ shares only the single point $V$ ✓ — the signature of opposite rays. The pair $\\overrightarrow{UV}$, $\\overrightarrow{UW}$ shares everything, since they are the very same ray ✗; the pair $\\overrightarrow{WU}$, $\\overrightarrow{WV}$ is the same ray twice as well ✗; and $\\overrightarrow{UW}$, $\\overrightarrow{VW}$ shares the entire stretch from $V$ rightward ✗. (Both same-ray pairs come from COUNTING NAMES INSTEAD OF RAYS, assuming two spellings must mean two figures; the mixed pair is MISSING THE SHARED ENDPOINT, since $U$ and $V$ are different anchors.)',
    },
  ],
  // s4 — how many endpoints does each figure have?
  [
    {
      q: 'Which of these figures has exactly ONE endpoint?',
      choices: ['a ray', 'a segment', 'a line', 'a plane'],
      answer: 0,
      solution:
        'A ray starts somewhere and then runs on forever the other way, so it stops at exactly one place: one endpoint ✓. Check a second, independent way by counting the "stopping places" of each figure in turn: a segment stops twice, once at each end ✗; a line never stops at all ✗; a plane spreads out flat in every direction with no edge to stop at ✗. Only the ray gives a count of $1$ ✓. A flashlight beam is the everyday picture — it begins at the bulb and keeps going. (Choosing the segment is DOUBLE-COUNTING THE ENDS, answering the two-endpoint question instead; choosing the line or the plane is TREATING A RAY AS A LINE in reverse, forgetting that endless-in-every-direction means no endpoints at all.)',
    },
    {
      q: 'A segment has how many endpoints?',
      choices: ['none', 'exactly two', 'exactly one', 'infinitely many'],
      answer: 1,
      solution:
        'A segment is the piece of a line trapped between two points, and it quits at both of them: exactly two endpoints ✓. Check a second, independent way by looking at how a segment is written. The symbol $\\overline{RS}$ needs two capital letters, and each of those letters names a place where the figure ends — two letters, two endpoints ✓. Compare with a ray, whose two letters do different jobs (the first is the endpoint, the second only shows the direction). (The choice "none" is TREATING A SEGMENT AS A LINE ✗; "exactly one" borrows the ray’s count ✗; "infinitely many" confuses endpoints with the endless supply of points sitting INSIDE the segment ✗.)',
    },
    {
      q: 'Ravi draws a figure that has no endpoints at all and stretches on forever in two opposite directions. What did he draw?',
      choices: ['a segment', 'a ray', 'a plane', 'a line'],
      answer: 3,
      solution:
        'No endpoints and endless in two opposite directions is the exact description of a line ✓. Check a second, independent way by ruling the others out one at a time: a segment stops at both ends, so it has two endpoints ✗; a ray stops at one end, so it has one ✗; a plane does have no endpoints, but it does not stretch in only two opposite directions — it spreads flat in every direction at once, up, down, and sideways ✗. That leaves the line ✓. (Choosing the segment or the ray is FORGETTING TO COUNT THE ENDPOINTS the problem rules out; choosing the plane is TREATING A LINE AS A PLANE, matching the "no endpoints" clue but ignoring the "two directions" clue.)',
    },
  ],
  // s5 — how many lines do three points determine? (collinear or not)
  [
    {
      q: 'Points $J$, $K$, and $L$ all lie on one straight line, as shown. How many different lines pass through at least two of the three points?',
      fig: {
        view: [-1, -2, 7, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [6, 0] },
          { t: 'point', p: [0, 0], label: 'J', dx: 0, dy: -12 },
          { t: 'point', p: [2, 0], label: 'K', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'L', dx: 0, dy: -12 },
        ],
      },
      choices: ['$3$', '$6$', '$1$', '$2$'],
      answer: 2,
      solution:
        'There are three pairs to check — $JK$, $JL$, and $KL$ — but every one of those pairs sits on the SAME straight line, so all three pairs name one and only one line ✓. Check a second, independent way by using the two-point rule backward: two distinct points determine exactly one line, and $J$ and $K$ already determine the line in the picture. Since $L$ is on that same line, no pair can escape it, so no second line is ever created ✓. The answer is $1$. (The choice $3$ is ANSWERING THE NON-COLLINEAR QUESTION, counting one line per pair as though the points were spread out ✗; the choice $6$ is COUNTING NAMES INSTEAD OF LINES, counting $JK$ and $KJ$ separately ✗; the choice $2$ is COUNTING THE TWO DIRECTIONS SEPARATELY along the single line ✗.)',
    },
    {
      q: 'Points $R$, $S$, and $T$ are placed so that no single straight line contains all three of them. How many different lines pass through at least two of the points?',
      fig: {
        view: [-2, -2, 7, 5],
        elems: [
          { t: 'line', a: [0, 0], b: [5, 0] },
          { t: 'line', a: [0, 0], b: [2, 3.5] },
          { t: 'line', a: [5, 0], b: [2, 3.5] },
          { t: 'point', p: [0, 0], label: 'R', dx: -10, dy: 12 },
          { t: 'point', p: [5, 0], label: 'S', dx: 10, dy: 12 },
          { t: 'point', p: [2, 3.5], label: 'T', dx: 0, dy: -12 },
        ],
      },
      choices: ['$1$', '$2$', '$6$', '$3$'],
      answer: 3,
      solution:
        'List the pairs: $RS$, $RT$, and $ST$. Each pair determines one line, and because the three points are not collinear no two pairs can land on the same line, so the three lines are genuinely different: $3$ ✓. Check a second, independent way by building the picture one point at a time. Start with $R$ and $S$ — that is $1$ line. Now bring in $T$, which is off that line; $T$ joins to $R$ and to $S$, adding $2$ new lines. Total $1 + 2 = 3$ ✓, and the drawing shows exactly three edges. (The choice $1$ is ANSWERING THE COLLINEAR QUESTION, which the problem rules out ✗; the choice $6$ is COUNTING NAMES INSTEAD OF LINES, treating $RS$ and $SR$ as two ✗; the choice $2$ is FORGETTING A PAIR, drawing two sides of the triangle and stopping ✗.)',
    },
    {
      q: 'Points $M$, $N$, and $P$ are not collinear. Ana counts the lines through pairs of them like this: "$MN$, $NM$, $MP$, $PM$, $NP$, $PN$ — that is $6$ lines." How many different lines are there really?',
      fig: {
        view: [-2, -2, 7, 5],
        elems: [
          { t: 'point', p: [0, 0], label: 'M', dx: -10, dy: 12 },
          { t: 'point', p: [5, 0], label: 'N', dx: 10, dy: 12 },
          { t: 'point', p: [3, 3.5], label: 'P', dx: 0, dy: -12 },
        ],
      },
      choices: ['$3$', '$6$', '$1$', '$9$'],
      answer: 0,
      solution:
        'Ana wrote each line twice: line $MN$ and line $NM$ are the same line read from opposite ends, and the same goes for the other two pairs. Dividing her $6$ names by $2$ leaves $\\frac{6}{2} = 3$ different lines ✓. Check a second, independent way by naming the lines instead of counting them: the only ways to choose two of $\\{M, N, P\\}$ are $\\{M,N\\}$, $\\{M,P\\}$, and $\\{N,P\\}$ — three choices, hence three lines, and none of them repeats because the points are not collinear ✓. (The choice $6$ is COUNTING NAMES INSTEAD OF LINES, which is exactly Ana’s slip ✗; the choice $1$ is ANSWERING THE COLLINEAR QUESTION ✗; the choice $9$ is SQUARING INSTEAD OF PAIRING, from $3 \\times 3$ ✗.)',
    },
  ],
  // s6 — which names really do name the whole line?
  [
    {
      q: 'Points $J$, $K$, and $M$ lie on line $m$, in that order. Which of the following IS a correct name for the whole line $m$?',
      fig: {
        view: [-1, -2, 7, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [6, 0] },
          { t: 'point', p: [0, 0], label: 'J', dx: 0, dy: -12 },
          { t: 'point', p: [2.5, 0], label: 'K', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'M', dx: 0, dy: -12 },
        ],
      },
      choices: ['$\\overline{JK}$', 'line $KM$', '$\\overrightarrow{JM}$', '$\\overline{JM}$'],
      answer: 1,
      solution:
        'Any two points of a line are enough to name the entire line, so line $KM$ names all of $m$ ✓. Check a second, independent way by hunting for a point that each candidate leaves out. Take a point far to the left of $J$: it belongs to $m$, and line $KM$ contains it ✓, but $\\overline{JK}$ stops at $J$ ✗, $\\overline{JM}$ stops at $J$ as well ✗, and $\\overrightarrow{JM}$ is anchored at $J$ and never reaches back past it ✗. A name that misses even one point of $m$ is not a name for $m$. (Both bar choices are TREATING A SEGMENT AS A LINE, since a segment is only the middle piece; the arrow choice is TREATING A RAY AS A LINE, keeping half of $m$ and dropping the rest.)',
    },
    {
      q: 'Points $R$, $S$, and $T$ lie on line $n$, in that order. Which of the following is NOT another name for line $n$?',
      fig: {
        view: [-1, -2, 8, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [7, 0] },
          { t: 'point', p: [0, 0], label: 'R', dx: 0, dy: -12 },
          { t: 'point', p: [3, 0], label: 'S', dx: 0, dy: -12 },
          { t: 'point', p: [7, 0], label: 'T', dx: 0, dy: -12 },
        ],
      },
      choices: ['line $TR$', 'line $RS$', 'line $ST$', '$\\overline{RT}$'],
      answer: 3,
      solution:
        'Three of the four choices are the word "line" followed by two of the points, and any two points name the whole line — order and all — so line $TR$, line $RS$, and line $ST$ are all fine ✓✓✓. The odd one out is $\\overline{RT}$, a segment, which stops at $R$ on one side and at $T$ on the other ✓. Check a second, independent way by counting endpoints: line $n$ has none, while $\\overline{RT}$ has two, so they cannot be the same figure ✗ — no amount of relabelling fixes a mismatch in endpoints. (Picking any of the three "line" choices is COUNTING NAMES INSTEAD OF LINES in reverse, assuming a different spelling must mean a different figure — but line $TR$ and line $RS$ are the very same line $n$.)',
    },
    {
      q: 'Points $M$, $N$, and $P$ lie on line $p$, in that order. Kwame writes down four labels, and three of them name the whole of line $p$. Which label does not?',
      fig: {
        view: [-1, -2, 7, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [6, 0] },
          { t: 'point', p: [0, 0], label: 'M', dx: 0, dy: -12 },
          { t: 'point', p: [2, 0], label: 'N', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'P', dx: 0, dy: -12 },
        ],
      },
      choices: ['line $PM$', 'line $MN$', '$\\overrightarrow{NP}$', 'line $NP$'],
      answer: 2,
      solution:
        'Every choice built from the word "line" plus two of the marked points really is line $p$, because two distinct points determine the whole line ✓. That leaves $\\overrightarrow{NP}$, a ray: it starts at $N$ and travels right through $P$, so it never contains $M$, which sits to the left of $N$ ✓. Check a second, independent way by asking whether each label could be reversed. Line $PM$ and line $MP$ name the same figure, and so do line $MN$ and line $NM$ — reversing a LINE changes nothing. But $\\overrightarrow{NP}$ and $\\overrightarrow{PN}$ are different rays pointing opposite ways, and only a figure with a direction behaves like that ✗ — so $\\overrightarrow{NP}$ is not a line at all. (Picking any "line" choice is COUNTING NAMES INSTEAD OF LINES, mistaking a fresh spelling for a fresh figure.)',
    },
  ],
  // s7 — how many PLANES contain the three points? (never a lines question)
  [
    {
      q: 'Points $J$, $K$, and $L$ are not collinear. How many planes contain all three of these points?',
      choices: ['exactly one', 'exactly two', 'none', 'infinitely many'],
      answer: 0,
      solution:
        'Three points that do not sit on one line determine exactly one plane ✓ — the flat surface through them is fixed, with no wiggle room left. Check a second, independent way by adding the points one at a time. Through a single point, infinitely many planes can tilt; add a second point and the planes can still spin around the line joining the two; add a third point OFF that line and the spinning stops dead, because only one tilt can catch all three ✓. Each new point cuts the freedom down, and the third one uses up the last of it. (The choice "exactly two" would need two different flat surfaces through the same three points, which the spin argument rules out ✗; "none" is wrong because three points can always be covered by a flat sheet ✗; "infinitely many" is the answer when the three points ARE collinear ✗.)',
    },
    {
      q: 'Amira holds a pencil perfectly straight and marks three points along it, so all three points lie on one line. How many different flat planes contain all three marks?',
      choices: ['exactly one', 'exactly three', 'none', 'infinitely many'],
      answer: 3,
      solution:
        'The three marks all lie on one line, and a plane can pivot around that line like the pages of a book turning around the spine. Every page position is a different plane, and all of them contain the whole spine — so infinitely many planes contain all three marks ✓. Check a second, independent way with a concrete picture: lay the pencil on a table and the tabletop is one such plane; now tilt a stiff sheet of card so it still touches the pencil along its whole length and you have another; tilt it a degree further for another. The tilts never run out ✓. (The choice "exactly one" is the answer for NON-collinear points, which is not the case here ✗; "exactly three" is COUNTING THE POINTS instead of the planes ✗; "none" is wrong because the tabletop already works ✗.)',
    },
    {
      q: 'A three-legged stool never wobbles, because the tips of its three legs are not collinear. How many flat floors could touch all three leg tips at the same moment?',
      choices: ['infinitely many', 'exactly one', 'none', 'exactly three'],
      answer: 1,
      solution:
        'The three tips are not collinear, so they determine exactly one plane — and a floor touching all three tips would have to be that plane ✓. That is the whole reason a three-legged stool sits still: there is only one way for it to rest, so it has nowhere to rock to. Check a second, independent way by thinking about a FOUR-legged stool: a fourth tip need not lie on the plane of the other three, which is why four-legged chairs wobble on uneven ground and three-legged ones never do ✓. If more than one plane could catch three tips, three-legged stools would wobble too. (The choice "infinitely many" is the answer for COLLINEAR tips ✗; "none" would make the stool impossible to set down ✗; "exactly three" is COUNTING THE POINTS instead of the planes ✗.)',
    },
  ],
  // s8 — how much can two lines (or two planes) share?
  [
    {
      q: 'Two distinct planes meet each other. What kind of figure is their intersection?',
      choices: ['a single point', 'a line', 'a plane', 'nothing at all'],
      answer: 1,
      solution:
        'When two different flat, endless surfaces cut through each other, they meet along a whole straight line ✓ — the crease where a wall meets the floor is exactly this. Check a second, independent way by opening a book and standing it upright: the two covers are pieces of two different planes, and everywhere they touch is the spine, which runs the length of the book in a straight line ✓, not just a dot. (The choice "a single point" is what two lines can share, not two planes ✗; "a plane" would need the two planes to be the same surface, and the problem says they are distinct ✗; "nothing at all" is the answer for parallel planes, but the problem says these two DO meet ✗.)',
    },
    {
      q: 'Two distinct lines in a plane are drawn so that they never meet, no matter how far you follow them. How many points do the two lines have in common?',
      fig: {
        view: [-4, -3, 4, 3],
        elems: [
          { t: 'line', a: [-3, 1.2], b: [3, 1.2] },
          { t: 'line', a: [-3, -1.2], b: [3, -1.2] },
        ],
      },
      choices: ['$0$', '$1$', '$2$', 'infinitely many'],
      answer: 0,
      solution:
        'Having a point in common IS meeting, so lines that never meet share no points at all: $0$ ✓. Such lines are called parallel, and the figure shows a pair of them. Check a second, independent way by imagining a shared point $X$: if both lines passed through $X$, they would have met right there ✗, which contradicts the words of the problem. So no such $X$ exists ✓. (The choice $1$ is the answer for two lines that DO cross ✗; the choice $2$ is impossible for distinct lines, since two shared points would force the lines to be identical ✗; "infinitely many" would make them the same line, not two ✗.)',
    },
    {
      q: 'Suppose two lines both pass through point $J$ and also both pass through a different point $K$. What can you conclude about the two lines?',
      fig: {
        view: [-1, -2, 7, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [6, 0] },
          { t: 'point', p: [1.5, 0], label: 'J', dx: 0, dy: -12 },
          { t: 'point', p: [4.5, 0], label: 'K', dx: 0, dy: -12 },
        ],
      },
      choices: [
        'They are two different lines that cross twice',
        'They must be perpendicular',
        'They are really the same line',
        'One of them must be a ray',
      ],
      answer: 2,
      solution:
        'Exactly one line passes through two distinct points. Both of our lines pass through $J$ and $K$, so both of them must BE that one line — they are the same line wearing two names ✓. Check a second, independent way by thinking about what "crossing twice" would look like: after touching at $J$, the two lines would have to bend away from each other and come back to meet again at $K$ — but lines never bend ✗. Straightness is what makes two crossings impossible ✓, and it is the reason distinct lines can cross at most once. (The choice "cross twice" is the very thing the two-point rule forbids ✗; "perpendicular" adds an angle fact nothing in the problem supports ✗; "one must be a ray" is TREATING A RAY AS A LINE, and rays were never mentioned ✗.)',
    },
  ],
  // s9 — count the segments determined by points on a line.
  [
    {
      q: 'Seven fence posts $J$, $K$, $L$, $M$, $N$, $P$, and $Q$ stand in a straight row. A rail runs from one post to another, and those two posts are its endpoints. How many different rails could be built?',
      fig: {
        view: [-1, -2, 7, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [6, 0] },
          { t: 'point', p: [0, 0], label: 'J', dx: 0, dy: -12 },
          { t: 'point', p: [1, 0], label: 'K', dx: 0, dy: -12 },
          { t: 'point', p: [2, 0], label: 'L', dx: 0, dy: -12 },
          { t: 'point', p: [3, 0], label: 'M', dx: 0, dy: -12 },
          { t: 'point', p: [4, 0], label: 'N', dx: 0, dy: -12 },
          { t: 'point', p: [5, 0], label: 'P', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'Q', dx: 0, dy: -12 },
        ],
      },
      choices: ['$21$', '$42$', '$7$', '$14$'],
      answer: 0,
      solution:
        'A rail is just a pair of posts, so count pairs: each of the $7$ posts could pair with the other $6$, giving $7 \\times 6 = 42$ — but that counts the rail from $J$ to $K$ and the rail from $K$ to $J$ as two, when they are one rail. Halving gives $\\frac{7 \\times 6}{2} = 21$ ✓. Check a second, independent way by sweeping left to right and only counting rails that reach to the RIGHT, so nothing can be counted twice: $J$ starts $6$ rails, $K$ starts $5$ new ones, then $4$, $3$, $2$, $1$, and finally $Q$ starts none. That is $6 + 5 + 4 + 3 + 2 + 1 = 21$ ✓ — the same total by a completely different bookkeeping. (The choice $42$ is COUNTING EACH SEGMENT TWICE ✗; the choice $7$ is COUNTING THE POINTS instead of the pairs ✗; the choice $14$ is DOUBLING THE POINTS, from $7 \\times 2$ ✗.)',
    },
    {
      q: 'Nine points are marked on a straight line, as shown. How many different segments have both of their endpoints among these nine points?',
      fig: {
        view: [-1, -2, 9, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [8, 0] },
          { t: 'point', p: [0, 0] },
          { t: 'point', p: [1, 0] },
          { t: 'point', p: [2, 0] },
          { t: 'point', p: [3, 0] },
          { t: 'point', p: [4, 0] },
          { t: 'point', p: [5, 0] },
          { t: 'point', p: [6, 0] },
          { t: 'point', p: [7, 0] },
          { t: 'point', p: [8, 0] },
        ],
      },
      choices: ['$81$', '$72$', '$45$', '$36$'],
      answer: 3,
      solution:
        'Every segment is a pair of endpoints. Each of the $9$ points pairs with the other $8$, which is $9 \\times 8 = 72$ ordered picks, and each segment shows up twice in that tally, so there are $\\frac{9 \\times 8}{2} = 36$ segments ✓. Check a second, independent way by growing the row one point at a time. With $2$ points there is $1$ segment; adding a third point creates $2$ new segments (to each older point), so $3$; a fourth adds $3$, giving $6$; then $+4 \\to 10$, $+5 \\to 15$, $+6 \\to 21$, $+7 \\to 28$, and the ninth point adds $8$ to give $36$ ✓. (The choice $81$ is SQUARING INSTEAD OF PAIRING, from $9 \\times 9$ ✗; the choice $72$ is COUNTING EACH SEGMENT TWICE ✗; the choice $45$ is ADDING ONE TERM TOO MANY — summing $1 + 2 + \\cdots + 9$ instead of stopping at $8$ ✗.)',
    },
    {
      q: 'Four points $R$, $S$, $T$, and $U$ lie on a line. Yusuf lists every segment with both endpoints among them and gives each segment BOTH of its names, writing $\\overline{RS}$ and $\\overline{SR}$ as two separate entries. His list holds $12$ entries. How many different segments is that?',
      fig: {
        view: [-1, -2, 7, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [6, 0] },
          { t: 'point', p: [0, 0], label: 'R', dx: 0, dy: -12 },
          { t: 'point', p: [2, 0], label: 'S', dx: 0, dy: -12 },
          { t: 'point', p: [4, 0], label: 'T', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'U', dx: 0, dy: -12 },
        ],
      },
      choices: ['$12$', '$6$', '$4$', '$24$'],
      answer: 1,
      solution:
        'Yusuf gave every segment exactly two entries, so the number of segments is half his list: $\\frac{12}{2} = 6$ ✓. Check a second, independent way by ignoring his list entirely and counting the segments straight from the four points: $\\overline{RS}$, $\\overline{RT}$, $\\overline{RU}$, $\\overline{ST}$, $\\overline{SU}$, $\\overline{TU}$ — that is $3 + 2 + 1 = 6$ ✓, and the pair formula agrees, $\\frac{4 \\times 3}{2} = 6$. His $12$ is the doubled version of that same $6$, which confirms his bookkeeping was consistent, just twice too generous. (The choice $12$ is COUNTING NAMES INSTEAD OF SEGMENTS, handing back the length of his list ✗; the choice $4$ is COUNTING THE POINTS ✗; the choice $24$ is DOUBLING AGAIN, going the wrong way when undoing his double count ✗.)',
    },
  ],
  // s10 — count the lines determined by points, no three collinear.
  [
    {
      q: 'Eight points are drawn on a page so that no three of them are collinear. How many different lines pass through two of the eight points?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'point', p: [3, 0] },
          { t: 'point', p: [2.12, 2.12] },
          { t: 'point', p: [0, 3] },
          { t: 'point', p: [-2.12, 2.12] },
          { t: 'point', p: [-3, 0] },
          { t: 'point', p: [-2.12, -2.12] },
          { t: 'point', p: [0, -3] },
          { t: 'point', p: [2.12, -2.12] },
        ],
      },
      choices: ['$56$', '$16$', '$28$', '$8$'],
      answer: 2,
      solution:
        'Because no three points are collinear, every pair of points gives its own line and no two pairs ever share one. So the count of lines is the count of pairs: $8 \\times 7 = 56$ ordered picks, halved to undo the double counting, gives $\\frac{8 \\times 7}{2} = 28$ ✓. Check a second, independent way by adding the points one at a time and asking how many NEW lines each one brings. The first point brings none, the second brings $1$, the third brings $2$ (one to each earlier point), the fourth brings $3$, and so on up to the eighth, which brings $7$. Total: $1 + 2 + 3 + 4 + 5 + 6 + 7 = 28$ ✓. (The choice $56$ is COUNTING EACH LINE TWICE, once from each end ✗; the choice $8$ is COUNTING THE POINTS ✗; the choice $16$ is DOUBLING THE POINTS, from $8 \\times 2$ ✗.)',
    },
    {
      q: 'Five points $J$, $K$, $L$, $M$, and $N$ are drawn with no three of them on the same line. How many different lines pass through at least two of the five points?',
      fig: {
        view: [-3, -2, 7, 6],
        elems: [
          { t: 'point', p: [0, 0], label: 'J', dx: -10, dy: 12 },
          { t: 'point', p: [4, 0], label: 'K', dx: 10, dy: 12 },
          { t: 'point', p: [5.5, 3], label: 'L', dx: 12, dy: 0 },
          { t: 'point', p: [2, 5], label: 'M', dx: 0, dy: -12 },
          { t: 'point', p: [-1.5, 2.5], label: 'N', dx: -12, dy: 0 },
        ],
      },
      choices: ['$10$', '$20$', '$5$', '$25$'],
      answer: 0,
      solution:
        'No three points are collinear, so different pairs always give different lines and we only need to count pairs: $\\frac{5 \\times 4}{2} = 10$ ✓. Check a second, independent way by listing them outright, which is short enough to do by hand: from $J$ come $JK$, $JL$, $JM$, $JN$ ($4$ lines); from $K$ the new ones are $KL$, $KM$, $KN$ ($3$); from $L$, $LM$ and $LN$ ($2$); from $M$, just $MN$ ($1$); and $N$ starts nothing new. That is $4 + 3 + 2 + 1 = 10$ ✓, matching the formula exactly. (The choice $20$ is COUNTING EACH LINE TWICE, from $5 \\times 4$ ✗; the choice $5$ is COUNTING THE POINTS ✗; the choice $25$ is SQUARING INSTEAD OF PAIRING, from $5 \\times 5$ ✗.)',
    },
    {
      q: 'Seven points are scattered on a page with no three of them lying on one straight line. How many different lines pass through exactly two of the seven points?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'point', p: [3, 0] },
          { t: 'point', p: [1.87, 2.35] },
          { t: 'point', p: [-0.67, 2.92] },
          { t: 'point', p: [-2.7, 1.3] },
          { t: 'point', p: [-2.7, -1.3] },
          { t: 'point', p: [-0.67, -2.92] },
          { t: 'point', p: [1.87, -2.35] },
        ],
      },
      choices: ['$14$', '$7$', '$42$', '$21$'],
      answer: 3,
      solution:
        'Each pair of points determines one line, and since no three points are collinear, no line ever picks up a third point — so "exactly two" and "at least two" mean the same thing here, and the answer is the number of pairs: $\\frac{7 \\times 6}{2} = 21$ ✓. Check a second, independent way by counting from each point in turn without repeating: the first point joins to $6$ others, the second contributes $5$ lines not already counted, then $4$, $3$, $2$, $1$, and the last point contributes none. That is $6 + 5 + 4 + 3 + 2 + 1 = 21$ ✓. (The choice $42$ is COUNTING EACH LINE TWICE, stopping at $7 \\times 6$ ✗; the choice $7$ is COUNTING THE POINTS ✗; the choice $14$ is DOUBLING THE POINTS, from $7 \\times 2$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 1,
  sections: {
    '1.2': s12,
  },
}
