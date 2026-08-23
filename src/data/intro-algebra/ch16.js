// Introduction to Algebra — Chapter 16: Functions
// All problems, explanations, and examples are original MathQuest content.

const s161 = {
  id: '16.1',
  title: 'The Machine',
  learn: {
    concepts: [
      {
        heading: 'A function is a machine',
        body: 'A function takes an input, follows a fixed rule, and produces exactly one output. We write $f(x)$ for "the output of machine $f$ when the input is $x$." If $f(x) = 2x + 3$, then feeding in $4$ gives $f(4) = 2(4) + 3 = 11$. Same input, same output — every time.',
      },
      {
        heading: 'One output per input',
        body: 'The machine rule is strict: each input produces exactly one output. Different inputs are allowed to share an output ($f(x) = x^2$ sends both $2$ and $-2$ to $4$), but one input can never produce two different outputs.',
      },
      {
        heading: 'The input can be anything — even an expression',
        body: 'The $x$ in $f(x)$ is just a placeholder. To find $f(a)$, put $a$ everywhere $x$ was. To find $f(x+1)$, put the entire expression $x+1$ everywhere $x$ was — parentheses and all. If $f(x) = x^2$, then $f(x+1) = (x+1)^2$, which is NOT the same as $f(x) + 1$.',
      },
      {
        heading: 'Domain and range',
        body: 'The domain of a function is the set of allowed inputs. Two things break a machine: dividing by zero, and taking an even root (like a square root) of a negative number. The range is the set of outputs the machine can actually produce.',
      },
    ],
    examples: [
      {
        problem: 'If $f(x) = 3x - 2$, find $f(4)$ and $f(-1)$.',
        steps: [
          'Replace every $x$ in the rule with the input.',
          'For input $4$: $f(4) = 3(4) - 2 = 12 - 2 = 10$.',
          'For input $-1$: $f(-1) = 3(-1) - 2 = -3 - 2 = -5$.',
        ],
        answer: '$f(4) = 10$ and $f(-1) = -5$',
      },
      {
        problem: 'If $g(x) = x^2 + 1$, find $g(x + 1)$.',
        steps: [
          'Substitute the whole expression $x + 1$ for $x$, keeping it in parentheses: $g(x+1) = (x+1)^2 + 1$.',
          'Expand the square: $(x+1)^2 = x^2 + 2x + 1$.',
          'So $g(x+1) = x^2 + 2x + 1 + 1 = x^2 + 2x + 2$. Notice this is not $g(x) + 1 = x^2 + 2$!',
        ],
        answer: '$g(x+1) = x^2 + 2x + 2$',
      },
      {
        problem: 'Find the domain of $h(x) = \\frac{1}{x - 3}$.',
        steps: [
          'The only danger here is division by zero.',
          'The denominator $x - 3$ equals $0$ exactly when $x = 3$, so that single input must be banned.',
          'Every other real number is a perfectly safe input.',
        ],
        answer: 'The domain is all real numbers except $x = 3$',
      },
    ],
  },
  problems: [
    {
      q: 'If $f(x) = 2x + 5$, what is $f(3)$?',
      choices: ['$10$', '$16$', '$11$', '$8$'],
      answer: 2,
      solution: 'Replace $x$ with $3$: $f(3) = 2(3) + 5 = 6 + 5 = 11$. (Careful not to add first — $2(3+5) = 16$ is the result of grouping incorrectly.)',
    },
    {
      q: 'If $g(x) = 10 - x$, what is $g(7)$?',
      choices: ['$3$', '$-3$', '$17$', '$7$'],
      answer: 0,
      solution: 'Substitute: $g(7) = 10 - 7 = 3$. The machine subtracts its input from $10$.',
    },
    {
      q: 'If $f(x) = x^2 - 4$, what is $f(-3)$?',
      choices: ['$-13$', '$5$', '$-5$', '$13$'],
      answer: 1,
      solution: 'Substitute carefully: $f(-3) = (-3)^2 - 4 = 9 - 4 = 5$. The square of $-3$ is $+9$, since a negative times a negative is positive.',
    },
    {
      q: 'How many outputs may a function produce for a single input?',
      choices: ['As many as it likes', 'Two', 'Zero or more', 'Exactly one'],
      answer: 3,
      solution: 'The defining rule of a function: each input produces exactly one output. Two different inputs may share an output, but one input can never split into two outputs.',
    },
    {
      q: 'If $f(x) = 3x - 1$, what is $f(a)$?',
      choices: ['$3a - 1$', '$3a$', '$a - 1$', '$3a - 3$'],
      answer: 0,
      solution: 'The letter fed in does not matter — the rule is "triple the input, then subtract $1$." So $f(a) = 3a - 1$.',
    },
    {
      q: 'If $f(x) = x^2$, what is $f(x + 1)$?',
      choices: ['$x^2 + 1$', '$x^2 + 2x$', '$x^2 + 2x + 1$', '$x^2 + x + 1$'],
      answer: 2,
      solution: 'Substitute the entire expression: $f(x+1) = (x+1)^2 = x^2 + 2x + 1$. The tempting answer $x^2 + 1$ is $f(x) + 1$ — adding $1$ to the output instead of the input, which is a different thing!',
    },
    {
      q: 'What is the domain of $f(x) = \\frac{2}{x - 5}$?',
      choices: ['All real numbers', 'All $x$ except $x = -5$', 'Only $x > 5$', 'All $x$ except $x = 5$'],
      answer: 3,
      solution: 'Division by zero is forbidden, and the denominator $x - 5$ is zero exactly when $x = 5$. Every other input is fine, so the domain is all real numbers except $5$.',
    },
    {
      q: 'What is the domain of $g(x) = \\sqrt{x - 2}$?',
      choices: ['$x > 2$', '$x \\ge 2$', '$x \\le 2$', 'All real numbers'],
      answer: 1,
      solution: 'A square root needs a nonnegative number inside: $x - 2 \\ge 0$, so $x \\ge 2$. The input $x = 2$ itself is allowed, since $\\sqrt{0} = 0$ is perfectly legal — that is why we use $\\ge$, not $>$.',
    },
    {
      q: 'What is the range of $f(x) = x^2 + 3$, where the input can be any real number?',
      choices: ['All $y \\ge 3$', 'All $y > 3$', 'All real numbers', 'All $y \\ge 0$'],
      answer: 0,
      solution: 'The square $x^2$ can be $0$ or anything positive, but never negative. So $x^2 + 3$ can be $3$ (when $x = 0$) or anything bigger. The range is all $y \\ge 3$.',
    },
    {
      q: 'If $f(x) = 6 - x$, what is $f(f(f(10)))$?',
      choices: ['$10$', '$4$', '$6$', '$-4$'],
      answer: 3,
      solution: 'Work from the inside out. $f(10) = 6 - 10 = -4$. Then $f(-4) = 6 - (-4) = 10$. Then $f(10) = -4$ again. Applying $f$ twice returns you home, so an odd number of applications lands on $-4$.',
    },
  ],
}

