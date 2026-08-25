// Prealgebra — Chapter 5: Equations and Inequalities
// All problems, explanations, and examples are original MathQuest content.

const s51 = {
  id: '5.1',
  title: 'Expressions',
  learn: {
    concepts: [
      {
        heading: 'A variable is a placeholder',
        body: 'A variable is a letter that stands in for a number we do not know yet — or a number that can change. The expression $3x + 5$ means "triple the number, then add $5$". Whatever $x$ turns out to be, the expression tells us exactly what to do with it.',
      },
      {
        heading: 'Evaluating means substituting',
        body: 'To evaluate an expression at a given value, replace the variable with that number and compute, following the order of operations. To evaluate $3x + 5$ at $x = 4$: replace $x$ with $4$ to get $3 \\times 4 + 5 = 12 + 5 = 17$.',
      },
      {
        heading: 'Like terms stick together',
        body: 'Terms with the same variable part are called like terms, and they combine by adding their coefficients: $5x + 3x = 8x$, just as $5$ apples plus $3$ apples is $8$ apples. But $5x + 3$ stays as it is — a number of $x$s and a plain number are different kinds of things.',
      },
      {
        heading: 'Distributing opens parentheses',
        body: 'The distributive property lets us multiply into parentheses: $a(b + c) = ab + ac$. So $3(2x + 5) = 6x + 15$ — the $3$ must reach BOTH terms inside. Forgetting the second term is the most common slip in all of algebra, so watch for it!',
      },
    ],
    examples: [
      {
        problem: 'Evaluate $3x + 5$ when $x = 4$.',
        steps: [
          'Replace the variable with its value: $3x + 5$ becomes $3 \\times 4 + 5$.',
          'Multiply first (order of operations): $3 \\times 4 = 12$.',
          'Then add: $12 + 5 = 17$.',
        ],
        answer: 'When $x = 4$, the expression $3x + 5$ equals $17$',
      },
      {
        problem: 'Simplify $4a + 7 + 2a - 3$.',
        steps: [
          'Group the like terms: the $a$-terms are $4a$ and $2a$, and the plain numbers are $7$ and $-3$.',
          'Combine each group: $4a + 2a = 6a$, and $7 - 3 = 4$.',
          'Put them together: $6a + 4$. We cannot combine any further — $6a$ and $4$ are different kinds of terms.',
        ],
        answer: '$4a + 7 + 2a - 3 = 6a + 4$',
      },
      {
        problem: 'Write "$4$ more than triple a number $n$" as an expression.',
        steps: [
          'Translate piece by piece: "triple a number $n$" means $3n$.',
          '"$4$ more than" that means we add $4$: $3n + 4$.',
        ],
        answer: 'The phrase translates to $3n + 4$',
      },
    ],
  },
  problems: [
    {
      q: 'Evaluate $x + 7$ when $x = 5$.',
      choices: ['$35$', '$2$', '$12$', '$57$'],
      answer: 2,
      solution: 'Replace $x$ with $5$: the expression becomes $5 + 7 = 12$. The plus sign means add — $35$ would be the answer if the expression were $7x$ instead.',
    },
    {
      q: 'Evaluate $4n$ when $n = 6$.',
      choices: ['$24$', '$10$', '$46$', '$18$'],
      answer: 0,
      solution: 'Writing $4n$ means $4 \\times n$ — a number next to a variable is a multiplication in disguise. So $4n = 4 \\times 6 = 24$.',
    },
    {
      q: 'Evaluate $2x + 3$ when $x = 5$.',
      choices: ['$16$', '$13$', '$25$', '$10$'],
      answer: 1,
      solution: 'Substitute $x = 5$, then multiply before adding: $2 \\times 5 + 3 = 10 + 3 = 13$. (Careful: adding first would give $2 \\times 8 = 16$, but multiplication comes before addition.)',
    },
    {
      q: 'Combine like terms: $5x + 3x$.',
      choices: ['$15x$', '$8x^2$', '$2x$', '$8x$'],
      answer: 3,
      solution: 'Five $x$s plus three $x$s makes eight $x$s: $5x + 3x = 8x$. We add the coefficients — the variable part does not change, so no $x^2$ appears.',
    },
    {
      q: 'Simplify $7a + 2 + 3a$.',
      choices: ['$10a + 2$', '$12a$', '$10a$', '$7a + 5$'],
      answer: 0,
      solution: 'Only like terms combine: $7a + 3a = 10a$. The plain number $2$ has no $a$, so it stays separate: $10a + 2$.',
    },
    {
      q: 'Distribute: $4(x + 6)$.',
      choices: ['$4x + 6$', '$x + 24$', '$4x + 24$', '$10x$'],
      answer: 2,
      solution: 'The $4$ must multiply BOTH terms inside the parentheses: $4 \\times x + 4 \\times 6 = 4x + 24$. Leaving the $6$ alone gives $4x + 6$, which is the classic slip.',
    },
    {
      q: 'Evaluate $2x^2$ when $x = 3$.',
      choices: ['$36$', '$18$', '$12$', '$81$'],
      answer: 1,
      solution: 'Exponents come before multiplication: first $x^2 = 3^2 = 9$, then $2 \\times 9 = 18$. Squaring the $2x$ first would give $6^2 = 36$, but only the $x$ is squared here.',
    },
    {
      q: 'Which expression means "$5$ less than twice a number $n$"?',
      choices: ['$5 - 2n$', '$2(n - 5)$', '$5n - 2$', '$2n - 5$'],
      answer: 3,
      solution: '"Twice a number $n$" is $2n$, and "$5$ less than" that means we take $5$ away FROM it: $2n - 5$. The phrase $5 - 2n$ says the opposite — it takes $2n$ away from $5$.',
    },
    {
      q: 'Simplify $3(2x + 4) - 5x$.',
      choices: ['$x + 12$', '$6x + 12$', '$11x + 12$', '$x + 4$'],
      answer: 0,
      solution: 'Distribute first: $3(2x + 4) = 6x + 12$. Then combine like terms: $6x + 12 - 5x = x + 12$. The $12$ survives because there is no other plain number to combine with.',
    },
    {
      q: 'Evaluate $2a - 3b$ when $a = 4$ and $b = -2$.',
      choices: ['$2$', '$14$', '$-14$', '$10$'],
      answer: 1,
      solution: 'Substitute carefully: $2 \\times 4 - 3 \\times (-2) = 8 - (-6)$. Subtracting a negative is adding: $8 + 6 = 14$. (Treating $b$ as $+2$ gives $8 - 6 = 2$ — keep that minus sign glued to the $2$!)',
    },
  ],
}

