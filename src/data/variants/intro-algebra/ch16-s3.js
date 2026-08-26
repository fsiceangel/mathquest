// Introduction to Algebra chapter 16 — variations for sections 16.5 (Problem
// Solving with Functions) and 16.6 (Operations).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was derived from the question text and then confirmed a SECOND,
//    INDEPENDENT way: a chain climbed one step at a time is re-checked with the
//    jump formula, a recovered rule is fed back into the relation it came from,
//    and a solved unknown is substituted into the original equation.
//  - Every invented operation is applied literally, left slot and right slot in
//    the stated roles. Where the operation is not commutative the solution says
//    so and the swapped-order value is used as a distractor; where it IS
//    commutative the solution says that too, and shows the real trap is the
//    GROUPING, which is a separate property.
//  - Four traps run through 16.5, and every numeric distractor is one of them.
//    FENCE POSTS: counting inputs instead of gaps, so the climb is one step too
//    long or too short. NAKED GROWTH: reporting the total change and forgetting
//    the starting value. THE UNAIMED SUBSTITUTION: plugging the wanted input
//    into the right-hand side of a relation such as $f(2x) = x + 5$, which
//    answers about a different input entirely. THE HOP SIZE: treating a rule
//    that steps by $2$ or $3$ as though it stepped by $1$.
//  - Four traps run through 16.6. SWAPPED SLOTS: computing $b \ast a$ when
//    $a \ast b$ was asked. THE DROPPED PIECE: losing a constant, a coefficient,
//    or a trailing term of the definition. THE WRONG GROUPING: evaluating
//    right-to-left when the parentheses say left-to-right. THE UNFINISHED
//    SOLVE: stopping at $x^2$ or at $3n$ instead of at $x$ or $n$.
//  - No two choices inside an item name the same value, even written two ways.

