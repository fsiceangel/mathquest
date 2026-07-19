// Prealgebra — Chapter 8: Percents
// All problems, explanations, and examples are original MathQuest content.

const s81 = {
  id: '8.1',
  title: 'What is a Percent?',
  learn: {
    concepts: [
      {
        heading: 'Percent means "per hundred"',
        body: 'The symbol $\\%$ is a shorthand for "out of every $100$." So $37\\%$ means $37$ out of every $100$, which is the fraction $\\frac{37}{100}$. Percents are just fractions with a denominator of $100$ wearing a fancy symbol.',
      },
      {
        heading: 'One number, three costumes',
        body: 'Every percent can dress up as a fraction or a decimal: $45\\% = \\frac{45}{100} = 0.45$. To go from percent to decimal, slide the decimal point two places left. To go from decimal to percent, slide it two places right. To turn a fraction into a percent, first write it with denominator $100$ if you can.',
      },
      {
        heading: 'Taking a percent of a number',
        body: 'In math, "of" usually means multiply. To find $30\\%$ of $60$, compute $0.30 \\times 60 = 18$. Handy landmarks: $50\\%$ is half, $25\\%$ is a quarter, $10\\%$ slides the decimal one place left, and $1\\%$ slides it two places.',
      },
      {
        heading: 'Working backwards',
        body: 'Two reverse questions come up all the time. "What percent of $48$ is $12$?" — form the fraction $\\frac{12}{48} = \\frac{1}{4} = 25\\%$. "If $30\\%$ of a number is $21$, what is the number?" — since $0.3 \\times n = 21$, divide: $n = 21 \\div 0.3 = 70$. The part divided by the whole gives the percent; the part divided by the percent gives the whole.',
      },
    ],
    examples: [
      {
        problem: 'Write $45\\%$ as a fraction in simplest form and as a decimal.',
        steps: [
          'Percent means per hundred, so $45\\% = \\frac{45}{100}$.',
          'Simplify the fraction: divide top and bottom by $5$ to get $\\frac{9}{20}$.',
          'For the decimal, slide the decimal point two places left: $45\\% = 0.45$.',
        ],
        answer: '$45\\% = \\frac{9}{20} = 0.45$',
      },
      {
        problem: 'What is $30\\%$ of $60$?',
        steps: [
          '"Of" means multiply, so we want $0.30 \\times 60$.',
          'A quick route: $10\\%$ of $60$ is $6$, and $30\\%$ is three of those.',
          'So $30\\%$ of $60$ is $3 \\times 6 = 18$.',
        ],
        answer: '$30\\%$ of $60$ is $18$',
      },
      {
        problem: '$12$ is what percent of $48$?',
        steps: [
          'Put the part over the whole: $\\frac{12}{48}$.',
          'Simplify: $\\frac{12}{48} = \\frac{1}{4}$.',
          'A quarter of anything is $25\\%$, since $\\frac{1}{4} = \\frac{25}{100}$.',
        ],
        answer: '$12$ is $25\\%$ of $48$',
      },
    ],
  },
  problems: [
    {
      q: 'Which fraction means the same thing as $63\\%$?',
      choices: ['$\\frac{63}{10}$', '$\\frac{63}{100}$', '$\\frac{100}{63}$', '$\\frac{63}{1000}$'],
      answer: 1,
      solution: 'Percent means per hundred, so $63\\%$ is $63$ out of $100$: the fraction $\\frac{63}{100}$. The denominator is always $100$, not $10$ or $1000$.',
    },
    {
      q: 'Write $7\\%$ as a decimal.',
      choices: ['$0.7$', '$7.0$', '$0.07$', '$0.007$'],
      answer: 2,
      solution: 'Slide the decimal point two places left: $7\\% = 07.\\% \\to 0.07$. A common slip is sliding only one place to get $0.7$ — but $0.7$ is actually $70\\%$, ten times too big!',
    },
    {
      q: 'Write $0.35$ as a percent.',
      choices: ['$35\\%$', '$3.5\\%$', '$0.35\\%$', '$350\\%$'],
      answer: 0,
      solution: 'Slide the decimal point two places right: $0.35 = 35\\%$. Check with a fraction: $0.35 = \\frac{35}{100}$, and "$35$ per hundred" is exactly $35\\%$.',
    },
    {
      q: 'Write $\\frac{2}{5}$ as a percent.',
      choices: ['$25\\%$', '$2.5\\%$', '$20\\%$', '$40\\%$'],
      answer: 3,
      solution: 'Make the denominator $100$: multiply top and bottom by $20$ to get $\\frac{2}{5} = \\frac{40}{100} = 40\\%$. (Careful: $\\frac{2}{5}$ is not $25\\%$ — the digits $2$ and $5$ are tempting, but $25\\%$ is $\\frac{1}{4}$.)',
    },
    {
      q: 'What is $20\\%$ of $45$?',
      choices: ['$9$', '$90$', '$25$', '$0.9$'],
      answer: 0,
      solution: '$10\\%$ of $45$ is $4.5$, so $20\\%$ is twice that: $9$. Or multiply directly: $0.20 \\times 45 = 9$. Watch the decimal point — $90$ would be $200\\%$ of $45$, double the number!',
    },
    {
      q: 'What is $150\\%$ of $30$?',
      choices: ['$15$', '$60$', '$45$', '$4.5$'],
      answer: 2,
      solution: 'Percents can go past $100$! $150\\% = 1.5$, so $150\\%$ of $30$ is $1.5 \\times 30 = 45$. Think of it as all of $30$ plus half of $30$: $30 + 15 = 45$.',
    },
    {
      q: '$18$ is what percent of $24$?',
      choices: ['$6\\%$', '$18\\%$', '$80\\%$', '$75\\%$'],
      answer: 3,
      solution: 'Part over whole: $\\frac{18}{24} = \\frac{3}{4}$, and $\\frac{3}{4} = 75\\%$. (Subtracting $24 - 18 = 6$ tells you the difference, not the percent — a percent always compares by dividing.)',
    },
    {
      q: '$30\\%$ of a number is $21$. What is the number?',
      choices: ['$6.3$', '$70$', '$63$', '$51$'],
      answer: 1,
      solution: 'We know $0.3 \\times n = 21$, so $n = 21 \\div 0.3 = 70$. Check: $30\\%$ of $70$ is $0.3 \\times 70 = 21$. ✓ (Multiplying $21 \\times 0.3$ gives $6.3$ — that finds a percent OF $21$, which is the wrong direction.)',
    },
    {
      q: 'What is $8\\%$ of $25$?',
      choices: ['$2$', '$0.2$', '$20$', '$4$'],
      answer: 0,
      solution: '$0.08 \\times 25 = 2$. Here is a slick shortcut: $8\\%$ of $25$ equals $25\\%$ of $8$, because both are $\\frac{8 \\times 25}{100}$ — and a quarter of $8$ is clearly $2$.',
    },
    {
      q: '$40\\%$ of a number equals $25\\%$ of $64$. What is the number?',
      choices: ['$16$', '$25.6$', '$64$', '$40$'],
      answer: 3,
      solution: 'First find $25\\%$ of $64$: that is a quarter of $64$, which is $16$. Now we need $0.4 \\times n = 16$, so $n = 16 \\div 0.4 = 40$. Check: $40\\%$ of $40$ is $16$. ✓',
    },
  ],
}

