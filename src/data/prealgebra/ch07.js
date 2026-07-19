// Prealgebra — Chapter 7: Ratios, Conversions, and Rates
// All problems, explanations, and examples are original MathQuest content.

const s71 = {
  id: '7.1',
  title: 'What is a Ratio?',
  learn: {
    concepts: [
      {
        heading: 'A ratio compares two amounts',
        body: 'A ratio tells you how big one amount is compared to another. If a bowl holds $2$ apples and $3$ oranges, the ratio of apples to oranges is $2:3$ — for every $2$ apples, there are $3$ oranges. Order matters: apples to oranges is $2:3$, but oranges to apples is $3:2$.',
      },
      {
        heading: 'Part-to-part vs part-to-whole',
        body: 'The ratio $2:3$ of apples to oranges compares one part to another part. But you can also compare a part to the whole bowl: there are $2 + 3 = 5$ pieces of fruit in all, so apples make up $2$ out of $5$, or $\\frac{2}{5}$ of the fruit. Always check which kind of comparison a question is asking for!',
      },
      {
        heading: 'Simplify ratios like fractions',
        body: 'A ratio of $12:18$ means the same thing as $2:3$ — divide both numbers by their common factor $6$. Just like fractions, a ratio is in simplest form when the two numbers share no common factor bigger than $1$.',
      },
      {
        heading: 'Splitting an amount in a ratio',
        body: 'To split an amount in a ratio like $2:3$, first count the total number of parts: $2 + 3 = 5$. Divide the amount by $5$ to find the size of one part, then hand out $2$ parts to one side and $3$ parts to the other.',
      },
    ],
    examples: [
      {
        problem: 'Write the ratio $12:18$ in simplest form.',
        steps: [
          'Look for the biggest number that divides both $12$ and $18$. That is $6$.',
          'Divide both sides by $6$: $12 \\div 6 = 2$ and $18 \\div 6 = 3$.',
        ],
        answer: '$12:18 = 2:3$',
      },
      {
        problem: 'Split $\\$40$ between Ana and Ben in the ratio $3:5$.',
        steps: [
          'Count the parts: $3 + 5 = 8$ parts in all.',
          'One part is $\\$40 \\div 8 = \\$5$.',
          'Ana gets $3$ parts: $3 \\times \\$5 = \\$15$. Ben gets $5$ parts: $5 \\times \\$5 = \\$25$. Check: $\\$15 + \\$25 = \\$40$.',
        ],
        answer: 'Ana gets $\\$15$ and Ben gets $\\$25$',
      },
      {
        problem: 'A class has boys and girls in the ratio $3:4$. What fraction of the class is girls?',
        steps: [
          'The ratio $3:4$ is part-to-part. To find a fraction of the whole class, we need the total number of parts.',
          'Total parts: $3 + 4 = 7$. Girls make up $4$ of those $7$ parts.',
        ],
        answer: 'Girls are $\\frac{4}{7}$ of the class',
      },
    ],
  },
  problems: [
    {
      q: 'A fruit bowl holds $4$ apples and $6$ oranges. What is the ratio of apples to oranges in simplest form?',
      choices: ['$3:2$', '$2:3$', '$2:5$', '$1:2$'],
      answer: 1,
      solution: 'Divide both numbers by their common factor $2$: $4:6 = 2:3$. Watch the order — apples come first, so the smaller number leads. And $2:5$ would compare apples to ALL the fruit, which is a part-to-whole comparison, not what was asked.',
    },
    {
      q: 'Write the ratio $15:25$ in simplest form.',
      choices: ['$3:5$', '$5:3$', '$3:8$', '$1:5$'],
      answer: 0,
      solution: 'Both $15$ and $25$ are divisible by $5$: $15 \\div 5 = 3$ and $25 \\div 5 = 5$. So the simplest form is $3:5$.',
    },
    {
      q: 'A team played $8$ games, winning $5$ and losing $3$. What is the ratio of wins to games played?',
      choices: ['$5:3$', '$3:8$', '$5:8$', '$8:5$'],
      answer: 2,
      solution: 'This asks for part-to-whole: wins compared to ALL games. That is $5:8$. The ratio $5:3$ compares wins to losses — a part-to-part ratio, which is a different question.',
    },
    {
      q: 'The ratio of cats to dogs at a shelter is $3:4$. If there are $12$ dogs, how many cats are there?',
      choices: ['$16$', '$7$', '$12$', '$9$'],
      answer: 3,
      solution: 'The dogs count, $12$, is $4$ parts, so one part is $12 \\div 4 = 3$ animals. Cats are $3$ parts: $3 \\times 3 = 9$ cats. Check the ratio: $9:12 = 3:4$.',
    },
    {
      q: 'Divide $35$ marbles between two friends in the ratio $2:3$. How many marbles does the friend with more marbles get?',
      choices: ['$14$', '$21$', '$15$', '$28$'],
      answer: 1,
      solution: 'Total parts: $2 + 3 = 5$. One part is $35 \\div 5 = 7$ marbles. The bigger share is $3$ parts: $3 \\times 7 = 21$ marbles. (The other friend gets $2 \\times 7 = 14$, and $21 + 14 = 35$.)',
    },
    {
      q: 'A class of $27$ students has boys and girls in the ratio $4:5$. How many girls are in the class?',
      choices: ['$12$', '$5$', '$15$', '$20$'],
      answer: 2,
      solution: 'Total parts: $4 + 5 = 9$, so one part is $27 \\div 9 = 3$ students. Girls are $5$ parts: $5 \\times 3 = 15$. (Boys are $4 \\times 3 = 12$, and $12 + 15 = 27$.)',
    },
    {
      q: 'A bread recipe uses flour and sugar in the ratio $5:2$. If a baker uses $20$ cups of flour, how many cups of sugar are needed?',
      choices: ['$8$', '$50$', '$17$', '$10$'],
      answer: 0,
      solution: 'Flour went from $5$ parts to $20$ cups, so each part is $20 \\div 5 = 4$ cups. Sugar is $2$ parts: $2 \\times 4 = 8$ cups. Careful: the recipe scales by MULTIPLYING, not by adding — adding $15$ to both numbers would give $17$, which breaks the recipe.',
    },
    {
      q: 'A bag holds red and blue marbles in the ratio $3:7$. What fraction of the marbles are red?',
      choices: ['$\\frac{3}{7}$', '$\\frac{7}{10}$', '$\\frac{1}{3}$', '$\\frac{3}{10}$'],
      answer: 3,
      solution: 'The ratio $3:7$ is part-to-part, so first find the whole: $3 + 7 = 10$ parts. Red is $3$ of those $10$ parts, or $\\frac{3}{10}$. The fraction $\\frac{3}{7}$ compares red to blue, not red to the whole bag.',
    },
    {
      q: 'Two numbers are in the ratio $4:7$, and they differ by $18$. What is the larger number?',
      choices: ['$24$', '$42$', '$66$', '$36$'],
      answer: 1,
      solution: 'The difference between the numbers is $7 - 4 = 3$ parts, and that difference is $18$. So one part is $18 \\div 3 = 6$. The larger number is $7$ parts: $7 \\times 6 = 42$. Check: the smaller is $4 \\times 6 = 24$, and $42 - 24 = 18$.',
    },
    {
      q: 'A drawer holds $6$ pencils and $9$ pens — a ratio of $2:3$. If you add $5$ more pencils and $5$ more pens, what is the new ratio of pencils to pens?',
      choices: ['$2:3$', '$7:8$', '$11:14$', '$3:4$'],
      answer: 2,
      solution: 'New counts: $6 + 5 = 11$ pencils and $9 + 5 = 14$ pens, so the ratio is $11:14$, which does not simplify. Surprising but true: ADDING the same amount to both sides changes a ratio. Only MULTIPLYING both sides by the same number keeps a ratio the same.',
    },
  ],
}

