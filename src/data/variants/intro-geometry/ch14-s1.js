// Introduction to Geometry chapter 14 — variations for section 14.1 (Planes).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is worked twice along routes that share no steps: once
//    by reasoning straight from what a plane is (three points off one line pin
//    a plane down; a plane holding two points holds the whole line through
//    them), and once by an independent second route — putting the picture on
//    coordinate axes and letting the algebra settle it, or sorting a labeled
//    solid's edges into the meeting bin, the parallel bin, and what is left.
//  - Solids are drawn as oblique wireframes with dashed hidden edges. That
//    projection does not preserve length, so any dimension a solver needs is
//    written on the figure as a plain text label rather than measured off it.
//  - Skew is a statement about whole lines, not about segments: two lines are
//    skew only when no single plane holds both. Two edges of one flat face are
//    therefore never skew, however far apart their endpoints sit.
//  - Each distractor is one named mistake, named in CAPS at the end.

const s141 = [
  // s1 — three points that are not collinear determine exactly one plane.
  [
    {
      q: 'A photographer sets a tripod down on a bumpy stone patio. The three rubber feet land at three spots that do not all lie on one straight line. How many flat surfaces, each stretching on forever, pass through all three feet?',
      choices: ['exactly one plane', 'no plane at all', 'exactly three planes', 'infinitely many planes'],
      answer: 0,
      solution:
        'Route one, building the surface out of its parts: call the feet $A$, $B$, and $C$. Two of them, $A$ and $B$, determine the line $AB$, and $C$ is off that line because the three feet are not collinear. A line together with a point not on it lies in exactly one plane, so at least one plane holds all three feet. And any plane through all three holds $A$ and $B$, so it holds the whole line $AB$, and it holds $C$ too — so it is that very plane. Exactly one ✓. ',
    },
    {
      q: 'A carpenter drives three stakes into a sloping yard so that no straight line passes through all three stake tops. She wants to rest a perfectly flat sheet of plywood so that it touches every stake top at once. Counting flat surfaces that extend forever in all directions, how many contain all three tops?',
      choices: ['infinitely many planes', 'no plane', 'exactly one plane', 'exactly two planes'],
      answer: 2,
      solution:
        'Route one, building the surface out of its parts: name the tops $P$, $Q$, and $R$. The first two determine the line $PQ$, and $R$ is off that line, since no line catches all three. A line and a point not on it lie in exactly one plane, so such a plane exists; and any plane holding all three tops holds $P$ and $Q$, hence the entire line $PQ$, plus $R$ — so it is the same plane again. Exactly one ✓. ',
    },
    {
      q: 'Three hot-air balloons hang motionless over a field, at three spots that do not all lie on one straight line. A pilot asks how many endlessly wide flat surfaces could pass through all three balloons at once. What is the count?',
      choices: ['no such surface', 'exactly two', 'infinitely many', 'exactly one'],
      answer: 3,
      solution:
        'Route one, building the surface out of its parts: label the balloons $X$, $Y$, and $Z$. The pair $X$ and $Y$ determines the line $XY$, and $Z$ is off it, because no straight line catches all three. A line plus a point not on it lie in exactly one plane, so one such surface exists. Any surface through all three balloons contains $X$ and $Y$, hence the whole line $XY$, and contains $Z$ as well — so it is that same plane. Exactly one ✓. ',
    },
  ],
  // s2 — two distinct planes that meet share exactly a line.
  [
    {
      q: 'The two flat glass panes of a bay window meet along the corner post of the frame. Stretch each pane out into a full plane; the two planes are different planes, and they do meet. What is the set of all points lying on both?',
      choices: ['exactly one point', 'a line', 'a segment', 'a whole plane'],
      answer: 1,
      solution:
        'Two distinct intersecting planes meet in a line. The corner post shows part of their shared line. Extending both surfaces into full planes extends this intersection forever in both directions. Therefore the set of points on both planes is a line.',
    },
    {
      q: 'Two flat roof panels of a barn slope up from opposite walls and meet along the ridge. Treat each panel as a plane that runs on forever. The two planes are not the same plane, and they do meet. What must the collection of points on both planes be?',
      choices: ['a single point', 'a whole plane', 'a ray', 'a line'],
      answer: 3,
      solution:
        'Two distinct intersecting planes meet in a line. The ridge shows part of their shared line. Extending both surfaces into full planes extends this intersection forever in both directions. Therefore the set of points on both planes is a line.',
    },
    {
      q: 'A stiff card is folded once down the middle and stood on a desk like a little tent. Stretch each of the two flat halves out into a full plane. Given that these two planes are different from each other, what shape is the set of points they have in common?',
      choices: ['a line', 'a single point', 'a segment as long as the fold', 'a whole plane'],
      answer: 0,
      solution:
        'Two distinct intersecting planes meet in a line. The fold shows part of their shared line. Extending both surfaces into full planes extends this intersection forever in both directions. Therefore the set of points on both planes is a line.',
    },
  ],
  // s3 — a line not contained in a plane meets it in at most one point.
  [
    {
      q: 'A drinking straw lies along a line $\\ell$, and a placemat lies flat in a plane $\\mathcal{P}$. The straw’s line is not contained in the placemat’s plane. At most how many points can $\\ell$ and $\\mathcal{P}$ have in common?',
      fig: {
        view: [-0.9, -2.2, 7.9, 3.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [5.6, 0], [7.2, 1.6], [1.6, 1.6]], fill: false },
          { t: 'seg', a: [2.5, -1.6], b: [3.6, 0.8], dash: true },
          { t: 'seg', a: [3.6, 0.8], b: [4.81, 3.44] },
          { t: 'point', p: [3.6, 0.8], label: 'Q', dx: 13, dy: 10 },
          { t: 'label', p: [0.9, 0.7], text: 'P', dx: 0, dy: 4 },
        ],
      },
      choices: ['$0$', 'infinitely many', '$1$', '$2$'],
      answer: 2,
      solution:
        'Route one, the two-point rule: suppose $\\ell$ and $\\mathcal{P}$ shared two different points. A plane that holds two points holds the entire line through them, so $\\mathcal{P}$ would hold all of $\\ell$ — exactly what the problem rules out. So they share at most one point, and one point really is reachable: a straw poked through the mat like a pin through cloth meets it at the single point $Q$. The greatest number is $1$ ✓. ',
    },
    {
      q: 'A laser beam travels along a line $m$ across a workshop, and a flat sheet of acrylic lies in a plane $\\mathcal{Q}$. The beam’s line is not contained in that plane. What is the greatest number of points that $m$ and $\\mathcal{Q}$ can share?',
      fig: {
        view: [-1, -2.4, 7.6, 4.1],
        elems: [
          { t: 'poly', pts: [[0, 0], [5.2, 0], [6.9, 1.7], [1.7, 1.7]], fill: false },
          { t: 'seg', a: [2.2, -1.8], b: [3.4, 0.85], dash: true },
          { t: 'seg', a: [3.4, 0.85], b: [4.75, 3.83] },
          { t: 'point', p: [3.4, 0.85], label: 'S', dx: 13, dy: 10 },
          { t: 'label', p: [0.95, 0.75], text: 'Q', dx: 0, dy: 4 },
        ],
      },
      choices: ['$2$', '$1$', 'infinitely many', '$0$'],
      answer: 1,
      solution:
        'Route one, the two-point rule: if $m$ and $\\mathcal{Q}$ had two different points in common, then $\\mathcal{Q}$ would contain both, and a plane containing two points contains the whole line joining them — so $m$ would lie inside $\\mathcal{Q}$, which is precisely what we are told is false. At most one point, then, and one is achieved: a beam aimed through the sheet punches through at the single point $S$. The greatest number is $1$ ✓. ',
    },
    {
      q: 'A knitting needle points along a line $n$, and a large sheet of felt is spread out flat in a plane $\\mathcal{R}$. Line $n$ is not contained in plane $\\mathcal{R}$. At most, how many points do $n$ and $\\mathcal{R}$ have in common?',
      fig: {
        view: [-1.1, -2.1, 8.3, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [7.5, 1.5], [1.5, 1.5]], fill: false },
          { t: 'seg', a: [3.1, -1.5], b: [4, 0.75], dash: true },
          { t: 'seg', a: [4, 0.75], b: [5.2, 3.75] },
          { t: 'point', p: [4, 0.75], label: 'T', dx: 13, dy: 10 },
          { t: 'label', p: [0.9, 0.65], text: 'R', dx: 0, dy: 4 },
        ],
      },
      choices: ['$0$', '$2$', 'infinitely many', '$1$'],
      answer: 3,
      solution:
        'Route one, the two-point rule: suppose $n$ met $\\mathcal{R}$ at two different points. The plane would then contain both of them, and a plane containing two points contains the whole line through them, so $n$ would sit inside $\\mathcal{R}$ — contradicting the given. So at most one point is possible, and one is possible: a needle pushed through the felt pierces it at the lone point $T$. The greatest number is $1$ ✓. ',
    },
  ],
  // s4 — the definition of skew: no crossing and no shared direction.
  [
    {
      q: 'A city planner is describing a footbridge and the hiking trail that passes underneath it, and she calls the two straight paths skew. Two lines in space are skew exactly when which of the following holds?',
      choices: [
        'they never meet and they are not parallel',
        'they meet at exactly one point',
        'they lie in one plane and never meet',
        'they run in the same direction forever',
      ],
      answer: 0,
      solution:
        'Route one, sorting every case there is: take two lines in space and ask whether some plane holds both. If one does, then inside that flat world the lines behave like lines on paper — they either cross or they run parallel. So the only case left over is that no plane holds both, and that case is exactly the one where the lines neither cross nor run parallel. That leftover case is what the word skew names ✓. Check a second, independent way, by testing the four statements on a real pair: run the trail along the points $(t, 0, 0)$ and the footbridge one unit up along the points $(0, s, 1)$. They never meet, since every trail point has height $0$ and every bridge point has height $1$; they are not parallel, since the trail heads along $(1, 0, 0)$ and the bridge along $(0, 1, 0)$; and no plane can hold both, because a plane holding two lines forces them to cross or to run parallel. Now score the statements on this genuinely skew pair: they meet at exactly one point is false, they lie in one plane and never meet is false, and they run in the same direction forever is false. Only the first statement survives ✓. (The choice they meet at exactly one point is DESCRIBING INTERSECTING LINES, the very thing a skew pair refuses to do ✗; the choice they lie in one plane and never meet is THE DEFINITION OF PARALLEL LINES, while a skew pair lies in no common plane at all ✗; the choice they run in the same direction forever is PARALLEL ONCE MORE, since a shared direction is what parallel means ✗.)',
    },
    {
      q: 'Two straight steel cables are strung inside a warehouse, one stretched along the floor and one high overhead running a different way, and an engineer labels the pair skew. Two lines in space deserve the name skew exactly when which statement is true?',
      choices: [
        'they cross each other at a right angle',
        'some plane contains both of them and they never cross',
        'they do not cross and they are not parallel',
        'they are parallel but sit in different planes',
      ],
      answer: 2,
      solution:
        'Route one, sorting every case there is: given two lines in space, either some plane holds both or none does. When a plane holds both, the pair is stuck in a flat world, where lines can only cross or stay parallel. The remaining case — no plane holds both — is therefore the same as saying the lines do not cross and are not parallel, and that is the case named skew ✓. Check a second, independent way, by testing the statements on a real pair: run the floor cable along the points $(t, 0, 0)$ and the overhead cable along the points $(0, s, 5)$. Heights $0$ and $5$ never match, so the cables never cross; their directions $(1, 0, 0)$ and $(0, 1, 0)$ are not multiples of each other, so they are not parallel; and no plane holds both, since a plane holding two lines forces them to cross or to be parallel. Scoring the statements against this pair: they cross at a right angle is false because they never cross, some plane contains both is false, and they are parallel is false. Only they do not cross and they are not parallel stands ✓. (The choice they cross each other at a right angle is CONFUSING SKEW WITH PERPENDICULAR, when crossing at all is already too much ✗; the choice some plane contains both of them and they never cross is THE DEFINITION OF PARALLEL LINES, which is exactly what skew is not ✗; the choice they are parallel but sit in different planes is AN IMPOSSIBLE PAIRING, because parallel lines always share a plane ✗.)',
    },
    {
      q: 'A highway overpass crosses above a country road without touching it, and the two roads do not point the same way. A geometry club calls this pair of lines skew. Two lines in space are skew exactly when which of the following is true?',
      choices: [
        'they lie together in one flat plane',
        'they neither cross nor point in the same direction',
        'they cross somewhere far out in space',
        'they stay the same distance apart all along',
      ],
      answer: 1,
      solution:
        'Route one, sorting every case there is: two lines in space either share a plane or they do not. If they share one, then within that flat sheet they must either cross or run parallel, exactly as lines on paper do. So the only possibility left is that no plane holds both, which happens precisely when the lines neither cross nor point the same way — and that is the skew case ✓. Check a second, independent way, by testing the statements on a real pair: send the country road along the points $(t, 0, 0)$ and the overpass along the points $(2, s, 3)$. No point of the road has height $3$, so the two never cross; the directions $(1, 0, 0)$ and $(0, 1, 0)$ are not multiples, so they do not point the same way; and no plane holds both, since a plane holding two lines forces a crossing or a parallel pair. Now test the four statements on this pair: lying in one flat plane is false, crossing far out in space is false, and staying the same distance apart is false — the road and the overpass are $3$ units apart directly under the crossing and much farther apart out along the road. Only they neither cross nor point in the same direction is true ✓. (The choice they lie together in one flat plane is FLATLY BACKWARD, since no plane at all holds a skew pair ✗; the choice they cross somewhere far out in space is DESCRIBING INTERSECTING LINES ✗; the choice they stay the same distance apart all along is DESCRIBING PARALLEL LINES, which always share a plane ✗.)',
    },
  ],
  // s5 — naming one edge of a labeled cube that is skew to a given edge.
  [
    {
      q: 'A cube-shaped ice sculpture has its corners marked $ABCDEFGH$ as shown. Which edge of the sculpture is skew to edge $\\overline{BC}$?',
      fig: {
        view: [-1.3, -1.4, 6, 5.8],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.4, 0] },
          { t: 'seg', a: [3.4, 0], b: [4.7, 1] },
          { t: 'seg', a: [0, 0], b: [0, 3.4] },
          { t: 'seg', a: [3.4, 0], b: [3.4, 3.4] },
          { t: 'seg', a: [4.7, 1], b: [4.7, 4.4] },
          { t: 'seg', a: [0, 3.4], b: [3.4, 3.4] },
          { t: 'seg', a: [3.4, 3.4], b: [4.7, 4.4] },
          { t: 'seg', a: [4.7, 4.4], b: [1.3, 4.4] },
          { t: 'seg', a: [1.3, 4.4], b: [0, 3.4] },
          { t: 'seg', a: [4.7, 1], b: [1.3, 1], dash: true },
          { t: 'seg', a: [1.3, 1], b: [0, 0], dash: true },
          { t: 'seg', a: [1.3, 1], b: [1.3, 4.4], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 14 },
          { t: 'point', p: [3.4, 0], label: 'B', dx: 4, dy: 16 },
          { t: 'point', p: [4.7, 1], label: 'C', dx: 14, dy: 6 },
          { t: 'point', p: [1.3, 1], label: 'D', dx: -13, dy: 6 },
          { t: 'point', p: [0, 3.4], label: 'E', dx: -11, dy: -6 },
          { t: 'point', p: [3.4, 3.4], label: 'F', dx: -13, dy: 12 },
          { t: 'point', p: [4.7, 4.4], label: 'G', dx: 12, dy: -4 },
          { t: 'point', p: [1.3, 4.4], label: 'H', dx: -6, dy: -8 },
        ],
      },
      choices: ['$\\overline{FG}$', '$\\overline{CD}$', '$\\overline{BF}$', '$\\overline{AE}$'],
      answer: 3,
      solution:
        'Route one, sorting the other eleven edges into bins: the edges that meet $\\overline{BC}$ are the ones with an endpoint at $B$ or at $C$, namely $\\overline{AB}$ and $\\overline{BF}$ at $B$, and $\\overline{CD}$ and $\\overline{CG}$ at $C$. The edges parallel to $\\overline{BC}$ are the three that run front-to-back with it: $\\overline{AD}$, $\\overline{EH}$, and $\\overline{FG}$. Everything left over is skew, and that leftover bin is $\\overline{AE}$, $\\overline{DH}$, $\\overline{EF}$, and $\\overline{HG}$. The only listed choice in the leftover bin is $\\overline{AE}$ ✓. ',
    },
    {
      q: 'A wooden puzzle block is a cube with its vertices marked $ABCDEFGH$ as in the picture. Which edge of the block is skew to edge $\\overline{EF}$?',
      fig: {
        view: [-1.3, -1.4, 5.7, 5.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [3, 0], b: [4.4, 1.1] },
          { t: 'seg', a: [0, 0], b: [0, 3] },
          { t: 'seg', a: [3, 0], b: [3, 3] },
          { t: 'seg', a: [4.4, 1.1], b: [4.4, 4.1] },
          { t: 'seg', a: [0, 3], b: [3, 3] },
          { t: 'seg', a: [3, 3], b: [4.4, 4.1] },
          { t: 'seg', a: [4.4, 4.1], b: [1.4, 4.1] },
          { t: 'seg', a: [1.4, 4.1], b: [0, 3] },
          { t: 'seg', a: [4.4, 1.1], b: [1.4, 1.1], dash: true },
          { t: 'seg', a: [1.4, 1.1], b: [0, 0], dash: true },
          { t: 'seg', a: [1.4, 1.1], b: [1.4, 4.1], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 14 },
          { t: 'point', p: [3, 0], label: 'B', dx: 4, dy: 16 },
          { t: 'point', p: [4.4, 1.1], label: 'C', dx: 14, dy: 6 },
          { t: 'point', p: [1.4, 1.1], label: 'D', dx: -13, dy: 6 },
          { t: 'point', p: [0, 3], label: 'E', dx: -11, dy: -6 },
          { t: 'point', p: [3, 3], label: 'F', dx: -13, dy: 12 },
          { t: 'point', p: [4.4, 4.1], label: 'G', dx: 12, dy: -4 },
          { t: 'point', p: [1.4, 4.1], label: 'H', dx: -6, dy: -8 },
        ],
      },
      choices: ['$\\overline{BC}$', '$\\overline{HG}$', '$\\overline{AE}$', '$\\overline{FG}$'],
      answer: 0,
      solution:
        'Route one, sorting the other eleven edges into bins: the edges meeting $\\overline{EF}$ are the four with an endpoint at $E$ or $F$ — $\\overline{EH}$ and $\\overline{AE}$ at $E$, and $\\overline{FG}$ and $\\overline{BF}$ at $F$. The edges parallel to $\\overline{EF}$ are the three running left-to-right with it: $\\overline{AB}$, $\\overline{DC}$, and $\\overline{HG}$. What is left is the skew bin: $\\overline{BC}$, $\\overline{AD}$, $\\overline{CG}$, and $\\overline{DH}$. The only choice sitting in that bin is $\\overline{BC}$ ✓. ',
    },
    {
      q: 'A gift box is a perfect cube whose corners are labeled $ABCDEFGH$ as drawn. Which edge of the box is skew to edge $\\overline{AD}$?',
      fig: {
        view: [-1.3, -1.4, 6, 5.8],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.6, 0] },
          { t: 'seg', a: [3.6, 0], b: [4.7, 0.8] },
          { t: 'seg', a: [0, 0], b: [0, 3.6] },
          { t: 'seg', a: [3.6, 0], b: [3.6, 3.6] },
          { t: 'seg', a: [4.7, 0.8], b: [4.7, 4.4] },
          { t: 'seg', a: [0, 3.6], b: [3.6, 3.6] },
          { t: 'seg', a: [3.6, 3.6], b: [4.7, 4.4] },
          { t: 'seg', a: [4.7, 4.4], b: [1.1, 4.4] },
          { t: 'seg', a: [1.1, 4.4], b: [0, 3.6] },
          { t: 'seg', a: [4.7, 0.8], b: [1.1, 0.8], dash: true },
          { t: 'seg', a: [1.1, 0.8], b: [0, 0], dash: true },
          { t: 'seg', a: [1.1, 0.8], b: [1.1, 4.4], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 14 },
          { t: 'point', p: [3.6, 0], label: 'B', dx: 4, dy: 16 },
          { t: 'point', p: [4.7, 0.8], label: 'C', dx: 14, dy: 6 },
          { t: 'point', p: [1.1, 0.8], label: 'D', dx: -13, dy: 6 },
          { t: 'point', p: [0, 3.6], label: 'E', dx: -11, dy: -6 },
          { t: 'point', p: [3.6, 3.6], label: 'F', dx: -13, dy: 12 },
          { t: 'point', p: [4.7, 4.4], label: 'G', dx: 12, dy: -4 },
          { t: 'point', p: [1.1, 4.4], label: 'H', dx: -6, dy: -8 },
        ],
      },
      choices: ['$\\overline{EH}$', '$\\overline{BF}$', '$\\overline{AE}$', '$\\overline{DH}$'],
      answer: 1,
      solution:
        'Route one, sorting the other eleven edges into bins: the edges meeting $\\overline{AD}$ are the four with an endpoint at $A$ or at $D$ — $\\overline{AB}$ and $\\overline{AE}$ at $A$, and $\\overline{CD}$ and $\\overline{DH}$ at $D$. The edges parallel to $\\overline{AD}$ are the three running front-to-back with it: $\\overline{BC}$, $\\overline{EH}$, and $\\overline{FG}$. The leftover bin is the skew one: $\\overline{BF}$, $\\overline{CG}$, $\\overline{EF}$, and $\\overline{HG}$. Among the choices only $\\overline{BF}$ lands there ✓. ',
    },
  ],
  // s6 — two distinct parallel lines lie in exactly one plane.
  [
    {
      q: 'The two straight rails of a train track run parallel to each other and never meet. Thinking of each rail as a line that continues forever, how many planes contain both rails?',
      choices: ['none', 'infinitely many', 'exactly one', 'exactly two'],
      answer: 2,
      solution:
        'Route one, pinning the plane down with one point: calling the rails parallel already says they are coplanar and never meet, so at least one plane $\\pi$ holds both. For uniqueness, mark a point $P$ on the second rail. Any plane that holds both rails holds the first rail and also holds $P$ — and a line together with a point off it lies in exactly one plane. So every plane holding both rails is that one plane. Exactly one ✓. ',
    },
    {
      q: 'The two straight side edges of a long conveyor belt run parallel and never touch. Treating each edge as a full line, how many planes contain both edges?',
      choices: ['exactly one', 'exactly two', 'none', 'infinitely many'],
      answer: 0,
      solution:
        'Route one, pinning the plane down with one point: the word parallel already promises that the two edges lie together in some plane $\\pi$ and never meet, so at least one plane works. Now take a point $P$ on the second edge. Any plane containing both edges contains the first edge and the point $P$ as well, and a line together with a point not on it determines exactly one plane. So there is nothing to choose: every candidate is the same plane ✓. ',
    },
    {
      q: 'A ladder’s two side rails are straight and parallel to each other. Treat each rail as a line stretching on forever in both directions. How many different planes contain both rails?',
      choices: ['none', 'exactly two', 'infinitely many', 'exactly one'],
      answer: 3,
      solution:
        'Route one, pinning the plane down with one point: parallel means the rails are coplanar and never meet, so some plane $\\pi$ already holds both. To see there is no second one, choose a point $P$ on the far rail. Every plane holding both rails holds the near rail together with $P$, and a line plus a point off that line lie in exactly one plane. So all such planes are the same plane ✓. ',
    },
  ],
  // s7 — a single line lies in infinitely many planes.
  [
    {
      q: 'A revolving door turns about a straight central shaft. Forget the door panels for a moment and think only about the line the shaft lies along: how many different planes contain that whole line?',
      choices: ['exactly one', 'infinitely many', 'exactly four', 'exactly two'],
      answer: 1,
      solution:
        'Route one, adding one point at a time: a line by itself does not pin a plane down — you need one more point off the line, and then the line and that point lie in exactly one plane. So draw a circle around the shaft and mark a point $Q$ on it at some angle. Turning $Q$ around the circle swings the plane through the shaft and $Q$ along with it, and two angles give the same plane only when they differ by a half turn. There are infinitely many angles in a half turn, so there are infinitely many planes ✓. ',
    },
    {
      q: 'A clothesline is pulled taut between two poles and lies along a straight line $j$. How many different planes contain the whole line $j$?',
      choices: ['exactly two', 'exactly one', 'infinitely many', 'exactly three'],
      answer: 2,
      solution:
        'Route one, adding one point at a time: one line is not enough to determine a plane; a plane needs a point off that line as well, and a line plus such a point lie in exactly one plane. Now imagine a hoop drawn around the clothesline and slide a point $Q$ around that hoop: each position of $Q$ gives its own plane through the line, and only positions a half turn apart repeat a plane. Since the hoop offers infinitely many such positions, there are infinitely many planes ✓. ',
    },
    {
      q: 'A flagpole stands straight in a courtyard, and a wide banner can be hung so that it lies perfectly flat and runs right along the pole. How many different planes contain the whole line of the flagpole?',
      choices: ['infinitely many', 'exactly one', 'exactly two', 'exactly six'],
      answer: 0,
      solution:
        'Route one, adding one point at a time: a line does not determine a plane on its own — a plane is fixed only once you add a point off the line, and then exactly one plane holds both. Walk once around the pole at arm’s length and hold the banner’s far edge at each spot in turn: every spot gives a plane through the pole, and two spots produce the same plane only when they are a half turn apart. Infinitely many spots around the pole means infinitely many planes ✓. ',
    },
  ],
  // s8 — a cut parallel to a face of a cube is a copy of that face.
  [
    {
      q: 'A block of cheese is a perfect cube. A cheese wire slices straight through it along a plane parallel to the bottom face. What shape is the cross-section the wire exposes?',
      fig: {
        view: [-0.8, -1.2, 5.6, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.4, 0], [3.4, 3.4], [0, 3.4]], fill: false },
          { t: 'seg', a: [3.4, 0], b: [4.6, 0.9] },
          { t: 'seg', a: [3.4, 3.4], b: [4.6, 4.3] },
          { t: 'seg', a: [0, 3.4], b: [1.2, 4.3] },
          { t: 'seg', a: [4.6, 0.9], b: [4.6, 4.3] },
          { t: 'seg', a: [1.2, 4.3], b: [4.6, 4.3] },
          { t: 'seg', a: [0, 0], b: [1.2, 0.9], dash: true },
          { t: 'seg', a: [1.2, 0.9], b: [4.6, 0.9], dash: true },
          { t: 'seg', a: [1.2, 0.9], b: [1.2, 4.3], dash: true },
          { t: 'seg', a: [0, 1.7], b: [3.4, 1.7], dash: true },
          { t: 'seg', a: [3.4, 1.7], b: [4.6, 2.6], dash: true },
          { t: 'seg', a: [4.6, 2.6], b: [1.2, 2.6], dash: true },
          { t: 'seg', a: [1.2, 2.6], b: [0, 1.7], dash: true },
        ],
      },
      choices: ['a triangle', 'a regular hexagon', 'a rectangle that is longer than it is wide', 'a square'],
      answer: 3,
      solution:
        'Route one, counting the faces the cut meets: a plane parallel to the bottom face never touches the bottom or the top, so it crosses only the four side faces, and each face it passes through contributes exactly one straight edge. That is four edges, so the slice is a quadrilateral. Each of those edges runs parallel to the bottom edge of the side face it lies in, so the slice has the same two pairs of directions and the same widths as the bottom face — it is a copy of that face, and the bottom face of a cube is a square ✓. ',
    },
    {
      q: 'A cube of packing foam is cut clean through by a hot wire held parallel to the front face of the cube. What shape is the newly exposed cross-section?',
      fig: {
        view: [-0.8, -1.2, 5.5, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [3, 0], [3, 3], [0, 3]], fill: false },
          { t: 'seg', a: [3, 0], b: [4.5, 1.1] },
          { t: 'seg', a: [3, 3], b: [4.5, 4.1] },
          { t: 'seg', a: [0, 3], b: [1.5, 4.1] },
          { t: 'seg', a: [4.5, 1.1], b: [4.5, 4.1] },
          { t: 'seg', a: [1.5, 4.1], b: [4.5, 4.1] },
          { t: 'seg', a: [0, 0], b: [1.5, 1.1], dash: true },
          { t: 'seg', a: [1.5, 1.1], b: [4.5, 1.1], dash: true },
          { t: 'seg', a: [1.5, 1.1], b: [1.5, 4.1], dash: true },
          { t: 'seg', a: [0.75, 0.55], b: [3.75, 0.55], dash: true },
          { t: 'seg', a: [3.75, 0.55], b: [3.75, 3.55], dash: true },
          { t: 'seg', a: [3.75, 3.55], b: [0.75, 3.55], dash: true },
          { t: 'seg', a: [0.75, 3.55], b: [0.75, 0.55], dash: true },
        ],
      },
      choices: ['a circle', 'a square', 'a triangle', 'a rectangle that is wider than it is tall'],
      answer: 1,
      solution:
        'Route one, counting the faces the cut meets: a plane parallel to the front face misses the front and the back entirely and crosses the other four faces — top, bottom, left, and right. Each face it crosses gives the slice one straight edge, so the slice has four sides, and each of those edges lies parallel to the matching edge of the front face. That makes the slice a copy of the front face, which on a cube is a square ✓. ',
    },
    {
      q: 'A cube of ice is sawn straight through along a plane parallel to one of its vertical side faces. What shape does the saw cut expose?',
      fig: {
        view: [-0.8, -1.2, 5.8, 5.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.6, 0], [3.6, 3.6], [0, 3.6]], fill: false },
          { t: 'seg', a: [3.6, 0], b: [4.8, 0.9] },
          { t: 'seg', a: [3.6, 3.6], b: [4.8, 4.5] },
          { t: 'seg', a: [0, 3.6], b: [1.2, 4.5] },
          { t: 'seg', a: [4.8, 0.9], b: [4.8, 4.5] },
          { t: 'seg', a: [1.2, 4.5], b: [4.8, 4.5] },
          { t: 'seg', a: [0, 0], b: [1.2, 0.9], dash: true },
          { t: 'seg', a: [1.2, 0.9], b: [4.8, 0.9], dash: true },
          { t: 'seg', a: [1.2, 0.9], b: [1.2, 4.5], dash: true },
          { t: 'seg', a: [1.8, 0], b: [1.8, 3.6], dash: true },
          { t: 'seg', a: [1.8, 3.6], b: [3, 4.5], dash: true },
          { t: 'seg', a: [3, 4.5], b: [3, 0.9], dash: true },
          { t: 'seg', a: [3, 0.9], b: [1.8, 0], dash: true },
        ],
      },
      choices: ['a regular hexagon', 'a triangle', 'a square', 'a circle'],
      answer: 2,
      solution:
        'Route one, counting the faces the cut meets: a plane parallel to the left face avoids the left and right faces and crosses the remaining four — front, back, top, and bottom. Each crossed face contributes one straight edge, so the exposed shape has four sides, and every edge of it runs parallel to the matching edge of the left face. The slice is therefore a copy of that face, and each face of a cube is a square ✓. ',
    },
  ],
  // s9 — n points, no three collinear and no four coplanar: one plane per triple.
  [
    {
      q: 'Five points hang in the air of a gymnasium, arranged so that no three of them lie on one straight line and no four of them lie in one plane. How many different planes pass through three of the five points?',
      fig: {
        view: [-1.2, -2.1, 5.2, 4.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [4, 0] },
          { t: 'seg', a: [0, 0], b: [1.8, 3.4] },
          { t: 'seg', a: [4, 0], b: [1.8, 3.4] },
          { t: 'seg', a: [0, 0], b: [1.9, -1] },
          { t: 'seg', a: [4, 0], b: [1.9, -1] },
          { t: 'seg', a: [0, 0], b: [2.6, 1.3], dash: true },
          { t: 'seg', a: [4, 0], b: [2.6, 1.3], dash: true },
          { t: 'seg', a: [1.8, 3.4], b: [2.6, 1.3], dash: true },
          { t: 'seg', a: [1.9, -1], b: [2.6, 1.3], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -11, dy: 12 },
          { t: 'point', p: [4, 0], label: 'B', dx: 11, dy: 12 },
          { t: 'point', p: [2.6, 1.3], label: 'C', dx: 13, dy: 4 },
          { t: 'point', p: [1.8, 3.4], label: 'D', dx: 0, dy: -10 },
          { t: 'point', p: [1.9, -1], label: 'E', dx: 0, dy: 16 },
        ],
      },
      choices: ['$10$', '$5$', '$20$', '$60$'],
      answer: 0,
      solution:
        'Route one, counting the triples: no three of the points are collinear, so every choice of three of them determines exactly one plane. And no two different triples can give the same plane, because a plane holding two different triples would hold at least four of the five points, which is ruled out. So the number of planes is exactly the number of triples, $\\binom{5}{3} = \\frac{5 \\cdot 4 \\cdot 3}{3 \\cdot 2 \\cdot 1} = 10$ ✓. Check a second, independent way, by listing what gets left out: choosing $3$ points out of $5$ is the same as choosing the $2$ points to leave behind. Number the points $1$ through $5$; the pairs left behind are $12$, $13$, $14$, $15$, then $23$, $24$, $25$, then $34$, $35$, and finally $45$. That is $4 + 3 + 2 + 1 = 10$ pairs, so $10$ planes ✓. (The choice $5$ is COUNTING ONE PLANE PER POINT instead of one per triple of points ✗; the choice $20$ is DIVIDING BY $3$ INSTEAD OF BY $6$, forgetting that the same three points can be listed in six different orders ✗; the choice $60$ is COUNTING ORDERED TRIPLES, $5 \\cdot 4 \\cdot 3$, and never dividing out the orderings at all ✗.)',
    },
    {
      q: 'Seven weather balloons float above a valley, positioned so that no three of them lie on a single straight line and no four of them lie in a single plane. How many different planes pass through three of the seven balloons?',
      fig: {
        view: [-0.8, -0.9, 5.8, 5.1],
        elems: [
          { t: 'point', p: [0.4, 0.3], label: 'A', dx: -11, dy: 10 },
          { t: 'point', p: [2.1, 0.9], label: 'B', dx: 0, dy: 15 },
          { t: 'point', p: [3.9, 0.2], label: 'C', dx: 11, dy: 10 },
          { t: 'point', p: [1.2, 2.4], label: 'D', dx: -13, dy: 2 },
          { t: 'point', p: [3.1, 2.9], label: 'E', dx: 12, dy: 6 },
          { t: 'point', p: [4.8, 1.7], label: 'F', dx: 13, dy: 2 },
          { t: 'point', p: [2.5, 4.1], label: 'G', dx: 0, dy: -11 },
        ],
      },
      choices: ['$21$', '$210$', '$70$', '$35$'],
      answer: 3,
      solution:
        'Route one, counting the triples: because no three balloons are collinear, each set of three determines exactly one plane, and because no four are coplanar, two different sets of three never land on the same plane — that would place four balloons in one plane. So the planes are in one-to-one match with the triples, and there are $\\binom{7}{3} = \\frac{7 \\cdot 6 \\cdot 5}{3 \\cdot 2 \\cdot 1} = 35$ of them ✓. Check a second, independent way, by sorting the triples by their lowest-numbered balloon: number the balloons $1$ through $7$. Triples whose smallest member is $1$ need two more from the remaining six, giving $\\binom{6}{2} = 15$; smallest member $2$ gives $\\binom{5}{2} = 10$; then $\\binom{4}{2} = 6$, $\\binom{3}{2} = 3$, and $\\binom{2}{2} = 1$, and a triple cannot start at $6$ or later. The total is $15 + 10 + 6 + 3 + 1 = 35$ ✓. (The choice $21$ is COUNTING PAIRS INSTEAD OF TRIPLES, $\\binom{7}{2}$, which counts the segments joining balloons ✗; the choice $210$ is COUNTING ORDERED TRIPLES, $7 \\cdot 6 \\cdot 5$, without dividing out the six orderings of each ✗; the choice $70$ is DIVIDING BY $3$ INSTEAD OF BY $6$ ✗.)',
    },
    {
      q: 'Nine tiny drones hover inside a warehouse so that no three of them lie on one straight line and no four of them lie in one plane. How many different planes pass through three of the nine drones?',
      fig: {
        view: [-0.9, -1, 6.2, 5.4],
        elems: [
          { t: 'point', p: [0.4, 0.5], label: 'A', dx: -11, dy: 10 },
          { t: 'point', p: [2, 0.2], label: 'B', dx: 0, dy: 15 },
          { t: 'point', p: [3.7, 0.8], label: 'C', dx: 4, dy: 15 },
          { t: 'point', p: [5.2, 0.3], label: 'D', dx: 11, dy: 10 },
          { t: 'point', p: [1.1, 2.2], label: 'E', dx: -13, dy: 2 },
          { t: 'point', p: [2.9, 2.6], label: 'F', dx: 0, dy: 15 },
          { t: 'point', p: [4.6, 2.1], label: 'G', dx: 13, dy: 2 },
          { t: 'point', p: [1.9, 4], label: 'H', dx: -11, dy: -6 },
          { t: 'point', p: [3.9, 4.3], label: 'K', dx: 11, dy: -6 },
        ],
      },
      choices: ['$36$', '$504$', '$84$', '$168$'],
      answer: 2,
      solution:
        'Route one, counting the triples: no three drones are collinear, so each set of three determines exactly one plane; and no four are coplanar, so two different sets of three can never give the same plane, since that plane would then hold four drones. Planes and triples match up one for one, and the number of triples is $\\binom{9}{3} = \\frac{9 \\cdot 8 \\cdot 7}{3 \\cdot 2 \\cdot 1} = \\frac{504}{6} = 84$ ✓. Check a second, independent way, by sorting the triples by their lowest-numbered drone: number the drones $1$ through $9$. A triple starting at $1$ needs two of the other eight, $\\binom{8}{2} = 28$; starting at $2$ gives $\\binom{7}{2} = 21$; then $15$, $10$, $6$, $3$, and $1$, and nothing can start at $8$ or later. Adding, $28 + 21 + 15 + 10 + 6 + 3 + 1 = 84$ ✓. (The choice $36$ is COUNTING PAIRS INSTEAD OF TRIPLES, $\\binom{9}{2}$, which counts joining segments rather than planes ✗; the choice $504$ is COUNTING ORDERED TRIPLES, $9 \\cdot 8 \\cdot 7$, and stopping before dividing by the six orderings ✗; the choice $168$ is DIVIDING BY $3$ INSTEAD OF BY $6$ ✗.)',
    },
  ],
  // s10 — counting every edge of a labeled solid that is skew to a named edge.
  [
    {
      q: 'A candy bar is shaped like a triangular prism $ABC$-$DEF$: triangle $ABC$ is the bottom, and $D$, $E$, $F$ sit directly above $A$, $B$, $C$. How many of the prism’s $9$ edges are skew to edge $\\overline{AB}$?',
      fig: {
        view: [-1.2, -1.4, 4.9, 5.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.6, 0] },
          { t: 'seg', a: [0, 0], b: [0, 3.2] },
          { t: 'seg', a: [3.6, 0], b: [3.6, 3.2] },
          { t: 'seg', a: [0, 3.2], b: [3.6, 3.2] },
          { t: 'seg', a: [0, 3.2], b: [1.4, 4.4] },
          { t: 'seg', a: [1.4, 4.4], b: [3.6, 3.2] },
          { t: 'seg', a: [0, 0], b: [1.4, 1.2], dash: true },
          { t: 'seg', a: [1.4, 1.2], b: [3.6, 0], dash: true },
          { t: 'seg', a: [1.4, 1.2], b: [1.4, 4.4], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 14 },
          { t: 'point', p: [3.6, 0], label: 'B', dx: 10, dy: 14 },
          { t: 'point', p: [1.4, 1.2], label: 'C', dx: 13, dy: 10 },
          { t: 'point', p: [0, 3.2], label: 'D', dx: -12, dy: -6 },
          { t: 'point', p: [3.6, 3.2], label: 'E', dx: 12, dy: -4 },
          { t: 'point', p: [1.4, 4.4], label: 'F', dx: 2, dy: -11 },
        ],
      },
      choices: ['$2$', '$3$', '$4$', '$6$'],
      answer: 1,
      solution:
        'Route one, sorting the other eight edges into bins: the nine edges are the bottom triangle $\\overline{AB}$, $\\overline{BC}$, $\\overline{CA}$, the top triangle $\\overline{DE}$, $\\overline{EF}$, $\\overline{FD}$, and the three uprights $\\overline{AD}$, $\\overline{BE}$, $\\overline{CF}$. Edges that meet $\\overline{AB}$: $\\overline{CA}$ and $\\overline{AD}$ at $A$, and $\\overline{BC}$ and $\\overline{BE}$ at $B$ — four of them. Edges parallel to $\\overline{AB}$: only $\\overline{DE}$, since $D$ stands above $A$ and $E$ above $B$. That leaves $\\overline{EF}$, $\\overline{FD}$, and $\\overline{CF}$, and each one is skew: the two top edges live in the top plane, which is parallel to the bottom plane and so never meets line $AB$, and neither points along $AB$; the upright $\\overline{CF}$ stands over $C$, which is off line $AB$, so it neither meets $AB$ nor runs parallel to it. The count is $3$ ✓. ',
    },
    {
      q: 'A glass paperweight is a square pyramid $ABCDE$, where $ABCD$ is the square base and $E$ is the apex above it. How many of the pyramid’s $8$ edges are skew to base edge $\\overline{AB}$?',
      fig: {
        view: [-1.2, -1.4, 6.2, 5],
        elems: [
          { t: 'seg', a: [0, 0], b: [3.8, 0] },
          { t: 'seg', a: [3.8, 0], b: [5, 1.3] },
          { t: 'seg', a: [0, 0], b: [2.5, 4] },
          { t: 'seg', a: [3.8, 0], b: [2.5, 4] },
          { t: 'seg', a: [5, 1.3], b: [2.5, 4] },
          { t: 'seg', a: [0, 0], b: [1.2, 1.3], dash: true },
          { t: 'seg', a: [1.2, 1.3], b: [5, 1.3], dash: true },
          { t: 'seg', a: [1.2, 1.3], b: [2.5, 4], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 14 },
          { t: 'point', p: [3.8, 0], label: 'B', dx: 6, dy: 16 },
          { t: 'point', p: [5, 1.3], label: 'C', dx: 14, dy: 6 },
          { t: 'point', p: [1.2, 1.3], label: 'D', dx: -13, dy: 6 },
          { t: 'point', p: [2.5, 4], label: 'E', dx: 0, dy: -11 },
        ],
      },
      choices: ['$0$', '$3$', '$4$', '$2$'],
      answer: 3,
      solution:
        'Route one, sorting the other seven edges into bins: the eight edges are the base square $\\overline{AB}$, $\\overline{BC}$, $\\overline{CD}$, $\\overline{DA}$ and the four slants $\\overline{EA}$, $\\overline{EB}$, $\\overline{EC}$, $\\overline{ED}$. Edges meeting $\\overline{AB}$: $\\overline{DA}$ and $\\overline{EA}$ at $A$, and $\\overline{BC}$ and $\\overline{EB}$ at $B$ — four of them. Edges parallel to $\\overline{AB}$: the opposite side of the square, $\\overline{CD}$. That leaves $\\overline{EC}$ and $\\overline{ED}$. Neither can meet line $AB$: each runs from the apex, which is off the base plane, down to the base plane at a single point, and that point is $C$ or $D$, neither of which sits on line $AB$. Neither is parallel to $\\overline{AB}$ either, since each rises out of the base plane while $\\overline{AB}$ stays flat in it. So both are skew, and the count is $2$ ✓. ',
    },
    {
      q: 'A pencil holder is a regular hexagonal prism $ABCDEF$-$A^{\\prime}B^{\\prime}C^{\\prime}D^{\\prime}E^{\\prime}F^{\\prime}$, where $ABCDEF$ is the regular hexagon at the bottom and each primed vertex sits directly above its unprimed partner. How many of the prism’s $18$ edges are skew to base edge $\\overline{AB}$?',
      fig: {
        view: [-0.9, -1.1, 5.7, 6.2],
        elems: [
          { t: 'seg', a: [1.4, 0.17], b: [3.4, 0.17] },
          { t: 'seg', a: [3.4, 0.17], b: [4.4, 0.9] },
          { t: 'seg', a: [0.4, 0.9], b: [1.4, 0.17] },
          { t: 'seg', a: [4.4, 0.9], b: [3.4, 1.63], dash: true },
          { t: 'seg', a: [3.4, 1.63], b: [1.4, 1.63], dash: true },
          { t: 'seg', a: [1.4, 1.63], b: [0.4, 0.9], dash: true },
          { t: 'seg', a: [1.4, 0.17], b: [1.4, 3.57] },
          { t: 'seg', a: [3.4, 0.17], b: [3.4, 3.57] },
          { t: 'seg', a: [4.4, 0.9], b: [4.4, 4.3] },
          { t: 'seg', a: [0.4, 0.9], b: [0.4, 4.3] },
          { t: 'seg', a: [3.4, 1.63], b: [3.4, 5.03], dash: true },
          { t: 'seg', a: [1.4, 1.63], b: [1.4, 5.03], dash: true },
          { t: 'seg', a: [1.4, 3.57], b: [3.4, 3.57] },
          { t: 'seg', a: [3.4, 3.57], b: [4.4, 4.3] },
          { t: 'seg', a: [4.4, 4.3], b: [3.4, 5.03] },
          { t: 'seg', a: [3.4, 5.03], b: [1.4, 5.03] },
          { t: 'seg', a: [1.4, 5.03], b: [0.4, 4.3] },
          { t: 'seg', a: [0.4, 4.3], b: [1.4, 3.57] },
          { t: 'point', p: [1.4, 0.17], label: 'A', dx: -6, dy: 15 },
          { t: 'point', p: [3.4, 0.17], label: 'B', dx: 6, dy: 15 },
          { t: 'point', p: [4.4, 0.9], label: 'C', dx: 14, dy: 6 },
          { t: 'point', p: [3.4, 1.63], label: 'D', dx: 12, dy: 2 },
          { t: 'point', p: [1.4, 1.63], label: 'E', dx: -13, dy: 2 },
          { t: 'point', p: [0.4, 0.9], label: 'F', dx: -14, dy: 6 },
          { t: 'point', p: [1.4, 3.57], label: 'A′', dx: -13, dy: 12 },
          { t: 'point', p: [3.4, 3.57], label: 'B′', dx: 13, dy: 12 },
          { t: 'point', p: [4.4, 4.3], label: 'C′', dx: 15, dy: 4 },
          { t: 'point', p: [3.4, 5.03], label: 'D′', dx: 10, dy: -8 },
          { t: 'point', p: [1.4, 5.03], label: 'E′', dx: -10, dy: -8 },
          { t: 'point', p: [0.4, 4.3], label: 'F′', dx: -15, dy: 4 },
        ],
      },
      choices: ['$8$', '$10$', '$13$', '$4$'],
      answer: 0,
      solution:
        'Route one, sorting the other seventeen edges into bins. Meeting $\\overline{AB}$: $\\overline{FA}$ and $\\overline{AA^{\\prime}}$ at $A$, and $\\overline{BC}$ and $\\overline{BB^{\\prime}}$ at $B$ — four. Parallel to $\\overline{AB}$: in a regular hexagon the far side $\\overline{DE}$ runs the same direction as $\\overline{AB}$, and so do the two top edges $\\overline{A^{\\prime}B^{\\prime}}$ and $\\overline{D^{\\prime}E^{\\prime}}$ sitting above them — three. Sharing the bottom plane with $\\overline{AB}$ without being parallel: $\\overline{CD}$ and $\\overline{EF}$. Their segments do miss $\\overline{AB}$, but all three lie in the one flat bottom hexagon, and lines in a common plane that are not parallel must cross once extended, so these two are not skew — two. Everything left over is skew, and it splits into two neat groups. The top edges $\\overline{B^{\\prime}C^{\\prime}}$, $\\overline{C^{\\prime}D^{\\prime}}$, $\\overline{E^{\\prime}F^{\\prime}}$, $\\overline{F^{\\prime}A^{\\prime}}$ lie in the top plane, which is parallel to the bottom plane and so never meets line $AB$, and none of the four runs in the direction of $\\overline{AB}$ — four. The uprights $\\overline{CC^{\\prime}}$, $\\overline{DD^{\\prime}}$, $\\overline{EE^{\\prime}}$, $\\overline{FF^{\\prime}}$ each stand over a vertex that is off line $AB$, so none meets it, and a vertical edge never runs parallel to a horizontal one — four. The tally checks out as $4 + 3 + 2 + 4 + 4 = 17$, and the skew count is $4 + 4 = 8$ ✓. ',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 14,
  sections: { '14.1': s141 },
}