const s165 = [
  // p1 — reading an output straight out of a table. v1 uses a growing table and
  //      asks in machine language, v2 a shrinking one, v3 a table where two
  //      inputs happen to share an output.
  [
    {
      q: 'A machine is described by this list of input-output pairs: $g(1) = 6$, $g(2) = 11$, $g(3) = 16$, $g(4) = 21$. What does the machine send out when $3$ goes in?',
      choices: ['$16$', '$11$', '$3$', '$21$'],
      answer: 0,
      solution:
        'A list of pairs defines a function just as well as a formula does — no rule needs to be written down. Find the input $3$ in the list and read off its partner: $g(3) = 16$. Check a second way with the pattern: the outputs climb by $5$ each time, so from $g(1) = 6$ two steps of $5$ give $6 + 10 = 16$ ✓. (The choice $11$ is $g(2)$ and $21$ is $g(4)$, each one line off ✗. The choice $3$ hands back the input instead of the output ✗.)',
    },
    {
      q: 'A table records $h(2) = 9$, $h(4) = 5$, $h(6) = 1$, $h(8) = -3$. What is $h(6)$?',
      choices: ['$6$', '$5$', '$-3$', '$1$'],
      answer: 3,
      solution:
        'Look up the input $6$: the table pairs it with $1$, so $h(6) = 1$. Check a second way with the pattern: the inputs go up by $2$ while the outputs drop by $4$, so from $h(2) = 9$ two rows down gives $9 - 8 = 1$ ✓. (The choice $5$ is $h(4)$ and $-3$ is $h(8)$, both one row away ✗. The choice $6$ echoes the input back ✗.)',
    },
    {
      q: 'A shop’s price function is listed as $p(1) = 12$, $p(2) = 12$, $p(3) = 7$, $p(4) = 20$. What is $p(2)$?',
      choices: ['$7$', '$12$', '$2$', '$20$'],
      answer: 1,
      solution:
        'Read the pair with input $2$: $p(2) = 12$. Two different inputs sharing one output is perfectly legal — a function may never give one input two outputs, but nothing stops $1$ and $2$ from both landing on $12$. Check a second way: the only rule a table has to obey is that each input appears once, and here $1$, $2$, $3$, $4$ each appear exactly once ✓. (The choice $7$ is $p(3)$ and $20$ is $p(4)$ ✗. The choice $2$ repeats the input ✗.)',
    },
  ],
  // p2 — reading a table backwards. v2 turns it into a "which inputs" question
  //      with two answers, v3 hunts for a negative output.
  [
    {
      q: 'A table gives $r(1) = 8$, $r(2) = 15$, $r(3) = 22$, $r(4) = 29$. Which input does the machine turn into $22$?',
      choices: ['$22$', '$3$', '$15$', '$29$'],
      answer: 1,
      solution:
        'This time the output is known and the input is the mystery, so scan the right-hand column for $22$ and read back left: it sits with the input $3$. Check a second way by running the machine forward from that input: the outputs climb by $7$, so $r(3) = 8 + 2 \\times 7 = 22$ ✓. (The choice $22$ repeats the output instead of naming the input ✗. The choices $15$ and $29$ are outputs from neighbouring rows ✗.)',
    },
    {
      q: 'A table lists $t(5) = 2$, $t(6) = 9$, $t(7) = 4$, $t(8) = 9$. Which inputs does this function send to $9$?',
      choices: ['$6$ and $8$', '$9$ only', '$5$ and $7$', '$6$ only'],
      answer: 0,
      solution:
        'Scan the outputs for $9$. It appears twice, on the rows $t(6) = 9$ and $t(8) = 9$, so BOTH $6$ and $8$ are answers. Check a second way that this table is still a function: each input $5$, $6$, $7$, $8$ is listed once and has one output, which is the only rule that matters ✓. (The choice "$6$ only" stops at the first hit and misses the second ✗. The choice "$9$ only" hands back the output ✗. The inputs $5$ and $7$ go to $2$ and $4$ instead ✗.)',
    },
    {
      q: 'For the table $m(0) = -2$, $m(1) = 1$, $m(2) = 4$, $m(3) = 7$, for which input $x$ is $m(x) = -2$?',
      choices: ['$-2$', '$1$', '$0$', '$3$'],
      answer: 2,
      solution:
        'Hunt for the output $-2$ in the table: it belongs to the input $0$, so $x = 0$. Check a second way with the pattern: the outputs rise by $3$ per step, so the formula is $m(x) = 3x - 2$, and $3(0) - 2 = -2$ ✓. (The choice $-2$ answers with the output that was handed to us ✗. The choice $1$ is the output at $x = 1$, a row read sideways ✗. The choice $3$ is the largest input, whose output is $7$ ✗.)',
    },
  ],
  // p3 — a short climb up a constant-step chain. v2 makes the step negative,
  //      v3 starts the chain away from x = 1.
  [
    {
      q: 'A function obeys $g(n + 1) = g(n) + 5$ for every $n$, and $g(2) = 3$. What is $g(5)$?',
      choices: ['$8$', '$15$', '$18$', '$23$'],
      answer: 2,
      solution:
        'Each step up in the input adds $5$ to the output. Climb: $g(3) = 3 + 5 = 8$, $g(4) = 8 + 5 = 13$, $g(5) = 13 + 5 = 18$. Check a second way by leaping: from input $2$ to input $5$ is $3$ gaps, so $g(5) = 3 + 3 \\times 5 = 18$ ✓. (FENCE POSTS gives $23$ from counting $4$ steps ✗, and $8$ stops after a single step ✗. NAKED GROWTH gives $15$, the total climb with the starting value $3$ left out ✗.)',
    },
    {
      q: 'The temperature function of a cooling room satisfies $h(x + 1) = h(x) - 4$, and $h(1) = 20$. What is $h(4)$?',
      choices: ['$4$', '$8$', '$16$', '$32$'],
      answer: 1,
      solution:
        'Every step forward now SUBTRACTS $4$. Climb: $h(2) = 16$, $h(3) = 12$, $h(4) = 8$. Check a second way by leaping: $3$ gaps of $-4$ from $20$ gives $20 - 12 = 8$ ✓. (FENCE POSTS gives $4$ from taking $4$ steps instead of $3$ ✗, and $16$ stops after one step ✗. The choice $32$ adds the change instead of subtracting it ✗.)',
    },
    {
      q: 'The values of a function satisfy $F(k + 1) = F(k) + 7$, and one value is known: $F(3) = 10$. What is $F(6)$?',
      choices: ['$17$', '$24$', '$38$', '$31$'],
      answer: 3,
      solution:
        'From input $3$ to input $6$ is $3$ gaps, each worth $+7$, so $F(6) = 10 + 21 = 31$. Check a second way by walking it: $F(4) = 17$, $F(5) = 24$, $F(6) = 31$ ✓. (The choice $17$ stops after one step and $24$ after two ✗. FENCE POSTS gives $38$ from counting $4$ steps between $3$ and $6$ — the gaps number $3$, not $4$ ✗.)',
    },
  ],
  // p4 — fitting a linear formula to a table. v1 has a negative intercept, v2
  //      starts at x = 1 so the intercept is not simply the first output, v3
  //      has a decreasing table.
  [
    {
      q: 'Which rule produces every line of this table: $g(0) = -1$, $g(1) = 4$, $g(2) = 9$, $g(3) = 14$?',
      choices: ['$g(x) = 5x - 1$', '$g(x) = -x + 5$', '$g(x) = 4x$', '$g(x) = 5x + 1$'],
      answer: 0,
      solution:
        'The outputs climb by $5$ for each step of $1$ in the input, so the rule looks like $g(x) = 5x + b$; at $x = 0$ the output is $-1$, which pins $b = -1$. Check a second way against a line the fitting did not use: $g(3) = 5(3) - 1 = 14$ ✓, and $g(2) = 9$ ✓. (The choice $5x + 1$ flips the sign of the constant and gives $1$ at $x = 0$ ✗. The choice $-x + 5$ swaps the two numbers and slides downward instead of up ✗. The choice $4x$ copies the output at $x = 1$ as a multiplier and gives $8$ at $x = 2$ ✗.)',
    },
    {
      q: 'A table of a linear function reads $h(1) = 5$, $h(2) = 8$, $h(3) = 11$, $h(4) = 14$. Which formula fits it?',
      choices: ['$h(x) = 3x + 5$', '$h(x) = 5x$', '$h(x) = x + 4$', '$h(x) = 3x + 2$'],
      answer: 3,
      solution:
        'The outputs rise by $3$ per step, so the rule is $h(x) = 3x + b$. The table never shows $x = 0$, so find $b$ from a line it does show: $3(1) + b = 5$ gives $b = 2$. Check a second way at the far end of the table: $h(4) = 3(4) + 2 = 14$ ✓, and $h(3) = 11$ ✓. (The choice $3x + 5$ treats the first OUTPUT as the constant and gives $8$ at $x = 1$ ✗. The choice $5x$ matches the first row only, then gives $10$ instead of $8$ ✗. The choice $x + 4$ also matches the first row and then fails at every other one ✗.)',
    },
    {
      q: 'A tank is draining, and its water function is tabulated as $p(0) = 20$, $p(1) = 17$, $p(2) = 14$, $p(3) = 11$. Which rule matches?',
      choices: ['$p(x) = 3x + 20$', '$p(x) = 20 - x$', '$p(x) = 20 - 3x$', '$p(x) = 17 - 3x$'],
      answer: 2,
      solution:
        'The outputs FALL by $3$ each step, so the coefficient of $x$ is $-3$; at $x = 0$ the output is $20$, so the rule is $p(x) = 20 - 3x$. Check a second way on two untouched rows: $20 - 3(2) = 14$ ✓ and $20 - 3(3) = 11$ ✓. (The choice $3x + 20$ keeps the size of the change but climbs instead of dropping ✗. The choice $20 - x$ drops too slowly and gives $19$ at $x = 1$ ✗. The choice $17 - 3x$ takes the SECOND output as the starting value and gives $17$ at $x = 0$ ✗.)',
    },
  ],
  // p5 — aiming a substitution at the input the question asks for. v2 has a
  //      decreasing right-hand side, v3 uses a shift instead of a stretch.
  [
    {
      q: 'A function satisfies $f(3x) = x + 7$ for every number $x$. What is $f(12)$?',
      choices: ['$11$', '$19$', '$4$', '$43$'],
      answer: 0,
      solution:
        'The relation only speaks about inputs of the form $3x$, so aim it: choose $x$ with $3x = 12$, that is $x = 4$. The relation then reads $f(12) = 4 + 7 = 11$. Check a second way by recovering the whole rule: with $u = 3x$ we get $x = \\frac{u}{3}$ and $f(u) = \\frac{u}{3} + 7$, so $f(12) = 4 + 7 = 11$ ✓. (THE UNAIMED SUBSTITUTION gives $19$: putting $x = 12$ into $x + 7$ computes $f(36)$, a different input ✗. The choice $4$ stops at the value of $x$ instead of the output ✗. The choice $43$ multiplies the wanted input by $3$ first ✗.)',
    },
    {
      q: 'A function satisfies $g(2x) = 5 - x$ for every number $x$. What is $g(8)$?',
      choices: ['$-3$', '$4$', '$1$', '$-11$'],
      answer: 2,
      solution:
        'Make the inside equal $8$: choose $x = 4$, and the relation says $g(8) = 5 - 4 = 1$. Check a second way with the recovered rule: $u = 2x$ gives $x = \\frac{u}{2}$ and $g(u) = 5 - \\frac{u}{2}$, so $g(8) = 5 - 4 = 1$ ✓. (THE UNAIMED SUBSTITUTION gives $-3$, which is $5 - 8$ and really computes $g(16)$ ✗. The choice $4$ reports the chosen $x$ rather than the output ✗. The choice $-11$ doubles the wanted input before substituting ✗.)',
    },
    {
      q: 'A function satisfies $h(x + 4) = 3x$ for every number $x$. What is $h(10)$?',
      choices: ['$30$', '$18$', '$6$', '$42$'],
      answer: 1,
      solution:
        'The inside is $x + 4$, so aim it at $10$: choose $x = 6$, and the relation gives $h(10) = 3(6) = 18$. Check a second way with the recovered rule: $u = x + 4$ gives $x = u - 4$ and $h(u) = 3(u - 4) = 3u - 12$, so $h(10) = 30 - 12 = 18$ ✓. (THE UNAIMED SUBSTITUTION gives $30$, which is $3 \\times 10$ and computes $h(14)$ ✗. The choice $6$ stops at the chosen $x$ ✗. The choice $42$ adds the shift to the input instead of removing it, giving $3(14)$ ✗.)',
    },
  ],
  // p6 — the same chain over a long stretch, where the gap count has to be
  //      thought about. v3 steps downward.
  [
    {
      q: 'A savings function satisfies $S(n + 1) = S(n) + 6$, and $S(1) = 5$. What is $S(12)$?',
      choices: ['$77$', '$71$', '$66$', '$72$'],
      answer: 1,
      solution:
        'From input $1$ to input $12$ there are $11$ gaps, each adding $6$: $S(12) = 5 + 11 \\times 6 = 5 + 66 = 71$. Check a second way at a midpoint and finish the climb: $S(6) = 5 + 5 \\times 6 = 35$, and six more steps give $35 + 36 = 71$ ✓. (FENCE POSTS gives $77$ from counting $12$ steps — the inputs number $12$, but the gaps between them number $11$ ✗. NAKED GROWTH gives $66$, the climb with the starting $5$ forgotten ✗. The choice $72$ is $6 \\times 12$, growth counted wrongly AND the start dropped ✗.)',
    },
    {
      q: 'A function satisfies $f(k + 1) = f(k) + 4$ for all $k$, and $f(2) = 9$. What is $f(20)$?',
      choices: ['$89$', '$85$', '$72$', '$81$'],
      answer: 3,
      solution:
        'The gaps from input $2$ to input $20$ number $20 - 2 = 18$, each worth $+4$: $f(20) = 9 + 72 = 81$. Check a second way in two hops: $f(10) = 9 + 8 \\times 4 = 41$, then ten more steps give $41 + 40 = 81$ ✓. (FENCE POSTS gives $85$ from $19$ steps and $89$ from a full $20$ ✗. NAKED GROWTH gives $72$, the total climb without the starting value ✗.)',
    },
    {
      q: 'A ticket counter runs down according to $T(m + 1) = T(m) - 3$, and $T(1) = 40$. What is $T(11)$?',
      choices: ['$7$', '$13$', '$10$', '$70$'],
      answer: 2,
      solution:
        'From input $1$ to input $11$ there are $10$ gaps, each removing $3$: $T(11) = 40 - 30 = 10$. Check a second way by halving the trip: $T(6) = 40 - 5 \\times 3 = 25$, then five more steps give $25 - 15 = 10$ ✓. (FENCE POSTS gives $7$ from $11$ steps and $13$ from $9$ ✗. The choice $70$ adds the total change instead of subtracting it ✗.)',
    },
  ],
  // p7 — the additive relation f(a+b) = f(a) + f(b). v2 builds from a value at
  //      2 instead of 1, v3 runs the relation backwards to recover f(1).
  [
    {
      q: 'A function obeys $g(a + b) = g(a) + g(b)$ for all numbers $a$ and $b$, and $g(1) = 5$. What is $g(4)$?',
      choices: ['$9$', '$5$', '$625$', '$20$'],
      answer: 3,
      solution:
        'Build the input $4$ out of ones. $g(2) = g(1) + g(1) = 10$, then $g(3) = g(2) + g(1) = 15$, then $g(4) = g(3) + g(1) = 20$. Check a second way by splitting differently: $g(4) = g(2) + g(2) = 10 + 10 = 20$ ✓ — the relation gives the same answer however the $4$ is broken up. (The choice $9$ adds the input to the output, $5 + 4$, which the relation never says ✗. The choice $5$ treats the output as fixed ✗. The choice $625$ is $5^4$, from multiplying outputs where the rule adds them ✗.)',
    },
    {
      q: 'A function obeys $f(a + b) = f(a) + f(b)$ for all numbers $a$ and $b$. Given $f(2) = 6$, what is $f(6)$?',
      choices: ['$18$', '$36$', '$12$', '$6$'],
      answer: 0,
      solution:
        'Write the input as $6 = 2 + 2 + 2$. Then $f(4) = f(2) + f(2) = 12$ and $f(6) = f(4) + f(2) = 12 + 6 = 18$. Check a second way through $f(3)$: since $f(2) = f(1) + f(1) = 6$, we get $f(1) = 3$ and $f(3) = 9$, so $f(6) = f(3) + f(3) = 18$ ✓. (The choice $36$ multiplies the input by the given output ✗. The choice $12$ stops at $f(4)$ ✗. The choice $6$ repeats the given output ✗.)',
    },
    {
      q: 'A function obeys $h(a + b) = h(a) + h(b)$ for all numbers $a$ and $b$, and $h(3) = 12$. What is $h(1)$?',
      choices: ['$36$', '$4$', '$12$', '$9$'],
      answer: 1,
      solution:
        'Split the input $3$ into three ones: $h(3) = h(1) + h(1) + h(1) = 3h(1)$. So $3h(1) = 12$ and $h(1) = 4$. Check a second way by rebuilding forward: with $h(1) = 4$ we get $h(2) = 8$ and $h(3) = 8 + 4 = 12$ ✓, matching the given value. (The choice $36$ multiplies by $3$ where the relation calls for dividing ✗. The choice $12$ hands back the value we were given ✗. The choice $9$ subtracts the input, $12 - 3$, which the relation does not license ✗.)',
    },
  ],
  // p8 — recovering the whole rule from a relation, then evaluating at a point
  //      the relation cannot reach directly. v3 uses a shift.
  [
    {
      q: 'A function satisfies $f(2x) = 8x + 3$ for every number $x$. What is $f(7)$?',
      choices: ['$59$', '$25$', '$31$', '$28$'],
      answer: 2,
      solution:
        'Recover the rule by naming the inside: let $u = 2x$, so $x = \\frac{u}{2}$ and $f(u) = 8 \\cdot \\frac{u}{2} + 3 = 4u + 3$. Then $f(7) = 28 + 3 = 31$. Check a second way straight from the relation: to reach input $7$ we need $2x = 7$, so $x = \\frac{7}{2}$, and $8 \\cdot \\frac{7}{2} + 3 = 28 + 3 = 31$ ✓. (THE UNAIMED SUBSTITUTION gives $59$: putting $7$ into $8x + 3$ computes $f(14)$ ✗. The choice $28$ drops the constant ✗. The choice $25$ subtracts the constant instead of adding it ✗.)',
    },
    {
      q: 'A function satisfies $g(3x) = 9x - 6$ for every number $x$. What is $g(4)$?',
      choices: ['$6$', '$30$', '$12$', '$18$'],
      answer: 0,
      solution:
        'Let $u = 3x$, so $x = \\frac{u}{3}$ and $g(u) = 9 \\cdot \\frac{u}{3} - 6 = 3u - 6$. Then $g(4) = 12 - 6 = 6$. Check a second way from the relation itself: input $4$ needs $3x = 4$, so $x = \\frac{4}{3}$, and $9 \\cdot \\frac{4}{3} - 6 = 12 - 6 = 6$ ✓. (THE UNAIMED SUBSTITUTION gives $30$, which is $9(4) - 6$ and computes $g(12)$ ✗. The choice $12$ forgets the $-6$ ✗. The choice $18$ adds $6$ where the rule subtracts it ✗.)',
    },
    {
      q: 'A function satisfies $f(x - 1) = 4x$ for every number $x$. What is $f(5)$?',
      choices: ['$20$', '$16$', '$6$', '$24$'],
      answer: 3,
      solution:
        'The inside is $x - 1$, so aim it at $5$: choose $x = 6$, giving $f(5) = 4(6) = 24$. Check a second way with the recovered rule: $u = x - 1$ gives $x = u + 1$ and $f(u) = 4(u + 1) = 4u + 4$, so $f(5) = 20 + 4 = 24$ ✓. (THE UNAIMED SUBSTITUTION gives $20$, which is $4 \\times 5$ and computes $f(4)$ ✗. The choice $16$ moves the shift the wrong way, using $x = 4$ ✗. The choice $6$ reports the chosen $x$ instead of the output ✗.)',
    },
  ],
  // p9 — a two-term recurrence. v2 runs one step further, v3 subtracts instead
  //      of adding so the values go negative.
  [
    {
      q: 'A function has $g(1) = 2$, $g(2) = 5$, and $g(n) = g(n-1) + g(n-2)$ for every $n \\ge 3$. What is $g(5)$?',
      choices: ['$19$', '$12$', '$31$', '$14$'],
      answer: 0,
      solution:
        'Each new value is the sum of the two before it. $g(3) = 5 + 2 = 7$, $g(4) = 7 + 5 = 12$, $g(5) = 12 + 7 = 19$. Check a second way by testing the recurrence backwards on the finished list $2, 5, 7, 12, 19$: $19 - 12 = 7$ ✓ and $12 - 7 = 5$ ✓, so each entry really is the sum of its two predecessors. (The choice $12$ stops at $g(4)$ ✗ and $31$ goes one term too far, to $g(6)$ ✗. The choice $14$ adds all three earlier values, $2 + 5 + 7$, instead of the last two ✗.)',
    },
    {
      q: 'A function has $h(1) = 3$, $h(2) = 4$, and $h(n) = h(n-1) + h(n-2)$ for every $n \\ge 3$. What is $h(6)$?',
      choices: ['$18$', '$47$', '$29$', '$25$'],
      answer: 2,
      solution:
        'Build the list one term at a time: $h(3) = 4 + 3 = 7$, $h(4) = 7 + 4 = 11$, $h(5) = 11 + 7 = 18$, $h(6) = 18 + 11 = 29$. Check a second way with subtraction on the finished list $3, 4, 7, 11, 18, 29$: $29 - 18 = 11$ ✓ and $18 - 11 = 7$ ✓. (The choice $18$ stops at $h(5)$ ✗ and $47$ carries on to $h(7)$ ✗. The choice $25$ skips a term, adding $h(5)$ to $h(3)$ instead of to $h(4)$ ✗.)',
    },
    {
      q: 'A function has $f(1) = 10$, $f(2) = 4$, and $f(n) = f(n-1) - f(n-2)$ for every $n \\ge 3$. What is $f(5)$?',
      choices: ['$-10$', '$-4$', '$32$', '$-6$'],
      answer: 1,
      solution:
        'The recurrence SUBTRACTS the older term from the newer one, in that order. $f(3) = 4 - 10 = -6$, $f(4) = -6 - 4 = -10$, $f(5) = -10 - (-6) = -10 + 6 = -4$. Check a second way by running the rule forward one more step from the finished list $10, 4, -6, -10, -4$: $f(6) = -4 - (-10) = 6$, and the pattern of the list holds ✓. (The choice $-6$ stops at $f(3)$ and $-10$ at $f(4)$ ✗. The choice $32$ comes from adding the two previous terms instead of subtracting, which builds $14, 18, 32$ ✗.)',
    },
  ],
  // p10 — a doubling (or halving) rule whose hop is bigger than 1. v3 shrinks
  //       the output instead of growing it.
  [
    {
      q: 'A function satisfies $g(x + 3) = 2g(x)$ for all $x$, and $g(1) = 5$. What is $g(10)$?',
      choices: ['$2560$', '$20$', '$80$', '$40$'],
      answer: 3,
      solution:
        'The output doubles only when the input jumps by $3$. From $1$ to $10$ is a distance of $9$, which is exactly $3$ hops: $g(4) = 10$, $g(7) = 20$, $g(10) = 40$. Check a second way with powers: $3$ doublings multiply the start by $2^3 = 8$, and $5 \\times 8 = 40$ ✓. (THE HOP SIZE gives $2560 = 5 \\times 2^9$, treating every unit of input as a doubling ✗. The choice $20$ stops one hop short at $g(7)$ ✗, and $80$ takes one hop too many ✗.)',
    },
    {
      q: 'A colony function satisfies $h(x + 2) = 3h(x)$ for all $x$, and $h(2) = 4$. What is $h(8)$?',
      choices: ['$108$', '$36$', '$324$', '$2916$'],
      answer: 0,
      solution:
        'The output triples for every $2$ the input gains. From $2$ to $8$ is a distance of $6$, which is $3$ hops of size $2$: $h(4) = 12$, $h(6) = 36$, $h(8) = 108$. Check a second way with powers: $4 \\times 3^3 = 4 \\times 27 = 108$ ✓. (THE HOP SIZE gives $2916 = 4 \\times 3^6$, tripling once per unit ✗. The choice $36$ stops a hop early at $h(6)$ ✗, and $324$ takes a fourth hop ✗.)',
    },
    {
      q: 'A function satisfies $f(x + 2) = \\frac{f(x)}{2}$ for all $x$, and $f(1) = 96$. What is $f(9)$?',
      choices: ['$12$', '$24$', '$6$', '$1536$'],
      answer: 2,
      solution:
        'Every jump of $2$ in the input HALVES the output. From $1$ to $9$ is a distance of $8$, so there are $4$ hops: $f(3) = 48$, $f(5) = 24$, $f(7) = 12$, $f(9) = 6$. Check a second way with powers: $96 \\div 2^4 = 96 \\div 16 = 6$ ✓. (The choice $24$ stops at $f(5)$ and $12$ at $f(7)$ ✗. The choice $1536$ multiplies by $2$ four times instead of dividing ✗.)',
    },
  ],
]

