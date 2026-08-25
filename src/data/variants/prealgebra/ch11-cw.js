// Prealgebra chapter 11 — variations for the chapter challenge and the chapter
// worksheet. All problems and solutions are original MathQuest content.
// Circle answers stay exact: every one keeps $\pi$ as a symbol.

const challenge = [
  // 1. Perimeter gives the missing side; the question wants the area.
  [
    {
      q: 'A rectangular mural has perimeter $84$ feet and width $18$ feet. What is its area?',
      choices: ['$1512$', '$432$', '$756$', '$84$'],
      answer: 1,
      solution: 'Half the perimeter is one length plus one width: $84 \\div 2 = 42$. So the length is $42 - 18 = 24$ feet, and the area is $18 \\times 24 = 432$ square feet. (Multiplying the width by the half-perimeter, $18 \\times 42 = 756$, treats $42$ as the length when it is really length PLUS width. Using the whole perimeter, $18 \\times 84 = 1512$. And $84$ is the perimeter itself — the walk around, not the space inside.)',
    },
    {
      q: 'A rectangular banner has perimeter $72$ cm and length $25$ cm. What is its area?',
      choices: ['$1800$', '$900$', '$275$', '$72$'],
      answer: 2,
      solution: 'One length plus one width is half the perimeter: $72 \\div 2 = 36$, so the width is $36 - 25 = 11$ cm. The area is $25 \\times 11 = 275$ square cm. ($25 \\times 36 = 900$ uses the half-perimeter as the width; $25 \\times 72 = 1800$ uses the whole perimeter; $72$ is the perimeter, a length, and areas are measured in square cm.)',
    },
    {
      q: 'A rectangular rug has area $216$ square feet and length $18$ feet. What is its perimeter?',
      choices: ['$30$', '$36$', '$12$', '$60$'],
      answer: 3,
      solution: 'Run the area backwards: $216 \\div 18 = 12$, so the width is $12$ feet. Then the perimeter is $2(18 + 12) = 2 \\times 30 = 60$ feet. ($12$ is the width alone, stopping one step early; $30$ is $18 + 12$, half the perimeter — the doubling never happened; $36 = 2 \\times 18$ doubles the length but leaves both widths out of the walk.)',
    },
  ],
  // 2. Midpoints on the number line, including one run backwards.
  [
    {
      q: 'Point $A$ is at $-20$ and point $B$ is at $14$ on the number line. Where is the midpoint of segment $AB$?',
      choices: ['$-3$', '$-6$', '$17$', '$3$'],
      answer: 0,
      solution: 'The midpoint is the average of the endpoints: $\\frac{-20 + 14}{2} = \\frac{-6}{2} = -3$. Check: from $-20$ to $-3$ is $17$, and from $-3$ to $14$ is also $17$. ($-6$ is the sum, with the halving forgotten; $17$ is half the DISTANCE between the points — how far the midpoint sits from each end, not where it sits; $3$ has the sign flipped, and the midpoint of two numbers must lie between them.)',
    },
    {
      q: 'Point $A$ is at $-7$ and point $B$ is at $25$ on the number line. Where is the midpoint of segment $AB$?',
      choices: ['$18$', '$16$', '$-9$', '$9$'],
      answer: 3,
      solution: 'Average the endpoints: $\\frac{-7 + 25}{2} = \\frac{18}{2} = 9$. Check: $9$ is $16$ away from $-7$ and $16$ away from $25$. ($18$ skips the division by $2$; $16$ is half the distance, which answers "how far from each end" instead of "where"; $-9$ flips the sign, landing outside the segment entirely.)',
    },
    {
      q: 'Point $M$ is the midpoint of segment $AB$. Point $A$ is at $-5$ and $M$ is at $4$. Where is point $B$?',
      choices: ['$8$', '$13$', '$9$', '$-\\frac{1}{2}$'],
      answer: 1,
      solution: 'The midpoint sits in the middle, so $B$ is exactly as far past $M$ as $A$ is before it. From $-5$ to $4$ is a jump of $9$, so jump $9$ more: $4 + 9 = 13$. Check: $\\frac{-5 + 13}{2} = \\frac{8}{2} = 4$. ✓ ($9$ is the size of the jump, not a location; $8 = 2 \\times 4$ doubles $M$ but forgets to subtract $A$; $-\\frac{1}{2}$ is the midpoint of $-5$ and $4$, which answers a different question.)',
    },
  ],
  // 3. The triangle formula run backwards — the 1/2 is the whole game.
  [
    {
      q: 'A triangle has area $84$ and base $12$. What is its height?',
      choices: ['$7$', '$42$', '$14$', '$168$'],
      answer: 2,
      solution: 'The formula gives $\\frac{1}{2} \\times 12 \\times h = 84$, so $6h = 84$ and $h = 14$. Check: $\\frac{1}{2} \\times 12 \\times 14 = 84$. ✓ ($7$ comes from solving $12h = 84$ with the $\\frac{1}{2}$ left out; $168 = 2 \\times 84$ doubles the area but never divides by the base; $42 = 84 \\div 2$ halves the area instead of doubling it, and also never divides by the base.)',
    },
    {
      q: 'A triangle has area $60$ square inches and base $15$ inches. What is its height?',
      choices: ['$8$', '$4$', '$120$', '$30$'],
      answer: 0,
      solution: 'From $\\frac{1}{2} \\times 15 \\times h = 60$ we get $7.5h = 60$, so $h = 8$ inches. A tidier route: double the area first, $2 \\times 60 = 120$, then divide by the base, $120 \\div 15 = 8$. ($4$ solves $15h = 60$, dropping the $\\frac{1}{2}$; $120$ is the doubled area with no division by the base; $30$ halves the area instead of doubling and also skips the division.)',
    },
    {
      q: 'A triangle has area $108$ and height $12$. What is the length of its base?',
      choices: ['$9$', '$216$', '$54$', '$18$'],
      answer: 3,
      solution: 'Base and height play the same role in $\\frac{1}{2}bh$, so $\\frac{1}{2} \\times b \\times 12 = 108$ gives $6b = 108$ and $b = 18$. Check: $\\frac{1}{2} \\times 18 \\times 12 = 108$. ✓ ($9$ solves $12b = 108$, forgetting the $\\frac{1}{2}$; $216$ doubles the area but never divides by the height; $54$ halves the area instead and also skips the division.)',
    },
  ],
  // 4. Trapezoid area — average the parallel sides, then multiply.
  [
    {
      q: 'A trapezoid has parallel sides $6$ and $14$, with height $9$. What is its area?',
      choices: ['$180$', '$90$', '$84$', '$54$'],
      answer: 1,
      solution: 'Average the parallel sides: $\\frac{6 + 14}{2} = 10$. Multiply by the height: $10 \\times 9 = 90$ square units. The trapezoid holds exactly as much as a $10 \\times 9$ rectangle. ($180$ multiplies $(6 + 14) \\times 9$ with the $\\frac{1}{2}$ forgotten; $84 = 6 \\times 14$ multiplies the two parallel sides together, which measures no real region; $54 = 6 \\times 9$ uses only the short side, as if the figure were a rectangle.)',
    },
    {
      q: 'A trapezoid has parallel sides $8$ and $12$, with height $7$. What is its area?',
      choices: ['$140$', '$96$', '$70$', '$56$'],
      answer: 2,
      solution: 'The average of the parallel sides is $\\frac{8 + 12}{2} = 10$, and $10 \\times 7 = 70$ square units. ($140$ skips the $\\frac{1}{2}$; $96 = 8 \\times 12$ multiplies the parallel sides by each other; $56 = 8 \\times 7$ uses the shorter parallel side alone.)',
    },
    {
      q: 'A garden plot is shaped like a trapezoid whose parallel sides measure $5$ m and $11$ m, with $12$ m between them. What is its area?',
      choices: ['$96$', '$192$', '$55$', '$60$'],
      answer: 0,
      solution: 'The distance between the parallel sides is the height, so average and multiply: $\\frac{5 + 11}{2} = 8$, and $8 \\times 12 = 96$ square meters. ($192$ forgets the $\\frac{1}{2}$ and doubles the true area; $55 = 5 \\times 11$ multiplies the parallel sides together; $60 = 5 \\times 12$ treats the plot as a $5$ by $12$ rectangle.)',
    },
  ],
  // 5. Square: area and perimeter converted through the side length.
  [
    {
      q: 'A square has area $144$. What is its perimeter?',
      choices: ['$576$', '$24$', '$144$', '$48$'],
      answer: 3,
      solution: 'The side length squares to $144$, and $12 \\times 12 = 144$, so each side is $12$. The perimeter is $4 \\times 12 = 48$. ($576 = 4 \\times 144$ applies the perimeter formula to the AREA instead of to the side; $24$ counts only two of the four sides; $144$ is the area, measured in square units, while a perimeter is a plain length.)',
    },
    {
      q: 'A square has perimeter $52$. What is its area?',
      choices: ['$2704$', '$169$', '$676$', '$13$'],
      answer: 1,
      solution: 'Four equal sides share the perimeter: $52 \\div 4 = 13$. Then the area is $13 \\times 13 = 169$ square units. ($2704 = 52^2$ squares the whole perimeter; $676 = 26^2$ squares half the perimeter, which would be the side of a square with two sides, not four; $13$ is the side length, one step short of the answer.)',
    },
    {
      q: 'A square photograph has area $100$ square cm. A ribbon is glued along all four edges. Exactly how long is the ribbon?',
      choices: ['$40$', '$400$', '$20$', '$100$'],
      answer: 0,
      solution: 'The side length squares to $100$, so each side is $10$ cm. The ribbon traces the perimeter: $4 \\times 10 = 40$ cm. ($400 = 4 \\times 100$ multiplies the area by $4$ instead of the side; $20$ covers only two edges; $100$ is the area — that is the glass the photo covers, not the ribbon around it.)',
    },
  ],
  // 6. Circle area from a DIAMETER — halve first, then square.
  [
    {
      q: 'A circular tabletop has diameter $14$ cm. What is its exact area?',
      choices: ['$196\\pi$', '$14\\pi$', '$49\\pi$', '$7\\pi$'],
      answer: 2,
      solution: 'The area formula wants the radius, so halve first: $r = 14 \\div 2 = 7$. Then $A = \\pi r^2 = \\pi \\times 7^2 = 49\\pi$ square cm. ($196\\pi$ plugs the diameter into $\\pi r^2$ — four times too big; $14\\pi$ is $\\pi d$, the circumference, which measures the rim rather than the surface; $7\\pi$ is $\\pi r$ with the squaring left out.)',
    },
    {
      q: 'A round trampoline has diameter $18$ feet. What is the exact area of its mat?',
      choices: ['$324\\pi$', '$18\\pi$', '$9\\pi$', '$81\\pi$'],
      answer: 3,
      solution: 'Halve the diameter: $r = 9$. Then $A = \\pi r^2 = \\pi \\times 9^2 = 81\\pi$ square feet. Leave the $\\pi$ in place — that is what makes the answer exact. ($324\\pi = \\pi \\times 18^2$ uses the diameter as the radius; $18\\pi$ is the circumference $\\pi d$, a distance around the edge; $9\\pi$ is $\\pi r$, with the radius never squared.)',
    },
    {
      q: 'A circular stained-glass window has diameter $26$ inches. What is its exact area?',
      choices: ['$676\\pi$', '$169\\pi$', '$26\\pi$', '$13\\pi$'],
      answer: 1,
      solution: 'Halve the diameter first: $r = 13$. Then $A = \\pi r^2 = \\pi \\times 13^2 = 169\\pi$ square inches. ($676\\pi = \\pi \\times 26^2$ squares the diameter instead of the radius, giving four times the true area; $26\\pi$ is the circumference $\\pi d$; $13\\pi$ is $\\pi r$, missing the square.)',
    },
  ],
  // 7. Composite regions: subtract a notch, or add two pieces.
  [
    {
      q: 'An L-shaped deck is a $15 \\times 10$ rectangle with a $6 \\times 4$ rectangular corner removed. What is its area?',
      choices: ['$126$', '$150$', '$174$', '$50$'],
      answer: 0,
      solution: 'Start with the full rectangle and take the corner away: $15 \\times 10 - 6 \\times 4 = 150 - 24 = 126$ square units. (The notch is $6$ wide and $4$ deep, and both fit inside a $15$ by $10$ rectangle, so this really is a smaller L.) ($150$ forgets to remove the corner; $174$ ADDS the corner instead of subtracting it, which would make the deck bigger than the rectangle it was cut from; $50 = 2(15 + 10)$ is the perimeter of the full rectangle — a distance, not an area.)',
    },
    {
      q: 'An L-shaped hallway is made by joining a $9 \\times 4$ rectangle and a $6 \\times 5$ rectangle so that they do not overlap. What is the total floor area?',
      choices: ['$36$', '$66$', '$54$', '$48$'],
      answer: 1,
      solution: 'Pieces that do not overlap simply have their areas added: $9 \\times 4 = 36$ and $6 \\times 5 = 30$, so the floor covers $36 + 30 = 66$ square units. ($36$ counts only the first rectangle; $54 = 9 \\times 6$ multiplies one side from each piece, which measures no region on the floor; $48 = 26 + 22$ adds the two rectangles\' perimeters, and perimeters are distances, not areas.)',
    },
    {
      q: 'A rectangular patio measures $20$ by $12$, and a square flower bed $5$ by $5$ is cut out of one corner. What is the area of the paving that remains?',
      choices: ['$240$', '$265$', '$215$', '$64$'],
      answer: 2,
      solution: 'The whole patio is $20 \\times 12 = 240$ square units and the bed removes $5 \\times 5 = 25$, so $240 - 25 = 215$ square units of paving remain. (A $5$ by $5$ bed fits easily in a corner of a $20$ by $12$ patio, so the subtraction is legal.) ($240$ never removes the bed; $265$ adds it; $64 = 2(20 + 12)$ is the patio\'s perimeter, which is measured in units, not square units.)',
    },
  ],
  // 8. Semicircle AREA — two halvings, and neither may be skipped.
  [
    {
      q: 'A semicircular rug has diameter $20$ inches. What is its exact area?',
      choices: ['$200\\pi$', '$100\\pi$', '$10\\pi$', '$50\\pi$'],
      answer: 3,
      solution: 'Halve the diameter to get $r = 10$. A full circle would have area $\\pi \\times 10^2 = 100\\pi$, and a semicircle is half of that: $50\\pi$ square inches. ($200\\pi$ uses $20$ as the radius and then halves $400\\pi$; $100\\pi$ is the whole circle, with the second halving forgotten; $10\\pi = \\pi r$ is the length of the curved edge — a distance, not an area.)',
    },
    {
      q: 'A semicircular window has diameter $8$ feet. What is its exact area?',
      choices: ['$32\\pi$', '$16\\pi$', '$8\\pi$', '$4\\pi$'],
      answer: 2,
      solution: 'Halve the diameter: $r = 4$. The full circle has area $\\pi \\times 4^2 = 16\\pi$, so the semicircle has area $\\frac{16\\pi}{2} = 8\\pi$ square feet. ($32\\pi$ treats $8$ as the radius, halving $64\\pi$; $16\\pi$ is the full circle, never halved; $4\\pi = \\pi r$ is the curved edge, which is a length.)',
    },
    {
      q: 'A semicircular flower bed has diameter $14$ m. What is its exact area?',
      choices: ['$\\frac{49\\pi}{2}$', '$98\\pi$', '$49\\pi$', '$7\\pi$'],
      answer: 0,
      solution: 'Halve the diameter: $r = 7$. The full circle has area $\\pi \\times 7^2 = 49\\pi$, so the bed covers $\\frac{49\\pi}{2}$ square meters. An odd numerator is fine — keeping the fraction with $\\pi$ intact is what makes the answer exact. ($98\\pi$ uses $14$ as the radius and halves $196\\pi$; $49\\pi$ is the full circle; $7\\pi = \\pi r$ is the curved edge of the bed, a distance.)',
    },
  ],
  // 9. Same area (or same perimeter) does not mean same everything.
  [
    {
      q: 'Two rectangles each have area $48$: one is $3 \\times 16$ and the other is $6 \\times 8$. How much longer is the perimeter of the first than the second?',
      choices: ['$0$', '$10$', '$5$', '$66$'],
      answer: 1,
      solution: 'First: $2(3 + 16) = 38$. Second: $2(6 + 8) = 28$. The difference is $38 - 28 = 10$. Equal areas, different perimeters — the more stretched-out a rectangle is, the longer its boundary. ($0$ assumes equal areas force equal perimeters; $5 = 19 - 14$ compares the half-perimeters and forgets to double; $66 = 38 + 28$ adds the perimeters instead of comparing them.)',
    },
    {
      q: 'Two rectangles each have perimeter $40$: one is $4 \\times 16$ and the other is $10 \\times 10$. How much larger is the area of the second than the first?',
      choices: ['$36$', '$0$', '$164$', '$6$'],
      answer: 0,
      solution: 'Both really do have perimeter $40$: $2(4 + 16) = 40$ and $2(10 + 10) = 40$. Their areas are $4 \\times 16 = 64$ and $10 \\times 10 = 100$, so the square is larger by $100 - 64 = 36$ square units. With the perimeter fixed, the closer the sides are to equal, the more area you get. ($0$ assumes equal perimeters force equal areas; $164$ adds the areas; $6 = 10 - 4$ compares the short sides instead of the areas.)',
    },
    {
      q: 'Two rectangles each have area $60$: one is $2 \\times 30$ and the other is $5 \\times 12$. How much longer is the perimeter of the first than the second?',
      choices: ['$0$', '$15$', '$98$', '$30$'],
      answer: 3,
      solution: 'First: $2(2 + 30) = 64$. Second: $2(5 + 12) = 34$. The difference is $64 - 34 = 30$. The long skinny rectangle needs almost twice the fence to hold the same amount of ground. ($0$ assumes equal areas force equal perimeters; $15 = 32 - 17$ compares half-perimeters without doubling; $98 = 64 + 34$ is the sum.)',
    },
  ],
  // 10. Rolling wheels: one turn lays out one circumference.
  [
    {
      q: 'A cart wheel has diameter $26$ inches. Exactly how far does the cart move in one full turn?',
      choices: ['$52\\pi$', '$169\\pi$', '$13\\pi$', '$26\\pi$'],
      answer: 3,
      solution: 'One full turn unrolls one full circumference, and the circumference is $\\pi$ times the diameter: $C = \\pi d = 26\\pi$ inches. ($52\\pi = 2\\pi d$ doubles a measurement that already reaches all the way across; $169\\pi = \\pi \\times 13^2$ is the wheel\'s AREA, but rolling distance follows the rim, not the inside; $13\\pi = \\pi r$ is only half of the way around.)',
    },
    {
      q: 'A bicycle wheel has radius $12$ inches. Exactly how far does the bicycle travel in three full turns?',
      choices: ['$24\\pi$', '$432\\pi$', '$72\\pi$', '$36\\pi$'],
      answer: 2,
      solution: 'One turn covers one circumference: $C = 2\\pi r = 2\\pi \\times 12 = 24\\pi$ inches. Three turns cover $3 \\times 24\\pi = 72\\pi$ inches. ($24\\pi$ stops after a single turn; $432\\pi = 3 \\times 144\\pi$ triples the wheel\'s area $\\pi r^2$ instead of its circumference; $36\\pi = 3 \\times 12\\pi$ triples $\\pi r$, which is only half a circumference.)',
    },
    {
      q: 'A wheel rolls exactly $30\\pi$ cm forward in one full turn. What is its radius?',
      choices: ['$30$', '$15$', '$60$', '$15\\pi$'],
      answer: 1,
      solution: 'One turn equals one circumference, so $2\\pi r = 30\\pi$. Divide both sides by $\\pi$: $2r = 30$, so $r = 15$ cm. ($30$ is the DIAMETER — the halving never happened; $60$ doubles where it should halve; $15\\pi$ keeps a $\\pi$ that already cancelled, and a radius here is a plain number of centimeters.)',
    },
  ],
  // 11. A rectangle described by a ratio, then measured.
  [
    {
      q: 'A rectangle\'s length is $4$ times its width, and its perimeter is $70$. What is its area?',
      choices: ['$196$', '$245$', '$35$', '$70$'],
      answer: 0,
      solution: 'Let the width be $w$, so the length is $4w$. The perimeter is $2(w + 4w) = 10w = 70$, so $w = 7$ and the length is $28$. Check: $2(7 + 28) = 70$. ✓ The area is $7 \\times 28 = 196$ square units. ($245 = 7 \\times 35$ uses half the perimeter as the length; $35$ IS half the perimeter, which equals length plus width, not their product; $70$ is the perimeter — the walk around, not the space inside.)',
    },
    {
      q: 'A rectangle\'s length is twice its width, and its perimeter is $48$. What is its area?',
      choices: ['$192$', '$128$', '$64$', '$48$'],
      answer: 1,
      solution: 'With width $w$ and length $2w$, the perimeter is $2(w + 2w) = 6w = 48$, so $w = 8$ and the length is $16$. The area is $8 \\times 16 = 128$ square units. ($192 = 8 \\times 24$ mistakes half the perimeter for the length; $64 = 8 \\times 8$ treats the shape as a square, ignoring the doubling; $48$ is the perimeter itself.)',
    },
    {
      q: 'A rectangle\'s length is twice its width, and its area is $98$. What is its perimeter?',
      choices: ['$98$', '$21$', '$42$', '$28$'],
      answer: 2,
      solution: 'With width $w$ and length $2w$, the area is $w \\times 2w = 2w^2 = 98$, so $w^2 = 49$. A width is positive, so $w = 7$ is the only possibility, and the length is $14$. The perimeter is $2(7 + 14) = 42$. ($98$ is the area, measured in square units; $21 = 7 + 14$ is half the perimeter, with the doubling skipped; $28 = 4 \\times 7$ treats the rectangle as a square of side $7$, which would have area $49$, not $98$.)',
    },
  ],
  // 12. Travelling between circumference and area through the radius.
  [
    {
      q: 'A circle has circumference $10\\pi$. What is its exact area?',
      choices: ['$100\\pi$', '$10\\pi$', '$25\\pi$', '$5\\pi$'],
      answer: 2,
      solution: 'From $2\\pi r = 10\\pi$ we get $2r = 10$, so $r = 5$. Then $A = \\pi r^2 = \\pi \\times 5^2 = 25\\pi$ square units. ($100\\pi$ squares the diameter $10$ instead of the radius; $10\\pi$ simply repeats the circumference, which measures the rim; $5\\pi = \\pi r$ never squares the radius.)',
    },
    {
      q: 'A circular pond has circumference $30\\pi$ meters. Exactly how much area does the pond cover?',
      choices: ['$900\\pi$', '$30\\pi$', '$15\\pi$', '$225\\pi$'],
      answer: 3,
      solution: 'From $2\\pi r = 30\\pi$ we get $r = 15$ meters. Then $A = \\pi r^2 = \\pi \\times 15^2 = 225\\pi$ square meters. Two steps: the circumference hands you $r$, and the area needs $r$ squared. ($900\\pi = \\pi \\times 30^2$ squares the diameter; $30\\pi$ repeats the circumference, a distance; $15\\pi = \\pi r$ forgets the square.)',
    },
    {
      q: 'A circle has area $36\\pi$. What is its exact circumference?',
      choices: ['$12\\pi$', '$36\\pi$', '$6\\pi$', '$72\\pi$'],
      answer: 0,
      solution: 'From $\\pi r^2 = 36\\pi$ we get $r^2 = 36$, so $r = 6$ (a radius is positive). Then $C = 2\\pi r = 12\\pi$. ($36\\pi$ repeats the area, but a square-unit measurement cannot also be a distance; $6\\pi = \\pi r$ is only half the way around; $72\\pi = 2 \\times 36\\pi$ doubles the area instead of using the circumference formula.)',
    },
  ],
]

