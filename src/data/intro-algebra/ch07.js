// Introduction to Algebra — Chapter 7: Proportion
// All problems, explanations, and examples are original MathQuest content.

const s71 = {
  id: '7.1',
  title: 'Direct Proportion',
  learn: {
    concepts: [
      {
        heading: 'Two quantities that grow together',
        body: 'We say $y$ is directly proportional to $x$ when $y = kx$ for some fixed nonzero number $k$, called the constant of proportionality. Double $x$ and $y$ doubles; triple $x$ and $y$ triples. The two quantities move in lockstep.',
      },
      {
        heading: 'The ratio never changes',
        body: 'If $y = kx$, then $\\frac{y}{x} = k$ for every pair of values. That gives you a quick test: divide $y$ by $x$ in each row of a table, and if you get the same number every time, the table shows direct proportion — and that number is $k$.',
      },
      {
        heading: 'One data point unlocks everything',
        body: 'A single matched pair of values is enough to find $k$. If $y = 12$ when $x = 3$, then $k = \\frac{12}{3} = 4$, so the rule is $y = 4x$ — and now you can predict $y$ for any $x$ at all.',
      },
      {
        heading: 'Direct proportion to a power',
        body: 'Sometimes $y$ is directly proportional not to $x$ itself but to $x^2$ or $\\sqrt{x}$: the rules look like $y = kx^2$ or $y = k\\sqrt{x}$. The strategy is exactly the same — use one data point to find $k$, then predict. Just be sure to square or take the root before multiplying by $k$.',
      },
    ],
    examples: [
      {
        problem: 'Suppose $y$ is directly proportional to $x$, and $y = 12$ when $x = 3$. Find $y$ when $x = 7$.',
        steps: [
          'First find the constant: $k = \\frac{y}{x} = \\frac{12}{3} = 4$, so the rule is $y = 4x$.',
          'Now use the rule with the new input: when $x = 7$, we get $y = 4 \\times 7 = 28$.',
        ],
        answer: '$y = 28$',
      },
      {
        problem: 'Does this table show direct proportion? $x$: $2, 5, 8$ and $y$: $7, 17.5, 28$.',
        steps: [
          'Test the ratio $\\frac{y}{x}$ in each column: $\\frac{7}{2} = 3.5$, $\\frac{17.5}{5} = 3.5$, $\\frac{28}{8} = 3.5$.',
          'The ratio is the same every time, so yes — this is direct proportion with $k = 3.5$, meaning $y = 3.5x$.',
        ],
        answer: 'Yes: $y = 3.5x$',
      },
      {
        problem: 'Suppose $y$ is directly proportional to $x^2$, and $y = 18$ when $x = 3$. Find $y$ when $x = 5$.',
        steps: [
          'The rule has the form $y = kx^2$. Plug in the known pair: $18 = k \\times 3^2 = 9k$, so $k = 2$.',
          'The rule is $y = 2x^2$. When $x = 5$: $y = 2 \\times 25 = 50$.',
          'Notice $y$ did NOT scale like $x$ did — $x$ went up by a factor of $\\frac{5}{3}$, but $y$ went up by a factor of $\\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$.',
        ],
        answer: '$y = 50$',
      },
    ],
  },
  problems: [
    {
      q: 'If $y = 6x$, what is the constant of proportionality?',
      choices: ['$x$', '$\\frac{1}{6}$', '$6$', '$6x$'],
      answer: 2,
      solution: 'In the form $y = kx$, the constant of proportionality is the number multiplying $x$. Here that number is $6$. (The choice $\\frac{1}{6}$ would be the constant if we had written $x = \\frac{1}{6}y$ — same relationship, but the question asks for $k$ in $y = kx$.)',
    },
    {
      q: 'Suppose $y$ is directly proportional to $x$, and $y = 20$ when $x = 4$. What is the constant of proportionality?',
      choices: ['$5$', '$80$', '$16$', '$\\frac{1}{5}$'],
      answer: 0,
      solution: 'The constant is the fixed ratio: $k = \\frac{y}{x} = \\frac{20}{4} = 5$. Multiplying gives $80$, but $k$ comes from dividing $y$ by $x$, not multiplying them.',
    },
    {
      q: 'The rule is $y = 3x$. What is $y$ when $x = 8$?',
      choices: ['$11$', '$24$', '$\\frac{8}{3}$', '$5$'],
      answer: 1,
      solution: 'Direct proportion means multiply, not add: $y = 3 \\times 8 = 24$. The choice $11$ comes from adding $3$ instead of multiplying by $3$.',
    },
    {
      q: 'Which table of $(x, y)$ pairs shows $y$ directly proportional to $x$?',
      choices: [
        '$(1, 4), (2, 7), (3, 10)$',
        '$(1, 4), (2, 2), (4, 1)$',
        '$(1, 4), (2, 8), (3, 11)$',
        '$(1, 4), (2, 8), (3, 12)$',
      ],
      answer: 3,
      solution: 'Check the ratio $\\frac{y}{x}$ in each pair. Only $(1, 4), (2, 8), (3, 12)$ keeps the ratio steady at $4$, so $y = 4x$. The first table adds $3$ each step (constant difference, not constant ratio), the second is inverse proportion (products are all $4$), and the third breaks the pattern at $(3, 11)$.',
    },
    {
      q: 'Suppose $y$ is directly proportional to $x$, and $y = 15$ when $x = 6$. What is $y$ when $x = 10$?',
      choices: ['$25$', '$19$', '$60$', '$9$'],
      answer: 0,
      solution: 'Find $k$ first: $k = \\frac{15}{6} = 2.5$, so $y = 2.5x$. When $x = 10$: $y = 2.5 \\times 10 = 25$. The choice $19$ comes from adding $4$ to $y$ because $x$ went up by $4$ — but direct proportion scales by multiplying, not by adding.',
    },
    {
      q: 'If $y$ is directly proportional to $x$ and $x$ doubles, what happens to $y$?',
      choices: ['It increases by $2$', 'It is halved', 'It doubles', 'It stays the same'],
      answer: 2,
      solution: 'If $y = kx$, then replacing $x$ with $2x$ gives $k(2x) = 2(kx) = 2y$. So $y$ doubles right along with $x$ — that lockstep scaling is the heart of direct proportion.',
    },
    {
      q: 'Apples cost the same per kilogram. If $5$ kg costs $\\$12$, how much does $8$ kg cost?',
      choices: ['$\\$15.00$', '$\\$19.20$', '$\\$20.00$', '$\\$16.80$'],
      answer: 1,
      solution: 'Cost is directly proportional to weight. The constant is the price per kilogram: $\\frac{12}{5} = \\$2.40$ per kg. So $8$ kg costs $8 \\times 2.40 = \\$19.20$. Adding $\\$3$ because we added $3$ kg would only be right if apples cost $\\$1$ per kg!',
    },
    {
      q: 'Suppose $y$ is directly proportional to $x^2$, and $y = 8$ when $x = 2$. What is $y$ when $x = 5$?',
      choices: ['$20$', '$100$', '$25$', '$50$'],
      answer: 3,
      solution: 'From $y = kx^2$: $8 = k \\times 4$, so $k = 2$ and the rule is $y = 2x^2$. When $x = 5$: $y = 2 \\times 25 = 50$. The choice $20$ comes from treating this as plain direct proportion $y = 4x$ — but $y$ tracks the square of $x$, not $x$ itself.',
    },
    {
      q: 'Suppose $y$ is directly proportional to $\\sqrt{x}$, and $y = 6$ when $x = 4$. What is $y$ when $x = 25$?',
      choices: ['$37.5$', '$15$', '$30$', '$75$'],
      answer: 1,
      solution: 'From $y = k\\sqrt{x}$: $6 = k\\sqrt{4} = 2k$, so $k = 3$. When $x = 25$: $y = 3\\sqrt{25} = 3 \\times 5 = 15$. The choice $37.5$ scales $y$ by $\\frac{25}{4}$ as if $y$ tracked $x$ directly — but $y$ only tracks $\\sqrt{x}$, which grew from $2$ to $5$.',
    },
    {
      q: 'If $y$ is directly proportional to $x^2$ and $x$ is tripled, then $y$ is multiplied by what factor?',
      choices: ['$3$', '$6$', '$27$', '$9$'],
      answer: 3,
      solution: 'Replace $x$ with $3x$ in $y = kx^2$: the new value is $k(3x)^2 = 9kx^2 = 9y$. Tripling $x$ multiplies $x^2$ by $9$, so $y$ is multiplied by $9$. (The factor $27$ would be right for $y = kx^3$.)',
    },
  ],
}

