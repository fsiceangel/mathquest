// Introduction to Geometry chapter 1 — variations for section 1.3 (Round and
// Round). All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was checked by hand against the definition it tests, and every
//    solution carries a genuinely independent second route: a doubling is
//    re-derived by walking the picture end to end, a longest-chord claim is
//    re-derived from the triangle inequality or from the chord formula
//    $2\sqrt{r^2 - d^2}$, an arc is re-derived by making the pieces of the
//    circle add to $360^\circ$, and a chord count is re-derived by the
//    $(n-1) + (n-2) + \dots + 1$ tally.
//  - Slot 7 stays "a central angle and its arc have the same measure" — no
//    subtraction ever appears there. Slot 9 is the semicircle slot, where
//    $180^\circ$ minus the given arc is the whole job.
//  - Every circle point is placed with cosine and sine on the stated radius,
//    rounded to two decimals, so each drawn angle matches its printed label.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS, and that mistake really does produce that choice.

const s13 = [
  // s1 — name the segment that runs from the center out to the circle.
  [
    {
      q: 'Point $D$ lies on the circle with center $Z$. What is the segment $\\overline{ZD}$ called?',
      choices: ['a radius', 'a chord', 'a diameter', 'an arc'],
      answer: 0,
      solution:
        'One endpoint of $\\overline{ZD}$ sits at the center and the other sits on the circle, and that is word for word the definition of a radius ✓. Check a second, independent way by testing the other three names against their own definitions instead: a chord needs BOTH endpoints on the circle, and the center $Z$ is not on the circle ✗; a diameter is a chord through the center, so it also needs both ends out on the circle and stretches twice as far ✗; an arc is a curved piece of the circle, not a straight segment at all ✗. Three names fail their own test, one passes. (The choice "a chord" is FORGETTING THAT THE CENTER IS NOT ON THE CIRCLE; "a diameter" is HEARING "THROUGH THE CENTER" AND STOPPING THERE, since a diameter runs all the way across and is two radii long; "an arc" is CONFUSING THE CURVE WITH THE SEGMENT.)',
    },
    {
      q: 'A radius of a circle is a segment that joins which two points?',
      choices: [
        'two points on the circle',
        'the center and a point on the circle',
        'two points inside the circle',
        'the center and a point outside the circle',
      ],
      answer: 1,
      solution:
        'A circle is the set of all points at one fixed distance from its center, and a radius is the segment that runs from the center out to one of those points ✓. Check a second, independent way by using length as a filter: every radius of a circle has to measure exactly $r$. A segment joining two points ON the circle can be long or short depending on where you park the endpoints ✗, a segment between two points INSIDE the circle can be made as tiny as you like ✗, and a segment from the center to a point OUTSIDE the circle measures more than $r$ ✗. Only the center-to-circle segment always measures exactly $r$ ✓. (The choice "two points on the circle" is DESCRIBING A CHORD INSTEAD; "two points inside the circle" is FORGETTING THAT A RADIUS MUST REACH THE CIRCLE; "the center and a point outside the circle" is OVERSHOOTING THE CIRCLE, which makes the segment too long.)',
    },
    {
      q: 'The segment $\\overline{OW}$ has one endpoint at the center $O$ of a circle and its other endpoint $W$ on the circle. Which statement about $\\overline{OW}$ is true?',
      choices: [
        'It is a chord, because both of its endpoints touch the circle',
        'It is a diameter, because one of its endpoints is the center',
        'It is an arc of the circle',
        'It is a radius, so its length is half the length of a diameter',
      ],
      answer: 3,
      solution:
        'Center to circle means radius ✓, and a diameter is two radii glued end to end, so a radius is half a diameter ✓. Check a second, independent way with a picture in your head: extend $\\overline{OW}$ straight past $O$ until it hits the circle again at a point $H$. Now $\\overline{HW}$ is a diameter built from the two equal pieces $\\overline{HO}$ and $\\overline{OW}$, so $OW$ is exactly half of $HW$ ✓ — and $\\overline{OW}$ by itself stops at the center, so it cannot be that diameter. (The first choice is FORGETTING THAT THE CENTER IS NOT ON THE CIRCLE, so only one endpoint of $\\overline{OW}$ touches the circle; the second is CALLING ANY SEGMENT THROUGH THE CENTER A DIAMETER, though a diameter must cross the center and continue to the far side; the third is CONFUSING THE CURVE WITH THE SEGMENT.)',
    },
  ],
  // s2 — radius to diameter: double it. Lanes 7 -> 14, 11 -> 22, 4.5 -> 9.
  [
    {
      q: 'A circle with center $Z$ has radius $7$, as shown. How long is a diameter of this circle?',
      fig: {
        view: [-8.5, -8.5, 8.5, 8.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 7 },
          { t: 'seg', a: [0, 0], b: [6.06, 3.5] },
          { t: 'label', p: [3.03, 1.75], text: '7', dx: 12, dy: 2 },
          { t: 'point', p: [0, 0], label: 'Z', dx: -12, dy: 10 },
          { t: 'point', p: [6.06, 3.5], label: 'D', dx: 10, dy: -8 },
        ],
      },
      choices: ['$3.5$', '$49$', '$14$', '$7$'],
      answer: 2,
      solution:
        'A diameter crosses the circle through the center, so it is two radii laid end to end: $2 \\times 7 = 14$ ✓. Check a second, independent way by walking the picture instead of multiplying: start at the point of the circle opposite $D$, travel $7$ units to arrive at $Z$, then travel another $7$ units to arrive at $D$; the whole trip is $7 + 7 = 14$ ✓. (The choice $7$ is COPYING THE RADIUS, handing back the number that was given; $3.5$ is HALVING INSTEAD OF DOUBLING; $49$ is SQUARING THE RADIUS, which is an area move, not a length move.)',
    },
    {
      q: 'In the circle shown, $O$ is the center, $H$ is on the circle, and $OH = 11$. What is the length of a diameter of this circle?',
      fig: {
        view: [-13, -13, 13, 13],
        elems: [
          { t: 'circle', c: [0, 0], r: 11 },
          { t: 'seg', a: [0, 0], b: [-9.53, 5.5] },
          { t: 'label', p: [-4.77, 2.75], text: '11', dx: 6, dy: -12 },
          { t: 'point', p: [0, 0], label: 'O', dx: 8, dy: 14 },
          { t: 'point', p: [-9.53, 5.5], label: 'H', dx: -14, dy: -6 },
        ],
      },
      choices: ['$11$', '$22$', '$5.5$', '$121$'],
      answer: 1,
      solution:
        '$\\overline{OH}$ runs from the center to the circle, so it is a radius and the radius is $11$. A diameter is twice that: $2 \\times 11 = 22$ ✓. Check a second, independent way by reversing the question: if the diameter were $22$, then half of it, the radius, would be $\\frac{22}{2} = 11$ ✓ — which is exactly the length the figure gives, so $22$ is consistent while none of the other choices is (halving $11$, $5.5$, or $121$ never returns $11$) ✗. (The choice $11$ is COPYING THE RADIUS; $5.5$ is HALVING INSTEAD OF DOUBLING; $121$ is SQUARING THE RADIUS.)',
    },
    {
      q: 'The radius of circle $Q$ measures $4.5$ centimeters. How many centimeters long is a diameter of circle $Q$?',
      fig: {
        view: [-5.5, -5.5, 5.5, 5.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 4.5 },
          { t: 'seg', a: [0, 0], b: [3.45, -2.89] },
          { t: 'label', p: [1.73, -1.45], text: '4.5', dx: 14, dy: 6 },
          { t: 'point', p: [0, 0], label: 'Q', dx: -12, dy: -6 },
          { t: 'point', p: [3.45, -2.89], label: 'S', dx: 10, dy: 12 },
        ],
      },
      choices: ['$4.5$', '$2.25$', '$20.25$', '$9$'],
      answer: 3,
      solution:
        'Double the radius: $2 \\times 4.5 = 9$ centimeters ✓. Check a second, independent way by splitting the diameter instead of building it: a diameter is cut by the center into two equal halves, so each half is $\\frac{9}{2} = 4.5$ ✓ — the radius the problem gave. A decimal changes nothing about the rule; doubling $4.5$ is the same as doubling $4$ and then adding $1$, which is $8 + 1 = 9$ ✓. (The choice $4.5$ is COPYING THE RADIUS; $2.25$ is HALVING INSTEAD OF DOUBLING; $20.25$ is SQUARING THE RADIUS, since $4.5 \\times 4.5 = 20.25$.)',
    },
  ],
  // s3 — read the figure and sort radii from chords.
  [
    {
      q: 'In the figure, $D$, $E$, and $G$ all lie on the circle with center $Z$. Which of the segments drawn is a chord?',
      fig: {
        view: [-5, -5, 5, 5],
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'seg', a: [-3.06, 2.57], b: [3.28, 2.29] },
          { t: 'seg', a: [0, 0], b: [3.76, -1.37] },
          { t: 'seg', a: [0, 0], b: [-3.06, 2.57], dash: true },
          { t: 'seg', a: [0, 0], b: [3.28, 2.29], dash: true },
          { t: 'point', p: [0, 0], label: 'Z', dx: -6, dy: 14 },
          { t: 'point', p: [-3.06, 2.57], label: 'D', dx: -14, dy: -6 },
          { t: 'point', p: [3.28, 2.29], label: 'E', dx: 12, dy: -8 },
          { t: 'point', p: [3.76, -1.37], label: 'G', dx: 12, dy: 8 },
        ],
      },
      choices: ['$\\overline{ZG}$', '$\\overline{ZD}$', '$\\overline{ZE}$', '$\\overline{DE}$'],
      answer: 3,
      solution:
        'A chord needs BOTH of its endpoints out on the circle. $\\overline{DE}$ qualifies, since $D$ and $E$ are both marked on the circle ✓. Check a second, independent way with the extending test: a chord already reaches the ring at both ends, so it cannot be stretched at either end without leaving the circle — try it on $\\overline{DE}$ and both ends are stuck ✓. Now try $\\overline{ZD}$: slide its $Z$ end straight backwards, away from $D$, and it travels through the inside and only meets the ring after another full radius, so $\\overline{ZD}$ is half of a chord rather than a whole one ✗, and the same happens with $\\overline{ZE}$ and $\\overline{ZG}$ ✗✗. (Each of $\\overline{ZG}$, $\\overline{ZD}$, and $\\overline{ZE}$ is COUNTING THE CENTER AS A POINT OF THE CIRCLE — a tempting mistake because the center is drawn as a dot just like $D$, $E$, and $G$, but the circle is only the ring.)',
    },
    {
      q: 'Points $K$, $T$, and $S$ lie on the circle with center $Q$, and the four segments shown are drawn. Which one is a radius?',
      fig: {
        view: [-4.5, -4.5, 4.5, 4.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3.5 },
          { t: 'seg', a: [-0.91, 3.38], b: [-3.29, -1.2] },
          { t: 'seg', a: [-3.29, -1.2], b: [3.03, -1.75] },
          { t: 'seg', a: [-0.91, 3.38], b: [3.03, -1.75] },
          { t: 'seg', a: [0, 0], b: [-3.29, -1.2], dash: true },
          { t: 'point', p: [0, 0], label: 'Q', dx: 10, dy: 10 },
          { t: 'point', p: [-0.91, 3.38], label: 'K', dx: -6, dy: -12 },
          { t: 'point', p: [-3.29, -1.2], label: 'T', dx: -14, dy: 4 },
          { t: 'point', p: [3.03, -1.75], label: 'S', dx: 12, dy: 10 },
        ],
      },
      choices: ['$\\overline{KS}$', '$\\overline{KT}$', '$\\overline{QT}$', '$\\overline{TS}$'],
      answer: 2,
      solution:
        'A radius runs from the center to a point on the circle. $\\overline{QT}$ starts at the center $Q$ and ends at $T$ on the circle ✓, so it is the radius. Check a second, independent way by eliminating with the chord rule instead: $\\overline{KS}$, $\\overline{KT}$, and $\\overline{TS}$ are the three sides of the triangle $KTS$, and each of them joins two of the points $K$, $T$, $S$ that sit on the ring — so all three are chords ✗✗✗. No chord can be a radius, because a radius must have an endpoint at the center and a chord has neither endpoint there. That leaves exactly one candidate standing ✓. (Each of $\\overline{KS}$, $\\overline{KT}$, and $\\overline{TS}$ is CALLING A CHORD A RADIUS — the giveaway is that a radius must touch the center, and none of those three does.)',
    },
    {
      q: 'In the circle with center $O$ below, the points $C$, $W$, and $N$ lie on the circle. Which of the segments drawn is NOT a chord?',
      fig: {
        view: [-5, -5, 5, 5],
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'seg', a: [-3.86, 1.04], b: [1.69, 3.63] },
          { t: 'seg', a: [1.69, 3.63], b: [2.29, -3.28] },
          { t: 'seg', a: [-3.86, 1.04], b: [2.29, -3.28] },
          { t: 'seg', a: [0, 0], b: [2.29, -3.28], dash: true },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: -4 },
          { t: 'point', p: [-3.86, 1.04], label: 'C', dx: -14, dy: -4 },
          { t: 'point', p: [1.69, 3.63], label: 'W', dx: 8, dy: -10 },
          { t: 'point', p: [2.29, -3.28], label: 'N', dx: 12, dy: 10 },
        ],
      },
      choices: ['$\\overline{ON}$', '$\\overline{CW}$', '$\\overline{WN}$', '$\\overline{CN}$'],
      answer: 0,
      solution:
        'Check the endpoints of each segment against the rule "a chord has both endpoints on the circle." $\\overline{CW}$, $\\overline{WN}$, and $\\overline{CN}$ each join two of the marked points $C$, $W$, $N$, all of which sit on the circle ✓✓✓ — those three are chords. $\\overline{ON}$ starts at the center, which is not a point of the circle ✗, so it is the odd one out; it is a radius. Check a second, independent way with the extending test: continue $\\overline{ON}$ from $N$ backwards through $O$ and keep going, and it meets the circle again on the far side. That whole long segment is a chord — a diameter, in fact — and $\\overline{ON}$ is only half of it ✓, which is exactly why $\\overline{ON}$ itself falls short of being a chord. (The choices $\\overline{CW}$, $\\overline{WN}$, and $\\overline{CN}$ all come from ANSWERING THE OPPOSITE QUESTION, picking a segment that IS a chord when the question asked which one is not.)',
    },
  ],
  // s4 — all radii of one circle are equal, by definition.
  [
    {
      q: 'Two students each draw a radius of the same circle, starting at the center and stopping at different points on the circle. How do the two radii compare?',
      choices: [
        'The one drawn first is longer',
        'They have exactly the same length',
        'They can differ by a lot, depending on the direction',
        'One of them is always twice the other',
      ],
      answer: 1,
      solution:
        'A circle is defined as all the points at ONE fixed distance from the center, so every point on it — whichever one a student picks — is that same distance away. The two radii have exactly the same length ✓. Check a second, independent way with a compass: a circle gets drawn by locking the compass open to one width and spinning it around the center. The width never changes during the spin, so every segment from the center to the pencil tip is the same ✓; if two radii could differ, the pencil would have wandered off the circle. (The first choice is INVENTING A RULE ABOUT DRAWING ORDER, which geometry never cares about; the third is TREATING A CIRCLE LIKE AN OVAL, where the distance across really does depend on direction; the fourth is CONFUSING A RADIUS WITH A DIAMETER, since it is the diameter that is twice a radius.)',
    },
    {
      q: 'In circle $Z$, the radii $\\overline{ZD}$ and $\\overline{ZK}$ are both drawn. If $ZD = 8$, what is $ZK$?',
      choices: ['$8$', '$16$', '$4$', 'It cannot be determined'],
      answer: 0,
      solution:
        'All radii of one circle have the same length, so $ZK = ZD = 8$ ✓. Check a second, independent way by working through the definition instead of quoting the rule: $D$ is on circle $Z$, so the fixed distance that defines this circle is $8$. $K$ is on the same circle, so $K$ is that same $8$ units from $Z$, which says $ZK = 8$ ✓. Nothing about where $K$ was placed on the ring can change that. (The choice $16$ is CONFUSING A RADIUS WITH A DIAMETER; $4$ is HALVING, as though $\\overline{ZD}$ had been the diameter; "It cannot be determined" is FORGETTING THAT EQUAL RADII ARE THE DEFINITION, treating the missing picture as missing information when the equal length is guaranteed.)',
    },
    {
      q: 'Which statement is true for every circle?',
      choices: [
        'Its radii come in exactly two different lengths',
        'Its longest radius is called a diameter',
        'All of its radii have the same length',
        'A radius is longer than a diameter',
      ],
      answer: 2,
      solution:
        'The definition of a circle fixes one distance from the center, so all of its radii share that length ✓. Check a second, independent way by hunting for a counterexample to each of the other three, which is all it takes to knock a claim out: two different lengths would mean two of the points are not the same distance from the center, so one of them is off the circle ✗; a diameter is not a radius at all, since it stretches from the ring right across to the ring, so calling it the longest radius names the wrong kind of segment ✗; and a diameter is two radii long, which makes it longer, not shorter ✗. (The first choice is IMAGINING AN OVAL, which does have a long direction and a short one; the second is CALLING A DIAMETER A RADIUS; the fourth is FLIPPING THE COMPARISON, remembering that the two are related but backwards.)',
    },
  ],
  // s5 — the longest chord is the diameter. Lanes 12 -> 24, 6.5 -> 13, 15 -> 30.
  [
    {
      q: 'A circle has radius $12$. What is the greatest possible length of a chord of this circle?',
      choices: ['$12$', '$6$', '$24$', '$144$'],
      answer: 2,
      solution:
        'The longest chord of any circle is a diameter, since a chord that misses the center cuts across a narrower part of the ring. A diameter is two radii: $2 \\times 12 = 24$ ✓. Check a second, independent way with the triangle inequality, which needs no picture at all: for a chord $\\overline{CD}$, the center $Z$ gives $CD \\le CZ + ZD = 12 + 12 = 24$, and the two sides are equal exactly when $Z$ lies on the chord — that is, when the chord is a diameter ✓. So $24$ is reachable and nothing beats it. (The choice $12$ is REPORTING THE RADIUS, stopping one doubling too early; $6$ is HALVING THE RADIUS; $144$ is SQUARING THE RADIUS, which measures area-ish things, not a length.)',
    },
    {
      q: 'A chord is drawn in a circle of radius $6.5$. At most how long can that chord be?',
      choices: ['$6.5$', '$13$', '$26$', '$3.25$'],
      answer: 1,
      solution:
        'A chord is longest when it passes through the center, which makes it a diameter: $2 \\times 6.5 = 13$ ✓. Check a second, independent way with the chord formula: a chord whose distance from the center is $d$ has length $2\\sqrt{r^2 - d^2}$. That expression is biggest when $d = 0$, and then it reads $2\\sqrt{6.5^2} = 2 \\times 6.5 = 13$ ✓ — pushing the chord away from the center only shrinks it. (The choice $6.5$ is REPORTING THE RADIUS; $26$ is DOUBLING TWICE, doubling the diameter as well as the radius; $3.25$ is HALVING THE RADIUS.)',
    },
    {
      q: 'What is the length of the longest chord that fits inside a circle whose radius is $15$?',
      choices: ['$15$', '$7.5$', '$45$', '$30$'],
      answer: 3,
      solution:
        'The longest chord is a diameter, and a diameter is twice the radius: $2 \\times 15 = 30$ ✓. Check a second, independent way by showing separately that $30$ can be reached and cannot be beaten: any diameter really does have length $30$, so $30$ is achievable ✓; and any two points on the circle are each $15$ from the center, so the distance between them is at most $15 + 15 = 30$ ✗ for anything longer. Reachable and unbeatable means $30$ is the maximum. (The choice $15$ is REPORTING THE RADIUS; $7.5$ is HALVING THE RADIUS; $45$ is TRIPLING INSTEAD OF DOUBLING, counting three radii across instead of two.)',
    },
  ],
  // s6 — compare the distance with the radius; the verdict moves around.
  [
    {
      q: 'A circle with center $Z$ has radius $10$. Point $D$ satisfies $ZD = 6$. Where is $D$?',
      choices: ['inside the circle', 'on the circle', 'outside the circle', 'at the center'],
      answer: 0,
      solution:
        'One comparison settles it: $ZD = 6$ and the radius is $10$, and $6 < 10$, so $D$ is inside the circle ✓. Check a second, independent way by walking outward from $Z$ along the ray through $D$: after $6$ units you arrive at $D$, and you still have $4$ more units to travel before you reach the ring at $10$ units out ✓ — so $D$ was passed while you were still in the interior. (The choice "on the circle" would need $ZD = 10$ exactly ✗; "outside the circle" would need $ZD > 10$ ✗ and reverses the comparison; "at the center" would need $ZD = 0$ ✗, and a distance of $6$ is not zero.)',
    },
    {
      q: 'Circle $Q$ has radius $13$, and point $W$ satisfies $QW = 20$. Where does $W$ lie?',
      choices: ['inside the circle', 'on the circle', 'at the center', 'outside the circle'],
      answer: 3,
      solution:
        'Compare the distance with the radius: $QW = 20$ and the radius is $13$, and $20 > 13$, so $W$ is outside the circle ✓. Check a second, independent way by measuring the overshoot: the ring sits $13$ units from $Q$ in every direction, so travelling $20$ units from $Q$ carries you $20 - 13 = 7$ units past the ring ✓ — a positive overshoot means outside, and no point of the circle is ever more than $13$ units from $Q$. (The choice "inside the circle" is REVERSING THE COMPARISON, reading $20 > 13$ as though the bigger number meant deeper in; "on the circle" would need $QW = 13$ exactly ✗; "at the center" would need $QW = 0$ ✗.)',
    },
    {
      q: 'A circle with center $O$ has radius $16$, and point $K$ is $16$ units from $O$. Where is $K$?',
      choices: ['inside the circle', 'on the circle', 'outside the circle', 'at the center'],
      answer: 1,
      solution:
        'The circle IS the collection of points whose distance from $O$ equals $16$. Since $OK = 16$ exactly, $K$ belongs to that collection: $K$ is on the circle ✓. Check a second, independent way by ruling out the alternatives with the same single comparison: inside would require $OK < 16$ ✗, outside would require $OK > 16$ ✗, and the center would require $OK = 0$ ✗. An equality can be neither less than nor greater than, so "on" is the only camp left ✓. (The choice "inside the circle" and the choice "outside the circle" both come from EXPECTING A STRICT COMPARISON, as if the distance had to be smaller or larger and could never land exactly on the radius; "at the center" is CONFUSING BEING MEASURED FROM $O$ WITH BEING AT $O$.)',
    },
  ],
  // s7 — a central angle and its arc share one measure. No subtraction here.
  [
    {
      q: 'In the circle with center $Z$ shown, the central angle $\\angle DZE$ measures $55^\\circ$. What is the measure of minor arc $DE$?',
      fig: {
        view: [-4.5, -4.5, 4.5, 4.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3.5 },
          { t: 'seg', a: [0, 0], b: [3.29, 1.2] },
          { t: 'seg', a: [0, 0], b: [0.91, 3.38] },
          { t: 'angle', at: [0, 0], from: [3.29, 1.2], to: [0.91, 3.38], r: 0.8, label: '55' },
          { t: 'point', p: [0, 0], label: 'Z', dx: -12, dy: 8 },
          { t: 'point', p: [3.29, 1.2], label: 'D', dx: 12, dy: -4 },
          { t: 'point', p: [0.91, 3.38], label: 'E', dx: 4, dy: -12 },
        ],
      },
      choices: ['$55^\\circ$', '$110^\\circ$', '$125^\\circ$', '$305^\\circ$'],
      answer: 0,
      solution:
        'An arc has the same measure as the central angle that opens it, so minor arc $DE$ measures $55^\\circ$ ✓ — the same as $\\angle DZE$, with nothing to double, halve, or subtract. Check a second, independent way by thinking of the turn: swing the ray $\\overrightarrow{ZD}$ around $Z$ until it lands on $\\overrightarrow{ZE}$. That swing turns through $55^\\circ$, and while it turns, the point $D$ slides along exactly minor arc $DE$ ✓, so the arc records the same $55^\\circ$ of turning. A third quick check: the major arc is then $360^\\circ - 55^\\circ = 305^\\circ$, and $55 + 305 = 360$ ✓, the whole circle. (The choice $110^\\circ$ is DOUBLING THE CENTRAL ANGLE, borrowing a rule that belongs to angles with their vertex ON the circle, not at the center; $125^\\circ$ is SUBTRACTING FROM $180^\\circ$; $305^\\circ$ is ANSWERING FOR THE MAJOR ARC, the long way around.)',
    },
    {
      q: 'In the circle with center $Q$ shown, minor arc $CH$ measures $130^\\circ$. What is the measure of the central angle $\\angle CQH$?',
      fig: {
        view: [-4.5, -4.5, 4.5, 4.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3.5 },
          { t: 'seg', a: [0, 0], b: [3.29, 1.2] },
          { t: 'seg', a: [0, 0], b: [-3.03, 1.75] },
          { t: 'angle', at: [0, 0], from: [3.29, 1.2], to: [-3.03, 1.75], r: 0.8 },
          { t: 'label', p: [0.36, 4.08], text: '130°', dx: 0, dy: 0 },
          { t: 'point', p: [0, 0], label: 'Q', dx: -6, dy: 14 },
          { t: 'point', p: [3.29, 1.2], label: 'C', dx: 12, dy: -4 },
          { t: 'point', p: [-3.03, 1.75], label: 'H', dx: -14, dy: -4 },
        ],
      },
      choices: ['$65^\\circ$', '$50^\\circ$', '$130^\\circ$', '$230^\\circ$'],
      answer: 2,
      solution:
        'The rule runs both directions: a central angle and the arc it cuts off have the same measure. The arc is $130^\\circ$, so $\\angle CQH = 130^\\circ$ ✓. Check a second, independent way by turning the ray: to carry $\\overrightarrow{QC}$ onto $\\overrightarrow{QH}$ across the short side you turn through the whole minor arc, and a full turn is $360^\\circ$ worth of arc, so $130^\\circ$ of arc is $130^\\circ$ of turning ✓. Consistency check: the major arc $CH$ is $360^\\circ - 130^\\circ = 230^\\circ$, and the two arcs add to the full $360^\\circ$ ✓. (The choice $65^\\circ$ is HALVING THE ARC, the rule for an angle whose vertex sits on the circle rather than at the center; $50^\\circ$ is SUBTRACTING FROM $180^\\circ$; $230^\\circ$ is ANSWERING FOR THE MAJOR ARC.)',
    },
    {
      q: 'Radii $\\overline{OM}$ and $\\overline{ON}$ form a central angle of $25^\\circ$ in the circle shown. How many degrees are in minor arc $MN$?',
      fig: {
        view: [-4.5, -4.5, 4.5, 4.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3.5 },
          { t: 'seg', a: [0, 0], b: [-0.31, 3.49] },
          { t: 'seg', a: [0, 0], b: [-1.75, 3.03] },
          { t: 'angle', at: [0, 0], from: [-0.31, 3.49], to: [-1.75, 3.03], r: 0.9, label: '25' },
          { t: 'point', p: [0, 0], label: 'O', dx: 10, dy: 12 },
          { t: 'point', p: [-0.31, 3.49], label: 'M', dx: 6, dy: -10 },
          { t: 'point', p: [-1.75, 3.03], label: 'N', dx: -12, dy: -8 },
        ],
      },
      choices: ['$50^\\circ$', '$155^\\circ$', '$335^\\circ$', '$25^\\circ$'],
      answer: 3,
      solution:
        'A central angle and its arc are two ways of recording the same amount of turning, so minor arc $MN$ measures $25^\\circ$ ✓, matching $\\angle MON$. Check a second, independent way with fractions of the circle: a $25^\\circ$ central angle takes up $\\frac{25}{360}$ of the full turn at $O$, and the arc it opens is that same $\\frac{25}{360}$ of the circle, which is $\\frac{25}{360} \\times 360^\\circ = 25^\\circ$ of arc ✓. Notice how small the marked wedge is in the picture — a slim wedge like that could not possibly open a $155^\\circ$ or $335^\\circ$ arc ✗✗. (The choice $50^\\circ$ is DOUBLING THE CENTRAL ANGLE; $155^\\circ$ is SUBTRACTING FROM $180^\\circ$; $335^\\circ$ is ANSWERING FOR THE MAJOR ARC.)',
    },
  ],
  // s8 — nothing beats the diameter. Lanes 34 / 36, 18 / 20, 42 / 45.
  [
    {
      q: 'A circle has diameter $34$. Which of these lengths is impossible for a chord of this circle?',
      choices: ['$9$', '$36$', '$17$', '$34$'],
      answer: 1,
      solution:
        'Chord lengths in this circle run from just above $0$ all the way up to the diameter, $34$, and no further. So $9$ ✓ and $17$ ✓ are easy chords, $34$ ✓ is a diameter itself, and $36 > 34$ ✗ is beyond the reach of any chord. Check a second, independent way with the triangle inequality: the radius is $\\frac{34}{2} = 17$, so for any chord $\\overline{CD}$ we get $CD \\le CO + OD = 17 + 17 = 34$ ✗ for anything bigger. That inequality closes the door on $36$ without ever drawing a picture. (The choice $9$ and the choice $17$ are ASSUMING A CHORD MUST BE LONG, though a chord near the edge can be as short as you like — and $17$ has the extra pull of being the radius, which is a perfectly legal chord length here; $34$ is FORGETTING THAT THE DIAMETER IS ITSELF A CHORD, so it counts as possible, not impossible.)',
    },
    {
      q: 'The diameter of circle $Z$ is $18$. Three of the lengths below are possible chord lengths for circle $Z$, and one is not. Which one is not?',
      choices: ['$4$', '$9$', '$20$', '$18$'],
      answer: 2,
      solution:
        'Every chord of circle $Z$ measures at most $18$, the diameter. That lets $4$ ✓, $9$ ✓, and $18$ ✓ through — the last one being a diameter — and stops $20$ ✗, which is longer than the widest the circle ever gets. Check a second, independent way by locating a chord for each surviving length with the formula $2\\sqrt{r^2 - d^2}$, where $r = 9$ and $d$ is the chord’s distance from the center: $d = 0$ gives $18$ ✓, $d \\approx 7.79$ gives $9$ ✓, and $d \\approx 8.77$ gives $4$ ✓, while no value of $d$ can push $2\\sqrt{81 - d^2}$ above $2 \\times 9 = 18$ ✗. (The choice $4$ and the choice $9$ are ASSUMING A CHORD MUST BE LONG, with $9$ also being the radius, which is a legal chord length; $18$ is FORGETTING THAT THE DIAMETER IS ITSELF A CHORD.)',
    },
    {
      q: 'A circle has diameter $42$. Which of these lengths is too long to be a chord of this circle?',
      choices: ['$45$', '$21$', '$42$', '$7$'],
      answer: 0,
      solution:
        'The diameter $42$ is the longest chord there is, so a chord may measure anything from just above $0$ up to $42$. That admits $7$ ✓, $21$ ✓, and $42$ ✓, and rejects $45 > 42$ ✗. Check a second, independent way by measuring from the center: every point of the circle is $\\frac{42}{2} = 21$ units from the center $O$, so two points $C$ and $D$ on the circle satisfy $CD \\le CO + OD = 21 + 21 = 42$ ✗ for anything longer — a chord of $45$ would need one of its endpoints to sit off the circle. (The choice $21$ and the choice $7$ are ASSUMING A CHORD MUST BE LONG, and $21$ is exactly the radius, which is a fine chord length; $42$ is FORGETTING THAT THE DIAMETER IS ITSELF A CHORD.)',
    },
  ],
  // s9 — a diameter makes a semicircle; subtract the given arc from 180.
  [
    {
      q: '$\\overline{DE}$ is a diameter of the circle with center $Z$, and $W$ is a point on the circle. If arc $DW$ measures $40^\\circ$, what is the measure of arc $WE$?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.9, -0.78], b: [2.9, 0.78] },
          { t: 'seg', a: [0, 0], b: [-2.72, 1.27] },
          { t: 'angle', at: [0, 0], from: [-2.72, 1.27], to: [-2.9, -0.78], r: 0.8, label: '40' },
          { t: 'point', p: [0, 0], label: 'Z', dx: 8, dy: 14 },
          { t: 'point', p: [-2.9, -0.78], label: 'D', dx: -14, dy: 6 },
          { t: 'point', p: [2.9, 0.78], label: 'E', dx: 12, dy: -2 },
          { t: 'point', p: [-2.72, 1.27], label: 'W', dx: -14, dy: -6 },
        ],
      },
      choices: ['$40^\\circ$', '$50^\\circ$', '$140^\\circ$', '$320^\\circ$'],
      answer: 2,
      solution:
        'A diameter cuts the circle into two semicircles of $180^\\circ$ each. Arc $DW$ and arc $WE$ together fill the semicircle on $W$’s side, so arc $WE = 180^\\circ - 40^\\circ = 140^\\circ$ ✓. Check a second, independent way by going the long way around the whole circle: the three pieces $DW$, $WE$, and the semicircle from $E$ back to $D$ on the far side of the diameter make up all $360^\\circ$, so arc $WE = 360^\\circ - 40^\\circ - 180^\\circ = 140^\\circ$ ✓ — a different subtraction from a different total, landing in the same place. (The choice $40^\\circ$ is COPYING THE GIVEN ARC; $320^\\circ$ is SUBTRACTING FROM $360^\\circ$ INSTEAD OF $180^\\circ$, which measures the arc from $W$ the long way round back to $D$; $50^\\circ$ is SUBTRACTING FROM $90^\\circ$, treating half of the semicircle as the whole of it.)',
    },
    {
      q: 'In the circle with center $O$, $\\overline{HK}$ is a diameter and $S$ lies on the circle with arc $HS = 65^\\circ$. Find the measure of arc $SK$.',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.95, 0.52], b: [2.95, -0.52] },
          { t: 'seg', a: [0, 0], b: [-0.78, 2.9] },
          { t: 'angle', at: [0, 0], from: [-0.78, 2.9], to: [-2.95, 0.52], r: 0.8, label: '65' },
          { t: 'point', p: [0, 0], label: 'O', dx: 6, dy: 14 },
          { t: 'point', p: [-2.95, 0.52], label: 'H', dx: -14, dy: 2 },
          { t: 'point', p: [2.95, -0.52], label: 'K', dx: 12, dy: 6 },
          { t: 'point', p: [-0.78, 2.9], label: 'S', dx: -6, dy: -12 },
        ],
      },
      choices: ['$65^\\circ$', '$25^\\circ$', '$295^\\circ$', '$115^\\circ$'],
      answer: 3,
      solution:
        'Because $\\overline{HK}$ is a diameter, the trip from $H$ to $K$ through $S$ is a semicircle: $180^\\circ$. Arc $HS$ eats $65^\\circ$ of it, leaving arc $SK = 180^\\circ - 65^\\circ = 115^\\circ$ ✓. Check a second, independent way through the central angles at $O$: $\\angle HOS = 65^\\circ$ matches its arc, and $\\angle HOK$ is a straight angle of $180^\\circ$ since $H$, $O$, $K$ line up along the diameter. The ray $\\overrightarrow{OS}$ splits that straight angle into two pieces, so $\\angle SOK = 180^\\circ - 65^\\circ = 115^\\circ$, and arc $SK$ copies its central angle: $115^\\circ$ ✓. (The choice $65^\\circ$ is COPYING THE GIVEN ARC; $295^\\circ$ is SUBTRACTING FROM $360^\\circ$ INSTEAD OF $180^\\circ$; $25^\\circ$ is SUBTRACTING FROM $90^\\circ$, as though the diameter made a right angle rather than a straight one.)',
    },
    {
      q: '$\\overline{MN}$ is a diameter of circle $Q$, and $T$ is on the circle. Arc $MT$ measures $100^\\circ$. How many degrees are in arc $TN$?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.99, -0.26], b: [2.99, 0.26] },
          { t: 'seg', a: [0, 0], b: [0.26, 2.99] },
          { t: 'angle', at: [0, 0], from: [0.26, 2.99], to: [-2.99, -0.26], r: 0.7, label: '100' },
          { t: 'point', p: [0, 0], label: 'Q', dx: 8, dy: 14 },
          { t: 'point', p: [-2.99, -0.26], label: 'M', dx: -14, dy: 4 },
          { t: 'point', p: [2.99, 0.26], label: 'N', dx: 12, dy: 4 },
          { t: 'point', p: [0.26, 2.99], label: 'T', dx: 4, dy: -12 },
        ],
      },
      choices: ['$100^\\circ$', '$80^\\circ$', '$40^\\circ$', '$260^\\circ$'],
      answer: 1,
      solution:
        'The diameter $\\overline{MN}$ splits the circle into two semicircles of $180^\\circ$. Arcs $MT$ and $TN$ together make the semicircle that contains $T$, so arc $TN = 180^\\circ - 100^\\circ = 80^\\circ$ ✓. Check a second, independent way by adding up the whole circle: the far semicircle from $N$ back to $M$ is another $180^\\circ$, so $100^\\circ + \\text{arc } TN + 180^\\circ = 360^\\circ$, giving arc $TN = 80^\\circ$ ✓. The picture agrees — $T$ sits closer to $N$ than to $M$, so the arc on the $N$ side should be the smaller of the two ✓. (The choice $100^\\circ$ is COPYING THE GIVEN ARC; $260^\\circ$ is SUBTRACTING FROM $360^\\circ$ INSTEAD OF $180^\\circ$; $40^\\circ$ is HALVING THE ANSWER, the move that belongs to an inscribed angle rather than to an arc.)',
    },
  ],
  // s10 — a chord is a pair of points. Lanes 6 -> 15, 11 -> 55, 9 -> 36.
  [
    {
      q: 'Six points $C$, $D$, $E$, $G$, $H$, and $K$ lie on a circle, as shown. How many different chords have both endpoints among these six points?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'point', p: [-0.52, 2.95], label: 'C', dx: -6, dy: -10 },
          { t: 'point', p: [-2.82, 1.03], label: 'D', dx: -14, dy: -4 },
          { t: 'point', p: [-2.3, -1.93], label: 'E', dx: -14, dy: 8 },
          { t: 'point', p: [0.52, -2.95], label: 'G', dx: 2, dy: 16 },
          { t: 'point', p: [2.82, -1.03], label: 'H', dx: 12, dy: 10 },
          { t: 'point', p: [2.3, 1.93], label: 'K', dx: 12, dy: -6 },
        ],
      },
      choices: ['$15$', '$30$', '$12$', '$6$'],
      answer: 0,
      solution:
        'A chord is nothing more than a pair of the marked points, so count pairs. Each of the $6$ points pairs with the $5$ others, giving $6 \\times 5 = 30$ — but $\\overline{CD}$ and $\\overline{DC}$ are the same chord, so every chord was counted twice, and the answer is $\\frac{30}{2} = 15$ ✓. Check a second, independent way by tallying without dividing at all: $C$ starts $5$ chords; $D$ starts $4$ that are new; then $E$ adds $3$, $G$ adds $2$, $H$ adds $1$, and $K$ adds none that are new. That is $5 + 4 + 3 + 2 + 1 = 15$ ✓. (The choice $30$ is FORGETTING TO DIVIDE BY $2$, counting each chord once from each end; $12$ is DOUBLING THE NUMBER OF POINTS; $6$ is COUNTING THE POINTS INSTEAD OF THE PAIRS, as though each point started exactly one chord.)',
    },
    {
      q: 'Eleven points are marked on a circle, as shown. How many different chords have both endpoints among these eleven points?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'point', p: [2.97, 0.42] },
          { t: 'point', p: [2.27, 1.96] },
          { t: 'point', p: [0.85, 2.88] },
          { t: 'point', p: [-0.84, 2.88] },
          { t: 'point', p: [-2.26, 1.97] },
          { t: 'point', p: [-2.97, 0.44] },
          { t: 'point', p: [-2.73, -1.24] },
          { t: 'point', p: [-1.63, -2.52] },
          { t: 'point', p: [-0.01, -3] },
          { t: 'point', p: [1.61, -2.53] },
          { t: 'point', p: [2.72, -1.25] },
        ],
      },
      choices: ['$11$', '$110$', '$22$', '$55$'],
      answer: 3,
      solution:
        'Each chord is a pair of the marked points. Each of the $11$ points can be joined to the $10$ others, which suggests $11 \\times 10 = 110$ — and then every chord has been counted twice, once from each endpoint, so the true count is $\\frac{110}{2} = 55$ ✓. Check a second, independent way by sweeping around the circle and counting only the NEW chords each point starts: $10 + 9 + 8 + \\dots + 1$. Pair that sum from the outside in — $10 + 1 = 11$, $9 + 2 = 11$, $8 + 3 = 11$, $7 + 4 = 11$, $6 + 5 = 11$ — five pairs of $11$, so the total is $5 \\times 11 = 55$ ✓. (The choice $110$ is FORGETTING TO DIVIDE BY $2$; $22$ is DOUBLING THE NUMBER OF POINTS; $11$ is COUNTING THE POINTS INSTEAD OF THE PAIRS.)',
    },
    {
      q: 'Nine points lie on a circle, labelled $C$, $D$, $E$, $G$, $H$, $K$, $M$, $N$, and $P$. How many different chords can be drawn using two of these nine points as endpoints?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'point', p: [-0.26, 2.99], label: 'C', dx: -4, dy: -10 },
          { t: 'point', p: [-2.12, 2.12], label: 'D', dx: -12, dy: -6 },
          { t: 'point', p: [-2.99, 0.26], label: 'E', dx: -14, dy: 2 },
          { t: 'point', p: [-2.46, -1.72], label: 'G', dx: -13, dy: 9 },
          { t: 'point', p: [-0.78, -2.9], label: 'H', dx: -7, dy: 15 },
          { t: 'point', p: [1.27, -2.72], label: 'K', dx: 7, dy: 15 },
          { t: 'point', p: [2.72, -1.27], label: 'M', dx: 13, dy: 9 },
          { t: 'point', p: [2.9, 0.78], label: 'N', dx: 13, dy: 0 },
          { t: 'point', p: [1.72, 2.46], label: 'P', dx: 10, dy: -8 },
        ],
      },
      choices: ['$72$', '$36$', '$18$', '$9$'],
      answer: 1,
      solution:
        'Counting chords means counting pairs of points. Each of the $9$ points joins to the $8$ others for $9 \\times 8 = 72$ endpoint-first choices, and each chord shows up twice in that list, so there are $\\frac{72}{2} = 36$ chords ✓. Check a second, independent way with a running tally that never double-counts: $C$ starts $8$ chords, $D$ starts $7$ new ones, then $6$, $5$, $4$, $3$, $2$, $1$, and $P$ adds nothing new. Adding, $8 + 7 = 15$, $15 + 6 = 21$, $21 + 5 = 26$, $26 + 4 = 30$, $30 + 3 = 33$, $33 + 2 = 35$, $35 + 1 = 36$ ✓. (The choice $72$ is FORGETTING TO DIVIDE BY $2$; $18$ is DOUBLING THE NUMBER OF POINTS; $9$ is COUNTING THE POINTS INSTEAD OF THE PAIRS.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 1,
  sections: {
    '1.3': s13,
  },
}