const s162 = {
  id: '16.2',
  title: 'Combining Functions',
  learn: {
    concepts: [
      {
        heading: 'Adding and subtracting machines',
        body: 'Two functions can be combined into a new one. The sum $(f+g)(x)$ means $f(x) + g(x)$: run both machines on the same input, then add the outputs. Likewise $(f-g)(x) = f(x) - g(x)$. To find a formula, just combine the two rules and simplify.',
      },
      {
        heading: 'Multiplying machines',
        body: 'The product $(f \\cdot g)(x)$ means $f(x) \\cdot g(x)$ — run both machines, then multiply the outputs. If $f(x) = x$ and $g(x) = x + 2$, then $(f \\cdot g)(x) = x(x+2) = x^2 + 2x$.',
      },
      {
        heading: 'Dividing machines — watch the bottom',
        body: 'The quotient $\\frac{f}{g}(x)$ means $\\frac{f(x)}{g(x)}$, and it comes with a warning label: any input that makes $g(x) = 0$ must be thrown out of the domain, because dividing by zero is forbidden.',
      },
      {
        heading: 'Evaluate first, or combine first — your choice',
        body: 'To find $(f+g)(4)$, you can build the combined formula and plug in $4$, or plug $4$ into each function separately and add the results. Both roads lead to the same answer, so pick whichever is quicker.',
      },
    ],
    examples: [
      {
        problem: 'If $f(x) = 2x + 1$ and $g(x) = x - 3$, find a formula for $(f + g)(x)$.',
        steps: [
          'Add the two rules: $(f+g)(x) = (2x + 1) + (x - 3)$.',
          'Combine like terms: $2x + x = 3x$ and $1 - 3 = -2$.',
        ],
        answer: '$(f+g)(x) = 3x - 2$',
      },
      {
        problem: 'If $f(x) = x^2 + 2$ and $g(x) = 4x$, find $(f - g)(3)$.',
        steps: [
          'Evaluate each machine at $3$: $f(3) = 3^2 + 2 = 11$ and $g(3) = 4(3) = 12$.',
          'Subtract the outputs in the right order: $(f-g)(3) = f(3) - g(3) = 11 - 12$.',
        ],
        answer: '$(f-g)(3) = -1$',
      },
      {
        problem: 'If $f(x) = x + 1$ and $g(x) = x - 4$, find the domain of $\\frac{f}{g}(x)$.',
        steps: [
          'The quotient is $\\frac{x+1}{x-4}$, so the only danger is a zero denominator.',
          '$g(x) = x - 4$ equals $0$ when $x = 4$, so that input must be excluded.',
        ],
        answer: 'All real numbers except $x = 4$',
      },
    ],
  },
  problems: [
    {
      q: 'If $f(x) = 2x + 1$ and $g(x) = x - 3$, what is $(f + g)(x)$?',
      choices: ['$3x - 2$', '$3x + 2$', '$2x - 2$', '$3x - 4$'],
      answer: 0,
      solution: 'Add the rules: $(2x + 1) + (x - 3) = 3x - 2$. The $x$-terms give $3x$, and the constants give $1 - 3 = -2$.',
    },
    {
      q: 'If $f(x) = x^2$ and $g(x) = 3x$, what is $(f + g)(4)$?',
      choices: ['$24$', '$19$', '$48$', '$28$'],
      answer: 3,
      solution: 'Run each machine on $4$: $f(4) = 16$ and $g(4) = 12$. Add the outputs: $16 + 12 = 28$.',
    },
    {
      q: 'If $f(x) = 5x$ and $g(x) = 2x - 4$, what is $(f - g)(x)$?',
      choices: ['$3x - 4$', '$3x + 4$', '$7x - 4$', '$3x$'],
      answer: 1,
      solution: 'Subtract the entire rule for $g$: $5x - (2x - 4) = 5x - 2x + 4 = 3x + 4$. The minus sign must hit both terms of $g$ — that is where the $+4$ comes from.',
    },
    {
      q: 'If $f(x) = x + 1$ and $g(x) = x - 1$, what is $(f \\cdot g)(2)$?',
      choices: ['$4$', '$2$', '$3$', '$1$'],
      answer: 2,
      solution: 'Evaluate each: $f(2) = 3$ and $g(2) = 1$. Multiply the outputs: $3 \\cdot 1 = 3$.',
    },
    {
      q: 'If $f(x) = x^2 + 2$ and $g(x) = 4x$, what is $(f - g)(3)$?',
      choices: ['$1$', '$23$', '$-23$', '$-1$'],
      answer: 3,
      solution: '$f(3) = 9 + 2 = 11$ and $g(3) = 12$. Then $(f-g)(3) = 11 - 12 = -1$. Order matters in subtraction: it is $f$ minus $g$, not the other way around.',
    },
    {
      q: 'If $f(x) = x$ and $g(x) = x + 2$, what is $(f \\cdot g)(x)$?',
      choices: ['$x^2 + 2x$', '$x^2 + 2$', '$2x + 2$', '$x^2$'],
      answer: 0,
      solution: 'Multiply the rules: $x(x + 2) = x^2 + 2x$. Distribute the $x$ across both terms.',
    },
    {
      q: 'If $f(x) = x^2 - 1$ and $g(x) = x + 1$, what is $\\frac{f}{g}(6)$?',
      choices: ['$7$', '$6$', '$5$', '$35$'],
      answer: 2,
      solution: '$f(6) = 36 - 1 = 35$ and $g(6) = 7$, so the quotient is $\\frac{35}{7} = 5$. (Slick check: $\\frac{x^2-1}{x+1} = x - 1$ wherever it is defined, and $6 - 1 = 5$.)',
    },
    {
      q: 'If $f(x) = x + 5$ and $g(x) = x^2 - 9$, what is the domain of $\\frac{f}{g}(x)$?',
      choices: ['All $x$ except $x = 3$', 'All $x$ except $x = 3$ and $x = -3$', 'All $x$ except $x = -5$', 'All real numbers'],
      answer: 1,
      solution: 'The denominator $x^2 - 9$ is zero when $x^2 = 9$, which happens at BOTH $x = 3$ and $x = -3$. Both must be excluded. (The top being zero at $x = -5$ is harmless — zero on top is fine, zero on the bottom is not.)',
    },
    {
      q: 'Suppose $(f + g)(x) = 5x + 2$ and $f(x) = 2x - 1$. What is $g(x)$?',
      choices: ['$3x + 1$', '$7x + 1$', '$3x - 3$', '$3x + 3$'],
      answer: 3,
      solution: 'Since $f(x) + g(x) = 5x + 2$, subtract $f$: $g(x) = (5x + 2) - (2x - 1) = 3x + 3$. Check: $(2x - 1) + (3x + 3) = 5x + 2$. It works!',
    },
    {
      q: 'If $f(x) = x^2$ and $g(x) = 2x$, for which inputs is $(f - g)(x) = 0$?',
      choices: ['$x = 0$ and $x = 2$', '$x = 2$ only', '$x = 0$ only', '$x = -2$ and $x = 2$'],
      answer: 0,
      solution: 'We need $x^2 - 2x = 0$. Factor: $x(x - 2) = 0$, so $x = 0$ or $x = 2$. Do not divide both sides by $x$ — that silently throws away the solution $x = 0$!',
    },
  ],
}

