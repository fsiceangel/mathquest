// Introduction to Geometry chapter 2 — variations for the CHALLENGE set.
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice by two genuinely different routes, and the
//    two routes had to agree before the key was written. The pairs used are:
//    part-sums vs. bearings measured from one fixed ray (slot 1); absolute hand
//    positions vs. the $5.5^\circ$-per-minute closing speed (slot 2); solving
//    the equation vs. the fact that a supplement always beats a complement by
//    exactly $90^\circ$ (slot 3); solving for the smaller angle vs. averaging
//    the linear pair to $90^\circ$ (slot 4); equating the alternate interior
//    angles vs. equating two expressions for the acute angle (slot 5); solving
//    for $\angle B$ vs. solving for $\angle C$ (slot 6); the angle sum vs. the
//    Exterior Angle Theorem (slots 7, 9, 12); the helper parallel through the
//    bend vs. the triangle cut off by extending the first leg (slot 8); the
//    angle sum vs. direction bearings (slot 10); solving for the angle vs.
//    solving for the reflex angle (slot 11).
//  - Every figure is coordinate-exact. Rays are placed with cosine and sine on
//    a radius-$3$ circle about the vertex, and the zigzag vertices are computed
//    from the tangent of each named angle, so every drawn angle agrees with its
//    label to better than $0.02^\circ$.
//  - Figure labels are plain text: bare numerals and the letters of the points.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this challenge set are: HALVING TWICE,
//    COPYING THE WHOLE ANGLE, DOUBLING INSTEAD OF HALVING, CLAIMING MORE
//    INFORMATION IS NEEDED, FORGETTING THE HOUR HAND’S CREEP, TAKING THE LONG
//    WAY AROUND, ROUNDING THE HOUR HAND UP TO THE NEXT MARK, MOVING THE HOUR
//    HAND ONE DEGREE PER MINUTE, ANSWERING WITH THE SUPPLEMENT, ANSWERING WITH
//    THE COMPLEMENT, DIVIDING THE STRAIGHT ANGLE BY THE MULTIPLIER, MULTIPLYING
//    THE ANGLE INSTEAD OF ITS COMPLEMENT, ANSWERING WITH THE SMALLER ANGLE,
//    STOPPING AT TWICE THE SMALLER ANGLE, SPLITTING 90 INSTEAD OF 180, STOPPING
//    AT THE OBTUSE ANGLE, ANSWERING WITH x, HALVING THE OBTUSE ANGLE, ANSWERING
//    WITH THE SMALLEST ANGLE, ANSWERING WITH THE MIDDLE ANGLE, FORGETTING THE
//    OFFSET, SUBTRACTING THE OFFSET INSTEAD OF ADDING, ANSWERING WITH THE
//    INTERIOR ANGLE, ANSWERING WITH THE EXTERIOR ANGLE, DIVIDING 180 BY THE
//    MULTIPLIER, COPYING THE ANGLE AT THE START, ADDING INSTEAD OF SUBTRACTING,
//    TAKING THE SUPPLEMENT OF THE BEND, TAKING THE SUPPLEMENT OF THE FIRST
//    ANGLE, ANSWERING WITH THE EXTERIOR ANGLE AT THE THIRD VERTEX, ANSWERING
//    FOR THE WRONG VERTEX, COPYING THE TRANSVERSAL’S ANGLE, SUBTRACTING FROM
//    180 INSTEAD OF 90, ANSWERING WITH THE OBTUSE ANGLE, DIVIDING 360 BY THE
//    MULTIPLIER, ANSWERING WITH THE REFLEX ANGLE, USING 180 INSTEAD OF 360,
//    DIVIDING BY ONE LESS THAN THE MULTIPLIER, COPYING THE GIVEN ANGLE, and
//    ANSWERING WITH THE RIGHT ANGLE AT THE THIRD VERTEX.
//  - No two choices inside an item name the same value, and no two variations
//    that share a slot position across the chapter carry the same answer.