const s72 = {
  id: '7.2',
  title: 'Multi-way Ratios',
  learn: {
    concepts: [
      {
        heading: 'Ratios with three parts',
        body: 'A ratio like $2:3:5$ compares three amounts at once. It packs in all the pairwise comparisons: the first to the second is $2:3$, the second to the third is $3:5$, and the first to the third is $2:5$.',
      },
      {
        heading: 'Splitting three ways',
        body: 'Splitting an amount in the ratio $2:3:5$ works just like before: count ALL the parts. Here $2 + 3 + 5 = 10$ parts, so divide the amount by $10$ to find one part, then hand out $2$, $3$, and $5$ parts.',
      },
      {
        heading: 'Combining two ratios: match the middle',
        body: 'Suppose $a:b = 2:3$ and $b:c = 4:5$. We cannot just glue these together, because $b$ is called $3$ in one ratio and $4$ in the other. The fix: scale each ratio so the $b$ values match. A common value for $3$ and $4$ is $12$, giving $a:b = 8:12$ and $b:c = 12:15$, so $a:b:c = 8:12:15$.',
      },
      {
        heading: 'Ratios can be scaled freely',
        body: 'Multiplying every number in a ratio by the same amount keeps the ratio true: $2:3:5$ is the same as $4:6:10$ or $20:30:50$. That freedom is exactly what lets us match middles when combining ratios.',
      },
    ],
    examples: [
      {
        problem: 'Split $60$ stickers among three friends in the ratio $1:2:3$.',
        steps: [
          'Count all the parts: $1 + 2 + 3 = 6$.',
          'One part is $60 \\div 6 = 10$ stickers.',
          'The shares are $1 \\times 10 = 10$, $2 \\times 10 = 20$, and $3 \\times 10 = 30$. Check: $10 + 20 + 30 = 60$.',
        ],
        answer: 'The friends get $10$, $20$, and $30$ stickers',
      },
      {
        problem: 'If $a:b = 2:3$ and $b:c = 4:5$, find $a:b:c$.',
        steps: [
          'The middle amount $b$ appears as $3$ in the first ratio and $4$ in the second. We need one number that works for both.',
          'The least common multiple of $3$ and $4$ is $12$. Scale the first ratio by $4$: $a:b = 8:12$. Scale the second by $3$: $b:c = 12:15$.',
          'Now the middles match, so glue them together: $a:b:c = 8:12:15$.',
        ],
        answer: '$a:b:c = 8:12:15$',
      },
      {
        problem: 'Given $p:q:r = 3:4:6$, find $p:r$ in simplest form.',
        steps: [
          'Read off the first and third numbers: $p:r = 3:6$.',
          'Simplify by dividing both by $3$: $3:6 = 1:2$.',
        ],
        answer: '$p:r = 1:2$',
      },
    ],
  },
  problems: [
    {
      q: 'An amount is split in the ratio $2:3:5$. How many equal parts is it divided into?',
      choices: ['$3$', '$5$', '$30$', '$10$'],
      answer: 3,
      solution: 'Add up all the numbers in the ratio: $2 + 3 + 5 = 10$ parts. (Not $3$ — that just counts how many people share, not how many parts.)',
    },
    {
      q: 'Write the ratio $6:9:12$ in simplest form.',
      choices: ['$2:3:4$', '$1:3:6$', '$3:4:6$', '$1:2:3$'],
      answer: 0,
      solution: 'All three numbers are divisible by $3$: $6 \\div 3 = 2$, $9 \\div 3 = 3$, $12 \\div 3 = 4$. So the simplest form is $2:3:4$.',
    },
    {
      q: 'Split $60$ candies in the ratio $1:2:3$. How big is the largest share?',
      choices: ['$20$', '$36$', '$30$', '$10$'],
      answer: 2,
      solution: 'Total parts: $1 + 2 + 3 = 6$, so one part is $60 \\div 6 = 10$ candies. The largest share is $3$ parts: $3 \\times 10 = 30$.',
    },
    {
      q: 'Given $a:b:c = 3:5:7$, what is $a:c$?',
      choices: ['$3:5$', '$3:7$', '$5:7$', '$7:3$'],
      answer: 1,
      solution: 'Read off the first and third numbers: $a:c = 3:7$. It is already in simplest form since $3$ and $7$ share no common factor. Watch the order — $7:3$ would be $c:a$.',
    },
    {
      q: 'Three cousins split $\\$90$ in the ratio $2:3:4$. How much does the middle share come to?',
      choices: ['$\\$30$', '$\\$20$', '$\\$40$', '$\\$45$'],
      answer: 0,
      solution: 'Total parts: $2 + 3 + 4 = 9$, so one part is $\\$90 \\div 9 = \\$10$. The middle share is $3$ parts: $3 \\times \\$10 = \\$30$.',
    },
    {
      q: 'In a paint mix, red:blue $= 3:4$ and blue:green $= 4:7$. What is red:green?',
      choices: ['$4:7$', '$3:4$', '$7:3$', '$3:7$'],
      answer: 3,
      solution: 'Blue is $4$ in both ratios, so the middles already match: red:blue:green $= 3:4:7$. Read off the ends: red:green $= 3:7$.',
    },
    {
      q: 'If $a:b = 2:3$ and $b:c = 4:5$, what is $a:b:c$?',
      choices: ['$2:3:5$', '$2:12:15$', '$8:12:15$', '$6:12:20$'],
      answer: 2,
      solution: 'Match the middle: $b$ is $3$ in one ratio and $4$ in the other, and the least common multiple is $12$. Scale to get $a:b = 8:12$ and $b:c = 12:15$, then glue: $a:b:c = 8:12:15$. Just writing $2:3:5$ ignores that the two ratios use different sizes for $b$.',
    },
    {
      q: 'The three angles of a triangle are in the ratio $2:3:4$. Angles of a triangle add to $180^\\circ$. How big is the largest angle?',
      choices: ['$40^\\circ$', '$80^\\circ$', '$90^\\circ$', '$60^\\circ$'],
      answer: 1,
      solution: 'Total parts: $2 + 3 + 4 = 9$, so one part is $180^\\circ \\div 9 = 20^\\circ$. The largest angle is $4$ parts: $4 \\times 20^\\circ = 80^\\circ$. Check: $40^\\circ + 60^\\circ + 80^\\circ = 180^\\circ$.',
    },
    {
      q: 'If $x:y = 3:4$ and $y:z = 6:5$, what is $x:z$ in simplest form?',
      choices: ['$9:10$', '$3:5$', '$10:9$', '$4:5$'],
      answer: 0,
      solution: 'Match the middle: $y$ is $4$ and $6$, and their least common multiple is $12$. Scale: $x:y = 9:12$ and $y:z = 12:10$, so $x:y:z = 9:12:10$. Then $x:z = 9:10$, which is already simplest. Do not just glue $3:5$ from the outer numbers — the middles must match first!',
    },
    {
      q: 'Three prizes are in the ratio $2:3:7$. The largest prize is $\\$35$ more than the smallest. What is the total of all three prizes?',
      choices: ['$\\$70$', '$\\$60$', '$\\$96$', '$\\$84$'],
      answer: 3,
      solution: 'The largest minus the smallest is $7 - 2 = 5$ parts, and that gap is $\\$35$, so one part is $\\$35 \\div 5 = \\$7$. The total is $2 + 3 + 7 = 12$ parts: $12 \\times \\$7 = \\$84$. Check: the prizes are $\\$14$, $\\$21$, $\\$49$, and $\\$49 - \\$14 = \\$35$.',
    },
  ],
}

