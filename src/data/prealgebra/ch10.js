// Prealgebra — Chapter 10: Angles
// All problems, explanations, and examples are original MathQuest content.

const s101 = {
  id: '10.1',
  title: 'Measuring Angles',
  learn: {
    concepts: [
      {
        heading: 'Degrees and the angle family',
        body: 'We measure angles in degrees: a full spin all the way around is $360^\\circ$. An angle smaller than $90^\\circ$ is acute, an angle of exactly $90^\\circ$ is a right angle, an angle between $90^\\circ$ and $180^\\circ$ is obtuse, and an angle of exactly $180^\\circ$ — a perfectly flat one — is a straight angle.',
      },
      {
        heading: 'Complementary and supplementary pairs',
        body: 'Two angles that add to $90^\\circ$ are complementary, and two angles that add to $180^\\circ$ are supplementary. A memory trick: $c$ comes before $s$ in the alphabet, and $90$ comes before $180$. So the complement of $30^\\circ$ is $60^\\circ$, while its supplement is $150^\\circ$.',
      },
      {
        heading: 'Straight lines and full turns',
        body: 'Angles that fit together along one side of a straight line add to $180^\\circ$, and angles that fit together all the way around a point add to $360^\\circ$. These two facts unlock a huge number of angle puzzles — whenever you know all the angles but one, you can find the missing one.',
      },
      {
        heading: 'Vertical angles are twins',
        body: 'When two lines cross, they make four angles. The two angles directly across from each other are called vertical angles, and they are always equal. Why? Each one teams up with the same neighbor to make a straight line, so both must equal $180^\\circ$ minus that shared neighbor.',
      },
    ],
    examples: [
      {
        problem: 'Find the complement and the supplement of a $35^\\circ$ angle.',
        steps: [
          'The complement pairs with $35^\\circ$ to make $90^\\circ$: that is $90^\\circ - 35^\\circ = 55^\\circ$.',
          'The supplement pairs with $35^\\circ$ to make $180^\\circ$: that is $180^\\circ - 35^\\circ = 145^\\circ$.',
        ],
        answer: 'The complement is $55^\\circ$ and the supplement is $145^\\circ$',
      },
      {
        problem: 'Two lines cross at point $P$. One of the four angles measures $35^\\circ$. Find the other three angles.',
        steps: [
          'The angle directly across from the $35^\\circ$ angle is its vertical twin, so it also measures $35^\\circ$.',
          'Each of the other two angles sits next to the $35^\\circ$ angle along a straight line, so each measures $180^\\circ - 35^\\circ = 145^\\circ$.',
          'Check: $35^\\circ + 145^\\circ + 35^\\circ + 145^\\circ = 360^\\circ$, a full turn around $P$. ✓',
        ],
        answer: 'The other three angles are $35^\\circ$, $145^\\circ$, and $145^\\circ$',
      },
      {
        problem: 'An angle is $20^\\circ$ more than its complement. What is the angle?',
        steps: [
          'Call the complement $c$. Then the angle is $c + 20$, and together they make $90^\\circ$: $c + (c + 20) = 90$.',
          'So $2c + 20 = 90$, which gives $2c = 70$ and $c = 35$.',
          'The angle itself is $c + 20 = 55^\\circ$. Check: $55^\\circ + 35^\\circ = 90^\\circ$, and $55$ is indeed $20$ more than $35$. ✓',
        ],
        answer: 'The angle measures $55^\\circ$',
      },
    ],
  },
  problems: [
    {
      q: 'An angle measures $138^\\circ$. What kind of angle is it?',
      choices: ['Acute', 'Right', 'Obtuse', 'Straight'],
      answer: 2,
      solution: 'Since $138^\\circ$ is between $90^\\circ$ and $180^\\circ$, the angle is obtuse. Acute angles are smaller than $90^\\circ$, and a straight angle is exactly $180^\\circ$.',
    },
    {
      q: 'What is the complement of a $62^\\circ$ angle?',
      choices: ['$118^\\circ$', '$28^\\circ$', '$38^\\circ$', '$32^\\circ$'],
      answer: 1,
      solution: 'Complementary angles add to $90^\\circ$, so the complement is $90^\\circ - 62^\\circ = 28^\\circ$. (The value $118^\\circ$ is the supplement — that pair adds to $180^\\circ$ instead.)',
    },
    {
      q: 'What is the supplement of a $75^\\circ$ angle?',
      choices: ['$15^\\circ$', '$95^\\circ$', '$285^\\circ$', '$105^\\circ$'],
      answer: 3,
      solution: 'Supplementary angles add to $180^\\circ$, so the supplement is $180^\\circ - 75^\\circ = 105^\\circ$. (The value $15^\\circ$ is the complement, which uses $90^\\circ$ instead.)',
    },
    {
      q: 'Two lines cross at point $Q$. One of the four angles measures $40^\\circ$. What is the measure of the angle directly across from it?',
      choices: ['$140^\\circ$', '$50^\\circ$', '$40^\\circ$', '$90^\\circ$'],
      answer: 2,
      solution: 'The angle directly across is a vertical angle, and vertical angles are always equal. So it also measures $40^\\circ$. The two neighboring angles are the ones that measure $180^\\circ - 40^\\circ = 140^\\circ$.',
    },
    {
      q: 'Two angles fit together along one side of a straight line. One of them measures $113^\\circ$. What is the other?',
      choices: ['$67^\\circ$', '$77^\\circ$', '$113^\\circ$', '$247^\\circ$'],
      answer: 0,
      solution: 'Angles along a straight line add to $180^\\circ$, so the other angle is $180^\\circ - 113^\\circ = 67^\\circ$. Check: $113^\\circ + 67^\\circ = 180^\\circ$. ✓',
    },
    {
      q: 'Three angles fit together all the way around a point. Two of them measure $150^\\circ$ and $120^\\circ$. What is the third?',
      choices: ['$270^\\circ$', '$90^\\circ$', '$60^\\circ$', '$100^\\circ$'],
      answer: 1,
      solution: 'A full turn around a point is $360^\\circ$. The two known angles use up $150^\\circ + 120^\\circ = 270^\\circ$, so the third angle is $360^\\circ - 270^\\circ = 90^\\circ$.',
    },
    {
      q: 'Two lines cross at a point, making four angles. One angle measures $35^\\circ$. What is the sum of the other three angles?',
      choices: ['$325^\\circ$', '$145^\\circ$', '$215^\\circ$', '$290^\\circ$'],
      answer: 0,
      solution: 'All four angles around the point add to $360^\\circ$. Take away the known one: $360^\\circ - 35^\\circ = 325^\\circ$. (You can also add them up: $35^\\circ + 145^\\circ + 145^\\circ = 325^\\circ$.)',
    },
    {
      q: 'An angle is $20^\\circ$ more than its complement. What is the angle?',
      choices: ['$35^\\circ$', '$70^\\circ$', '$45^\\circ$', '$55^\\circ$'],
      answer: 3,
      solution: 'Let the complement be $c$, so the angle is $c + 20$ and $c + (c + 20) = 90$. Then $2c = 70$, so $c = 35$ and the angle is $55^\\circ$. Check: $55 + 35 = 90$, and $55$ is $20$ more than $35$. ✓ (Careful: $35^\\circ$ is the complement, not the angle itself.)',
    },
    {
      q: 'An angle is four times as large as its supplement. What is the angle?',
      choices: ['$144^\\circ$', '$36^\\circ$', '$72^\\circ$', '$150^\\circ$'],
      answer: 0,
      solution: 'Let the supplement be $s$, so the angle is $4s$ and $s + 4s = 180$. Then $5s = 180$, so $s = 36$ and the angle is $4 \\times 36 = 144^\\circ$. Check: $144 + 36 = 180$, and $144$ is four times $36$. ✓',
    },
    {
      q: 'Two lines cross at a point. One pair of vertical angles measures $(3x + 10)^\\circ$ and $(5x - 30)^\\circ$. What is the measure of each of these angles?',
      choices: ['$20^\\circ$', '$70^\\circ$', '$110^\\circ$', '$130^\\circ$'],
      answer: 1,
      solution: 'Vertical angles are equal, so $3x + 10 = 5x - 30$. Adding $30$ and subtracting $3x$ from both sides gives $40 = 2x$, so $x = 20$. The angle is $3(20) + 10 = 70^\\circ$. Check the other expression: $5(20) - 30 = 70^\\circ$. ✓ (Careful: $x = 20$ is not the answer — the question asks for the angle!)',
    },
  ],
}

