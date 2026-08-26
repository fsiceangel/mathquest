// Introduction to Algebra chapter 19 — variations for section 19.2
// (Show Me the Money). All problems and solutions are original MathQuest
// content.
//
// House rules for this file:
//  - Every money figure is EXACT to the cent. Each balance was produced by
//    exact fraction arithmetic — $5\%$ is $\frac{21}{20}$, $20\%$ is
//    $\frac{6}{5}$, $25\%$ is $\frac{5}{4}$, $4\%$ is $\frac{26}{25}$, $8\%$
//    is $\frac{27}{25}$, $40\%$ is $\frac{7}{5}$ — and never by a rounded
//    decimal. Nothing in this file is rounded anywhere.
//  - Every key was worked twice by two different routes: once year by year,
//    multiplying the running balance, and once by the closed formula
//    $A = P(1+r)^t$ (or $P(1+rt)$ for simple interest). Both routes are shown
//    in the solution.
//  - "First exceeds" items list the balance at EVERY year up to the answer and
//    show the previous year falling short.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that choice. The traps running
//    through this section are: USING SIMPLE INTEREST WHERE COMPOUNDING IS
//    ASKED, STOPPING A YEAR SHORT, REPORTING THE BALANCE WHEN THE INTEREST WAS
//    ASKED (and its mirror, FORGETTING TO ADD THE PRINCIPAL BACK), MOVING THE
//    PERCENT DECIMAL ONE PLACE INSTEAD OF TWO, TREATING "$5\%$" AS "DIVIDE BY
//    $5$", MULTIPLYING THE ONE-YEAR BALANCE BY THE NUMBER OF YEARS, RAISING
//    THE RATE TO THE POWER INSTEAD OF THE WHOLE GROWTH FACTOR, PAYING THE
//    SECOND YEAR'S INTEREST ONLY ON THE INTEREST, REPORTING TOTAL GROWTH AS
//    THE ANNUAL RATE, HALVING THE TOTAL GROWTH, and FORGETTING TO SUBTRACT THE
//    $1$ FROM A GROWTH FACTOR.
//  - No bank, company, or brand is named anywhere; every account is "a savings
//    account", "the first bank", or "Bank A". These are arithmetic exercises,
//    not advice, and no rate here is claimed to be typical of anything.