const s82 = {
  id: '8.2',
  title: 'Word Problems',
  learn: {
    concepts: [
      {
        heading: 'Always ask: percent of WHAT?',
        body: 'A percent is meaningless until you know what it is a percent of — that number is called the base. "$20\\%$ off" means $20\\%$ of the original price. "$15\\%$ tip" means $15\\%$ of the bill. Finding the base is step one of every percent word problem.',
      },
      {
        heading: 'Discounts, tax, and tips',
        body: 'A discount is subtracted: with $25\\%$ off, you pay $100\\% - 25\\% = 75\\%$ of the price, so you can just multiply by $0.75$ in one step. Tax and tips are added: a $6\\%$ tax means you pay $106\\%$ of the price, which is multiplying by $1.06$.',
      },
      {
        heading: 'A percent of a percent',
        body: 'Sometimes percents chain together: "$30\\%$ of the students are in the chess club, and $50\\%$ of the club members are girls." To follow the chain, multiply: $50\\%$ of $30\\%$ is $0.5 \\times 0.3 = 0.15 = 15\\%$ of the whole school. Never add percents that are percents of different bases!',
      },
      {
        heading: 'Comparing with percents',
        body: 'To say how big one quantity is compared to another, divide and convert: Mia\'s $40$ stickers compared to Jo\'s $50$ is $\\frac{40}{50} = 80\\%$. The number after "of" (or "compared to") goes on the bottom.',
      },
    ],
    examples: [
      {
        problem: 'A $\\$40$ game is on sale for $25\\%$ off. What is the sale price?',
        steps: [
          'The discount is $25\\%$ of the original price: $0.25 \\times 40 = 10$ dollars off.',
          'Subtract from the original: $40 - 10 = 30$.',
          'One-step shortcut: paying after $25\\%$ off means paying $75\\%$, and $0.75 \\times 40 = 30$. Same answer, half the work!',
        ],
        answer: 'The sale price is $\\$30$',
      },
      {
        problem: 'A restaurant bill is $\\$60$, and your family leaves a $15\\%$ tip. What is the total paid?',
        steps: [
          'The tip is $15\\%$ of the bill: $0.15 \\times 60 = 9$ dollars.',
          'Add it to the bill: $60 + 9 = 69$.',
          'Shortcut: bill plus tip is $115\\%$ of the bill, and $1.15 \\times 60 = 69$.',
        ],
        answer: 'The total paid is $\\$69$',
      },
      {
        problem: 'In a class of $30$ students, $60\\%$ are girls. Half of the girls wear glasses. How many girls in the class wear glasses?',
        steps: [
          'First find the girls: $60\\%$ of $30$ is $0.6 \\times 30 = 18$.',
          'Now take half of that group: $\\frac{1}{2} \\times 18 = 9$.',
          'Notice the bases: $60\\%$ was a percent of the class, but "half" was half of the girls.',
        ],
        answer: '$9$ girls wear glasses',
      },
    ],
  },
  problems: [
    {
      q: 'A $\\$50$ shirt is on sale for $10\\%$ off. What is the sale price?',
      choices: ['$\\$5$', '$\\$40$', '$\\$45$', '$\\$55$'],
      answer: 2,
      solution: 'The discount is $10\\%$ of $\\$50$, which is $\\$5$. Subtract: $50 - 5 = 45$, so the sale price is $\\$45$. (The $\\$5$ is the discount itself — the question asks what you pay.)',
    },
    {
      q: 'Leo answered $17$ questions correctly on a $20$-question quiz. What was his score as a percent?',
      choices: ['$85\\%$', '$17\\%$', '$80\\%$', '$90\\%$'],
      answer: 0,
      solution: 'Part over whole: $\\frac{17}{20}$. Multiply top and bottom by $5$ to get hundredths: $\\frac{85}{100} = 85\\%$.',
    },
    {
      q: 'The sales tax rate is $6\\%$. How much tax is charged on a $\\$25$ book?',
      choices: ['$\\$6.00$', '$\\$1.50$', '$\\$0.15$', '$\\$15.00$'],
      answer: 1,
      solution: 'The tax is $6\\%$ of the price: $0.06 \\times 25 = 1.50$, so $\\$1.50$. (Not $\\$6$ — that would be the tax on a $\\$100$ book, since $6\\%$ means $\\$6$ per $\\$100$.)',
    },
    {
      q: 'A meal costs $\\$35$, and you want to leave a $20\\%$ tip. How much is the tip?',
      choices: ['$\\$3.50$', '$\\$5.00$', '$\\$14.00$', '$\\$7.00$'],
      answer: 3,
      solution: '$10\\%$ of $\\$35$ is $\\$3.50$, so $20\\%$ is double that: $\\$7.00$. The ten-percent-then-double trick makes tips easy to figure in your head.',
    },
    {
      q: 'A salesperson earns a $5\\%$ commission on everything she sells. How much does she earn for selling a $\\$1200$ sofa?',
      choices: ['$\\$6$', '$\\$60$', '$\\$600$', '$\\$240$'],
      answer: 1,
      solution: 'Commission is a percent of the sale: $0.05 \\times 1200 = 60$, so she earns $\\$60$. Quick check: $10\\%$ of $\\$1200$ is $\\$120$, and $5\\%$ is half of that.',
    },
    {
      q: 'An $\\$80$ jacket is marked $30\\%$ off. What do you pay?',
      choices: ['$\\$56$', '$\\$24$', '$\\$50$', '$\\$76$'],
      answer: 0,
      solution: 'After $30\\%$ off you pay $70\\%$ of the price: $0.7 \\times 80 = 56$, so $\\$56$. ($\\$24$ is the amount saved, and $\\$50$ comes from subtracting $30$ as dollars instead of as a percent.)',
    },
    {
      q: 'A school has $200$ students. $30\\%$ of them are in the chess club, and $50\\%$ of the chess club members are girls. How many girls are in the chess club?',
      choices: ['$60$', '$100$', '$30$', '$15$'],
      answer: 2,
      solution: 'Follow the chain one link at a time. Chess club: $0.3 \\times 200 = 60$ students. Girls in the club: $50\\%$ of those $60$, which is $30$. The $50\\%$ applies to the club, not the whole school — that is why the answer is not $100$.',
    },
    {
      q: 'Mia has $40$ stickers and Jo has $50$. Mia\'s collection is what percent of Jo\'s?',
      choices: ['$125\\%$', '$90\\%$', '$10\\%$', '$80\\%$'],
      answer: 3,
      solution: 'The number after "of" goes on the bottom: $\\frac{40}{50} = \\frac{80}{100} = 80\\%$. (Flipping the fraction gives $125\\%$ — that answers the reverse question, how big Jo\'s collection is compared to Mia\'s.)',
    },
    {
      q: 'A $\\$150$ bike is discounted $20\\%$, and then $8\\%$ sales tax is added to the sale price. What is the final cost?',
      choices: ['$\\$129.60$', '$\\$120.00$', '$\\$132.00$', '$\\$162.00$'],
      answer: 0,
      solution: 'Two steps, each with the right base. Discount: $0.8 \\times 150 = 120$. Tax on the sale price: $1.08 \\times 120 = 129.60$, so $\\$129.60$. ($\\$120$ forgets the tax, and $\\$162$ adds tax but forgets the discount.)',
    },
    {
      q: 'In a marching band, $60\\%$ of the members play brass instruments, and $25\\%$ of the brass players play trumpet. What percent of the whole band plays trumpet?',
      choices: ['$85\\%$', '$15\\%$', '$35\\%$', '$25\\%$'],
      answer: 1,
      solution: 'Chain the percents by multiplying: $0.25 \\times 0.60 = 0.15 = 15\\%$ of the band. Adding $60\\% + 25\\% = 85\\%$ is the classic trap — those percents have different bases (the band and the brass section), so they must never be added.',
    },
  ],
}

