// Introduction to Algebra — Chapter 6: Ratios and Percents
// All problems, explanations, and examples are original MathQuest content.

const s61 = {
  id: '6.1',
  title: 'Basic Ratio Problems',
  learn: {
    concepts: [
      {
        heading: 'A ratio hides a multiplier',
        body: 'Saying two quantities are in the ratio $a:b$ means they are $ax$ and $bx$ for some number $x$. The ratio $3:5$ could mean $3$ and $5$, or $6$ and $10$, or $300$ and $500$ — the multiplier $x$ is what algebra lets us find.',
      },
      {
        heading: 'Splitting a total',
        body: 'If two quantities in the ratio $a:b$ add up to a total $T$, write them as $ax$ and $bx$. Then $ax + bx = T$, so $(a+b)x = T$. One equation, one unknown — solve for $x$ and everything else follows.',
      },
      {
        heading: 'Three parts work the same way',
        body: 'A three-part ratio like $2:3:7$ means the quantities are $2x$, $3x$, and $7x$. Their total is $12x$, and any sum or difference you are told becomes an equation in $x$.',
      },
      {
        heading: 'Differences give equations too',
        body: 'You do not need the total! If quantities $7x$ and $4x$ differ by $12$, then $7x - 4x = 3x = 12$. A ratio plus any single fact — a sum, a difference, or one of the quantities — pins down $x$.',
      },
    ],
    examples: [
      {
        problem: 'A jar holds red and blue marbles in the ratio $3:5$. There are $48$ marbles in all. How many of each color are there?',
        steps: [
          'Let the marbles be $3x$ red and $5x$ blue — the ratio $3:5$ guarantees this form.',
          'The total gives the equation $3x + 5x = 48$, so $8x = 48$ and $x = 6$.',
          'Red: $3 \\times 6 = 18$. Blue: $5 \\times 6 = 30$. Check: $18 + 30 = 48$, and $18:30 = 3:5$.',
        ],
        answer: '$18$ red marbles and $30$ blue marbles',
      },
      {
        problem: 'Three friends split $60$ stickers in the ratio $2:3:7$. How many does each get?',
        steps: [
          'Write the shares as $2x$, $3x$, and $7x$.',
          'The total is $2x + 3x + 7x = 12x = 60$, so $x = 5$.',
          'The shares are $10$, $15$, and $35$. Check: $10 + 15 + 35 = 60$.',
        ],
        answer: 'The shares are $10$, $15$, and $35$ stickers',
      },
      {
        problem: 'Two numbers are in the ratio $7:4$, and the larger is $12$ more than the smaller. Find both numbers.',
        steps: [
          'Call the numbers $7x$ and $4x$.',
          'The difference is $7x - 4x = 3x$, and we are told this equals $12$, so $x = 4$.',
          'The numbers are $7 \\times 4 = 28$ and $4 \\times 4 = 16$. Check: $28 - 16 = 12$.',
        ],
        answer: 'The numbers are $28$ and $16$',
      },
    ],
  },
  problems: [
    {
      q: 'A shelter has cats and dogs in the ratio $2:3$, with $30$ animals in all. How many dogs are there?',
      choices: ['$12$', '$18$', '$20$', '$15$'],
      answer: 1,
      solution: 'Write the counts as $2x$ cats and $3x$ dogs. Then $2x + 3x = 5x = 30$, so $x = 6$. Dogs: $3 \\times 6 = 18$. (The choice $12$ is the number of cats — read carefully which group is asked for!)',
    },
    {
      q: 'Two quantities are in the ratio $4:5$. If the first is $20$, what is the second?',
      choices: ['$25$', '$16$', '$24$', '$45$'],
      answer: 0,
      solution: 'Write the quantities as $4x$ and $5x$. Since $4x = 20$, the multiplier is $x = 5$, so the second quantity is $5 \\times 5 = 25$.',
    },
    {
      q: 'A class of $35$ students has boys and girls in the ratio $3:4$. How many girls are in the class?',
      choices: ['$15$', '$12$', '$20$', '$21$'],
      answer: 2,
      solution: 'Let there be $3x$ boys and $4x$ girls. Then $7x = 35$, so $x = 5$, and there are $4 \\times 5 = 20$ girls. The $15$ counts the boys instead.',
    },
    {
      q: 'Two numbers are in the ratio $5:2$ and differ by $21$. What is the larger number?',
      choices: ['$14$', '$30$', '$42$', '$35$'],
      answer: 3,
      solution: 'Call the numbers $5x$ and $2x$. Their difference is $5x - 2x = 3x = 21$, so $x = 7$. The larger number is $5 \\times 7 = 35$. Check: $35 - 14 = 21$.',
    },
    {
      q: 'Three prizes are shared in the ratio $1:2:3$, and the prizes total $72$ points. How many points is the biggest prize?',
      choices: ['$12$', '$24$', '$36$', '$48$'],
      answer: 2,
      solution: 'The shares are $x$, $2x$, and $3x$, so $6x = 72$ and $x = 12$. The biggest share is $3 \\times 12 = 36$. The other choices are the smaller shares — or $4x$, which is not one of the parts at all.',
    },
    {
      q: 'Red and blue beads are in the ratio $3:5$, and there are $14$ more blue beads than red. How many beads are there in total?',
      choices: ['$42$', '$56$', '$70$', '$112$'],
      answer: 1,
      solution: 'With $3x$ red and $5x$ blue, the difference is $2x = 14$, so $x = 7$. The total is $3x + 5x = 8x = 56$. Check: $21$ red and $35$ blue differ by $14$.',
    },
    {
      q: 'Three containers hold water in the ratio $2:3:4$, totaling $108$ liters. How many liters are in the middle container?',
      choices: ['$24$', '$48$', '$27$', '$36$'],
      answer: 3,
      solution: 'The amounts are $2x$, $3x$, and $4x$, so $9x = 108$ and $x = 12$. The middle container holds $3 \\times 12 = 36$ liters. ($24$ and $48$ are the smallest and largest containers.)',
    },
    {
      q: 'Ava and Ben split a sum of money in the ratio $7:3$, and Ava receives $\\$84$ more than Ben. How much money was split in total?',
      choices: ['$\\$120$', '$\\$210$', '$\\$252$', '$\\$180$'],
      answer: 1,
      solution: 'Write the shares as $7x$ and $3x$. The difference is $4x = 84$, so $x = 21$. The total is $10x = \\$210$. A common slip is dividing $84$ by $7$ to get $x = 12$ — but $84$ is the difference of the shares, which is $4x$, not Ava’s whole share.',
    },
    {
      q: 'A brother and sister have ages in the ratio $4:7$, and their ages add up to $33$. What will the ratio of their ages be in $3$ years?',
      choices: ['$5:8$', '$4:7$', '$3:5$', '$7:10$'],
      answer: 0,
      solution: 'Now: ages $4x$ and $7x$ with $11x = 33$, so $x = 3$ — they are $12$ and $21$. In $3$ years they will be $15$ and $24$, and $15:24$ simplifies to $5:8$ (divide both by $3$). Notice the ratio changed! Adding the same number to both parts of a ratio does not keep it the same.',
    },
    {
      q: 'A rectangle has length and width in the ratio $5:3$, and its perimeter is $64$. What is its area?',
      choices: ['$120$', '$960$', '$240$', '$204$'],
      answer: 2,
      solution: 'Let the length be $5x$ and the width $3x$. The perimeter is $2(5x + 3x) = 16x = 64$, so $x = 4$. The rectangle is $20$ by $12$, giving area $20 \\times 12 = 240$. (Choosing $960$ comes from forgetting the perimeter counts each side twice.)',
    },
  ],
}

