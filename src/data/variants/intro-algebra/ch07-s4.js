// Introduction to Algebra chapter 7 — variations for the chapter worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE: each variation carries a question, an
//    `answer` string, and a solution. There are no choices to write, so every
//    ounce of teaching lives in the solution.
//  - Every story was CLASSIFIED before a single number was chosen. A fixed job
//    split among workers or machines is INVERSE; a steady price or yield per
//    unit is DIRECT; a fixed distance makes speed and time INVERSE; work done
//    together adds RATES, never times.
//  - Every key was re-derived from the question text alone and then pushed
//    FORWARD through the story: the constant was recomputed from the answer and
//    shown to reproduce the given data, the combined rate was re-added, and
//    every chase was re-run to confirm both travelers stand at the same
//    milepost at the stated moment.
//  - A variation changes the numbers AND the context, and where it makes sense
//    the direction too: hand over the result and ask for the input, give the
//    team time and ask for one worker alone, or ask what speed the chaser needs.
//  - Story sanity: workers, gardeners, horses, cartridges and pumps come out
//    whole and positive; every time, speed and price is positive; combined
//    times beat every solo time and solo times beat every combined time.
//  - Units named in the question are echoed in the answer, exactly as the base
//    problems do (cups, days, hours); clock times are plain text.