const s163 = {
  id: '16.3',
  title: 'Composition',
  learn: {
    concepts: [
      {
        heading: 'Machines in a row',
        body: 'Composition chains two machines together: the output of the first becomes the input of the second. The notation $f(g(x))$ means "feed $x$ into $g$ first, then feed the result into $f$." Read it from the inside out, like nested parentheses.',
      },
      {
        heading: 'Order matters — a lot',
        body: '$f(g(x))$ and $g(f(x))$ are usually different functions. Putting on socks then shoes is not the same as shoes then socks! Always check which machine runs first: it is the inner one.',
      },
      {
        heading: 'Composing with formulas',
        body: 'To build a formula for $f(g(x))$, substitute the entire rule for $g$ into every $x$ of $f$. If $f(x) = 3x$ and $g(x) = x + 2$, then $f(g(x)) = 3(x + 2) = 3x + 6$.',
      },
      {
        heading: 'Decomposing: seeing the layers',
        body: 'Composition also runs in reverse: a complicated function can be split into simple layers. The function $h(x) = (x + 5)^2$ is "add $5$, then square" — so $h(x) = f(g(x))$ with inner machine $g(x) = x + 5$ and outer machine $f(x) = x^2$.',
      },
    ],
    examples: [
      {
        problem: 'If $f(x) = x + 3$ and $g(x) = 2x$, find $f(g(2))$ and $g(f(2))$.',
        steps: [
          'For $f(g(2))$, run $g$ first: $g(2) = 4$. Then $f(4) = 4 + 3 = 7$.',
          'For $g(f(2))$, run $f$ first: $f(2) = 5$. Then $g(5) = 10$.',
          'The two answers differ — composition order matters!',
        ],
        answer: '$f(g(2)) = 7$ and $g(f(2)) = 10$',
      },
      {
        problem: 'If $f(x) = x^2$ and $g(x) = 2x - 1$, find a formula for $g(f(x))$.',
        steps: [
          'The inner machine is $f$, so start with its output: $f(x) = x^2$.',
          'Feed that into $g$: replace the $x$ in $g$ with $x^2$.',
          '$g(f(x)) = 2(x^2) - 1 = 2x^2 - 1$.',
        ],
        answer: '$g(f(x)) = 2x^2 - 1$',
      },
      {
        problem: 'Write $h(x) = (2x + 7)^3$ as a composition $f(g(x))$ of two simpler functions.',
        steps: [
          'Ask: what happens to $x$ first? It gets doubled and increased by $7$ — that is the inner machine, $g(x) = 2x + 7$.',
          'Then the result is cubed — that is the outer machine, $f(x) = x^3$.',
          'Check: $f(g(x)) = (g(x))^3 = (2x+7)^3 = h(x)$.',
        ],
        answer: '$g(x) = 2x + 7$ (inner) and $f(x) = x^3$ (outer)',
      },
    ],
  },
  problems: [
    {
      q: 'If $f(x) = x + 3$ and $g(x) = 2x$, what is $f(g(2))$?',
      choices: ['$10$', '$7$', '$5$', '$8$'],
      answer: 1,
      solution: 'Inside first: $g(2) = 4$. Then $f(4) = 4 + 3 = 7$. (If you got $10$, you ran the machines in the other order — that is $g(f(2))$.)',
    },
    {
      q: 'If $f(x) = x + 3$ and $g(x) = 2x$, what is $g(f(2))$?',
      choices: ['$10$', '$7$', '$4$', '$12$'],
      answer: 0,
      solution: 'This time $f$ runs first: $f(2) = 5$. Then $g(5) = 10$. Compare with the previous problem — same machines, different order, different answer.',
    },
    {
      q: 'If $f(x) = 3x$ and $g(x) = x + 2$, what is $f(g(x))$?',
      choices: ['$3x + 2$', '$3x$', '$3x + 6$', '$x + 6$'],
      answer: 2,
      solution: 'Substitute the whole rule for $g$ into $f$: $f(g(x)) = 3(x + 2) = 3x + 6$. The answer $3x + 2$ is $g(f(x))$ — the other order.',
    },
    {
      q: 'Let $f(x) = x + 1$ and $g(x) = 2x$. Which statement is true?',
      choices: ['Both $f(g(5))$ and $g(f(5))$ equal $11$', 'Both $f(g(5))$ and $g(f(5))$ equal $12$', '$f(g(5)) = 12$ and $g(f(5)) = 11$', '$f(g(5)) = 11$ and $g(f(5)) = 12$'],
      answer: 3,
      solution: '$f(g(5))$: first $g(5) = 10$, then $f(10) = 11$. $g(f(5))$: first $f(5) = 6$, then $g(6) = 12$. The inner machine always runs first, and the order changes the answer.',
    },
    {
      q: 'If $f(x) = x^2$ and $g(x) = x - 3$, what is $f(g(-1))$?',
      choices: ['$-16$', '$4$', '$16$', '$-2$'],
      answer: 2,
      solution: 'Inside first: $g(-1) = -1 - 3 = -4$. Then $f(-4) = (-4)^2 = 16$. Squaring a negative gives a positive.',
    },
    {
      q: 'If $f(x) = x^2$ and $g(x) = 2x - 1$, what is $g(f(x))$?',
      choices: ['$2x^2 - 1$', '$4x^2 - 4x + 1$', '$2x^2 + 1$', '$2x - 1$'],
      answer: 0,
      solution: '$f$ runs first, so feed $x^2$ into $g$: $g(x^2) = 2x^2 - 1$. The choice $4x^2 - 4x + 1 = (2x-1)^2$ is $f(g(x))$ — the machines in the other order.',
    },
    {
      q: 'If $f(x) = 2x - 1$, what is $f(f(3))$?',
      choices: ['$5$', '$9$', '$11$', '$25$'],
      answer: 1,
      solution: 'A function can be composed with itself! First $f(3) = 5$, then $f(5) = 2(5) - 1 = 9$.',
    },
    {
      q: 'Which pair writes $h(x) = (x + 5)^2$ as $h(x) = f(g(x))$?',
      choices: ['$f(x) = x + 5$ and $g(x) = x^2$', '$f(x) = x^2 + 25$ and $g(x) = x$', '$f(x) = 5x^2$ and $g(x) = x + 1$', '$f(x) = x^2$ and $g(x) = x + 5$'],
      answer: 3,
      solution: 'Read the layers: $x$ first has $5$ added (inner machine $g(x) = x + 5$), and the result is then squared (outer machine $f(x) = x^2$). Check: $f(g(x)) = (x+5)^2$. The first choice gives $g(x)$ then add 5, which is $x^2 + 5$ — not the same.',
    },
    {
      q: 'Suppose $g(x) = 2x + 1$ and $f$ is a linear function with $f(g(x)) = 6x + 7$. What is $f(x)$?',
      choices: ['$f(x) = 3x + 4$', '$f(x) = 3x + 7$', '$f(x) = 6x + 6$', '$f(x) = 2x + 5$'],
      answer: 0,
      solution: 'Try $f(x) = 3x + 4$: then $f(2x + 1) = 3(2x + 1) + 4 = 6x + 3 + 4 = 6x + 7$. That matches! (You can find it directly: the outer slope must be $6 \\div 2 = 3$, and then the constant must satisfy $3(1) + b = 7$, so $b = 4$.)',
    },
    {
      q: 'The table shows a function: $f(1) = 3$, $f(2) = 1$, $f(3) = 4$, $f(4) = 2$. What is $f(f(1))$?',
      choices: ['$3$', '$1$', '$4$', '$2$'],
      answer: 2,
      solution: 'Inside first: $f(1) = 3$. Now feed that back in: $f(3) = 4$. Tables work just like formulas — look up the inner value, then look up again.',
    },
  ],
}