const s73 = {
  id: '7.3',
  title: 'Proportions',
  learn: {
    concepts: [
      {
        heading: 'A proportion is two equal ratios',
        body: 'When two ratios are equal, like $\\frac{2}{3} = \\frac{8}{12}$, we call the equation a proportion. Proportions show up whenever one quantity is a fixed number of times another — recipes, maps, and photos all work this way.',
      },
      {
        heading: 'Solve by scaling',
        body: 'To solve $\\frac{3}{4} = \\frac{x}{20}$, ask: what was $4$ multiplied by to become $20$? Five. So multiply the top by $5$ too: $x = 3 \\times 5 = 15$. Whatever happens to one side of a ratio must happen to the other.',
      },
      {
        heading: 'Cross-multiplying',
        body: 'If $\\frac{a}{b} = \\frac{c}{d}$, then $a \\times d = b \\times c$. This is handy when the scaling factor is not a whole number: from $\\frac{x}{6} = \\frac{10}{15}$ we get $15x = 60$, so $x = 4$.',
      },
      {
        heading: 'Not everything is proportional',
        body: 'Proportions only work when quantities grow by MULTIPLYING together. Doubling a recipe doubles every ingredient. But ages do not work this way: a $12$-year-old with a $36$-year-old parent will not always be a third of the parent’s age, because both ages grow by ADDING years.',
      },
    ],
    examples: [
      {
        problem: 'Solve $\\frac{x}{6} = \\frac{10}{15}$.',
        steps: [
          'Simplify the known ratio first: $\\frac{10}{15} = \\frac{2}{3}$.',
          'Now solve $\\frac{x}{6} = \\frac{2}{3}$. The bottom went from $3$ to $6$ — multiplied by $2$.',
          'Multiply the top by $2$ as well: $x = 2 \\times 2 = 4$.',
        ],
        answer: '$x = 4$',
      },
      {
        problem: 'A recipe for $4$ people needs $3$ cups of rice. How much rice for $10$ people?',
        steps: [
          'Set up the proportion $\\frac{3}{4} = \\frac{x}{10}$: cups over people must stay equal.',
          'Cross-multiply: $4x = 30$, so $x = 7.5$.',
        ],
        answer: '$7.5$ cups of rice',
      },
      {
        problem: 'On a map, $2$ cm stands for $5$ km. Two lakes are $7$ cm apart on the map. How far apart are they really?',
        steps: [
          'Each map centimeter stands for $5 \\div 2 = 2.5$ km.',
          'So $7$ cm stands for $7 \\times 2.5 = 17.5$ km.',
        ],
        answer: 'The lakes are $17.5$ km apart',
      },
    ],
  },
  problems: [
    {
      q: 'Solve $\\frac{x}{12} = \\frac{3}{4}$.',
      choices: ['$16$', '$3$', '$9$', '$36$'],
      answer: 2,
      solution: 'The bottom went from $4$ to $12$ — multiplied by $3$. Do the same to the top: $x = 3 \\times 3 = 9$. Check: $\\frac{9}{12} = \\frac{3}{4}$.',
    },
    {
      q: 'If $\\frac{3}{5} = \\frac{12}{n}$, what is $n$?',
      choices: ['$20$', '$14$', '$12$', '$15$'],
      answer: 0,
      solution: 'The top went from $3$ to $12$ — multiplied by $4$. The bottom must also be multiplied by $4$: $n = 5 \\times 4 = 20$. (Adding $9$ to the bottom to get $14$ breaks the proportion — scaling means multiplying.)',
    },
    {
      q: 'A map uses the scale $1$ cm $= 4$ km. Two towns are $6$ cm apart on the map. What is the real distance?',
      choices: ['$10$ km', '$24$ km', '$6$ km', '$1.5$ km'],
      answer: 1,
      solution: 'Each centimeter stands for $4$ km, so $6$ cm stands for $6 \\times 4 = 24$ km. Dividing to get $1.5$ would be using the scale upside down.',
    },
    {
      q: 'A recipe uses $2$ cups of flour to make $12$ cookies. How much flour is needed for $30$ cookies?',
      choices: ['$3$ cups', '$20$ cups', '$4$ cups', '$5$ cups'],
      answer: 3,
      solution: 'The cookie count went from $12$ to $30$ — multiplied by $2.5$. Multiply the flour the same way: $2 \\times 2.5 = 5$ cups. Check with cross-multiplication: $\\frac{2}{12} = \\frac{5}{30}$ since $2 \\times 30 = 12 \\times 5 = 60$.',
    },
    {
      q: 'Solve $\\frac{n}{8} = \\frac{15}{20}$.',
      choices: ['$5$', '$6$', '$12$', '$7$'],
      answer: 1,
      solution: 'Simplify the right side: $\\frac{15}{20} = \\frac{3}{4}$. Then $\\frac{n}{8} = \\frac{3}{4}$, and since $4 \\times 2 = 8$, we need $n = 3 \\times 2 = 6$.',
    },
    {
      q: 'A $4$ inch by $6$ inch photo is enlarged so its short side becomes $10$ inches. To keep the same shape, how long must the long side become?',
      choices: ['$15$ inches', '$12$ inches', '$16$ inches', '$10$ inches'],
      answer: 0,
      solution: 'The short side went from $4$ to $10$ — multiplied by $2.5$. The long side must scale the same way: $6 \\times 2.5 = 15$ inches. Adding $6$ to get $12$ would stretch the photo out of shape — enlargements multiply, they do not add.',
    },
    {
      q: 'Four identical bricks weigh $10$ kg. How much do $6$ of the same bricks weigh?',
      choices: ['$12$ kg', '$16$ kg', '$14$ kg', '$15$ kg'],
      answer: 3,
      solution: 'One brick weighs $10 \\div 4 = 2.5$ kg, so $6$ bricks weigh $6 \\times 2.5 = 15$ kg. Or scale directly: $6$ bricks is $1.5$ times $4$ bricks, and $10 \\times 1.5 = 15$.',
    },
    {
      q: 'Which pair of fractions forms a proportion?',
      choices: ['$\\frac{2}{3}$ and $\\frac{3}{4}$', '$\\frac{4}{5}$ and $\\frac{5}{6}$', '$\\frac{6}{8}$ and $\\frac{9}{12}$', '$\\frac{1}{2}$ and $\\frac{2}{3}$'],
      answer: 2,
      solution: 'Both $\\frac{6}{8}$ and $\\frac{9}{12}$ simplify to $\\frac{3}{4}$, so they are equal — that is exactly what a proportion is. You can also cross-multiply: $6 \\times 12 = 72$ and $8 \\times 9 = 72$. The other pairs give different cross-products.',
    },
    {
      q: 'On a map, $3$ cm represents $8$ km. Two villages are really $20$ km apart. How far apart are they on the map?',
      choices: ['$7.5$ cm', '$53$ cm', '$6$ cm', '$8.5$ cm'],
      answer: 0,
      solution: 'Set up $\\frac{3 \\text{ cm}}{8 \\text{ km}} = \\frac{x \\text{ cm}}{20 \\text{ km}}$. Cross-multiply: $8x = 60$, so $x = 7.5$ cm. An answer like $53$ cm comes from flipping the scale — always check that map distances come out SMALLER than real ones.',
    },
    {
      q: 'Jade is $12$ and her mom is $36$, so their ages are in the ratio $1:3$. What will the ratio of their ages be in $12$ years?',
      choices: ['$1:3$', '$1:2$', '$2:3$', '$3:4$'],
      answer: 1,
      solution: 'In $12$ years Jade will be $24$ and her mom will be $48$, and $24:48 = 1:2$. Ages are NOT proportional over time — both grow by adding the same $12$ years, and adding changes ratios. Only quantities that scale by multiplying stay in proportion.',
    },
  ],
}

