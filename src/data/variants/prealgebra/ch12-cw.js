// Prealgebra chapter 12 — variations for the chapter challenge and the chapter
// worksheet. All problems and solutions are original MathQuest content.
//
// Every triple below was checked as exact integers ($a^2 + b^2 = c^2$ with the
// hypotenuse strictly the longest side), and every radical is stored in reduced
// form so that no two choices in a set are secretly the same number.

const challenge = [
  // 1. Legs given, hypotenuse wanted — with a triple most students have not met.
  [
    {
      q: 'A right triangle has legs of length $16$ and $63$. How long is the hypotenuse?',
      choices: ['$79$', '$\\sqrt{3713}$', '$65$', '$4225$'],
      answer: 2,
      solution: 'The hypotenuse is the unknown, so ADD the squares: $16^2 + 63^2 = 256 + 3969 = 4225$, and $65^2 = 4225$, so the hypotenuse is $65$. Sense check: $65$ is longer than both legs, as a hypotenuse must be. ($79$ adds the legs themselves instead of their squares; $\\sqrt{3713}$ subtracts the squares, which is the rule for a missing LEG, not the hypotenuse; $4225$ is $c^2$, one square root short of the answer.)',
    },
    {
      q: 'A right triangle has legs of length $28$ and $45$. How long is the hypotenuse?',
      choices: ['$53$', '$73$', '$2809$', '$\\sqrt{1241}$'],
      answer: 0,
      solution: 'Square and add: $28^2 + 45^2 = 784 + 2025 = 2809$, and $53^2 = 2809$, so the hypotenuse is $53$. ($73$ comes from adding $28 + 45$ without squaring; $2809$ stops at $c^2$ and forgets the square root; $\\sqrt{1241}$ comes from $45^2 - 28^2$, subtracting when the missing side is the hypotenuse and must be found by adding.)',
    },
    {
      q: 'A right triangle has legs of length $48$ and $55$. How long is the hypotenuse?',
      choices: ['$103$', '$\\sqrt{721}$', '$5329$', '$73$'],
      answer: 3,
      solution: 'Square and add: $48^2 + 55^2 = 2304 + 3025 = 5329$, and $73^2 = 5329$, so the hypotenuse is $73$. ($103$ is the trap of adding $48 + 55$; $\\sqrt{721}$ comes from $55^2 - 48^2$ — subtracting is for a missing leg; $5329$ is $c^2$ before the square root, and it is far bigger than either side, which is impossible for one side of this triangle.)',
    },
  ],
  // 2. Hypotenuse and one leg given, the other leg wanted — subtract, not add.
  [
    {
      q: 'A right triangle has a hypotenuse of length $25$ and one leg of length $24$. How long is the other leg?',
      choices: ['$1$', '$7$', '$49$', '$\\sqrt{1201}$'],
      answer: 1,
      solution: 'The missing side is a LEG, so subtract: $25^2 - 24^2 = 625 - 576 = 49$, and $7^2 = 49$, so the leg is $7$. Sense check: $7 < 25$, shorter than the hypotenuse. ✓ ($1$ comes from $25 - 24$ without squaring; $49$ is the square of the leg, not the leg; $\\sqrt{1201}$ comes from adding the squares, which would treat the $25$ as a leg and hunt for a hypotenuse longer than $25$.)',
    },
    {
      q: 'A right triangle has a hypotenuse of length $37$ and one leg of length $35$. How long is the other leg?',
      choices: ['$\\sqrt{2594}$', '$144$', '$2$', '$12$'],
      answer: 3,
      solution: 'A leg is missing, so subtract the squares: $37^2 - 35^2 = 1369 - 1225 = 144$, and $12^2 = 144$, so the leg is $12$ — the $12$-$35$-$37$ triple. ($\\sqrt{2594}$ adds instead of subtracting; $144$ is $b^2$ with the square root forgotten; $2$ is just $37 - 35$, and lengths do not subtract that way.)',
    },
    {
      q: 'A right triangle has a hypotenuse of length $65$ and one leg of length $52$. How long is the other leg?',
      choices: ['$39$', '$13\\sqrt{41}$', '$1521$', '$13$'],
      answer: 0,
      solution: 'Subtract for a missing leg: $65^2 - 52^2 = 4225 - 2704 = 1521$, and $39^2 = 1521$, so the leg is $39$. (This is $3$-$4$-$5$ scaled by $13$: $39$-$52$-$65$.) ($13\\sqrt{41}$ is $\\sqrt{4225 + 2704}$, the add-instead-of-subtract answer, and it is longer than the hypotenuse — impossible for a leg; $1521$ skips the square root; $13$ is $65 - 52$, subtracting the sides rather than their squares.)',
    },
  ],
  // 3. A 45-45-90 with the hypotenuse given: divide by sqrt(2), never multiply.
  [
    {
      q: 'A $45$-$45$-$90$ triangle has a hypotenuse of length $18$. How long is each leg?',
      choices: ['$9$', '$18\\sqrt{2}$', '$9\\sqrt{2}$', '$9\\sqrt{3}$'],
      answer: 2,
      solution: 'In a $45$-$45$-$90$ triangle the hypotenuse is a leg times $\\sqrt{2}$, so going backwards means DIVIDING: leg $= \\frac{18}{\\sqrt{2}} = \\frac{18\\sqrt{2}}{2} = 9\\sqrt{2}$. Check: $(9\\sqrt{2})^2 + (9\\sqrt{2})^2 = 162 + 162 = 324 = 18^2$. ✓ ($9$ halves the hypotenuse, which is the $30$-$60$-$90$ rule; $18\\sqrt{2}$ multiplies by $\\sqrt{2}$ instead of dividing, giving a leg longer than the hypotenuse; $9\\sqrt{3}$ borrows the $\\sqrt{3}$ that belongs to the $30$-$60$-$90$ triangle.)',
    },
    {
      q: 'An isosceles right triangle has a hypotenuse of length $6$. How long is each leg, in exact form?',
      choices: ['$3\\sqrt{2}$', '$3$', '$6\\sqrt{2}$', '$3\\sqrt{3}$'],
      answer: 0,
      solution: 'An isosceles right triangle is a $45$-$45$-$90$ triangle, so the hypotenuse is a leg times $\\sqrt{2}$ and each leg is $\\frac{6}{\\sqrt{2}} = \\frac{6\\sqrt{2}}{2} = 3\\sqrt{2}$. Check: $18 + 18 = 36 = 6^2$. ✓ ($3$ halves the hypotenuse — that is the $30$-$60$-$90$ rule; $6\\sqrt{2}$ multiplies by $\\sqrt{2}$ instead of dividing; $3\\sqrt{3}$ uses $\\sqrt{3}$ where this triangle calls for $\\sqrt{2}$.)',
    },
    {
      q: 'A right triangle has two $45^\\circ$ angles and a hypotenuse of $20$ cm. How long is each leg, in exact form?',
      choices: ['$20\\sqrt{2}$ cm', '$10\\sqrt{2}$ cm', '$10$ cm', '$10\\sqrt{3}$ cm'],
      answer: 1,
      solution: 'Two $45^\\circ$ angles make this a $45$-$45$-$90$ triangle, so each leg is $\\frac{20}{\\sqrt{2}} = \\frac{20\\sqrt{2}}{2} = 10\\sqrt{2}$ cm. Check: $200 + 200 = 400 = 20^2$. ✓ ($10$ cm halves the hypotenuse, the $30$-$60$-$90$ move; $20\\sqrt{2}$ cm multiplies where you should divide, and a leg can never beat the hypotenuse; $10\\sqrt{3}$ cm swaps in the wrong radical.)',
    },
  ],
  // 4. A 30-60-90 given the LONGER leg — two steps, and both can go backwards.
  [
    {
      q: 'The longer leg of a $30$-$60$-$90$ triangle has length $9\\sqrt{3}$. How long is the hypotenuse?',
      choices: ['$18$', '$9$', '$18\\sqrt{3}$', '$\\frac{9\\sqrt{3}}{2}$'],
      answer: 0,
      solution: 'The sides are $x$, $x\\sqrt{3}$, $2x$. The longer leg is $x\\sqrt{3} = 9\\sqrt{3}$, so $x = 9$, and the hypotenuse is $2x = 18$. Check: $9^2 + (9\\sqrt{3})^2 = 81 + 243 = 324 = 18^2$. ✓ ($9$ stops at the shortest side and never doubles; $18\\sqrt{3}$ doubles the LONGER leg instead of the shortest side; $\\frac{9\\sqrt{3}}{2}$ halves the given side instead of doubling the shortest one.)',
    },
    {
      q: 'The longer leg of a $30$-$60$-$90$ triangle has length $10\\sqrt{3}$. How long is the hypotenuse?',
      choices: ['$10$', '$20\\sqrt{3}$', '$5\\sqrt{3}$', '$20$'],
      answer: 3,
      solution: 'Divide the longer leg by $\\sqrt{3}$ to get the shortest side: $10\\sqrt{3} \\div \\sqrt{3} = 10$. The hypotenuse is twice that: $20$. Check: $10^2 + (10\\sqrt{3})^2 = 100 + 300 = 400 = 20^2$. ✓ ($10$ stops at the shortest side; $20\\sqrt{3}$ doubles the given longer leg rather than the shortest side; $5\\sqrt{3}$ halves the given leg — the ratio says double the SHORT side, not halve the long one.)',
    },
    {
      q: 'In a $30$-$60$-$90$ triangle, the side opposite the $60^\\circ$ angle has length $5\\sqrt{3}$. How long is the hypotenuse?',
      choices: ['$10\\sqrt{3}$', '$10$', '$5$', '$\\frac{5\\sqrt{3}}{2}$'],
      answer: 1,
      solution: 'The side opposite $60^\\circ$ is the longer leg, $x\\sqrt{3}$. From $x\\sqrt{3} = 5\\sqrt{3}$ we get $x = 5$ (that is the side opposite $30^\\circ$), and the hypotenuse is $2x = 10$. Check: $25 + 75 = 100 = 10^2$. ✓ ($10\\sqrt{3}$ doubles the wrong side; $5$ is the shortest side, opposite $30^\\circ$, not the hypotenuse; $\\frac{5\\sqrt{3}}{2}$ halves the given side instead of doubling the short one, and it is shorter than a side it must exceed.)',
    },
  ],
  // 5. Perimeter and base of an isosceles triangle, then the height to the base.
  [
    {
      q: 'An isosceles triangle has a perimeter of $64$ and a base of length $30$. What is the height drawn to the base?',
      choices: ['$17$', '$8$', '$15$', '$\\sqrt{514}$'],
      answer: 1,
      solution: 'The two equal sides share $64 - 30 = 34$, so each is $17$. The height to the base splits the base into halves of $15$, making a right triangle with hypotenuse $17$ and leg $15$. The height is a LEG, so subtract: $\\sqrt{289 - 225} = \\sqrt{64} = 8$. (The $8$-$15$-$17$ triple hiding inside!) ($17$ is the slanted side, not the upright height; $15$ is half the base; $\\sqrt{514}$ comes from adding $289 + 225$ instead of subtracting, which would make the height longer than the side that leans over it.)',
    },
    {
      q: 'An isosceles triangle has a perimeter of $48$ and a base of length $18$. What is the height drawn to the base?',
      choices: ['$3\\sqrt{34}$', '$9$', '$12$', '$15$'],
      answer: 2,
      solution: 'The equal sides share $48 - 18 = 30$, so each is $15$. The height cuts the base into halves of $9$, giving a right triangle with hypotenuse $15$ and leg $9$: the height is $\\sqrt{225 - 81} = \\sqrt{144} = 12$ — that is $3$-$4$-$5$ tripled. ($15$ is the equal side itself; $9$ is half the base; $3\\sqrt{34} = \\sqrt{225 + 81}$ adds the squares when a missing LEG calls for subtraction.)',
    },
    {
      q: 'An isosceles triangle has a perimeter of $98$ and a base of length $40$. What is the height drawn to the base?',
      choices: ['$20$', '$29$', '$\\sqrt{1241}$', '$21$'],
      answer: 3,
      solution: 'The two equal sides share $98 - 40 = 58$, so each is $29$. The height splits the base into halves of $20$, so it is a leg of a right triangle with hypotenuse $29$ and other leg $20$: height $= \\sqrt{841 - 400} = \\sqrt{441} = 21$. ($29$ is the equal side, which must be longer than the height; $20$ is half the base; $\\sqrt{1241}$ comes from adding the squares instead of subtracting.)',
    },
  ],
  // 6. A parallelogram given the total of one pair of opposite angles.
  [
    {
      q: 'In parallelogram $ABCD$, angles $A$ and $C$ (a pair of opposite angles) sum to $100^\\circ$. What is the measure of angle $B$?',
      choices: ['$50^\\circ$', '$100^\\circ$', '$80^\\circ$', '$130^\\circ$'],
      answer: 3,
      solution: 'Opposite angles are equal, so angles $A$ and $C$ are each $100^\\circ \\div 2 = 50^\\circ$. Angle $B$ sits next to angle $A$, and consecutive angles are supplementary: $180^\\circ - 50^\\circ = 130^\\circ$. Check: $50 + 130 + 50 + 130 = 360$. ✓ ($50^\\circ$ is angle $A$, found by the opposite-angle rule but not the angle asked for; $100^\\circ$ uses the given TOTAL as a single angle; $80^\\circ$ subtracts that total from $180^\\circ$ instead of subtracting one angle.)',
    },
    {
      q: 'In parallelogram $KLMN$, angles $L$ and $N$ (a pair of opposite angles) sum to $220^\\circ$. What is the measure of angle $K$?',
      choices: ['$70^\\circ$', '$110^\\circ$', '$140^\\circ$', '$90^\\circ$'],
      answer: 0,
      solution: 'Opposite angles are equal, so angles $L$ and $N$ are each $220^\\circ \\div 2 = 110^\\circ$. Angle $K$ is next to angle $L$, so it is supplementary: $180^\\circ - 110^\\circ = 70^\\circ$. Check: $70 + 110 + 70 + 110 = 360$. ✓ ($110^\\circ$ is angle $L$ itself; $140^\\circ$ is $360^\\circ - 220^\\circ$, the total of the OTHER pair with the halving forgotten; $90^\\circ$ assumes the parallelogram is a rectangle, which nothing here promises.)',
    },
    {
      q: 'In parallelogram $PQRS$, angles $P$ and $R$ (a pair of opposite angles) sum to $130^\\circ$. What is the measure of angle $Q$?',
      choices: ['$130^\\circ$', '$65^\\circ$', '$115^\\circ$', '$50^\\circ$'],
      answer: 2,
      solution: 'Equal opposite angles means angles $P$ and $R$ are each $130^\\circ \\div 2 = 65^\\circ$. Angle $Q$ is consecutive to angle $P$, so $180^\\circ - 65^\\circ = 115^\\circ$. Check: $65 + 115 + 65 + 115 = 360$. ✓ ($65^\\circ$ is angle $P$; $130^\\circ$ treats the given sum as one angle; $50^\\circ$ subtracts the sum from $180^\\circ$ rather than subtracting a single angle.)',
    },
  ],
  // 7. A square's diagonal in radical form, run backwards to another measurement.
  [
    {
      q: 'A square has a diagonal of length $8\\sqrt{2}$. What is its perimeter?',
      choices: ['$8$', '$32\\sqrt{2}$', '$32$', '$64$'],
      answer: 2,
      solution: 'The diagonal of a square is a side times $\\sqrt{2}$, so the side is $8\\sqrt{2} \\div \\sqrt{2} = 8$. The perimeter is $4 \\times 8 = 32$. ($8$ stops at the side length; $32\\sqrt{2}$ multiplies the DIAGONAL by $4$ instead of the side; $64$ is the area, $8 \\times 8$, which is a different measurement.)',
    },
    {
      q: 'A square has a diagonal of length $11\\sqrt{2}$. What is its perimeter?',
      choices: ['$11$', '$44$', '$44\\sqrt{2}$', '$121$'],
      answer: 1,
      solution: 'Divide the diagonal by $\\sqrt{2}$ to get the side: $11\\sqrt{2} \\div \\sqrt{2} = 11$. Then the perimeter is $4 \\times 11 = 44$. Check: $11^2 + 11^2 = 242 = (11\\sqrt{2})^2$. ✓ ($11$ is the side, one step short; $44\\sqrt{2}$ multiplies the diagonal by $4$ rather than the side; $121$ is the area.)',
    },
    {
      q: 'A square has a diagonal of length $5\\sqrt{2}$. What is its area?',
      choices: ['$50$', '$20$', '$10$', '$25$'],
      answer: 3,
      solution: 'The diagonal is a side times $\\sqrt{2}$, so the side is $5\\sqrt{2} \\div \\sqrt{2} = 5$, and the area is $5 \\times 5 = 25$. ($50$ squares the diagonal, $(5\\sqrt{2})^2$, which measures a square built ON the diagonal — exactly twice too big; $20$ is the perimeter, not the area; $10$ doubles the side, mixing up the $30$-$60$-$90$ rule with the $45$-$45$-$90$ one.)',
    },
  ],
  // 8. Two perpendicular walks — the straight-line distance is a hypotenuse.
  [
    {
      q: 'A cyclist rides $9$ km east, then turns and rides $12$ km south. How far is she, in a straight line, from where she started?',
      choices: ['$21$ km', '$3$ km', '$15$ km', '$3\\sqrt{7}$ km'],
      answer: 2,
      solution: 'East and south are perpendicular, so the two rides are the legs of a right triangle and the straight-line distance is the hypotenuse: $9^2 + 12^2 = 81 + 144 = 225$, and $15^2 = 225$. She is $15$ km away. ($21$ km is how far she pedalled, not how far she ended up; $3$ km subtracts the distances without squaring; $3\\sqrt{7}$ km $= \\sqrt{144 - 81}$ subtracts the squares, which is the rule for a missing leg — but here the unknown is the hypotenuse.)',
    },
    {
      q: 'Maya walks $15$ blocks west and then $8$ blocks north. How far is she, in a straight line, from her starting corner?',
      choices: ['$17$ blocks', '$23$ blocks', '$7$ blocks', '$\\sqrt{161}$ blocks'],
      answer: 0,
      solution: 'The two walks are perpendicular legs, so the straight-line distance is the hypotenuse: $15^2 + 8^2 = 225 + 64 = 289$, and $17^2 = 289$ — the $8$-$15$-$17$ triple. She is $17$ blocks away. ($23$ blocks is the distance walked along the streets; $7$ blocks is $15 - 8$, subtracting lengths instead of squares; $\\sqrt{161} = \\sqrt{225 - 64}$ subtracts the squares, which finds a leg, not the hypotenuse.)',
    },
    {
      q: 'A sailboat sails $20$ km north, then $15$ km east. How far is it, in a straight line, from its starting point?',
      choices: ['$35$ km', '$5$ km', '$5\\sqrt{7}$ km', '$25$ km'],
      answer: 3,
      solution: 'North and east are perpendicular, so add the squares to find the hypotenuse: $20^2 + 15^2 = 400 + 225 = 625$, and $25^2 = 625$. The boat is $25$ km from its start. ($35$ km is the total distance sailed; $5$ km is $20 - 15$; $5\\sqrt{7}$ km $= \\sqrt{400 - 225}$ subtracts the squares — that would be right if a LEG were missing, but the straight-line hop is the longest side here.)',
    },
  ],
  // 9. Equilateral triangles: the height is the long leg of a 30-60-90.
  [
    {
      q: 'An equilateral triangle has a perimeter of $42$. What is its height?',
      choices: ['$7\\sqrt{2}$', '$7\\sqrt{3}$', '$14\\sqrt{3}$', '$7$'],
      answer: 1,
      solution: 'Each side is $42 \\div 3 = 14$. The height splits the triangle into two $30$-$60$-$90$ triangles whose shortest side is half the base, $7$, and whose hypotenuse is the full side, $14$. The height is the longer leg: $7\\sqrt{3}$. Check: $14^2 - 7^2 = 196 - 49 = 147 = (7\\sqrt{3})^2$. ✓ ($7$ is half the base, not the height; $14\\sqrt{3}$ scales the whole side by $\\sqrt{3}$ instead of the half-side; $7\\sqrt{2}$ uses the $45$-$45$-$90$ radical in a $30$-$60$-$90$ triangle.)',
    },
    {
      q: 'An equilateral triangle has a perimeter of $18$. What is its height?',
      choices: ['$6\\sqrt{3}$', '$3$', '$3\\sqrt{3}$', '$3\\sqrt{2}$'],
      answer: 2,
      solution: 'Each side is $18 \\div 3 = 6$. The height makes a $30$-$60$-$90$ triangle with shortest side $3$ (half the base) and hypotenuse $6$, so the height is $3\\sqrt{3}$. Check: $36 - 9 = 27 = (3\\sqrt{3})^2$. ✓ ($3$ is half the base; $6\\sqrt{3}$ multiplies the full side by $\\sqrt{3}$ instead of the half-side, giving a height taller than the side itself; $3\\sqrt{2}$ borrows $\\sqrt{2}$ from the $45$-$45$-$90$ triangle.)',
    },
    {
      q: 'An equilateral triangle has a height of $6\\sqrt{3}$. What is its perimeter?',
      choices: ['$36$', '$18$', '$12$', '$108$'],
      answer: 0,
      solution: 'The height is the longer leg of a $30$-$60$-$90$ triangle, so divide by $\\sqrt{3}$ to get the shortest side: $6\\sqrt{3} \\div \\sqrt{3} = 6$. That $6$ is HALF the base, so each side is $12$ and the perimeter is $3 \\times 12 = 36$. ($12$ stops at the side length; $18$ treats the $6$ as a whole side and adds three of them; $108$ multiplies by $\\sqrt{3}$ instead of dividing, getting $18$ for the half-side and a side of $36$.)',
    },
  ],
  // 10. Rhombus diagonals: halve them first, they meet at a right angle.
  [
    {
      q: 'The diagonals of a rhombus have lengths $18$ and $24$. How long is each side of the rhombus?',
      choices: ['$15$', '$21$', '$30$', '$9$'],
      answer: 0,
      solution: 'The diagonals of a rhombus are perpendicular and bisect each other, so they cut it into four right triangles with legs $9$ and $12$. Each side of the rhombus is one of those hypotenuses: $\\sqrt{81 + 144} = \\sqrt{225} = 15$. ($21$ averages the two diagonals; $30$ uses the FULL diagonals as legs, forgetting they get halved; $9$ is just half of the shorter diagonal.)',
    },
    {
      q: 'The diagonals of a rhombus have lengths $16$ and $30$. How long is each side of the rhombus?',
      choices: ['$23$', '$8$', '$34$', '$17$'],
      answer: 3,
      solution: 'Halve each diagonal: the four right triangles inside have legs $8$ and $15$. A side of the rhombus is the hypotenuse of one of them: $\\sqrt{64 + 225} = \\sqrt{289} = 17$. ($23$ averages the diagonals; $34$ forgets to halve and uses $16$ and $30$ as the legs — that answer is longer than the longer diagonal, which no side of a rhombus can be; $8$ is half the shorter diagonal.)',
    },
    {
      q: 'The diagonals of a rhombus have lengths $14$ and $48$. What is the perimeter of the rhombus?',
      choices: ['$200$', '$25$', '$100$', '$124$'],
      answer: 2,
      solution: 'The half-diagonals $7$ and $24$ are the legs of a right triangle whose hypotenuse is a side of the rhombus: $\\sqrt{49 + 576} = \\sqrt{625} = 25$. All four sides are equal, so the perimeter is $4 \\times 25 = 100$. ($25$ stops at one side; $200$ skips the halving, getting $50$ for each side; $124$ uses the average of the diagonals, $31$, as the side length.)',
    },
  ],
  // 11. Testing candidate side lengths against a^2 + b^2 = c^2.
  [
    {
      q: 'Three of these four trios of side lengths form right triangles. Which one does NOT?',
      choices: ['Sides $12$, $16$, $20$', 'Sides $6$, $8$, $10$', 'Sides $9$, $12$, $16$', 'Sides $7$, $24$, $25$'],
      answer: 2,
      solution: 'For each set, square the two shorter sides, add, and compare with the square of the longest. $144 + 256 = 400 = 20^2$ ✓, $36 + 64 = 100 = 10^2$ ✓, and $49 + 576 = 625 = 25^2$ ✓. But $9^2 + 12^2 = 81 + 144 = 225$, while $16^2 = 256$ — no match, so $9$, $12$, $16$ is not a right triangle. (It is a perfectly good triangle, since $9 + 12 > 16$; it just has no right angle.)',
    },
    {
      q: 'Which of these IS a right triangle?',
      choices: ['Sides $8$, $9$, $12$', 'Sides $20$, $21$, $29$', 'Sides $4$, $5$, $7$', 'Sides $10$, $11$, $15$'],
      answer: 1,
      solution: 'Test the sum of the squares of the two shorter sides against the square of the longest. $400 + 441 = 841 = 29^2$ ✓, so $20$, $21$, $29$ is a right triangle. The others miss: $64 + 81 = 145$ but $12^2 = 144$ (close, yet a miss is a miss); $16 + 25 = 41$ but $7^2 = 49$; $100 + 121 = 221$ but $15^2 = 225$. Being nearly equal is not enough — the equation has to hold exactly.',
    },
    {
      q: 'Which of these sets of side lengths does NOT make a right triangle?',
      choices: ['Sides $15$, $20$, $25$', 'Sides $5$, $12$, $13$', 'Sides $12$, $16$, $21$', 'Sides $20$, $48$, $52$'],
      answer: 2,
      solution: 'Check each: $225 + 400 = 625 = 25^2$ ✓, $25 + 144 = 169 = 13^2$ ✓, and $400 + 2304 = 2704 = 52^2$ ✓. But $12^2 + 16^2 = 144 + 256 = 400$, while $21^2 = 441$ — so $12$, $16$, $21$ is the odd one out. (Notice $12$, $16$, $20$ WOULD be right; stretching the longest side to $21$ opens the angle past $90^\\circ$.)',
    },
  ],
  // 12. Angles between the parallel sides of a trapezoid are supplementary.
  [
    {
      q: 'In trapezoid $PQRS$, side $PQ$ is parallel to side $SR$, and angle $P = 62^\\circ$. Angles $P$ and $S$ share the side $SP$. What is the measure of angle $S$?',
      choices: ['$62^\\circ$', '$118^\\circ$', '$28^\\circ$', '$298^\\circ$'],
      answer: 1,
      solution: 'Side $SP$ is a transversal crossing the two parallel sides $PQ$ and $SR$, so angles $P$ and $S$ are supplementary: angle $S = 180^\\circ - 62^\\circ = 118^\\circ$. ($62^\\circ$ assumes the two angles are equal, which is the rule for OPPOSITE angles of a parallelogram, not for angles along one leg; $28^\\circ$ subtracts from $90^\\circ$; $298^\\circ$ subtracts from $360^\\circ$, but $360^\\circ$ is the total of all FOUR angles.)',
    },
    {
      q: 'In trapezoid $WXYZ$, side $WX$ is parallel to side $ZY$, and angle $Y = 124^\\circ$. Angles $X$ and $Y$ share the side $XY$. What is the measure of angle $X$?',
      choices: ['$236^\\circ$', '$124^\\circ$', '$90^\\circ$', '$56^\\circ$'],
      answer: 3,
      solution: 'Side $XY$ is a transversal between the parallel sides $WX$ and $ZY$, so angles $X$ and $Y$ are supplementary: angle $X = 180^\\circ - 124^\\circ = 56^\\circ$. ($124^\\circ$ assumes they are equal; $236^\\circ$ subtracts from $360^\\circ$, the total for all four angles, and no angle of a convex quadrilateral can exceed $180^\\circ$; $90^\\circ$ assumes a right angle nobody promised.)',
    },
    {
      q: 'In trapezoid $ABCD$, side $AB$ is parallel to side $DC$. Angle $A = 68^\\circ$ and angle $B = 95^\\circ$. Angles $B$ and $C$ share the side $BC$. What is the measure of angle $C$?',
      choices: ['$85^\\circ$', '$112^\\circ$', '$95^\\circ$', '$197^\\circ$'],
      answer: 0,
      solution: 'Side $BC$ is a transversal across the parallel sides $AB$ and $DC$, so angles $B$ and $C$ are supplementary: angle $C = 180^\\circ - 95^\\circ = 85^\\circ$. Check the whole figure: angle $D = 180^\\circ - 68^\\circ = 112^\\circ$, and $68 + 95 + 85 + 112 = 360$. ✓ ($112^\\circ$ pairs angle $C$ with angle $A$, but $A$ and $C$ are opposite corners, not ends of one leg; $95^\\circ$ assumes the two angles are equal; $197^\\circ$ comes from $360^\\circ - 68^\\circ - 95^\\circ$, which forgets that angle $D$ still needs its share.)',
    },
  ],
]

