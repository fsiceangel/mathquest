// Introduction to Algebra chapter 19 — variations for section 19.3
// (Interest-ing Problems). All problems and solutions are original MathQuest
// content.
//
// House rules for this file:
//  - Money is EXACT to the cent everywhere. Every balance was built from
//    numbers whose growth factor terminates, and every one was checked as a
//    fraction before it was written down: for example $\$700$ at $10\%$ per
//    half-year for two half-years is $700 \cdot (11/10)^2 = 700 \cdot 121/100
//    = 847$. Nothing in this file is rounded.
//  - Every key was worked twice by two different routes: once period by
//    period (multiply, write the balance, multiply again) and once by the
//    closed formula with the periodic rate and the period count. Both routes
//    appear in the solution.
//  - The two numbers that matter most in this section are said out loud every
//    time: the PERIODIC RATE is the annual rate divided by the number of
//    periods per year, and the EXPONENT is the number of periods, never the
//    number of years.
//  - Each distractor is one named mistake, named at the end of the solution,
//    and that mistake really does produce that number. The traps running
//    through this section are: USING THE ANNUAL RATE AS THE PERIODIC RATE,
//    COUNTING YEARS INSTEAD OF PERIODS, STOPPING ONE PERIOD SHORT, USING
//    SIMPLE INTEREST WHERE THE ACCOUNT COMPOUNDS, SUBTRACTING A PERCENT OF THE
//    FINAL AMOUNT INSTEAD OF DIVIDING BY THE GROWTH FACTOR, MULTIPLYING WHERE
//    THE PROBLEM ASKS US TO UNDO, READING THE PERCENT SIGN AS DOLLARS, ADDING
//    PERCENT CHANGES INSTEAD OF MULTIPLYING THE FACTORS, REPORTING THE
//    PERIODIC RATE AS THE ANNUAL RATE, and REPORTING THE TOTAL GROWTH AS THE
//    ANNUAL RATE.
//  - No two choices inside an item name the same number.