const s74 = {
  id: '7.4',
  title: 'Conversions',
  learn: {
    concepts: [
      {
        heading: 'Conversion factors are clever forms of 1',
        body: 'Since $60$ minutes and $1$ hour are the same amount of time, the fraction $\\frac{60 \\text{ minutes}}{1 \\text{ hour}}$ equals $1$. Multiplying by it changes the units without changing the amount — that is the whole secret of unit conversion.',
      },
      {
        heading: 'Point the factor so units cancel',
        body: 'Every conversion factor comes in two versions: $\\frac{60 \\text{ min}}{1 \\text{ h}}$ and $\\frac{1 \\text{ h}}{60 \\text{ min}}$. Pick the one whose bottom matches the unit you want to get rid of. To convert $3$ hours, use $3 \\text{ h} \\times \\frac{60 \\text{ min}}{1 \\text{ h}} = 180$ min — the hours cancel.',
      },
      {
        heading: 'Chain conversions step by step',
        body: 'No single factor takes you from days to minutes? Chain two: days to hours, then hours to minutes. Each link multiplies by another form of $1$, so you can build as long a chain as you need.',
      },
      {
        heading: 'The metric ladder',
        body: 'Metric units are built on tens: $1$ m $= 100$ cm and $1$ km $= 1000$ m. Going to a SMALLER unit means MORE of them, so multiply; going to a bigger unit means fewer, so divide. A quick size-check catches most mistakes.',
      },
    ],
    examples: [
      {
        problem: 'Convert $3.5$ hours to minutes.',
        steps: [
          'Use the factor with hours on the bottom: $3.5 \\text{ h} \\times \\frac{60 \\text{ min}}{1 \\text{ h}}$.',
          'The hours cancel, leaving $3.5 \\times 60 = 210$ minutes.',
        ],
        answer: '$3.5$ hours $= 210$ minutes',
      },
      {
        problem: 'Convert $3$ km to centimeters.',
        steps: [
          'Chain two factors: kilometers to meters, then meters to centimeters.',
          '$3 \\text{ km} \\times \\frac{1000 \\text{ m}}{1 \\text{ km}} = 3000$ m.',
          '$3000 \\text{ m} \\times \\frac{100 \\text{ cm}}{1 \\text{ m}} = 300{,}000$ cm. Sanity check: centimeters are tiny, so the number should be huge.',
        ],
        answer: '$3$ km $= 300{,}000$ cm',
      },
      {
        problem: 'A train travels $72$ km per hour. How many meters does it travel per second?',
        steps: [
          'Convert the distance: $72$ km $= 72{,}000$ m. Convert the time: $1$ hour $= 3600$ seconds.',
          'So the rate is $\\frac{72{,}000 \\text{ m}}{3600 \\text{ s}} = 20$ m per second.',
        ],
        answer: '$72$ km/h $= 20$ m/s',
      },
    ],
  },
  problems: [
    {
      q: 'How many minutes are in $4$ hours?',
      choices: ['$400$', '$240$', '$120$', '$204$'],
      answer: 1,
      solution: 'Each hour holds $60$ minutes, so $4 \\text{ h} \\times \\frac{60 \\text{ min}}{1 \\text{ h}} = 240$ minutes.',
    },
    {
      q: 'Convert $300$ cm to meters.',
      choices: ['$30$ m', '$30{,}000$ m', '$0.3$ m', '$3$ m'],
      answer: 3,
      solution: 'There are $100$ cm in a meter, and meters are the BIGGER unit, so we divide: $300 \\div 100 = 3$ m. Multiplying instead of dividing would give $30{,}000$, which fails the size check — meters should be a smaller number than centimeters.',
    },
    {
      q: 'A pumpkin weighs $2$ pounds. How many ounces is that? ($1$ pound $= 16$ ounces.)',
      choices: ['$32$', '$18$', '$8$', '$24$'],
      answer: 0,
      solution: 'Ounces are smaller than pounds, so there are more of them: $2 \\times 16 = 32$ ounces.',
    },
    {
      q: 'Convert $5$ km to meters.',
      choices: ['$500$', '$50$', '$5000$', '$50{,}000$'],
      answer: 2,
      solution: 'Each kilometer is $1000$ meters, so $5 \\times 1000 = 5000$ m. Meters are smaller than kilometers, so the number gets bigger — that checks out.',
    },
    {
      q: 'A movie lasts $150$ minutes. How long is that in hours?',
      choices: ['$2.5$ hours', '$1.5$ hours', '$9000$ hours', '$2.3$ hours'],
      answer: 0,
      solution: 'Hours are the bigger unit, so divide: $150 \\div 60 = 2.5$ hours. (That is $2$ hours plus $30$ minutes — and careful, $2.5$ hours is NOT $2$ hours $50$ minutes!)',
    },
    {
      q: 'A bag of flour weighs $48$ ounces. How many pounds is that? ($1$ pound $= 16$ ounces.)',
      choices: ['$4$', '$768$', '$3$', '$6$'],
      answer: 2,
      solution: 'Pounds are bigger than ounces, so divide: $48 \\div 16 = 3$ pounds. Multiplying by $16$ gives $768$ — an upside-down conversion factor, and the size check catches it.',
    },
    {
      q: 'How many minutes are in $2$ days?',
      choices: ['$120$', '$1440$', '$48$', '$2880$'],
      answer: 3,
      solution: 'Chain the factors: $2 \\text{ days} \\times \\frac{24 \\text{ h}}{1 \\text{ day}} \\times \\frac{60 \\text{ min}}{1 \\text{ h}} = 2 \\times 24 \\times 60 = 2880$ minutes. ($1440$ is just one day.)',
    },
    {
      q: 'Convert $0.4$ km to centimeters.',
      choices: ['$4000$ cm', '$40{,}000$ cm', '$400$ cm', '$4{,}000{,}000$ cm'],
      answer: 1,
      solution: 'Chain: $0.4$ km $= 0.4 \\times 1000 = 400$ m, and $400$ m $= 400 \\times 100 = 40{,}000$ cm. Two hops down the metric ladder, multiplying each time.',
    },
    {
      q: 'A car travels at $36$ km per hour. What is its speed in meters per second?',
      choices: ['$36$ m/s', '$3.6$ m/s', '$10$ m/s', '$100$ m/s'],
      answer: 2,
      solution: 'Convert top and bottom separately: $36$ km $= 36{,}000$ m, and $1$ hour $= 3600$ seconds. So the speed is $\\frac{36{,}000}{3600} = 10$ m/s. The number SHRINKS because a second is so much shorter than an hour.',
    },
    {
      q: 'A snail crawls $5$ cm every minute. How fast is that in meters per hour?',
      choices: ['$3$ m per hour', '$30$ m per hour', '$0.3$ m per hour', '$300$ m per hour'],
      answer: 0,
      solution: 'First scale up the time: $5$ cm per minute is $5 \\times 60 = 300$ cm per hour. Then convert the distance: $300$ cm $= 300 \\div 100 = 3$ m. So the snail travels $3$ m per hour.',
    },
  ],
}