const s83 = {
  id: '8.3',
  title: 'Percent Increase and Decrease',
  learn: {
    concepts: [
      {
        heading: 'Measuring change as a percent',
        body: 'Percent change compares the change to where you STARTED: $\\text{percent change} = \\frac{\\text{change}}{\\text{original}} \\times 100\\%$. If a price goes from $\\$40$ to $\\$50$, the change is $\\$10$ and the original is $\\$40$, so the increase is $\\frac{10}{40} = 25\\%$.',
      },
      {
        heading: 'One multiplication does it all',
        body: 'To increase a number by $20\\%$, you end up with $120\\%$ of it — just multiply by $1.2$. To decrease by $15\\%$, you keep $85\\%$ — multiply by $0.85$. Turning a percent change into a single multiplier is the most powerful trick in this chapter.',
      },
      {
        heading: 'Changes stack by multiplying',
        body: 'For two changes in a row, multiply the multipliers. Up $10\\%$ then down $10\\%$ is $1.1 \\times 0.9 = 0.99$ — you end up $1\\%$ BELOW where you started, not back at the start! The second change acts on a different base than the first, and that is the whole surprise.',
      },
      {
        heading: 'Undoing a change',
        body: 'If a price after a $20\\%$ discount is $\\$48$, then $0.8 \\times \\text{original} = 48$. To undo the multiplication, divide: $48 \\div 0.8 = 60$. Never undo a $20\\%$ decrease by adding $20\\%$ back — the two percents are measured from different bases.',
      },
    ],
    examples: [
      {
        problem: 'A plant grows from $40$ cm to $50$ cm tall. What is the percent increase?',
        steps: [
          'The change is $50 - 40 = 10$ cm.',
          'Compare the change to the ORIGINAL height: $\\frac{10}{40} = \\frac{1}{4}$.',
          'So the plant grew by $25\\%$.',
        ],
        answer: 'The height increased by $25\\%$',
      },
      {
        problem: 'Decrease $60$ by $15\\%$.',
        steps: [
          'After removing $15\\%$, we keep $100\\% - 15\\% = 85\\%$.',
          'Multiply by the single multiplier: $0.85 \\times 60 = 51$.',
          'Check the long way: $15\\%$ of $60$ is $9$, and $60 - 9 = 51$. ✓',
        ],
        answer: '$60$ decreased by $15\\%$ is $51$',
      },
      {
        problem: 'A stock worth $\\$200$ goes up $10\\%$ one week, then down $10\\%$ the next. Is it back to $\\$200$?',
        steps: [
          'Week one: $1.1 \\times 200 = 220$.',
          'Week two: the $10\\%$ drop acts on $220$, not $200$: $0.9 \\times 220 = 198$.',
          'The drop was bigger in dollars ($\\$22$) than the rise ($\\$20$), because it came from a bigger base.',
        ],
        answer: 'No — it ends at $\\$198$, which is $1\\%$ below the start',
      },
    ],
  },
  problems: [
    {
      q: 'A puppy\'s weight goes from $20$ pounds to $25$ pounds. What is the percent increase?',
      choices: ['$5\\%$', '$20\\%$', '$125\\%$', '$25\\%$'],
      answer: 3,
      solution: 'The change is $5$ pounds, and the original is $20$: $\\frac{5}{20} = \\frac{25}{100} = 25\\%$. The change of $5$ is not the percent — you must always compare it to the starting value.',
    },
    {
      q: 'Increase $50$ by $20\\%$.',
      choices: ['$70$', '$60$', '$55$', '$10$'],
      answer: 1,
      solution: 'Increasing by $20\\%$ means multiplying by $1.2$: $1.2 \\times 50 = 60$. Or: $20\\%$ of $50$ is $10$, and $50 + 10 = 60$. (Adding $20$ itself would treat the percent as plain dollars.)',
    },
    {
      q: 'Decrease $80$ by $25\\%$.',
      choices: ['$60$', '$20$', '$55$', '$75$'],
      answer: 0,
      solution: 'You keep $75\\%$: $0.75 \\times 80 = 60$. Check: a quarter of $80$ is $20$, and $80 - 20 = 60$. ✓ ($20$ is the amount removed, not what remains.)',
    },
    {
      q: 'What single number can you multiply by to increase a value by $35\\%$?',
      choices: ['$0.35$', '$1.035$', '$1.35$', '$0.65$'],
      answer: 2,
      solution: 'After a $35\\%$ increase you have $100\\% + 35\\% = 135\\%$ of the value, and $135\\% = 1.35$. Multiplying by $0.35$ would leave only $35\\%$ — that shrinks the number instead of growing it!',
    },
    {
      q: 'Attendance at a club drops from $120$ to $90$. What is the percent decrease?',
      choices: ['$25\\%$', '$30\\%$', '$33\\frac{1}{3}\\%$', '$75\\%$'],
      answer: 0,
      solution: 'The change is $30$, and the original is $120$: $\\frac{30}{120} = \\frac{1}{4} = 25\\%$. Dividing by the NEW value $90$ gives $33\\frac{1}{3}\\%$ — that is the wrong base, since percent change always measures from where you started.',
    },
    {
      q: 'A $\\$60$ concert ticket goes up in price by $15\\%$. What is the new price?',
      choices: ['$\\$75$', '$\\$51$', '$\\$66$', '$\\$69$'],
      answer: 3,
      solution: 'Multiply by $1.15$: $1.15 \\times 60 = 69$, so $\\$69$. Or: $10\\%$ of $60$ is $6$ and $5\\%$ is $3$, so the increase is $6 + 3 = 9$ dollars.',
    },
    {
      q: 'After a $20\\%$ discount, a backpack costs $\\$48$. What was the original price?',
      choices: ['$\\$57.60$', '$\\$60$', '$\\$38.40$', '$\\$68$'],
      answer: 1,
      solution: 'The sale price is $80\\%$ of the original: $0.8 \\times p = 48$, so $p = 48 \\div 0.8 = 60$. Check: $20\\%$ off $\\$60$ is $\\$48$. ✓ (Adding $20\\%$ to $\\$48$ gives $\\$57.60$ — but that $20\\%$ is measured from the wrong base.)',
    },
    {
      q: 'A price goes up $50\\%$, then down $50\\%$. Where does it end compared to the start?',
      choices: ['It is back where it started', 'It is $25\\%$ higher', 'It is $25\\%$ lower', 'It is $50\\%$ lower'],
      answer: 2,
      solution: 'Multiply the multipliers: $1.5 \\times 0.5 = 0.75$, so the final price is $75\\%$ of the original — a $25\\%$ drop. The $50\\%$ decrease acts on the new, larger price, so it removes more than the increase added.',
    },
    {
      q: 'A town of $1000$ people grows by $10\\%$ each year for two years. What is the population after two years?',
      choices: ['$1210$', '$1200$', '$1100$', '$1300$'],
      answer: 0,
      solution: 'Each year multiplies by $1.1$: after two years, $1000 \\times 1.1 \\times 1.1 = 1210$. Adding $10\\% + 10\\% = 20\\%$ gives $1200$ and misses the $10$ extra people — the second year\'s growth includes growth ON the first year\'s newcomers.',
    },
    {
      q: 'After a $25\\%$ increase, a number is $45$. What was the number before the increase?',
      choices: ['$33.75$', '$36$', '$40$', '$56.25$'],
      answer: 1,
      solution: 'The new value is $125\\%$ of the old: $1.25 \\times n = 45$, so $n = 45 \\div 1.25 = 36$. Check: $25\\%$ of $36$ is $9$, and $36 + 9 = 45$. ✓ (Taking $25\\%$ OFF $45$ gives $33.75$, but that percent is measured from the wrong base.)',
    },
  ],
}