const s52 = {
  id: '5.2',
  title: 'Solving Linear Equations I',
  learn: {
    concepts: [
      {
        heading: 'An equation is a balance scale',
        body: 'An equation says two expressions weigh exactly the same. Whatever you do to one side, you must do to the other, or the scale tips and the equation stops being true. This one rule powers everything in this chapter.',
      },
      {
        heading: 'Undo with the opposite operation',
        body: 'To get the variable alone, undo what was done to it. Addition is undone by subtraction, and multiplication is undone by division. If $x + 9 = 15$, subtract $9$ from both sides to peel the $9$ away: $x = 6$.',
      },
      {
        heading: 'Two-step equations: unwrap in reverse',
        body: 'In $3x + 5 = 20$, the $x$ was first multiplied by $3$, then had $5$ added — like wrapping a present. To unwrap, reverse the order: first subtract $5$ from both sides, then divide both sides by $3$.',
      },
      {
        heading: 'Always check your solution',
        body: 'Substitute your answer back into the ORIGINAL equation. If both sides come out equal, you know your solution is right — no answer key needed. Checking takes ten seconds and catches almost every slip.',
      },
    ],
    examples: [
      {
        problem: 'Solve $x + 9 = 15$.',
        steps: [
          'The $x$ has $9$ added to it, so undo that by subtracting $9$ from both sides.',
          '$x + 9 - 9 = 15 - 9$, which simplifies to $x = 6$.',
          'Check: $6 + 9 = 15$. ✓',
        ],
        answer: '$x = 6$',
      },
      {
        problem: 'Solve $\\frac{x}{4} = 7$.',
        steps: [
          'The $x$ has been divided by $4$, so undo that by multiplying both sides by $4$.',
          '$\\frac{x}{4} \\times 4 = 7 \\times 4$, so $x = 28$.',
          'Check: $28 \\div 4 = 7$. ✓',
        ],
        answer: '$x = 28$',
      },
      {
        problem: 'Solve $3x + 5 = 20$.',
        steps: [
          'Undo the addition first: subtract $5$ from both sides to get $3x = 15$.',
          'Now undo the multiplication: divide both sides by $3$ to get $x = 5$.',
          'Check in the original: $3 \\times 5 + 5 = 15 + 5 = 20$. ✓',
        ],
        answer: '$x = 5$',
      },
    ],
  },
  problems: [
    {
      q: 'Solve $x + 8 = 13$.',
      choices: ['$21$', '$5$', '$-5$', '$6$'],
      answer: 1,
      solution: 'Subtract $8$ from both sides: $x = 13 - 8 = 5$. Check: $5 + 8 = 13$. ✓ (Adding $8$ instead would give $21$ — but we must UNDO the addition, not repeat it.)',
    },
    {
      q: 'Solve $x - 6 = 10$.',
      choices: ['$4$', '$-4$', '$60$', '$16$'],
      answer: 3,
      solution: 'The $x$ had $6$ subtracted, so add $6$ to both sides: $x = 10 + 6 = 16$. Check: $16 - 6 = 10$. ✓',
    },
    {
      q: 'Solve $5x = 45$.',
      choices: ['$9$', '$40$', '$50$', '$225$'],
      answer: 0,
      solution: '$5x$ means $5$ times $x$, so undo with division: $x = 45 \\div 5 = 9$. Check: $5 \\times 9 = 45$. ✓',
    },
    {
      q: 'Solve $\\frac{x}{3} = 12$.',
      choices: ['$4$', '$9$', '$36$', '$15$'],
      answer: 2,
      solution: 'The $x$ was divided by $3$, so multiply both sides by $3$: $x = 12 \\times 3 = 36$. Check: $36 \\div 3 = 12$. ✓ (Dividing again would give $4$, but that shrinks $x$ twice.)',
    },
    {
      q: 'Solve $2x + 7 = 19$.',
      choices: ['$13$', '$26$', '$12$', '$6$'],
      answer: 3,
      solution: 'Subtract $7$ first: $2x = 12$. Then divide by $2$: $x = 6$. Check: $2 \\times 6 + 7 = 19$. ✓',
    },
    {
      q: 'Solve $4x - 5 = 23$.',
      choices: ['$\\frac{9}{2}$', '$7$', '$28$', '$92$'],
      answer: 1,
      solution: 'The $5$ was subtracted, so ADD $5$ to both sides: $4x = 28$. Then divide by $4$: $x = 7$. Check: $4 \\times 7 - 5 = 28 - 5 = 23$. ✓ (Subtracting $5$ instead gives $4x = 18$ — the wrong direction.)',
    },
    {
      q: 'Solve $x - 14 = -6$.',
      choices: ['$8$', '$-20$', '$20$', '$-8$'],
      answer: 0,
      solution: 'Add $14$ to both sides: $x = -6 + 14 = 8$. Check: $8 - 14 = -6$. ✓ A negative on the right just means the answer sits below $14$, not below $0$.',
    },
    {
      q: 'Solve $\\frac{x}{5} + 2 = 6$.',
      choices: ['$\\frac{4}{5}$', '$40$', '$20$', '$4$'],
      answer: 2,
      solution: 'Subtract $2$ first: $\\frac{x}{5} = 4$. Then multiply by $5$: $x = 20$. Check: $20 \\div 5 + 2 = 4 + 2 = 6$. ✓',
    },
    {
      q: 'Solve $-2x + 9 = 1$.',
      choices: ['$-4$', '$5$', '$4$', '$-5$'],
      answer: 2,
      solution: 'Subtract $9$: $-2x = -8$. Divide by $-2$: $x = 4$ — a negative divided by a negative is positive. Check: $-2 \\times 4 + 9 = -8 + 9 = 1$. ✓',
    },
    {
      q: 'Which equation has $x = 4$ as a solution?',
      choices: ['$3x + 2 = 14$', '$2x - 5 = 13$', '$5x = 9$', '$x + 4 = 4$'],
      answer: 0,
      solution: 'Substitute $x = 4$ into each: $3 \\times 4 + 2 = 14$. ✓ The others fail: $2 \\times 4 - 5 = 3$, not $13$; $5 \\times 4 = 20$, not $9$; and $4 + 4 = 8$, not $4$. Checking by substitution settles it every time.',
    },
  ],
}