const s75 = {
  id: '7.5',
  title: 'Speed',
  learn: {
    concepts: [
      {
        heading: 'The distance-rate-time triangle',
        body: 'Distance, speed, and time lock together in one equation: $d = r \\times t$. Travel at $60$ km/h for $2$ hours and you cover $60 \\times 2 = 120$ km. Know any two of the three, and the equation hands you the third.',
      },
      {
        heading: 'Three arrangements, one idea',
        body: 'Rearranging $d = r \\times t$ gives $r = \\frac{d}{t}$ (to find speed) and $t = \\frac{d}{r}$ (to find time). A unit check keeps you honest: kilometers divided by hours gives km/h, so that arrangement must be a speed.',
      },
      {
        heading: 'Average speed is total over total',
        body: 'Average speed $= \\frac{\\text{TOTAL distance}}{\\text{TOTAL time}}$ — always. It is tempting to just average two speeds, but that fails whenever the two legs take different amounts of time, because the slower leg eats up more of the trip.',
      },
      {
        heading: 'Chases and gaps',
        body: 'When two travelers move at the same time, watch the GAP between them. Moving toward each other, the gap shrinks at the SUM of their speeds. Chasing from behind, the gap shrinks at the DIFFERENCE. Then time $=$ gap $\\div$ closing speed.',
      },
    ],
    examples: [
      {
        problem: 'A car drives at $60$ miles per hour for $2.5$ hours. How far does it go?',
        steps: [
          'Use $d = r \\times t$ with $r = 60$ and $t = 2.5$.',
          '$d = 60 \\times 2.5 = 150$ miles.',
        ],
        answer: 'The car travels $150$ miles',
      },
      {
        problem: 'A bus covers $180$ miles at $45$ miles per hour. How long does the trip take?',
        steps: [
          'Solve for time: $t = \\frac{d}{r} = \\frac{180}{45}$.',
          '$180 \\div 45 = 4$, so the trip takes $4$ hours. Check: $45 \\times 4 = 180$ miles.',
        ],
        answer: 'The trip takes $4$ hours',
      },
      {
        problem: 'Ria cycles $60$ km to a lake at $30$ km/h and returns at $60$ km/h. What is her average speed for the whole trip?',
        steps: [
          'Do NOT average $30$ and $60$ to get $45$ — the slow leg takes longer, so it counts more.',
          'Trip out: $60 \\div 30 = 2$ hours. Trip back: $60 \\div 60 = 1$ hour.',
          'Total distance $= 120$ km, total time $= 3$ hours, so average speed $= \\frac{120}{3} = 40$ km/h.',
        ],
        answer: 'Her average speed is $40$ km/h',
      },
    ],
  },
  problems: [
    {
      q: 'A truck drives at $50$ miles per hour for $3$ hours. How far does it travel?',
      choices: ['$150$ miles', '$53$ miles', '$100$ miles', '$130$ miles'],
      answer: 0,
      solution: 'Distance equals rate times time: $50 \\times 3 = 150$ miles.',
    },
    {
      q: 'A train covers $120$ miles in $3$ hours. What is its speed?',
      choices: ['$360$ mph', '$30$ mph', '$40$ mph', '$60$ mph'],
      answer: 2,
      solution: 'Speed is distance divided by time: $\\frac{120}{3} = 40$ miles per hour. (Multiplying gives $360$, but the unit check says speed must be distance DIVIDED by time.)',
    },
    {
      q: 'How long does it take to drive $200$ km at $80$ km/h?',
      choices: ['$2$ hours', '$2.5$ hours', '$3$ hours', '$1.5$ hours'],
      answer: 1,
      solution: 'Time is distance divided by rate: $\\frac{200}{80} = 2.5$ hours. Check: $80 \\times 2.5 = 200$ km.',
    },
    {
      q: 'Kim rides her bike at $12$ km/h for $90$ minutes. How far does she ride?',
      choices: ['$1080$ km', '$12$ km', '$10.8$ km', '$18$ km'],
      answer: 3,
      solution: 'The speed uses HOURS, so convert first: $90$ minutes $= 1.5$ hours. Then $d = 12 \\times 1.5 = 18$ km. Multiplying $12 \\times 90$ mixes units — $1080$ km would be quite a ride!',
    },
    {
      q: 'A train travels $300$ miles in $5$ hours. At that same speed, how far will it go in $8$ hours?',
      choices: ['$440$ miles', '$480$ miles', '$375$ miles', '$500$ miles'],
      answer: 1,
      solution: 'First find the speed: $\\frac{300}{5} = 60$ mph. Then in $8$ hours: $60 \\times 8 = 480$ miles.',
    },
    {
      q: 'A walker ($4$ km/h) and a jogger ($10$ km/h) leave the same spot at the same time in OPPOSITE directions. How far apart are they after $2$ hours?',
      choices: ['$28$ km', '$12$ km', '$14$ km', '$20$ km'],
      answer: 0,
      solution: 'Moving apart, the gap grows at the sum of their speeds: $4 + 10 = 14$ km/h. After $2$ hours the gap is $14 \\times 2 = 28$ km.',
    },
    {
      q: 'Dad drives $120$ km to the coast at $60$ km/h and drives back at $40$ km/h. What is his average speed for the round trip?',
      choices: ['$50$ km/h', '$100$ km/h', '$45$ km/h', '$48$ km/h'],
      answer: 3,
      solution: 'Trip out: $120 \\div 60 = 2$ hours. Trip back: $120 \\div 40 = 3$ hours. Total: $240$ km in $5$ hours, so the average speed is $\\frac{240}{5} = 48$ km/h. Simply averaging $60$ and $40$ to get $50$ ignores that the slow leg lasted longer.',
    },
    {
      q: 'Ben leaves at noon walking $3$ km/h. At $1{:}00$ pm, Amy cycles after him along the same road at $12$ km/h. At what time does she catch him?',
      choices: ['$1{:}30$ pm', '$2{:}00$ pm', '$1{:}20$ pm', '$1{:}15$ pm'],
      answer: 2,
      solution: 'By $1{:}00$ pm, Ben is $3$ km ahead. Amy closes the gap at $12 - 3 = 9$ km/h, so she needs $\\frac{3}{9} = \\frac{1}{3}$ hour $= 20$ minutes. She catches him at $1{:}20$ pm. Check: Amy rides $12 \\times \\frac{1}{3} = 4$ km; Ben has walked $3 \\times \\frac{4}{3} = 4$ km.',
    },
    {
      q: 'A road trip has two legs: $1$ hour at $40$ km/h, then $2$ hours at $70$ km/h. What is the average speed for the whole trip?',
      choices: ['$55$ km/h', '$60$ km/h', '$65$ km/h', '$50$ km/h'],
      answer: 1,
      solution: 'Total distance: $40 \\times 1 + 70 \\times 2 = 40 + 140 = 180$ km. Total time: $3$ hours. Average speed: $\\frac{180}{3} = 60$ km/h. The direct average of the speeds, $55$, is too low because the trip spent MORE time at the faster speed.',
    },
    {
      q: 'Two trains start $300$ km apart and travel toward each other, one at $70$ km/h and one at $80$ km/h. How far does the faster train travel before they meet?',
      choices: ['$160$ km', '$140$ km', '$150$ km', '$120$ km'],
      answer: 0,
      solution: 'The gap closes at $70 + 80 = 150$ km/h, so they meet after $\\frac{300}{150} = 2$ hours. In that time the faster train covers $80 \\times 2 = 160$ km. (The slower one covers $140$, and $160 + 140 = 300$.)',
    },
  ],
}