const s164 = {
  id: '16.4',
  title: 'Inverse Functions',
  learn: {
    concepts: [
      {
        heading: 'The undo machine',
        body: 'The inverse of a function $f$, written $f^{-1}$, is the machine that undoes $f$: whatever $f$ does, $f^{-1}$ reverses. If $f$ adds $7$, then $f^{-1}$ subtracts $7$. Feeding a number through $f$ and then $f^{-1}$ returns it unchanged: $f^{-1}(f(x)) = x$, and also $f(f^{-1}(x)) = x$.',
      },
      {
        heading: 'Warning: $f^{-1}$ is not a reciprocal',
        body: 'The $-1$ in $f^{-1}(x)$ is notation for "inverse function," NOT an exponent. In general $f^{-1}(x)$ is not $\\frac{1}{f(x)}$. The inverse of $f(x) = 3x$ is $f^{-1}(x) = \\frac{x}{3}$ (divide by 3 undoes multiply by 3), not $\\frac{1}{3x}$.',
      },
      {
        heading: 'Finding the inverse: swap and solve',
        body: 'To find $f^{-1}$ for $y = f(x)$: swap the roles of input and output, then solve for the new output. For $f(x) = 2x - 5$, write $x = 2y - 5$ and solve: $y = \\frac{x + 5}{2}$. So $f^{-1}(x) = \\frac{x+5}{2}$. Notice it undoes the steps of $f$ in reverse order: first add back the $5$, then divide by $2$.',
      },
      {
        heading: 'Not every function has an inverse',
        body: 'If two different inputs share an output, the machine cannot be run backwards — given that output, which input should the undo machine return? Since $f(x) = x^2$ sends both $2$ and $-2$ to $4$, it has no inverse on all real numbers. A function has an inverse exactly when every output comes from just one input.',
      },
    ],
    examples: [
      {
        problem: 'Find the inverse of $f(x) = 2x - 5$, and verify it works on the input $x = 4$.',
        steps: [
          'Write $y = 2x - 5$, then swap $x$ and $y$: $x = 2y - 5$.',
          'Solve for $y$: add $5$ to get $x + 5 = 2y$, then divide by $2$: $y = \\frac{x+5}{2}$. So $f^{-1}(x) = \\frac{x+5}{2}$.',
          'Verify: $f(4) = 3$, and $f^{-1}(3) = \\frac{3+5}{2} = 4$. The inverse returned our original input.',
        ],
        answer: '$f^{-1}(x) = \\frac{x + 5}{2}$',
      },
      {
        problem: 'Show that $g(x) = 5 - x$ is its own inverse.',
        steps: [
          'Apply $g$ twice: $g(g(x)) = g(5 - x) = 5 - (5 - x)$.',
          'Simplify: $5 - 5 + x = x$. Applying $g$ twice returns every input, so $g$ undoes itself.',
          'Sanity check with a number: $g(2) = 3$ and $g(3) = 2$. The machine swaps numbers in pairs.',
        ],
        answer: '$g(g(x)) = x$, so $g^{-1} = g$',
      },
      {
        problem: 'Explain why $f(x) = x^2$ (with all real inputs) has no inverse.',
        steps: [
          'Compute $f(3) = 9$ and $f(-3) = 9$: two different inputs give the same output.',
          'An inverse machine fed the number $9$ would have to output both $3$ and $-3$ — but a function may only give ONE output per input.',
          'So no inverse function can exist for $f$ on all real numbers.',
        ],
        answer: 'Two inputs share an output, so the machine cannot be reversed',
      },
    ],
  },
  problems: [
    {
      q: 'If $f(x) = x + 7$, what is $f^{-1}(x)$?',
      choices: ['$x + 7$', '$\\frac{1}{x + 7}$', '$7 - x$', '$x - 7$'],
      answer: 3,
      solution: 'The machine adds $7$, so the undo machine subtracts $7$: $f^{-1}(x) = x - 7$. Check: $f(3) = 10$ and $f^{-1}(10) = 3$. (The reciprocal $\\frac{1}{x+7}$ is a different idea entirely — the $-1$ is not an exponent.)',
    },
    {
      q: 'If $f(x) = 3x$, what is $f^{-1}(x)$?',
      choices: ['$\\frac{1}{3x}$', '$\\frac{x}{3}$', '$3x$', '$x - 3$'],
      answer: 1,
      solution: 'Multiplying by $3$ is undone by dividing by $3$: $f^{-1}(x) = \\frac{x}{3}$. Check: $f(5) = 15$ and $\\frac{15}{3} = 5$. It is not $\\frac{1}{3x}$ — inverse functions are not reciprocals.',
    },
    {
      q: 'If $f(x) = 2x + 1$, what is $f^{-1}(11)$?',
      choices: ['$5$', '$23$', '$6$', '$\\frac{1}{23}$'],
      answer: 0,
      solution: '$f^{-1}(11)$ asks: which input gives output $11$? Solve $2x + 1 = 11$: subtract $1$, divide by $2$, and $x = 5$. (The choice $23$ is $f(11)$ — running the machine forward instead of backward.)',
    },
    {
      q: 'For a function $f$ with an inverse, what does $f(f^{-1}(x))$ always equal?',
      choices: ['$f(x)$', '$1$', '$x$', '$0$'],
      answer: 2,
      solution: 'The undo machine reverses $f$ exactly, so doing then undoing (or undoing then doing) returns the original number: $f(f^{-1}(x)) = x$. That equation is the very definition of an inverse.',
    },
    {
      q: 'If $f(x) = 2x - 5$, what is $f^{-1}(x)$?',
      choices: ['$\\frac{x - 5}{2}$', '$\\frac{x + 5}{2}$', '$2x + 5$', '$\\frac{1}{2x - 5}$'],
      answer: 1,
      solution: 'Swap and solve: from $x = 2y - 5$ we get $y = \\frac{x + 5}{2}$. Undo the LAST step first: $f$ multiplied then subtracted, so $f^{-1}$ adds back the $5$ first, then divides by $2$. Check: $f(4) = 3$ and $\\frac{3+5}{2} = 4$.',
    },
    {
      q: 'Why does $f(x) = x^2$, with all real numbers allowed as inputs, have NO inverse?',
      choices: ['Two different inputs can give the same output', 'Its outputs grow too quickly', 'It is not defined at $x = 0$', 'Its outputs are never negative'],
      answer: 0,
      solution: 'Since $f(2) = 4$ and $f(-2) = 4$, an undo machine fed $4$ could not decide between $2$ and $-2$ — and a function must give exactly one output. Whenever two inputs share an output, no inverse exists.',
    },
    {
      q: 'If $f(x) = \\frac{x}{4} + 3$, what is $f^{-1}(x)$?',
      choices: ['$4x + 12$', '$\\frac{x - 3}{4}$', '$\\frac{x}{4} - 3$', '$4x - 12$'],
      answer: 3,
      solution: 'Undo the steps in reverse: $f$ divides by $4$ then adds $3$, so $f^{-1}$ subtracts $3$ then multiplies by $4$: $f^{-1}(x) = 4(x - 3) = 4x - 12$. Check: $f(8) = 5$ and $4(5) - 12 = 8$. ✓',
    },
    {
      q: 'Which of these functions is its own inverse?',
      choices: ['$g(x) = x + 5$', '$g(x) = 2x$', '$g(x) = 5 - x$', '$g(x) = x - 5$'],
      answer: 2,
      solution: 'Apply $g(x) = 5 - x$ twice: $g(g(x)) = 5 - (5 - x) = x$, so it undoes itself. Try numbers: $g(1) = 4$ and $g(4) = 1$ — it swaps numbers in pairs. The others fail: adding $5$ twice adds $10$, doubling twice quadruples.',
    },
    {
      q: 'If $f(x) = 3x - 4$, what is $f^{-1}(f^{-1}(11))$?',
      choices: ['$5$', '$3$', '$29$', '$\\frac{5}{3}$'],
      answer: 1,
      solution: 'The inverse is $f^{-1}(x) = \\frac{x + 4}{3}$. Apply it twice: $f^{-1}(11) = \\frac{15}{3} = 5$, then $f^{-1}(5) = \\frac{9}{3} = 3$. (The choice $29$ is $f(11)$ — the forward machine.)',
    },
    {
      q: 'A linear function $f$ satisfies $f(1) = 5$ and $f^{-1}(7) = 2$. What is $f(3)$?',
      choices: ['$9$', '$11$', '$8$', '$10$'],
      answer: 0,
      solution: '$f^{-1}(7) = 2$ means $f(2) = 7$. From $f(1) = 5$ to $f(2) = 7$ the output climbs $2$ per step, so $f(x) = 2x + 3$. Then $f(3) = 9$. Check both clues: $f(1) = 5$ ✓ and $f(2) = 7$ ✓.',
    },
  ],
}

