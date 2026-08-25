// Introduction to Algebra chapter 6 — variations for section 6.4. All problems
// and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone, then checked forward
//    through the story (multiply the original by the multiplier and confirm the
//    stated result), not by re-reading the solution paragraph.
//  - Every question names its BASE out loud: "of the original price", "of the
//    whole solution", "of last year's total". Percent change is always measured
//    against the original, never against the new value.
//  - Successive percent changes are multiplied, never added, and every such item
//    was verified by carrying a concrete starting amount through both steps.
//  - Every distractor is the output of a named mistake — the percent of the wrong
//    base, adding the percent instead of the amount, adding two successive
//    percents, stopping at an intermediate value, or answering the reversed
//    question. No two choices in an item share a VALUE.
//  - Story sanity: every money amount lands on a whole number of cents, every
//    count of a physical thing is a whole number, no discount exceeds 100%, and
//    every test score is attainable.

const s64 = [
  // p1 — a plain "P% of N", with a friendly fraction behind the percent
  [
    {
      q: 'What is $20\\%$ of $145$?',
      choices: ['$29$', '$14.5$', '$2.9$', '$725$'],
      answer: 0,
      solution:
        'Translate: $\\frac{20}{100} \\times 145 = 0.2 \\times 145 = 29$. Since $20\\% = \\frac{1}{5}$, taking $20\\%$ is the same as dividing by $5$, and $145 \\div 5 = 29$. (The choice $14.5$ takes $10\\%$ instead of $20\\%$; the choice $2.9$ reads $20\\%$ as $\\frac{2}{100}$, a decimal slip that computes $2\\%$; the choice $725$ multiplies by $5$ instead of dividing by it, and a part of $145$ can never be bigger than $145$.)',
    },
    {
      q: 'What is $75\\%$ of $48$?',
      choices: ['$12$', '$36$', '$3.6$', '$64$'],
      answer: 1,
      solution:
        'Translate: $\\frac{75}{100} \\times 48 = 0.75 \\times 48 = 36$. Since $75\\% = \\frac{3}{4}$, split $48$ into four parts of $12$ and keep three of them: $3 \\times 12 = 36$. (The choice $12$ is $25\\%$ of $48$ — the quarter that is left OVER, not the three quarters asked for; the choice $3.6$ computes $7.5\\%$, one decimal place off; the choice $64$ divides by $0.75$ instead of multiplying, and $75\\%$ of a number must be smaller than the number.)',
    },
    {
      q: 'What is $40\\%$ of $65$?',
      choices: ['$6.5$', '$2.6$', '$162.5$', '$26$'],
      answer: 3,
      solution:
        'Translate: $\\frac{40}{100} \\times 65 = 0.4 \\times 65 = 26$. A quick route: $10\\%$ of $65$ is $6.5$, and four of those make $26$. (The choice $6.5$ stops at $10\\%$; the choice $2.6$ computes $4\\%$, a decimal slip; the choice $162.5$ divides $65$ by $0.4$ instead of multiplying — dividing by a number below $1$ makes things bigger, which is the wrong direction for a part.)',
    },
  ],
  // p2 — percents that are powers of ten, where the work is really place value
  [
    {
      q: 'What is $1\\%$ of $4200$?',
      choices: ['$420$', '$42$', '$4.2$', '$4200$'],
      answer: 1,
      solution:
        '$1\\% = \\frac{1}{100}$, so divide by $100$: $4200 \\div 100 = 42$. (The choice $420$ divides by $10$, which is $10\\%$; the choice $4.2$ divides by $1000$, which is $0.1\\%$; the choice $4200$ leaves the number alone, which would be $100\\%$.)',
    },
    {
      q: 'What is $10\\%$ of $92$?',
      choices: ['$0.92$', '$82$', '$9.2$', '$920$'],
      answer: 2,
      solution:
        '$10\\% = \\frac{1}{10}$, so divide by $10$: $92 \\div 10 = 9.2$. A part does not have to be a whole number. (The choice $0.92$ divides by $100$, giving $1\\%$; the choice $82$ SUBTRACTS $10$ instead of taking $10$ percent — a percent is never subtracted as a plain number; the choice $920$ multiplies by $10$ instead of dividing.)',
    },
    {
      q: 'What is $5\\%$ of $260$?',
      choices: ['$13$', '$26$', '$52$', '$1300$'],
      answer: 0,
      solution:
        'Find $10\\%$ first and halve it: $10\\%$ of $260$ is $26$, so $5\\%$ is $13$. Checking directly, $0.05 \\times 260 = 13$. (The choice $26$ stops at $10\\%$; the choice $52$ divides by $5$, but $5\\%$ means multiplying by $\\frac{5}{100}$, not dividing by $5$; the choice $1300$ multiplies by $5$.)',
    },
  ],
  // p3 — the meaning of the symbol itself, in both directions
  [
    {
      q: 'Which fraction equals $9\\%$?',
      choices: ['$\\frac{9}{10}$', '$\\frac{1}{9}$', '$\\frac{9}{100}$', '$\\frac{100}{9}$'],
      answer: 2,
      solution:
        'Percent means "per hundred", so $9\\% = \\frac{9}{100}$. (The choice $\\frac{9}{10}$ is $90\\%$, ten times too big; the choice $\\frac{1}{9}$ flips the percent into the denominator, which is about $11.1\\%$; the choice $\\frac{100}{9}$ turns the fraction upside down and is bigger than $1$, so it would be over $1000\\%$.)',
    },
    {
      q: 'Which fraction equals $250\\%$?',
      choices: ['$\\frac{5}{2}$', '$\\frac{25}{100}$', '$\\frac{1}{250}$', '$\\frac{250}{10}$'],
      answer: 0,
      solution:
        'Divide by $100$: $250\\% = \\frac{250}{100} = \\frac{5}{2}$. A percent above $100\\%$ must come out bigger than $1$, and $\\frac{5}{2} = 2.5$ does. (The choice $\\frac{25}{100}$ drops a zero and reads the percent as $25\\%$; the choice $\\frac{1}{250}$ puts the percent underneath instead of on top; the choice $\\frac{250}{10}$ divides by $10$ instead of $100$, giving $25$, which would be $2500\\%$.)',
    },
    {
      q: 'The fraction $\\frac{3}{20}$ is what percent?',
      choices: ['$3\\%$', '$15\\%$', '$0.15\\%$', '$20\\%$'],
      answer: 1,
      solution:
        'Rewrite the fraction with $100$ underneath: $\\frac{3}{20} = \\frac{15}{100} = 15\\%$. (Equivalently $3 \\div 20 = 0.15$, and $0.15 \\times 100\\% = 15\\%$.) The choice $3\\%$ just reads off the numerator and the choice $20\\%$ reads off the denominator — neither one converts anything. The choice $0.15\\%$ stops at the decimal $0.15$ and writes a percent sign on it, dividing by $100$ a second time.',
    },
  ],
  // p4 — percents past 100, where the answer must exceed the original
  [
    {
      q: 'What is $250\\%$ of $36$?',
      choices: ['$9$', '$14.4$', '$90$', '$900$'],
      answer: 2,
      solution:
        '$250\\% = \\frac{250}{100} = 2.5$, so the answer is $2.5 \\times 36 = 90$. A percent above $100\\%$ gives MORE than the original, so the answer has to beat $36$. (The choice $9$ is $25\\%$ of $36$, a dropped zero; the choice $14.4$ divides $36$ by $2.5$ instead of multiplying; the choice $900$ uses $25$ as the multiplier instead of $2.5$, which would be $2500\\%$.)',
    },
    {
      q: 'What is $120\\%$ of $45$?',
      choices: ['$37.5$', '$54$', '$9$', '$165$'],
      answer: 1,
      solution:
        '$120\\% = 1.2$, so the answer is $1.2 \\times 45 = 54$. Another way: $100\\%$ of $45$ is $45$, and the extra $20\\%$ is $9$, so $45 + 9 = 54$. (The choice $9$ is only that extra $20\\%$, not the whole $120\\%$; the choice $165$ ADDS the number $120$ to $45$ instead of taking $120$ percent of it; the choice $37.5$ divides by $1.2$ instead of multiplying, which shrinks the number when it should grow.)',
    },
    {
      q: 'What is $175\\%$ of $80$?',
      choices: ['$140$', '$60$', '$14$', '$255$'],
      answer: 0,
      solution:
        '$175\\% = 1.75$, so the answer is $1.75 \\times 80 = 140$. Split it up as a check: $100\\%$ of $80$ is $80$ and $75\\%$ of $80$ is $60$, and $80 + 60 = 140$. (The choice $60$ is only the $75\\%$ piece, forgetting the whole $100\\%$ underneath it; the choice $14$ computes $17.5\\%$, one decimal place off; the choice $255$ adds the number $175$ to $80$.)',
    },
  ],
  // p5 — the percent is the unknown; the base is named explicitly
  [
    {
      q: '$18$ is what percent of $45$?',
      choices: ['$250\\%$', '$27\\%$', '$40\\%$', '$0.4\\%$'],
      answer: 2,
      solution:
        'Let the percent be $p$: $18 = \\frac{p}{100} \\times 45$, so $p = \\frac{18 \\times 100}{45} = 40$. The answer is $40\\%$, and it must be under $100\\%$ because $18$ is smaller than the base $45$. (The choice $250\\%$ answers the reversed question, "$45$ is what percent of $18$?"; the choice $27\\%$ is the DIFFERENCE $45 - 18$ with a percent sign stuck on it; the choice $0.4\\%$ stops at the decimal $0.4$ without converting it to a percent.)',
    },
    {
      q: '$51$ is what percent of $60$?',
      choices: ['$85\\%$', '$15\\%$', '$9\\%$', '$0.85\\%$'],
      answer: 0,
      solution:
        'Set up $51 = \\frac{p}{100} \\times 60$, so $p = \\frac{51 \\times 100}{60} = 85$, giving $85\\%$. (The choice $15\\%$ answers the opposite question — what percent is MISSING, since the other $9$ out of $60$ is $15\\%$; the choice $9\\%$ is the raw difference $60 - 51$ wearing a percent sign; the choice $0.85\\%$ forgets to multiply the decimal $0.85$ by $100$.)',
    },
    {
      q: '$63$ is what percent of $45$?',
      choices: ['$18\\%$', '$40\\%$', '$1.4\\%$', '$140\\%$'],
      answer: 3,
      solution:
        'Set up $63 = \\frac{p}{100} \\times 45$, so $p = \\frac{63 \\times 100}{45} = 140$, giving $140\\%$. The answer had to pass $100\\%$, because $63$ is bigger than the base $45$. (The choice $40\\%$ measures only the EXCESS, $\\frac{18}{45}$, and forgets the $100\\%$ that $63$ already covers; the choice $18\\%$ is the plain difference $63 - 45$; the choice $1.4\\%$ leaves the decimal $1.4$ unconverted.)',
    },
  ],
  // p6 — the whole is the unknown: the given number is the PART
  [
    {
      q: '$84$ is $40\\%$ of what number?',
      choices: ['$33.6$', '$210$', '$140$', '$124$'],
      answer: 1,
      solution:
        'Call the unknown whole $w$. Translate: $84 = 0.4w$, so $w = \\frac{84}{0.4} = 210$. Check: $40\\%$ of $210$ is $84$. ✓ The whole must be LARGER than the part $84$, since $40\\%$ is under $100\\%$. (The choice $33.6$ takes $40\\%$ OF $84$, using $84$ as the whole when it is really the part; the choice $140$ divides by $0.6$, using the leftover $60\\%$ as the multiplier; the choice $124$ adds the number $40$ to $84$.)',
    },
    {
      q: '$72$ is $120\\%$ of what number?',
      choices: ['$86.4$', '$192$', '$90$', '$60$'],
      answer: 3,
      solution:
        'Translate: $72 = 1.2w$, so $w = \\frac{72}{1.2} = 60$. Check: $120\\%$ of $60$ is $72$. ✓ This time the whole is SMALLER than the part, exactly as it must be when the percent passes $100\\%$. (The choice $86.4$ takes $120\\%$ of $72$ instead of solving for the base; the choice $192$ adds the number $120$ to $72$; the choice $90$ divides by $0.8$, reading "$120\\%$" as a $20\\%$ cut instead of a $20\\%$ overshoot.)',
    },
    {
      q: '$27$ is $15\\%$ of what number?',
      choices: ['$180$', '$4.05$', '$42$', '$1.8$'],
      answer: 0,
      solution:
        'Translate: $27 = 0.15w$, so $w = \\frac{27}{0.15} = 180$. Check: $15\\%$ of $180$ is $27$. ✓ (The choice $4.05$ computes $15\\%$ of $27$, taking the percent of the part instead of the whole; the choice $1.8$ divides by $15$ rather than by $0.15$, a factor of $100$ off; the choice $42$ adds the number $15$ to $27$.)',
    },
  ],
  // p7 — same unknown-whole idea, phrased as "P% of a number is A"
  [
    {
      q: '$35\\%$ of a number is $91$. What is the number?',
      choices: ['$31.85$', '$260$', '$2.6$', '$126$'],
      answer: 1,
      solution:
        'Let the number be $n$: $\\frac{35}{100} n = 91$, so $n = 91 \\times \\frac{100}{35} = \\frac{9100}{35} = 260$. Check: $0.35 \\times 260 = 91$. ✓ (The choice $31.85$ is $35\\%$ of $91$ — the percent taken of the wrong base; the choice $2.6$ divides $91$ by $35$ instead of by $0.35$; the choice $126$ adds the number $35$ to $91$.)',
    },
    {
      q: '$6\\%$ of a number is $45$. What is the number?',
      choices: ['$2.7$', '$7.5$', '$51$', '$750$'],
      answer: 3,
      solution:
        'Let the number be $n$: $0.06n = 45$, so $n = \\frac{45}{0.06} = 750$. Check: $6\\%$ of $750$ is $45$. ✓ A tiny percent means a huge whole, so a very large answer is exactly what to expect. (The choice $2.7$ is $6\\%$ of $45$; the choice $7.5$ divides by $6$ instead of by $0.06$, missing a factor of $100$; the choice $51$ adds the number $6$ to $45$.)',
    },
    {
      q: '$140\\%$ of a number is $91$. What is the number?',
      choices: ['$65$', '$127.4$', '$231$', '$6.5$'],
      answer: 0,
      solution:
        'Let the number be $n$: $1.4n = 91$, so $n = \\frac{91}{1.4} = 65$. Check: $140\\%$ of $65$ is $91$. ✓ Because the percent is over $100\\%$, the number we want sits BELOW $91$. (The choice $127.4$ takes $140\\%$ of $91$, growing the number when it should shrink; the choice $231$ adds the number $140$ to $91$; the choice $6.5$ divides by $14$ instead of by $1.4$.)',
    },
  ],
  // p8 — scale one percent of the SAME unknown into another, without finding it
  [
    {
      q: 'If $15\\%$ of $n$ is $36$, what is $5\\%$ of $n$?',
      choices: ['$108$', '$12$', '$7.2$', '$240$'],
      answer: 1,
      solution:
        'No need to find $n$! $5\\%$ is one third of $15\\%$, so $5\\%$ of $n$ is one third of $36$, which is $12$. (The long road agrees: $0.15n = 36$ gives $n = 240$, and $0.05 \\times 240 = 12$.) The choice $108$ multiplies by $3$ instead of dividing — a smaller percent of the same number must give a smaller amount. The choice $7.2$ divides $36$ by $5$, as if the $5$ in "$5\\%$" were a divisor. The choice $240$ is $n$ itself, one step short of the question.',
    },
    {
      q: 'If $6\\%$ of $n$ is $21$, what is $18\\%$ of $n$?',
      choices: ['$7$', '$350$', '$63$', '$39$'],
      answer: 2,
      solution:
        '$18\\%$ is three times $6\\%$, so $18\\%$ of $n$ is $3 \\times 21 = 63$. (Checking the long way: $0.06n = 21$ gives $n = 350$, and $0.18 \\times 350 = 63$.) The choice $7$ divides by $3$ instead of multiplying, though a bigger percent of the same number must give a bigger amount. The choice $350$ is $n$ itself. The choice $39$ adds the number $18$ to $21$.',
    },
    {
      q: 'If $40\\%$ of $n$ is $26$, what is $10\\%$ of $n$?',
      choices: ['$104$', '$65$', '$2.6$', '$6.5$'],
      answer: 3,
      solution:
        '$10\\%$ is a quarter of $40\\%$, so $10\\%$ of $n$ is $26 \\div 4 = 6.5$. (The long road: $0.4n = 26$ gives $n = 65$, and $10\\%$ of $65$ is $6.5$.) The choice $104$ multiplies by $4$ instead of dividing. The choice $2.6$ divides $26$ by $10$, which would be right only if the given amount were $n$ itself. The choice $65$ is $n$, not the $10\\%$ asked for.',
    },
  ],
  // p9 — percent comparisons are not symmetric
  [
    {
      q: 'Suppose $a$ is $20\\%$ of $b$. Then $b$ is what percent of $a$?',
      choices: ['$20\\%$', '$80\\%$', '$500\\%$', '$120\\%$'],
      answer: 2,
      solution:
        'From $a = \\frac{1}{5}b$ we get $b = 5a$, and $5 = \\frac{500}{100}$, so $b$ is $500\\%$ of $a$. Try $a = 2$ and $b = 10$ to see it: $10$ really is five times $2$. (The choice $20\\%$ assumes the comparison is symmetric, but it flips to the RECIPROCAL; the choice $80\\%$ is the leftover $100\\% - 20\\%$; the choice $120\\%$ adds the $20\\%$ on top of $100\\%$, which describes a number only slightly bigger than $a$.)',
    },
    {
      q: 'Suppose $m$ is $125\\%$ of $n$. Then $n$ is what percent of $m$?',
      choices: ['$125\\%$', '$80\\%$', '$75\\%$', '$25\\%$'],
      answer: 1,
      solution:
        'From $m = 1.25n$ we get $n = \\frac{m}{1.25} = 0.8m$, so $n$ is $80\\%$ of $m$. Try $n = 4$ and $m = 5$: indeed $4$ is $80\\%$ of $5$. Since $m$ is the bigger one, the answer must land under $100\\%$. (The choice $125\\%$ assumes symmetry; the choice $75\\%$ subtracts the extra $25\\%$ from $100\\%$, but undoing a $25\\%$ overshoot means DIVIDING by $1.25$, not subtracting; the choice $25\\%$ reports only the excess.)',
    },
    {
      q: 'Suppose $x$ is $40\\%$ of $y$. Then $y$ is what percent of $x$?',
      choices: ['$60\\%$', '$140\\%$', '$40\\%$', '$250\\%$'],
      answer: 3,
      solution:
        'From $x = 0.4y$ we get $y = \\frac{x}{0.4} = 2.5x$, so $y$ is $250\\%$ of $x$. Try $x = 4$ and $y = 10$: $10$ is two and a half times $4$. (The choice $40\\%$ assumes symmetry; the choice $60\\%$ is the leftover $100\\% - 40\\%$; the choice $140\\%$ adds $40\\%$ on top of $100\\%$, which is far too small — $y$ is more than twice $x$.)',
    },
  ],
  // p10 — one percent statement equals another; solve for the unknown base
  [
    {
      q: '$40\\%$ of a number $x$ equals $25\\%$ of $96$. What is $x$?',
      choices: ['$24$', '$60$', '$38.4$', '$153.6$'],
      answer: 1,
      solution:
        'Work the known side first: $25\\%$ of $96$ is $24$. Now $0.4x = 24$, so $x = \\frac{24}{0.4} = 60$. Check: $40\\%$ of $60$ is $24$, and $25\\%$ of $96$ is $24$. ✓ (The choice $24$ stops at the known side and never solves for $x$; the choice $38.4$ is $40\\%$ of $96$, attaching the wrong percent to the wrong number; the choice $153.6$ swaps the two percents, solving $0.25x = 0.4 \\times 96$.)',
    },
    {
      q: '$75\\%$ of a number $x$ equals $30\\%$ of $120$. What is $x$?',
      choices: ['$36$', '$300$', '$160$', '$48$'],
      answer: 3,
      solution:
        'The known side is $30\\%$ of $120 = 36$. Then $0.75x = 36$, so $x = \\frac{36}{0.75} = 48$. Check: $75\\%$ of $48$ is $36$. ✓ (The choice $36$ stops at the known side; the choice $300$ swaps the percents, solving $0.3x = 0.75 \\times 120$; the choice $160$ divides the $120$ by $0.75$, dividing the wrong number by the wrong percent.)',
    },
    {
      q: '$55\\%$ of $80$ equals $20\\%$ of a number $x$. What is $x$?',
      choices: ['$220$', '$44$', '$16$', '$2.2$'],
      answer: 0,
      solution:
        'This time the KNOWN side comes first: $55\\%$ of $80 = 44$. Then $0.2x = 44$, so $x = \\frac{44}{0.2} = 220$. Check: $20\\%$ of $220$ is $44$. ✓ (The choice $44$ stops at the left side; the choice $16$ is $20\\%$ of $80$, taking the percent of the wrong number entirely; the choice $2.2$ divides $44$ by $20$ instead of by $0.2$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 6,
  sections: { '6.4': s64 },
}
