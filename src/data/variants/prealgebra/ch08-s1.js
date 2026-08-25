// Prealgebra chapter 8 — variations for sections 8.1-8.3.
// All problems and solutions are original MathQuest content.

const s81 = [
  // p1 — a percent is a fraction with denominator 100
  [
    {
      q: 'The fraction $\\frac{41}{100}$ is the same as which percent?',
      choices: ['$41\\%$', '$0.41\\%$', '$4.1\\%$', '$59\\%$'],
      answer: 0,
      solution:
        'A denominator of $100$ is exactly what "percent" means, so $\\frac{41}{100} = 41\\%$ — no work needed. The trap in $0.41\\%$ is writing the decimal $0.41$ and then bolting a $\\%$ sign onto it, which shrinks the number by another factor of $100$. Sliding the point only one place gives $4.1\\%$, and $59\\%$ is the part left OVER, since $100 - 41 = 59$.',
    },
    {
      q: 'Which fraction means the same thing as $9\\%$?',
      choices: ['$\\frac{9}{10}$', '$\\frac{100}{9}$', '$\\frac{9}{100}$', '$\\frac{9}{1000}$'],
      answer: 2,
      solution:
        'Percent means "per hundred", so $9\\%$ is $9$ out of every $100$: the fraction $\\frac{9}{100}$. The denominator is always $100$ — $\\frac{9}{10}$ would be "per ten" and $\\frac{9}{1000}$ would be "per thousand". Turning the fraction upside down to $\\frac{100}{9}$ gives a number bigger than $11$, nowhere near a small percent.',
    },
    {
      q: 'Three of the choices below are equal to $70\\%$. Which one is NOT?',
      choices: ['$\\frac{7}{10}$', '$\\frac{70}{100}$', '$0.7$', '$\\frac{70}{10}$'],
      answer: 3,
      solution:
        'Start from the definition: $70\\% = \\frac{70}{100}$, which reduces to $\\frac{7}{10}$ and converts to the decimal $0.7$ — those three are the same number wearing three costumes. But $\\frac{70}{10} = 7$, a whole seven wholes, which would be $700\\%$. Putting the $10$ under the $70$ mixes up "per ten" with "per hundred".',
    },
  ],
  // p2 — percent to decimal
  [
    {
      q: 'Write $135\\%$ as a decimal.',
      choices: ['$1.35$', '$13.5$', '$0.135$', '$135.0$'],
      answer: 0,
      solution:
        'Slide the decimal point two places to the left: $135\\% \\to 1.35$. Check it against the meaning — $135\\%$ is more than a whole, so the decimal must be bigger than $1$, which rules out $0.135$ straight away. Moving only one place gives $13.5$, and not moving at all leaves $135.0$.',
    },
    {
      q: 'Write $2.5\\%$ as a decimal.',
      choices: ['$0.25$', '$0.025$', '$2.5$', '$0.0025$'],
      answer: 1,
      solution:
        'Two places to the left: $2.5\\% \\to 0.025$. It helps to see it as a fraction: $2.5\\% = \\frac{2.5}{100} = \\frac{25}{1000} = 0.025$. Moving one place gives $0.25$, which is $25\\%$ — ten times too big. Not moving at all leaves $2.5$, and moving three places gives $0.0025$.',
    },
    {
      q: 'Ravi writes $8\\%$ as the decimal $0.8$. What went wrong?',
      choices: [
        'Nothing — $0.8$ is correct',
        'He slid the decimal point to the right instead of to the left',
        'He should not have moved the decimal point at all',
        'He slid the decimal point one place instead of two',
      ],
      answer: 3,
      solution:
        'Percent means out of $100$, so $8\\% = \\frac{8}{100} = 0.08$ — two places to the left. Ravi stopped after one place, and his $0.8$ is really $80\\%$, ten times too big. Sliding to the right instead would have given $800$, and leaving the point alone would have given $8$; both are far worse.',
    },
  ],
  // p3 — decimal to percent
  [
    {
      q: 'Write $0.08$ as a percent.',
      choices: ['$0.8\\%$', '$8\\%$', '$80\\%$', '$0.08\\%$'],
      answer: 1,
      solution:
        'Slide the decimal point two places to the right: $0.08 = 8\\%$. Check with a fraction: $0.08 = \\frac{8}{100}$, and "$8$ per hundred" is $8\\%$. Moving one place gives $0.8\\%$, forgetting to move at all gives $0.08\\%$, and reading $0.08$ as $0.8$ gives $80\\%$ — ten times too big.',
    },
    {
      q: 'Write $1.4$ as a percent.',
      choices: ['$14\\%$', '$0.014\\%$', '$140\\%$', '$1.4\\%$'],
      answer: 2,
      solution:
        'Two places to the right: $1.4 = 1.40 = 140\\%$. Since $1.4$ is more than one whole, the percent must be more than $100\\%$ — that alone rules out the other three. Moving one place gives $14\\%$, moving the wrong direction gives $0.014\\%$, and leaving the point alone gives $1.4\\%$.',
    },
    {
      q: 'Write $0.125$ as a percent.',
      choices: ['$125\\%$', '$1.25\\%$', '$0.125\\%$', '$12.5\\%$'],
      answer: 3,
      solution:
        'Two places to the right: $0.125 = 12.5\\%$. Sanity check: $0.125$ is one eighth, a bit more than a tenth, so the percent should be a bit more than $10\\%$. ✓ Moving three places gives $125\\%$ (which would be more than a whole), moving one place gives $1.25\\%$, and not moving gives $0.125\\%$.',
    },
  ],
  // p4 — fraction to percent
  [
    {
      q: 'Write $\\frac{7}{20}$ as a percent.',
      choices: ['$35\\%$', '$7\\%$', '$65\\%$', '$3.5\\%$'],
      answer: 0,
      solution:
        'Scale the denominator up to $100$: multiply top and bottom by $5$ to get $\\frac{7}{20} = \\frac{35}{100} = 35\\%$. Reading the numerator straight off gives $7\\%$; the complement $65\\%$ is the part NOT taken; and $3.5\\%$ comes from writing $0.35$ and then sliding the point only one place.',
    },
    {
      q: 'Write $\\frac{9}{25}$ as a percent.',
      choices: ['$9\\%$', '$36\\%$', '$25\\%$', '$64\\%$'],
      answer: 1,
      solution:
        'Multiply top and bottom by $4$ to reach hundredths: $\\frac{9}{25} = \\frac{36}{100} = 36\\%$. Grabbing the numerator gives $9\\%$ and grabbing the denominator gives $25\\%$ — but a percent needs BOTH numbers. The leftover $64\\%$ describes the other $\\frac{16}{25}$ of the whole.',
    },
    {
      q: 'Which of these fractions is equal to $24\\%$?',
      choices: ['$\\frac{24}{10}$', '$\\frac{1}{24}$', '$\\frac{6}{25}$', '$\\frac{12}{100}$'],
      answer: 2,
      solution:
        'Start with $24\\% = \\frac{24}{100}$ and reduce by dividing top and bottom by $4$: $\\frac{6}{25}$. Check by scaling back up — $\\frac{6}{25} = \\frac{24}{100}$. ✓ The choice $\\frac{12}{100}$ halves only the top and forgets the bottom, $\\frac{24}{10}$ uses "per ten", and $\\frac{1}{24}$ reads the percent as "one out of $24$".',
    },
  ],
  // p5 — a percent of a number
  [
    {
      q: 'What is $40\\%$ of $65$?',
      choices: ['$260$', '$26$', '$2.6$', '$25$'],
      answer: 1,
      solution:
        '$10\\%$ of $65$ is $6.5$, so $40\\%$ is four of those: $4 \\times 6.5 = 26$. Directly: $0.40 \\times 65 = 26$. Using $4$ instead of $0.4$ gives $260$, sliding one place too far gives $2.6$, and $25$ comes from computing $65 - 40$, which treats the percent as a plain number.',
    },
    {
      q: 'What is $5\\%$ of $240$?',
      choices: ['$120$', '$1.2$', '$12$', '$48$'],
      answer: 2,
      solution:
        '$10\\%$ of $240$ is $24$, and $5\\%$ is half of that: $12$. Directly: $0.05 \\times 240 = 12$. Reading $5\\%$ as $0.5$ gives $120$ (that is $50\\%$), sliding one place too far gives $1.2$, and $240 \\div 5 = 48$ divides by $5$ instead of taking five hundredths.',
    },
    {
      q: 'A jar holds $60$ marbles, and $35\\%$ of them are green. How many green marbles are in the jar?',
      choices: ['$2100$', '$25$', '$6$', '$21$'],
      answer: 3,
      solution:
        '$10\\%$ of $60$ is $6$, so $30\\%$ is $18$; $5\\%$ is $3$; together $18 + 3 = 21$ green marbles. Directly: $0.35 \\times 60 = 21$. Multiplying $60 \\times 35$ without dividing by $100$ gives the impossible $2100$, $60 - 35 = 25$ subtracts the percent as a count, and $6$ stops after finding just $10\\%$.',
    },
  ],
  // p6 — percents bigger than 100
  [
    {
      q: 'What is $200\\%$ of $18$?',
      choices: ['$36$', '$18$', '$3.6$', '$360$'],
      answer: 0,
      solution:
        '$100\\%$ of a number is the number itself, so $200\\%$ is two copies: $2 \\times 18 = 36$. Answering $18$ stops at $100\\%$, reading $200\\%$ as $0.2$ gives $3.6$, and reading it as $20$ gives $360$. Only one of the four is exactly double.',
    },
    {
      q: 'What is $250\\%$ of $40$?',
      choices: ['$10$', '$100$', '$1000$', '$65$'],
      answer: 1,
      solution:
        '$250\\% = 2.5$, so $2.5 \\times 40 = 100$. Think of it as two whole $40$s plus a half: $40 + 40 + 20 = 100$. Dropping the leading $2$ and using $25\\%$ gives $10$, using $25$ instead of $2.5$ gives $1000$, and $40 + 25 = 65$ adds the percent as a plain number.',
    },
    {
      q: 'Last month a shop sold $60$ kites. This month it sold $125\\%$ as many. How many kites did it sell this month?',
      choices: ['$15$', '$185$', '$7500$', '$75$'],
      answer: 3,
      solution:
        '$125\\% = 1.25$, so this month\'s sales are $1.25 \\times 60 = 75$ kites — all of last month\'s $60$ plus a quarter more. Answering $15$ finds only the extra $25\\%$ and forgets the original $60$, $60 + 125 = 185$ adds the percent as a count of kites, and $60 \\times 125 = 7500$ skips dividing by $100$.',
    },
  ],
  // p7 — what percent of
  [
    {
      q: '$14$ is what percent of $35$?',
      choices: ['$40\\%$', '$21\\%$', '$250\\%$', '$14\\%$'],
      answer: 0,
      solution:
        'Part over whole: $\\frac{14}{35} = \\frac{2}{5} = \\frac{40}{100} = 40\\%$. Subtracting instead gives $35 - 14 = 21$, but a difference is not a percent. Flipping the fraction to $\\frac{35}{14} = 250\\%$ answers the reverse question, and $14\\%$ just reuses the part as though it were already a percent.',
    },
    {
      q: '$27$ is what percent of $45$?',
      choices: ['$18\\%$', '$60\\%$', '$27\\%$', '$40\\%$'],
      answer: 1,
      solution:
        'Part over whole: $\\frac{27}{45} = \\frac{3}{5} = 60\\%$. The gap $45 - 27 = 18$ is a difference, not a percent, and $27\\%$ reuses the part directly. The tempting $40\\%$ is the percent of the whole that is NOT counted, since $\\frac{18}{45} = 40\\%$ — and indeed $60\\% + 40\\% = 100\\%$.',
    },
    {
      q: 'A test has $40$ questions and Nina got $28$ of them right. What percent did she get right?',
      choices: ['$28\\%$', '$12\\%$', '$70\\%$', '$30\\%$'],
      answer: 2,
      solution:
        'Part over whole: $\\frac{28}{40} = \\frac{7}{10} = \\frac{70}{100} = 70\\%$. Using the raw count gives $28\\%$, and the $12$ questions she missed give $12\\%$ if you mistake a difference for a percent. The $30\\%$ is the percent she got WRONG, since $\\frac{12}{40} = 30\\%$.',
    },
  ],
  // p8 — working backwards to the whole
  [
    {
      q: '$40\\%$ of a number is $18$. What is the number?',
      choices: ['$45$', '$7.2$', '$58$', '$4.5$'],
      answer: 0,
      solution:
        'We know $0.4 \\times n = 18$, so undo the multiplication by dividing: $n = 18 \\div 0.4 = 45$. Check: $40\\%$ of $45$ is $18$. ✓ Multiplying instead gives $0.4 \\times 18 = 7.2$, which finds a percent OF $18$; $18 + 40 = 58$ adds the percent as a number; and $18 \\div 4 = 4.5$ divides by $4$ rather than by $0.4$.',
    },
    {
      q: '$15\\%$ of a number is $9$. What is the number?',
      choices: ['$1.35$', '$24$', '$60$', '$6$'],
      answer: 2,
      solution:
        'From $0.15 \\times n = 9$ we get $n = 9 \\div 0.15 = 60$. Check: $10\\%$ of $60$ is $6$ and $5\\%$ is $3$, and $6 + 3 = 9$. ✓ Multiplying gives $0.15 \\times 9 = 1.35$, adding gives $9 + 15 = 24$, and dividing by $1.5$ instead of $0.15$ gives $6$ — a decimal point out of place.',
    },
    {
      q: 'In a theatre, $12\\%$ of the seats are broken, and that comes to $30$ seats. How many seats does the theatre have?',
      choices: ['$3.6$', '$42$', '$360$', '$250$'],
      answer: 3,
      solution:
        'The broken seats are $12\\%$ of the total: $0.12 \\times n = 30$, so $n = 30 \\div 0.12 = 250$. Check: $12\\%$ of $250$ is $30$. ✓ Multiplying gives $0.12 \\times 30 = 3.6$, adding gives $30 + 12 = 42$, and $30 \\times 12 = 360$ multiplies by $12$ instead of dividing by $0.12$.',
    },
  ],
  // p9 — the swap trick for awkward percents
  [
    {
      q: 'What is $6\\%$ of $50$?',
      choices: ['$30$', '$3$', '$0.3$', '$56$'],
      answer: 1,
      solution:
        'Swap the two numbers: $6\\%$ of $50$ equals $50\\%$ of $6$, because both are $\\frac{6 \\times 50}{100}$ — and half of $6$ is $3$. Reading $6\\%$ as $0.6$ gives $30$, sliding one place too far gives $0.3$, and $50 + 6 = 56$ adds the percent as a plain number.',
    },
    {
      q: 'What is $16\\%$ of $25$?',
      choices: ['$40$', '$0.4$', '$4$', '$9$'],
      answer: 2,
      solution:
        'Swap them: $16\\%$ of $25$ equals $25\\%$ of $16$, and a quarter of $16$ is $4$. Directly: $0.16 \\times 25 = 4$. Using $1.6$ instead of $0.16$ gives $40$, using $0.016$ gives $0.4$, and $25 - 16 = 9$ subtracts the percent as a count.',
    },
    {
      q: 'What is $18\\%$ of $200$?',
      choices: ['$360$', '$3.6$', '$182$', '$36$'],
      answer: 3,
      solution:
        'Swap them: $18\\%$ of $200$ equals $200\\%$ of $18$, which is simply double: $36$. Directly: $0.18 \\times 200 = 36$. Using $1.8$ gives $360$, using $0.018$ gives $3.6$, and $200 - 18 = 182$ treats the percent as a count to remove.',
    },
  ],
  // p10 — one percent statement feeding another
  [
    {
      q: '$60\\%$ of a number equals $50\\%$ of $36$. What is the number?',
      choices: ['$30$', '$18$', '$10.8$', '$21.6$'],
      answer: 0,
      solution:
        'Work the known side first: $50\\%$ of $36$ is half of $36$, which is $18$. Now $0.6 \\times n = 18$, so $n = 18 \\div 0.6 = 30$. Check: $60\\%$ of $30$ is $18$. ✓ Stopping at $18$ answers only half the question, $0.6 \\times 18 = 10.8$ multiplies when it should divide, and $0.6 \\times 36 = 21.6$ ignores the $50\\%$ entirely.',
    },
    {
      q: '$20\\%$ of a number equals $30\\%$ of $50$. What is the number?',
      choices: ['$15$', '$75$', '$3$', '$10$'],
      answer: 1,
      solution:
        'First, $30\\%$ of $50$ is $0.3 \\times 50 = 15$. Then $0.2 \\times n = 15$, so $n = 15 \\div 0.2 = 75$. Check: $20\\%$ of $75$ is $15$. ✓ Answering $15$ stops one step early, $0.2 \\times 15 = 3$ multiplies instead of dividing, and $0.2 \\times 50 = 10$ pairs the $20\\%$ with the wrong number.',
    },
    {
      q: '$75\\%$ of a number equals $25\\%$ of $48$. What is the number?',
      choices: ['$12$', '$9$', '$16$', '$36$'],
      answer: 2,
      solution:
        'A quarter of $48$ is $12$, so we need $0.75 \\times n = 12$, giving $n = 12 \\div 0.75 = 16$. Check: three quarters of $16$ is $12$. ✓ Stopping at $12$ skips the second step, $0.75 \\times 12 = 9$ multiplies instead of dividing, and $0.75 \\times 48 = 36$ applies the $75\\%$ to the wrong number.',
    },
  ],
]