const s192 = [
  // p1 — one year of SIMPLE interest is just r percent of the principal.
  [
    {
      q: 'You deposit $\\$600$ in a savings account paying $5\\%$ simple interest per year. How much interest do you earn in the first year?',
      choices: ['$\\$30$', '$\\$120$', '$\\$300$', '$\\$630$'],
      answer: 0,
      solution:
        'One year of simple interest is $5\\%$ of the principal: $5\\%$ means $\\frac{5}{100} = \\frac{1}{20}$, and $\\frac{1}{20}$ of $\\$600$ is $\\frac{600}{20} = \\$30$. Check a second, independent way by splitting the percent into pieces you can do in your head: $10\\%$ of $\\$600$ is $\\$60$, and $5\\%$ is half of that, so $\\$30$ ✓ — the two routes agree exactly. (The choice $\\$120$ is TREATING "$5\\%$" AS "DIVIDE BY $5$", giving $600 \\div 5$; the choice $\\$300$ is MOVING THE PERCENT DECIMAL ONE PLACE INSTEAD OF TWO, turning $5\\%$ into $0.5$; the choice $\\$630$ is REPORTING THE BALANCE when the question asked for the interest alone.)',
    },
    {
      q: 'A savings account holds $\\$5000$ and pays $4\\%$ simple interest per year. How much interest does it earn in the first year?',
      choices: ['$\\$1250$', '$\\$2000$', '$\\$200$', '$\\$5200$'],
      answer: 2,
      solution:
        'Take $4\\%$ of the principal: $\\frac{4}{100} \\cdot 5000 = \\frac{20000}{100} = \\$200$. Check a second, independent way by building the percent from $1\\%$: $1\\%$ of $\\$5000$ is $\\$50$, so $4\\%$ is $4 \\cdot \\$50 = \\$200$ ✓. (The choice $\\$1250$ is TREATING "$4\\%$" AS "DIVIDE BY $4$", giving $5000 \\div 4$; the choice $\\$2000$ is MOVING THE PERCENT DECIMAL ONE PLACE INSTEAD OF TWO, using $0.4$ in place of $0.04$; the choice $\\$5200$ is REPORTING THE BALANCE instead of the interest.)',
    },
    {
      q: 'You put $\\$250$ into an account paying $20\\%$ simple interest per year. How much interest does it earn in the first year?',
      choices: ['$\\$12.50$', '$\\$50$', '$\\$300$', '$\\$500$'],
      answer: 1,
      solution:
        'One year of simple interest is $20\\%$ of $\\$250$, and $20\\% = \\frac{1}{5}$, so the interest is $\\frac{250}{5} = \\$50$. Check a second, independent way with the formula $I = P \\cdot r \\cdot t$ at $t = 1$: $I = 250 \\cdot 0.2 \\cdot 1 = \\$50$ ✓. (The choice $\\$12.50$ is TREATING "$20\\%$" AS "DIVIDE BY $20$", giving $250 \\div 20$; the choice $\\$300$ is REPORTING THE BALANCE $250 + 50$; the choice $\\$500$ is MOVING THE PERCENT DECIMAL ONE PLACE INSTEAD OF TWO, so $20\\%$ becomes the multiplier $2$ and doubles the money.)',
    },
  ],
  // p2 — simple interest over several years: the SAME dollars every year.
  [
    {
      q: 'You deposit $\\$800$ at $5\\%$ simple interest per year. What is the balance after $3$ years?',
      choices: ['$\\$120$', '$\\$840$', '$\\$920$', '$\\$926.10$'],
      answer: 2,
      solution:
        'Simple interest pays the same dollars every year: $5\\%$ of $\\$800$ is $\\frac{800}{20} = \\$40$. Three years of that is $3 \\cdot \\$40 = \\$120$, so the balance is $800 + 120 = \\$920$. Check a second, independent way with the closed formula $A = P(1 + rt)$: $A = 800\\left(1 + \\frac{1}{20} \\cdot 3\\right) = 800 \\cdot \\frac{23}{20} = 40 \\cdot 23 = \\$920$ ✓ — the same number by a different road. (The choice $\\$120$ is FORGETTING TO ADD THE PRINCIPAL BACK and reporting only the interest; the choice $\\$840$ is STOPPING A YEAR SHORT — two years short, in fact; the choice $\\$926.10$ is USING COMPOUNDING WHERE THE ACCOUNT PAYS SIMPLE INTEREST, since $800 \\cdot \\left(\\frac{21}{20}\\right)^3 = \\frac{9261}{10} = \\$926.10$, and this account never pays interest on its interest.)',
    },
    {
      q: 'A savings account starts with $\\$600$ and pays $25\\%$ simple interest per year. What is the balance after $3$ years?',
      choices: ['$\\$1050$', '$\\$450$', '$\\$750$', '$\\$2250$'],
      answer: 0,
      solution:
        'Each year pays $25\\%$ of the ORIGINAL $\\$600$, which is $\\frac{600}{4} = \\$150$ — the same $\\$150$ in year three as in year one. Three years give $3 \\cdot \\$150 = \\$450$ of interest, and the balance is $600 + 450 = \\$1050$. Check a second, independent way with $A = P(1 + rt)$: $A = 600\\left(1 + \\frac{1}{4} \\cdot 3\\right) = 600 \\cdot \\frac{7}{4} = 150 \\cdot 7 = \\$1050$ ✓. (The choice $\\$450$ is FORGETTING TO ADD THE PRINCIPAL BACK; the choice $\\$750$ is STOPPING A YEAR SHORT and reporting the one-year balance; the choice $\\$2250$ is MULTIPLYING THE ONE-YEAR BALANCE BY THE NUMBER OF YEARS, $750 \\cdot 3$, which charges the principal three times over.)',
    },
    {
      q: 'The first bank pays $20\\%$ simple interest per year. If you deposit $\\$1000$ there, what is the balance after $3$ years?',
      choices: ['$\\$600$', '$\\$1200$', '$\\$1728$', '$\\$1600$'],
      answer: 3,
      solution:
        'Simple interest pays $20\\%$ of $\\$1000$ every year, which is $\\$200$ each time. Three years give $\\$600$ of interest, so the balance is $1000 + 600 = \\$1600$. Check a second, independent way with $A = P(1 + rt)$: $A = 1000\\left(1 + \\frac{1}{5} \\cdot 3\\right) = 1000 \\cdot \\frac{8}{5} = 200 \\cdot 8 = \\$1600$ ✓. (The choice $\\$600$ is FORGETTING TO ADD THE PRINCIPAL BACK; the choice $\\$1200$ is STOPPING A YEAR SHORT — that is the balance after one year; the choice $\\$1728$ is USING COMPOUNDING WHERE THE ACCOUNT PAYS SIMPLE INTEREST, since $1000 \\cdot \\left(\\frac{6}{5}\\right)^3 = 1000 \\cdot \\frac{216}{125} = \\$1728$.)',
    },
  ],
  // p3 — two years of annual compounding, gently.
  [
    {
      q: 'You deposit $\\$200$ at $25\\%$ interest compounded annually. What is the balance after $2$ years?',
      choices: ['$\\$12.50$', '$\\$250$', '$\\$300$', '$\\$312.50$'],
      answer: 3,
      solution:
        'Growing by $25\\%$ means multiplying by $1 + \\frac{1}{4} = \\frac{5}{4}$ once per year. Year by year: $200 \\cdot \\frac{5}{4} = \\$250$, then $250 \\cdot \\frac{5}{4} = \\$312.50$. The first year paid $\\$50$ and the second paid $\\$62.50$ — bigger, because the first year’s $\\$50$ earned interest too. Check a second, independent way with the closed formula: $A = 200\\left(\\frac{5}{4}\\right)^2 = 200 \\cdot \\frac{25}{16} = \\frac{5000}{16} = \\$312.50$ ✓ — exact to the cent, no rounding anywhere. (The choice $\\$250$ is STOPPING A YEAR SHORT; the choice $\\$300$ is USING SIMPLE INTEREST, $200 + 2 \\cdot 50$; the choice $\\$12.50$ comes from the formula $P \\cdot r^t$, which FORGETS TO KEEP THE ORIGINAL MONEY: $200 \\cdot \\left(\\frac{1}{4}\\right)^2 = \\$12.50$.)',
    },
    {
      q: 'You deposit $\\$1200$ at $5\\%$ interest compounded annually. What is the balance after $2$ years?',
      choices: ['$\\$1323$', '$\\$1203$', '$\\$1260$', '$\\$1320$'],
      answer: 0,
      solution:
        'Growing by $5\\%$ means multiplying by $1 + \\frac{1}{20} = \\frac{21}{20}$ each year. Year by year: $1200 \\cdot \\frac{21}{20} = \\$1260$, then $1260 \\cdot \\frac{21}{20} = \\$1323$. Check a second, independent way with the closed formula: $A = 1200\\left(\\frac{21}{20}\\right)^2 = 1200 \\cdot \\frac{441}{400} = 3 \\cdot 441 = \\$1323$ ✓. (The choice $\\$1260$ is STOPPING A YEAR SHORT; the choice $\\$1320$ is USING SIMPLE INTEREST, $1200 + 2 \\cdot 60$, which misses the $\\$3$ of interest that the first year’s $\\$60$ earned; the choice $\\$1203$ is RAISING THE RATE TO THE POWER INSTEAD OF THE WHOLE GROWTH FACTOR, computing $1200\\left(1 + 0.05^2\\right) = 1200 \\cdot 1.0025$.)',
    },
    {
      q: 'Bank A pays $4\\%$ interest compounded annually. You deposit $\\$500$ there. What is the balance after $2$ years?',
      choices: ['$\\$540$', '$\\$540.80$', '$\\$520$', '$\\$520.80$'],
      answer: 1,
      solution:
        'Growing by $4\\%$ means multiplying by $1 + \\frac{1}{25} = \\frac{26}{25}$ each year. Year by year: $500 \\cdot \\frac{26}{25} = \\$520$, then $520 \\cdot \\frac{26}{25} = \\$540.80$. Check a second, independent way with the closed formula: $A = 500\\left(\\frac{26}{25}\\right)^2 = 500 \\cdot \\frac{676}{625} = \\frac{4 \\cdot 676}{5} = \\frac{2704}{5} = \\$540.80$ ✓ — exact, with the $80$ cents landing on the nose. (The choice $\\$520$ is STOPPING A YEAR SHORT; the choice $\\$540$ is USING SIMPLE INTEREST, $500 + 2 \\cdot 20$; the choice $\\$520.80$ is PAYING THE SECOND YEAR’S INTEREST ONLY ON THE INTEREST, adding $4\\%$ of the $\\$20$ but forgetting the $4\\%$ on the original $\\$500$.)',
    },
  ],
  // p4 — which formula is which: simple adds, compound multiplies.
  [
    {
      q: 'A principal $P$ earns rate $r$ per year in SIMPLE interest for $t$ years. Which formula gives the final balance?',
      choices: ['$A = P(1 + r)^t$', '$A = P(1 + rt)$', '$A = P \\cdot r \\cdot t$', '$A = P + r + t$'],
      answer: 1,
      solution:
        'Simple interest pays $P \\cdot r$ every year, so $t$ years pay $P \\cdot r \\cdot t$ of interest, and the balance is the principal plus that interest: $A = P + Prt = P(1 + rt)$. Check a second, independent way on a case you can compute by hand — $P = \\$100$, $r = 10\\%$, $t = 2$: year by year the account holds $\\$110$ then $\\$120$, and the formula gives $100(1 + 0.1 \\cdot 2) = 100 \\cdot 1.2 = \\$120$ ✓, while $P(1+r)^t$ would give $\\$121$ ✗. (The choice $P(1+r)^t$ is COMPOUND interest, where each year multiplies the whole balance again; the choice $P \\cdot r \\cdot t$ FORGETS TO ADD THE PRINCIPAL BACK and reports only the interest; the choice $P + r + t$ adds a rate and a count of years to a pile of dollars, which is not a legal thing to add.)',
    },
    {
      q: 'A principal $P$ grows at $6\\%$ per year, compounded annually, for $5$ years. Which expression gives the final balance?',
      choices: ['$P(1.06)^5$', '$P(1.6)^5$', '$P(1 + 0.06 \\cdot 5)$', '$P(0.06)^5$'],
      answer: 0,
      solution:
        'Growing by $6\\%$ means multiplying by $1 + 0.06 = 1.06$, and five years means doing that five times: $P(1.06)^5$. Check a second, independent way by testing the shape at $t = 1$, where every correct formula must return one year of growth: $P(1.06)^1 = 1.06P$ ✓, which is exactly the principal plus $6\\%$ of it. (The choice $P(1.6)^5$ writes the growth factor as $1.6$, which is a $60\\%$ rate — the decimal for $6\\%$ is $0.06$, not $0.6$; the choice $P(1 + 0.06 \\cdot 5)$ is the SIMPLE interest formula; the choice $P(0.06)^5$ FORGETS TO KEEP THE ORIGINAL MONEY and would shrink the account to almost nothing.)',
    },
    {
      q: 'A principal $P$ is compounded annually at rate $r$ for $t$ years. Which expression gives the amount of INTEREST earned — not the final balance?',
      choices: ['$P \\cdot r \\cdot t$', '$P(1 + r)^t$', '$P(1 + r)^t - P$', '$P\\left((1 + r)^t + 1\\right)$'],
      answer: 2,
      solution:
        'The final balance is $P(1 + r)^t$, and the interest is whatever the account holds beyond the money you put in, so subtract the principal: $P(1 + r)^t - P$. Check a second, independent way on a case you can compute by hand — $P = \\$100$, $r = 10\\%$, $t = 2$: the balance is $\\$121$, so the interest is $121 - 100 = \\$21$, and the expression gives $100(1.1)^2 - 100 = 121 - 100 = \\$21$ ✓. (The choice $P \\cdot r \\cdot t$ is the SIMPLE interest earned, which here would say $\\$20$; the choice $P(1+r)^t$ is the BALANCE, principal included; the choice $P\\left((1+r)^t + 1\\right)$ ADDS a second principal instead of subtracting the one you have.)',
    },
  ],
  // p5 — two years of annual compounding, with bigger money.
  [
    {
      q: 'You deposit $\\$2500$ at $8\\%$ interest compounded annually. What is the balance after $2$ years?',
      choices: ['$\\$2700$', '$\\$2900$', '$\\$2916$', '$\\$2516$'],
      answer: 2,
      solution:
        'Growing by $8\\%$ means multiplying by $1 + \\frac{8}{100} = \\frac{27}{25}$ each year. Year by year: $2500 \\cdot \\frac{27}{25} = 100 \\cdot 27 = \\$2700$, then $2700 \\cdot \\frac{27}{25} = 108 \\cdot 27 = \\$2916$. Check a second, independent way with the closed formula: $A = 2500\\left(\\frac{27}{25}\\right)^2 = 2500 \\cdot \\frac{729}{625} = 4 \\cdot 729 = \\$2916$ ✓ — a whole number of dollars, exactly. (The choice $\\$2700$ is STOPPING A YEAR SHORT; the choice $\\$2900$ is USING SIMPLE INTEREST, $2500 + 2 \\cdot 200$, which misses the $\\$16$ that the first year’s $\\$200$ earned; the choice $\\$2516$ is RAISING THE RATE TO THE POWER INSTEAD OF THE WHOLE GROWTH FACTOR, computing $2500\\left(1 + 0.08^2\\right)$.)',
    },
    {
      q: 'A savings account holds $\\$900$ and earns $20\\%$ compounded annually. What is the balance after $2$ years?',
      choices: ['$\\$936$', '$\\$1296$', '$\\$1080$', '$\\$1260$'],
      answer: 1,
      solution:
        'Growing by $20\\%$ means multiplying by $1 + \\frac{1}{5} = \\frac{6}{5}$ each year. Year by year: $900 \\cdot \\frac{6}{5} = \\$1080$, then $1080 \\cdot \\frac{6}{5} = \\$1296$. Check a second, independent way with the closed formula: $A = 900\\left(\\frac{6}{5}\\right)^2 = 900 \\cdot \\frac{36}{25} = 36 \\cdot 36 = \\$1296$ ✓. (The choice $\\$1080$ is STOPPING A YEAR SHORT; the choice $\\$1260$ is USING SIMPLE INTEREST, $900 + 2 \\cdot 180$, which misses the $\\$36$ earned by the first year’s $\\$180$; the choice $\\$936$ is RAISING THE RATE TO THE POWER INSTEAD OF THE WHOLE GROWTH FACTOR, computing $900\\left(1 + 0.2^2\\right) = 900 \\cdot 1.04$.)',
    },
    {
      q: 'You deposit $\\$1600$ at $25\\%$ compounded annually. What is the balance after $2$ years?',
      choices: ['$\\$1700$', '$\\$2000$', '$\\$2500$', '$\\$2400$'],
      answer: 2,
      solution:
        'Growing by $25\\%$ means multiplying by $\\frac{5}{4}$ each year. Year by year: $1600 \\cdot \\frac{5}{4} = \\$2000$, then $2000 \\cdot \\frac{5}{4} = \\$2500$. Check a second, independent way with the closed formula: $A = 1600\\left(\\frac{5}{4}\\right)^2 = 1600 \\cdot \\frac{25}{16} = 100 \\cdot 25 = \\$2500$ ✓. (The choice $\\$2000$ is STOPPING A YEAR SHORT; the choice $\\$2400$ is USING SIMPLE INTEREST, $1600 + 2 \\cdot 400$, missing the $\\$100$ the first year’s $\\$400$ earned; the choice $\\$1700$ is RAISING THE RATE TO THE POWER INSTEAD OF THE WHOLE GROWTH FACTOR, computing $1600\\left(1 + \\left(\\frac{1}{4}\\right)^2\\right) = 1600 \\cdot \\frac{17}{16}$.)',
    },
  ],
  // p6 — three years of annual compounding: three multiplications, not three additions.
  [
    {
      q: 'You deposit $\\$1250$ at $20\\%$ compounded annually. What is the balance after $3$ years?',
      choices: ['$\\$1260$', '$\\$1800$', '$\\$2000$', '$\\$2160$'],
      answer: 3,
      solution:
        'Multiply by $\\frac{6}{5}$ once per year and watch the balance climb: $1250 \\to \\$1500 \\to \\$1800 \\to \\$2160$. The yearly gains are $\\$250$, then $\\$300$, then $\\$360$ — growing, because each year’s interest joins the pile and earns interest of its own. Check a second, independent way with the closed formula: $A = 1250\\left(\\frac{6}{5}\\right)^3 = 1250 \\cdot \\frac{216}{125} = 10 \\cdot 216 = \\$2160$ ✓. (The choice $\\$1800$ is STOPPING A YEAR SHORT; the choice $\\$2000$ is USING SIMPLE INTEREST, $1250 + 3 \\cdot 250$; the choice $\\$1260$ is RAISING THE RATE TO THE POWER INSTEAD OF THE WHOLE GROWTH FACTOR, computing $1250\\left(1 + 0.2^3\\right) = 1250 \\cdot 1.008$.)',
    },
    {
      q: 'A savings account starts at $\\$2400$ and earns $5\\%$ compounded annually. What is the balance after $3$ years?',
      choices: ['$\\$2646$', '$\\$2760$', '$\\$2778.30$', '$\\$2400.30$'],
      answer: 2,
      solution:
        'Multiply by $\\frac{21}{20}$ once per year: $2400 \\to \\$2520 \\to \\$2646 \\to \\$2778.30$. Each step is exact — $2646 \\cdot \\frac{21}{20} = \\frac{55566}{20} = \\$2778.30$, thirty cents and not a fraction of a cent more. Check a second, independent way with the closed formula: $A = 2400\\left(\\frac{21}{20}\\right)^3 = 2400 \\cdot \\frac{9261}{8000} = \\frac{3 \\cdot 9261}{10} = \\frac{27783}{10} = \\$2778.30$ ✓. (The choice $\\$2646$ is STOPPING A YEAR SHORT; the choice $\\$2760$ is USING SIMPLE INTEREST, $2400 + 3 \\cdot 120$; the choice $\\$2400.30$ is RAISING THE RATE TO THE POWER INSTEAD OF THE WHOLE GROWTH FACTOR, computing $2400\\left(1 + 0.05^3\\right)$, which barely moves the money at all.)',
    },
    {
      q: 'The first bank pays $25\\%$ compounded annually. You deposit $\\$640$. What is the balance after $3$ years?',
      choices: ['$\\$1000$', '$\\$1250$', '$\\$1120$', '$\\$650$'],
      answer: 1,
      solution:
        'Multiply by $\\frac{5}{4}$ once per year: $640 \\to \\$800 \\to \\$1000 \\to \\$1250$. Every step lands on a whole number of dollars, since $640$ is divisible by $4$ twice over. Check a second, independent way with the closed formula: $A = 640\\left(\\frac{5}{4}\\right)^3 = 640 \\cdot \\frac{125}{64} = 10 \\cdot 125 = \\$1250$ ✓. (The choice $\\$1000$ is STOPPING A YEAR SHORT; the choice $\\$1120$ is USING SIMPLE INTEREST, $640 + 3 \\cdot 160$; the choice $\\$650$ is RAISING THE RATE TO THE POWER INSTEAD OF THE WHOLE GROWTH FACTOR, computing $640\\left(1 + \\left(\\frac{1}{4}\\right)^3\\right) = 640 \\cdot \\frac{65}{64}$.)',
    },
  ],
  // p7 — how much MORE compounding earns: compute both balances, then subtract.
  [
    {
      q: 'You deposit $\\$1400$ at $5\\%$ for $2$ years. How much MORE does compounding annually earn than simple interest?',
      choices: ['$\\$0$', '$\\$3.50$', '$\\$70$', '$\\$143.50$'],
      answer: 1,
      solution:
        'Work out both accounts and subtract. Simple interest pays $5\\%$ of $\\$1400$, which is $\\$70$, twice, so it reaches $1400 + 140 = \\$1540$. Compounding multiplies by $\\frac{21}{20}$ twice: $1400 \\to \\$1470 \\to \\$1543.50$. The gap is $1543.50 - 1540 = \\$3.50$. Check a second, independent way by asking where that money comes from: the only thing compounding does differently is pay interest on the first year’s $\\$70$, and $5\\%$ of $\\$70$ is $\\$3.50$ ✓ — same answer, and it also explains the answer. The closed forms agree too: $1400 \\cdot \\frac{441}{400} = \\frac{3087}{2} = \\$1543.50$ exactly. (The choice $\\$0$ is believing the two accounts NEVER differ, which is only true after the first year; the choice $\\$70$ is one year’s interest rather than the gap; the choice $\\$143.50$ is the total interest the compound account earned, not the amount by which it beat the other account.)',
    },
    {
      q: 'You deposit $\\$2000$ at $20\\%$ for $2$ years. How much MORE does compounding annually earn than simple interest?',
      choices: ['$\\$80$', '$\\$400$', '$\\$880$', '$\\$0$'],
      answer: 0,
      solution:
        'Simple interest pays $20\\%$ of $\\$2000$, which is $\\$400$, each year, so it reaches $2000 + 800 = \\$2800$. Compounding multiplies by $\\frac{6}{5}$ twice: $2000 \\to \\$2400 \\to \\$2880$, which the closed formula confirms as $2000 \\cdot \\frac{36}{25} = 80 \\cdot 36 = \\$2880$. The gap is $2880 - 2800 = \\$80$. Check a second, independent way through the source of the extra money: compounding differs only by paying interest on the first year’s $\\$400$, and $20\\%$ of $\\$400$ is $\\$80$ ✓. (The choice $\\$0$ is believing the accounts never differ; the choice $\\$400$ is one year’s interest; the choice $\\$880$ is the compound account’s TOTAL interest, not its lead.)',
    },
    {
      q: 'You deposit $\\$3000$ at $4\\%$ for $2$ years. How much MORE does compounding annually earn than simple interest?',
      choices: ['$\\$0$', '$\\$120$', '$\\$4.80$', '$\\$244.80$'],
      answer: 2,
      solution:
        'Simple interest pays $4\\%$ of $\\$3000$, which is $\\$120$, each year, reaching $3000 + 240 = \\$3240$. Compounding multiplies by $\\frac{26}{25}$ twice: $3000 \\to \\$3120 \\to \\$3244.80$, and the closed formula agrees exactly: $3000 \\cdot \\frac{676}{625} = \\frac{24 \\cdot 676}{5} = \\frac{16224}{5} = \\$3244.80$. The gap is $3244.80 - 3240 = \\$4.80$. Check a second, independent way through the source: the extra is $4\\%$ of the first year’s $\\$120$ of interest, and $\\frac{120}{25} = \\$4.80$ ✓. (The choice $\\$0$ is believing the accounts never differ; the choice $\\$120$ is one year’s interest; the choice $\\$244.80$ is the compound account’s total interest rather than its lead.)',
    },
  ],
  // p8 — the tie in year one, and where the tie breaks.
  [
    {
      q: 'Two savings accounts start with the same deposit and pay the same rate: the first pays simple interest, the second compounds annually. After exactly $2$ years, how do the balances compare?',
      choices: ['They are equal', 'The compounding account is larger', 'The simple-interest account is larger', 'It depends on the principal'],
      answer: 1,
      solution:
        'Both accounts end year one at $P(1 + r)$, since there is no earned interest yet for anything extra to grow on. In year two the simple account pays $P \\cdot r$ again, while the compounding account pays $r$ times the LARGER balance $P(1+r)$ — the same $P \\cdot r$ plus an additional $r$ times the first year’s interest. So the compounding account is ahead. Check a second, independent way with numbers: at $P = \\$100$ and $r = 10\\%$, the simple account holds $\\$120$ and the compounding account holds $\\$110$ then $\\$121$, and $\\$121 > \\$120$ ✓. (The choice "They are equal" is true after one year only; the choice "The simple-interest account is larger" has the comparison backwards; the choice "It depends on the principal" misses that both balances are the same multiple of $P$, so $P$ cancels out of the comparison.)',
    },
    {
      q: 'Two accounts get the same deposit at the same rate — one simple, one compounded annually. At the end of which year do their balances FIRST differ?',
      choices: ['Year $1$', 'Year $3$', 'Year $2$', 'They never differ'],
      answer: 2,
      solution:
        'At the end of year $1$ both accounts hold $P(1+r)$, because both computed their interest on the same principal — that is the tie. During year $2$ the compounding account charges its rate against a balance that already includes the first year’s interest, so it pays more, and the balances part company at the end of year $2$. Check a second, independent way with numbers: at $P = \\$100$ and $r = 10\\%$, the simple account runs $\\$110, \\$120, \\$130$ and the compounding account runs $\\$110, \\$121, \\$133.10$; the lists agree at year $1$ and split at year $2$ ✓. (The choice "Year $1$" forgets that the first year’s interest is computed on the same principal in both accounts; the choice "Year $3$" waits one year too long; the choice "They never differ" ignores that compounding pays interest on interest from year two onward.)',
    },
    {
      q: 'Bank A pays $6\\%$ simple interest and Bank B pays $6\\%$ compounded annually. You put the same amount in each. How much MORE interest does Bank B pay in the FIRST year?',
      choices: ['Nothing — the two pay exactly the same', 'Twice as much', 'Six times as much', 'It depends on the size of the deposit'],
      answer: 0,
      solution:
        'In the first year there is no earned interest sitting in either account, so both banks compute $6\\%$ of the same principal and both pay $P \\cdot 0.06$. Bank B pays nothing extra. Check a second, independent way with numbers: on a $\\$500$ deposit, Bank A pays $\\$30$, and Bank B multiplies by $1.06$ to reach $\\$530$, which is also $\\$30$ of interest ✓. Compounding is not a bigger rate — it is the same rate applied to a balance that has grown, and in year one the balance has not grown yet. (The choices "Twice as much" and "Six times as much" imagine compounding multiplies the rate itself; the choice "It depends on the size of the deposit" misses that both interests are the same multiple of the deposit, so the deposit cancels.)',
    },
  ],
  // p9 — climb year by year until the balance clears the bar.
  [
    {
      q: 'You deposit $\\$400$ at $25\\%$ compounded annually. After how many whole years does the balance first exceed $\\$600$?',
      choices: ['$1$', '$2$', '$3$', '$4$'],
      answer: 1,
      solution:
        'Multiply by $\\frac{5}{4}$ once per year and check the bar after each step. After $1$ year: $400 \\cdot \\frac{5}{4} = \\$500$, and $\\$500$ does NOT exceed $\\$600$ ✗. After $2$ years: $500 \\cdot \\frac{5}{4} = \\$625$, and $\\$625 > \\$600$ ✓. So $2$ years is the first time the balance clears the bar. Check a second, independent way with the closed formula, which must agree at both years: $400\\left(\\frac{5}{4}\\right)^1 = \\$500$ and $400\\left(\\frac{5}{4}\\right)^2 = 400 \\cdot \\frac{25}{16} = \\$625$ ✓. (The choice $1$ stops at $\\$500$, which is still short; the choices $3$ and $4$ overshoot — the balance already passed $\\$600$ at year $2$, and the question asks for the FIRST year that clears it.)',
    },
    {
      q: 'You deposit $\\$2000$ at $5\\%$ compounded annually. After how many whole years does the balance first exceed $\\$2300$?',
      choices: ['$4$', '$2$', '$3$', '$5$'],
      answer: 2,
      solution:
        'Multiply by $\\frac{21}{20}$ once per year and test the bar each time. After $1$ year: $\\$2100$ ✗. After $2$ years: $2100 \\cdot \\frac{21}{20} = \\$2205$, still under $\\$2300$ ✗. After $3$ years: $2205 \\cdot \\frac{21}{20} = \\frac{46305}{20} = \\$2315.25$, and $\\$2315.25 > \\$2300$ ✓. The answer is $3$ years. Check a second, independent way with the closed formula: $2000\\left(\\frac{21}{20}\\right)^2 = 2000 \\cdot \\frac{441}{400} = \\$2205$ ✗ and $2000\\left(\\frac{21}{20}\\right)^3 = 2000 \\cdot \\frac{9261}{8000} = \\frac{9261}{4} = \\$2315.25$ ✓ — both routes give the same two balances, so year $2$ really does fall short and year $3$ really does clear. (The choice $2$ stops at $\\$2205$; the choices $4$ and $5$ keep going after the bar has already been cleared.)',
    },
    {
      q: 'You deposit $\\$1280$ at $25\\%$ compounded annually. After how many whole years does the balance first exceed $\\$2600$?',
      choices: ['$2$', '$3$', '$5$', '$4$'],
      answer: 3,
      solution:
        'Multiply by $\\frac{5}{4}$ once per year: after $1$ year $\\$1600$ ✗, after $2$ years $\\$2000$ ✗, after $3$ years $\\$2500$ — still under $\\$2600$ ✗ — and after $4$ years $2500 \\cdot \\frac{5}{4} = \\$3125$ ✓. Year $3$ misses the bar by $\\$100$, so the first year that clears it is year $4$. Check a second, independent way with the closed formula at the two years that decide it: $1280\\left(\\frac{5}{4}\\right)^3 = 1280 \\cdot \\frac{125}{64} = 20 \\cdot 125 = \\$2500$ ✗, and $1280\\left(\\frac{5}{4}\\right)^4 = 1280 \\cdot \\frac{625}{256} = 5 \\cdot 625 = \\$3125$ ✓. (The choices $2$ and $3$ stop while the balance is still under the bar — $\\$2000$ and $\\$2500$; the choice $5$ waits a year longer than needed.)',
    },
  ],
  // p10 — recover the annual rate: undo the exponent, then subtract the 1.
  [
    {
      q: 'A deposit of $\\$500$, compounded annually at a fixed rate, grows to $\\$720$ in $2$ years. What is the annual rate?',
      choices: ['$20\\%$', '$22\\%$', '$44\\%$', '$120\\%$'],
      answer: 0,
      solution:
        'Two years of growth multiplied the money by $\\frac{720}{500} = \\frac{36}{25}$. That total factor is $(1+r)^2$, and $\\frac{36}{25} = \\left(\\frac{6}{5}\\right)^2$, so $1 + r = \\frac{6}{5}$ and $r = \\frac{1}{5} = 20\\%$. Check a second, independent way by running the account forward at $20\\%$: $500 \\to \\$600 \\to \\$720$ ✓ — it lands exactly on the given balance. (The choice $44\\%$ REPORTS TOTAL GROWTH AS THE ANNUAL RATE, since the money did grow $44\\%$ over the two years together; the choice $22\\%$ is HALVING THE TOTAL GROWTH, which is what simple interest would do, not compounding; the choice $120\\%$ is FORGETTING TO SUBTRACT THE $1$ from the growth factor $1.2$.)',
    },
    {
      q: 'A deposit of $\\$2500$, compounded annually at a fixed rate, grows to $\\$4900$ in $2$ years. What is the annual rate?',
      choices: ['$96\\%$', '$48\\%$', '$40\\%$', '$140\\%$'],
      answer: 2,
      solution:
        'The two-year growth factor is $\\frac{4900}{2500} = \\frac{49}{25} = \\left(\\frac{7}{5}\\right)^2$, so $1 + r = \\frac{7}{5}$ and $r = \\frac{2}{5} = 40\\%$. Check a second, independent way by running it forward: $2500 \\to \\$3500 \\to \\$4900$ ✓. (The choice $96\\%$ REPORTS TOTAL GROWTH AS THE ANNUAL RATE; the choice $48\\%$ is HALVING THE TOTAL GROWTH — the simple-interest answer, since $\\$2400$ of interest over two years is $\\$1200$ a year on $\\$2500$; the choice $140\\%$ is FORGETTING TO SUBTRACT THE $1$ from the growth factor $1.4$.)',
    },
    {
      q: 'A deposit of $\\$6000$, compounded annually at a fixed rate, grows to $\\$6615$ in $2$ years. What is the annual rate?',
      choices: ['$10.25\\%$', '$5.125\\%$', '$105\\%$', '$5\\%$'],
      answer: 3,
      solution:
        'The two-year growth factor is $\\frac{6615}{6000} = \\frac{441}{400} = \\left(\\frac{21}{20}\\right)^2$, so $1 + r = \\frac{21}{20}$ and $r = \\frac{1}{20} = 5\\%$. Recognising $441 = 21^2$ and $400 = 20^2$ is the whole trick. Check a second, independent way by running it forward: $6000 \\to \\$6300 \\to \\$6615$ ✓ — exact to the cent, with no rounding. (The choice $10.25\\%$ REPORTS TOTAL GROWTH AS THE ANNUAL RATE; the choice $5.125\\%$ is HALVING THAT TOTAL GROWTH, which treats two years of compounding as if the percents simply added; the choice $105\\%$ is FORGETTING TO SUBTRACT THE $1$ from the growth factor $1.05$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 19,
  sections: {
    '19.2': s192,
  },
}