const s193 = [
  // p1 — the periodic rate is the annual rate divided by periods per year.
  [
    {
      q: 'An account pays a $12\\%$ annual rate compounded quarterly. What rate does the account earn each quarter?',
      choices: ['$12\\%$', '$3\\%$', '$48\\%$', '$6\\%$'],
      answer: 1,
      solution:
        'Compounded quarterly means the interest is added four times a year, so the advertised annual rate is split into four equal pieces: $\\frac{12\\%}{4} = 3\\%$ per quarter. Check a second, independent way by adding the pieces back up: four quarters at $3\\%$ each is $3 + 3 + 3 + 3 = 12\\%$ of simple growth across the year ✓, which is exactly the rate the account advertises. (The choice $12\\%$ is USING THE ANNUAL RATE AS THE PERIODIC RATE; the choice $48\\%$ multiplies by four instead of dividing; the choice $6\\%$ divides by $2$, which is what semiannual compounding would call for.)',
    },
    {
      q: 'A savings plan pays a $24\\%$ annual rate compounded monthly. What rate does it earn each month?',
      choices: ['$24\\%$', '$12\\%$', '$2\\%$', '$288\\%$'],
      answer: 2,
      solution:
        'Monthly compounding means $12$ periods in a year, so each month earns $\\frac{24\\%}{12} = 2\\%$. Check a second, independent way with a concrete dollar: on $\\$100$, a whole year of simple $24\\%$ growth would be $\\$24$, and splitting that evenly over $12$ months gives $\\$2$ a month — and $\\$2$ is $2\\%$ of $\\$100$ ✓. (The choice $24\\%$ is USING THE ANNUAL RATE AS THE PERIODIC RATE, which would make the account grow far faster than advertised; the choice $12\\%$ divides by $2$ instead of by $12$; the choice $288\\%$ multiplies by $12$ instead of dividing.)',
    },
    {
      q: 'Each quarter, an account adds $4\\%$ interest to whatever balance it holds. What is the annual rate this account advertises?',
      choices: ['$4\\%$', '$1\\%$', '$8\\%$', '$16\\%$'],
      answer: 3,
      solution:
        'This runs the rule backwards. The periodic rate is the annual rate divided by the number of periods per year, so the annual rate is the periodic rate MULTIPLIED by that number: $4\\% \\cdot 4 = 16\\%$. Check a second, independent way by starting from the annual rate and going forward: an account paying $16\\%$ compounded quarterly earns $\\frac{16\\%}{4} = 4\\%$ per quarter ✓, which is the account described. (The choice $4\\%$ REPORTS THE PERIODIC RATE AS THE ANNUAL RATE; the choice $1\\%$ divides by $4$ instead of multiplying; the choice $8\\%$ multiplies by $2$, as though the account compounded semiannually.)',
    },
  ],
  // p2 — count PERIODS, not years.
  [
    {
      q: 'An account compounds quarterly. How many compounding periods happen in $5$ years?',
      choices: ['$20$', '$5$', '$9$', '$10$'],
      answer: 0,
      solution:
        'Quarterly means $4$ periods every year, and there are $5$ years, so the count is $4 \\cdot 5 = 20$ periods. Check a second, independent way by tallying year by year: $4$ periods in year one, $8$ by the end of year two, $12$, then $16$, then $20$ by the end of year five ✓. (The choice $5$ is COUNTING YEARS INSTEAD OF PERIODS; the choice $9$ adds $4$ and $5$ instead of multiplying them; the choice $10$ counts $2$ periods a year, which would be semiannual compounding.)',
    },
    {
      q: 'An account compounds monthly. How many compounding periods happen in $2$ years?',
      choices: ['$12$', '$24$', '$2$', '$14$'],
      answer: 1,
      solution:
        'Monthly means $12$ periods a year, so two years hold $12 \\cdot 2 = 24$ periods. Check a second, independent way by listing the months: a year of months is $12$, and a second year adds another $12$, giving $12 + 12 = 24$ ✓. (The choice $12$ stops after one year; the choice $2$ is COUNTING YEARS INSTEAD OF PERIODS, which is the mistake that puts the wrong number in the exponent; the choice $14$ adds $12$ and $2$ instead of multiplying.)',
    },
    {
      q: 'An account that compounds quarterly has gone through exactly $18$ compounding periods. How long has the money been in the account?',
      choices: ['$18$ years', '$9$ years', '$72$ years', '$4\\frac{1}{2}$ years'],
      answer: 3,
      solution:
        'Quarterly compounding packs $4$ periods into each year, so $18$ periods take $\\frac{18}{4} = 4\\frac{1}{2}$ years. Check a second, independent way by walking forward: $4$ years use up $4 \\cdot 4 = 16$ periods, and the $2$ periods left over are two quarters, which is half a year — total $4\\frac{1}{2}$ years ✓. (The choice $18$ years is COUNTING PERIODS AS THOUGH THEY WERE YEARS; the choice $9$ years divides by $2$, treating the account as semiannual; the choice $72$ years multiplies by $4$ instead of dividing.)',
    },
  ],
  // p3 — one year of sub-annual compounding, small principal.
  [
    {
      q: 'You deposit $\\$700$ at a $20\\%$ annual rate, compounded semiannually. What is the balance after $1$ year?',
      choices: ['$\\$847$', '$\\$840$', '$\\$770$', '$\\$1008$'],
      answer: 0,
      solution:
        'Semiannually means $2$ periods a year, so the periodic rate is $\\frac{20\\%}{2} = 10\\%$ per half-year, and one year holds $2$ periods — the exponent is the number of PERIODS, not the number of years. Half-year by half-year: $700 \\cdot 1.1 = \\$770$, then $770 \\cdot 1.1 = \\$847$. Check a second, independent way with the closed formula and exact fractions: $700\\left(1 + \\frac{1}{10}\\right)^2 = 700 \\cdot \\frac{121}{100} = 7 \\cdot 121 = \\$847$ ✓ — exact to the cent, no rounding anywhere. (The choice $\\$840$ applies the annual $20\\%$ just once, which is annual compounding; the choice $\\$770$ STOPS ONE PERIOD SHORT at the half-year mark; the choice $\\$1008$ is USING THE ANNUAL RATE AS THE PERIODIC RATE, giving $700 \\cdot (1.2)^2$.)',
    },
    {
      q: 'You deposit $\\$1250$ at an $8\\%$ annual rate, compounded semiannually. What is the balance after $1$ year?',
      choices: ['$\\$1350$', '$\\$1300$', '$\\$1352$', '$\\$1458$'],
      answer: 2,
      solution:
        'The periodic rate is $\\frac{8\\%}{2} = 4\\%$ per half-year, and one year contains $2$ half-years. Period by period: $1250 \\cdot 1.04 = \\$1300$, then $1300 \\cdot 1.04 = \\$1352$. Check a second, independent way with exact fractions: $1250\\left(\\frac{26}{25}\\right)^2 = 1250 \\cdot \\frac{676}{625} = 2 \\cdot 676 = \\$1352$ ✓ — the $625$ divides into $1250$ exactly, so the answer lands on a whole number of dollars. It beats the $\\$1350$ of annual compounding by $\\$2$, which is the $4\\%$ earned by the mid-year $\\$50$ of interest. (The choice $\\$1350$ compounds annually instead; the choice $\\$1300$ STOPS ONE PERIOD SHORT; the choice $\\$1458$ is USING THE ANNUAL RATE AS THE PERIODIC RATE, giving $1250 \\cdot (1.08)^2$.)',
    },
    {
      q: 'You deposit $\\$2500$ at a $12\\%$ annual rate, compounded semiannually. What is the balance after $1$ year?',
      choices: ['$\\$2800$', '$\\$2650$', '$\\$3136$', '$\\$2809$'],
      answer: 3,
      solution:
        'Half of $12\\%$ is $6\\%$, so each half-year multiplies the balance by $1.06$, and one year holds $2$ of those steps. Step by step: $2500 \\cdot 1.06 = \\$2650$, then $2650 \\cdot 1.06 = \\$2809$. Check a second, independent way with exact fractions: $2500\\left(\\frac{53}{50}\\right)^2 = 2500 \\cdot \\frac{2809}{2500} = \\$2809$ ✓ — the $2500$ cancels perfectly, so the cents are exact. (The choice $\\$2800$ uses the annual $12\\%$ once; the choice $\\$2650$ STOPS ONE PERIOD SHORT; the choice $\\$3136$ is USING THE ANNUAL RATE AS THE PERIODIC RATE, giving $2500 \\cdot (1.12)^2$.)',
    },
  ],
  // p4 — undo one growth step by DIVIDING by the growth factor.
  [
    {
      q: 'A savings account grew $25\\%$ last year and now holds $\\$500$. How much was in it a year ago?',
      choices: ['$\\$400$', '$\\$375$', '$\\$625$', '$\\$475$'],
      answer: 0,
      solution:
        'Growing by $25\\%$ multiplies by $1.25 = \\frac{5}{4}$, so undoing that growth means DIVIDING by $\\frac{5}{4}$: $500 \\div \\frac{5}{4} = 500 \\cdot \\frac{4}{5} = \\$400$. Check a second, independent way by running it forward: $25\\%$ of $\\$400$ is $\\$100$, and $400 + 100 = \\$500$ ✓ — the balance we were told about. (The choice $\\$375$ is SUBTRACTING A PERCENT OF THE FINAL AMOUNT, taking $25\\%$ off $\\$500$; the choice $\\$625$ MULTIPLIES WHERE THE PROBLEM ASKS US TO UNDO; the choice $\\$475$ is READING THE PERCENT SIGN AS DOLLARS and subtracting $\\$25$.)',
    },
    {
      q: 'An account lost $20\\%$ of its value last year and now holds $\\$480$. How much was in it a year ago?',
      choices: ['$\\$576$', '$\\$384$', '$\\$600$', '$\\$500$'],
      answer: 2,
      solution:
        'Losing $20\\%$ leaves $80\\%$ behind, so the year multiplied the balance by $0.8 = \\frac{4}{5}$. Undo it by dividing: $480 \\div \\frac{4}{5} = 480 \\cdot \\frac{5}{4} = \\$600$. Check a second, independent way by running it forward: $20\\%$ of $\\$600$ is $\\$120$, and $600 - 120 = \\$480$ ✓. (The choice $\\$576$ adds $20\\%$ back onto $\\$480$ instead of dividing — the percent must be taken of the OLD balance, which is bigger; the choice $\\$384$ takes another $20\\%$ off; the choice $\\$500$ is READING THE PERCENT SIGN AS DOLLARS and adding $\\$20$.)',
    },
    {
      q: 'After a $5\\%$ increase, a bicycle costs $\\$210$. What did it cost before the increase?',
      choices: ['$\\$199.50$', '$\\$220.50$', '$\\$205$', '$\\$200$'],
      answer: 3,
      solution:
        'The increase multiplied the price by $1.05 = \\frac{21}{20}$, so the old price is $210 \\div \\frac{21}{20} = 210 \\cdot \\frac{20}{21} = 10 \\cdot 20 = \\$200$. Check a second, independent way by going forward: $5\\%$ of $\\$200$ is $\\$10$, and $200 + 10 = \\$210$ ✓. (The choice $\\$199.50$ is SUBTRACTING A PERCENT OF THE FINAL AMOUNT, since $5\\%$ of $\\$210$ is $\\$10.50$; the choice $\\$220.50$ MULTIPLIES WHERE THE PROBLEM ASKS US TO UNDO; the choice $\\$205$ is READING THE PERCENT SIGN AS DOLLARS and subtracting $\\$5$.)',
    },
  ],
  // p5 — balances again, now with period counts that are not just "two".
  [
    {
      q: 'You deposit $\\$2000$ at a $20\\%$ annual rate, compounded semiannually. What is the balance after $18$ months?',
      choices: ['$\\$2662$', '$\\$3456$', '$\\$2420$', '$\\$2600$'],
      answer: 0,
      solution:
        'Two things to pin down first. The periodic rate is $\\frac{20\\%}{2} = 10\\%$ per half-year, and $18$ months is $3$ half-years, so there are $3$ periods — the exponent counts PERIODS, not years. Half-year by half-year: $2000 \\cdot 1.1 = \\$2200$, then $2200 \\cdot 1.1 = \\$2420$, then $2420 \\cdot 1.1 = \\$2662$. Check a second, independent way with exact fractions: $2000\\left(\\frac{11}{10}\\right)^3 = 2000 \\cdot \\frac{1331}{1000} = 2 \\cdot 1331 = \\$2662$ ✓ — exact to the cent. (The choice $\\$3456$ is USING THE ANNUAL RATE AS THE PERIODIC RATE, giving $2000 \\cdot (1.2)^3$; the choice $\\$2420$ STOPS ONE PERIOD SHORT at the one-year mark; the choice $\\$2600$ is USING SIMPLE INTEREST, paying $20\\%$ of $\\$2000$ for $1.5$ years.)',
    },
    {
      q: 'You deposit $\\$4000$ at a $10\\%$ annual rate, compounded quarterly. What is the balance after $6$ months?',
      choices: ['$\\$4840$', '$\\$4202.50$', '$\\$4410$', '$\\$4100$'],
      answer: 1,
      solution:
        'Quarterly means $4$ periods a year, so the periodic rate is $\\frac{10\\%}{4} = 2.5\\%$ per quarter, and $6$ months holds $2$ quarters. Quarter by quarter: $4000 \\cdot 1.025 = \\$4100$, then $4100 \\cdot 1.025 = \\$4202.50$. Check a second, independent way with exact fractions: $4000\\left(\\frac{41}{40}\\right)^2 = 4000 \\cdot \\frac{1681}{1600} = \\frac{5}{2} \\cdot 1681 = \\$4202.50$ ✓ — the halves land on a whole number of cents, so nothing is rounded. (The choice $\\$4840$ is USING THE ANNUAL RATE AS THE PERIODIC RATE, giving $4000 \\cdot (1.1)^2$; the choice $\\$4410$ divides the rate by $2$ instead of by $4$, which is the semiannual rate; the choice $\\$4100$ STOPS ONE PERIOD SHORT.)',
    },
    {
      q: 'You deposit $\\$8000$ at a $20\\%$ annual rate, compounded quarterly. What is the balance after $9$ months?',
      choices: ['$\\$13{,}824$', '$\\$8820$', '$\\$9261$', '$\\$9200$'],
      answer: 2,
      solution:
        'The periodic rate is $\\frac{20\\%}{4} = 5\\%$ per quarter, and $9$ months is $3$ quarters, so there are $3$ periods. Quarter by quarter: $8000 \\cdot 1.05 = \\$8400$, then $8400 \\cdot 1.05 = \\$8820$, then $8820 \\cdot 1.05 = \\$9261$. Check a second, independent way with exact fractions: $8000\\left(\\frac{21}{20}\\right)^3 = 8000 \\cdot \\frac{9261}{8000} = \\$9261$ ✓ — the $8000$ cancels, so the balance is a whole number of dollars. (The choice $\\$13{,}824$ is USING THE ANNUAL RATE AS THE PERIODIC RATE, giving $8000 \\cdot (1.2)^3$; the choice $\\$8820$ STOPS ONE PERIOD SHORT after two quarters; the choice $\\$9200$ is USING SIMPLE INTEREST for three quarters of a year.)',
    },
  ],
  // p6 — recover the principal by dividing by the whole growth factor.
  // Annual compounding, matching the base slot; the sub-annual version of this
  // question belongs to challenge[5], which is where the periodic-rate step lives.
  [
    {
      q: 'An account earns $10\\%$ compounded annually. After $2$ years it holds $\\$968$. What was the principal?',
      choices: ['$\\$880$', '$\\$800$', '$\\$774.40$', '$\\$1171.28$'],
      answer: 1,
      solution:
        'Each year multiplies the balance by $1 + \\frac{1}{10} = \\frac{11}{10}$, so two years multiply it by $\\left(\\frac{11}{10}\\right)^2 = \\frac{121}{100}$. Growth is undone by DIVIDING, not by subtracting: $P = 968 \\div \\frac{121}{100} = 968 \\cdot \\frac{100}{121} = 8 \\cdot 100 = \\$800$, since $121 \\cdot 8 = 968$ exactly. Check a second, independent way by running the account forward year by year: $10\\%$ of $\\$800$ is $\\$80$, giving $\\$880$; then $10\\%$ of $\\$880$ is $\\$88$, giving $\\$968$ ✓ — the balance we were handed, to the cent. (The choice $\\$880$ UNDOES ONLY ONE YEAR and stops at the halfway mark; the choice $\\$774.40$ is SUBTRACTING A PERCENT OF THE FINAL AMOUNT, taking $20\\%$ off $\\$968$, but the interest was earned on the smaller starting balance, not on the final one; the choice $\\$1171.28$ MULTIPLIES BY $\\frac{121}{100}$ WHERE THE PROBLEM ASKS US TO UNDO, running the account forward instead of backward.)',
    },
    {
      q: 'An account earns $12\\%$ compounded annually. After $2$ years it holds $\\$6272$. What was the principal?',
      choices: ['$\\$5600$', '$\\$4766.72$', '$\\$5000$', '$\\$7024.64$'],
      answer: 2,
      solution:
        'A $12\\%$ year multiplies by $1 + \\frac{12}{100} = \\frac{28}{25}$, so two years multiply by $\\left(\\frac{28}{25}\\right)^2 = \\frac{784}{625}$. Divide to undo both years at once: $P = 6272 \\cdot \\frac{625}{784} = 8 \\cdot 625 = \\$5000$, since $784 \\cdot 8 = 6272$. Check a second, independent way by going forward in dollars: $12\\%$ of $\\$5000$ is $\\$600$, giving $\\$5600$; then $12\\%$ of $\\$5600$ is $\\$672$, giving $\\$6272$ ✓. The second year paid $\\$72$ more than the first, which is the interest earned by the first year’s interest. (The choice $\\$5600$ UNDOES ONLY ONE YEAR; the choice $\\$4766.72$ is SUBTRACTING A PERCENT OF THE FINAL AMOUNT, taking $24\\%$ off $\\$6272$ as though two years of interest were simply added together; the choice $\\$7024.64$ MULTIPLIES WHERE THE PROBLEM ASKS US TO UNDO, growing the balance by a third year.)',
    },
    {
      q: 'An account earns $8\\%$ compounded annually. After $2$ years it holds $\\$7290$. What was the principal?',
      choices: ['$\\$6750$', '$\\$6123.60$', '$\\$7873.20$', '$\\$6250$'],
      answer: 3,
      solution:
        'An $8\\%$ year multiplies by $1 + \\frac{8}{100} = \\frac{27}{25}$, so two years multiply by $\\left(\\frac{27}{25}\\right)^2 = \\frac{729}{625}$. Undo it by dividing: $P = 7290 \\cdot \\frac{625}{729} = 10 \\cdot 625 = \\$6250$, since $729 \\cdot 10 = 7290$. Check a second, independent way by rebuilding the account forward: $8\\%$ of $\\$6250$ is $\\$500$, giving $\\$6750$; then $8\\%$ of $\\$6750$ is $\\$540$, giving $\\$7290$ ✓ — exact to the cent, with nothing rounded. (The choice $\\$6750$ UNDOES ONLY ONE YEAR; the choice $\\$6123.60$ is SUBTRACTING A PERCENT OF THE FINAL AMOUNT, taking $16\\%$ off $\\$7290$; the choice $\\$7873.20$ MULTIPLIES WHERE THE PROBLEM ASKS US TO UNDO.)',
    },
  ],
  // p7 — percent changes multiply; the two percents sit on different bases.
  [
    {
      q: 'A trading card’s value rises $20\\%$ one month, then falls $20\\%$ the next month. Where does it end up?',
      choices: [
        '$4\\%$ below the original value',
        'Back at the original value',
        '$4\\%$ above the original value',
        '$40\\%$ above the original value',
      ],
      answer: 0,
      solution:
        'Turn each change into a growth factor and MULTIPLY: up $20\\%$ is $\\times 1.2$, down $20\\%$ is $\\times 0.8$, and $1.2 \\cdot 0.8 = 0.96$. Ending at $96\\%$ of the original means $4\\%$ BELOW where it started. Check a second, independent way with a concrete card worth $\\$100$: it rises to $\\$120$, and then the $20\\%$ drop is taken from $\\$120$, which is $\\$24$, leaving $120 - 24 = \\$96$ ✓ — a $\\$4$ loss on $\\$100$. The two percents are taken of DIFFERENT bases: the rise is $20\\%$ of the small starting value, while the fall is $20\\%$ of the larger raised value, so the fall removes more dollars than the rise added. (The choice "back at the original value" is ADDING THE PERCENT CHANGES INSTEAD OF MULTIPLYING THE FACTORS; the choice $4\\%$ above reads the factor $0.96$ as a gain rather than a loss; the choice $40\\%$ above adds $20$ and $20$ as though both were rises.)',
    },
    {
      q: 'A share of a small company loses $50\\%$ of its value. By what percent must it then rise to get back to exactly its original value?',
      choices: ['$50\\%$', '$200\\%$', '$100\\%$', '$25\\%$'],
      answer: 2,
      solution:
        'The loss multiplies the value by $0.5 = \\frac{1}{2}$, so getting back needs the reciprocal factor $\\frac{1}{1/2} = 2$. A factor of $2$ is a $100\\%$ rise, because the value must gain a whole extra copy of itself. Check a second, independent way with a share worth $\\$60$: the loss leaves $\\$30$, and climbing from $\\$30$ back to $\\$60$ is a gain of $\\$30$, which is $\\frac{30}{30} = 100\\%$ of the $\\$30$ it is starting from ✓. The percent needed is bigger than the percent lost because the rise is measured against the smaller amount. (The choice $50\\%$ assumes matching percents undo each other, which would only reach $\\$45$; the choice $200\\%$ confuses the FACTOR $2$ with a $200\\%$ increase; the choice $25\\%$ halves the drop.)',
    },
    {
      q: 'A rare stamp’s value falls $30\\%$ one year, then rises $50\\%$ the next year. Where does it end up?',
      choices: [
        '$20\\%$ above the original value',
        '$5\\%$ below the original value',
        'Back at the original value',
        '$5\\%$ above the original value',
      ],
      answer: 3,
      solution:
        'Multiply the growth factors: down $30\\%$ is $\\times 0.7$, up $50\\%$ is $\\times 1.5$, and $0.7 \\cdot 1.5 = 1.05$. That is $105\\%$ of the original, so the stamp finishes $5\\%$ ABOVE where it began. Check a second, independent way with a stamp worth $\\$200$: the fall of $30\\%$ takes away $\\$60$, leaving $\\$140$; the rise of $50\\%$ then adds half of $\\$140$, which is $\\$70$, giving $\\$210$ ✓ — that is $\\$10$ more than $\\$200$, and $\\frac{10}{200} = 5\\%$. The percents sit on different bases: the $50\\%$ gain is measured against the shrunken $\\$140$, not against $\\$200$. (The choice $20\\%$ above is ADDING THE PERCENT CHANGES INSTEAD OF MULTIPLYING THE FACTORS; the choice $5\\%$ below reads the factor $1.05$ as a loss; the choice "back at the original value" assumes any fall and rise cancel.)',
    },
  ],
  // p8 — compare two accounts by comparing growth factors per dollar.
  [
    {
      q: 'Bank A pays an $8\\%$ annual rate compounded semiannually. Bank B pays an $8\\%$ annual rate compounded quarterly. Which deal is better for a saver?',
      choices: ['Bank B', 'Bank A', 'They are exactly the same', 'It depends on how long the money stays in'],
      answer: 0,
      solution:
        'Compare what one dollar becomes. Bank A earns $\\frac{8\\%}{2} = 4\\%$ twice a year, so a year multiplies by $(1.04)^2 = 1.0816$. Bank B earns $\\frac{8\\%}{4} = 2\\%$ four times a year, so a year multiplies by $(1.02)^4 = 1.08243216$. Since $1.08243216 > 1.0816$, Bank B wins. Check a second, independent way by stopping at the halfway mark: after $6$ months Bank A has multiplied by $1.04$ while Bank B has multiplied by $(1.02)^2 = 1.0404$, so Bank B is already ahead ✓ — and each bank simply repeats its own half-year performance in the second half, so the leader stays the leader. (Bank A is wrong because the two accounts advertise the same annual rate, and splitting it into more pieces lets the interest start earning interest sooner; "exactly the same" is ADDING THE PERIODS UP as though $2\\% + 2\\% + 2\\% + 2\\%$ were the whole story; and the answer cannot depend on the length of the stay, since Bank B is ahead at every compounding date.)',
    },
    {
      q: 'Bank A pays a $10\\%$ annual rate compounded annually. Bank B pays an $8\\%$ annual rate compounded quarterly. Which deal is better for a saver over one year?',
      choices: ['Bank B', 'Bank A', 'They are exactly the same', 'It depends on how much you deposit'],
      answer: 1,
      solution:
        'Frequency is not the only thing that matters — the rate matters too, so compare the actual factors. Bank A multiplies each dollar by $1.1$ in a year. Bank B earns $\\frac{8\\%}{4} = 2\\%$ per quarter for $4$ quarters, giving $(1.02)^4 = 1.08243216$. Since $1.1 > 1.08243216$, Bank A wins. Check a second, independent way with $\\$10{,}000$ and an upper bound for Bank B: even if Bank B could pay its whole $8\\%$ four separate times at simple interest, that would be $\\$800$ of growth plus the small extra from interest on interest, and Bank A hands over $\\$1000$ of growth outright ✓ — Bank B never catches a rate two full percentage points higher. (Bank B is the trap of ASSUMING MORE FREQUENT COMPOUNDING ALWAYS WINS, which is only true when the annual rates match; "exactly the same" ignores the different rates; and both are plain multipliers, so the size of the deposit cannot change the winner.)',
    },
    {
      q: 'Bank A pays a $20\\%$ annual rate compounded semiannually. Bank B pays a $21\\%$ annual rate compounded annually. Which deal is better for a saver after one year?',
      choices: ['Bank A', 'Bank B', 'It depends on how much you deposit', 'They are exactly the same'],
      answer: 3,
      solution:
        'Bank A earns $\\frac{20\\%}{2} = 10\\%$ per half-year for $2$ periods, so a year multiplies by $\\left(\\frac{11}{10}\\right)^2 = \\frac{121}{100} = 1.21$. Bank B multiplies by $1.21$ in one step. The factors are identical, so the two accounts tie — and since they tie every year, they tie forever. Check a second, independent way with $\\$100$ in each: Bank A goes $\\$100 \\to \\$110 \\to \\$121$, and Bank B goes $\\$100 \\to \\$121$ ✓, the same dollars by two different roads. (Bank A alone is the trap of ASSUMING MORE FREQUENT COMPOUNDING ALWAYS WINS; Bank B alone is the trap of assuming the bigger advertised rate always wins; and because both accounts are just multipliers, the deposit size cannot tip the scale.)',
    },
  ],
  // p9 — part-year balances, where the period count is smaller than a year.
  [
    {
      q: 'You deposit $\\$2500$ at an $8\\%$ annual rate, compounded quarterly. What is the balance after $6$ months?',
      choices: ['$\\$2601$', '$\\$2700$', '$\\$2550$', '$\\$2916$'],
      answer: 0,
      solution:
        'The periodic rate is $\\frac{8\\%}{4} = 2\\%$ per quarter, and $6$ months contains $2$ quarters, so there are $2$ periods. Quarter by quarter: $2500 \\cdot 1.02 = \\$2550$, then $2550 \\cdot 1.02 = \\$2601$. Check a second, independent way with exact fractions: $2500\\left(\\frac{51}{50}\\right)^2 = 2500 \\cdot \\frac{2601}{2500} = \\$2601$ ✓ — the $2500$ cancels exactly, so there are no stray cents. (The choice $\\$2700$ applies the whole year’s $8\\%$ to a half-year of saving; the choice $\\$2550$ STOPS ONE PERIOD SHORT; the choice $\\$2916$ is USING THE ANNUAL RATE AS THE PERIODIC RATE, giving $2500 \\cdot (1.08)^2$.)',
    },
    {
      q: 'You deposit $\\$5000$ at a $4\\%$ annual rate, compounded quarterly. What is the balance after $6$ months?',
      choices: ['$\\$5200$', '$\\$5100.50$', '$\\$5050$', '$\\$5408$'],
      answer: 1,
      solution:
        'Quarterly compounding splits $4\\%$ into $\\frac{4\\%}{4} = 1\\%$ per quarter, and $6$ months is $2$ quarters. Quarter by quarter: $5000 \\cdot 1.01 = \\$5050$, then $5050 \\cdot 1.01 = \\$5100.50$. Check a second, independent way with exact fractions: $5000\\left(\\frac{101}{100}\\right)^2 = 5000 \\cdot \\frac{10201}{10000} = \\frac{10201}{2} = \\$5100.50$ ✓ — halving an odd number of dollars gives exactly fifty cents, nothing rounded. (The choice $\\$5200$ applies the full year’s $4\\%$ to only half a year; the choice $\\$5050$ STOPS ONE PERIOD SHORT; the choice $\\$5408$ is USING THE ANNUAL RATE AS THE PERIODIC RATE, giving $5000 \\cdot (1.04)^2$.)',
    },
    {
      q: 'You deposit $\\$1250$ at an $8\\%$ annual rate, compounded quarterly. What is the balance after $9$ months?',
      choices: ['$\\$1300.50$', '$\\$1325$', '$\\$1326.51$', '$\\$1574.64$'],
      answer: 2,
      solution:
        'The periodic rate is $\\frac{8\\%}{4} = 2\\%$ per quarter, and $9$ months is $3$ quarters, so the exponent is $3$. Quarter by quarter: $1250 \\cdot 1.02 = \\$1275$, then $1275 \\cdot 1.02 = \\$1300.50$, then $1300.50 \\cdot 1.02 = \\$1326.51$. Check a second, independent way with exact fractions: $1250\\left(\\frac{51}{50}\\right)^3 = 1250 \\cdot \\frac{132651}{125000} = \\frac{132651}{100} = \\$1326.51$ ✓ — dividing by $100$ moves the decimal point two places and stops, so the cents are exact. (The choice $\\$1300.50$ STOPS ONE PERIOD SHORT at $6$ months; the choice $\\$1325$ is USING SIMPLE INTEREST, paying $8\\%$ of $\\$1250$ for three quarters of a year; the choice $\\$1574.64$ is USING THE ANNUAL RATE AS THE PERIODIC RATE, giving $1250 \\cdot (1.08)^3$.)',
    },
  ],
  // p10 — recover the ANNUAL rate: find the periodic rate first, then scale up.
  [
    {
      q: 'A deposit of $\\$500$, compounded semiannually, grows to $\\$605$ in exactly $1$ year. What is the annual rate?',
      choices: ['$20\\%$', '$10\\%$', '$21\\%$', '$10.5\\%$'],
      answer: 0,
      solution:
        'Work out the total growth factor first: $\\frac{605}{500} = \\frac{121}{100} = 1.21$. One year of semiannual compounding is $2$ periods, so if $s$ is the half-year rate then $(1 + s)^2 = 1.21$, giving $1 + s = 1.1$ and $s = 10\\%$ per half-year. The annual rate is the periodic rate times the number of periods per year: $2 \\cdot 10\\% = 20\\%$. Check a second, independent way by running $\\$500$ forward at $10\\%$ twice: $500 \\to \\$550 \\to \\$605$ ✓, exactly the balance in the problem. (The choice $10\\%$ REPORTS THE PERIODIC RATE AS THE ANNUAL RATE; the choice $21\\%$ REPORTS THE TOTAL GROWTH AS THE ANNUAL RATE; the choice $10.5\\%$ halves that total growth, but growth factors multiply rather than add, so halving $21\\%$ is not the way back.)',
    },
    {
      q: 'A deposit of $\\$1000$, compounded quarterly, grows to $\\$1040.40$ in exactly $6$ months. What is the annual rate?',
      choices: ['$4\\%$', '$8\\%$', '$2\\%$', '$4.04\\%$'],
      answer: 1,
      solution:
        'The money grew by a factor of $\\frac{1040.40}{1000} = 1.0404 = \\frac{2601}{2500}$, and $6$ months of quarterly compounding is $2$ periods. So if $q$ is the quarterly rate, $(1 + q)^2 = \\frac{2601}{2500}$, giving $1 + q = \\frac{51}{50} = 1.02$ and $q = 2\\%$ per quarter. A year holds $4$ quarters, so the annual rate is $4 \\cdot 2\\% = 8\\%$ — the scale-up uses the periods in a YEAR, not the $2$ periods this problem happened to cover. Check a second, independent way by going forward: $1000 \\to \\$1020 \\to \\$1040.40$ ✓. (The choice $4\\%$ multiplies the quarterly rate by the $2$ periods in the question instead of the $4$ in a year; the choice $2\\%$ REPORTS THE PERIODIC RATE AS THE ANNUAL RATE; the choice $4.04\\%$ REPORTS THE TOTAL GROWTH over the six months.)',
    },
    {
      q: 'A deposit of $\\$5000$, compounded quarterly, grows to $\\$5304.50$ in exactly $6$ months. What is the annual rate?',
      choices: ['$3\\%$', '$6\\%$', '$6.09\\%$', '$12\\%$'],
      answer: 3,
      solution:
        'The growth factor is $\\frac{5304.50}{5000} = 1.0609 = \\frac{10609}{10000}$, and $6$ months of quarterly compounding is $2$ periods. So $(1 + q)^2 = \\frac{10609}{10000}$, which gives $1 + q = \\frac{103}{100} = 1.03$ and $q = 3\\%$ per quarter. Multiply by the $4$ quarters in a year: the annual rate is $4 \\cdot 3\\% = 12\\%$. Check a second, independent way by running the deposit forward: $5000 \\cdot 1.03 = \\$5150$, then $5150 \\cdot 1.03 = \\$5304.50$ ✓ — exact to the cent. (The choice $3\\%$ REPORTS THE PERIODIC RATE AS THE ANNUAL RATE; the choice $6\\%$ scales up by the $2$ periods in the question instead of the $4$ periods in a year; the choice $6.09\\%$ REPORTS THE TOTAL GROWTH over the six months.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 19,
  sections: {
    '19.3': s193,
  },
}