const challenge = [
  // slot 1 — two bisectors inside a given angle. Lane: 63 / 77 / 49.
  [
    {
      q: 'Ray $\\overrightarrow{OC}$ lies inside $\\angle AOB = 126^\\circ$. Ray $\\overrightarrow{OM}$ bisects $\\angle AOC$ and ray $\\overrightarrow{ON}$ bisects $\\angle COB$. What is $\\angle MON$?',
      fig: {
        view: [-2.4, -0.8, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.427, 1.763] },
          { t: 'seg', a: [0, 0], b: [-1.763, 2.427] },
          { t: 'seg', a: [0, 0], b: [2.853, 0.927], dash: true },
          { t: 'seg', a: [0, 0], b: [0.469, 2.963], dash: true },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 10 },
          { t: 'point', p: [3, 0], label: 'A', dx: 10, dy: 0 },
          { t: 'point', p: [2.427, 1.763], label: 'C', dx: 10, dy: -4 },
          { t: 'point', p: [-1.763, 2.427], label: 'B', dx: -10, dy: -6 },
          { t: 'point', p: [2.853, 0.927], label: 'M', dx: 12, dy: 6 },
          { t: 'point', p: [0.469, 2.963], label: 'N', dx: -2, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-1.763, 2.427], r: 0.5, label: '126' },
          { t: 'angle', at: [0, 0], from: [2.853, 0.927], to: [0.469, 2.963], r: 1.0, label: '?' },
        ],
      },
      choices: ['$63^\\circ$', '$126^\\circ$', '$31.5^\\circ$', 'It cannot be found without knowing $\\angle AOC$'],
      answer: 0,
      solution:
        'Name the two halves. Let $\\angle AOC = 2a$ and $\\angle COB = 2b$, so that $2a + 2b = 126^\\circ$. The bisector $\\overrightarrow{OM}$ gives $\\angle MOC = a$ and the bisector $\\overrightarrow{ON}$ gives $\\angle CON = b$, and those two pieces sit side by side with $\\overrightarrow{OC}$ between them, so $\\angle MON = a + b = \\frac{126^\\circ}{2} = 63^\\circ$ ✓. Check a second, independent way by giving every ray a bearing measured from $\\overrightarrow{OA}$ instead of adding pieces. Say $\\overrightarrow{OC}$ has bearing $c$; then $\\overrightarrow{OB}$ has bearing $126^\\circ$, $\\overrightarrow{OM}$ sits halfway between $0^\\circ$ and $c$ at bearing $\\frac{c}{2}$, and $\\overrightarrow{ON}$ sits halfway between $c$ and $126^\\circ$ at bearing $\\frac{c + 126^\\circ}{2}$. Subtracting bearings gives $\\angle MON = \\frac{c + 126^\\circ}{2} - \\frac{c}{2} = 63^\\circ$ ✓, and the $c$ cancels — the drawing shows one particular $\\overrightarrow{OC}$, but every position gives the same answer. (The choice $126^\\circ$ is COPYING THE WHOLE ANGLE, which the two bisectors have already cut down; the choice $31.5^\\circ$ is HALVING TWICE, once for each bisector, when the two halves are on opposite sides of $\\overrightarrow{OC}$ and rebuild a full half; the last choice is CLAIMING MORE INFORMATION IS NEEDED, and the bearing argument is exactly the proof that it is not.)',
    },
    {
      q: 'Inside $\\angle AOB$, which measures $154^\\circ$, a ray $\\overrightarrow{OC}$ is drawn. Ray $\\overrightarrow{OM}$ bisects $\\angle AOC$, and ray $\\overrightarrow{ON}$ bisects $\\angle COB$. Find $\\angle MON$.',
      fig: {
        view: [-3.4, -0.8, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.158, 2.084] },
          { t: 'seg', a: [0, 0], b: [-2.696, 1.315] },
          { t: 'seg', a: [0, 0], b: [2.782, 1.124], dash: true },
          { t: 'seg', a: [0, 0], b: [-0.469, 2.963], dash: true },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 12 },
          { t: 'point', p: [3, 0], label: 'A', dx: 10, dy: 0 },
          { t: 'point', p: [2.158, 2.084], label: 'C', dx: 10, dy: -4 },
          { t: 'point', p: [-2.696, 1.315], label: 'B', dx: -10, dy: -4 },
          { t: 'point', p: [2.782, 1.124], label: 'M', dx: 12, dy: 8 },
          { t: 'point', p: [-0.469, 2.963], label: 'N', dx: -6, dy: -8 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-2.696, 1.315], r: 0.5, label: '154' },
          { t: 'angle', at: [0, 0], from: [2.782, 1.124], to: [-0.469, 2.963], r: 1.0, label: '?' },
        ],
      },
      choices: ['$154^\\circ$', '$38.5^\\circ$', '$308^\\circ$', '$77^\\circ$'],
      answer: 3,
      solution:
        'Write the two pieces of $\\angle AOB$ as $\\angle AOC = 2a$ and $\\angle COB = 2b$, so $2a + 2b = 154^\\circ$. Each bisector keeps the half of its piece that touches $\\overrightarrow{OC}$: $\\angle MOC = a$ and $\\angle CON = b$. Those two halves are adjacent, so $\\angle MON = a + b$, and doubling that gives $154^\\circ$, so $\\angle MON = 77^\\circ$ ✓. Check a second, independent way with bearings measured from $\\overrightarrow{OA}$. Put $\\overrightarrow{OC}$ at bearing $c$, so $\\overrightarrow{OM}$ is at $\\frac{c}{2}$ and $\\overrightarrow{ON}$ is at $\\frac{c + 154^\\circ}{2}$, and the gap between the two bisectors is $\\frac{c + 154^\\circ}{2} - \\frac{c}{2} = 77^\\circ$ ✓ — no matter where $\\overrightarrow{OC}$ points. Sanity check against the picture: $77^\\circ$ is a little less than a right angle, and the two dashed rays do open a little less than a square corner ✓. (The choice $154^\\circ$ is COPYING THE WHOLE ANGLE; the choice $38.5^\\circ$ is HALVING TWICE, treating the second bisector as though it cut the answer again; the choice $308^\\circ$ is DOUBLING INSTEAD OF HALVING, and no angle drawn between two rays inside a $154^\\circ$ opening can be larger than $154^\\circ$.)',
    },
    {
      q: 'A ray $\\overrightarrow{OC}$ is drawn in the interior of $\\angle AOB$, and $\\angle AOB = 98^\\circ$. If $\\overrightarrow{OM}$ bisects $\\angle AOC$ and $\\overrightarrow{ON}$ bisects $\\angle COB$, what is $\\angle MON$?',
      fig: {
        view: [-1.4, -0.8, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.696, 1.315] },
          { t: 'seg', a: [0, 0], b: [-0.418, 2.971] },
          { t: 'seg', a: [0, 0], b: [2.923, 0.675], dash: true },
          { t: 'seg', a: [0, 0], b: [1.408, 2.649], dash: true },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 12 },
          { t: 'point', p: [3, 0], label: 'A', dx: 10, dy: 0 },
          { t: 'point', p: [2.696, 1.315], label: 'C', dx: 12, dy: -2 },
          { t: 'point', p: [-0.418, 2.971], label: 'B', dx: -10, dy: -6 },
          { t: 'point', p: [2.923, 0.675], label: 'M', dx: 12, dy: 8 },
          { t: 'point', p: [1.408, 2.649], label: 'N', dx: 8, dy: -8 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-0.418, 2.971], r: 0.5, label: '98' },
          { t: 'angle', at: [0, 0], from: [2.923, 0.675], to: [1.408, 2.649], r: 1.15, label: '?' },
        ],
      },
      choices: ['$98^\\circ$', '$49^\\circ$', '$24.5^\\circ$', 'It cannot be found unless $\\angle COB$ is given'],
      answer: 1,
      solution:
        'Call the pieces $\\angle AOC = 2a$ and $\\angle COB = 2b$; together they make the whole, so $2a + 2b = 98^\\circ$ and therefore $a + b = 49^\\circ$. The bisectors put $\\overrightarrow{OM}$ at $a$ from $\\overrightarrow{OC}$ on one side and $\\overrightarrow{ON}$ at $b$ from $\\overrightarrow{OC}$ on the other, so $\\angle MON = a + b = 49^\\circ$ ✓ — exactly half of $\\angle AOB$. Check a second, independent way using bearings from $\\overrightarrow{OA}$: with $\\overrightarrow{OC}$ at bearing $c$, the bisectors sit at $\\frac{c}{2}$ and $\\frac{c + 98^\\circ}{2}$, and subtracting leaves $49^\\circ$ ✓ with the $c$ gone. That vanishing $c$ is the whole point: slide $\\overrightarrow{OC}$ anywhere inside the angle and both dashed rays swing, but the gap between them never budges. (The choice $98^\\circ$ is COPYING THE WHOLE ANGLE; the choice $24.5^\\circ$ is HALVING TWICE; the last choice is CLAIMING MORE INFORMATION IS NEEDED, which the cancelling $c$ disproves.)',
    },
  ],
  // slot 2 — angle between the clock hands. Lane: 140 / 95 / 162.5.
  [
    {
      q: 'What is the angle between the hands of a clock at 11:20?',
      choices: ['$150^\\circ$', '$220^\\circ$', '$140^\\circ$', '$120^\\circ$'],
      answer: 2,
      solution:
        'Measure both hands clockwise from the 12. The minute hand moves $6^\\circ$ per minute, so at $20$ minutes past it stands at $20 \\times 6^\\circ = 120^\\circ$. The hour hand starts the hour at $11 \\times 30^\\circ = 330^\\circ$ and creeps $0.5^\\circ$ per minute, adding $20 \\times 0.5^\\circ = 10^\\circ$, so it stands at $340^\\circ$. The gap one way round is $340^\\circ - 120^\\circ = 220^\\circ$, and the angle between the hands is the shorter way: $360^\\circ - 220^\\circ = 140^\\circ$ ✓. Check a second, independent way by racing the hands instead of placing them. At 11:00 sharp the hour hand leads the minute hand by $330^\\circ$ going clockwise. The minute hand gains on the hour hand at $6^\\circ - 0.5^\\circ = 5.5^\\circ$ per minute, so after $20$ minutes the lead has shrunk to $330^\\circ - 20 \\times 5.5^\\circ = 330^\\circ - 110^\\circ = 220^\\circ$ ✓, and the short way round is again $140^\\circ$ ✓ — no hand positions were computed at all. (The choice $150^\\circ$ is FORGETTING THE HOUR HAND’S CREEP, leaving it parked on the 11; the choice $220^\\circ$ is TAKING THE LONG WAY AROUND, and the angle between two hands is never more than $180^\\circ$; the choice $120^\\circ$ is ROUNDING THE HOUR HAND UP TO THE NEXT MARK, sliding it all the way to the 12.)',
    },
    {
      q: 'What is the angle between the hands of a clock at 6:50?',
      choices: ['$120^\\circ$', '$95^\\circ$', '$265^\\circ$', '$90^\\circ$'],
      answer: 1,
      solution:
        'Place each hand clockwise from the 12. Minute hand: $50 \\times 6^\\circ = 300^\\circ$. Hour hand: $6 \\times 30^\\circ = 180^\\circ$ at the top of the hour, plus $50 \\times 0.5^\\circ = 25^\\circ$ of creep, giving $205^\\circ$. The hands are $300^\\circ - 205^\\circ = 95^\\circ$ apart, and since $95^\\circ$ is already under $180^\\circ$ that is the answer ✓. Check a second, independent way with the closing speed. At 6:00 the hour hand leads by $180^\\circ$; the minute hand closes the gap at $5.5^\\circ$ per minute, so after $50$ minutes it has closed $50 \\times 5.5^\\circ = 275^\\circ$ — more than the whole lead. The minute hand has passed the hour hand and is now $275^\\circ - 180^\\circ = 95^\\circ$ ahead of it ✓. The two routes agree, and the picture agrees too: at 6:50 the minute hand is at the 10 while the hour hand has almost reached the 7, a gap of a bit more than three hour marks ✓. (The choice $120^\\circ$ is FORGETTING THE HOUR HAND’S CREEP, which is a whole $25^\\circ$ at $50$ minutes past; the choice $265^\\circ$ is TAKING THE LONG WAY AROUND; the choice $90^\\circ$ is ROUNDING THE HOUR HAND UP TO THE NEXT MARK, parking it exactly on the 7.)',
    },
    {
      q: 'What is the angle between the hands of a clock at 10:25?',
      choices: ['$150^\\circ$', '$197.5^\\circ$', '$175^\\circ$', '$162.5^\\circ$'],
      answer: 3,
      solution:
        'Measure clockwise from the 12. Minute hand: $25 \\times 6^\\circ = 150^\\circ$. Hour hand: $10 \\times 30^\\circ = 300^\\circ$ plus $25 \\times 0.5^\\circ = 12.5^\\circ$ of creep, landing on $312.5^\\circ$. The gap is $312.5^\\circ - 150^\\circ = 162.5^\\circ$, which is already less than $180^\\circ$, so that is the angle ✓. Check a second, independent way by chasing. At 10:00 the hour hand leads the minute hand by $300^\\circ$ clockwise, and the minute hand eats into that lead at $5.5^\\circ$ per minute. After $25$ minutes the lead is $300^\\circ - 25 \\times 5.5^\\circ = 300^\\circ - 137.5^\\circ = 162.5^\\circ$ ✓ — the same number, reached without locating either hand. The half degree is real: the hour hand is halfway between two whole degree marks at $25$ minutes past ✓. (The choice $150^\\circ$ is FORGETTING THE HOUR HAND’S CREEP; the choice $197.5^\\circ$ is TAKING THE LONG WAY AROUND, which is what you get from $360^\\circ - 162.5^\\circ$; the choice $175^\\circ$ is MOVING THE HOUR HAND ONE DEGREE PER MINUTE instead of half a degree.)',
    },
  ],
  // slot 3 — the supplement is k times the complement. Lane: 45 / 72 / 75.
  [
    {
      q: 'The supplement of an angle is $3$ times its complement. What is the angle?',
      choices: ['$135^\\circ$', '$60^\\circ$', '$22.5^\\circ$', '$45^\\circ$'],
      answer: 3,
      solution:
        'Let the angle be $x$. Its supplement is $180^\\circ - x$ and its complement is $90^\\circ - x$, so the condition reads $180^\\circ - x = 3(90^\\circ - x)$. Expanding the right side gives $180^\\circ - x = 270^\\circ - 3x$, so $2x = 90^\\circ$ and $x = 45^\\circ$ ✓. Check: the supplement is $135^\\circ$, the complement is $45^\\circ$, and $135 = 3 \\times 45$ ✓. Check a second, independent way without ever writing that equation. For any angle, the supplement beats the complement by exactly $(180^\\circ - x) - (90^\\circ - x) = 90^\\circ$ — the $x$ drops out, so the gap is always $90^\\circ$. Here the supplement is $3$ times the complement, so the gap is $3$ complements minus $1$ complement, that is $2$ complements. Two complements make $90^\\circ$, so the complement is $45^\\circ$, and the angle is $90^\\circ - 45^\\circ = 45^\\circ$ ✓. (The choice $135^\\circ$ is ANSWERING WITH THE SUPPLEMENT instead of the angle; the choice $60^\\circ$ is DIVIDING THE STRAIGHT ANGLE BY THE MULTIPLIER, $\\frac{180^\\circ}{3}$, which uses the $3$ in the wrong place entirely; the choice $22.5^\\circ$ is MULTIPLYING THE ANGLE INSTEAD OF ITS COMPLEMENT, solving $180^\\circ - x = 3x$.)',
    },
    {
      q: 'An angle has the property that its supplement is $5$ times its complement. Find the angle.',
      choices: ['$67.5^\\circ$', '$112.5^\\circ$', '$22.5^\\circ$', '$36^\\circ$'],
      answer: 0,
      solution:
        'Let the angle be $x$, so the statement is $180^\\circ - x = 5(90^\\circ - x)$. Expand: $180^\\circ - x = 450^\\circ - 5x$, so $4x = 270^\\circ$ and $x = 67.5^\\circ$ ✓. Check: the supplement is $112.5^\\circ$, the complement is $22.5^\\circ$, and $5 \\times 22.5 = 112.5$ ✓. Check a second, independent way using the fixed gap. Whatever the angle, its supplement exceeds its complement by $90^\\circ$, since $(180^\\circ - x) - (90^\\circ - x) = 90^\\circ$. If the supplement is $5$ complements and the gap is $4$ complements, then $4$ complements make $90^\\circ$, so one complement is $22.5^\\circ$ and the angle is $90^\\circ - 22.5^\\circ = 67.5^\\circ$ ✓. Notice how the two routes use the $5$ differently — one puts it inside an equation, the other counts complements — and they still land together. The half degree is not a slip: $270$ does not divide evenly by $4$, and nothing in the problem promised a whole number. (The choice $112.5^\\circ$ is ANSWERING WITH THE SUPPLEMENT; the choice $22.5^\\circ$ is ANSWERING WITH THE COMPLEMENT, a real step of the work but not the question; the choice $36^\\circ$ is DIVIDING THE STRAIGHT ANGLE BY THE MULTIPLIER, $\\frac{180^\\circ}{5}$.)',
    },
    {
      q: 'The supplement of a certain angle is $7$ times the complement of that same angle. How big is the angle?',
      choices: ['$105^\\circ$', '$15^\\circ$', '$75^\\circ$', '$22.5^\\circ$'],
      answer: 2,
      solution:
        'Let the angle be $x$. Then $180^\\circ - x = 7(90^\\circ - x)$, which expands to $180^\\circ - x = 630^\\circ - 7x$, so $6x = 450^\\circ$ and $x = 75^\\circ$ ✓. Check: supplement $105^\\circ$, complement $15^\\circ$, and $7 \\times 15 = 105$ ✓. Check a second, independent way by counting complements. The supplement always sits exactly $90^\\circ$ above the complement, because $(180^\\circ - x) - (90^\\circ - x) = 90^\\circ$ for every $x$. Being $7$ times as large means the gap is $6$ complements, so $6$ complements make $90^\\circ$, one complement is $15^\\circ$, and the angle is $90^\\circ - 15^\\circ = 75^\\circ$ ✓. A quick reasonableness check: a big multiplier forces a small complement, so the angle has to be close to $90^\\circ$ — and $75^\\circ$ is ✓. (The choice $105^\\circ$ is ANSWERING WITH THE SUPPLEMENT; the choice $15^\\circ$ is ANSWERING WITH THE COMPLEMENT; the choice $22.5^\\circ$ is MULTIPLYING THE ANGLE INSTEAD OF ITS COMPLEMENT, solving $180^\\circ - x = 7x$.)',
    },
  ],
  // slot 4 — linear pair with a stated difference; the LARGER angle. Lane: 111 / 122 / 108.
  [
    {
      q: 'Two lines intersect, and one of the angles formed is $42^\\circ$ larger than its linear-pair neighbor. What is the larger angle?',
      choices: ['$69^\\circ$', '$111^\\circ$', '$138^\\circ$', '$66^\\circ$'],
      answer: 1,
      solution:
        'A linear pair adds to $180^\\circ$. Call the smaller angle $x$; the larger is $x + 42^\\circ$, so $x + (x + 42^\\circ) = 180^\\circ$, giving $2x = 138^\\circ$ and $x = 69^\\circ$. The larger angle is $69^\\circ + 42^\\circ = 111^\\circ$ ✓. Check: $69^\\circ + 111^\\circ = 180^\\circ$ ✓. Check a second, independent way by averaging instead of solving. Two numbers that add to $180^\\circ$ have an average of $90^\\circ$, and two numbers $42^\\circ$ apart sit half of $42^\\circ$ — that is $21^\\circ$ — on either side of their average. So the pair is $90^\\circ - 21^\\circ = 69^\\circ$ and $90^\\circ + 21^\\circ = 111^\\circ$, and the larger is $111^\\circ$ ✓. No equation was solved on that route, and it explains the shape of the answer: the larger angle of any linear pair is always $90^\\circ$ plus half the difference. (The choice $69^\\circ$ is ANSWERING WITH THE SMALLER ANGLE; the choice $138^\\circ$ is STOPPING AT TWICE THE SMALLER ANGLE, the value of $2x$; the choice $66^\\circ$ is SPLITTING 90 INSTEAD OF 180, treating the neighbors as complementary.)',
    },
    {
      q: 'Two lines cross. One of the four angles is $64^\\circ$ bigger than the angle beside it on the same line. How large is the bigger of those two angles?',
      choices: ['$58^\\circ$', '$116^\\circ$', '$122^\\circ$', '$77^\\circ$'],
      answer: 2,
      solution:
        'Angles beside each other on a line form a linear pair and add to $180^\\circ$. Let the smaller be $x$, so the bigger is $x + 64^\\circ$ and $x + (x + 64^\\circ) = 180^\\circ$. Then $2x = 116^\\circ$, $x = 58^\\circ$, and the bigger angle is $58^\\circ + 64^\\circ = 122^\\circ$ ✓. Check: $58^\\circ + 122^\\circ = 180^\\circ$ ✓. Check a second, independent way with the balance point. The two angles average $\\frac{180^\\circ}{2} = 90^\\circ$, and they lie half the difference from that average, which is $\\frac{64^\\circ}{2} = 32^\\circ$ on each side. That puts them at $90^\\circ - 32^\\circ = 58^\\circ$ and $90^\\circ + 32^\\circ = 122^\\circ$ ✓. Either way the bigger one is obtuse, which the words already promised: if one angle of a linear pair beats the other, it must clear $90^\\circ$ ✓. (The choice $58^\\circ$ is ANSWERING WITH THE SMALLER ANGLE; the choice $116^\\circ$ is STOPPING AT TWICE THE SMALLER ANGLE; the choice $77^\\circ$ is SPLITTING 90 INSTEAD OF 180, which even fails the obtuse test.)',
    },
    {
      q: 'When two lines meet, one of the angles at the crossing exceeds its linear-pair partner by $36^\\circ$. What is the measure of the LARGER angle?',
      choices: ['$108^\\circ$', '$72^\\circ$', '$144^\\circ$', '$63^\\circ$'],
      answer: 0,
      solution:
        'Linear-pair partners add to $180^\\circ$. Writing the smaller one as $x$ makes the larger $x + 36^\\circ$, and $x + (x + 36^\\circ) = 180^\\circ$ gives $2x = 144^\\circ$, so $x = 72^\\circ$ and the larger angle is $72^\\circ + 36^\\circ = 108^\\circ$ ✓. Check: $72^\\circ + 108^\\circ = 180^\\circ$, and $108 - 72 = 36$ ✓ — both conditions hold. Check a second, independent way by starting from the middle. Any two angles adding to $180^\\circ$ straddle $90^\\circ$ evenly, so a difference of $36^\\circ$ means each sits $18^\\circ$ from $90^\\circ$: the pair is $72^\\circ$ and $108^\\circ$, larger $108^\\circ$ ✓. That route never names $x$ at all, which is what makes it a real check rather than the same arithmetic in a new coat. (The choice $72^\\circ$ is ANSWERING WITH THE SMALLER ANGLE; the choice $144^\\circ$ is STOPPING AT TWICE THE SMALLER ANGLE; the choice $63^\\circ$ is SPLITTING 90 INSTEAD OF 180.)',
    },
  ],
  // slot 5 — alternate interior angles as expressions; the ACUTE angle. Lane: 80 / 70 / 40.
  [
    {
      q: 'A transversal cuts two parallel lines, making alternate interior angles of $3x - 20^\\circ$ and $2x + 20^\\circ$. What is the measure of the ACUTE angles in the figure?',
      choices: ['$100^\\circ$', '$40^\\circ$', '$50^\\circ$', '$80^\\circ$'],
      answer: 3,
      solution:
        'Alternate interior angles across a transversal of two parallel lines are equal, so $3x - 20^\\circ = 2x + 20^\\circ$, which gives $x = 40^\\circ$. Each of those angles is then $3(40^\\circ) - 20^\\circ = 100^\\circ$, and checking the other expression, $2(40^\\circ) + 20^\\circ = 100^\\circ$ ✓. A transversal across parallel lines produces only two different sizes of angle, and they are supplementary, so the acute ones measure $180^\\circ - 100^\\circ = 80^\\circ$ ✓. Check a second, independent way by making the acute angle the unknown from the start. Let the acute angle be $y$. At the upper crossing it is the linear-pair partner of $3x - 20^\\circ$, so $y = 180^\\circ - (3x - 20^\\circ) = 200^\\circ - 3x$; at the lower crossing it is the partner of $2x + 20^\\circ$, so $y = 180^\\circ - (2x + 20^\\circ) = 160^\\circ - 2x$. Setting the two expressions for the same $y$ equal gives $200^\\circ - 3x = 160^\\circ - 2x$, so $x = 40^\\circ$ and $y = 200^\\circ - 120^\\circ = 80^\\circ$ ✓ — a different equation, the same answer. (The choice $100^\\circ$ is STOPPING AT THE OBTUSE ANGLE, which is what the expressions describe; the choice $40^\\circ$ is ANSWERING WITH x, a step of the work rather than an angle in the figure; the choice $50^\\circ$ is HALVING THE OBTUSE ANGLE, as though a transversal bisected something.)',
    },
    {
      q: 'Two parallel lines are crossed by a transversal. One pair of alternate interior angles is labelled $3x + 20^\\circ$ and $2x + 50^\\circ$. What is the measure of the ACUTE angles at the two crossings?',
      choices: ['$110^\\circ$', '$30^\\circ$', '$70^\\circ$', '$55^\\circ$'],
      answer: 2,
      solution:
        'Alternate interior angles are equal when the lines are parallel, so $3x + 20^\\circ = 2x + 50^\\circ$ and $x = 30^\\circ$. Both labelled angles are then $3(30^\\circ) + 20^\\circ = 110^\\circ$, confirmed by $2(30^\\circ) + 50^\\circ = 110^\\circ$ ✓. Since every angle in such a figure is either $110^\\circ$ or its supplement, the acute ones measure $180^\\circ - 110^\\circ = 70^\\circ$ ✓. Check a second, independent way by solving for the acute angle directly. Call it $y$. It forms a linear pair with $3x + 20^\\circ$ at one crossing, so $y = 160^\\circ - 3x$, and a linear pair with $2x + 50^\\circ$ at the other, so $y = 130^\\circ - 2x$. Equating gives $160^\\circ - 3x = 130^\\circ - 2x$, so $x = 30^\\circ$ and $y = 160^\\circ - 90^\\circ = 70^\\circ$ ✓. The figure holds four $110^\\circ$ angles and four $70^\\circ$ angles, and $110 + 70 = 180$ ✓. (The choice $110^\\circ$ is STOPPING AT THE OBTUSE ANGLE; the choice $30^\\circ$ is ANSWERING WITH x; the choice $55^\\circ$ is HALVING THE OBTUSE ANGLE.)',
    },
    {
      q: 'A transversal meets two parallel lines so that a pair of alternate interior angles measures $5x + 15^\\circ$ and $3x + 65^\\circ$. What is the measure of the ACUTE angles formed?',
      choices: ['$25^\\circ$', '$40^\\circ$', '$140^\\circ$', '$70^\\circ$'],
      answer: 1,
      solution:
        'Parallel lines force alternate interior angles to match: $5x + 15^\\circ = 3x + 65^\\circ$, so $2x = 50^\\circ$ and $x = 25^\\circ$. Each labelled angle is $5(25^\\circ) + 15^\\circ = 140^\\circ$, and the other expression agrees: $3(25^\\circ) + 65^\\circ = 140^\\circ$ ✓. The only other size in the figure is the supplement, so the acute angles measure $180^\\circ - 140^\\circ = 40^\\circ$ ✓. Check a second, independent way by naming the acute angle $y$ and never asking what the obtuse one is. It pairs off along a line with $5x + 15^\\circ$, giving $y = 165^\\circ - 5x$, and along the other line with $3x + 65^\\circ$, giving $y = 115^\\circ - 3x$. Setting these equal: $165^\\circ - 5x = 115^\\circ - 3x$, so $2x = 50^\\circ$, $x = 25^\\circ$, and $y = 165^\\circ - 125^\\circ = 40^\\circ$ ✓. A sanity check on size: $140^\\circ$ is a wide, flat opening, so its partner has to be a narrow $40^\\circ$ ✓. (The choice $140^\\circ$ is STOPPING AT THE OBTUSE ANGLE; the choice $25^\\circ$ is ANSWERING WITH x; the choice $70^\\circ$ is HALVING THE OBTUSE ANGLE.)',
    },
  ],
  // slot 6 — triangle with one angle a multiple of another; the LARGEST angle. Lane: 82 / 76 / 86.
  [
    {
      q: 'In a triangle, $\\angle P$ is twice $\\angle Q$, and $\\angle R$ is $16^\\circ$ more than $\\angle Q$. What is the largest angle of the triangle?',
      choices: ['$41^\\circ$', '$82^\\circ$', '$57^\\circ$', '$90^\\circ$'],
      answer: 1,
      solution:
        'Let $\\angle Q = q$. Then $\\angle P = 2q$ and $\\angle R = q + 16^\\circ$, and the three angles of a triangle add to $180^\\circ$: $2q + q + (q + 16^\\circ) = 180^\\circ$, so $4q = 164^\\circ$ and $q = 41^\\circ$. That gives $\\angle P = 82^\\circ$, $\\angle Q = 41^\\circ$, $\\angle R = 57^\\circ$, and the largest is $82^\\circ$ ✓. Check: $82 + 41 + 57 = 180$ ✓. Check a second, independent way by solving for a different unknown. Since $\\angle R = \\angle Q + 16^\\circ$, we may write $\\angle Q = \\angle R - 16^\\circ$ and $\\angle P = 2(\\angle R - 16^\\circ)$. The angle sum becomes $2\\angle R - 32^\\circ + \\angle R - 16^\\circ + \\angle R = 180^\\circ$, so $4\\angle R = 228^\\circ$ and $\\angle R = 57^\\circ$; then $\\angle Q = 41^\\circ$ and $\\angle P = 82^\\circ$ ✓. Two different letters, two different equations, one set of angles — and $\\angle P$ leads ✓. (The choice $41^\\circ$ is ANSWERING WITH THE SMALLEST ANGLE, $\\angle Q$; the choice $57^\\circ$ is ANSWERING WITH THE MIDDLE ANGLE, $\\angle R$; the choice $90^\\circ$ is FORGETTING THE OFFSET, solving $2q + q + q = 180^\\circ$ and doubling $q = 45^\\circ$.)',
    },
    {
      q: 'A triangle has $\\angle D$ equal to twice $\\angle E$, while $\\angle E$ is $28^\\circ$ less than $\\angle F$. Which measure is the largest angle of the triangle?',
      choices: ['$76^\\circ$', '$38^\\circ$', '$66^\\circ$', '$104^\\circ$'],
      answer: 0,
      solution:
        'Reading the second fact forwards, $\\angle F$ is $28^\\circ$ more than $\\angle E$. Let $\\angle E = e$, so $\\angle D = 2e$ and $\\angle F = e + 28^\\circ$. The angle sum gives $2e + e + (e + 28^\\circ) = 180^\\circ$, so $4e = 152^\\circ$ and $e = 38^\\circ$. The angles are $\\angle D = 76^\\circ$, $\\angle E = 38^\\circ$, $\\angle F = 66^\\circ$, and the largest is $76^\\circ$ ✓. Check: $76 + 38 + 66 = 180$ ✓. Check a second, independent way by choosing $\\angle F$ as the unknown. From $\\angle E = \\angle F - 28^\\circ$ we get $\\angle D = 2\\angle F - 56^\\circ$, so the sum reads $2\\angle F - 56^\\circ + \\angle F - 28^\\circ + \\angle F = 180^\\circ$, giving $4\\angle F = 264^\\circ$ and $\\angle F = 66^\\circ$; then $\\angle E = 38^\\circ$ and $\\angle D = 76^\\circ$ ✓. Both routes rank the angles the same way, and doubling the smallest is what pushes $\\angle D$ to the front ✓. (The choice $38^\\circ$ is ANSWERING WITH THE SMALLEST ANGLE; the choice $66^\\circ$ is ANSWERING WITH THE MIDDLE ANGLE; the choice $104^\\circ$ is SUBTRACTING THE OFFSET INSTEAD OF ADDING, solving $2e + e + (e - 28^\\circ) = 180^\\circ$ and doubling $e = 52^\\circ$.)',
    },
    {
      q: 'In triangle $KLM$, $\\angle K$ is twice as big as $\\angle L$, and $\\angle M$ exceeds $\\angle L$ by $8^\\circ$. Find the largest angle of the triangle.',
      choices: ['$43^\\circ$', '$51^\\circ$', '$90^\\circ$', '$86^\\circ$'],
      answer: 3,
      solution:
        'Let $\\angle L = \\ell$. Then $\\angle K = 2\\ell$ and $\\angle M = \\ell + 8^\\circ$, and the angle sum of a triangle gives $2\\ell + \\ell + (\\ell + 8^\\circ) = 180^\\circ$, so $4\\ell = 172^\\circ$ and $\\ell = 43^\\circ$. The three angles are $\\angle K = 86^\\circ$, $\\angle L = 43^\\circ$, $\\angle M = 51^\\circ$, so the largest is $86^\\circ$ ✓. Check: $86 + 43 + 51 = 180$ ✓. Check a second, independent way by solving for $\\angle M$ instead. Since $\\angle L = \\angle M - 8^\\circ$ and $\\angle K = 2\\angle M - 16^\\circ$, the sum becomes $2\\angle M - 16^\\circ + \\angle M - 8^\\circ + \\angle M = 180^\\circ$, so $4\\angle M = 204^\\circ$ and $\\angle M = 51^\\circ$; back-substituting gives $\\angle L = 43^\\circ$ and $\\angle K = 86^\\circ$ ✓. With such a small offset, $\\angle L$ and $\\angle M$ stay close together while $\\angle K$ runs away with the lead ✓. (The choice $43^\\circ$ is ANSWERING WITH THE SMALLEST ANGLE; the choice $51^\\circ$ is ANSWERING WITH THE MIDDLE ANGLE; the choice $90^\\circ$ is FORGETTING THE OFFSET, solving $2\\ell + \\ell + \\ell = 180^\\circ$ and doubling $\\ell = 45^\\circ$.)',
    },
  ],
  // slot 7 — exterior angle at A is k times the interior at A. Lane: 67 / 98 / 41.
  [
    {
      q: 'In triangle $ABC$, the exterior angle at $A$ is $3$ times the interior angle at $A$, and $\\angle B = 68^\\circ$. What is $\\angle C$?',
      choices: ['$67^\\circ$', '$45^\\circ$', '$135^\\circ$', '$60^\\circ$'],
      answer: 0,
      solution:
        'An interior angle and its exterior angle sit side by side on a straight line, so they add to $180^\\circ$. Here that reads $\\angle A + 3\\angle A = 180^\\circ$, so $4\\angle A = 180^\\circ$ and $\\angle A = 45^\\circ$. The angle sum of the triangle then gives $\\angle C = 180^\\circ - 45^\\circ - 68^\\circ = 67^\\circ$ ✓. Check a second, independent way with the Exterior Angle Theorem, which never uses the angle sum of this triangle in the same form: the exterior angle at $A$ equals the sum of the two remote interior angles, $\\angle B$ and $\\angle C$. The exterior angle is $3 \\times 45^\\circ = 135^\\circ$, so $135^\\circ = 68^\\circ + \\angle C$ and $\\angle C = 67^\\circ$ ✓. The two routes agree, and the triangle they describe is genuine: $45 + 68 + 67 = 180$ ✓. (The choice $45^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE at $A$, a step of the work; the choice $135^\\circ$ is ANSWERING WITH THE EXTERIOR ANGLE at $A$; the choice $60^\\circ$ is DIVIDING 180 BY THE MULTIPLIER, $\\frac{180^\\circ}{3}$, which forgets that the interior angle is one part out of four, not one out of three.)',
    },
    {
      q: 'In triangle $ABC$, the exterior angle at $A$ measures $5$ times the interior angle at $A$. Given $\\angle B = 52^\\circ$, find $\\angle C$.',
      choices: ['$30^\\circ$', '$150^\\circ$', '$36^\\circ$', '$98^\\circ$'],
      answer: 3,
      solution:
        'The interior angle at $A$ and the exterior angle at $A$ form a linear pair, so $\\angle A + 5\\angle A = 180^\\circ$. That makes $6\\angle A = 180^\\circ$ and $\\angle A = 30^\\circ$. Using the triangle’s angle sum, $\\angle C = 180^\\circ - 30^\\circ - 52^\\circ = 98^\\circ$ ✓. Check a second, independent way with the Exterior Angle Theorem: the exterior angle at $A$ equals $\\angle B + \\angle C$. That exterior angle is $5 \\times 30^\\circ = 150^\\circ$, so $150^\\circ = 52^\\circ + \\angle C$, giving $\\angle C = 98^\\circ$ ✓. A big multiplier squeezes $\\angle A$ small, which leaves plenty of room for an obtuse $\\angle C$ — and $98^\\circ$ is obtuse ✓. Final check on the triangle: $30 + 52 + 98 = 180$ ✓. (The choice $30^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE at $A$; the choice $150^\\circ$ is ANSWERING WITH THE EXTERIOR ANGLE at $A$; the choice $36^\\circ$ is DIVIDING 180 BY THE MULTIPLIER, $\\frac{180^\\circ}{5}$, instead of by $5 + 1$.)',
    },
    {
      q: 'The exterior angle at $A$ in triangle $ABC$ is exactly twice the interior angle at $A$. If $\\angle B = 79^\\circ$, what is $\\angle C$?',
      choices: ['$60^\\circ$', '$120^\\circ$', '$41^\\circ$', '$90^\\circ$'],
      answer: 2,
      solution:
        'Interior and exterior angles at the same vertex make a straight angle together, so $\\angle A + 2\\angle A = 180^\\circ$, giving $3\\angle A = 180^\\circ$ and $\\angle A = 60^\\circ$. Then the angle sum of the triangle gives $\\angle C = 180^\\circ - 60^\\circ - 79^\\circ = 41^\\circ$ ✓. Check a second, independent way with the Exterior Angle Theorem: the exterior angle at $A$, which is $2 \\times 60^\\circ = 120^\\circ$, equals the sum of the two remote interior angles, so $120^\\circ = 79^\\circ + \\angle C$ and $\\angle C = 41^\\circ$ ✓. The smallest multiplier in this family gives the biggest $\\angle A$, and with $\\angle B$ already close to a right angle there is very little left for $\\angle C$ ✓. Triangle check: $60 + 79 + 41 = 180$ ✓. (The choice $60^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE at $A$; the choice $120^\\circ$ is ANSWERING WITH THE EXTERIOR ANGLE at $A$; the choice $90^\\circ$ is DIVIDING 180 BY THE MULTIPLIER, $\\frac{180^\\circ}{2}$, rather than sharing $180^\\circ$ among three equal parts.)',
    },
  ],
  // slot 8 — zigzag between parallels with one bend. Lane: 73 / 69 / 58.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A bent wire runs from $A$ on $\\ell$ to $B$ on $m$ with a single kink at $P$ between the lines. It leaves $\\ell$ at a $45^\\circ$ angle at $A$ and the kink measures $\\angle APB = 118^\\circ$. What angle does the wire make with $m$ at $B$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.5, 3], b: [0, 1.5] },
          { t: 'seg', a: [-0.459, 0], b: [0, 1.5] },
          { t: 'point', p: [-1.5, 3], label: 'A', dx: -6, dy: -8 },
          { t: 'point', p: [0, 1.5], label: 'P', dx: 14, dy: 4 },
          { t: 'point', p: [-0.459, 0], label: 'B', dx: -6, dy: 16 },
          { t: 'label', p: [2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-1.5, 3], from: [3, 3], to: [0, 1.5], r: 0.7, label: '45' },
          { t: 'angle', at: [0, 1.5], from: [-1.5, 3], to: [-0.459, 0], r: 0.5, label: '118' },
          { t: 'angle', at: [-0.459, 0], from: [3, 0], to: [0, 1.5], r: 0.7, label: '?' },
        ],
      },
      choices: ['$45^\\circ$', '$163^\\circ$', '$73^\\circ$', '$62^\\circ$'],
      answer: 2,
      solution:
        'Draw a helper line through $P$ parallel to both $\\ell$ and $m$. It splits the kink into two pieces. The upper piece and the $45^\\circ$ angle at $A$ are alternate interior angles for the transversal $AP$, so the upper piece is $45^\\circ$; the lower piece and the unknown angle at $B$ are alternate interior angles for the transversal $PB$, so the lower piece equals the angle at $B$. The two pieces make the whole kink: $45^\\circ + \\angle B\\text{-piece} = 118^\\circ$, so the wire meets $m$ at $118^\\circ - 45^\\circ = 73^\\circ$ ✓. Check a second, independent way by extending the first leg instead of adding a helper line. Continue the segment $AP$ past $P$ until it hits $m$ at a point $Q$. Because $\\ell \\parallel m$, that line crosses $m$ at the same $45^\\circ$ it made with $\\ell$, so $\\angle PQB = 45^\\circ$. Since $A$, $P$, $Q$ lie on one straight line, $\\angle BPQ = 180^\\circ - 118^\\circ = 62^\\circ$. Now triangle $PQB$ has its third angle at $B$: $180^\\circ - 45^\\circ - 62^\\circ = 73^\\circ$ ✓ — a triangle argument with no helper parallel in sight, landing on the same number. (The choice $45^\\circ$ is COPYING THE ANGLE AT THE START, which would need the wire to run straight; the choice $163^\\circ$ is ADDING INSTEAD OF SUBTRACTING; the choice $62^\\circ$ is TAKING THE SUPPLEMENT OF THE BEND, $180^\\circ - 118^\\circ$, which is a real angle in the picture — the one at $P$ inside triangle $PQB$ — but not the one asked for.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A hiking trail leaves $A$ on $\\ell$, makes a $62^\\circ$ angle with $\\ell$, turns once at the lookout $P$ where $\\angle APB = 131^\\circ$, and reaches $B$ on $m$. What angle does the trail make with $m$ at $B$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-1.17, 3], b: [0, 0.8] },
          { t: 'seg', a: [-0.307, 0], b: [0, 0.8] },
          { t: 'point', p: [-1.17, 3], label: 'A', dx: -6, dy: -8 },
          { t: 'point', p: [0, 0.8], label: 'P', dx: 14, dy: -8 },
          { t: 'point', p: [-0.307, 0], label: 'B', dx: -6, dy: 16 },
          { t: 'label', p: [2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-1.17, 3], from: [3, 3], to: [0, 0.8], r: 0.7, label: '62' },
          { t: 'angle', at: [0, 0.8], from: [-1.17, 3], to: [-0.307, 0], r: 0.5, label: '131' },
          { t: 'angle', at: [-0.307, 0], from: [3, 0], to: [0, 0.8], r: 0.5, label: '?' },
        ],
      },
      choices: ['$62^\\circ$', '$69^\\circ$', '$49^\\circ$', '$118^\\circ$'],
      answer: 1,
      solution:
        'Run a helper line through $P$ parallel to $\\ell$ and $m$. It cuts $\\angle APB$ into two parts. The part above it pairs with the $62^\\circ$ angle at $A$ as alternate interior angles across the transversal $AP$, so that part is $62^\\circ$; the part below it pairs with the unknown angle at $B$ across the transversal $PB$, so that part equals the angle at $B$. Since the parts rebuild the turn, the angle at $B$ is $131^\\circ - 62^\\circ = 69^\\circ$ ✓. Check a second, independent way with a triangle. Extend $AP$ beyond $P$ to meet $m$ at $Q$. That straight line meets the two parallel lines at equal angles, so $\\angle PQB = 62^\\circ$. The points $A$, $P$, $Q$ are collinear, so the angle of triangle $PQB$ at $P$ is $180^\\circ - 131^\\circ = 49^\\circ$. The angles of triangle $PQB$ add to $180^\\circ$, leaving $180^\\circ - 62^\\circ - 49^\\circ = 69^\\circ$ at $B$ ✓. (The choice $62^\\circ$ is COPYING THE ANGLE AT THE START; the choice $49^\\circ$ is TAKING THE SUPPLEMENT OF THE BEND; the choice $118^\\circ$ is TAKING THE SUPPLEMENT OF THE FIRST ANGLE, $180^\\circ - 62^\\circ$.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. A folded drinking straw touches $\\ell$ at $A$, where it makes a $27^\\circ$ angle with $\\ell$, folds at $P$ so that $\\angle APB = 85^\\circ$, and touches $m$ at $B$. What angle does the straw make with $m$ at $B$?',
      fig: {
        view: [-3.4, -0.9, 3.6, 3.9],
        elems: [
          { t: 'seg', a: [-3, 3], b: [3, 3] },
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-2.748, 3], b: [0, 1.6] },
          { t: 'seg', a: [-1, 0], b: [0, 1.6] },
          { t: 'point', p: [-2.748, 3], label: 'A', dx: -4, dy: -8 },
          { t: 'point', p: [0, 1.6], label: 'P', dx: 14, dy: 4 },
          { t: 'point', p: [-1, 0], label: 'B', dx: -6, dy: 16 },
          { t: 'label', p: [2.7, 3.3], text: 'l', dy: 4 },
          { t: 'label', p: [2.7, 0.3], text: 'm', dy: 4 },
          { t: 'angle', at: [-2.748, 3], from: [3, 3], to: [0, 1.6], r: 0.9, label: '27' },
          { t: 'angle', at: [0, 1.6], from: [-2.748, 3], to: [-1, 0], r: 0.5, label: '85' },
          { t: 'angle', at: [-1, 0], from: [3, 0], to: [0, 1.6], r: 0.7, label: '?' },
        ],
      },
      choices: ['$58^\\circ$', '$27^\\circ$', '$112^\\circ$', '$95^\\circ$'],
      answer: 0,
      solution:
        'Slide a helper line through $P$ parallel to $\\ell$ and $m$. The fold $\\angle APB$ is now split in two. The upper piece equals the $27^\\circ$ at $A$, since those are alternate interior angles across the transversal $AP$; the lower piece equals the angle at $B$, since those are alternate interior angles across the transversal $PB$. The pieces add to the fold, so the angle at $B$ is $85^\\circ - 27^\\circ = 58^\\circ$ ✓. Check a second, independent way with a triangle instead. Extend $AP$ past $P$ until it meets $m$ at $Q$; a straight line crossing two parallel lines makes the same angle with each, so $\\angle PQB = 27^\\circ$. Because $A$, $P$, $Q$ lie on a line, the angle at $P$ inside triangle $PQB$ is $180^\\circ - 85^\\circ = 95^\\circ$, and the angles of that triangle give $\\angle PBQ = 180^\\circ - 27^\\circ - 95^\\circ = 58^\\circ$ ✓. The picture agrees: the straw leaves $\\ell$ at a shallow slant and hits $m$ much more steeply ✓. (The choice $27^\\circ$ is COPYING THE ANGLE AT THE START; the choice $112^\\circ$ is ADDING INSTEAD OF SUBTRACTING; the choice $95^\\circ$ is TAKING THE SUPPLEMENT OF THE BEND.)',
    },
  ],
  // slot 9 — two exterior angles given, find the interior at the third vertex. Lane: 65 / 73 / 69.
  [
    {
      q: 'In triangle $ABC$, the exterior angle at $B$ measures $118^\\circ$ and the exterior angle at $C$ measures $127^\\circ$. How big is $\\angle A$?',
      choices: ['$115^\\circ$', '$65^\\circ$', '$62^\\circ$', '$53^\\circ$'],
      answer: 1,
      solution:
        'An exterior angle and the interior angle beside it form a linear pair, so each interior angle is $180^\\circ$ minus its exterior angle. That gives $\\angle B = 180^\\circ - 118^\\circ = 62^\\circ$ and $\\angle C = 180^\\circ - 127^\\circ = 53^\\circ$. The three angles of a triangle add to $180^\\circ$, so $\\angle A = 180^\\circ - 62^\\circ - 53^\\circ = 65^\\circ$ ✓. Check a second, independent way without ever finding $\\angle B$ or $\\angle C$. The Exterior Angle Theorem says an exterior angle equals the sum of the two interior angles it does not touch, so the exterior angle at $B$ is $\\angle A + \\angle C$ and the exterior angle at $C$ is $\\angle A + \\angle B$. Adding those two facts, $118^\\circ + 127^\\circ = 2\\angle A + \\angle B + \\angle C = \\angle A + 180^\\circ$, so $\\angle A = 245^\\circ - 180^\\circ = 65^\\circ$ ✓. One more sanity check: $65^\\circ + 53^\\circ = 118^\\circ$ ✓, exactly the exterior angle at $B$. (The choice $115^\\circ$ is ANSWERING WITH THE EXTERIOR ANGLE AT THE THIRD VERTEX, since the three exterior angles add to $360^\\circ$ and $360^\\circ - 118^\\circ - 127^\\circ = 115^\\circ$; the choices $62^\\circ$ and $53^\\circ$ are ANSWERING FOR THE WRONG VERTEX.)',
    },
    {
      q: 'A triangle is named $DEF$. Its exterior angle at $E$ is $134^\\circ$ and its exterior angle at $F$ is $119^\\circ$. Find $\\angle D$.',
      choices: ['$107^\\circ$', '$46^\\circ$', '$61^\\circ$', '$73^\\circ$'],
      answer: 3,
      solution:
        'Turn each exterior angle into the interior angle sitting beside it: they make a straight line together, so $\\angle E = 180^\\circ - 134^\\circ = 46^\\circ$ and $\\angle F = 180^\\circ - 119^\\circ = 61^\\circ$. The angle sum of the triangle then gives $\\angle D = 180^\\circ - 46^\\circ - 61^\\circ = 73^\\circ$ ✓. Check a second, independent way by leaning on the Exterior Angle Theorem instead of the angle sum. The exterior angle at $E$ equals $\\angle D + \\angle F$ and the exterior angle at $F$ equals $\\angle D + \\angle E$; adding them piles up one extra copy of $\\angle D$ on top of the full angle sum, so $134^\\circ + 119^\\circ = \\angle D + 180^\\circ$ and $\\angle D = 253^\\circ - 180^\\circ = 73^\\circ$ ✓. Test it directly: $\\angle D + \\angle F = 73^\\circ + 61^\\circ = 134^\\circ$ ✓. (The choice $107^\\circ$ is ANSWERING WITH THE EXTERIOR ANGLE AT THE THIRD VERTEX, from $360^\\circ - 134^\\circ - 119^\\circ$; the choices $46^\\circ$ and $61^\\circ$ are ANSWERING FOR THE WRONG VERTEX.)',
    },
    {
      q: 'The exterior angle at $R$ of triangle $PQR$ measures $141^\\circ$, and the exterior angle at $Q$ measures $108^\\circ$. What is $\\angle P$?',
      choices: ['$39^\\circ$', '$111^\\circ$', '$69^\\circ$', '$72^\\circ$'],
      answer: 2,
      solution:
        'Each exterior angle and its neighboring interior angle make a straight angle, so $\\angle R = 180^\\circ - 141^\\circ = 39^\\circ$ and $\\angle Q = 180^\\circ - 108^\\circ = 72^\\circ$. The angles of the triangle add to $180^\\circ$, leaving $\\angle P = 180^\\circ - 39^\\circ - 72^\\circ = 69^\\circ$ ✓. Check a second, independent way straight from the Exterior Angle Theorem. It says the exterior angle at $R$ is $\\angle P + \\angle Q$ and the exterior angle at $Q$ is $\\angle P + \\angle R$. Summing those, $141^\\circ + 108^\\circ = 2\\angle P + \\angle Q + \\angle R$, and since $\\angle P + \\angle Q + \\angle R = 180^\\circ$ this collapses to $249^\\circ = \\angle P + 180^\\circ$, so $\\angle P = 69^\\circ$ ✓. Confirm on one exterior angle alone: $69^\\circ + 72^\\circ = 141^\\circ$ ✓. (The choices $39^\\circ$ and $72^\\circ$ are ANSWERING FOR THE WRONG VERTEX; the choice $111^\\circ$ is ANSWERING WITH THE EXTERIOR ANGLE AT THE THIRD VERTEX, from $360^\\circ - 141^\\circ - 108^\\circ$.)',
    },
  ],
  // slot 10 — a line perpendicular to a transversal; the acute angle it makes with the parallels. Lane: 66 / 39 / 47.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel, and a transversal $t$ crosses them making a $24^\\circ$ angle with $\\ell$. A fourth line $u$ is drawn perpendicular to $t$. What is the acute angle between $u$ and $m$?',
      choices: ['$24^\\circ$', '$156^\\circ$', '$114^\\circ$', '$66^\\circ$'],
      answer: 3,
      solution:
        'Let $u$ meet $t$ at $X$ and meet $m$ at $Y$, and let $t$ meet $m$ at $Z$. Since $\\ell$ and $m$ are parallel, $t$ makes the same $24^\\circ$ angle with $m$ that it makes with $\\ell$, so $\\angle XZY = 24^\\circ$. Triangle $XYZ$ has a right angle at $X$ because $u \\perp t$, so its third angle is $\\angle XYZ = 180^\\circ - 90^\\circ - 24^\\circ = 66^\\circ$ ✓. Check a second, independent way with directions instead of a triangle. Point $\\ell$ and $m$ along the direction $0^\\circ$. Then $t$ points along $24^\\circ$, and turning a quarter turn off $t$ sends $u$ along $24^\\circ + 90^\\circ = 114^\\circ$. The angle between direction $114^\\circ$ and direction $0^\\circ$ is $114^\\circ$, whose partner on the other side is $180^\\circ - 114^\\circ = 66^\\circ$, and the acute one of that pair is $66^\\circ$ ✓. (The choice $24^\\circ$ is COPYING THE TRANSVERSAL’S ANGLE; the choice $156^\\circ$ is SUBTRACTING FROM 180 INSTEAD OF 90; the choice $114^\\circ$ is ANSWERING WITH THE OBTUSE ANGLE.)',
    },
    {
      q: 'Two parallel rails $\\ell$ and $m$ are crossed by a bar $t$ that makes a $51^\\circ$ angle with $\\ell$. A brace $u$ is fastened at right angles to $t$. What acute angle does $u$ make with $m$?',
      choices: ['$51^\\circ$', '$39^\\circ$', '$129^\\circ$', '$141^\\circ$'],
      answer: 1,
      solution:
        'Follow the little triangle that $t$, $u$ and $m$ cut out. Because $\\ell$ and $m$ are parallel, the bar $t$ leans on $m$ at the same $51^\\circ$ it makes with $\\ell$. The brace meets the bar at $90^\\circ$, so inside that triangle two angles are already known and the third is $180^\\circ - 90^\\circ - 51^\\circ = 39^\\circ$ ✓. Notice the shortcut this reveals: a line perpendicular to the transversal always makes the complement of the transversal’s angle with the parallel lines. Check a second, independent way using headings. Give the rails heading $0^\\circ$; then the bar has heading $51^\\circ$ and the brace, a quarter turn away, has heading $141^\\circ$. Measured against the rails that is $141^\\circ$ on one side and $180^\\circ - 141^\\circ = 39^\\circ$ on the other, so the acute angle is $39^\\circ$ ✓. (The choice $51^\\circ$ is COPYING THE TRANSVERSAL’S ANGLE; the choice $129^\\circ$ is SUBTRACTING FROM 180 INSTEAD OF 90; the choice $141^\\circ$ is ANSWERING WITH THE OBTUSE ANGLE.)',
    },
    {
      q: 'A transversal $t$ cuts the parallel lines $\\ell$ and $m$, making an angle of $43^\\circ$ with $m$. Line $u$ is perpendicular to $t$. Find the acute angle between $u$ and $\\ell$.',
      choices: ['$47^\\circ$', '$43^\\circ$', '$137^\\circ$', '$133^\\circ$'],
      answer: 0,
      solution:
        'The transversal treats both parallel lines alike, so it makes the same $43^\\circ$ angle with $\\ell$ that it makes with $m$. Now look at the triangle formed by $t$, $u$ and $\\ell$: it has a right angle where $u$ crosses $t$ and a $43^\\circ$ angle where $t$ crosses $\\ell$, so the remaining angle is $180^\\circ - 90^\\circ - 43^\\circ = 47^\\circ$ ✓. Check a second, independent way with directions. Set $\\ell$ and $m$ along $0^\\circ$, so $t$ runs along $43^\\circ$ and $u$, perpendicular to $t$, runs along $133^\\circ$. Against a line of direction $0^\\circ$ that makes a pair of angles $133^\\circ$ and $47^\\circ$, and the acute member is $47^\\circ$ ✓. It fits the pattern: $43^\\circ$ and $47^\\circ$ are complements, adding to the right angle at $u \\perp t$ ✓. (The choice $43^\\circ$ is COPYING THE TRANSVERSAL’S ANGLE; the choice $137^\\circ$ is SUBTRACTING FROM 180 INSTEAD OF 90; the choice $133^\\circ$ is ANSWERING WITH THE OBTUSE ANGLE.)',
    },
  ],
  // slot 11 — the reflex angle around an angle is k times the angle. Lane: 90 / 45 / 36.
  [
    {
      q: 'Two rays share an endpoint. The reflex angle between them is $3$ times the ordinary (non-reflex) angle between them. How big is the non-reflex angle?',
      choices: ['$120^\\circ$', '$270^\\circ$', '$90^\\circ$', '$45^\\circ$'],
      answer: 2,
      solution:
        'Call the non-reflex angle $x$. The two angles together sweep once all the way around the shared endpoint, so they add to $360^\\circ$. That gives $x + 3x = 360^\\circ$, hence $4x = 360^\\circ$ and $x = 90^\\circ$ ✓. Check a second, independent way by chasing the reflex angle first. If the reflex angle is $r$, then it is $3$ times what is left over, so $r = 3(360^\\circ - r)$, which is $r = 1080^\\circ - 3r$, so $4r = 1080^\\circ$ and $r = 270^\\circ$; the non-reflex angle is then $360^\\circ - 270^\\circ = 90^\\circ$ ✓. A picture says the same thing: the full turn splits into $1 + 3 = 4$ equal wedges of $90^\\circ$, and the non-reflex angle is exactly one wedge ✓. (The choice $120^\\circ$ is DIVIDING 360 BY THE MULTIPLIER instead of by one more than it; the choice $270^\\circ$ is ANSWERING WITH THE REFLEX ANGLE; the choice $45^\\circ$ is USING 180 INSTEAD OF 360.)',
    },
    {
      q: 'At the center of a dial, one hand points north and another points somewhere else. Going the long way round from the first hand to the second sweeps out $7$ times as much as going the short way. How many degrees is the short way?',
      choices: ['$45^\\circ$', '$315^\\circ$', '$60^\\circ$', '$22.5^\\circ$'],
      answer: 0,
      solution:
        'The short way and the long way together are one complete turn about the center, which is $360^\\circ$. Writing the short way as $x$, the long way is $7x$, so $x + 7x = 360^\\circ$, giving $8x = 360^\\circ$ and $x = 45^\\circ$ ✓. Check a second, independent way by solving for the long way instead. Let the long sweep be $r$; the short one is $360^\\circ - r$, and the condition says $r = 7(360^\\circ - r)$. Expanding, $r = 2520^\\circ - 7r$, so $8r = 2520^\\circ$ and $r = 315^\\circ$, which leaves $360^\\circ - 315^\\circ = 45^\\circ$ for the short way ✓. Both routes match the wedge picture: the turn breaks into $8$ equal $45^\\circ$ wedges, one short and seven long ✓. (The choice $315^\\circ$ is ANSWERING WITH THE REFLEX ANGLE; the choice $60^\\circ$ is DIVIDING 360 BY ONE LESS THAN THE MULTIPLIER; the choice $22.5^\\circ$ is USING 180 INSTEAD OF 360.)',
    },
    {
      q: 'Rays $OP$ and $OQ$ form two angles at $O$: a reflex one and a non-reflex one. The reflex angle is $9$ times the non-reflex angle. Find the non-reflex angle.',
      choices: ['$40^\\circ$', '$324^\\circ$', '$18^\\circ$', '$36^\\circ$'],
      answer: 3,
      solution:
        'The two angles at $O$ fill the whole turn, so their sum is $360^\\circ$. With $x$ for the non-reflex angle, $x + 9x = 360^\\circ$, so $10x = 360^\\circ$ and $x = 36^\\circ$ ✓. Check a second, independent way by hunting the reflex angle first. Let it be $r$. Then $r = 9(360^\\circ - r)$, so $r = 3240^\\circ - 9r$, giving $10r = 3240^\\circ$ and $r = 324^\\circ$; subtracting, the non-reflex angle is $360^\\circ - 324^\\circ = 36^\\circ$ ✓. And $324^\\circ$ is indeed $9 \\times 36^\\circ$ ✓, so the two routes agree. (The choice $40^\\circ$ is DIVIDING 360 BY THE MULTIPLIER instead of by one more than it; the choice $324^\\circ$ is ANSWERING WITH THE REFLEX ANGLE; the choice $18^\\circ$ is USING 180 INSTEAD OF 360.)',
    },
  ],
  // slot 12 — the exterior angle at C equals the interior at C. Lane: 52 / 63 / 31.
  [
    {
      q: 'In triangle $ABC$, the exterior angle at $C$ is exactly the same size as the interior angle at $C$. If $\\angle A = 38^\\circ$, what is $\\angle B$?',
      choices: ['$52^\\circ$', '$142^\\circ$', '$38^\\circ$', '$90^\\circ$'],
      answer: 0,
      solution:
        'The interior angle at $C$ and the exterior angle at $C$ sit side by side along a straight line, so they add to $180^\\circ$. Being told they are equal makes each of them half of that: $\\angle C = 90^\\circ$. The three angles of the triangle add to $180^\\circ$, so $\\angle A + \\angle B = 180^\\circ - 90^\\circ = 90^\\circ$, meaning $\\angle A$ and $\\angle B$ are complements. Then $\\angle B = 90^\\circ - 38^\\circ = 52^\\circ$ ✓. Check a second, independent way through the Exterior Angle Theorem. That theorem says the exterior angle at $C$ equals $\\angle A + \\angle B$. Setting it equal to $\\angle C$ gives $\\angle C = \\angle A + \\angle B$, and substituting into the angle sum turns $\\angle A + \\angle B + \\angle C = 180^\\circ$ into $2\\angle C = 180^\\circ$, so $\\angle C = 90^\\circ$ again and $\\angle B = 90^\\circ - 38^\\circ = 52^\\circ$ ✓. (The choice $142^\\circ$ is SUBTRACTING FROM 180 INSTEAD OF 90; the choice $38^\\circ$ is COPYING THE GIVEN ANGLE; the choice $90^\\circ$ is ANSWERING WITH $\\angle C$.)',
    },
    {
      q: 'Triangle $KLM$ has the property that the exterior angle at $M$ is equal to the interior angle at $M$. Given that $\\angle K = 27^\\circ$, find $\\angle L$.',
      choices: ['$153^\\circ$', '$27^\\circ$', '$63^\\circ$', '$90^\\circ$'],
      answer: 2,
      solution:
        'Extend side $KM$ past $M$; the interior angle at $M$ and the new exterior angle at $M$ form a linear pair, so together they measure $180^\\circ$. Since the problem makes them equal, each is $90^\\circ$, so $\\angle M = 90^\\circ$. The angle sum then forces $\\angle K + \\angle L = 90^\\circ$, so $\\angle L = 90^\\circ - 27^\\circ = 63^\\circ$ ✓. Check a second, independent way without splitting the straight angle. By the Exterior Angle Theorem the exterior angle at $M$ equals $\\angle K + \\angle L$, and the given condition sets that equal to $\\angle M$. So $\\angle M$ is the sum of the other two, and the angle sum $\\angle K + \\angle L + \\angle M = 180^\\circ$ becomes $\\angle M + \\angle M = 180^\\circ$, giving $\\angle M = 90^\\circ$ and $\\angle L = 63^\\circ$ ✓. Both routes land on a right angle at $M$, and $27^\\circ + 63^\\circ + 90^\\circ = 180^\\circ$ ✓. (The choice $153^\\circ$ is SUBTRACTING FROM 180 INSTEAD OF 90; the choice $27^\\circ$ is COPYING THE GIVEN ANGLE; the choice $90^\\circ$ is ANSWERING WITH $\\angle M$.)',
    },
    {
      q: 'In triangle $XYZ$, the exterior angle at $Z$ has the same measure as the interior angle at $Z$. If $\\angle X = 59^\\circ$, how big is $\\angle Y$?',
      choices: ['$121^\\circ$', '$31^\\circ$', '$59^\\circ$', '$90^\\circ$'],
      answer: 1,
      solution:
        'An interior angle and an exterior angle at the same vertex always combine into a straight angle of $180^\\circ$. When the two halves are equal, each must be $90^\\circ$, so $\\angle Z = 90^\\circ$. Since the triangle’s angles total $180^\\circ$, the other two are complements: $\\angle Y = 90^\\circ - 59^\\circ = 31^\\circ$ ✓. Check a second, independent way with the Exterior Angle Theorem. It gives exterior angle at $Z$ $= \\angle X + \\angle Y$, and the condition makes that equal to $\\angle Z$. Feeding $\\angle Z = \\angle X + \\angle Y$ into $\\angle X + \\angle Y + \\angle Z = 180^\\circ$ yields $2\\angle Z = 180^\\circ$, so $\\angle Z = 90^\\circ$ and $\\angle Y = 31^\\circ$ ✓. (The choice $121^\\circ$ is SUBTRACTING FROM 180 INSTEAD OF 90; the choice $59^\\circ$ is COPYING THE GIVEN ANGLE; the choice $90^\\circ$ is ANSWERING WITH $\\angle Z$.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 2,
  challenge,
}