const challenge = [
  {
    q: 'What is $12.5\\%$ of $96$?',
    choices: ['$12$', '$8$', '$12.5$', '$24$'],
    answer: 0,
    solution: '$12.5\\% = \\frac{1}{8}$, since $8 \\times 12.5 = 100$. One eighth of $96$ is $12$. Knowing the fraction friends of common percents turns hard multiplications into easy divisions.',
  },
  {
    q: '$36$ is $45\\%$ of what number?',
    choices: ['$16.2$', '$45$', '$80$', '$81$'],
    answer: 2,
    solution: 'We need $0.45 \\times n = 36$, so $n = 36 \\div 0.45 = 80$. Check: $45\\%$ of $80$ is $0.45 \\times 80 = 36$. ✓ ($16.2$ comes from multiplying instead of dividing — that finds $45\\%$ OF $36$.)',
  },
  {
    q: 'A $\\$120$ coat is marked $25\\%$ off. At the register, a coupon takes an extra $10\\%$ off the sale price. What do you pay?',
    choices: ['$\\$78$', '$\\$81$', '$\\$84$', '$\\$90$'],
    answer: 1,
    solution: 'Multiply the multipliers: $120 \\times 0.75 = 90$, then $90 \\times 0.9 = 81$, so $\\$81$. Adding the discounts into one $35\\%$ off gives $\\$78$ — too cheap, because the $10\\%$ acts on the already-reduced price, not the original.',
  },
  {
    q: 'Ana scored $80\\%$ on a $40$-question test. How many questions did she get wrong?',
    choices: ['$32$', '$10$', '$6$', '$8$'],
    answer: 3,
    solution: 'She missed $100\\% - 80\\% = 20\\%$ of the questions: $0.2 \\times 40 = 8$ wrong. ($32$ is how many she got RIGHT — read carefully what the question asks!)',
  },
  {
    q: 'A number is increased by $20\\%$, and the result is decreased by $20\\%$, giving $96$. What was the original number?',
    choices: ['$96$', '$92$', '$100$', '$104$'],
    answer: 2,
    solution: 'The two changes multiply to $1.2 \\times 0.8 = 0.96$. So $0.96 \\times n = 96$, which gives $n = 100$. Check: $100 \\to 120 \\to 96$. ✓ Up $20\\%$ then down $20\\%$ lands $4\\%$ short — never at the start.',
  },
  {
    q: 'Store A sells a game for $\\$60$ with $20\\%$ off. Store B sells the same game for $\\$55$ with $10\\%$ off. Which store is cheaper, and by how much?',
    choices: ['Store A, by $\\$1.50$', 'Store B, by $\\$1.50$', 'Store A, by $\\$5.00$', 'They cost the same'],
    answer: 0,
    solution: 'Compute each final price. Store A: $0.8 \\times 60 = 48$. Store B: $0.9 \\times 55 = 49.50$. Store A is cheaper by $49.50 - 48 = 1.50$, so $\\$1.50$. A bigger percent off a bigger price can still win — you have to compute!',
  },
  {
    q: 'Which is bigger: $30\\%$ of $70$, or $70\\%$ of $30$?',
    choices: ['$30\\%$ of $70$ is bigger', '$70\\%$ of $30$ is bigger', 'You cannot tell without more information', 'They are equal — both are $21$'],
    answer: 3,
    solution: 'Both equal $\\frac{30 \\times 70}{100} = 21$. Multiplication is commutative, so $a\\%$ of $b$ always equals $b\\%$ of $a$ — a great trick for swapping a hard percent into an easy one.',
  },
  {
    q: 'With $8\\%$ sales tax included, a toy costs $\\$54$. What was the price before tax?',
    choices: ['$\\$49.68$', '$\\$50.00$', '$\\$46.00$', '$\\$58.32$'],
    answer: 1,
    solution: 'With tax, you pay $108\\%$ of the price: $1.08 \\times p = 54$, so $p = 54 \\div 1.08 = 50$, or $\\$50$. Check: $8\\%$ of $50$ is $4$, and $50 + 4 = 54$. ✓ (Taking $8\\%$ off $\\$54$ gives $\\$49.68$ — the wrong base again!)',
  },
  {
    q: 'A class has $40$ students: $60\\%$ are girls and the rest are boys. If $25\\%$ of the girls and $50\\%$ of the boys walk to school, what percent of the whole class walks?',
    choices: ['$75\\%$', '$37.5\\%$', '$35\\%$', '$30\\%$'],
    answer: 2,
    solution: 'Count each group. Girls: $0.6 \\times 40 = 24$, and $25\\%$ of them is $6$ walkers. Boys: $16$, and half is $8$ walkers. Total walkers: $6 + 8 = 14$, and $\\frac{14}{40} = 35\\%$. You cannot just add or average $25\\%$ and $50\\%$ — the groups have different sizes.',
  },
  {
    q: 'A price rises by $50\\%$. What percent decrease brings it back to the original price?',
    choices: ['$33\\frac{1}{3}\\%$', '$50\\%$', '$25\\%$', '$40\\%$'],
    answer: 0,
    solution: 'Try it with $\\$100$: up $50\\%$ makes $\\$150$. To return, we must drop $\\$50$ out of $\\$150$: $\\frac{50}{150} = \\frac{1}{3} = 33\\frac{1}{3}\\%$. A $50\\%$ drop would overshoot to $\\$75$, because the drop is measured from the new, higher price.',
  },
  {
    q: 'A rectangle\'s length is increased by $20\\%$ and its width is decreased by $20\\%$. What happens to its area?',
    choices: ['It stays the same', 'It goes up by $4\\%$', 'It goes down by $20\\%$', 'It goes down by $4\\%$'],
    answer: 3,
    solution: 'Area multiplies the two changes: $1.2 \\times 0.8 = 0.96$, so the new area is $96\\%$ of the old — a $4\\%$ decrease. The up-and-down pair never cancels, and the result is always a little below the start.',
  },
  {
    q: '$5$ is what percent of $4$?',
    choices: ['$80\\%$', '$125\\%$', '$120\\%$', '$25\\%$'],
    answer: 1,
    solution: 'Part over base: $\\frac{5}{4} = 1.25 = 125\\%$. Since $5$ is bigger than $4$, the percent must be over $100$. ($80\\%$ answers the flipped question: $4$ is $80\\%$ of $5$.)',
  },
]