const s62 = {
  id: '6.2',
  title: 'More Challenging Ratio Problems',
  learn: {
    concepts: [
      {
        heading: 'When a ratio changes, freeze the "before"',
        body: 'If a ratio changes because things are added or removed, name the ORIGINAL quantities with a multiplier: $3x$ and $5x$. Then apply the change to build the new amounts, and set the new ratio as an equation. The multiplier belongs to the before picture, never the after.',
      },
      {
        heading: 'Turn a ratio equation into a cross-product',
        body: 'The statement "the new ratio is $4:5$" means $\\frac{\\text{first}}{\\text{second}} = \\frac{4}{5}$. Cross-multiplying clears the fractions: if $\\frac{3x+6}{5x} = \\frac{4}{5}$, then $5(3x + 6) = 4(5x)$ — a linear equation you already know how to solve.',
      },
      {
        heading: 'Watch which quantity actually changes',
        body: 'Read changing-ratio problems twice. "Six students join the first group" changes only the first part; "each group loses $6$" changes both. Setting up the wrong side is the most common slip in this whole chapter.',
      },
      {
        heading: 'Chain ratios through a shared quantity',
        body: 'Given $a:b = 2:3$ and $b:c = 4:5$, the two ratios disagree about $b$. Rescale each so $b$ matches: use the least common multiple $12$, giving $a:b = 8:12$ and $b:c = 12:15$. Now they snap together: $a:b:c = 8:12:15$.',
      },
    ],
    examples: [
      {
        problem: 'Two clubs have members in the ratio $3:5$. After $6$ new members join the first club, the ratio becomes $4:5$. How many members did each club have originally?',
        steps: [
          'Let the original memberships be $3x$ and $5x$. Only the first club changes: it becomes $3x + 6$, while the second stays $5x$.',
          'The new ratio gives $\\frac{3x+6}{5x} = \\frac{4}{5}$. Cross-multiply: $5(3x + 6) = 4(5x)$, so $15x + 30 = 20x$.',
          'Then $30 = 5x$, so $x = 6$. The clubs started with $18$ and $30$ members. Check: $24:30 = 4:5$.',
        ],
        answer: 'Originally $18$ and $30$ members',
      },
      {
        problem: 'If $a:b = 2:3$ and $b:c = 4:5$, find $a:b:c$.',
        steps: [
          'The shared quantity is $b$: it is $3$ parts in the first ratio but $4$ parts in the second. Rescale both to the least common multiple, $12$.',
          'Multiply the first ratio by $4$: $a:b = 8:12$. Multiply the second by $3$: $b:c = 12:15$.',
          'With $b$ matching, the chains join: $a:b:c = 8:12:15$.',
        ],
        answer: '$a:b:c = 8:12:15$',
      },
      {
        problem: 'Red and green tiles are in the ratio $5:7$. After $4$ tiles of EACH color are removed, the ratio becomes $2:3$. How many red tiles were there at first?',
        steps: [
          'Original counts: $5x$ red and $7x$ green. Both change: the new counts are $5x - 4$ and $7x - 4$.',
          'Set up the new ratio: $\\frac{5x-4}{7x-4} = \\frac{2}{3}$, so $3(5x - 4) = 2(7x - 4)$, giving $15x - 12 = 14x - 8$.',
          'Solve: $x = 4$, so there were $5 \\times 4 = 20$ red tiles. Check: $16:24 = 2:3$.',
        ],
        answer: 'There were $20$ red tiles at first',
      },
    ],
  },
  problems: [
    {
      q: 'If $a:b = 2:3$ and $b:c = 3:4$, what is $a:c$?',
      choices: ['$2:3$', '$3:8$', '$3:4$', '$1:2$'],
      answer: 3,
      solution: 'The $b$ parts already match ($3$ and $3$), so the chain joins directly: $a:b:c = 2:3:4$. Then $a:c = 2:4$, which simplifies to $1:2$.',
    },
    {
      q: 'A drawer has blue and black pens in the ratio $3:4$. After buying $5$ more blue pens, the two colors are equal in number. How many blue pens were there originally?',
      choices: ['$20$', '$15$', '$5$', '$12$'],
      answer: 1,
      solution: 'Originally $3x$ blue and $4x$ black. Equal numbers after the purchase means $3x + 5 = 4x$, so $x = 5$. Blue pens originally: $3 \\times 5 = 15$. Check: $15 + 5 = 20 = 4 \\times 5$ black pens.',
    },
    {
      q: 'Two numbers are in the ratio $5:3$. If the smaller number were increased by $8$, the numbers would be equal. What is the sum of the two numbers?',
      choices: ['$32$', '$28$', '$40$', '$24$'],
      answer: 0,
      solution: 'The numbers are $5x$ and $3x$. Equality after the increase means $3x + 8 = 5x$, so $2x = 8$ and $x = 4$. The numbers are $20$ and $12$, and their sum is $32$.',
    },
    {
      q: 'A club has boys and girls in the ratio $4:5$. If $3$ more boys join, there will be equally many boys and girls. How many members does the club have now, before anyone joins?',
      choices: ['$12$', '$15$', '$27$', '$30$'],
      answer: 2,
      solution: 'With $4x$ boys and $5x$ girls, the join condition gives $4x + 3 = 5x$, so $x = 3$. The club currently has $12 + 15 = 27$ members. ($12$ and $15$ are the separate counts — the question asks for the total.)',
    },
    {
      q: 'Two teams have players in the ratio $2:5$. After $9$ players join the first team, the ratio becomes $3:5$. How many players did the first team have originally?',
      choices: ['$9$', '$18$', '$27$', '$45$'],
      answer: 1,
      solution: 'Originally $2x$ and $5x$; only the first team changes. Then $\\frac{2x+9}{5x} = \\frac{3}{5}$, so $5(2x + 9) = 3(5x)$, giving $10x + 45 = 15x$ and $x = 9$. The first team began with $2 \\times 9 = 18$ players. Check: $27:45 = 3:5$.',
    },
    {
      q: 'Two piles of coins are in the ratio $7:4$. After $6$ coins are removed from EACH pile, the ratio becomes $5:2$. How many coins did the larger pile have originally?',
      choices: ['$12$', '$28$', '$15$', '$21$'],
      answer: 3,
      solution: 'Original piles: $7x$ and $4x$. Both shrink by $6$: $\\frac{7x-6}{4x-6} = \\frac{5}{2}$, so $2(7x - 6) = 5(4x - 6)$, giving $14x - 12 = 20x - 30$. Then $18 = 6x$, so $x = 3$, and the larger pile had $21$ coins. Check: $15:6 = 5:2$.',
    },
    {
      q: 'If $a:b = 3:4$ and $b:c = 6:7$, what is $a:b:c$?',
      choices: ['$9:12:14$', '$3:4:7$', '$18:24:21$', '$9:12:21$'],
      answer: 0,
      solution: 'The shared quantity $b$ is $4$ parts in one ratio and $6$ in the other; the least common multiple is $12$. Rescale: $a:b = 9:12$ and $b:c = 12:14$. Joining gives $a:b:c = 9:12:14$. Simply gluing the ratios together as $3:4:7$ skips the rescaling step.',
    },
    {
      q: 'A recipe uses flour and sugar in the ratio $5:2$. If the sugar is increased by $12$ grams, the ratio becomes $5:6$. How many grams of flour does the recipe use?',
      choices: ['$5$', '$10$', '$15$', '$25$'],
      answer: 2,
      solution: 'Let the amounts be $5x$ flour and $2x$ sugar; only the sugar changes. Then $\\frac{5x}{2x+12} = \\frac{5}{6}$, so $6(5x) = 5(2x + 12)$, giving $30x = 10x + 60$ and $x = 3$. Flour: $5 \\times 3 = 15$ grams. Check: $15:18 = 5:6$.',
    },
    {
      q: 'A mother and her son have ages in the ratio $5:2$. In $6$ years, the ratio of their ages will be $2:1$. How old is the mother now?',
      choices: ['$12$', '$30$', '$36$', '$25$'],
      answer: 1,
      solution: 'Now: ages $5x$ and $2x$. In $6$ years: $\\frac{5x+6}{2x+6} = \\frac{2}{1}$, so $5x + 6 = 2(2x + 6) = 4x + 12$, giving $x = 6$. The mother is $5 \\times 6 = 30$ now. Check: in $6$ years they are $36$ and $18$, and $36:18 = 2:1$.',
    },
    {
      q: 'Amir and Bella have money in the ratio $4:7$. If Bella gives Amir $\\$12$, the ratio becomes $2:3$. How much money do they have altogether?',
      choices: ['$\\$120$', '$\\$210$', '$\\$330$', '$\\$300$'],
      answer: 2,
      solution: 'Let them have $4x$ and $7x$. A transfer changes both: $\\frac{4x+12}{7x-12} = \\frac{2}{3}$, so $3(4x + 12) = 2(7x - 12)$, giving $12x + 36 = 14x - 24$ and $x = 30$. They have $\\$120$ and $\\$210$, so $\\$330$ total. Bonus check: a transfer never changes the total, and $132 + 198 = 330$ still.',
    },
  ],
}