const s165 = {
  id: '16.5',
  title: 'Problem Solving with Functions',
  learn: {
    concepts: [
      {
        heading: 'Functions given by tables',
        body: 'A function does not need a formula — a table listing each input with its output defines a function perfectly well. To evaluate, just look up the input. You can even hunt for a pattern and guess the formula behind the table.',
      },
      {
        heading: 'Climbing a chain of values',
        body: 'A rule like $f(x + 1) = f(x) + 3$ says: each time the input grows by $1$, the output grows by $3$. From a starting value you can climb step by step — or leap: going from $f(1)$ to $f(10)$ takes $9$ steps, so the output grows by $9 \\times 3 = 27$ in one jump.',
      },
      {
        heading: 'Evaluating a relation at the right spot',
        body: 'Given something like $f(2x) = x + 5$, you can find particular values by choosing $x$ cleverly. Want $f(6)$? Make the inside equal $6$: set $x = 3$, and the relation says $f(6) = 3 + 5 = 8$. Aim the substitution at the input you want.',
      },
      {
        heading: 'From relation to formula',
        body: 'Sometimes you can recover the whole formula. If $f(2x) = 6x - 2$, give the inside a new name: let $u = 2x$, so $x = \\frac{u}{2}$. Then $f(u) = 6 \\cdot \\frac{u}{2} - 2 = 3u - 2$. The machine’s rule is $f(x) = 3x - 2$, ready to evaluate anywhere.',
      },
    ],
    examples: [
      {
        problem: 'A function satisfies $f(x + 1) = f(x) + 3$ and $f(1) = 2$. Find $f(4)$.',
        steps: [
          'Each step up in the input adds $3$ to the output.',
          'Climb: $f(2) = 2 + 3 = 5$, then $f(3) = 5 + 3 = 8$, then $f(4) = 8 + 3 = 11$.',
          'Shortcut: from $f(1)$ to $f(4)$ is $3$ steps, so $f(4) = 2 + 3 \\times 3 = 11$.',
        ],
        answer: '$f(4) = 11$',
      },
      {
        problem: 'A function satisfies $f(2x) = x + 5$ for all $x$. Find $f(10)$.',
        steps: [
          'We want the inside, $2x$, to equal $10$ — so choose $x = 5$.',
          'The relation then reads $f(10) = 5 + 5 = 10$.',
        ],
        answer: '$f(10) = 10$',
      },
      {
        problem: 'The table gives $f(0) = 4$, $f(1) = 7$, $f(2) = 10$, $f(3) = 13$. Find a formula that fits.',
        steps: [
          'Each time $x$ grows by $1$, the output grows by $3$ — so the formula should look like $f(x) = 3x + b$.',
          'At $x = 0$ the output is $4$, so $b = 4$.',
          'Check $f(x) = 3x + 4$ against the whole table: $f(2) = 10$ ✓ and $f(3) = 13$ ✓.',
        ],
        answer: '$f(x) = 3x + 4$',
      },
    ],
  },
  problems: [
    {
      q: 'A function is given by the table: $f(0) = 4$, $f(1) = 7$, $f(2) = 10$, $f(3) = 13$. What is $f(2)$?',
      choices: ['$7$', '$2$', '$10$', '$13$'],
      answer: 2,
      solution: 'Look up the input $2$ in the table: $f(2) = 10$. A table is a perfectly good way to define a function — no formula needed.',
    },
    {
      q: 'Using the same table ($f(0) = 4$, $f(1) = 7$, $f(2) = 10$, $f(3) = 13$), for which input $x$ is $f(x) = 13$?',
      choices: ['$13$', '$1$', '$4$', '$3$'],
      answer: 3,
      solution: 'Now we read the table backwards: which input has output $13$? That is $x = 3$. Careful to answer with the input, not the output!',
    },
    {
      q: 'A function satisfies $f(x + 1) = f(x) + 3$ and $f(1) = 2$. What is $f(4)$?',
      choices: ['$11$', '$8$', '$14$', '$5$'],
      answer: 0,
      solution: 'Climb one step at a time: $f(2) = 5$, $f(3) = 8$, $f(4) = 11$. Or leap: three steps from $f(1)$, each adding $3$, gives $2 + 9 = 11$.',
    },
    {
      q: 'Which formula fits the table $f(0) = 4$, $f(1) = 7$, $f(2) = 10$, $f(3) = 13$?',
      choices: ['$f(x) = 4x + 3$', '$f(x) = 3x + 4$', '$f(x) = x + 4$', '$f(x) = 7x$'],
      answer: 1,
      solution: 'The output climbs by $3$ per step, so the slope is $3$; the output at $x = 0$ is $4$, so the constant is $4$. Check $f(x) = 3x + 4$: $f(1) = 7$ ✓, $f(3) = 13$ ✓. The choice $4x + 3$ swaps the two numbers and fails at $x = 0$.',
    },
    {
      q: 'A function satisfies $f(2x) = x + 5$ for all $x$. What is $f(6)$?',
      choices: ['$11$', '$17$', '$6$', '$8$'],
      answer: 3,
      solution: 'Aim the inside at $6$: choose $x = 3$, so $f(6) = 3 + 5 = 8$. (Choosing $x = 6$ is the classic trap — that computes $f(12)$, not $f(6)$.)',
    },
    {
      q: 'A function satisfies $f(x + 1) = f(x) + 3$ and $f(1) = 2$. What is $f(10)$?',
      choices: ['$29$', '$32$', '$30$', '$27$'],
      answer: 0,
      solution: 'From $f(1)$ to $f(10)$ is $9$ steps, each adding $3$: $f(10) = 2 + 9 \\times 3 = 29$. (Counting $10$ steps instead of $9$ gives $32$ — count the gaps, not the fence posts!)',
    },
    {
      q: 'A function satisfies $f(a + b) = f(a) + f(b)$ for all $a$ and $b$, and $f(1) = 4$. What is $f(3)$?',
      choices: ['$4$', '$64$', '$12$', '$7$'],
      answer: 2,
      solution: 'Build $3$ from ones: $f(2) = f(1) + f(1) = 8$, then $f(3) = f(2) + f(1) = 8 + 4 = 12$. Adding inputs adds outputs, so $f(3) = 3 \\times f(1)$.',
    },
    {
      q: 'A function satisfies $f(2x) = 6x - 2$ for all $x$. What is $f(5)$?',
      choices: ['$28$', '$13$', '$15$', '$10$'],
      answer: 1,
      solution: 'First find the rule: let $u = 2x$, so $x = \\frac{u}{2}$ and $f(u) = 6 \\cdot \\frac{u}{2} - 2 = 3u - 2$. Then $f(5) = 15 - 2 = 13$. (Plugging $5$ straight into $6x - 2$ gives $28$, but that computes $f(10)$.)',
    },
    {
      q: 'A function satisfies $f(1) = 1$, $f(2) = 3$, and $f(n) = f(n-1) + f(n-2)$ for $n \\ge 3$. What is $f(5)$?',
      choices: ['$7$', '$8$', '$18$', '$11$'],
      answer: 3,
      solution: 'Each value is the sum of the previous two: $f(3) = 3 + 1 = 4$, $f(4) = 4 + 3 = 7$, $f(5) = 7 + 4 = 11$.',
    },
    {
      q: 'A function satisfies $f(x + 2) = 2f(x)$ and $f(1) = 3$. What is $f(7)$?',
      choices: ['$48$', '$24$', '$12$', '$96$'],
      answer: 1,
      solution: 'The output doubles every time the input grows by $2$. From $1$ to $7$ is $6$, which is $3$ hops of size $2$: $f(3) = 6$, $f(5) = 12$, $f(7) = 24$. (Six doublings would give $192$ — the hop size is $2$, not $1$.)',
    },
  ],
}

