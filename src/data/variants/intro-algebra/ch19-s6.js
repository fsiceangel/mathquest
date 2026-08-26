// Introduction to Algebra chapter 19 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` STRING, and a solution. Nothing is offered to pick from, so the
//    whole teaching load sits in the solution. There are no `choices` keys in
//    this file, and no `answer` is a bare number.
//  - EVERY key was worked out by hand and then confirmed a SECOND, independent
//    way, and the second route is written into the solution. The standard
//    confirmations here: an exponential value is checked by climbing the ladder
//    one multiplication at a time instead of computing the power first; a
//    logarithm is checked by raising the base to the answer and landing back on
//    the number inside; a missing coefficient is checked by dividing the given
//    output back down through the base and by rebuilding the given fact; every
//    balance is checked by exact fraction arithmetic, so a growth factor of
//    $5\%$ is the fraction $\frac{21}{20}$ and never a decimal that might not
//    terminate; a required percent change is checked on a concrete price.
//  - Money is EXACT to the cent, always. Each interest solution shows the
//    fraction computation that proves the cents terminate.
//  - A variation changes the numbers AND, where it makes sense, the direction:
//    hand over the balance and ask for the number of years, hand over the log
//    and ask for the exponential form, ask what percent RISE undoes a fall.
//  - Seven traps run through the file. THE EXPONENT AS A FACTOR: reading
//    $3 \cdot 5^3$ as $3 \cdot 5 \cdot 3$, multiplying by the exponent instead
//    of raising to it. THE COEFFICIENT DRAGGED UPSTAIRS: reading $3 \cdot 5^3$
//    as $(3 \cdot 5)^3$, when the exponent belongs to the base alone. THE
//    FLIPPED LOG: answering $\log_4 8$ when $\log_8 4$ was asked, which returns
//    the reciprocal. THE MISSING PRINCIPAL: reporting the interest earned as if
//    it were the balance. THE RATE THAT FORGOT TO SHRINK: charging the full
//    annual rate in every half-year period. THE PERIOD COUNT: using the number
//    of YEARS as the exponent when the account compounds more often than yearly.
//    THE MATCHED PERCENT: undoing a rise with a fall of the same percent, when
//    the two percents are taken of different amounts.
//  - Nothing here is settled by how an answer looks. Every claim is settled by
//    a second computation that has to agree.

