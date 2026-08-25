// Introduction to Algebra chapter 6 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` string, and a solution. There are no choices to write, so every
//    ounce of teaching lives in the solution.
//  - Every answer was re-derived from the question text alone and then pushed
//    FORWARD through the story: the ratio was re-simplified, the percent was
//    re-applied to the recovered original, and every mixture was re-weighed.
//  - Counts of people, cards, buttons and fish are whole and positive; every
//    length, price and volume is positive.
//  - A variation changes the numbers AND the context, and where it makes sense
//    the direction too: ask for the smaller part instead of the larger, hand
//    over one share and ask for the total, or run the percent change backwards.
//  - Units named in the question are echoed in the answer only where the base
//    problem does so (km/h, liters, grams, cm).

const worksheet = [
  // 1. Two-part ratio with the TOTAL given — split the total, then read the
  //    question again to see which part it wants.
  [
    {
      q: 'A basket holds apples and pears in the ratio $2:5$, and there are $63$ pieces of fruit in all. How many pears are in the basket?',
      answer: '$45$',
      solution:
        'The ratio $2:5$ means the counts are $2x$ apples and $5x$ pears for some multiplier $x$. The total gives $2x + 5x = 7x = 63$, so $x = 9$. Pears: $5 \\times 9 = 45$. Check the story: $18$ apples and $45$ pears make $63$ pieces ✓, and $18:45$ divides by $9$ back down to $2:5$ ✓.',
    },
    {
      q: 'Two numbers are in the ratio $5:9$ and add up to $84$. By how much do they differ?',
      answer: '$24$',
      solution:
        'Write the numbers as $5x$ and $9x$. Their sum is $14x = 84$, so $x = 6$, and the numbers are $30$ and $54$. The question asks for the DIFFERENCE, so take one more step: $54 - 30 = 24$. (Shortcut: the difference is $9x - 5x = 4x = 4 \\times 6 = 24$.) Check: $30 + 54 = 84$ ✓ and $30:54 = 5:9$ ✓.',
    },
    {
      q: 'A ribbon $96$ cm long is cut into two pieces whose lengths are in the ratio $7:5$. How long is the SHORTER piece?',
      answer: '$40$ cm',
      solution:
        'Let the pieces be $7x$ cm and $5x$ cm. Together they are the whole ribbon: $12x = 96$, so $x = 8$. The shorter piece is the $5$-part one: $5 \\times 8 = 40$ cm. Check: $56 + 40 = 96$ cm ✓ and $56:40 = 7:5$ ✓. Grabbing $7x = 56$ answers the wrong half of the question.',
    },
  ],
  // 2. Straight "what is p% of n" — translate the percent to a fraction and
  //    multiply.
  [
    {
      q: 'What is $35\\%$ of $180$?',
      answer: '$63$',
      solution:
        'Percent means per hundred, so $35\\% = \\frac{35}{100}$ and the answer is $\\frac{35}{100} \\times 180 = \\frac{6300}{100} = 63$. Quick route: $10\\%$ of $180$ is $18$, so $30\\%$ is $54$; and $5\\%$ is $9$. Then $54 + 9 = 63$ ✓.',
    },
    {
      q: 'A jar holds $350$ beads, and $12\\%$ of them are green. How many green beads are in the jar?',
      answer: '$42$',
      solution:
        'Translate: green $= \\frac{12}{100} \\times 350 = \\frac{4200}{100} = 42$. Quick route: $1\\%$ of $350$ is $3.5$, and $12 \\times 3.5 = 42$ ✓. The count is a whole number of beads, as it must be.',
    },
    {
      q: 'What is $120\\%$ of $85$?',
      answer: '$102$',
      solution:
        '$120\\% = \\frac{120}{100} = 1.2$, so the answer is $1.2 \\times 85 = 102$. A percent above $100\\%$ means MORE than the whole, so the answer must beat $85$ — and it does. Breaking it up also works: $100\\%$ of $85$ is $85$, and $20\\%$ of $85$ is $17$, and $85 + 17 = 102$ ✓.',
    },
  ],
  // 3. The whole (or the percent) is the unknown — set up the equation and
  //    divide, rather than taking a percent of the number you were handed.
  [
    {
      q: 'A charity has collected $\\$54$ so far, which is $60\\%$ of its goal. What is the goal?',
      answer: '$\\$90$',
      solution:
        'Let the goal be $g$. Translate the sentence: $\\$54$ IS $60\\%$ OF $g$, so $0.6g = 54$ and $g = \\frac{54}{0.6} = 90$. Check forward: $60\\%$ of $\\$90$ is $0.6 \\times 90 = \\$54$ ✓. The trap is computing $60\\%$ of $\\$54$ — but $\\$54$ is the part here, not the whole.',
    },
    {
      q: 'A box holds $84$ markers, and $21$ of them are red. What percent of the markers are red?',
      answer: '$25\\%$',
      solution:
        'This time the PERCENT is the unknown. Let it be $p$: $21 = \\frac{p}{100} \\times 84$. Then $p = \\frac{21 \\times 100}{84} = \\frac{2100}{84} = 25$, so $25\\%$ of the markers are red. Check forward: $25\\%$ is $\\frac{1}{4}$, and $\\frac{84}{4} = 21$ ✓. Order matters — asking what percent $84$ is of $21$ would give $400\\%$ instead.',
    },
    {
      q: '$8\\%$ of a number is $34$. What is the number?',
      answer: '$425$',
      solution:
        'Let the number be $n$: $\\frac{8}{100}n = 34$, so $n = 34 \\times \\frac{100}{8} = \\frac{3400}{8} = 425$. Check forward: $0.08 \\times 425 = 34$ ✓. Since $8\\%$ is a small slice, the whole should be much bigger than $34$ — and $425$ is.',
    },
  ],
  // 4. Compound-rate conversion: both the top unit and the bottom unit change.
  [
    {
      q: 'A cyclist rides at $15$ m/s. What is that speed in km/h?',
      answer: '$54$ km/h',
      solution:
        'Convert both levels of the rate. In one hour there are $3600$ seconds, so the cyclist covers $15 \\times 3600 = 54{,}000$ meters per hour; and $54{,}000$ meters is $54{,}000 \\div 1000 = 54$ kilometers. So the speed is $54$ km/h. Shortcut: going from m/s to km/h, multiply by $\\frac{3600}{1000} = 3.6$, and $15 \\times 3.6 = 54$ ✓.',
    },
    {
      q: 'A racing train travels at $126$ km/h. What is that speed in m/s?',
      answer: '$35$ m/s',
      solution:
        'This is the reverse trip, so the factor flips. Multiply by $1000$ to turn kilometers into meters and divide by $3600$ to turn hours into seconds: $\\frac{126 \\times 1000}{3600} = \\frac{126{,}000}{3600} = 35$ m/s. Shortcut: divide km/h by $3.6$, and $126 \\div 3.6 = 35$ ✓. Multiplying by $3.6$ here would point the factor upside down.',
    },
    {
      q: 'A subway train covers $1.2$ kilometers every minute. What is its speed in m/s?',
      answer: '$20$ m/s',
      solution:
        'Chain the factors one level at a time. Distance: $1.2$ km $= 1.2 \\times 1000 = 1200$ meters. Time: $1$ minute $= 60$ seconds. So the speed is $\\frac{1200 \\text{ m}}{60 \\text{ s}} = 20$ m/s. Check by going back: $20$ m/s $\\times 60 = 1200$ m per minute, which is $1.2$ km ✓.',
    },
  ],
  // 5. Three-part ratio. Two variations split a total; the third works
  //    backwards from a single share.
  [
    {
      q: 'Three cousins share $96$ marbles in the ratio $1:3:4$. How many marbles does the cousin with the LARGEST share get?',
      answer: '$48$',
      solution:
        'The shares are $x$, $3x$, and $4x$, and they use up every marble: $x + 3x + 4x = 8x = 96$, so $x = 12$. The largest share is $4 \\times 12 = 48$ marbles. Check the story: the three shares are $12$, $36$, and $48$, which total $96$ ✓, and $12:36:48$ divides by $12$ back to $1:3:4$ ✓.',
    },
    {
      q: 'A board $180$ cm long is sawn into three pieces whose lengths are in the ratio $3:5:7$. How long is the SHORTEST piece?',
      answer: '$36$ cm',
      solution:
        'Let the pieces be $3x$, $5x$, and $7x$ centimeters. Their total is the whole board: $15x = 180$, so $x = 12$. The shortest piece is $3 \\times 12 = 36$ cm. Check: $36 + 60 + 84 = 180$ cm ✓ and $36:60:84 = 3:5:7$ ✓.',
    },
    {
      q: 'Three teams split a pot of points in the ratio $2:5:6$, and the smallest share is $18$ points. How many points were shared in all?',
      answer: '$117$',
      solution:
        'Here the total is what we want, and a single SHARE is what we are given. Write the shares as $2x$, $5x$, and $6x$. The smallest is the $2$-part share, so $2x = 18$ and $x = 9$. The total is $2x + 5x + 6x = 13x = 13 \\times 9 = 117$ points. Check: the shares are $18$, $45$, and $54$, which add to $117$ ✓. Treating the $18$ as the total instead of as one share is the slip to avoid.',
    },
  ],
  // 6. Percent change run backwards: the percent was taken of the ORIGINAL, so
  //    divide by the multiplier instead of adjusting the number you were given.
  [
    {
      q: 'After a $20\\%$ discount, a pair of shoes costs $\\$52$. What was the price before the discount?',
      answer: '$\\$65$',
      solution:
        'A $20\\%$ discount leaves $80\\%$ of the original price, so if $p$ is the old price then $0.8p = 52$ and $p = \\frac{52}{0.8} = 65$. Check forward: $20\\%$ of $\\$65$ is $\\$13$, and $65 - 13 = 52$ ✓. Adding $20\\%$ of $\\$52$ instead would give $\\$62.40$ — that takes the percent of the sale price, which is the wrong base.',
    },
    {
      q: 'A monthly water bill rose by $40\\%$ and is now $\\$63$. What was the bill before the increase?',
      answer: '$\\$45$',
      solution:
        'An increase runs the same way, but the multiplier is bigger than $1$: a $40\\%$ rise makes the new bill $140\\%$ of the old, so $1.4p = 63$ and $p = \\frac{63}{1.4} = 45$. Check forward: $40\\%$ of $\\$45$ is $\\$18$, and $45 + 18 = 63$ ✓. The old bill must be SMALLER than $\\$63$, and it is.',
    },
    {
      q: 'A number is decreased by $35\\%$, and the result is $91$. What was the number?',
      answer: '$140$',
      solution:
        'Decreasing by $35\\%$ leaves $65\\%$, so $0.65n = 91$ and $n = \\frac{91}{0.65} = 140$. Check forward: $35\\%$ of $140$ is $49$, and $140 - 49 = 91$ ✓. Adding $35\\%$ of $91$ gives $122.85$, which is not it — the $35\\%$ was measured against the original number, the very thing we were hunting for.',
    },
  ],
  // 7. A ratio that CHANGES. Freeze the "before" with the multiplier, apply the
  //    change to the right side(s), then cross-multiply.
  [
    {
      q: 'Two choirs have singers in the ratio $3:8$. After $12$ new singers join the first choir, the ratio becomes $3:4$. How many singers were in the SECOND choir?',
      answer: '$32$',
      solution:
        'Name the ORIGINAL sizes $3x$ and $8x$ — the multiplier always belongs to the before picture. Only the first choir changes, so afterwards the sizes are $3x + 12$ and $8x$. The new ratio gives $\\frac{3x+12}{8x} = \\frac{3}{4}$; cross-multiplying, $4(3x + 12) = 3(8x)$, so $12x + 48 = 24x$, giving $12x = 48$ and $x = 4$. The second choir has $8 \\times 4 = 32$ singers, and it never changed. Check: after the join the choirs are $24$ and $32$, and $24:32 = 3:4$ ✓.',
    },
    {
      q: 'Two crates hold oranges in the ratio $7:3$. After $6$ oranges are taken out of the first crate, the ratio becomes $5:3$. How many oranges were in the first crate at the start?',
      answer: '$21$',
      solution:
        'Original counts: $7x$ and $3x$. Only the first crate loses oranges, so afterwards it holds $7x - 6$ while the second still holds $3x$. Then $\\frac{7x-6}{3x} = \\frac{5}{3}$, so $3(7x - 6) = 5(3x)$, giving $21x - 18 = 15x$, then $6x = 18$ and $x = 3$. The first crate started with $7 \\times 3 = 21$ oranges. Check: $21 - 6 = 15$ and the second crate holds $9$, and $15:9 = 5:3$ ✓. Both counts stay positive, as real oranges must.',
    },
    {
      q: 'Two jars hold buttons in the ratio $5:3$. After $4$ buttons are added to EACH jar, the ratio becomes $3:2$. How many buttons were in the two jars altogether at the start?',
      answer: '$32$',
      solution:
        'Read carefully: EACH jar changes, so both sides get the $+4$. From $5x$ and $3x$ we go to $5x + 4$ and $3x + 4$, and $\\frac{5x+4}{3x+4} = \\frac{3}{2}$. Cross-multiply: $2(5x + 4) = 3(3x + 4)$, so $10x + 8 = 9x + 12$ and $x = 4$. The jars held $20$ and $12$ buttons, so $32$ in all. Check: afterwards they hold $24$ and $16$, and $24:16 = 3:2$ ✓. The question wants the TOTAL, not either jar on its own.',
    },
  ],
  // 8. Two successive percent changes — multiply the factors, never add the
  //    percents.
  [
    {
      q: 'A share price falls $20\\%$ one year and then rises $45\\%$ the next. What is the overall percent change across the two years?',
      answer: 'An increase of $16\\%$',
      solution:
        'Turn each change into a multiplier: down $20\\%$ is $\\times 0.8$, up $45\\%$ is $\\times 1.45$. Together, $0.8 \\times 1.45 = 1.16$, so the price ends at $116\\%$ of where it started — an increase of $16\\%$. Check with a friendly number: $\\$100$ falls to $\\$80$, then rises by $45\\%$ of $\\$80 = \\$36$, reaching $\\$116$ ✓. Adding $-20\\% + 45\\% = 25\\%$ is wrong, because the rise acted on a SMALLER amount.',
    },
    {
      q: 'A club’s membership grows $50\\%$ one term and then drops $40\\%$ the next. What is the overall percent change?',
      answer: 'A decrease of $10\\%$',
      solution:
        'Multipliers: $\\times 1.5$ then $\\times 0.6$, and $1.5 \\times 0.6 = 0.9$. The club ends at $90\\%$ of its starting size — a decrease of $10\\%$, even though the growth percent was the larger one. Check with $200$ members: $200 \\to 300 \\to 300 - 120 = 180$, and $180$ is $90\\%$ of $200$ ✓. The $40\\%$ drop bit into the enlarged membership, which is why it wins.',
    },
    {
      q: 'A number is increased by $60\\%$, and then that result is decreased by $25\\%$. What is the overall percent change from the original number?',
      answer: 'An increase of $20\\%$',
      solution:
        'Multipliers again: $\\times 1.6$ then $\\times 0.75$, and $1.6 \\times 0.75 = 1.2$. The final value is $120\\%$ of the original — an increase of $20\\%$. Check with $50$: $50 \\times 1.6 = 80$, and $80$ decreased by $25\\%$ is $80 - 20 = 60$, which is indeed $50$ increased by $20\\%$ ✓. Note that $60\\% - 25\\% = 35\\%$ is NOT the answer; the two percents were measured against different bases.',
    },
  ],
  // 9. Mixtures: the pure stuff is fixed, the total moves. Track the pure stuff.
  [
    {
      q: 'You have $6$ liters of a $25\\%$ salt solution. How many liters of pure water must you add to bring it down to $10\\%$ salt?',
      answer: '$9$ liters',
      solution:
        'Adding water never changes the salt, so pin the salt down first: $0.25 \\times 6 = 1.5$ liters of salt. Let $w$ be the liters of water added; the new total is $6 + w$ and the new concentration equation is $\\frac{1.5}{6 + w} = 0.10$. So $6 + w = \\frac{1.5}{0.10} = 15$, giving $w = 9$. Check: $1.5$ liters of salt in $15$ liters of solution is $\\frac{1.5}{15} = 10\\%$ ✓.',
    },
    {
      q: 'How many grams of sugar must be dissolved in $240$ grams of water to make a solution that is $20\\%$ sugar?',
      answer: '$60$ grams',
      solution:
        'This time the pure stuff is what we ADD, so be careful about what the $20\\%$ is measured against: the whole SOLUTION, sugar included. Let $s$ be the grams of sugar. The solution weighs $240 + s$ grams, and $\\frac{s}{240 + s} = \\frac{20}{100} = \\frac{1}{5}$. Cross-multiply: $5s = 240 + s$, so $4s = 240$ and $s = 60$. Check: $60$ grams of sugar in $60 + 240 = 300$ grams of solution is $\\frac{60}{300} = 20\\%$ ✓. Taking $20\\%$ of the water alone would give $48$ grams — too little, because it leaves the sugar out of the whole.',
    },
    {
      q: 'A tank holds some antifreeze mixture that is $45\\%$ antifreeze. After $8$ liters of pure water are poured in, the mixture tests at $25\\%$ antifreeze. How many liters of mixture were in the tank before the water was added?',
      answer: '$10$ liters',
      solution:
        'Run the dilution backwards: this time the STARTING amount is the unknown. Let the tank hold $V$ liters at first, so it contains $0.45V$ liters of antifreeze — and the water adds none of it. Afterwards the total is $V + 8$ liters, and the concentration equation is $0.45V = 0.25(V + 8)$. Expand: $0.45V = 0.25V + 2$, so $0.20V = 2$ and $V = 10$. Check forward: $10$ liters at $45\\%$ holds $4.5$ liters of antifreeze; after adding water the total is $18$ liters, and $\\frac{4.5}{18} = 0.25 = 25\\%$ ✓.',
    },
  ],
  // 10. Two quantities changed in DIFFERENT ways (one scaled, one shifted) —
  //     build the new ratio, cross-multiply, then answer what was asked.
  [
    {
      q: 'Two quantities $P$ and $Q$ are in the ratio $3:5$. If $P$ is doubled and $Q$ is increased by $12$, the new ratio is $3:4$. What was $Q$ originally?',
      answer: '$20$',
      solution:
        'Let $P = 3x$ and $Q = 5x$. Doubling $P$ gives $6x$; increasing $Q$ by $12$ gives $5x + 12$. So $\\frac{6x}{5x+12} = \\frac{3}{4}$. Cross-multiply: $4(6x) = 3(5x + 12)$, so $24x = 15x + 36$, giving $9x = 36$ and $x = 4$. Then $Q = 5 \\times 4 = 20$ (and $P = 12$). Check: the new pair is $24$ and $32$, and $24:32 = 3:4$ ✓. Doubling means $\\times 2$ on the whole $3x$, not adding $2$.',
    },
    {
      q: 'Two quantities $A$ and $B$ are in the ratio $8:3$. If $A$ is halved and $B$ is decreased by $2$, the new ratio is $2:1$. What is $A + B$ originally?',
      answer: '$22$',
      solution:
        'Let $A = 8x$ and $B = 3x$. Halving $A$ gives $4x$; decreasing $B$ by $2$ gives $3x - 2$. So $\\frac{4x}{3x-2} = \\frac{2}{1}$, which cross-multiplies to $4x = 2(3x - 2) = 6x - 4$. Then $2x = 4$ and $x = 2$, so $A = 16$ and $B = 6$, and $A + B = 22$. Check: the new pair is $8$ and $4$, and $8:4 = 2:1$ ✓; also $B - 2 = 4$ is still positive, so the story makes sense. The question asks for the SUM, one step past the pair.',
    },
    {
      q: 'Two quantities $M$ and $N$ are in the ratio $5:2$. If $M$ is increased by $7$ and $N$ is doubled, the new ratio is $3:2$. What is the sum of the two NEW quantities?',
      answer: '$70$',
      solution:
        'Notice the roles are swapped from the usual: it is the FIRST quantity that gets a shift and the second that gets scaled. Let $M = 5x$ and $N = 2x$; the new quantities are $5x + 7$ and $4x$. Then $\\frac{5x+7}{4x} = \\frac{3}{2}$, so $2(5x + 7) = 3(4x)$, giving $10x + 14 = 12x$, then $2x = 14$ and $x = 7$. Originally $M = 35$ and $N = 14$; the new quantities are $35 + 7 = 42$ and $2 \\times 14 = 28$. Their sum is $42 + 28 = 70$. Check: $42:28$ divides by $14$ down to $3:2$ ✓.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 6,
  worksheet,
}
