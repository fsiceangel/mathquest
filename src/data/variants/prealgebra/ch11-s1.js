// Prealgebra chapter 11 — variations for sections 11.1, 11.2 and 11.3.
// All problems and solutions are original MathQuest content.
// Circle answers are kept exact, in terms of pi, matching the base bank.

const s111 = [
  // p1 — distance between two points on the number line
  [
    {
      q: 'What is the distance between $4$ and $16$ on the number line?',
      choices: ['$12$', '$20$', '$13$', '$10$'],
      answer: 0,
      solution:
        'Distance is the larger number minus the smaller: $16 - 4 = 12$ units. Adding the two numbers gives $20$, but a distance is a difference, not a sum. Counting the whole-number labels from $4$ to $16$ gives $13$ labels — but the ant walks the $12$ gaps between them, not the labels. And $10$ is the midpoint $\\frac{4 + 16}{2}$, which tells you where the middle is, not how far apart the ends are.',
    },
    {
      q: 'A straight walking trail is marked in kilometres. A signpost stands at the $6$ km mark and a bench sits at the $19$ km mark. How many kilometres apart are they?',
      choices: ['$25$', '$14$', '$-13$', '$13$'],
      answer: 3,
      solution:
        'Subtract the smaller mark from the larger: $19 - 6 = 13$ km. Adding the marks gives $25$, which would put the bench off the end of the trail. Counting every kilometre marker from $6$ through $19$ gives $14$ markers, one more than the number of kilometres between them. And $6 - 19 = -13$ subtracts in the wrong order — a distance is never negative.',
    },
    {
      q: 'What is the distance between $23$ and $41$ on the number line?',
      choices: ['$64$', '$18$', '$19$', '$32$'],
      answer: 1,
      solution:
        'Take the larger minus the smaller: $41 - 23 = 18$ units. The sum $23 + 41 = 64$ is not a distance. Counting labels instead of gaps gives $19$. And $32$ is the midpoint $\\frac{23 + 41}{2}$ — the point halfway between, not the size of the gap.',
    },
  ],
  // p2 — distance when a point is negative
  [
    {
      q: 'What is the distance between $-7$ and $2$ on the number line?',
      choices: ['$-5$', '$5$', '$9$', '$-9$'],
      answer: 2,
      solution:
        'Larger minus smaller: $2 - (-7) = 2 + 7 = 9$ units. Picture it: $-7$ is $7$ steps left of zero and $2$ is $2$ steps right, so the walk is $7 + 2 = 9$. Writing $2 - 7 = -5$ forgets that subtracting a negative adds. Dropping the minus sign and computing $7 - 2$ gives $5$. And $-7 - 2 = -9$ subtracts in the wrong order; distance is never negative.',
    },
    {
      q: 'A submarine floats $12$ metres below sea level while a gull flies $5$ metres above it. What is the vertical distance between them, in metres?',
      choices: ['$7$', '$-7$', '$-17$', '$17$'],
      answer: 3,
      solution:
        'Put the submarine at $-12$ and the gull at $5$. The distance is $5 - (-12) = 5 + 12 = 17$ metres — $12$ metres up to the surface, then $5$ more. Subtracting the two depths as if they were on the same side of the surface gives $12 - 5 = 7$. Computing $5 - 12 = -7$ forgets that subtracting a negative adds, and $-12 - 5 = -17$ subtracts in the wrong order.',
    },
    {
      q: 'What is the distance between $-15$ and $-4$ on the number line?',
      choices: ['$19$', '$11$', '$-11$', '$-19$'],
      answer: 1,
      solution:
        'Both points sit left of zero. Larger minus smaller: $-4 - (-15) = -4 + 15 = 11$ units. Adding the two distances from zero gives $19$, but that trick only works when the points are on opposite sides of zero — here one is already past the other. Reversing the order gives $-15 - (-4) = -11$, and adding the two negatives gives $-19$; a distance is never negative.',
    },
  ],
  // p3 — midpoint of a segment
  [
    {
      q: 'What is the midpoint of the segment from $6$ to $18$?',
      choices: ['$24$', '$6$', '$12$', '$9$'],
      answer: 2,
      solution:
        'Average the endpoints: $\\frac{6 + 18}{2} = \\frac{24}{2} = 12$. Check: $12$ is $6$ away from both ends. Stopping at the sum $24$ skips the division by $2$. The choice $6$ is half the distance between the points — that is how far the midpoint sits from each end, not where it is. And $9$ comes from halving only the $18$ and forgetting the $6$ entirely.',
    },
    {
      q: 'What is the midpoint of the segment from $7$ to $23$?',
      choices: ['$15$', '$30$', '$8$', '$16$'],
      answer: 0,
      solution:
        'Add and halve: $\\frac{7 + 23}{2} = \\frac{30}{2} = 15$. Check: from $7$ to $15$ is $8$, and from $15$ to $23$ is $8$ too. The sum $30$ forgets the division. The choice $8$ is half the distance, which is a length, not a location. And $16$ is the whole distance $23 - 7$.',
    },
    {
      q: 'A rope is stretched along a number line from the $2$ mark to the $30$ mark, and a knot is tied at exactly the middle of the rope. What number is the knot sitting on?',
      choices: ['$32$', '$14$', '$15$', '$16$'],
      answer: 3,
      solution:
        'The knot is at the average of the endpoints: $\\frac{2 + 30}{2} = \\frac{32}{2} = 16$. Check: $16$ is $14$ from each end. The sum $32$ skips the halving. The choice $14$ is half the rope\'s length — how far the knot is from each end, not the mark it lands on. And $15$ is the halfway point of a rope running from $0$ to $30$, but this rope starts at $2$.',
    },
  ],
  // p4 — perimeter of a rectangle from its length and width
  [
    {
      q: 'A rectangle has length $12$ and width $7$. What is its perimeter?',
      choices: ['$38$', '$84$', '$19$', '$24$'],
      answer: 0,
      solution:
        'Walk all the way around: $2(12 + 7) = 2 \\times 19 = 38$. The choice $84$ is $12 \\times 7$, the area — that counts the space inside, not the walk around. The choice $19$ is one length plus one width, only half the trip. And $24 = 2 \\times 12$ adds the two long sides but forgets the two short ones.',
    },
    {
      q: 'A rectangular vegetable bed measures $9$ metres by $6$ metres. How many metres of edging are needed to go exactly once around it?',
      choices: ['$54$', '$15$', '$30$', '$18$'],
      answer: 2,
      solution:
        'Edging follows the boundary, so this is a perimeter: $2(9 + 6) = 2 \\times 15 = 30$ metres. The choice $54$ is $9 \\times 6$, the area in square metres — that is how much soil fills the bed, not how much edging surrounds it. The choice $15$ is one length plus one width, half the way around. And $18 = 9 + 9$ counts only the two long sides.',
    },
    {
      q: 'A rectangle is $15$ units long and $5$ units wide. What is its perimeter?',
      choices: ['$75$', '$40$', '$20$', '$30$'],
      answer: 1,
      solution:
        'Perimeter is $2(15 + 5) = 2 \\times 20 = 40$. The choice $75$ is the area $15 \\times 5$, a measure of the inside rather than the boundary. The choice $20$ is one length plus one width, only half the walk. And $30 = 2 \\times 15$ uses the two long sides alone.',
    },
  ],
  // p5 — perimeter of a square
  [
    {
      q: 'What is the perimeter of a square with side length $9$?',
      choices: ['$81$', '$36$', '$27$', '$18$'],
      answer: 1,
      solution:
        'A square has four equal sides, so the perimeter is $4 \\times 9 = 36$. The choice $81$ is $9 \\times 9$, the area — the space inside, not the distance around. The choice $27$ walks only three sides, and $18$ walks only two.',
    },
    {
      q: 'A square has perimeter $32$. What is the length of one side?',
      choices: ['$16$', '$128$', '$8$', '$64$'],
      answer: 2,
      solution:
        'Four equal sides make up the perimeter, so divide: $32 \\div 4 = 8$. Check: $4 \\times 8 = 32$. The choice $16$ halves instead of quartering — that is two sides put together. The choice $128$ multiplies by $4$ instead of dividing. And $64$ is the square\'s area, $8 \\times 8$, which answers a different question.',
    },
    {
      q: 'A square photo frame measures $11$ centimetres along each side. How many centimetres of ribbon go exactly once around the outside?',
      choices: ['$121$', '$22$', '$33$', '$44$'],
      answer: 3,
      solution:
        'Ribbon follows the boundary of a four-sided square: $4 \\times 11 = 44$ centimetres. The choice $121$ is $11 \\times 11$, the area in square centimetres — square centimetres measure surface, and ribbon is measured in plain centimetres. The choices $22$ and $33$ cover only two sides and only three sides.',
    },
  ],
  // p6 — midpoint with a negative endpoint
  [
    {
      q: 'What is the midpoint of the segment from $-8$ to $4$?',
      choices: ['$-4$', '$6$', '$-6$', '$-2$'],
      answer: 3,
      solution:
        'Average the endpoints: $\\frac{-8 + 4}{2} = \\frac{-4}{2} = -2$. Check: from $-8$ to $-2$ is $6$, and from $-2$ to $4$ is $6$ as well. The choice $-4$ is the sum, with the division by $2$ left out. The choice $6$ is half the distance — how far the midpoint is from each end, not where it lands. And $-6$ comes from subtracting the endpoints, $\\frac{-8 - 4}{2}$, instead of adding them.',
    },
    {
      q: 'What is the midpoint of the segment from $-14$ to $-2$?',
      choices: ['$-8$', '$-16$', '$6$', '$-6$'],
      answer: 0,
      solution:
        'Add and halve: $\\frac{-14 + (-2)}{2} = \\frac{-16}{2} = -8$. Check: $-8$ is $6$ away from both $-14$ and $-2$. The choice $-16$ is the sum with no halving. The choice $6$ is half the distance between the points, a length rather than a location. And $-6$ comes from $\\frac{-14 - (-2)}{2}$, subtracting where you should add.',
    },
    {
      q: 'On a temperature scale, one mark sits at $-5$ and another at $11$. Which number is exactly halfway between them?',
      choices: ['$6$', '$16$', '$3$', '$8$'],
      answer: 2,
      solution:
        'Average the two marks: $\\frac{-5 + 11}{2} = \\frac{6}{2} = 3$. Check: from $-5$ up to $3$ is $8$, and from $3$ up to $11$ is $8$. The choice $6$ is the sum, missing the division by $2$. The choice $16$ is the whole distance between the marks, and $8$ is half that distance — both are gaps, not positions on the scale.',
    },
  ],
  // p7 — one side of a rectangle from its perimeter
  [
    {
      q: 'A rectangle has perimeter $48$ and length $15$. What is its width?',
      choices: ['$33$', '$9$', '$18$', '$24$'],
      answer: 1,
      solution:
        'One length plus one width is half the perimeter: $15 + w = 24$, so $w = 24 - 15 = 9$. Check: $2(15 + 9) = 48$. The choice $33$ is $48 - 15$, subtracting before halving. The choice $18$ is $48 - 2 \\times 15$, which is two widths — you still have to halve it. And $24$ is half the perimeter, which is a length plus a width, not the width alone.',
    },
    {
      q: 'A rectangular rug has perimeter $30$ feet and width $4$ feet. How long is it?',
      choices: ['$26$', '$22$', '$15$', '$11$'],
      answer: 3,
      solution:
        'Half the perimeter is one length plus one width: $30 \\div 2 = 15$, so the length is $15 - 4 = 11$ feet. Check: $2(11 + 4) = 30$. The choice $26$ is $30 - 4$, forgetting to halve first. The choice $22$ is $30 - 2 \\times 4$, which is two lengths rather than one. And $15$ is half the perimeter itself, before the width is taken off.',
    },
    {
      q: 'A rectangle has perimeter $40$, and one of its sides measures $6$. How long is the side next to it?',
      choices: ['$14$', '$34$', '$20$', '$28$'],
      answer: 0,
      solution:
        'Neighbouring sides add to half the perimeter: $40 \\div 2 = 20$, so the other side is $20 - 6 = 14$. Check: $2(6 + 14) = 40$. The choice $34$ is $40 - 6$, subtracting before halving. The choice $20$ is half the perimeter, which is both sides together. And $28$ is $40 - 2 \\times 6$, which counts the wanted side twice.',
    },
  ],
  // p8 — perimeter of an L-shape made by notching a rectangle
  [
    {
      q: 'An L-shaped tray is a $12 \\times 7$ rectangle with a $4 \\times 3$ rectangular corner removed. What is its perimeter?',
      choices: ['$52$', '$38$', '$72$', '$31$'],
      answer: 1,
      solution:
        'Trace the six sides: $12$, then $7 - 3 = 4$, then $4$, then $3$, then $12 - 4 = 8$, then $7$. That totals $12 + 4 + 4 + 3 + 8 + 7 = 38$ — exactly $2(12 + 7)$, the uncut rectangle\'s perimeter, because the notch\'s two new edges replace the two edges it removed. The choice $52$ adds the notch\'s own perimeter, $38 + 2(4 + 3)$, counting those edges twice. The choice $72$ is the AREA, $12 \\times 7 - 4 \\times 3 = 84 - 12$ — square units, not units. And $31$ drops the last side of length $7$ while tracing.',
    },
    {
      q: 'A shelf is a $15 \\times 9$ rectangle with a $5 \\times 4$ rectangular corner cut away. What is the perimeter of the shelf?',
      choices: ['$48$', '$30$', '$66$', '$115$'],
      answer: 0,
      solution:
        'Trace all six sides: $15$, then $9 - 4 = 5$, then $5$, then $4$, then $15 - 5 = 10$, then $9$. The sum is $15 + 5 + 5 + 4 + 10 + 9 = 48$, the same as $2(15 + 9)$ for the whole rectangle. Cutting a corner notch never changes the perimeter. The choice $30$ subtracts the notch\'s perimeter, assuming the boundary got shorter. The choice $66$ adds it instead. And $115$ is the area, $135 - 20$, measured in square units.',
    },
    {
      q: 'A tabletop is a $20 \\times 14$ rectangle with a $6 \\times 5$ rectangular corner notched out so it fits around a pillar. What is the perimeter of the tabletop?',
      choices: ['$90$', '$250$', '$68$', '$46$'],
      answer: 2,
      solution:
        'Walk the boundary: $20$, then $14 - 5 = 9$, then $6$, then $5$, then $20 - 6 = 14$, then $14$. The total is $20 + 9 + 6 + 5 + 14 + 14 = 68$, which matches $2(20 + 14)$ — the notch pushed the edge inward without lengthening or shortening it. The choice $90$ adds the notch\'s perimeter on top, and $46$ subtracts it. The choice $250$ is the area, $280 - 30$ square units.',
    },
  ],
  // p9 — a rectangle whose sides are in a given ratio
  [
    {
      q: 'A rectangle\'s length is $3$ times its width, and its perimeter is $48$. What is its length?',
      choices: ['$6$', '$18$', '$24$', '$16$'],
      answer: 1,
      solution:
        'Let the width be $w$, so the length is $3w$. The perimeter is $2(w + 3w) = 8w = 48$, giving $w = 6$, and the length is $3 \\times 6 = 18$. Check: $2(6 + 18) = 48$. The choice $6$ is the width — the question asks for the length. The choice $24$ is half the perimeter, one length plus one width together. And $16$ comes from dividing the perimeter by $3$, but $3$ is the ratio of the sides, not the number of pieces the perimeter splits into.',
    },
    {
      q: 'A rectangle\'s width is half its length, and its perimeter is $42$. What is its width?',
      choices: ['$14$', '$21$', '$7$', '$\\frac{21}{2}$'],
      answer: 2,
      solution:
        'If the width is $w$, the length is $2w$, so the perimeter is $2(w + 2w) = 6w = 42$ and $w = 7$. Check: $2(7 + 14) = 42$. The choice $14$ is the length — read the question again, it wants the width. The choice $21$ is half the perimeter, one length plus one width. And $\\frac{21}{2}$ comes from dividing the perimeter by $4$, which would only be right if all four sides were equal.',
    },
    {
      q: 'A rectangle\'s length is $5$ times its width, and its perimeter is $72$. What is its length?',
      choices: ['$36$', '$6$', '$180$', '$30$'],
      answer: 3,
      solution:
        'Write the width as $w$ and the length as $5w$. Then $2(w + 5w) = 12w = 72$, so $w = 6$ and the length is $5 \\times 6 = 30$. Check: $2(6 + 30) = 72$. The choice $36$ is half the perimeter. The choice $6$ is the width, not the length. And $180$ is the area $6 \\times 30$, measured in square units — a different measurement altogether.',
    },
  ],
  // p10 — finding an endpoint from the midpoint
  [
    {
      q: 'Point $M$ is the midpoint of segment $AB$. Point $A$ is at $2$ and $M$ is at $10$. Where is point $B$?',
      choices: ['$18$', '$6$', '$12$', '$20$'],
      answer: 0,
      solution:
        'The midpoint sits in the middle, so $B$ is as far past $M$ as $A$ is before it. From $2$ to $10$ is a jump of $8$, so jump $8$ more: $10 + 8 = 18$. Check: $\\frac{2 + 18}{2} = 10$. The choice $6$ is the midpoint of $2$ and $10$, which answers a different question. The choice $12$ is the sum $2 + 10$. And $20$ doubles the midpoint but forgets to subtract $A$ — that shortcut only works when $A$ sits at $0$.',
    },
    {
      q: 'Point $M$ is the midpoint of segment $AB$. Point $A$ is at $-9$ and $M$ is at $-1$. Where is point $B$?',
      choices: ['$-5$', '$7$', '$-10$', '$-2$'],
      answer: 1,
      solution:
        'From $-9$ to $-1$ is a jump of $8$, so $B$ is $8$ further along: $-1 + 8 = 7$. Check: $\\frac{-9 + 7}{2} = \\frac{-2}{2} = -1$. The choice $-5$ is the midpoint of $-9$ and $-1$, a different question. The choice $-10$ is the sum of the two given numbers. And $-2$ is twice the midpoint with the subtraction of $A$ left out.',
    },
    {
      q: 'The midpoint of segment $PQ$ is at $6$, and $Q$ is at $20$. Where is point $P$?',
      choices: ['$13$', '$14$', '$12$', '$-8$'],
      answer: 3,
      solution:
        'From $P$ to $6$ must match the jump from $6$ to $20$, which is $14$. So $P$ sits $14$ below the midpoint: $6 - 14 = -8$. Check: $\\frac{-8 + 20}{2} = \\frac{12}{2} = 6$. The choice $13$ is the midpoint of $6$ and $20$. The choice $14$ is the size of the jump, a distance rather than a position. And $12$ is twice the midpoint, forgetting to subtract $20$.',
    },
  ],
]