const s72 = {
  id: '7.2',
  title: 'Inverse Proportion',
  learn: {
    concepts: [
      {
        heading: 'When one goes up, the other comes down',
        body: 'We say $y$ is inversely proportional to $x$ when $y = \\frac{k}{x}$ for some fixed nonzero constant $k$. Now the two quantities trade off: double $x$ and $y$ is cut in half; triple $x$ and $y$ shrinks to a third of its size.',
      },
      {
        heading: 'The product never changes',
        body: 'Multiply both sides of $y = \\frac{k}{x}$ by $x$ and you get $xy = k$. So in inverse proportion it is the PRODUCT that stays constant, not the ratio. To test a table, multiply each $x$ by its $y$: a steady product means inverse proportion.',
      },
      {
        heading: 'Workers and time',
        body: 'The classic inverse setup: a fixed job shared among workers. More workers means less time, and (worker count) $\\times$ (time) equals the total amount of work — a constant. If $4$ painters need $9$ hours, the job is $36$ "painter-hours" no matter how you split it.',
      },
      {
        heading: 'Direct vs. inverse — keep them straight',
        body: 'Direct: constant RATIO $\\frac{y}{x}$, both quantities rise together. Inverse: constant PRODUCT $xy$, one rises while the other falls. Before computing anything, ask: if $x$ grew, should $y$ grow or shrink? That one question usually tells you which model fits.',
      },
    ],
    examples: [
      {
        problem: 'Suppose $y$ is inversely proportional to $x$, and $y = 8$ when $x = 3$. Find $y$ when $x = 6$.',
        steps: [
          'The product is constant: $k = xy = 3 \\times 8 = 24$, so the rule is $y = \\frac{24}{x}$.',
          'When $x = 6$: $y = \\frac{24}{6} = 4$.',
          'Sanity check: $x$ doubled from $3$ to $6$, and $y$ was halved from $8$ to $4$. That is exactly how inverse proportion behaves.',
        ],
        answer: '$y = 4$',
      },
      {
        problem: 'Four painters can paint a fence in $9$ hours. How long would six painters take?',
        steps: [
          'The total job is $4 \\times 9 = 36$ painter-hours — that product is fixed no matter how many painters show up.',
          'With $6$ painters: time $= \\frac{36}{6} = 6$ hours.',
        ],
        answer: '$6$ hours',
      },
      {
        problem: 'Does this table show inverse proportion? $x$: $2, 3, 9$ and $y$: $18, 12, 4$.',
        steps: [
          'Test the product $xy$ in each column: $2 \\times 18 = 36$, $3 \\times 12 = 36$, $9 \\times 4 = 36$.',
          'The product is the same every time, so yes — this is inverse proportion with $k = 36$, meaning $y = \\frac{36}{x}$.',
        ],
        answer: 'Yes: $y = \\frac{36}{x}$',
      },
    ],
  },
  problems: [
    {
      q: 'The rule is $y = \\frac{24}{x}$. What is $y$ when $x = 4$?',
      choices: ['$96$', '$6$', '$20$', '$28$'],
      answer: 1,
      solution: 'Just divide: $y = \\frac{24}{4} = 6$. The choice $96$ comes from multiplying instead — but in inverse proportion, $x$ lives in the denominator.',
    },
    {
      q: 'Two quantities satisfy $xy = 40$. What is $y$ when $x = 8$?',
      choices: ['$32$', '$48$', '$320$', '$5$'],
      answer: 3,
      solution: 'A constant product means inverse proportion: $y = \\frac{40}{x} = \\frac{40}{8} = 5$. Check: $8 \\times 5 = 40$.',
    },
    {
      q: 'If $y$ is inversely proportional to $x$ and $x$ doubles, what happens to $y$?',
      choices: ['It is halved', 'It doubles', 'It decreases by $2$', 'It stays the same'],
      answer: 0,
      solution: 'Replace $x$ with $2x$ in $y = \\frac{k}{x}$: the new value is $\\frac{k}{2x} = \\frac{1}{2} \\cdot \\frac{k}{x}$, which is half the old $y$. The product $xy$ must stay fixed, so when one factor doubles the other must halve.',
    },
    {
      q: 'Suppose $y$ is inversely proportional to $x$, and $y = 12$ when $x = 5$. What is the constant $k$ in $y = \\frac{k}{x}$?',
      choices: ['$2.4$', '$\\frac{5}{12}$', '$60$', '$17$'],
      answer: 2,
      solution: 'For inverse proportion, $k$ is the constant product: $k = xy = 5 \\times 12 = 60$. The choice $2.4$ is the ratio $\\frac{12}{5}$ — that is the constant you would want for DIRECT proportion, not inverse.',
    },
    {
      q: 'Suppose $y$ is inversely proportional to $x$, and $y = 10$ when $x = 6$. What is $y$ when $x = 15$?',
      choices: ['$25$', '$19$', '$4$', '$40$'],
      answer: 2,
      solution: 'The constant product is $k = 6 \\times 10 = 60$, so $y = \\frac{60}{x}$. When $x = 15$: $y = \\frac{60}{15} = 4$. The choice $25$ comes from scaling $y$ UP by $\\frac{15}{6}$ as if this were direct proportion — but here a bigger $x$ must give a smaller $y$.',
    },
    {
      q: 'A crew of $8$ workers can build a shed in $15$ days. Working at the same rate, how many days would a crew of $12$ workers need?',
      choices: ['$10$', '$22.5$', '$11$', '$9$'],
      answer: 0,
      solution: 'The job is $8 \\times 15 = 120$ worker-days. With $12$ workers: $\\frac{120}{12} = 10$ days. The choice $22.5$ scales the time UP as the crew grows — but more workers should finish sooner, so time and workers are inversely proportional.',
    },
    {
      q: 'Which table of $(x, y)$ pairs shows $y$ inversely proportional to $x$?',
      choices: [
        '$(2, 10), (5, 25), (6, 30)$',
        '$(2, 30), (5, 12), (6, 10)$',
        '$(2, 30), (5, 27), (6, 26)$',
        '$(2, 30), (5, 12), (6, 8)$',
      ],
      answer: 1,
      solution: 'Test the product $xy$: only $(2, 30), (5, 12), (6, 10)$ gives the same product every time — $60$, $60$, $60$ — so $y = \\frac{60}{x}$. The first table has a constant RATIO (that is direct proportion), the third drops by a constant difference, and the last breaks the product pattern at $(6, 8)$ since $6 \\times 8 = 48$.',
    },
    {
      q: 'A road trip takes $6$ hours at $40$ miles per hour. How long does the same trip take at $60$ miles per hour?',
      choices: ['$9$ hours', '$5$ hours', '$3$ hours', '$4$ hours'],
      answer: 3,
      solution: 'The distance is fixed: $40 \\times 6 = 240$ miles, so speed and time are inversely proportional. At $60$ mph: $\\frac{240}{60} = 4$ hours. The choice $9$ scales time up with speed — but going faster must take LESS time.',
    },
    {
      q: 'Suppose $y$ is inversely proportional to $x^2$, and $y = 9$ when $x = 2$. What is $y$ when $x = 3$?',
      choices: ['$4$', '$6$', '$\\frac{81}{4}$', '$3$'],
      answer: 0,
      solution: 'From $y = \\frac{k}{x^2}$: $9 = \\frac{k}{4}$, so $k = 36$ and $y = \\frac{36}{x^2}$. When $x = 3$: $y = \\frac{36}{9} = 4$. The choice $6$ comes from using plain inverse proportion $y = \\frac{18}{x}$ — but here $y$ trades off against the SQUARE of $x$.',
    },
    {
      q: 'If $y$ is inversely proportional to $x$ and $x$ increases by $25\\%$, what happens to $y$?',
      choices: ['It decreases by $25\\%$', 'It increases by $25\\%$', 'It decreases by $20\\%$', 'It decreases by $5\\%$'],
      answer: 2,
      solution: 'Increasing $x$ by $25\\%$ multiplies it by $\\frac{5}{4}$. To keep the product $xy$ constant, $y$ must be multiplied by $\\frac{4}{5} = 0.8$ — a $20\\%$ decrease. The percent down is NOT the same as the percent up, because the two changes are reciprocal factors, not opposite shifts.',
    },
  ],
}

