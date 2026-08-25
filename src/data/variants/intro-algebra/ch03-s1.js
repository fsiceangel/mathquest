// Introduction to Algebra chapter 3 — variations for sections 3.1 and 3.2.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer was substituted back into its own equation with exact
//    fraction arithmetic; nothing here was checked with decimals.
//  - Every distractor is the value a NAMED wrong method actually produces, and
//    every wrong method named in a solution appears in that problem's choices.
//  - Numbers were chosen so no wrong method lands on the right answer: no
//    one-step equation where the wrong inverse agrees with the right one, no
//    two-step equation with a leading coefficient of $1$ (which would make
//    "divide first" and "subtract first" agree), and no both-sides equation
//    with the variable missing from one side (which would hide the difference
//    between gathering the $x$ terms and adding them).
//  - No two choices in a problem have the same VALUE, not just the same text:
//    $\frac{6}{3}$ and $2$ would count as a repeat.

const s31 = [
  // p1 — one step: undo a subtraction
  [
    {
      q: 'Solve $x - 12 = 5$.',
      choices: ['$x = -7$', '$x = 7$', '$x = 17$', '$x = 60$'],
      answer: 2,
      solution:
        'Twelve was taken away from $x$, so put it back: add $12$ to both sides. $x = 5 + 12 = 17$. Check: $17 - 12 = 5$. ✓ The choice $-7$ subtracts the $12$ a second time, $5 - 12$ — that repeats the operation instead of reversing it. The choice $7$ runs the subtraction backwards, $12 - 5$. The choice $60$ multiplies, $12 \\cdot 5$, but nothing was ever divided here, so multiplication is the wrong inverse.',
    },
    {
      q: 'A water tank lost $18$ liters during a hot day and now holds $26$ liters. How many liters did it hold at the start of the day?',
      choices: ['$44$ liters', '$8$ liters', '$-8$ liters', '$468$ liters'],
      answer: 0,
      solution:
        'Let $x$ be the starting amount. Losing $18$ liters means $x - 18 = 26$. Add $18$ to both sides: $x = 26 + 18 = 44$ liters. Check: $44 - 18 = 26$. ✓ Sense check first — the tank lost water, so it must have started with MORE than the $26$ liters it has now. The choice $8$ subtracts again, $26 - 18$, and lands below the amount left. The choice $-8$ subtracts in the wrong order, $18 - 26$, and a tank cannot hold a negative amount. The choice $468$ multiplies $18 \\cdot 26$.',
    },
    {
      q: 'Solve $x - 7 = -3$.',
      choices: ['$x = -10$', '$x = 10$', '$x = -21$', '$x = 4$'],
      answer: 3,
      solution:
        'Add $7$ to both sides: $x = -3 + 7 = 4$. Check: $4 - 7 = -3$. ✓ A negative right-hand side does not force a negative answer — adding $7$ to a negative number can carry you past zero. The choice $-10$ subtracts again, $-3 - 7$. The choice $10$ reverses the subtraction, $7 - (-3)$. The choice $-21$ multiplies, $7 \\cdot (-3)$.',
    },
  ],
  // p2 — one step: undo an addition, negative answer
  [
    {
      q: 'Solve $x + 9 = -4$.',
      choices: ['$x = 5$', '$x = -13$', '$x = 13$', '$x = -5$'],
      answer: 1,
      solution:
        'Nine was added to $x$, so subtract $9$ from both sides: $x = -4 - 9 = -13$. Check: $-13 + 9 = -4$. ✓ Starting below zero and moving DOWN another $9$ takes you further from zero, not closer. The choice $5$ adds the $9$ again, $-4 + 9$. The choice $13$ subtracts backwards, $9 - (-4)$. The choice $-5$ is the classic sign slip: reading $-4 - 9$ as $-(9 - 4)$ instead of $-(9 + 4)$.',
    },
    {
      q: 'Solve $x + 15 = 4$.',
      choices: ['$x = -11$', '$x = 19$', '$x = 11$', '$x = -19$'],
      answer: 0,
      solution:
        'Subtract $15$ from both sides: $x = 4 - 15 = -11$. Check: $-11 + 15 = 4$. ✓ Adding $15$ and landing at only $4$ means the starting value was below zero, so a negative answer is exactly what to expect. The choice $19$ adds instead of subtracting, $4 + 15$. The choice $11$ subtracts in the wrong order, $15 - 4$. The choice $-19$ negates the sum, $-(4 + 15)$.',
    },
    {
      q: 'At sunrise the temperature was $x$ degrees. It rose $14$ degrees by noon, reaching $-6$ degrees. What was the sunrise temperature?',
      choices: ['$8$ degrees', '$20$ degrees', '$-20$ degrees', '$-8$ degrees'],
      answer: 2,
      solution:
        'Rising $14$ degrees from $x$ gives $x + 14 = -6$. Subtract $14$ from both sides: $x = -6 - 14 = -20$ degrees. Check: $-20 + 14 = -6$. ✓ It warmed up and still ended below zero, so sunrise must have been colder than $-6$. The choice $8$ adds instead of subtracting, $-6 + 14$. The choice $20$ subtracts backwards, $14 - (-6)$, and is warmer than noon. The choice $-8$ comes from reading $-6 - 14$ as $-(14 - 6)$ — both numbers pull downward here, so they add.',
    },
  ],
  // p3 — one step: undo a multiplication, negative answer
  [
    {
      q: 'Solve $4x = -52$.',
      choices: ['$x = -208$', '$x = -56$', '$x = -13$', '$x = 13$'],
      answer: 2,
      solution:
        'The $4$ multiplies $x$, so divide both sides by $4$: $x = \\frac{-52}{4} = -13$. Check: $4 \\cdot (-13) = -52$. ✓ A positive coefficient times a negative answer gives a negative product, which matches the right-hand side. The choice $-208$ multiplies by $4$ again, $4 \\cdot (-52)$. The choice $-56$ subtracts, $-52 - 4$, but subtraction cannot undo a multiplication. The choice $13$ has the right size and the wrong sign — check it and you get $52$, not $-52$.',
    },
    {
      q: 'Solve $-9x = 108$.',
      choices: ['$x = -12$', '$x = 12$', '$x = 117$', '$x = -972$'],
      answer: 0,
      solution:
        'The coefficient is $-9$, not $9$, so divide both sides by $-9$: $x = \\frac{108}{-9} = -12$. Check: $-9 \\cdot (-12) = 108$. ✓ Two negatives multiply to a positive, which is why a positive right-hand side needs a negative answer here. The choice $12$ divides by $9$ and forgets the minus sign — the single most common slip with a negative coefficient. The choice $117$ adds, $108 + 9$. The choice $-972$ multiplies, $-9 \\cdot 108$.',
    },
    {
      q: 'A submarine dives at a steady rate. Over $7$ minutes its depth changes by $-168$ meters in total. What is the change in depth each minute?',
      choices: ['$-1176$ m', '$-24$ m', '$-175$ m', '$24$ m'],
      answer: 1,
      solution:
        'If each minute changes the depth by $x$ meters, then $7x = -168$. Divide both sides by $7$: $x = \\frac{-168}{7} = -24$ meters per minute. Check: $7 \\cdot (-24) = -168$. ✓ One minute of diving must be a smaller change than seven minutes of diving, and it must still be negative. The choice $-1176$ multiplies, $7 \\cdot (-168)$, which is a bigger dive than the whole trip. The choice $-175$ subtracts, $-168 - 7$. The choice $24$ drops the sign and would have the submarine rising.',
    },
  ],
  // p4 — one step: undo a division, negative answer
  [
    {
      q: 'Solve $\\frac{x}{6} = -5$.',
      choices: ['$x = -\\frac{5}{6}$', '$x = 1$', '$x = 30$', '$x = -30$'],
      answer: 3,
      solution:
        'Here $x$ has been divided by $6$, so multiply both sides by $6$: $x = -5 \\cdot 6 = -30$. Check: $\\frac{-30}{6} = -5$. ✓ Dividing made the number six times smaller, so undoing it must make it six times bigger. The choice $-\\frac{5}{6}$ divides a second time instead of undoing the division. The choice $1$ adds, $-5 + 6$. The choice $30$ has the right size but the wrong sign — a positive $x$ over a positive $6$ could never give $-5$.',
    },
    {
      q: 'Solve $\\frac{x}{7} = -8$.',
      choices: ['$x = -56$', '$x = -\\frac{8}{7}$', '$x = -15$', '$x = 56$'],
      answer: 0,
      solution:
        'Multiply both sides by $7$: $x = -8 \\cdot 7 = -56$. Check: $\\frac{-56}{7} = -8$. ✓ The choice $-\\frac{8}{7}$ divides again, repeating the operation rather than reversing it. The choice $-15$ subtracts, $-8 - 7$, which undoes an addition, not a division. The choice $56$ loses the minus sign.',
    },
    {
      q: 'A diver\'s total change in depth was shared equally among $8$ stages, and each stage changed the depth by $-9$ meters. What was the total change in depth?',
      choices: ['$-\\frac{9}{8}$ m', '$-72$ m', '$-17$ m', '$72$ m'],
      answer: 1,
      solution:
        'If $x$ is the total change, then splitting it into $8$ equal stages gives $\\frac{x}{8} = -9$. Multiply both sides by $8$: $x = -9 \\cdot 8 = -72$ meters. Check: $\\frac{-72}{8} = -9$. ✓ The whole dive must be a far bigger change than one stage of it. The choice $-\\frac{9}{8}$ divides again. The choice $-17$ subtracts, $-9 - 8$. The choice $72$ drops the sign, which would describe rising instead of diving.',
    },
  ],
  // p5 — two steps: multiply then add, negative answer
  [
    {
      q: 'Solve $3x + 11 = 2$.',
      choices: ['$x = -9$', '$x = -3$', '$x = \\frac{13}{3}$', '$x = 3$'],
      answer: 1,
      solution:
        'Unwrap in reverse order. The last thing done to $x$ was adding $11$, so subtract $11$ from both sides: $3x = 2 - 11 = -9$. Now divide by $3$: $x = -3$. Check: $3(-3) + 11 = -9 + 11 = 2$. ✓ The choice $-9$ stops at $3x = -9$ and reports the value of $3x$ instead of $x$. The choice $\\frac{13}{3}$ adds the $11$ instead of subtracting it, $\\frac{2 + 11}{3}$. The choice $3$ runs the subtraction backwards, $\\frac{11 - 2}{3}$.',
    },
    {
      q: 'Solve $6x + 13 = 1$.',
      choices: ['$x = -12$', '$x = \\frac{7}{3}$', '$x = -2$', '$x = 2$'],
      answer: 2,
      solution:
        'Subtract $13$ from both sides: $6x = 1 - 13 = -12$. Divide by $6$: $x = -2$. Check: $6(-2) + 13 = -12 + 13 = 1$. ✓ The choice $-12$ is the value of $6x$, one division short of the answer. The choice $\\frac{7}{3}$ adds the $13$ rather than removing it, $\\frac{1 + 13}{6} = \\frac{14}{6}$. The choice $2$ subtracts in the wrong order, $\\frac{13 - 1}{6}$.',
    },
    {
      q: 'A number is multiplied by $4$, and then $30$ is added to the result. The final value is $6$. What is the number?',
      choices: ['$-24$', '$9$', '$6$', '$-6$'],
      answer: 3,
      solution:
        'Call the number $n$ and write the story as an equation: $4n + 30 = 6$. Subtract $30$ from both sides: $4n = -24$. Divide by $4$: $n = -6$. Check: $4(-6) + 30 = -24 + 30 = 6$. ✓ Adding $30$ and ending at only $6$ means the number was negative before the $30$ arrived. The choice $-24$ is the value of $4n$, not of $n$. The choice $9$ adds the $30$ instead of subtracting it, $\\frac{6 + 30}{4}$. The choice $6$ reverses that subtraction, $\\frac{30 - 6}{4}$.',
    },
  ],
  // p6 — negative coefficient hidden behind a constant
  [
    {
      q: 'Solve $5 - 4x = 29$.',
      choices: ['$x = -6$', '$x = 6$', '$x = -\\frac{17}{2}$', '$x = 24$'],
      answer: 0,
      solution:
        'Subtract $5$ from both sides: $-4x = 24$. The coefficient is $-4$, not $4$, so divide by $-4$: $x = \\frac{24}{-4} = -6$. Check: $5 - 4(-6) = 5 + 24 = 29$. ✓ Subtracting a negative amount is what pushes the left side above $5$. The choice $6$ divides by $4$ and drops the minus sign; test it and you get $5 - 24 = -19$, not $29$. The choice $-\\frac{17}{2}$ adds the $5$ instead of subtracting it, $\\frac{29 + 5}{-4} = \\frac{34}{-4}$. The choice $24$ stops at $-4x = 24$.',
    },
    {
      q: 'Solve $3 - 7x = 31$.',
      choices: ['$x = 4$', '$x = -4$', '$x = -\\frac{34}{7}$', '$x = 28$'],
      answer: 1,
      solution:
        'Subtract $3$ from both sides: $-7x = 28$. Divide by $-7$: $x = \\frac{28}{-7} = -4$. Check: $3 - 7(-4) = 3 + 28 = 31$. ✓ The choice $4$ divides by $7$ and forgets the sign; that value gives $3 - 28 = -25$. The choice $-\\frac{34}{7}$ adds the $3$ to both sides instead of subtracting, $\\frac{31 + 3}{-7}$. The choice $28$ is the value of $-7x$, with the division never done.',
    },
    {
      q: 'For what value of $x$ does the expression $20 - 8x$ equal $44$?',
      choices: ['$x = 3$', '$x = 24$', '$x = -8$', '$x = -3$'],
      answer: 3,
      solution:
        'Set the expression equal to $44$: $20 - 8x = 44$. Subtract $20$: $-8x = 24$. Divide by $-8$: $x = \\frac{24}{-8} = -3$. Check: $20 - 8(-3) = 20 + 24 = 44$. ✓ To get a value ABOVE $20$, the term $-8x$ has to be positive, which only happens when $x$ is negative. The choice $3$ divides by $8$ and drops the minus sign. The choice $24$ stops at $-8x = 24$. The choice $-8$ adds the $20$ instead of subtracting it, $\\frac{44 + 20}{-8}$.',
    },
  ],
  // p7 — fractional coefficient: multiply by the reciprocal
  [
    {
      q: 'Solve $\\frac{3}{7}x = 12$.',
      choices: ['$x = 28$', '$x = 84$', '$x = \\frac{36}{7}$', '$x = 4$'],
      answer: 0,
      solution:
        'The coefficient is $\\frac{3}{7}$, so multiply both sides by its reciprocal $\\frac{7}{3}$: $x = 12 \\cdot \\frac{7}{3} = \\frac{84}{3} = 28$. Check: $\\frac{3}{7} \\cdot 28 = \\frac{84}{7} = 12$. ✓ The choice $84$ multiplies by $7$ only, which clears the denominator but leaves the factor of $3$ still stuck to $x$. The choice $4$ makes the opposite half-move, dividing by $3$ only. The choice $\\frac{36}{7}$ multiplies by the coefficient $\\frac{3}{7}$ instead of by its reciprocal — only the reciprocal cancels a fraction.',
    },
    {
      q: 'Solve $\\frac{5}{6}x = 20$.',
      choices: ['$x = 120$', '$x = 4$', '$x = 24$', '$x = \\frac{50}{3}$'],
      answer: 2,
      solution:
        'Multiply both sides by the reciprocal $\\frac{6}{5}$: $x = 20 \\cdot \\frac{6}{5} = \\frac{120}{5} = 24$. Check: $\\frac{5}{6} \\cdot 24 = \\frac{120}{6} = 20$. ✓ Since $\\frac{5}{6}$ is a little less than $1$, the answer must be a little MORE than $20$ — that alone rules out two of the choices. The choice $120$ multiplies by $6$ only. The choice $4$ divides by $5$ only. The choice $\\frac{50}{3}$ multiplies by $\\frac{5}{6}$ again instead of flipping it.',
    },
    {
      q: 'Solve $-\\frac{4}{9}x = 12$.',
      choices: ['$x = 27$', '$x = -\\frac{16}{3}$', '$x = -108$', '$x = -27$'],
      answer: 3,
      solution:
        'The reciprocal of $-\\frac{4}{9}$ is $-\\frac{9}{4}$, so multiply both sides by that: $x = 12 \\cdot \\left(-\\frac{9}{4}\\right) = -\\frac{108}{4} = -27$. Check: $-\\frac{4}{9} \\cdot (-27) = \\frac{108}{9} = 12$. ✓ Two negatives make the positive $12$ on the right. The choice $27$ keeps the size but loses the sign. The choice $-\\frac{16}{3}$ multiplies by $-\\frac{4}{9}$ rather than by its reciprocal. The choice $-108$ multiplies by $-9$ only, clearing the denominator but never dividing by $4$.',
    },
  ],
  // p8 — two steps landing on a fraction
  [
    {
      q: 'Solve $10x + 9 = 3$.',
      choices: ['$x = -\\frac{3}{5}$', '$x = \\frac{6}{5}$', '$x = -6$', '$x = \\frac{3}{5}$'],
      answer: 0,
      solution:
        'Subtract $9$ from both sides: $10x = 3 - 9 = -6$. Divide by $10$: $x = \\frac{-6}{10} = -\\frac{3}{5}$. Check: $10 \\cdot \\left(-\\frac{3}{5}\\right) + 9 = -6 + 9 = 3$. ✓ A solution does not have to be a whole number; a fraction is a perfectly good answer. The choice $\\frac{6}{5}$ adds the $9$ instead of subtracting it, $\\frac{3 + 9}{10}$. The choice $-6$ is the value of $10x$, one step short. The choice $\\frac{3}{5}$ reverses the subtraction, $\\frac{9 - 3}{10}$.',
    },
    {
      q: 'Solve $4x + 11 = 5$.',
      choices: ['$x = 4$', '$x = -\\frac{3}{2}$', '$x = -6$', '$x = \\frac{3}{2}$'],
      answer: 1,
      solution:
        'Subtract $11$: $4x = 5 - 11 = -6$. Divide by $4$: $x = \\frac{-6}{4} = -\\frac{3}{2}$, which is already in lowest terms. Check: $4 \\cdot \\left(-\\frac{3}{2}\\right) + 11 = -6 + 11 = 5$. ✓ The choice $4$ adds the $11$ rather than removing it, $\\frac{5 + 11}{4}$. The choice $-6$ is the value of $4x$. The choice $\\frac{3}{2}$ subtracts in the wrong order, $\\frac{11 - 5}{4}$.',
    },
    {
      q: 'Solve $8x + 9 = 3$.',
      choices: ['$x = \\frac{3}{2}$', '$x = -6$', '$x = -\\frac{3}{4}$', '$x = \\frac{3}{4}$'],
      answer: 2,
      solution:
        'Subtract $9$: $8x = 3 - 9 = -6$. Divide by $8$: $x = \\frac{-6}{8} = -\\frac{3}{4}$ after reducing. Check: $8 \\cdot \\left(-\\frac{3}{4}\\right) + 9 = -6 + 9 = 3$. ✓ Always reduce the fraction at the end — $-\\frac{6}{8}$ and $-\\frac{3}{4}$ are the same number, but the reduced form is the one to write. The choice $\\frac{3}{2}$ adds the $9$ instead of subtracting, $\\frac{3 + 9}{8}$. The choice $-6$ is $8x$, not $x$. The choice $\\frac{3}{4}$ comes from $\\frac{9 - 3}{8}$.',
    },
  ],
  // p9 — fractional coefficient plus a constant
  [
    {
      q: 'Solve $\\frac{2}{3}x - 7 = -13$.',
      choices: ['$x = -4$', '$x = -9$', '$x = -30$', '$x = -6$'],
      answer: 1,
      solution:
        'Undo the $-7$ first by adding $7$ to both sides: $\\frac{2}{3}x = -13 + 7 = -6$. Now multiply by the reciprocal $\\frac{3}{2}$: $x = -6 \\cdot \\frac{3}{2} = -9$. Check: $\\frac{2}{3}(-9) - 7 = -6 - 7 = -13$. ✓ The choice $-6$ stops at $\\frac{2}{3}x = -6$ and reports that value. The choice $-4$ multiplies $-6$ by $\\frac{2}{3}$ instead of by $\\frac{3}{2}$ — the coefficient, not its reciprocal. The choice $-30$ subtracts the $7$ instead of adding it, $(-13 - 7) \\cdot \\frac{3}{2}$.',
    },
    {
      q: 'Solve $\\frac{3}{5}x + 4 = -8$.',
      choices: ['$x = -\\frac{36}{5}$', '$x = -12$', '$x = -20$', '$x = -\\frac{20}{3}$'],
      answer: 2,
      solution:
        'Subtract $4$ from both sides: $\\frac{3}{5}x = -8 - 4 = -12$. Multiply by the reciprocal $\\frac{5}{3}$: $x = -12 \\cdot \\frac{5}{3} = -\\frac{60}{3} = -20$. Check: $\\frac{3}{5}(-20) + 4 = -12 + 4 = -8$. ✓ The choice $-12$ is the value of $\\frac{3}{5}x$, one step short. The choice $-\\frac{36}{5}$ multiplies by $\\frac{3}{5}$ rather than by its reciprocal. The choice $-\\frac{20}{3}$ adds the $4$ instead of subtracting it, $(-8 + 4) \\cdot \\frac{5}{3}$.',
    },
    {
      q: 'Solve $6 + \\frac{4}{3}x = -10$.',
      choices: ['$x = -\\frac{64}{3}$', '$x = -3$', '$x = -16$', '$x = -12$'],
      answer: 3,
      solution:
        'The constant sits in front this time, but the plan is unchanged: subtract $6$ from both sides to get $\\frac{4}{3}x = -10 - 6 = -16$. Multiply by the reciprocal $\\frac{3}{4}$: $x = -16 \\cdot \\frac{3}{4} = -12$. Check: $6 + \\frac{4}{3}(-12) = 6 - 16 = -10$. ✓ The choice $-16$ is the value of $\\frac{4}{3}x$. The choice $-\\frac{64}{3}$ multiplies $-16$ by $\\frac{4}{3}$, the coefficient instead of its reciprocal. The choice $-3$ adds the $6$ instead of subtracting it, $(-10 + 6) \\cdot \\frac{3}{4}$.',
    },
  ],
  // p10 — negative fractional coefficient behind a constant
  [
    {
      q: 'Solve $5 - \\frac{2}{3}x = -9$.',
      choices: ['$x = 21$', '$x = 6$', '$x = -21$', '$x = \\frac{28}{3}$'],
      answer: 0,
      solution:
        'Subtract $5$ from both sides: $-\\frac{2}{3}x = -9 - 5 = -14$. The reciprocal of $-\\frac{2}{3}$ is $-\\frac{3}{2}$, so $x = -14 \\cdot \\left(-\\frac{3}{2}\\right) = \\frac{42}{2} = 21$. Check: $5 - \\frac{2}{3}(21) = 5 - 14 = -9$. ✓ Count the signs on that last step: negative times negative gives a POSITIVE answer. The choice $-21$ is what you get by losing one of those two minus signs. The choice $6$ adds the $5$ instead of subtracting it, $(-9 + 5) \\cdot \\left(-\\frac{3}{2}\\right)$. The choice $\\frac{28}{3}$ multiplies $-14$ by $-\\frac{2}{3}$, the coefficient rather than its reciprocal.',
    },
    {
      q: 'Solve $4 - \\frac{5}{2}x = -16$.',
      choices: ['$x = \\frac{24}{5}$', '$x = -8$', '$x = 50$', '$x = 8$'],
      answer: 3,
      solution:
        'Subtract $4$: $-\\frac{5}{2}x = -16 - 4 = -20$. Multiply by the reciprocal $-\\frac{2}{5}$: $x = -20 \\cdot \\left(-\\frac{2}{5}\\right) = \\frac{40}{5} = 8$. Check: $4 - \\frac{5}{2}(8) = 4 - 20 = -16$. ✓ The choice $-8$ drops one minus sign; test it and the left side becomes $4 + 20 = 24$, not $-16$. The choice $\\frac{24}{5}$ adds the $4$ instead of subtracting it, $(-16 + 4) \\cdot \\left(-\\frac{2}{5}\\right)$. The choice $50$ multiplies $-20$ by $-\\frac{5}{2}$, the coefficient instead of its reciprocal.',
    },
    {
      q: 'Solve $3 - \\frac{4}{5}x = -13$.',
      choices: ['$x = \\frac{25}{2}$', '$x = -20$', '$x = 20$', '$x = \\frac{64}{5}$'],
      answer: 2,
      solution:
        'Subtract $3$ from both sides: $-\\frac{4}{5}x = -13 - 3 = -16$. Multiply by the reciprocal $-\\frac{5}{4}$: $x = -16 \\cdot \\left(-\\frac{5}{4}\\right) = \\frac{80}{4} = 20$. Check: $3 - \\frac{4}{5}(20) = 3 - 16 = -13$. ✓ The choice $-20$ loses one of the two minus signs. The choice $\\frac{25}{2}$ adds the $3$ rather than subtracting it, $(-13 + 3) \\cdot \\left(-\\frac{5}{4}\\right)$. The choice $\\frac{64}{5}$ multiplies by the coefficient $-\\frac{4}{5}$ instead of by its reciprocal.',
    },
  ],
]