const s166 = [
  // p1 — evaluating a brand-new operation once, left to right. Each variation
  //      defines its own symbol so it can be read on its own.
  [
    {
      q: 'The operation $\\heartsuit$ is defined by $a \\heartsuit b = 3a + b^2$ for all numbers $a$ and $b$. What is $4 \\heartsuit 5$?',
      choices: ['$29$', '$37$', '$22$', '$31$'],
      answer: 1,
      solution:
        'Apply the definition literally: the LEFT number is tripled and the RIGHT number is squared. With $a = 4$ and $b = 5$: $3(4) + 5^2 = 12 + 25 = 37$. Check a second way by building the two pieces separately and adding at the end: three copies of $4$ make $12$, a square of side $5$ is $25$, total $37$ ✓. The operation is not commutative, since the two slots do different jobs. (SWAPPED SLOTS gives $31$, which is $5 \\heartsuit 4 = 15 + 16$ ✗. THE DROPPED PIECE gives $29 = 4 + 25$, with the tripling forgotten ✗. The choice $22 = 12 + 10$ doubles the right number instead of squaring it ✗.)',
    },
    {
      q: 'An operation is defined by $m \\square n = m^2 - 3n$. What is $6 \\square 4$?',
      choices: ['$-2$', '$32$', '$132$', '$24$'],
      answer: 3,
      solution:
        'The left number is squared and three times the right number is taken away: $6^2 - 3(4) = 36 - 12 = 24$. Check a second way by rewriting the subtraction as an addition of a negative: $36 + (-12) = 24$ ✓. The two slots have different jobs, so $\\square$ is not commutative. (SWAPPED SLOTS gives $-2$, which is $4 \\square 6 = 16 - 18$ ✗. THE DROPPED PIECE gives $32 = 36 - 4$, losing the factor of $3$ ✗. The choice $132$ reads the rule as $(m^2 - 3)n = 33 \\times 4$, attaching the $n$ to the wrong thing ✗.)',
    },
    {
      q: 'The operation $\\clubsuit$ is defined by $x \\clubsuit y = 5x - y^2$. What is $2 \\clubsuit 6$?',
      choices: ['$26$', '$4$', '$-26$', '$16$'],
      answer: 2,
      solution:
        'Five times the left number, minus the square of the right number: $5(2) - 6^2 = 10 - 36 = -26$. Check a second way by comparing sizes before subtracting: $36$ is larger than $10$, so the answer must be negative, and the gap is $26$ ✓. This operation is not commutative. (SWAPPED SLOTS gives $26$, which is $6 \\clubsuit 2 = 30 - 4$ ✗. THE DROPPED PIECE gives $4 = 10 - 6$, with the squaring skipped ✗. The choice $16$ squares the whole result, $(10 - 6)^2$, instead of squaring only $y$ ✗.)',
    },
  ],
  // p2 — the same operations with the slots swapped, so the point is that the
  //      order changes the answer.
  [
    {
      q: 'Using the rule $a \\heartsuit b = 3a + b^2$, evaluate the reversed pair $5 \\heartsuit 4$.',
      choices: ['$31$', '$37$', '$41$', '$19$'],
      answer: 0,
      solution:
        'Now $5$ sits in the tripling slot and $4$ in the squaring slot: $3(5) + 4^2 = 15 + 16 = 31$. Check a second way by adding the pieces in the other order: $16 + 15 = 31$ ✓. Since $4 \\heartsuit 5 = 37$ and $5 \\heartsuit 4 = 31$, this single pair proves $\\heartsuit$ is not commutative. (The choice $37$ is the unswapped $4 \\heartsuit 5$ ✗. The choice $41 = 25 + 16$ squares BOTH numbers, tripling neither ✗. THE DROPPED PIECE gives $19 = 15 + 4$, with the square forgotten ✗.)',
    },
    {
      q: 'With the same rule $m \\square n = m^2 - 3n$, what does the reversed pair $4 \\square 6$ come to?',
      choices: ['$24$', '$2$', '$-14$', '$-2$'],
      answer: 3,
      solution:
        'This time $4$ is squared and three times $6$ is removed: $4^2 - 3(6) = 16 - 18 = -2$. Check a second way: $18$ exceeds $16$ by $2$, so the result is $-2$ ✓. Compared with $6 \\square 4 = 24$, the swap changed the answer completely — $\\square$ is not commutative. (The choice $24$ is the unswapped $6 \\square 4$ ✗. The choice $2$ subtracts in the wrong direction, $18 - 16$ ✗. THE DROPPED PIECE gives $-14 = 4 - 18$, with the squaring skipped ✗.)',
    },
    {
      q: 'The rule is still $x \\clubsuit y = 5x - y^2$. What is $6 \\clubsuit 2$?',
      choices: ['$-26$', '$26$', '$28$', '$34$'],
      answer: 1,
      solution:
        'With $6$ on the left and $2$ on the right: $5(6) - 2^2 = 30 - 4 = 26$. Check a second way by peeling the subtraction apart: $30 - 4$ leaves $26$, and adding the $4$ back returns $30$ ✓. Against $2 \\clubsuit 6 = -26$, the swap flips the answer entirely, so $\\clubsuit$ is not commutative. (The choice $-26$ is the unswapped $2 \\clubsuit 6$ ✗. THE DROPPED PIECE gives $28 = 30 - 2$, without squaring ✗. The choice $34$ adds where the rule subtracts ✗.)',
    },
  ],
  // p3 — an operation whose second term repeats one of the inputs, so the trap
  //      is subtracting or adding the wrong slot.
  [
    {
      q: 'Define $p \\triangle q = pq + q$ for all numbers $p$ and $q$. What is $7 \\triangle 3$?',
      choices: ['$28$', '$24$', '$21$', '$10$'],
      answer: 1,
      solution:
        'Multiply the two numbers, then add the RIGHT one: $7 \\times 3 + 3 = 21 + 3 = 24$. Check a second way by factoring the definition: $pq + q = q(p + 1) = 3(8) = 24$ ✓. (SWAPPED SLOTS gives $28$, which is $3 \\triangle 7 = 21 + 7$, and the difference proves $\\triangle$ is not commutative ✗. THE DROPPED PIECE gives $21$, the product with the extra term forgotten ✗. The choice $10$ adds the numbers where the rule multiplies ✗.)',
    },
    {
      q: 'An operation is defined by $u \\triangle v = uv - v$. What is $9 \\triangle 5$?',
      choices: ['$36$', '$45$', '$40$', '$4$'],
      answer: 2,
      solution:
        'Multiply, then subtract the RIGHT number: $9 \\times 5 - 5 = 45 - 5 = 40$. Check a second way by factoring: $uv - v = v(u - 1) = 5(8) = 40$ ✓. (SWAPPED SLOTS gives $36$, which is $5 \\triangle 9 = 45 - 9$, so $\\triangle$ is not commutative ✗. THE DROPPED PIECE gives $45$, the bare product ✗. The choice $4$ subtracts the numbers instead of multiplying them ✗.)',
    },
    {
      q: 'Define $s \\triangle t = 2st - t$. What is $4 \\triangle 6$?',
      choices: ['$42$', '$44$', '$48$', '$18$'],
      answer: 0,
      solution:
        'Double the product, then subtract the right number: $2 \\times 4 \\times 6 - 6 = 48 - 6 = 42$. Check a second way by factoring: $2st - t = t(2s - 1) = 6(7) = 42$ ✓. (SWAPPED SLOTS gives $44$, which is $6 \\triangle 4 = 48 - 4$, so this operation is not commutative either ✗. THE DROPPED PIECE gives $48$ when the subtraction is skipped and $18 = 24 - 6$ when the factor of $2$ is ✗.)',
    },
  ],
  // p4 — nested operations, evaluated inside-out. Every variation carries a
  //      wrong-grouping distractor, since these operations are not associative.
  [
    {
      q: 'With $a \\heartsuit b = 3a + b^2$, work out $(2 \\heartsuit 1) \\heartsuit 2$.',
      choices: ['$25$', '$55$', '$23$', '$11$'],
      answer: 0,
      solution:
        'Parentheses first: $2 \\heartsuit 1 = 3(2) + 1^2 = 7$. That result now takes the LEFT slot: $7 \\heartsuit 2 = 3(7) + 2^2 = 21 + 4 = 25$. Check a second way by recomputing the outer step from its pieces: three sevens make $21$, and a square of side $2$ is $4$, total $25$ ✓. (THE WRONG GROUPING gives $55$: reading it as $2 \\heartsuit (1 \\heartsuit 2)$ yields $2 \\heartsuit 7 = 6 + 49$, which shows the operation is not associative ✗. THE DROPPED PIECE gives $23 = 21 + 2$ without the square, and $11 = 7 + 4$ without the tripling ✗.)',
    },
    {
      q: 'With $m \\square n = m^2 - 3n$, what is $(4 \\square 2) \\square 3$?',
      choices: ['$-21$', '$31$', '$91$', '$100$'],
      answer: 2,
      solution:
        'Inside the parentheses: $4 \\square 2 = 16 - 6 = 10$. Feed that into the left slot: $10 \\square 3 = 10^2 - 3(3) = 100 - 9 = 91$. Check a second way by subtracting in two stages: $100 - 3 - 3 - 3 = 91$ ✓. (SWAPPED SLOTS at the outer step gives $-21 = 3 \\square 10 = 9 - 30$ ✗. THE WRONG GROUPING gives $31$: $4 \\square (2 \\square 3) = 4 \\square (-5) = 16 + 15$, so the operation is not associative ✗. THE DROPPED PIECE gives $100$, with the whole $-3n$ term lost ✗.)',
    },
    {
      q: 'The operation $\\clubsuit$ obeys $x \\clubsuit y = 5x - y^2$. Evaluate $(3 \\clubsuit 1) \\clubsuit 2$.',
      choices: ['$-186$', '$70$', '$68$', '$66$'],
      answer: 3,
      solution:
        'Innermost first: $3 \\clubsuit 1 = 15 - 1 = 14$. Then $14 \\clubsuit 2 = 5(14) - 2^2 = 70 - 4 = 66$. Check a second way by splitting the multiplication: $5 \\times 14 = 50 + 20 = 70$, and removing $4$ leaves $66$ ✓. (SWAPPED SLOTS at the outer step gives $-186 = 2 \\clubsuit 14 = 10 - 196$, so the order of the slots matters ✗. THE DROPPED PIECE gives $70$ with the square dropped entirely and $68 = 70 - 2$ with $y$ subtracted instead of $y^2$ ✗.)',
    },
  ],
  // p5 — the averaging operation, which IS commutative but is NOT associative.
  //      v3 asks the student to compare the two groupings directly.
  [
    {
      q: 'Define $a \\ast b = \\frac{a + b}{2}$, the average of the two numbers. What is $(10 \\ast 2) \\ast 8$?',
      choices: ['$6$', '$20$', '$\\frac{20}{3}$', '$7$'],
      answer: 3,
      solution:
        'Average the pair in parentheses first: $10 \\ast 2 = \\frac{12}{2} = 6$. Then average that with $8$: $6 \\ast 8 = \\frac{14}{2} = 7$. Check a second way: $7$ sits exactly halfway between $6$ and $8$, which is what the second averaging asks for ✓. This operation IS commutative, since $a + b = b + a$, so no swapped-order trap exists here — the danger is the grouping. (The choice $6$ stops at the inner average ✗. The choice $\\frac{20}{3}$ averages all three numbers at once, which is a different computation ✗. The choice $20$ adds the three numbers and never halves ✗.)',
    },
    {
      q: 'With $a \\ast b = \\frac{a + b}{2}$, what is $12 \\ast (4 \\ast 8)$?',
      choices: ['$9$', '$8$', '$6$', '$10$'],
      answer: 0,
      solution:
        'The parentheses are on the RIGHT this time: $4 \\ast 8 = \\frac{12}{2} = 6$. Then $12 \\ast 6 = \\frac{18}{2} = 9$. Check a second way: $9$ is the midpoint of $6$ and $12$, and the distance to each is $3$ ✓. (The choice $8$ averages all three numbers, $\\frac{24}{3}$, which is not what the parentheses say ✗. The choice $6$ stops at the inner step ✗. The choice $10$ ignores the $4$ and averages $12$ with $8$ ✗.)',
    },
    {
      q: 'Let $a \\ast b = \\frac{a + b}{2}$. Compute both $(4 \\ast 12) \\ast 20$ and $4 \\ast (12 \\ast 20)$, then say what the two results show.',
      choices: [
        'Both equal $14$, so the grouping makes no difference',
        'Both equal $12$, the average of all three numbers',
        'The first is $14$ and the second is $10$, so $\\ast$ is not associative',
        'The first is $10$ and the second is $14$, so $\\ast$ is not associative',
      ],
      answer: 2,
      solution:
        'Left grouping: $4 \\ast 12 = \\frac{16}{2} = 8$, then $8 \\ast 20 = \\frac{28}{2} = 14$. Right grouping: $12 \\ast 20 = \\frac{32}{2} = 16$, then $4 \\ast 16 = \\frac{20}{2} = 10$. The two differ, so $\\ast$ is not associative. Check a second way by noticing WHY: the left grouping averages the $20$ in only once but drags the $4$ through two halvings, so the late number always carries more weight ✓. (The fourth choice has the two groupings the wrong way round — the $20$ is the late number in the first expression, which pulls it UP to $14$ ✗. The first choice ignores the difference ✗. The second reports $\\frac{36}{3} = 12$, the average of all three, which neither grouping produces ✗.)',
    },
  ],
  // p6 — testing commutativity. v1 picks the commutative rule out of four, v2
  //      and v3 judge a single rule and must name a correct counterexample.
  [
    {
      q: 'Exactly one of these invented operations gives the same answer no matter which order the two numbers are written in. Which one?',
      choices: ['$a \\ast b = a^2 + b^2$', '$a \\ast b = a^2 - b^2$', '$a \\ast b = 2a + 3b$', '$a \\ast b = \\frac{a}{b}$'],
      answer: 0,
      solution:
        'For $a \\ast b = a^2 + b^2$, swapping gives $b^2 + a^2$, and addition does not care about order, so the two agree for EVERY pair. Check on two concrete pairs: $2 \\ast 3 = 4 + 9 = 13$ and $3 \\ast 2 = 9 + 4 = 13$ ✓; $1 \\ast 5 = 26$ and $5 \\ast 1 = 26$ ✓. Each of the others dies to a single counterexample: $2 \\ast 3 = 4 - 9 = -5$ while $3 \\ast 2 = 5$ ✗; $2 \\ast 3 = 4 + 9 = 13$ while $3 \\ast 2 = 6 + 6 = 12$ ✗; and $\\frac{2}{3}$ is not $\\frac{3}{2}$ ✗.',
    },
    {
      q: 'Is the operation $m \\square n = m^2 - 3n$ commutative? Pick the statement that is both correct and correctly worked out.',
      choices: [
        'Yes, because $m^2 - 3n$ and $n^2 - 3m$ always agree',
        'Yes, as long as $m$ and $n$ are both whole numbers',
        'No — for example $1 \\square 2 = -5$ while $2 \\square 1 = -1$',
        'No — for example $1 \\square 2 = -5$ while $2 \\square 1 = 1$',
      ],
      answer: 3,
      solution:
        'Test the smallest interesting pair: $1 \\square 2 = 1^2 - 3(2) = 1 - 6 = -5$, and $2 \\square 1 = 2^2 - 3(1) = 4 - 3 = 1$. The results differ, so the operation is not commutative, and $-5$ against $1$ is a correct pair of values. Check a second way with another pair: $3 \\square 5 = 9 - 15 = -6$ while $5 \\square 3 = 25 - 9 = 16$ ✓ — the failure is not a fluke of small numbers. (The third choice reaches the right verdict with a miscomputed value: $2 \\square 1$ is $4 - 3 = 1$, not $-1$ ✗. The first choice asserts an identity that the pair above already breaks ✗. The second choice invents a restriction that changes nothing ✗.)',
    },
    {
      q: 'An operation is defined by $a \\bullet b = a + 2b$. Which statement about it is correct?',
      choices: [
        'It is commutative, because $a + 2b$ and $b + 2a$ are both sums',
        'It is not commutative: $3 \\bullet 5 = 13$ but $5 \\bullet 3 = 11$',
        'Whether it is commutative cannot be decided without more information',
        'It is not commutative: $3 \\bullet 5 = 11$ but $5 \\bullet 3 = 13$',
      ],
      answer: 1,
      solution:
        'Only the right-hand number is doubled, so the slots are not interchangeable. $3 \\bullet 5 = 3 + 2(5) = 13$, while $5 \\bullet 3 = 5 + 2(3) = 11$. Different results, so $\\bullet$ is not commutative. Check a second way on another pair: $1 \\bullet 4 = 9$ but $4 \\bullet 1 = 6$ ✓. (The fourth choice has the right verdict but the two values traded — the doubled number is the one on the RIGHT, so the bigger answer belongs to $3 \\bullet 5$ ✗. The first choice mistakes "built from addition" for "order-proof" ✗. The third gives up when one pair of numbers settles it ✗.)',
    },
  ],
  // p7 — solving for the number in the RIGHT slot, where a square has to be
  //      undone.
  [
    {
      q: 'With $a \\heartsuit b = 3a + b^2$, find the positive number $x$ for which $2 \\heartsuit x = 31$.',
      choices: ['$25$', '$29$', '$5$', '$9$'],
      answer: 2,
      solution:
        'Write the definition out with the known left number: $3(2) + x^2 = 31$, so $6 + x^2 = 31$ and $x^2 = 25$. The positive number with square $25$ is $x = 5$. Check a second way by substituting back into the ORIGINAL operation: $2 \\heartsuit 5 = 6 + 25 = 31$ ✓. (THE UNFINISHED SOLVE gives $25$, stopping at $x^2$ ✗. SWAPPED SLOTS gives $9$: solving $3x + 4 = 31$ puts the unknown in the tripling slot instead ✗. The choice $29 = 31 - 2$ forgets that the left number is tripled and the right one squared ✗.)',
    },
    {
      q: 'With $m \\square n = m^2 - 3n$, find the number $n$ that makes $7 \\square n = 25$.',
      choices: ['$24$', '$8$', '$-8$', '$12$'],
      answer: 1,
      solution:
        'The definition gives $7^2 - 3n = 25$, so $49 - 3n = 25$ and $3n = 24$, hence $n = 8$. Check a second way by substituting back: $7 \\square 8 = 49 - 24 = 25$ ✓. (THE UNFINISHED SOLVE gives $24$, stopping at $3n$ ✗. The choice $-8$ moves the terms across with a sign error, solving $3n = -24$ ✗. The choice $12$ divides $24$ by $2$ instead of by $3$ ✗.)',
    },
    {
      q: 'With $x \\clubsuit y = 5x - y^2$, find the positive number $y$ for which $8 \\clubsuit y = 4$.',
      choices: ['$36$', '$-6$', '$\\frac{36}{5}$', '$6$'],
      answer: 3,
      solution:
        'Write it out: $5(8) - y^2 = 4$, so $40 - y^2 = 4$ and $y^2 = 36$, giving the positive solution $y = 6$. Check a second way by substituting back: $8 \\clubsuit 6 = 40 - 36 = 4$ ✓. (THE UNFINISHED SOLVE gives $36$, stopping at $y^2$ ✗. The choice $-6$ also squares to $36$ but is not positive, and the question asked for the positive one ✗. The choice $\\frac{36}{5}$ divides by the $5$ a second time, though the $5$ was already used on the left number ✗.)',
    },
  ],
  // p8 — nested evaluation of operations that ARE commutative, so the real
  //      lesson is that commutative does not imply associative.
  [
    {
      q: 'Define $a \\circ b = ab + 2a + 2b$. What is $(1 \\circ 3) \\circ 2$?',
      choices: ['$48$', '$50$', '$35$', '$22$'],
      answer: 0,
      solution:
        'Parentheses first: $1 \\circ 3 = 3 + 2 + 6 = 11$. Then $11 \\circ 2 = 22 + 22 + 4 = 48$. Check a second way by regrouping the outer sum: $22 + 4 = 26$ and $26 + 22 = 48$ ✓. This operation IS commutative — $ab + 2a + 2b$ reads the same with $a$ and $b$ traded, as $1 \\circ 3 = 11$ and $3 \\circ 1 = 3 + 6 + 2 = 11$ confirm — so the trap is not the order but the grouping. (THE WRONG GROUPING gives $50$: $1 \\circ (3 \\circ 2) = 1 \\circ 16 = 16 + 2 + 32$, so the operation is not associative ✗. THE DROPPED PIECE gives $35 = 22 + 11 + 2$, with the doubling lost ✗, and $22$ keeps only the product ✗.)',
    },
    {
      q: 'Define $a \\circ b = ab - a - b$. What is $(4 \\circ 3) \\circ 2$?',
      choices: ['$10$', '$3$', '$5$', '$-1$'],
      answer: 1,
      solution:
        'Inside first: $4 \\circ 3 = 12 - 4 - 3 = 5$. Then $5 \\circ 2 = 10 - 5 - 2 = 3$. Check a second way by taking the subtractions one at a time: $10 - 5 = 5$, then $5 - 2 = 3$ ✓. The operation is commutative, since trading $a$ and $b$ leaves $ab - a - b$ unchanged — $4 \\circ 3 = 5$ and $3 \\circ 4 = 12 - 3 - 4 = 5$ ✓ — but that does not protect the grouping. (THE WRONG GROUPING gives $-1$: $4 \\circ (3 \\circ 2) = 4 \\circ 1 = 4 - 4 - 1$, so the operation is not associative ✗. The choice $10$ keeps only the product at the last step ✗, and $5$ stops at the inner value ✗.)',
    },
    {
      q: 'An operation is defined by $a \\circ b = 2ab + 1$. What is $(2 \\circ 1) \\circ 3$?',
      choices: ['$29$', '$25$', '$31$', '$30$'],
      answer: 2,
      solution:
        'Inside first: $2 \\circ 1 = 2(2)(1) + 1 = 5$. Then $5 \\circ 3 = 2(5)(3) + 1 = 30 + 1 = 31$. Check a second way by doubling last: $5 \\times 3 = 15$, doubled is $30$, plus $1$ is $31$ ✓. The operation is commutative, because $2ab + 1 = 2ba + 1$; for instance $2 \\circ 1 = 5$ and $1 \\circ 2 = 5$ ✓, and $3 \\circ 4 = 25 = 4 \\circ 3$ ✓. (THE WRONG GROUPING gives $29$: $2 \\circ (1 \\circ 3) = 2 \\circ 7 = 28 + 1$, so a commutative operation can still fail to be associative ✗. THE DROPPED PIECE gives $25$ when the inner $+1$ is lost and $30$ when the outer one is ✗.)',
    },
  ],
  // p9 — solving for the number in the LEFT slot, where the square belongs to
  //      the known number.
  [
    {
      q: 'With $a \\heartsuit b = 3a + b^2$, solve $a \\heartsuit 4 = 34$ for $a$.',
      choices: ['$18$', '$50$', '$10$', '$6$'],
      answer: 3,
      solution:
        'The right slot is filled, so the square is a known number: $3a + 4^2 = 34$ becomes $3a + 16 = 34$, then $3a = 18$ and $a = 6$. Check a second way by substituting back into the operation: $6 \\heartsuit 4 = 18 + 16 = 34$ ✓. (THE UNFINISHED SOLVE gives $18$, stopping before the division ✗. The choice $50$ adds the $16$ where it should be subtracted ✗. The choice $10$ comes from $\\frac{34 - 4}{3}$, with the $4$ never squared ✗.)',
    },
    {
      q: 'With $x \\clubsuit y = 5x - y^2$, solve $x \\clubsuit 3 = 11$ for $x$.',
      choices: ['$4$', '$20$', '$\\frac{2}{5}$', '$\\frac{14}{5}$'],
      answer: 0,
      solution:
        'Fill in the known right slot: $5x - 3^2 = 11$, so $5x - 9 = 11$, then $5x = 20$ and $x = 4$. Check a second way by substituting back: $4 \\clubsuit 3 = 20 - 9 = 11$ ✓. (THE UNFINISHED SOLVE gives $20$ ✗. The choice $\\frac{2}{5}$ subtracts the $9$ instead of adding it back, solving $5x = 2$ ✗. The choice $\\frac{14}{5}$ adds $3$ rather than $3^2$ ✗.)',
    },
    {
      q: 'With $u \\triangle v = uv - v$, solve $u \\triangle 6 = 30$ for $u$.',
      choices: ['$36$', '$6$', '$5$', '$4$'],
      answer: 1,
      solution:
        'Substitute the known right number: $6u - 6 = 30$, so $6u = 36$ and $u = 6$. Check a second way by substituting back: $6 \\triangle 6 = 36 - 6 = 30$ ✓. (THE UNFINISHED SOLVE gives $36$ ✗. THE DROPPED PIECE gives $5$, from solving $6u = 30$ with the trailing $-v$ forgotten ✗. The choice $4$ subtracts the $6$ a second time instead of adding it back, giving $\\frac{30 - 6}{6}$ ✗.)',
    },
  ],
  // p10 — both slots of the outer operation are themselves operation results,
  //       and the two inner values differ because the operation is not
  //       commutative.
  [
    {
      q: 'Define $a \\star b = a^2 - b$. What is $(4 \\star 1) \\star (1 \\star 4)$?',
      choices: ['$222$', '$228$', '$-3$', '$12$'],
      answer: 1,
      solution:
        'Build the two inner values first. $4 \\star 1 = 16 - 1 = 15$ and $1 \\star 4 = 1 - 4 = -3$ — different, so $\\star$ is not commutative and the two slots of the outer step are genuinely different numbers. Now $15 \\star (-3) = 15^2 - (-3) = 225 + 3 = 228$. Check a second way on the sign: subtracting a negative adds, so the answer must exceed $225$ ✓. (The choice $222$ subtracts the negative as though it were positive ✗. The choice $-3$ reports the second inner value alone ✗. The choice $12 = 15 + (-3)$ adds the two pieces instead of feeding them into $\\star$ ✗.)',
    },
    {
      q: 'Define $a \\star b = 2a - b^2$. What is $(3 \\star 2) \\star (2 \\star 3)$?',
      choices: ['$29$', '$-14$', '$-21$', '$-3$'],
      answer: 2,
      solution:
        'Inner values first: $3 \\star 2 = 6 - 4 = 2$ and $2 \\star 3 = 4 - 9 = -5$. They differ, so $\\star$ is not commutative. The outer step keeps them in the order written: $2 \\star (-5) = 2(2) - (-5)^2 = 4 - 25 = -21$. Check a second way on the square: $(-5)^2$ is $+25$, so a positive $25$ is removed from $4$ ✓. (The choice $29$ treats $-(-5)^2$ as $+25$ ✗. SWAPPED SLOTS gives $-14$, which is $(-5) \\star 2 = -10 - 4$ ✗. The choice $-3$ adds the two inner values ✗.)',
    },
    {
      q: 'Define $a \\star b = a - b^2$. What is $(3 \\star 1) \\star (1 \\star 3)$?',
      choices: ['$66$', '$-12$', '$-6$', '$-62$'],
      answer: 3,
      solution:
        'Inner values first: $3 \\star 1 = 3 - 1 = 2$ and $1 \\star 3 = 1 - 9 = -8$, so the operation is not commutative. The outer step reads $2 \\star (-8) = 2 - (-8)^2 = 2 - 64 = -62$. Check a second way on the sign: the square of $-8$ is a positive $64$, which is far bigger than $2$, so the answer is a large negative number ✓. (The choice $66$ treats $-(-8)^2$ as $+64$ ✗. SWAPPED SLOTS gives $-12$, which is $(-8) \\star 2 = -8 - 4$ ✗. The choice $-6$ adds the two inner values ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 16,
  sections: {
    '16.5': s165,
    '16.6': s166,
  },
}