const s102 = {
  id: '10.2',
  title: 'Parallel Lines',
  learn: {
    concepts: [
      {
        heading: 'A transversal makes eight angles',
        body: 'When a line crosses two parallel lines, we call it a transversal. It makes four angles at each crossing — eight in all. Here is the wonderful secret: those eight angles come in only two sizes, and the two sizes add to $180^\\circ$. Know one angle, and you can find all eight!',
      },
      {
        heading: 'Corresponding angles are equal',
        body: 'The two crossings look like identical copies of each other, just slid along the transversal. Angles in matching positions — say, the upper-left angle at each crossing — are called corresponding angles, and they are equal.',
      },
      {
        heading: 'Alternate interior angles are equal',
        body: 'The angles between the two parallel lines are called interior angles. Two interior angles on opposite sides of the transversal are alternate interior angles — they form a Z shape — and they are always equal.',
      },
      {
        heading: 'Same-side interior angles add to $180^\\circ$',
        body: 'Two interior angles on the same side of the transversal (also called co-interior angles) are supplementary: they add to $180^\\circ$. They form a C shape, and together they would close up into a straight line.',
      },
    ],
    examples: [
      {
        problem: 'A transversal crosses two parallel lines. One of the eight angles measures $65^\\circ$. Find all eight angles.',
        steps: [
          'At the first crossing, the $65^\\circ$ angle has a vertical twin of $65^\\circ$, and its two neighbors each measure $180^\\circ - 65^\\circ = 115^\\circ$.',
          'The second crossing is a corresponding copy of the first, so it has the same four angles: $65^\\circ$, $65^\\circ$, $115^\\circ$, $115^\\circ$.',
          'So four of the angles measure $65^\\circ$ and the other four measure $115^\\circ$.',
        ],
        answer: 'Four angles measure $65^\\circ$ and four measure $115^\\circ$',
      },
      {
        problem: 'A transversal crosses parallel lines $m$ and $n$. An interior angle at line $m$ measures $72^\\circ$. Find the alternate interior angle and the same-side interior angle at line $n$.',
        steps: [
          'The alternate interior angle is on the other side of the transversal, forming a Z shape — it is equal, so it measures $72^\\circ$.',
          'The same-side interior angle is supplementary to $72^\\circ$, so it measures $180^\\circ - 72^\\circ = 108^\\circ$.',
        ],
        answer: 'The alternate interior angle is $72^\\circ$ and the same-side interior angle is $108^\\circ$',
      },
      {
        problem: 'A transversal crosses two parallel lines. Two same-side interior angles measure $(2x + 30)^\\circ$ and $x^\\circ$. Find both angles.',
        steps: [
          'Same-side interior angles add to $180^\\circ$: $(2x + 30) + x = 180$.',
          'Combine: $3x + 30 = 180$, so $3x = 150$ and $x = 50$.',
          'The angles are $50^\\circ$ and $2(50) + 30 = 130^\\circ$. Check: $50^\\circ + 130^\\circ = 180^\\circ$. ✓',
        ],
        answer: 'The angles measure $50^\\circ$ and $130^\\circ$',
      },
    ],
  },
  problems: [
    {
      q: 'A transversal crosses two parallel lines. One angle measures $58^\\circ$. What is the measure of its corresponding angle at the other crossing?',
      choices: ['$122^\\circ$', '$58^\\circ$', '$32^\\circ$', '$116^\\circ$'],
      answer: 1,
      solution: 'Corresponding angles sit in matching positions at the two crossings, and when the lines are parallel they are equal. So the corresponding angle also measures $58^\\circ$.',
    },
    {
      q: 'A transversal crosses two parallel lines. An interior angle measures $74^\\circ$. What is the measure of its alternate interior angle?',
      choices: ['$74^\\circ$', '$106^\\circ$', '$16^\\circ$', '$148^\\circ$'],
      answer: 0,
      solution: 'Alternate interior angles form a Z shape between parallel lines, and they are equal. So the alternate interior angle is also $74^\\circ$. ($106^\\circ$ would be the same-side interior angle, since $74 + 106 = 180$.)',
    },
    {
      q: 'A transversal crosses two parallel lines. An interior angle measures $110^\\circ$. What is the measure of the same-side interior angle at the other line?',
      choices: ['$110^\\circ$', '$55^\\circ$', '$70^\\circ$', '$20^\\circ$'],
      answer: 2,
      solution: 'Same-side interior angles are supplementary — they add to $180^\\circ$. So the other angle is $180^\\circ - 110^\\circ = 70^\\circ$. (If they were alternate interior angles, they would be equal instead.)',
    },
    {
      q: 'A transversal crosses two parallel lines, making eight angles. One angle measures $60^\\circ$. How many of the eight angles (including that one) measure $60^\\circ$?',
      choices: ['$1$', '$2$', '$4$', '$8$'],
      answer: 2,
      solution: 'The eight angles come in just two sizes: $60^\\circ$ and $180^\\circ - 60^\\circ = 120^\\circ$. At each crossing, two of the four angles measure $60^\\circ$ (a vertical pair), so in total $4$ of the eight angles measure $60^\\circ$.',
    },
    {
      q: 'A transversal crosses two parallel lines. One of the eight angles measures $48^\\circ$. What do each of the obtuse angles measure?',
      choices: ['$48^\\circ$', '$42^\\circ$', '$138^\\circ$', '$132^\\circ$'],
      answer: 3,
      solution: 'The eight angles come in two sizes that add to $180^\\circ$. Since the acute size is $48^\\circ$, the obtuse size is $180^\\circ - 48^\\circ = 132^\\circ$. (Watch out: $42^\\circ$ comes from using $90^\\circ$, which is the complement rule, not the one we need here.)',
    },
    {
      q: 'Two parallel streets are crossed by a straight road. The road makes a $118^\\circ$ angle with the first street. What acute angle does the road make with the second street?',
      choices: ['$118^\\circ$', '$62^\\circ$', '$28^\\circ$', '$58^\\circ$'],
      answer: 1,
      solution: 'At the first street, the road makes angles of $118^\\circ$ and $180^\\circ - 118^\\circ = 62^\\circ$. The second street is parallel, so its crossing is a corresponding copy — the same two sizes appear there. The acute one is $62^\\circ$.',
    },
    {
      q: 'A transversal crosses two parallel lines. A pair of corresponding angles measures $(4x - 10)^\\circ$ and $70^\\circ$. What is $x$?',
      choices: ['$20$', '$15$', '$25$', '$40$'],
      answer: 0,
      solution: 'Corresponding angles are equal, so $4x - 10 = 70$. Adding $10$ gives $4x = 80$, so $x = 20$. Check: $4(20) - 10 = 70$. ✓',
    },
    {
      q: 'A transversal crosses two parallel lines. Two same-side interior angles measure $(3x)^\\circ$ and $(x + 40)^\\circ$. What is the measure of the larger angle?',
      choices: ['$35^\\circ$', '$75^\\circ$', '$140^\\circ$', '$105^\\circ$'],
      answer: 3,
      solution: 'Same-side interior angles add to $180^\\circ$: $3x + (x + 40) = 180$, so $4x = 140$ and $x = 35$. The angles are $3(35) = 105^\\circ$ and $35 + 40 = 75^\\circ$. The larger is $105^\\circ$. Check: $105 + 75 = 180$. ✓',
    },
    {
      q: 'A transversal crosses two parallel lines. A pair of alternate interior angles measures $(5x - 20)^\\circ$ and $(3x + 40)^\\circ$. What is the measure of each of these angles?',
      choices: ['$30^\\circ$', '$130^\\circ$', '$50^\\circ$', '$150^\\circ$'],
      answer: 1,
      solution: 'Alternate interior angles are equal, so $5x - 20 = 3x + 40$. Subtracting $3x$ and adding $20$ gives $2x = 60$, so $x = 30$. The angle is $5(30) - 20 = 130^\\circ$. Check: $3(30) + 40 = 130^\\circ$. ✓ (Remember, $x = 30$ is a step, not the final answer.)',
    },
    {
      q: 'Lines $m$ and $n$ are parallel. A path starts on line $m$, goes to a point $P$ between the two lines, turns, and continues to line $n$. The first part of the path makes a $35^\\circ$ angle with line $m$, and the second part makes a $45^\\circ$ angle with line $n$. What is the angle of the turn at $P$ (the angle between the two parts of the path)?',
      choices: ['$80^\\circ$', '$100^\\circ$', '$90^\\circ$', '$70^\\circ$'],
      answer: 0,
      solution: 'Draw a helper line through $P$ parallel to both $m$ and $n$. It splits the angle at $P$ into two pieces. Each piece is an alternate interior angle with one of the path angles: one piece is $35^\\circ$ (matching line $m$) and the other is $45^\\circ$ (matching line $n$). So the turn at $P$ measures $35^\\circ + 45^\\circ = 80^\\circ$.',
    },
  ],
}