const worksheet = [
  // w1 — evaluate a coefficient times a power. Three different bases, three
  //      different inputs, and every key confirmed by climbing the ladder one
  //      multiplication at a time.
  [
    {
      q: 'Let $f(x) = 3 \\cdot 5^x$. Compute $f(3)$.',
      answer: '$375$',
      solution:
        'Power first, then multiply. The exponent belongs to the $5$ alone, so $5^3 = 5 \\cdot 5 \\cdot 5 = 125$, and then $f(3) = 3 \\cdot 125 = 375$. Second check by a different route — climb the ladder one step at a time, since each step up in $x$ multiplies the output by $5$: $f(0) = 3$, $f(1) = 15$, $f(2) = 75$, $f(3) = 375$ ✓. Same number, and the arithmetic never built $5^3$ at all. Two traps. THE EXPONENT AS A FACTOR reads the problem as $3 \\cdot 5 \\cdot 3 = 45$ ✗ — that multiplies by the exponent instead of raising to it. THE COEFFICIENT DRAGGED UPSTAIRS reads it as $(3 \\cdot 5)^3 = 15^3 = 3375$ ✗ — the $3$ out front is a passenger, not part of the base.',
    },
    {
      q: 'Let $h(x) = 7 \\cdot 4^x$. Compute $h(2)$.',
      answer: '$112$',
      solution:
        'Handle the power before the coefficient: $4^2 = 16$, so $h(2) = 7 \\cdot 16 = 112$. Second check by the ladder, where each step multiplies by $4$: $h(0) = 7$, $h(1) = 28$, $h(2) = 112$ ✓ — and notice $h(0) = 7$ lands on the coefficient, which is exactly what $4^0 = 1$ promises. Two traps. Reading it as $(7 \\cdot 4)^2 = 28^2 = 784$ drags the coefficient into the base ✗. Reading it as $7 \\cdot 4 \\cdot 2 = 56$ treats the exponent as one more factor ✗. An exponent of $2$ means TWO fours, not a doubling of one four.',
    },
    {
      q: 'Let $g(x) = 2 \\cdot 6^x$. Compute $g(3)$.',
      answer: '$432$',
      solution:
        'The power comes first: $6^3 = 6 \\cdot 6 \\cdot 6 = 216$, and $g(3) = 2 \\cdot 216 = 432$. Second check by the ladder, multiplying by $6$ at each step: $g(0) = 2$, $g(1) = 12$, $g(2) = 72$, $g(3) = 432$ ✓. Two traps. Writing $2 \\cdot 6 \\cdot 3 = 36$ multiplies by the exponent ✗, and it should look suspicious that the answer came out smaller than $6^3$ on its own. Writing $(2 \\cdot 6)^3 = 12^3 = 1728$ raises the coefficient too ✗. That answer is $4$ times too big, because the single factor of $2$ got cubed along for the ride into $2^3 = 8$.',
    },
  ],

  // w2 — evaluate a whole-number logarithm. The second route always raises the
  //      base to the answer, and the divide-down route counts the factors in a
  //      way that makes the off-by-one impossible.
  [
    {
      q: 'Evaluate $\\log_7 343$.',
      answer: '$3$',
      solution:
        'A logarithm asks one question: $7$ to WHAT power gives $343$? Build the powers of $7$: $7^1 = 7$, $7^2 = 49$, $7^3 = 343$. The exponent is $3$, so $\\log_7 343 = 3$. Second check by dividing back down, which counts the sevens hiding inside $343$: $343 \\div 7 = 49$, $49 \\div 7 = 7$, $7 \\div 7 = 1$ — three divisions to reach $1$, so $343$ is made of exactly three factors of $7$ ✓. Two traps. Answering $49$ reports a POWER of $7$ instead of the exponent that produced $343$ ✗; a logarithm is always the little number upstairs. And THE FLIPPED LOG answers $\\log_{343} 7$, which is $\\frac{1}{3}$ ✗, since $343^{1/3} = 7$ — the base sits under the log, and swapping it turns the answer upside down.',
    },
    {
      q: 'Evaluate $\\log_5 625$.',
      answer: '$4$',
      solution:
        'Ask: $5$ to what power gives $625$? List the powers: $5^1 = 5$, $5^2 = 25$, $5^3 = 125$, $5^4 = 625$. So $\\log_5 625 = 4$. Second check by splitting the power a different way: $5^4 = 5^2 \\cdot 5^2 = 25 \\cdot 25 = 625$ ✓ — two twenty-fives multiply to $625$ without ever counting up the list. The trap is an off-by-one from counting ARROWS instead of factors: the chain $5 \\to 25 \\to 125 \\to 625$ has three arrows, which tempts the answer $3$ ✗, but $5^3 = 125$, not $625$. Start the count at $5^1 = 5$, so the very first $5$ already counts, and the total is $4$.',
    },
    {
      q: 'Evaluate $\\log_3 243$.',
      answer: '$5$',
      solution:
        'Ask: $3$ to what power gives $243$? Climb the powers of $3$: $3, 9, 27, 81, 243$ — that is $3^1$ through $3^5$, so $\\log_3 243 = 5$. Second check by dividing back down to $1$: $243 \\div 3 = 81$, $81 \\div 3 = 27$, $27 \\div 3 = 9$, $9 \\div 3 = 3$, $3 \\div 3 = 1$ — five divisions, so $243$ holds exactly five factors of $3$ ✓. Two traps. Answering $81$ hands back a power of $3$ rather than the exponent ✗. And answering $\\frac{243}{3} = 81$ treats the log as a division ✗ — a logarithm never divides the two numbers, it asks how many times the base must be MULTIPLIED by itself.',
    },
  ],

  // w3 — simple interest, where the same amount lands every single year. The
  //      last variation runs backwards: the balance is given and the number of
  //      years is missing.
  [
    {
      q: 'You deposit $\\$700$ at $6\\%$ simple interest per year. What is the balance after $5$ years?',
      answer: '$\\$910$',
      solution:
        'Simple interest pays on the ORIGINAL deposit every year, never on the interest already earned. One year pays $6\\%$ of $\\$700$, which is $\\frac{6}{100} \\cdot 700 = \\$42$. Five years pay $5 \\cdot \\$42 = \\$210$, so the balance is $700 + 210 = \\$910$. Second check by the formula $P(1 + rt)$, which does the same arithmetic in one stroke and in a different order: $rt = \\frac{6}{100} \\cdot 5 = \\frac{3}{10}$, so the balance is $700 \\cdot \\frac{13}{10} = \\frac{9100}{10} = \\$910$ ✓ — the fraction has a denominator of $10$ dividing a multiple of $10$, so the cents are exactly zero. THE MISSING PRINCIPAL is the trap: answering $\\$210$, the interest earned, when the question asked for the BALANCE ✗. Stopping after one year and answering $\\$742$ is the other ✗ — the deposit sat for five years, and every one of them paid $\\$42$.',
    },
    {
      q: 'You deposit $\\$1200$ at $4\\%$ simple interest per year. What is the balance after $3$ years?',
      answer: '$\\$1344$',
      solution:
        'Each year pays $4\\%$ of the original $\\$1200$: $\\frac{4}{100} \\cdot 1200 = \\$48$. Three years pay $3 \\cdot \\$48 = \\$144$, so the balance is $1200 + 144 = \\$1344$. Second check by the formula $P(1 + rt)$ in exact fractions: $rt = \\frac{4}{100} \\cdot 3 = \\frac{3}{25}$, so the balance is $1200 \\cdot \\frac{28}{25} = \\frac{33600}{25} = \\$1344$ ✓, an exact whole number of dollars because $25$ divides $33600$ evenly. Two traps. Answering $\\$144$ reports the interest and forgets the principal ✗. And sliding the decimal point — reading $4\\%$ as $0.4$ and charging $\\$480$ a year — gives $\\$2640$ ✗, more than double the deposit; $4\\%$ means $4$ per hundred, so $\\$1200$ earns $12 \\cdot \\$4 = \\$48$.',
    },
    {
      q: 'You deposit $\\$800$ at $7\\%$ simple interest per year. After how many years does the balance reach $\\$1024$?',
      answer: '$4$ years',
      solution:
        'Find the yearly payment first: $7\\%$ of $\\$800$ is $\\frac{7}{100} \\cdot 800 = \\$56$, and simple interest pays that same $\\$56$ every year. The account must GROW by $1024 - 800 = \\$224$, so the number of years is $\\frac{224}{56} = 4$. Second check by walking forward year by year: $\\$800 \\to \\$856 \\to \\$912 \\to \\$968 \\to \\$1024$ ✓ — four steps, and $\\$1024$ arrives on the fourth, exactly as claimed. The trap is dividing before subtracting: $\\frac{1024}{56}$ is not a whole number at all ✗, and it is the wrong quantity to divide, since the first $\\$800$ of the balance was never earned — it was deposited. Subtract the principal, THEN divide by the yearly interest.',
    },
  ],

  // w4 — compound interest, annually. Every balance is confirmed by an exact
  //      fraction, and every solution prices the gap against simple interest so
  //      the interest-on-interest is a number, not a slogan.
  [
    {
      q: 'You deposit $\\$700$ at $20\\%$ compounded annually. What is the balance after $2$ years?',
      answer: '$\\$1008$',
      solution:
        'Compounding means each year multiplies the balance by $1 + r$, and here $1 + 0.20 = 1.2$. Year by year: $700 \\cdot 1.2 = \\$840$, then $840 \\cdot 1.2 = \\$1008$. Second check by exact fractions, which keeps every digit honest: $20\\% = \\frac{1}{5}$, so the growth factor is $\\frac{6}{5}$ and the balance is $700 \\cdot \\left(\\frac{6}{5}\\right)^2 = 700 \\cdot \\frac{36}{25} = 28 \\cdot 36 = \\$1008$ ✓ — a whole number of dollars, since $25$ divides $700$ exactly $28$ times. The trap is charging simple interest: $20\\%$ of $\\$700$ is $\\$140$ a year, giving $700 + 280 = \\$980$ ✗. The missing $\\$28$ is precisely $20\\%$ of the first year’s $\\$140$ — the interest that the interest itself earned.',
    },
    {
      q: 'You deposit $\\$1300$ at $10\\%$ compounded annually. What is the balance after $3$ years?',
      answer: '$\\$1730.30$',
      solution:
        'Multiply by $1.1$ once per year: $1300 \\cdot 1.1 = \\$1430$, then $1430 \\cdot 1.1 = \\$1573$, then $1573 \\cdot 1.1 = \\$1730.30$. Second check by exact fractions, which also proves the cents terminate: $10\\% = \\frac{1}{10}$, so the factor is $\\frac{11}{10}$ and the balance is $1300 \\cdot \\left(\\frac{11}{10}\\right)^3 = 1300 \\cdot \\frac{1331}{1000} = \\frac{17303}{10} = \\$1730.30$ ✓ — dividing by $10$ moves the decimal one place and stops, so the balance lands exactly on a cent with nothing left over. The trap is adding the percents: $10\\% \\times 3 = 30\\%$ applied once gives $\\$1690$ ✗, which is the simple-interest balance. Growth factors MULTIPLY, and the extra $\\$40.30$ is the interest that years two and three paid on the earlier interest.',
    },
    {
      q: 'You deposit $\\$4000$ at $15\\%$ compounded annually. What is the balance after $2$ years?',
      answer: '$\\$5290$',
      solution:
        'Each year multiplies the balance by $1.15$: $4000 \\cdot 1.15 = \\$4600$, then $4600 \\cdot 1.15 = \\$5290$. Second check by exact fractions: $15\\% = \\frac{3}{20}$, so the factor is $\\frac{23}{20}$ and the balance is $4000 \\cdot \\left(\\frac{23}{20}\\right)^2 = 4000 \\cdot \\frac{529}{400} = 10 \\cdot 529 = \\$5290$ ✓, a whole number of dollars because $400$ divides $4000$ exactly $10$ times. The trap is simple interest: $15\\%$ of $\\$4000$ is $\\$600$ a year, giving $4000 + 1200 = \\$5200$ ✗. The gap of $\\$90$ is exactly $15\\%$ of the first year’s $\\$600$, which is the whole point of compounding — in year two, the interest earned interest of its own.',
    },
  ],

  // w5 — the two costumes of one fact. One conversion each way, and a negative
  //      exponent in the third so the log comes out negative.
  [
    {
      q: 'Rewrite the equation $2^{10} = 1024$ in logarithmic form.',
      answer: '$\\log_2 1024 = 10$',
      solution:
        'The two forms $b^x = y$ and $\\log_b y = x$ say the same thing, so match the parts one at a time. The base of the power is $2$, so it becomes the base of the log. The result is $1024$, so it goes inside the log. The exponent is $10$, so it is what the log EQUALS: $\\log_2 1024 = 10$. Second check by evaluating the finished log from scratch, without looking at the original equation — count the doublings: $2, 4, 8, 16, 32, 64, 128, 256, 512, 1024$, which is ten of them, so $\\log_2 1024$ really is $10$ ✓. Two traps. Writing $\\log_2 10 = 1024$ swaps the exponent with the result ✗ — read it aloud and it claims $2^{1024} = 10$, a number with over three hundred digits. And writing $\\log_{1024} 2 = 10$ swaps the base with the result ✗, claiming $1024^{10} = 2$.',
    },
    {
      q: 'Rewrite the equation $\\log_8 512 = 3$ in exponential form.',
      answer: '$8^3 = 512$',
      solution:
        'This one runs the other way. In $\\log_b y = x$, the base $b$ stays the base, the value the log EQUALS becomes the exponent, and the number inside the log is the result: $8^3 = 512$. Second check by computing that power independently: $8 \\cdot 8 = 64$ and $64 \\cdot 8 = 512$ ✓, so the equation is true as written. The trap is swapping the base and the exponent to write $3^8 = 512$ ✗. That is a real number, but it is $6561$, not $512$ — a mile away, which is what makes the check worth doing. The base of the log is the base of the power, and the log itself is always the exponent.',
    },
    {
      q: 'Rewrite the equation $5^{-3} = \\frac{1}{125}$ in logarithmic form.',
      answer: '$\\log_5 \\frac{1}{125} = -3$',
      solution:
        'Match the parts exactly as before, and let the minus sign travel with the exponent. The base is $5$, the result is $\\frac{1}{125}$, and the exponent is $-3$, so $\\log_5 \\frac{1}{125} = -3$. Second check by confirming the original power and then reading it as a question: $5^{-3} = \\frac{1}{5^3} = \\frac{1}{125}$ ✓, and asking "$5$ to what power gives $\\frac{1}{125}$?" has the single answer $-3$ ✓. The trap is dropping the minus and writing $\\log_5 \\frac{1}{125} = 3$ ✗ — test it: $5^3 = 125$, which is the reciprocal of what we wanted. Numbers below $1$ have NEGATIVE logs, and the fraction inside the log is the tell.',
    },
  ],

  // w6 — the coefficient is missing and one output is handed over. The unknown
  //      is always the starting value out front, never the base, and every key
  //      is confirmed by dividing the output back down through the base.
  [
    {
      q: 'An exponential function $f(x) = a \\cdot 3^x$ satisfies $f(4) = 324$. Find $a$.',
      answer: '$a = 4$',
      solution:
        'Substitute $x = 4$ and leave $a$ standing: $f(4) = a \\cdot 3^4 = 81a$. Setting that equal to the given output, $81a = 324$, so $a = \\frac{324}{81} = 4$. Second check by a different route — walk the ladder backwards, since every step down in $x$ divides by $3$, and four steps down from $f(4)$ must land on $f(0) = a$: $324 \\to 108 \\to 36 \\to 12 \\to 4$ ✓. Rebuilding the given fact confirms it once more: $4 \\cdot 3^4 = 4 \\cdot 81 = 324$ ✓, exactly what the question stated. The trap is dividing by the INPUT instead of the power: $\\frac{324}{4} = 81$ ✗. Test that coefficient — with $a = 81$ the function would give $f(4) = 81 \\cdot 81 = 6561$, not $324$.',
    },
    {
      q: 'An exponential function $g(x) = a \\cdot 10^x$ satisfies $g(3) = 6000$. Find $a$.',
      answer: '$a = 6$',
      solution:
        'Put $x = 3$ into the rule: $g(3) = a \\cdot 10^3 = 1000a$, and $1000a = 6000$ gives $a = 6$. Second check by stepping the ladder down, dividing by $10$ once per step, three steps from $g(3)$ to $g(0) = a$: $6000 \\to 600 \\to 60 \\to 6$ ✓. Rebuilding the fact confirms it: $6 \\cdot 10^3 = 6 \\cdot 1000 = 6000$ ✓. Two traps. Dividing by the input gives $\\frac{6000}{3} = 2000$ ✗ — with that coefficient the function would reach $2{,}000{,}000$ at $x = 3$. And subtracting instead of dividing gives $6000 - 1000 = 5000$ ✗; the coefficient MULTIPLIES the power, so it is undone by division, never by subtraction.',
    },
    {
      q: 'An exponential function $h(x) = a \\cdot 4^x$ satisfies $h(3) = 192$. Find $a$.',
      answer: '$a = 3$',
      solution:
        'Substitute: $h(3) = a \\cdot 4^3 = 64a$, and $64a = 192$ gives $a = \\frac{192}{64} = 3$. Second check by dividing back down through the base three times, which must land on $h(0) = a$: $192 \\to 48 \\to 12 \\to 3$ ✓. Rebuilding: $3 \\cdot 4^3 = 3 \\cdot 64 = 192$ ✓, matching the given output. Two traps. Dividing by the input gives $\\frac{192}{3} = 64$ ✗ — that is the value of $4^3$, not of the coefficient, and it would send $h(3)$ up to $4096$. And reading the rule as $(4a)^3$ instead of $a \\cdot 4^3$ ✗ puts the coefficient inside the cube, where it does not live: the exponent applies to the $4$ alone.',
    },
  ],

  // w7 — compounding more often than yearly. The rate per period is the annual
  //      rate divided by the periods per year, and the exponent is the NUMBER
  //      OF PERIODS. The third variation runs a year and a half, so the period
  //      count and the year count can no longer be confused.
  [
    {
      q: 'You deposit $\\$2000$ at an $8\\%$ annual rate, compounded semiannually. What is the balance after $1$ year?',
      answer: '$\\$2163.20$',
      solution:
        'Semiannual means twice a year, so the rate per period is $\\frac{8\\%}{2} = 4\\%$, and one year holds $2$ periods. Step by step: $2000 \\cdot 1.04 = \\$2080$, then $2080 \\cdot 1.04 = \\$2163.20$. Second check by exact fractions, which proves the cents terminate: $4\\% = \\frac{1}{25}$, so the factor is $\\frac{26}{25}$ and the balance is $2000 \\cdot \\left(\\frac{26}{25}\\right)^2 = 2000 \\cdot \\frac{676}{625} = \\frac{1352000}{625} = \\$2163.20$ ✓ — and $\\frac{1352000}{625} = 2163 + \\frac{125}{625} = 2163 + \\frac{1}{5}$, an exact $20$ cents. THE RATE THAT FORGOT TO SHRINK is the trap: charging the whole $8\\%$ in each half-year gives $2000 \\cdot (1.08)^2 = \\$2332.80$ ✗, which is really a $16\\%$-a-year account. Compare with annual compounding, $\\$2160$: splitting the year wins by $\\$3.20$, which is $4\\%$ of the mid-year $\\$80$.',
    },
    {
      q: 'You deposit $\\$2500$ at a $4\\%$ annual rate, compounded semiannually. What is the balance after $1$ year?',
      answer: '$\\$2601$',
      solution:
        'Split the rate: $\\frac{4\\%}{2} = 2\\%$ per half-year, and one year holds $2$ periods. Step by step: $2500 \\cdot 1.02 = \\$2550$, then $2550 \\cdot 1.02 = \\$2601$. Second check by exact fractions: $2\\% = \\frac{1}{50}$, so the factor is $\\frac{51}{50}$ and the balance is $2500 \\cdot \\left(\\frac{51}{50}\\right)^2 = 2500 \\cdot \\frac{2601}{2500} = \\$2601$ ✓ — the $2500$ cancels outright, leaving a whole number of dollars with no cents at all. Two traps. Using $4\\%$ twice gives $2500 \\cdot (1.04)^2 = \\$2704$ ✗, an account paying double the advertised rate. Stopping after one period gives $\\$2550$ ✗, which is the balance at the half-year mark. Annual compounding would give $\\$2600$, so semiannual wins by exactly $\\$1$ — the $2\\%$ earned by the mid-year $\\$50$.',
    },
    {
      q: 'You deposit $\\$4000$ at a $20\\%$ annual rate, compounded semiannually. What is the balance after $1.5$ years?',
      answer: '$\\$5324$',
      solution:
        'Two things to get right: the rate per period is $\\frac{20\\%}{2} = 10\\%$, and the number of periods is $2$ per year for $1.5$ years, which is $3$ periods. Step by step: $4000 \\cdot 1.1 = \\$4400$, then $4400 \\cdot 1.1 = \\$4840$, then $4840 \\cdot 1.1 = \\$5324$. Second check by exact fractions: $10\\% = \\frac{1}{10}$, so the factor is $\\frac{11}{10}$ and the balance is $4000 \\cdot \\left(\\frac{11}{10}\\right)^3 = 4000 \\cdot \\frac{1331}{1000} = 4 \\cdot 1331 = \\$5324$ ✓, a whole number of dollars because $1000$ divides $4000$ exactly $4$ times. THE PERIOD COUNT is the trap: using $1.5$ or $2$ as the exponent because the account ran for a year and a half ✗ — stopping at two periods gives $\\$4840$, the balance at the ONE-year mark, half a year early. Count periods, not years.',
    },
  ],

  // w8 — logarithms that come out as fractions. Both numbers are powers of one
  //      small base every time, and the second route raises the base to the
  //      fractional answer to land back on the number inside.
  [
    {
      q: 'Evaluate $\\log_8 4$.',
      answer: '$\\frac{2}{3}$',
      solution:
        'Write both numbers as powers of the same small base: $8 = 2^3$ and $4 = 2^2$. We need the $x$ with $8^x = 4$, which is $(2^3)^x = 2^2$, so $2^{3x} = 2^2$. Matching exponents gives $3x = 2$ and $x = \\frac{2}{3}$. Second check by raising the base to the answer, taking the root before the power: $8^{2/3} = \\left(\\sqrt[3]{8}\\right)^2 = 2^2 = 4$ ✓ — landing exactly on the number inside the log. Two traps. THE FLIPPED LOG answers $\\frac{3}{2}$ ✗, which is $\\log_4 8$, the reverse question: $4^{3/2} = \\left(\\sqrt{4}\\right)^3 = 8$. When the number inside is SMALLER than the base, the log must be less than $1$, and $\\frac{3}{2}$ is not. And answering $\\frac{1}{2}$ because $4$ is half of $8$ ✗ fails its own test: $8^{1/2} = \\sqrt{8}$, which is not $4$.',
    },
    {
      q: 'Evaluate $\\log_{27} 81$.',
      answer: '$\\frac{4}{3}$',
      solution:
        'Both numbers are powers of $3$: $27 = 3^3$ and $81 = 3^4$. Solve $27^x = 81$, which is $(3^3)^x = 3^4$, so $3^{3x} = 3^4$, giving $3x = 4$ and $x = \\frac{4}{3}$. Second check by raising the base to the answer, cube root first: $27^{4/3} = \\left(\\sqrt[3]{27}\\right)^4 = 3^4 = 81$ ✓. Two traps. THE FLIPPED LOG answers $\\frac{3}{4}$ ✗, which is $\\log_{81} 27$; since $81$ is bigger than $27$, the log here must be MORE than $1$, and $\\frac{3}{4}$ is less. And declaring the problem impossible because $27$ does not divide $81$ evenly ✗ misreads the job — a logarithm is not asking how many times $27$ fits into $81$, it is asking what exponent turns one into the other, and fractional exponents are allowed.',
    },
    {
      q: 'Evaluate $\\log_4 32$.',
      answer: '$\\frac{5}{2}$',
      solution:
        'Rewrite both numbers in base $2$: $4 = 2^2$ and $32 = 2^5$. Solve $4^x = 32$, which is $(2^2)^x = 2^5$, so $2^{2x} = 2^5$, giving $2x = 5$ and $x = \\frac{5}{2}$. Second check by raising the base to the answer, square root first: $4^{5/2} = \\left(\\sqrt{4}\\right)^5 = 2^5 = 32$ ✓. A useful sanity read before any of that: $4^2 = 16$ is too small and $4^3 = 64$ is too big, so the answer has to sit between $2$ and $3$ — and $\\frac{5}{2}$ does. Two traps. Answering $8$ divides $32$ by $4$ ✗, and a log is never a quotient. THE FLIPPED LOG answers $\\frac{2}{5}$ ✗, which is $\\log_{32} 4$; that would put the answer below $1$, though we already know it lies between $2$ and $3$.',
    },
  ],

  // w9 — undoing a percent change. The rise and the fall are percents of
  //      DIFFERENT amounts, so every solution names both bases and prices them
  //      on a concrete starting amount. The middle variation reverses the
  //      direction: a fall must be undone by a rise.
  [
    {
      q: 'The price of a sketchbook rises $60\\%$. By what percent must it then fall to return exactly to its original value?',
      answer: '$37.5\\%$',
      solution:
        'A $60\\%$ rise multiplies the price by $1.6 = \\frac{8}{5}$. To land back where it started, the second change must multiply by the RECIPROCAL, $\\frac{5}{8} = 0.625$. Keeping $0.625$ of the price means losing $1 - 0.625 = 0.375$ of it, a fall of $37.5\\%$. Second check on a concrete price, which also shows the two bases side by side: start at $\\$200$; the rise adds $60\\%$ OF $\\$200$, that is $\\$120$, reaching $\\$320$; the fall removes $37.5\\%$ OF $\\$320$, and $0.375 \\cdot 320 = \\$120$, back to $\\$200$ ✓. The same $\\$120$ moves both ways, but it is $60\\%$ of the smaller amount and only $37.5\\%$ of the larger one. THE MATCHED PERCENT is the trap: falling $60\\%$ instead ✗ — that takes $\\$320$ down to $0.4 \\cdot 320 = \\$128$, far below the original $\\$200$, because a $60\\%$ cut is taken from the bigger price.',
    },
    {
      q: 'A scooter’s price falls $75\\%$ in a clearance sale. By what percent must the sale price then rise to return exactly to its original value?',
      answer: '$300\\%$',
      solution:
        'A $75\\%$ fall leaves $25\\%$ of the price, so it multiplies by $\\frac{1}{4}$. Undoing that needs the reciprocal factor $4$, and multiplying by $4$ means keeping the price you have and ADDING three more of it: a rise of $300\\%$. Second check on a concrete price, with both bases named: start at $\\$80$; the sale removes $75\\%$ of $\\$80$, that is $\\$60$, leaving $\\$20$; the rise must add $\\$60$ back, and $\\frac{60}{20} = 3$, so the increase is $3$ times the sale price, which is $300\\%$ ✓. THE MATCHED PERCENT is the trap: raising the sale price by $75\\%$ ✗ gives $20 \\cdot 1.75 = \\$35$, nowhere near $\\$80$ — the $75\\%$ came off the big price and would go back on the small one. A rise of more than $100\\%$ looks startling and is exactly right when a price has been cut to a quarter.',
    },
    {
      q: 'The price of a bag of walnuts rises $150\\%$. By what percent must it then fall to return exactly to its original value?',
      answer: '$60\\%$',
      solution:
        'A $150\\%$ rise adds one and a half times the price to itself, so it multiplies by $2.5 = \\frac{5}{2}$. The undoing factor is the reciprocal $\\frac{2}{5} = 0.4$, and keeping $40\\%$ of the price means losing $60\\%$ of it. Second check on a concrete price, with the two bases in plain view: start at $\\$40$; the rise adds $150\\%$ of $\\$40$, that is $\\$60$, reaching $\\$100$; the fall must remove that same $\\$60$, and $\\frac{60}{100} = 0.6$, a $60\\%$ cut ✓. The identical $\\$60$ is $150\\%$ of the old price and $60\\%$ of the new one — same money, different bases. THE MATCHED PERCENT is the trap, and here it collapses on its own: a $150\\%$ FALL is impossible ✗, since removing $150\\%$ of $\\$100$ would leave $-\\$50$, and a price cannot be negative. No fall can ever exceed $100\\%$.',
    },
  ],

  // w10 — how long until a growing quantity first reaches a target. Every
  //       solution turns the target into a power of the growth factor, then
  //       lists the value at each step and shows the step BEFORE falls short.
  //       The time step is never one unit, so the step count must be converted.
  [
    {
      q: 'A patch of lily pads covers $3$ square feet and triples every $4$ days. After how many days does it first cover $243$ square feet?',
      answer: '$16$ days',
      solution:
        'The patch must grow by a factor of $\\frac{243}{3} = 81$, and $81 = 3^4$, so it takes $4$ triplings. Each tripling costs $4$ days, so the time is $4 \\cdot 4 = 16$ days. Second check by listing every step and watching the target arrive: day $0$, $3$ square feet; day $4$, $9$; day $8$, $27$; day $12$, $81$; day $16$, $243$ ✓. The step before is $81$ square feet on day $12$, which is short of $243$, so day $16$ really is the FIRST time the patch reaches the target. Two traps. Answering $4$ reports the number of triplings and forgets to convert to days ✗ — read the units the question asks for. And dividing to get $\\frac{243}{3} = 81$ days ✗ confuses the growth factor with a length of time; $81$ is how many times bigger, not how long.',
    },
    {
      q: 'A class puzzle video has $12$ viewers, and the number of viewers quadruples every $3$ hours. After how many hours does the count first reach $768$?',
      answer: '$9$ hours',
      solution:
        'The count must grow by a factor of $\\frac{768}{12} = 64$, and $64 = 4^3$, so it takes $3$ quadruplings. Each one costs $3$ hours, so the time is $3 \\cdot 3 = 9$ hours. Second check by listing every step: hour $0$, $12$ viewers; hour $3$, $48$; hour $6$, $192$; hour $9$, $768$ ✓. At hour $6$ the count is only $192$, well short of $768$, so hour $9$ is the first moment the target is met. Two traps. Answering $3$ gives the number of quadruplings rather than the hours ✗. And counting doublings instead of quadruplings ✗ — $64 = 2^6$ would suggest six steps, but each step here multiplies by $4$, not $2$, so the base of the power must match the growth factor the problem states.',
    },
    {
      q: 'A patch of moss covers $2$ square inches and grows fivefold every $2$ weeks. After how many weeks does it first cover $6250$ square inches?',
      answer: '$10$ weeks',
      solution:
        'The required growth factor is $\\frac{6250}{2} = 3125$, and $3125 = 5^5$ (since $5, 25, 125, 625, 3125$), so it takes $5$ growth steps. Each step costs $2$ weeks, so the answer is $5 \\cdot 2 = 10$ weeks. Second check by listing every step: week $0$, $2$ square inches; week $2$, $10$; week $4$, $50$; week $6$, $250$; week $8$, $1250$; week $10$, $6250$ ✓. Week $8$ leaves the patch at $1250$ square inches, short of the target, so week $10$ is the first week it arrives. Two traps. Answering $5$ counts the growth steps and stops before converting to weeks ✗. And reporting $\\frac{5}{2}$ weeks ✗ divides the step count by the length of a step, when each step COSTS $2$ weeks — so the two numbers must be MULTIPLIED, not divided.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 19,
  worksheet,
}