const worksheet = [
  // 1. Direct proportion from one matched pair. Find k, then predict — and in
  //    the second variation, run the finished rule backwards.
  [
    {
      q: 'Suppose $y$ is directly proportional to $x$, and $y = 28$ when $x = 4$. Find $y$ when $x = 9$.',
      answer: '$y = 63$',
      solution:
        'Direct proportion means the RATIO is fixed: $k = \\frac{y}{x} = \\frac{28}{4} = 7$, so the rule is $y = 7x$. When $x = 9$: $y = 7 \\times 9 = 63$. Check forward: the answer pair gives $\\frac{63}{9} = 7$, the same constant the given pair gave ✓.',
    },
    {
      q: 'Suppose $y$ is directly proportional to $x$, and $y = 45$ when $x = 18$. For what value of $x$ is $y = 75$?',
      answer: '$x = 30$',
      solution:
        'This one runs the rule BACKWARDS, so build the rule first: $k = \\frac{45}{18} = 2.5$, giving $y = 2.5x$. Now set $75 = 2.5x$ and divide: $x = \\frac{75}{2.5} = 30$. Check forward: $2.5 \\times 30 = 75$ ✓, and $\\frac{75}{30} = 2.5$ matches $\\frac{45}{18}$ ✓. Since $y$ grew, $x$ had to grow too — direct proportion moves both the same way.',
    },
    {
      q: 'Suppose $y$ is directly proportional to $x$, and $y = 27$ when $x = 12$. Find $y$ when $x = 20$.',
      answer: '$y = 45$',
      solution:
        'The constant need not be a whole number: $k = \\frac{27}{12} = \\frac{9}{4} = 2.25$, so $y = 2.25x$. When $x = 20$: $y = 2.25 \\times 20 = 45$. Check forward: $\\frac{45}{20} = 2.25$, the same ratio as $\\frac{27}{12}$ ✓. Adding $8$ to $y$ because $x$ rose by $8$ would give $35$ — but proportion SCALES, it does not shift.',
    },
  ],
  // 2. Inverse proportion from one matched pair. The PRODUCT is what stays put.
  [
    {
      q: 'Suppose $y$ is inversely proportional to $x$, and $y = 8$ when $x = 9$. Find $y$ when $x = 6$.',
      answer: '$y = 12$',
      solution:
        'Inverse proportion means the PRODUCT is fixed: $k = xy = 9 \\times 8 = 72$, so $y = \\frac{72}{x}$. When $x = 6$: $y = \\frac{72}{6} = 12$. Check forward: $6 \\times 12 = 72$, the same constant as $9 \\times 8$ ✓. The input shrank and the output grew, exactly as inverse proportion promises.',
    },
    {
      q: 'Suppose $y$ is inversely proportional to $x$, and $y = 6$ when $x = 15$. For what value of $x$ is $y = 45$?',
      answer: '$x = 2$',
      solution:
        'The constant product is $k = 15 \\times 6 = 90$, so $y = \\frac{90}{x}$. This time $y$ is handed to us: $45 = \\frac{90}{x}$ gives $x = \\frac{90}{45} = 2$. Check forward: $2 \\times 45 = 90$ ✓. The output was multiplied by $\\frac{45}{6} = 7.5$, so the input had to be DIVIDED by $7.5$: $\\frac{15}{7.5} = 2$ ✓.',
    },
    {
      q: 'Suppose $y$ is inversely proportional to $x$, and $y = 24$ when $x = 2.5$. Find $y$ when $x = 15$.',
      answer: '$y = 4$',
      solution:
        'A decimal input changes nothing about the method: $k = xy = 2.5 \\times 24 = 60$, so $y = \\frac{60}{x}$. When $x = 15$: $y = \\frac{60}{15} = 4$. Check forward: $15 \\times 4 = 60$, matching $2.5 \\times 24$ ✓. Using the RATIO $\\frac{24}{2.5} = 9.6$ as the constant would give $144$ — that is the direct-proportion rule applied to an inverse story.',
    },
  ],
  // 3. Joint proportion z = kxy. Two inputs move at once, so there is no
  //    shortcut: find k first, then plug in.
  [
    {
      q: 'Suppose $z$ is jointly proportional to $x$ and $y$, and $z = 84$ when $x = 6$ and $y = 2$. Find $z$ when $x = 3$ and $y = 5$.',
      answer: '$z = 105$',
      solution:
        'The rule has the form $z = kxy$, and the constant is $k = \\frac{z}{xy} = \\frac{84}{6 \\times 2} = \\frac{84}{12} = 7$. So $z = 7xy$, and with $x = 3$, $y = 5$: $z = 7 \\times 3 \\times 5 = 105$. Check forward: $\\frac{105}{3 \\times 5} = \\frac{105}{15} = 7$, the same constant ✓.',
    },
    {
      q: 'Suppose $z$ is jointly proportional to $x$ and $y$, and $z = 90$ when $x = 5$ and $y = 6$. Find $y$ when $z = 72$ and $x = 8$.',
      answer: '$y = 3$',
      solution:
        'Same rule, opposite direction. First the constant: $k = \\frac{90}{5 \\times 6} = \\frac{90}{30} = 3$, so $z = 3xy$. Now solve for the missing input: $72 = 3 \\times 8 \\times y = 24y$, so $y = \\frac{72}{24} = 3$. Check forward: $3 \\times 8 \\times 3 = 72$ ✓, and $\\frac{72}{8 \\times 3} = 3$ matches the constant from the first data set ✓.',
    },
    {
      q: 'Suppose $z$ is jointly proportional to $x$ and $y$, and $z = 48$ when $x = 4$ and $y = 6$. Find $z$ when $x = 9$ and $y = 5$.',
      answer: '$z = 90$',
      solution:
        'The constant is $k = \\frac{48}{4 \\times 6} = \\frac{48}{24} = 2$, so $z = 2xy$. Then $z = 2 \\times 9 \\times 5 = 90$. Check forward: $\\frac{90}{9 \\times 5} = \\frac{90}{45} = 2$ ✓. Both inputs changed, so there is nothing to scale — rebuild the rule and substitute.',
    },
  ],
  // 4. Direct proportion in a story: a steady amount per unit. Find the unit
  //    rate, then multiply or divide as the question demands.
  [
    {
      q: 'A printer uses ink at a steady rate and gets through $4$ cartridges printing $900$ posters. How many cartridges does it need for $1575$ posters?',
      answer: '$7$ cartridges',
      solution:
        'Cartridges are directly proportional to posters, so find the yield of one cartridge: $\\frac{900}{4} = 225$ posters per cartridge. For $1575$ posters: $\\frac{1575}{225} = 7$ cartridges. Check forward: $7 \\times 225 = 1575$ posters ✓, and $\\frac{1575}{7} = 225$ is the same yield as $\\frac{900}{4}$ ✓. The count is whole, as cartridges must be.',
    },
    {
      q: 'A gardener spreads grass seed evenly and covers $150$ square meters with $6$ kilograms of seed. How many square meters will $21$ kilograms cover?',
      answer: '$525$ square meters',
      solution:
        'Area covered is directly proportional to seed used: one kilogram covers $\\frac{150}{6} = 25$ square meters. Then $21$ kilograms cover $21 \\times 25 = 525$ square meters. Check forward: $\\frac{525}{21} = 25$ square meters per kilogram, matching $\\frac{150}{6}$ ✓. Note the question runs the other way from the seed-per-area version — read which quantity is being asked for.',
    },
    {
      q: 'A hardware shop sells rope at a fixed price per meter, and $8$ meters cost $\\$14$. How much do $20$ meters cost?',
      answer: '$\\$35$',
      solution:
        'Cost is directly proportional to length, so the constant is the price of one meter: $\\frac{14}{8} = \\$1.75$ per meter. Then $20$ meters cost $20 \\times 1.75 = \\$35$. Check forward: $\\frac{35}{20} = 1.75$, the same price per meter as $\\frac{14}{8}$ ✓. Adding $\\$12$ for the extra $12$ meters would only be right if rope cost $\\$1$ per meter.',
    },
  ],
  // 5. A fixed job shared out: (workers) x (time) is constant. INVERSE.
  [
    {
      q: 'A bank of $6$ machines can sort a pile of mail in $14$ hours. Working at the same rate, how long would $21$ machines take?',
      answer: '$4$ hours',
      solution:
        'The size of the job is fixed: $6 \\times 14 = 84$ machine-hours, no matter how many machines are switched on. With $21$ machines the time is $\\frac{84}{21} = 4$ hours. Check forward: $21 \\times 4 = 84$ machine-hours, the same job ✓. More machines, less time — machine count and time are inversely proportional.',
    },
    {
      q: 'A team of $8$ gardeners can clear a field in $21$ days. Working at the same rate, how many gardeners are needed to clear it in $14$ days?',
      answer: '$12$ gardeners',
      solution:
        'This variation hands over the TIME and asks for the crew. The job is $8 \\times 21 = 168$ gardener-days. To finish in $14$ days you need $\\frac{168}{14} = 12$ gardeners. Check forward: $12 \\times 14 = 168$ gardener-days ✓. The deadline got shorter, so the crew had to get bigger — and $12$ is a whole number of gardeners, as it must be.',
    },
    {
      q: 'Fifteen volunteers can pack all the food boxes in $8$ hours. If only $10$ volunteers turn up, how long will the packing take?',
      answer: '$12$ hours',
      solution:
        'The job is $15 \\times 8 = 120$ volunteer-hours. With $10$ volunteers: $\\frac{120}{10} = 12$ hours. Check forward: $10 \\times 12 = 120$ volunteer-hours, the same job ✓. Fewer helpers must mean MORE time, so an answer below $8$ hours would have been a sign of the wrong model.',
    },
  ],
  // 6. Working together: add the RATES. The third variation reverses it —
  //    subtract to recover the partner who was not named.
  [
    {
      q: 'One tap fills a barrel in $12$ minutes; a second tap fills the same barrel in $6$ minutes. How long do the two taps take together?',
      answer: '$4$ minutes',
      solution:
        'Turn times into rates: the first tap fills $\\frac{1}{12}$ of the barrel per minute, the second $\\frac{1}{6}$. Add the rates: $\\frac{1}{12} + \\frac{1}{6} = \\frac{1}{12} + \\frac{2}{12} = \\frac{3}{12} = \\frac{1}{4}$ barrel per minute, so the barrel fills in $4$ minutes. Check forward: in $4$ minutes the first tap delivers $\\frac{4}{12} = \\frac{1}{3}$ of a barrel and the second $\\frac{4}{6} = \\frac{2}{3}$, and $\\frac{1}{3} + \\frac{2}{3} = 1$ whole barrel ✓. The answer beats the faster tap alone, as teamwork must.',
    },
    {
      q: 'Maya can stack the library shelves in $12$ hours and Owen can stack them in $24$ hours. How long do they take working together?',
      answer: '$8$ hours',
      solution:
        'Rates, not times: Maya works at $\\frac{1}{12}$ of the job per hour and Owen at $\\frac{1}{24}$. Together that is $\\frac{1}{12} + \\frac{1}{24} = \\frac{2}{24} + \\frac{1}{24} = \\frac{3}{24} = \\frac{1}{8}$ of the job per hour, so they finish in $8$ hours. Check forward: in $8$ hours Maya does $\\frac{8}{12} = \\frac{2}{3}$ of the shelves and Owen does $\\frac{8}{24} = \\frac{1}{3}$, and $\\frac{2}{3} + \\frac{1}{3} = 1$ whole job ✓. Averaging the times to get $18$ hours would be slower than Maya alone — impossible.',
    },
    {
      q: 'Two hoses together fill a pond in $8$ hours. The first hose alone would need $24$ hours. How long would the second hose alone need?',
      answer: '$12$ hours',
      solution:
        'Run the addition backwards. The team rate is $\\frac{1}{8}$ pond per hour and the first hose supplies $\\frac{1}{24}$, so the second hose supplies the difference: $\\frac{1}{8} - \\frac{1}{24} = \\frac{3}{24} - \\frac{1}{24} = \\frac{2}{24} = \\frac{1}{12}$ pond per hour — that is $12$ hours alone. Check forward: $\\frac{1}{12} + \\frac{1}{24} = \\frac{2}{24} + \\frac{1}{24} = \\frac{3}{24} = \\frac{1}{8}$ ✓. Subtracting the times ($24 - 8 = 16$) is the trap; only rates may be added and subtracted.',
    },
  ],
  // 7. Direct proportion to the SQUARE, run backwards: undo with a square root.
  [
    {
      q: 'Suppose $y$ is directly proportional to $x^2$, and $y = 28$ when $x = 2$. For what positive value of $x$ is $y = 112$?',
      answer: '$x = 4$',
      solution:
        'The rule is $y = kx^2$. From the given pair, $28 = k \\times 2^2 = 4k$, so $k = 7$ and $y = 7x^2$. Set $112 = 7x^2$: then $x^2 = 16$, and the positive solution is $x = 4$. Check forward: $7 \\times 4^2 = 7 \\times 16 = 112$ ✓. Scaling $x$ by $\\frac{112}{28} = 4$ to get $x = 8$ is the classic slip — $y$ tracks the SQUARE, so undo it with a square root.',
    },
    {
      q: 'Suppose $y$ is directly proportional to $x^2$, and $y = 50$ when $x = 5$. For what positive value of $x$ is $y = 128$?',
      answer: '$x = 8$',
      solution:
        'From $y = kx^2$: $50 = k \\times 25$, so $k = 2$ and the rule is $y = 2x^2$. Set $128 = 2x^2$: then $x^2 = 64$ and the positive solution is $x = 8$. Check forward: $2 \\times 8^2 = 2 \\times 64 = 128$ ✓. Sanity check the size: $y$ grew by a factor of $\\frac{128}{50} = 2.56$, and $x$ grew by $\\sqrt{2.56} = 1.6$, which takes $5$ to $8$ ✓.',
    },
    {
      q: 'A ball rolling down a ramp covers a distance directly proportional to the square of the time it has been rolling. It covers $12$ centimeters in the first $2$ seconds. How long does it take to cover $108$ centimeters?',
      answer: '$6$ seconds',
      solution:
        'Write the rule as $d = kt^2$. From the given data: $12 = k \\times 2^2 = 4k$, so $k = 3$ and $d = 3t^2$. Set $108 = 3t^2$: then $t^2 = 36$, so $t = 6$ seconds (time cannot be negative). Check forward: $3 \\times 6^2 = 3 \\times 36 = 108$ centimeters ✓. Note the ball needs only $3$ times as long to go $9$ times as far — that is the square at work.',
    },
  ],
  // 8. Direct with one input, inverse with the other, solved for a missing
  //    INPUT rather than for z.
  [
    {
      q: 'Suppose $z$ varies directly with $x$ and inversely with $y$, and $z = 10$ when $x = 4$ and $y = 6$. Find $y$ when $z = 9$ and $x = 6$.',
      answer: '$y = 10$',
      solution:
        'The rule is $z = \\frac{kx}{y}$, so the constant is $k = \\frac{zy}{x} = \\frac{10 \\times 6}{4} = 15$. Now solve for the missing input: $9 = \\frac{15 \\times 6}{y} = \\frac{90}{y}$, so $y = \\frac{90}{9} = 10$. Check forward: $\\frac{15 \\times 6}{10} = \\frac{90}{10} = 9$ ✓, and the constant from the answer set is $\\frac{9 \\times 10}{6} = 15$, matching ✓.',
    },
    {
      q: 'Suppose $z$ varies directly with $x$ and inversely with $y$, and $z = 6$ when $x = 10$ and $y = 5$. Find $x$ when $z = 18$ and $y = 2$.',
      answer: '$x = 12$',
      solution:
        'This time the missing input sits upstairs. The constant is $k = \\frac{zy}{x} = \\frac{6 \\times 5}{10} = 3$, so $z = \\frac{3x}{y}$. Then $18 = \\frac{3x}{2}$, giving $3x = 36$ and $x = 12$. Check forward: $\\frac{3 \\times 12}{2} = \\frac{36}{2} = 18$ ✓, and $\\frac{18 \\times 2}{12} = 3$ is the same constant ✓.',
    },
    {
      q: 'The number of days a hay supply lasts varies directly with the number of bales and inversely with the number of horses being fed. A supply of $60$ bales feeds $5$ horses for $12$ days. For how many horses will $90$ bales last $9$ days?',
      answer: '$10$ horses',
      solution:
        'Write the rule as $D = \\frac{kB}{H}$: more bales stretch the supply, more horses eat through it. From the given data, $12 = \\frac{k \\times 60}{5} = 12k$, so $k = 1$ and $D = \\frac{B}{H}$. Now $9 = \\frac{90}{H}$, so $H = \\frac{90}{9} = 10$ horses. Check forward: $90$ bales among $10$ horses is $\\frac{90}{10} = 9$ days ✓, and the first data set gives $\\frac{60}{5} = 12$ days ✓. The count is whole and positive, as horses must be.',
    },
  ],
  // 9. A chase along one road: the gap closes at the DIFFERENCE of the speeds.
  //    The third variation asks for the chaser's speed instead of the time.
  [
    {
      q: 'A delivery truck leaves a depot at 9:00 am traveling $30$ miles per hour. At 11:00 am a car leaves the same depot along the same road at $50$ miles per hour. At what time does the car overtake the truck?',
      answer: '2:00 pm',
      solution:
        'By 11:00 am the truck has had $2$ hours on the road, so its head start is $30 \\times 2 = 60$ miles. Traveling the same direction, the car eats into the gap at $50 - 30 = 20$ miles per hour, so catching up takes $\\frac{60}{20} = 3$ hours — that is 2:00 pm. Check forward: from 11:00 am to 2:00 pm the car covers $50 \\times 3 = 150$ miles, and the truck has been driving from 9:00 am, covering $30 \\times 5 = 150$ miles ✓. Same milepost, same moment.',
    },
    {
      q: 'A walker sets off along a trail at 8:00 am at $4$ kilometers per hour. At 10:00 am a runner starts from the same spot along the same trail at $12$ kilometers per hour. At what time does the runner catch the walker?',
      answer: '11:00 am',
      solution:
        'The walker gets a $2$-hour head start, worth $4 \\times 2 = 8$ kilometers. The runner closes that gap at $12 - 4 = 8$ kilometers per hour, so the chase takes $\\frac{8}{8} = 1$ hour: 11:00 am. Check forward: by 11:00 am the runner has gone $12 \\times 1 = 12$ kilometers and the walker has gone $4 \\times 3 = 12$ kilometers ✓. Adding the speeds would be the mistake here — they add only when two travelers move TOWARD each other.',
    },
    {
      q: 'A boat leaves a dock at 1:00 pm and motors down the river at $8$ miles per hour. At 3:00 pm a speedboat leaves the same dock to chase it down the same river. How fast must the speedboat travel to catch the boat at exactly 5:00 pm?',
      answer: '$16$ miles per hour',
      solution:
        'Turn the question around: the meeting time is given and the speed is unknown. By 5:00 pm the first boat has been going for $4$ hours, so it is $8 \\times 4 = 32$ miles from the dock. The speedboat must cover that same $32$ miles in the $2$ hours from 3:00 pm to 5:00 pm, so its speed is $\\frac{32}{2} = 16$ miles per hour. Check forward: the head start at 3:00 pm is $16$ miles, and the gap closes at $16 - 8 = 8$ miles per hour, taking $\\frac{16}{8} = 2$ hours — arriving at 5:00 pm ✓.',
    },
  ],
  // 10. Combined work where the two rates are in a given RATIO. Name the slower
  //     rate r, build the team rate, then answer the worker actually asked for.
  [
    {
      q: 'Two printers running together finish a print run in $10$ minutes. One printer works exactly three times as fast as the other. How long would the SLOWER printer take alone?',
      answer: '$40$ minutes',
      solution:
        'Let the slower printer run at $r$ jobs per minute; the faster one runs at $3r$. Together they manage $r + 3r = 4r$, and that team rate is $\\frac{1}{10}$ of the job per minute, so $4r = \\frac{1}{10}$ and $r = \\frac{1}{40}$ — the slower printer needs $40$ minutes alone (and the faster one $\\frac{40}{3} = 13\\frac{1}{3}$ minutes). Check forward: $\\frac{1}{40} + \\frac{3}{40} = \\frac{4}{40} = \\frac{1}{10}$ ✓. The solo time is longer than the team time, as it must be.',
    },
    {
      q: 'Ana rakes leaves exactly twice as fast as Ben. Ana alone would finish the yard in $9$ hours. How long do the two of them take working together?',
      answer: '$6$ hours',
      solution:
        'Ana rakes $\\frac{1}{9}$ of the yard per hour. Ben is half as fast, so his rate is $\\frac{1}{2} \\times \\frac{1}{9} = \\frac{1}{18}$ of the yard per hour, meaning $18$ hours alone. Together: $\\frac{1}{9} + \\frac{1}{18} = \\frac{2}{18} + \\frac{1}{18} = \\frac{3}{18} = \\frac{1}{6}$ of the yard per hour, so $6$ hours. Check forward: in $6$ hours Ana does $\\frac{6}{9} = \\frac{2}{3}$ of the yard and Ben does $\\frac{6}{18} = \\frac{1}{3}$, together one whole yard ✓ — and $6$ hours beats Ana alone, as teamwork must.',
    },
    {
      q: 'Two pumps working together empty a flooded basement in $12$ hours. One pump moves water four times as fast as the other. How long would the FASTER pump need alone?',
      answer: '$15$ hours',
      solution:
        'Let the slower pump work at $r$ basements per hour; the faster one works at $4r$. The team rate is $r + 4r = 5r = \\frac{1}{12}$, so $r = \\frac{1}{60}$ and the faster rate is $4r = \\frac{4}{60} = \\frac{1}{15}$ — the faster pump alone needs $15$ hours (the slower one would need $60$). Check forward: $\\frac{1}{15} + \\frac{1}{60} = \\frac{4}{60} + \\frac{1}{60} = \\frac{5}{60} = \\frac{1}{12}$ ✓. Reread the question before answering: $60$ hours is the SLOWER pump, not the faster one.',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 7,
  worksheet,
}
