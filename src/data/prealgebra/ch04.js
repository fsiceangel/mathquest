// Prealgebra — Chapter 4: Fractions
// All problems, explanations, and examples are original MathQuest content.

const s41 = {
  id: '4.1',
  title: 'What is a Fraction?',
  learn: {
    concepts: [
      {
        heading: 'A fraction is a division',
        body: 'The fraction $\\frac{a}{b}$ means exactly $a \\div b$. So $\\frac{6}{3}$ is $6 \\div 3 = 2$, and $\\frac{3}{4}$ is what you get when you split $3$ into $4$ equal parts. The fraction bar is just a fancy division sign!',
      },
      {
        heading: 'What the top and bottom tell you',
        body: 'The bottom number (the denominator) tells you how many equal parts one whole is split into. The top number (the numerator) tells you how many of those parts you take. In $\\frac{3}{8}$, a whole is cut into $8$ equal pieces and we take $3$ of them.',
      },
      {
        heading: 'Unit fractions are the building blocks',
        body: 'A unit fraction has a $1$ on top, like $\\frac{1}{5}$. Every fraction is built from copies of a unit fraction: $\\frac{4}{5}$ is just $4$ copies of $\\frac{1}{5}$. To place $\\frac{4}{5}$ on the number line, split the space from $0$ to $1$ into $5$ equal hops and take $4$ of them.',
      },
      {
        heading: 'Some fractions are whole numbers',
        body: 'When the top is a multiple of the bottom, the fraction is a whole number: $\\frac{12}{4} = 12 \\div 4 = 3$, and $\\frac{7}{1} = 7$. Whole numbers have been fractions all along — they were just wearing a simpler outfit.',
      },
    ],
    examples: [
      {
        problem: 'Place $\\frac{3}{4}$ on the number line.',
        steps: [
          'The denominator is $4$, so split the space from $0$ to $1$ into $4$ equal hops.',
          'The numerator is $3$, so start at $0$ and take $3$ of those hops.',
          'You land three-quarters of the way from $0$ to $1$ — that point is $\\frac{3}{4}$.',
        ],
        answer: '$\\frac{3}{4}$ sits $3$ hops of size $\\frac{1}{4}$ to the right of $0$',
      },
      {
        problem: 'Is $\\frac{45}{9}$ a whole number?',
        steps: [
          'A fraction is a division: $\\frac{45}{9} = 45 \\div 9$.',
          'Since $9 \\times 5 = 45$, the division comes out evenly: $45 \\div 9 = 5$.',
        ],
        answer: 'Yes — $\\frac{45}{9} = 5$',
      },
      {
        problem: 'How many $\\frac{1}{4}$s does it take to build $2$?',
        steps: [
          'Each whole is made of $4$ quarter-sized pieces.',
          'Two wholes need $2 \\times 4 = 8$ pieces, so $2 = \\frac{8}{4}$.',
        ],
        answer: 'It takes $8$ copies of $\\frac{1}{4}$ to build $2$',
      },
    ],
  },
  problems: [
    {
      q: 'In the fraction $\\frac{3}{7}$, what does the $7$ tell you?',
      choices: ['The number of parts we take', 'The distance from $0$', 'The number of equal parts one whole is split into', 'The number of wholes'],
      answer: 2,
      solution: 'The bottom number, the denominator, tells how many equal parts a whole is cut into — here, $7$ parts. The top number, $3$, counts how many of those parts we take.',
    },
    {
      q: 'Which fraction means the same thing as $9 \\div 4$?',
      choices: ['$\\frac{9}{4}$', '$\\frac{4}{9}$', '$36$', '$\\frac{1}{36}$'],
      answer: 0,
      solution: 'A fraction is a division: the number being divided goes on top. So $9 \\div 4 = \\frac{9}{4}$. (Careful: $\\frac{4}{9}$ would be $4 \\div 9$ — order matters in division!)',
    },
    {
      q: 'Which of these is a unit fraction?',
      choices: ['$\\frac{2}{3}$', '$\\frac{1}{6}$', '$\\frac{6}{1}$', '$\\frac{5}{5}$'],
      answer: 1,
      solution: 'A unit fraction has a $1$ on top: $\\frac{1}{6}$ is one piece of a whole cut into $6$ equal parts. Note that $\\frac{6}{1} = 6$ and $\\frac{5}{5} = 1$ — the $1$ must be the numerator.',
    },
    {
      q: 'What is $\\frac{20}{5}$?',
      choices: ['$5$', '$100$', '$\\frac{1}{4}$', '$4$'],
      answer: 3,
      solution: 'The fraction bar means divide: $\\frac{20}{5} = 20 \\div 5 = 4$. Since $20$ is a multiple of $5$, this fraction is a whole number.',
    },
    {
      q: 'The space from $0$ to $1$ is split into $8$ equal hops. What number is at the $3$rd tick mark after $0$?',
      choices: ['$\\frac{3}{8}$', '$\\frac{8}{3}$', '$\\frac{3}{5}$', '$\\frac{1}{3}$'],
      answer: 0,
      solution: 'Each hop has size $\\frac{1}{8}$, and we take $3$ hops. Three copies of $\\frac{1}{8}$ make $\\frac{3}{8}$.',
    },
    {
      q: 'Which fraction equals the whole number $7$?',
      choices: ['$\\frac{1}{7}$', '$\\frac{7}{7}$', '$\\frac{7}{1}$', '$\\frac{0}{7}$'],
      answer: 2,
      solution: '$\\frac{7}{1} = 7 \\div 1 = 7$. Check the others: $\\frac{7}{7} = 1$, $\\frac{0}{7} = 0$, and $\\frac{1}{7}$ is a small piece of one whole.',
    },
    {
      q: 'How many pieces of size $\\frac{1}{6}$ does it take to build $3$ wholes?',
      choices: ['$3$', '$18$', '$6$', '$9$'],
      answer: 1,
      solution: 'Each whole contains $6$ sixth-sized pieces, so $3$ wholes contain $3 \\times 6 = 18$ pieces. In symbols: $3 = \\frac{18}{6}$.',
    },
    {
      q: 'Which of these fractions is NOT a whole number?',
      choices: ['$\\frac{12}{4}$', '$\\frac{15}{5}$', '$\\frac{18}{6}$', '$\\frac{14}{4}$'],
      answer: 3,
      solution: 'Check each division: $\\frac{12}{4} = 3$, $\\frac{15}{5} = 3$, $\\frac{18}{6} = 3$ — all whole. But $14 \\div 4$ does not come out evenly: $4 \\times 3 = 12$ and $4 \\times 4 = 16$, so $\\frac{14}{4}$ lands between $3$ and $4$.',
    },
    {
      q: 'The space from $0$ to $2$ is split into $6$ equal hops. What number is at the $5$th tick mark after $0$?',
      choices: ['$\\frac{5}{6}$', '$\\frac{5}{3}$', '$\\frac{5}{2}$', '$\\frac{6}{5}$'],
      answer: 1,
      solution: 'Six equal hops cover a distance of $2$, so each hop is $2 \\div 6 = \\frac{2}{6} = \\frac{1}{3}$. Five hops of size $\\frac{1}{3}$ reach $\\frac{5}{3}$. (Watch out: the hops are NOT sixths, because the line goes to $2$, not $1$.)',
    },
    {
      q: 'Which number is exactly halfway between $0$ and $\\frac{1}{2}$?',
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{3}{4}$', '$\\frac{1}{8}$'],
      answer: 0,
      solution: 'Halfway to $\\frac{1}{2}$ means half of $\\frac{1}{2}$. Cutting a half into two equal parts gives quarters, so the midpoint is $\\frac{1}{4}$. On the number line: two hops of $\\frac{1}{4}$ make $\\frac{1}{2}$, so one hop lands right in the middle.',
    },
  ],
}