const s53 = {
  id: '5.3',
  title: 'Solving Linear Equations II',
  learn: {
    concepts: [
      {
        heading: 'Gather the variables on one side',
        body: 'When $x$ appears on both sides, use the balance rule to herd all the $x$s to one side and all the plain numbers to the other. In $5x = 2x + 12$, subtract $2x$ from both sides: $3x = 12$, and now it is a one-step equation.',
      },
      {
        heading: 'Distribute before you solve',
        body: 'If the equation has parentheses, open them first with the distributive property. Turning $4(x + 3) = 22 + 2x$ into $4x + 12 = 22 + 2x$ makes every term visible — then gather and solve as usual.',
      },
      {
        heading: 'Clear fractions early',
        body: 'Fractions in an equation are not scary — multiply BOTH sides by a number that wipes out every denominator. For $\\frac{x}{2} + \\frac{x}{3} = 10$, multiplying both sides by $6$ gives $3x + 2x = 60$: no fractions in sight.',
      },
      {
        heading: 'Two strange cases',
        body: 'Sometimes the variables vanish entirely. If you are left with a false statement like $4 = 9$, the equation has NO solution. If you are left with a true statement like $2 = 2$, then EVERY number is a solution. Both are rare, but worth recognizing.',
      },
    ],
    examples: [
      {
        problem: 'Solve $5x = 2x + 12$.',
        steps: [
          'Subtract $2x$ from both sides to collect the variables: $5x - 2x = 12$, so $3x = 12$.',
          'Divide both sides by $3$: $x = 4$.',
          'Check: left side $5 \\times 4 = 20$; right side $2 \\times 4 + 12 = 20$. ✓',
        ],
        answer: '$x = 4$',
      },
      {
        problem: 'Solve $2(x + 3) = 16$.',
        steps: [
          'Distribute the $2$: the equation becomes $2x + 6 = 16$.',
          'Subtract $6$ from both sides: $2x = 10$. Then divide by $2$: $x = 5$.',
          'Check: $2(5 + 3) = 2 \\times 8 = 16$. ✓',
        ],
        answer: '$x = 5$',
      },
      {
        problem: 'Solve $\\frac{x}{3} + \\frac{x}{6} = 3$.',
        steps: [
          'Multiply both sides by $6$ to clear both denominators: $6 \\times \\frac{x}{3} + 6 \\times \\frac{x}{6} = 18$.',
          'That simplifies to $2x + x = 18$, so $3x = 18$ and $x = 6$.',
          'Check: $\\frac{6}{3} + \\frac{6}{6} = 2 + 1 = 3$. ✓',
        ],
        answer: '$x = 6$',
      },
    ],
  },
  problems: [
    {
      q: 'Solve $7x = 3x + 20$.',
      choices: ['$2$', '$20$', '$4$', '$5$'],
      answer: 3,
      solution: 'Subtract $3x$ from both sides: $4x = 20$, so $x = 5$. Check: $7 \\times 5 = 35$ and $3 \\times 5 + 20 = 35$. ✓ (Adding the $3x$ instead gives $10x = 20$ — but we need the variables to cancel on one side, not pile up.)',
    },
    {
      q: 'Solve $6x - 4 = 2x + 16$.',
      choices: ['$5$', '$3$', '$-5$', '$\\frac{5}{2}$'],
      answer: 0,
      solution: 'Subtract $2x$ from both sides: $4x - 4 = 16$. Add $4$: $4x = 20$, so $x = 5$. Check: $6 \\times 5 - 4 = 26$ and $2 \\times 5 + 16 = 26$. ✓',
    },
    {
      q: 'Solve $3(x - 2) = 15$.',
      choices: ['$5$', '$\\frac{17}{3}$', '$7$', '$3$'],
      answer: 2,
      solution: 'Divide both sides by $3$ first: $x - 2 = 5$, so $x = 7$. (Or distribute: $3x - 6 = 15$, then $3x = 21$, so $x = 7$ — same answer either way.) Check: $3(7 - 2) = 15$. ✓',
    },
    {
      q: 'Solve $\\frac{2x}{3} = 8$.',
      choices: ['$\\frac{16}{3}$', '$12$', '$24$', '$48$'],
      answer: 1,
      solution: 'Multiply both sides by $3$: $2x = 24$. Then divide by $2$: $x = 12$. Check: $\\frac{2 \\times 12}{3} = \\frac{24}{3} = 8$. ✓',
    },
    {
      q: 'Solve $4(x + 3) = 2x + 22$.',
      choices: ['$5$', '$\\frac{19}{2}$', '$\\frac{5}{3}$', '$10$'],
      answer: 0,
      solution: 'Distribute: $4x + 12 = 2x + 22$ — the $4$ must reach the $3$ too! Subtract $2x$: $2x + 12 = 22$. Subtract $12$: $2x = 10$, so $x = 5$. Check: $4(5 + 3) = 32$ and $2 \\times 5 + 22 = 32$. ✓',
    },
    {
      q: 'Solve $\\frac{x}{2} + \\frac{x}{3} = 10$.',
      choices: ['$2$', '$60$', '$50$', '$12$'],
      answer: 3,
      solution: 'Multiply both sides by $6$ to clear the fractions: $3x + 2x = 60$, so $5x = 60$ and $x = 12$. Check: $\\frac{12}{2} + \\frac{12}{3} = 6 + 4 = 10$. ✓',
    },
    {
      q: 'Solve $5x + 4 = 5x + 9$.',
      choices: ['$x = 1$', 'No solution', '$x = 5$', 'Every number is a solution'],
      answer: 1,
      solution: 'Subtract $5x$ from both sides and the variables vanish, leaving $4 = 9$ — which is false no matter what $x$ is. A number plus $4$ can never equal the same number plus $9$, so the equation has no solution.',
    },
    {
      q: 'Solve $2(3x + 1) = 6x + 2$.',
      choices: ['$x = 0$', 'No solution', 'Every number is a solution', '$x = 2$'],
      answer: 2,
      solution: 'Distribute the left side: $6x + 2 = 6x + 2$. Both sides are identical! Subtracting $6x$ leaves $2 = 2$, which is always true — so every number is a solution. Try $x = 0$ or $x = 10$: both work.',
    },
    {
      q: 'Solve $\\frac{x + 4}{3} = \\frac{x}{2}$.',
      choices: ['$8$', '$4$', '$-8$', '$2$'],
      answer: 0,
      solution: 'Multiply both sides by $6$: $2(x + 4) = 3x$, so $2x + 8 = 3x$. Subtract $2x$: $x = 8$. Check: $\\frac{8 + 4}{3} = 4$ and $\\frac{8}{2} = 4$. ✓',
    },
    {
      q: 'Solve $3(2x - 5) = 4x + 7$.',
      choices: ['$-4$', '$11$', '$6$', '$-11$'],
      answer: 1,
      solution: 'Distribute: $6x - 15 = 4x + 7$ — the $3$ multiplies the $-5$ as well. Subtract $4x$: $2x - 15 = 7$. Add $15$: $2x = 22$, so $x = 11$. Check: $3(22 - 5) = 51$ and $4 \\times 11 + 7 = 51$. ✓ (Forgetting to distribute to the $-5$ leads to $x = 6$ — a trap!)',
    },
  ],
}