const worksheet = [
  {
    q: 'Write $\\frac{3}{8}$ as a percent.',
    answer: '$37.5\\%$',
    solution: 'Divide: $3 \\div 8 = 0.375$. Slide the decimal two places right: $37.5\\%$. Landmark check: $\\frac{3}{8}$ is halfway between $\\frac{1}{4} = 25\\%$ and $\\frac{1}{2} = 50\\%$. ✓',
  },
  {
    q: 'What is $35\\%$ of $80$?',
    answer: '$28$',
    solution: '$10\\%$ of $80$ is $8$, so $30\\%$ is $24$ and $5\\%$ is $4$. Add: $24 + 4 = 28$. Or directly: $0.35 \\times 80 = 28$.',
  },
  {
    q: '$27$ is what percent of $60$?',
    answer: '$45\\%$',
    solution: 'Part over whole: $\\frac{27}{60}$. Simplify to $\\frac{9}{20}$, then scale to hundredths: $\\frac{45}{100} = 45\\%$.',
  },
  {
    q: 'A $\\$45$ book is on sale for $20\\%$ off. What is the sale price?',
    answer: '$\\$36$',
    solution: 'After $20\\%$ off you pay $80\\%$: $0.8 \\times 45 = 36$, so $\\$36$. Check: the discount is $0.2 \\times 45 = 9$, and $45 - 9 = 36$. ✓',
  },
  {
    q: 'Increase $240$ by $15\\%$.',
    answer: '$276$',
    solution: 'Multiply by $1.15$: $1.15 \\times 240 = 276$. Or piece it out: $10\\%$ of $240$ is $24$, $5\\%$ is $12$, and $240 + 24 + 12 = 276$.',
  },
  {
    q: '$12\\%$ of a number is $18$. What is the number?',
    answer: '$150$',
    solution: 'From $0.12 \\times n = 18$, divide: $n = 18 \\div 0.12 = 150$. Check: $12\\%$ of $150$ is $0.12 \\times 150 = 18$. ✓',
  },
  {
    q: 'With $6\\%$ sales tax included, a puzzle costs $\\$53$. What was its price before tax?',
    answer: '$\\$50$',
    solution: 'With tax you pay $106\\%$ of the price: $1.06 \\times p = 53$, so $p = 53 \\div 1.06 = 50$, or $\\$50$. Undo a percent change by dividing by the multiplier — taking $6\\%$ off $\\$53$ would use the wrong base.',
  },
  {
    q: 'A number is increased by $25\\%$, and then the result is decreased by $20\\%$. What is the overall percent change?',
    answer: '$0\\%$ — it returns exactly to the original',
    solution: 'Multiply the multipliers: $1.25 \\times 0.8 = 1$. The two changes undo each other perfectly! That happens because $1.25$ and $0.8$ are reciprocals — most up-then-down pairs are not, so this exact cancellation is a lucky match.',
  },
  {
    q: 'A school has $200$ students. $45\\%$ of them play an instrument, and $40\\%$ of the instrument players play piano. How many students play piano?',
    answer: '$36$ students',
    solution: 'Instrument players: $0.45 \\times 200 = 90$. Piano players: $40\\%$ of those $90$, which is $0.4 \\times 90 = 36$. Chained percents multiply — and each one acts on its own base.',
  },
  {
    q: 'A trading card lost $40\\%$ of its value and is now worth $\\$27$. What was it worth before?',
    answer: '$\\$45$',
    solution: 'Losing $40\\%$ leaves $60\\%$: $0.6 \\times p = 27$, so $p = 27 \\div 0.6 = 45$, or $\\$45$. Check: $40\\%$ of $45$ is $18$, and $45 - 18 = 27$. ✓',
  },
]

export default {
  id: 'prealgebra-ch08',
  book: 'prealgebra',
  number: 8,
  title: 'Percents',
  intro:
    'Percents are everywhere — sale signs, test scores, tips, and news headlines. A percent is really just a fraction out of $100$ in disguise, and once you can slip between percents, fractions, and decimals, a huge family of real-world problems opens up. In this chapter you will master conversions, conquer word problems, and learn why going up $10\\%$ and back down $10\\%$ does not return you home.',
  sections: [s81, s82, s83],
  challenge,
  worksheet,
}