const s76 = {
  id: '7.6',
  title: 'Other Rates',
  learn: {
    concepts: [
      {
        heading: 'Rates compare different units',
        body: 'A rate is a ratio between different kinds of units: dollars per pound, pages per minute, liters per second. The word "per" means divide. A UNIT rate tells you how much for exactly one — $\\$6$ for $3$ pounds is $\\$2$ per $1$ pound.',
      },
      {
        heading: 'Unit price finds the best buy',
        body: 'To compare deals of different sizes, divide price by amount to get the cost of ONE unit each. The lower unit price is the better buy. A bigger package is often the better deal — but not always, so check!',
      },
      {
        heading: 'Work rates',
        body: 'Machines and people work at rates too: pages per minute, lawns per hour. The same triangle applies: work done $=$ rate $\\times$ time. A printer at $8$ pages per minute produces $8 \\times 5 = 40$ pages in $5$ minutes.',
      },
      {
        heading: 'Working together: add the rates',
        body: 'If one hose fills $\\frac{1}{6}$ of a pool per hour and another fills $\\frac{1}{3}$ per hour, together they fill $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$ per hour. Add the RATES, never the times — two hoses are faster than either alone, so the answer must beat both.',
      },
    ],
    examples: [
      {
        problem: 'Which is the better buy: $12$ ounces of peanut butter for $\\$3.00$, or $20$ ounces for $\\$4.00$?',
        steps: [
          'Find each unit price. Small jar: $\\$3.00 \\div 12 = \\$0.25$ per ounce.',
          'Large jar: $\\$4.00 \\div 20 = \\$0.20$ per ounce.',
          'The large jar costs less per ounce, so it is the better buy.',
        ],
        answer: 'The $20$ ounce jar is the better buy at $\\$0.20$ per ounce',
      },
      {
        problem: 'A printer prints $8$ pages per minute. How long will a $200$ page report take?',
        steps: [
          'Time is work divided by rate: $t = \\frac{200 \\text{ pages}}{8 \\text{ pages per minute}}$.',
          '$200 \\div 8 = 25$ minutes.',
        ],
        answer: 'The report takes $25$ minutes',
      },
      {
        problem: 'One hose fills a pool in $6$ hours; a stronger hose fills it in $3$ hours. How long do they take together?',
        steps: [
          'Convert times to rates: the first hose fills $\\frac{1}{6}$ of the pool per hour, the second fills $\\frac{1}{3}$ per hour.',
          'Together: $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{1}{2}$ of the pool per hour.',
          'At half a pool per hour, the whole pool takes $2$ hours — faster than either hose alone, as it should be.',
        ],
        answer: 'Together they fill the pool in $2$ hours',
      },
    ],
  },
  problems: [
    {
      q: 'Five apples cost $\\$2.00$. What is the unit price?',
      choices: ['$\\$0.25$ per apple', '$\\$0.50$ per apple', '$\\$0.40$ per apple', '$\\$2.50$ per apple'],
      answer: 2,
      solution: 'Divide price by count: $\\$2.00 \\div 5 = \\$0.40$ per apple. ($\\$2.50$ comes from dividing the wrong way — $5 \\div 2$ — and the unit check catches it.)',
    },
    {
      q: 'A printer prints $90$ pages in $3$ minutes. What is its printing rate?',
      choices: ['$30$ pages per minute', '$270$ pages per minute', '$27$ pages per minute', '$45$ pages per minute'],
      answer: 0,
      solution: '"Per minute" means divide by minutes: $\\frac{90}{3} = 30$ pages per minute.',
    },
    {
      q: 'Honey comes in an $8$ oz jar for $\\$2.40$ and a $12$ oz jar for $\\$3.00$. Which is the better buy?',
      choices: ['the $8$ oz jar', 'the $12$ oz jar', 'both cost the same per ounce', 'the bigger jar, because bigger is always cheaper'],
      answer: 1,
      solution: 'Compare unit prices. Small: $\\$2.40 \\div 8 = \\$0.30$ per oz. Large: $\\$3.00 \\div 12 = \\$0.25$ per oz. The $12$ oz jar costs less per ounce, so it is the better buy — but only the unit-price check proves it; "bigger is always cheaper" is not a rule you can trust.',
    },
    {
      q: 'Theo types $40$ words per minute. How many words can he type in $10$ minutes?',
      choices: ['$50$', '$4$', '$140$', '$400$'],
      answer: 3,
      solution: 'Work equals rate times time: $40 \\times 10 = 400$ words.',
    },
    {
      q: 'A faucet fills $6$ liters per minute. How long will it take to fill a $90$ liter tub?',
      choices: ['$15$ minutes', '$540$ minutes', '$9$ minutes', '$12$ minutes'],
      answer: 0,
      solution: 'Time is amount divided by rate: $\\frac{90}{6} = 15$ minutes. Check: $6 \\times 15 = 90$ liters.',
    },
    {
      q: 'Zoe read $120$ pages in $4$ days. Leo read $90$ pages in $3$ days. Who reads at a faster daily rate?',
      choices: ['Zoe', 'Leo', 'you need more information', 'they read at the same rate'],
      answer: 3,
      solution: 'Compute each unit rate: Zoe reads $\\frac{120}{4} = 30$ pages per day, and Leo reads $\\frac{90}{3} = 30$ pages per day. The totals differ, but the RATES are equal — comparing raw totals without the time is not a fair race.',
    },
    {
      q: 'Grapes cost $\\$7.50$ for $3$ pounds. At that rate, how much do $5$ pounds cost?',
      choices: ['$\\$9.50$', '$\\$12.50$', '$\\$10.00$', '$\\$15.00$'],
      answer: 1,
      solution: 'Unit price first: $\\$7.50 \\div 3 = \\$2.50$ per pound. Then $5$ pounds cost $5 \\times \\$2.50 = \\$12.50$. (Adding $\\$2$ for the extra weight, to get $\\$9.50$, is additive thinking — prices scale by multiplying.)',
    },
    {
      q: 'A painter can paint a whole fence in $4$ hours. What fraction of the fence can she paint in $3$ hours?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{3}{4}$', '$\\frac{4}{3}$'],
      answer: 2,
      solution: 'Her rate is $\\frac{1}{4}$ of the fence per hour. In $3$ hours she paints $3 \\times \\frac{1}{4} = \\frac{3}{4}$ of the fence.',
    },
    {
      q: 'Hose A fills a pool in $4$ hours; hose B alone takes $12$ hours. Running together, how long do they take?',
      choices: ['$8$ hours', '$3$ hours', '$16$ hours', '$6$ hours'],
      answer: 1,
      solution: 'Add the rates, not the times: $\\frac{1}{4} + \\frac{1}{12} = \\frac{3}{12} + \\frac{1}{12} = \\frac{4}{12} = \\frac{1}{3}$ of the pool per hour, so the pool fills in $3$ hours. Sanity check: together must beat the faster hose alone, so the answer had to be less than $4$ hours.',
    },
    {
      q: 'A pipe pours $8$ liters per minute into a tank while a drain lets $3$ liters per minute out. How long to fill the empty $100$ liter tank?',
      choices: ['$12.5$ minutes', '$33$ minutes', '$10$ minutes', '$20$ minutes'],
      answer: 3,
      solution: 'The tank gains a net $8 - 3 = 5$ liters per minute. So it fills in $\\frac{100}{5} = 20$ minutes. Ignoring the drain gives $100 \\div 8 = 12.5$ minutes — too fast, because water is escaping the whole time.',
    },
  ],
}

