// Introduction to Geometry chapter 1 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every count was worked twice: once with the pair formula
//    $\frac{n(n-1)}{2}$ and once by a hand tally (or by an add-one-point
//    argument), and the two routes had to agree before the key was written.
//  - Every figure is coordinate-exact. Circle points are placed with cosine and
//    sine on a radius-$3$ circle centred at the origin, rounded to two
//    decimals, so each drawn central angle really measures what its label says.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through the challenge set are: FORGETTING TO
//    DIVIDE BY 2, PAIRING A POINT WITH ITSELF, COUNTING ONLY NEIGHBOURING
//    PAIRS, COUNTING NAMES INSTEAD OF RAYS, ONE RAY PER POINT, SQUARING THE
//    COUNT, TRIPLING THE RADIUS, DOUBLING THE DIAMETER, ONE PAST THE DIAMETER,
//    COUNTING THE SEGMENT THAT TIES THE THRESHOLD, USING THE WHOLE LENGTH AS
//    THE THRESHOLD, LOOKING ONLY AT THE MARKED GAPS, SUBTRACTING FROM 360
//    INSTEAD OF 180, SUBTRACTING FROM 90, HALVING A CENTRAL ARC, ADDING THE
//    TWO GIVEN ANGLES, FORGETTING ONE GIVEN ANGLE, SUBTRACTING ONE GIVEN ANGLE
//    FROM THE OTHER, FORGETTING TO PUT THE MERGED LINE BACK, MERGING ONLY ONE
//    PAIR, and SUBTRACTING THE COLLINEAR POINTS INSTEAD OF THEIR PAIRS.
//  - No two choices inside an item name the same value.

// Nine points on a line, evenly spaced, for slot 1 v1.
const nineOnALine = {
  view: [-1, -2, 9, 2],
  elems: [
    { t: 'line', a: [0, 0], b: [8, 0] },
    { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: -12 },
    { t: 'point', p: [1, 0], label: 'B', dx: 0, dy: -12 },
    { t: 'point', p: [2, 0], label: 'C', dx: 0, dy: -12 },
    { t: 'point', p: [3, 0], label: 'D', dx: 0, dy: -12 },
    { t: 'point', p: [4, 0], label: 'E', dx: 0, dy: -12 },
    { t: 'point', p: [5, 0], label: 'F', dx: 0, dy: -12 },
    { t: 'point', p: [6, 0], label: 'G', dx: 0, dy: -12 },
    { t: 'point', p: [7, 0], label: 'H', dx: 0, dy: -12 },
    { t: 'point', p: [8, 0], label: 'I', dx: 0, dy: -12 },
  ],
}