const s112 = [
  // p1 — area of a rectangle
  [
    {
      q: 'A rectangle has length $7$ and width $5$. What is its area?',
      choices: ['$24$', '$12$', '$70$', '$35$'],
      answer: 3,
      solution:
        'Area is length times width: $7 \\times 5 = 35$ square units. The choice $24$ is the perimeter $2(7 + 5)$ — the walk around the edge, not the space inside. The choice $12$ is just $7 + 5$, and $70$ doubles the area for no reason; there is no $2$ in the area formula.',
    },
    {
      q: 'A rectangular sticker is $12$ millimetres long and $6$ millimetres wide. What is its area, in square millimetres?',
      choices: ['$72$', '$36$', '$18$', '$144$'],
      answer: 0,
      solution:
        'Multiply the two side lengths: $12 \\times 6 = 72$ square millimetres. The choice $36$ is the perimeter $2(12 + 6)$, measured in plain millimetres rather than square millimetres. The choice $18$ adds the sides instead of multiplying, and $144$ is $12 \\times 12$ — using the length twice and never using the width.',
    },
    {
      q: 'Each floor tile is a rectangle $4$ inches by $11$ inches. What is the area of one tile, in square inches?',
      choices: ['$15$', '$30$', '$44$', '$88$'],
      answer: 2,
      solution:
        'One tile covers $4 \\times 11 = 44$ square inches. The choice $15$ adds the two sides, and $30$ is the perimeter $2(4 + 11)$ — that would be the length of trim around the tile, not the surface it covers. The choice $88$ doubles the area, as if the formula had a $2$ in it.',
    },
  ],
  // p2 — area of a square
  [
    {
      q: 'What is the area of a square with side length $9$?',
      choices: ['$81$', '$36$', '$18$', '$27$'],
      answer: 0,
      solution:
        'A square is a rectangle whose sides match: $9 \\times 9 = 81$ square units. The choice $36$ is the perimeter $4 \\times 9$, which measures the boundary instead of the inside. The choices $18$ and $27$ are two sides and three sides added up — still boundary lengths, not areas.',
    },
    {
      q: 'A square garden has an area of $49$ square metres. How long is each side, in metres?',
      choices: ['$\\frac{49}{4}$', '$7$', '$98$', '$28$'],
      answer: 1,
      solution:
        'The side times itself gives $49$, and $7 \\times 7 = 49$, so each side is $7$ metres. The choice $\\frac{49}{4}$ divides by $4$, which undoes a perimeter, not an area. The choice $98$ doubles the area. And $28$ is the garden\'s perimeter, $4 \\times 7$ — the walk around, not one side.',
    },
    {
      q: 'A square napkin measures $11$ inches along each side. How many square inches of cloth does it cover?',
      choices: ['$44$', '$22$', '$121$', '$242$'],
      answer: 2,
      solution:
        'Multiply side by side: $11 \\times 11 = 121$ square inches. The choice $44$ is the perimeter $4 \\times 11$, which is how much hem runs around the edge, measured in plain inches. The choice $22$ adds only two sides, and $242$ doubles the area.',
    },
  ],
  // p3 — area of a right triangle from its legs
  [
    {
      q: 'A right triangle has legs of length $5$ and $12$. What is its area?',
      choices: ['$60$', '$30$', '$17$', '$\\frac{17}{2}$'],
      answer: 1,
      solution:
        'A right triangle is half of the rectangle built on its legs: $\\frac{1}{2} \\times 5 \\times 12 = 30$ square units. The choice $60$ is the whole rectangle — the $\\frac{1}{2}$ got dropped. The choice $17$ adds the legs instead of multiplying them, and $\\frac{17}{2}$ halves that sum, applying the $\\frac{1}{2}$ to an addition instead of a product.',
    },
    {
      q: 'A right-triangular flag has legs measuring $10$ centimetres and $9$ centimetres. What is its area, in square centimetres?',
      choices: ['$90$', '$19$', '$180$', '$45$'],
      answer: 3,
      solution:
        'Take half the product of the legs: $\\frac{1}{2} \\times 10 \\times 9 = 45$ square centimetres. The choice $90$ forgets the $\\frac{1}{2}$ and gives the full rectangle, which is twice too big. The choice $19$ adds the legs — a length, not an area. And $180$ doubles the rectangle instead of halving it.',
    },
    {
      q: 'The two legs of a right triangle measure $16$ and $5$. What is the area of the triangle?',
      choices: ['$80$', '$21$', '$40$', '$20$'],
      answer: 2,
      solution:
        'Half of the leg-by-leg rectangle: $\\frac{1}{2} \\times 16 \\times 5 = 8 \\times 5 = 40$ square units. The choice $80$ leaves out the $\\frac{1}{2}$. The choice $21$ adds the legs. And $20$ halves twice — once by turning $16$ into $8$ and again at the end — so it is only half of the right answer.',
    },
  ],
  // p4 — area of a parallelogram
  [
    {
      q: 'A parallelogram has base $9$ and height $4$. What is its area?',
      choices: ['$13$', '$36$', '$18$', '$72$'],
      answer: 1,
      solution:
        'A parallelogram is a pushed-over rectangle, so its area is base times height: $9 \\times 4 = 36$ square units. The choice $18$ throws in a $\\frac{1}{2}$, but that belongs to triangles only. The choice $13$ adds the base and height instead of multiplying, and $72$ doubles the answer.',
    },
    {
      q: 'A parallelogram has area $48$ and base $8$. What is its height?',
      choices: ['$6$', '$12$', '$40$', '$384$'],
      answer: 0,
      solution:
        'From $bh = 48$ with $b = 8$, divide: $h = 48 \\div 8 = 6$. Check: $8 \\times 6 = 48$. The choice $12$ solves $\\frac{1}{2} \\times 8 \\times h = 48$, sneaking in a triangle\'s $\\frac{1}{2}$ where a parallelogram has none. The choice $40$ subtracts the base from the area, and $384$ multiplies where it should divide.',
    },
    {
      q: 'A parallelogram-shaped floor tile has base $15$ centimetres and height $6$ centimetres. What is its area, in square centimetres?',
      choices: ['$21$', '$45$', '$180$', '$90$'],
      answer: 3,
      solution:
        'Base times height: $15 \\times 6 = 90$ square centimetres. The choice $45$ halves it, treating the tile like a triangle. The choice $21$ adds the two numbers, and $180$ doubles the area instead of leaving it alone.',
    },
  ],
  // p5 — area of a triangle from base and height
  [
    {
      q: 'A triangle has base $16$ and height $7$. What is its area?',
      choices: ['$112$', '$23$', '$56$', '$28$'],
      answer: 2,
      solution:
        'Use $\\frac{1}{2}bh$. Halve the base first to keep it easy: $8 \\times 7 = 56$ square units. The choice $112$ is $16 \\times 7$ with the $\\frac{1}{2}$ forgotten — the classic slip, and it gives exactly double. The choice $23$ adds base and height. And $28$ halves twice: once turning $16$ into $8$, then again at the end.',
    },
    {
      q: 'A triangular sail has base $14$ metres and height $11$ metres. What is its area, in square metres?',
      choices: ['$77$', '$154$', '$25$', '$\\frac{77}{2}$'],
      answer: 0,
      solution:
        'Area $= \\frac{1}{2} \\times 14 \\times 11 = 7 \\times 11 = 77$ square metres. The choice $154$ drops the $\\frac{1}{2}$ and gives the full rectangle around the sail. The choice $25$ adds base and height, which measures lengths rather than surface. And $\\frac{77}{2}$ halves one time too many.',
    },
    {
      q: 'A triangle has area $30$ and height $5$. What is the length of the base it was measured from?',
      choices: ['$6$', '$25$', '$150$', '$12$'],
      answer: 3,
      solution:
        'From $\\frac{1}{2} \\times b \\times 5 = 30$, first double both sides: $5b = 60$, so $b = 12$. Check: $\\frac{1}{2} \\times 12 \\times 5 = 30$. The choice $6$ solves $5b = 30$, forgetting the $\\frac{1}{2}$, and lands on half the true base. The choice $25$ subtracts the height from the area, and $150$ multiplies instead of dividing.',
    },
  ],
  // p6 — area of a trapezoid
  [
    {
      q: 'A trapezoid has parallel sides $4$ and $10$, with height $5$. What is its area?',
      choices: ['$70$', '$35$', '$19$', '$50$'],
      answer: 1,
      solution:
        'Average the parallel sides, then multiply by the height: $\\frac{4 + 10}{2} = 7$, and $7 \\times 5 = 35$ square units. The choice $70$ forgets the averaging step and uses $(4 + 10) \\times 5$ — twice too big. The choice $19$ adds all three numbers, and $50$ uses only the longer parallel side, $10 \\times 5$, ignoring the short one.',
    },
    {
      q: 'A trapezoid has parallel sides $8$ and $12$, with height $7$. What is its area?',
      choices: ['$140$', '$27$', '$70$', '$56$'],
      answer: 2,
      solution:
        'The average of the parallel sides is $\\frac{8 + 12}{2} = 10$, so the area is $10 \\times 7 = 70$ square units — the trapezoid holds exactly as much as a $10 \\times 7$ rectangle. The choice $140$ skips the $\\frac{1}{2}$. The choice $27$ adds the three given numbers, and $56$ uses only the shorter parallel side, $8 \\times 7$.',
    },
    {
      q: 'A trapezoid has parallel sides $6$ and $14$ and area $60$. What is its height?',
      choices: ['$3$', '$50$', '$12$', '$6$'],
      answer: 3,
      solution:
        'The average of the parallel sides is $\\frac{6 + 14}{2} = 10$, so $10h = 60$ and $h = 6$. Check: $\\frac{1}{2}(6 + 14) \\times 6 = 60$. The choice $3$ solves $(6 + 14)h = 60$, leaving out the $\\frac{1}{2}$, and comes out half as tall as it should. The choice $12$ doubles both sides to get $20h = 120$ but then divides by $10$ instead of $20$. And $50$ subtracts $10$ from the area instead of dividing by it.',
    },
  ],
  // p7 — area of a composite shape built from rectangles
  [
    {
      q: 'An L-shaped room is made by joining a $9 \\times 6$ rectangle and a $5 \\times 4$ rectangle along an edge, with no overlap. What is the room\'s area?',
      choices: ['$74$', '$54$', '$34$', '$24$'],
      answer: 0,
      solution:
        'Rectangles that do not overlap simply add their areas: $9 \\times 6 = 54$ and $5 \\times 4 = 20$, so the room covers $54 + 20 = 74$ square units. The choice $54$ counts only the big piece. The choice $34$ subtracts the small rectangle instead of adding it — nothing was cut away here, a piece was joined on. And $24$ adds the four side lengths, which is not an area at all.',
    },
    {
      q: 'A flower bed is made by joining a $12 \\times 5$ rectangle to a $7 \\times 3$ rectangle along an edge, with no overlap. What is its total area?',
      choices: ['$39$', '$81$', '$60$', '$27$'],
      answer: 1,
      solution:
        'Add the two pieces: $12 \\times 5 = 60$ and $7 \\times 3 = 21$, so the bed covers $60 + 21 = 81$ square units. The choice $60$ forgets the smaller piece entirely. The choice $39$ subtracts instead of adding. And $27$ adds up the four given lengths, mixing lengths with areas.',
    },
    {
      q: 'An L-shaped rug is an $11 \\times 8$ rectangle with a $4 \\times 5$ rectangular corner removed. What is the rug\'s area?',
      choices: ['$88$', '$108$', '$68$', '$38$'],
      answer: 2,
      solution:
        'Start with the whole rectangle and take away the missing corner: $11 \\times 8 - 4 \\times 5 = 88 - 20 = 68$ square units. The choice $88$ forgets to remove the corner. The choice $108$ adds the corner instead of subtracting it. And $38$ is the rug\'s perimeter, $2(11 + 8)$ — the notch leaves the boundary length alone, but that is a length in units, not an area in square units.',
    },
  ],
  // p8 — extreme area for a fixed perimeter
  [
    {
      q: 'Among all rectangles with whole-number sides and perimeter $16$, what is the largest possible area?',
      choices: ['$15$', '$16$', '$12$', '$64$'],
      answer: 1,
      solution:
        'Perimeter $16$ means length plus width is $8$. List the areas: $1 \\times 7 = 7$, $2 \\times 6 = 12$, $3 \\times 5 = 15$, $4 \\times 4 = 16$. The square wins with $16$ — with a fixed perimeter, the closer the sides are to equal, the more area you get. The choices $15$ and $12$ are the runners-up, from $3 \\times 5$ and $2 \\times 6$. And $64 = 8 \\times 8$ uses half the perimeter as BOTH sides, which would need a perimeter of $32$.',
    },
    {
      q: 'Among all rectangles with whole-number sides and perimeter $24$, what is the smallest possible area?',
      choices: ['$11$', '$36$', '$0$', '$20$'],
      answer: 0,
      solution:
        'Length plus width is $12$. The areas run $1 \\times 11 = 11$, $2 \\times 10 = 20$, $3 \\times 9 = 27$, and so on up to $6 \\times 6 = 36$. The smallest is $11$: the most stretched-out rectangle holds the least. The choice $36$ is the LARGEST area, from the square. The choice $20$ is the next one up from the smallest. And $0$ would need a side of length $0$, which is a line segment, not a rectangle.',
    },
    {
      q: 'Among all rectangles with whole-number sides and perimeter $28$, what is the largest possible area?',
      choices: ['$48$', '$196$', '$45$', '$49$'],
      answer: 3,
      solution:
        'Half the perimeter is $14$, so the sides add to $14$. Testing them, $5 \\times 9 = 45$, $6 \\times 8 = 48$, and $7 \\times 7 = 49$ — the square is the winner at $49$. The choices $48$ and $45$ are the best non-square rectangles, just short of the record. And $196 = 14 \\times 14$ uses the half-perimeter for both sides at once.',
    },
  ],
  // p9 — perimeter of a rectangle described by its area
  [
    {
      q: 'A rectangle has area $63$, and its length is $2$ more than its width. What is its perimeter?',
      choices: ['$32$', '$63$', '$16$', '$36$'],
      answer: 0,
      solution:
        'Look for two numbers that differ by $2$ and multiply to $63$: $7 \\times 9 = 63$. So the rectangle is $7$ by $9$, and its perimeter is $2(7 + 9) = 32$. The choice $63$ repeats the area, which is what you were given, not what was asked. The choice $16$ is $7 + 9$, only half the walk around. And $36 = 4 \\times 9$ treats the shape as a square with side $9$.',
    },
    {
      q: 'A rectangle has area $40$, and its length is $3$ more than its width. What is its perimeter?',
      choices: ['$13$', '$40$', '$32$', '$26$'],
      answer: 3,
      solution:
        'Find two numbers differing by $3$ whose product is $40$: $5 \\times 8 = 40$. The perimeter is then $2(5 + 8) = 26$. The choice $40$ hands back the area. The choice $13$ is one length plus one width, half the perimeter. And $32 = 4 \\times 8$ pretends the rectangle is a square with side $8$.',
    },
    {
      q: 'A rectangle has area $72$, and its length is twice its width. What is its perimeter?',
      choices: ['$72$', '$18$', '$36$', '$24$'],
      answer: 2,
      solution:
        'If the width is $w$, the length is $2w$ and the area is $2w^2 = 72$, so $w^2 = 36$ and $w = 6$. The length is $12$, and the perimeter is $2(6 + 12) = 36$. The choice $72$ is the area again. The choice $18$ is one width plus one length. And $24 = 4 \\times 6$ builds a square on the width instead of using both side lengths.',
    },
  ],
  // p10 — the area of a border around a shape
  [
    {
      q: 'A square photo with side $8$ sits inside a mat that is $3$ units wide all the way around. What is the area of the mat alone?',
      choices: ['$57$', '$132$', '$196$', '$24$'],
      answer: 1,
      solution:
        'The mat adds $3$ units on the left AND $3$ on the right, so the outer square is $8 + 3 + 3 = 14$ units across. Subtract the photo: $14 \\times 14 - 8 \\times 8 = 196 - 64 = 132$ square units. The choice $57$ adds the $3$ only once, using an $11 \\times 11$ outer square. The choice $196$ is the whole outer square, photo included. And $24 = 8 \\times 3$ is only one strip of mat, not all four.',
    },
    {
      q: 'A rectangular painting is $12$ units by $9$ units, and a frame $2$ units wide surrounds it on every side. What is the area of the frame itself?',
      choices: ['$46$', '$208$', '$100$', '$108$'],
      answer: 2,
      solution:
        'The frame adds $2$ units on both ends of each direction, so the outer rectangle is $16$ by $13$. Then $16 \\times 13 - 12 \\times 9 = 208 - 108 = 100$ square units. The choice $46$ adds the $2$ only once, using a $14 \\times 11$ outer rectangle. The choice $208$ is the whole outer rectangle, and $108$ is the painting alone.',
    },
    {
      q: 'A square rug with side $10$ is laid in the centre of a square floor with side $16$. How much of the floor is left uncovered?',
      choices: ['$36$', '$256$', '$24$', '$156$'],
      answer: 3,
      solution:
        'Take the floor and remove the rug: $16 \\times 16 - 10 \\times 10 = 256 - 100 = 156$ square units. The choice $36$ comes from subtracting the sides first and squaring, $(16 - 10)^2$ — but areas must be subtracted after squaring, not before. The choice $256$ is the entire floor. And $24$ subtracts the two perimeters, $4 \\times 16 - 4 \\times 10$, comparing boundaries instead of surfaces.',
    },
  ],
]

