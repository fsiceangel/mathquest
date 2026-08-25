// Introduction to Algebra chapter 7 — variations for sections 7.1 and 7.2. All
// problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone, then checked FORWARD
//    through the story (recompute the constant from the answer pair and confirm
//    it matches the given pair), not by re-reading the solution paragraph.
//  - Every solution names the constant out loud — $k = \frac{y}{x}$ for direct,
//    $k = xy$ for inverse — and shows it holding for BOTH the given pair and the
//    answer pair.
//  - Every item carries the WRONG-MODEL distractor: the number a student gets by
//    solving $y = kx$ where the story is $xy = k$, or the other way round. The
//    solution says so by name.
//  - Every story was classified before the numbers were chosen. A fixed job split
//    among workers, machines, or pumps is INVERSE; a steady rate running for a
//    stretch of time is DIRECT. A fixed distance or a fixed volume makes speed and
//    time INVERSE; a fixed price per unit makes cost and amount DIRECT.
//  - Other distractors are named mistakes too — adding the change instead of
//    scaling by it, flipping the division, stopping at the constant, mirroring a
//    percent change instead of taking the reciprocal factor, or forgetting to
//    square or take the root. No two choices in an item share a VALUE.
//  - Story sanity: workers, packers, pumps and tilers come out whole and positive,
//    every time and speed is positive, and money lands on a whole number of cents.

