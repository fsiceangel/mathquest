// Prealgebra chapter 12 — variations for sections 12.1-12.3.
// All problems and solutions are original MathQuest content.
//
// Conventions used throughout this file:
//  - The hypotenuse is the side opposite the right angle and is always the
//    longest side. Solving for a LEG subtracts: leg^2 = hyp^2 - otherLeg^2.
//  - Every right triangle here is built from a whole-number triple that was
//    checked as exact integers with a^2 + b^2 = c^2.
//  - Radicals stay symbolic and reduced; no answer is ever a decimal.
//  - 45-45-90: legs x, x and hypotenuse x*sqrt(2).
//    30-60-90: x opposite 30 degrees, x*sqrt(3) opposite 60 degrees, 2x hypotenuse.

const s121 = [
  // p1 — hypotenuse from two legs, gentle
  [
    {
      q: 'A right triangle has legs of length $6$ and $8$. How long is the hypotenuse?',
      choices: ['$14$', '$10$', '$100$', '$2$'],
      answer: 1,
      solution:
        'The hypotenuse is the side opposite the right angle, so it plays the part of $c$ in $a^2 + b^2 = c^2$. Square and add: $36 + 64 = 100$, so $c^2 = 100$ and $c = 10$. Sense check: $10$ is longer than both legs, exactly as a hypotenuse must be. ($14$ is $6 + 8$ with no squaring at all; $100$ is $c^2$, stopping one step before the square root; and $2$ is $8 - 6$, subtracting when the unknown side is the hypotenuse and you should add.)',
    },
    {
      q: 'The two legs of a right triangle measure $12$ and $16$. Find the hypotenuse.',
      choices: ['$28$', '$400$', '$20$', '$4$'],
      answer: 2,
      solution:
        'Both given sides form the right angle, so both are legs and the unknown side is the hypotenuse: add the squares. $12^2 + 16^2 = 144 + 256 = 400$, and $20^2 = 400$, so the hypotenuse is $20$. (This is $3$-$4$-$5$ scaled by $4$.) The trap $28$ is $12 + 16$ without squaring; $400$ is $c^2$, not $c$; and $4$ is $16 - 12$, which subtracts when this problem calls for adding.',
    },
    {
      q: 'A right triangle has legs of length $7$ and $24$. How long is the hypotenuse?',
      choices: ['$31$', '$625$', '$17$', '$25$'],
      answer: 3,
      solution:
        'Square the two legs and add: $49 + 576 = 625$. Since $25^2 = 625$, the hypotenuse is $25$ — the $7$-$24$-$25$ triple. Notice $25 > 24 > 7$, so the longest side really is the hypotenuse. ($31$ is $7 + 24$, adding the sides instead of their squares; $625$ is $c^2$ before the square root; and $17$ is $24 - 7$, subtracting when you should add.)',
    },
  ],
  // p2 — naming the parts of a right triangle
  [
    {
      q: 'In a right triangle, what do we call the two sides that form the right angle?',
      choices: ['The legs', 'The hypotenuses', 'The bases', 'The diagonals'],
      answer: 0,
      solution:
        'The two sides that meet at the right angle are the legs; the third side, across from the right angle, is the hypotenuse. "The hypotenuses" is wrong twice over — a right triangle has exactly one hypotenuse, and it is not one of the sides forming the right angle. "Bases" is not a fixed name: any side of a triangle can be called a base depending on which height you draw. "Diagonals" belong to shapes with four or more sides; a triangle has none.',
    },
    {
      q: 'A right triangle has sides of length $9$, $12$, and $15$. Which side is the hypotenuse?',
      choices: ['$9$', '$15$', '$12$', 'Whichever side you choose to call it'],
      answer: 1,
      solution:
        'The hypotenuse is the longest side, and it sits opposite the right angle: here that is $15$. You can confirm it with the theorem, since $9^2 + 12^2 = 81 + 144 = 225 = 15^2$ — the two shorter sides are the ones that get squared and added. Picking $9$ chooses the shortest side, which is the leg opposite the smallest angle; picking $12$ chooses the other leg. And the role is not a matter of choice: the right angle decides it.',
    },
    {
      q: 'Which statement about the hypotenuse of a right triangle is always true?',
      choices: [
        'It is the shortest side of the triangle',
        'It is one of the two sides that form the right angle',
        'Its length is the sum of the two legs',
        'It is the longest side of the triangle',
      ],
      answer: 3,
      solution:
        'Because $c^2 = a^2 + b^2$ is bigger than either $a^2$ or $b^2$, the hypotenuse beats both legs in length — it is always the longest side. It is the shortest side that lies opposite the smallest angle, not the hypotenuse, so the first choice is backwards. The two sides that form the right angle are the legs, so the second choice confuses a leg with the hypotenuse. And the hypotenuse is never the plain sum of the legs: in a $3$-$4$-$5$ triangle it is $5$, not $7$.',
    },
  ],
  // p3 — hypotenuse from two legs, larger triples
  [
    {
      q: 'A right triangle has legs of length $10$ and $24$. How long is the hypotenuse?',
      choices: ['$26$', '$34$', '$676$', '$14$'],
      answer: 0,
      solution:
        'Square and add: $100 + 576 = 676$, and $26^2 = 676$, so the hypotenuse is $26$. This is the $5$-$12$-$13$ triple doubled: $10$-$24$-$26$. ($34$ is the trap of adding $10 + 24$ instead of adding the squares; $676$ is $c^2$, one step short of the answer; and $14$ is $24 - 10$, subtracting when the missing side is the hypotenuse.)',
    },
    {
      q: 'A right triangle has legs of length $8$ and $15$. Find the hypotenuse.',
      choices: ['$23$', '$289$', '$17$', '$7$'],
      answer: 2,
      solution:
        'Both given sides are legs, so add their squares: $64 + 225 = 289$. Since $17^2 = 289$, the hypotenuse is $17$ — the $8$-$15$-$17$ triple. ($23$ comes from adding $8 + 15$ without squaring; $289$ is $c^2$ and still needs its square root; $7$ is $15 - 8$, which subtracts when this problem adds.)',
    },
    {
      q: 'The legs of a right triangle measure $12$ and $35$. How long is the hypotenuse?',
      choices: ['$47$', '$1369$', '$23$', '$37$'],
      answer: 3,
      solution:
        'Add the squares of the legs: $144 + 1225 = 1369$, and $37^2 = 1369$, so the hypotenuse is $37$. Check the sense of it: $37$ is bigger than $35$, so the longest side is the one opposite the right angle. ($47$ is $12 + 35$, adding sides rather than squares; $1369$ is $c^2$ before the square root; $23$ is $35 - 12$, a subtraction that belongs to missing-leg problems, not this one.)',
    },
  ],
  // p4 — a missing leg from the hypotenuse and one leg
  [
    {
      q: 'A right triangle has a hypotenuse of length $13$ and one leg of length $5$. How long is the other leg?',
      choices: ['$12$', '$\\sqrt{194}$', '$8$', '$18$'],
      answer: 0,
      solution:
        'The missing side is a leg, so it is one of the smaller pieces and we SUBTRACT: $13^2 - 5^2 = 169 - 25 = 144$, and $12^2 = 144$. The other leg is $12$, and $12 < 13$ as a leg must be. ($\\sqrt{194}$ comes from adding $169 + 25$ — the mistake of using the add rule when the hypotenuse is already known; $8$ is $13 - 5$, subtracting the sides instead of their squares; $18$ is $13 + 5$, adding the sides.)',
    },
    {
      q: 'A right triangle has a hypotenuse of length $17$ and one leg of length $15$. Find the other leg.',
      choices: ['$\\sqrt{514}$', '$8$', '$2$', '$32$'],
      answer: 1,
      solution:
        'Here $17$ is the hypotenuse and $15$ is a leg, so subtract the squares: $289 - 225 = 64$, and $8^2 = 64$. The other leg is $8$ — the $8$-$15$-$17$ triple. ($\\sqrt{514}$ is what you get by adding $289 + 225$, treating the known hypotenuse as if it were a leg; $2$ is $17 - 15$, subtracting sides rather than squares; $32$ is $17 + 15$.)',
    },
    {
      q: 'A right triangle has a hypotenuse of length $34$ and one leg of length $16$. How long is the other leg?',
      choices: ['$\\sqrt{1412}$', '$18$', '$30$', '$50$'],
      answer: 2,
      solution:
        'A missing leg means subtraction: $34^2 - 16^2 = 1156 - 256 = 900$, and $30^2 = 900$. The other leg is $30$, which is shorter than the hypotenuse $34$ — a good sign. (This is $8$-$15$-$17$ doubled.) The choice $\\sqrt{1412}$ comes from adding $1156 + 256$ when the problem calls for subtracting; $18$ is $34 - 16$, taking the sides apart instead of their squares; and $50$ is $34 + 16$.',
    },
  ],
  // p5 — spotting a scaled-up famous triple
  [
    {
      q: 'A right triangle has legs of length $15$ and $20$. How long is the hypotenuse?',
      choices: ['$35$', '$25$', '$625$', '$5$'],
      answer: 1,
      solution:
        'Both legs are multiples of $5$: dividing gives $3$ and $4$, so this is $3$-$4$-$5$ scaled by $5$, and the hypotenuse is $5 \\times 5 = 25$. Check the long way: $225 + 400 = 625 = 25^2$. ($35$ is the trap of adding $15 + 20$; $625$ is $c^2$ before taking the square root; $5$ is the scale factor by itself, or $20 - 15$ — either way it is far too short to be the longest side.)',
    },
    {
      q: 'A right triangle has legs of length $18$ and $24$. Find the hypotenuse.',
      choices: ['$42$', '$6$', '$30$', '$900$'],
      answer: 2,
      solution:
        'Divide both legs by $6$: you get $3$ and $4$, so the triangle is $3$-$4$-$5$ scaled by $6$ and the hypotenuse is $5 \\times 6 = 30$. Check: $324 + 576 = 900 = 30^2$. ($42$ is $18 + 24$, adding sides instead of squares; $6$ is only the scale factor, not a side; $900$ is $c^2$, one square root short.)',
    },
    {
      q: 'A right triangle has legs of length $15$ and $36$. How long is the hypotenuse?',
      choices: ['$51$', '$1521$', '$21$', '$39$'],
      answer: 3,
      solution:
        'Divide both legs by $3$ and you get $5$ and $12$ — the $5$-$12$-$13$ triple scaled by $3$ — so the hypotenuse is $13 \\times 3 = 39$. Check: $225 + 1296 = 1521 = 39^2$. ($51$ is $15 + 36$, adding the sides themselves; $1521$ is $c^2$ before the square root; $21$ is $36 - 15$, a subtraction that would only make sense if $36$ were the hypotenuse.)',
    },
  ],
  // p6 — leaning-object word problem, solve for a leg
  [
    {
      q: 'A $29$-foot ladder leans against a wall with its foot $20$ feet from the wall. How high up the wall does the ladder reach?',
      choices: ['$21$ feet', '$9$ feet', '$49$ feet', '$\\sqrt{1241}$ feet'],
      answer: 0,
      solution:
        'The ladder leans across from the right angle where wall meets ground, so the ladder is the hypotenuse ($29$) and the ground distance is a leg ($20$). The height is the other leg, so subtract: $841 - 400 = 441$, and $21^2 = 441$. The ladder reaches $21$ feet. ($9$ is $29 - 20$, subtracting the lengths instead of their squares; $49$ is $29 + 20$; and $\\sqrt{1241}$ adds $841 + 400$, which would be right only if the ladder were a leg — but a height of $\\sqrt{1241} \\approx 35$ feet is longer than the ladder itself, which is impossible.)',
    },
    {
      q: 'A straight support wire $61$ meters long runs from the top of a pole to a stake $11$ meters from the base of the pole. How tall is the pole?',
      choices: ['$50$ meters', '$60$ meters', '$72$ meters', '$\\sqrt{3842}$ meters'],
      answer: 1,
      solution:
        'The pole and the ground meet at a right angle, so the wire is the hypotenuse ($61$) and the ground distance is a leg ($11$). The pole is the other leg: $61^2 - 11^2 = 3721 - 121 = 3600$, and $60^2 = 3600$, so the pole is $60$ meters tall. ($50$ is $61 - 11$, taking the lengths apart rather than their squares; $72$ is $61 + 11$; and $\\sqrt{3842}$ adds the squares, treating the wire as a leg — it comes out longer than the wire, which cannot happen.)',
    },
    {
      q: 'A loading ramp is $53$ feet long and rises to a dock $28$ feet above the ground. How far is the bottom of the ramp from the base of the dock?',
      choices: ['$25$ feet', '$81$ feet', '$\\sqrt{3593}$ feet', '$45$ feet'],
      answer: 3,
      solution:
        'The dock wall is vertical and the ground is horizontal, so the ramp is the hypotenuse ($53$) and the height is a leg ($28$). The ground distance is the other leg: $2809 - 784 = 2025$, and $45^2 = 2025$. The ramp starts $45$ feet from the dock. ($25$ is $53 - 28$, subtracting lengths instead of squares; $81$ is $53 + 28$; $\\sqrt{3593}$ comes from adding the squares when the hypotenuse is already known.)',
    },
  ],
  // p7 — two perpendicular walks, find the straight-line distance
  [
    {
      q: 'Nadia jogs $9$ km due south and then $12$ km due west. How far is she, in a straight line, from where she started?',
      choices: ['$15$ km', '$21$ km', '$225$ km', '$3$ km'],
      answer: 0,
      solution:
        'South and west are perpendicular, so the two stretches are the legs of a right triangle and the straight-line distance is the hypotenuse: $81 + 144 = 225$, and $15^2 = 225$, so she is $15$ km from her start. ($21$ km is how far she actually jogged, $9 + 12$, not the straight-line distance; $225$ is $c^2$ before the square root; $3$ is $12 - 9$, subtracting when the unknown side is the hypotenuse.)',
    },
    {
      q: 'A delivery robot rolls $32$ meters east, then turns and rolls $24$ meters north. How far is it, in a straight line, from its starting point?',
      choices: ['$56$ meters', '$1600$ meters', '$40$ meters', '$8$ meters'],
      answer: 2,
      solution:
        'East and north meet at a right angle, so the robot has travelled along two legs and the straight-line gap is the hypotenuse: $1024 + 576 = 1600$, and $40^2 = 1600$. It is $40$ meters away. (Notice $32$ and $24$ are $8$ times $4$ and $3$, so this is $3$-$4$-$5$ scaled by $8$.) The choice $56$ is the distance rolled, $32 + 24$; $1600$ is $c^2$ and still needs a square root; $8$ is $32 - 24$, a subtraction that belongs to missing-leg problems.',
    },
    {
      q: 'A boat sails $20$ km due north, then changes course and sails $48$ km due east. How far is the boat, in a straight line, from the harbour it left?',
      choices: ['$68$ km', '$2704$ km', '$28$ km', '$52$ km'],
      answer: 3,
      solution:
        'The two legs of the voyage are perpendicular, so the direct distance is the hypotenuse: $400 + 2304 = 2704$, and $52^2 = 2704$. The boat is $52$ km from the harbour. (Both legs are $4$ times $5$ and $12$, so this is $5$-$12$-$13$ scaled by $4$.) The choice $68$ is the distance sailed, $20 + 48$; $2704$ is $c^2$ before the square root; $28$ is $48 - 20$, subtracting when the missing side is the longest one.',
    },
  ],
  // p8 — which triple actually makes a right triangle
  [
    {
      q: 'Which of these trios of lengths forms a right triangle?',
      choices: ['$6$, $8$, $10$', '$4$, $6$, $7$', '$5$, $9$, $10$', '$7$, $8$, $11$'],
      answer: 0,
      solution:
        'Square the two shorter sides, add, and compare with the square of the longest side. Only $6$, $8$, $10$ works: $36 + 64 = 100 = 10^2$ ✓ (it is $3$-$4$-$5$ doubled). For $4$, $6$, $7$: $16 + 36 = 52 \\ne 49$. For $5$, $9$, $10$: $25 + 81 = 106 \\ne 100$. For $7$, $8$, $11$: $49 + 64 = 113 \\ne 121$. Each of those three is close enough to look tempting, but "close" is not "equal" — the longest side must always be the one you square on its own.',
    },
    {
      q: 'Which of these sets of lengths makes a right triangle?',
      choices: ['$6$, $8$, $9$', '$7$, $24$, $25$', '$8$, $9$, $12$', '$10$, $11$, $15$'],
      answer: 1,
      solution:
        'Test each set with $a^2 + b^2 = c^2$, where $c$ is the LONGEST side. Only $7$, $24$, $25$ passes: $49 + 576 = 625 = 25^2$ ✓. For $6$, $8$, $9$: $36 + 64 = 100 \\ne 81$. For $8$, $9$, $12$: $64 + 81 = 145 \\ne 144$ — off by just one, and still not a right triangle. For $10$, $11$, $15$: $100 + 121 = 221 \\ne 225$. Squaring the wrong side, or comparing the two largest sides instead of the two smallest, is what makes these near misses feel right.',
    },
    {
      q: 'One of these lists of three lengths belongs to a right triangle. Which one?',
      choices: ['$12$, $16$, $21$', '$11$, $13$, $17$', '$20$, $21$, $29$', '$13$, $14$, $19$'],
      answer: 2,
      solution:
        'Add the squares of the two shorter sides and compare with the square of the longest. Only $20$, $21$, $29$ works: $400 + 441 = 841 = 29^2$ ✓. For $12$, $16$, $21$: $144 + 256 = 400 \\ne 441$ — the triple $12$-$16$-$20$ is a right triangle, but stretching the longest side to $21$ breaks it. For $11$, $13$, $17$: $121 + 169 = 290 \\ne 289$, missing by one. For $13$, $14$, $19$: $169 + 196 = 365 \\ne 361$.',
    },
  ],
  // p9 — missing leg with larger numbers
  [
    {
      q: 'A right triangle has a hypotenuse of length $52$ and one leg of length $48$. How long is the other leg?',
      choices: ['$20$', '$\\sqrt{5008}$', '$4$', '$100$'],
      answer: 0,
      solution:
        'The unknown side is a leg, so subtract the squares: $52^2 - 48^2 = 2704 - 2304 = 400$, and $20^2 = 400$. The other leg is $20$ — this is $5$-$12$-$13$ scaled by $4$, giving $20$-$48$-$52$. ($\\sqrt{5008}$ adds the squares instead of subtracting, which would make a leg longer than the hypotenuse; $4$ is $52 - 48$, subtracting the lengths rather than their squares; $100$ is $52 + 48$.)',
    },
    {
      q: 'A right triangle has a hypotenuse of length $51$ and one leg of length $45$. Find the other leg.',
      choices: ['$6$', '$24$', '$\\sqrt{4626}$', '$96$'],
      answer: 1,
      solution:
        'Subtract for a missing leg: $51^2 - 45^2 = 2601 - 2025 = 576$, and $24^2 = 576$. The other leg is $24$, comfortably shorter than the hypotenuse. (Dividing everything by $3$ gives $8$-$15$-$17$, so this is that triple scaled by $3$.) The choice $6$ is $51 - 45$, taking the lengths apart instead of their squares; $\\sqrt{4626}$ adds the squares when the hypotenuse is already known; $96$ is $51 + 45$.',
    },
    {
      q: 'A right triangle has a hypotenuse of length $50$ and one leg of length $14$. How long is the other leg?',
      choices: ['$\\sqrt{2696}$', '$36$', '$64$', '$48$'],
      answer: 3,
      solution:
        'The missing side is a leg, so subtract: $2500 - 196 = 2304$, and $48^2 = 2304$. The other leg is $48$, and $48 < 50$ as it should be. (Halving gives $7$-$24$-$25$, so this is that triple doubled.) The choice $\\sqrt{2696}$ comes from adding the squares — the classic slip of reaching for $a^2 + b^2$ when what you actually need is $c^2 - a^2$; $36$ is $50 - 14$, subtracting the sides themselves; $64$ is $50 + 14$.',
    },
  ],
  // p10 — diagonal of a rectangle
  [
    {
      q: 'A rectangular soccer field is $40$ meters wide and $30$ meters deep. How long is the diagonal from one corner to the opposite corner?',
      choices: ['$50$ meters', '$70$ meters', '$2500$ meters', '$10$ meters'],
      answer: 0,
      solution:
        'The corners of a rectangle are right angles, so the diagonal is the hypotenuse of a right triangle whose legs are the two side lengths: $1600 + 900 = 2500$, and $50^2 = 2500$. The diagonal is $50$ meters. (It is $3$-$4$-$5$ scaled by $10$.) The choice $70$ is $40 + 30$, which is how far you would walk around two sides, not across; $2500$ is $c^2$ before the square root; $10$ is $40 - 30$, subtracting when the unknown side is the longest one.',
    },
    {
      q: 'A rectangular poster is $21$ cm wide and $28$ cm tall. How long is its diagonal?',
      choices: ['$49$ cm', '$35$ cm', '$1225$ cm', '$7$ cm'],
      answer: 1,
      solution:
        'The width and height meet at a right angle, so they are the legs and the diagonal is the hypotenuse: $441 + 784 = 1225$, and $35^2 = 1225$. The diagonal is $35$ cm. (Dividing by $7$ gives $3$-$4$-$5$.) The choice $49$ is $21 + 28$, adding the sides instead of their squares; $1225$ is the square of the answer, one step early; and $7$ is $28 - 21$, a subtraction that would only be right if $28$ were the diagonal.',
    },
    {
      q: 'A rectangular rug measures $27$ feet by $36$ feet. How long is the diagonal of the rug?',
      choices: ['$63$ feet', '$2025$ feet', '$45$ feet', '$9$ feet'],
      answer: 2,
      solution:
        'A diagonal cuts the rectangle into two right triangles with legs $27$ and $36$, so the diagonal is the hypotenuse: $729 + 1296 = 2025$, and $45^2 = 2025$. The diagonal is $45$ feet. (Dividing by $9$ gives $3$-$4$-$5$ again.) The choice $63$ is $27 + 36$, the walk around two sides; $2025$ is $c^2$ and still needs a square root; $9$ is $36 - 27$, subtracting rather than adding.',
    },
  ],
]

