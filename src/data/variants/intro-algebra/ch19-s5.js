// Introduction to Algebra chapter 19 — variations for the CHALLENGE set
// (Exponents and Logarithms).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - EXACTNESS FIRST. Every keyed answer is a number that stops: no rounding and
//    no "about". Every money answer is confirmed by exact fraction arithmetic —
//    a $20\%$ year is $\times \frac{6}{5}$, a $5\%$ half-year is
//    $\times \frac{21}{20}$ — and then re-walked one period at a time in
//    dollars and cents. If a route did not terminate, the numbers were changed.
//  - Sub-annual compounding is always taken apart the same way: the periodic
//    rate is the annual rate DIVIDED by the periods per year, and the exponent
//    is the NUMBER OF PERIODS, not the number of years.
//  - Every logarithm is converted to its exponential twin in the solution —
//    $\log_b a = c$ says exactly $b^c = a$ — and then the twin is checked by
//    raising the base. Any log of a number below $1$ has its sign argued out
//    loud, and any fractional log is confirmed by taking the root.
//  - Every answer is verified TWO independent ways and the second route is
//    written into the solution: a period-by-period walk beside a growth-factor
//    computation, a table beside an algebraic solve, a product-rule collapse
//    beside a pair of separately evaluated logs.
//  - Size comparisons are never asserted. Every candidate is rewritten over a
//    COMMON BASE or a COMMON EXPONENT and the rewritten forms are compared in
//    the open.
//  - Percent up-and-down questions always show that the two percents are taken
//    of DIFFERENT bases, and combine changes by multiplying growth factors.
//  - Six traps run through this chapter, and every distractor is one of them,
//    named in the solution with its wrong arithmetic worked out. THE ADDED
//    PERCENTS: combining percent changes by adding instead of multiplying.
//    THE LOST PERIOD: counting years where periods were wanted, or stopping a
//    step early. THE BACKWARD UNDO: subtracting a percent of the FINAL amount
//    instead of dividing by the growth factor. THE SWAPPED EXPONENT: reading a
//    log's input as its answer, or the base as the exponent. THE LOST MINUS: a
//    negative exponent that leaks onto the answer as a minus sign. THE SIMPLE
//    SUBSTITUTE: charging simple interest where the account compounds.
//  - No two choices inside an item name the same value, even written two ways.
//  - No bank, company, or brand is ever named; every account is just an account.