const challenge = [
  // slot 1 — segments determined by points on a line. Lane: 36 / 66 / 55.
  [
    {
      q: 'Amara chalks nine points $A$ through $I$ on a straight line on the playground. How many different segments have both endpoints among her nine points?',
      fig: nineOnALine,
      choices: ['$36$', '$72$', '$45$', '$8$'],
      answer: 0,
      solution:
        'A segment is nothing more than a pair of endpoints, so the question is really "how many pairs?" Each of the $9$ points can be paired with the $8$ others, giving $9 \\times 8 = 72$ ordered picks — but $\\overline{AB}$ and $\\overline{BA}$ are the same segment, so every segment was counted twice and the true total is $\\frac{9 \\times 8}{2} = 36$ ✓. Check a second, independent way by sweeping left to right and only counting segments that start at each point: $A$ starts $8$ segments, $B$ starts $7$ new ones, then $6$, $5$, $4$, $3$, $2$, $1$, and $I$ starts none, so the total is $8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36$ ✓ — no double counting anywhere in that tally, and it lands on the same number. (The choice $72$ is FORGETTING TO DIVIDE BY 2; the choice $45$ is PAIRING A POINT WITH ITSELF, computing $\\frac{9 \\times 10}{2}$; the choice $8$ is COUNTING ONLY NEIGHBOURING PAIRS — the $8$ gaps between consecutive points — and forgets that $\\overline{AI}$ is a segment too.)',
    },
    {
      q: 'Bruno marks twelve points in a row along the edge of a long ruler, from $A$ at one end to $L$ at the other. How many different segments have both endpoints among the twelve points?',
      fig: {
        view: [-1, -2, 9.8, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [8.8, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0.8, 0] },
          { t: 'point', p: [1.6, 0] },
          { t: 'point', p: [2.4, 0] },
          { t: 'point', p: [3.2, 0] },
          { t: 'point', p: [4, 0] },
          { t: 'point', p: [4.8, 0] },
          { t: 'point', p: [5.6, 0] },
          { t: 'point', p: [6.4, 0] },
          { t: 'point', p: [7.2, 0] },
          { t: 'point', p: [8, 0] },
          { t: 'point', p: [8.8, 0], label: 'L', dx: 0, dy: -12 },
        ],
      },
      choices: ['$132$', '$66$', '$78$', '$11$'],
      answer: 1,
      solution:
        'Count pairs of points, since a pair of points is exactly one segment: $\\frac{12 \\times 11}{2} = \\frac{132}{2} = 66$ ✓. Check a second, independent way by growing the row one point at a time. Every time a new point joins the right-hand end, it makes one new segment with each point already there, so the totals run $1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66$ as the row grows from $2$ points to $12$ ✓ — the last step adds $11$ new segments to the $55$ that eleven points already had, and $55 + 11 = 66$ ✓. (The choice $132$ is FORGETTING TO DIVIDE BY 2, counting $\\overline{AB}$ and $\\overline{BA}$ separately; the choice $78$ is PAIRING A POINT WITH ITSELF, computing $\\frac{12 \\times 13}{2}$; the choice $11$ is COUNTING ONLY NEIGHBOURING PAIRS, the $11$ little gaps along the ruler.)',
    },
    {
      q: 'Eleven fence posts $A$ through $K$ stand in a perfectly straight row. Chen wants to string one straight wire between every possible pair of posts. How many different wires is that?',
      fig: {
        view: [-1, -2, 10, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [9, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [0.9, 0] },
          { t: 'point', p: [1.8, 0] },
          { t: 'point', p: [2.7, 0] },
          { t: 'point', p: [3.6, 0] },
          { t: 'point', p: [4.5, 0] },
          { t: 'point', p: [5.4, 0] },
          { t: 'point', p: [6.3, 0] },
          { t: 'point', p: [7.2, 0] },
          { t: 'point', p: [8.1, 0] },
          { t: 'point', p: [9, 0], label: 'K', dx: 0, dy: -12 },
        ],
      },
      choices: ['$110$', '$66$', '$10$', '$55$'],
      answer: 3,
      solution:
        'Each wire joins one pair of posts, so count pairs: $\\frac{11 \\times 10}{2} = \\frac{110}{2} = 55$ ✓. Check a second, independent way with a tally that never double counts: number the posts $1$ through $11$ and let each post string wires only to posts on its right. Post $1$ strings $10$, post $2$ strings $9$, and so on down to post $10$ stringing $1$ and post $11$ stringing none. Pair the ends of that list — $10 + 1$, $9 + 2$, $8 + 3$, $7 + 4$, $6 + 5$ — and you get five elevens, $5 \\times 11 = 55$ ✓. (The choice $110$ is FORGETTING TO DIVIDE BY 2; the choice $66$ is PAIRING A POINT WITH ITSELF, computing $\\frac{11 \\times 12}{2}$; the choice $10$ is COUNTING ONLY NEIGHBOURING PAIRS, wiring each post just to the next one down the row.)',
    },
  ],
  // slot 2 — greatest number of crossings among k distinct lines. Lane: 10 / 15 / 21.
  [
    {
      q: 'Five distinct lines are drawn in a plane. What is the greatest possible number of points where two of them cross?',
      choices: ['$5$', '$10$', '$20$', '$25$'],
      answer: 1,
      solution:
        'Two distinct lines cross at most once — if they shared two points they would be the same line — so the very best case is one crossing for every PAIR of lines. Five lines make $\\frac{5 \\times 4}{2} = 10$ pairs, so at most $10$ crossings ✓. And $10$ really is reachable: tilt every line to a different slope so no two are parallel, and slide them so no three ever meet at one spot; then all $10$ pairs cross at $10$ different points ✓. Check a second, independent way by adding the lines one at a time: the second line can cut the first in $1$ new point, the third can cut both earlier lines in $2$ new points, the fourth in $3$, and the fifth in $4$, for $1 + 2 + 3 + 4 = 10$ ✓. (The choice $5$ is ONE CROSSING PER LINE rather than per pair; the choice $20$ is FORGETTING TO DIVIDE BY 2, counting the crossing of lines $\\ell$ and $m$ once for $\\ell$ and again for $m$; the choice $25$ is SQUARING THE COUNT, $5 \\times 5$, which even lets a line cross itself.)',
    },
    {
      q: 'Dara draws ten distinct lines across a big sheet of paper. What is the greatest possible number of points where two of her lines cross?',
      choices: ['$90$', '$100$', '$45$', '$20$'],
      answer: 2,
      solution:
        'Each pair of distinct lines can meet at most once, so the maximum is the number of pairs: $\\frac{10 \\times 9}{2} = 45$ ✓. Giving the ten lines ten different slopes and nudging them so that no three pass through a common point makes all $45$ crossings happen at once, so $45$ is really achieved ✓. Check a second, independent way by drawing the lines one after another: the second line can add $1$ crossing, the third can add $2$, and so on up to the tenth, which can add $9$ — a brand new line can never cross an old line twice — so the ceiling is $1 + 2 + \\cdots + 9 = 45$ ✓. (The choice $90$ is FORGETTING TO DIVIDE BY 2; the choice $100$ is SQUARING THE COUNT, $10 \\times 10$, which pairs every line with itself; the choice $20$ is GIVING EACH LINE JUST TWO CROSSINGS, as though a line could only meet its two neighbours.)',
    },
    {
      q: 'A group of distinct lines is drawn in a plane so that no two of them are parallel and no three of them pass through the same point. Altogether the lines cross in exactly $91$ points. How many lines are in the group?',
      choices: ['$91$', '$182$', '$13$', '$14$'],
      answer: 3,
      solution:
        'With no two parallel and no three concurrent, every pair of lines contributes exactly one crossing, so $k$ lines give $\\frac{k(k-1)}{2}$ points. Set $\\frac{k(k-1)}{2} = 91$, so $k(k-1) = 182$ — we need two consecutive whole numbers whose product is $182$. Since $13 \\times 14 = 182$, the larger one is $k = 14$ ✓. Check a second, independent way by adding lines one at a time: the running totals are $1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, 78, 91$, and that thirteenth total of $91$ is reached the moment the fourteenth line is drawn ✓. (The choice $182$ is STOPPING AT $k(k-1)$ and never undoing the doubling; the choice $13$ is ANSWERING WITH $k - 1$, the smaller of the two consecutive factors; the choice $91$ is ONE LINE PER CROSSING POINT, forgetting that every crossing needs two lines.)',
    },
  ],
  // slot 3 — chords determined by points on a circle. Lane: 66 / 28 / 78.
  [
    {
      q: 'Twelve points are marked on a circle, evenly spaced like the hours on a clock face. How many different chords have both endpoints among these twelve points?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'point', p: [3, 0] },
          { t: 'point', p: [2.6, 1.5] },
          { t: 'point', p: [1.5, 2.6] },
          { t: 'point', p: [0, 3] },
          { t: 'point', p: [-1.5, 2.6] },
          { t: 'point', p: [-2.6, 1.5] },
          { t: 'point', p: [-3, 0] },
          { t: 'point', p: [-2.6, -1.5] },
          { t: 'point', p: [-1.5, -2.6] },
          { t: 'point', p: [0, -3] },
          { t: 'point', p: [1.5, -2.6] },
          { t: 'point', p: [2.6, -1.5] },
        ],
      },
      choices: ['$66$', '$132$', '$78$', '$12$'],
      answer: 0,
      solution:
        'A chord is a segment with both endpoints on the circle, so choosing a chord is the same as choosing a pair of the marked points: $\\frac{12 \\times 11}{2} = 66$ ✓. Check a second, independent way by sorting the chords by how far apart their endpoints sit around the clock. There are $12$ chords joining points $1$ step apart, $12$ joining points $2$ steps apart, and likewise for $3$, $4$ and $5$ steps — that is $12 \\times 5 = 60$ — plus the chords joining points exactly $6$ steps apart, which are the diameters, and each diameter gets named twice by that sweep, so there are only $\\frac{12}{2} = 6$ of them. Total: $60 + 6 = 66$ ✓. (The choice $132$ is FORGETTING TO DIVIDE BY 2; the choice $78$ is PAIRING A POINT WITH ITSELF, computing $\\frac{12 \\times 13}{2}$; the choice $12$ is COUNTING ONLY NEIGHBOURING PAIRS, the twelve short chords around the rim.)',
    },
    {
      q: 'Elif marks seven points on a circle and draws all $21$ chords joining pairs of them. She then marks one more point $P$ on the circle and draws every chord from $P$ to the earlier points. How many chords are there in total now?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'point', p: [3, 0] },
          { t: 'point', p: [2.12, 2.12] },
          { t: 'point', p: [0, 3] },
          { t: 'point', p: [-2.12, 2.12] },
          { t: 'point', p: [-3, 0] },
          { t: 'point', p: [-2.12, -2.12] },
          { t: 'point', p: [0, -3] },
          { t: 'point', p: [2.12, -2.12], label: 'P', dx: 10, dy: 10 },
        ],
      },
      choices: ['$22$', '$28$', '$56$', '$27$'],
      answer: 1,
      solution:
        'The new point $P$ can be joined to each of the seven points that were already there, and every one of those chords is brand new because $P$ was not an endpoint of anything before. So Elif adds $7$ chords to the $21$ she had: $21 + 7 = 28$ ✓. Check a second, independent way by forgetting the story and counting from scratch — there are now eight points on the circle, and a chord is just a pair of them, so the count is $\\frac{8 \\times 7}{2} = 28$ ✓. The two routes agree, which also confirms that the seven chords really were all new. (The choice $22$ is ADDING ONE CHORD PER NEW POINT, as though $P$ only joined its nearest neighbour; the choice $27$ is an off-by-one, joining $P$ to only $6$ of the earlier points; the choice $56$ is FORGETTING TO DIVIDE BY 2 in the fresh count, $8 \\times 7$.)',
    },
    {
      q: 'Thirteen points are marked on a circle, no two in the same spot. How many different chords have both endpoints among these thirteen points?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'point', p: [3, 0] },
          { t: 'point', p: [2.66, 1.39] },
          { t: 'point', p: [1.7, 2.47] },
          { t: 'point', p: [0.36, 2.98] },
          { t: 'point', p: [-1.06, 2.81] },
          { t: 'point', p: [-2.25, 1.99] },
          { t: 'point', p: [-2.91, 0.72] },
          { t: 'point', p: [-2.91, -0.72] },
          { t: 'point', p: [-2.25, -1.99] },
          { t: 'point', p: [-1.06, -2.81] },
          { t: 'point', p: [0.36, -2.98] },
          { t: 'point', p: [1.7, -2.47] },
          { t: 'point', p: [2.66, -1.39] },
        ],
      },
      choices: ['$156$', '$91$', '$78$', '$13$'],
      answer: 2,
      solution:
        'Every chord is a pair of the marked points, so count pairs: $\\frac{13 \\times 12}{2} = \\frac{156}{2} = 78$ ✓. Check a second, independent way by counting from each point without repeating: walk around the circle and let each point draw chords only to the points still ahead of it. The first draws $12$, the next $11$, and so on down to $1$ and then $0$. Pair the ends of that list — $12 + 1$, $11 + 2$, $10 + 3$, $9 + 4$, $8 + 5$, $7 + 6$ — and you get six thirteens, $6 \\times 13 = 78$ ✓. (The choice $156$ is FORGETTING TO DIVIDE BY 2; the choice $91$ is PAIRING A POINT WITH ITSELF, computing $\\frac{13 \\times 14}{2}$; the choice $13$ is COUNTING ONLY NEIGHBOURING PAIRS, the thirteen chords around the rim.)',
    },
  ],
  // slot 4 — rays lying on a line with endpoints at the marked points. Lane: 8 / 10 / 12.
  [
    {
      q: 'Points $A$, $B$, $C$, and $D$ lie on a line, in that order. How many different rays lie on this line and have their endpoint at one of the four points?',
      fig: {
        view: [-1, -2, 7, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [6, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [2, 0], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [4, 0], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: ['$8$', '$4$', '$12$', '$16$'],
      answer: 0,
      solution:
        'A ray is pinned down by two things only: where it starts and which way it points. Along this one line there are just two directions, left and right, so each of the four points is the endpoint of exactly $2$ rays. That gives $4 \\times 2 = 8$ rays ✓. Check a second, independent way by listing them: pointing right we get $\\overrightarrow{AD}$, $\\overrightarrow{BD}$, $\\overrightarrow{CD}$, and the ray from $D$ heading further right; pointing left we get $\\overrightarrow{DA}$, $\\overrightarrow{CA}$, $\\overrightarrow{BA}$, and the ray from $A$ heading further left — $4 + 4 = 8$ different sets of points ✓. (The choice $12$ is COUNTING NAMES INSTEAD OF RAYS: there are $4 \\times 3 = 12$ two-letter names like $\\overrightarrow{AB}$, but $\\overrightarrow{AB}$, $\\overrightarrow{AC}$ and $\\overrightarrow{AD}$ are all the SAME ray; the choice $4$ is ONE RAY PER POINT, forgetting that a line runs both ways; the choice $16$ is SQUARING THE COUNT, $4 \\times 4$.)',
    },
    {
      q: 'Seven points $J$, $K$, $L$, $M$, $N$, $P$, and $Q$ lie on a line, in that order. How many different rays lie on this line and have their endpoint at one of the seven points?',
      fig: {
        view: [-1, -2, 13, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [12, 0] },
          { t: 'point', p: [0, 0], label: 'J', dx: 0, dy: -12 },
          { t: 'point', p: [2, 0], label: 'K', dx: 0, dy: -12 },
          { t: 'point', p: [4, 0], label: 'L', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'M', dx: 0, dy: -12 },
          { t: 'point', p: [8, 0], label: 'N', dx: 0, dy: -12 },
          { t: 'point', p: [10, 0], label: 'P', dx: 0, dy: -12 },
          { t: 'point', p: [12, 0], label: 'Q', dx: 0, dy: -12 },
        ],
      },
      choices: ['$7$', '$42$', '$14$', '$21$'],
      answer: 2,
      solution:
        'Every ray on this line is described by its endpoint plus one of the two directions the line runs, so each of the seven points supplies exactly $2$ rays: $7 \\times 2 = 14$ ✓. Check a second, independent way by matching rays to what they leave out. A rightward ray starting at $J$ contains everything; one starting at $K$ leaves out only $J$; one starting at $L$ leaves out $J$ and $K$; and so on, giving $7$ different rightward rays. The leftward rays give another $7$, and no rightward ray equals a leftward one because they run opposite ways — $7 + 7 = 14$ ✓. (The choice $42$ is COUNTING NAMES INSTEAD OF RAYS, the $7 \\times 6 = 42$ two-letter names, even though $\\overrightarrow{JK}$, $\\overrightarrow{JL}$ and $\\overrightarrow{JQ}$ are one single ray; the choice $7$ is ONE RAY PER POINT, forgetting the line runs both ways; the choice $21$ is COUNTING SEGMENTS INSTEAD OF RAYS, $\\frac{7 \\times 6}{2}$.)',
    },
    {
      q: 'Some points are marked on a line. Counting every ray that lies on the line and has its endpoint at one of the marked points, Elif finds there are exactly $22$ such rays. How many points are marked?',
      choices: ['$22$', '$44$', '$12$', '$11$'],
      answer: 3,
      solution:
        'Endpoint plus direction is all a ray has, and a line offers only two directions, so each marked point is the endpoint of exactly $2$ rays and $n$ points give $2n$ rays. Solve $2n = 22$ to get $n = 11$ ✓. Check a second, independent way by pairing the rays up: the rays split into opposite pairs that share an endpoint, one pair per marked point, and no ray sits in two pairs because a ray has only one endpoint. So $22$ rays form $11$ pairs, one for each of $11$ points ✓. (The choice $22$ is ONE RAY PER POINT, forgetting the line runs both ways; the choice $44$ is DOUBLING WHEN THE UNDOING NEEDS HALVING; the choice $12$ is AN OFF-BY-ONE, as though the two end points somehow supplied fewer rays than the rest — every point on a line has a ray running each way, including the outermost ones.)',
    },
  ],
  // slot 5 — which chord length is possible. Lane: keyed 10 / 18 / 26.
  [
    {
      q: 'A circle has radius $6$. Which of the following is a possible length for a chord of this circle?',
      choices: ['$12$', '$18$', '$24$', '$13$'],
      answer: 0,
      solution:
        'The longest chord any circle has is a diameter, and this diameter measures $2 \\times 6 = 12$. So a chord may be anything from just above $0$ up to and including $12$, and nothing longer ✓. Of the four numbers offered, $18$, $24$ and $13$ all exceed $12$ ✗, while $12$ itself is achieved by every diameter ✓. Check a second, independent way without naming the diameter at all: a chord joins two points of the circle, and each of those points is $6$ away from the center $O$. Travelling from one endpoint to $O$ and then on to the other endpoint covers $6 + 6 = 12$, and a straight trip from endpoint to endpoint can never be longer than that detour — so no chord beats $12$, and it ties $12$ exactly when the detour is straight, that is, when the chord runs through $O$ ✓. (The choice $18$ is TRIPLING THE RADIUS; the choice $24$ is DOUBLING THE DIAMETER, applying $2r$ twice; the choice $13$ is ONE PAST THE DIAMETER, a length that misses the ceiling by the smallest whole step and is still impossible.)',
    },
    {
      q: 'A circle has radius $11$. Which of the following is a possible length for a chord of this circle?',
      choices: ['$33$', '$18$', '$44$', '$23$'],
      answer: 1,
      solution:
        'First find the ceiling: the diameter is $2 \\times 11 = 22$, and no chord can beat a diameter. Now test the four numbers against that ceiling. $33 > 22$ ✗, $44 > 22$ ✗, and $23 > 22$ ✗, but $18 < 22$ ✓ — and every length between $0$ and $22$ really does occur, because sliding a chord away from the centre shrinks it smoothly from $22$ all the way down toward $0$, so it passes through $18$ on the way. Notice that the answer here is NOT twice the radius; $22$ would have been fine too, but it was not offered. Check a second, independent way by looking at half-lengths. Fold a chord in half at its midpoint: a chord of length $18$ reaches $9$ each way from that midpoint, and $9$ is comfortably less than the radius $11$, so such a chord fits inside the circle ✓. A chord of length $33$ would have to reach $16.5$ each way, which would put its endpoints more than $11$ from the centre — off the circle entirely ✗ — and the same objection sinks $44$ and $23$. (The choice $33$ is TRIPLING THE RADIUS; the choice $44$ is DOUBLING THE DIAMETER; the choice $23$ is ONE PAST THE DIAMETER.)',
    },
    {
      q: 'A circle has radius $13$. Which of the following is a possible length for a chord of this circle?',
      choices: ['$39$', '$52$', '$27$', '$26$'],
      answer: 3,
      solution:
        'The diameter is $2 \\times 13 = 26$, and a diameter is the longest chord there is, so a chord length must be at most $26$ ✓. Checking the menu: $39 > 26$ ✗, $52 > 26$ ✗, $27 > 26$ ✗, and $26$ is exactly the diameter — a legal chord, in fact the longest one ✓. Check a second, independent way with the two-radii detour: both endpoints of a chord sit $13$ from the centre $O$, so the path endpoint $\\to O \\to$ endpoint is $13 + 13 = 26$ long, and the straight chord is never longer than that path. Equality happens only when $O$ lies on the chord, which is precisely a diameter ✓ — so $26$ is reachable and everything above it is not. (The choice $39$ is TRIPLING THE RADIUS; the choice $52$ is DOUBLING THE DIAMETER; the choice $27$ is ONE PAST THE DIAMETER, so close to the ceiling that it is tempting, and still impossible.)',
    },
  ],
  // slot 6 — the six segment lengths on a line, counted or totalled.
  [
    {
      q: 'Points $A$, $B$, $C$, $D$ lie on a line in that order, with $AB = 4$, $BC = 2$, and $CD = 6$. How many of the six segments with endpoints among these points are longer than $6$?',
      fig: {
        view: [-1, -2, 13, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [12, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: -12 },
          { t: 'point', p: [4, 0], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [6, 0], label: 'C', dx: 0, dy: -12 },
          { t: 'point', p: [12, 0], label: 'D', dx: 0, dy: -12 },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [5, 0], text: '2', dx: 0, dy: 14 },
          { t: 'label', p: [9, 0], text: '6', dx: 0, dy: 14 },
        ],
      },
      choices: ['$4$', '$2$', '$3$', '$1$'],
      answer: 1,
      solution:
        'Write out all six lengths by adding along the line: $AB = 4$, $BC = 2$, $CD = 6$, $AC = 4 + 2 = 6$, $BD = 2 + 6 = 8$, and $AD = 4 + 2 + 6 = 12$. Now compare each with $6$: $4$ ✗, $2$ ✗, $6$ ✗ (equal is not longer), $6$ ✗, $8$ ✓, $12$ ✓. That is $2$ segments ✓. Check a second, independent way by giving the points addresses instead of adding gaps: put $A$ at $0$, so $B$ is at $4$, $C$ is at $6$, and $D$ is at $12$. A segment is longer than $6$ exactly when its two addresses differ by more than $6$, and the only pairs that manage it are $(4, 12)$ and $(0, 12)$ ✓ — the pair $(0, 6)$ differs by exactly $6$ and misses. Two segments, same as before ✓. (The choice $4$ is COUNTING THE SEGMENTS THAT TIE THE THRESHOLD, sweeping in $CD$ and $AC$ at exactly $6$; the choice $3$ is assuming every multi-step segment beats $6$, which fails for $AC$; the choice $1$ is counting only the whole segment $AD$ and overlooking $BD = 8$.)',
    },
    {
      q: 'Points $P$, $Q$, $R$, $S$ lie on a line in that order, with $PQ = 8$, $QR = 3$, and $RS = 2$. How many of the six segments with endpoints among these points are SHORTER than $8$?',
      fig: {
        view: [-1, -2, 14, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [13, 0] },
          { t: 'point', p: [0, 0], label: 'P', dx: 0, dy: -12 },
          { t: 'point', p: [8, 0], label: 'Q', dx: 0, dy: -12 },
          { t: 'point', p: [11, 0], label: 'R', dx: 0, dy: -12 },
          { t: 'point', p: [13, 0], label: 'S', dx: 0, dy: -12 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 14 },
          { t: 'label', p: [9.5, 0], text: '3', dx: 0, dy: 14 },
          { t: 'label', p: [12, 0], text: '2', dx: 0, dy: 14 },
        ],
      },
      choices: ['$4$', '$2$', '$3$', '$5$'],
      answer: 2,
      solution:
        'List all six lengths first: $PQ = 8$, $QR = 3$, $RS = 2$, $PR = 8 + 3 = 11$, $QS = 3 + 2 = 5$, and $PS = 8 + 3 + 2 = 13$. Now keep only those below $8$: $QR = 3$ ✓, $RS = 2$ ✓, $QS = 5$ ✓, while $PQ = 8$ ✗ (equal, not shorter), $PR = 11$ ✗ and $PS = 13$ ✗. That is $3$ segments ✓. Check a second, independent way using addresses: $P$ at $0$, $Q$ at $8$, $R$ at $11$, $S$ at $13$. A segment is shorter than $8$ exactly when its endpoints sit less than $8$ apart, and the six differences are $8$, $11$, $13$, $3$, $5$, $2$ — the three that clear the bar are $3$, $5$ and $2$ ✓, which are the segments $QR$, $QS$ and $RS$, every one of them living inside the short right-hand stretch from $Q$ to $S$ ✓. (The choice $4$ is COUNTING THE SEGMENT THAT TIES THE THRESHOLD, letting $PQ = 8$ in; the choice $5$ is USING THE WHOLE LENGTH AS THE THRESHOLD, counting everything shorter than $PS = 13$; the choice $2$ is LOOKING ONLY AT THE MARKED GAPS $8$, $3$, $2$ and forgetting that $QS$ is a segment too.)',
    },
    {
      q: 'Points $W$, $X$, $Y$, $Z$ lie on a line in that order, with $WX = 2$, $XY = 7$, and $YZ = 3$. What is the SUM of the lengths of all six segments with endpoints among these four points?',
      fig: {
        view: [-1, -2, 13, 2],
        elems: [
          { t: 'line', a: [0, 0], b: [12, 0] },
          { t: 'point', p: [0, 0], label: 'W', dx: 0, dy: -12 },
          { t: 'point', p: [2, 0], label: 'X', dx: 0, dy: -12 },
          { t: 'point', p: [9, 0], label: 'Y', dx: 0, dy: -12 },
          { t: 'point', p: [12, 0], label: 'Z', dx: 0, dy: -12 },
          { t: 'label', p: [1, 0], text: '2', dx: 0, dy: 14 },
          { t: 'label', p: [5.5, 0], text: '7', dx: 0, dy: 14 },
          { t: 'label', p: [10.5, 0], text: '3', dx: 0, dy: 14 },
        ],
      },
      choices: ['$12$', '$31$', '$86$', '$43$'],
      answer: 3,
      solution:
        'Find all six lengths by adding along the line: $WX = 2$, $XY = 7$, $YZ = 3$, $WY = 2 + 7 = 9$, $XZ = 7 + 3 = 10$, and $WZ = 2 + 7 + 3 = 12$. Add them up: $2 + 7 + 3 + 9 + 10 + 12 = 43$ ✓. Check a second, independent way by counting how many times each little gap is used. The gap $WX$ (length $2$) lies inside the segments $WX$, $WY$ and $WZ$ — $3$ of them — so it contributes $3 \\times 2 = 6$. The gap $XY$ (length $7$) lies inside $XY$, $WY$, $XZ$ and $WZ$ — $4$ of them — contributing $4 \\times 7 = 28$. The gap $YZ$ (length $3$) lies inside $YZ$, $XZ$ and $WZ$ — $3$ of them — contributing $3 \\times 3 = 9$. Total: $6 + 28 + 9 = 43$ ✓, and not a single length was written down twice. (The choice $12$ is adding only the three marked gaps, which just rebuilds $WZ$; the choice $31$ is FORGETTING THE WHOLE SEGMENT $WZ$ and adding the other five; the choice $86$ is DOUBLE COUNTING every segment, once from each end.)',
    },
  ],
  // slot 7 — diameter AB, arc AC given, find arc CB. Lane: 160 / 105 / 40.
  [
    {
      q: '$\\overline{AB}$ is a diameter of the circle with center $O$, and $C$ is on the circle with arc $AC = 20^\\circ$. What is the measure of arc $CB$?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-2.82, 1.03] },
          { t: 'angle', at: [0, 0], from: [-2.82, 1.03], to: [-3, 0], r: 1.2, label: '20' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'A', dx: -12, dy: 8 },
          { t: 'point', p: [3, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [-2.82, 1.03], label: 'C', dx: -12, dy: -8 },
        ],
      },
      choices: ['$160^\\circ$', '$20^\\circ$', '$340^\\circ$', '$70^\\circ$'],
      answer: 0,
      solution:
        'A diameter slices the circle into two semicircles, each measuring $180^\\circ$. Point $C$ sits on one of them, and arcs $AC$ and $CB$ together make up that whole semicircle, so arc $CB = 180^\\circ - 20^\\circ = 160^\\circ$ ✓. Check a second, independent way through the central angles: $\\angle AOB$ is a straight angle of $180^\\circ$ because $A$, $O$, $B$ line up along the diameter, and the ray $\\overrightarrow{OC}$ cuts it into $\\angle AOC = 20^\\circ$ and $\\angle COB$. A straight angle minus $20^\\circ$ leaves $\\angle COB = 160^\\circ$, and an arc always matches its central angle ✓. (The choice $20^\\circ$ is copying the given arc straight back; the choice $340^\\circ$ is SUBTRACTING FROM 360 INSTEAD OF 180, which describes the long way round from $C$ to $B$ through $A$; the choice $70^\\circ$ is SUBTRACTING FROM 90, treating the diameter as though it made a right angle.)',
    },
    {
      q: '$\\overline{AB}$ is a diameter of the circle with center $O$, and $C$ is on the circle with arc $AC = 75^\\circ$. What is the measure of arc $CB$?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-0.78, 2.9] },
          { t: 'angle', at: [0, 0], from: [-0.78, 2.9], to: [-3, 0], r: 0.7, label: '75' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'A', dx: -12, dy: 6 },
          { t: 'point', p: [3, 0], label: 'B', dx: 12, dy: 0 },
          { t: 'point', p: [-0.78, 2.9], label: 'C', dx: -6, dy: -12 },
        ],
      },
      choices: ['$285^\\circ$', '$105^\\circ$', '$75^\\circ$', '$15^\\circ$'],
      answer: 1,
      solution:
        'The two ends of a diameter split the circle into two $180^\\circ$ semicircles. Arc $AC$ and arc $CB$ are the two pieces of the semicircle that contains $C$, so they add to $180^\\circ$: arc $CB = 180^\\circ - 75^\\circ = 105^\\circ$ ✓. Check a second, independent way by walking all the way around the circle. Going $A \\to C \\to B$ the short way covers $75^\\circ + \\text{arc } CB$, and coming back from $B$ to $A$ along the other semicircle covers another $180^\\circ$; the whole trip is $360^\\circ$, so $75^\\circ + \\text{arc } CB + 180^\\circ = 360^\\circ$, giving arc $CB = 105^\\circ$ ✓. (The choice $285^\\circ$ is SUBTRACTING FROM 360 INSTEAD OF 180 — that is the arc from $C$ round to $B$ the long way through $A$; the choice $75^\\circ$ copies the given arc back; the choice $15^\\circ$ is SUBTRACTING FROM 90.)',
    },
    {
      q: '$\\overline{AB}$ is a diameter of the circle with center $O$, and $C$ is on the circle with arc $AC = 140^\\circ$. What is the measure of arc $CB$?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.3, 1.93] },
          { t: 'angle', at: [0, 0], from: [2.3, 1.93], to: [-3, 0], r: 0.8, label: '140' },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-3, 0], label: 'A', dx: -12, dy: 6 },
          { t: 'point', p: [3, 0], label: 'B', dx: 12, dy: -6 },
          { t: 'point', p: [2.3, 1.93], label: 'C', dx: 10, dy: -8 },
        ],
      },
      choices: ['$220^\\circ$', '$140^\\circ$', '$40^\\circ$', '$20^\\circ$'],
      answer: 2,
      solution:
        'Arcs $AC$ and $CB$ are the two pieces of the semicircle on $C$’s side of the diameter, and a semicircle is $180^\\circ$, so arc $CB = 180^\\circ - 140^\\circ = 40^\\circ$ ✓. Here $C$ has swung most of the way toward $B$, which is exactly why the leftover arc is small — a good sanity check on the picture. Check a second, independent way with central angles: $A$, $O$, $B$ are collinear, so $\\angle AOB = 180^\\circ$; the ray $\\overrightarrow{OC}$ splits it into $\\angle AOC = 140^\\circ$ and $\\angle COB$, so $\\angle COB = 40^\\circ$, and arc $CB$ has the same measure as its central angle ✓. (The choice $220^\\circ$ is SUBTRACTING FROM 360 INSTEAD OF 180; the choice $140^\\circ$ copies the given arc; the choice $20^\\circ$ is HALVING A CENTRAL ARC, borrowing the halving rule that belongs to a different kind of angle — a CENTRAL angle needs no halving at all.)',
    },
  ],
  // slot 8 — a counterexample to an inequality claim about whole numbers.
  [
    {
      q: 'Which value of $n$ is a counterexample to the claim "$2^n > n^2$ for every whole number $n$"?',
      choices: ['$n = 2$', '$n = 1$', '$n = 5$', '$n = 6$'],
      answer: 0,
      solution:
        'A counterexample has to make the claim FALSE, so test each value. $n = 1$: $2^1 = 2$ and $1^2 = 1$, and $2 > 1$ ✓ holds. $n = 2$: $2^2 = 4$ and $2^2 = 4$, and $4 > 4$ is false ✗ — the two sides tie, and a tie is not "greater than", so $n = 2$ breaks the claim. $n = 5$: $32 > 25$ ✓ holds. $n = 6$: $64 > 36$ ✓ holds. Check a second, independent way by watching the two sides race: doubling wins in the long run, but early on the square keeps up, and $2^n$ and $n^2$ are dead level at $n = 2$ and again at $n = 4$ — a tie is all a counterexample needs, since the claim demanded a strict win every time. (One counterexample settles it, though $n = 3$ would have worked too: $8 > 9$ is false. It is not on the menu, so it need not trouble us.) (The choices $n = 5$ and $n = 6$ are PICKING A BIG NUMBER, where doubling has run far ahead and the claim comfortably holds; the choice $n = 1$ is PICKING THE SMALLEST NUMBER ON THE MENU out of habit, but $2 > 1$ makes $n = 1$ a supporter of the claim, not a counterexample.)',
    },
    {
      q: 'Which value of $n$ is a counterexample to the claim "$n + 4 > 2n$ for every whole number $n$"?',
      choices: ['$n = 2$', '$n = 3$', '$n = 4$', '$n = 1$'],
      answer: 2,
      solution:
        'Test each value in turn. $n = 1$: $5 > 2$ ✓. $n = 2$: $6 > 4$ ✓. $n = 3$: $7 > 6$ ✓ — still true, and only just. $n = 4$: $8 > 8$ is false ✗, so $n = 4$ is the counterexample. Check a second, independent way by simplifying the claim instead of testing it: subtracting $n$ from both sides turns "$n + 4 > 2n$" into the much friendlier "$4 > n$", which is true for $n = 0, 1, 2, 3$ and false from $n = 4$ onward ✓. That single rearrangement explains why the first three choices support the claim and the fourth kills it. (The choices $n = 2$ and $n = 3$ are STOPPING AT THE LAST TRUE CASE — the claim gets tighter as $n$ grows, and $n = 3$ is the closest call that still holds; the choice $n = 1$ is PICKING THE SMALLEST NUMBER ON THE MENU, where the claim is not even close to failing.)',
    },
    {
      q: 'Which value of $n$ is a counterexample to the claim "$n^2 + 1 > 2n$ for every whole number $n$"?',
      choices: ['$n = 3$', '$n = 2$', '$n = 4$', '$n = 1$'],
      answer: 3,
      solution:
        'Test the four values. $n = 2$: $5 > 4$ ✓. $n = 3$: $10 > 6$ ✓. $n = 4$: $17 > 8$ ✓. $n = 1$: $1^2 + 1 = 2$ and $2n = 2$, so the claim asks whether $2 > 2$ — false ✗. The counterexample is $n = 1$ ✓. Check a second, independent way with a little algebra that covers every whole number at once: $n^2 + 1 - 2n = (n - 1)^2$, and a square is never negative, so $n^2 + 1$ is always at least $2n$ ✓. The only way to lose the strict "greater than" is for the square to be $0$, which happens exactly when $n = 1$ ✓ — so not only is $n = 1$ a counterexample, it is the ONLY one there is. (The choices $n = 2$, $n = 3$ and $n = 4$ are TESTING TOO FAR FROM THE TROUBLE SPOT: the gap $(n - 1)^2$ grows as $n$ moves away from $1$, so those values make the claim look safer and safer instead of breaking it.)',
    },
  ],
  // slot 9 — which true statement has a true converse.
  [
    {
      q: 'All four statements below are true. Which one of them has a converse that is also true?',
      choices: [
        'If a whole number ends in the digit $0$, then it is a multiple of $10$',
        'If a number is a multiple of $6$, then it is a multiple of $3$',
        'If a segment is a radius of a circle, then one of its endpoints is the center',
        'If a point is the center of a circle, then that point is not on the circle',
      ],
      answer: 0,
      solution:
        'A converse swaps the if-part and the then-part, so flip each statement and hunt for a counterexample. "Multiple of $3$ $\\Rightarrow$ multiple of $6$" fails at $9$ ✗. "One endpoint at the center $\\Rightarrow$ radius" fails for a short segment from the center to a point inside the circle, which never reaches the rim ✗. "Not on the circle $\\Rightarrow$ it is the center" fails for any other point off the rim, such as one far outside ✗. But "multiple of $10$ $\\Rightarrow$ ends in $0$" survives every attack ✓. Check a second, independent way by seeing WHY it survives: a multiple of $10$ is $10k$, and multiplying any whole number by $10$ tacks a $0$ onto the end, so ending in $0$ and being a multiple of $10$ are two descriptions of the same set of numbers. When both directions describe the same set, the statement and its converse are both true ✓ — that is what makes this one different from the other three, which each squeeze a smaller group inside a bigger one. (The multiples of $6$ are only some of the multiples of $3$; radii are only some of the segments starting at the center; the center is only one of the many points off the rim.)',
    },
    {
      q: 'Every statement below is true. Only one of them stays true after its if-part and its then-part are swapped — which one?',
      choices: [
        'If a shape is a square, then it is a rectangle',
        'If a whole number is a multiple of both $2$ and $3$, then it is a multiple of $6$',
        'If two points are the endpoints of a diameter of a circle, then both points lie on that circle',
        'If a number is greater than $10$, then it is greater than $5$',
      ],
      answer: 1,
      solution:
        'Flip each one and look for a counterexample. "Rectangle $\\Rightarrow$ square" fails for a $5$ by $2$ rectangle ✗. "Both points on the circle $\\Rightarrow$ they are the ends of a diameter" fails for two neighbouring points on the rim, which give a short chord instead ✗. "Greater than $5$ $\\Rightarrow$ greater than $10$" fails at $7$ ✗. The remaining converse is "multiple of $6$ $\\Rightarrow$ multiple of both $2$ and $3$", and that is true: a multiple of $6$ is $6k = 2(3k) = 3(2k)$, so it is a multiple of $2$ and of $3$ ✓. Check a second, independent way by testing the forward direction on a run of numbers and watching the two lists match: the numbers up to $30$ that are multiples of both $2$ and $3$ are $6, 12, 18, 24, 30$, and the multiples of $6$ up to $30$ are $6, 12, 18, 24, 30$ — the same list, with nothing left over on either side ✓. Two descriptions that pick out the same numbers make a statement whose converse is true as well. (The other three each place a small group inside a bigger one, and the extra members of the bigger group are exactly the counterexamples that sink their converses.)',
    },
    {
      q: 'Each of the four statements below is true. For which one is the converse true as well?',
      choices: [
        'If a number is a multiple of $4$, then it is even',
        'If a whole number is a multiple of $100$, then it is a multiple of $4$',
        'If a point lies on a circle, then its distance from the center is at most the radius',
        'If a point is at a distance from the center exactly equal to the radius, then the point lies on the circle',
      ],
      answer: 3,
      solution:
        'Swap the halves of each statement and hunt for a counterexample. "Even $\\Rightarrow$ multiple of $4$" fails at $6$ ✗. "Multiple of $4$ $\\Rightarrow$ multiple of $100$" fails at $8$ ✗. "Distance at most the radius $\\Rightarrow$ on the circle" fails for the center itself, whose distance is $0$ ✗ — and for every other point inside. The last converse says "on the circle $\\Rightarrow$ distance exactly the radius", and that is true, because a circle is DEFINED as the points at distance exactly $r$ from the center ✓. Check a second, independent way by sorting the whole plane: the radius puts every point into exactly one of three camps — distance less than $r$ (inside), equal to $r$ (on), or more than $r$ (outside). "Distance exactly $r$" and "on the circle" name the very same camp, so each one implies the other ✓, while "at most $r$" sweeps together two camps and therefore cannot be flipped. (The two number statements each tuck a smaller family inside a larger one, and their leftovers — $6$ for the first, $8$ for the second — are the counterexamples.)',
    },
  ],
  // slot 10 — how many planes contain a given set of points.
  [
    {
      q: '$P$ and $Q$ are two distinct points. How many different planes contain both of them?',
      choices: ['infinitely many', 'exactly one', 'none', 'exactly two'],
      answer: 0,
      solution:
        'Two points pin down a line, but they do not pin down a plane. Picture the line $PQ$ as the spine of a book: every page of the book is a flat surface containing that spine, and a book can have as many pages as you like — so infinitely many planes contain both points ✓. Check a second, independent way by counting what is missing. Three points that are NOT collinear determine exactly one plane, so a plane through $P$ and $Q$ is fixed the moment you name a third point off the line $PQ$. There are infinitely many points off that line, and swinging to a different one tilts the plane to a genuinely different position, so there are infinitely many planes ✓. (The choice "exactly one" is the rule for three non-collinear points, applied one point too early; "none" forgets that a flat surface through any two points is easy to find; "exactly two" would be a strange rule — planes do not come in pairs, and once you can tilt one plane you can tilt it again by a hair.)',
    },
    {
      q: 'Four points $A$, $B$, $C$, $D$ are drawn: $A$, $B$, $C$ are collinear, and $D$ is NOT on that line. How many different planes contain all four points?',
      fig: {
        view: [-1.5, -1.5, 6.5, 4.5],
        elems: [
          { t: 'line', a: [0, 0], b: [4, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: 14 },
          { t: 'point', p: [2, 0], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [4, 0], label: 'C', dx: 0, dy: 14 },
          { t: 'point', p: [2, 3], label: 'D', dx: 0, dy: -12 },
        ],
      },
      choices: ['none', 'exactly one', 'infinitely many', 'exactly four'],
      answer: 1,
      solution:
        'Start with two of the collinear points and $D$: since $D$ is off the line, $A$, $B$, $D$ are three non-collinear points, and three non-collinear points determine exactly ONE plane. Call it $\\mathcal{P}$. Now $\\mathcal{P}$ contains $A$ and $B$, so it contains the whole line through them — and $C$ lives on that line, so $C$ is in $\\mathcal{P}$ too. One plane holds all four ✓, and no other can, because any plane containing all four would in particular contain $A$, $B$, $D$, and those three allow only one plane ✓. Check a second, independent way by imagining the book again: the planes through the line $ABC$ are the pages of a book, infinitely many of them, but only one page swings far enough to catch the point $D$ — and once that page is chosen, it is stuck ✓. (The choice "infinitely many" is the answer for the collinear points ALONE, forgetting that $D$ nails the page down; "none" forgets that three of the points sitting on a line makes fitting a plane easier, not harder; "exactly four" comes from counting one plane for each of the four triples of points, but three of those triples are collinear and give no plane at all, while all four triples that do work name the same plane.)',
    },
    {
      q: 'Four points are placed like the corners of a pyramid: no three of them are collinear, and the four do not all lie in one plane. How many different planes contain at least three of the four points?',
      choices: ['$1$', '$6$', '$4$', 'infinitely many'],
      answer: 2,
      solution:
        'A plane containing at least three of these points is decided by which three it holds, and since no three are collinear, every trio determines exactly one plane. The trios are $ABC$, $ABD$, $ACD$ and $BCD$ — $\\frac{4 \\times 3 \\times 2}{3 \\times 2} = 4$ of them — and no plane can hold four of the points, because the four are not coplanar. So the four trios give four different planes ✓. Check a second, independent way by looking at the pyramid itself: a triangular pyramid has a base and three slanted faces, $4$ faces in all, and each face lies in its own flat plane ✓ — which is why a pyramid on a triangular base is exactly the right picture for this count. (The choice $6$ counts PAIRS of points, $\\frac{4 \\times 3}{2}$, which give lines rather than planes; the choice $1$ assumes the four points are coplanar, which the problem rules out; "infinitely many" is the rule for collinear points, and here no three are collinear.)',
    },
  ],
  // slot 11 — lines through a point set with one collinear cluster. Lane: 13 / 5 / 19.
  [
    {
      q: 'Six points are drawn: $A$, $B$, $C$ are collinear, and no other three of the six points are collinear. How many different lines pass through at least two of the six points?',
      fig: {
        view: [-1.5, -1.5, 6.5, 4.5],
        elems: [
          { t: 'line', a: [0, 0], b: [4, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: 14 },
          { t: 'point', p: [2, 0], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [4, 0], label: 'C', dx: 0, dy: 14 },
          { t: 'point', p: [1, 3], label: 'D', dx: -10, dy: -8 },
          { t: 'point', p: [3, 3.5], label: 'E', dx: 8, dy: -10 },
          { t: 'point', p: [5, 2], label: 'F', dx: 12, dy: -6 },
        ],
      },
      choices: ['$15$', '$13$', '$12$', '$14$'],
      answer: 1,
      solution:
        'Six points make $\\frac{6 \\times 5}{2} = 15$ pairs, and if no three were ever collinear each pair would give its own line — $15$ lines. But the pairs $AB$, $AC$ and $BC$ all name the SAME line, so those $3$ pairs deliver just $1$ line instead of $3$: the count drops by $2$, giving $15 - 3 + 1 = 13$ ✓. Check a second, independent way by building the list in three piles instead of correcting a total: there is $1$ line through $A$, $B$, $C$; the three scattered points $D$, $E$, $F$ give $\\frac{3 \\times 2}{2} = 3$ lines among themselves; and each of $A$, $B$, $C$ joins each of $D$, $E$, $F$ for $3 \\times 3 = 9$ more, all different because none of them is the line $ABC$ and no two of them share two points. Total: $1 + 3 + 9 = 13$ ✓. (The choice $15$ is forgetting that the collinear trio collapses at all; the choice $12$ is FORGETTING TO PUT THE MERGED LINE BACK, subtracting all $3$ pairs and never counting the single line they share; the choice $14$ is MERGING ONLY ONE PAIR, taking off $1$ instead of $2$.)',
    },
    {
      q: 'Five points are drawn: $P$, $Q$, $R$, $S$ are collinear, and $T$ is not on their line. How many different lines pass through at least two of the five points?',
      fig: {
        view: [-1.5, -1.5, 6, 4.5],
        elems: [
          { t: 'line', a: [0, 0], b: [4.5, 0] },
          { t: 'point', p: [0, 0], label: 'P', dx: 0, dy: 14 },
          { t: 'point', p: [1.5, 0], label: 'Q', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'R', dx: 0, dy: 14 },
          { t: 'point', p: [4.5, 0], label: 'S', dx: 0, dy: 14 },
          { t: 'point', p: [2, 3], label: 'T', dx: 0, dy: -12 },
        ],
      },
      choices: ['$10$', '$4$', '$5$', '$6$'],
      answer: 2,
      solution:
        'Five points make $\\frac{5 \\times 4}{2} = 10$ pairs. But $P$, $Q$, $R$, $S$ are all on one line, and the $\\frac{4 \\times 3}{2} = 6$ pairs among them name that one single line, so those $6$ pairs shrink to $1$: the total is $10 - 6 + 1 = 5$ ✓. Check a second, independent way by simply listing every line in the picture: the long line through $P$, $Q$, $R$, $S$ is one, and then $T$ joins each of the four collinear points for the lines $TP$, $TQ$, $TR$, $TS$ — four more, all different, since two of them would otherwise share both $T$ and a second point. That is $1 + 4 = 5$ ✓, and the picture shows exactly five lines. (The choice $10$ forgets the collapse entirely; the choice $4$ is FORGETTING TO PUT THE MERGED LINE BACK, computing $10 - 6$ and losing the long line itself; the choice $6$ is SUBTRACTING THE COLLINEAR POINTS INSTEAD OF THEIR PAIRS, computing $10 - 4$.)',
    },
    {
      q: 'Seven points are drawn: $A$, $B$, $C$ are collinear, and no other three of the seven points are collinear. How many different lines pass through at least two of the seven points?',
      fig: {
        view: [-2, -1.5, 6, 4.5],
        elems: [
          { t: 'line', a: [0, 0], b: [4, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: 14 },
          { t: 'point', p: [2, 0], label: 'B', dx: 0, dy: 14 },
          { t: 'point', p: [4, 0], label: 'C', dx: 0, dy: 14 },
          { t: 'point', p: [-1, 2], label: 'D', dx: -12, dy: -4 },
          { t: 'point', p: [1, 3], label: 'E', dx: -8, dy: -10 },
          { t: 'point', p: [3, 3], label: 'F', dx: 8, dy: -10 },
          { t: 'point', p: [5, 1.5], label: 'G', dx: 12, dy: -6 },
        ],
      },
      choices: ['$21$', '$18$', '$20$', '$19$'],
      answer: 3,
      solution:
        'Seven points make $\\frac{7 \\times 6}{2} = 21$ pairs, one line each — except that the pairs $AB$, $AC$ and $BC$ all describe the same line. Those $3$ pairs produce $1$ line rather than $3$, so the count falls by $2$: $21 - 3 + 1 = 19$ ✓. Check a second, independent way by sorting the lines into three piles: $1$ line carries $A$, $B$, $C$; the four scattered points $D$, $E$, $F$, $G$ give $\\frac{4 \\times 3}{2} = 6$ lines among themselves; and joining each of $A$, $B$, $C$ to each of $D$, $E$, $F$, $G$ gives $3 \\times 4 = 12$ more. No line is counted twice, because a line from the third pile meets the collinear line in only one point and meets any line of the second pile in at most one point. Total: $1 + 6 + 12 = 19$ ✓. (The choice $21$ ignores the collapse; the choice $18$ is FORGETTING TO PUT THE MERGED LINE BACK, computing $21 - 3$; the choice $20$ is MERGING ONLY ONE PAIR, taking off $1$ instead of $2$.)',
    },
  ],
  // slot 12 — three central angles around O summing to 360. Lane: 125 / 135 / 75.
  [
    {
      q: 'Points $A$, $B$, and $C$ lie on a circle with center $O$. Central angles $\\angle AOB = 70^\\circ$ and $\\angle BOC = 165^\\circ$, as shown. What is the measure of arc $CA$ that does not contain $B$?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 0], b: [-0.52, 2.95] },
          { t: 'seg', a: [0, 0], b: [2.6, 1.5] },
          { t: 'seg', a: [0, 0], b: [-2.12, -2.12] },
          { t: 'angle', at: [0, 0], from: [-0.52, 2.95], to: [2.6, 1.5], r: 0.8, label: '70' },
          { t: 'angle', at: [0, 0], from: [2.6, 1.5], to: [-2.12, -2.12], r: 1, label: '165' },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: 6 },
          { t: 'point', p: [-0.52, 2.95], label: 'A', dx: -8, dy: -10 },
          { t: 'point', p: [2.6, 1.5], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [-2.12, -2.12], label: 'C', dx: -10, dy: 10 },
        ],
      },
      choices: ['$125^\\circ$', '$235^\\circ$', '$95^\\circ$', '$290^\\circ$'],
      answer: 0,
      solution:
        'The three central angles at $O$ fit together all the way around the point, so they add to a full turn of $360^\\circ$. That makes $\\angle COA = 360^\\circ - 70^\\circ - 165^\\circ = 125^\\circ$, and an arc has the same measure as its central angle, so arc $CA$ (the one avoiding $B$) is $125^\\circ$ ✓. Check a second, independent way by chasing the arcs instead of the angles: arc $AB = 70^\\circ$ and arc $BC = 165^\\circ$, and travelling $A \\to B \\to C$ and then back from $C$ to $A$ the short way covers the whole circle once, $360^\\circ$. So arc $CA = 360^\\circ - (70^\\circ + 165^\\circ) = 360^\\circ - 235^\\circ = 125^\\circ$ ✓. (The choice $235^\\circ$ is ADDING THE TWO GIVEN ANGLES and stopping — that number is really the OTHER arc from $C$ to $A$, the one that goes through $B$; the choice $95^\\circ$ is SUBTRACTING ONE GIVEN ANGLE FROM THE OTHER, $165^\\circ - 70^\\circ$; the choice $290^\\circ$ is FORGETTING ONE GIVEN ANGLE, computing $360^\\circ - 70^\\circ$.)',
    },
    {
      q: 'Points $A$, $B$, and $C$ lie on a circle with center $O$. Central angles $\\angle AOB = 95^\\circ$ and $\\angle BOC = 130^\\circ$, as shown. What is the measure of arc $CA$ that does not contain $B$?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 0], b: [-1.5, 2.6] },
          { t: 'seg', a: [0, 0], b: [2.72, 1.27] },
          { t: 'seg', a: [0, 0], b: [-0.78, -2.9] },
          { t: 'angle', at: [0, 0], from: [-1.5, 2.6], to: [2.72, 1.27], r: 0.8, label: '95' },
          { t: 'angle', at: [0, 0], from: [2.72, 1.27], to: [-0.78, -2.9], r: 1.1, label: '130' },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: 6 },
          { t: 'point', p: [-1.5, 2.6], label: 'A', dx: -10, dy: -8 },
          { t: 'point', p: [2.72, 1.27], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [-0.78, -2.9], label: 'C', dx: -8, dy: 12 },
        ],
      },
      choices: ['$225^\\circ$', '$265^\\circ$', '$135^\\circ$', '$35^\\circ$'],
      answer: 2,
      solution:
        'The three angles at $O$ share the vertex and wrap once around it, so together they make $360^\\circ$: $\\angle COA = 360^\\circ - 95^\\circ - 130^\\circ = 135^\\circ$. An arc matches its central angle, so arc $CA$ measures $135^\\circ$ ✓. Check a second, independent way by adding the arcs directly: arc $AB = 95^\\circ$, arc $BC = 130^\\circ$, and the three arcs $AB$, $BC$, $CA$ tile the circle exactly once, so arc $CA = 360^\\circ - 225^\\circ = 135^\\circ$ ✓. A quick sanity check on the picture agrees: $135^\\circ$ is the largest of the three measures, and the gap from $C$ round to $A$ is indeed the widest opening in the figure ✓. (The choice $225^\\circ$ is ADDING THE TWO GIVEN ANGLES, which names the other arc from $C$ to $A$ through $B$; the choice $265^\\circ$ is FORGETTING ONE GIVEN ANGLE, computing $360^\\circ - 95^\\circ$; the choice $35^\\circ$ is SUBTRACTING ONE GIVEN ANGLE FROM THE OTHER, $130^\\circ - 95^\\circ$.)',
    },
    {
      q: 'Points $A$, $B$, and $C$ lie on a circle with center $O$. Central angles $\\angle AOB = 130^\\circ$ and $\\angle BOC = 155^\\circ$, as shown. What is the measure of arc $CA$ that does not contain $B$?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [0, 0], b: [-2.72, 1.27] },
          { t: 'seg', a: [0, 0], b: [2.72, 1.27] },
          { t: 'seg', a: [0, 0], b: [-1.93, -2.3] },
          { t: 'angle', at: [0, 0], from: [-2.72, 1.27], to: [2.72, 1.27], r: 0.9, label: '130' },
          { t: 'angle', at: [0, 0], from: [2.72, 1.27], to: [-1.93, -2.3], r: 1.2, label: '155' },
          { t: 'point', p: [0, 0], label: 'O', dx: 10, dy: 14 },
          { t: 'point', p: [-2.72, 1.27], label: 'A', dx: -12, dy: -4 },
          { t: 'point', p: [2.72, 1.27], label: 'B', dx: 12, dy: -4 },
          { t: 'point', p: [-1.93, -2.3], label: 'C', dx: -12, dy: 8 },
        ],
      },
      choices: ['$285^\\circ$', '$25^\\circ$', '$230^\\circ$', '$75^\\circ$'],
      answer: 3,
      solution:
        'Three angles meeting at the center and filling the space around it must add to a full turn: $\\angle COA = 360^\\circ - 130^\\circ - 155^\\circ = 75^\\circ$. An arc has the measure of its central angle, so arc $CA$ is $75^\\circ$ ✓. Check a second, independent way by walking the rim: starting at $A$ and going through $B$ to $C$ covers $130^\\circ + 155^\\circ = 285^\\circ$ of the circle, and the leftover stretch from $C$ back to $A$ is whatever the full $360^\\circ$ has not been used, namely $360^\\circ - 285^\\circ = 75^\\circ$ ✓. The picture backs it up: arc $CA$ is by far the narrowest of the three openings, and $75^\\circ$ is the smallest of the three measures ✓. (The choice $285^\\circ$ is ADDING THE TWO GIVEN ANGLES, the measure of the other arc from $C$ to $A$ through $B$; the choice $25^\\circ$ is SUBTRACTING ONE GIVEN ANGLE FROM THE OTHER, $155^\\circ - 130^\\circ$; the choice $230^\\circ$ is FORGETTING ONE GIVEN ANGLE, computing $360^\\circ - 130^\\circ$.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 1,
  challenge,
}