const s103 = {
  id: '10.3',
  title: 'Angles in Polygons',
  learn: {
    concepts: [
      {
        heading: 'Triangle angles add to $180^\\circ$',
        body: 'The three angles of any triangle — skinny, wide, or lopsided — always add to exactly $180^\\circ$. So if you know two angles of a triangle, the third is whatever is left over from $180^\\circ$.',
      },
      {
        heading: 'The exterior angle shortcut',
        body: 'Extend one side of a triangle past a vertex, and the angle formed outside is called an exterior angle. It pairs with the interior angle to make a straight $180^\\circ$ — which means the exterior angle equals the sum of the other two interior angles of the triangle. A handy two-for-one!',
      },
      {
        heading: 'Cutting polygons into triangles',
        body: 'A quadrilateral can be cut into $2$ triangles by one diagonal, so its angles add to $2 \\times 180^\\circ = 360^\\circ$. In general, drawing diagonals from one vertex cuts an $n$-sided polygon into $n - 2$ triangles, so its interior angles add to $(n - 2) \\cdot 180^\\circ$.',
      },
      {
        heading: 'Regular polygons and the walk-around trick',
        body: 'A regular polygon has all sides and all angles equal, so each interior angle is $\\frac{(n-2) \\cdot 180^\\circ}{n}$. Even better: if you walk all the way around any polygon, your turns (the exterior angles) always add to $360^\\circ$ — one full spin. For a regular polygon, each exterior angle is $\\frac{360^\\circ}{n}$.',
      },
    ],
    examples: [
      {
        problem: 'In triangle $ABC$, angle $A = 40^\\circ$ and angle $B = 75^\\circ$. Find angle $C$.',
        steps: [
          'The three angles add to $180^\\circ$, so angle $C = 180^\\circ - 40^\\circ - 75^\\circ$.',
          'First $40 + 75 = 115$, then $180 - 115 = 65$.',
        ],
        answer: 'Angle $C = 65^\\circ$',
      },
      {
        problem: 'Find the measure of each interior angle of a regular hexagon (six sides).',
        steps: [
          'The interior angles of a hexagon add to $(6 - 2) \\cdot 180^\\circ = 4 \\cdot 180^\\circ = 720^\\circ$.',
          'A regular hexagon shares that total equally among its $6$ angles: $720^\\circ \\div 6 = 120^\\circ$.',
        ],
        answer: 'Each interior angle of a regular hexagon is $120^\\circ$',
      },
      {
        problem: 'Each exterior angle of a regular polygon measures $24^\\circ$. How many sides does the polygon have?',
        steps: [
          'Walking around any polygon, the exterior angles add to one full spin: $360^\\circ$.',
          'If every turn is $24^\\circ$, the number of turns is $360^\\circ \\div 24^\\circ = 15$.',
          'One turn per vertex means one turn per side, so the polygon has $15$ sides.',
        ],
        answer: 'The polygon has $15$ sides',
      },
    ],
  },
  problems: [
    {
      q: 'In triangle $ABC$, angle $A = 52^\\circ$ and angle $B = 63^\\circ$. What is angle $C$?',
      choices: ['$65^\\circ$', '$75^\\circ$', '$245^\\circ$', '$55^\\circ$'],
      answer: 0,
      solution: 'Triangle angles add to $180^\\circ$. Since $52 + 63 = 115$, angle $C = 180^\\circ - 115^\\circ = 65^\\circ$. (Using $360^\\circ$ would give $245^\\circ$ — but that rule is for quadrilaterals, not triangles!)',
    },
    {
      q: 'A right triangle has one acute angle measuring $34^\\circ$. What is the other acute angle?',
      choices: ['$66^\\circ$', '$56^\\circ$', '$146^\\circ$', '$34^\\circ$'],
      answer: 1,
      solution: 'The right angle uses up $90^\\circ$, leaving $180^\\circ - 90^\\circ = 90^\\circ$ for the two acute angles. So the other acute angle is $90^\\circ - 34^\\circ = 56^\\circ$. The two acute angles of a right triangle are always complementary!',
    },
    {
      q: 'Three angles of a quadrilateral measure $100^\\circ$, $85^\\circ$, and $95^\\circ$. What is the fourth angle?',
      choices: ['$90^\\circ$', '$100^\\circ$', '$80^\\circ$', '$60^\\circ$'],
      answer: 2,
      solution: 'The angles of a quadrilateral add to $360^\\circ$. The three known angles total $100 + 85 + 95 = 280$, so the fourth is $360^\\circ - 280^\\circ = 80^\\circ$.',
    },
    {
      q: 'What is the sum of the interior angles of a pentagon (five sides)?',
      choices: ['$360^\\circ$', '$450^\\circ$', '$720^\\circ$', '$540^\\circ$'],
      answer: 3,
      solution: 'A pentagon can be cut into $5 - 2 = 3$ triangles from one vertex, so its angles add to $3 \\times 180^\\circ = 540^\\circ$. ($720^\\circ$ is the total for a hexagon.)',
    },
    {
      q: 'In triangle $ABC$, angle $A = 35^\\circ$ and angle $B = 65^\\circ$. Side $BC$ is extended past $C$ to a point $D$. What is the measure of angle $ACD$?',
      choices: ['$100^\\circ$', '$80^\\circ$', '$130^\\circ$', '$90^\\circ$'],
      answer: 0,
      solution: 'Angle $ACD$ is an exterior angle of the triangle, so it equals the sum of the two remote interior angles: $35^\\circ + 65^\\circ = 100^\\circ$. Check the long way: angle $ACB = 180 - 35 - 65 = 80^\\circ$, and $180^\\circ - 80^\\circ = 100^\\circ$. ✓',
    },
    {
      q: 'What is the measure of each interior angle of a regular octagon (eight sides)?',
      choices: ['$120^\\circ$', '$135^\\circ$', '$150^\\circ$', '$144^\\circ$'],
      answer: 1,
      solution: 'The angle sum is $(8 - 2) \\cdot 180^\\circ = 1080^\\circ$, shared equally among $8$ angles: $1080^\\circ \\div 8 = 135^\\circ$. Quicker check: each exterior angle is $360^\\circ \\div 8 = 45^\\circ$, and $180^\\circ - 45^\\circ = 135^\\circ$. ✓',
    },
    {
      q: 'An isosceles triangle has a vertex angle of $44^\\circ$, and its two base angles are equal. What is each base angle?',
      choices: ['$68^\\circ$', '$136^\\circ$', '$46^\\circ$', '$72^\\circ$'],
      answer: 0,
      solution: 'The two base angles share what is left of $180^\\circ$: that is $180^\\circ - 44^\\circ = 136^\\circ$. Since they are equal, each is $136^\\circ \\div 2 = 68^\\circ$. ($136^\\circ$ is the total for both, not each one.)',
    },
    {
      q: 'The interior angles of a polygon add to $1080^\\circ$. How many sides does it have?',
      choices: ['$6$', '$7$', '$8$', '$9$'],
      answer: 2,
      solution: 'The sum is $(n - 2) \\cdot 180^\\circ$, so $n - 2 = 1080 \\div 180 = 6$, which gives $n = 8$. (Do not forget to add the $2$ back at the end!)',
    },
    {
      q: 'Each interior angle of a regular polygon measures $156^\\circ$. How many sides does the polygon have?',
      choices: ['$12$', '$13$', '$16$', '$15$'],
      answer: 3,
      solution: 'Each exterior angle is $180^\\circ - 156^\\circ = 24^\\circ$, and the exterior angles of any polygon add to $360^\\circ$. So the polygon has $360 \\div 24 = 15$ sides. This exterior-angle trick is much faster than juggling the $(n-2) \\cdot 180^\\circ$ formula!',
    },
    {
      q: 'The angles of a triangle are in the ratio $2 : 3 : 4$. What is the largest angle?',
      choices: ['$80^\\circ$', '$90^\\circ$', '$40^\\circ$', '$100^\\circ$'],
      answer: 0,
      solution: 'The ratio has $2 + 3 + 4 = 9$ parts, and they share $180^\\circ$, so each part is $180 \\div 9 = 20^\\circ$. The angles are $40^\\circ$, $60^\\circ$, and $80^\\circ$, so the largest is $4 \\times 20 = 80^\\circ$. Check: $40 + 60 + 80 = 180$. ✓',
    },
  ],
}