const s54 = {
  id: '5.4',
  title: 'Word Problems',
  learn: {
    concepts: [
      {
        heading: 'Name the unknown first',
        body: 'Every word problem starts the same way: pick a letter and say exactly what it stands for. "Let $n$ be the number of tickets" is a full sentence of mathematics — and once the unknown has a name, the story can be translated.',
      },
      {
        heading: 'Translate phrase by phrase',
        body: '"More than" becomes $+$, "times" becomes $\\times$, and "is" becomes $=$. The sentence "three times a number, plus $4$, is $19$" translates directly to $3n + 4 = 19$. You are not solving yet — just rewriting English as math.',
      },
      {
        heading: 'Consecutive integers are neighbors',
        body: 'Consecutive integers follow one after another, so if the first is $n$, the next are $n + 1$ and $n + 2$. Consecutive EVEN (or odd) integers hop by two: $n$, $n + 2$, $n + 4$. One variable describes them all.',
      },
      {
        heading: 'Answer the question that was asked',
        body: 'Solving the equation gives you the value of your variable — but the question might ask for something else, like the OTHER person\'s age or the LARGEST of the integers. Reread the question, then check your answer against the story itself.',
      },
    ],
    examples: [
      {
        problem: 'Three times a number, plus $4$, is $19$. What is the number?',
        steps: [
          'Let $n$ be the number. The sentence translates to $3n + 4 = 19$.',
          'Subtract $4$ from both sides: $3n = 15$. Divide by $3$: $n = 5$.',
          'Check against the story: three times $5$ is $15$, plus $4$ is $19$. ✓',
        ],
        answer: 'The number is $5$',
      },
      {
        problem: 'Maya is $3$ years older than twice her brother\'s age. Maya is $13$. How old is her brother?',
        steps: [
          'Let $b$ be the brother\'s age. "Three more than twice $b$" is $2b + 3$, and that equals $13$: so $2b + 3 = 13$.',
          'Subtract $3$: $2b = 10$. Divide by $2$: $b = 5$.',
          'Check: twice $5$ is $10$, and $3$ more is $13$ — exactly Maya\'s age. ✓',
        ],
        answer: 'Her brother is $5$ years old',
      },
      {
        problem: 'Two consecutive integers add up to $35$. Find them.',
        steps: [
          'Let the smaller integer be $n$; then the next one is $n + 1$. Their sum: $n + (n + 1) = 35$.',
          'Combine like terms: $2n + 1 = 35$, so $2n = 34$ and $n = 17$.',
          'The integers are $17$ and $18$. Check: $17 + 18 = 35$. ✓',
        ],
        answer: 'The integers are $17$ and $18$',
      },
    ],
  },
  problems: [
    {
      q: 'Seven more than a number is $15$. What is the number?',
      choices: ['$8$', '$22$', '$7$', '$105$'],
      answer: 0,
      solution: 'Let $n$ be the number: $n + 7 = 15$. Subtract $7$: $n = 8$. Check: $8 + 7 = 15$. ✓',
    },
    {
      q: 'A number doubled is $26$. What is the number?',
      choices: ['$52$', '$24$', '$13$', '$28$'],
      answer: 2,
      solution: '"Doubled" means multiplied by $2$: $2n = 26$, so $n = 13$. Check: $2 \\times 13 = 26$. ✓ (Doubling $26$ gives $52$ — that runs the story forward instead of backward.)',
    },
    {
      q: 'Five times a number, minus $2$, is $33$. What is the number?',
      choices: ['$\\frac{31}{5}$', '$35$', '$5$', '$7$'],
      answer: 3,
      solution: 'The equation is $5n - 2 = 33$. Add $2$ to both sides: $5n = 35$. Divide by $5$: $n = 7$. Check: $5 \\times 7 - 2 = 33$. ✓',
    },
    {
      q: 'Ben has $4$ more marbles than Jill. Together they have $20$ marbles. How many does BEN have?',
      choices: ['$8$', '$12$', '$16$', '$10$'],
      answer: 1,
      solution: 'Let $j$ be Jill\'s marbles; Ben has $j + 4$. Together: $j + (j + 4) = 20$, so $2j = 16$ and $j = 8$. But the question asks about Ben: $8 + 4 = 12$. Check: $8 + 12 = 20$. ✓',
    },
    {
      q: 'Two consecutive integers add up to $45$. What is the smaller one?',
      choices: ['$23$', '$44$', '$22$', '$\\frac{45}{2}$'],
      answer: 2,
      solution: 'Let the smaller be $n$: then $n + (n + 1) = 45$, so $2n + 1 = 45$, giving $2n = 44$ and $n = 22$. The integers are $22$ and $23$; the smaller is $22$. Check: $22 + 23 = 45$. ✓ (Stopping at $2n = 44$ reports $44$; $23$ is the LARGER of the pair; and splitting $45$ straight down the middle gives $\\frac{45}{2}$, which is not even a whole number — a sign the $+1$ was dropped.)',
    },
    {
      q: 'Sara is $4$ years older than Tom, and their ages add up to $30$. How old is Tom?',
      choices: ['$13$', '$17$', '$15$', '$11$'],
      answer: 0,
      solution: 'Let $t$ be Tom\'s age; Sara is $t + 4$. Then $t + (t + 4) = 30$, so $2t = 26$ and $t = 13$. Check: Tom is $13$, Sara is $17$, and $13 + 17 = 30$. ✓',
    },
    {
      q: 'Concert tickets cost $\\$6$ each, plus a single $\\$4$ booking fee for the whole order. Ken paid $\\$40$ in total. How many tickets did he buy?',
      choices: ['$7$', '$9$', '$5$', '$6$'],
      answer: 3,
      solution: 'Let $t$ be the number of tickets: $6t + 4 = 40$. Subtract the fee: $6t = 36$, so $t = 6$. Check: $6 \\times 6 + 4 = 40$. ✓ Take the fee off first — it is charged once, not per ticket.',
    },
    {
      q: 'Three consecutive integers add up to $48$. What is the LARGEST of them?',
      choices: ['$15$', '$17$', '$16$', '$18$'],
      answer: 1,
      solution: 'Let the smallest be $n$: then $n + (n + 1) + (n + 2) = 48$, so $3n + 3 = 48$, giving $3n = 45$ and $n = 15$. The integers are $15$, $16$, $17$ — and the question asks for the largest: $17$. Check: $15 + 16 + 17 = 48$. ✓',
    },
    {
      q: 'Lena has twice as many stickers as Ravi. Together they have $36$ stickers. How many does LENA have?',
      choices: ['$12$', '$18$', '$27$', '$24$'],
      answer: 3,
      solution: 'Let $r$ be Ravi\'s stickers; Lena has $2r$. Together: $r + 2r = 36$, so $3r = 36$ and $r = 12$. Lena has $2 \\times 12 = 24$. Check: $12 + 24 = 36$. ✓ (The answer $12$ is Ravi\'s count — reread which person the question asks about!)',
    },
    {
      q: 'A number tripled, then decreased by $7$, gives the same result as the number increased by $9$. What is the number?',
      choices: ['$8$', '$4$', '$-8$', '$1$'],
      answer: 0,
      solution: 'Translate both halves: $3n - 7 = n + 9$. Subtract $n$: $2n - 7 = 9$. Add $7$: $2n = 16$, so $n = 8$. Check: $3 \\times 8 - 7 = 17$ and $8 + 9 = 17$. ✓',
    },
  ],
}