const s166 = {
  id: '16.6',
  title: 'Operations',
  learn: {
    concepts: [
      {
        heading: 'Invent your own operation',
        body: 'Symbols like $+$ and $\\times$ are just rules for combining two numbers — and we can invent new ones! A definition like $a \\diamond b = 2a + b^2$ creates a brand-new operation: to compute $3 \\diamond 2$, substitute $a = 3$ and $b = 2$ to get $2(3) + 2^2 = 10$.',
      },
      {
        heading: 'Left and right have jobs',
        body: 'In $a \\diamond b = 2a + b^2$, the left number gets doubled and the right number gets squared — the two positions play different roles. So expect $a \\diamond b$ and $b \\diamond a$ to differ: $1 \\diamond 2 = 2 + 4 = 6$, but $2 \\diamond 1 = 4 + 1 = 5$.',
      },
      {
        heading: 'Nested operations work inside-out',
        body: 'Just like composition, evaluate the parentheses first. For $(1 \\diamond 2) \\diamond 3$: first $1 \\diamond 2 = 6$, then $6 \\diamond 3 = 2(6) + 3^2 = 21$.',
      },
      {
        heading: 'Testing for special properties',
        body: 'An operation is commutative if $a \\ast b = b \\ast a$ for ALL $a$ and $b$, and associative if $(a \\ast b) \\ast c = a \\ast (b \\ast c)$ always. One failing example is enough to sink the property — but checking one example is never enough to prove it holds; for that, use algebra on the general rule.',
      },
    ],
    examples: [
      {
        problem: 'Define $a \\diamond b = 2a + b^2$. Compute $3 \\diamond 2$ and $2 \\diamond 3$.',
        steps: [
          'For $3 \\diamond 2$: the left number is doubled, the right is squared: $2(3) + 2^2 = 6 + 4 = 10$.',
          'For $2 \\diamond 3$: now $2$ is doubled and $3$ is squared: $2(2) + 3^2 = 4 + 9 = 13$.',
          'The answers differ, so $\\diamond$ is not commutative.',
        ],
        answer: '$3 \\diamond 2 = 10$ and $2 \\diamond 3 = 13$',
      },
      {
        problem: 'With $a \\diamond b = 2a + b^2$, compute $(1 \\diamond 2) \\diamond 3$.',
        steps: [
          'Parentheses first: $1 \\diamond 2 = 2(1) + 2^2 = 6$.',
          'Now use that result as the left number: $6 \\diamond 3 = 2(6) + 3^2 = 12 + 9 = 21$.',
        ],
        answer: '$(1 \\diamond 2) \\diamond 3 = 21$',
      },
      {
        problem: 'Define $a \\ast b = a + b + ab$. Is $\\ast$ commutative?',
        steps: [
          'Write both orders in general: $a \\ast b = a + b + ab$ and $b \\ast a = b + a + ba$.',
          'Since addition and multiplication are themselves commutative, $a + b + ab = b + a + ba$ for every $a$ and $b$.',
          'So yes — swapping the inputs never changes the output.',
        ],
        answer: 'Yes, $\\ast$ is commutative, because $a + b + ab = b + a + ba$ always',
      },
    ],
  },
  problems: [
    {
      q: 'Define $a \\diamond b = 2a + b^2$. What is $3 \\diamond 2$?',
      choices: ['$10$', '$13$', '$12$', '$25$'],
      answer: 0,
      solution: 'Double the left number, square the right: $2(3) + 2^2 = 6 + 4 = 10$. (Getting $13$ means the roles were swapped — that is $2 \\diamond 3$.)',
    },
    {
      q: 'With $a \\diamond b = 2a + b^2$, what is $2 \\diamond 3$?',
      choices: ['$10$', '$36$', '$13$', '$25$'],
      answer: 2,
      solution: 'Now $2$ is on the left (doubled) and $3$ is on the right (squared): $2(2) + 3^2 = 4 + 9 = 13$. Compare with the previous problem: the order matters.',
    },
    {
      q: 'Define $a \\triangle b = ab - a$. What is $5 \\triangle 4$?',
      choices: ['$16$', '$20$', '$1$', '$15$'],
      answer: 3,
      solution: 'Substitute $a = 5$, $b = 4$: $5 \\times 4 - 5 = 20 - 5 = 15$. (Subtracting $b$ instead of $a$ gives $16$ — read the definition closely.)',
    },
    {
      q: 'With $a \\diamond b = 2a + b^2$, what is $(1 \\diamond 2) \\diamond 3$?',
      choices: ['$19$', '$21$', '$15$', '$27$'],
      answer: 1,
      solution: 'Inside first: $1 \\diamond 2 = 2 + 4 = 6$. Then $6 \\diamond 3 = 2(6) + 3^2 = 12 + 9 = 21$.',
    },
    {
      q: 'Define $a \\ast b = \\frac{a + b}{2}$ (the average). What is $(7 \\ast 3) \\ast 9$?',
      choices: ['$5$', '$7$', '$8$', '$6$'],
      answer: 1,
      solution: 'Inside first: $7 \\ast 3 = \\frac{10}{2} = 5$. Then $5 \\ast 9 = \\frac{14}{2} = 7$.',
    },
    {
      q: 'Is the operation $a \\diamond b = 2a + b^2$ commutative?',
      choices: ['Yes, because it is built from addition', 'Yes, but only for positive numbers', 'No — for example, $1 \\diamond 2 = 6$ but $2 \\diamond 1 = 5$', 'No — no operation with two variables can be commutative'],
      answer: 2,
      solution: 'Test a pair: $1 \\diamond 2 = 2 + 4 = 6$, while $2 \\diamond 1 = 4 + 1 = 5$. One failing example settles it — the operation is not commutative. (Some two-variable operations ARE commutative, like $a + b$, so the last choice goes too far.)',
    },
    {
      q: 'With $a \\diamond b = 2a + b^2$, find the positive number $x$ with $4 \\diamond x = 24$.',
      choices: ['$4$', '$16$', '$8$', '$2$'],
      answer: 0,
      solution: 'Write the equation: $2(4) + x^2 = 24$, so $x^2 = 16$. The positive solution is $x = 4$. Check: $4 \\diamond 4 = 8 + 16 = 24$. ✓',
    },
    {
      q: 'Define $a \\circ b = ab + a + b$. What is $(1 \\circ 2) \\circ 3$?',
      choices: ['$11$', '$17$', '$29$', '$23$'],
      answer: 3,
      solution: 'Inside first: $1 \\circ 2 = 2 + 1 + 2 = 5$. Then $5 \\circ 3 = 15 + 5 + 3 = 23$. (Fun challenge: check that $1 \\circ (2 \\circ 3)$ also gives $23$ — this operation happens to be associative!)',
    },
    {
      q: 'With $a \\diamond b = 2a + b^2$, solve $a \\diamond 3 = 25$ for $a$.',
      choices: ['$11$', '$16$', '$8$', '$4$'],
      answer: 2,
      solution: 'The equation is $2a + 3^2 = 25$, so $2a + 9 = 25$, giving $2a = 16$ and $a = 8$. Check: $8 \\diamond 3 = 16 + 9 = 25$. ✓',
    },
    {
      q: 'Define $a \\star b = a^2 - b$. What is $(2 \\star 3) \\star (3 \\star 2)$?',
      choices: ['$-6$', '$6$', '$-48$', '$0$'],
      answer: 0,
      solution: 'Evaluate each piece: $2 \\star 3 = 4 - 3 = 1$ and $3 \\star 2 = 9 - 2 = 7$. Then $1 \\star 7 = 1 - 7 = -6$. Notice $2 \\star 3 \\ne 3 \\star 2$ — the two sides of $\\star$ have different jobs.',
    },
  ],
}