const s73 = {
  id: '7.3',
  title: 'Joint Proportion',
  learn: {
    concepts: [
      {
        heading: 'Proportional to a product',
        body: 'Sometimes a quantity depends on TWO others at once. We say $z$ is jointly proportional to $x$ and $y$ when $z = kxy$. Now doubling either input doubles $z$, and doubling both multiplies $z$ by $4$.',
      },
      {
        heading: 'Mixing direct and inverse',
        body: 'A quantity can vary directly with one input and inversely with another: $z = \\frac{kx}{y}$. Read it straight off the formula — $x$ upstairs pushes $z$ up, $y$ downstairs drags $z$ down. Gas pressure works this way: up with temperature, down with volume.',
      },
      {
        heading: 'The universal two-step plan',
        body: 'Every proportion problem in this chapter yields to the same plan. Step 1: write the form of the rule and use one complete data set to solve for $k$. Step 2: plug the new values into your now-complete rule. Skipping step 1 and just scaling one variable is the classic trap — with several variables changing, you must re-find the rule first.',
      },
      {
        heading: 'Units can guess the formula for you',
        body: 'Real-world joint proportions often hide in units. Paint needed depends on wall AREA, which is length times width — a joint proportion. Total work is workers times hours. When a quantity is measured "per something times something," expect a $kxy$ lurking underneath.',
      },
    ],
    examples: [
      {
        problem: 'Suppose $z$ is jointly proportional to $x$ and $y$, and $z = 30$ when $x = 2$ and $y = 5$. Find $z$ when $x = 4$ and $y = 7$.',
        steps: [
          'The rule has the form $z = kxy$. Plug in the known triple: $30 = k \\times 2 \\times 5 = 10k$, so $k = 3$.',
          'The rule is $z = 3xy$. When $x = 4$ and $y = 7$: $z = 3 \\times 4 \\times 7 = 84$.',
        ],
        answer: '$z = 84$',
      },
      {
        problem: 'Suppose $z$ varies directly with $x$ and inversely with $y$, and $z = 12$ when $x = 8$ and $y = 2$. Find $z$ when $x = 10$ and $y = 5$.',
        steps: [
          'The rule has the form $z = \\frac{kx}{y}$. Plug in: $12 = \\frac{k \\times 8}{2} = 4k$, so $k = 3$.',
          'The rule is $z = \\frac{3x}{y}$. When $x = 10$ and $y = 5$: $z = \\frac{3 \\times 10}{5} = 6$.',
          'Both changes pulled in sensible directions: $x$ grew (pushing $z$ up) but $y$ grew even faster in effect, so $z$ ended up smaller.',
        ],
        answer: '$z = 6$',
      },
      {
        problem: 'Two liters of paint cover a wall $4$ meters long and $3$ meters tall. How much paint covers a wall $6$ meters long and $5$ meters tall?',
        steps: [
          'Paint is jointly proportional to length and height (it covers area). Rule: $P = k \\ell h$.',
          'From the first wall: $2 = k \\times 4 \\times 3 = 12k$, so $k = \\frac{1}{6}$ liter per square meter.',
          'Second wall: $P = \\frac{1}{6} \\times 6 \\times 5 = 5$ liters.',
        ],
        answer: '$5$ liters',
      },
    ],
  },
  problems: [
    {
      q: 'The rule is $z = 4xy$. What is $z$ when $x = 2$ and $y = 3$?',
      choices: ['$24$', '$20$', '$9$', '$48$'],
      answer: 0,
      solution: 'Multiply everything: $z = 4 \\times 2 \\times 3 = 24$. The choice $9$ comes from adding $4 + 2 + 3$ — joint proportion multiplies.',
    },
    {
      q: 'Suppose $z = kxy$, and $z = 40$ when $x = 2$ and $y = 4$. What is $k$?',
      choices: ['$320$', '$8$', '$5$', '$10$'],
      answer: 2,
      solution: 'Plug in and solve: $40 = k \\times 2 \\times 4 = 8k$, so $k = \\frac{40}{8} = 5$. The choice $320$ multiplies everything together instead of solving the equation for $k$.',
    },
    {
      q: 'Which formula says "$z$ varies directly with $x$ and inversely with $y$"?',
      choices: ['$z = kxy$', '$z = \\frac{kx}{y}$', '$z = \\frac{k}{xy}$', '$z = \\frac{ky}{x}$'],
      answer: 1,
      solution: 'Direct with $x$ puts $x$ in the numerator; inverse with $y$ puts $y$ in the denominator. That is $z = \\frac{kx}{y}$. The choice $\\frac{ky}{x}$ has the roles reversed, and $\\frac{k}{xy}$ is inverse with both.',
    },
    {
      q: 'Suppose $z = 2xy$. If $x$ doubles and $y$ stays the same, what happens to $z$?',
      choices: ['It quadruples', 'It is halved', 'It stays the same', 'It doubles'],
      answer: 3,
      solution: 'Replace $x$ with $2x$: the new value is $2(2x)y = 2 \\cdot (2xy) = 2z$. Only one input doubled, so $z$ doubles once. (Quadrupling would need BOTH inputs to double.)',
    },
    {
      q: 'Suppose $z$ is jointly proportional to $x$ and $y$, and $z = 36$ when $x = 3$ and $y = 4$. What is $z$ when $x = 5$ and $y = 2$?',
      choices: ['$36$', '$30$', '$60$', '$10$'],
      answer: 1,
      solution: 'Find $k$ first: $36 = k \\times 3 \\times 4 = 12k$, so $k = 3$ and $z = 3xy$. Then $z = 3 \\times 5 \\times 2 = 30$. Both inputs changed, so there is no shortcut — re-derive the rule, then plug in.',
    },
    {
      q: 'Suppose $z = \\frac{kx}{y}$, and $z = 20$ when $x = 10$ and $y = 3$. What is $z$ when $x = 7$ and $y = 2$?',
      choices: ['$21$', '$42$', '$14$', '$12$'],
      answer: 0,
      solution: 'Solve for $k$: $20 = \\frac{10k}{3}$, so $k = 6$ and $z = \\frac{6x}{y}$. Then $z = \\frac{6 \\times 7}{2} = 21$. The choice $42$ is $6 \\times 7$ — forgetting to divide by $y$ at the end.',
    },
    {
      q: 'Two meshed gears turn so that (number of teeth) $\\times$ (number of turns) is the same for both. A $12$-tooth gear makes $20$ turns. How many turns does the meshed $16$-tooth gear make?',
      choices: ['$26\\frac{2}{3}$', '$24$', '$15$', '$12$'],
      answer: 2,
      solution: 'The constant product is $12 \\times 20 = 240$ — each gear passes the same number of teeth. The $16$-tooth gear makes $\\frac{240}{16} = 15$ turns. The choice $26\\frac{2}{3}$ scales turns UP with teeth, but a bigger gear turns FEWER times.',
    },
    {
      q: 'The pressure of a gas varies directly with temperature and inversely with volume: $P = \\frac{kT}{V}$. If $P = 12$ when $T = 300$ and $V = 50$, what is $P$ when $T = 360$ and $V = 40$?',
      choices: ['$14.4$', '$15$', '$10$', '$18$'],
      answer: 3,
      solution: 'Find $k$: $12 = \\frac{300k}{50} = 6k$, so $k = 2$ and $P = \\frac{2T}{V}$. Then $P = \\frac{2 \\times 360}{40} = 18$. The choices $14.4$ and $15$ each account for only ONE of the two changes — both the hotter temperature and the smaller volume push the pressure up.',
    },
    {
      q: 'Suppose $z$ is jointly proportional to $x^2$ and $y$, and $z = 48$ when $x = 2$ and $y = 3$. What is $z$ when $x = 3$ and $y = 5$?',
      choices: ['$180$', '$120$', '$90$', '$240$'],
      answer: 0,
      solution: 'The rule is $z = kx^2y$. Plug in: $48 = k \\times 4 \\times 3 = 12k$, so $k = 4$. Then $z = 4 \\times 3^2 \\times 5 = 4 \\times 9 \\times 5 = 180$. The choice $120$ forgets to square $x$ (it uses $z = kxy$ with $k = 8$).',
    },
    {
      q: 'Suppose $z = kxy$. If $x$ triples and $y$ also triples, then $z$ is multiplied by what factor?',
      choices: ['$3$', '$6$', '$27$', '$9$'],
      answer: 3,
      solution: 'Replace both: $k(3x)(3y) = 9kxy = 9z$. Each tripling contributes its own factor of $3$, and they multiply: $3 \\times 3 = 9$. (Adding them to get $6$ is the trap — proportional changes always multiply.)',
    },
  ],
}