const challenge = [
  {
    q: 'A jar holds red and green beads in the ratio $3:5$. After $10$ red beads are added, the two colors are equal in number. How many green beads are in the jar?',
    choices: ['$15$', '$25$', '$40$', '$10$'],
    answer: 1,
    solution: 'Green beats red by $5 - 3 = 2$ parts, and the $10$ new red beads exactly close that gap — so $2$ parts $= 10$ beads, and one part is $5$. Green is $5$ parts: $5 \\times 5 = 25$ beads. Check: red starts at $3 \\times 5 = 15$, and $15 + 10 = 25$, matching the green count.',
  },
  {
    q: 'If $a:b = 3:4$ and $b:c = 6:7$, what is $a:c$ in simplest form?',
    choices: ['$3:7$', '$14:9$', '$9:14$', '$2:3$'],
    answer: 2,
    solution: 'Match the middle: $b$ appears as $4$ and as $6$, and their least common multiple is $12$. Scale: $a:b = 9:12$ and $b:c = 12:14$, so $a:b:c = 9:12:14$. Read off the ends: $a:c = 9:14$, already in simplest form. Gluing the outer numbers to get $3:7$ skips the matching step — the two ratios measure $b$ with different rulers!',
  },
  {
    q: 'A $5$ inch by $8$ inch poster is enlarged so that its long side becomes $20$ inches. To keep the same shape, how long must the short side become?',
    choices: ['$12.5$ inches', '$17$ inches', '$10$ inches', '$15$ inches'],
    answer: 0,
    solution: 'The long side went from $8$ to $20$ — multiplied by $\\frac{20}{8} = 2.5$. The short side must scale the same way: $5 \\times 2.5 = 12.5$ inches. Adding $12$ to both sides (to get $17$) would warp the shape — enlargements multiply, they never add.',
  },
  {
    q: 'A resting heart beats about $72$ times per minute. At that rate, how many times does it beat in one full day?',
    choices: ['$4320$', '$1728$', '$43{,}200$', '$103{,}680$'],
    answer: 3,
    solution: 'Chain the conversions: $72 \\times 60 = 4320$ beats per hour, then $4320 \\times 24 = 103{,}680$ beats per day. Stopping at $4320$ only covers one hour, and $1728 = 72 \\times 24$ forgets the minutes-to-hours step entirely.',
  },
  {
    q: 'A ferry sails $90$ km to an island at $45$ km/h and returns along the same route at $90$ km/h. What is its average speed for the round trip?',
    choices: ['$67.5$ km/h', '$60$ km/h', '$62.5$ km/h', '$54$ km/h'],
    answer: 1,
    solution: 'Average speed is TOTAL distance over TOTAL time. Out: $90 \\div 45 = 2$ hours. Back: $90 \\div 90 = 1$ hour. Total: $180$ km in $3$ hours, so $\\frac{180}{3} = 60$ km/h. Averaging the speeds to get $67.5$ ignores that the slow leg lasted twice as long as the fast one.',
  },
  {
    q: 'Pipe A fills a tank in $3$ hours and pipe B fills it in $6$ hours, but an open drain can empty the full tank in $4$ hours. With both pipes running and the drain open, how long does the empty tank take to fill?',
    choices: ['$2$ hours', '$13$ hours', '$4$ hours', '$5$ hours'],
    answer: 2,
    solution: 'Work with rates. Each hour the tank gains $\\frac{1}{3} + \\frac{1}{6} - \\frac{1}{4} = \\frac{4}{12} + \\frac{2}{12} - \\frac{3}{12} = \\frac{3}{12} = \\frac{1}{4}$ of a tankful. At a quarter tank per hour, filling takes $4$ hours. Adding the times ($3 + 6 + 4 = 13$) has no meaning — only rates add.',
  },
  {
    q: 'Store A sells $6$ cans of soup for $\\$4.50$; store B sells $10$ of the same cans for $\\$7.00$. How much do you save PER CAN by choosing the better deal?',
    choices: ['$\\$0.05$', '$\\$0.70$', '$\\$0.75$', '$\\$0.50$'],
    answer: 0,
    solution: 'Find each unit price. Store A: $\\$4.50 \\div 6 = \\$0.75$ per can. Store B: $\\$7.00 \\div 10 = \\$0.70$ per can. Store B is cheaper, and the saving is $\\$0.75 - \\$0.70 = \\$0.05$ per can. The unit prices themselves ($\\$0.70$ and $\\$0.75$) answer a different question than the SAVING.',
  },
  {
    q: 'Two cyclists start $90$ km apart and ride toward each other, one at $20$ km/h and the other at $25$ km/h. How far does the SLOWER cyclist ride before they meet?',
    choices: ['$45$ km', '$50$ km', '$36$ km', '$40$ km'],
    answer: 3,
    solution: 'Riding toward each other, the gap closes at $20 + 25 = 45$ km/h, so they meet after $\\frac{90}{45} = 2$ hours. In $2$ hours the slower cyclist covers $20 \\times 2 = 40$ km. Check: the faster one covers $50$ km, and $40 + 50 = 90$ km. Splitting the distance evenly to get $45$ ignores that the faster rider covers more ground.',
  },
  {
    q: 'Three charity prizes are in the ratio $3:5:9$. The largest prize is $\\$28$ more than the middle prize. What is the total of all three prizes?',
    choices: ['$\\$84$', '$\\$119$', '$\\$105$', '$\\$63$'],
    answer: 1,
    solution: 'The largest minus the middle is $9 - 5 = 4$ parts, and that gap is $\\$28$, so one part is $\\$28 \\div 4 = \\$7$. The total is $3 + 5 + 9 = 17$ parts: $17 \\times \\$7 = \\$119$. Check: the prizes are $\\$21$, $\\$35$, and $\\$63$, and $\\$63 - \\$35 = \\$28$. ($\\$63$ is just the largest prize, not the total!)',
  },
  {
    q: 'A cheetah sprints at $90$ km per hour. What is that speed in meters per second?',
    choices: ['$25$ m/s', '$90$ m/s', '$324$ m/s', '$15$ m/s'],
    answer: 0,
    solution: 'Convert top and bottom separately: $90$ km $= 90{,}000$ m, and $1$ hour $= 3600$ seconds. So the speed is $\\frac{90{,}000}{3600} = 25$ m/s. The number must SHRINK, since a second is far shorter than an hour — multiplying by $3.6$ to get $324$ points the conversion factor the wrong way.',
  },
  {
    q: 'Five identical machines produce $350$ toys in one shift. How many machines are needed to produce $490$ toys in one shift?',
    choices: ['$6$', '$8$', '$7$', '$10$'],
    answer: 2,
    solution: 'One machine makes $350 \\div 5 = 70$ toys per shift. To make $490$ toys we need $490 \\div 70 = 7$ machines. Or use a proportion: $\\frac{5}{350} = \\frac{x}{490}$ gives $350x = 2450$, so $x = 7$.',
  },
  {
    q: 'Printer A prints $300$ pages in $20$ minutes; printer B prints $300$ pages in $30$ minutes. Working together, how long do they take to print a $300$ page report?',
    choices: ['$25$ minutes', '$50$ minutes', '$15$ minutes', '$12$ minutes'],
    answer: 3,
    solution: 'Convert to rates: A prints $300 \\div 20 = 15$ pages per minute and B prints $300 \\div 30 = 10$ pages per minute. Together: $15 + 10 = 25$ pages per minute, so $300 \\div 25 = 12$ minutes. Averaging the times to get $25$ minutes fails the sanity check — together they must beat the faster printer alone, so the answer had to be under $20$ minutes.',
  },
]