const s63 = {
  id: '6.3',
  title: 'Conversion Factors',
  learn: {
    concepts: [
      {
        heading: 'A conversion factor is a clever way to write $1$',
        body: 'Since $1$ meter and $100$ centimeters are the same length, the fraction $\\frac{100 \\text{ cm}}{1 \\text{ m}}$ equals $1$. Multiplying by it changes the units without changing the amount — that is the entire secret of unit conversion.',
      },
      {
        heading: 'Point the fraction so units cancel',
        body: 'Every equality of units gives TWO factors: $\\frac{100 \\text{ cm}}{1 \\text{ m}}$ and $\\frac{1 \\text{ m}}{100 \\text{ cm}}$. Choose the one whose bottom cancels the unit you want to get rid of. If the old unit does not cancel, you picked the upside-down factor.',
      },
      {
        heading: 'Chain factors for multi-step trips',
        body: 'To go from hours to seconds, pass through minutes: multiply by $\\frac{60 \\text{ min}}{1 \\text{ h}}$ and then $\\frac{60 \\text{ s}}{1 \\text{ min}}$. Units cancel in a chain exactly like common factors in a product of fractions.',
      },
      {
        heading: 'Compound rates convert on both levels',
        body: 'A rate like km/h has a unit upstairs and a unit downstairs, and each can be converted separately. For km/h to m/s: multiply by $1000$ (kilometers to meters) and divide by $3600$ (hours to seconds). The combined shortcut: m/s $=$ km/h $\\times \\frac{1000}{3600} = $ km/h $\\div 3.6$.',
      },
    ],
    examples: [
      {
        problem: 'Convert $3.5$ meters to centimeters using a conversion factor.',
        steps: [
          'The factor with meters on the bottom is $\\frac{100 \\text{ cm}}{1 \\text{ m}}$, which equals $1$.',
          'Multiply: $3.5$ m $\\times \\frac{100 \\text{ cm}}{1 \\text{ m}} = 3.5 \\times 100$ cm. The meter units cancel.',
        ],
        answer: '$3.5$ m $= 350$ cm',
      },
      {
        problem: 'Convert $72$ km/h to m/s.',
        steps: [
          'Convert each level of the rate: $72$ km is $72 \\times 1000 = 72{,}000$ m, and $1$ hour is $3600$ seconds.',
          'So the rate is $\\frac{72{,}000 \\text{ m}}{3600 \\text{ s}}$.',
          'Divide: $72{,}000 \\div 3600 = 20$.',
        ],
        answer: '$72$ km/h $= 20$ m/s',
      },
      {
        problem: 'How many minutes are in $2$ days?',
        steps: [
          'Chain two factors: days to hours, then hours to minutes.',
          '$2$ days $\\times \\frac{24 \\text{ h}}{1 \\text{ day}} \\times \\frac{60 \\text{ min}}{1 \\text{ h}}$ — the day and hour units cancel down the chain.',
          'Compute: $2 \\times 24 \\times 60 = 2880$.',
        ],
        answer: '$2$ days $= 2880$ minutes',
      },
    ],
  },
  problems: [
    {
      q: 'How many centimeters are in $5$ meters?',
      choices: ['$50$', '$5000$', '$500$', '$0.05$'],
      answer: 2,
      solution: 'Multiply by the factor $\\frac{100 \\text{ cm}}{1 \\text{ m}}$: $5 \\times 100 = 500$ cm. Choosing $0.05$ means the factor was used upside down — the meters would not have canceled.',
    },
    {
      q: 'How many seconds are in $3$ hours?',
      choices: ['$10{,}800$', '$180$', '$3600$', '$1080$'],
      answer: 0,
      solution: 'Chain the factors: $3$ h $\\times \\frac{60 \\text{ min}}{1 \\text{ h}} \\times \\frac{60 \\text{ s}}{1 \\text{ min}} = 3 \\times 60 \\times 60 = 10{,}800$ seconds. Stopping at $180$ only reaches minutes — the chain needs both links.',
    },
    {
      q: 'To convert $480$ minutes into hours, what should you do?',
      choices: ['Multiply by $60$', 'Divide by $60$', 'Divide by $24$', 'Multiply by $3600$'],
      answer: 1,
      solution: 'We want minutes to cancel, so use the factor $\\frac{1 \\text{ h}}{60 \\text{ min}}$ — that is, divide by $60$. Indeed $480 \\div 60 = 8$ hours. Multiplying by $60$ points the factor the wrong way and would give a huge, wrong number.',
    },
    {
      q: 'A package weighs $2400$ grams. How many kilograms is that?',
      choices: ['$24$', '$240$', '$0.24$', '$2.4$'],
      answer: 3,
      solution: 'Since $1000$ g $= 1$ kg, multiply by $\\frac{1 \\text{ kg}}{1000 \\text{ g}}$: $2400 \\div 1000 = 2.4$ kg. The wrong answers come from sliding the decimal point the wrong number of places.',
    },
    {
      q: 'A train travels at $54$ km/h. What is its speed in m/s?',
      choices: ['$900$', '$15$', '$194.4$', '$54$'],
      answer: 1,
      solution: 'Convert both levels: $54$ km $= 54{,}000$ m, and $1$ h $= 3600$ s. So the speed is $\\frac{54{,}000}{3600} = 15$ m/s. The answer $900$ comes from dividing by $60$ only once — hours to seconds needs two factors of $60$. Shortcut: divide km/h by $3.6$.',
    },
    {
      q: 'A sprinter runs at $10$ m/s. What is that in km/h?',
      choices: ['$36$', '$2.78$', '$600$', '$3.6$'],
      answer: 0,
      solution: 'Going this direction, multiply by $3.6$: there are $3600$ seconds in an hour (so multiply by $3600$) and $1000$ meters in a kilometer (so divide by $1000$). That gives $10 \\times \\frac{3600}{1000} = 36$ km/h. The answer $2.78$ is what you get converting the wrong way.',
    },
    {
      q: 'A snail crawls $5$ centimeters per minute. How many meters does it travel per hour?',
      choices: ['$300$', '$0.3$', '$3$', '$30$'],
      answer: 2,
      solution: 'Convert each level: $5$ cm/min $\\times 60$ min/h $= 300$ cm/h, and $300$ cm $= 3$ m. So the snail travels $3$ m/h. Stopping at $300$ forgets to convert centimeters to meters.',
    },
    {
      q: 'On the planet Zorb, $1$ zog equals $4$ blips, and $1$ blip equals $6$ trins. How many trins are in $3$ zogs?',
      choices: ['$18$', '$13$', '$24$', '$72$'],
      answer: 3,
      solution: 'Made-up units obey the same rules! Chain the factors: $3$ zogs $\\times \\frac{4 \\text{ blips}}{1 \\text{ zog}} \\times \\frac{6 \\text{ trins}}{1 \\text{ blip}} = 3 \\times 4 \\times 6 = 72$ trins. Adding $4 + 6$ or converting only one step gives the wrong answers.',
    },
    {
      q: 'A car travels at $90$ km/h. How many meters does it cover in $10$ seconds?',
      choices: ['$250$', '$900$', '$25$', '$150$'],
      answer: 0,
      solution: 'First convert the rate: $90$ km/h $= \\frac{90{,}000 \\text{ m}}{3600 \\text{ s}} = 25$ m/s. Then distance $=$ rate $\\times$ time $= 25 \\times 10 = 250$ meters. The choice $25$ is the speed, not the distance — a rate still needs to be multiplied by the time.',
    },
    {
      q: 'Water flows from a pipe at $12$ liters per minute. How many liters flow in one full day?',
      choices: ['$720$', '$1728$', '$17{,}280$', '$288$'],
      answer: 2,
      solution: 'Chain up through hours: $12$ L/min $\\times 60$ min/h $= 720$ L/h, then $720 \\times 24 = 17{,}280$ L/day. The choice $720$ stops at one hour, and $288$ multiplies by $24$ but forgets the $60$.',
    },
  ],
}