const s82 = [
  // p1 — a discount, then the price you actually pay
  [
    {
      q: 'A $\\$60$ pair of shoes is on sale for $30\\%$ off. What is the sale price?',
      choices: ['$\\$42$', '$\\$18$', '$\\$30$', '$\\$78$'],
      answer: 0,
      solution:
        'After $30\\%$ off you pay $70\\%$ of the price: $0.70 \\times 60 = 42$, so $\\$42$. The $\\$18$ is the discount itself ($0.30 \\times 60$), not what you hand over. Subtracting $30$ as dollars instead of $30\\%$ gives $\\$30$, and $\\$78$ comes from ADDING $30\\%$ — a sale should never cost more.',
    },
    {
      q: 'A $\\$24$ board game is on sale for $15\\%$ off. What is the sale price?',
      choices: ['$\\$3.60$', '$\\$20.40$', '$\\$9$', '$\\$27.60$'],
      answer: 1,
      solution:
        'You pay $85\\%$: $0.85 \\times 24 = 20.40$, so $\\$20.40$. Check the long way — $15\\%$ of $\\$24$ is $\\$3.60$, and $24 - 3.60 = 20.40$. ✓ The $\\$3.60$ on its own is the money saved, $24 - 15 = 9$ treats the percent as dollars, and $\\$27.60$ adds the $15\\%$ instead of removing it.',
    },
    {
      q: 'A store takes $40\\%$ off everything. Priya buys a jacket that normally costs $\\$45$. What does she pay?',
      choices: ['$\\$18$', '$\\$5$', '$\\$63$', '$\\$27$'],
      answer: 3,
      solution:
        'Taking $40\\%$ off leaves $60\\%$: $0.6 \\times 45 = 27$, so Priya pays $\\$27$. The $\\$18$ is what she SAVES, since $0.4 \\times 45 = 18$, and $18 + 27 = 45$ puts the original back together. ✓ Subtracting $40$ as dollars gives $\\$5$, and $1.4 \\times 45 = 63$ adds the discount on instead of taking it off.',
    },
  ],
  // p2 — a score written as a percent
  [
    {
      q: 'Sam answered $21$ of the $25$ questions on a quiz correctly. What was his score as a percent?',
      choices: ['$21\\%$', '$84\\%$', '$4\\%$', '$16\\%$'],
      answer: 1,
      solution:
        'Part over whole: $\\frac{21}{25}$. Multiply top and bottom by $4$ to reach hundredths: $\\frac{84}{100} = 84\\%$. The raw count $21$ is not a percent by itself, the $4$ he missed is a difference rather than a percent, and $16\\%$ is the share he got WRONG, since $\\frac{4}{25} = 16\\%$.',
    },
    {
      q: 'On a $40$-question quiz, Rosa got $26$ right. What percent did she get right?',
      choices: ['$26\\%$', '$14\\%$', '$65\\%$', '$35\\%$'],
      answer: 2,
      solution:
        'Part over whole: $\\frac{26}{40} = \\frac{13}{20} = \\frac{65}{100} = 65\\%$. Using the count alone gives $26\\%$, and the $14$ questions missed give $14\\%$ if a difference is mistaken for a percent. Her wrong answers make up $\\frac{14}{40} = 35\\%$, so $65\\% + 35\\% = 100\\%$. ✓',
    },
    {
      q: 'Kofi spelled $27$ of $30$ words correctly. What percent did he spell correctly?',
      choices: ['$27\\%$', '$3\\%$', '$10\\%$', '$90\\%$'],
      answer: 3,
      solution:
        'Part over whole: $\\frac{27}{30} = \\frac{9}{10} = \\frac{90}{100} = 90\\%$. The count $27$ is not a percent, the $3$ words missed are a difference, and $10\\%$ is the share he got wrong, since $\\frac{3}{30} = 10\\%$.',
    },
  ],
  // p3 — how much tax is charged
  [
    {
      q: 'The sales tax rate is $5\\%$. How much tax is charged on a $\\$60$ jacket?',
      choices: ['$\\$3.00$', '$\\$5.00$', '$\\$0.30$', '$\\$12.00$'],
      answer: 0,
      solution:
        'The tax is $5\\%$ of the price: $0.05 \\times 60 = 3$, so $\\$3.00$. Reading the rate as dollars gives $\\$5.00$, which would be the tax on a $\\$100$ jacket. Using $0.005$ gives $\\$0.30$, and $60 \\div 5 = 12$ divides by $5$ instead of taking five hundredths.',
    },
    {
      q: 'A $\\$40$ pair of headphones is taxed at $7\\%$. How much is the tax?',
      choices: ['$\\$7.00$', '$\\$0.28$', '$\\$2.80$', '$\\$28.00$'],
      answer: 2,
      solution:
        'Tax is $7\\%$ of $\\$40$: $0.07 \\times 40 = 2.80$, so $\\$2.80$. The rate read as dollars gives $\\$7.00$; using $0.007$ gives $\\$0.28$; and using $0.7$ gives $\\$28.00$, which would be almost as much tax as the headphones cost.',
    },
    {
      q: 'The tax rate is $4\\%$. How much tax is charged on a $\\$150$ bicycle?',
      choices: ['$\\$4.00$', '$\\$60.00$', '$\\$0.60$', '$\\$6.00$'],
      answer: 3,
      solution:
        'Tax is $4\\%$ of $\\$150$: $0.04 \\times 150 = 6$, so $\\$6.00$. Reading the rate as dollars gives $\\$4.00$, using $0.4$ gives $\\$60.00$, and using $0.004$ gives $\\$0.60$. A quick check: $1\\%$ of $\\$150$ is $\\$1.50$, and four of those is $\\$6.00$. ✓',
    },
  ],
  // p4 — how much is the tip
  [
    {
      q: 'A meal costs $\\$45$, and the family leaves a $15\\%$ tip. How much is the tip?',
      choices: ['$\\$6.75$', '$\\$4.50$', '$\\$51.75$', '$\\$15.00$'],
      answer: 0,
      solution:
        '$10\\%$ of $\\$45$ is $\\$4.50$ and $5\\%$ is half of that, $\\$2.25$; together the tip is $\\$6.75$. Directly: $0.15 \\times 45 = 6.75$. The $\\$4.50$ is only the $10\\%$ part, $\\$51.75$ is the total bill INCLUDING the tip, and $\\$15.00$ reads the rate as dollars.',
    },
    {
      q: 'The bill at a café is $\\$32$, and Dad leaves a $25\\%$ tip. How much is the tip?',
      choices: ['$\\$3.20$', '$\\$8.00$', '$\\$40.00$', '$\\$24.00$'],
      answer: 1,
      solution:
        'A quarter of $\\$32$ is $\\$8.00$, and $0.25 \\times 32 = 8$ agrees. The $\\$3.20$ is $10\\%$ of the bill, $\\$40.00$ is the bill plus the tip rather than the tip itself, and $\\$24.00$ is what you would get by taking $25\\%$ OFF — a tip is added, not discounted.',
    },
    {
      q: 'A dinner bill is $\\$60$, and the tip is $18\\%$ of the bill. How much is the tip?',
      choices: ['$\\$6.00$', '$\\$70.80$', '$\\$10.80$', '$\\$18.00$'],
      answer: 2,
      solution:
        'The tip is $18\\%$ of $\\$60$: $0.18 \\times 60 = 10.80$, so $\\$10.80$. Building it up, $10\\%$ is $\\$6.00$, $5\\%$ is $\\$3.00$ and $3\\%$ is $\\$1.80$, and $6 + 3 + 1.80 = 10.80$. ✓ The $\\$6.00$ is only the $10\\%$ step, $\\$70.80$ is the grand total, and $\\$18.00$ reads the rate as dollars.',
    },
  ],
  // p5 — commission
  [
    {
      q: 'A bookseller earns a $4\\%$ commission on every sale. How much does she earn on a $\\$250$ set of books?',
      choices: ['$\\$10$', '$\\$100$', '$\\$1$', '$\\$62.50$'],
      answer: 0,
      solution:
        'Commission is a percent of the sale: $0.04 \\times 250 = 10$, so $\\$10$. Check: $1\\%$ of $\\$250$ is $\\$2.50$, and four of those is $\\$10$. ✓ Using $0.4$ gives $\\$100$, using $0.004$ gives $\\$1$, and $250 \\div 4 = 62.50$ divides by $4$ instead of taking four hundredths.',
    },
    {
      q: 'A ticket agent earns a $3\\%$ commission. How much does he earn for selling $\\$2500$ worth of tickets?',
      choices: ['$\\$750$', '$\\$7.50$', '$\\$75$', '$\\$3$'],
      answer: 2,
      solution:
        '$1\\%$ of $\\$2500$ is $\\$25$, so $3\\%$ is $\\$75$. Directly: $0.03 \\times 2500 = 75$. Using $0.3$ gives $\\$750$, using $0.003$ gives $\\$7.50$, and $\\$3$ simply reads the rate as dollars.',
    },
    {
      q: 'An artist is paid $15\\%$ of whatever her prints sell for. Her prints sold for $\\$800$ last month. How much was she paid?',
      choices: ['$\\$80$', '$\\$1200$', '$\\$12$', '$\\$120$'],
      answer: 3,
      solution:
        '$10\\%$ of $\\$800$ is $\\$80$ and $5\\%$ is $\\$40$, so $15\\%$ is $\\$120$. Directly: $0.15 \\times 800 = 120$. The $\\$80$ stops at $10\\%$, $\\$1200$ uses $1.5$ — that is $150\\%$, more than the prints even sold for — and $\\$12$ uses $0.015$.',
    },
  ],
  // p6 — pay the complement in one multiplication
  [
    {
      q: 'A $\\$120$ tent is marked $40\\%$ off. What do you pay?',
      choices: ['$\\$48$', '$\\$72$', '$\\$80$', '$\\$168$'],
      answer: 1,
      solution:
        'Marked $40\\%$ off means you pay $60\\%$: $0.6 \\times 120 = 72$, so $\\$72$. The $\\$48$ is the money saved, since $0.4 \\times 120 = 48$, and $48 + 72 = 120$ rebuilds the original. ✓ Subtracting $40$ as dollars gives $\\$80$, and $1.4 \\times 120 = 168$ adds the percent instead of removing it.',
    },
    {
      q: 'A $\\$90$ scooter is marked $35\\%$ off. What do you pay?',
      choices: ['$\\$31.50$', '$\\$55$', '$\\$58.50$', '$\\$121.50$'],
      answer: 2,
      solution:
        'You pay $100\\% - 35\\% = 65\\%$: $0.65 \\times 90 = 58.50$, so $\\$58.50$. The $\\$31.50$ is the discount, since $0.35 \\times 90 = 31.50$; $90 - 35 = 55$ treats the percent as dollars; and $\\$121.50$ comes from multiplying by $1.35$ instead of $0.65$.',
    },
    {
      q: 'A $\\$64$ chair is marked $25\\%$ off. What do you pay?',
      choices: ['$\\$16$', '$\\$39$', '$\\$80$', '$\\$48$'],
      answer: 3,
      solution:
        'You pay three quarters of the price: $0.75 \\times 64 = 48$, so $\\$48$. The $\\$16$ is the quarter you save, $64 - 25 = 39$ subtracts the percent as dollars, and $1.25 \\times 64 = 80$ raises the price by a quarter instead of lowering it.',
    },
  ],
  // p7 — a percent of a percent, counted out
  [
    {
      q: 'A library has $400$ books. $25\\%$ of them are picture books, and $20\\%$ of the picture books are about animals. How many picture books are about animals?',
      choices: ['$20$', '$100$', '$80$', '$180$'],
      answer: 0,
      solution:
        'One link at a time. Picture books: $0.25 \\times 400 = 100$. Animal picture books: $20\\%$ of those $100$, which is $20$. Stopping at $100$ answers the first step only; $0.2 \\times 400 = 80$ applies the second percent to the whole library instead of to the picture books; and adding the percents to get $45\\%$ of $400$ gives $180$.',
    },
    {
      q: 'A camp has $200$ campers. $40\\%$ of them are in the swimming group, and $30\\%$ of the swimmers can dive. How many campers can dive?',
      choices: ['$80$', '$24$', '$60$', '$140$'],
      answer: 1,
      solution:
        'Swimmers: $0.4 \\times 200 = 80$. Divers: $30\\%$ of those $80$, which is $0.3 \\times 80 = 24$. The $80$ is just the first step, $0.3 \\times 200 = 60$ uses the whole camp as the base for the second percent, and adding to $70\\%$ of $200$ gives $140$ — more campers than the swimming group even has.',
    },
    {
      q: 'A farm has $300$ chickens. $60\\%$ of them are hens, and $10\\%$ of the hens are white. How many white hens are there?',
      choices: ['$180$', '$30$', '$210$', '$18$'],
      answer: 3,
      solution:
        'Hens: $0.6 \\times 300 = 180$. White hens: $10\\%$ of $180$, which is $18$. Answering $180$ stops after the first link, $0.1 \\times 300 = 30$ takes a tenth of ALL the chickens rather than of the hens, and adding the percents to get $70\\%$ of $300$ gives $210$.',
    },
  ],
  // p8 — comparing two quantities with a percent
  [
    {
      q: 'Tom read $45$ pages and Lena read $60$. Tom\'s total is what percent of Lena\'s?',
      choices: ['$75\\%$', '$133\\frac{1}{3}\\%$', '$15\\%$', '$25\\%$'],
      answer: 0,
      solution:
        'The number after "of" goes on the bottom: $\\frac{45}{60} = \\frac{3}{4} = 75\\%$. Flipping to $\\frac{60}{45} = \\frac{4}{3} = 133\\frac{1}{3}\\%$ answers the reverse question. The $15$-page gap is a difference, not a percent, and $\\frac{15}{60} = 25\\%$ says how much LESS Tom read, not what percent his total is.',
    },
    {
      q: 'A blue ribbon is $35$ cm long and a red ribbon is $28$ cm long. The blue ribbon\'s length is what percent of the red ribbon\'s?',
      choices: ['$80\\%$', '$125\\%$', '$7\\%$', '$25\\%$'],
      answer: 1,
      solution:
        'The red ribbon is the base, so it goes on the bottom: $\\frac{35}{28} = \\frac{5}{4} = 125\\%$. Since blue is the longer ribbon, the answer must be more than $100\\%$ — that rules out $80\\%$, which is really $\\frac{28}{35}$, the flipped comparison. The $7$ cm gap is a difference, and $\\frac{7}{28} = 25\\%$ says how much LONGER blue is.',
    },
    {
      q: 'Nia has $\\$36$ and Ben has $\\$40$. Nia\'s money is what percent of Ben\'s?',
      choices: ['$111\\frac{1}{9}\\%$', '$4\\%$', '$90\\%$', '$10\\%$'],
      answer: 2,
      solution:
        'Ben\'s amount is the base: $\\frac{36}{40} = \\frac{9}{10} = 90\\%$. Flipping to $\\frac{40}{36} = \\frac{10}{9} = 111\\frac{1}{9}\\%$ compares the wrong way round. The $\\$4$ gap is a difference, and $\\frac{4}{40} = 10\\%$ tells you how much less Nia has — the leftover that makes $90\\% + 10\\% = 100\\%$.',
    },
  ],
  // p9 — discount first, then tax on the sale price
  [
    {
      q: 'A $\\$200$ desk is discounted $25\\%$, and then $6\\%$ sales tax is added to the sale price. What is the final cost?',
      choices: ['$\\$150.00$', '$\\$159.00$', '$\\$212.00$', '$\\$162.00$'],
      answer: 1,
      solution:
        'Each step needs its own base. Sale price: $0.75 \\times 200 = 150$. Tax on the SALE price: $1.06 \\times 150 = 159$, so $\\$159.00$. Stopping at $\\$150.00$ forgets the tax, $1.06 \\times 200 = 212$ forgets the discount, and $\\$162.00$ charges $6\\%$ of the original $\\$200$ — that is $\\$12$ — instead of $6\\%$ of $\\$150$.',
    },
    {
      q: 'An $\\$80$ coat is discounted $10\\%$, and then $5\\%$ sales tax is added to the sale price. What is the final cost?',
      choices: ['$\\$72.00$', '$\\$84.00$', '$\\$75.60$', '$\\$76.00$'],
      answer: 2,
      solution:
        'Sale price: $0.9 \\times 80 = 72$. Tax on that: $1.05 \\times 72 = 75.60$, so $\\$75.60$. The $\\$72.00$ leaves out the tax, $1.05 \\times 80 = 84$ taxes the original and skips the discount, and $\\$76.00$ adds $5\\%$ of $\\$80$ — that is $\\$4$ — to the sale price, the right idea with the wrong base.',
    },
    {
      q: 'A $\\$250$ guitar is discounted $40\\%$, and then $8\\%$ sales tax is added to the sale price. What is the final cost?',
      choices: ['$\\$150.00$', '$\\$270.00$', '$\\$170.00$', '$\\$162.00$'],
      answer: 3,
      solution:
        'Sale price: $0.6 \\times 250 = 150$. Tax on the sale price: $1.08 \\times 150 = 162$, so $\\$162.00$. Stopping at $\\$150.00$ skips the tax, $1.08 \\times 250 = 270$ skips the discount, and $\\$170.00$ adds $8\\%$ of the ORIGINAL $\\$250$ — that is $\\$20$ — rather than $8\\%$ of $\\$150$.',
    },
  ],
  // p10 — chaining percents when the answer is itself a percent
  [
    {
      q: 'In a school, $40\\%$ of the students ride the bus, and $30\\%$ of the bus riders are in Grade 6. What percent of the whole school is a Grade 6 bus rider?',
      choices: ['$12\\%$', '$70\\%$', '$10\\%$', '$30\\%$'],
      answer: 0,
      solution:
        'Chained percents multiply: $0.30 \\times 0.40 = 0.12 = 12\\%$. Adding to get $70\\%$ is the classic trap — the two percents have different bases (the school and the bus riders), so they cannot be added. Subtracting gives $10\\%$, and $30\\%$ uses the second percent alone, forgetting that it applies only to the riders.',
    },
    {
      q: 'At a bakery, $50\\%$ of the loaves are wheat, and $20\\%$ of the wheat loaves have seeds. What percent of all the loaves are wheat loaves with seeds?',
      choices: ['$70\\%$', '$30\\%$', '$10\\%$', '$20\\%$'],
      answer: 2,
      solution:
        'Multiply the multipliers: $0.20 \\times 0.50 = 0.10 = 10\\%$. In words, seeded wheat loaves are a fifth of a half, which is a tenth. Adding gives $70\\%$ and subtracting gives $30\\%$, but neither operation makes sense across two different bases; $20\\%$ ignores the fact that only half the loaves were ever eligible.',
    },
    {
      q: 'In a town, $80\\%$ of the houses have a garden, and $25\\%$ of the houses with gardens have a pond. What percent of all the houses have a pond in the garden?',
      choices: ['$105\\%$', '$55\\%$', '$25\\%$', '$20\\%$'],
      answer: 3,
      solution:
        'Multiply: $0.25 \\times 0.80 = 0.20 = 20\\%$. A quarter of $80\\%$ is $20\\%$ — and notice the answer must be smaller than both percents, since it describes a group inside a group. Adding gives an impossible $105\\%$, subtracting gives $55\\%$, and $25\\%$ forgets that only $80\\%$ of the houses have a garden at all.',
    },
  ],
]