const challenge = [
  {
    q: 'An angle is $24^\\circ$ less than twice its complement. What is the angle?',
    choices: ['$52^\\circ$', '$38^\\circ$', '$66^\\circ$', '$44^\\circ$'],
    answer: 0,
    solution: 'Call the angle $x$. Its complement is $90 - x$, and the angle is twice that minus $24$: $x = 2(90 - x) - 24 = 156 - 2x$. So $3x = 156$ and $x = 52^\\circ$. Check: the complement is $38^\\circ$, and $2 \\times 38 - 24 = 52$. ✓',
  },
  {
    q: 'Four angles fit together all the way around a point, measuring $x^\\circ$, $2x^\\circ$, $3x^\\circ$, and $4x^\\circ$. What is the smallest of the four angles?',
    choices: ['$144^\\circ$', '$36^\\circ$', '$40^\\circ$', '$18^\\circ$'],
    answer: 1,
    solution: 'Angles around a point add to $360^\\circ$: $x + 2x + 3x + 4x = 10x = 360$, so $x = 36$. The smallest angle is $36^\\circ$ (and the largest is $4 \\times 36 = 144^\\circ$). Using $180^\\circ$ here would give $18^\\circ$ — but a full turn around a point is $360^\\circ$.',
  },
  {
    q: 'A transversal crosses two parallel lines. One same-side interior angle is five times the other. What is the larger of the two angles?',
    choices: ['$30^\\circ$', '$135^\\circ$', '$150^\\circ$', '$120^\\circ$'],
    answer: 2,
    solution: 'Same-side interior angles add to $180^\\circ$. If the smaller is $x$, then $x + 5x = 180$, so $x = 30$ and the larger is $5 \\times 30 = 150^\\circ$. Check: $30 + 150 = 180$. ✓',
  },
  {
    q: 'In triangle $ABC$, angle $B$ is twice angle $A$, and angle $C$ is $20^\\circ$ more than angle $A$. What is angle $C$?',
    choices: ['$40^\\circ$', '$80^\\circ$', '$50^\\circ$', '$60^\\circ$'],
    answer: 3,
    solution: 'Let angle $A = a$. Then $a + 2a + (a + 20) = 180$, so $4a + 20 = 180$, giving $4a = 160$ and $a = 40$. So angle $C = 40 + 20 = 60^\\circ$. Check: $40 + 80 + 60 = 180$. ✓',
  },
  {
    q: 'Each exterior angle of a regular polygon measures $40^\\circ$. How many sides does the polygon have?',
    choices: ['$8$', '$9$', '$10$', '$12$'],
    answer: 1,
    solution: 'The exterior angles of any polygon add to $360^\\circ$ — one full walk around. So the number of sides is $360 \\div 40 = 9$.',
  },
  {
    q: 'What is the measure of each interior angle of a regular decagon (ten sides)?',
    choices: ['$144^\\circ$', '$150^\\circ$', '$135^\\circ$', '$162^\\circ$'],
    answer: 0,
    solution: 'Each exterior angle is $360^\\circ \\div 10 = 36^\\circ$, so each interior angle is $180^\\circ - 36^\\circ = 144^\\circ$. The long way agrees: $(10 - 2) \\cdot 180^\\circ \\div 10 = 1440^\\circ \\div 10 = 144^\\circ$. ✓',
  },
  {
    q: 'Two lines cross at a point. A pair of vertical angles measures $(7x - 15)^\\circ$ and $(5x + 21)^\\circ$. What is the measure of each of these angles?',
    choices: ['$18^\\circ$', '$111^\\circ$', '$96^\\circ$', '$69^\\circ$'],
    answer: 1,
    solution: 'Vertical angles are equal: $7x - 15 = 5x + 21$, so $2x = 36$ and $x = 18$. The angle is $7(18) - 15 = 126 - 15 = 111^\\circ$. Check: $5(18) + 21 = 111^\\circ$. ✓ (The value $18$ is just $x$, and $69^\\circ$ is the neighboring angle, since $180 - 111 = 69$.)',
  },
  {
    q: 'What is the supplement of the complement of a $40^\\circ$ angle?',
    choices: ['$50^\\circ$', '$140^\\circ$', '$40^\\circ$', '$130^\\circ$'],
    answer: 3,
    solution: 'Work from the inside out. The complement of $40^\\circ$ is $90^\\circ - 40^\\circ = 50^\\circ$. The supplement of $50^\\circ$ is $180^\\circ - 50^\\circ = 130^\\circ$. (Jumping straight to $140^\\circ$ takes the supplement of $40^\\circ$ — a different question!)',
  },
  {
    q: 'A transversal crosses two parallel lines. The obtuse angles it makes are $36^\\circ$ larger than the acute angles. What do the acute angles measure?',
    choices: ['$72^\\circ$', '$108^\\circ$', '$36^\\circ$', '$54^\\circ$'],
    answer: 0,
    solution: 'The acute and obtuse sizes add to $180^\\circ$ and differ by $36^\\circ$. If the acute size is $a$, then $a + (a + 36) = 180$, so $2a = 144$ and $a = 72^\\circ$. Check: the obtuse size is $108^\\circ$, and $108 - 72 = 36$. ✓',
  },
  {
    q: 'Four angles of a pentagon measure $110^\\circ$, $90^\\circ$, $120^\\circ$, and $100^\\circ$. What is the fifth angle?',
    choices: ['$110^\\circ$', '$100^\\circ$', '$120^\\circ$', '$130^\\circ$'],
    answer: 2,
    solution: 'A pentagon’s angles add to $(5 - 2) \\cdot 180^\\circ = 540^\\circ$. The four known angles total $110 + 90 + 120 + 100 = 420$, so the fifth is $540^\\circ - 420^\\circ = 120^\\circ$.',
  },
  {
    q: 'In triangle $ABC$, side $BC$ is extended past $C$ to a point $D$, and angle $ACD = 112^\\circ$. If angle $A = 47^\\circ$, what is angle $B$?',
    choices: ['$68^\\circ$', '$47^\\circ$', '$65^\\circ$', '$21^\\circ$'],
    answer: 2,
    solution: 'The exterior angle equals the sum of the two remote interior angles: $112 = 47 + \\angle B$, so $\\angle B = 112 - 47 = 65^\\circ$. Check the long way: angle $ACB = 180 - 112 = 68^\\circ$, and $180 - 68 - 47 = 65^\\circ$. ✓',
  },
  {
    q: 'Each interior angle of a regular polygon measures $160^\\circ$. How many sides does the polygon have?',
    choices: ['$16$', '$20$', '$15$', '$18$'],
    answer: 3,
    solution: 'Each exterior angle is $180^\\circ - 160^\\circ = 20^\\circ$, and all the exterior angles add to $360^\\circ$. So the polygon has $360 \\div 20 = 18$ sides.',
  },
]