const s42 = {
  id: '4.2',
  title: 'Multiplying Fractions',
  learn: {
    concepts: [
      {
        heading: 'Tops together, bottoms together',
        body: 'To multiply fractions, multiply the numerators and multiply the denominators: $\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$. So $\\frac{2}{3} \\times \\frac{5}{7} = \\frac{10}{21}$. No common denominator needed — that is an addition worry, not a multiplication one!',
      },
      {
        heading: 'Cancel BEFORE you multiply',
        body: 'If a number on top and a number on the bottom share a factor, divide them both by it before multiplying. In $\\frac{4}{9} \\times \\frac{3}{8}$, cancel the $4$ with the $8$ and the $3$ with the $9$ first — the numbers stay small and the answer comes out already simplified.',
      },
      {
        heading: '"Of" means multiply',
        body: 'A fraction OF a number is a multiplication: $\\frac{3}{4}$ of $20$ means $\\frac{3}{4} \\times 20$. A quick way: divide by the bottom, then multiply by the top. One quarter of $20$ is $5$, so three quarters is $15$.',
      },
      {
        heading: 'Long chains are no scarier',
        body: 'To multiply several fractions, multiply all the tops and all the bottoms — and hunt for cancellations across the whole chain. Sometimes almost everything cancels and a long product collapses to something tiny.',
      },
    ],
    examples: [
      {
        problem: 'Compute $\\frac{2}{3} \\times \\frac{5}{7}$.',
        steps: [
          'Multiply the tops: $2 \\times 5 = 10$.',
          'Multiply the bottoms: $3 \\times 7 = 21$.',
          'Nothing cancels, so the answer is $\\frac{10}{21}$.',
        ],
        answer: '$\\frac{2}{3} \\times \\frac{5}{7} = \\frac{10}{21}$',
      },
      {
        problem: 'Compute $\\frac{4}{9} \\times \\frac{3}{8}$.',
        steps: [
          'Cancel before multiplying! The $4$ and the $8$ share a factor of $4$: they become $1$ and $2$.',
          'The $3$ and the $9$ share a factor of $3$: they become $1$ and $3$.',
          'Now multiply the small leftovers: $\\frac{1}{3} \\times \\frac{1}{2} = \\frac{1}{6}$.',
        ],
        answer: '$\\frac{4}{9} \\times \\frac{3}{8} = \\frac{1}{6}$',
      },
      {
        problem: 'What is $\\frac{3}{4}$ of $20$?',
        steps: [
          '"Of" means multiply: we want $\\frac{3}{4} \\times 20$.',
          'Divide by the bottom first: $20 \\div 4 = 5$. That is one quarter.',
          'Multiply by the top: $3 \\times 5 = 15$. That is three quarters.',
        ],
        answer: '$\\frac{3}{4}$ of $20$ is $15$',
      },
    ],
  },
  problems: [
    {
      q: 'Compute $\\frac{1}{2} \\times \\frac{1}{3}$.',
      choices: ['$\\frac{1}{6}$', '$\\frac{2}{5}$', '$\\frac{1}{5}$', '$\\frac{2}{6}$'],
      answer: 0,
      solution: 'Multiply tops and bottoms: $\\frac{1 \\times 1}{2 \\times 3} = \\frac{1}{6}$. It makes sense: half of a third is a small piece — one sixth of a whole.',
    },
    {
      q: 'Compute $\\frac{3}{5} \\times \\frac{2}{7}$.',
      choices: ['$\\frac{5}{12}$', '$\\frac{6}{12}$', '$\\frac{6}{35}$', '$\\frac{5}{35}$'],
      answer: 2,
      solution: 'Tops together and bottoms together: $\\frac{3 \\times 2}{5 \\times 7} = \\frac{6}{35}$. (Adding tops and bottoms to get $\\frac{5}{12}$ is a rule for nothing — multiplication multiplies both layers.)',
    },
    {
      q: 'What is $\\frac{1}{4}$ of $24$?',
      choices: ['$4$', '$6$', '$8$', '$96$'],
      answer: 1,
      solution: '"Of" means multiply: $\\frac{1}{4} \\times 24 = \\frac{24}{4} = 6$. Splitting $24$ into $4$ equal shares gives $6$ in each share.',
    },
    {
      q: 'Compute $\\frac{2}{3} \\times \\frac{3}{2}$.',
      choices: ['$\\frac{4}{9}$', '$1$', '$\\frac{9}{4}$', '$0$'],
      answer: 1,
      solution: 'Everything cancels: the $2$s cancel and the $3$s cancel, leaving $\\frac{6}{6} = 1$. Of course — $\\frac{2}{3}$ and $\\frac{3}{2}$ are reciprocals, and reciprocals always multiply to $1$.',
    },
    {
      q: 'Compute $\\frac{5}{6} \\times 12$.',
      choices: ['$2$', '$60$', '$12$', '$10$'],
      answer: 3,
      solution: 'Divide by the bottom first: $12 \\div 6 = 2$. Then multiply by the top: $5 \\times 2 = 10$.',
    },
    {
      q: 'Compute $\\frac{4}{9} \\times \\frac{3}{10}$.',
      choices: ['$\\frac{2}{15}$', '$\\frac{7}{19}$', '$\\frac{12}{19}$', '$\\frac{2}{5}$'],
      answer: 0,
      solution: 'Cancel first: the $4$ and $10$ share a factor of $2$, becoming $2$ and $5$; the $3$ and $9$ share a factor of $3$, becoming $1$ and $3$. Then $\\frac{2}{3} \\times \\frac{1}{5} = \\frac{2}{15}$.',
    },
    {
      q: 'Compute $\\frac{2}{5} \\times \\frac{5}{8} \\times 4$.',
      choices: ['$\\frac{1}{4}$', '$\\frac{4}{5}$', '$1$', '$2$'],
      answer: 2,
      solution: 'Cancel across the whole chain: the $5$s cancel, and the $4$ cancels with the $8$ to leave a $2$ on the bottom. That gives $\\frac{2}{2} = 1$. Check without canceling: $\\frac{2}{5} \\times \\frac{5}{8} = \\frac{10}{40} = \\frac{1}{4}$, and $\\frac{1}{4} \\times 4 = 1$.',
    },
    {
      q: 'What is $\\frac{2}{3}$ of $\\frac{3}{4}$?',
      choices: ['$\\frac{5}{7}$', '$\\frac{1}{2}$', '$\\frac{8}{9}$', '$\\frac{17}{12}$'],
      answer: 1,
      solution: '"Of" means multiply: $\\frac{2}{3} \\times \\frac{3}{4}$. The $3$s cancel, leaving $\\frac{2}{4} = \\frac{1}{2}$. Taking two-thirds of three quarters leaves two quarters — half a whole.',
    },
    {
      q: 'Compute $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5}$.',
      choices: ['$\\frac{1}{120}$', '$\\frac{4}{5}$', '$\\frac{5}{6}$', '$\\frac{1}{5}$'],
      answer: 3,
      solution: 'Watch the chain collapse: the $2$ on top cancels the $2$ below, the $3$ cancels the $3$, the $4$ cancels the $4$. Only the first $1$ and the last $5$ survive: $\\frac{1}{5}$.',
    },
    {
      q: 'What is half of a third of $90$?',
      choices: ['$30$', '$45$', '$60$', '$15$'],
      answer: 3,
      solution: 'Stack the fractions: $\\frac{1}{2} \\times \\frac{1}{3} \\times 90$. Since $\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$, we need one sixth of $90$, which is $90 \\div 6 = 15$.',
    },
  ],
}

const s43 = {
  id: '4.3',
  title: 'Dividing by a Fraction',
  learn: {
    concepts: [
      {
        heading: 'Flip, then multiply',
        body: 'Dividing by a fraction is the same as multiplying by its reciprocal: $\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$. Only the SECOND fraction flips — the one you are dividing by.',
      },
      {
        heading: 'Division asks "how many fit?"',
        body: '$6 \\div \\frac{3}{4}$ asks: how many $\\frac{3}{4}$-sized pieces fit inside $6$? Each whole holds $\\frac{4}{3}$ of them, so $6$ wholes hold $6 \\times \\frac{4}{3} = 8$. That is why dividing by a fraction smaller than $1$ gives a BIGGER answer.',
      },
      {
        heading: 'Fractions divided by wholes',
        body: 'A whole number is a fraction over $1$, so the same rule works: $\\frac{2}{5} \\div 3 = \\frac{2}{5} \\div \\frac{3}{1} = \\frac{2}{5} \\times \\frac{1}{3} = \\frac{2}{15}$. Sharing a fraction among $3$ people makes each piece $3$ times smaller.',
      },
      {
        heading: 'A fraction of fractions',
        body: 'A "complex fraction" like $\\frac{1/2}{3/5}$ looks scary, but the big bar is just division: it means $\\frac{1}{2} \\div \\frac{3}{5}$. Flip the bottom and multiply.',
      },
    ],
    examples: [
      {
        problem: 'Compute $6 \\div \\frac{3}{4}$.',
        steps: [
          'Flip the divisor: the reciprocal of $\\frac{3}{4}$ is $\\frac{4}{3}$.',
          'Multiply: $6 \\times \\frac{4}{3} = \\frac{24}{3} = 8$.',
          'Sanity check: eight $\\frac{3}{4}$-cup scoops make $8 \\times \\frac{3}{4} = 6$ cups. It fits!',
        ],
        answer: '$6 \\div \\frac{3}{4} = 8$',
      },
      {
        problem: 'Compute $\\frac{2}{5} \\div 3$.',
        steps: [
          'Write $3$ as $\\frac{3}{1}$, then flip it to $\\frac{1}{3}$.',
          'Multiply: $\\frac{2}{5} \\times \\frac{1}{3} = \\frac{2}{15}$.',
        ],
        answer: '$\\frac{2}{5} \\div 3 = \\frac{2}{15}$',
      },
      {
        problem: 'Simplify the complex fraction $\\frac{3/4}{5/8}$.',
        steps: [
          'The big bar is a division: $\\frac{3}{4} \\div \\frac{5}{8}$.',
          'Flip the bottom fraction and multiply: $\\frac{3}{4} \\times \\frac{8}{5}$.',
          'Cancel the $4$ with the $8$: $\\frac{3}{1} \\times \\frac{2}{5} = \\frac{6}{5}$.',
        ],
        answer: '$\\frac{3/4}{5/8} = \\frac{6}{5}$',
      },
    ],
  },
  problems: [
    {
      q: 'Compute $\\frac{1}{2} \\div \\frac{1}{4}$.',
      choices: ['$\\frac{1}{8}$', '$2$', '$4$', '$\\frac{1}{2}$'],
      answer: 1,
      solution: 'Flip the divisor and multiply: $\\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$. It checks out: exactly two quarter-pieces fit inside one half.',
    },
    {
      q: 'To compute $\\frac{2}{3} \\div \\frac{5}{9}$, what should you multiply $\\frac{2}{3}$ by?',
      choices: ['$\\frac{9}{5}$', '$\\frac{5}{9}$', '$\\frac{3}{2}$', '$-\\frac{5}{9}$'],
      answer: 0,
      solution: 'Dividing means multiplying by the reciprocal of the DIVISOR. The divisor is $\\frac{5}{9}$, and flipping it gives $\\frac{9}{5}$. (Flipping the first fraction instead is the classic trap — only the second one flips!)',
    },
    {
      q: 'Compute $8 \\div \\frac{1}{3}$.',
      choices: ['$\\frac{8}{3}$', '$\\frac{3}{8}$', '$24$', '$5$'],
      answer: 2,
      solution: 'Flip $\\frac{1}{3}$ to get $3$, then multiply: $8 \\times 3 = 24$. Each whole holds $3$ third-sized pieces, so $8$ wholes hold $24$ of them.',
    },
    {
      q: 'Compute $\\frac{3}{4} \\div 2$.',
      choices: ['$\\frac{3}{8}$', '$\\frac{3}{2}$', '$\\frac{8}{3}$', '$\\frac{2}{3}$'],
      answer: 0,
      solution: 'Dividing by $2$ means multiplying by $\\frac{1}{2}$: $\\frac{3}{4} \\times \\frac{1}{2} = \\frac{3}{8}$. Splitting three quarters between $2$ people gives each person three eighths.',
    },
    {
      q: 'Compute $\\frac{5}{6} \\div \\frac{5}{6}$.',
      choices: ['$0$', '$\\frac{25}{36}$', '$\\frac{36}{25}$', '$1$'],
      answer: 3,
      solution: 'Any nonzero number divided by itself is $1$ — exactly one copy of $\\frac{5}{6}$ fits inside $\\frac{5}{6}$. The flip-and-multiply rule agrees: $\\frac{5}{6} \\times \\frac{6}{5} = 1$.',
    },
    {
      q: 'A recipe needs $6$ cups of flour, and your scoop holds $\\frac{3}{4}$ cup. How many full scoops do you need?',
      choices: ['$4\\frac{1}{2}$', '$9$', '$8$', '$7$'],
      answer: 2,
      solution: 'We are asking how many $\\frac{3}{4}$s fit in $6$: that is $6 \\div \\frac{3}{4} = 6 \\times \\frac{4}{3} = 8$ scoops. (Multiplying $6 \\times \\frac{3}{4} = 4\\frac{1}{2}$ answers a different question!)',
    },
    {
      q: 'Compute $\\frac{2}{3} \\div \\frac{4}{9}$.',
      choices: ['$\\frac{8}{27}$', '$\\frac{3}{2}$', '$\\frac{2}{3}$', '$\\frac{6}{7}$'],
      answer: 1,
      solution: 'Flip and multiply: $\\frac{2}{3} \\times \\frac{9}{4}$. Cancel: the $9$ and $3$ leave a $3$ on top, and the $2$ and $4$ leave a $2$ below. Result: $\\frac{3}{2}$. Choosing $\\frac{8}{27}$ means the flip was forgotten.',
    },
    {
      q: 'Simplify the complex fraction $\\frac{1/2}{3/5}$.',
      choices: ['$\\frac{3}{10}$', '$\\frac{6}{5}$', '$\\frac{10}{3}$', '$\\frac{5}{6}$'],
      answer: 3,
      solution: 'The big bar is division: $\\frac{1}{2} \\div \\frac{3}{5}$. Flip the bottom and multiply: $\\frac{1}{2} \\times \\frac{5}{3} = \\frac{5}{6}$.',
    },
    {
      q: 'A number $x$ satisfies $x \\times \\frac{2}{5} = 8$. What is $x$?',
      choices: ['$20$', '$\\frac{16}{5}$', '$10$', '$4$'],
      answer: 0,
      solution: 'To undo multiplying by $\\frac{2}{5}$, divide by it: $x = 8 \\div \\frac{2}{5} = 8 \\times \\frac{5}{2} = 20$. Check: $20 \\times \\frac{2}{5} = \\frac{40}{5} = 8$. ✓',
    },
    {
      q: 'Compute $5 \\div \\left(\\frac{1}{2} \\div \\frac{1}{6}\\right)$.',
      choices: ['$15$', '$\\frac{3}{5}$', '$\\frac{5}{3}$', '$\\frac{5}{6}$'],
      answer: 2,
      solution: 'Parentheses first: $\\frac{1}{2} \\div \\frac{1}{6} = \\frac{1}{2} \\times 6 = 3$, since three sixths fit in a half. Then $5 \\div 3 = \\frac{5}{3}$.',
    },
  ],
}