const s64 = {
  id: '6.4',
  title: 'Percent',
  learn: {
    concepts: [
      {
        heading: 'Percent means "per hundred"',
        body: 'The symbol $\\%$ is just shorthand for dividing by $100$: $p\\%$ means $\\frac{p}{100}$. So $30\\% = \\frac{30}{100} = 0.3$, and $150\\% = \\frac{150}{100} = 1.5$. Every percent problem becomes an ordinary equation once you make this swap.',
      },
      {
        heading: 'Translate words into an equation',
        body: 'In percent sentences, "is" becomes $=$ and "of" becomes multiplication. So "$x$ is $30\\%$ of $y$" translates directly to $x = \\frac{30}{100} \\cdot y$. Once the sentence is an equation, algebra takes over — no special percent rules needed.',
      },
      {
        heading: 'Any of the three parts can be the unknown',
        body: 'Every percent statement has three numbers: the part, the percent, and the whole. Whichever one is missing, call it a variable and solve. "What is $20\\%$ of $80$?" solves for the part; "$16$ is what percent of $80$?" solves for the percent; "$16$ is $20\\%$ of what?" solves for the whole.',
      },
      {
        heading: 'Percents can pass $100$',
        body: 'A percent over $100\\%$ just means MORE than the whole: $250\\%$ of $12$ is $2.5 \\times 12 = 30$. And be careful with direction: if $a$ is $25\\%$ of $b$, then $b$ is $400\\%$ of $a$ — percent comparisons are not symmetric!',
      },
    ],
    examples: [
      {
        problem: 'What is $35\\%$ of $80$?',
        steps: [
          'Translate: the unknown $n$ satisfies $n = \\frac{35}{100} \\times 80$.',
          'Compute: $\\frac{35 \\times 80}{100} = \\frac{2800}{100} = 28$.',
        ],
        answer: '$35\\%$ of $80$ is $28$',
      },
      {
        problem: '$18$ is what percent of $40$?',
        steps: [
          'Let the percent be $p$. Translate: $18 = \\frac{p}{100} \\times 40$.',
          'Simplify the right side: $\\frac{40p}{100} = \\frac{2p}{5}$, so $18 = \\frac{2p}{5}$.',
          'Multiply both sides by $\\frac{5}{2}$: $p = 18 \\times \\frac{5}{2} = 45$.',
        ],
        answer: '$18$ is $45\\%$ of $40$',
      },
      {
        problem: '$66$ is $120\\%$ of what number?',
        steps: [
          'Let the number be $w$. Translate: $66 = \\frac{120}{100} \\cdot w = 1.2w$.',
          'Divide both sides by $1.2$: $w = \\frac{66}{1.2} = 55$.',
          'Check: $1.2 \\times 55 = 66$. Notice $w$ is SMALLER than $66$, as it must be when the percent is over $100\\%$.',
        ],
        answer: '$66$ is $120\\%$ of $55$',
      },
    ],
  },
  problems: [
    {
      q: 'What is $25\\%$ of $84$?',
      choices: ['$25$', '$21$', '$18$', '$2.1$'],
      answer: 1,
      solution: 'Translate: $\\frac{25}{100} \\times 84 = \\frac{84}{4} = 21$. Since $25\\% = \\frac{1}{4}$, taking $25\\%$ is the same as dividing by $4$.',
    },
    {
      q: 'What is $10\\%$ of $350$?',
      choices: ['$3.5$', '$45$', '$350$', '$35$'],
      answer: 3,
      solution: '$10\\% = \\frac{10}{100} = \\frac{1}{10}$, so just divide by $10$: $350 \\div 10 = 35$. The answer $3.5$ divides by $100$ instead — that would be $1\\%$.',
    },
    {
      q: 'Which fraction equals $7\\%$?',
      choices: ['$\\frac{7}{100}$', '$\\frac{7}{10}$', '$\\frac{1}{7}$', '$7$'],
      answer: 0,
      solution: 'Percent means per hundred, so $7\\% = \\frac{7}{100}$. The fraction $\\frac{7}{10}$ would be $70\\%$ — ten times too big.',
    },
    {
      q: 'What is $150\\%$ of $40$?',
      choices: ['$6$', '$45$', '$60$', '$54$'],
      answer: 2,
      solution: '$150\\% = \\frac{150}{100} = 1.5$, so $150\\%$ of $40$ is $1.5 \\times 40 = 60$. A percent over $100\\%$ gives more than the original — the answer must beat $40$.',
    },
    {
      q: '$24$ is what percent of $60$?',
      choices: ['$40\\%$', '$36\\%$', '$24\\%$', '$250\\%$'],
      answer: 0,
      solution: 'Set up $24 = \\frac{p}{100} \\times 60$. Then $p = \\frac{24 \\times 100}{60} = 40$, so the answer is $40\\%$. The choice $250\\%$ answers the reversed question, "$60$ is what percent of $24$?" — order matters!',
    },
    {
      q: '$90$ is $30\\%$ of what number?',
      choices: ['$27$', '$120$', '$300$', '$270$'],
      answer: 2,
      solution: 'Let the number be $w$: $90 = 0.3w$, so $w = \\frac{90}{0.3} = 300$. The answer $27$ computes $30\\%$ OF $90$ instead — here $90$ is the part, not the whole.',
    },
    {
      q: '$12\\%$ of a number is $21$. What is the number?',
      choices: ['$2.52$', '$175$', '$252$', '$1750$'],
      answer: 1,
      solution: 'Translate: $\\frac{12}{100} n = 21$, so $n = 21 \\times \\frac{100}{12} = \\frac{2100}{12} = 175$. Check: $0.12 \\times 175 = 21$.',
    },
    {
      q: 'If $8\\%$ of $n$ is $14$, what is $4\\%$ of $n$?',
      choices: ['$28$', '$3.5$', '$56$', '$7$'],
      answer: 3,
      solution: 'No need to find $n$ at all! $4\\%$ is exactly half of $8\\%$, so $4\\%$ of $n$ is half of $14$, which is $7$. (If you prefer the long road: $0.08n = 14$ gives $n = 175$, and $0.04 \\times 175 = 7$ — same answer.)',
    },
    {
      q: 'Suppose $a$ is $25\\%$ of $b$. Then $b$ is what percent of $a$?',
      choices: ['$25\\%$', '$400\\%$', '$75\\%$', '$125\\%$'],
      answer: 1,
      solution: 'From $a = \\frac{1}{4}b$ we get $b = 4a$, and $4 = \\frac{400}{100}$, so $b$ is $400\\%$ of $a$. Percent comparisons flip to the reciprocal, not to the same percent — try $a = 1$, $b = 4$ to see it concretely.',
    },
    {
      q: '$30\\%$ of a number $x$ equals $45\\%$ of $120$. What is $x$?',
      choices: ['$54$', '$120$', '$150$', '$180$'],
      answer: 3,
      solution: 'Translate both sides: $0.3x = 0.45 \\times 120 = 54$. Then $x = \\frac{54}{0.3} = 180$. The choice $54$ stops halfway — it is $45\\%$ of $120$, but the question asks for $x$.',
    },
  ],
}