const s71 = [
  // p1 — read the constant straight off a rule already in the form y = kx
  [
    {
      q: 'If $y = 11x$, what is the constant of proportionality?',
      choices: ['$11x$', '$11$', '$x$', '$\\frac{1}{11}$'],
      answer: 1,
      solution:
        'In the form $y = kx$ the constant is the number multiplying $x$, so $k = 11$. Said the other way, the constant is the fixed ratio $k = \\frac{y}{x} = \\frac{11x}{x} = 11$, the same for every pair: at $x = 2$ the rule gives $y = 22$ and $\\frac{22}{2} = 11$. (The choice $11x$ keeps the variable attached, but a constant cannot change with $x$; the choice $x$ names the wrong factor; the choice $\\frac{1}{11}$ is the constant of the flipped rule $x = \\frac{1}{11}y$ — the same relationship, but not the $k$ this question asks for. Note also that for DIRECT proportion $k$ is a ratio, never the product $xy$, which is what an inverse rule would use.)',
    },
    {
      q: 'If $y = \\frac{2}{5}x$, what is the constant of proportionality?',
      choices: ['$x$', '$\\frac{5}{2}$', '$\\frac{2}{5}$', '$\\frac{2}{5}x$'],
      answer: 2,
      solution:
        'The rule is already in the form $y = kx$, so $k = \\frac{2}{5}$. Check the ratio on a pair: at $x = 10$ the rule gives $y = 4$, and $k = \\frac{y}{x} = \\frac{4}{10} = \\frac{2}{5}$. ✓ A constant of proportionality is allowed to be less than $1$ — that just means $y$ grows more slowly than $x$. (The choice $\\frac{5}{2}$ flips the ratio, computing $\\frac{x}{y}$ instead of $\\frac{y}{x}$; the choice $\\frac{2}{5}x$ leaves the variable attached; the choice $x$ names the wrong factor.)',
    },
    {
      q: 'A direct proportion is written $x = 4y$. What is the constant of proportionality $k$ in the form $y = kx$?',
      choices: ['$4$', '$4y$', '$\\frac{1}{4}y$', '$\\frac{1}{4}$'],
      answer: 3,
      solution:
        'The rule is solved for the wrong variable, so divide both sides by $4$: $y = \\frac{1}{4}x$, giving $k = \\frac{1}{4}$. Check with a pair: $y = 3$ gives $x = 12$, and $k = \\frac{y}{x} = \\frac{3}{12} = \\frac{1}{4}$. ✓ (The choice $4$ reads the number off the page without solving for $y$ — that is the constant of the ratio $\\frac{x}{y}$, not $\\frac{y}{x}$; the choices $4y$ and $\\frac{1}{4}y$ keep a variable attached, and a constant cannot move.)',
    },
  ],
  // p2 — one matched pair, find k for a direct proportion
  [
    {
      q: 'Suppose $y$ is directly proportional to $x$, and $y = 42$ when $x = 6$. What is the constant of proportionality?',
      choices: ['$7$', '$252$', '$\\frac{1}{7}$', '$36$'],
      answer: 0,
      solution:
        'For direct proportion the constant is the fixed RATIO: $k = \\frac{y}{x} = \\frac{42}{6} = 7$, so the rule is $y = 7x$. Check it forward: $7 \\times 6 = 42$. ✓ (The choice $252$ is the product $xy$ — that is the constant for INVERSE proportion, $xy = k$, not for direct; the choice $\\frac{1}{7}$ flips the ratio into $\\frac{x}{y}$; the choice $36$ subtracts, but a constant of proportionality is never a difference.)',
    },
    {
      q: 'Suppose $y$ is directly proportional to $x$, and $y = 9$ when $x = 36$. What is the constant of proportionality?',
      choices: ['$4$', '$324$', '$\\frac{1}{4}$', '$27$'],
      answer: 2,
      solution:
        'Divide $y$ by $x$: $k = \\frac{y}{x} = \\frac{9}{36} = \\frac{1}{4}$, so the rule is $y = \\frac{1}{4}x$. Check it forward: $\\frac{1}{4} \\times 36 = 9$. ✓ Here $y$ is smaller than $x$, so $k$ must be less than $1$. (The choice $4$ is $\\frac{x}{y}$, the ratio upside down; the choice $324$ is the product $xy$, the constant an INVERSE proportion would use; the choice $27$ is the difference $36 - 9$.)',
    },
    {
      q: 'Suppose $y$ is directly proportional to $x$, and $y = 7.5$ when $x = 3$. What is the constant of proportionality?',
      choices: ['$\\frac{2}{5}$', '$22.5$', '$4.5$', '$2.5$'],
      answer: 3,
      solution:
        'The constant is the ratio $k = \\frac{y}{x} = \\frac{7.5}{3} = 2.5$, so the rule is $y = 2.5x$. Check it forward: $2.5 \\times 3 = 7.5$. ✓ (The choice $\\frac{2}{5}$ is $\\frac{x}{y} = \\frac{3}{7.5} = 0.4$, the flipped ratio; the choice $22.5$ is the product $xy$, which would be the constant only if the two quantities were INVERSELY proportional; the choice $4.5$ is the difference $7.5 - 3$.)',
    },
  ],
  // p3 — plug a value into a finished rule, both directions
  [
    {
      q: 'The rule is $y = 7x$. What is $y$ when $x = 9$?',
      choices: ['$63$', '$16$', '$\\frac{9}{7}$', '$2$'],
      answer: 0,
      solution:
        'Direct proportion multiplies: $y = 7 \\times 9 = 63$. The constant holds up as a ratio, $\\frac{y}{x} = \\frac{63}{9} = 7$. ✓ (The choice $16$ ADDS $7$ instead of multiplying by it; the choice $\\frac{9}{7}$ divides $x$ by the constant, which is what you would do to solve $9 = 7x$ for $x$ — the wrong question; the choice $2$ subtracts.)',
    },
    {
      q: 'The rule is $y = 12x$. What is $y$ when $x = 5$?',
      choices: ['$17$', '$60$', '$\\frac{12}{5}$', '$7$'],
      answer: 1,
      solution:
        'Multiply: $y = 12 \\times 5 = 60$. Check the constant ratio: $\\frac{60}{5} = 12$. ✓ (The choice $17$ adds $12$ and $5$; the choice $\\frac{12}{5}$ divides the constant by $x$ — that puts $x$ in the denominator, which is the shape of an INVERSE rule $y = \\frac{k}{x}$, not this direct one; the choice $7$ subtracts.)',
    },
    {
      q: 'The rule is $y = 4x$. What is $x$ when $y = 52$?',
      choices: ['$208$', '$56$', '$48$', '$13$'],
      answer: 3,
      solution:
        'This time the output is known, so undo the multiplication: $x = \\frac{52}{4} = 13$. Check it forward through the rule: $4 \\times 13 = 52$. ✓ (The choice $208$ multiplies by $4$ when the question calls for dividing; the choice $56$ adds $4$; the choice $48$ subtracts $4$.)',
    },
  ],
  // p4 — spot the constant ratio in a table
  [
    {
      q: 'In which table do the $(x, y)$ pairs all satisfy $y = kx$ for one single constant $k$?',
      choices: [
        '$(1, 5), (2, 10), (3, 15)$',
        '$(1, 5), (2, 9), (3, 13)$',
        '$(1, 12), (2, 6), (3, 4)$',
        '$(1, 5), (2, 10), (3, 14)$',
      ],
      answer: 0,
      solution:
        'Direct proportion means a constant RATIO, so divide $y$ by $x$ in every pair. For $(1, 5), (2, 10), (3, 15)$: $\\frac{5}{1} = 5$, $\\frac{10}{2} = 5$, $\\frac{15}{3} = 5$, so $k = 5$ and the rule is $y = 5x$. ✓ (The table $(1, 5), (2, 9), (3, 13)$ adds $4$ each step — a constant DIFFERENCE, not a constant ratio; the table $(1, 12), (2, 6), (3, 4)$ has a constant PRODUCT $xy = 12$, which is INVERSE proportion, the other model entirely; the last table matches the ratio twice and then breaks it, since $\\frac{14}{3}$ is not $5$.)',
    },
    {
      q: 'Which of these $(x, y)$ tables keeps the ratio $\\frac{y}{x}$ the same in every pair?',
      choices: [
        '$(2, 20), (4, 10), (5, 8)$',
        '$(2, 6), (4, 12), (5, 15)$',
        '$(2, 6), (4, 8), (5, 9)$',
        '$(2, 6), (4, 12), (5, 16)$',
      ],
      answer: 1,
      solution:
        'Test $\\frac{y}{x}$ in every pair. For $(2, 6), (4, 12), (5, 15)$: $\\frac{6}{2} = 3$, $\\frac{12}{4} = 3$, $\\frac{15}{5} = 3$, so $k = 3$ and $y = 3x$. ✓ (The table $(2, 20), (4, 10), (5, 8)$ keeps the PRODUCT at $40$ every time — that is INVERSE proportion, and its $y$ falls while $x$ rises; the table $(2, 6), (4, 8), (5, 9)$ follows $y = x + 4$, a constant difference whose ratios are $3$, $2$, and $1.8$; the last table holds the ratio for two pairs and then breaks it, since $\\frac{16}{5} = 3.2$.)',
    },
    {
      q: 'Three of the tables below are not direct proportions. Which one is?',
      choices: [
        '$(3, 12), (5, 14), (8, 17)$',
        '$(3, 40), (5, 24), (8, 15)$',
        '$(3, 12), (5, 20), (8, 32)$',
        '$(3, 12), (5, 20), (8, 30)$',
      ],
      answer: 2,
      solution:
        'Divide $y$ by $x$ in every pair. For $(3, 12), (5, 20), (8, 32)$: $\\frac{12}{3} = 4$, $\\frac{20}{5} = 4$, $\\frac{32}{8} = 4$, so $k = 4$ and $y = 4x$. ✓ (The table $(3, 12), (5, 14), (8, 17)$ follows $y = x + 9$ — the gap is constant, the ratio is not; the table $(3, 40), (5, 24), (8, 15)$ has the constant PRODUCT $xy = 120$, so it is INVERSE proportion; the last table agrees twice and then misses, since $\\frac{30}{8} = 3.75$.)',
    },
  ],
  // p5 — find k from one pair, then predict the partner of a new value
  [
    {
      q: 'Suppose $y$ is directly proportional to $x$, and $y = 21$ when $x = 6$. What is $y$ when $x = 10$?',
      choices: ['$25$', '$35$', '$12.6$', '$126$'],
      answer: 1,
      solution:
        'Find the constant ratio first: $k = \\frac{y}{x} = \\frac{21}{6} = 3.5$, so $y = 3.5x$. At $x = 10$: $y = 3.5 \\times 10 = 35$. Check the constant on BOTH pairs: $\\frac{21}{6} = 3.5$ and $\\frac{35}{10} = 3.5$. ✓ (The choice $12.6$ treats the pair as INVERSE, using $k = xy = 126$ and computing $\\frac{126}{10}$ — but in direct proportion a bigger $x$ must give a bigger $y$, not a smaller one; the choice $126$ stops at that wrong constant; the choice $25$ ADDS $4$ to $y$ because $x$ rose by $4$, and direct proportion scales by multiplying, not by adding.)',
    },
    {
      q: 'Suppose $y$ is directly proportional to $x$, and $y = 18$ when $x = 8$. What is $y$ when $x = 20$?',
      choices: ['$30$', '$7.2$', '$45$', '$144$'],
      answer: 2,
      solution:
        'The constant ratio is $k = \\frac{18}{8} = 2.25$, so $y = 2.25x$ and at $x = 20$, $y = 2.25 \\times 20 = 45$. The constant holds on both pairs: $\\frac{18}{8} = 2.25$ and $\\frac{45}{20} = 2.25$. ✓ (The choice $7.2$ uses the INVERSE model, taking $k = xy = 144$ and computing $\\frac{144}{20}$; the choice $144$ reports that product itself; the choice $30$ adds $12$ to $y$ because $x$ went up by $12$.)',
    },
    {
      q: 'Suppose $y$ is directly proportional to $x$, and $y = 27$ when $x = 12$. What is $x$ when $y = 45$?',
      choices: ['$30$', '$101.25$', '$7.2$', '$20$'],
      answer: 3,
      solution:
        'The constant ratio is $k = \\frac{27}{12} = 2.25$, so $y = 2.25x$. Now $y$ is the known one: $x = \\frac{45}{2.25} = 20$. Check the constant on both pairs: $\\frac{27}{12} = 2.25$ and $\\frac{45}{20} = 2.25$. ✓ (The choice $7.2$ treats the pair as INVERSE, using $k = xy = 324$ and computing $\\frac{324}{45}$ — that would make $x$ shrink while $y$ grew; the choice $101.25$ multiplies $45$ by the constant instead of dividing; the choice $30$ adds $18$ to $x$ because $y$ climbed by $18$.)',
    },
  ],
  // p6 — scale one variable, describe what the other does
  [
    {
      q: 'If $y$ is directly proportional to $x$ and $x$ is multiplied by $5$, what happens to $y$?',
      choices: ['It is multiplied by $5$', 'It increases by $5$', 'It is divided by $5$', 'It stays the same'],
      answer: 0,
      solution:
        'Put $5x$ into $y = kx$: the new value is $k(5x) = 5(kx) = 5y$, so $y$ is multiplied by $5$ as well. The ratio $\\frac{y}{x} = k$ is what must stay fixed, and multiplying top and bottom by $5$ leaves it alone: $\\frac{5y}{5x} = \\frac{y}{x}$. ✓ (Increasing by $5$ would add, and proportion scales; being divided by $5$ is what an INVERSE proportion does, where the PRODUCT $xy$ is the constant instead of the ratio.)',
    },
    {
      q: 'If $y$ is directly proportional to $x$ and $x$ is cut in half, what happens to $y$?',
      choices: ['It doubles', 'It decreases by $2$', 'It is cut in half', 'It stays the same'],
      answer: 2,
      solution:
        'Put $\\frac{x}{2}$ into $y = kx$: the new value is $k \\cdot \\frac{x}{2} = \\frac{kx}{2} = \\frac{y}{2}$, so $y$ is halved too. The ratio survives: $\\frac{y/2}{x/2} = \\frac{y}{x} = k$. ✓ (Doubling is the INVERSE response — with $xy = k$ fixed, halving one factor forces the other to double, which is the opposite model; decreasing by $2$ subtracts instead of scaling.)',
    },
    {
      q: 'If $y$ is directly proportional to $x$ and $x$ is multiplied by $\\frac{2}{3}$, what happens to $y$?',
      choices: ['It is multiplied by $\\frac{3}{2}$', 'It is unchanged', 'It decreases by $\\frac{2}{3}$', 'It is multiplied by $\\frac{2}{3}$'],
      answer: 3,
      solution:
        'Put $\\frac{2}{3}x$ into $y = kx$: the new value is $k \\cdot \\frac{2}{3}x = \\frac{2}{3}(kx) = \\frac{2}{3}y$. Both quantities shrink by the same factor, which is exactly what keeps $\\frac{y}{x} = k$ fixed. ✓ (The choice $\\frac{3}{2}$ is the INVERSE response: if the constant were the product $xy$, shrinking $x$ by $\\frac{2}{3}$ would force $y$ up by the reciprocal $\\frac{3}{2}$; "decreases by $\\frac{2}{3}$" subtracts a number rather than scaling.)',
    },
  ],
  // p7 — money and rate stories that really are direct
  [
    {
      q: 'Rope is sold by the metre at one fixed price per metre. If $4$ metres cost $\\$7$, how much do $10$ metres cost?',
      choices: ['$\\$17.50$', '$\\$13.00$', '$\\$2.80$', '$\\$70.00$'],
      answer: 0,
      solution:
        'A fixed price per metre makes cost directly proportional to length, so the constant is the price per metre: $k = \\frac{y}{x} = \\frac{7}{4} = \\$1.75$ per metre. Then $10$ metres cost $10 \\times 1.75 = \\$17.50$. The constant checks out on both pairs: $\\frac{7}{4} = 1.75$ and $\\frac{17.50}{10} = 1.75$. ✓ (The choice $\\$2.80$ treats this as INVERSE, using $k = xy = 28$ and computing $\\frac{28}{10}$ — that would mean buying more rope costs less, which no shop does; the choice $\\$13.00$ adds $\\$6$ because we asked for $6$ more metres, which would only be right at $\\$1$ per metre; the choice $\\$70.00$ multiplies $7 \\times 10$ and forgets to divide by the $4$ metres.)',
    },
    {
      q: 'A press prints at a steady rate, turning out $240$ pages in $6$ minutes. How many pages does it print in $15$ minutes?',
      choices: ['$249$', '$600$', '$96$', '$1440$'],
      answer: 1,
      solution:
        'The press runs at one steady rate and nothing caps the job, so pages are directly proportional to time: $k = \\frac{y}{x} = \\frac{240}{6} = 40$ pages per minute. In $15$ minutes it prints $40 \\times 15 = 600$ pages. Check the rate on both pairs: $\\frac{240}{6} = 40$ and $\\frac{600}{15} = 40$. ✓ (The choice $96$ uses the INVERSE model, treating $xy = 1440$ as the constant and computing $\\frac{1440}{15}$ — that says running longer prints fewer pages; the choice $1440$ reports that product itself; the choice $249$ adds $9$ pages because we added $9$ minutes.)',
    },
    {
      q: 'A café buys milk at one fixed price per litre. If $8$ litres cost $\\$6$, how many litres can be bought for $\\$15$?',
      choices: ['$17$ litres', '$3.2$ litres', '$11.25$ litres', '$20$ litres'],
      answer: 3,
      solution:
        'A fixed price per litre makes the two amounts directly proportional. Take the constant as litres per dollar: $k = \\frac{8}{6} = \\frac{4}{3}$ litres per dollar, so $\\$15$ buys $15 \\times \\frac{4}{3} = 20$ litres. The constant holds on both pairs: $\\frac{8}{6} = \\frac{4}{3}$ and $\\frac{20}{15} = \\frac{4}{3}$. ✓ (Equivalently the milk costs $\\$0.75$ a litre and $15 \\div 0.75 = 20$.) (The choice $3.2$ uses the INVERSE model, taking the product $8 \\times 6 = 48$ as the constant and computing $\\frac{48}{15}$ — that would mean more money buys less milk; the choice $17$ adds $9$ litres because we spent $\\$9$ more; the choice $11.25$ multiplies $15$ by the price $0.75$ instead of dividing by it.)',
    },
  ],
  // p8 — direct proportion to the square
  [
    {
      q: 'Suppose $y$ is directly proportional to $x^2$, and $y = 12$ when $x = 2$. What is $y$ when $x = 4$?',
      choices: ['$48$', '$24$', '$96$', '$3$'],
      answer: 0,
      solution:
        'The rule has the form $y = kx^2$. Square first, then divide: $k = \\frac{y}{x^2} = \\frac{12}{4} = 3$, so $y = 3x^2$. At $x = 4$: $y = 3 \\times 16 = 48$. The constant holds on both pairs: $\\frac{12}{2^2} = 3$ and $\\frac{48}{4^2} = 3$. ✓ (The choice $24$ uses plain direct proportion $y = 6x$, ignoring the square — but doubling $x$ multiplies $x^2$ by $4$, not by $2$; the choice $96$ uses the ratio $\\frac{y}{x} = 6$ as the constant and then squares anyway, computing $6 \\times 16$; the choice $3$ uses the INVERSE-square model $y = \\frac{k}{x^2}$ with $k = 12 \\times 4 = 48$, which makes $y$ fall when the story has it rising.)',
    },
    {
      q: 'Suppose $y$ is directly proportional to $x^2$, and $y = 45$ when $x = 3$. What is $y$ when $x = 6$?',
      choices: ['$90$', '$180$', '$540$', '$11.25$'],
      answer: 1,
      solution:
        'From $y = kx^2$: $45 = k \\times 9$, so $k = 5$ and $y = 5x^2$. At $x = 6$: $y = 5 \\times 36 = 180$. Check on both pairs: $\\frac{45}{3^2} = 5$ and $\\frac{180}{6^2} = 5$. ✓ ($x$ doubled, so $y$ was multiplied by $2^2 = 4$.) (The choice $90$ just doubles $y$ because $x$ doubled — that is plain direct proportion, with the square dropped; the choice $540$ uses $\\frac{y}{x} = 15$ as the constant in $y = kx^2$; the choice $11.25$ uses the INVERSE-square model, taking $k = yx^2 = 405$ and computing $\\frac{405}{36}$, which sends $y$ down instead of up.)',
    },
    {
      q: 'Suppose $y$ is directly proportional to $x^2$, and $y = 50$ when $x = 5$. What is the positive value of $x$ when $y = 32$?',
      choices: ['$3.2$', '$16$', '$4$', '$64$'],
      answer: 2,
      solution:
        'From $y = kx^2$: $50 = k \\times 25$, so $k = 2$ and $y = 2x^2$. Now solve $32 = 2x^2$: $x^2 = 16$, so $x = 4$. Check both pairs against the constant: $\\frac{50}{5^2} = 2$ and $\\frac{32}{4^2} = 2$. ✓ (The choice $16$ stops at $x^2$ and forgets the square root; the choice $3.2$ treats the pair as plain direct proportion with $k = \\frac{50}{5} = 10$, computing $\\frac{32}{10}$; the choice $64$ multiplies by the constant instead of dividing by it.)',
    },
  ],
  // p9 — direct proportion to the square root
  [
    {
      q: 'Suppose $y$ is directly proportional to $\\sqrt{x}$, and $y = 10$ when $x = 9$. What is $y$ when $x = 36$?',
      choices: ['$40$', '$20$', '$5$', '$60$'],
      answer: 1,
      solution:
        'The rule is $y = k\\sqrt{x}$. Take the root first: $10 = k\\sqrt{9} = 3k$, so $k = \\frac{10}{3}$. At $x = 36$: $y = \\frac{10}{3} \\times 6 = 20$. The constant holds on both pairs: $\\frac{10}{\\sqrt{9}} = \\frac{10}{3}$ and $\\frac{20}{\\sqrt{36}} = \\frac{20}{6} = \\frac{10}{3}$. ✓ ($x$ was multiplied by $4$, so $\\sqrt{x}$ only doubled.) (The choice $40$ scales $y$ by the full factor $\\frac{36}{9} = 4$, as if $y$ tracked $x$ itself; the choice $5$ uses the INVERSE-root model $y = \\frac{k}{\\sqrt{x}}$ with $k = y\\sqrt{x} = 30$, computing $\\frac{30}{6}$; the choice $60$ multiplies the old $y$ by the new root without ever finding $k$.)',
    },
    {
      q: 'Suppose $y$ is directly proportional to $\\sqrt{x}$, and $y = 12$ when $x = 16$. What is $y$ when $x = 49$?',
      choices: ['$36.75$', '$48$', '$21$', '$\\frac{48}{7}$'],
      answer: 2,
      solution:
        'From $y = k\\sqrt{x}$: $12 = k\\sqrt{16} = 4k$, so $k = 3$. At $x = 49$: $y = 3\\sqrt{49} = 3 \\times 7 = 21$. Check the constant on both pairs: $\\frac{12}{\\sqrt{16}} = 3$ and $\\frac{21}{\\sqrt{49}} = 3$. ✓ (The choice $36.75$ scales $y$ by $\\frac{49}{16}$, treating $y$ as proportional to $x$ rather than to its root; the choice $\\frac{48}{7}$ uses the INVERSE-root model with $k = y\\sqrt{x} = 48$, computing $\\frac{48}{7}$, which shrinks $y$ when it should grow; the choice $48$ stops at that constant $48$ and reports it as the answer.)',
    },
    {
      q: 'Suppose $y$ is directly proportional to $\\sqrt{x}$, and $y = 20$ when $x = 25$. What is $x$ when $y = 12$?',
      choices: ['$15$', '$3$', '$48$', '$9$'],
      answer: 3,
      solution:
        'From $y = k\\sqrt{x}$: $20 = k\\sqrt{25} = 5k$, so $k = 4$ and $y = 4\\sqrt{x}$. Solve $12 = 4\\sqrt{x}$: $\\sqrt{x} = 3$, so $x = 9$. Check both pairs: $\\frac{20}{\\sqrt{25}} = 4$ and $\\frac{12}{\\sqrt{9}} = \\frac{12}{3} = 4$. ✓ (The choice $3$ stops at $\\sqrt{x}$ and never squares; the choice $15$ treats the pair as plain direct proportion with $k = \\frac{20}{25} = 0.8$, computing $\\frac{12}{0.8}$; the choice $48$ multiplies $12$ by $4$ instead of dividing.)',
    },
  ],
  // p10 — how a power changes the scaling factor
  [
    {
      q: 'If $y$ is directly proportional to $x^2$ and $x$ is doubled, then $y$ is multiplied by what factor?',
      choices: ['$4$', '$2$', '$8$', '$\\frac{1}{4}$'],
      answer: 0,
      solution:
        'Replace $x$ with $2x$ in $y = kx^2$: the new value is $k(2x)^2 = 4kx^2 = 4y$. Doubling $x$ multiplies $x^2$ by $4$, so $y$ is multiplied by $4$. Try it with numbers: if $k = 3$ then $x = 5$ gives $y = 75$ and $x = 10$ gives $y = 300$, four times as much. ✓ (The factor $2$ ignores the square; the factor $8$ belongs to $y = kx^3$; the factor $\\frac{1}{4}$ is the INVERSE-square answer, from $y = \\frac{k}{x^2}$, which sends $y$ down instead of up.)',
    },
    {
      q: 'If $y$ is directly proportional to $x^2$ and $x$ is multiplied by $10$, then $y$ is multiplied by what factor?',
      choices: ['$10$', '$20$', '$100$', '$1000$'],
      answer: 2,
      solution:
        'Replace $x$ with $10x$ in $y = kx^2$: the new value is $k(10x)^2 = 100kx^2 = 100y$, so the factor is $100$. Concretely, with $k = 2$: $x = 3$ gives $y = 18$ and $x = 30$ gives $y = 1800$. ✓ (The factor $10$ drops the square; the factor $20$ doubles the multiplier instead of squaring it; the factor $1000$ cubes it, which would suit $y = kx^3$.)',
    },
    {
      q: 'If $y$ is directly proportional to $\\sqrt{x}$ and $x$ is multiplied by $9$, then $y$ is multiplied by what factor?',
      choices: ['$9$', '$81$', '$\\frac{1}{3}$', '$3$'],
      answer: 3,
      solution:
        'Replace $x$ with $9x$ in $y = k\\sqrt{x}$: the new value is $k\\sqrt{9x} = 3k\\sqrt{x} = 3y$, so the factor is $3$. Concretely, with $k = 2$: $x = 4$ gives $y = 4$ and $x = 36$ gives $y = 12$. ✓ (The factor $9$ ignores the root; the factor $81$ squares instead of rooting; the factor $\\frac{1}{3}$ is the INVERSE-root answer, from $y = \\frac{k}{\\sqrt{x}}$, and it moves $y$ the wrong way.)',
    },
  ],
]