const worksheet = [
  // 1. Legs given, find the hypotenuse.
  [
    {
      q: 'A right triangle has legs of length $28$ and $96$. Find the hypotenuse.',
      answer: '$100$',
      solution: 'The hypotenuse is missing, so add the squares: $28^2 + 96^2 = 784 + 9216 = 10000$, and $100^2 = 10000$. The hypotenuse is $100$. (It is the $7$-$24$-$25$ triple scaled by $4$.)',
    },
    {
      q: 'A right triangle has legs of length $13$ and $84$. Find the hypotenuse.',
      answer: '$85$',
      solution: 'Square and add: $13^2 + 84^2 = 169 + 7056 = 7225$, and $85^2 = 7225$. The hypotenuse is $85$ — longer than both legs, as it must be.',
    },
    {
      q: 'A rectangular gate is $24$ cm tall and $45$ cm wide. How long is the diagonal brace that runs corner to corner?',
      answer: '$51$ cm',
      solution: 'The brace is the hypotenuse of a right triangle with legs $24$ and $45$: $576 + 2025 = 2601$, and $51^2 = 2601$. The brace is $51$ cm long. (This is $8$-$15$-$17$ tripled.)',
    },
  ],
  // 2. Hypotenuse and one leg given, find the other leg.
  [
    {
      q: 'A right triangle has a hypotenuse of length $34$ and one leg of length $16$. Find the other leg.',
      answer: '$30$',
      solution: 'A leg is missing, so subtract: $34^2 - 16^2 = 1156 - 256 = 900$, and $30^2 = 900$. The other leg is $30$. Sense check: $30 < 34$. ✓',
    },
    {
      q: 'A right triangle has a hypotenuse of length $85$ and one leg of length $84$. Find the other leg.',
      answer: '$13$',
      solution: 'Subtract the squares: $85^2 - 84^2 = 7225 - 7056 = 169$, and $13^2 = 169$. The other leg is $13$. A tiny leg is no surprise here — the given leg is almost as long as the hypotenuse, so the triangle is very thin.',
    },
    {
      q: 'A right triangle has a hypotenuse of length $50$ and one leg of length $14$. Find the other leg.',
      answer: '$48$',
      solution: 'Subtract for the missing leg: $50^2 - 14^2 = 2500 - 196 = 2304$, and $48^2 = 2304$. The other leg is $48$ — the $7$-$24$-$25$ triple doubled.',
    },
  ],
  // 3. A 45-45-90 with legs given: hypotenuse in exact form.
  [
    {
      q: 'A $45$-$45$-$90$ triangle has legs of length $13$. Find the hypotenuse, in exact form.',
      answer: '$13\\sqrt{2}$',
      solution: 'The hypotenuse of a $45$-$45$-$90$ triangle is a leg times $\\sqrt{2}$, so it is $13\\sqrt{2}$. Check: $169 + 169 = 338$, and $(13\\sqrt{2})^2 = 169 \\times 2 = 338$. ✓',
    },
    {
      q: 'An isosceles right triangle has legs of length $6$. Find the hypotenuse, in exact form.',
      answer: '$6\\sqrt{2}$',
      solution: 'An isosceles right triangle is a $45$-$45$-$90$ triangle, so the hypotenuse is a leg times $\\sqrt{2}$: $6\\sqrt{2}$. Check: $36 + 36 = 72 = (6\\sqrt{2})^2$. ✓',
    },
    {
      q: 'A square tile has sides of length $15$ cm. How long is its diagonal, in exact form?',
      answer: '$15\\sqrt{2}$ cm',
      solution: 'The diagonal cuts the square into two $45$-$45$-$90$ triangles with legs $15$, so the diagonal is the hypotenuse: $15\\sqrt{2}$ cm. Check: $225 + 225 = 450 = (15\\sqrt{2})^2$. ✓',
    },
  ],
  // 4. The 30-60-90 ratio, given the shortest side.
  [
    {
      q: 'The shortest side of a $30$-$60$-$90$ triangle has length $9$. Find the hypotenuse.',
      answer: '$18$',
      solution: 'The hypotenuse of a $30$-$60$-$90$ triangle is twice the shortest side: $2 \\times 9 = 18$. (The longer leg, for the record, would be $9\\sqrt{3}$.)',
    },
    {
      q: 'The shortest side of a $30$-$60$-$90$ triangle has length $6$. Find the longer leg, in exact form.',
      answer: '$6\\sqrt{3}$',
      solution: 'The sides run $x$, $x\\sqrt{3}$, $2x$. With $x = 6$, the longer leg is $6\\sqrt{3}$. Check: $6^2 + (6\\sqrt{3})^2 = 36 + 108 = 144 = 12^2$, and $12$ is indeed twice $6$. ✓',
    },
    {
      q: 'In a $30$-$60$-$90$ triangle, the side opposite the $30^\\circ$ angle has length $11$. Find the hypotenuse.',
      answer: '$22$',
      solution: 'The side opposite the $30^\\circ$ angle is the shortest side, and the hypotenuse is twice it: $2 \\times 11 = 22$.',
    },
  ],
  // 5. All four angles of a parallelogram from one of them.
  [
    {
      q: 'In parallelogram $ABCD$, angle $A = 55^\\circ$. Find the other three angles.',
      answer: 'Angle $B = 125^\\circ$, angle $C = 55^\\circ$, angle $D = 125^\\circ$',
      solution: 'Opposite angles are equal, so angle $C = 55^\\circ$. Consecutive angles are supplementary, so angles $B$ and $D$ are each $180^\\circ - 55^\\circ = 125^\\circ$. Check: $55 + 125 + 55 + 125 = 360$. ✓',
    },
    {
      q: 'In parallelogram $PQRS$, angle $Q = 118^\\circ$. Find the other three angles.',
      answer: 'Angle $P = 62^\\circ$, angle $R = 62^\\circ$, angle $S = 118^\\circ$',
      solution: 'Walk the vertices in order $P, Q, R, S$: the opposite pairs are $P$ with $R$, and $Q$ with $S$. So angle $S = 118^\\circ$, matching angle $Q$. Angles $P$ and $R$ each sit next to angle $Q$, so they are supplementary to it: $180^\\circ - 118^\\circ = 62^\\circ$ each. Check: $62 + 118 + 62 + 118 = 360$. ✓',
    },
    {
      q: 'In parallelogram $ABCD$, angle $A = 37^\\circ$. Find the other three angles.',
      answer: 'Angle $B = 143^\\circ$, angle $C = 37^\\circ$, angle $D = 143^\\circ$',
      solution: 'Opposite angles are equal, so angle $C = 37^\\circ$. Consecutive angles are supplementary, so angles $B$ and $D$ are each $180^\\circ - 37^\\circ = 143^\\circ$. Check: $37 + 143 + 37 + 143 = 360$. ✓ A very slanted parallelogram, but the rules do not change.',
    },
  ],
  // 6. Rhombus perimeter and side, in both directions.
  [
    {
      q: 'A rhombus has a perimeter of $68$. How long is each side?',
      answer: '$17$',
      solution: 'All four sides of a rhombus are equal, so each side is $68 \\div 4 = 17$.',
    },
    {
      q: 'A rhombus has sides of length $14$. What is its perimeter?',
      answer: '$56$',
      solution: 'A rhombus has four equal sides, so the perimeter is $4 \\times 14 = 56$. (Do not reach for $14^2 = 196$ — that would be an area, and it is not even the area of this rhombus unless it happens to be a square.)',
    },
    {
      q: 'A rhombus has a perimeter of $100$. How long is each side?',
      answer: '$25$',
      solution: 'The four sides are equal, so each is $100 \\div 4 = 25$.',
    },
  ],
  // 7. Ladders, wires, and walls — right triangles in the world.
  [
    {
      q: 'A $20$-meter ladder leans against a wall with its foot $12$ meters from the base of the wall. How high up the wall does the ladder reach?',
      answer: '$16$ meters',
      solution: 'The ladder is the hypotenuse and the height is a leg, so subtract: $20^2 - 12^2 = 400 - 144 = 256$, and $16^2 = 256$. The ladder reaches $16$ meters up — a $12$-$16$-$20$ triangle, which is $3$-$4$-$5$ scaled by $4$.',
    },
    {
      q: 'A $26$-foot ladder leans against a wall and reaches a point $24$ feet above the ground. How far is the foot of the ladder from the wall?',
      answer: '$10$ feet',
      solution: 'The ladder is the hypotenuse: $26^2 - 24^2 = 676 - 576 = 100$, and $10^2 = 100$. The foot of the ladder is $10$ feet from the wall — the $5$-$12$-$13$ triple doubled.',
    },
    {
      q: 'A $41$-foot support wire runs from the top of a straight pole to a stake in the ground $9$ feet from the base of the pole. How tall is the pole?',
      answer: '$40$ feet',
      solution: 'The wire is the hypotenuse and the pole is a leg: $41^2 - 9^2 = 1681 - 81 = 1600$, and $40^2 = 1600$. The pole is $40$ feet tall. Sense check: the pole must be shorter than the wire, and $40 < 41$. ✓',
    },
  ],
  // 8. A square's diagonal, run backwards.
  [
    {
      q: 'A square has a diagonal of length $10$. Find the side length, in exact form.',
      answer: '$5\\sqrt{2}$',
      solution: 'The diagonal is a side times $\\sqrt{2}$, so divide: side $= \\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2}$. Check: $(5\\sqrt{2})^2 + (5\\sqrt{2})^2 = 50 + 50 = 100 = 10^2$. ✓',
    },
    {
      q: 'A square has a diagonal of length $18$. Find the side length, in exact form.',
      answer: '$9\\sqrt{2}$',
      solution: 'Divide the diagonal by $\\sqrt{2}$: side $= \\frac{18}{\\sqrt{2}} = \\frac{18\\sqrt{2}}{2} = 9\\sqrt{2}$. Check: $162 + 162 = 324 = 18^2$. ✓',
    },
    {
      q: 'A square has a diagonal of length $12$. Find its perimeter, in exact form.',
      answer: '$24\\sqrt{2}$',
      solution: 'First the side: $\\frac{12}{\\sqrt{2}} = \\frac{12\\sqrt{2}}{2} = 6\\sqrt{2}$. Then the perimeter is $4 \\times 6\\sqrt{2} = 24\\sqrt{2}$. (Multiply the SIDE by $4$, not the diagonal.)',
    },
  ],
  // 9. Area of an isosceles triangle, via the height to the base.
  [
    {
      q: 'An isosceles triangle has two sides of length $17$ and a base of length $16$. Find its area.',
      answer: '$120$',
      solution: 'The height to the base splits it into halves of $8$, giving a right triangle with hypotenuse $17$ and leg $8$. The height is a leg, so subtract: $\\sqrt{289 - 64} = \\sqrt{225} = 15$. The area is $\\frac{1}{2} \\times 16 \\times 15 = 120$.',
    },
    {
      q: 'An isosceles triangle has two sides of length $25$ and a base of length $14$. Find its area.',
      answer: '$168$',
      solution: 'Half the base is $7$, and the equal side $25$ is the hypotenuse of the right triangle formed by the height: $\\sqrt{625 - 49} = \\sqrt{576} = 24$. The area is $\\frac{1}{2} \\times 14 \\times 24 = 168$.',
    },
    {
      q: 'An isosceles triangle has two sides of length $10$ and a base of length $12$. Find its area.',
      answer: '$48$',
      solution: 'The height meets the base at its midpoint, $6$ from each end, making a right triangle with hypotenuse $10$ and leg $6$: the height is $\\sqrt{100 - 36} = \\sqrt{64} = 8$. The area is $\\frac{1}{2} \\times 12 \\times 8 = 48$. (A $6$-$8$-$10$ triple inside.)',
    },
  ],
  // 10. Rhombus diagonals, forwards and backwards.
  [
    {
      q: 'The diagonals of a rhombus have lengths $12$ and $16$. Find the perimeter of the rhombus.',
      answer: '$40$',
      solution: 'The diagonals are perpendicular and bisect each other, so the four right triangles inside have legs $6$ and $8$. Each side of the rhombus is $\\sqrt{36 + 64} = \\sqrt{100} = 10$, so the perimeter is $4 \\times 10 = 40$.',
    },
    {
      q: 'The diagonals of a rhombus have lengths $18$ and $80$. Find the perimeter of the rhombus.',
      answer: '$164$',
      solution: 'Halve the diagonals: the right triangles inside have legs $9$ and $40$. Each side is $\\sqrt{81 + 1600} = \\sqrt{1681} = 41$, so the perimeter is $4 \\times 41 = 164$.',
    },
    {
      q: 'A rhombus has a perimeter of $80$, and one of its diagonals has length $32$. How long is the other diagonal?',
      answer: '$24$',
      solution: 'Each side is $80 \\div 4 = 20$. The diagonals bisect each other at right angles, so half of the known diagonal is $16$, and that is one leg of a right triangle with hypotenuse $20$. The other leg is $\\sqrt{400 - 256} = \\sqrt{144} = 12$, and that is HALF of the missing diagonal — so the other diagonal is $2 \\times 12 = 24$.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 12,
  challenge,
  worksheet,
}