const s44 = {
  id: '4.4',
  title: 'Raising Fractions to Powers',
  learn: {
    concepts: [
      {
        heading: 'The power hits top and bottom',
        body: 'Raising a fraction to a power raises the top and the bottom: $\\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$. That is because $\\left(\\frac{2}{3}\\right)^3 = \\frac{2}{3} \\times \\frac{2}{3} \\times \\frac{2}{3}$ — three $2$s multiply on top and three $3$s multiply below.',
      },
      {
        heading: 'Negative fractions: count the flips',
        body: 'Each factor of a negative fraction flips the sign once. So an even power of a negative fraction is positive, and an odd power is negative: $\\left(-\\frac{1}{2}\\right)^4 = \\frac{1}{16}$ but $\\left(-\\frac{1}{2}\\right)^3 = -\\frac{1}{8}$.',
      },
      {
        heading: 'Negative exponents flip the fraction',
        body: 'A negative exponent means "take the reciprocal, then use the positive power": $\\left(\\frac{a}{b}\\right)^{-n} = \\left(\\frac{b}{a}\\right)^n$. So $\\left(\\frac{3}{5}\\right)^{-2} = \\left(\\frac{5}{3}\\right)^2 = \\frac{25}{9}$. The minus sign in the exponent flips the fraction — it does NOT make the answer negative.',
      },
      {
        heading: 'Powers shrink small fractions',
        body: 'A fraction between $0$ and $1$ gets SMALLER when you raise it to bigger powers: $\\frac{1}{2}$, then $\\frac{1}{4}$, then $\\frac{1}{8}$. Each multiplication takes a fraction of a fraction, so the pieces keep shrinking.',
      },
    ],
    examples: [
      {
        problem: 'Compute $\\left(\\frac{2}{3}\\right)^3$.',
        steps: [
          'The power hits top and bottom: $\\frac{2^3}{3^3}$.',
          'Compute each: $2^3 = 8$ and $3^3 = 27$.',
        ],
        answer: '$\\left(\\frac{2}{3}\\right)^3 = \\frac{8}{27}$',
      },
      {
        problem: 'Compute $\\left(-\\frac{1}{2}\\right)^4$.',
        steps: [
          'Four negative factors: an even number of sign flips, so the result is positive.',
          'The sizes give $\\frac{1^4}{2^4} = \\frac{1}{16}$.',
        ],
        answer: '$\\left(-\\frac{1}{2}\\right)^4 = \\frac{1}{16}$',
      },
      {
        problem: 'Compute $\\left(\\frac{3}{5}\\right)^{-2}$.',
        steps: [
          'The negative exponent flips the fraction: $\\left(\\frac{3}{5}\\right)^{-2} = \\left(\\frac{5}{3}\\right)^2$.',
          'Now apply the positive power: $\\frac{5^2}{3^2} = \\frac{25}{9}$.',
        ],
        answer: '$\\left(\\frac{3}{5}\\right)^{-2} = \\frac{25}{9}$',
      },
    ],
  },
  problems: [
    {
      q: 'Compute $\\left(\\frac{1}{2}\\right)^2$.',
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$1$', '$4$'],
      answer: 0,
      solution: 'Square top and bottom: $\\frac{1^2}{2^2} = \\frac{1}{4}$. Half of a half is a quarter — squaring a fraction below $1$ makes it smaller.',
    },
    {
      q: 'Compute $\\left(\\frac{2}{5}\\right)^2$.',
      choices: ['$\\frac{4}{5}$', '$\\frac{4}{25}$', '$\\frac{2}{25}$', '$\\frac{4}{10}$'],
      answer: 1,
      solution: 'The power hits BOTH layers: $\\frac{2^2}{5^2} = \\frac{4}{25}$. Squaring only the top ($\\frac{4}{5}$) or doubling ($\\frac{4}{10}$) are the traps to dodge.',
    },
    {
      q: 'Compute $\\left(\\frac{1}{3}\\right)^3$.',
      choices: ['$\\frac{1}{27}$', '$\\frac{1}{9}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$'],
      answer: 0,
      solution: 'Cube top and bottom: $\\frac{1^3}{3^3} = \\frac{1}{27}$. A third of a third of a third is a tiny piece!',
    },
    {
      q: 'Compute $\\left(-\\frac{2}{3}\\right)^2$.',
      choices: ['$-\\frac{4}{9}$', '$\\frac{4}{9}$', '$\\frac{4}{6}$', '$-\\frac{4}{3}$'],
      answer: 1,
      solution: 'Two negative factors: the sign flips twice and lands back on positive. The sizes give $\\frac{2^2}{3^2} = \\frac{4}{9}$. An even power of a negative number is always positive.',
    },
    {
      q: 'Compute $\\left(-\\frac{1}{2}\\right)^3$.',
      choices: ['$\\frac{1}{8}$', '$-\\frac{1}{6}$', '$-\\frac{3}{8}$', '$-\\frac{1}{8}$'],
      answer: 3,
      solution: 'Three negative factors: an odd number of flips, so the answer is negative. The sizes give $\\frac{1}{8}$, so the result is $-\\frac{1}{8}$.',
    },
    {
      q: 'Compute $\\left(\\frac{2}{3}\\right)^{-1}$.',
      choices: ['$-\\frac{2}{3}$', '$\\frac{2}{3}$', '$\\frac{3}{2}$', '$-\\frac{3}{2}$'],
      answer: 2,
      solution: 'The exponent $-1$ means "take the reciprocal": $\\left(\\frac{2}{3}\\right)^{-1} = \\frac{3}{2}$. The minus sign in the exponent flips the fraction — the answer stays positive.',
    },
    {
      q: 'Compute $\\left(\\frac{1}{2}\\right)^{-3}$.',
      choices: ['$\\frac{1}{8}$', '$-8$', '$6$', '$8$'],
      answer: 3,
      solution: 'Flip first, then apply the power: $\\left(\\frac{1}{2}\\right)^{-3} = \\left(\\frac{2}{1}\\right)^3 = 2^3 = 8$. Negative exponents never make the answer negative — they flip the fraction instead.',
    },
    {
      q: 'Compute $\\left(\\frac{5}{2}\\right)^2$.',
      choices: ['$\\frac{25}{4}$', '$\\frac{25}{2}$', '$\\frac{10}{4}$', '$\\frac{5}{4}$'],
      answer: 0,
      solution: 'Square both layers: $\\frac{5^2}{2^2} = \\frac{25}{4}$. Since $\\frac{5}{2}$ is bigger than $1$, squaring made it bigger — the opposite of what happens to small fractions.',
    },
    {
      q: 'Compute $\\left(-\\frac{2}{5}\\right)^{-2}$.',
      choices: ['$-\\frac{25}{4}$', '$\\frac{4}{25}$', '$\\frac{25}{4}$', '$-\\frac{4}{25}$'],
      answer: 2,
      solution: 'Flip the fraction: $\\left(-\\frac{5}{2}\\right)^2$. An even power of a negative number is positive, and the sizes give $\\frac{25}{4}$. Two separate sign rules, one calm answer: $\\frac{25}{4}$.',
    },
    {
      q: 'Compute $\\left(\\frac{1}{2}\\right)^2 \\times 2^3$.',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{32}$', '$2$', '$4$'],
      answer: 2,
      solution: 'Work each power: $\\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$ and $2^3 = 8$. Then $\\frac{1}{4} \\times 8 = 2$. Two of the halvings undo two of the doublings, and one doubling survives.',
    },
  ],
}