const s65 = {
  id: '6.5',
  title: 'Percentage Problems',
  learn: {
    concepts: [
      {
        heading: 'Percent change is a multiplier',
        body: 'Increasing a quantity by $20\\%$ means the new value is $100\\% + 20\\% = 120\\%$ of the old: new $= 1.2 \\times$ old. Decreasing by $20\\%$ means new $= 0.8 \\times$ old. One multiplication captures the whole change — this is the workhorse of the chapter.',
      },
      {
        heading: 'Work backwards by dividing',
        body: 'If a price ROSE $20\\%$ to reach $\\$90$, the original price $p$ satisfies $1.2p = 90$, so $p = 75$. Subtracting $20\\%$ of $90$ is the classic trap — the $20\\%$ was taken of the ORIGINAL price, which is exactly the unknown.',
      },
      {
        heading: 'Successive changes multiply',
        body: 'A $10\\%$ rise followed by a $10\\%$ drop is $\\times 1.1$ then $\\times 0.9$, which is $\\times 0.99$ overall — a $1\\%$ loss, not a return to the start! Never add successive percents; multiply their factors.',
      },
      {
        heading: 'In mixtures, track the pure stuff',
        body: 'A $25\\%$ salt solution is mostly water, but the salt is what we count: amount of salt $=$ concentration $\\times$ total. When solutions are mixed or diluted, the salt from each source adds up, and the new concentration is $\\frac{\\text{total salt}}{\\text{total mixture}}$. Write that equation and solve.',
      },
    ],
    examples: [
      {
        problem: 'After a $20\\%$ price increase, a jacket costs $\\$90$. What was the original price?',
        steps: [
          'Let the original price be $p$. A $20\\%$ increase multiplies by $1.2$, so $1.2p = 90$.',
          'Divide: $p = \\frac{90}{1.2} = 75$.',
          'Check: $20\\%$ of $\\$75$ is $\\$15$, and $75 + 15 = 90$. (Taking $20\\%$ off $\\$90$ would give $\\$72$ — the wrong base!)',
        ],
        answer: 'The original price was $\\$75$',
      },
      {
        problem: 'A $\\$200$ stock rises $10\\%$ one week and falls $10\\%$ the next. What is it worth then?',
        steps: [
          'Turn each change into a multiplier: up $10\\%$ is $\\times 1.1$, down $10\\%$ is $\\times 0.9$.',
          'Apply both: $200 \\times 1.1 \\times 0.9 = 200 \\times 0.99 = 198$.',
          'The stock is worth $\\$198$ — the drop was $10\\%$ of a BIGGER number, so it outweighed the rise.',
        ],
        answer: 'The stock is worth $\\$198$',
      },
      {
        problem: 'You have $8$ liters of a $25\\%$ salt solution. How much water should you add to dilute it to $20\\%$?',
        steps: [
          'Track the salt: $25\\%$ of $8$ liters is $2$ liters of salt, and adding water never changes that.',
          'Let $w$ be the water added. The new concentration equation is $\\frac{2}{8 + w} = \\frac{20}{100} = \\frac{1}{5}$.',
          'Cross-multiply: $8 + w = 10$, so $w = 2$. Check: $2$ liters of salt in $10$ liters is exactly $20\\%$.',
        ],
        answer: 'Add $2$ liters of water',
      },
    ],
  },
  problems: [
    {
      q: 'Increase $80$ by $15\\%$. What is the result?',
      choices: ['$92$', '$95$', '$12$', '$88$'],
      answer: 0,
      solution: 'Increasing by $15\\%$ multiplies by $1.15$: $80 \\times 1.15 = 92$. The choice $12$ is only the increase itself — the question asks for the new total.',
    },
    {
      q: 'Decrease $60$ by $25\\%$. What is the result?',
      choices: ['$35$', '$15$', '$45$', '$48$'],
      answer: 2,
      solution: 'Decreasing by $25\\%$ leaves $75\\%$: $60 \\times 0.75 = 45$. Equivalently, $25\\%$ of $60$ is $15$, and $60 - 15 = 45$.',
    },
    {
      q: 'After a $10\\%$ discount, a book costs $\\$63$. What was the price before the discount?',
      choices: ['$\\$69.30$', '$\\$70$', '$\\$73$', '$\\$56.70$'],
      answer: 1,
      solution: 'Let the original price be $p$. A $10\\%$ discount leaves $90\\%$: $0.9p = 63$, so $p = 70$. Adding $10\\%$ of $\\$63$ gives $\\$69.30$ — but the discount was $10\\%$ of the ORIGINAL price, not of the sale price.',
    },
    {
      q: 'A store buys a shirt for $\\$40$ and marks it up $30\\%$. What is the selling price?',
      choices: ['$\\$12$', '$\\$43$', '$\\$70$', '$\\$52$'],
      answer: 3,
      solution: 'Marking up $30\\%$ multiplies by $1.3$: $40 \\times 1.3 = 52$. The markup itself is $\\$12$, and $40 + 12 = 52$.',
    },
    {
      q: 'A price increased by $25\\%$ and is now $\\$150$. What was the price before the increase?',
      choices: ['$\\$112.50$', '$\\$125$', '$\\$120$', '$\\$187.50$'],
      answer: 2,
      solution: 'Set up $1.25p = 150$, so $p = \\frac{150}{1.25} = 120$. Check: $25\\%$ of $120$ is $30$, and $120 + 30 = 150$. Subtracting $25\\%$ of $\\$150$ gives $\\$112.50$ — that takes the percent of the wrong base.',
    },
    {
      q: 'A collection worth $200$ points rises $30\\%$, then falls $30\\%$. What is it worth at the end?',
      choices: ['$182$', '$200$', '$180$', '$218$'],
      answer: 0,
      solution: 'Multiply the factors: $200 \\times 1.3 \\times 0.7 = 200 \\times 0.91 = 182$. It does NOT return to $200$: the $30\\%$ fall acted on the larger value $260$, so it removed more than the rise added.',
    },
    {
      q: 'You have $12$ liters of a $30\\%$ acid solution and add $6$ liters of pure water. What is the new concentration?',
      choices: ['$30\\%$', '$20\\%$', '$24\\%$', '$15\\%$'],
      answer: 1,
      solution: 'The acid is fixed: $30\\%$ of $12$ is $3.6$ liters. The total grows to $18$ liters, so the concentration is $\\frac{3.6}{18} = 0.2 = 20\\%$. Halving the concentration to $15\\%$ would need the total to double, but it only grew by half.',
    },
    {
      q: 'How many grams of salt must be dissolved in $180$ grams of water to make a solution that is $10\\%$ salt?',
      choices: ['$18$', '$16$', '$10$', '$20$'],
      answer: 3,
      solution: 'Let $s$ be the salt. The whole SOLUTION weighs $180 + s$ grams, so $\\frac{s}{180+s} = \\frac{10}{100} = \\frac{1}{10}$. Cross-multiply: $10s = 180 + s$, so $9s = 180$ and $s = 20$. Check: $\\frac{20}{200} = 10\\%$. The tempting answer $18$ is $10\\%$ of the water alone — but the salt is part of the solution too!',
    },
    {
      q: 'A price gets two successive discounts: first $20\\%$ off, then $25\\%$ off the reduced price. What single discount is this equivalent to?',
      choices: ['$45\\%$', '$40\\%$', '$55\\%$', '$60\\%$'],
      answer: 1,
      solution: 'Multiply the remaining fractions: $0.8 \\times 0.75 = 0.6$, so $60\\%$ of the price remains — a $40\\%$ discount. Adding $20\\% + 25\\% = 45\\%$ overcounts, because the second discount applied to an already-reduced price.',
    },
    {
      q: 'An alloy is made by melting $40$ grams of metal that is $35\\%$ copper with $60$ grams of metal that is $60\\%$ copper. What percent of the new alloy is copper?',
      choices: ['$50\\%$', '$47.5\\%$', '$95\\%$', '$48\\%$'],
      answer: 0,
      solution: 'Track the copper: $0.35 \\times 40 = 14$ grams and $0.6 \\times 60 = 36$ grams, for $50$ grams of copper in $100$ grams of alloy — exactly $50\\%$. The choice $47.5\\%$ averages $35\\%$ and $60\\%$ evenly, but the $60\\%$ metal deserves more weight since there is more of it.',
    },
  ],
}