const challenge = [
  {
    q: 'If $f(x) = x^2 - 3x$, what is $f(-2)$?',
    choices: ['$-10$', '$10$', '$-2$', '$2$'],
    answer: 1,
    solution: 'Substitute with care: $f(-2) = (-2)^2 - 3(-2) = 4 + 6 = 10$. Both terms turn out positive — the square kills one minus sign, and subtracting a negative kills the other.',
  },
  {
    q: 'If $f(x) = 2x + 3$ and $g(x) = x^2 - 1$, what is $f(g(3))$?',
    choices: ['$80$', '$8$', '$21$', '$19$'],
    answer: 3,
    solution: 'Inside first: $g(3) = 9 - 1 = 8$. Then $f(8) = 16 + 3 = 19$. (The choice $80$ is $g(f(3))$ — the machines in the other order.)',
  },
  {
    q: 'If $f(x) = 5x - 7$, what is $f^{-1}(18)$?',
    choices: ['$5$', '$83$', '$\\frac{1}{18}$', '$25$'],
    answer: 0,
    solution: 'Find the input whose output is $18$: solve $5x - 7 = 18$, so $5x = 25$ and $x = 5$. (The choice $83$ is $f(18)$ — the forward direction.)',
  },
  {
    q: 'A function satisfies $f(x + 1) = 2f(x)$ and $f(1) = 3$. What is $f(5)$?',
    choices: ['$24$', '$96$', '$48$', '$15$'],
    answer: 2,
    solution: 'The output doubles at each step: $f(2) = 6$, $f(3) = 12$, $f(4) = 24$, $f(5) = 48$. That is four doublings: $3 \\times 2^4 = 48$.',
  },
  {
    q: 'If $f(x) = x - 3$ and $(f \\cdot g)(x) = x^2 - 9$, what is $g(x)$?',
    choices: ['$g(x) = x + 3$', '$g(x) = x - 3$', '$g(x) = x^2 - 3$', '$g(x) = x^2 + 3$'],
    answer: 0,
    solution: 'We need $(x - 3) \\cdot g(x) = x^2 - 9$. Recognize the difference of squares: $x^2 - 9 = (x - 3)(x + 3)$. So $g(x) = x + 3$.',
  },
  {
    q: 'Define $a \\oplus b = ab - a - b$. What is $(3 \\oplus 4) \\oplus 2$?',
    choices: ['$5$', '$10$', '$-3$', '$3$'],
    answer: 3,
    solution: 'Inside first: $3 \\oplus 4 = 12 - 3 - 4 = 5$. Then $5 \\oplus 2 = 10 - 5 - 2 = 3$.',
  },
  {
    q: 'If $f(x) = \\frac{x + 1}{2}$, what is $f^{-1}(6)$?',
    choices: ['$\\frac{7}{2}$', '$13$', '$11$', '$\\frac{5}{2}$'],
    answer: 2,
    solution: 'Solve $\\frac{x + 1}{2} = 6$: multiply by $2$ to get $x + 1 = 12$, so $x = 11$. Equivalently, $f^{-1}(x) = 2x - 1$ and $f^{-1}(6) = 11$. (The choice $\\frac{7}{2}$ is $f(6)$.)',
  },
  {
    q: 'What is the domain of $f(x) = \\sqrt{10 - 2x}$?',
    choices: ['$x \\ge 5$', '$x \\le 5$', '$x < 5$', '$x \\le 10$'],
    answer: 1,
    solution: 'The inside must be nonnegative: $10 - 2x \\ge 0$, so $2x \\le 10$, giving $x \\le 5$. Note the direction: LARGE $x$ makes the inside negative here. And $x = 5$ is allowed, since $\\sqrt{0} = 0$.',
  },
  {
    q: 'Two functions are given by tables: $f(1) = 4$, $f(2) = 2$, $f(3) = 1$, $f(4) = 3$, and $g(1) = 2$, $g(2) = 3$, $g(3) = 4$, $g(4) = 1$. What is $f(g(2))$?',
    choices: ['$1$', '$3$', '$2$', '$4$'],
    answer: 0,
    solution: 'Inside first: $g(2) = 3$. Then $f(3) = 1$. (Running the tables in the other order gives $g(f(2)) = g(2) = 3$ — a different answer, as usual with composition.)',
  },
  {
    q: 'If $f(x) = 2x + 1$ and $f(g(x)) = 4x + 9$, what is $g(x)$?',
    choices: ['$g(x) = 4x + 8$', '$g(x) = 2x + 8$', '$g(x) = 2x + 9$', '$g(x) = 2x + 4$'],
    answer: 3,
    solution: 'Since $f(g(x)) = 2 \\cdot g(x) + 1 = 4x + 9$, subtract $1$ and divide by $2$: $g(x) = \\frac{4x + 8}{2} = 2x + 4$. Check: $f(2x + 4) = 4x + 8 + 1 = 4x + 9$. ✓',
  },
  {
    q: 'Which pair writes $h(x) = \\sqrt{3x + 1}$ as $h(x) = f(g(x))$?',
    choices: ['$f(x) = 3x + 1$ and $g(x) = \\sqrt{x}$', '$f(x) = \\sqrt{x}$ and $g(x) = 3x + 1$', '$f(x) = \\sqrt{3x}$ and $g(x) = x + 1$', '$f(x) = 3\\sqrt{x}$ and $g(x) = x + 1$'],
    answer: 1,
    solution: 'Read the layers: first $x$ is tripled and increased by $1$ (inner machine $g(x) = 3x + 1$), then the square root is taken (outer machine $f(x) = \\sqrt{x}$). The first choice runs the layers in the wrong order and gives $3\\sqrt{x} + 1$.',
  },
  {
    q: 'A linear function $f$ is its own inverse, and $f(2) = 7$. What is $f(0)$?',
    choices: ['$7$', '$2$', '$9$', '$-9$'],
    answer: 2,
    solution: 'Own inverse means $f$ undoes itself, so $f(2) = 7$ forces $f(7) = 2$. A line through $(2, 7)$ and $(7, 2)$ has slope $\\frac{2 - 7}{7 - 2} = -1$, so $f(x) = -x + 9$. Then $f(0) = 9$. Check: $f(f(x)) = -(-x + 9) + 9 = x$. ✓',
  },
]