const s74 = {
  id: '7.4',
  title: 'Rate Problems',
  learn: {
    concepts: [
      {
        heading: 'Rates add — times do not',
        body: 'If Ava paints a room in $a$ hours, her RATE is $\\frac{1}{a}$ of a room per hour. When people work together, you add their rates, never their times: together the rate is $\\frac{1}{a} + \\frac{1}{b}$ rooms per hour, and the shared time is $1$ divided by that sum.',
      },
      {
        heading: 'Draining is a negative rate',
        body: 'A pipe that fills a tank in $6$ hours contributes rate $+\\frac{1}{6}$; a drain that empties it in $9$ hours contributes $-\\frac{1}{9}$. Open both, and the net rate is the difference. If the net rate comes out positive, the tank fills; the time is $1$ divided by the net rate.',
      },
      {
        heading: 'Distance equals rate times time',
        body: 'Travel problems run on one equation: $d = rt$. When two travelers head TOWARD each other, the gap closes at the SUM of their speeds. Meeting time is the starting gap divided by that combined speed.',
      },
      {
        heading: 'Catching up runs on the difference',
        body: 'When a faster traveler chases a slower one going the same direction, the gap closes at the DIFFERENCE of their speeds. Catch-up time equals the head start (in distance) divided by that difference. Toward each other: add speeds. Same direction: subtract.',
      },
    ],
    examples: [
      {
        problem: 'Ben paints a room in $6$ hours; Chloe paints the same room in $3$ hours. How long do they take together?',
        steps: [
          'Convert times to rates: Ben paints $\\frac{1}{6}$ room per hour, Chloe $\\frac{1}{3}$ room per hour.',
          'Add the rates: $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{1}{2}$ room per hour.',
          'Time for one whole room: $1 \\div \\frac{1}{2} = 2$ hours. Notice the answer is less than either solo time — teamwork should always beat the faster worker alone.',
        ],
        answer: '$2$ hours',
      },
      {
        problem: 'A pipe fills a tank in $4$ hours. A drain empties the full tank in $12$ hours. With both open, how long until the empty tank fills?',
        steps: [
          'Net rate $= \\frac{1}{4} - \\frac{1}{12} = \\frac{3}{12} - \\frac{1}{12} = \\frac{2}{12} = \\frac{1}{6}$ tank per hour.',
          'The net rate is positive, so the tank does fill: time $= 1 \\div \\frac{1}{6} = 6$ hours.',
        ],
        answer: '$6$ hours',
      },
      {
        problem: 'Two towns are $300$ miles apart. A car leaves each town at the same moment, driving toward the other at $40$ mph and $60$ mph. When do they meet?',
        steps: [
          'The gap shrinks at the combined speed: $40 + 60 = 100$ mph.',
          'Meeting time $= \\frac{300}{100} = 3$ hours.',
          'Check with $d = rt$: one car covers $120$ miles, the other $180$ miles, and $120 + 180 = 300$. ✓',
        ],
        answer: '$3$ hours',
      },
    ],
  },
  problems: [
    {
      q: 'A machine makes $45$ toys in $5$ hours. What is its rate?',
      choices: ['$225$ toys per hour', '$5$ toys per hour', '$9$ toys per hour', '$40$ toys per hour'],
      answer: 2,
      solution: 'Rate is amount divided by time: $\\frac{45}{5} = 9$ toys per hour. Multiplying gives $225$, but a rate always asks "how much per ONE unit of time?"',
    },
    {
      q: 'Jordan rides a bike at $12$ miles per hour for $2.5$ hours. How far does Jordan travel?',
      choices: ['$30$ miles', '$14.5$ miles', '$24$ miles', '$4.8$ miles'],
      answer: 0,
      solution: 'Use $d = rt$: $d = 12 \\times 2.5 = 30$ miles. The choice $4.8$ divides instead of multiplying — that would answer "how long to go $12$ miles?"',
    },
    {
      q: 'A hose fills a pool in $8$ hours. What fraction of the pool does it fill in one hour?',
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{8}$', '$8$', '$\\frac{7}{8}$'],
      answer: 1,
      solution: 'The whole job takes $8$ hours, so each hour completes $\\frac{1}{8}$ of it. This flip — from time-per-job to job-per-time — is the key move in every work-rate problem.',
    },
    {
      q: 'Two friends walk toward each other, one at $3$ mph and the other at $4$ mph. How fast does the gap between them close?',
      choices: ['$1$ mph', '$12$ mph', '$3.5$ mph', '$7$ mph'],
      answer: 3,
      solution: 'Walking toward each other, BOTH walkers eat into the gap, so the speeds add: $3 + 4 = 7$ mph. Subtracting to get $1$ mph would be right only if they walked in the same direction.',
    },
    {
      q: 'Pipe A fills a tank in $4$ hours and pipe B fills it in $12$ hours. Together, how long do they take?',
      choices: ['$3$ hours', '$8$ hours', '$16$ hours', '$6$ hours'],
      answer: 0,
      solution: 'Add the rates: $\\frac{1}{4} + \\frac{1}{12} = \\frac{3}{12} + \\frac{1}{12} = \\frac{4}{12} = \\frac{1}{3}$ tank per hour, so together they need $3$ hours. The choice $8$ averages the times and $16$ adds them — but times never add for teamwork; only rates do.',
    },
    {
      q: 'A pipe fills a tank in $6$ hours while an open drain empties it in $9$ hours. Starting empty with both open, how long until the tank is full?',
      choices: ['$15$ hours', '$3$ hours', '$18$ hours', '$3.6$ hours'],
      answer: 2,
      solution: 'Net rate $= \\frac{1}{6} - \\frac{1}{9} = \\frac{3}{18} - \\frac{2}{18} = \\frac{1}{18}$ tank per hour, so filling takes $18$ hours. The choice $3$ subtracts the times ($9 - 6$), but the tug-of-war happens between rates, not times.',
    },
    {
      q: 'Two trains start $210$ miles apart and travel toward each other, one at $30$ mph and the other at $40$ mph. How long until they meet?',
      choices: ['$7$ hours', '$3$ hours', '$5.25$ hours', '$2$ hours'],
      answer: 1,
      solution: 'The gap closes at $30 + 40 = 70$ mph, so the meeting time is $\\frac{210}{70} = 3$ hours. The choice $7$ uses only the slower train ($210 \\div 30$), and $5.25$ uses only the faster one — but both trains are closing the gap at once.',
    },
    {
      q: 'A brother leaves home walking at $3$ mph. One hour later his sister follows on a bike at $9$ mph. How long after she starts does she catch him?',
      choices: ['$1$ hour', '$20$ minutes', '$3$ hours', '$30$ minutes'],
      answer: 3,
      solution: 'His head start is $3 \\times 1 = 3$ miles. Riding the same direction, she closes the gap at $9 - 3 = 6$ mph. Catch-up time $= \\frac{3}{6} = \\frac{1}{2}$ hour $= 30$ minutes. Check: in half an hour she rides $4.5$ miles, and he has walked $3 + 1.5 = 4.5$ miles. ✓',
    },
    {
      q: 'Working together, two friends rake a yard in $6$ hours. Alone, the first friend would take $10$ hours. How long would the second friend take alone?',
      choices: ['$4$ hours', '$15$ hours', '$16$ hours', '$8$ hours'],
      answer: 1,
      solution: 'Subtract rates, not times: the second rate is $\\frac{1}{6} - \\frac{1}{10} = \\frac{5}{30} - \\frac{3}{30} = \\frac{2}{30} = \\frac{1}{15}$ yard per hour, so $15$ hours alone. The choice $4$ subtracts $10 - 6$, but solo time must be LONGER than the team time, not shorter.',
    },
    {
      q: 'Three pipes fill a tank alone in $4$ hours, $6$ hours, and $12$ hours. All three together take how long?',
      choices: ['$2$ hours', '$22$ hours', '$7\\frac{1}{3}$ hours', '$3$ hours'],
      answer: 0,
      solution: 'Add all three rates: $\\frac{1}{4} + \\frac{1}{6} + \\frac{1}{12} = \\frac{3}{12} + \\frac{2}{12} + \\frac{1}{12} = \\frac{6}{12} = \\frac{1}{2}$ tank per hour, so the tank fills in $2$ hours. The choices $22$ and $7\\frac{1}{3}$ come from adding or averaging the times — always convert to rates first.',
    },
  ],
}

