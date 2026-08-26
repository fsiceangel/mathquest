// Introduction to Algebra chapter 17 — variations for the end-of-chapter
// challenge set. All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was mapped POINT BY POINT and then confirmed a SECOND,
//    independent way: a transformed point is substituted back into the new
//    equation, a backwards item is run forwards again, an inverse is checked as
//    $f(f^{-1}(x)) = x$ AND as $f^{-1}(f(x)) = x$, a vertex is tested against a
//    neighbouring input, and every crossing count is read off the figure’s own
//    listed points.
//  - These are the chapter's hard problems, so a variation stays a tier above
//    ordinary section work: each item either combines two or more
//    transformations, runs the reasoning BACKWARDS from the new graph to the
//    old one, or asks what is INVARIANT rather than what moves.
//  - Each distractor is one named mistake, and the name is stated at the end of
//    the solution. The traps that run through the whole file: SLIDING THE WRONG
//    WAY FOR AN INSIDE CHANGE, LETTING AN INSIDE MINUS TOUCH THE HEIGHT,
//    ADDING BEFORE STRETCHING WHEN BOTH SIT OUTSIDE, UNDOING A CHAIN OF MOVES
//    IN THE ORDER THEY WERE DONE, MOVING AN $x$-INTERCEPT WITH A VERTICAL
//    CHANGE, ANSWERING AN INVERSE QUESTION WITH THE OUTPUT INSTEAD OF THE
//    INPUT, TREATING $f^{-1}$ AS A RECIPROCAL, FORGETTING THE DOMAIN AN INVERSE
//    NEEDS, and MISSING A MEETING THAT HAPPENS AT AN ENDPOINT.
//  - No two choices inside an item name the same point, number or rule, in any
//    spelling.