const s55 = {
  id: '5.5',
  title: 'Inequalities',
  learn: {
    concepts: [
      {
        heading: 'A solution is a whole crowd',
        body: 'An inequality like $x > 3$ is true for MANY numbers: $4$, $5$, $3.1$, $100$, and infinitely more. The symbols: $>$ means greater than, $<$ means less than, and $\\ge$ and $\\le$ also allow "equal to". So $x \\ge 3$ includes $3$ itself, while $x > 3$ does not.',
      },
      {
        heading: 'Adding and subtracting are safe',
        body: 'You can add or subtract the same number on both sides of an inequality, just like an equation, and the direction of the sign stays put. If $x + 4 > 10$, subtracting $4$ gives $x > 6$ — no drama.',
      },
      {
        heading: 'Negatives flip the sign',
        body: 'Multiplying or dividing both sides by a NEGATIVE number reverses the inequality. Watch it happen: $2 < 5$ is true, but multiply both sides by $-1$ and you get $-2$ and $-5$ — and $-2 > -5$! The whole number line got mirrored, so the sign must flip.',
      },
      {
        heading: 'Counting integer solutions',
        body: 'Some questions ask how many INTEGERS satisfy an inequality like $-3 < x \\le 2$. List them carefully, respecting which endpoints are included: here $-3$ is out (strict $<$) but $2$ is in ($\\le$). Do not forget that $0$ is an integer too!',
      },
    ],
    examples: [
      {
        problem: 'Solve $x + 5 < 12$.',
        steps: [
          'Subtract $5$ from both sides — addition and subtraction never flip the sign.',
          '$x < 7$. Every number smaller than $7$ works: try $x = 0$, and indeed $0 + 5 = 5 < 12$. ✓',
        ],
        answer: '$x < 7$ — all numbers less than $7$',
      },
      {
        problem: 'Solve $-3x \\ge 15$.',
        steps: [
          'Divide both sides by $-3$ — and because we divided by a negative, FLIP the sign.',
          '$x \\le -5$. The $\\ge$ became $\\le$.',
          'Check with $x = -6$: then $-3 \\times (-6) = 18 \\ge 15$. ✓ And $x = 0$ fails: $0$ is not $\\ge 15$, and indeed $0$ is not $\\le -5$.',
        ],
        answer: '$x \\le -5$ — all numbers less than or equal to $-5$',
      },
      {
        problem: 'How many integers $x$ satisfy $2 \\le x < 6$?',
        steps: [
          'The left end is included ($\\le$), the right end is not ($<$).',
          'List them: $2, 3, 4, 5$. The number $6$ is excluded.',
        ],
        answer: 'There are $4$ integer solutions',
      },
    ],
  },
  problems: [
    {
      q: 'Solve $x + 4 > 10$.',
      choices: ['$x > 14$', '$x > 6$', '$x < 6$', '$x \\ge 6$'],
      answer: 1,
      solution: 'Subtract $4$ from both sides: $x > 6$. Subtracting never flips the sign. Check with $x = 7$: $7 + 4 = 11 > 10$. ✓ And $6$ itself fails, since $6 + 4 = 10$ is not GREATER than $10$ — so $\\ge$ would include one number too many.',
    },
    {
      q: 'Solve $x - 3 \\le 5$.',
      choices: ['$x \\le 8$', '$x \\ge 8$', '$x \\le 2$', '$x < 8$'],
      answer: 0,
      solution: 'Add $3$ to both sides: $x \\le 8$. The sign keeps its direction, and the "or equal" stays too — $x = 8$ works, since $8 - 3 = 5 \\le 5$. ✓',
    },
    {
      q: 'Solve $4x < 28$.',
      choices: ['$x < 24$', '$x > 7$', '$x < 32$', '$x < 7$'],
      answer: 3,
      solution: 'Divide both sides by $4$: $x < 7$. We divided by a POSITIVE number, so the sign does not flip. Check with $x = 5$: $4 \\times 5 = 20 < 28$. ✓',
    },
    {
      q: 'Which value of $x$ is a solution of $2x + 1 > 7$?',
      choices: ['$0$', '$3$', '$4$', '$-4$'],
      answer: 2,
      solution: 'Solving gives $2x > 6$, so $x > 3$. Only $4$ qualifies: $2 \\times 4 + 1 = 9 > 7$. ✓ Careful with $x = 3$: it gives exactly $7$, and $7 > 7$ is false — the boundary itself is not included.',
    },
    {
      q: 'Solve $-2x < 10$.',
      choices: ['$x > -5$', '$x < -5$', '$x < 5$', '$x > 5$'],
      answer: 0,
      solution: 'Divide both sides by $-2$ and FLIP the sign: $x > -5$. Check with $x = 0$: $-2 \\times 0 = 0 < 10$. ✓ Without the flip you would get $x < -5$, but $x = -6$ gives $-2 \\times (-6) = 12$, which is not less than $10$.',
    },
    {
      q: 'Solve $-x \\ge 4$.',
      choices: ['$x \\ge -4$', '$x \\le -4$', '$x \\ge 4$', '$x \\le 4$'],
      answer: 1,
      solution: 'Multiply both sides by $-1$ and flip: $x \\le -4$. Check with $x = -5$: $-(-5) = 5 \\ge 4$. ✓ It makes sense — if the OPPOSITE of $x$ is big and positive, then $x$ itself must be far below zero.',
    },
    {
      q: 'Solve $3x + 2 \\le 14$.',
      choices: ['$x \\ge 4$', '$x \\le \\frac{16}{3}$', '$x \\le 4$', '$x < 4$'],
      answer: 2,
      solution: 'Subtract $2$: $3x \\le 12$. Divide by $3$ (positive, no flip): $x \\le 4$. The boundary is included: $3 \\times 4 + 2 = 14 \\le 14$. ✓',
    },
    {
      q: 'Which sentence describes all solutions of $5x - 3 > 12$?',
      choices: [
        'All numbers less than $3$',
        'All numbers greater than $\\frac{9}{5}$',
        'All numbers greater than or equal to $3$',
        'All numbers greater than $3$',
      ],
      answer: 3,
      solution: 'Add $3$ to both sides: $5x > 15$. Divide by $5$: $x > 3$ — all numbers greater than $3$. The number $3$ itself is excluded, since $5 \\times 3 - 3 = 12$ is not greater than $12$.',
    },
    {
      q: 'How many integers $x$ satisfy $-3 < x \\le 2$?',
      choices: ['$4$', '$5$', '$6$', '$3$'],
      answer: 1,
      solution: 'List them, watching the endpoints: $-3$ is excluded (strict $<$), but $2$ is included ($\\le$). The solutions are $-2, -1, 0, 1, 2$ — that is $5$ integers. Do not skip $0$; it is an integer too!',
    },
    {
      q: 'Solve $7 - 2x < 1$.',
      choices: ['$x < 3$', '$x < -3$', '$x > 3$', '$x > -3$'],
      answer: 2,
      solution: 'Subtract $7$ from both sides: $-2x < -6$. Now divide by $-2$ and FLIP the sign: $x > 3$. Check with $x = 5$: $7 - 10 = -3 < 1$. ✓ Forgetting the flip gives $x < 3$, but $x = 0$ makes the left side $7$, which is not less than $1$.',
    },
  ],
}