const s45 = {
  id: '4.5',
  title: 'Simplest Form of a Fraction',
  learn: {
    concepts: [
      {
        heading: 'Why simplifying is legal',
        body: 'Dividing the top and bottom by the same number is really dividing the whole fraction by $\\frac{c}{c} = 1$ — and dividing by $1$ changes nothing. That is why $\\frac{10}{15}$ and $\\frac{2}{3}$ are the exact same number wearing different outfits.',
      },
      {
        heading: 'Divide out common factors',
        body: 'To simplify, find a factor the top and bottom share, and divide both by it. You can do it in steps: $\\frac{18}{24}$ becomes $\\frac{9}{12}$ (divide by $2$), then $\\frac{3}{4}$ (divide by $3$). Keep going until nothing is shared.',
      },
      {
        heading: 'Prime factorization finds everything',
        body: 'For big numbers, break the top and bottom into primes and cancel every matching pair. In $\\frac{84}{126}$, we have $84 = 2^2 \\times 3 \\times 7$ and $126 = 2 \\times 3^2 \\times 7$. Cancel one $2$, one $3$, and one $7$ from each: what survives is $\\frac{2}{3}$.',
      },
      {
        heading: 'How to spot simplest form',
        body: 'A fraction is in simplest form (or lowest terms) when the top and bottom share no factor bigger than $1$. So $\\frac{8}{15}$ is fully reduced ($8 = 2^3$ and $15 = 3 \\times 5$ share nothing), but $\\frac{8}{14}$ is not — both are even.',
      },
    ],
    examples: [
      {
        problem: 'Simplify $\\frac{18}{24}$.',
        steps: [
          'Both numbers are even, so divide both by $2$: $\\frac{18}{24} = \\frac{9}{12}$.',
          'Now $9$ and $12$ share a factor of $3$: divide both by $3$ to get $\\frac{3}{4}$.',
          'The numbers $3$ and $4$ share no factor bigger than $1$, so we are done.',
        ],
        answer: '$\\frac{18}{24} = \\frac{3}{4}$',
      },
      {
        problem: 'Use prime factorization to simplify $\\frac{84}{126}$.',
        steps: [
          'Factor each number: $84 = 2 \\times 2 \\times 3 \\times 7$ and $126 = 2 \\times 3 \\times 3 \\times 7$.',
          'Cancel the matching primes: one $2$, one $3$, and one $7$ from top and bottom.',
          'What survives: a $2$ on top and a $3$ below.',
        ],
        answer: '$\\frac{84}{126} = \\frac{2}{3}$',
      },
      {
        problem: 'Is $\\frac{35}{54}$ in simplest form?',
        steps: [
          'Factor both: $35 = 5 \\times 7$ and $54 = 2 \\times 3^3$.',
          'The lists share no prime at all, so no cancellation is possible.',
        ],
        answer: 'Yes — $\\frac{35}{54}$ is already in simplest form',
      },
    ],
  },
  problems: [
    {
      q: 'Simplify $\\frac{6}{8}$.',
      choices: ['$\\frac{2}{3}$', '$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{3}{8}$'],
      answer: 1,
      solution: 'Both $6$ and $8$ are divisible by $2$: dividing top and bottom by $2$ gives $\\frac{3}{4}$. Since $3$ and $4$ share no common factor, we are done.',
    },
    {
      q: 'Dividing the top and bottom of $\\frac{10}{15}$ by $5$ gives $\\frac{2}{3}$. Why is this allowed?',
      choices: ['Because we are dividing the fraction by $\\frac{5}{5} = 1$, which changes nothing', 'Because $5$ is a prime number', 'Because subtracting the same number from top and bottom is always allowed', 'Because it makes the fraction smaller'],
      answer: 0,
      solution: 'Dividing top and bottom by $5$ is dividing the whole fraction by $\\frac{5}{5}$, which equals $1$ — and dividing by $1$ never changes a number. The value stays the same; only the outfit changes. (Subtracting the same number from top and bottom DOES change the value — that move is not allowed!)',
    },
    {
      q: 'Simplify $\\frac{10}{25}$.',
      choices: ['$\\frac{1}{5}$', '$\\frac{1}{2}$', '$\\frac{2}{5}$', '$\\frac{5}{2}$'],
      answer: 2,
      solution: 'The shared factor is $5$: dividing top and bottom by $5$ gives $\\frac{2}{5}$. Now $2$ and $5$ share nothing, so this is simplest form.',
    },
    {
      q: 'Which of these fractions is already in simplest form?',
      choices: ['$\\frac{9}{12}$', '$\\frac{6}{9}$', '$\\frac{10}{4}$', '$\\frac{8}{15}$'],
      answer: 3,
      solution: 'Check for shared factors: $9$ and $12$ share $3$; $6$ and $9$ share $3$; $10$ and $4$ share $2$. But $8 = 2^3$ and $15 = 3 \\times 5$ share no factor bigger than $1$, so $\\frac{8}{15}$ is fully reduced.',
    },
    {
      q: 'Simplify $\\frac{24}{36}$.',
      choices: ['$\\frac{2}{3}$', '$\\frac{3}{4}$', '$\\frac{4}{9}$', '$\\frac{1}{2}$'],
      answer: 0,
      solution: 'The biggest shared factor of $24$ and $36$ is $12$: dividing both by $12$ gives $\\frac{2}{3}$. Step by step works too: divide by $2$ to get $\\frac{12}{18}$, by $2$ again for $\\frac{6}{9}$, then by $3$ for $\\frac{2}{3}$.',
    },
    {
      q: 'Simplify $\\frac{45}{60}$.',
      choices: ['$\\frac{2}{3}$', '$\\frac{3}{4}$', '$\\frac{4}{5}$', '$\\frac{5}{6}$'],
      answer: 1,
      solution: 'Both numbers are divisible by $15$: $45 \\div 15 = 3$ and $60 \\div 15 = 4$, so $\\frac{45}{60} = \\frac{3}{4}$. If you only spotted the factor $5$ first, that is fine: $\\frac{9}{12}$ still simplifies to $\\frac{3}{4}$.',
    },
    {
      q: 'Use prime factorization to simplify $\\frac{42}{70}$.',
      choices: ['$\\frac{2}{5}$', '$\\frac{3}{7}$', '$\\frac{3}{5}$', '$\\frac{5}{3}$'],
      answer: 2,
      solution: 'Factor: $42 = 2 \\times 3 \\times 7$ and $70 = 2 \\times 5 \\times 7$. Cancel the shared $2$ and $7$: a $3$ survives on top and a $5$ below, giving $\\frac{3}{5}$.',
    },
    {
      q: 'Marco simplified $\\frac{16}{24}$ by dividing top and bottom by $4$, getting $\\frac{4}{6}$. What should he do next?',
      choices: ['Divide top and bottom by $2$ to get $\\frac{2}{3}$', 'Nothing — $\\frac{4}{6}$ is in simplest form', 'Divide top and bottom by $4$ again', 'Subtract $1$ from the top and bottom'],
      answer: 0,
      solution: 'Simplifying is not done until the top and bottom share nothing — and $4$ and $6$ are both even! One more division by $2$ gives $\\frac{2}{3}$, which is fully reduced. Dividing by $4$ again is impossible ($6$ is not a multiple of $4$), and subtracting changes the value.',
    },
    {
      q: 'Simplify $\\frac{2^3 \\times 3 \\times 5}{2 \\times 3^2 \\times 5}$.',
      choices: ['$\\frac{3}{4}$', '$\\frac{2}{3}$', '$\\frac{4}{9}$', '$\\frac{4}{3}$'],
      answer: 3,
      solution: 'Cancel matching primes: one $2$, one $3$, and the $5$ disappear from both layers. On top, $2^3$ loses one $2$ and leaves $2^2 = 4$; below, $3^2$ loses one $3$ and leaves $3$. The answer is $\\frac{4}{3}$ — the factorizations did all the work.',
    },
    {
      q: 'A class has $12$ girls and $18$ boys. What fraction of the whole class is girls, in simplest form?',
      choices: ['$\\frac{2}{3}$', '$\\frac{2}{5}$', '$\\frac{3}{5}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution: 'The whole class has $12 + 18 = 30$ students, so girls make up $\\frac{12}{30}$. Divide top and bottom by $6$: $\\frac{2}{5}$. (Careful: $\\frac{12}{18} = \\frac{2}{3}$ compares girls to BOYS, not girls to the whole class.)',
    },
  ],
}

const s46 = {
  id: '4.6',
  title: 'Comparing Fractions',
  learn: {
    concepts: [
      {
        heading: 'Same bottom, or same top',
        body: 'With the same denominator, more pieces means more pizza: $\\frac{5}{7} > \\frac{3}{7}$. With the same numerator, it flips: $\\frac{1}{5} > \\frac{1}{8}$, because cutting a whole into fewer parts makes each part bigger.',
      },
      {
        heading: 'Make the denominators match',
        body: 'To compare fractions with different bottoms, rewrite them over a common denominator. To compare $\\frac{2}{3}$ and $\\frac{3}{4}$, use $12$: they become $\\frac{8}{12}$ and $\\frac{9}{12}$, so $\\frac{3}{4}$ is bigger.',
      },
      {
        heading: 'The cross-multiplying shortcut',
        body: 'To compare $\\frac{a}{b}$ and $\\frac{c}{d}$, compare $a \\times d$ with $b \\times c$. This works because both products are the numerators you would get over the common denominator $b \\times d$. Bigger cross-product, bigger fraction — just always multiply upward and diagonally.',
      },
      {
        heading: 'Benchmarks: compare to $\\frac{1}{2}$ and $1$',
        body: 'Quick checks save work! A fraction beats $\\frac{1}{2}$ when its top is more than half its bottom, and it beats $1$ when the top is bigger than the bottom. Knowing that $\\frac{2}{5}$ is below $\\frac{1}{2}$ while $\\frac{5}{8}$ is above settles the race without any common denominators.',
      },
    ],
    examples: [
      {
        problem: 'Which is bigger: $\\frac{5}{8}$ or $\\frac{7}{12}$?',
        steps: [
          'The denominators $8$ and $12$ both fit into $24$, so rewrite both fractions over $24$.',
          '$\\frac{5}{8} = \\frac{15}{24}$ and $\\frac{7}{12} = \\frac{14}{24}$.',
          'Now the tops decide: $15 > 14$.',
        ],
        answer: '$\\frac{5}{8}$ is bigger than $\\frac{7}{12}$',
      },
      {
        problem: 'Use cross-multiplication to compare $\\frac{4}{7}$ and $\\frac{3}{5}$.',
        steps: [
          'Cross-multiply: $4 \\times 5 = 20$ goes with $\\frac{4}{7}$, and $7 \\times 3 = 21$ goes with $\\frac{3}{5}$.',
          'Since $20 < 21$, the first fraction is smaller.',
        ],
        answer: '$\\frac{4}{7} < \\frac{3}{5}$',
      },
      {
        problem: 'Order $\\frac{2}{5}$, $\\frac{5}{8}$, and $\\frac{1}{2}$ from least to greatest.',
        steps: [
          'Compare each to the benchmark $\\frac{1}{2}$: for $\\frac{2}{5}$, twice the top is $4 < 5$, so it is below $\\frac{1}{2}$.',
          'For $\\frac{5}{8}$, twice the top is $10 > 8$, so it is above $\\frac{1}{2}$.',
          'The benchmark itself sits in the middle.',
        ],
        answer: '$\\frac{2}{5} < \\frac{1}{2} < \\frac{5}{8}$',
      },
    ],
  },
  problems: [
    {
      q: 'Which is bigger: $\\frac{3}{7}$ or $\\frac{5}{7}$?',
      choices: ['$\\frac{3}{7}$', 'They are equal', '$\\frac{5}{7}$', 'It depends on the whole'],
      answer: 2,
      solution: 'The pieces are the same size (sevenths), so more pieces means more: $\\frac{5}{7} > \\frac{3}{7}$. Same denominator — just compare the tops.',
    },
    {
      q: 'Which is bigger: $\\frac{1}{5}$ or $\\frac{1}{8}$?',
      choices: ['$\\frac{1}{5}$', '$\\frac{1}{8}$', 'They are equal', 'Impossible to tell'],
      answer: 0,
      solution: 'Cutting a whole into $5$ parts makes bigger pieces than cutting it into $8$ parts. So $\\frac{1}{5} > \\frac{1}{8}$ — with matching tops, the SMALLER denominator wins.',
    },
    {
      q: 'Which is bigger: $\\frac{2}{3}$ or $\\frac{3}{4}$?',
      choices: ['$\\frac{2}{3}$', 'They are equal', 'Impossible to tell', '$\\frac{3}{4}$'],
      answer: 3,
      solution: 'Rewrite over the common denominator $12$: $\\frac{2}{3} = \\frac{8}{12}$ and $\\frac{3}{4} = \\frac{9}{12}$. Since $9 > 8$, we get $\\frac{3}{4} > \\frac{2}{3}$.',
    },
    {
      q: 'Which of these fractions is greater than $1$?',
      choices: ['$\\frac{7}{8}$', '$\\frac{9}{8}$', '$\\frac{8}{8}$', '$\\frac{8}{9}$'],
      answer: 1,
      solution: 'A fraction beats $1$ exactly when its top is bigger than its bottom. Only $\\frac{9}{8}$ qualifies: $\\frac{8}{8} = 1$ exactly, and the other two are below $1$.',
    },
    {
      q: 'Use cross-multiplication to decide which is bigger: $\\frac{5}{9}$ or $\\frac{4}{7}$.',
      choices: ['$\\frac{5}{9}$', 'They are equal', '$\\frac{4}{7}$', 'Cross-multiplication cannot decide this'],
      answer: 2,
      solution: 'Cross-multiply: $5 \\times 7 = 35$ goes with $\\frac{5}{9}$, and $9 \\times 4 = 36$ goes with $\\frac{4}{7}$. Since $36 > 35$, the winner is $\\frac{4}{7}$. These products are just the tops over the common denominator $63$: $\\frac{35}{63}$ versus $\\frac{36}{63}$.',
    },
    {
      q: 'Which of these fractions is less than $\\frac{1}{2}$?',
      choices: ['$\\frac{4}{9}$', '$\\frac{5}{9}$', '$\\frac{7}{12}$', '$\\frac{8}{15}$'],
      answer: 0,
      solution: 'A fraction is below $\\frac{1}{2}$ when twice its top is less than its bottom. Check: $2 \\times 4 = 8 < 9$. ✓ The others fail: $10 > 9$, $14 > 12$, and $16 > 15$, so they are all above $\\frac{1}{2}$.',
    },
    {
      q: 'Which is bigger: $\\frac{7}{8}$ or $\\frac{8}{9}$?',
      choices: ['$\\frac{7}{8}$', '$\\frac{8}{9}$', 'They are equal', 'Neither — both are greater than $1$'],
      answer: 1,
      solution: 'Each fraction is exactly one piece short of $1$: $\\frac{7}{8}$ is missing $\\frac{1}{8}$, and $\\frac{8}{9}$ is missing $\\frac{1}{9}$. Since $\\frac{1}{9}$ is the smaller gap, $\\frac{8}{9}$ sits closer to $1$ — so it is bigger.',
    },
    {
      q: 'Which list orders $\\frac{2}{3}$, $\\frac{1}{2}$, and $\\frac{3}{5}$ from least to greatest?',
      choices: ['$\\frac{2}{3} < \\frac{3}{5} < \\frac{1}{2}$', '$\\frac{1}{2} < \\frac{2}{3} < \\frac{3}{5}$', '$\\frac{3}{5} < \\frac{1}{2} < \\frac{2}{3}$', '$\\frac{1}{2} < \\frac{3}{5} < \\frac{2}{3}$'],
      answer: 3,
      solution: 'Rewrite all three over the common denominator $30$: $\\frac{1}{2} = \\frac{15}{30}$, $\\frac{3}{5} = \\frac{18}{30}$, $\\frac{2}{3} = \\frac{20}{30}$. The tops line up as $15 < 18 < 20$, so $\\frac{1}{2} < \\frac{3}{5} < \\frac{2}{3}$.',
    },
    {
      q: 'Which of these four fractions is the largest: $\\frac{5}{6}$, $\\frac{7}{9}$, $\\frac{11}{18}$, or $\\frac{2}{3}$?',
      choices: ['$\\frac{5}{6}$', '$\\frac{7}{9}$', '$\\frac{11}{18}$', '$\\frac{2}{3}$'],
      answer: 0,
      solution: 'All four denominators fit into $18$: the fractions become $\\frac{15}{18}$, $\\frac{14}{18}$, $\\frac{11}{18}$, and $\\frac{12}{18}$. The biggest top is $15$, so $\\frac{5}{6}$ wins.',
    },
    {
      q: 'Which fraction lies between $\\frac{1}{3}$ and $\\frac{1}{2}$?',
      choices: ['$\\frac{1}{4}$', '$\\frac{3}{5}$', '$\\frac{5}{12}$', '$\\frac{7}{12}$'],
      answer: 2,
      solution: 'Rewrite the fences over $12$: $\\frac{1}{3} = \\frac{4}{12}$ and $\\frac{1}{2} = \\frac{6}{12}$. The fraction $\\frac{5}{12}$ slides right between them. The others miss: $\\frac{1}{4} < \\frac{1}{3}$, while $\\frac{3}{5}$ and $\\frac{7}{12}$ are both above $\\frac{1}{2}$.',
    },
  ],
}

const s47 = {
  id: '4.7',
  title: 'Adding and Subtracting Fractions',
  learn: {
    concepts: [
      {
        heading: 'Same-size pieces add easily',
        body: 'When denominators match, just add the tops and keep the bottom: $\\frac{2}{7} + \\frac{3}{7} = \\frac{5}{7}$. Two sevenths plus three sevenths is five sevenths — like $2$ apples plus $3$ apples. NEVER add the bottoms: the piece size does not change!',
      },
      {
        heading: 'Different bottoms? Make them match',
        body: 'To add $\\frac{1}{6} + \\frac{3}{4}$, first rewrite both with a common denominator. Any common multiple works, but the least common multiple (LCM) keeps numbers smallest: here it is $12$, giving $\\frac{2}{12} + \\frac{9}{12} = \\frac{11}{12}$.',
      },
      {
        heading: 'Subtraction plays by the same rules',
        body: 'Match the denominators, then subtract the tops: $\\frac{5}{6} - \\frac{1}{4} = \\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$. Same piece size, fewer pieces.',
      },
      {
        heading: 'Three or more fractions',
        body: 'For a sum like $\\frac{1}{4} + \\frac{1}{3} + \\frac{1}{6}$, find one denominator that all three bottoms divide — the LCM of the whole crew. Then convert everything at once and add the tops. Finish every problem by simplifying your answer.',
      },
    ],
    examples: [
      {
        problem: 'Compute $\\frac{3}{8} + \\frac{1}{8}$.',
        steps: [
          'The pieces are already the same size (eighths), so add the tops: $3 + 1 = 4$.',
          'That gives $\\frac{4}{8}$ — but always simplify! Divide top and bottom by $4$.',
        ],
        answer: '$\\frac{3}{8} + \\frac{1}{8} = \\frac{1}{2}$',
      },
      {
        problem: 'Compute $\\frac{1}{6} + \\frac{3}{4}$.',
        steps: [
          'The LCM of $6$ and $4$ is $12$, so rewrite both fractions in twelfths.',
          '$\\frac{1}{6} = \\frac{2}{12}$ and $\\frac{3}{4} = \\frac{9}{12}$.',
          'Add the tops: $\\frac{2}{12} + \\frac{9}{12} = \\frac{11}{12}$.',
        ],
        answer: '$\\frac{1}{6} + \\frac{3}{4} = \\frac{11}{12}$',
      },
      {
        problem: 'Compute $\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6}$.',
        steps: [
          'The LCM of $2$, $3$, and $6$ is $6$: rewrite everything in sixths.',
          '$\\frac{1}{2} = \\frac{3}{6}$ and $\\frac{1}{3} = \\frac{2}{6}$, so the sum is $\\frac{3}{6} + \\frac{2}{6} + \\frac{1}{6}$.',
          'The tops give $3 + 2 + 1 = 6$, so the total is $\\frac{6}{6} = 1$ — a perfect whole!',
        ],
        answer: '$\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = 1$',
      },
    ],
  },
  problems: [
    {
      q: 'Compute $\\frac{2}{7} + \\frac{3}{7}$.',
      choices: ['$\\frac{5}{7}$', '$\\frac{5}{14}$', '$\\frac{6}{7}$', '$\\frac{1}{7}$'],
      answer: 0,
      solution: 'The pieces are all sevenths, so add the tops: $2 + 3 = 5$, giving $\\frac{5}{7}$. The denominator stays $7$ — the piece size never changes when you add. Choosing $\\frac{5}{14}$ means the bottoms got added too, which shrinks the pieces by mistake.',
    },
    {
      q: 'Compute $\\frac{5}{9} - \\frac{2}{9}$.',
      choices: ['$\\frac{1}{9}$', '$\\frac{7}{9}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution: 'Same-size pieces: subtract the tops to get $\\frac{3}{9}$. Then simplify by dividing top and bottom by $3$: $\\frac{3}{9} = \\frac{1}{3}$.',
    },
    {
      q: 'Compute $\\frac{1}{2} + \\frac{1}{4}$.',
      choices: ['$\\frac{2}{6}$', '$\\frac{3}{4}$', '$\\frac{1}{2}$', '$\\frac{5}{4}$'],
      answer: 1,
      solution: 'Rewrite $\\frac{1}{2}$ as $\\frac{2}{4}$, then add same-size pieces: $\\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$. (Adding straight across to get $\\frac{2}{6}$ is the classic trap — the denominators must match first!)',
    },
    {
      q: 'Compute $\\frac{2}{3} + \\frac{1}{6}$.',
      choices: ['$\\frac{3}{9}$', '$\\frac{1}{2}$', '$\\frac{7}{6}$', '$\\frac{5}{6}$'],
      answer: 3,
      solution: 'The LCM of $3$ and $6$ is $6$: rewrite $\\frac{2}{3} = \\frac{4}{6}$. Then $\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$.',
    },
    {
      q: 'Compute $\\frac{3}{4} + \\frac{2}{5}$.',
      choices: ['$\\frac{23}{20}$', '$\\frac{5}{9}$', '$1$', '$\\frac{13}{20}$'],
      answer: 0,
      solution: 'The LCM of $4$ and $5$ is $20$: $\\frac{3}{4} = \\frac{15}{20}$ and $\\frac{2}{5} = \\frac{8}{20}$. Add the tops: $15 + 8 = 23$, so the sum is $\\frac{23}{20}$ — a bit more than $1$, which makes sense since both fractions are around a half or more.',
    },
    {
      q: 'Compute $\\frac{5}{6} - \\frac{3}{8}$.',
      choices: ['$1$', '$\\frac{1}{2}$', '$\\frac{11}{24}$', '$\\frac{13}{24}$'],
      answer: 2,
      solution: 'The LCM of $6$ and $8$ is $24$: $\\frac{5}{6} = \\frac{20}{24}$ and $\\frac{3}{8} = \\frac{9}{24}$. Subtract the tops: $20 - 9 = 11$, giving $\\frac{11}{24}$.',
    },
    {
      q: 'Compute $\\frac{1}{4} + \\frac{1}{3} + \\frac{1}{6}$.',
      choices: ['$\\frac{3}{13}$', '$1$', '$\\frac{2}{3}$', '$\\frac{3}{4}$'],
      answer: 3,
      solution: 'The LCM of $4$, $3$, and $6$ is $12$: the fractions become $\\frac{3}{12} + \\frac{4}{12} + \\frac{2}{12}$. The tops sum to $9$, giving $\\frac{9}{12}$, which simplifies to $\\frac{3}{4}$.',
    },
    {
      q: 'Mia ate $\\frac{1}{4}$ of a pizza and her brother ate $\\frac{3}{8}$ of the same pizza. What fraction of the pizza did they eat together?',
      choices: ['$\\frac{1}{2}$', '$\\frac{5}{8}$', '$\\frac{1}{3}$', '$\\frac{7}{8}$'],
      answer: 1,
      solution: 'Rewrite in eighths: $\\frac{1}{4} = \\frac{2}{8}$. Together they ate $\\frac{2}{8} + \\frac{3}{8} = \\frac{5}{8}$ of the pizza — leaving $\\frac{3}{8}$ for later!',
    },
    {
      q: 'Compute $\\frac{7}{10} + \\frac{8}{15}$.',
      choices: ['$\\frac{37}{30}$', '$\\frac{3}{5}$', '$\\frac{7}{6}$', '$\\frac{41}{30}$'],
      answer: 0,
      solution: 'The LCM of $10$ and $15$ is $30$ (no need for $150$!): $\\frac{7}{10} = \\frac{21}{30}$ and $\\frac{8}{15} = \\frac{16}{30}$. Add the tops: $21 + 16 = 37$, so the sum is $\\frac{37}{30}$.',
    },
    {
      q: 'What must be added to $\\frac{5}{12}$ to make $\\frac{3}{4}$?',
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{7}{12}$', '$\\frac{2}{3}$'],
      answer: 1,
      solution: 'The missing piece is a subtraction: $\\frac{3}{4} - \\frac{5}{12}$. Rewrite $\\frac{3}{4} = \\frac{9}{12}$, so the gap is $\\frac{9}{12} - \\frac{5}{12} = \\frac{4}{12} = \\frac{1}{3}$. Check: $\\frac{5}{12} + \\frac{4}{12} = \\frac{9}{12} = \\frac{3}{4}$. ✓',
    },
  ],
}

const s48 = {
  id: '4.8',
  title: 'Mixed Numbers',
  learn: {
    concepts: [
      {
        heading: 'A whole plus a fraction',
        body: 'A mixed number is a hidden addition: $2\\frac{3}{4}$ means $2 + \\frac{3}{4}$. It names a point past $2$ but not yet at $3$ — two whole pizzas and three quarters of another.',
      },
      {
        heading: 'Mixed to improper: wholes become pieces',
        body: 'To convert $3\\frac{2}{5}$, break each whole into fifths: $3$ wholes make $3 \\times 5 = 15$ fifths, plus the $2$ extra fifths gives $\\frac{17}{5}$. The quick rule: multiply the whole by the denominator, add the numerator, keep the denominator.',
      },
      {
        heading: 'Improper to mixed: divide with remainder',
        body: 'To convert $\\frac{23}{6}$, divide: $23 \\div 6 = 3$ remainder $5$. The quotient is the whole number and the remainder stays on top: $\\frac{23}{6} = 3\\frac{5}{6}$.',
      },
      {
        heading: 'Multiplying? Convert first!',
        body: 'To multiply mixed numbers, ALWAYS convert to improper fractions first: $2\\frac{1}{2} \\times 1\\frac{1}{3} = \\frac{5}{2} \\times \\frac{4}{3}$. Multiplying the whole parts and fraction parts separately misses the cross pieces and gives a wrong (too small) answer. Adding is friendlier: you may add wholes and fractions separately, carrying if the fractions total more than $1$.',
      },
    ],
    examples: [
      {
        problem: 'Convert $3\\frac{2}{5}$ to an improper fraction.',
        steps: [
          'Each whole is $5$ fifths, so $3$ wholes are $3 \\times 5 = 15$ fifths.',
          'Add the $2$ extra fifths: $15 + 2 = 17$ fifths in all.',
        ],
        answer: '$3\\frac{2}{5} = \\frac{17}{5}$',
      },
      {
        problem: 'Convert $\\frac{23}{6}$ to a mixed number.',
        steps: [
          'Divide: $23 \\div 6 = 3$ with remainder $5$, since $3 \\times 6 = 18$ and $23 - 18 = 5$.',
          'The quotient $3$ is the whole part; the remainder $5$ stays over $6$.',
        ],
        answer: '$\\frac{23}{6} = 3\\frac{5}{6}$',
      },
      {
        problem: 'Compute $2\\frac{1}{2} \\times 1\\frac{1}{3}$.',
        steps: [
          'Convert both to improper fractions: $2\\frac{1}{2} = \\frac{5}{2}$ and $1\\frac{1}{3} = \\frac{4}{3}$.',
          'Multiply: $\\frac{5}{2} \\times \\frac{4}{3} = \\frac{20}{6}$, and cancel to get $\\frac{10}{3}$.',
          'Convert back: $10 \\div 3 = 3$ remainder $1$, so the product is $3\\frac{1}{3}$.',
        ],
        answer: '$2\\frac{1}{2} \\times 1\\frac{1}{3} = 3\\frac{1}{3}$',
      },
    ],
  },
  problems: [
    {
      q: 'Convert $2\\frac{1}{4}$ to an improper fraction.',
      choices: ['$\\frac{3}{4}$', '$\\frac{7}{4}$', '$\\frac{9}{4}$', '$\\frac{6}{4}$'],
      answer: 2,
      solution: 'Each whole is $4$ quarters, so $2$ wholes are $8$ quarters. Add the extra quarter: $8 + 1 = 9$ quarters, giving $\\frac{9}{4}$. Quick rule: $2 \\times 4 + 1 = 9$ over the same denominator.',
    },
    {
      q: 'Convert $\\frac{17}{5}$ to a mixed number.',
      choices: ['$3\\frac{2}{5}$', '$2\\frac{2}{5}$', '$3\\frac{1}{5}$', '$3\\frac{3}{5}$'],
      answer: 0,
      solution: 'Divide: $17 \\div 5 = 3$ remainder $2$, since $3 \\times 5 = 15$ and $17 - 15 = 2$. The whole part is $3$ and the leftover $2$ fifths ride on top: $3\\frac{2}{5}$.',
    },
    {
      q: 'The mixed number $5\\frac{2}{3}$ means the same as which expression?',
      choices: ['$5 \\times \\frac{2}{3}$', '$5 - \\frac{2}{3}$', '$\\frac{52}{3}$', '$5 + \\frac{2}{3}$'],
      answer: 3,
      solution: 'A mixed number is a hidden addition: $5\\frac{2}{3} = 5 + \\frac{2}{3}$ — five wholes and two thirds more. It is NOT a multiplication, even though the numbers sit side by side.',
    },
    {
      q: 'Compute $1\\frac{1}{2} + 2\\frac{1}{4}$.',
      choices: ['$3\\frac{3}{4}$', '$3\\frac{1}{3}$', '$3\\frac{1}{2}$', '$4$'],
      answer: 0,
      solution: 'Add the wholes: $1 + 2 = 3$. Add the fractions with a common denominator: $\\frac{1}{2} + \\frac{1}{4} = \\frac{2}{4} + \\frac{1}{4} = \\frac{3}{4}$. Together: $3\\frac{3}{4}$.',
    },
    {
      q: 'Compute $3\\frac{1}{2} \\times 2$.',
      choices: ['$6\\frac{1}{2}$', '$7$', '$6$', '$7\\frac{1}{2}$'],
      answer: 1,
      solution: 'Convert first: $3\\frac{1}{2} = \\frac{7}{2}$, and $\\frac{7}{2} \\times 2 = 7$. Or double each part: two $3$s make $6$, and two halves make $1$ more — total $7$. Multiplying only the whole part gives $6\\frac{1}{2}$, which forgets to double the half!',
    },
    {
      q: 'Compute $4\\frac{1}{5} - 1\\frac{3}{5}$.',
      choices: ['$3\\frac{2}{5}$', '$2\\frac{2}{5}$', '$2\\frac{3}{5}$', '$3\\frac{3}{5}$'],
      answer: 2,
      solution: 'Convert to improper fractions: $4\\frac{1}{5} = \\frac{21}{5}$ and $1\\frac{3}{5} = \\frac{8}{5}$. Subtract: $\\frac{21}{5} - \\frac{8}{5} = \\frac{13}{5} = 2\\frac{3}{5}$. (Subtracting parts separately hits trouble here: $\\frac{1}{5}$ is smaller than $\\frac{3}{5}$, so you must borrow a whole — converting first dodges that headache.)',
    },
    {
      q: 'Compute $1\\frac{1}{2} \\times 2\\frac{2}{3}$.',
      choices: ['$2\\frac{1}{3}$', '$4$', '$3\\frac{1}{2}$', '$4\\frac{2}{3}$'],
      answer: 1,
      solution: 'Convert first: $\\frac{3}{2} \\times \\frac{8}{3}$. The $3$s cancel and $\\frac{8}{2} = 4$. The trap answer $2\\frac{1}{3}$ comes from multiplying wholes ($1 \\times 2$) and fractions ($\\frac{1}{2} \\times \\frac{2}{3}$) separately — that misses the cross pieces and comes out too small.',
    },
    {
      q: 'Compute $5\\frac{1}{4} + 2\\frac{5}{6}$.',
      choices: ['$7\\frac{3}{5}$', '$7\\frac{1}{12}$', '$8\\frac{1}{6}$', '$8\\frac{1}{12}$'],
      answer: 3,
      solution: 'Wholes: $5 + 2 = 7$. Fractions over the LCM $12$: $\\frac{3}{12} + \\frac{10}{12} = \\frac{13}{12} = 1\\frac{1}{12}$. The fraction part overflowed past $1$, so carry the whole: $7 + 1\\frac{1}{12} = 8\\frac{1}{12}$.',
    },
    {
      q: 'A board is $10\\frac{1}{2}$ feet long. How many pieces of length $1\\frac{3}{4}$ feet can be cut from it?',
      choices: ['$5$', '$7$', '$6$', '$12$'],
      answer: 2,
      solution: 'We need $10\\frac{1}{2} \\div 1\\frac{3}{4}$. Convert: $\\frac{21}{2} \\div \\frac{7}{4} = \\frac{21}{2} \\times \\frac{4}{7}$. Cancel the $7$ with the $21$ and the $2$ with the $4$: $3 \\times 2 = 6$ pieces, with nothing wasted.',
    },
    {
      q: 'Compute $\\left(1\\frac{1}{2}\\right)^2$.',
      choices: ['$2\\frac{1}{4}$', '$1\\frac{1}{4}$', '$3$', '$2\\frac{1}{2}$'],
      answer: 0,
      solution: 'Convert first: $1\\frac{1}{2} = \\frac{3}{2}$, so the square is $\\frac{9}{4} = 2\\frac{1}{4}$. Squaring the parts separately gives $1 + \\frac{1}{4} = 1\\frac{1}{4}$ — too small, because it drops the cross pieces. Converting first never lies!',
    },
  ],
}

const challenge = [
  {
    q: 'The space from $0$ to $3$ is split into $12$ equal hops. What number is at the $7$th tick mark after $0$?',
    choices: ['$\\frac{7}{12}$', '$\\frac{7}{4}$', '$\\frac{7}{3}$', '$\\frac{12}{7}$'],
    answer: 1,
    solution: 'Twelve hops cover a distance of $3$, so each hop is $3 \\div 12 = \\frac{1}{4}$. Seven hops reach $\\frac{7}{4}$. (The hops are quarters, not twelfths — the line runs to $3$, not $1$!)',
  },
  {
    q: 'Compute $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\cdots \\times \\frac{9}{10}$.',
    choices: ['$\\frac{9}{10}$', '$\\frac{1}{2}$', '$\\frac{1}{9}$', '$\\frac{1}{10}$'],
    answer: 3,
    solution: 'The chain telescopes: every number from $2$ through $9$ appears once on top and once on the bottom, so they all cancel. Only the $1$ from the first top and the $10$ from the last bottom survive: $\\frac{1}{10}$.',
  },
  {
    q: 'Compute $\\frac{3}{4} \\div \\frac{9}{16}$.',
    choices: ['$\\frac{4}{3}$', '$\\frac{27}{64}$', '$\\frac{3}{2}$', '$\\frac{2}{3}$'],
    answer: 0,
    solution: 'Flip the divisor and multiply: $\\frac{3}{4} \\times \\frac{16}{9}$. Cancel: the $3$ into the $9$ leaves $3$ below, and the $4$ into the $16$ leaves $4$ on top. Result: $\\frac{4}{3}$. Forgetting to flip gives $\\frac{27}{64}$ — the classic slip.',
  },
  {
    q: 'Compute $\\left(-\\frac{3}{2}\\right)^{-3}$.',
    choices: ['$\\frac{8}{27}$', '$-\\frac{27}{8}$', '$-\\frac{8}{27}$', '$\\frac{27}{8}$'],
    answer: 2,
    solution: 'The negative exponent flips the fraction: $\\left(-\\frac{2}{3}\\right)^3$. Now an odd power of a negative number is negative, and the sizes give $\\frac{8}{27}$. Final answer: $-\\frac{8}{27}$. Remember: the minus in the exponent flips; the minus in the base decides the sign.',
  },
  {
    q: 'Simplify $\\frac{2^5 \\times 3}{2^2 \\times 3^2}$.',
    choices: ['$\\frac{3}{8}$', '$\\frac{8}{3}$', '$\\frac{4}{3}$', '$\\frac{8}{9}$'],
    answer: 1,
    solution: 'Cancel matching primes: two $2$s and one $3$ leave from each layer. On top, $2^5$ drops to $2^3 = 8$; below, $3^2$ drops to $3$. The fraction is $\\frac{8}{3}$.',
  },
  {
    q: 'Which of these four fractions is the largest: $\\frac{7}{12}$, $\\frac{5}{8}$, $\\frac{3}{5}$, or $\\frac{13}{24}$?',
    choices: ['$\\frac{5}{8}$', '$\\frac{7}{12}$', '$\\frac{3}{5}$', '$\\frac{13}{24}$'],
    answer: 0,
    solution: 'A common denominator for all four is $120$: the fractions become $\\frac{70}{120}$, $\\frac{75}{120}$, $\\frac{72}{120}$, and $\\frac{65}{120}$. The biggest top is $75$, so $\\frac{5}{8}$ is the largest. All four hover just above $\\frac{1}{2}$, so benchmarks alone cannot break this tie — the common denominator settles it.',
  },
  {
    q: 'Compute $\\frac{5}{6} + \\frac{3}{4} - \\frac{7}{12}$.',
    choices: ['$\\frac{11}{12}$', '$\\frac{13}{12}$', '$\\frac{1}{2}$', '$1$'],
    answer: 3,
    solution: 'The LCM of $6$, $4$, and $12$ is $12$: the expression becomes $\\frac{10}{12} + \\frac{9}{12} - \\frac{7}{12}$. The tops give $10 + 9 - 7 = 12$, so the total is $\\frac{12}{12} = 1$ exactly.',
  },
  {
    q: 'Compute $3\\frac{1}{3} \\times 2\\frac{1}{4}$.',
    choices: ['$6\\frac{1}{12}$', '$8$', '$7\\frac{1}{2}$', '$6\\frac{3}{4}$'],
    answer: 2,
    solution: 'Convert to improper fractions: $\\frac{10}{3} \\times \\frac{9}{4}$. Cancel: the $3$ into the $9$ leaves $3$, and the $10$ and $4$ share a $2$, leaving $5$ and $2$. Then $\\frac{5 \\times 3}{2} = \\frac{15}{2} = 7\\frac{1}{2}$. Multiplying parts separately gives $6\\frac{1}{12}$ — too small, as always.',
  },
  {
    q: 'A jar holds $45$ marbles. Exactly $\\frac{3}{5}$ of them are glass, and $\\frac{2}{3}$ of the glass marbles are blue. How many blue glass marbles are there?',
    choices: ['$18$', '$27$', '$15$', '$30$'],
    answer: 0,
    solution: 'Work outward-in: $\\frac{3}{5}$ of $45$ is $45 \\div 5 \\times 3 = 27$ glass marbles. Then $\\frac{2}{3}$ of $27$ is $27 \\div 3 \\times 2 = 18$. A fraction OF a fraction of a number is just two multiplications in a row.',
  },
  {
    q: 'Two thirds of a mystery number is $\\frac{4}{9}$. What is the number?',
    choices: ['$\\frac{8}{27}$', '$\\frac{2}{3}$', '$\\frac{3}{2}$', '$\\frac{1}{3}$'],
    answer: 1,
    solution: 'To undo multiplying by $\\frac{2}{3}$, divide by it: $\\frac{4}{9} \\div \\frac{2}{3} = \\frac{4}{9} \\times \\frac{3}{2} = \\frac{12}{18} = \\frac{2}{3}$. Check: $\\frac{2}{3} \\times \\frac{2}{3} = \\frac{4}{9}$. ✓ The mystery number happens to equal the fraction we multiplied by — a fun coincidence!',
  },
  {
    q: 'How much bigger is $\\frac{7}{8}$ than $\\frac{5}{6}$?',
    choices: ['$\\frac{1}{2}$', '$\\frac{1}{12}$', '$\\frac{1}{48}$', '$\\frac{1}{24}$'],
    answer: 3,
    solution: 'Subtract over the LCM $24$: $\\frac{7}{8} = \\frac{21}{24}$ and $\\frac{5}{6} = \\frac{20}{24}$. The gap is $\\frac{21}{24} - \\frac{20}{24} = \\frac{1}{24}$ — the two fractions are very close neighbors!',
  },
  {
    q: 'A recipe uses $2\\frac{1}{4}$ cups of flour per batch. How much flour do you need for $1\\frac{1}{3}$ batches?',
    choices: ['$2\\frac{1}{12}$ cups', '$3\\frac{1}{2}$ cups', '$3$ cups', '$2\\frac{3}{4}$ cups'],
    answer: 2,
    solution: 'Multiply the amounts, converting first: $2\\frac{1}{4} = \\frac{9}{4}$ and $1\\frac{1}{3} = \\frac{4}{3}$. Then $\\frac{9}{4} \\times \\frac{4}{3}$: the $4$s cancel and $\\frac{9}{3} = 3$. Exactly $3$ cups.',
  },
]

const worksheet = [
  {
    q: 'Simplify $\\frac{36}{54}$.',
    answer: '$\\frac{2}{3}$',
    solution: 'The biggest common factor of $36$ and $54$ is $18$: dividing both by $18$ gives $\\frac{2}{3}$. Step by step also works: divide by $2$ for $\\frac{18}{27}$, then by $9$ for $\\frac{2}{3}$.',
  },
  {
    q: 'Compute $\\frac{3}{8} \\times \\frac{4}{9}$.',
    answer: '$\\frac{1}{6}$',
    solution: 'Cancel before multiplying: the $4$ and $8$ share a $4$, becoming $1$ and $2$; the $3$ and $9$ share a $3$, becoming $1$ and $3$. Then $\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$.',
  },
  {
    q: 'Compute $\\frac{5}{12} + \\frac{3}{8}$.',
    answer: '$\\frac{19}{24}$',
    solution: 'The LCM of $12$ and $8$ is $24$: $\\frac{5}{12} = \\frac{10}{24}$ and $\\frac{3}{8} = \\frac{9}{24}$. Add the tops: $10 + 9 = 19$, so the sum is $\\frac{19}{24}$.',
  },
  {
    q: 'Compute $\\frac{4}{5} \\div \\frac{8}{15}$.',
    answer: '$\\frac{3}{2}$',
    solution: 'Flip the divisor and multiply: $\\frac{4}{5} \\times \\frac{15}{8}$. Cancel: the $4$ and $8$ leave a $2$ below, and the $5$ into the $15$ leaves a $3$ on top. Result: $\\frac{3}{2}$.',
  },
  {
    q: 'Which is bigger: $\\frac{5}{7}$ or $\\frac{7}{10}$?',
    answer: '$\\frac{5}{7}$',
    solution: 'Cross-multiply: $5 \\times 10 = 50$ goes with $\\frac{5}{7}$, and $7 \\times 7 = 49$ goes with $\\frac{7}{10}$. Since $50 > 49$, the fraction $\\frac{5}{7}$ is bigger — barely!',
  },
  {
    q: 'Convert $\\frac{47}{6}$ to a mixed number.',
    answer: '$7\\frac{5}{6}$',
    solution: 'Divide: $47 \\div 6 = 7$ remainder $5$, since $7 \\times 6 = 42$ and $47 - 42 = 5$. The whole part is $7$ and the leftover $5$ sixths stay on top: $7\\frac{5}{6}$.',
  },
  {
    q: 'Compute $\\left(-\\frac{2}{3}\\right)^3 \\times \\left(\\frac{3}{2}\\right)^2$.',
    answer: '$-\\frac{2}{3}$',
    solution: 'Work each power: $\\left(-\\frac{2}{3}\\right)^3 = -\\frac{8}{27}$ (odd power keeps the minus) and $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$. Multiply: $-\\frac{8}{27} \\times \\frac{9}{4} = -\\frac{72}{108} = -\\frac{2}{3}$. Canceling first is faster: the $8$ and $4$ leave a $2$, the $9$ and $27$ leave a $3$.',
  },
  {
    q: 'Compute $2\\frac{2}{3} \\times 1\\frac{7}{8}$.',
    answer: '$5$',
    solution: 'Convert to improper fractions first: $2\\frac{2}{3} = \\frac{8}{3}$ and $1\\frac{7}{8} = \\frac{15}{8}$. Multiply: $\\frac{8}{3} \\times \\frac{15}{8}$ — the $8$s cancel and $\\frac{15}{3} = 5$. A perfectly whole answer from two messy-looking mixed numbers!',
  },
  {
    q: 'Compute $\\frac{1}{2} + \\frac{1}{6} + \\frac{1}{12}$.',
    answer: '$\\frac{3}{4}$',
    solution: 'The LCM of $2$, $6$, and $12$ is $12$: the sum becomes $\\frac{6}{12} + \\frac{2}{12} + \\frac{1}{12} = \\frac{9}{12}$. Simplify by dividing top and bottom by $3$: $\\frac{3}{4}$.',
  },
  {
    q: 'A pitcher holds $2\\frac{1}{4}$ cups of juice, and each glass holds $\\frac{3}{4}$ cup. How many full glasses can you pour?',
    answer: '$3$ glasses',
    solution: 'We need $2\\frac{1}{4} \\div \\frac{3}{4}$. Convert and flip: $\\frac{9}{4} \\times \\frac{4}{3}$. The $4$s cancel and $\\frac{9}{3} = 3$. Exactly $3$ full glasses, with the pitcher emptied.',
  },
]

export default {
  id: 'prealgebra-ch04',
  book: 'prealgebra',
  number: 4,
  title: 'Fractions',
  intro:
    'Fractions let us talk about the numbers BETWEEN the whole numbers — half a pizza, three quarters of an hour, five thirds of a recipe. In this chapter you will learn to multiply, divide, compare, add, and subtract them, and discover that a fraction is really just a division in disguise. Master these moves and fractions stop being scary — they become some of the friendliest numbers in math.',
  sections: [s41, s42, s43, s44, s45, s46, s47, s48],
  challenge,
  worksheet,
}