const worksheet = [
  {
    q: 'A garden bed has $10$ tulips and $15$ roses. What is the ratio of tulips to roses in simplest form?',
    answer: '$2:3$',
    solution: 'Divide both numbers by their common factor $5$: $10:15 = 2:3$. For every $2$ tulips there are $3$ roses.',
  },
  {
    q: 'Split $72$ trading cards among three friends in the ratio $2:3:4$. How many cards does the friend with the biggest share get?',
    answer: '$32$ cards',
    solution: 'Total parts: $2 + 3 + 4 = 9$, so one part is $72 \\div 9 = 8$ cards. The biggest share is $4$ parts: $4 \\times 8 = 32$. Check: the shares are $16$, $24$, and $32$, and $16 + 24 + 32 = 72$.',
  },
  {
    q: 'A pancake recipe uses $3$ eggs to make $24$ pancakes. How many eggs are needed for $40$ pancakes?',
    answer: '$5$ eggs',
    solution: 'One egg makes $24 \\div 3 = 8$ pancakes, so $40$ pancakes need $40 \\div 8 = 5$ eggs. Check with a proportion: $\\frac{3}{24} = \\frac{5}{40}$, since both simplify to $\\frac{1}{8}$.',
  },
  {
    q: 'Convert $2.5$ hours to seconds.',
    answer: '$9000$ seconds',
    solution: 'Chain the factors: $2.5 \\text{ h} \\times \\frac{60 \\text{ min}}{1 \\text{ h}} = 150$ minutes, then $150 \\times 60 = 9000$ seconds. Seconds are tiny, so the number should come out big — it does.',
  },
  {
    q: 'A bus travels at $55$ km/h for $4$ hours. How far does it go?',
    answer: '$220$ km',
    solution: 'Distance equals rate times time: $d = 55 \\times 4 = 220$ km.',
  },
  {
    q: 'Bananas cost $\\$3.00$ for $4$ pounds. At that rate, how much do $7$ pounds cost?',
    answer: '$\\$5.25$',
    solution: 'Unit price first: $\\$3.00 \\div 4 = \\$0.75$ per pound. Then $7$ pounds cost $7 \\times \\$0.75 = \\$5.25$.',
  },
  {
    q: 'A hiking trail is $6$ km each way. Noor hikes up at $3$ km/h and back down at $6$ km/h. What is her average speed for the whole hike?',
    answer: '$4$ km/h',
    solution: 'Average speed is total distance over total time — never just the average of the two speeds. Up: $6 \\div 3 = 2$ hours. Down: $6 \\div 6 = 1$ hour. Total: $12$ km in $3$ hours, so $\\frac{12}{3} = 4$ km/h. The slow uphill leg takes twice as long, which drags the average below the midpoint of $4.5$.',
  },
  {
    q: 'If $a:b = 5:6$ and $b:c = 3:4$, find $a:c$ in simplest form.',
    answer: '$5:8$',
    solution: 'Match the middle: $b$ is $6$ in one ratio and $3$ in the other, and the least common multiple is $6$. The second ratio scales by $2$: $b:c = 6:8$. Now glue: $a:b:c = 5:6:8$, so $a:c = 5:8$, which does not simplify.',
  },
  {
    q: 'A leaky faucet drips $250$ milliliters of water every $5$ minutes. How many liters does it waste per hour? ($1$ liter $= 1000$ mL.)',
    answer: '$3$ liters per hour',
    solution: 'First find the unit rate: $250 \\div 5 = 50$ mL per minute. Scale up the time: $50 \\times 60 = 3000$ mL per hour. Convert to liters: $3000 \\div 1000 = 3$ liters per hour.',
  },
  {
    q: 'One pipe alone fills a tank in $6$ hours. When a second pipe joins in, the two together fill the tank in just $2$ hours. How long would the second pipe take alone?',
    answer: '$3$ hours',
    solution: 'Work with rates. Together they fill $\\frac{1}{2}$ of the tank per hour, and the first pipe supplies $\\frac{1}{6}$ per hour. The second pipe must supply the rest: $\\frac{1}{2} - \\frac{1}{6} = \\frac{3}{6} - \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}$ per hour. A pipe filling $\\frac{1}{3}$ of the tank each hour needs $3$ hours alone. Check: $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2}$ per hour, which fills the tank in $2$ hours.',
  },
]

export default {
  id: 'prealgebra-ch07',
  book: 'prealgebra',
  number: 7,
  title: 'Ratios, Conversions, and Rates',
  intro:
    'How do you compare a recipe for four people to a party of ten, or decide which jar of honey is the better deal? Ratios and rates are the math of fair comparison — and once you can convert units, you can compare almost anything. In this chapter you will split amounts fairly, read maps, race trains, and even team up hoses to fill a pool.',
  sections: [s71, s72, s73, s74, s75, s76],
  challenge,
  worksheet,
}