const challenge = [
  // c1 — one point pushed through an inside change and an outside change at
  // once. v1 runs forwards, v2 runs BACKWARDS from the new graph to the old one,
  // and v3 adds a reflection so three moves have to be tracked in order.
  [
    {
      q: 'The point $(-7, 6)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = f(x + 4) - 9$?',
      choices: ['$(-3, -3)$', '$(-11, 15)$', '$(-11, -3)$', '$(-3, 15)$'],
      answer: 2,
      solution:
        'Take the two changes one at a time. The $+4$ is INSIDE, and inside changes run backwards: to feed the function its old input $-7$, the new input must be $4$ smaller, so the graph slides LEFT $4$ and $-7 \\to -11$. The $-9$ is outside, so it lowers the height in the natural way: $6 \\to -3$. The point lands at $(-11, -3)$. Check by substituting into the new equation: at $x = -11$, $f(-11 + 4) - 9 = f(-7) - 9 = 6 - 9 = -3$ ✓ — the inside really does collapse to $-7$. (The choice $(-3, -3)$ slides RIGHT $4$, the classic reversed inside change; at $x = -3$ the new rule needs $f(1)$, a value nobody gave us ✗. The choice $(-11, 15)$ gets the slide right but raises the height by $9$ instead of lowering it. The choice $(-3, 15)$ makes both slips at once.)',
    },
    {
      q: 'The point $(2, -5)$ is on the graph of $y = f(x - 6) + 8$. What point must be on the graph of $y = f(x)$?',
      choices: ['$(8, 3)$', '$(-4, -13)$', '$(8, -13)$', '$(-4, 3)$'],
      answer: 1,
      solution:
        'This one runs backwards, so read the statement as an equation: $f(2 - 6) + 8 = -5$, that is $f(-4) + 8 = -5$. Subtract the $8$ that was added on the outside: $f(-4) = -13$, so the point $(-4, -13)$ is on the graph of $f$. Check by running the transformation FORWARDS from that point: $(-4, -13)$ slides right $6$ to $(2, -13)$ and then up $8$ to $(2, -5)$ ✓, exactly the point we were handed. (The choice $(8, 3)$ applies the transformation forwards to $(2, -5)$ instead of undoing it. The choice $(8, -13)$ undoes the height correctly but moves the input the wrong way, $2 + 6$ instead of $2 - 6$. The choice $(-4, 3)$ finds the right input but adds the $8$ a second time instead of removing it.)',
    },
    {
      q: 'The point $(5, -3)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = -f(x - 4) + 1$?',
      choices: ['$(9, 4)$', '$(1, 4)$', '$(9, 2)$', '$(9, -2)$'],
      answer: 0,
      solution:
        'Three moves, tracked in order. Inside first: $x - 4$ needs the new input to be $4$ BIGGER for the inside to equal $5$, so $5 \\to 9$. Outside next, and outside changes happen in the order written: the minus sign flips the height, $-(-3) = 3$, and only then does the $+1$ lift it to $4$. The point lands at $(9, 4)$. Check by substituting: at $x = 9$, $-f(9 - 4) + 1 = -f(5) + 1 = 3 + 1 = 4$ ✓. (The choice $(1, 4)$ slides left $4$ instead of right. The choice $(9, 2)$ adds the $1$ before flipping, computing $-(-3 + 1)$; the flip comes first because it sits closer to the function. The choice $(9, -2)$ forgets the flip entirely and reports $-3 + 1$.)',
    },
  ],
  // c2 — the $y$-axis flip, which is the reflection students most often trade
  // for the $x$-axis one. v1 pairs it with a vertical slide, v2 undoes it, and
  // v3 hides a horizontal slide behind it so the order of flip-then-slide bites.
  [
    {
      q: 'The point $(-8, 3)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = f(-x) + 6$?',
      choices: ['$(-8, 3)$', '$(8, 9)$', '$(8, 3)$', '$(8, -3)$'],
      answer: 1,
      solution:
        'The minus sign is INSIDE, so it negates inputs and flips the graph over the $y$-axis: $(a, b) \\to (-a, b)$, and $-8 \\to 8$ while the height $3$ is untouched. The $+6$ is outside, so it raises that height to $9$. The point lands at $(8, 9)$. Check by substituting: at $x = 8$, $f(-8) + 6 = 3 + 6 = 9$ ✓ — the input $8$ is exactly what makes $-x$ equal $-8$. (The choice $(-8, 3)$ reads the minus as an outside flip, $y = -f(x) + 6$, which gives $-3 + 6 = 3$ at the unchanged input. The choice $(8, 3)$ flips BOTH the input and the height, which is $y = -f(-x) + 6$, one minus too many. The choice $(8, -3)$ flips correctly but subtracts the $6$ instead of adding it.)',
    },
    {
      q: 'The point $(-4, 12)$ is on the graph of $y = f(-x) - 5$. What point must be on the graph of $y = f(x)$?',
      choices: ['$(4, 7)$', '$(-4, 17)$', '$(4, 17)$', '$(-4, -17)$'],
      answer: 2,
      solution:
        'Write the fact as an equation: $f(-(-4)) - 5 = 12$, that is $f(4) - 5 = 12$. Add back the $5$ that was taken off outside: $f(4) = 17$, so $(4, 17)$ is on the graph of $f$. Check by running the transformation forwards: the point $(4, 17)$ flips over the $y$-axis to $(-4, 17)$ and then drops $5$ to $(-4, 12)$ ✓, the point we started from. (The choice $(4, 7)$ subtracts $5$ again instead of adding it back — undoing a move means reversing it. The choice $(-4, 17)$ undoes the vertical drop but never undoes the flip, leaving the input where it was. The choice $(-4, -17)$ reads $f(-x)$ as $-f(x)$, solving $-f(-4) - 5 = 12$; that minus lives inside, so it never touches a height.)',
    },
    {
      q: 'The point $(5, 8)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = f(-x + 2)$?',
      choices: ['$(3, 8)$', '$(-7, 8)$', '$(-3, -8)$', '$(-3, 8)$'],
      answer: 3,
      solution:
        'Everything here happens inside, so ask directly: which input makes the inside equal $5$? Solve $-x + 2 = 5$, giving $-x = 3$ and $x = -3$. The height never changes, so the point is $(-3, 8)$. Check by substituting: at $x = -3$, $f(-(-3) + 2) = f(3 + 2) = f(5) = 8$ ✓. Seen as moves, $-x + 2 = -(x - 2)$ is a flip over the $y$-axis followed by a slide RIGHT $2$: $(5, 8) \\to (-5, 8) \\to (-3, 8)$ ✓, the same landing spot by a second route. (The choice $(3, 8)$ ignores the flip and reads the rule as $f(x + 2)$, a slide left $2$. The choice $(-7, 8)$ flips correctly and then slides LEFT $2$; once the graph is flipped, the $+2$ moves it the other way. The choice $(-3, -8)$ lets the inside minus negate the height as well, which it never does.)',
    },
  ],
  // c3 — counting where a V meets a horizontal line, decided by the corner. v1
  // puts the line ABOVE an upside-down V (no meetings), v2 puts it above a
  // corner (two), and v3 runs the count backwards to find the level that gives
  // exactly one.
  [
    {
      q: 'How many solutions does the equation $4 - |x + 3| = 6$ have? (Think of where the graph of $y = 4 - |x + 3|$ meets the horizontal line $y = 6$.)',
      choices: ['$0$', '$1$', '$2$', 'Infinitely many'],
      answer: 0,
      solution:
        'The graph of $y = 4 - |x + 3|$ is an upside-down V: the corner sits where the absolute value is $0$, at $(-3, 4)$, and every other point is LOWER because a positive amount is subtracted. So the tallest height the graph ever reaches is $4$, and the line $y = 6$ floats above the whole picture — they never meet, so there are $0$ solutions. Algebra agrees: $4 - |x + 3| = 6$ gives $|x + 3| = -2$, and a distance is never negative ✗. (The choice $1$ assumes the line always at least grazes the corner. The choice $2$ assumes a V-shaped graph must meet every horizontal line twice, which is only true for lines on the open side of the corner. The choice "infinitely many" would need the graph to lie along the line, but this graph has slopes $1$ and $-1$, never $0$.)',
    },
    {
      q: 'How many solutions does the equation $|x + 5| - 8 = -3$ have?',
      choices: ['$0$', '$1$', '$2$', 'Infinitely many'],
      answer: 2,
      solution:
        'The graph of $y = |x + 5| - 8$ is a V with its corner at $(-5, -8)$, opening upward. The line $y = -3$ sits $5$ units ABOVE that corner, so it cuts through both arms: $2$ solutions. Algebra agrees: $|x + 5| = 5$ means the distance from $x$ to $-5$ is $5$, giving $x = 0$ and $x = -10$; check both, $|0 + 5| - 8 = -3$ ✓ and $|-10 + 5| - 8 = -3$ ✓, and they are genuinely different numbers. (The choice $1$ solves only the branch $x + 5 = 5$ and forgets the arm on the left. The choice $0$ decides that a negative right-hand side is impossible, missing that the $-8$ has already dragged the corner down to $-8$, far below $-3$. The choice "infinitely many" reads the equation as though every $x$ between $-10$ and $0$ worked, which is what an inequality would give.)',
    },
    {
      q: 'The graph of $y = |x| - 4$ meets the horizontal line $y = k$ at exactly one point. What is $k$?',
      choices: ['$k = 4$', '$k = 0$', '$k = -4$', '$k = -5$'],
      answer: 2,
      solution:
        'Run the counting backwards. The graph is a V opening upward with its corner at $(0, -4)$, since $|0| - 4 = -4$ and every other input makes $|x|$ positive. A horizontal line above the corner cuts both arms (two points), a line below it misses entirely (no points), and only the line THROUGH the corner touches at exactly one point. So $k = -4$. Check: $|x| - 4 = -4$ gives $|x| = 0$, whose only solution is $x = 0$ ✓ — one point, at $(0, -4)$. (The choice $k = 4$ puts the corner at $(0, 4)$, flipping the direction of the vertical slide; the real line $y = 4$ meets the V at $x = 8$ and $x = -8$, two points. The choice $k = 0$ is the $x$-axis, which the V crosses twice, at $x = 4$ and $x = -4$. The choice $k = -5$ passes below the corner and meets the graph nowhere at all.)',
    },
  ],
  // c4 — the parabola $y = x^2$ pushed through a stretch, a flip and slides. v1
  // asks for vertex and direction, v2 runs backwards to the stretch factor from
  // a point, and v3 asks for the maximum, which only exists after the flip.
  [
    {
      q: 'Start with $f(x) = x^2$. The graph of $y = -3f(x + 6) - 4$ is a parabola. What is its vertex, and which way does it open?',
      choices: ['$(6, -4)$, opening downward', '$(-6, -4)$, opening downward', '$(-6, 12)$, opening downward', '$(-6, -4)$, opening upward'],
      answer: 1,
      solution:
        'Track the vertex $(0, 0)$ through every move, inside first. The $+6$ inside slides the graph LEFT $6$, so $(0, 0) \\to (-6, 0)$. Outside, the $-3$ multiplies the height: $-3 \\times 0 = 0$, so a point sitting at height $0$ does not budge. Then the $-4$ lowers it: $(-6, 0) \\to (-6, -4)$. Because the multiplier $-3$ is negative, every height is flipped, so the parabola opens DOWNWARD with its peak at $(-6, -4)$. Check with the formula and a neighbouring input: $y = -3(x + 6)^2 - 4$, and at $x = -5$ that is $-3(1) - 4 = -7$, which is lower than $-4$ ✓ — the vertex really is the highest point. (The choice $(6, -4)$ slides right $6$, reversing the inside change. The choice $(-6, 12)$ applies the $-3$ AFTER the $-4$, computing $-3(0 - 4)$; the two outside jobs must happen in the order written, stretch then slide. The choice with "opening upward" misses that a negative multiplier turns the parabola over.)',
    },
    {
      q: 'Start with $f(x) = x^2$. The graph of $y = a\\,f(x - 3) + 7$ passes through the point $(5, -1)$. What is $a$?',
      choices: ['$a = 2$', '$a = -4$', '$a = -\\frac{8}{25}$', '$a = -2$'],
      answer: 3,
      solution:
        'The transformed rule is $y = a(x - 3)^2 + 7$. Substitute the point: $a(5 - 3)^2 + 7 = -1$, so $a(2)^2 + 7 = -1$ and $4a = -8$, giving $a = -2$. Check forwards with the finished rule $y = -2(x - 3)^2 + 7$: at $x = 5$ it gives $-2(4) + 7 = -8 + 7 = -1$ ✓. Check the shape a second way: the vertex is at $(3, 7)$ and the point $(5, -1)$ sits $2$ to the right and $8$ down, and $-2 \\times 2^2 = -8$ ✓ matches that drop exactly. (The choice $a = 2$ solves $4a = 8$, losing the sign on the way from $7$ down to $-1$. The choice $a = -4$ forgets to square, solving $2a + 7 = -1$. The choice $a = -\\frac{8}{25}$ ignores the slide and substitutes $5$ instead of $5 - 3$, solving $25a + 7 = -1$.)',
    },
    {
      q: 'Start with $f(x) = x^2$. What is the largest value the expression $-f(x - 7) - 2$ can take, and at which input does it happen?',
      choices: ['$-2$, at $x = 7$', '$-2$, at $x = -7$', '$2$, at $x = 7$', 'There is no largest value — the expression grows without bound'],
      answer: 0,
      solution:
        'Written out, the expression is $-(x - 7)^2 - 2$. The square $(x - 7)^2$ is never negative and equals $0$ only at $x = 7$, so $-(x - 7)^2$ is never positive and is largest, namely $0$, exactly there. Subtracting $2$ makes the largest value $-2$, reached at $x = 7$. Check by transformation instead of algebra: the vertex $(0, 0)$ slides right $7$ to $(7, 0)$, the flip leaves that height-$0$ point alone, and the $-2$ drops it to $(7, -2)$; the flip makes the parabola open downward, so the vertex is a maximum ✓. Test a neighbour: at $x = 9$ the value is $-4 - 2 = -6$, which is smaller ✓. (The choice at $x = -7$ slides the vertex left, reversing the inside change. The choice $2$ subtracts the $2$ before the flip, computing $-(0 - 2)$. The last choice misses the flip: an upward parabola has a smallest value and no largest, but this one opens downward.)',
    },
  ],
  // c5 — building an inverse FORMULA, where the undo steps have to be taken in
  // reverse order. v3 goes further and asks for the domain the inverse needs,
  // which is the range of the original function.
  [
    {
      q: 'Let $f(x) = \\frac{x}{4} - 7$. What is $f^{-1}(x)$?',
      choices: ['$f^{-1}(x) = 4x - 28$', '$f^{-1}(x) = \\frac{x}{4} + 7$', '$f^{-1}(x) = 4x + 28$', '$f^{-1}(x) = \\frac{4}{x - 7}$'],
      answer: 2,
      solution:
        'Write $y = \\frac{x}{4} - 7$ and swap the roles of input and output: $x = \\frac{y}{4} - 7$. Add $7$: $x + 7 = \\frac{y}{4}$. Multiply by $4$: $y = 4x + 28$. So $f^{-1}(x) = 4x + 28$. The undo steps run in REVERSE order — $f$ divides then subtracts, so $f^{-1}$ adds then multiplies. Check both directions, which is what makes an inverse an inverse. Forward then back: $f\\left(f^{-1}(x)\\right) = \\frac{4x + 28}{4} - 7 = x + 7 - 7 = x$ ✓. Back then forward: $f^{-1}(f(x)) = 4\\left(\\frac{x}{4} - 7\\right) + 28 = x - 28 + 28 = x$ ✓. Nothing is ever divided by a variable, so both rules accept every real number. (The choice $4x - 28$ subtracts the $7$ instead of adding it back. The choice $\\frac{x}{4} + 7$ fixes the sign but never swaps the divide for a multiply, so it undoes nothing: $f^{-1}(f(8)) = f^{-1}(-5) = \\frac{23}{4} \\ne 8$ ✗. The choice $\\frac{4}{x - 7}$ treats $f^{-1}$ as a reciprocal — the $-1$ is notation, not an exponent.)',
    },
    {
      q: 'Let $g(x) = 6(x + 2)$. What is $g^{-1}(x)$?',
      choices: ['$g^{-1}(x) = \\frac{x}{6} - 2$', '$g^{-1}(x) = \\frac{x}{6} + 2$', '$g^{-1}(x) = \\frac{x - 2}{6}$', '$g^{-1}(x) = \\frac{1}{6(x + 2)}$'],
      answer: 0,
      solution:
        'The machine $g$ adds $2$ first and multiplies by $6$ second, so the undo machine divides by $6$ first and subtracts $2$ second — last in, first out. From $x = 6(y + 2)$: divide by $6$ to get $\\frac{x}{6} = y + 2$, then subtract $2$ to get $y = \\frac{x}{6} - 2$. Check both directions: $g\\left(g^{-1}(x)\\right) = 6\\left(\\frac{x}{6} - 2 + 2\\right) = x$ ✓ and $g^{-1}(g(x)) = \\frac{6(x + 2)}{6} - 2 = x + 2 - 2 = x$ ✓. Check one number too: $g(1) = 18$ and $\\frac{18}{6} - 2 = 1$ ✓. (The choice $\\frac{x}{6} + 2$ adds the $2$ instead of removing it. The choice $\\frac{x - 2}{6}$ undoes the steps in the order they were DONE — subtracting $2$ before dividing — and lands on $\\frac{16}{6}$ instead of $1$ when fed $18$ ✗. The choice $\\frac{1}{6(x + 2)}$ is the reciprocal of $g$, not its inverse.)',
    },
    {
      q: 'Let $h(x) = \\sqrt{x} + 3$, whose domain is $x \\ge 0$. What is $h^{-1}(x)$, and what domain does the inverse need?',
      choices: ['$h^{-1}(x) = \\sqrt{x} - 3$, for $x \\ge 0$', '$h^{-1}(x) = (x - 3)^2$, for $x \\ge 3$', '$h^{-1}(x) = (x - 3)^2$, for every real $x$', '$h^{-1}(x) = x^2 - 3$, for $x \\ge 3$'],
      answer: 1,
      solution:
        'Undo the steps in reverse. From $x = \\sqrt{y} + 3$, subtract $3$ to get $x - 3 = \\sqrt{y}$, then square: $y = (x - 3)^2$. Now the domain. Inputs of $h^{-1}$ are outputs of $h$, and since $\\sqrt{x} \\ge 0$ the smallest output $h$ can produce is $3$; so the inverse accepts exactly $x \\ge 3$. Check both directions on that domain: $h\\left(h^{-1}(x)\\right) = \\sqrt{(x - 3)^2} + 3 = |x - 3| + 3 = x$ when $x \\ge 3$ ✓, and $h^{-1}(h(x)) = \\left(\\sqrt{x} + 3 - 3\\right)^2 = x$ for every $x \\ge 0$ ✓. Check one number: $h(25) = 8$ and $(8 - 3)^2 = 25$ ✓. (The choice $(x - 3)^2$ with every real $x$ has the right rule but forgets the restriction: at $x = 1$ it returns $4$, yet $h(4) = 5 \\ne 1$ ✗. The choice $x^2 - 3$ undoes in the wrong order, squaring before subtracting. The choice $\\sqrt{x} - 3$ assumes the inverse of a square root is another square root, but two square roots in a row do not cancel.)',
    },
  ],
  // c6 — two OUTSIDE changes at once, where the order of stretch-then-slide is
  // the whole problem. v2 runs the chain backwards, and v3 buries the pair
  // inside a horizontal slide so the wrong direction leaves you with no data.
  [
    {
      q: 'The point $(-3, 5)$ is on the graph of $y = f(x)$. What point must be on the graph of $y = 4f(x) - 11$?',
      choices: ['$(-3, -24)$', '$(-12, 9)$', '$(-3, 9)$', '$(-3, 31)$'],
      answer: 2,
      solution:
        'Both changes sit outside the function, so they touch only the height; the input stays at $-3$. The order is the order written: multiply the height by $4$ first, $4(5) = 20$, then subtract $11$, giving $9$. The point lands at $(-3, 9)$. Check by substituting: at $x = -3$, $4f(-3) - 11 = 4(5) - 11 = 9$ ✓. (The choice $(-3, -24)$ subtracts before stretching, computing $4(5 - 11)$ — the $4$ multiplies the old height, not the lowered one. The choice $(-12, 9)$ multiplies the $x$-coordinate as well; a vertical stretch never moves a point sideways. The choice $(-3, 31)$ adds the $11$ instead of subtracting it.)',
    },
    {
      q: 'The point $(-2, 13)$ is on the graph of $y = 3f(x) + 4$. What point must be on the graph of $y = f(x)$?',
      choices: ['$(-2, 43)$', '$(-2, 9)$', '$\\left(-2, \\frac{1}{3}\\right)$', '$(-2, 3)$'],
      answer: 3,
      solution:
        'Nothing here is inside the function, so the input never moves: whatever we find sits at $x = -2$. Read the fact as an equation: $3f(-2) + 4 = 13$. Undo in reverse order — the $+4$ happened last, so remove it first: $3f(-2) = 9$, then undo the tripling: $f(-2) = 3$. The point is $(-2, 3)$. Check by running the transformation forwards: a height of $3$ becomes $3(3) + 4 = 13$ ✓. (The choice $(-2, 43)$ applies the transformation forwards to $13$ instead of undoing it. The choice $(-2, 9)$ stops after subtracting the $4$ and never divides by $3$. The choice $\\left(-2, \\frac{1}{3}\\right)$ undoes the steps in the order they were done, dividing $13$ by $3$ and only then subtracting $4$.)',
    },
    {
      q: 'Let $g(x) = 5f(x - 8) - 2$, and suppose the point $(1, 6)$ is on the graph of $f$. What is $g(9)$?',
      choices: ['$28$', '$20$', '$32$', 'It cannot be determined from what is given'],
      answer: 0,
      solution:
        'Follow the formula rather than the picture: $g(9) = 5f(9 - 8) - 2 = 5f(1) - 2$. The given point says $f(1) = 6$, so $g(9) = 5(6) - 2 = 30 - 2 = 28$. Check by moving the point instead: $(1, 6)$ slides RIGHT $8$ to $(9, 6)$, then the height is multiplied by $5$ and lowered by $2$, giving $(9, 28)$ ✓ — the same landing spot. (The choice $20$ subtracts before multiplying, computing $5(6 - 2)$. The choice $32$ adds the $2$ instead of subtracting it. The last choice is where a student lands who slides the graph LEFT $8$: that route asks for $f(17)$, a value nobody supplied — a sure sign the slide went the wrong way.)',
    },
  ],
  // c7 — the horizontal line test, always with a twist: three data points, a
  // transformation laid on top, or a domain that has to be trimmed by hand.
  [
    {
      q: 'A function $f$ satisfies $f(-6) = 4$, $f(1) = 4$ and $f(7) = 10$. Which statement is true?',
      choices: ['$f^{-1}(4) = -6$', '$f^{-1}(4) = 1$', '$f$ is not a function', '$f$ has no inverse function'],
      answer: 3,
      solution:
        'Two different inputs, $-6$ and $1$, produce the same output $4$, so the graph contains both $(-6, 4)$ and $(1, 4)$ and the horizontal line $y = 4$ crosses it at least twice — the horizontal line test fails. An inverse would have to send $4$ back to two places at once, which no function may do, so $f$ has no inverse. Check the other side of the coin: every input listed has exactly ONE output, so $f$ passes the vertical line test and is a perfectly good function ✓; only the return trip breaks. (The choices $f^{-1}(4) = -6$ and $f^{-1}(4) = 1$ each pick one of the two competing inputs and hope the other goes away — the tie is exactly what kills the inverse. The choice "$f$ is not a function" confuses the horizontal line test with the vertical one: repeated OUTPUTS are allowed, repeated inputs are not.)',
    },
    {
      q: 'A function $f$ satisfies $f(2) = -1$ and $f(-5) = -1$. Let $g(x) = f(x) + 7$. Does $g$ have an inverse?',
      choices: ['Yes — adding $7$ to every output pulls the repeated values apart', 'No — $g(2)$ and $g(-5)$ are both $6$, so two inputs still share an output', 'Yes — a vertical slide never affects whether a graph is invertible', 'No — $g$ is not a function'],
      answer: 1,
      solution:
        'Compute the two outputs of $g$: $g(2) = f(2) + 7 = -1 + 7 = 6$ and $g(-5) = f(-5) + 7 = -1 + 7 = 6$. The inputs $2$ and $-5$ still land on the same height, so the horizontal line $y = 6$ crosses the graph of $g$ twice and $g$ has no inverse. Check with the picture: sliding a graph UP $7$ moves every point by the same amount, so two points that shared a height before still share one afterwards ✓ — a vertical slide can never separate them. (The first choice hopes the $+7$ separates the outputs, but it adds the same $7$ to both. The third choice states the true fact — a vertical slide changes nothing about invertibility — and then draws the wrong conclusion from it, since $f$ was not invertible to begin with. The last choice mislabels the trouble: $g$ gives each input exactly one output, so it is a function; it is only the reverse trip that fails.)',
    },
    {
      q: 'A function $h$ is defined only on the four inputs $-4$, $-1$, $2$ and $5$, with $h(-4) = 3$, $h(-1) = 0$, $h(2) = 3$ and $h(5) = -6$. Which single input can be removed from the domain so that $h$ has an inverse?',
      choices: ['Remove $x = -1$', 'Remove $x = 2$', 'Remove $x = 5$', 'No removal is needed — $h$ already has an inverse'],
      answer: 1,
      solution:
        'An inverse needs every output to come from only one input. Line the outputs up: $3$, $0$, $3$, $-6$ — the value $3$ appears twice, coming from $-4$ and from $2$. Throwing out $x = 2$ leaves the outputs $3$, $0$, $-6$, all different, so the trimmed function passes the horizontal line test and can be inverted: $h^{-1}(3) = -4$, $h^{-1}(0) = -1$, $h^{-1}(-6) = 5$ ✓. Check the count a second way: four inputs but only three different outputs, so at least one output is doubled up, and removing either member of the doubled pair fixes it — throwing out $x = -4$ would work just as well, though it is not offered here. (Removing $x = -1$ leaves the outputs $3$, $3$, $-6$, with the clash untouched. Removing $x = 5$ leaves $3$, $0$, $3$, likewise untouched. The last choice reads the vertical line test instead: $h$ is a function, but a function with a repeated output has no inverse.)',
    },
  ],
  // c8 — the $y$-intercept of a transformed graph, which is the height at input
  // $0$ of the NEW rule. v1 makes a horizontal slide change which old value is
  // needed, v2 runs a stretch-and-slide backwards, and v3 turns on the fact that
  // a $y$-axis flip leaves the input $0$ alone.
  [
    {
      q: 'Suppose $f(3) = -8$ and $f(0) = 5$. What is the $y$-intercept of the graph of $y = f(x + 3) - 2$?',
      choices: ['$(0, 3)$', '$(0, -6)$', '$(0, 5)$', '$(0, -10)$'],
      answer: 3,
      solution:
        'A $y$-intercept is the point at input $0$, so put $0$ into the NEW rule: $f(0 + 3) - 2 = f(3) - 2 = -8 - 2 = -10$, giving $(0, -10)$. Notice which old value the inside change summons — the slide means $f(3)$, not $f(0)$, does the work. Check by moving a point: the $+3$ inside slides the graph LEFT $3$, so $(3, -8)$ travels to $(0, -8)$, landing exactly on the $y$-axis, and the $-2$ drops it to $(0, -10)$ ✓. (The choice $(0, 3)$ ignores the inside slide and uses $f(0) - 2 = 3$. The choice $(0, -6)$ picks the right input but raises the height by $2$ instead of lowering it. The choice $(0, 5)$ reports the $y$-intercept of $f$ itself, before any transformation.)',
    },
    {
      q: 'The graph of $y = 3f(x) + 1$ has $y$-intercept $(0, 16)$. What is the $y$-intercept of the graph of $y = f(x)$?',
      choices: ['$(0, 5)$', '$(0, 15)$', '$\\left(0, \\frac{13}{3}\\right)$', '$(0, 49)$'],
      answer: 0,
      solution:
        'Both changes are outside, so the intercept stays on the $y$-axis and only its height needs undoing. The statement says $3f(0) + 1 = 16$. Peel the operations off in reverse order: subtract the $1$ that was added last, $3f(0) = 15$, then undo the tripling, $f(0) = 5$. The intercept of $f$ is $(0, 5)$. Check forwards: a height of $5$ becomes $3(5) + 1 = 16$ ✓. (The choice $(0, 15)$ stops after subtracting the $1$. The choice $\\left(0, \\frac{13}{3}\\right)$ undoes the steps in the order they were done, dividing $16$ by $3$ before subtracting $1$. The choice $(0, 49)$ runs the transformation forwards on $16$ instead of undoing it.)',
    },
    {
      q: 'The graph of $y = f(x)$ has $y$-intercept $(0, -9)$. What is the $y$-intercept of the graph of $y = f(-x) - 4$?',
      choices: ['$(0, 5)$', '$(0, -5)$', '$(0, -13)$', '$(0, 13)$'],
      answer: 2,
      solution:
        'Put $0$ into the new rule: $f(-0) - 4 = f(0) - 4 = -9 - 4 = -13$, so the intercept is $(0, -13)$. The flip does nothing at all here, and that is the point worth keeping: $-x$ equals $x$ when $x = 0$, so the input $0$ is its own negative and a $y$-axis flip can never move a $y$-intercept sideways. Check with the picture: reflecting over the $y$-axis pins every point of the axis in place, so $(0, -9)$ stays put and only the $-4$ moves it, down to $(0, -13)$ ✓. (The choice $(0, 5)$ reads $f(-x)$ as $-f(x)$, computing $9 - 4$; that minus sits inside, so it never touches a height. The choice $(0, -5)$ has the right input but slides up instead of down. The choice $(0, 13)$ makes both slips, negating the height and then adding the $4$.)',
    },
  ],
  // c9 — which features survive a transformation. v1 moves the intercepts with a
  // horizontal slide, v2 asks for both kinds of intercept under a negative
  // stretch, and v3 runs the idea backwards: which rule preserves them.
  [
    {
      q: 'The graph of $f$ has $x$-intercepts at $x = -8$ and $x = 3$. What are the $x$-intercepts of the graph of $y = f(x - 5)$?',
      choices: ['$x = -13$ and $x = -2$', '$x = -3$ and $x = 8$', '$x = -8$ and $x = 3$', '$x = -40$ and $x = 15$'],
      answer: 1,
      solution:
        'An $x$-intercept is an input where the height is $0$, so ask which inputs make the new rule vanish: $f(x - 5) = 0$ needs $x - 5$ to be one of the old zeros. From $x - 5 = -8$ we get $x = -3$, and from $x - 5 = 3$ we get $x = 8$. Check by substituting: at $x = -3$, $f(-3 - 5) = f(-8) = 0$ ✓, and at $x = 8$, $f(8 - 5) = f(3) = 0$ ✓. Check with the picture: a $-5$ inside slides the whole graph RIGHT $5$, and both intercepts ride along, $-8 \\to -3$ and $3 \\to 8$ ✓ — the gap of $11$ between them is unchanged, as it must be for a rigid slide. (The choice $-13$ and $-2$ slides left $5$, reversing the inside change. The choice $-8$ and $3$ leaves them where they were, which is what a VERTICAL stretch would do, not a horizontal slide. The choice $-40$ and $15$ multiplies by $5$ instead of sliding.)',
    },
    {
      q: 'A function $f$ has $x$-intercepts at $x = 2$ and $x = -9$, and its $y$-intercept is $(0, -4)$. What are the intercepts of the graph of $y = -5f(x)$?',
      choices: ['$x$-intercepts $2$ and $-9$; $y$-intercept $(0, -20)$', '$x$-intercepts $-10$ and $45$; $y$-intercept $(0, 20)$', '$x$-intercepts $-2$ and $9$; $y$-intercept $(0, 20)$', '$x$-intercepts $2$ and $-9$; $y$-intercept $(0, 20)$'],
      answer: 3,
      solution:
        'Multiplying by $-5$ is an outside change, so it rescales heights and never moves a point sideways. At an $x$-intercept the height is $0$, and $-5 \\times 0 = 0$: those points do not move, so the $x$-intercepts stay at $2$ and $-9$. The $y$-intercept is the height at input $0$, and that height is not $0$: it becomes $-5(-4) = 20$, giving $(0, 20)$. Check both claims by substituting: at $x = 2$, $-5f(2) = -5(0) = 0$ ✓; at $x = 0$, $-5f(0) = -5(-4) = 20$ ✓. (The first choice keeps the sign of $-4$, forgetting that a negative multiplier flips the point above the axis. The choice $-10$ and $45$ multiplies the $x$-intercepts by $-5$ as well, but nothing outside the function can touch an input. The choice $-2$ and $9$ negates the $x$-intercepts, as though the minus sign were inside.)',
    },
    {
      q: 'For which of these graphs are the $x$-intercepts guaranteed to be exactly the same as those of $y = f(x)$, no matter what the function $f$ is?',
      choices: ['$y = f(x) - 6$', '$y = f(x - 6)$', '$y = -6f(x)$', '$y = f(6x)$'],
      answer: 2,
      solution:
        'An $x$-intercept is an input $a$ with $f(a) = 0$, so ask which rule keeps that fact true at the same $a$. For $y = -6f(x)$: at $x = a$ the new height is $-6 \\cdot 0 = 0$ ✓, and at any input where $f$ is not zero, $-6$ times a nonzero number is still not zero, so no new intercepts appear either. Multiplying heights leaves the zeros exactly where they are. Check on a concrete function: $f(x) = x - 4$ has its only intercept at $x = 4$, and $-6f(x) = -6x + 24$ also vanishes only at $x = 4$ ✓. (The choice $y = f(x) - 6$ drops every height by $6$, so the old zeros become $-6$ and are no longer intercepts: $f(4) - 6 = -6 \\ne 0$ ✗. The choice $y = f(x - 6)$ slides the graph right $6$, carrying the intercept from $4$ to $10$ ✗. The choice $y = f(6x)$ divides each intercept by $6$, moving $4$ to $\\frac{2}{3}$ ✗ — only an intercept sitting at $x = 0$ would survive.)',
    },
  ],
  // c10 — an inverse of a TRANSFORMED function, answered by chasing the
  // definition forwards and then confirming. v3 puts the change inside, where
  // the input, not the output, has to be untangled.
  [
    {
      q: 'Suppose $f(-3) = 12$ and $f$ has an inverse. Let $g(x) = f(x) - 7$. What is $g^{-1}(5)$?',
      choices: ['$12$', '$-3$', '$-10$', 'It cannot be determined without more information about $f$'],
      answer: 1,
      solution:
        '$g^{-1}(5)$ asks: which INPUT does $g$ send to the output $5$? Work forwards from the one fact we have: $g(-3) = f(-3) - 7 = 12 - 7 = 5$. So $g$ sends $-3$ to $5$, and therefore $g^{-1}(5) = -3$. Check by chasing the definition instead: $g(x) = 5$ means $f(x) - 7 = 5$, so $f(x) = 12$, and the input with output $12$ is $x = -3$ ✓. (The choice $12$ answers with the output of $f$ instead of the input we were asked for. The choice $-10$ subtracts the $7$ from the input, $-3 - 7$; the $-7$ was applied to heights, never to inputs. The last choice is where a student lands who solves $f(x) = 5 - 7 = -2$, undoing the shift the wrong way and asking for an output nobody listed.)',
    },
    {
      q: 'A function $f$ is given by the table $f(1) = 9$, $f(2) = 0$, $f(3) = 4$, $f(4) = -1$, and it has an inverse. Let $g(x) = f(x) + 4$. What is $g^{-1}(4)$?',
      choices: ['$3$', '$0$', '$2$', '$7$'],
      answer: 2,
      solution:
        'We want the input whose $g$-output is $4$. Since $g(x) = f(x) + 4$, that means $f(x) + 4 = 4$, so $f(x) = 0$, and the table gives that at $x = 2$. Hence $g^{-1}(4) = 2$. Check forwards: $g(2) = f(2) + 4 = 0 + 4 = 4$ ✓. Check that no other input works by building the whole $g$ table: $g(1) = 13$, $g(2) = 4$, $g(3) = 8$, $g(4) = 3$ — the output $4$ appears exactly once ✓. (The choice $3$ looks up $f(x) = 4$ directly, forgetting to strip off the $+4$ first. The choice $0$ reports the output $f(2) = 0$ rather than the input $2$. The choice $7$ does the lookup first and then adds $4$, computing $f^{-1}(4) + 4 = 3 + 4$; the $4$ has to come off before the lookup, not go on after it.)',
    },
    {
      q: 'Suppose $f$ has an inverse and $f^{-1}(7) = -2$. Let $g(x) = f(x - 6)$. What is $g^{-1}(7)$?',
      choices: ['$-8$', '$13$', '$-2$', '$4$'],
      answer: 3,
      solution:
        'First translate the given fact: $f^{-1}(7) = -2$ says $f(-2) = 7$. Now hunt for the input that makes $g$ produce $7$: $g(x) = f(x - 6) = 7$ needs the inside to be $-2$, so $x - 6 = -2$ and $x = 4$. Check forwards: $g(4) = f(4 - 6) = f(-2) = 7$ ✓. Check with the picture: the $-6$ inside slides the graph RIGHT $6$, carrying the point $(-2, 7)$ to $(4, 7)$, and a point at height $7$ over the input $4$ is exactly what $g^{-1}(7) = 4$ means ✓. (The choice $-8$ solves $x - 6 = -2$ as $x = -2 - 6$, moving the wrong way. The choice $13$ adds the $6$ to the output, $7 + 6$; the shift is inside, so it acts on inputs. The choice $-2$ reports $f^{-1}(7)$ and ignores the slide altogether.)',
    },
  ],
  // c11 — counting meetings with a horizontal line straight off a figure. Every
  // crossing is checked against the listed points of the polyline: v1 hides a
  // turning point that stops short of the line, v2 has four crossings with the
  // last one on a short steep piece, and v3 has a meeting at an ENDPOINT.
  [
    {
      q: 'The complete graph of $y = f(x)$ is shown, together with the dashed line $y = 2$. How many solutions does the equation $f(x) = 2$ have?',
      fig: {
        view: [-5, -4, 5, 6],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-4, 5], [-1, -3], [1, 1], [3, -2], [4, 4]] },
          { t: 'seg', a: [-4.8, 2], b: [4.8, 2], dash: true },
          { t: 'point', p: [-4, 5] },
          { t: 'point', p: [4, 4] },
          { t: 'label', p: [-2.2, 5.5], text: 'y = f(x)' },
          { t: 'label', p: [4.1, 2.7], text: 'y = 2' },
        ],
      },
      choices: ['$1$', '$2$', '$3$', '$4$'],
      answer: 1,
      solution:
        'Walk the graph from left to right and count every meeting with the dashed line. The graph falls from $(-4, 5)$ to $(-1, -3)$, starting above the line and finishing below it, so it must cross once. It then rises only as far as $(1, 1)$ — one unit SHORT of the line — and falls again to $(3, -2)$, so that whole hump contributes nothing. Finally it climbs from $(3, -2)$ to $(4, 4)$, passing the line a second time. That is $2$ solutions. Check the endpoints, which are the easiest meetings to miss: the graph starts at height $5$ and ends at height $4$, and neither equals $2$ ✓, so nothing extra hides at the ends. (The choice $3$ counts the peak at $(1, 1)$ as a touch, but $1 < 2$ and the graph never reaches the line there. The choice $4$ assumes each of the four straight pieces meets the line once. The choice $1$ stops after the first crossing and misses the final climb.)',
    },
    {
      q: 'The complete graph of $y = f(x)$ is shown with the dashed line $y = -1$. For how many inputs does $f$ return the value $-1$?',
      fig: {
        view: [-6, -5, 6, 5],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-5, 3], [-2, -3], [1, 3], [4, -3], [5, 0]] },
          { t: 'seg', a: [-5.8, -1], b: [5.8, -1], dash: true },
          { t: 'point', p: [-5, 3] },
          { t: 'point', p: [5, 0] },
          { t: 'label', p: [1, 4.2], text: 'y = f(x)' },
          { t: 'label', p: [-4.6, -1.9], text: 'y = -1' },
        ],
      },
      choices: ['$2$', '$3$', '$4$', '$5$'],
      answer: 2,
      solution:
        'Count the meetings piece by piece, using the corner points. Falling from $(-5, 3)$ to $(-2, -3)$ the graph passes the line once, at $x = -3$. Rising from $(-2, -3)$ to $(1, 3)$ it passes again, at $x = -1$. Falling from $(1, 3)$ to $(4, -3)$ it passes a third time, at $x = 3$. Then the short steep piece from $(4, -3)$ up to $(5, 0)$ starts below the line and ends above it, so it crosses a fourth time. That is $4$ inputs. Check the three named crossings by arithmetic: the first piece drops $2$ per step, so from $3$ it reaches $-1$ after $2$ steps, at $x = -3$ ✓; the second rises $2$ per step, reaching $-1$ one step after $-2$, at $x = -1$ ✓; the third falls $2$ per step from $(1, 3)$, reaching $-1$ two steps later, at $x = 3$ ✓. (The choice $3$ misses the crossing on the short final piece, which is easy to overlook because it is steep. The choice $5$ counts the right-hand endpoint $(5, 0)$ as a meeting, but its height is $0$, not $-1$. The choice $2$ counts only the two downward crossings and skips the upward ones.)',
    },
    {
      q: 'The picture shows the whole graph of $y = f(x)$, endpoints marked, and the dashed line $y = 3$. How many solutions does the equation $f(x) = 3$ have?',
      fig: {
        view: [-5, -4, 6, 6],
        grid: true,
        elems: [
          { t: 'curve', pts: [[-4, 3], [-2, -2], [0, 1], [2, -3], [5, 5]] },
          { t: 'seg', a: [-4.8, 3], b: [5.8, 3], dash: true },
          { t: 'point', p: [-4, 3] },
          { t: 'point', p: [5, 5] },
          { t: 'label', p: [3.4, 4.6], text: 'y = f(x)' },
          { t: 'label', p: [-3.0, 3.6], text: 'y = 3' },
        ],
      },
      choices: ['$3$', '$1$', '$2$', '$4$'],
      answer: 2,
      solution:
        'Start at the left END of the graph: the point $(-4, 3)$ sits exactly ON the dashed line, so $x = -4$ is already one solution — a meeting at an endpoint counts, because the graph genuinely reaches that height there. From there the graph falls to $(-2, -2)$, rises only to $(0, 1)$, and falls to $(2, -3)$, staying below the line the whole way. The last piece climbs from $(2, -3)$ to $(5, 5)$, starting below the line and finishing above it, so it crosses once more. Total: $2$ solutions. Check that final crossing by arithmetic: over that piece the graph rises $8$ units across $3$ units of input, so it needs $\\frac{6}{8}$ of the way to climb from $-3$ up to $3$, landing at $x = 2 + \\frac{9}{4} = 4.25$, comfortably inside the picture ✓. (The choice $1$ throws away the endpoint that lies on the line. The choice $3$ counts the little peak at $(0, 1)$, which stops $2$ units short. The choice $4$ counts one meeting for every straight piece of the graph.)',
    },
  ],
  // c12 — functions that are their own inverse. v1 finds the formula, v2 asks
  // what that does to the two GRAPHS, and v3 applies the machine three times,
  // where the swap-back has to be tracked an odd number of steps.
  [
    {
      q: 'Let $f(x) = \\frac{12}{x}$, where $x \\ne 0$. What is $f^{-1}(x)$?',
      choices: ['$f^{-1}(x) = \\frac{x}{12}$', '$f^{-1}(x) = 12x$', '$f^{-1}(x) = -\\frac{12}{x}$', '$f^{-1}(x) = \\frac{12}{x}$'],
      answer: 3,
      solution:
        'Swap the roles of input and output: from $x = \\frac{12}{y}$, multiply both sides by $y$ to get $xy = 12$, then divide by $x$: $y = \\frac{12}{x}$. The inverse is the SAME rule — this machine undoes itself. Check both directions: $f\\left(f^{-1}(x)\\right) = \\frac{12}{\\;\\frac{12}{x}\\;} = x$ ✓ and $f^{-1}(f(x)) = \\frac{12}{\\;\\frac{12}{x}\\;} = x$ ✓, both valid for every $x \\ne 0$, which is the one input the rule must refuse. Check with numbers: $f(3) = 4$ and $f(4) = 3$, so the graph holds both $(3, 4)$ and $(4, 3)$ ✓ — a pair of mirror images across the line $y = x$. (The choice $\\frac{x}{12}$ inverts multiplication by $12$ instead of division INTO $12$: it sends $4$ to $\\frac{1}{3}$, not to $3$ ✗. The choice $12x$ makes the same error the other way, sending $4$ to $48$. The choice $-\\frac{12}{x}$ adds a flip nobody asked for and sends $4$ to $-3$.)',
    },
    {
      q: 'Let $f(x) = 8 - x$. How many points do the graphs of $y = f(x)$ and $y = f^{-1}(x)$ share?',
      choices: ['Exactly one, at $(4, 4)$', 'None — the two graphs are parallel lines', 'Infinitely many — the two graphs are the same line', 'Exactly two'],
      answer: 2,
      solution:
        'Find the inverse first. From $x = 8 - y$ we get $y = 8 - x$, which is $f$ all over again, so $f^{-1} = f$ and the two graphs are one and the same line — they share every one of their infinitely many points. Check that $f$ really undoes itself: $f(f(x)) = 8 - (8 - x) = x$ ✓ for every $x$. Check with a pair of numbers: $f(1) = 7$ and $f(7) = 1$, so the graph contains both $(1, 7)$ and $(7, 1)$ ✓ — it is its own mirror image across the line $y = x$, which is why reflecting changes nothing. (The choice "exactly one, at $(4, 4)$" comes from solving $f(x) = x$, which does find a genuine shared point — $f(4) = 4$ — but stops there, missing that every other point is shared too. The choice "none, parallel" notices that both lines have slope $-1$ and forgets they also have the same intercept, so they coincide rather than run alongside. The choice "exactly two" is what two crossing curves would give, but two distinct lines can never meet twice.)',
    },
    {
      q: 'A function has the form $f(x) = c - x$ for some fixed number $c$, and $f(3) = 10$. What is $f(f(f(3)))$?',
      choices: ['$10$', '$3$', '$13$', '$24$'],
      answer: 0,
      solution:
        'Pin down $c$ first: $f(3) = c - 3 = 10$ gives $c = 13$, so $f(x) = 13 - x$. Now peel the layers from the inside out. $f(3) = 10$. Then $f(10) = 13 - 10 = 3$. Then $f(3) = 10$ again. So $f(f(f(3))) = 10$. Check with the structure instead of arithmetic: $f(f(x)) = 13 - (13 - x) = x$ for every $x$, so $f$ is its own inverse and applying it twice returns you to the start; three applications therefore do the same job as one, and one application sends $3$ to $10$ ✓. (The choice $3$ assumes three trips land back at the start, but it is an EVEN number of trips that returns the input. The choice $13$ reports the constant $c$ rather than an output. The choice $24$ reads $f(3) = 10$ as "add $7$", climbing $3 \\to 10 \\to 17 \\to 24$; that rule would be $f(x) = x + 7$, which never brings a number home.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 17,
  challenge,
}