const worksheet = [
  // 1. Distance on the number line.
  [
    {
      q: 'Find the distance between $-13$ and $6$ on the number line.',
      answer: '$19$',
      solution: 'Subtract the smaller from the larger: $6 - (-13) = 6 + 13 = 19$. The points sit $13$ steps and $6$ steps from zero on opposite sides, so the two gaps add up.',
    },
    {
      q: 'Find the distance between $-21$ and $-8$ on the number line.',
      answer: '$13$',
      solution: 'Both points are to the left of zero, and $-8$ is the larger of the two. Subtract the smaller from the larger: $-8 - (-21) = -8 + 21 = 13$. Distance is never negative, so always take larger minus smaller.',
    },
    {
      q: 'Find the distance between $7$ and $-15$ on the number line.',
      answer: '$22$',
      solution: 'The larger number is $7$: $7 - (-15) = 7 + 15 = 22$. Walking from $-15$ up to $0$ takes $15$ steps and from $0$ up to $7$ takes $7$ more, and $15 + 7 = 22$. ✓',
    },
  ],
  // 2. Rectangle perimeter, forwards and backwards.
  [
    {
      q: 'A rectangle has length $15$ and width $9$. Find its perimeter.',
      answer: '$48$',
      solution: 'Add one length and one width, then double: $2(15 + 9) = 2 \\times 24 = 48$. (Careful: $15 \\times 9 = 135$ would be the area, which counts the space inside instead of the walk around.)',
    },
    {
      q: 'A rectangular vegetable bed measures $23$ feet by $14$ feet. How much fencing is needed to enclose it?',
      answer: '$74$ feet',
      solution: 'Fencing runs along the boundary, so this is a perimeter: $2(23 + 14) = 2 \\times 37 = 74$ feet. Fencing is sold by the foot, not the square foot — that is the clue that the question wants a perimeter.',
    },
    {
      q: 'A rectangle has perimeter $58$ and width $11$. Find its length.',
      answer: '$18$',
      solution: 'Half the perimeter is one length plus one width: $58 \\div 2 = 29$. So the length is $29 - 11 = 18$. Check: $2(11 + 18) = 2 \\times 29 = 58$. ✓',
    },
  ],
  // 3. Triangle area — half of base times height.
  [
    {
      q: 'Find the area of a triangle with base $18$ and height $5$.',
      answer: '$45$ square units',
      solution: 'Area $= \\frac{1}{2}bh = \\frac{1}{2} \\times 18 \\times 5$. Halve the base first to keep the arithmetic easy: $9 \\times 5 = 45$ square units. (Skipping the $\\frac{1}{2}$ would give $90$ — the whole rectangle the triangle fills half of.)',
    },
    {
      q: 'A triangular sail has base $7$ m and height $10$ m. Find its area.',
      answer: '$35$ square meters',
      solution: 'Area $= \\frac{1}{2}bh = \\frac{1}{2} \\times 7 \\times 10$. Halve the height this time: $7 \\times 5 = 35$ square meters. Either number may be halved — whichever is friendlier.',
    },
    {
      q: 'Find the area of a triangle with base $11$ and height $4$.',
      answer: '$22$ square units',
      solution: 'Area $= \\frac{1}{2}bh = \\frac{1}{2} \\times 11 \\times 4$. Halve the height: $11 \\times 2 = 22$ square units. Halving the base instead gives $5.5 \\times 4 = 22$ as well. ✓',
    },
  ],
  // 4. Exact circumference.
  [
    {
      q: 'Find the exact circumference of a circle with radius $13$.',
      answer: '$26\\pi$',
      solution: 'Circumference $= 2\\pi r = 2 \\times \\pi \\times 13 = 26\\pi$. Keep the $\\pi$ as a symbol — that is what makes the answer exact rather than an estimate.',
    },
    {
      q: 'Find the exact circumference of a circle with diameter $22$.',
      answer: '$22\\pi$',
      solution: 'When the diameter is handed to you, the shortcut $C = \\pi d$ applies directly: $C = 22\\pi$. (Halving to $r = 11$ and using $2\\pi r = 2 \\times \\pi \\times 11 = 22\\pi$ agrees. Using $2\\pi \\times 22 = 44\\pi$ would be the classic slip — that treats the diameter as a radius.)',
    },
    {
      q: 'A round trampoline has radius $7$ feet. Find the exact length of the padding that wraps once around its rim.',
      answer: '$14\\pi$ feet',
      solution: 'Padding around the rim follows the circumference: $C = 2\\pi r = 2 \\times \\pi \\times 7 = 14\\pi$ feet. (The mat\'s area, $\\pi \\times 7^2 = 49\\pi$ square feet, answers a different question — how much fabric fills the middle.)',
    },
  ],
  // 5. Exact circle area.
  [
    {
      q: 'Find the exact area of a circle with diameter $10$.',
      answer: '$25\\pi$ square units',
      solution: 'Halve the diameter first: $r = 10 \\div 2 = 5$. Then $A = \\pi r^2 = \\pi \\times 5^2 = 25\\pi$ square units. (Dropping $10$ straight into $\\pi r^2$ gives $100\\pi$, four times too big.)',
    },
    {
      q: 'Find the exact area of a circle with diameter $14$.',
      answer: '$49\\pi$ square units',
      solution: 'The radius is half the diameter: $r = 7$. Then $A = \\pi r^2 = \\pi \\times 7^2 = 49\\pi$ square units. Square the radius first, then let $\\pi$ join in.',
    },
    {
      q: 'Find the exact area of a circle with radius $11$.',
      answer: '$121\\pi$ square units',
      solution: 'This time the radius is already given, so no halving is needed: $A = \\pi r^2 = \\pi \\times 11^2 = 121\\pi$ square units. Always check which one you were handed — radius or diameter — before reaching for a formula.',
    },
  ],
  // 6. Midpoints.
  [
    {
      q: 'Find the midpoint of the segment from $-3$ to $17$ on the number line.',
      answer: '$7$',
      solution: 'Average the endpoints: $\\frac{-3 + 17}{2} = \\frac{14}{2} = 7$. Check: $7$ is $10$ away from $-3$ and $10$ away from $17$. ✓',
    },
    {
      q: 'Find the midpoint of the segment from $-14$ to $-2$ on the number line.',
      answer: '$-8$',
      solution: 'Average the endpoints: $\\frac{-14 + (-2)}{2} = \\frac{-16}{2} = -8$. Both endpoints are negative, so the midpoint must be negative too — and indeed $-8$ sits between them, $6$ from each.',
    },
    {
      q: 'Point $M$ is the midpoint of segment $AB$. Point $A$ is at $-1$ and $M$ is at $7$. Find the location of point $B$.',
      answer: '$15$',
      solution: 'From $A$ to $M$ is a jump of $7 - (-1) = 8$, and $B$ sits the same $8$ beyond $M$: $7 + 8 = 15$. Check: $\\frac{-1 + 15}{2} = \\frac{14}{2} = 7$. ✓',
    },
  ],
  // 7. L-shape: the notch changes the area but not the perimeter.
  [
    {
      q: 'An L-shaped patio is a $16 \\times 9$ rectangle with a $6 \\times 4$ rectangular corner removed. Find its area and its perimeter.',
      answer: 'Area $120$ square units; perimeter $50$ units',
      solution: 'Area: take the notch out of the full rectangle, $16 \\times 9 - 6 \\times 4 = 144 - 24 = 120$ square units. Perimeter: tracing the six sides gives $16 + 5 + 6 + 4 + 10 + 9 = 50$ units, which is exactly the full rectangle\'s perimeter $2(16 + 9) = 50$ — the notch\'s two new edges ($6$ and $4$) replace exactly the amounts removed from the old ones.',
    },
    {
      q: 'An L-shaped rug is a $12 \\times 7$ rectangle with a $4 \\times 2$ rectangular corner removed. Find its area and its perimeter.',
      answer: 'Area $76$ square units; perimeter $38$ units',
      solution: 'Area: $12 \\times 7 - 4 \\times 2 = 84 - 8 = 76$ square units. Perimeter: trace the boundary as $12$, then $7 - 2 = 5$, then $4$, then $2$, then $12 - 4 = 8$, then $7$, for a total of $38$ units — the same as $2(12 + 7) = 38$. Cutting a corner out shrinks the area but leaves the walk around unchanged.',
    },
    {
      q: 'An L-shaped courtyard is a $20 \\times 11$ rectangle with a $7 \\times 5$ rectangular corner removed. Find its area and its perimeter.',
      answer: 'Area $185$ square units; perimeter $62$ units',
      solution: 'Area: $20 \\times 11 - 7 \\times 5 = 220 - 35 = 185$ square units. Perimeter: the corner notch pushes the boundary inward without lengthening or shortening it, so the perimeter equals the full rectangle\'s, $2(20 + 11) = 62$ units. (Tracing confirms it: $20 + 6 + 7 + 5 + 13 + 11 = 62$.)',
    },
  ],
  // 8. Trapezoid formula run backwards.
  [
    {
      q: 'A trapezoid has area $96$ and parallel sides of length $9$ and $15$. Find its height.',
      answer: '$8$',
      solution: 'The average of the parallel sides is $\\frac{9 + 15}{2} = 12$, so the area equation reads $12 \\times h = 96$. Dividing gives $h = 8$. Check: $\\frac{1}{2}(9 + 15) \\times 8 = 12 \\times 8 = 96$. ✓',
    },
    {
      q: 'A trapezoid has area $105$ and parallel sides of length $6$ and $8$. Find its height.',
      answer: '$15$',
      solution: 'Average the parallel sides: $\\frac{6 + 8}{2} = 7$. Then $7h = 105$, so $h = 15$. Check: $\\frac{1}{2}(6 + 8) \\times 15 = 7 \\times 15 = 105$. ✓ (Forgetting the $\\frac{1}{2}$ would give $14h = 105$ and a height of only $7.5$.)',
    },
    {
      q: 'A trapezoid has area $72$ and height $8$, and one of its parallel sides has length $5$. Find the length of the other parallel side.',
      answer: '$13$',
      solution: 'Write the formula with the unknown side as $b$: $\\frac{1}{2}(5 + b) \\times 8 = 72$, so $4(5 + b) = 72$ and $5 + b = 18$. Therefore $b = 13$. Check: $\\frac{1}{2}(5 + 13) \\times 8 = 9 \\times 8 = 72$. ✓ A length of $13$ is positive, so the trapezoid really can be built.',
    },
  ],
  // 9. Semicircle perimeter: curved edge PLUS the flat diameter.
  [
    {
      q: 'Find the exact perimeter of a semicircle with radius $5$.',
      answer: '$5\\pi + 10$',
      solution: 'The curved edge is half a circumference: $\\frac{1}{2} \\times 2\\pi \\times 5 = 5\\pi$. The straight edge across the bottom is the diameter, $2 \\times 5 = 10$. The walk all the way around is $5\\pi + 10$ units. Leaving out the flat side is the classic slip.',
    },
    {
      q: 'Find the exact perimeter of a semicircle with diameter $18$.',
      answer: '$9\\pi + 18$',
      solution: 'The radius is $18 \\div 2 = 9$. The curved edge is $\\frac{1}{2} \\times 2\\pi \\times 9 = 9\\pi$, and the straight edge is the diameter itself, $18$. Total: $9\\pi + 18$ units. The two pieces cannot be combined — one carries a $\\pi$ and the other does not.',
    },
    {
      q: 'A semicircular window has radius $12$ inches. Find the exact length of the trim that runs all the way around it.',
      answer: '$12\\pi + 24$ inches',
      solution: 'Trim follows the whole boundary. The curved top is half a circumference: $\\frac{1}{2} \\times 2\\pi \\times 12 = 12\\pi$ inches. The flat sill along the bottom is the diameter, $24$ inches. Total: $12\\pi + 24$ inches. (The glass area, $\\frac{1}{2} \\times \\pi \\times 12^2 = 72\\pi$ square inches, answers a different question.)',
    },
  ],
  // 10. Setting two formulas equal and cancelling.
  [
    {
      q: 'A circle\'s area is numerically $5$ times its circumference. Find its radius.',
      answer: '$10$',
      solution: 'Set up the statement: $\\pi r^2 = 5 \\times 2\\pi r = 10\\pi r$. Divide both sides by $\\pi r$, which is allowed because the radius is not zero: $r = 10$. Check: the area is $100\\pi$ and the circumference is $20\\pi$, and $100\\pi = 5 \\times 20\\pi$. ✓',
    },
    {
      q: 'For a certain circle, the area is numerically $3$ times the circumference. Find its radius.',
      answer: '$6$',
      solution: 'The statement says $\\pi r^2 = 3 \\times 2\\pi r = 6\\pi r$. Cancel the common factor $\\pi r$ (the radius is positive): $r = 6$. Check: the area is $36\\pi$ and the circumference is $12\\pi$, and $36\\pi = 3 \\times 12\\pi$. ✓ Note that "numerically" is doing real work here — an area and a distance are never the same KIND of measurement, only the same number.',
    },
    {
      q: 'A square\'s area is numerically equal to its perimeter. Find its side length.',
      answer: '$4$',
      solution: 'With side $s$, the area is $s^2$ and the perimeter is $4s$, so $s^2 = 4s$. Divide both sides by $s$, which is allowed because a side length is positive: $s = 4$. Check: the area is $16$ square units and the perimeter is $16$ units — the same number, though one counts squares and the other counts steps. Trying nearby whole sides confirms $4$ is the only one that works: $3$ gives $9$ against $12$, and $5$ gives $25$ against $20$.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 11,
  challenge,
  worksheet,
}
