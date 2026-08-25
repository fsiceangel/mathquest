// Introduction to Algebra chapter 9 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` string, and a solution. Nothing is offered to pick from, so all
//    of the teaching lives in the solution. There are no `choices` keys here.
//  - Every key was re-derived from the question text alone and then pushed
//    FORWARD: a solved inequality is re-substituted into the original, an
//    endpoint is tested on purpose to settle strict-versus-inclusive, a fraction
//    comparison is re-run over a common denominator, a radical comparison is
//    rewritten as a single square root, a counted list is written out, and an
//    optimum is checked against its neighbours.
//  - A variation changes the numbers AND the framing, and where it makes sense
//    the direction too: ask for the smallest instead of the largest, ask which
//    is smaller instead of which is greater, ask for the fewest items that
//    reach a target instead of the most that fit a budget.
//  - Two named traps run through the file. The FLIP trap: dividing by a
//    negative coefficient reverses the symbol, and in a three-part chain it
//    reverses BOTH symbols. The ENDPOINT trap: $<$ and $\le$ graph and count
//    differently, so the boundary value is always tested by hand.
//  - The base worksheet carries no figures, so neither does this file.

const worksheet = [
  // w1 — two-step linear inequality, positive coefficient, no flip. The last
  //      variation puts the variable on the RIGHT so the chain must be read
  //      back to front.
  [
    {
      q: 'Solve $5x - 8 \\ge 12$.',
      answer: '$x \\ge 4$',
      solution:
        'Undo the subtraction first: add $8$ to both sides to get $5x \\ge 20$. Now divide both sides by $5$. The divisor is POSITIVE, so the symbol stays exactly as it is: $x \\ge 4$. Check forward at the endpoint, which is where the "or equal" lives: $5(4) - 8 = 20 - 8 = 12$, and $12 \\ge 12$ is true ✓. Check a second value too: $x = 6$ gives $30 - 8 = 22 \\ge 12$ ✓, while $x = 3$ gives $7$, which is not $\\ge 12$.',
    },
    {
      q: 'Solve $3x + 7 < 25$.',
      answer: '$x < 6$',
      solution:
        'Subtract $7$ from both sides: $3x < 18$. Divide by the positive number $3$, so no flip: $x < 6$. Check forward with a value inside: $x = 5$ gives $15 + 7 = 22 < 25$ ✓. Now test the ENDPOINT on purpose: $x = 6$ gives $18 + 7 = 25$, and $25 < 25$ is FALSE — so $6$ is correctly left out, and the strict $<$ is the right symbol.',
    },
    {
      q: 'Solve $16 \\le 3x - 2$.',
      answer: '$x \\ge 6$',
      solution:
        'The variable is on the right this time, but the moves are the same. Add $2$ to both sides: $18 \\le 3x$. Divide by the positive number $3$: $6 \\le x$. Reading that from the $x$ end gives $x \\ge 6$ — the symbol points at the same number it did before, so nothing flipped. Check forward: $3(6) - 2 = 16$, and $16 \\le 16$ is true ✓; $x = 10$ gives $28$, and $16 \\le 28$ ✓.',
    },
  ],
  // w2 — the flip rule: strip the constant, then divide by a NEGATIVE
  //      coefficient and reverse the symbol.
  [
    {
      q: 'Solve $9 - 4x > 1$.',
      answer: '$x < 2$',
      solution:
        'Subtract $9$ from both sides: $-4x > -8$. Dividing by $-4$ is where the FLIP trap sits — a negative divisor reverses the symbol, so $>$ becomes $<$ and we get $x < 2$. Check forward: $x = 0$ gives $9 - 0 = 9 > 1$ ✓, and $0$ really does satisfy $x < 2$. Test the endpoint: $x = 2$ gives $9 - 8 = 1$, and $1 > 1$ is false, so $2$ is correctly excluded ✓. Forgetting to flip would give $x > 2$, but $x = 3$ gives $9 - 12 = -3$, which is not greater than $1$.',
    },
    {
      q: 'Solve $2 - 5x \\ge 17$.',
      answer: '$x \\le -3$',
      solution:
        'Subtract $2$ from both sides: $-5x \\ge 15$. Divide by $-5$ and FLIP: $x \\le -3$. The "or equal" part survives the flip — only the direction changes, never the little line underneath. Check forward at the endpoint: $x = -3$ gives $2 - 5(-3) = 2 + 15 = 17$, and $17 \\ge 17$ is true ✓. Check further out: $x = -4$ gives $2 + 20 = 22 \\ge 17$ ✓, while $x = 0$ gives $2$, which is not $\\ge 17$.',
    },
    {
      q: 'Solve $-3x + 4 < -8$.',
      answer: '$x > 4$',
      solution:
        'Subtract $4$ from both sides: $-3x < -12$. Divide by $-3$ and FLIP the symbol: $x > 4$. Notice both sides were negative before the division and the answer is positive — dividing a negative by a negative does that. Check forward: $x = 5$ gives $-15 + 4 = -11$, and $-11 < -8$ ✓. Test the endpoint: $x = 4$ gives $-12 + 4 = -8$, and $-8 < -8$ is false, so $4$ is correctly excluded ✓.',
    },
  ],
  // w3 — compare two fractions. Every pair is deliberately a one-unit finish,
  //      so estimating will not settle it. The last variation asks for the
  //      SMALLER one instead.
  [
    {
      q: 'Which is greater, $\\frac{9}{13}$ or $\\frac{11}{16}$?',
      answer: '$\\frac{9}{13}$',
      solution:
        'Both denominators are positive, so cross-multiplying is a safe move: $9 \\times 16 = 144$ against $13 \\times 11 = 143$. The $144$ was built from the numerator of $\\frac{9}{13}$, and $144 > 143$, so $\\frac{9}{13}$ is greater. Check forward with the common denominator $208$: $\\frac{9}{13} = \\frac{144}{208}$ and $\\frac{11}{16} = \\frac{143}{208}$ ✓ — the same two numbers, now sitting over one denominator. The gap is a single $\\frac{1}{208}$, so eyeballing would never have decided this.',
    },
    {
      q: 'Which is greater, $\\frac{6}{11}$ or $\\frac{11}{20}$?',
      answer: '$\\frac{11}{20}$',
      solution:
        'Cross-multiply: $6 \\times 20 = 120$ against $11 \\times 11 = 121$. The $121$ belongs to the numerator of $\\frac{11}{20}$, and $121 > 120$, so $\\frac{11}{20}$ is greater. Check forward over the common denominator $220$: $\\frac{6}{11} = \\frac{120}{220}$ and $\\frac{11}{20} = \\frac{121}{220}$ ✓. Keeping track of which product came from which numerator is the whole game — swap them and you get exactly the wrong answer.',
    },
    {
      q: 'Which is smaller, $\\frac{13}{14}$ or $\\frac{14}{15}$?',
      answer: '$\\frac{13}{14}$',
      solution:
        'This one asks for the SMALLER fraction, so decide the order first and then answer the question that was asked. Both fractions sit just under $1$: $\\frac{13}{14}$ misses $1$ by $\\frac{1}{14}$, while $\\frac{14}{15}$ misses by only $\\frac{1}{15}$. A bigger miss means further below $1$, and $\\frac{1}{14} > \\frac{1}{15}$, so $\\frac{13}{14}$ is the smaller one. Check forward by cross-multiplying: $13 \\times 15 = 195$ against $14 \\times 14 = 196$, and $195 < 196$ ✓. Over the common denominator $210$ that reads $\\frac{195}{210} < \\frac{196}{210}$ ✓.',
    },
  ],
  // w4 — solve a three-part inequality, then count the integers. Both symbols
  //      are deliberately mixed so one endpoint counts and the other does not.
  [
    {
      q: 'How many integers satisfy $-5 < 3x + 1 \\le 13$?',
      answer: '$6$ integers',
      solution:
        'Do each move to all THREE parts. Subtract $1$ everywhere: $-6 < 3x \\le 12$. Divide everywhere by the positive number $3$: $-2 < x \\le 4$. Now the ENDPOINT trap: $-2$ is excluded by the strict $<$, but $4$ is included by the $\\le$. The integers are $-1, 0, 1, 2, 3, 4$ — six of them. Check forward at both ends: $x = 4$ gives $3(4) + 1 = 13$, and $-5 < 13 \\le 13$ is true ✓, while $x = -2$ gives $-6 + 1 = -5$, and $-5 < -5$ is false ✓.',
    },
    {
      q: 'How many integers satisfy $-7 \\le 4x - 3 < 9$?',
      answer: '$4$ integers',
      solution:
        'Add $3$ to all three parts: $-4 \\le 4x < 12$. Divide all three parts by $4$: $-1 \\le x < 3$. The left endpoint counts and the right one does not, so the integers are $-1, 0, 1, 2$ — four of them. Check forward at both ends: $x = -1$ gives $4(-1) - 3 = -7$, and $-7 \\le -7$ is true ✓; $x = 3$ gives $12 - 3 = 9$, and $9 < 9$ is false, so $3$ stays out ✓. Counting $-1$ through $3$ as if both ends belonged would give five and be wrong by exactly one endpoint.',
    },
    {
      q: 'Solve $-9 < 3x + 3 \\le 12$, and list every integer that satisfies it.',
      answer: '$-4 < x \\le 3$; the integers are $-3, -2, -1, 0, 1, 2, 3$',
      solution:
        'Subtract $3$ from all three parts: $-12 < 3x \\le 9$. Divide all three parts by $3$: $-4 < x \\le 3$. Writing the list out is the safest way to count, and it also shows which endpoints made the cut: $-3, -2, -1, 0, 1, 2, 3$, seven integers in all. Check forward at both ends: $x = 3$ gives $3(3) + 3 = 12$, and $-9 < 12 \\le 12$ is true ✓; $x = -4$ gives $-12 + 3 = -9$, and $-9 < -9$ is false, so $-4$ is correctly outside ✓.',
    },
  ],
  // w5 — compare a multiple of a square root with another number by squaring.
  //      Every pair is close, and the last one pits two radicals against
  //      each other and asks for the smaller.
  [
    {
      q: 'Which is greater, $3\\sqrt{7}$ or $8$?',
      answer: '$8$',
      solution:
        'Both quantities are positive, so squaring preserves the comparison. Squares: $(3\\sqrt{7})^2 = 9 \\times 7 = 63$ and $8^2 = 64$. Since $63 < 64$, we get $3\\sqrt{7} < 8$, so $8$ is greater. Check forward by folding the coefficient inside the root: $3\\sqrt{7} = \\sqrt{9 \\times 7} = \\sqrt{63}$ and $8 = \\sqrt{64}$, and $\\sqrt{63} < \\sqrt{64}$ ✓. Squaring only $3$ and leaving the $7$ alone would be the classic slip — the coefficient AND the radicand both get squared.',
    },
    {
      q: 'Which is greater, $7\\sqrt{3}$ or $12$?',
      answer: '$7\\sqrt{3}$',
      solution:
        'Both are positive, so compare the squares: $(7\\sqrt{3})^2 = 49 \\times 3 = 147$ and $12^2 = 144$. Since $147 > 144$, we get $7\\sqrt{3} > 12$. Check forward as single roots: $7\\sqrt{3} = \\sqrt{147}$ and $12 = \\sqrt{144}$, and $\\sqrt{147} > \\sqrt{144}$ ✓. The margin is only $3$ out of about $145$, so this is decided by arithmetic, not by rounding $\\sqrt{3}$.',
    },
    {
      q: 'Which is smaller, $6\\sqrt{2}$ or $\\sqrt{80}$?',
      answer: '$6\\sqrt{2}$',
      solution:
        'Two radicals this time, and the question asks for the SMALLER one. Both are positive, so square them: $(6\\sqrt{2})^2 = 36 \\times 2 = 72$ and $(\\sqrt{80})^2 = 80$. Since $72 < 80$, the smaller number is $6\\sqrt{2}$. Check forward by writing both as single roots: $6\\sqrt{2} = \\sqrt{36 \\times 2} = \\sqrt{72}$, and $\\sqrt{72} < \\sqrt{80}$ ✓. Once both are under one radical sign, the bigger radicand simply wins.',
    },
  ],
  // w6 — a budget or target sentence turned into an inequality, then rounded
  //      the right way. One variation reverses it: a minimum, which rounds UP.
  [
    {
      q: 'Stickers cost $\\$4$ each. Ravi has $\\$30$ to spend. What is the greatest number of stickers he can buy?',
      answer: '$7$ stickers',
      solution:
        '"Has $\\$30$ to spend" means the cost must be at most $\\$30$, so if $n$ is the number of stickers, $4n \\le 30$. Divide by $4$: $n \\le 7.5$. Stickers come in whole numbers, and $7.5$ is not one, so the largest whole number allowed is $n = 7$. Check forward: $7$ stickers cost $4 \\times 7 = \\$28$, which fits inside $\\$30$ ✓, while $8$ stickers would cost $\\$32$ — over budget. Answering $7.5$ or rounding up to $8$ both ignore what the objects actually are.',
    },
    {
      q: 'A school club needs to raise at least $\\$95$. Each bracelet they sell brings in $\\$6$. What is the fewest bracelets they must sell?',
      answer: '$16$ bracelets',
      solution:
        'This one runs the other way: "at least $\\$95$" means the money raised must reach $95$ or more, so $6n \\ge 95$. Divide by $6$: $n \\ge 15\\frac{5}{6}$. Because the requirement is a MINIMUM, the whole number we need is the first one at or above $15\\frac{5}{6}$, which is $16$ — this one rounds UP, not down. Check forward: $16$ bracelets raise $6 \\times 16 = \\$96$, and $96 \\ge 95$ ✓, while $15$ bracelets raise only $\\$90$, which falls short.',
    },
    {
      q: 'A skating rink charges $\\$5$ to get in, plus $\\$2$ for each hour of skate rental. Milo brought $\\$20$. What is the greatest whole number of hours he can rent skates?',
      answer: '$7$ hours',
      solution:
        'There is a one-time charge here as well as a per-hour one, so with $h$ hours the total is $5 + 2h$, and it must be at most $20$: $5 + 2h \\le 20$. Subtract $5$: $2h \\le 15$. Divide by $2$: $h \\le 7.5$. Whole hours only, so the answer is $7$. Check forward: $7$ hours cost $5 + 2(7) = 5 + 14 = \\$19$, which fits inside $\\$20$ ✓, while $8$ hours would cost $5 + 16 = \\$21$ — too much. Dividing $\\$20$ by $\\$2$ straight away would forget the entry charge and give $10$.',
    },
  ],
  // w7 — three-part inequality with a NEGATIVE coefficient in the middle:
  //      both symbols flip at once. The last variation also asks for a count.
  [
    {
      q: 'Solve $-3 \\le 2 - x < 6$.',
      answer: '$-4 < x \\le 5$',
      solution:
        'Subtract $2$ from all three parts: $-5 \\le -x < 4$. Now multiply every part by $-1$, which triggers the FLIP trap in both places at once: $5 \\ge x > -4$. Turn it around so the small end is on the left: $-4 < x \\le 5$. Notice the $\\le$ travelled with the $5$ and the $<$ travelled with the $-4$ — each symbol keeps its own endpoint. Check forward at both ends: $x = 5$ gives $2 - 5 = -3$, and $-3 \\le -3 < 6$ is true ✓; $x = -4$ gives $2 + 4 = 6$, and $6 < 6$ is false, so $-4$ is correctly excluded ✓.',
    },
    {
      q: 'Solve $-1 < 5 - 3x \\le 11$.',
      answer: '$-2 \\le x < 2$',
      solution:
        'Subtract $5$ from all three parts: $-6 < -3x \\le 6$. Divide every part by $-3$ and FLIP both symbols: $2 > x \\ge -2$. Written with the small end first, that is $-2 \\le x < 2$. Check forward at both ends: $x = -2$ gives $5 - 3(-2) = 5 + 6 = 11$, and $-1 < 11 \\le 11$ is true ✓; $x = 2$ gives $5 - 6 = -1$, and $-1 < -1$ is false, so $2$ stays out ✓. Skipping the flip would produce $-2 \\ge x$, which a single test value like $x = 0$ immediately disproves: $5 - 0 = 5$ does sit between $-1$ and $11$.',
    },
    {
      q: 'Solve $-7 \\le 3 - 5x < 13$, and say how many integers satisfy it.',
      answer: '$-2 < x \\le 2$; $4$ integers',
      solution:
        'Subtract $3$ from all three parts: $-10 \\le -5x < 10$. Divide every part by $-5$ and FLIP both symbols: $2 \\ge x > -2$, that is $-2 < x \\le 2$. The right end is inclusive and the left end is not, so the integers are $-1, 0, 1, 2$ — four of them. Check forward at both ends: $x = 2$ gives $3 - 10 = -7$, and $-7 \\le -7 < 13$ is true ✓; $x = -2$ gives $3 + 10 = 13$, and $13 < 13$ is false, so $-2$ is correctly outside ✓. Counting $-2$ as well would give five and be wrong by one endpoint.',
    },
  ],
  // w8 — fixed sum, extreme product. The middle variation asks for the SMALLEST
  //      product, and the last one hides the fixed sum inside a perimeter.
  [
    {
      q: 'Two positive whole numbers add up to $31$. What is the largest their product can be?',
      answer: '$240$',
      solution:
        'With a fixed sum, the product is largest when the two numbers are as EQUAL as possible. Half of $31$ is $15.5$, which is not a whole number, so take the two whole numbers straddling it: $15$ and $16$. Their sum is $31$ ✓ and their product is $15 \\times 16 = 240$. Check forward against the neighbours: $14 \\times 17 = 238$ and $13 \\times 18 = 234$ — every step away from balance costs product ✓. The unreachable perfect balance would give $15.5 \\times 15.5 = 240.25$, so $240$ is as close as whole numbers get.',
    },
    {
      q: 'Two positive whole numbers add up to $18$. What is the SMALLEST their product can be?',
      answer: '$17$',
      solution:
        'This question runs the balance idea backwards: if balance makes the product big, then the most LOPSIDED split makes it small. The numbers must be positive whole numbers, so the smallest either one can be is $1$, which forces the other to be $17$. Their product is $1 \\times 17 = 17$. Check forward against the next few splits: $2 \\times 16 = 32$, $3 \\times 15 = 45$, and the balanced $9 \\times 9 = 81$ — every one of them is bigger ✓. The word "positive" is what stops the answer at $1$; $0 \\times 18 = 0$ is not allowed.',
    },
    {
      q: 'A rectangle has a perimeter of $34$ units, and both side lengths are whole numbers. What is the largest possible area?',
      answer: '$72$ square units',
      solution:
        'The fixed sum is hiding in the perimeter. Perimeter $= 2(\\ell + w) = 34$, so $\\ell + w = 17$ — the length and width add to a fixed $17$, and the area $\\ell w$ is their product. Balance them: half of $17$ is $8.5$, not a whole number, so use the straddling pair $8$ and $9$. The area is $8 \\times 9 = 72$ square units. Check forward: an $8$ by $9$ rectangle really does have perimeter $2(8 + 9) = 34$ ✓, and the neighbours do worse — $7 \\times 10 = 70$ and $6 \\times 11 = 66$ ✓.',
    },
  ],
  // w9 — a difference of squares in disguise: maximise or minimise x^2 - y^2 by
  //      pushing each variable to its own best endpoint. One variation asks for
  //      the minimum, where the answer is negative.
  [
    {
      q: 'If $3 \\le x \\le 7$ and $2 \\le y \\le 5$, what is the largest possible value of $(x + y)(x - y)$?',
      answer: '$45$',
      solution:
        'Multiply the brackets out first: $(x + y)(x - y) = x^2 - y^2$. Written that way the two variables stop interfering with each other — to make the whole thing big, make $x^2$ as big as possible and $y^2$ as small as possible. Since both ranges hold positive numbers, that means $x = 7$ and $y = 2$, giving $49 - 4 = 45$. Check forward in the original form: $(7 + 2)(7 - 2) = 9 \\times 5 = 45$ ✓. Pushing $y$ up to $5$ instead would give $(7+5)(7-5) = 24$, far worse — the two brackets pull in opposite directions, which is exactly why the factored form is misleading until you expand it.',
    },
    {
      q: 'If $2 \\le x \\le 5$ and $1 \\le y \\le 3$, what is the SMALLEST possible value of $(x + y)(x - y)$?',
      answer: '$-5$',
      solution:
        'Expand: $(x + y)(x - y) = x^2 - y^2$. To make this as small as possible, run both choices the other way — make $x^2$ as small as possible and $y^2$ as large as possible. The two ranges are independent, so we may take $x = 2$ and $y = 3$ at the same time: $4 - 9 = -5$. Check forward in the original form: $(2 + 3)(2 - 3) = 5 \\times (-1) = -5$ ✓. The answer being negative is the point of the problem — when $y$ is allowed to overtake $x$, the second bracket goes negative and drags the product below zero.',
    },
    {
      q: 'If $1 \\le a \\le 3$ and $2 \\le b \\le 7$, what is the largest possible value of $(b + a)(b - a)$?',
      answer: '$48$',
      solution:
        'Expand first: $(b + a)(b - a) = b^2 - a^2$. The letters are swapped compared with the usual layout, so read carefully — it is $b$ that gets added to itself and $a$ that gets subtracted. Make $b^2$ as big as possible and $a^2$ as small as possible: $b = 7$ and $a = 1$, giving $49 - 1 = 48$. Check forward in the original form: $(7 + 1)(7 - 1) = 8 \\times 6 = 48$ ✓. Taking $a = 3$ instead would give $(7+3)(7-3) = 40$, so the smallest allowed $a$ really is the right choice.',
    },
  ],
  // w10 — compare a sum of two square roots with a single square root: square
  //      once, isolate the leftover radical, then square again. The last
  //      variation asks which is SMALLER.
  [
    {
      q: 'Which is greater, $\\sqrt{2} + \\sqrt{6}$ or $\\sqrt{14}$?',
      answer: '$\\sqrt{2} + \\sqrt{6}$',
      solution:
        'Both quantities are positive, so squaring is safe. $(\\sqrt{2} + \\sqrt{6})^2 = 2 + 2\\sqrt{12} + 6 = 8 + 2\\sqrt{12}$, while $(\\sqrt{14})^2 = 14$. The contest is now $8 + 2\\sqrt{12}$ against $14$, which after subtracting $8$ is $2\\sqrt{12}$ against $6$. Both of THOSE are positive, so square again: $4 \\times 12 = 48$ against $36$. Since $48 > 36$, we get $2\\sqrt{12} > 6$, hence $8 + 2\\sqrt{12} > 14$ and $\\sqrt{2} + \\sqrt{6} > \\sqrt{14}$. Check forward with hand-made bounds: $1.41^2 = 1.9881 < 2$ so $\\sqrt{2} > 1.41$, and $2.44^2 = 5.9536 < 6$ so $\\sqrt{6} > 2.44$, making the sum bigger than $3.85$; meanwhile $3.85^2 = 14.8225 > 14$, so $\\sqrt{14} < 3.85$ ✓. The middle term $2\\sqrt{12}$ is exactly what a sum of roots gains over the root of a sum — without it the left side would only be $8$.',
    },
    {
      q: 'Which is greater, $\\sqrt{3} + \\sqrt{6}$ or $\\sqrt{19}$?',
      answer: '$\\sqrt{19}$',
      solution:
        'Square both positive sides: $(\\sqrt{3} + \\sqrt{6})^2 = 3 + 2\\sqrt{18} + 6 = 9 + 2\\sqrt{18}$, against $(\\sqrt{19})^2 = 19$. Subtract $9$ from both: compare $2\\sqrt{18}$ with $10$. Square again: $4 \\times 18 = 72$ against $100$. Since $72 < 100$, we get $2\\sqrt{18} < 10$, so $9 + 2\\sqrt{18} < 19$ and therefore $\\sqrt{3} + \\sqrt{6} < \\sqrt{19}$ — the single root is greater. Check forward with hand-made bounds: $1.74^2 = 3.0276 > 3$ so $\\sqrt{3} < 1.74$, and $2.45^2 = 6.0025 > 6$ so $\\sqrt{6} < 2.45$, making the sum smaller than $4.19$; meanwhile $4.35^2 = 18.9225 < 19$, so $\\sqrt{19} > 4.35$ ✓.',
    },
    {
      q: 'Which is smaller, $\\sqrt{5} + \\sqrt{7}$ or $\\sqrt{23}$?',
      answer: '$\\sqrt{23}$',
      solution:
        'Work out the order first, then answer the question that was asked. Squaring the positive sides: $(\\sqrt{5} + \\sqrt{7})^2 = 5 + 2\\sqrt{35} + 7 = 12 + 2\\sqrt{35}$, against $(\\sqrt{23})^2 = 23$. Subtract $12$: compare $2\\sqrt{35}$ with $11$. Square again: $4 \\times 35 = 140$ against $121$. Since $140 > 121$, we get $2\\sqrt{35} > 11$, so $12 + 2\\sqrt{35} > 23$ and $\\sqrt{5} + \\sqrt{7} > \\sqrt{23}$. The question wants the SMALLER one, which is therefore $\\sqrt{23}$. Check forward with hand-made bounds: $2.23^2 = 4.9729 < 5$ so $\\sqrt{5} > 2.23$, and $2.64^2 = 6.9696 < 7$ so $\\sqrt{7} > 2.64$, making the sum bigger than $4.87$; meanwhile $4.8^2 = 23.04 > 23$, so $\\sqrt{23} < 4.8$ ✓.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 9,
  worksheet,
}