const s122 = [
  // p1 — the angles of an equilateral triangle
  [
    {
      q: 'A triangle has three sides that are all $6$ centimeters long. What is the measure of each of its angles?',
      choices: ['$60^\\circ$', '$90^\\circ$', '$45^\\circ$', '$120^\\circ$'],
      answer: 0,
      solution:
        'Three equal sides make the triangle equilateral, so all three angles are equal too. The angles of any triangle sum to $180^\\circ$, so each one is $180^\\circ \\div 3 = 60^\\circ$. ($120^\\circ$ comes from dividing $360^\\circ$ by $3$ — but $360^\\circ$ is the angle sum of a quadrilateral, not a triangle; $90^\\circ$ guesses a right angle, and three right angles would already make $270^\\circ$; $45^\\circ$ comes from $180^\\circ \\div 4$, dividing by the wrong count.)',
    },
    {
      q: 'All three angles of a certain triangle are equal to one another. How large is each angle?',
      choices: ['$120^\\circ$', '$90^\\circ$', '$60^\\circ$', '$45^\\circ$'],
      answer: 2,
      solution:
        'Three equal angles that must total $180^\\circ$ are each $180^\\circ \\div 3 = 60^\\circ$. (Such a triangle is equilateral: equal angles force equal sides.) The choice $120^\\circ$ divides $360^\\circ$ by $3$, using a quadrilateral\'s angle sum; $90^\\circ$ assumes right angles, which would overshoot $180^\\circ$ with only two of them; and $45^\\circ$ divides $180^\\circ$ by $4$ instead of by $3$.',
    },
    {
      q: 'Two of the three angles of an equilateral triangle are added together. What is their sum?',
      choices: ['$60^\\circ$', '$180^\\circ$', '$90^\\circ$', '$120^\\circ$'],
      answer: 3,
      solution:
        'Each angle of an equilateral triangle is $180^\\circ \\div 3 = 60^\\circ$, so two of them make $60^\\circ + 60^\\circ = 120^\\circ$. ($60^\\circ$ is just one angle, stopping before the addition; $180^\\circ$ adds all three, one angle too many; $90^\\circ$ assumes there is a right angle somewhere, but an equilateral triangle has none.)',
    },
  ],
  // p2 — isosceles angle arithmetic
  [
    {
      q: 'An isosceles triangle has base angles of $72^\\circ$ each. What is the measure of the third angle?',
      choices: ['$36^\\circ$', '$108^\\circ$', '$72^\\circ$', '$54^\\circ$'],
      answer: 0,
      solution:
        'The two base angles use up $72^\\circ + 72^\\circ = 144^\\circ$, so the apex angle is $180^\\circ - 144^\\circ = 36^\\circ$. Check: $72 + 72 + 36 = 180$ ✓. ($108^\\circ$ subtracts only ONE base angle, $180^\\circ - 72^\\circ$, forgetting there are two of them; $72^\\circ$ assumes all three angles match, which would need $216^\\circ$; $54^\\circ$ halves $108^\\circ$, halving an apex angle that was never doubled.)',
    },
    {
      q: 'An isosceles triangle has an apex angle of $34^\\circ$. How large is each base angle?',
      choices: ['$146^\\circ$', '$73^\\circ$', '$34^\\circ$', '$56^\\circ$'],
      answer: 1,
      solution:
        'The two base angles share whatever the apex leaves: $180^\\circ - 34^\\circ = 146^\\circ$. They are equal, so each is $146^\\circ \\div 2 = 73^\\circ$. Check: $73 + 73 + 34 = 180$ ✓. ($146^\\circ$ stops before halving and hands the whole remainder to one angle; $34^\\circ$ copies the apex angle, treating the triangle as equilateral; $56^\\circ$ is $90^\\circ - 34^\\circ$, using a right angle instead of the $180^\\circ$ triangle sum.)',
    },
    {
      q: 'The two base angles of an isosceles triangle each measure $48^\\circ$. What is the third angle?',
      choices: ['$132^\\circ$', '$48^\\circ$', '$84^\\circ$', '$42^\\circ$'],
      answer: 2,
      solution:
        'Two base angles account for $48^\\circ + 48^\\circ = 96^\\circ$, so the apex is $180^\\circ - 96^\\circ = 84^\\circ$. Check: $48 + 48 + 84 = 180$ ✓. ($132^\\circ$ subtracts one base angle instead of both; $48^\\circ$ assumes all three angles are equal; $42^\\circ$ halves $84^\\circ$, an extra halving the apex angle never needed.)',
    },
  ],
  // p3 — 45-45-90, legs given, find the hypotenuse
  [
    {
      q: 'A $45$-$45$-$90$ triangle has legs of length $9$. How long is the hypotenuse?',
      choices: ['$18$', '$9\\sqrt{2}$', '$9\\sqrt{3}$', '$18\\sqrt{2}$'],
      answer: 1,
      solution:
        'In a $45$-$45$-$90$ triangle the legs are equal and the hypotenuse is a leg times $\\sqrt{2}$, so it is $9\\sqrt{2}$. Check: $81 + 81 = 162$ and $(9\\sqrt{2})^2 = 81 \\times 2 = 162$ ✓. ($18$ doubles the leg — that is the $30$-$60$-$90$ hypotenuse rule borrowed by mistake; $9\\sqrt{3}$ uses $\\sqrt{3}$, which belongs to the $30$-$60$-$90$ triangle, not this one; $18\\sqrt{2}$ doubles AND multiplies by $\\sqrt{2}$, applying two rules at once.)',
    },
    {
      q: 'Each leg of a $45$-$45$-$90$ triangle measures $12$. Find the hypotenuse.',
      choices: ['$12\\sqrt{3}$', '$24$', '$12\\sqrt{2}$', '$6\\sqrt{2}$'],
      answer: 2,
      solution:
        'The hypotenuse of a $45$-$45$-$90$ triangle is a leg times $\\sqrt{2}$: $12\\sqrt{2}$. Check: $144 + 144 = 288$ and $(12\\sqrt{2})^2 = 144 \\times 2 = 288$ ✓. ($12\\sqrt{3}$ swaps in $\\sqrt{3}$, the $30$-$60$-$90$ radical; $24$ doubles the leg, which is the $30$-$60$-$90$ rule; $6\\sqrt{2}$ divides by $\\sqrt{2}$ instead of multiplying, and a hypotenuse can never be shorter than a leg.)',
    },
    {
      q: 'A right triangle has two $45^\\circ$ angles, and each of its legs measures $6$. How long is the side opposite the right angle?',
      choices: ['$12$', '$6\\sqrt{3}$', '$3\\sqrt{2}$', '$6\\sqrt{2}$'],
      answer: 3,
      solution:
        'The side opposite the right angle is the hypotenuse, and in a $45$-$45$-$90$ triangle it equals a leg times $\\sqrt{2}$: $6\\sqrt{2}$. Check: $36 + 36 = 72$ and $(6\\sqrt{2})^2 = 36 \\times 2 = 72$ ✓. ($12$ doubles the leg, using the $30$-$60$-$90$ hypotenuse rule; $6\\sqrt{3}$ reaches for $\\sqrt{3}$, the wrong radical for a $45$-$45$-$90$; $3\\sqrt{2}$ halves the leg first and then multiplies, so it comes out shorter than a leg.)',
    },
  ],
  // p4 — 30-60-90, hypotenuse given, find the short side
  [
    {
      q: 'A $30$-$60$-$90$ triangle has a hypotenuse of length $18$. How long is its shortest side?',
      choices: ['$9$', '$9\\sqrt{3}$', '$36$', '$9\\sqrt{2}$'],
      answer: 0,
      solution:
        'In a $30$-$60$-$90$ triangle the sides run $x$, $x\\sqrt{3}$, $2x$, so the hypotenuse is twice the shortest side. Divide: $18 \\div 2 = 9$. ($9\\sqrt{3}$ is the LONGER leg, the side opposite $60^\\circ$ — a different side entirely; $36$ multiplies by $2$ when the given side is already the hypotenuse and you should divide; $9\\sqrt{2}$ mixes in the $45$-$45$-$90$ radical.)',
    },
    {
      q: 'A $30$-$60$-$90$ triangle has a hypotenuse of length $24$. How long is the side opposite the $30^\\circ$ angle?',
      choices: ['$12\\sqrt{3}$', '$12$', '$48$', '$12\\sqrt{2}$'],
      answer: 1,
      solution:
        'The side opposite the $30^\\circ$ angle is the shortest side, and the hypotenuse is twice it, so it is $24 \\div 2 = 12$. Check: $12^2 + (12\\sqrt{3})^2 = 144 + 432 = 576 = 24^2$ ✓. ($12\\sqrt{3}$ is the side opposite $60^\\circ$, not $30^\\circ$; $48$ doubles the hypotenuse instead of halving it; $12\\sqrt{2}$ borrows $\\sqrt{2}$ from the $45$-$45$-$90$ triangle.)',
    },
    {
      q: 'The hypotenuse of a $30$-$60$-$90$ triangle measures $30$. Find the length of its shortest side.',
      choices: ['$15\\sqrt{3}$', '$60$', '$15\\sqrt{2}$', '$15$'],
      answer: 3,
      solution:
        'The hypotenuse is twice the shortest side, so the shortest side is $30 \\div 2 = 15$. Sense check: $15$ is indeed the smallest of $15$, $15\\sqrt{3}$, $30$. ($15\\sqrt{3}$ is the longer leg, opposite the $60^\\circ$ angle; $60$ multiplies by $2$ in the wrong direction, since the hypotenuse was given, not the short side; $15\\sqrt{2}$ uses the $45$-$45$-$90$ radical.)',
    },
  ],
  // p5 — 45-45-90, hypotenuse given in radical form, find a leg
  [
    {
      q: 'A $45$-$45$-$90$ triangle has a hypotenuse of length $5\\sqrt{2}$. How long is each leg?',
      choices: ['$5$', '$10$', '$5\\sqrt{2}$', '$\\frac{5\\sqrt{2}}{2}$'],
      answer: 0,
      solution:
        'The hypotenuse is a leg times $\\sqrt{2}$, so undo that by dividing: leg $= 5\\sqrt{2} \\div \\sqrt{2} = 5$. Check: $25 + 25 = 50$ and $(5\\sqrt{2})^2 = 25 \\times 2 = 50$ ✓. ($10$ multiplies by $\\sqrt{2}$ again instead of dividing, since $5\\sqrt{2} \\times \\sqrt{2} = 10$; $5\\sqrt{2}$ leaves the hypotenuse unchanged, doing nothing at all; $\\frac{5\\sqrt{2}}{2}$ divides by $2$ instead of by $\\sqrt{2}$.)',
    },
    {
      q: 'The hypotenuse of a $45$-$45$-$90$ triangle is $15\\sqrt{2}$. Find the length of one leg.',
      choices: ['$30$', '$15\\sqrt{2}$', '$15$', '$\\frac{15\\sqrt{2}}{2}$'],
      answer: 2,
      solution:
        'Divide the hypotenuse by $\\sqrt{2}$ to get back to a leg: $15\\sqrt{2} \\div \\sqrt{2} = 15$. Check: $225 + 225 = 450$ and $(15\\sqrt{2})^2 = 225 \\times 2 = 450$ ✓. ($30$ multiplies by $\\sqrt{2}$ instead of dividing, since $15\\sqrt{2} \\times \\sqrt{2} = 30$; $15\\sqrt{2}$ just repeats the hypotenuse; $\\frac{15\\sqrt{2}}{2}$ divides by $2$ rather than by $\\sqrt{2}$.)',
    },
    {
      q: 'A square napkin is folded along its diagonal, and the fold measures $13\\sqrt{2}$ inches. How long is each side of the napkin?',
      choices: ['$26$', '$13\\sqrt{2}$', '$\\frac{13\\sqrt{2}}{2}$', '$13$'],
      answer: 3,
      solution:
        'The fold splits the square into two $45$-$45$-$90$ triangles whose legs are sides of the napkin, so the fold is a side times $\\sqrt{2}$. Divide: $13\\sqrt{2} \\div \\sqrt{2} = 13$ inches. Check: $169 + 169 = 338$ and $(13\\sqrt{2})^2 = 169 \\times 2 = 338$ ✓. ($26$ multiplies by $\\sqrt{2}$ instead of dividing; $13\\sqrt{2}$ repeats the diagonal without doing anything; $\\frac{13\\sqrt{2}}{2}$ divides by $2$ rather than by $\\sqrt{2}$.)',
    },
  ],
  // p6 — 30-60-90, short side given, find the longer leg
  [
    {
      q: 'A $30$-$60$-$90$ triangle has a shortest side of length $6$. How long is the longer leg?',
      choices: ['$6\\sqrt{3}$', '$12$', '$6\\sqrt{2}$', '$12\\sqrt{3}$'],
      answer: 0,
      solution:
        'The longer leg is the shortest side times $\\sqrt{3}$: $6\\sqrt{3}$. Check: $6^2 + (6\\sqrt{3})^2 = 36 + 108 = 144 = 12^2$, and $12$ is the hypotenuse ✓. ($12$ is the hypotenuse itself — twice the short side — not the longer leg; $6\\sqrt{2}$ uses $\\sqrt{2}$, which belongs to the $45$-$45$-$90$ triangle; $12\\sqrt{3}$ doubles first and then multiplies by $\\sqrt{3}$, applying both rules when only one is needed.)',
    },
    {
      q: 'In a $30$-$60$-$90$ triangle, the side opposite the $30^\\circ$ angle measures $9$. How long is the side opposite the $60^\\circ$ angle?',
      choices: ['$18$', '$9\\sqrt{3}$', '$9\\sqrt{2}$', '$3\\sqrt{3}$'],
      answer: 1,
      solution:
        'The side opposite $30^\\circ$ is the short side and the side opposite $60^\\circ$ is the short side times $\\sqrt{3}$, so the answer is $9\\sqrt{3}$. ($18$ doubles the short side, which gives the hypotenuse instead; $9\\sqrt{2}$ swaps in the $45$-$45$-$90$ radical; $3\\sqrt{3}$ comes from DIVIDING by $\\sqrt{3}$ rather than multiplying, since $9 \\div \\sqrt{3} = 3\\sqrt{3}$ — and the side opposite the bigger angle has to be the longer one, so dividing is the wrong direction.)',
    },
    {
      q: 'The shortest side of a $30$-$60$-$90$ triangle is $5$ units long. Find the length of the longer leg.',
      choices: ['$5\\sqrt{2}$', '$10$', '$5\\sqrt{3}$', '$10\\sqrt{3}$'],
      answer: 2,
      solution:
        'The longer leg is the shortest side times $\\sqrt{3}$: $5\\sqrt{3}$. Check: $25 + 75 = 100 = 10^2$, matching the hypotenuse of $10$ ✓. ($5\\sqrt{2}$ uses the $45$-$45$-$90$ radical; $10$ is the hypotenuse, twice the short side; $10\\sqrt{3}$ doubles the short side first and then multiplies by $\\sqrt{3}$, doing two steps where the rule asks for one.)',
    },
  ],
  // p7 — 30-60-90, hypotenuse given, find the longer leg
  [
    {
      q: 'A $30$-$60$-$90$ triangle has a hypotenuse of length $20$. How long is the side opposite the $60^\\circ$ angle?',
      choices: ['$10$', '$10\\sqrt{3}$', '$20\\sqrt{3}$', '$10\\sqrt{2}$'],
      answer: 1,
      solution:
        'Two steps. First halve the hypotenuse to get the shortest side: $20 \\div 2 = 10$. Then the side opposite $60^\\circ$ is that times $\\sqrt{3}$: $10\\sqrt{3}$. Check: $100 + 300 = 400 = 20^2$ ✓. ($10$ stops after the first step and gives the side opposite $30^\\circ$; $20\\sqrt{3}$ multiplies the hypotenuse by $\\sqrt{3}$ without halving first; $10\\sqrt{2}$ halves correctly but then uses the $45$-$45$-$90$ radical.)',
    },
    {
      q: 'The hypotenuse of a $30$-$60$-$90$ triangle is $16$. How long is its longer leg?',
      choices: ['$16\\sqrt{3}$', '$8$', '$8\\sqrt{3}$', '$8\\sqrt{2}$'],
      answer: 2,
      solution:
        'Halve the hypotenuse for the short side: $16 \\div 2 = 8$. The longer leg is $8\\sqrt{3}$. Check: $64 + 192 = 256 = 16^2$ ✓. ($16\\sqrt{3}$ skips the halving and scales the hypotenuse itself, which makes the leg longer than the hypotenuse — impossible; $8$ is the shorter leg, stopping one step early; $8\\sqrt{2}$ uses $\\sqrt{2}$ where $\\sqrt{3}$ belongs.)',
    },
    {
      q: 'A $30$-$60$-$90$ triangle has a hypotenuse of length $22$. Find the length of the side opposite the $60^\\circ$ angle.',
      choices: ['$11$', '$22\\sqrt{3}$', '$11\\sqrt{2}$', '$11\\sqrt{3}$'],
      answer: 3,
      solution:
        'First the shortest side: $22 \\div 2 = 11$. Then the side opposite $60^\\circ$ is $11\\sqrt{3}$. Check: $121 + 363 = 484 = 22^2$ ✓. ($11$ is the side opposite $30^\\circ$, one step short of the answer; $22\\sqrt{3}$ forgets to halve and multiplies the hypotenuse instead; $11\\sqrt{2}$ halves correctly but reaches for the $45$-$45$-$90$ radical.)',
    },
  ],
  // p8 — isosceles triangle where the odd angle must be the apex
  [
    {
      q: 'An isosceles triangle has one angle of $130^\\circ$. What is the measure of each of the other two angles?',
      choices: ['$25^\\circ$', '$50^\\circ$', '$130^\\circ$', '$65^\\circ$'],
      answer: 0,
      solution:
        'Two angles of $130^\\circ$ would already total $260^\\circ$, more than a whole triangle, so the $130^\\circ$ angle must be the apex and the other two are the equal base angles. They share $180^\\circ - 130^\\circ = 50^\\circ$, so each is $50^\\circ \\div 2 = 25^\\circ$. ($50^\\circ$ is the shared total, stopping before the halving; $130^\\circ$ assumes the given angle repeats, which is impossible here; $65^\\circ$ halves the GIVEN angle instead of halving what is left over.)',
    },
    {
      q: 'One angle of an isosceles triangle measures $110^\\circ$. How large is each of the other two angles?',
      choices: ['$70^\\circ$', '$35^\\circ$', '$110^\\circ$', '$55^\\circ$'],
      answer: 1,
      solution:
        'A triangle cannot hold two $110^\\circ$ angles, so this is the apex angle and the two equal base angles split the rest: $180^\\circ - 110^\\circ = 70^\\circ$, and $70^\\circ \\div 2 = 35^\\circ$ each. Check: $35 + 35 + 110 = 180$ ✓. ($70^\\circ$ hands the whole remainder to one angle and forgets to halve; $110^\\circ$ repeats the given angle; $55^\\circ$ halves $110^\\circ$ rather than the leftover.)',
    },
    {
      q: 'An isosceles triangle has an angle measuring $96^\\circ$. What is the measure of each of the other two angles?',
      choices: ['$84^\\circ$', '$96^\\circ$', '$48^\\circ$', '$42^\\circ$'],
      answer: 3,
      solution:
        'Two $96^\\circ$ angles would come to $192^\\circ$, already past $180^\\circ$, so $96^\\circ$ is the apex. The base angles share $180^\\circ - 96^\\circ = 84^\\circ$, so each is $84^\\circ \\div 2 = 42^\\circ$. Check: $42 + 42 + 96 = 180$ ✓. ($84^\\circ$ is the remainder before it is split in two; $96^\\circ$ assumes the given angle is one of the repeated pair; $48^\\circ$ halves the given angle instead of the remainder.)',
    },
  ],
  // p9 — diagonal of a square
  [
    {
      q: 'A square has sides of length $6$. How long is its diagonal?',
      choices: ['$6\\sqrt{2}$', '$12$', '$6\\sqrt{3}$', '$3\\sqrt{2}$'],
      answer: 0,
      solution:
        'A diagonal cuts the square into two $45$-$45$-$90$ triangles whose legs are sides of the square, so the diagonal is a side times $\\sqrt{2}$: $6\\sqrt{2}$. Check: $36 + 36 = 72 = (6\\sqrt{2})^2$ ✓. ($12$ doubles the side, which is the $30$-$60$-$90$ hypotenuse rule, not this one; $6\\sqrt{3}$ uses the wrong radical; $3\\sqrt{2}$ halves the side before scaling, giving a diagonal shorter than a side.)',
    },
    {
      q: 'A square floor tile measures $14$ cm along each edge. How long is the diagonal of the tile?',
      choices: ['$28$', '$14\\sqrt{3}$', '$14\\sqrt{2}$', '$7\\sqrt{2}$'],
      answer: 2,
      solution:
        'The diagonal of a square is a side times $\\sqrt{2}$, so it is $14\\sqrt{2}$ cm. Check: $196 + 196 = 392$ and $(14\\sqrt{2})^2 = 196 \\times 2 = 392$ ✓. ($28$ doubles the side, borrowing the $30$-$60$-$90$ rule; $14\\sqrt{3}$ uses $\\sqrt{3}$, which belongs to a $30$-$60$-$90$ triangle; $7\\sqrt{2}$ halves the side first, and a diagonal is always longer than a side.)',
    },
    {
      q: 'A square photograph is $11$ inches on each side. How long is the straight line joining two opposite corners?',
      choices: ['$22$', '$11\\sqrt{3}$', '$\\frac{11\\sqrt{2}}{2}$', '$11\\sqrt{2}$'],
      answer: 3,
      solution:
        'The line joining opposite corners is the diagonal, and in a square that is a side times $\\sqrt{2}$: $11\\sqrt{2}$ inches. Check: $121 + 121 = 242 = (11\\sqrt{2})^2$ ✓. ($22$ doubles the side, which is the $30$-$60$-$90$ rule; $11\\sqrt{3}$ uses the wrong radical; $\\frac{11\\sqrt{2}}{2}$ divides by $\\sqrt{2}$ instead of multiplying, so it comes out shorter than a side.)',
    },
  ],
  // p10 — height of an equilateral triangle
  [
    {
      q: 'An equilateral triangle has sides of length $12$. What is its height?',
      choices: ['$6\\sqrt{3}$', '$12\\sqrt{3}$', '$6$', '$6\\sqrt{2}$'],
      answer: 0,
      solution:
        'The height splits the triangle into two $30$-$60$-$90$ triangles: the short side is half the base ($6$) and the hypotenuse is a full side ($12$). The height is the longer leg, $6\\sqrt{3}$. Check: $144 - 36 = 108$ and $(6\\sqrt{3})^2 = 36 \\times 3 = 108$ ✓. ($12\\sqrt{3}$ forgets to halve the base first; $6$ stops at the half-base and never multiplies by $\\sqrt{3}$; $6\\sqrt{2}$ uses the $45$-$45$-$90$ radical.)',
    },
    {
      q: 'A road sign is an equilateral triangle with sides of $6$ inches. How tall is the sign, measured from one side straight across to the opposite corner?',
      choices: ['$6\\sqrt{3}$', '$3\\sqrt{3}$', '$3$', '$3\\sqrt{2}$'],
      answer: 1,
      solution:
        'Drop the height and you get two $30$-$60$-$90$ triangles with short side $3$ (half of $6$) and hypotenuse $6$. The height is the longer leg: $3\\sqrt{3}$ inches. Check: $36 - 9 = 27$ and $(3\\sqrt{3})^2 = 9 \\times 3 = 27$ ✓. ($6\\sqrt{3}$ scales the whole side instead of the half-side; $3$ is only the half-base; $3\\sqrt{2}$ uses $\\sqrt{2}$ where $\\sqrt{3}$ belongs.)',
    },
    {
      q: 'An equilateral triangle has sides of length $20$. Find its height.',
      choices: ['$20\\sqrt{3}$', '$10$', '$10\\sqrt{3}$', '$10\\sqrt{2}$'],
      answer: 2,
      solution:
        'The height cuts the triangle into two $30$-$60$-$90$ triangles with short side $10$ (half the base) and hypotenuse $20$. The height is the longer leg: $10\\sqrt{3}$. Check: $400 - 100 = 300$ and $(10\\sqrt{3})^2 = 100 \\times 3 = 300$ ✓. ($20\\sqrt{3}$ skips the halving; $10$ is the half-base with no $\\sqrt{3}$; $10\\sqrt{2}$ takes the radical from the $45$-$45$-$90$ triangle.)',
    },
  ],
]