const challenge = [
  {
    q: 'Simplify $5(2x - 3) - 2(3x - 7)$.',
    choices: ['$4x - 1$', '$4x - 29$', '$4x + 1$', '$16x - 29$'],
    answer: 0,
    solution: 'Distribute both parts, minding the signs: $5(2x - 3) = 10x - 15$, and $-2(3x - 7) = -6x + 14$ — the $-2$ times $-7$ is POSITIVE $14$. Combine: $10x - 6x = 4x$ and $-15 + 14 = -1$, giving $4x - 1$.',
  },
  {
    q: 'Solve $\\frac{3x - 1}{4} = 5$.',
    choices: ['$\\frac{19}{3}$', '$8$', '$7$', '$21$'],
    answer: 2,
    solution: 'Multiply both sides by $4$: $3x - 1 = 20$. Add $1$: $3x = 21$, so $x = 7$. Check: $\\frac{3 \\times 7 - 1}{4} = \\frac{20}{4} = 5$. ✓',
  },
  {
    q: 'Solve $4(x - 2) = 3(x + 1)$.',
    choices: ['$5$', '$11$', '$-5$', '$-11$'],
    answer: 1,
    solution: 'Distribute both sides: $4x - 8 = 3x + 3$. Subtract $3x$: $x - 8 = 3$. Add $8$: $x = 11$. Check: $4(11 - 2) = 36$ and $3(11 + 1) = 36$. ✓',
  },
  {
    q: 'Evaluate $3a^2 - b$ when $a = 2$ and $b = 5$.',
    choices: ['$31$', '$1$', '$-7$', '$7$'],
    answer: 3,
    solution: 'Square first, then multiply: $a^2 = 4$, so $3a^2 = 12$. Then $12 - 5 = 7$. (Computing $(3 \\times 2)^2 = 36$ first gives $31$ — but the exponent applies only to $a$.)',
  },
  {
    q: 'Twice a number, decreased by $9$, equals the number increased by $6$. What is the number?',
    choices: ['$5$', '$-3$', '$15$', '$-15$'],
    answer: 2,
    solution: 'Translate: $2n - 9 = n + 6$. Subtract $n$: $n - 9 = 6$. Add $9$: $n = 15$. Check: $2 \\times 15 - 9 = 21$ and $15 + 6 = 21$. ✓',
  },
  {
    q: 'Three consecutive EVEN integers add up to $54$. What is the largest of them?',
    choices: ['$20$', '$18$', '$22$', '$16$'],
    answer: 0,
    solution: 'Even neighbors hop by two: let them be $n$, $n + 2$, $n + 4$. Then $3n + 6 = 54$, so $3n = 48$ and $n = 16$. The integers are $16$, $18$, $20$, and the largest is $20$. Check: $16 + 18 + 20 = 54$. ✓',
  },
  {
    q: 'Solve $\\frac{x}{2} - \\frac{x}{5} = 6$.',
    choices: ['$\\frac{60}{7}$', '$2$', '$60$', '$20$'],
    answer: 3,
    solution: 'Multiply both sides by $10$ to clear both denominators: $5x - 2x = 60$, so $3x = 60$ and $x = 20$. Check: $\\frac{20}{2} - \\frac{20}{5} = 10 - 4 = 6$. ✓',
  },
  {
    q: 'Solve $-4x + 3 > 19$.',
    choices: ['$x > -4$', '$x < -4$', '$x < 4$', '$x > 4$'],
    answer: 1,
    solution: 'Subtract $3$: $-4x > 16$. Divide by $-4$ and FLIP the sign: $x < -4$. Check with $x = -5$: $-4 \\times (-5) + 3 = 23 > 19$. ✓ Skipping the flip gives $x > -4$, but $x = 0$ makes the left side just $3$.',
  },
  {
    q: 'Ana\'s dad is $3$ times as old as Ana. In $8$ years, he will be only twice as old as she is then. How old is Ana now?',
    choices: ['$8$', '$16$', '$4$', '$24$'],
    answer: 0,
    solution: 'Let Ana be $a$ now, so her dad is $3a$. In $8$ years: $3a + 8 = 2(a + 8)$. Distribute: $3a + 8 = 2a + 16$, so $a = 8$. Check: Ana is $8$, her dad is $24$; in $8$ years they are $16$ and $32$, and $32 = 2 \\times 16$. ✓',
  },
  {
    q: 'How many integers $x$ satisfy $-2 \\le x < 4$?',
    choices: ['$5$', '$7$', '$4$', '$6$'],
    answer: 3,
    solution: 'The endpoint $-2$ is included ($\\le$) but $4$ is not (strict $<$). List: $-2, -1, 0, 1, 2, 3$ — that is $6$ integers. Counting $4$ as well is the classic off-by-one slip.',
  },
  {
    q: 'Solve $5 - 3(x - 1) = 2x - 7$.',
    choices: ['$-3$', '$3$', '$\\frac{9}{5}$', '$15$'],
    answer: 1,
    solution: 'Distribute the $-3$ carefully: $5 - 3x + 3 = 2x - 7$ — the $-3$ times $-1$ gives $+3$. So $8 - 3x = 2x - 7$. Add $3x$ and add $7$: $15 = 5x$, so $x = 3$. Check: $5 - 3(3 - 1) = -1$ and $2 \\times 3 - 7 = -1$. ✓',
  },
  {
    q: 'A club buys tickets at $\\$9$ each, and a coupon takes $\\$12$ off the whole order. The club pays $\\$150$. How many tickets did it buy?',
    choices: ['$15$', '$17$', '$18$', '$20$'],
    answer: 2,
    solution: 'Let $t$ be the number of tickets: $9t - 12 = 150$. Add $12$: $9t = 162$, so $t = 18$. Check: $9 \\times 18 = 162$, minus the $\\$12$ coupon leaves $\\$150$. ✓',
  },
]