const s83 = [
  // p1 — percent increase from an old and a new value
  [
    {
      q: 'A bean plant grows from $25$ cm to $32$ cm. What is the percent increase?',
      choices: ['$28\\%$', '$7\\%$', '$21.875\\%$', '$128\\%$'],
      answer: 0,
      solution:
        'The change is $32 - 25 = 7$ cm, and percent change always compares the change to the ORIGINAL: $\\frac{7}{25} = \\frac{28}{100} = 28\\%$. The bare change $7$ is not a percent. Dividing by the NEW height instead gives $\\frac{7}{32} = 21.875\\%$ — the wrong base. And $\\frac{32}{25} = 128\\%$ is the new height as a percent of the old, which is $100\\%$ more than the increase.',
    },
    {
      q: 'A pack of markers goes up in price from $\\$50$ to $\\$60$. What is the percent increase?',
      choices: ['$10\\%$', '$20\\%$', '$16\\frac{2}{3}\\%$', '$120\\%$'],
      answer: 1,
      solution:
        'The change is $\\$10$, measured against the original $\\$50$: $\\frac{10}{50} = \\frac{1}{5} = 20\\%$. The change of $10$ is a number of dollars, not a percent. Dividing by the new price gives $\\frac{10}{60} = 16\\frac{2}{3}\\%$, which uses the wrong base, and $\\frac{60}{50} = 120\\%$ is the new price as a percent of the old.',
    },
    {
      q: 'A video had $80$ views on Monday and $120$ views on Tuesday. What is the percent increase?',
      choices: ['$40\\%$', '$33\\frac{1}{3}\\%$', '$50\\%$', '$150\\%$'],
      answer: 2,
      solution:
        'The change is $120 - 80 = 40$ views, compared to Monday\'s $80$: $\\frac{40}{80} = \\frac{1}{2} = 50\\%$. The raw change $40$ is a count, not a percent. Dividing by Tuesday\'s $120$ gives $33\\frac{1}{3}\\%$ — measuring from the finish instead of the start — and $\\frac{120}{80} = 150\\%$ compares the two totals rather than reporting the growth.',
    },
  ],
  // p2 — increase a number by a percent
  [
    {
      q: 'Increase $80$ by $15\\%$.',
      choices: ['$92$', '$95$', '$12$', '$68$'],
      answer: 0,
      solution:
        'Increasing by $15\\%$ means ending at $115\\%$, so multiply by $1.15$: $1.15 \\times 80 = 92$. Check: $15\\%$ of $80$ is $12$, and $80 + 12 = 92$. ✓ Adding $15$ itself gives $95$ and treats the percent as a plain number; $12$ is only the increase; and $0.85 \\times 80 = 68$ decreases instead.',
    },
    {
      q: 'Increase $120$ by $35\\%$.',
      choices: ['$155$', '$42$', '$162$', '$78$'],
      answer: 2,
      solution:
        'Multiply by $1.35$: $1.35 \\times 120 = 162$. Check: $35\\%$ of $120$ is $42$, and $120 + 42 = 162$. ✓ Adding $35$ as a plain number gives $155$, the $42$ on its own is just the increase, and $0.65 \\times 120 = 78$ takes $35\\%$ off instead of adding it on.',
    },
    {
      q: 'A pot holds $24$ cups of soup. A bigger pot holds $25\\%$ more. How many cups does the bigger pot hold?',
      choices: ['$49$', '$6$', '$18$', '$30$'],
      answer: 3,
      solution:
        '"$25\\%$ more than $24$" means $1.25 \\times 24 = 30$ cups — the original $24$ plus a quarter of it, which is $6$. Note that it does NOT mean $24 + 25 = 49$; a percent is always a percent OF something. The $6$ is only the extra, and $0.75 \\times 24 = 18$ shrinks the pot instead of growing it.',
    },
  ],
  // p3 — decrease a number by a percent
  [
    {
      q: 'Decrease $150$ by $40\\%$.',
      choices: ['$60$', '$90$', '$110$', '$210$'],
      answer: 1,
      solution:
        'Removing $40\\%$ leaves $60\\%$, so multiply by $0.6$: $0.6 \\times 150 = 90$. Check: $40\\%$ of $150$ is $60$, and $150 - 60 = 90$. ✓ The $60$ is the amount taken away, $150 - 40 = 110$ subtracts the percent as a plain number, and $1.4 \\times 150 = 210$ increases instead.',
    },
    {
      q: 'Decrease $65$ by $20\\%$.',
      choices: ['$13$', '$45$', '$52$', '$78$'],
      answer: 2,
      solution:
        'You keep $80\\%$: $0.8 \\times 65 = 52$. Check: $20\\%$ of $65$ is $13$, and $65 - 13 = 52$. ✓ The $13$ is what was removed, $65 - 20 = 45$ treats the percent as a plain number, and $1.2 \\times 65 = 78$ adds $20\\%$ instead of taking it away.',
    },
    {
      q: 'A tank holds $260$ litres of water, and $15\\%$ of it drains away. How many litres are left?',
      choices: ['$39$', '$245$', '$299$', '$221$'],
      answer: 3,
      solution:
        'What remains is $85\\%$: $0.85 \\times 260 = 221$ litres. Check: $10\\%$ of $260$ is $26$ and $5\\%$ is $13$, so $39$ litres drained, and $260 - 39 = 221$. ✓ The $39$ is the water that LEFT, $260 - 15 = 245$ subtracts the percent as litres, and $1.15 \\times 260 = 299$ adds water instead of draining it.',
    },
  ],
  // p4 — the single multiplier for a percent change
  [
    {
      q: 'What single number can you multiply by to decrease a value by $18\\%$?',
      choices: ['$0.82$', '$0.18$', '$1.18$', '$0.018$'],
      answer: 0,
      solution:
        'After removing $18\\%$ you still have $100\\% - 18\\% = 82\\%$, and $82\\% = 0.82$. Multiplying by $0.18$ would keep only the part you meant to throw away; $1.18$ increases by $18\\%$ instead; and $0.018$ is $1.8\\%$, a decimal point out of place.',
    },
    {
      q: 'Multiplying a number by $1.06$ does what to it?',
      choices: [
        'Increases it by $106\\%$',
        'Increases it by $6\\%$',
        'Decreases it by $6\\%$',
        'Increases it by $1.06\\%$',
      ],
      answer: 1,
      solution:
        'The multiplier $1.06$ is $106\\%$, which is the original $100\\%$ plus an extra $6\\%$ — so the number grows by $6\\%$. Calling it a $106\\%$ increase reads the whole multiplier as the change and would need a multiplier of $2.06$. Decreasing by $6\\%$ would be $0.94$, and a $1.06\\%$ increase would be $1.0106$.',
    },
    {
      q: 'What single number can you multiply by to increase a value by $7\\%$?',
      choices: ['$0.07$', '$1.7$', '$0.93$', '$1.07$'],
      answer: 3,
      solution:
        'A $7\\%$ increase leaves you with $107\\%$ of the value, and $107\\% = 1.07$. Multiplying by $0.07$ keeps only $7\\%$ and shrinks the number badly; $1.7$ slides the decimal one place and adds $70\\%$; and $0.93$ is the multiplier for a $7\\%$ DECREASE.',
    },
  ],
  // p5 — percent decrease from an old and a new value
  [
    {
      q: 'A shop\'s daily sales fall from $90$ items to $72$ items. What is the percent decrease?',
      choices: ['$18\\%$', '$20\\%$', '$25\\%$', '$80\\%$'],
      answer: 1,
      solution:
        'The change is $90 - 72 = 18$, measured against the ORIGINAL $90$: $\\frac{18}{90} = \\frac{1}{5} = 20\\%$. The raw change $18$ is a count of items, not a percent. Dividing by the new value gives $\\frac{18}{72} = 25\\%$ — which is exactly the percent INCREASE that would undo this drop, not the drop itself. And $\\frac{72}{90} = 80\\%$ is what remains, not what was lost.',
    },
    {
      q: 'A book\'s price falls from $\\$25$ to $\\$16$. What is the percent decrease?',
      choices: ['$9\\%$', '$56.25\\%$', '$36\\%$', '$64\\%$'],
      answer: 2,
      solution:
        'The change is $\\$9$, compared to the original $\\$25$: $\\frac{9}{25} = \\frac{36}{100} = 36\\%$. The $\\$9$ is a number of dollars, not a percent. Dividing by the new price gives $\\frac{9}{16} = 56.25\\%$, which uses the finishing price as the base, and $\\frac{16}{25} = 64\\%$ is the fraction of the price that SURVIVED.',
    },
    {
      q: 'The number of birds at a feeder falls from $48$ to $30$. What is the percent decrease?',
      choices: ['$18\\%$', '$60\\%$', '$62.5\\%$', '$37.5\\%$'],
      answer: 3,
      solution:
        'The change is $48 - 30 = 18$ birds, against the original $48$: $\\frac{18}{48} = \\frac{3}{8} = 37.5\\%$. The bare $18$ is a count. Dividing by the new count gives $\\frac{18}{30} = 60\\%$ — the wrong base — and $\\frac{30}{48} = 62.5\\%$ is the share of birds still there.',
    },
  ],
  // p6 — a price rises by a percent
  [
    {
      q: 'A $\\$40$ monthly swim pass goes up in price by $25\\%$. What is the new price?',
      choices: ['$\\$50$', '$\\$65$', '$\\$10$', '$\\$30$'],
      answer: 0,
      solution:
        'Multiply by $1.25$: $1.25 \\times 40 = 50$, so $\\$50$. In words, a quarter of $\\$40$ is $\\$10$, and $40 + 10 = 50$. ✓ Adding $25$ as dollars gives $\\$65$, the $\\$10$ alone is just the rise, and $0.75 \\times 40 = 30$ cuts the price instead of raising it.',
    },
    {
      q: 'A $\\$120$ bus fare card goes up in price by $5\\%$. What is the new price?',
      choices: ['$\\$125$', '$\\$126$', '$\\$6$', '$\\$114$'],
      answer: 1,
      solution:
        'Multiply by $1.05$: $1.05 \\times 120 = 126$, so $\\$126$. The rise is $5\\%$ of $\\$120$, which is $\\$6$, and $120 + 6 = 126$. ✓ Adding $5$ as dollars gives $\\$125$ — close enough to be sneaky, but wrong. The $\\$6$ is only the rise, and $0.95 \\times 120 = 114$ lowers the price.',
    },
    {
      q: 'A $\\$28$ museum ticket goes up in price by $12.5\\%$. What is the new price?',
      choices: ['$\\$40.50$', '$\\$3.50$', '$\\$31.50$', '$\\$24.50$'],
      answer: 2,
      solution:
        '$12.5\\%$ is one eighth, and an eighth of $\\$28$ is $\\$3.50$, so the new price is $28 + 3.50 = 31.50$, or $\\$31.50$. Directly: $1.125 \\times 28 = 31.50$. Adding $12.5$ as dollars gives $\\$40.50$, the $\\$3.50$ is only the rise, and $0.875 \\times 28 = 24.50$ cuts the price by an eighth instead.',
    },
  ],
  // p7 — undo a discount to find the original price
  [
    {
      q: 'After a $25\\%$ discount, a pair of boots costs $\\$54$. What was the original price?',
      choices: ['$\\$72$', '$\\$67.50$', '$\\$40.50$', '$\\$79$'],
      answer: 0,
      solution:
        'The sale price is $75\\%$ of the original: $0.75 \\times p = 54$, so $p = 54 \\div 0.75 = 72$, or $\\$72$. Check: $25\\%$ of $\\$72$ is $\\$18$, and $72 - 18 = 54$. ✓ Adding $25\\%$ to $\\$54$ gives $\\$67.50$, but that $25\\%$ is measured from the wrong base. Taking another $25\\%$ off gives $\\$40.50$, and $54 + 25 = 79$ treats the percent as dollars.',
    },
    {
      q: 'After a $40\\%$ discount, a kite costs $\\$33$. What was the original price?',
      choices: ['$\\$46.20$', '$\\$73$', '$\\$55$', '$\\$19.80$'],
      answer: 2,
      solution:
        'You paid $60\\%$ of the original: $0.6 \\times p = 33$, so $p = 33 \\div 0.6 = 55$, or $\\$55$. Check: $40\\%$ of $\\$55$ is $\\$22$, and $55 - 22 = 33$. ✓ Adding $40\\%$ to the sale price gives $1.4 \\times 33 = 46.20$ — the wrong base — while $33 + 40 = 73$ adds the percent as dollars and $0.6 \\times 33 = 19.80$ discounts a second time.',
    },
    {
      q: 'After a $15\\%$ discount, a puzzle costs $\\$34$. What was the original price?',
      choices: ['$\\$39.10$', '$\\$49$', '$\\$28.90$', '$\\$40$'],
      answer: 3,
      solution:
        'The sale price is $85\\%$ of the original: $0.85 \\times p = 34$, so $p = 34 \\div 0.85 = 40$, or $\\$40$. Check: $15\\%$ of $\\$40$ is $\\$6$, and $40 - 6 = 34$. ✓ Adding $15\\%$ back onto $\\$34$ gives $\\$39.10$, which is short because $15\\%$ of $\\$34$ is smaller than $15\\%$ of $\\$40$. The $\\$49$ adds the percent as dollars, and $\\$28.90$ discounts again.',
    },
  ],
  // p8 — two changes in a row do not add
  [
    {
      q: 'A price goes up $30\\%$, then down $30\\%$. Where does it end compared to the start?',
      choices: [
        'It is $9\\%$ lower',
        'It is back where it started',
        'It is $9\\%$ higher',
        'It is $60\\%$ higher',
      ],
      answer: 0,
      solution:
        'Multiply the multipliers: $1.3 \\times 0.7 = 0.91$, so the final price is $91\\%$ of the start — a $9\\%$ drop. The changes never cancel, because the $30\\%$ fall acts on the bigger new price and so removes more money than the rise added. Adding the two percents gives the nonsense $60\\%$ higher.',
    },
    {
      q: 'A price goes down $10\\%$, then up $25\\%$. Where does it end compared to the start?',
      choices: [
        'It is $15\\%$ higher',
        'It is $12.5\\%$ higher',
        'It is back where it started',
        'It is $12.5\\%$ lower',
      ],
      answer: 1,
      solution:
        'Multiply: $0.9 \\times 1.25 = 1.125$, so the price ends at $112.5\\%$ of the start — up $12.5\\%$. Adding the percents ($-10\\% + 25\\%$) gives $15\\%$ higher, which ignores that the $25\\%$ rise acts on the smaller reduced price. The final answer is higher, not lower, so a $12.5\\%$ drop is the right size in the wrong direction.',
    },
    {
      q: 'A price goes up $40\\%$, then down $25\\%$. Where does it end compared to the start?',
      choices: [
        'It is $15\\%$ higher',
        'It is $15\\%$ lower',
        'It is $5\\%$ lower',
        'It is $5\\%$ higher',
      ],
      answer: 3,
      solution:
        'Multiply the multipliers: $1.4 \\times 0.75 = 1.05$, so the price ends at $105\\%$ of the start — up $5\\%$. Adding the percents gives $15\\%$ higher and subtracting them the other way gives $15\\%$ lower; both pretend the two changes share a base, and they do not. A $5\\%$ drop has the right size but the wrong direction.',
    },
  ],
  // p9 — the same percent change applied twice
  [
    {
      q: 'A colony of $400$ ants grows by $20\\%$ each year for two years. How many ants are there after two years?',
      choices: ['$560$', '$576$', '$480$', '$176$'],
      answer: 1,
      solution:
        'Each year multiplies by $1.2$, so after two years there are $400 \\times 1.2 \\times 1.2 = 576$ ants. Adding the percents into one $40\\%$ rise gives $1.4 \\times 400 = 560$ and misses the $16$ ants born to the first year\'s newcomers. The $480$ stops after one year, and $176$ is how many ants were ADDED, not the total.',
    },
    {
      q: 'A $\\$5000$ savings account earns $10\\%$ interest each year for two years, with the interest left in the account. How much is in the account after two years?',
      choices: ['$\\$6000$', '$\\$5500$', '$\\$6050$', '$\\$1050$'],
      answer: 2,
      solution:
        'Each year multiplies by $1.1$: $5000 \\times 1.1 \\times 1.1 = 6050$, so $\\$6050$. Treating it as one $20\\%$ gain gives $\\$6000$ and loses the $\\$50$ of interest earned ON the first year\'s interest. The $\\$5500$ is the balance after one year only, and $\\$1050$ is the interest earned rather than the balance.',
    },
    {
      q: 'A pond has $200$ frogs, and the number falls by $10\\%$ each year for two years. How many frogs are there after two years?',
      choices: ['$160$', '$180$', '$38$', '$162$'],
      answer: 3,
      solution:
        'Each year multiplies by $0.9$: $200 \\times 0.9 \\times 0.9 = 162$ frogs. Adding the two drops into one $20\\%$ fall gives $160$, which overshoots — the second year\'s $10\\%$ is taken from the smaller $180$, so it removes only $18$ frogs, not $20$. The $180$ stops after one year, and $38$ is how many frogs were LOST.',
    },
  ],
  // p10 — undo an increase to find the original
  [
    {
      q: 'After a $20\\%$ increase, a number is $84$. What was the number before the increase?',
      choices: ['$70$', '$67.2$', '$64$', '$100.8$'],
      answer: 0,
      solution:
        'The new value is $120\\%$ of the old: $1.2 \\times n = 84$, so $n = 84 \\div 1.2 = 70$. Check: $20\\%$ of $70$ is $14$, and $70 + 14 = 84$. ✓ Taking $20\\%$ OFF $84$ gives $0.8 \\times 84 = 67.2$, but that percent is measured from the wrong base. Subtracting $20$ gives $64$, and $1.2 \\times 84 = 100.8$ increases a second time.',
    },
    {
      q: 'After a $50\\%$ increase, a number is $87$. What was the number before the increase?',
      choices: ['$43.5$', '$37$', '$58$', '$130.5$'],
      answer: 2,
      solution:
        'The new value is $150\\%$ of the old: $1.5 \\times n = 87$, so $n = 87 \\div 1.5 = 58$. Check: half of $58$ is $29$, and $58 + 29 = 87$. ✓ Halving $87$ gives $43.5$, which undoes a $50\\%$ increase with a $50\\%$ decrease — two different bases, so it does not work. Subtracting $50$ gives $37$, and $1.5 \\times 87 = 130.5$ grows it again.',
    },
    {
      q: 'A town\'s population grew by $8\\%$ this year and is now $2700$ people. What was the population a year ago?',
      choices: ['$2484$', '$2692$', '$2916$', '$2500$'],
      answer: 3,
      solution:
        'This year is $108\\%$ of last year: $1.08 \\times p = 2700$, so $p = 2700 \\div 1.08 = 2500$. Check: $8\\%$ of $2500$ is $200$, and $2500 + 200 = 2700$. ✓ Taking $8\\%$ off $2700$ gives $0.92 \\times 2700 = 2484$, which is too small because $8\\%$ of $2700$ is bigger than $8\\%$ of $2500$. Subtracting $8$ gives $2692$, and $1.08 \\times 2700 = 2916$ grows it a second time.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 8,
  sections: {
    '8.1': s81,
    '8.2': s82,
    '8.3': s83,
  },
}