const challenge = [
  {
    q: 'A father and daughter have ages in the ratio $8:3$. In $10$ years, the ratio will be $2:1$. How old is the daughter now?',
    choices: ['$15$', '$40$', '$5$', '$18$'],
    answer: 0,
    solution: 'Now: $8x$ and $3x$. In $10$ years: $\\frac{8x+10}{3x+10} = \\frac{2}{1}$, so $8x + 10 = 6x + 20$, giving $x = 5$. The daughter is $3 \\times 5 = 15$. Check: in $10$ years they are $50$ and $25$, and $50:25 = 2:1$.',
  },
  {
    q: 'If $a:b = 5:6$ and $b:c = 8:9$, and $a + b + c = 142$, what is $c$?',
    choices: ['$27$', '$36$', '$54$', '$48$'],
    answer: 2,
    solution: 'Match the $b$ parts at their least common multiple, $24$: $a:b = 20:24$ and $b:c = 24:27$, so $a:b:c = 20:24:27$. The parts total $71$, and $71x = 142$ gives $x = 2$. So $c = 27 \\times 2 = 54$.',
  },
  {
    q: 'A high-speed train travels at $108$ km/h. What is its speed in m/s?',
    choices: ['$108$', '$30$', '$388.8$', '$18$'],
    answer: 1,
    solution: 'Convert both levels of the rate: $\\frac{108 \\times 1000 \\text{ m}}{3600 \\text{ s}} = \\frac{108{,}000}{3600} = 30$ m/s. The shortcut is dividing by $3.6$; multiplying by $3.6$ instead gives $388.8$, the upside-down conversion.',
  },
  {
    q: '$45\\%$ of a number $x$ equals $60\\%$ of $90$. What is $x$?',
    choices: ['$108$', '$67.5$', '$54$', '$120$'],
    answer: 3,
    solution: 'Translate: $0.45x = 0.6 \\times 90 = 54$. Then $x = \\frac{54}{0.45} = 120$. Check: $45\\%$ of $120$ is $54$. The choice $54$ is only the right-hand side, not $x$.',
  },
  {
    q: 'A number is increased by $20\\%$, and the result is then increased by $50\\%$, giving $90$. What was the original number?',
    choices: ['$50$', '$20$', '$45$', '$63$'],
    answer: 0,
    solution: 'The two increases multiply: $n \\times 1.2 \\times 1.5 = 1.8n = 90$, so $n = 50$. Adding the percents to get a single $70\\%$ increase would be wrong — the $50\\%$ acted on the already-increased value.',
  },
  {
    q: 'You mix $6$ liters of a $50\\%$ juice drink with $9$ liters of a $20\\%$ juice drink. What percent of the mixture is juice?',
    choices: ['$35\\%$', '$30\\%$', '$32\\%$', '$70\\%$'],
    answer: 2,
    solution: 'Track the pure juice: $0.5 \\times 6 = 3$ liters and $0.2 \\times 9 = 1.8$ liters, so $4.8$ liters of juice in $15$ liters of mixture. Concentration: $\\frac{4.8}{15} = 0.32 = 32\\%$. The even average $35\\%$ ignores that there is more of the weaker drink.',
  },
  {
    q: 'A box has red and blue pens in the ratio $4:5$. If $6$ red pens are added and $3$ blue pens are removed, the colors become equal in number. How many red pens were there originally?',
    choices: ['$45$', '$24$', '$28$', '$36$'],
    answer: 3,
    solution: 'Originally $4x$ red and $5x$ blue. Equality after the changes means $4x + 6 = 5x - 3$, so $x = 9$. Red pens originally: $4 \\times 9 = 36$. Check: $36 + 6 = 42$ and $45 - 3 = 42$.',
  },
  {
    q: 'A store buys an item for $\\$60$, marks the price up $25\\%$, then runs a sale of $20\\%$ off the marked price. What does a customer pay?',
    choices: ['$\\$57$', '$\\$60$', '$\\$63$', '$\\$75$'],
    answer: 1,
    solution: 'Chain the multipliers: $60 \\times 1.25 \\times 0.8 = 60 \\times 1 = 60$. The markup and discount exactly cancel because $1.25 \\times 0.8 = 1$ — even though $25\\%$ and $20\\%$ look different! The store makes nothing on the sale.',
  },
  {
    q: 'What is $40\\%$ of $25\\%$ of $300$?',
    choices: ['$120$', '$75$', '$30$', '$65$'],
    answer: 2,
    solution: 'Work from the inside out: $25\\%$ of $300$ is $75$, and $40\\%$ of $75$ is $30$. Or multiply the fractions first: $0.4 \\times 0.25 = 0.1$, and $10\\%$ of $300$ is $30$ — percents of percents multiply.',
  },
  {
    q: 'How many liters of a $20\\%$ salt solution must be added to $5$ liters of an $8\\%$ salt solution to make a $12\\%$ solution?',
    choices: ['$2.5$', '$2$', '$4$', '$5$'],
    answer: 0,
    solution: 'Let $x$ be the liters added. Salt in: $0.08 \\times 5 + 0.2x = 0.4 + 0.2x$. Total: $5 + x$. Set the concentration: $0.4 + 0.2x = 0.12(5 + x) = 0.6 + 0.12x$. Then $0.08x = 0.2$, so $x = 2.5$. Check: salt $= 0.9$ liters in $7.5$ liters, and $\\frac{0.9}{7.5} = 12\\%$.',
  },
  {
    q: 'Three savings jars hold money in the ratio $2:3:5$, and the fullest jar holds $\\$36$ more than the emptiest. How much money is there in all?',
    choices: ['$\\$72$', '$\\$120$', '$\\$108$', '$\\$36$'],
    answer: 1,
    solution: 'The jars hold $2x$, $3x$, and $5x$. The difference between fullest and emptiest is $5x - 2x = 3x = 36$, so $x = 12$. The total is $10x = \\$120$.',
  },
  {
    q: 'A game first takes $10\\%$ off a price, then takes $\\$5$ off the result, leaving a final price of $\\$40$. What was the original price?',
    choices: ['$\\$49.50$', '$\\$45$', '$\\$55$', '$\\$50$'],
    answer: 3,
    solution: 'Undo the steps in reverse order. Before the $\\$5$ came off: $40 + 5 = 45$. Before the $10\\%$ discount: $0.9p = 45$, so $p = 50$. Check forward: $50 \\times 0.9 = 45$, then $45 - 5 = 40$. Undoing the discount by ADDING $10\\%$ to $\\$45$ instead of dividing by $0.9$ gives $\\$49.50$ — a $10\\%$ increase does not undo a $10\\%$ decrease!',
  },
]