const s123 = [
  // p1 — the angle sum of a quadrilateral
  [
    {
      q: 'Three of the four angles of a quadrilateral each measure $90^\\circ$. What must the fourth angle measure?',
      choices: ['$90^\\circ$', '$180^\\circ$', '$270^\\circ$', '$45^\\circ$'],
      answer: 0,
      solution:
        'The four angles of any quadrilateral add to $360^\\circ$. Three right angles use $270^\\circ$, so the fourth is $360^\\circ - 270^\\circ = 90^\\circ$ — the shape is a rectangle. ($180^\\circ$ comes from using $450^\\circ$ or from thinking a quadrilateral holds $180^\\circ$ per pair of angles; $270^\\circ$ is the running total of the three known angles, with the subtraction never done; $45^\\circ$ halves the right answer for no reason.)',
    },
    {
      q: 'Three angles of a quadrilateral measure $85^\\circ$, $100^\\circ$, and $105^\\circ$. What is the fourth angle?',
      choices: ['$290^\\circ$', '$70^\\circ$', '$250^\\circ$', '$175^\\circ$'],
      answer: 1,
      solution:
        'Add the three known angles: $85 + 100 + 105 = 290$ degrees. The four angles total $360^\\circ$, so the fourth is $360^\\circ - 290^\\circ = 70^\\circ$. Check: $85 + 100 + 105 + 70 = 360$ ✓. ($290^\\circ$ is the running total with the subtraction skipped; $250^\\circ$ subtracts from $540^\\circ$, which is the angle sum of a five-sided shape; $175^\\circ$ leaves the $105^\\circ$ angle out of the total, computing $360 - 185$.)',
    },
    {
      q: 'All four angles of a quadrilateral are equal to one another. How large is each angle?',
      choices: ['$45^\\circ$', '$60^\\circ$', '$135^\\circ$', '$90^\\circ$'],
      answer: 3,
      solution:
        'The four angles total $360^\\circ$ and they are all equal, so each is $360^\\circ \\div 4 = 90^\\circ$ — four right angles, so the shape is a rectangle. ($45^\\circ$ divides $180^\\circ$ by $4$, using a triangle\'s angle sum; $60^\\circ$ divides $180^\\circ$ by $3$; $135^\\circ$ divides $540^\\circ$ by $4$, borrowing the angle sum of a five-sided shape.)',
    },
  ],
  // p2 — naming quadrilaterals from their properties
  [
    {
      q: 'A parallelogram has four sides of equal length, but its angles are not right angles. What is this shape called?',
      choices: ['A rectangle', 'A rhombus', 'A square', 'A trapezoid'],
      answer: 1,
      solution:
        'A parallelogram with four equal sides is a rhombus, and nothing here forces the angles to be right angles — a rhombus can lean over like a squashed square. A rectangle is defined by its four RIGHT angles, which this shape does not have, and a square needs four equal sides AND four right angles, so it fails for the same reason. A trapezoid is not even required to be a parallelogram, since it only promises one pair of parallel sides.',
    },
    {
      q: 'A quadrilateral has four right angles, but its four sides are not all the same length. What is it?',
      choices: ['A rhombus', 'A square', 'A rectangle', 'A trapezoid'],
      answer: 2,
      solution:
        'Four right angles make a rectangle, and since the sides are not all equal it is not the special rectangle we call a square. A rhombus is the one that promises four EQUAL sides, which this shape does not have. A square would need equal sides as well as right angles, so it is ruled out by the second half of the description. And a trapezoid is a much looser shape that need not have any right angles at all.',
    },
    {
      q: 'A quadrilateral has exactly one pair of parallel sides. Which name fits it?',
      choices: ['A parallelogram', 'A rhombus', 'A rectangle', 'A trapezoid'],
      answer: 3,
      solution:
        'A trapezoid is the family for quadrilaterals with a pair of parallel sides, and having exactly one such pair means it stops there. A parallelogram needs TWO pairs of parallel sides, so one pair is not enough. A rhombus and a rectangle are both special parallelograms, so they need two pairs of parallel sides as well — a shape with only one pair can never be either of them.',
    },
  ],
  // p3 — perimeter and side length of an equal-sided quadrilateral
  [
    {
      q: 'A rhombus has sides of length $9$. What is its perimeter?',
      choices: ['$36$', '$18$', '$81$', '$27$'],
      answer: 0,
      solution:
        'All four sides of a rhombus are equal, so the perimeter is $4 \\times 9 = 36$. ($18$ is $2 \\times 9$, adding only two of the four sides; $81$ is $9^2$, which would be the area of a square with side $9$, not a distance around; $27$ is $3 \\times 9$, counting three sides as if the shape were a triangle.)',
    },
    {
      q: 'A square has a perimeter of $44$. How long is each side?',
      choices: ['$88$', '$22$', '$11$', '$176$'],
      answer: 2,
      solution:
        'A square has four equal sides, so divide: $44 \\div 4 = 11$. Check: $4 \\times 11 = 44$ ✓. ($22$ divides by $2$ instead of $4$, as though the square had only two sides; $88$ multiplies by $2$; $176$ multiplies by $4$ instead of dividing — that goes the wrong way, since one side must be shorter than the whole way around.)',
    },
    {
      q: 'A rhombus has a perimeter of $60$. How long is each side?',
      choices: ['$30$', '$240$', '$20$', '$15$'],
      answer: 3,
      solution:
        'The four sides of a rhombus are equal, so each is $60 \\div 4 = 15$. Check: $4 \\times 15 = 60$ ✓. ($30$ divides by $2$ instead of $4$; $20$ divides by $3$, counting three sides like a triangle; $240$ multiplies by $4$ instead of dividing, which makes each side longer than the whole perimeter.)',
    },
  ],
  // p4 — opposite angles of a parallelogram
  [
    {
      q: 'In parallelogram $WXYZ$, angle $W = 118^\\circ$. What is the measure of angle $Y$, the angle opposite angle $W$?',
      choices: ['$118^\\circ$', '$62^\\circ$', '$242^\\circ$', '$59^\\circ$'],
      answer: 0,
      solution:
        'Opposite angles of a parallelogram are equal, so angle $Y = 118^\\circ$. ($62^\\circ$ is $180^\\circ - 118^\\circ$, which is the rule for CONSECUTIVE angles — the ones next door, not the one across; $242^\\circ$ is $360^\\circ - 118^\\circ$, using the whole quadrilateral total for a single angle; $59^\\circ$ halves the given angle for no reason.)',
    },
    {
      q: 'In parallelogram $KLMN$, angle $L = 43^\\circ$. What is the measure of angle $N$, which is opposite angle $L$?',
      choices: ['$137^\\circ$', '$43^\\circ$', '$47^\\circ$', '$86^\\circ$'],
      answer: 1,
      solution:
        'Angles across from each other in a parallelogram are equal, so angle $N = 43^\\circ$. Check: the four angles would be $43$, $137$, $43$, $137$, which total $360$ ✓. ($137^\\circ$ applies the supplementary rule that belongs to neighbouring angles; $47^\\circ$ is $90^\\circ - 43^\\circ$, using a right angle instead of a straight one; $86^\\circ$ doubles the given angle.)',
    },
    {
      q: 'One angle of a parallelogram measures $54^\\circ$. What is the measure of the angle directly across from it?',
      choices: ['$126^\\circ$', '$36^\\circ$', '$54^\\circ$', '$27^\\circ$'],
      answer: 2,
      solution:
        'The angle directly across is the opposite angle, and opposite angles of a parallelogram are equal: $54^\\circ$. ($126^\\circ$ is $180^\\circ - 54^\\circ$, the supplementary rule meant for the two neighbouring angles; $36^\\circ$ is $90^\\circ - 54^\\circ$, subtracting from a right angle; $27^\\circ$ halves the given angle.)',
    },
  ],
  // p5 — consecutive angles of a parallelogram
  [
    {
      q: 'In parallelogram $ABCD$, angle $A = 38^\\circ$. What is the measure of angle $B$, which is next to angle $A$?',
      choices: ['$38^\\circ$', '$142^\\circ$', '$52^\\circ$', '$322^\\circ$'],
      answer: 1,
      solution:
        'Consecutive angles of a parallelogram are supplementary, so angle $B = 180^\\circ - 38^\\circ = 142^\\circ$. Check: $38 + 142 + 38 + 142 = 360$ ✓. ($38^\\circ$ uses the equal-angles rule, which applies to OPPOSITE angles, not neighbours; $52^\\circ$ subtracts from $90^\\circ$ instead of $180^\\circ$; $322^\\circ$ subtracts from $360^\\circ$, the total for all four angles at once.)',
    },
    {
      q: 'In parallelogram $EFGH$, angle $G = 104^\\circ$. What is the measure of angle $H$, which shares a side with angle $G$?',
      choices: ['$104^\\circ$', '$256^\\circ$', '$76^\\circ$', '$14^\\circ$'],
      answer: 2,
      solution:
        'Sharing a side makes these consecutive angles, and consecutive angles of a parallelogram add to $180^\\circ$: angle $H = 180^\\circ - 104^\\circ = 76^\\circ$. ($104^\\circ$ copies the given angle, which is the rule for the opposite angle instead; $256^\\circ$ subtracts from $360^\\circ$; $14^\\circ$ is $104^\\circ - 90^\\circ$, mixing in a right angle where a straight angle belongs.)',
    },
    {
      q: 'Two angles of a parallelogram sit next to each other along the same side, and one of them measures $127^\\circ$. What is the other one?',
      choices: ['$127^\\circ$', '$233^\\circ$', '$37^\\circ$', '$53^\\circ$'],
      answer: 3,
      solution:
        'Angles along the same side are consecutive, so they are supplementary: $180^\\circ - 127^\\circ = 53^\\circ$. Check: $127 + 53 + 127 + 53 = 360$ ✓. ($127^\\circ$ uses the opposite-angle rule on a pair of neighbours; $233^\\circ$ subtracts from $360^\\circ$ and is far too big for a corner of a normal parallelogram; $37^\\circ$ is $127^\\circ - 90^\\circ$, using a right angle instead of $180^\\circ$.)',
    },
  ],
  // p6 — which family statement is always true
  [
    {
      q: 'Which one of these statements is always true?',
      choices: [
        'Every square is a rectangle',
        'Every rectangle is a square',
        'Every parallelogram is a rhombus',
        'Every trapezoid has four equal sides',
      ],
      answer: 0,
      solution:
        'A rectangle is a parallelogram with four right angles, and a square has four right angles, so every square is a rectangle ✓. The reverse fails: a $2$-by-$5$ rectangle has right angles but unequal sides, so it is not a square. A parallelogram need not have equal sides — that same $2$-by-$5$ rectangle is a parallelogram and not a rhombus. And a trapezoid promises only a pair of parallel sides; a trapezoid with parallel sides of length $4$ and $10$ clearly does not have four equal sides.',
    },
    {
      q: 'Which of these statements is always true?',
      choices: [
        'Every rhombus is a square',
        'Every rectangle is a parallelogram',
        'Every quadrilateral is a parallelogram',
        'Every parallelogram has four equal sides',
      ],
      answer: 1,
      solution:
        'A rectangle is defined as a parallelogram with four right angles, so being a parallelogram is built right into it ✓. The others each have a counterexample: a rhombus with angles of $60^\\circ$ and $120^\\circ$ has four equal sides but no right angle, so it is not a square; a quadrilateral with only one pair of parallel sides — a trapezoid — is not a parallelogram; and a $3$-by-$8$ rectangle is a parallelogram whose sides are not all equal.',
    },
    {
      q: 'Which of the following is always true?',
      choices: [
        'A parallelogram always has four right angles',
        'A rhombus always has four right angles',
        'A rectangle always has four equal sides',
        'A square always has four right angles',
      ],
      answer: 3,
      solution:
        'A square is defined by four equal sides AND four right angles, so the last statement is always true ✓. A parallelogram can lean over: one with angles $70^\\circ$, $110^\\circ$, $70^\\circ$, $110^\\circ$ has no right angle. A rhombus can lean the same way — four equal sides do not force square corners. And a $6$-by-$9$ rectangle has four right angles but sides of two different lengths, so a rectangle need not have four equal sides.',
    },
  ],
  // p7 — diagonal properties
  [
    {
      q: 'In which quadrilateral are the two diagonals ALWAYS equal in length?',
      choices: ['A rectangle', 'A rhombus', 'Any parallelogram', 'Any trapezoid'],
      answer: 0,
      solution:
        'Equal diagonals are the special promise of the rectangle. A rhombus offers PERPENDICULAR diagonals instead: a rhombus with diagonals $6$ and $8$ meets at right angles, and $6 \\ne 8$. A leaning parallelogram has diagonals of two different lengths, so "any parallelogram" is too broad. And a trapezoid gives no guarantee at all about its diagonals.',
    },
    {
      q: 'In which of these do the diagonals ALWAYS cut each other exactly in half?',
      choices: ['Any trapezoid', 'Any quadrilateral', 'Any parallelogram', 'Only a rectangle'],
      answer: 2,
      solution:
        'Diagonals that bisect each other are a property of every parallelogram, which is why rectangles, rhombi, and squares all inherit it. A trapezoid that is not a parallelogram — say, with parallel sides $4$ and $10$ — has diagonals that cross off-centre, so they do not bisect. "Any quadrilateral" is even looser and fails for the same reason. And "only a rectangle" is too narrow: a leaning rhombus is not a rectangle, yet its diagonals do bisect each other.',
    },
    {
      q: 'A parallelogram has diagonals that are equal in length AND perpendicular to each other. What must this parallelogram be?',
      choices: [
        'A rhombus that is not a square',
        'A rectangle that is not a square',
        'A trapezoid',
        'A square',
      ],
      answer: 3,
      solution:
        'Equal diagonals make a parallelogram a rectangle, and perpendicular diagonals make it a rhombus. Being both at once means four right angles AND four equal sides, which is exactly a square ✓. A rhombus that is not a square has perpendicular diagonals but unequal ones, so it fails the first condition; a rectangle that is not a square has equal diagonals that are not perpendicular, so it fails the second; and a trapezoid need not even be a parallelogram, so it was ruled out from the start.',
    },
  ],
  // p8 — diagonal of a rectangle
  [
    {
      q: 'A rectangle is $8$ cm long and $6$ cm wide. How long is each diagonal?',
      choices: ['$10$ cm', '$14$ cm', '$48$ cm', '$100$ cm'],
      answer: 0,
      solution:
        'The length and width meet at a right angle, so the diagonal is the hypotenuse of a right triangle with legs $8$ and $6$: $64 + 36 = 100$, and $10^2 = 100$. Each diagonal is $10$ cm — and both are the same, since a rectangle has equal diagonals. ($14$ is $8 + 6$, adding the sides instead of their squares; $48$ is $8 \\times 6$, the area rather than a length; $100$ is the square of the diagonal, one step short.)',
    },
    {
      q: 'A rectangular gate is $15$ m wide and $8$ m tall. How long is the diagonal brace that runs corner to corner?',
      choices: ['$23$ m', '$17$ m', '$120$ m', '$289$ m'],
      answer: 1,
      solution:
        'The brace is the hypotenuse of a right triangle with legs $15$ and $8$: $225 + 64 = 289$, and $17^2 = 289$. The brace is $17$ m — the $8$-$15$-$17$ triple. ($23$ is $15 + 8$, adding the sides rather than their squares; $120$ is $15 \\times 8$, an area; $289$ is the square of the answer and still needs its square root.)',
    },
    {
      q: 'A rectangular tabletop measures $24$ inches by $10$ inches. How long is the diagonal of the tabletop?',
      choices: ['$34$ inches', '$240$ inches', '$26$ inches', '$676$ inches'],
      answer: 2,
      solution:
        'A diagonal splits the rectangle into two right triangles with legs $24$ and $10$, so the diagonal is the hypotenuse: $576 + 100 = 676$, and $26^2 = 676$. The diagonal is $26$ inches ($5$-$12$-$13$ doubled). ($34$ is $24 + 10$, adding the sides; $240$ is $24 \\times 10$, the area; $676$ is the diagonal squared, before the square root.)',
    },
  ],
  // p9 — setting up an equation from consecutive angles
  [
    {
      q: 'In a parallelogram, one angle is $5$ times as large as the angle next to it. What is the measure of the smaller angle?',
      choices: ['$36^\\circ$', '$30^\\circ$', '$150^\\circ$', '$60^\\circ$'],
      answer: 1,
      solution:
        'Call the smaller angle $x$, so its neighbour is $5x$. Consecutive angles of a parallelogram are supplementary: $x + 5x = 180^\\circ$, so $6x = 180^\\circ$ and $x = 30^\\circ$. The two angles are $30^\\circ$ and $150^\\circ$ ✓. ($150^\\circ$ is the LARGER angle, answering the wrong half of the question; $36^\\circ$ is $180^\\circ \\div 5$, dividing by the multiplier instead of by $6$; $60^\\circ$ is $360^\\circ \\div 6$, using the four-angle total for a pair of neighbours.)',
    },
    {
      q: 'In a parallelogram, one angle is $3$ times as large as the angle next to it. What is the measure of the LARGER angle?',
      choices: ['$45^\\circ$', '$60^\\circ$', '$135^\\circ$', '$270^\\circ$'],
      answer: 2,
      solution:
        'Let the smaller angle be $x$ and the larger be $3x$. Neighbouring angles are supplementary: $x + 3x = 180^\\circ$, so $4x = 180^\\circ$ and $x = 45^\\circ$. The larger angle is $3 \\times 45^\\circ = 135^\\circ$ ✓. ($45^\\circ$ is the smaller angle, stopping one step early; $60^\\circ$ is $180^\\circ \\div 3$, dividing by the multiplier rather than by $4$; $270^\\circ$ triples $90^\\circ$ and is far too large to be an angle of a parallelogram.)',
    },
    {
      q: 'In a parallelogram, one angle is $20^\\circ$ larger than the angle next to it. What is the measure of the smaller angle?',
      choices: ['$100^\\circ$', '$160^\\circ$', '$90^\\circ$', '$80^\\circ$'],
      answer: 3,
      solution:
        'Let the smaller angle be $x$; its neighbour is $x + 20^\\circ$. Consecutive angles are supplementary, so $x + (x + 20^\\circ) = 180^\\circ$, giving $2x = 160^\\circ$ and $x = 80^\\circ$. The angles are $80^\\circ$ and $100^\\circ$ ✓. ($100^\\circ$ is the larger angle, not the smaller one; $160^\\circ$ is the total left after removing the $20^\\circ$, with the halving never done; $90^\\circ$ is $180^\\circ \\div 2$, ignoring the $20^\\circ$ difference entirely.)',
    },
  ],
  // p10 — diagonal of a square from its perimeter or area
  [
    {
      q: 'A square has a perimeter of $28$. How long is its diagonal?',
      choices: ['$7\\sqrt{2}$', '$14$', '$7\\sqrt{3}$', '$28\\sqrt{2}$'],
      answer: 0,
      solution:
        'First find a side: $28 \\div 4 = 7$. The diagonal of a square is the hypotenuse of a $45$-$45$-$90$ triangle, so it is a side times $\\sqrt{2}$: $7\\sqrt{2}$. ($14$ doubles the side, which is the $30$-$60$-$90$ rule, not the square-diagonal rule; $7\\sqrt{3}$ uses $\\sqrt{3}$ where $\\sqrt{2}$ belongs; $28\\sqrt{2}$ scales the PERIMETER instead of a single side.)',
    },
    {
      q: 'A square has a perimeter of $48$. How long is its diagonal?',
      choices: ['$24$', '$12\\sqrt{2}$', '$12\\sqrt{3}$', '$48\\sqrt{2}$'],
      answer: 1,
      solution:
        'Each side is $48 \\div 4 = 12$, and the diagonal is a side times $\\sqrt{2}$: $12\\sqrt{2}$. Check: $144 + 144 = 288 = (12\\sqrt{2})^2$ ✓. ($24$ doubles the side, borrowing the $30$-$60$-$90$ hypotenuse rule; $12\\sqrt{3}$ uses the wrong radical; $48\\sqrt{2}$ forgets to divide the perimeter by $4$ first.)',
    },
    {
      q: 'A square garden has an area of $64$ square meters. How long is the diagonal path across it?',
      choices: ['$16$', '$64\\sqrt{2}$', '$8\\sqrt{3}$', '$8\\sqrt{2}$'],
      answer: 3,
      solution:
        'The area of a square is side times side, and $8 \\times 8 = 64$, so each side is $8$ meters. The diagonal is a side times $\\sqrt{2}$: $8\\sqrt{2}$ meters. Check: $64 + 64 = 128 = (8\\sqrt{2})^2$ ✓. ($16$ doubles the side, using the $30$-$60$-$90$ rule; $64\\sqrt{2}$ treats the AREA as if it were the side length; $8\\sqrt{3}$ picks $\\sqrt{3}$ instead of $\\sqrt{2}$.)',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 12,
  sections: {
    '12.1': s121,
    '12.2': s122,
    '12.3': s123,
  },
}