const challenge = [
  // c1 — a growing exponential meets a shrinking one. v1 and v2 change the base
  //      and the coefficients, v3 reverses the direction: the meeting point is
  //      handed over and the missing coefficient is what must be found.
  [
    {
      q: 'Let $f(x) = 3 \\cdot 2^x$ and $g(x) = 192 \\cdot \\left(\\frac{1}{2}\\right)^x$. For what value of $x$ does $f(x) = g(x)$?',
      choices: ['$3$', '$6$', '$32$', '$64$'],
      answer: 0,
      solution:
        'A negative-flavoured base is a reciprocal in disguise: $\\left(\\frac{1}{2}\\right)^x = \\frac{1}{2^x}$, so the equation reads $3 \\cdot 2^x = \\frac{192}{2^x}$. Multiply both sides by $2^x$ so the unknown stops hiding in a denominator: $3 \\cdot 2^x \\cdot 2^x = 192$, that is $3 \\cdot 2^{2x} = 192$, so $2^{2x} = 64$. Now write $64$ as a power of the same base: $64 = 2^6$, so $2x = 6$ and $x = 3$. Second route, a table instead of algebra — $f$ doubles and $g$ halves: $f$ runs $3, 6, 12, 24$ and $g$ runs $192, 96, 48, 24$ as $x$ goes $0, 1, 2, 3$. They land on the same value $24$ at $x = 3$ ✓, and the two routes agree. (THE LOST PERIOD keeps only one factor of $2^x$, solving $2^x = 64$ for $x = 6$ ✗. THE SWAPPED EXPONENT reads $2^{2x} = 64$ as $2x = 64$ and reports $x = 32$ ✗. Choice $64$ hands back the ratio $\\frac{192}{3}$ itself, as though the ratio were the answer ✗.)',
    },
    {
      q: 'Let $f(x) = 2 \\cdot 3^x$ and $g(x) = 162 \\cdot \\left(\\frac{1}{3}\\right)^x$. For what value of $x$ does $f(x) = g(x)$?',
      choices: ['$4$', '$-2$', '$2$', '$81$'],
      answer: 2,
      solution:
        'Rewrite the shrinking side as a fraction: $g(x) = \\frac{162}{3^x}$. Setting the two equal and multiplying through by $3^x$ gives $2 \\cdot 3^x \\cdot 3^x = 162$, so $3^{2x} = \\frac{162}{2} = 81$. Since $81 = 3^4$, we get $2x = 4$ and $x = 2$. Second route by tabling: $f$ triples along $2, 6, 18$ while $g$ thirds along $162, 54, 18$, and both read $18$ at $x = 2$ ✓. (THE LOST PERIOD uses only one $3^x$, solving $3^x = 81$ for $x = 4$ ✗. Choice $-2$ divides the wrong way, setting $3^{2x} = \\frac{2}{162} = \\frac{1}{81}$, which gives $2x = -4$ and $x = -2$ ✗. Choice $81$ reports the ratio $\\frac{162}{2}$ instead of the exponent ✗.)',
    },
    {
      q: 'Let $f(x) = 4 \\cdot 3^x$ and $g(x) = c \\cdot \\left(\\frac{1}{3}\\right)^x$. The two functions are equal at $x = 2$. What is $c$?',
      choices: ['$36$', '$108$', '$4$', '$324$'],
      answer: 3,
      solution:
        'Evaluate the side that is fully known first: $f(2) = 4 \\cdot 3^2 = 4 \\cdot 9 = 36$. The other side is $g(2) = c \\cdot \\left(\\frac{1}{3}\\right)^2 = \\frac{c}{9}$. Setting $\\frac{c}{9} = 36$ gives $c = 324$. Second route, going forward instead of backward: with $c = 324$, $g(2) = 324 \\cdot \\frac{1}{9} = 36$, which matches $f(2) = 36$ ✓ — and $324 = 4 \\cdot 81 = 4 \\cdot 3^4$, exactly the two triplings of $f$ plus the two thirdings $g$ must undo. (Choice $36$ hands back the shared value the two functions take, not the coefficient asked for ✗. THE LOST PERIOD applies the $\\frac{1}{3}$ once instead of twice, solving $\\frac{c}{3} = 36$ for $c = 108$ ✗. Choice $4$ assumes the two coefficients must match, which would put $g(2) = \\frac{4}{9}$, nowhere near $36$ ✗.)',
    },
  ],

  // c2 — annual compounding over two years, kept well away from the section
  //      slots by moving the principal, the rate AND the question. v1 and v2
  //      ask for the balance at fresh rates, v3 asks for the INTEREST instead.
  [
    {
      q: 'You deposit $\\$1024$ at $25\\%$ compounded annually. What is the balance after $2$ years?',
      choices: ['$\\$1600$', '$\\$1536$', '$\\$1280$', '$\\$2000$'],
      answer: 0,
      solution:
        'Growing by $25\\%$ means multiplying by $1 + \\frac{1}{4} = \\frac{5}{4}$, once for each year. Two years: $1024 \\cdot \\left(\\frac{5}{4}\\right)^2 = 1024 \\cdot \\frac{25}{16} = \\frac{25600}{16} = 1600$, so the balance is $\\$1600$ exactly — the fraction $\\frac{25}{16}$ divides $1024$ with nothing left over, so there are no stray cents. Second route, one year at a time in dollars: $\\$1024 \\to \\$1280 \\to \\$1600$ ✓, since $25\\%$ of $\\$1024$ is $\\$256$ and $25\\%$ of $\\$1280$ is $\\$320$. The second year pays $\\$64$ more than the first, and that extra is interest on the first year’s interest. (THE SIMPLE SUBSTITUTE pays $\\$256$ twice for $1024 + 512 = \\$1536$ ✗. THE LOST PERIOD stops after one year at $\\$1280$ ✗. Choice $\\$2000$ compounds a third time, $1600 \\cdot \\frac{5}{4}$, counting the opening balance as a year of growth ✗.)',
    },
    {
      q: 'A deposit of $\\$6000$ earns $15\\%$ compounded annually. What will the balance be $2$ years later?',
      choices: ['$\\$7800$', '$\\$6900$', '$\\$7935$', '$\\$9125.25$'],
      answer: 2,
      solution:
        'A $15\\%$ year multiplies by $1 + \\frac{15}{100} = \\frac{23}{20}$. Two years: $6000 \\cdot \\left(\\frac{23}{20}\\right)^2 = 6000 \\cdot \\frac{529}{400} = 15 \\cdot 529 = 7935$, so the balance is $\\$7935$ exactly — $400$ divides $6000$ evenly $15$ times, so the answer lands on a whole dollar. Second route year by year: $15\\%$ of $\\$6000$ is $\\$900$, giving $\\$6900$; then $15\\%$ of $\\$6900$ is $\\$1035$, giving $\\$7935$ ✓. (THE SIMPLE SUBSTITUTE pays $\\$900$ both years for $\\$7800$ ✗. THE LOST PERIOD stops at the end of year one with $\\$6900$ ✗. Choice $\\$9125.25$ runs a third year, $7935 \\cdot \\frac{23}{20} = \\$9125.25$, one year more than asked ✗.)',
    },
    {
      q: 'You deposit $\\$2500$ at $12\\%$ compounded annually. How much INTEREST does the account earn in $2$ years?',
      choices: ['$\\$600$', '$\\$3136$', '$\\$300$', '$\\$636$'],
      answer: 3,
      solution:
        'Find the balance, then subtract the deposit, because interest is what the account gained. A $12\\%$ year multiplies by $1 + \\frac{12}{100} = \\frac{28}{25}$, so two years give $2500 \\cdot \\left(\\frac{28}{25}\\right)^2 = 2500 \\cdot \\frac{784}{625} = 4 \\cdot 784 = 3136$. The balance is $\\$3136$ exactly, and the interest is $3136 - 2500 = \\$636$. Second route in dollars, year by year: $12\\%$ of $\\$2500$ is $\\$300$, so the balance is $\\$2800$; then $12\\%$ of $\\$2800$ is $\\$336$, so the balance is $\\$3136$; and the two interest payments add to $300 + 336 = \\$636$ ✓ — the same number from a completely different direction. (THE SIMPLE SUBSTITUTE pays $\\$300$ twice and answers $\\$600$ ✗. Choice $\\$3136$ reports the balance, which includes the original deposit, instead of the interest ✗. Choice $\\$300$ stops after one year’s interest ✗.)',
    },
  ],

  // c3 — a log whose input is below $1$, so the answer must come out negative.
  //      v1 and v2 change base and depth, v3 flips the BASE upside down instead
  //      of the input, which makes the same minus sign appear for a new reason.
  [
    {
      q: 'Evaluate $\\log_3 \\frac{1}{81}$.',
      choices: ['$4$', '$-3$', '$-4$', '$\\frac{1}{4}$'],
      answer: 2,
      solution:
        'The question is: $3$ raised to WHAT power gives $\\frac{1}{81}$? Powers of $3$ climb $3, 9, 27, 81$, so $3^4 = 81$, and a reciprocal needs a negative exponent: $3^{-4} = \\frac{1}{3^4} = \\frac{1}{81}$. So $\\log_3 \\frac{1}{81} = -4$. The sign has to be negative, because $\\frac{1}{81}$ is smaller than $1$ and only negative exponents of a base above $1$ land below $1$. Second route, by converting the other way: write the answer as $y$, so $3^y = \\frac{1}{81}$ means $3^y \\cdot 81 = 1$, that is $3^y \\cdot 3^4 = 3^0$, so $y + 4 = 0$ and $y = -4$ ✓. (Choice $4$ answers $\\log_3 81$ and ignores the reciprocal ✗. Choice $-3$ miscounts the climb, stopping at $3^3 = 27$ ✗. THE SWAPPED EXPONENT puts the reciprocal on the ANSWER instead of on the input, giving $\\frac{1}{4}$ ✗.)',
    },
    {
      q: 'Evaluate $\\log_5 \\frac{1}{125}$.',
      choices: ['$3$', '$-3$', '$-2$', '$\\frac{1}{3}$'],
      answer: 1,
      solution:
        'Ask the log’s question: $5$ to what power gives $\\frac{1}{125}$? Since $5^3 = 125$, the reciprocal takes the opposite exponent: $5^{-3} = \\frac{1}{125}$, so the value is $-3$. Second route, checking the conversion by raising the base: $5^{-3} = \\frac{1}{5^3} = \\frac{1}{5 \\cdot 5 \\cdot 5} = \\frac{1}{125}$ ✓ — the exponential twin is exactly the number we started with, so the sign and the size are both right. (Choice $3$ answers $\\log_5 125$, forgetting that the input is upside down ✗. Choice $-2$ miscounts and uses $5^2 = 25$ ✗. THE SWAPPED EXPONENT writes the reciprocal on the answer, giving $\\frac{1}{3}$ ✗.)',
    },
    {
      q: 'Evaluate $\\log_{1/2} 8$.',
      choices: ['$\\frac{1}{3}$', '$-\\frac{1}{3}$', '$3$', '$-3$'],
      answer: 3,
      solution:
        'This time the BASE is the fraction, so the question is: $\\frac{1}{2}$ raised to what power gives $8$? Repeated halving only shrinks, so the exponent must be negative. Test it: $\\left(\\frac{1}{2}\\right)^{-3} = \\left(\\frac{2}{1}\\right)^{3} = 8$ ✓, because a negative exponent flips the base over. So $\\log_{1/2} 8 = -3$. Second route, all in base $2$: let $\\left(\\frac{1}{2}\\right)^{y} = 8$. Since $\\frac{1}{2} = 2^{-1}$, the left side is $2^{-y}$, and $8 = 2^3$, so $-y = 3$ and $y = -3$ ✓. (Choice $3$ answers $\\log_2 8$, treating the base as if it were $2$ ✗. Choice $\\frac{1}{3}$ swaps the base and the input, answering $\\log_8 2$ ✗. Choice $-\\frac{1}{3}$ makes both of those mistakes at once ✗.)',
    },
  ],

  // c4 — repeated multiplication where the time step is NOT one unit, so the
  //      number of steps must be computed before the power. v1 quadruples every
  //      3 days, v2 grows fivefold every 4 days, v3 reverses the direction and
  //      asks how long a stated growth takes.
  [
    {
      q: 'A patch of moss covers $7$ square centimetres and quadruples every $3$ days. How many square centimetres does it cover after $12$ days?',
      choices: ['$448$', '$1792$', '$336$', '$28{,}672$'],
      answer: 1,
      solution:
        'Count the steps before touching the power: $12$ days at one quadrupling every $3$ days is $\\frac{12}{3} = 4$ quadruplings. So the area is $7 \\cdot 4^4 = 7 \\cdot 256 = 1792$ square centimetres. Second route, one step at a time: $7 \\to 28 \\to 112 \\to 448 \\to 1792$ ✓ — four multiplications, and the last one lands on the same number ✓. (THE LOST PERIOD stops after three quadruplings at $448$ ✗. Choice $336$ multiplies by $4$ and by $12$ instead of raising $4$ to a power, giving $7 \\cdot 48$ ✗. Choice $28{,}672$ divides the $12$ days by $2$ instead of by $3$, taking six steps: $7 \\cdot 4^6 = 7 \\cdot 4096$ ✗.)',
    },
    {
      q: 'A pond weed covers $6$ square metres and grows fivefold every $4$ days. How many square metres does it cover after $12$ days?',
      choices: ['$3750$', '$150$', '$750$', '$360$'],
      answer: 2,
      solution:
        'First the step count: $\\frac{12}{4} = 3$ growth steps in $12$ days. Then the power: $6 \\cdot 5^3 = 6 \\cdot 125 = 750$ square metres. Second route, walking it out: $6 \\to 30 \\to 150 \\to 750$ ✓, three multiplications by $5$, ending on the same value. (Choice $3750$ uses four steps, dividing $12$ by $3$ instead of by $4$ — the two numbers in the problem are easy to swap, so name them out loud: $12$ days total, $4$ days per step ✗. THE LOST PERIOD stops after two steps at $150$ ✗. Choice $360$ multiplies by $5$ and by $12$, giving $6 \\cdot 60$, instead of raising $5$ to the third power ✗.)',
    },
    {
      q: 'A tank holds $4$ water fleas, and their number grows sixfold every $5$ days. How many water fleas are in the tank after $15$ days?',
      choices: ['$144$', '$864$', '$216$', '$5184$'],
      answer: 1,
      solution:
        'Count the growth steps before touching the numbers: each step takes $5$ days, and $15$ days holds $\\frac{15}{5} = 3$ of them — the exponent counts STEPS, not days. So the population is $4 \\cdot 6^3 = 4 \\cdot 216 = 864$ water fleas. Second route, forward one step at a time: $4 \\to 24 \\to 144 \\to 864$ ✓ — three sixfold jumps, landing on the same number without ever computing a power. (THE LOST STEP stops at day $10$ and answers $4 \\cdot 6^2 = 144$ ✗. Choice $216$ is $6^3$ on its own, forgetting that the tank did not start with a single flea ✗. Choice $5184$ runs one step too many, $4 \\cdot 6^4$, as though $15$ days held four jumps ✗.)',
    },
  ],

  // c5 — working BACKWARD to a principal under sub-annual compounding. Every
  //      variation uses a different rate and a different number of periods, and
  //      none of them is a whole number of years at the section’s rate.
  [
    {
      q: 'An account earns a $20\\%$ annual rate compounded quarterly. After exactly $6$ months it holds $\\$3969$. What was the principal?',
      choices: ['$\\$3780$', '$\\$4167.45$', '$\\$3600$', '$\\$2756.25$'],
      answer: 2,
      solution:
        'Take the compounding apart before doing any arithmetic. Quarterly means four periods a year, so each quarter earns $\\frac{20\\%}{4} = 5\\%$, and $6$ months holds $2$ quarters — the exponent counts PERIODS, not years. So the balance is $P \\cdot \\left(\\frac{21}{20}\\right)^2 = P \\cdot \\frac{441}{400}$. Undo the growth by dividing: $P = 3969 \\cdot \\frac{400}{441} = 9 \\cdot 400 = \\$3600$ exactly, since $441 \\cdot 9 = 3969$. Second route, forward in dollars: $5\\%$ of $\\$3600$ is $\\$180$, giving $\\$3780$; then $5\\%$ of $\\$3780$ is $\\$189$, giving $\\$3969$ ✓ — the stated balance, to the dollar. (THE LOST PERIOD undoes only one quarter, $\\frac{3969}{1.05} = \\$3780$ ✗. Choice $\\$4167.45$ multiplies by $1.05$ instead of dividing, running the account forward when the question looks backward ✗. THE ANNUAL RATE USED AS THE PERIODIC RATE divides by $(1.2)^2$ instead, $\\frac{3969}{1.44} = \\$2756.25$, charging a full year of growth to each quarter ✗.)',
    },
    {
      q: 'An account earns a $20\\%$ annual rate compounded semiannually. After exactly $18$ months it holds $\\$5324$. What was the principal?',
      choices: ['$\\$4840$', '$\\$4400$', '$\\$3726.80$', '$\\$4000$'],
      answer: 3,
      solution:
        'Semiannual means two periods a year, so the periodic rate is $\\frac{20\\%}{2} = 10\\%$, and $18$ months is $3$ half-years — three periods, not one and a half. The balance is therefore $P \\cdot \\left(\\frac{11}{10}\\right)^3 = P \\cdot \\frac{1331}{1000}$. Dividing, $P = 5324 \\cdot \\frac{1000}{1331} = 4 \\cdot 1000 = \\$4000$ exactly, since $1331 \\cdot 4 = 5324$. Second route, forward one period at a time: $\\$4000 \\to \\$4400 \\to \\$4840 \\to \\$5324$ ✓, three jumps of $10\\%$ landing on the stated balance with no cents left over. (THE LOST PERIOD undoes one period and answers $\\$4840$, or two periods and answers $\\$4400$ ✗. THE BACKWARD UNDO takes $30\\%$ off the final balance, $5324 \\cdot 0.7 = \\$3726.80$, adding three periodic rates together instead of dividing by three growth factors ✗.)',
    },
    {
      q: 'An account earns a $16\\%$ annual rate compounded semiannually. After exactly $1$ year it holds $\\$5832$. What was the principal?',
      choices: ['$\\$5400$', '$\\$5000$', '$\\$4898.88$', '$\\$6298.56$'],
      answer: 1,
      solution:
        'Half of $16\\%$ is $8\\%$ per half-year, and one year contains $2$ of those periods, so the balance is $P \\cdot \\left(\\frac{27}{25}\\right)^2 = P \\cdot \\frac{729}{625}$. Undo it: $P = 5832 \\cdot \\frac{625}{729} = 8 \\cdot 625 = \\$5000$ exactly, since $729 \\cdot 8 = 5832$. Second route, forward in dollars: $8\\%$ of $\\$5000$ is $\\$400$, giving $\\$5400$; then $8\\%$ of $\\$5400$ is $\\$432$, giving $\\$5832$ ✓. (THE LOST PERIOD undoes a single half-year and answers $\\$5400$ ✗. THE BACKWARD UNDO subtracts $16\\%$ of the final balance, $5832 \\cdot 0.84 = \\$4898.88$ ✗. Choice $\\$6298.56$ is $5832 \\cdot 1.08$, growing the account by one more period instead of unwinding it ✗.)',
    },
  ],

  // c6 — the base and the exponent trade places with the log’s input. v1 hunts a
  //      base from a whole exponent, v2 hunts a base from a NEGATIVE exponent,
  //      v3 hunts a base from a fractional one, so a root has to be taken.
  [
    {
      q: 'If $\\log_b 81 = 4$, what is the base $b$?',
      choices: ['$9$', '$27$', '$4$', '$3$'],
      answer: 3,
      solution:
        'Convert to exponential form immediately, because that form has no mystery in it: $\\log_b 81 = 4$ says exactly $b^4 = 81$. Which number, multiplied by itself four times, gives $81$? Climb the powers of $3$: $3, 9, 27, 81$ — so $3^4 = 81$ and $b = 3$. Second route, by prime factors: $81 = 3 \\cdot 3 \\cdot 3 \\cdot 3$, four equal factors, and four equal factors is precisely what a fourth power is ✓. (Choice $9$ uses the exponent $2$, since $9^2 = 81$, not the required $4$ ✗. Choice $27$ divides $81$ by $3$ instead of taking a fourth root ✗. THE SWAPPED EXPONENT hands back the exponent $4$ as though it were the base ✗.)',
    },
    {
      q: 'If $\\log_b \\frac{1}{25} = -2$, what is the base $b$?',
      choices: ['$\\frac{1}{5}$', '$\\frac{1}{25}$', '$5$', '$25$'],
      answer: 2,
      solution:
        'Convert first: $\\log_b \\frac{1}{25} = -2$ says exactly $b^{-2} = \\frac{1}{25}$. A negative exponent is a reciprocal, so $\\frac{1}{b^2} = \\frac{1}{25}$, which means $b^2 = 25$ and $b = 5$ — a logarithm base is always a positive number, so $5$ is the base we want. Second route, checking the finished statement: $5^{-2} = \\frac{1}{5^2} = \\frac{1}{25}$ ✓, exactly the input of the log, so the base and the exponent both fit. (Choice $\\frac{1}{5}$ moves the reciprocal onto the base as well, but $\\left(\\frac{1}{5}\\right)^{-2} = 25$, not $\\frac{1}{25}$ ✗. Choice $25$ reads the reciprocal of the input as the base, forgetting the exponent entirely ✗. Choice $\\frac{1}{25}$ hands back the input of the log ✗.)',
    },
    {
      q: 'If $\\log_b 8 = \\frac{3}{2}$, what is the base $b$?',
      choices: ['$2$', '$4$', '$64$', '$12$'],
      answer: 1,
      solution:
        'Convert: $\\log_b 8 = \\frac{3}{2}$ says exactly $b^{3/2} = 8$. A fractional exponent is a root and a power together — the $2$ underneath is a square root, the $3$ on top is a cube. Undo them in the opposite order: cube-root both sides to get $b^{1/2} = 2$, then square to get $b = 4$. Second route, checking forward: $4^{3/2} = \\left(\\sqrt{4}\\right)^3 = 2^3 = 8$ ✓, which is the input of the log, so $b = 4$ really does satisfy the statement. (Choice $2$ ignores the denominator and solves $b^3 = 8$ ✗. Choice $64$ squares $8$ and never takes the cube root ✗. Choice $12$ multiplies $8$ by $\\frac{3}{2}$, treating the exponent as a factor ✗.)',
    },
  ],

  // c7 — comparing towers of different bases. v1 rewrites over a common BASE,
  //      v2 does the same but asks for the SMALLEST, and v3 has no common base
  //      available, so a common EXPONENT is the way through.
  [
    {
      q: 'Which of these numbers has the greatest value?',
      choices: ['$25^8$', '$125^5$', '$5^{18}$', '$625^3$'],
      answer: 2,
      solution:
        'Never compare towers by eye — rewrite them all over one base, here base $5$. $25 = 5^2$, so $25^8 = \\left(5^2\\right)^8 = 5^{16}$. $125 = 5^3$, so $125^5 = \\left(5^3\\right)^5 = 5^{15}$. $625 = 5^4$, so $625^3 = \\left(5^4\\right)^3 = 5^{12}$. The fourth is already $5^{18}$. Now the comparison is just a list of exponents: $18 > 16 > 15 > 12$, so $5^{18}$ is the largest. Second route, by counting factors of $5$ directly: $25^8$ is eight copies of $5 \\cdot 5$, which is $16$ fives; $125^5$ is five copies of three fives, which is $15$ fives; $625^3$ is three copies of four fives, which is $12$ fives; and $5^{18}$ is $18$ fives ✓ — the same ordering, arrived at without any exponent rule. (Choice $625^3$ tempts a reader who compares the visible bases and picks the biggest one ✗. Choice $125^5$ tempts a reader who compares base and exponent by size at a glance ✗. Choice $25^8$ has the largest exponent among the rewritten losers but still falls short of $18$ ✗.)',
    },
    {
      q: 'Which of these numbers is the SMALLEST?',
      choices: ['$2^{35}$', '$4^{18}$', '$8^{11}$', '$16^8$'],
      answer: 3,
      solution:
        'Every base here is a power of $2$, so put them all in base $2$ before comparing. $4^{18} = \\left(2^2\\right)^{18} = 2^{36}$. $8^{11} = \\left(2^3\\right)^{11} = 2^{33}$. $16^8 = \\left(2^4\\right)^8 = 2^{32}$. The first is already $2^{35}$. Lining the exponents up: $32 < 33 < 35 < 36$, so the smallest number is $16^8$. Second route, counting twos: $16^8$ is eight copies of four twos, $4 \\cdot 8 = 32$ twos; $8^{11}$ is eleven copies of three twos, $33$ twos; $4^{18}$ is eighteen copies of two twos, $36$ twos ✓ — the same four counts, so the ordering is confirmed without touching a power rule. (Choice $8^{11}$ is the runner-up and catches anyone who stops after one comparison ✗. Choice $4^{18}$ is in fact the LARGEST of the four, and it tempts a reader who assumes the smallest base wins ✗. Choice $2^{35}$ tempts a reader who picks the smallest visible base ✗.)',
    },
    {
      q: 'Which of these four numbers is the largest?',
      choices: ['$2^{60}$', '$3^{40}$', '$5^{20}$', '$6^{20}$'],
      answer: 1,
      solution:
        'These bases share no common base to rewrite into, so use the other move: give them all a COMMON EXPONENT. Every exponent here is a multiple of $20$. $2^{60} = \\left(2^3\\right)^{20} = 8^{20}$ and $3^{40} = \\left(3^2\\right)^{20} = 9^{20}$, while $5^{20}$ and $6^{20}$ already carry the exponent $20$. Now only the bases differ: $9 > 8 > 6 > 5$, so $9^{20}$ is the biggest, which means $3^{40}$ is the answer. Second route, a head-to-head between the two front-runners: compare $2^{60}$ and $3^{40}$ by taking a twentieth of each tower — $2^3 = 8$ against $3^2 = 9$ — and since $9 > 8$, the same $20$-fold repetition keeps $3^{40}$ ahead ✓. (Choice $2^{60}$ tempts a reader who compares exponents only, since $60$ is the largest number on the page ✗. Choice $6^{20}$ tempts a reader who compares bases only ✗. Choice $5^{20}$ is the smallest of the four and loses on both counts ✗.)',
    },
  ],

  // c8 — the gap between compound and simple interest on the same deposit. v1
  //      widens the rate over two years, v2 runs three years so the gap has two
  //      sources, v3 reverses: the gap is given and the principal is hunted.
  [
    {
      q: 'You deposit $\\$2000$ at $30\\%$ for $2$ years. How much MORE does annual compounding earn than simple interest?',
      choices: ['$\\$180$', '$\\$0$', '$\\$600$', '$\\$1380$'],
      answer: 0,
      solution:
        'Work out both accounts in full. Simple interest pays $30\\%$ of the original $\\$2000$ every year, that is $\\$600$ a year, so after $2$ years the balance is $2000 + 1200 = \\$3200$. Compound interest multiplies by $\\frac{13}{10}$ each year: $2000 \\cdot \\left(\\frac{13}{10}\\right)^2 = 2000 \\cdot \\frac{169}{100} = \\$3380$. The gap is $3380 - 3200 = \\$180$. Second route, naming where the extra money comes from: the only difference is the second year’s interest on the FIRST year’s interest, which is $30\\%$ of $\\$600 = \\$180$ ✓ — the same number, and now with a reason attached. (Choice $\\$0$ is the year-one answer, where the two accounts do tie, applied to the wrong year ✗. Choice $\\$600$ reports one year of simple interest instead of the gap ✗. Choice $\\$1380$ reports all the compound interest earned, $3380 - 2000$, rather than the difference between the two accounts ✗.)',
    },
    {
      q: 'You deposit $\\$4000$ at $5\\%$ for $3$ years. How much MORE does annual compounding earn than simple interest?',
      choices: ['$\\$0$', '$\\$600$', '$\\$630.50$', '$\\$30.50$'],
      answer: 3,
      solution:
        'Simple interest pays $5\\%$ of $\\$4000$, which is $\\$200$, in each of the $3$ years, so its balance is $4000 + 600 = \\$4600$. Compound interest multiplies by $\\frac{21}{20}$ three times: $4000 \\cdot \\left(\\frac{21}{20}\\right)^3 = 4000 \\cdot \\frac{9261}{8000} = \\frac{9261}{2} = \\$4630.50$ — exact to the cent, since $9261$ is odd and halving it lands on $50$ cents. The gap is $4630.50 - 4600 = \\$30.50$. Second route, year by year in dollars: $\\$4000 \\to \\$4200 \\to \\$4410 \\to \\$4630.50$, so the three interest payments are $\\$200$, $\\$210$ and $\\$220.50$, totalling $\\$630.50$ against simple interest’s $\\$600$, a gap of $\\$30.50$ ✓. (Choice $\\$0$ uses the one-year tie in a three-year question ✗. Choice $\\$600$ reports the simple interest total ✗. Choice $\\$630.50$ reports the compound interest total, forgetting to subtract what simple interest would also have paid ✗.)',
    },
    {
      q: 'A deposit is made at $15\\%$ for $2$ years. Annual compounding earns exactly $\\$45$ more than simple interest would. What was the principal?',
      choices: ['$\\$150$', '$\\$300$', '$\\$2000$', '$\\$1000$'],
      answer: 2,
      solution:
        'Write both balances in terms of the principal $P$. Simple interest gives $P(1 + 2 \\cdot 0.15) = 1.3P$. Compound gives $P(1.15)^2 = P \\cdot \\frac{529}{400} = 1.3225P$. Subtracting, the gap is $1.3225P - 1.3P = 0.0225P$, which is $P$ times $0.15^2$ — the gap is always the second year’s interest ON the first year’s interest. So $0.0225P = 45$ and $P = \\frac{45}{0.0225} = \\$2000$. Second route, running $\\$2000$ forward: simple interest pays $\\$300$ a year for a balance of $\\$2600$, while compounding gives $\\$2000 \\to \\$2300 \\to \\$2645$, and $2645 - 2600 = \\$45$ ✓, exactly the stated gap. (Choice $\\$300$ solves $0.15P = 45$, using one rate where two are needed ✗. Choice $\\$150$ solves $0.3P = 45$, adding the two years’ rates ✗. Choice $\\$1000$ solves $0.045P = 45$, doubling the gap rate as though the extra interest were collected once per year ✗.)',
    },
  ],

  // c9 — an exponential equation whose exponent is an expression, so matching
  //      the powers is only the first of two steps. v1 shifts by subtraction,
  //      v2 stretches the exponent, v3 lands on a fraction so the matched
  //      exponent is negative before the shift is undone.
  [
    {
      q: 'Solve for $x$: $3^{x-2} = 81$.',
      choices: ['$4$', '$6$', '$2$', '$27$'],
      answer: 1,
      solution:
        'Put both sides over the same base so the exponents can be compared: $81 = 3^4$, so the equation is $3^{x-2} = 3^4$. Equal powers of the same base force equal exponents, so $x - 2 = 4$ and $x = 6$. The matched exponent is $4$, but $4$ is not the answer — it is what $x - 2$ equals, and the shift still has to be undone. Second route, by substitution: $3^{6-2} = 3^4 = 81$ ✓, and $x = 4$ would give $3^2 = 9$, which is not $81$ ✗, so $6$ is the only value that works. (Choice $4$ stops at the matched exponent, forgetting the $-2$ ✗. Choice $2$ undoes the shift the wrong way, computing $4 - 2$ instead of $4 + 2$ ✗. Choice $27$ divides $81$ by $3$ rather than comparing exponents ✗.)',
    },
    {
      q: 'Solve for $x$: $5^{2x} = 625$.',
      choices: ['$4$', '$125$', '$2$', '$8$'],
      answer: 2,
      solution:
        'Write the right side as a power of $5$: the powers climb $5, 25, 125, 625$, so $625 = 5^4$ and the equation becomes $5^{2x} = 5^4$. Matching exponents gives $2x = 4$, so $x = 2$. Second route, by substitution: $5^{2 \\cdot 2} = 5^4 = 625$ ✓, while $x = 4$ would give $5^8$, a number far past $625$ ✗. (Choice $4$ reports the matched exponent and forgets that the exponent is $2x$, not $x$ ✗. Choice $8$ multiplies by $2$ where dividing was needed ✗. Choice $125$ divides $625$ by $5$ instead of comparing exponents ✗.)',
    },
    {
      q: 'Solve for $x$: $2^{x+5} = \\frac{1}{8}$.',
      choices: ['$-8$', '$-3$', '$-2$', '$2$'],
      answer: 0,
      solution:
        'The right side is below $1$, so the matched exponent must be negative — that is the first of the two steps. Since $8 = 2^3$, we get $\\frac{1}{8} = 2^{-3}$, and the equation reads $2^{x+5} = 2^{-3}$. Matching exponents: $x + 5 = -3$, so $x = -3 - 5 = -8$. Second route, by substitution: $2^{-8+5} = 2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$ ✓, exactly the right side. (Choice $-3$ reports the matched exponent and never undoes the $+5$ ✗. THE LOST MINUS reads $\\frac{1}{8}$ as $2^3$ and solves $x + 5 = 3$ for $x = -2$ ✗. Choice $2$ gets $x + 5 = -3$ right and then ADDS $5$ to the wrong side, computing $-3 + 5$ ✗.)',
    },
  ],

  // c10 — a log equation solved for its INPUT, always with a negative exponent
  //       so the answer is a small positive number. v1 and v2 change base and
  //       depth, v3 makes the exponent a negative FRACTION, so a root joins the
  //       reciprocal.
  [
    {
      q: 'If $\\log_2 x = -4$, what is $x$?',
      choices: ['$\\frac{1}{16}$', '$-16$', '$-\\frac{1}{16}$', '$\\frac{1}{8}$'],
      answer: 0,
      solution:
        'Convert to exponential form: $\\log_2 x = -4$ says exactly $x = 2^{-4}$. A negative exponent makes a reciprocal, never a negative number: $2^{-4} = \\frac{1}{2^4} = \\frac{1}{16}$. Second route, by counting halvings from $1$: each step down in the exponent halves the value, so from $2^0 = 1$ we get $\\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}, \\frac{1}{16}$ after four steps ✓ — the same answer, and it stays positive the whole way, because halving a positive number never crosses zero. (THE LOST MINUS carries the minus into the answer as $-16$ ✗, or keeps it on the reciprocal as $-\\frac{1}{16}$ ✗. Choice $\\frac{1}{8}$ takes only three halvings ✗.)',
    },
    {
      q: 'If $\\log_3 x = -3$, what is $x$?',
      choices: ['$-27$', '$\\frac{1}{9}$', '$\\frac{1}{27}$', '$-\\frac{1}{27}$'],
      answer: 2,
      solution:
        'Convert: $\\log_3 x = -3$ says exactly $x = 3^{-3}$, and a negative exponent means a reciprocal, so $x = \\frac{1}{3^3} = \\frac{1}{27}$. Second route, checking backwards: does $\\log_3 \\frac{1}{27}$ really equal $-3$? It asks what power of $3$ gives $\\frac{1}{27}$, and $3^{-3} = \\frac{1}{27}$ ✓, so the pair fits together. (THE LOST MINUS answers $-27$, treating the negative exponent as a negative value ✗, or answers $-\\frac{1}{27}$, taking the reciprocal AND keeping the sign ✗. Choice $\\frac{1}{9}$ uses the exponent $-2$ instead of $-3$ ✗.)',
    },
    {
      q: 'If $\\log_{25} x = -\\frac{1}{2}$, what is $x$?',
      choices: ['$5$', '$-5$', '$\\frac{1}{25}$', '$\\frac{1}{5}$'],
      answer: 3,
      solution:
        'Convert: $\\log_{25} x = -\\frac{1}{2}$ says exactly $x = 25^{-1/2}$. Two things are happening at once. The $\\frac{1}{2}$ is a square root: $25^{1/2} = \\sqrt{25} = 5$. The minus sign is a reciprocal: $25^{-1/2} = \\frac{1}{25^{1/2}} = \\frac{1}{5}$. Second route, checking forward: $\\left(\\frac{1}{5}\\right)^{-2} = 5^2 = 25$, so raising $\\frac{1}{5}$ to the power $-2$ returns the base $25$, which is precisely what an exponent of $-\\frac{1}{2}$ means read backwards ✓. (Choice $5$ takes the root and drops the minus ✗. THE LOST MINUS turns the sign into a negative answer, $-5$ ✗. Choice $\\frac{1}{25}$ takes the reciprocal but ignores the $\\frac{1}{2}$, using an exponent of $-1$ ✗.)',
    },
  ],

  // c11 — two percent changes in a row, where the second percent is taken of a
  //       different amount than the first. v1 and v2 combine a fall and a rise,
  //       v3 reverses the direction and asks for the rise that exactly undoes a
  //       given fall.
  [
    {
      q: 'A painting’s value falls $25\\%$ one year, then rises $20\\%$ the next. Where does it end up?',
      choices: [
        'Exactly back at its original value',
        '$5\\%$ below its original value',
        '$5\\%$ above its original value',
        '$10\\%$ below its original value',
      ],
      answer: 3,
      solution:
        'Turn each change into a growth factor and multiply, because the second percent is taken of the NEW amount, not the old one. Down $25\\%$ is $\\times \\frac{3}{4}$; up $20\\%$ is $\\times \\frac{6}{5}$. Together: $\\frac{3}{4} \\cdot \\frac{6}{5} = \\frac{18}{20} = \\frac{9}{10}$, so the value ends at $90\\%$ of the original — a $10\\%$ loss. Second route, with a concrete starting value of $\\$100$: the fall of $25\\%$ takes away $\\$25$, leaving $\\$75$; then the rise of $20\\%$ is $20\\%$ OF $\\$75$, which is $\\$15$, giving $\\$90$ ✓. The two percents are taken of different bases — $\\$100$ and $\\$75$ — which is exactly why they do not cancel. (THE ADDED PERCENTS combines $-25 + 20$ into a $5\\%$ loss ✗, or reads the arithmetic backwards for a $5\\%$ gain ✗. Choice "exactly back" assumes any fall is undone by a later rise ✗.)',
    },
    {
      q: 'A model kit’s price rises $10\\%$ in spring and falls $10\\%$ in autumn. Compared with the price it started at, where does it finish?',
      choices: [
        'Exactly back at its original price',
        '$1\\%$ above its original price',
        '$1\\%$ below its original price',
        '$20\\%$ below its original price',
      ],
      answer: 2,
      solution:
        'Multiply the growth factors: up $10\\%$ is $\\times \\frac{11}{10}$ and down $10\\%$ is $\\times \\frac{9}{10}$, so the pair gives $\\frac{11}{10} \\cdot \\frac{9}{10} = \\frac{99}{100}$ — the price ends at $99\\%$ of the original, a $1\\%$ loss. Second route with real money: start at $\\$100$, rise by $\\$10$ to $\\$110$, then fall by $10\\%$ of $\\$110$, which is $\\$11$, landing at $\\$99$ ✓. The rise was $\\$10$ and the fall was $\\$11$, because the fall was taken of the bigger number — the order matters for the amounts even though the factors multiply either way. (THE ADDED PERCENTS cancels $+10$ against $-10$ and says the price is exactly back ✗. Choice "$1\\%$ above" has the size right and the direction wrong ✗. Choice "$20\\%$ below" subtracts both percents from the original price ✗.)',
    },
    {
      q: 'A collectible loses $60\\%$ of its value. By what percent must its value then rise to return exactly to what it was?',
      choices: ['$60\\%$', '$150\\%$', '$250\\%$', '$40\\%$'],
      answer: 1,
      solution:
        'The fall multiplies the value by $1 - \\frac{60}{100} = \\frac{2}{5}$. To get back to where it started, the rise must multiply by the reciprocal, $\\frac{5}{2} = 2.5$. A multiplier of $2.5$ means keeping the whole amount and adding another $1.5$ times it, so the rise is $150\\%$. Second route, with a concrete $\\$100$: the fall leaves $\\$40$, and getting back to $\\$100$ means gaining $\\$60$ — but that $\\$60$ is measured against the NEW base of $\\$40$, and $\\frac{60}{40} = 1.5$, a rise of $150\\%$ ✓. That is why the two percents differ so much: the $60\\%$ was taken of $\\$100$ and the $150\\%$ is taken of $\\$40$. (Choice $60\\%$ matches the percents, which would only bring $\\$40$ up to $\\$64$ ✗. Choice $250\\%$ reports the whole multiplier $2.5$ as if it were the percent increase ✗. Choice $40\\%$ reports the fraction that survived the fall ✗.)',
    },
  ],

  // c12 — logs that are ugly alone and tidy together, so the product rule has to
  //       be spotted first. v1 and v2 pair a whole number with a fraction in a
  //       new base, v3 stretches the same idea to THREE terms, one of which is
  //       the freebie $\log_b b = 1$.
  [
    {
      q: 'Evaluate $\\log_4 32 + \\log_4 2$.',
      choices: ['$64$', '$3$', '$6$', '$34$'],
      answer: 1,
      solution:
        'Neither piece is a whole number on its own, so use the rule that turns a sum of logs into the log of a PRODUCT: $\\log_4 32 + \\log_4 2 = \\log_4 (32 \\cdot 2) = \\log_4 64$. Now ask the log’s question: $4$ to what power gives $64$? Since $4^3 = 64$, the answer is $3$. Second route, evaluating each log separately with fractional exponents: $4^{5/2} = \\left(\\sqrt{4}\\right)^5 = 2^5 = 32$, so $\\log_4 32 = \\frac{5}{2}$; and $4^{1/2} = 2$, so $\\log_4 2 = \\frac{1}{2}$. Adding: $\\frac{5}{2} + \\frac{1}{2} = 3$ ✓ — the two routes agree exactly, with no rounding anywhere. (Choice $64$ stops at the product and never takes the log ✗. Choice $34$ ADDS the two inputs, $32 + 2$, which is the rule pointed backwards — logs turn products into sums, not sums into sums ✗. Choice $6$ answers $\\log_2 64$, slipping back to base $2$ out of habit ✗.)',
    },
    {
      q: 'Evaluate $\\log_2 20 + \\log_2 \\frac{8}{5}$.',
      choices: ['$32$', '$4$', '$5$', '$160$'],
      answer: 2,
      solution:
        'Collapse the sum into one log of a product: $\\log_2 20 + \\log_2 \\frac{8}{5} = \\log_2 \\left(20 \\cdot \\frac{8}{5}\\right) = \\log_2 32$, since $\\frac{20 \\cdot 8}{5} = \\frac{160}{5} = 32$. And $2^5 = 32$, so the value is $5$. Second route, splitting each log instead of combining them: $20 = 4 \\cdot 5$, so $\\log_2 20 = 2 + \\log_2 5$; and $\\frac{8}{5}$ has $\\log_2 \\frac{8}{5} = 3 - \\log_2 5$. Adding, the two copies of $\\log_2 5$ cancel and leave $2 + 3 = 5$ ✓ — the messy piece disappears either way. (Choice $32$ reports the product without taking the log ✗. Choice $160$ multiplies $20$ by $8$ and forgets to divide by $5$ ✗. Choice $4$ miscounts the doublings, as though $2^4$ were $32$ ✗.)',
    },
    {
      q: 'Evaluate $\\log_3 45 + \\log_3 \\frac{9}{5}$.',
      choices: ['$4$', '$81$', '$3$', '$5$'],
      answer: 0,
      solution:
        'Neither piece is a whole number on its own, and one of them is a fraction, so combine them into a single log of a PRODUCT: $\\log_3 45 + \\log_3 \\frac{9}{5} = \\log_3 \\left(45 \\cdot \\frac{9}{5}\\right)$. The $5$ underneath cancels into the $45$ before anything is multiplied out: $\\frac{45}{5} = 9$, so the product is $9 \\cdot 9 = 81$. Now ask the log’s question: $3$ to what power gives $81$? Climb the powers of $3$: $3, 9, 27, 81$ — that is $3^4 = 81$, so the answer is $4$. Second route, splitting each log instead of combining them: $45 = 9 \\cdot 5$, so $\\log_3 45 = 2 + \\log_3 5$; and $\\log_3 \\frac{9}{5} = 2 - \\log_3 5$. Adding those, the two copies of $\\log_3 5$ cancel and leave $2 + 2 = 4$ ✓ — the awkward piece disappears either way, which is exactly why the fraction was safe to carry. (Choice $81$ hands back the product instead of the exponent it needs ✗. Choice $3$ stops one power short, as though $3^3$ were $81$ — it is $27$ ✗. Choice $5$ takes one power too many, as though $3^4$ were only $27$; in fact $3^5 = 243$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 19,
  challenge,
}