const worksheet = [
  {
    q: 'If $f(x) = 4x - 3$, find $f(5)$.',
    answer: '$17$',
    solution: 'Substitute: $f(5) = 4(5) - 3 = 20 - 3 = 17$.',
  },
  {
    q: 'If $f(x) = x^2 + 2$, find $f(-3)$.',
    answer: '$11$',
    solution: 'Square first: $(-3)^2 = 9$, then add $2$: $f(-3) = 11$. The square of a negative is positive.',
  },
  {
    q: 'If $f(x) = 3x + 1$ and $g(x) = x - 2$, find $(f + g)(4)$.',
    answer: '$15$',
    solution: 'Evaluate each machine: $f(4) = 13$ and $g(4) = 2$. Add the outputs: $13 + 2 = 15$.',
  },
  {
    q: 'If $f(x) = 2x$ and $g(x) = x + 5$, find both $f(g(3))$ and $g(f(3))$.',
    answer: '$f(g(3)) = 16$ and $g(f(3)) = 11$',
    solution: 'For $f(g(3))$: inside first, $g(3) = 8$, then $f(8) = 16$. For $g(f(3))$: $f(3) = 6$, then $g(6) = 11$. Different answers — composition order matters.',
  },
  {
    q: 'Find the inverse of $f(x) = 3x + 2$.',
    answer: '$f^{-1}(x) = \\frac{x - 2}{3}$',
    solution: 'Swap and solve: from $x = 3y + 2$, subtract $2$ and divide by $3$ to get $y = \\frac{x - 2}{3}$. Check: $f(1) = 5$ and $\\frac{5 - 2}{3} = 1$. ✓',
  },
  {
    q: 'Define $a \\diamond b = a^2 + 2b$. Find $4 \\diamond 5$.',
    answer: '$26$',
    solution: 'Square the left number and double the right: $4^2 + 2(5) = 16 + 10 = 26$.',
  },
  {
    q: 'A function satisfies $f(x + 1) = f(x) + 5$ and $f(1) = 4$. Find $f(20)$.',
    answer: '$99$',
    solution: 'From $f(1)$ to $f(20)$ is $19$ steps, each adding $5$: $f(20) = 4 + 19 \\times 5 = 99$. Count the gaps ($19$), not the inputs ($20$).',
  },
  {
    q: 'Suppose $g(x) = 3x$ and $f$ is a linear function with $f(g(x)) = 6x - 1$. Find $f(x)$.',
    answer: '$f(x) = 2x - 1$',
    solution: 'We need $f(3x) = 6x - 1$. Since $6x = 2 \\cdot 3x$, the outer machine doubles its input and subtracts $1$: $f(x) = 2x - 1$. Check: $f(3x) = 2(3x) - 1 = 6x - 1$. ✓',
  },
  {
    q: 'Define $a \\ast b = ab + b$. Show that $\\ast$ is not commutative by computing $2 \\ast 3$ and $3 \\ast 2$.',
    answer: '$2 \\ast 3 = 9$ but $3 \\ast 2 = 8$, so $\\ast$ is not commutative',
    solution: 'Compute both orders: $2 \\ast 3 = 2 \\times 3 + 3 = 9$, while $3 \\ast 2 = 3 \\times 2 + 2 = 8$. One pair of inputs with different results is all it takes to rule out commutativity.',
  },
  {
    q: 'If $f(x) = 2x + 1$, find $f(f(f(1)))$.',
    answer: '$15$',
    solution: 'Work inside-out: $f(1) = 3$, then $f(3) = 7$, then $f(7) = 15$. Each pass doubles and adds one.',
  },
]

export default {
  id: 'intro-algebra-ch16',
  book: 'intro-algebra',
  number: 16,
  title: 'Functions',
  intro:
    'Meet the function — a machine that takes a number in, follows a rule, and sends exactly one number out. Functions are the main characters of all the algebra still to come, so in this chapter you will learn to run them, combine them, chain them, and even run them backwards.',
  sections: [s161, s162, s163, s164, s165, s166],
  challenge,
  worksheet,
}