const challenge = [
  {
    q: 'Suppose $y$ is directly proportional to $x$, and $y = 9$ when $x = 12$. For what value of $x$ is $y = 15$?',
    choices: ['$11.25$', '$20$', '$18$', '$24$'],
    answer: 1,
    solution: 'The constant is $k = \\frac{9}{12} = \\frac{3}{4}$, so $y = \\frac{3}{4}x$. Set $15 = \\frac{3}{4}x$ and solve: $x = 15 \\times \\frac{4}{3} = 20$. Check: $\\frac{3}{4} \\times 20 = 15$. ✓ (The choice $11.25$ computes $y$ when $x = 15$ — the question runs the rule backwards.)',
    },
  {
    q: 'Suppose $y$ is inversely proportional to $x$, and $y = 14$ when $x = 6$. For what value of $x$ is $y = 21$?',
    choices: ['$9$', '$49$', '$3$', '$4$'],
    answer: 3,
    solution: 'The constant product is $6 \\times 14 = 84$. For $y = 21$: $x = \\frac{84}{21} = 4$. Since $y$ grew, $x$ had to shrink. The choice $9$ scales $x$ up with $y$ — that is direct-proportion thinking.',
  },
  {
    q: 'Suppose $y$ is directly proportional to $x^2$, and $y = 12$ when $x = 2$. For what positive value of $x$ is $y = 75$?',
    choices: ['$5$', '$12.5$', '$25$', '$6.25$'],
    answer: 0,
    solution: 'From $12 = k \\times 4$ we get $k = 3$, so $y = 3x^2$. Set $75 = 3x^2$: then $x^2 = 25$, so $x = 5$. The choice $12.5$ scales $x$ linearly by $\\frac{75}{12}$ — but $y$ tracks $x^2$, so undo the rule with a square root.',
  },
  {
    q: 'Suppose $z$ varies directly with $x$ and inversely with the SQUARE of $y$, and $z = 8$ when $x = 4$ and $y = 3$. What is $z$ when $x = 6$ and $y = 2$?',
    choices: ['$18$', '$12$', '$27$', '$36$'],
    answer: 2,
    solution: 'The rule is $z = \\frac{kx}{y^2}$. Plug in: $8 = \\frac{4k}{9}$, so $k = 18$. Then $z = \\frac{18 \\times 6}{2^2} = \\frac{108}{4} = 27$. The choice $18$ forgets to square $y$ (it uses $z = \\frac{kx}{y}$ with $k = 6$).',
  },
  {
    q: 'Alone, Priya would need $12$ days to paint a mural. With her friend helping, the two finish in $4$ days. How long would the friend need alone?',
    choices: ['$6$ days', '$8$ days', '$3$ days', '$16$ days'],
    answer: 0,
    solution: 'The friend’s rate is the team rate minus Priya’s: $\\frac{1}{4} - \\frac{1}{12} = \\frac{3}{12} - \\frac{1}{12} = \\frac{2}{12} = \\frac{1}{6}$ mural per day, so $6$ days alone. The choice $8$ subtracts the times $12 - 4$, but only rates subtract.',
  },
  {
    q: 'Pipe A fills a tank in $3$ hours, pipe B fills it in $6$ hours, and a drain empties it in $4$ hours. With all three open, how long until the empty tank fills?',
    choices: ['$5$ hours', '$2$ hours', '$12$ hours', '$4$ hours'],
    answer: 3,
    solution: 'Net rate $= \\frac{1}{3} + \\frac{1}{6} - \\frac{1}{4} = \\frac{4}{12} + \\frac{2}{12} - \\frac{3}{12} = \\frac{3}{12} = \\frac{1}{4}$ tank per hour, so the tank fills in $4$ hours. Fills add, drains subtract — then flip the net rate to get the time.',
  },
  {
    q: 'Two trains start $270$ miles apart and head toward each other, one at $55$ mph and the other at $35$ mph. How far has the FASTER train traveled when they meet?',
    choices: ['$105$ miles', '$135$ miles', '$165$ miles', '$150$ miles'],
    answer: 2,
    solution: 'They close the gap at $55 + 35 = 90$ mph, so they meet after $\\frac{270}{90} = 3$ hours. The faster train covers $55 \\times 3 = 165$ miles. ($105$ is the slower train’s share, and $135$ splits the distance evenly — but the faster train earns the bigger share.)',
  },
  {
    q: 'A jogger runs at $6$ mph. A cyclist leaves the same spot $15$ minutes later, riding the same route at $8$ mph. How long after starting does the cyclist catch the jogger?',
    choices: ['$30$ minutes', '$45$ minutes', '$60$ minutes', '$90$ minutes'],
    answer: 1,
    solution: 'In $15$ minutes ($\\frac{1}{4}$ hour) the jogger builds a lead of $6 \\times \\frac{1}{4} = 1.5$ miles. Same direction, so the gap closes at $8 - 6 = 2$ mph. Time $= \\frac{1.5}{2} = 0.75$ hour $= 45$ minutes. Check: the cyclist rides $6$ miles in $45$ minutes, and the jogger has run $6$ mph for one full hour — also $6$ miles. ✓',
  },
  {
    q: 'The brightness of a lamp on a wall is inversely proportional to the SQUARE of the distance from the lamp. If you double your distance from the lamp, the brightness is...',
    choices: ['quartered', 'halved', 'doubled', 'unchanged'],
    answer: 0,
    solution: 'From $B = \\frac{k}{d^2}$, replacing $d$ with $2d$ gives $\\frac{k}{4d^2}$ — one quarter of the original. Doubling the distance squares into a factor of $4$ downstairs, so the brightness is quartered, not merely halved.',
  },
  {
    q: 'Which rule fits ALL of these pairs? $(2, 24), (4, 12), (8, 6)$',
    choices: ['$y = 12x$', '$y = x + 22$', '$y = \\frac{48}{x}$', '$y = \\frac{24}{x}$'],
    answer: 2,
    solution: 'Test the products: $2 \\times 24 = 48$, $4 \\times 12 = 48$, $8 \\times 6 = 48$ — constant, so $y = \\frac{48}{x}$. The rule $y = x + 22$ fits the first pair only ($4 + 22 = 26$, not $12$), and $y = \\frac{24}{x}$ gives $y = 12$ at $x = 2$, not $24$. Always check EVERY pair before trusting a rule.',
  },
  {
    q: 'The cost of a glass pane is jointly proportional to its length and width. A $3$ ft by $4$ ft pane costs $\\$60$. How much does a $5$ ft by $6$ ft pane cost?',
    choices: ['$\\$100$', '$\\$120$', '$\\$90$', '$\\$150$'],
    answer: 3,
    solution: 'Cost $= k \\ell w$. From the first pane: $60 = k \\times 12$, so $k = 5$ dollars per square foot. The second pane has area $30$ square feet, so it costs $5 \\times 30 = \\$150$. Both dimensions grew, and each contributes its own scaling factor.',
  },
  {
    q: 'If $6$ painters can paint $4$ rooms in $8$ hours, how long would $12$ painters take to paint $12$ rooms?',
    choices: ['$8$ hours', '$12$ hours', '$4$ hours', '$24$ hours'],
    answer: 1,
    solution: 'The first job used $6 \\times 8 = 48$ painter-hours for $4$ rooms — that is $12$ painter-hours per room. Then $12$ rooms need $144$ painter-hours, and $12$ painters supply them in $\\frac{144}{12} = 12$ hours. (Tempting to say $8$: "twice the painters, three times the rooms" does NOT cancel out.)',
  },
]