const s113 = [
  // p1 — radius and diameter
  [
    {
      q: 'A circle has radius $9$. What is its diameter?',
      choices: ['$18$', '$81$', '$9$', '$\\frac{9}{2}$'],
      answer: 0,
      solution:
        'The diameter runs all the way across through the centre — two radii end to end — so $d = 2r = 2 \\times 9 = 18$. The choice $81$ squares the radius, which belongs to the area formula, not the diameter. The choice $9$ hands back the radius unchanged, and $\\frac{9}{2}$ halves the radius instead of doubling it.',
    },
    {
      q: 'A circle has diameter $22$. What is its radius?',
      choices: ['$44$', '$11$', '$22$', '$121$'],
      answer: 1,
      solution:
        'The radius is half the diameter: $r = 22 \\div 2 = 11$. The choice $44$ doubles when it should halve — that is the diameter of a much bigger circle. The choice $22$ repeats the diameter, and $121$ squares the radius, which would give an area, not a length.',
    },
    {
      q: 'A round tabletop measures $30$ inches from its centre out to the edge. How many inches wide is the tabletop all the way across?',
      choices: ['$15$', '$30$', '$60$', '$900$'],
      answer: 2,
      solution:
        'Centre to edge is the radius, and all the way across is the diameter: $d = 2 \\times 30 = 60$ inches. The choice $15$ halves the radius instead of doubling it. The choice $30$ repeats the radius, and $900$ is $30^2$, which would be part of an area calculation.',
    },
  ],
  // p2 — circumference from the radius
  [
    {
      q: 'What is the exact circumference of a circle with radius $8$?',
      choices: ['$64\\pi$', '$8\\pi$', '$32\\pi$', '$16\\pi$'],
      answer: 3,
      solution:
        'Circumference is $C = 2\\pi r = 2 \\times \\pi \\times 8 = 16\\pi$. The choice $64\\pi$ is the area $\\pi r^2$ — square units for the inside, not units around the rim. The choice $8\\pi$ is $\\pi r$, with the $2$ left out. And $32\\pi$ uses the diameter $16$ in place of the radius inside $2\\pi r$, doubling one time too many.',
    },
    {
      q: 'What is the exact circumference of a circle with radius $11$?',
      choices: ['$22\\pi$', '$121\\pi$', '$11\\pi$', '$44\\pi$'],
      answer: 0,
      solution:
        'Apply $C = 2\\pi r = 2 \\times \\pi \\times 11 = 22\\pi$. The choice $121\\pi$ is the area, $\\pi \\times 11^2$. The choice $11\\pi$ forgets the $2$, and $44\\pi$ plugs the diameter $22$ into $2\\pi r$ instead of the radius.',
    },
    {
      q: 'A circular flower bed has radius $6$ feet. Exactly how much edging is needed to run once all the way around it?',
      choices: ['$36\\pi$', '$6\\pi$', '$12\\pi$', '$24\\pi$'],
      answer: 2,
      solution:
        'Edging follows the rim, which is the circumference: $2\\pi \\times 6 = 12\\pi$ feet. The choice $36\\pi$ is the area $\\pi \\times 6^2$, measured in square feet — that is the soil inside, not the edging around. The choice $6\\pi$ leaves out the $2$, and $24\\pi$ feeds the diameter $12$ into $2\\pi r$.',
    },
  ],
  // p3 — area from the radius
  [
    {
      q: 'What is the exact area of a circle with radius $5$?',
      choices: ['$10\\pi$', '$25\\pi$', '$5\\pi$', '$100\\pi$'],
      answer: 1,
      solution:
        'Area is $A = \\pi r^2 = \\pi \\times 5 \\times 5 = 25\\pi$ square units. The choice $10\\pi$ is the circumference $2\\pi r$ — a distance around, not a space inside. The choice $5\\pi$ forgets to square the radius, and $100\\pi$ squares the diameter $10$ instead of the radius, coming out four times too big.',
    },
    {
      q: 'What is the exact area of a circle with radius $12$?',
      choices: ['$24\\pi$', '$12\\pi$', '$144\\pi$', '$576\\pi$'],
      answer: 2,
      solution:
        'Square the radius, then bring in $\\pi$: $A = \\pi \\times 12^2 = 144\\pi$ square units. The choice $24\\pi$ is the circumference $2\\pi r$. The choice $12\\pi$ is $\\pi r$, with no squaring at all. And $576\\pi$ squares the diameter $24$, which makes the answer four times too large.',
    },
    {
      q: 'A round mirror has radius $10$ centimetres. What is its exact area, in square centimetres?',
      choices: ['$20\\pi$', '$400\\pi$', '$10\\pi$', '$100\\pi$'],
      answer: 3,
      solution:
        'Use $A = \\pi r^2 = \\pi \\times 10^2 = 100\\pi$ square centimetres. The choice $20\\pi$ is the circumference, which measures the rim in plain centimetres. The choice $400\\pi$ puts the diameter $20$ into $\\pi r^2$ — the classic trap, and it is four times too big. And $10\\pi$ never squares the radius.',
    },
  ],
  // p4 — circumference when the diameter is given
  [
    {
      q: 'A circle has diameter $18$. What is its exact circumference?',
      choices: ['$36\\pi$', '$18\\pi$', '$9\\pi$', '$81\\pi$'],
      answer: 1,
      solution:
        'Circumference is $\\pi$ times the diameter: $C = \\pi d = 18\\pi$. (The same thing: $r = 9$, so $2\\pi r = 18\\pi$.) The choice $36\\pi$ treats the diameter $18$ as a radius and computes $2\\pi \\times 18$. The choice $9\\pi$ halves to the radius but then forgets the $2$ in $2\\pi r$. And $81\\pi$ is the area, $\\pi \\times 9^2$.',
    },
    {
      q: 'A circular pool cover has diameter $24$ feet. Exactly how long is the trim that runs around its edge?',
      choices: ['$24\\pi$', '$48\\pi$', '$12\\pi$', '$144\\pi$'],
      answer: 0,
      solution:
        'The trim follows the circumference, and $C = \\pi d = 24\\pi$ feet. The choice $48\\pi$ uses the diameter where the radius belongs, $2\\pi \\times 24$. The choice $12\\pi$ is $\\pi r$, dropping the $2$ from $2\\pi r$. And $144\\pi$ is the area $\\pi \\times 12^2$, in square feet rather than feet.',
    },
    {
      q: 'A circle has circumference $30\\pi$. What is its diameter?',
      choices: ['$15$', '$60$', '$30\\pi$', '$30$'],
      answer: 3,
      solution:
        'Since $C = \\pi d$, we get $\\pi d = 30\\pi$, so $d = 30$. The choice $15$ is the radius, which is half the diameter. The choice $60$ doubles the diameter instead of leaving it be. And $30\\pi$ forgets to divide by $\\pi$ — a diameter is a plain length, with no $\\pi$ left in it.',
    },
  ],
  // p5 — area when the diameter is given
  [
    {
      q: 'A circle has diameter $14$. What is its exact area?',
      choices: ['$196\\pi$', '$49\\pi$', '$14\\pi$', '$7\\pi$'],
      answer: 1,
      solution:
        'Halve the diameter first: $r = 7$. Then $A = \\pi r^2 = \\pi \\times 7^2 = 49\\pi$ square units. The choice $196\\pi$ puts the diameter $14$ straight into $\\pi r^2$, giving four times too much. The choice $14\\pi$ is the circumference $\\pi d$, and $7\\pi$ is $\\pi r$ with no squaring.',
    },
    {
      q: 'A circle has diameter $30$. What is its exact area?',
      choices: ['$225\\pi$', '$900\\pi$', '$30\\pi$', '$15\\pi$'],
      answer: 0,
      solution:
        'First $r = 30 \\div 2 = 15$, then $A = \\pi \\times 15^2 = 225\\pi$ square units. The choice $900\\pi$ squares the diameter instead of the radius and is four times too big. The choice $30\\pi$ is the circumference $\\pi d$, and $15\\pi$ leaves the radius unsquared.',
    },
    {
      q: 'A circular trampoline measures $18$ feet all the way across. What is the exact area of its surface, in square feet?',
      choices: ['$324\\pi$', '$18\\pi$', '$81\\pi$', '$9\\pi$'],
      answer: 2,
      solution:
        '"All the way across" is the diameter, so the radius is $9$. Then $A = \\pi \\times 9^2 = 81\\pi$ square feet. The choice $324\\pi$ uses $18$ as the radius, which quadruples the area — doubling a length never doubles an area, it multiplies it by four. The choice $18\\pi$ is the circumference, and $9\\pi$ never squares the radius.',
    },
  ],
  // p6 — working backwards from the circumference
  [
    {
      q: 'A circle has circumference $26\\pi$. What is its radius?',
      choices: ['$26$', '$13$', '$13\\pi$', '$\\frac{13}{2}$'],
      answer: 1,
      solution:
        'Run the formula backwards: $2\\pi r = 26\\pi$, so $2r = 26$ and $r = 13$. The choice $26$ is the diameter — the radius is half of it. The choice $13\\pi$ keeps a $\\pi$ that should have cancelled; a radius is a plain length. And $\\frac{13}{2}$ halves one time too many.',
    },
    {
      q: 'A circle has circumference $40\\pi$. What is its radius?',
      choices: ['$40$', '$10$', '$20$', '$20\\pi$'],
      answer: 2,
      solution:
        'From $2\\pi r = 40\\pi$ we get $2r = 40$, so $r = 20$. The choice $40$ is the diameter, not the radius. The choice $10$ halves twice. And $20\\pi$ forgets to divide out the $\\pi$.',
    },
    {
      q: 'A round rug has a circumference of $34\\pi$ inches. What is its radius, in inches?',
      choices: ['$34$', '$17\\pi$', '$\\frac{17}{2}$', '$17$'],
      answer: 3,
      solution:
        'Set $2\\pi r = 34\\pi$. Dividing by $\\pi$ leaves $2r = 34$, so $r = 17$ inches. The choice $34$ is the diameter. The choice $17\\pi$ hangs on to the $\\pi$, and $\\frac{17}{2}$ halves a second time when only one halving is needed.',
    },
  ],
  // p7 — area of a semicircle
  [
    {
      q: 'What is the exact area of a semicircle with radius $8$?',
      choices: ['$32\\pi$', '$64\\pi$', '$8\\pi$', '$16\\pi$'],
      answer: 0,
      solution:
        'The full circle has area $\\pi \\times 8^2 = 64\\pi$, and a semicircle is exactly half: $32\\pi$ square units. The choice $64\\pi$ is the whole circle, with the halving forgotten. The choice $8\\pi$ is half the circumference, $\\frac{1}{2} \\times 2\\pi \\times 8$ — a curved length, not an area. And $16\\pi$ halves the radius first and computes $\\pi \\times 4^2$; the half belongs to the area, not to the radius.',
    },
    {
      q: 'What is the exact area of a semicircle with diameter $20$?',
      choices: ['$100\\pi$', '$200\\pi$', '$10\\pi$', '$50\\pi$'],
      answer: 3,
      solution:
        'Halve the diameter to get $r = 10$, so the full circle has area $\\pi \\times 10^2 = 100\\pi$ and the semicircle has half of that: $50\\pi$ square units. The choice $100\\pi$ is the full circle. The choice $200\\pi$ uses $20$ as the radius before halving, $\\frac{1}{2} \\times 400\\pi$. And $10\\pi$ is the curved edge\'s length, half the circumference.',
    },
    {
      q: 'A semicircular window has radius $14$ inches. What is its exact area, in square inches?',
      choices: ['$196\\pi$', '$14\\pi$', '$98\\pi$', '$49\\pi$'],
      answer: 2,
      solution:
        'The full circle would cover $\\pi \\times 14^2 = 196\\pi$, so the window covers half: $98\\pi$ square inches. The choice $196\\pi$ forgets to halve. The choice $14\\pi$ is half the circumference, which measures the curved edge in inches. And $49\\pi$ halves the radius before squaring, $\\pi \\times 7^2$ — that shrinks the area to a quarter, not a half.',
    },
  ],
  // p8 — perimeter of a semicircle
  [
    {
      q: 'What is the exact perimeter of a semicircle with radius $6$?',
      choices: ['$6\\pi$', '$6\\pi + 12$', '$12\\pi + 12$', '$6\\pi + 6$'],
      answer: 1,
      solution:
        'The curved edge is half the circumference: $\\frac{1}{2} \\times 2\\pi \\times 6 = 6\\pi$. The straight edge across the bottom is the diameter, $12$. Walking the whole boundary gives $6\\pi + 12$. The choice $6\\pi$ stops at the curve and forgets the flat side. The choice $12\\pi + 12$ uses the FULL circumference instead of half of it. And $6\\pi + 6$ adds the radius rather than the diameter across the bottom.',
    },
    {
      q: 'What is the exact perimeter of a semicircle with diameter $14$?',
      choices: ['$14\\pi + 14$', '$7\\pi$', '$7\\pi + 7$', '$7\\pi + 14$'],
      answer: 3,
      solution:
        'The radius is $7$, so the curved half is $\\frac{1}{2} \\times 2\\pi \\times 7 = 7\\pi$, and the straight bottom is the diameter, $14$. Total: $7\\pi + 14$. The choice $7\\pi$ leaves out the flat edge. The choice $14\\pi + 14$ uses the diameter where the radius belongs in the arc. And $7\\pi + 7$ closes the bottom with a radius instead of the full diameter.',
    },
    {
      q: 'A garden path is shaped like a half-circle of radius $30$ metres, closed off by a straight fence along its flat side. Exactly how long is the whole boundary, in metres?',
      choices: ['$30\\pi + 60$', '$30\\pi$', '$60\\pi + 60$', '$30\\pi + 30$'],
      answer: 0,
      solution:
        'The curved part is half a circumference: $\\frac{1}{2} \\times 2\\pi \\times 30 = 30\\pi$. The fence is the diameter, $60$ metres. Adding them gives $30\\pi + 60$. The choice $30\\pi$ counts only the curve and skips the fence. The choice $60\\pi + 60$ takes the whole circumference rather than half. And $30\\pi + 30$ uses the radius as the fence instead of the diameter.',
    },
  ],
  // p9 — from the area to another circle measurement
  [
    {
      q: 'A circle has area $36\\pi$. What is its exact circumference?',
      choices: ['$36\\pi$', '$12\\pi$', '$72\\pi$', '$6\\pi$'],
      answer: 1,
      solution:
        'From $\\pi r^2 = 36\\pi$ we get $r^2 = 36$, so $r = 6$. Then $C = 2\\pi r = 12\\pi$. The choice $36\\pi$ hands back the area, which is a square-unit measurement, not a length. The choice $72\\pi$ doubles the area instead of using the radius. And $6\\pi$ is $\\pi r$, missing the $2$.',
    },
    {
      q: 'A circle has area $100\\pi$. What is its exact circumference?',
      choices: ['$200\\pi$', '$100\\pi$', '$20\\pi$', '$50\\pi$'],
      answer: 2,
      solution:
        'Un-square first: $r^2 = 100$ gives $r = 10$. Then $C = 2\\pi \\times 10 = 20\\pi$. The choice $200\\pi$ doubles the area rather than working through the radius. The choice $100\\pi$ repeats the area, and $50\\pi$ halves it — but halving an area never turns it into a circumference.',
    },
    {
      q: 'A circle has area $81\\pi$. What is its diameter?',
      choices: ['$9$', '$81$', '$18\\pi$', '$18$'],
      answer: 3,
      solution:
        'From $\\pi r^2 = 81\\pi$, we get $r^2 = 81$ and $r = 9$. The diameter is twice that: $d = 18$. The choice $9$ stops at the radius. The choice $81$ never un-squares. And $18\\pi$ keeps a $\\pi$ that cancelled long ago — a diameter is a plain length.',
    },
  ],
  // p10 — how area changes when the radius changes
  [
    {
      q: 'A large round cake has radius $9$ inches and a small one has radius $3$ inches. How many small cakes together hold the same amount as the large one?',
      choices: ['$9$', '$3$', '$6$', '$81$'],
      answer: 0,
      solution:
        'Compare areas. Large: $\\pi \\times 9^2 = 81\\pi$. Small: $\\pi \\times 3^2 = 9\\pi$. Since $81\\pi \\div 9\\pi = 9$, it takes $9$ small cakes. The choice $3$ compares the radii instead of the areas — tripling a length multiplies area by $3 \\times 3 = 9$, not by $3$. The choice $6$ subtracts the radii, $9 - 3$. And $81$ is the large cake\'s area in units of $\\pi$, with no dividing done.',
    },
    {
      q: 'The radius of a circular pancake is tripled. What happens to the amount of pancake?',
      choices: ['It is $3$ times as big', 'It is $6$ times as big', 'It is $9$ times as big', 'It stays the same'],
      answer: 2,
      solution:
        'Area is $\\pi r^2$, so replacing $r$ by $3r$ gives $\\pi (3r)^2 = 9\\pi r^2$ — $9$ times as much. Answering "$3$ times" assumes area grows in step with length, but the radius is squared, so a scale factor of $3$ becomes $3 \\times 3 = 9$. Answering "$6$ times" doubles the scale factor instead of squaring it. And the amount certainly does not stay the same — a bigger circle holds more.',
    },
    {
      q: 'A circular tabletop of radius $6$ is replaced by one of radius $12$. How many times as much wood does the new top need?',
      choices: ['$2$', '$6$', '$\\frac{1}{4}$', '$4$'],
      answer: 3,
      solution:
        'The areas are $\\pi \\times 6^2 = 36\\pi$ and $\\pi \\times 12^2 = 144\\pi$, and $144\\pi \\div 36\\pi = 4$. Doubling a radius does not double the area — it quadruples it, because the radius gets squared. The choice $2$ makes exactly that mistake, comparing lengths instead of areas. The choice $6$ subtracts the radii. And $\\frac{1}{4}$ compares the old top to the new one, the wrong way round.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 11,
  sections: {
    '11.1': s111,
    '11.2': s112,
    '11.3': s113,
  },
}