const s32 = [
  // p1 — variables on both sides, no constants in the way
  [
    {
      q: 'Solve $6x = 2x + 28$.',
      choices: ['$x = 7$', '$x = \\frac{7}{2}$', '$x = \\frac{14}{3}$', '$x = 28$'],
      answer: 0,
      solution:
        'Gather the variables: subtract $2x$ from both sides, leaving $4x = 28$. Divide by $4$: $x = 7$. Check both sides of the ORIGINAL equation: $6(7) = 42$ and $2(7) + 28 = 14 + 28 = 42$. They agree. ✓ The choice $\\frac{7}{2}$ ADDS the $x$ terms, $8x = 28$, instead of subtracting one from the other — moving a term across the equals sign means taking it away, not piling it on. The choice $\\frac{14}{3}$ divides $28$ by $6$ without gathering first. The choice $28$ stops at $4x = 28$.',
    },
    {
      q: 'Solve $9x = 3x + 24$.',
      choices: ['$x = 2$', '$x = 4$', '$x = \\frac{8}{3}$', '$x = 24$'],
      answer: 1,
      solution:
        'Subtract $3x$ from both sides: $6x = 24$, so $x = 4$. Check: $9(4) = 36$ and $3(4) + 24 = 12 + 24 = 36$. ✓ The choice $2$ adds the $x$ terms, $12x = 24$. The choice $\\frac{8}{3}$ divides by $9$ while $3x$ is still sitting on the right — you cannot divide away a coefficient until the variable lives on only one side. The choice $24$ is the value of $6x$, not of $x$.',
    },
    {
      q: 'Solve $8x = 2x + 30$.',
      choices: ['$x = 3$', '$x = \\frac{15}{4}$', '$x = 30$', '$x = 5$'],
      answer: 3,
      solution:
        'Subtract $2x$ from both sides: $6x = 30$, so $x = 5$. Check: $8(5) = 40$ and $2(5) + 30 = 10 + 30 = 40$. ✓ The choice $3$ adds the $x$ terms, $10x = 30$. The choice $\\frac{15}{4}$ divides $30$ by $8$ before gathering. The choice $30$ stops at $6x = 30$.',
    },
  ],
  // p2 — variables and constants on both sides
  [
    {
      q: 'Solve $8x - 4 = 2x + 26$.',
      choices: ['$x = 3$', '$x = 5$', '$x = \\frac{11}{3}$', '$x = 30$'],
      answer: 1,
      solution:
        'Subtract $2x$ from both sides: $6x - 4 = 26$. Add $4$: $6x = 30$. Divide by $6$: $x = 5$. Check: $8(5) - 4 = 36$ and $2(5) + 26 = 36$. ✓ The choice $3$ adds the $x$ terms, $10x = 30$. The choice $\\frac{11}{3}$ subtracts the $4$ from the right instead of adding it, $6x = 26 - 4$ — the equation says $4$ was taken away, so putting it back means adding. The choice $30$ is the value of $6x$.',
    },
    {
      q: 'Solve $9x + 7 = 3x + 31$.',
      choices: ['$x = 2$', '$x = \\frac{19}{3}$', '$x = 4$', '$x = 24$'],
      answer: 2,
      solution:
        'Subtract $3x$: $6x + 7 = 31$. Subtract $7$: $6x = 24$. Divide by $6$: $x = 4$. Check: $9(4) + 7 = 43$ and $3(4) + 31 = 43$. ✓ The choice $2$ adds the $x$ terms, $12x = 24$. The choice $\\frac{19}{3}$ adds the $7$ instead of subtracting it, $6x = 31 + 7 = 38$. The choice $24$ stops at $6x = 24$.',
    },
    {
      q: 'Solve $7x - 9 = 3x + 15$.',
      choices: ['$x = \\frac{12}{5}$', '$x = \\frac{3}{2}$', '$x = 24$', '$x = 6$'],
      answer: 3,
      solution:
        'Subtract $3x$: $4x - 9 = 15$. Add $9$: $4x = 24$. Divide by $4$: $x = 6$. Check: $7(6) - 9 = 42 - 9 = 33$ and $3(6) + 15 = 18 + 15 = 33$. ✓ The choice $\\frac{12}{5}$ adds the $x$ terms, $10x = 24$. The choice $\\frac{3}{2}$ subtracts the $9$ from the right instead of adding it, $4x = 15 - 9 = 6$. The choice $24$ is the value of $4x$.',
    },
  ],
  // p3 — distribute over a sum, then solve
  [
    {
      q: 'Solve $3(x + 4) = 27$.',
      choices: ['$x = 5$', '$x = \\frac{23}{3}$', '$x = 9$', '$x = 13$'],
      answer: 0,
      solution:
        'Two roads, same destination. Distribute: $3x + 12 = 27$, so $3x = 15$ and $x = 5$. Or divide both sides by $3$ first: $x + 4 = 9$, so $x = 5$. Check: $3(5 + 4) = 3(9) = 27$. ✓ The choice $\\frac{23}{3}$ comes from writing $3x + 4 = 27$ — the $3$ must reach EVERY term inside, including the $4$. The choice $9$ is the value of $x + 4$, one subtraction short. The choice $13$ adds the $4$ to that $9$ instead of subtracting it.',
    },
    {
      q: 'Solve $4(x + 3) = 28$.',
      choices: ['$x = \\frac{25}{4}$', '$x = 4$', '$x = 7$', '$x = 10$'],
      answer: 1,
      solution:
        'Distribute: $4x + 12 = 28$, so $4x = 16$ and $x = 4$. (Dividing by $4$ first is quicker here: $x + 3 = 7$, so $x = 4$.) Check: $4(4 + 3) = 4(7) = 28$. ✓ The choice $\\frac{25}{4}$ comes from $4x + 3 = 28$, distributing to only the first term. The choice $7$ is the value of $x + 3$. The choice $10$ adds the $3$ to that $7$ instead of subtracting it.',
    },
    {
      q: 'Solve $5(x + 6) = 20$.',
      choices: ['$x = \\frac{14}{5}$', '$x = 4$', '$x = -2$', '$x = 10$'],
      answer: 2,
      solution:
        'Divide both sides by $5$: $x + 6 = 4$. Subtract $6$: $x = -2$. Or distribute: $5x + 30 = 20$, so $5x = -10$ and $x = -2$. Check: $5(-2 + 6) = 5(4) = 20$. ✓ Notice that $x + 6$ has to equal only $4$, so $x$ must be negative. The choice $\\frac{14}{5}$ comes from $5x + 6 = 20$, leaving the $6$ untouched by the $5$. The choice $4$ is the value of $x + 6$. The choice $10$ adds the $6$ instead of subtracting it.',
    },
  ],
  // p4 — distribute over a difference, then solve
  [
    {
      q: 'Solve $4(x - 3) = 20$.',
      choices: ['$x = 8$', '$x = \\frac{23}{4}$', '$x = 5$', '$x = 2$'],
      answer: 0,
      solution:
        'Distribute: $4x - 12 = 20$, so $4x = 32$ and $x = 8$. (Or divide first: $x - 3 = 5$, so $x = 8$.) Check: $4(8 - 3) = 4(5) = 20$. ✓ The choice $\\frac{23}{4}$ comes from $4x - 3 = 20$, where the $4$ never reaches the $3$. The choice $5$ is the value of $x - 3$, not of $x$. The choice $2$ subtracts $3$ from that $5$ instead of adding it — the equation says $3$ was taken away from $x$, so undoing it means adding.',
    },
    {
      q: 'Solve $6(x - 2) = 30$.',
      choices: ['$x = \\frac{16}{3}$', '$x = 3$', '$x = 7$', '$x = 5$'],
      answer: 2,
      solution:
        'Divide both sides by $6$: $x - 2 = 5$. Add $2$: $x = 7$. Distributing gives the same thing: $6x - 12 = 30$, so $6x = 42$. Check: $6(7 - 2) = 6(5) = 30$. ✓ The choice $\\frac{16}{3}$ comes from $6x - 2 = 30$, so $6x = 32$. The choice $5$ is the value of $x - 2$. The choice $3$ subtracts the $2$ from that $5$ instead of adding it.',
    },
    {
      q: 'Solve $2(x - 9) = -6$.',
      choices: ['$x = \\frac{3}{2}$', '$x = -3$', '$x = -12$', '$x = 6$'],
      answer: 3,
      solution:
        'Divide both sides by $2$: $x - 9 = -3$. Add $9$: $x = 6$. Check: $2(6 - 9) = 2(-3) = -6$. ✓ A negative right-hand side does not make $x$ negative — it only means $x$ is smaller than $9$. The choice $\\frac{3}{2}$ comes from $2x - 9 = -6$, so $2x = 3$. The choice $-3$ is the value of $x - 9$. The choice $-12$ subtracts $9$ from that $-3$ instead of adding it.',
    },
  ],
  // p5 — a negative x term facing an x term across the equals sign
  [
    {
      q: 'Solve $14 - 3x = 2x - 6$.',
      choices: ['$x = 4$', '$x = 20$', '$x = \\frac{8}{5}$', '$x = -4$'],
      answer: 0,
      solution:
        'Add $3x$ to both sides so the $x$ terms land together on the right: $14 = 5x - 6$. Add $6$: $20 = 5x$. Divide by $5$: $x = 4$. Check: $14 - 3(4) = 14 - 12 = 2$ and $2(4) - 6 = 8 - 6 = 2$. Both sides equal $2$. ✓ The choice $20$ moves the $2x$ to the left as $+2x$, giving $14 - x = -6$; moving a term across the equals sign flips its sign. The choice $\\frac{8}{5}$ subtracts the $6$ instead of adding it, $5x = 14 - 6$. The choice $-4$ comes from the route $-5x = -20$ and then dividing $-20$ by $5$ rather than by $-5$.',
    },
    {
      q: 'Solve $10 - 4x = x + 25$.',
      choices: ['$x = 7$', '$x = -3$', '$x = -5$', '$x = 3$'],
      answer: 1,
      solution:
        'Add $4x$ to both sides: $10 = 5x + 25$. Subtract $25$: $-15 = 5x$. Divide by $5$: $x = -3$. Check: $10 - 4(-3) = 10 + 12 = 22$ and $-3 + 25 = 22$. ✓ The choice $7$ adds the $10$ to the $25$ instead of subtracting it, $5x = 35$. The choice $-5$ moves the $x$ to the left as $+x$, giving $10 - 3x = 25$ and $x = -5$; the sign has to flip when a term crosses over. The choice $3$ keeps the size but loses the sign, and $10 - 12 = -2$ does not match $28$.',
    },
    {
      q: 'Solve $6 - 5x = 2x - 15$.',
      choices: ['$x = 7$', '$x = -\\frac{9}{7}$', '$x = 3$', '$x = 21$'],
      answer: 2,
      solution:
        'Add $5x$ to both sides: $6 = 7x - 15$. Add $15$: $21 = 7x$. Divide by $7$: $x = 3$. Check: $6 - 5(3) = 6 - 15 = -9$ and $2(3) - 15 = 6 - 15 = -9$. ✓ The choice $7$ moves the $2x$ to the left as $+2x$, giving $6 - 3x = -15$; that flip of sign is the whole difference. The choice $-\\frac{9}{7}$ subtracts the $15$ instead of adding it, $7x = 6 - 15$. The choice $21$ is the value of $7x$, one division short.',
    },
  ],
  // p6 — distribute, then variables on both sides
  [
    {
      q: 'Solve $3(3x - 2) = 5x + 10$.',
      choices: ['$x = 3$', '$x = 4$', '$x = \\frac{8}{7}$', '$x = 16$'],
      answer: 1,
      solution:
        'Distribute first: $9x - 6 = 5x + 10$. Subtract $5x$: $4x - 6 = 10$. Add $6$: $4x = 16$. Divide by $4$: $x = 4$. Check: $3(3 \\cdot 4 - 2) = 3(10) = 30$ and $5(4) + 10 = 30$. ✓ The choice $3$ writes the left side as $9x - 2$, letting the $3$ skip the second term inside the parentheses. The choice $\\frac{8}{7}$ adds the $x$ terms, $14x = 16$, instead of subtracting. The choice $16$ is the value of $4x$.',
    },
    {
      q: 'Solve $5(2x - 3) = 4x + 21$.',
      choices: ['$x = 4$', '$x = \\frac{18}{7}$', '$x = 6$', '$x = 36$'],
      answer: 2,
      solution:
        'Distribute: $10x - 15 = 4x + 21$. Subtract $4x$: $6x - 15 = 21$. Add $15$: $6x = 36$. Divide by $6$: $x = 6$. Check: $5(2 \\cdot 6 - 3) = 5(9) = 45$ and $4(6) + 21 = 45$. ✓ The choice $4$ writes $10x - 3$, distributing to only the first term. The choice $\\frac{18}{7}$ adds the $x$ terms, $14x = 36$. The choice $36$ stops at $6x = 36$.',
    },
    {
      q: 'Solve $2(5x - 4) = 6x + 12$.',
      choices: ['$x = 4$', '$x = \\frac{5}{4}$', '$x = 20$', '$x = 5$'],
      answer: 3,
      solution:
        'Distribute: $10x - 8 = 6x + 12$. Subtract $6x$: $4x - 8 = 12$. Add $8$: $4x = 20$. Divide by $4$: $x = 5$. Check: $2(5 \\cdot 5 - 4) = 2(21) = 42$ and $6(5) + 12 = 42$. ✓ The choice $4$ writes the left side as $10x - 4$, forgetting that the $2$ doubles the $4$ as well. The choice $\\frac{5}{4}$ adds the $x$ terms, $16x = 20$. The choice $20$ is the value of $4x$.',
    },
  ],
  // p7 — identities
  [
    {
      q: 'How many solutions does $4(3x + 5) = 12x + 20$ have?',
      choices: ['Infinitely many solutions', 'Exactly one solution', 'No solutions', 'Exactly two solutions'],
      answer: 0,
      solution:
        'Distribute the left side: $4 \\cdot 3x + 4 \\cdot 5 = 12x + 20$, which is character-for-character the right side. The two sides are the same expression written two ways, so the equation is true for every number — an identity, with infinitely many solutions. Try $x = 1$: the left is $4(8) = 32$ and the right is $12 + 20 = 32$. ✓ Try $x = -2$: the left is $4(-1) = -4$ and the right is $-24 + 20 = -4$. ✓ "Exactly one" would require the sides to cross at a single value, and "no solutions" would require them to differ by a nonzero constant. A linear equation can never have exactly two solutions.',
    },
    {
      q: 'How many solutions does $7(x - 2) = 7x - 14$ have?',
      choices: ['Exactly one solution', 'No solutions', 'Exactly two solutions', 'Infinitely many solutions'],
      answer: 3,
      solution:
        'Distribute: $7x - 14 = 7x - 14$. Subtract $7x$ from both sides and you are left with $-14 = -14$, which is true no matter what $x$ is. So every number is a solution. Try $x = 0$: the left is $7(-2) = -14$ and the right is $-14$. ✓ Try $x = 5$: the left is $7(3) = 21$ and the right is $35 - 14 = 21$. ✓ Watch the difference from a no-solution equation: there the variables also vanish, but they leave behind a FALSE statement. A linear equation cannot have exactly two solutions.',
    },
    {
      q: 'Which of these equations is true for EVERY value of $x$?',
      choices: ['$2(x + 6) = 2x + 6$', '$3(x - 1) = 3x - 3$', '$5x - x = 5$', '$4(x + 2) = 4x$'],
      answer: 1,
      solution:
        'Distribute each left side and compare. For $3(x - 1)$ you get $3x - 3$, exactly the right side, so that equation is an identity: every number works. The first choice distributes to $2x + 12$, and $2x + 12 = 2x + 6$ becomes $12 = 6$ after subtracting $2x$ — false, so no solution. The third combines to $4x = 5$, true for exactly one number, $x = \\frac{5}{4}$. The fourth gives $4x + 8 = 4x$, or $8 = 0$ — no solution again.',
    },
  ],
  // p8 — equations with no solution
  [
    {
      q: 'Solve $3(2x + 5) = 6x - 4$.',
      choices: ['No solution — the equation is never true', 'Infinitely many solutions', '$x = 0$', '$x = -\\frac{19}{12}$'],
      answer: 0,
      solution:
        'Distribute: $6x + 15 = 6x - 4$. Subtract $6x$ from both sides and the variable disappears completely, leaving $15 = -4$. That is false whatever $x$ is, so no number solves this equation. It makes sense: the left side is always $19$ more than the right, so they can never meet. The choice $-\\frac{19}{12}$ comes from ADDING the $x$ terms, $12x = -19$, instead of subtracting one from the other. The choice "infinitely many" is the opposite ending, which needs the leftover statement to be TRUE. The choice $x = 0$ treats the vanishing of $x$ as though it meant $x$ equals zero; test it and you get $15 = -4$.',
    },
    {
      q: 'Solve $5(2x - 1) = 10x + 3$.',
      choices: ['$x = 0$', 'Infinitely many solutions', 'No solution — the equation is never true', '$x = \\frac{2}{5}$'],
      answer: 2,
      solution:
        'Distribute: $10x - 5 = 10x + 3$. Subtract $10x$ and the variable is gone, leaving $-5 = 3$, which is false for every $x$. The equation has no solution. The choice $\\frac{2}{5}$ comes from adding the $x$ terms, $20x = 8$, rather than subtracting them. The choice "infinitely many" would need the leftover statement to be true, like $3 = 3$. The choice $x = 0$ mistakes "the $x$ terms cancelled" for "$x$ is zero" — substituting $0$ gives $-5 = 3$, which fails.',
    },
    {
      q: 'Solve $2(3x - 7) = 6x + 1$.',
      choices: ['Infinitely many solutions', '$x = \\frac{5}{4}$', '$x = 0$', 'No solution — the equation is never true'],
      answer: 3,
      solution:
        'Distribute: $6x - 14 = 6x + 1$. The $x$ terms are identical, so subtracting $6x$ leaves $-14 = 1$: false for every $x$, and the equation has no solution. The choice $\\frac{5}{4}$ comes from adding the $x$ terms, $12x = 15$. The choice "infinitely many" is the ending you get when the leftover statement is true instead of false. The choice $x = 0$ reads the cancelling of $x$ as a value for $x$; substituting $0$ gives $-14 = 1$.',
    },
  ],
  // p9 — two groups to distribute, one behind a minus sign
  [
    {
      q: 'Solve $4(x - 3) - 2(x + 5) = 6$.',
      choices: ['$x = 14$', '$x = 4$', '$x = \\frac{23}{2}$', '$x = 28$'],
      answer: 0,
      solution:
        'Distribute both groups, and watch the second one: $-2$ times $+5$ is $-10$, not $+10$. That gives $4x - 12 - 2x - 10 = 6$. Combine like terms: $2x - 22 = 6$. Add $22$: $2x = 28$, so $x = 14$. Check: $4(11) - 2(19) = 44 - 38 = 6$. ✓ The choice $4$ writes $+10$ for that product, turning the left side into $2x - 2$. The choice $\\frac{23}{2}$ multiplies only the $x$ inside the second group, giving $4x - 12 - 2x - 5 = 6$. The choice $28$ is the value of $2x$.',
    },
    {
      q: 'Solve $6(x - 2) - 3(x + 1) = 12$.',
      choices: ['$x = 27$', '$x = 9$', '$x = 7$', '$x = 8$'],
      answer: 1,
      solution:
        'Distribute: $6x - 12 - 3x - 3 = 12$. Combine: $3x - 15 = 12$. Add $15$: $3x = 27$, so $x = 9$. Check: $6(7) - 3(10) = 42 - 30 = 12$. ✓ The choice $7$ writes $-3 \\cdot 1$ as $+3$, giving $3x - 9 = 12$. The choice $8$ drops that last term entirely, giving $3x - 12 = 12$. The choice $27$ is the value of $3x$, one division short of the answer.',
    },
    {
      q: 'Solve $7(x + 1) - 5(x - 3) = 30$.',
      choices: ['$x = 19$', '$x = 10$', '$x = 4$', '$x = 8$'],
      answer: 2,
      solution:
        'Here the minus sign meets a minus sign: $-5$ times $-3$ is $+15$. Distributing gives $7x + 7 - 5x + 15 = 30$. Combine: $2x + 22 = 30$. Subtract $22$: $2x = 8$, so $x = 4$. Check: $7(5) - 5(1) = 35 - 5 = 30$. ✓ The choice $19$ writes that product as $-15$, giving $2x - 8 = 30$ — two negatives multiply to a positive. The choice $10$ multiplies only the $x$ in the second group, leaving $7x + 7 - 5x + 3 = 30$. The choice $8$ is the value of $2x$.',
    },
  ],
  // p10 — simplify both sides first; zero is a solution
  [
    {
      q: 'Solve $8 - 3(x - 2) = 7(x + 2) - 3x$.',
      choices: ['The equation has no solution', '$x = -\\frac{12}{7}$', '$x = 0$', 'Every value of $x$ works'],
      answer: 2,
      solution:
        'Tidy each side before moving anything across. Left: $8 - 3x + 6 = 14 - 3x$, since $-3$ times $-2$ is $+6$. Right: $7x + 14 - 3x = 4x + 14$. So $14 - 3x = 4x + 14$. Subtract $14$ from both sides: $-3x = 4x$. Add $3x$: $0 = 7x$, so $x = 0$. Check: $8 - 3(-2) = 14$ and $7(2) - 0 = 14$. ✓ Zero is a perfectly good solution — this equation has exactly ONE solution, and it happens to be $0$, which is not the same as having no solution. The choice $-\\frac{12}{7}$ writes $-3 \\cdot (-2)$ as $-6$, turning the left side into $2 - 3x$. The choice "every value works" would need the two sides to be identical expressions, but $14 - 3x$ and $4x + 14$ have different $x$ terms.',
    },
    {
      q: 'Solve $5 - 2(x - 4) = 3(x + 1) + 10 - 5x$.',
      choices: ['$x = 0$', 'Every value of $x$ works', 'The equation has no solution', '$x = 13$'],
      answer: 1,
      solution:
        'Simplify each side. Left: $5 - 2x + 8 = 13 - 2x$, because $-2$ times $-4$ is $+8$. Right: $3x + 3 + 10 - 5x = -2x + 13$. The two sides are the same expression, so subtracting $-2x$ from both leaves $13 = 13$ — true no matter what $x$ is. Every value works. Try $x = 4$: the left is $5 - 0 = 5$ and the right is $15 + 10 - 20 = 5$. ✓ The choice "no solution" is what you get from writing $-2 \\cdot (-4)$ as $-8$: the left becomes $-2x - 3$, and $-3 = 13$ is false. The choice $x = 0$ mistakes the cancelling of the $x$ terms for a value of $x$. The choice $x = 13$ reads the final true statement $13 = 13$ as if it said $x = 13$.',
    },
    {
      q: 'Solve $5(x + 4) - 3x = 14 - 3(x - 2)$.',
      choices: ['The equation has no solution', '$x = -\\frac{12}{5}$', 'Every value of $x$ works', '$x = 0$'],
      answer: 3,
      solution:
        'Simplify each side first. Left: $5x + 20 - 3x = 2x + 20$. Right: $14 - 3x + 6 = 20 - 3x$, since $-3$ times $-2$ is $+6$. So $2x + 20 = 20 - 3x$. Subtract $20$: $2x = -3x$. Add $3x$: $5x = 0$, so $x = 0$. Check: $5(4) - 0 = 20$ and $14 - 3(-2) = 20$. ✓ One solution, and it is $0$ — very different from "no solution". The choice $-\\frac{12}{5}$ writes $-3 \\cdot (-2)$ as $-6$, making the right side $8 - 3x$. The choice "every value works" would need both sides to simplify to the same expression, but $2x + 20$ and $20 - 3x$ differ in their $x$ terms.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 3,
  sections: {
    '3.1': s31,
    '3.2': s32,
  },
}