const worksheet = [
  {
    q: 'Suppose $y$ is directly proportional to $x$, and $y = 18$ when $x = 6$. Find $y$ when $x = 11$.',
    answer: '$y = 33$',
    solution: 'The constant is $k = \\frac{18}{6} = 3$, so $y = 3x$. When $x = 11$: $y = 3 \\times 11 = 33$.',
  },
  {
    q: 'Suppose $y$ is inversely proportional to $x$, and $y = 5$ when $x = 12$. Find $y$ when $x = 4$.',
    answer: '$y = 15$',
    solution: 'The constant product is $12 \\times 5 = 60$, so $y = \\frac{60}{x}$. When $x = 4$: $y = \\frac{60}{4} = 15$. Smaller $x$, bigger $y$ — exactly as inverse proportion promises.',
  },
  {
    q: 'Suppose $z$ is jointly proportional to $x$ and $y$, and $z = 60$ when $x = 4$ and $y = 3$. Find $z$ when $x = 2$ and $y = 7$.',
    answer: '$z = 70$',
    solution: 'From $z = kxy$: $60 = k \\times 12$, so $k = 5$. Then $z = 5 \\times 2 \\times 7 = 70$.',
  },
  {
    q: 'A recipe uses $3$ cups of flour to make $24$ cookies. How many cups of flour make $40$ cookies?',
    answer: '$5$ cups',
    solution: 'Flour is directly proportional to cookies: each cup makes $\\frac{24}{3} = 8$ cookies. For $40$ cookies: $\\frac{40}{8} = 5$ cups.',
  },
  {
    q: 'A crew of $9$ workers can pave a path in $20$ days. Working at the same rate, how many days would $12$ workers need?',
    answer: '$15$ days',
    solution: 'The job is $9 \\times 20 = 180$ worker-days, a constant. With $12$ workers: $\\frac{180}{12} = 15$ days.',
  },
  {
    q: 'One pipe fills a tank in $10$ hours; a second pipe fills it in $15$ hours. How long do they take together?',
    answer: '$6$ hours',
    solution: 'Add the rates: $\\frac{1}{10} + \\frac{1}{15} = \\frac{3}{30} + \\frac{2}{30} = \\frac{5}{30} = \\frac{1}{6}$ tank per hour, so together they fill the tank in $6$ hours.',
  },
  {
    q: 'Suppose $y$ is directly proportional to $x^2$, and $y = 45$ when $x = 3$. For what positive value of $x$ is $y = 125$?',
    answer: '$x = 5$',
    solution: 'From $45 = k \\times 9$ we get $k = 5$, so $y = 5x^2$. Set $125 = 5x^2$: then $x^2 = 25$, and the positive solution is $x = 5$.',
  },
  {
    q: 'Suppose $z$ varies directly with $x$ and inversely with $y$, and $z = 9$ when $x = 6$ and $y = 4$. Find $y$ when $z = 12$ and $x = 8$.',
    answer: '$y = 4$',
    solution: 'From $z = \\frac{kx}{y}$: $9 = \\frac{6k}{4}$, so $k = 6$. Now solve $12 = \\frac{6 \\times 8}{y} = \\frac{48}{y}$, which gives $y = \\frac{48}{12} = 4$.',
  },
  {
    q: 'A hiker leaves camp at noon walking $2$ miles per hour. At 2:00 pm a cyclist follows the same trail at $10$ miles per hour. At what time does the cyclist catch the hiker?',
    answer: '2:30 pm',
    solution: 'By 2:00 pm the hiker is $2 \\times 2 = 4$ miles ahead. The gap closes at $10 - 2 = 8$ mph, so catching up takes $\\frac{4}{8} = \\frac{1}{2}$ hour. The cyclist catches the hiker at 2:30 pm. Check: the cyclist rides $5$ miles in half an hour, and the hiker has walked $2.5$ hours at $2$ mph — also $5$ miles. ✓',
  },
  {
    q: 'Two friends wash all the windows of a house in $8$ hours when they work together. One friend works exactly twice as fast as the other. How long would the FASTER friend need alone?',
    answer: '$12$ hours',
    solution: 'Let the slower rate be $r$; the faster rate is $2r$, so together $3r = \\frac{1}{8}$ house per hour. Then $r = \\frac{1}{24}$ and the faster rate is $2r = \\frac{1}{12}$ — so the faster friend alone needs $12$ hours (and the slower one $24$ hours). Check: $\\frac{1}{12} + \\frac{1}{24} = \\frac{3}{24} = \\frac{1}{8}$. ✓',
  },
]

export default {
  id: 'intro-algebra-ch07',
  book: 'intro-algebra',
  number: 7,
  title: 'Proportion',
  intro:
    'Proportion is the mathematics of "when this changes, how does that change?" — the pattern behind prices, speeds, gears, and teamwork. In this chapter you will learn to spot direct, inverse, and joint proportion, pin down the constant that links the quantities, and use it to predict anything.',
  sections: [s71, s72, s73, s74],
  challenge,
  worksheet,
}