const worksheet = [
  {
    q: 'Evaluate $4x - 7$ when $x = 6$.',
    answer: '$17$',
    solution: 'Substitute and multiply first: $4 \\times 6 - 7 = 24 - 7 = 17$.',
  },
  {
    q: 'Simplify $8a + 3 - 2a + 5$.',
    answer: '$6a + 8$',
    solution: 'Combine like terms: $8a - 2a = 6a$, and $3 + 5 = 8$. Result: $6a + 8$.',
  },
  {
    q: 'Solve $x + 17 = 41$.',
    answer: '$x = 24$',
    solution: 'Subtract $17$ from both sides: $x = 41 - 17 = 24$. Check: $24 + 17 = 41$. ✓',
  },
  {
    q: 'Solve $6x - 11 = 25$.',
    answer: '$x = 6$',
    solution: 'Add $11$ to both sides: $6x = 36$. Divide by $6$: $x = 6$. Check: $6 \\times 6 - 11 = 25$. ✓',
  },
  {
    q: 'Solve $9x = 4x + 35$.',
    answer: '$x = 7$',
    solution: 'Subtract $4x$ from both sides: $5x = 35$, so $x = 7$. Check: $9 \\times 7 = 63$ and $4 \\times 7 + 35 = 63$. ✓',
  },
  {
    q: 'Solve $x - 5 > 2$, and describe the solutions in words.',
    answer: '$x > 7$ — all numbers greater than $7$',
    solution: 'Add $5$ to both sides: $x > 7$. Adding never flips the sign. Every number bigger than $7$ works, and $7$ itself does not, since $7 - 5 = 2$ is not greater than $2$.',
  },
  {
    q: 'Solve $\\frac{x}{3} + \\frac{x}{4} = 14$.',
    answer: '$x = 24$',
    solution: 'Multiply both sides by $12$ to clear the fractions: $4x + 3x = 168$, so $7x = 168$ and $x = 24$. Check: $\\frac{24}{3} + \\frac{24}{4} = 8 + 6 = 14$. ✓',
  },
  {
    q: 'Two consecutive ODD integers add up to $64$. Find both integers.',
    answer: '$31$ and $33$',
    solution: 'Odd neighbors hop by two: let them be $n$ and $n + 2$. Then $2n + 2 = 64$, so $2n = 62$ and $n = 31$. The integers are $31$ and $33$. Check: $31 + 33 = 64$. ✓',
  },
  {
    q: 'Solve $2(3x - 4) = 5x + 1$.',
    answer: '$x = 9$',
    solution: 'Distribute: $6x - 8 = 5x + 1$. Subtract $5x$: $x - 8 = 1$, so $x = 9$. Check: $2(3 \\times 9 - 4) = 2 \\times 23 = 46$ and $5 \\times 9 + 1 = 46$. ✓',
  },
  {
    q: 'Solve $10 - 3x \\ge -2$, then count how many POSITIVE integers are solutions.',
    answer: '$x \\le 4$; there are $4$ positive integer solutions',
    solution: 'Subtract $10$: $-3x \\ge -12$. Divide by $-3$ and FLIP the sign: $x \\le 4$. The positive integers satisfying this are $1, 2, 3, 4$ — four of them. Check the boundary: $10 - 3 \\times 4 = -2 \\ge -2$. ✓',
  },
]

export default {
  id: 'prealgebra-ch05',
  book: 'prealgebra',
  number: 5,
  title: 'Equations and Inequalities',
  intro:
    'This is the chapter where algebra truly begins: you will learn to build expressions, balance equations, and solve for the mystery number hiding inside. By the end, word problems and inequalities will unfold like puzzles — one careful step at a time.',
  sections: [s51, s52, s53, s54, s55],
  challenge,
  worksheet,
}
