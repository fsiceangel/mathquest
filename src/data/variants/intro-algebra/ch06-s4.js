// Introduction to Algebra chapter 6 — variations for the chapter challenge set.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone, then checked forward
//    through the story (rebuild the quantities from the multiplier and confirm the
//    stated total, difference, or new ratio; carry a concrete amount through every
//    percent step; run the conversion chain again), not by re-reading the solution.
//  - Every question names its BASE out loud — "of the original price", "of the new
//    mixture", "in the two crates altogether" — because a percent with an unstated
//    base and a part with no whole attached to it are both ambiguous.
//  - Challenge problems are meant to bite, so each triple keeps the base problem's
//    difficulty and turns the question around where it can: solve for the other
//    unknown, work backwards through the steps, or report the overall change
//    instead of the final value.
//  - Every ratio that splits a total was chosen so the multiplier comes out whole,
//    every money amount lands on a whole number of cents, and every count of a
//    physical thing is a whole number.
//  - Every distractor is the output of a named mistake — the other quantity's
//    value, an intermediate value one step short of the answer, adding successive
//    percents instead of multiplying their factors, taking a percent of the wrong
//    base, gluing chained ratios without rescaling, inverting a conversion factor,
//    or undoing a two-step story in the wrong order. No two choices in an item
//    share a VALUE; every choice list was compared numerically, not as strings.