const s72 = [
  // p1 — evaluate a finished inverse rule, both directions
  [
    {
      q: 'The rule is $y = \\frac{36}{x}$. What is $y$ when $x = 9$?',
      choices: ['$4$', '$324$', '$27$', '$45$'],
      answer: 0,
      solution:
        'Divide: $y = \\frac{36}{9} = 4$. The constant here is the PRODUCT, and it checks out: $k = xy = 9 \\times 4 = 36$. ✓ (The choice $324$ multiplies $36 \\times 9$ — that is what the DIRECT rule $y = 36x$ would give, but in inverse proportion $x$ lives in the denominator; the choice $27$ subtracts $9$ from $36$; the choice $45$ adds it.)',
    },
    {
      q: 'The rule is $y = \\frac{60}{x}$. What is $y$ when $x = 8$?',
      choices: ['$68$', '$7.5$', '$480$', '$52$'],
      answer: 1,
      solution:
        'Divide: $y = \\frac{60}{8} = 7.5$. Check the constant product: $k = xy = 8 \\times 7.5 = 60$. ✓ An inverse rule does not have to produce whole numbers. (The choice $480$ multiplies, which is the DIRECT reading $y = 60x$; the choice $68$ adds $8$; the choice $52$ subtracts $8$.)',
    },
    {
      q: 'The rule is $y = \\frac{48}{x}$. What is $x$ when $y = 6$?',
      choices: ['$288$', '$42$', '$54$', '$8$'],
      answer: 3,
      solution:
        'Multiply both sides by $x$ to get $xy = 48$, so $x = \\frac{48}{6} = 8$. The constant product holds: $8 \\times 6 = 48$. ✓ Notice the two variables play symmetric roles — the constant is their product, so either one is found by dividing $48$ by the other. (The choice $288$ multiplies $48 \\times 6$, the DIRECT move; the choice $54$ adds $6$; the choice $42$ subtracts $6$.)',
    },
  ],
  // p2 — a constant product given outright
  [
    {
      q: 'Two quantities satisfy $xy = 72$. What is $y$ when $x = 9$?',
      choices: ['$8$', '$648$', '$63$', '$81$'],
      answer: 0,
      solution:
        'A constant product is inverse proportion: $y = \\frac{72}{x} = \\frac{72}{9} = 8$. Check: $k = xy = 9 \\times 8 = 72$. ✓ (The choice $648$ multiplies $72 \\times 9$, which is the DIRECT rule $y = 72x$ — but a constant PRODUCT means dividing, not multiplying; the choice $63$ subtracts $9$; the choice $81$ adds $9$.)',
    },
    {
      q: 'Two quantities satisfy $xy = 90$. What is $x$ when $y = 4$?',
      choices: ['$360$', '$22.5$', '$86$', '$94$'],
      answer: 1,
      solution:
        'The product is fixed at $90$, so $x = \\frac{90}{y} = \\frac{90}{4} = 22.5$. Check: $k = xy = 22.5 \\times 4 = 90$. ✓ (The choice $360$ multiplies $90 \\times 4$ — that is the DIRECT reading, and it also fails the product test, since $360 \\times 4 = 1440$, not $90$; the choice $86$ subtracts $4$; the choice $94$ adds $4$.)',
    },
    {
      q: 'Two quantities satisfy $xy = 54$. What is $y$ when $x = \\frac{1}{2}$?',
      choices: ['$27$', '$53.5$', '$108$', '$54.5$'],
      answer: 2,
      solution:
        'Divide by the fraction: $y = \\frac{54}{1/2} = 54 \\times 2 = 108$. Check the constant product: $\\frac{1}{2} \\times 108 = 54$. ✓ Since $x$ is small, $y$ must be large — the two must trade off to keep the product at $54$. (The choice $27$ multiplies $54 \\times \\frac{1}{2}$, which is the DIRECT rule $y = 54x$; that answer makes $y$ shrink alongside $x$, exactly backwards for inverse proportion. The choice $54.5$ adds $\\frac{1}{2}$ and the choice $53.5$ subtracts it.)',
    },
  ],
  // p3 — scale x, describe y, for the inverse model
  [
    {
      q: 'If $y$ is inversely proportional to $x$ and $x$ is tripled, what happens to $y$?',
      choices: ['It is tripled', 'It is divided by $3$', 'It decreases by $3$', 'It stays the same'],
      answer: 1,
      solution:
        'Put $3x$ into $y = \\frac{k}{x}$: the new value is $\\frac{k}{3x} = \\frac{1}{3} \\cdot \\frac{k}{x} = \\frac{y}{3}$. The product must stay fixed, so if one factor is multiplied by $3$ the other must be divided by $3$: $(3x)\\left(\\frac{y}{3}\\right) = xy = k$. ✓ (Being tripled is the DIRECT response, right for $y = kx$ and wrong here; decreasing by $3$ subtracts instead of scaling, and would not keep the product constant.)',
    },
    {
      q: 'If $y$ is inversely proportional to $x$ and $x$ is cut in half, what happens to $y$?',
      choices: ['It is cut in half', 'It stays the same', 'It doubles', 'It increases by $2$'],
      answer: 2,
      solution:
        'Put $\\frac{x}{2}$ into $y = \\frac{k}{x}$: the new value is $\\frac{k}{x/2} = 2 \\cdot \\frac{k}{x} = 2y$. The product survives: $\\left(\\frac{x}{2}\\right)(2y) = xy = k$. ✓ (Being cut in half is the DIRECT response — with $\\frac{y}{x}$ as the constant both would shrink together, but here they must trade off; increasing by $2$ adds instead of scaling.)',
    },
    {
      q: 'If $y$ is inversely proportional to $x$ and $x$ is multiplied by $\\frac{3}{4}$, what happens to $y$?',
      choices: ['It is multiplied by $\\frac{3}{4}$', 'It is unchanged', 'It decreases by $\\frac{3}{4}$', 'It is multiplied by $\\frac{4}{3}$'],
      answer: 3,
      solution:
        'The product $xy = k$ is fixed, so whatever factor multiplies $x$, its reciprocal must multiply $y$: here that reciprocal is $\\frac{4}{3}$. Checking, $\\left(\\frac{3}{4}x\\right)\\left(\\frac{4}{3}y\\right) = xy = k$. ✓ (The choice $\\frac{3}{4}$ is the DIRECT response, where both quantities scale by the same factor; "decreases by $\\frac{3}{4}$" subtracts a quantity rather than scaling, and it also points the wrong way, since a smaller $x$ must give a LARGER $y$.)',
    },
  ],
  // p4 — one pair, find the inverse constant
  [
    {
      q: 'Suppose $y$ is inversely proportional to $x$, and $y = 8$ when $x = 7$. What is the constant $k$ in $y = \\frac{k}{x}$?',
      choices: ['$56$', '$\\frac{8}{7}$', '$\\frac{7}{8}$', '$15$'],
      answer: 0,
      solution:
        'Multiply the rule by $x$ to see what $k$ is: $xy = k$. So $k = 7 \\times 8 = 56$, and the rule is $y = \\frac{56}{x}$. Check it forward: $\\frac{56}{7} = 8$. ✓ (The choice $\\frac{8}{7}$ is the ratio $\\frac{y}{x}$ — the constant for DIRECT proportion, not inverse; the choice $\\frac{7}{8}$ flips that ratio; the choice $15$ adds, and a constant of proportionality is never a sum.)',
    },
    {
      q: 'Suppose $y$ is inversely proportional to $x$, and $y = 2.5$ when $x = 12$. What is the constant $k$ in $y = \\frac{k}{x}$?',
      choices: ['$4.8$', '$\\frac{5}{24}$', '$30$', '$14.5$'],
      answer: 2,
      solution:
        'For inverse proportion $k$ is the constant product: $k = xy = 12 \\times 2.5 = 30$, so $y = \\frac{30}{x}$. Check it forward: $\\frac{30}{12} = 2.5$. ✓ (The choice $\\frac{5}{24}$ is $\\frac{y}{x} = \\frac{2.5}{12}$, the DIRECT constant; the choice $4.8$ is $\\frac{x}{y}$, that ratio upside down; the choice $14.5$ adds the two values.)',
    },
    {
      q: 'Suppose $y$ is inversely proportional to $x$, and $y = \\frac{3}{4}$ when $x = 8$. What is the constant $k$ in $y = \\frac{k}{x}$?',
      choices: ['$\\frac{3}{32}$', '$\\frac{32}{3}$', '$8.75$', '$6$'],
      answer: 3,
      solution:
        'The constant is the product: $k = xy = 8 \\times \\frac{3}{4} = 6$, so $y = \\frac{6}{x}$. Check it forward: $\\frac{6}{8} = \\frac{3}{4}$. ✓ (The choice $\\frac{3}{32}$ is the ratio $\\frac{y}{x}$, which is the constant DIRECT proportion would use; the choice $\\frac{32}{3}$ is $\\frac{x}{y}$; the choice $8.75$ adds $8$ and $\\frac{3}{4}$.)',
    },
  ],
  // p5 — one pair, then predict the partner of a new value
  [
    {
      q: 'Suppose $y$ is inversely proportional to $x$, and $y = 9$ when $x = 4$. What is $y$ when $x = 12$?',
      choices: ['$3$', '$27$', '$17$', '$1$'],
      answer: 0,
      solution:
        'The constant is the product: $k = xy = 4 \\times 9 = 36$, so $y = \\frac{36}{x}$. At $x = 12$: $y = \\frac{36}{12} = 3$. The product holds on BOTH pairs: $4 \\times 9 = 36$ and $12 \\times 3 = 36$. ✓ ($x$ tripled, so $y$ fell to a third.) (The choice $27$ uses DIRECT proportion, with $k = \\frac{9}{4} = 2.25$ and $2.25 \\times 12 = 27$ — but a bigger $x$ must give a smaller $y$ here; the choice $17$ adds $8$ to $y$ because $x$ rose by $8$; the choice $1$ subtracts $8$.)',
    },
    {
      q: 'Suppose $y$ is inversely proportional to $x$, and $y = 24$ when $x = 2$. What is $y$ when $x = 6$?',
      choices: ['$72$', '$8$', '$28$', '$20$'],
      answer: 1,
      solution:
        'The constant product is $k = xy = 2 \\times 24 = 48$, so $y = \\frac{48}{x}$ and at $x = 6$, $y = \\frac{48}{6} = 8$. Check both pairs: $2 \\times 24 = 48$ and $6 \\times 8 = 48$. ✓ ($x$ tripled and $y$ fell to a third, as it must.) (The choice $72$ uses the DIRECT model, with $k = \\frac{24}{2} = 12$ and $12 \\times 6 = 72$, sending $y$ up when it should come down; the choice $28$ adds $4$ to $y$ because $x$ gained $4$; the choice $20$ subtracts $4$.)',
    },
    {
      q: 'Suppose $y$ is inversely proportional to $x$, and $y = 15$ when $x = 4$. What is $x$ when $y = 12$?',
      choices: ['$3.2$', '$180$', '$7$', '$5$'],
      answer: 3,
      solution:
        'The constant product is $k = xy = 4 \\times 15 = 60$. Now $y$ is known, so $x = \\frac{60}{12} = 5$. Check both pairs: $4 \\times 15 = 60$ and $5 \\times 12 = 60$. ✓ ($y$ dropped, so $x$ had to rise.) (The choice $3.2$ uses the DIRECT model, with $k = \\frac{15}{4} = 3.75$ and $\\frac{12}{3.75} = 3.2$, moving $x$ down alongside $y$; the choice $180$ multiplies $15 \\times 12$; the choice $7$ adds $3$ to $x$ because $y$ fell by $3$.)',
    },
  ],
  // p6 — a fixed job shared out: workers up, time down
  [
    {
      q: 'A team of $6$ tilers can floor a hall in $10$ days. Working at the same steady rate, how many days would $15$ tilers need?',
      choices: ['$4$', '$25$', '$19$', '$1$'],
      answer: 0,
      solution:
        'The hall is a fixed job, so (tilers) $\\times$ (days) is constant: $k = xy = 6 \\times 10 = 60$ tiler-days. With $15$ tilers: $\\frac{60}{15} = 4$ days. The constant holds on both pairs: $6 \\times 10 = 60$ and $15 \\times 4 = 60$. ✓ (The choice $25$ uses the DIRECT model, scaling the time up by $\\frac{15}{6}$ — that says a bigger crew takes LONGER, which is backwards for a fixed job; the choice $19$ adds $9$ days because $9$ more tilers arrived; the choice $1$ subtracts $9$.)',
    },
    {
      q: 'A fixed shipment is packed by identical workers. With $9$ packers the shipment takes $8$ hours. How many packers are needed to finish it in $6$ hours?',
      choices: ['$6.75$', '$12$', '$11$', '$7$'],
      answer: 1,
      solution:
        'The shipment is a fixed job, so (packers) $\\times$ (hours) is constant: $k = xy = 9 \\times 8 = 72$ packer-hours. To finish in $6$ hours you need $\\frac{72}{6} = 12$ packers — a whole number, as it must be. The constant holds on both pairs: $9 \\times 8 = 72$ and $12 \\times 6 = 72$. ✓ (The choice $6.75$ uses the DIRECT model, $\\frac{9}{8} \\times 6$, which asks for FEWER packers to finish sooner; it is also not a whole number of people; the choice $11$ adds $2$ packers because the time dropped by $2$ hours; the choice $7$ subtracts $2$.)',
    },
    {
      q: 'A tank is filled by identical pumps. Four pumps fill it in $45$ minutes. How long would $10$ pumps take?',
      choices: ['$112.5$ minutes', '$51$ minutes', '$18$ minutes', '$39$ minutes'],
      answer: 2,
      solution:
        'The tank holds a fixed amount, so (pumps) $\\times$ (minutes) is constant: $k = xy = 4 \\times 45 = 180$ pump-minutes. With $10$ pumps: $\\frac{180}{10} = 18$ minutes. Check both pairs: $4 \\times 45 = 180$ and $10 \\times 18 = 180$. ✓ (The choice $112.5$ uses the DIRECT model, $\\frac{45}{4} \\times 10$, which has more pumps taking longer — impossible for a fixed tank; the choice $51$ adds $6$ minutes because $6$ more pumps were switched on; the choice $39$ subtracts $6$.)',
    },
  ],
  // p7 — spot the constant product in a table
  [
    {
      q: 'In which table do the $(x, y)$ pairs all satisfy $xy = k$ for one single constant $k$?',
      choices: [
        '$(2, 24), (4, 48), (8, 96)$',
        '$(2, 24), (4, 12), (8, 6)$',
        '$(2, 24), (4, 22), (8, 18)$',
        '$(2, 24), (4, 12), (8, 4)$',
      ],
      answer: 1,
      solution:
        'Inverse proportion means a constant PRODUCT, so multiply $x$ by $y$ in every pair. For $(2, 24), (4, 12), (8, 6)$: $2 \\times 24 = 48$, $4 \\times 12 = 48$, $8 \\times 6 = 48$, so $k = 48$ and $y = \\frac{48}{x}$. ✓ (The table $(2, 24), (4, 48), (8, 96)$ has a constant RATIO of $12$ — that is DIRECT proportion, and its $y$ climbs as $x$ climbs; the table $(2, 24), (4, 22), (8, 18)$ follows $y = 26 - x$, a constant difference whose products are $48$, $88$, $144$; the last table matches twice and then breaks, since $8 \\times 4 = 32$.)',
    },
    {
      q: 'Which of these $(x, y)$ tables keeps the product $xy$ the same in every pair?',
      choices: [
        '$(3, 12), (6, 9), (9, 6)$',
        '$(3, 12), (6, 24), (9, 36)$',
        '$(3, 12), (6, 6), (9, 4)$',
        '$(3, 12), (6, 6), (9, 3)$',
      ],
      answer: 2,
      solution:
        'Test the product $xy$. For $(3, 12), (6, 6), (9, 4)$: $3 \\times 12 = 36$, $6 \\times 6 = 36$, $9 \\times 4 = 36$, so $k = 36$ and $y = \\frac{36}{x}$. ✓ (The table $(3, 12), (6, 24), (9, 36)$ keeps the RATIO at $4$, which is DIRECT proportion; the table $(3, 12), (6, 9), (9, 6)$ follows $y = 15 - x$ — $y$ does fall as $x$ rises, but by a constant amount rather than a constant factor, and its products $36$, $54$, $54$ are not steady; the last table agrees twice and then misses, since $9 \\times 3 = 27$.)',
    },
    {
      q: 'Three of the tables below are not inverse proportions. Which one is?',
      choices: [
        '$(2, 12), (3, 18), (8, 48)$',
        '$(2, 12), (3, 11), (8, 6)$',
        '$(2, 12), (3, 8), (8, 4)$',
        '$(2, 12), (3, 8), (8, 3)$',
      ],
      answer: 3,
      solution:
        'Multiply $x$ by $y$ in every pair. For $(2, 12), (3, 8), (8, 3)$: $2 \\times 12 = 24$, $3 \\times 8 = 24$, $8 \\times 3 = 24$, so $k = 24$ and $y = \\frac{24}{x}$. ✓ (The table $(2, 12), (3, 18), (8, 48)$ holds the RATIO at $6$ — DIRECT proportion; the table $(2, 12), (3, 11), (8, 6)$ follows $y = 14 - x$, a constant difference; the table $(2, 12), (3, 8), (8, 4)$ is the near miss, right for two pairs and then wrong, since $8 \\times 4 = 32$.)',
    },
  ],
  // p8 — a fixed distance or a fixed volume: rate up, time down
  [
    {
      q: 'A trip takes $9$ hours at $10$ kilometres per hour. How long does the same trip take at $30$ kilometres per hour?',
      choices: ['$3$ hours', '$27$ hours', '$29$ hours', '$\\frac{1}{3}$ hour'],
      answer: 0,
      solution:
        'The distance is fixed, so (speed) $\\times$ (time) is constant: $k = xy = 10 \\times 9 = 90$ kilometres. At $30$ km/h: $\\frac{90}{30} = 3$ hours. The constant holds on both pairs: $10 \\times 9 = 90$ and $30 \\times 3 = 90$. ✓ (Speed tripled, so the time fell to a third.) (The choice $27$ uses the DIRECT model, scaling time up by $\\frac{30}{10}$ — but going faster over the same road must take LESS time; the choice $29$ adds $20$ hours because the speed rose by $20$; the choice $\\frac{1}{3}$ divides the speed by the distance, flipping the division.)',
    },
    {
      q: 'A cyclist rides a fixed loop in $50$ minutes at $18$ kilometres per hour. How fast must she ride to finish the loop in $30$ minutes?',
      choices: ['$10.8$ km/h', '$38$ km/h', '$30$ km/h', '$900$ km/h'],
      answer: 2,
      solution:
        'The loop has a fixed length, so speed and time are inversely proportional and their product is that length: $18 \\times \\frac{50}{60} = 15$ kilometres. To cover $15$ km in half an hour she needs $\\frac{15}{0.5} = 30$ km/h. Using minutes throughout gives the same constant: $k = xy = 18 \\times 50 = 900$ and $\\frac{900}{30} = 30$. Both pairs agree: $18 \\times 50 = 900$ and $30 \\times 30 = 900$. ✓ (The choice $10.8$ uses the DIRECT model, $18 \\times \\frac{30}{50}$, which says she goes SLOWER to finish sooner; the choice $38$ adds $20$ to the speed because the time dropped by $20$ minutes; the choice $900$ stops at the constant itself.)',
    },
    {
      q: 'A reservoir holding a fixed amount of water is emptied in $12$ hours by a pipe running at $400$ litres per hour. How long does it take at $600$ litres per hour?',
      choices: ['$18$ hours', '$6$ hours', '$\\frac{1}{8}$ hour', '$8$ hours'],
      answer: 3,
      solution:
        'The volume is fixed, so (rate) $\\times$ (time) is constant: $k = xy = 400 \\times 12 = 4800$ litres. At $600$ litres per hour: $\\frac{4800}{600} = 8$ hours. The constant holds on both pairs: $400 \\times 12 = 4800$ and $600 \\times 8 = 4800$. ✓ (The choice $18$ uses the DIRECT model, $12 \\times \\frac{600}{400}$, which drains faster yet takes longer; the choice $6$ cuts the time by $50\\%$ because the rate rose by $50\\%$, but the time is multiplied by the reciprocal factor $\\frac{2}{3}$, not reduced by the same percent; the choice $\\frac{1}{8}$ divides the rate by the volume, flipping the division.)',
    },
  ],
  // p9 — inverse proportion to the square
  [
    {
      q: 'Suppose $y$ is inversely proportional to $x^2$, and $y = 16$ when $x = 3$. What is $y$ when $x = 6$?',
      choices: ['$4$', '$8$', '$64$', '$32$'],
      answer: 0,
      solution:
        'The rule is $y = \\frac{k}{x^2}$, so the constant is $k = yx^2 = 16 \\times 9 = 144$. At $x = 6$: $y = \\frac{144}{36} = 4$. The constant holds on both pairs: $16 \\times 3^2 = 144$ and $4 \\times 6^2 = 144$. ✓ ($x$ doubled, so $x^2$ quadrupled and $y$ fell to a quarter.) (The choice $8$ uses plain inverse proportion with $k = xy = 48$, forgetting the square; the choice $64$ uses the DIRECT-square model $y = kx^2$ with $k = \\frac{16}{9}$, sending $y$ up when it must come down; the choice $32$ uses plain DIRECT proportion, $\\frac{16}{3} \\times 6$.)',
    },
    {
      q: 'Suppose $y$ is inversely proportional to $x^2$, and $y = 100$ when $x = 2$. What is $y$ when $x = 10$?',
      choices: ['$20$', '$4$', '$2500$', '$500$'],
      answer: 1,
      solution:
        'From $y = \\frac{k}{x^2}$: $k = yx^2 = 100 \\times 4 = 400$. At $x = 10$: $y = \\frac{400}{100} = 4$. Check both pairs: $100 \\times 2^2 = 400$ and $4 \\times 10^2 = 400$. ✓ ($x$ was multiplied by $5$, so $y$ was divided by $25$.) (The choice $20$ uses plain inverse proportion with $k = xy = 200$, dropping the square; the choice $2500$ uses the DIRECT-square model with $k = \\frac{100}{4} = 25$; the choice $500$ uses plain DIRECT proportion with $k = 50$.)',
    },
    {
      q: 'Suppose $y$ is inversely proportional to $x^2$, and $y = 5$ when $x = 4$. What is the positive value of $x$ when $y = 20$?',
      choices: ['$1$', '$16$', '$8$', '$2$'],
      answer: 3,
      solution:
        'From $y = \\frac{k}{x^2}$: $k = yx^2 = 5 \\times 16 = 80$. Now solve $20 = \\frac{80}{x^2}$: $x^2 = \\frac{80}{20} = 4$, so $x = 2$. Check both pairs: $5 \\times 4^2 = 80$ and $20 \\times 2^2 = 80$. ✓ ($y$ was multiplied by $4$, so $x^2$ fell to a quarter and $x$ was halved.) (The choice $16$ multiplies $x$ by $4$ because $y$ was multiplied by $4$ — the DIRECT response, and it moves $x$ the wrong way entirely; the choice $8$ uses the DIRECT-square model $y = kx^2$ with $k = \\frac{5}{16}$; the choice $1$ uses plain inverse proportion with $k = xy = 20$, forgetting the square.)',
    },
  ],
  // p10 — percent changes, where the reciprocal factor matters
  [
    {
      q: 'If $y$ is inversely proportional to $x$ and $x$ increases by $50\\%$, what happens to $y$?',
      choices: [
        'It decreases by $33\\frac{1}{3}\\%$',
        'It decreases by $50\\%$',
        'It increases by $50\\%$',
        'It decreases by $66\\frac{2}{3}\\%$',
      ],
      answer: 0,
      solution:
        'Increasing $x$ by $50\\%$ multiplies it by $\\frac{3}{2}$. The product $xy = k$ is fixed, so $y$ must be multiplied by the reciprocal $\\frac{2}{3}$, and keeping $\\frac{2}{3}$ of a value means losing $\\frac{1}{3}$ of it — a decrease of $33\\frac{1}{3}\\%$. Check with numbers: $x = 4$, $y = 6$ gives $k = 24$; then $x = 6$ gives $y = 4$, and $4$ is $33\\frac{1}{3}\\%$ below $6$. ✓ (Increasing by $50\\%$ is the DIRECT response; decreasing by $50\\%$ mirrors the percent instead of taking the reciprocal factor; decreasing by $66\\frac{2}{3}\\%$ reads the multiplier $\\frac{2}{3}$ as the amount lost rather than the amount kept.)',
    },
    {
      q: 'If $y$ is inversely proportional to $x$ and $x$ decreases by $20\\%$, what happens to $y$?',
      choices: [
        'It decreases by $20\\%$',
        'It increases by $25\\%$',
        'It increases by $20\\%$',
        'It increases by $125\\%$',
      ],
      answer: 1,
      solution:
        'A $20\\%$ decrease multiplies $x$ by $0.8 = \\frac{4}{5}$, so $y$ is multiplied by the reciprocal $\\frac{5}{4} = 1.25$ — an increase of $25\\%$. Check with numbers: $x = 10$, $y = 4$ gives $k = 40$; then $x = 8$ gives $y = 5$, and $5$ is $25\\%$ above $4$. ✓ (Decreasing by $20\\%$ is the DIRECT response, with both quantities falling together; increasing by $20\\%$ mirrors the percent instead of using the reciprocal factor; increasing by $125\\%$ reads the multiplier $1.25$ as the increase, when $1.25$ is the whole new value.)',
    },
    {
      q: 'If $y$ is inversely proportional to $x$ and $y$ increases by $60\\%$, what happens to $x$?',
      choices: [
        'It decreases by $60\\%$',
        'It increases by $60\\%$',
        'It decreases by $37.5\\%$',
        'It decreases by $62.5\\%$',
      ],
      answer: 2,
      solution:
        'This time $y$ moves first. A $60\\%$ increase multiplies $y$ by $1.6 = \\frac{8}{5}$, so to hold the product $xy = k$ fixed, $x$ is multiplied by the reciprocal $\\frac{5}{8} = 0.625$ — keeping $62.5\\%$ means losing $37.5\\%$. Check with numbers: $x = 8$, $y = 5$ gives $k = 40$; then $y = 8$ gives $x = 5$, and $5$ is $37.5\\%$ below $8$. ✓ (Increasing by $60\\%$ is the DIRECT response; decreasing by $60\\%$ mirrors the percent rather than taking the reciprocal factor; decreasing by $62.5\\%$ reports the fraction KEPT as the fraction lost.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 7,
  sections: { '7.1': s71, '7.2': s72 },
}