const worksheet = [
  {
    q: 'Find the complement and the supplement of a $28^\\circ$ angle.',
    answer: 'Complement: $62^\\circ$; supplement: $152^\\circ$',
    solution: 'The complement makes $90^\\circ$: $90 - 28 = 62^\\circ$. The supplement makes $180^\\circ$: $180 - 28 = 152^\\circ$.',
  },
  {
    q: 'Two lines cross at a point. One of the four angles measures $74^\\circ$. Find the other three angles.',
    answer: '$74^\\circ$, $106^\\circ$, and $106^\\circ$',
    solution: 'The vertical angle across from $74^\\circ$ is also $74^\\circ$. The two neighbors each pair with $74^\\circ$ along a straight line: $180 - 74 = 106^\\circ$ each. Check: $74 + 74 + 106 + 106 = 360$. ✓',
  },
  {
    q: 'A transversal crosses two parallel lines and makes a $131^\\circ$ angle with the first line. What acute angle does it make with the second line?',
    answer: '$49^\\circ$',
    solution: 'The eight angles come in two sizes adding to $180^\\circ$: here $131^\\circ$ and $180 - 131 = 49^\\circ$. Both sizes appear at each crossing, so the acute angle at the second line is $49^\\circ$.',
  },
  {
    q: 'A triangle has angles of $90^\\circ$ and $33^\\circ$. What is the third angle?',
    answer: '$57^\\circ$',
    solution: 'Triangle angles add to $180^\\circ$: the third angle is $180 - 90 - 33 = 57^\\circ$.',
  },
  {
    q: 'Three angles of a quadrilateral measure $88^\\circ$, $95^\\circ$, and $130^\\circ$. What is the fourth angle?',
    answer: '$47^\\circ$',
    solution: 'Quadrilateral angles add to $360^\\circ$. The three known angles total $88 + 95 + 130 = 313$, so the fourth is $360 - 313 = 47^\\circ$.',
  },
  {
    q: 'What is the sum of the interior angles of a nonagon (nine sides)?',
    answer: '$1260^\\circ$',
    solution: 'A nonagon splits into $9 - 2 = 7$ triangles from one vertex, so the sum is $7 \\times 180^\\circ = 1260^\\circ$.',
  },
  {
    q: 'An angle’s supplement is three times as large as its complement. What is the angle?',
    answer: '$45^\\circ$',
    solution: 'Call the angle $x$. The supplement is $180 - x$ and the complement is $90 - x$, so $180 - x = 3(90 - x) = 270 - 3x$. Adding $3x$ to both sides: $180 + 2x = 270$, so $2x = 90$ and $x = 45^\\circ$. Check: the supplement is $135^\\circ$ and the complement is $45^\\circ$, and $135 = 3 \\times 45$. ✓',
  },
  {
    q: 'A transversal crosses two parallel lines. A pair of alternate interior angles measures $(2x + 15)^\\circ$ and $(3x - 25)^\\circ$. Find the measure of each of these angles.',
    answer: '$95^\\circ$',
    solution: 'Alternate interior angles are equal: $2x + 15 = 3x - 25$. Adding $25$ and subtracting $2x$ gives $x = 40$. Each angle measures $2(40) + 15 = 95^\\circ$. Check: $3(40) - 25 = 95^\\circ$. ✓',
  },
  {
    q: 'Each interior angle of a regular polygon measures $165^\\circ$. How many sides does the polygon have?',
    answer: '$24$ sides',
    solution: 'Each exterior angle is $180 - 165 = 15^\\circ$, and the exterior angles of any polygon add to $360^\\circ$. So the polygon has $360 \\div 15 = 24$ sides.',
  },
  {
    q: 'In triangle $ABC$, angle $A = 70^\\circ$. The lines that split angle $B$ and angle $C$ each exactly in half meet at a point $I$ inside the triangle. What is the measure of angle $BIC$?',
    answer: '$125^\\circ$',
    solution: 'Since angle $A = 70^\\circ$, the other two angles share $180 - 70 = 110^\\circ$, so $\\angle B + \\angle C = 110^\\circ$. The half-angles at $B$ and $C$ inside triangle $BIC$ add to half of that: $55^\\circ$. So $\\angle BIC = 180^\\circ - 55^\\circ = 125^\\circ$. A neat pattern: $\\angle BIC$ is always $90^\\circ$ plus half of angle $A$, and $90 + 35 = 125$. ✓',
  },
]

export default {
  id: 'prealgebra-ch10',
  book: 'prealgebra',
  number: 10,
  title: 'Angles',
  intro:
    'Angles are everywhere — in the corner of a book, the hands of a clock, the slice of a pizza. In this chapter you will learn to measure them, discover the secret partnerships between them, and use a few powerful sum rules to find missing angles like a detective.',
  sections: [s101, s102, s103],
  challenge,
  worksheet,
}