const worksheet = [
  {
    q: 'Two numbers are in the ratio $3:7$ and add up to $90$. What is the larger number?',
    answer: '$63$',
    solution: 'Write the numbers as $3x$ and $7x$. Then $10x = 90$, so $x = 9$, and the larger number is $7 \\times 9 = 63$.',
  },
  {
    q: 'What is $15\\%$ of $240$?',
    answer: '$36$',
    solution: 'Translate: $\\frac{15}{100} \\times 240 = \\frac{3600}{100} = 36$. Quick route: $10\\%$ is $24$ and $5\\%$ is $12$, and $24 + 12 = 36$.',
  },
  {
    q: '$36$ is $45\\%$ of what number?',
    answer: '$80$',
    solution: 'Let the number be $w$: $0.45w = 36$, so $w = \\frac{36}{0.45} = 80$. Check: $45\\%$ of $80$ is $36$.',
  },
  {
    q: 'A falcon dives at $25$ m/s. How fast is that in km/h?',
    answer: '$90$ km/h',
    solution: 'Multiply by $3600$ seconds per hour and divide by $1000$ meters per kilometer: $25 \\times \\frac{3600}{1000} = 25 \\times 3.6 = 90$ km/h.',
  },
  {
    q: 'Three friends split $81$ trading cards in the ratio $2:3:4$. How many cards does the middle share have?',
    answer: '$27$',
    solution: 'The shares are $2x$, $3x$, and $4x$, so $9x = 81$ and $x = 9$. The middle share is $3 \\times 9 = 27$ cards.',
  },
  {
    q: 'After a $30\\%$ price drop, a backpack costs $\\$56$. What did it cost before the drop?',
    answer: '$\\$80$',
    solution: 'A $30\\%$ drop leaves $70\\%$: $0.7p = 56$, so $p = \\frac{56}{0.7} = 80$. Check: $30\\%$ of $\\$80$ is $\\$24$, and $80 - 24 = 56$.',
  },
  {
    q: 'Two reading groups have members in the ratio $4:9$. After $10$ students join the first group, the ratio becomes $2:3$. How many students were there in both groups together, before anyone joined?',
    answer: '$65$',
    solution: 'Originally $4x$ and $9x$; only the first group changes. Then $\\frac{4x+10}{9x} = \\frac{2}{3}$, so $3(4x + 10) = 2(9x)$, giving $12x + 30 = 18x$ and $x = 5$. The groups had $20$ and $45$ students, so $65$ in all. Check: $30:45 = 2:3$.',
  },
  {
    q: 'A town’s population grows by $25\\%$ one decade, then shrinks by $12\\%$ the next. What is the overall percent change across both decades?',
    answer: 'An increase of $10\\%$',
    solution: 'Multiply the factors: $1.25 \\times 0.88 = 1.1$, so the population ends at $110\\%$ of the start — a $10\\%$ increase overall. Adding $25\\% - 12\\% = 13\\%$ misses that the shrink acted on the already-grown population.',
  },
  {
    q: 'You have $4$ liters of syrup mixture that is $30\\%$ syrup. How many liters of pure water must you add to bring it down to $12\\%$ syrup?',
    answer: '$6$ liters',
    solution: 'The syrup is fixed at $0.3 \\times 4 = 1.2$ liters. With $w$ liters of water added, $\\frac{1.2}{4 + w} = 0.12$, so $4 + w = \\frac{1.2}{0.12} = 10$ and $w = 6$. Check: $1.2$ liters of syrup in $10$ liters is $12\\%$.',
  },
  {
    q: 'Two quantities $A$ and $B$ are in the ratio $3:4$. If $A$ is doubled and $B$ is increased by $9$, the new ratio is $6:7$. What is $A + B$ originally?',
    answer: '$21$',
    solution: 'Let $A = 3x$ and $B = 4x$. The new quantities are $6x$ and $4x + 9$, so $\\frac{6x}{4x+9} = \\frac{6}{7}$. Cross-multiply: $42x = 6(4x + 9) = 24x + 54$, so $18x = 54$ and $x = 3$. Then $A = 9$, $B = 12$, and $A + B = 21$. Check: $18:21 = 6:7$.',
  },
]

export default {
  id: 'intro-algebra-ch06',
  book: 'intro-algebra',
  number: 6,
  title: 'Ratios and Percents',
  intro:
    'You have met ratios and percents before — but this time you bring algebra with you, and that changes everything. Instead of guessing and checking, you will name the unknown, write one honest equation, and let it do the work. By the end, changing ratios, unit conversions, and salt-water mixtures will all bow to the same three-step plan: name, translate, solve.',
  sections: [s61, s62, s63, s64, s65],
  challenge,
  worksheet,
}