const challenge = [
  // p1 — ages move, so the ratio moves; the multiplier belongs to the ages TODAY
  [
    {
      q: 'A mother and her son have ages in the ratio $9:4$. In $5$ years, the ratio of their ages will be $2:1$. How old is the son now?',
      choices: ['$20$', '$45$', '$25$', '$5$'],
      answer: 0,
      solution:
        'Name today’s ages with the multiplier: $9x$ and $4x$. In $5$ years both grow by $5$, so $\\frac{9x+5}{4x+5} = \\frac{2}{1}$, giving $9x + 5 = 2(4x + 5) = 8x + 10$ and $x = 5$. The son is $4 \\times 5 = 20$ today. Check forward: today they are $45$ and $20$, and in $5$ years they will be $50$ and $25$, where $50:25 = 2:1$. ✓ (The choice $45$ is the mother’s age — the other person; the choice $25$ is the son’s age in $5$ years, not now; the choice $5$ stops at the multiplier $x$.)',
    },
    {
      q: 'A coach and a young player have ages in the ratio $5:2$. In $12$ years, the ratio of their ages will be $7:4$. How old is the coach now?',
      choices: ['$12$', '$30$', '$42$', '$6$'],
      answer: 1,
      solution:
        'Today the ages are $5x$ and $2x$. In $12$ years: $\\frac{5x+12}{2x+12} = \\frac{7}{4}$, so $4(5x + 12) = 7(2x + 12)$, giving $20x + 48 = 14x + 84$, then $6x = 36$ and $x = 6$. The coach is $5 \\times 6 = 30$ now. Check forward: in $12$ years they will be $42$ and $24$, and $42:24 = 7:4$. ✓ (The choice $12$ is the player’s age; the choice $42$ is the coach’s age in $12$ years, when the question asks for now; the choice $6$ is the multiplier $x$.)',
    },
    {
      q: 'Two siblings have ages in the ratio $3:2$ today, and $4$ years ago the ratio of their ages was $5:3$. How old is the older sibling now?',
      choices: ['$16$', '$20$', '$24$', '$40$'],
      answer: 2,
      solution:
        'The multiplier still belongs to TODAY: the ages are $3x$ and $2x$. Four years ago both were smaller by $4$, so $\\frac{3x-4}{2x-4} = \\frac{5}{3}$, giving $3(3x - 4) = 5(2x - 4)$, so $9x - 12 = 10x - 20$ and $x = 8$. The older sibling is $3 \\times 8 = 24$. Check forward: four years ago they were $20$ and $12$, and $20:12 = 5:3$, and both have aged $4$ years into $24$ and $16$. ✓ (The choice $16$ is the younger sibling today; the choice $20$ is the older sibling four years AGO; the choice $40$ is the sum of their ages, a different question.)',
    },
  ],
  // p2 — chain two ratios through the shared quantity, then use the given total
  [
    {
      q: 'If $a:b = 3:4$ and $b:c = 6:5$, and $a + b + c = 155$, what is $a$?',
      choices: ['$60$', '$50$', '$9$', '$45$'],
      answer: 3,
      solution:
        'The shared quantity $b$ is $4$ parts in one ratio and $6$ in the other, so rescale both to the least common multiple $12$: multiply the first by $3$ to get $a:b = 9:12$, and multiply the second by $2$ to get $b:c = 12:10$. Joining gives $a:b:c = 9:12:10$, whose parts total $31$, so $31x = 155$ and $x = 5$. Then $a = 9 \\times 5 = 45$. Check forward: $45 + 60 + 50 = 155$, and $45:60 = 3:4$ and $60:50 = 6:5$. ✓ (The choice $60$ is $b$ and the choice $50$ is $c$ — the wrong letters; the choice $9$ is $a$’s part number, one multiplication short of the answer.)',
    },
    {
      q: 'If $p:q = 2:7$ and $q:r = 3:4$, and $p + q + r = 165$, what is $r$?',
      choices: ['$84$', '$63$', '$18$', '$28$'],
      answer: 0,
      solution:
        'The shared quantity $q$ is $7$ parts in one ratio and $3$ in the other; the least common multiple is $21$. Multiply the first ratio by $3$: $p:q = 6:21$. Multiply the second by $7$: $q:r = 21:28$. Joining gives $p:q:r = 6:21:28$, whose parts total $55$, so $55x = 165$ and $x = 3$. Then $r = 28 \\times 3 = 84$. Check forward: $18 + 63 + 84 = 165$, and $18:63 = 2:7$ and $63:84 = 3:4$. ✓ (The choice $63$ is $q$ and the choice $18$ is $p$; the choice $28$ is $r$’s part number, which still has to be multiplied by $x$.)',
    },
    {
      q: 'If $a:b = 3:5$ and $b:c = 2:3$, and $c$ is $63$ more than $a$, what is $b$?',
      choices: ['$42$', '$70$', '$105$', '$217$'],
      answer: 1,
      solution:
        'Rescale through $b$: it is $5$ parts in one ratio and $2$ in the other, so use the least common multiple $10$. The first ratio becomes $a:b = 6:10$ and the second becomes $b:c = 10:15$, so $a:b:c = 6:10:15$. No total is given, but a difference works just as well: $c - a = 15x - 6x = 9x = 63$, so $x = 7$ and $b = 10 \\times 7 = 70$. Check forward: the three quantities are $42$, $70$, $105$; $42:70 = 3:5$, $70:105 = 2:3$, and $105 - 42 = 63$. ✓ (The choice $42$ is $a$ and the choice $105$ is $c$; the choice $217$ is $a + b + c$, the total rather than the middle quantity.)',
    },
  ],
  // p3 — a rate has a unit upstairs and a unit downstairs, and each converts separately
  [
    {
      q: 'A rescue helicopter flies at $90$ km/h. What is its speed in m/s?',
      choices: ['$324$', '$1.5$', '$25$', '$0.025$'],
      answer: 2,
      solution:
        'Convert both levels of the rate: $90$ km is $90 \\times 1000 = 90{,}000$ m, and $1$ hour is $60 \\times 60 = 3600$ s, so the speed is $\\frac{90{,}000 \\text{ m}}{3600 \\text{ s}} = 25$ m/s. The shortcut is the same arithmetic: $\\frac{1000}{3600} = \\frac{1}{3.6}$, so divide km/h by $3.6$, and $90 \\div 3.6 = 25$. ✓ (The choice $324$ MULTIPLIES by $3.6$, the conversion factor turned upside down; the choice $1.5$ divides by a single $60$ and lands on kilometers per minute; the choice $0.025$ turns the hour into seconds but never turns the kilometers into meters.)',
    },
    {
      q: 'A gust of wind moves at $20$ m/s. What is that speed in km/h?',
      choices: ['$1200$', '$72{,}000$', '$0.02$', '$72$'],
      answer: 3,
      solution:
        'This trip runs the other way, so multiply by $\\frac{3600 \\text{ s}}{1 \\text{ h}}$ and by $\\frac{1 \\text{ km}}{1000 \\text{ m}}$: $\\frac{20 \\text{ m}}{1 \\text{ s}} \\times \\frac{3600 \\text{ s}}{1 \\text{ h}} \\times \\frac{1 \\text{ km}}{1000 \\text{ m}} = \\frac{72{,}000}{1000} = 72$ km/h. Seconds cancel, meters cancel, and km per hour is left. Short version: multiply m/s by $3.6$. ✓ (The choice $1200$ uses only one factor of $60$ and stops at meters per minute; the choice $72{,}000$ is the middle step in meters per hour, one factor short; the choice $0.02$ converts the meters into kilometers but leaves the time in seconds.)',
    },
    {
      q: 'A ferry cruises at $12$ meters per second. How many kilometers does it cover in $25$ minutes?',
      choices: ['$18$', '$18{,}000$', '$300$', '$43.2$'],
      answer: 0,
      solution:
        'Get the time into the same unit as the rate: $25$ minutes is $25 \\times 60 = 1500$ seconds. Then distance $=$ rate $\\times$ time $= \\frac{12 \\text{ m}}{1 \\text{ s}} \\times 1500 \\text{ s} = 18{,}000$ m, and $18{,}000 \\text{ m} \\times \\frac{1 \\text{ km}}{1000 \\text{ m}} = 18$ km. Check forward: $12$ m/s is $12 \\times 3.6 = 43.2$ km/h, and in $\\frac{25}{60}$ of an hour that is $43.2 \\times \\frac{25}{60} = 18$ km. ✓ (The choice $18{,}000$ leaves the answer in METERS; the choice $300$ is $12 \\times 25$, treating the minutes as if they were seconds; the choice $43.2$ is the speed in km/h, not a distance — a rate still has to be multiplied by a time.)',
    },
  ],
  // p4 — two percent statements meet at an equals sign; only one side has an unknown
  [
    {
      q: '$60\\%$ of a number $n$ equals $80\\%$ of $45$. What is $n$?',
      choices: ['$36$', '$60$', '$27$', '$21.6$'],
      answer: 1,
      solution:
        'Translate both sides into an equation: $0.6n = 0.8 \\times 45 = 36$. Then $n = \\frac{36}{0.6} = 60$. Check forward: $60\\%$ of $60$ is $36$, and $80\\%$ of $45$ is also $36$. ✓ (The choice $36$ is only the right-hand side, one step short of $n$; the choice $27$ is $60\\%$ of $45$, which attaches the left percent to the right number; the choice $21.6$ multiplies by $0.6$ instead of dividing, shrinking the number when it should grow.)',
    },
    {
      q: '$25\\%$ of $160$ equals $p\\%$ of $50$. What is $p$?',
      choices: ['$125\\%$', '$40\\%$', '$80\\%$', '$25\\%$'],
      answer: 2,
      solution:
        'Work out the side that has no unknown: $25\\%$ of $160$ is $40$. Now the sentence reads "$40$ is $p\\%$ of $50$", which is $40 = \\frac{p}{100} \\times 50$, so $p = \\frac{40 \\times 100}{50} = 80$. Check forward: $80\\%$ of $50$ is $40$, matching the left side. ✓ (The choice $125\\%$ answers the reversed question, "$50$ is what percent of $40$?"; the choice $40\\%$ reads the VALUE $40$ as though it were the percent; the choice $25\\%$ simply copies the percent that was given.)',
    },
    {
      q: '$120\\%$ of a number $y$ equals $75\\%$ of $96$. What is $y$?',
      choices: ['$72$', '$86.4$', '$600$', '$60$'],
      answer: 3,
      solution:
        'The right side is $0.75 \\times 96 = 72$, so $1.2y = 72$ and $y = \\frac{72}{1.2} = 60$. Check forward: $120\\%$ of $60$ is $72$. ✓ Notice $y$ is SMALLER than $72$, as it must be when the percent is over $100\\%$. (The choice $72$ stops at the right-hand side; the choice $86.4$ multiplies by $1.2$ instead of dividing, so the percent is applied the wrong way round; the choice $600$ reads $120\\%$ as $0.12$ and divides by that, slipping a decimal place.)',
    },
  ],
  // p5 — successive percent changes multiply; the second acts on what the first produced
  [
    {
      q: 'A number is increased by $50\\%$, and that result is then increased by $20\\%$, giving $108$. What was the original number?',
      choices: ['$90$', '$72$', '$60$', '$194.4$'],
      answer: 2,
      solution:
        'Each change is a multiplier, and they multiply together: $n \\times 1.5 \\times 1.2 = 1.8n = 108$, so $n = 60$. Check forward: $60$ rises to $90$, and $20\\%$ of $90$ is $18$, so $90 + 18 = 108$. ✓ (The choice $90$ undoes only the second increase and lands on the value after the FIRST one, a step short of the start; the choice $72$ is $108 \\div 1.5$, undoing only the first increase; the choice $194.4$ is $108 \\times 1.8$, applying the increases again instead of undoing them.)',
    },
    {
      q: 'A number is increased by $20\\%$, and that result is then decreased by $25\\%$, giving $72$. What was the original number?',
      choices: ['$96$', '$80$', '$60$', '$64.8$'],
      answer: 1,
      solution:
        'Multiply the two factors: $n \\times 1.2 \\times 0.75 = 0.9n = 72$, so $n = 80$. Check forward: $80$ grows to $96$, and $25\\%$ of $96$ is $24$, leaving $96 - 24 = 72$. ✓ The number ends BELOW where it started, because the $25\\%$ cut worked on a bigger value than the $20\\%$ rise did. (The choice $96$ is the value after the increase, found by undoing only the decrease; the choice $60$ is $72 \\div 1.2$, undoing only the increase; the choice $64.8$ is $72 \\times 0.9$, multiplying by the combined factor instead of dividing by it.)',
    },
    {
      q: 'A price is raised $25\\%$, and the new price is then raised a further $40\\%$ of itself. Compared with the original price, what single percent increase is this equivalent to?',
      choices: ['$65\\%$', '$15\\%$', '$175\\%$', '$75\\%$'],
      answer: 3,
      solution:
        'Multiply the factors: $1.25 \\times 1.4 = 1.75$, so the final price is $175\\%$ of the original — an increase of $175\\% - 100\\% = 75\\%$. Carry a concrete price through to be sure: $\\$100$ rises to $\\$125$, and $40\\%$ of $\\$125$ is $\\$50$, giving $\\$175$, which is $\\$75$ more than the start. ✓ (The choice $65\\%$ ADDS the two percents, but the second rise acted on the already-raised price; the choice $175\\%$ reports the multiplier as if it were the increase, counting the original price twice; the choice $15\\%$ subtracts one percent from the other.)',
    },
  ],
  // p6 — weighted mixtures: count the pure stuff, then divide by the whole
  [
    {
      q: 'You mix $4$ liters of a drink that is $60\\%$ juice with $6$ liters of a drink that is $35\\%$ juice. What percent of the new mixture is juice?',
      choices: ['$45\\%$', '$47.5\\%$', '$50\\%$', '$95\\%$'],
      answer: 0,
      solution:
        'Track the pure juice: $0.6 \\times 4 = 2.4$ liters from the first drink and $0.35 \\times 6 = 2.1$ liters from the second, so $4.5$ liters of juice sit in $4 + 6 = 10$ liters of mixture. That is $\\frac{4.5}{10} = 0.45 = 45\\%$ of the new mixture. ✓ (The choice $47.5\\%$ averages $60$ and $35$ evenly, but there is more of the weaker drink so the answer must fall below the halfway mark; the choice $50\\%$ attaches each percent to the wrong volume, computing $0.6 \\times 6 + 0.35 \\times 4$; the choice $95\\%$ adds the two percents, which would make the mixture nearly pure juice.)',
    },
    {
      q: 'You mix $3$ liters of a $40\\%$ syrup solution with $9$ liters of a $20\\%$ syrup solution. What percent of the new mixture is WATER?',
      choices: ['$25\\%$', '$70\\%$', '$75\\%$', '$65\\%$'],
      answer: 2,
      solution:
        'Find the syrup first: $0.4 \\times 3 = 1.2$ liters and $0.2 \\times 9 = 1.8$ liters, for $3$ liters of syrup in $12$ liters of mixture, which is $\\frac{3}{12} = 25\\%$ syrup. Everything else is water, so the water share is $100\\% - 25\\% = 75\\%$. Check forward: $9$ liters of water in $12$ liters is $\\frac{9}{12} = 75\\%$. ✓ (The choice $25\\%$ is the SYRUP share — the other component; the choice $70\\%$ comes from averaging $40$ and $20$ evenly to get $30\\%$ syrup, ignoring that there is three times as much of the weaker solution; the choice $65\\%$ attaches each percent to the wrong volume, computing $0.4 \\times 9 + 0.2 \\times 3 = 4.2$ liters of syrup.)',
    },
    {
      q: 'A shop blends $5$ kilograms of a nut mix that is $30\\%$ cashews with $20$ kilograms of a mix that is $55\\%$ cashews. What percent of the blend is cashews?',
      choices: ['$42.5\\%$', '$50\\%$', '$35\\%$', '$85\\%$'],
      answer: 1,
      solution:
        'Weigh the cashews in each batch: $0.3 \\times 5 = 1.5$ kg and $0.55 \\times 20 = 11$ kg, so the blend holds $12.5$ kg of cashews in $5 + 20 = 25$ kg. That is $\\frac{12.5}{25} = 0.5 = 50\\%$. ✓ (The choice $42.5\\%$ is the plain average of $30$ and $55$, which would only be right with equal masses — there is four times as much of the richer mix, so the answer must sit well above the average; the choice $35\\%$ swaps the masses, computing $0.3 \\times 20 + 0.55 \\times 5$; the choice $85\\%$ adds the two percents.)',
    },
  ],
  // p7 — one group gains while the other loses, and the two counts meet
  [
    {
      q: 'A tray holds green and yellow apples in the ratio $3:7$. If $10$ green apples are added and $2$ yellow apples are taken away, the two colours become equal in number. How many yellow apples were on the tray originally?',
      choices: ['$9$', '$19$', '$30$', '$21$'],
      answer: 3,
      solution:
        'Name the ORIGINAL counts $3x$ green and $7x$ yellow, then apply each change to its own colour: $3x + 10 = 7x - 2$. So $12 = 4x$ and $x = 3$, which makes the yellow apples $7 \\times 3 = 21$. Check forward: $9 + 10 = 19$ green and $21 - 2 = 19$ yellow — equal. ✓ (The choice $9$ is the green count; the choice $19$ is the size each colour reaches AFTER the changes; the choice $30$ is the original total of both colours.)',
    },
    {
      q: 'A club has juniors and seniors in the ratio $5:8$. If $12$ juniors join and $6$ seniors leave, the two groups will be equal in size. How many juniors are in the club now, before anyone joins or leaves?',
      choices: ['$30$', '$48$', '$42$', '$78$'],
      answer: 0,
      solution:
        'Let the club hold $5x$ juniors and $8x$ seniors right now. The juniors grow and the seniors shrink, so $5x + 12 = 8x - 6$, giving $18 = 3x$ and $x = 6$. The juniors number $5 \\times 6 = 30$. Check forward: $30 + 12 = 42$ juniors and $48 - 6 = 42$ seniors — equal. ✓ (The choice $48$ is the senior count; the choice $42$ is the size each group reaches after the changes; the choice $78$ is the club’s current total, not the junior count.)',
    },
    {
      q: 'Two shelves hold hardbacks and paperbacks in the ratio $7:4$. If $3$ hardbacks are removed and $15$ paperbacks are added, the two counts become equal. How many books are on the two shelves altogether right now, before the change?',
      choices: ['$42$', '$24$', '$66$', '$78$'],
      answer: 2,
      solution:
        'The current counts are $7x$ hardbacks and $4x$ paperbacks. One shelf loses and the other gains: $7x - 3 = 4x + 15$, so $3x = 18$ and $x = 6$. The shelves hold $42$ and $24$ books, which is $66$ altogether. Check forward: $42 - 3 = 39$ and $24 + 15 = 39$ — equal. ✓ (The choices $42$ and $24$ are the separate shelves, but the question asks for both together; the choice $78$ is the total AFTER the change, $39 + 39$, and the question asks for right now.)',
    },
  ],
  // p8 — a markup and a discount chain as multipliers, and they need not cancel
  [
    {
      q: 'A shop buys a kettle for $\\$80$, marks it up $50\\%$ of that cost, then runs a sale of $40\\%$ off the marked price. What does a customer pay?',
      choices: ['$\\$120$', '$\\$72$', '$\\$88$', '$\\$48$'],
      answer: 1,
      solution:
        'Chain the multipliers, each applied to the price in front of it: $80 \\times 1.5 = 120$ for the marked price, then $120 \\times 0.6 = 72$ at the till. Check forward: $40\\%$ of $\\$120$ is $\\$48$, and $120 - 48 = 72$. ✓ The shop still clears $\\$72$ on an $\\$80$ kettle... which is a loss, because $1.5 \\times 0.6 = 0.9$, not $1$. (The choice $\\$120$ is the marked price, one step short; the choice $\\$88$ adds the percents, $+50\\% - 40\\% = +10\\%$, but the discount acted on the marked-up price; the choice $\\$48$ applies only the discount and forgets the markup.)',
    },
    {
      q: 'A store marks a lamp up $60\\%$ of what it paid, then sells it at $25\\%$ off the marked price, and the customer pays $\\$72$. How much did the store pay for the lamp?',
      choices: ['$\\$96$', '$\\$45$', '$\\$86.40$', '$\\$60$'],
      answer: 3,
      solution:
        'Let the cost be $c$. The two steps multiply: $c \\times 1.6 \\times 0.75 = 1.2c = 72$, so $c = \\frac{72}{1.2} = \\$60$. Check forward: $60 \\times 1.6 = \\$96$ marked, and $25\\%$ of $\\$96$ is $\\$24$, leaving $\\$72$. ✓ (The choice $\\$96$ is the marked price, found by undoing only the discount; the choice $\\$45$ is $72 \\div 1.6$, undoing only the markup; the choice $\\$86.40$ is $72 \\times 1.2$, applying the combined factor forwards when the story has to be run backwards.)',
    },
    {
      q: 'A ticket price is raised $20\\%$, and the raised price is then cut $30\\%$. Compared with the original price, what is the overall change?',
      choices: ['A decrease of $16\\%$', 'A decrease of $10\\%$', 'An increase of $16\\%$', 'No change at all'],
      answer: 0,
      solution:
        'Multiply the factors: $1.2 \\times 0.7 = 0.84$, so $84\\%$ of the original price survives — a decrease of $100\\% - 84\\% = 16\\%$. Carry a concrete price through: $\\$50$ rises to $\\$60$, and $30\\%$ of $\\$60$ is $\\$18$, leaving $\\$42$, which is $\\$8$ below $\\$50$, and $\\frac{8}{50} = 16\\%$. ✓ (The choice "a decrease of $10\\%$" adds the percents, $+20\\% - 30\\%$, but the cut acted on the raised price; the choice "an increase of $16\\%$" has the size right and the direction backwards — $0.84$ is below $1$, so the price ended lower; the choice "no change at all" assumes a rise and a fall of similar size undo each other, which they never quite do.)',
    },
  ],
  // p9 — a percent of a percent: the multipliers stack, they do not add
  [
    {
      q: 'What is $60\\%$ of $75\\%$ of $240$?',
      choices: ['$180$', '$144$', '$108$', '$324$'],
      answer: 2,
      solution:
        'Work from the inside out: $75\\%$ of $240$ is $180$, and $60\\%$ of $180$ is $108$. Or multiply the factors first: $0.6 \\times 0.75 = 0.45$, and $45\\%$ of $240$ is $108$ — percents of percents multiply. ✓ (The choice $180$ stops after the inner step; the choice $144$ is $60\\%$ of $240$, skipping the $75\\%$ layer entirely; the choice $324$ adds the percents into $135\\%$ of $240$, which is larger than the number you started with — impossible when both percents are under $100\\%$.)',
    },
    {
      q: '$25\\%$ of $80\\%$ of a number is $36$. What is the number?',
      choices: ['$144$', '$180$', '$45$', '$7.2$'],
      answer: 1,
      solution:
        'Stack the factors: $0.25 \\times 0.8 = 0.2$, so the sentence says $0.2n = 36$ and $n = \\frac{36}{0.2} = 180$. Check forward: $80\\%$ of $180$ is $144$, and $25\\%$ of $144$ is $36$. ✓ (The choice $144$ divides by only the $0.25$ and lands on the intermediate value; the choice $45$ divides by only the $0.8$; the choice $7.2$ is $36 \\times 0.2$, multiplying by the combined factor instead of dividing by it.)',
    },
    {
      q: 'What is $50\\%$ of $40\\%$ of $30\\%$ of $500$?',
      choices: ['$60$', '$150$', '$600$', '$30$'],
      answer: 3,
      solution:
        'Peel the layers from the inside: $30\\%$ of $500$ is $150$, then $40\\%$ of $150$ is $60$, then $50\\%$ of $60$ is $30$. The multiplier route agrees: $0.5 \\times 0.4 \\times 0.3 = 0.06$, and $6\\%$ of $500$ is $30$. ✓ (The choice $150$ stops after the innermost layer; the choice $60$ stops one layer short; the choice $600$ adds the three percents into $120\\%$ of $500$, but taking a fraction of a fraction of a fraction can only make the number smaller.)',
    },
  ],
  // p10 — solution mixing where the added liquid joins BOTH the pure part and the whole
  [
    {
      q: 'How many liters of a $30\\%$ acid solution must be added to $12$ liters of a $10\\%$ acid solution to make a $15\\%$ solution?',
      choices: ['$4$', '$2$', '$12$', '$16$'],
      answer: 0,
      solution:
        'Let $x$ be the liters added. The acid comes from both sources: $0.3x + 0.1 \\times 12 = 0.3x + 1.2$. The whole mixture is $12 + x$ liters, so $0.3x + 1.2 = 0.15(12 + x) = 1.8 + 0.15x$. Then $0.15x = 0.6$ and $x = 4$. Check forward: $1.2 + 1.2 = 2.4$ liters of acid in $16$ liters, and $\\frac{2.4}{16} = 15\\%$. ✓ (The choice $2$ solves $0.3x + 1.2 = 0.15 \\times 12$, forgetting that the liters poured in swell the WHOLE as well as the acid; the choice $12$ assumes equal amounts of the two solutions, which would give the plain average $20\\%$; the choice $16$ is the volume of the finished mixture, not the amount added.)',
    },
    {
      q: 'How many liters of pure water must be added to $9$ liters of a $40\\%$ alcohol solution to bring it down to $30\\%$ alcohol?',
      choices: ['$12$', '$3$', '$3.6$', '$2.7$'],
      answer: 1,
      solution:
        'Water carries no alcohol, so the alcohol is frozen at $0.4 \\times 9 = 3.6$ liters; only the total moves. With $w$ liters of water added, $\\frac{3.6}{9 + w} = 0.3$, so $9 + w = \\frac{3.6}{0.3} = 12$ and $w = 3$. Check forward: $3.6$ liters of alcohol in $12$ liters of solution is exactly $30\\%$. ✓ (The choice $12$ is the size of the finished solution, one step past the question; the choice $3.6$ is the liters of alcohol, not of water; the choice $2.7$ is $30\\%$ of the original $9$ liters, taking the percent of the volume you started with instead of the volume you end with.)',
    },
    {
      q: 'A lab needs $20$ liters of a $30\\%$ salt solution, made by mixing a $15\\%$ solution with a $35\\%$ solution. How many liters of the $35\\%$ solution are needed?',
      choices: ['$5$', '$10$', '$15$', '$6$'],
      answer: 2,
      solution:
        'Let $y$ be the liters of the $35\\%$ solution, so the rest, $20 - y$ liters, is the $15\\%$ solution. The finished batch must hold $0.3 \\times 20 = 6$ liters of salt, so $0.35y + 0.15(20 - y) = 6$, giving $0.2y + 3 = 6$ and $y = 15$. Check forward: $15$ liters at $35\\%$ gives $5.25$ liters of salt and $5$ liters at $15\\%$ gives $0.75$, for $6$ liters of salt in $20$ — exactly $30\\%$. ✓ (The choice $5$ is the amount of the WEAKER solution; the choice $10$ splits the batch evenly, which would land at the midpoint $25\\%$, not $30\\%$; the choice $6$ is the liters of pure salt in the finished batch.)',
    },
  ],
  // p11 — three parts, and the equation comes from a difference rather than a total
  [
    {
      q: 'Three bags of flour have weights in the ratio $3:4:8$, and the heaviest bag is $15$ kilograms heavier than the lightest. What do the three bags weigh altogether?',
      choices: ['$24$', '$9$', '$225$', '$45$'],
      answer: 3,
      solution:
        'Write the weights as $3x$, $4x$, and $8x$ kilograms. No total is given, but the difference between the heaviest and the lightest is $8x - 3x = 5x = 15$, so $x = 3$. The bags weigh $9$, $12$, and $24$ kilograms, for $45$ kilograms in all. Check forward: $24 - 9 = 15$ ✓ and $9:12:24 = 3:4:8$ ✓. (The choices $24$ and $9$ are single bags rather than all three; the choice $225$ treats the $15$ kilograms as the multiplier and computes $15 \\times 15$, but $15$ is $5x$, not $x$.)',
    },
    {
      q: 'Three funds hold money in the ratio $4:6:9$, and the middle fund holds $\\$30$ more than the smallest. How much is in the largest fund?',
      choices: ['$\\$135$', '$\\$60$', '$\\$90$', '$\\$285$'],
      answer: 0,
      solution:
        'The funds hold $4x$, $6x$, and $9x$ dollars. The clue compares the middle with the smallest: $6x - 4x = 2x = 30$, so $x = 15$. The largest fund holds $9 \\times 15 = \\$135$. Check forward: the funds hold $\\$60$, $\\$90$, and $\\$135$; the middle is indeed $\\$30$ above the smallest, and $60:90:135 = 4:6:9$. ✓ (The choices $\\$60$ and $\\$90$ are the other two funds — read which one is asked for; the choice $\\$285$ is the money in all three funds together.)',
    },
    {
      q: 'Three shelves hold books in the ratio $4:9:6$, and the shelf with the most books holds $45$ more than the shelf with the fewest. How many books are on all three shelves together?',
      choices: ['$81$', '$171$', '$36$', '$855$'],
      answer: 1,
      solution:
        'The shelves hold $4x$, $9x$, and $6x$ books, so the biggest is $9x$ and the smallest is $4x$. Their difference is $9x - 4x = 5x = 45$, so $x = 9$, and the shelves hold $36$, $81$, and $54$ books — $171$ altogether. Check forward: $81 - 36 = 45$ ✓ and $36:81:54 = 4:9:6$ ✓. (The choices $81$ and $36$ are the fullest and emptiest shelves, not the whole collection; the choice $855$ treats the difference $45$ as the multiplier and computes $19 \\times 45$, but $45$ is $5x$.)',
    },
  ],
  // p12 — a percent step and a flat step; undo them in the reverse of the order applied
  [
    {
      q: 'A checkout first takes $\\$8$ off a price, then takes $20\\%$ off the reduced amount, leaving a final price of $\\$36$. What was the original price?',
      choices: ['$\\$45$', '$\\$44$', '$\\$53$', '$\\$51.20$'],
      answer: 2,
      solution:
        'Undo the steps in reverse order, and undo a percent by DIVIDING. Before the $20\\%$ came off: $0.8p = 36$, so the price then was $\\frac{36}{0.8} = \\$45$. Before the $\\$8$ came off: $45 + 8 = \\$53$. Check forward: $53 - 8 = 45$, and $45 \\times 0.8 = 36$. ✓ (The choice $\\$45$ is the price after the $\\$8$ came off, one step short; the choice $\\$44$ is $36 + 8$, which never undoes the discount at all; the choice $\\$51.20$ undoes the discount by ADDING $20\\%$ of $\\$36$ to reach $\\$43.20$ before putting the $\\$8$ back, but the $20\\%$ was taken of $\\$45$, a bigger base, so adding it onto $\\$36$ recovers too little.)',
    },
    {
      q: 'A store takes $25\\%$ off a price and then subtracts a $\\$6$ coupon from the discounted amount, leaving a final price of $\\$42$. What was the original price?',
      choices: ['$\\$48$', '$\\$60$', '$\\$62$', '$\\$64$'],
      answer: 3,
      solution:
        'Reverse the story step by step. The coupon came off last, so put it back first: $42 + 6 = \\$48$ was the price after the discount. That $\\$48$ is $75\\%$ of the original, so $0.75p = 48$ and $p = \\frac{48}{0.75} = \\$64$. Check forward: $64 \\times 0.75 = 48$, and $48 - 6 = 42$. ✓ (The choice $\\$48$ is the discounted price, one step short; the choice $\\$60$ undoes the discount by adding $25\\%$ of $\\$48$, taking the percent of the wrong base; the choice $\\$62$ undoes the two steps in the WRONG ORDER, dividing the $\\$42$ by $0.75$ first and then adding the coupon.)',
    },
    {
      q: 'A shop takes $30\\%$ off a $\\$120$ jacket and then subtracts a fixed coupon from the discounted price, and the customer pays $\\$70$. How much was the coupon worth?',
      choices: ['$\\$14$', '$\\$50$', '$\\$84$', '$\\$36$'],
      answer: 0,
      solution:
        'Run the story forward as far as it will go, then read off the gap. A $30\\%$ discount leaves $70\\%$: $120 \\times 0.7 = \\$84$ after the sale. The coupon closes the distance from there to the till: $84 - 70 = \\$14$. Check forward: $\\$120 \\to \\$84 \\to \\$70$. ✓ (The choice $\\$50$ is $120 - 70$, which credits the coupon with the discount’s work as well; the choice $\\$84$ is the price after the discount, not the coupon; the choice $\\$36$ is the discount itself, $30\\%$ of $\\$120$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 6,
  challenge,
}
