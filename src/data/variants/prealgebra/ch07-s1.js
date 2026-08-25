// Prealgebra chapter 7 — variations for sections 7.1-7.3.
// All problems and solutions are original MathQuest content.

const s71 = [
  // p1 — part-to-part ratio from two counts, simplified
  [
    {
      q: 'A vase holds $9$ lilies and $12$ daisies. What is the ratio of lilies to daisies in simplest form?',
      choices: ['$3:4$', '$4:3$', '$3:7$', '$7:4$'],
      answer: 0,
      solution:
        'Both counts are divisible by $3$: $9:12 = 3:4$. Order matters — lilies are named first, so their number leads, which rules out $4:3$. The choice $3:7$ compares lilies to ALL $21$ flowers (part-to-whole), and $7:4$ compares all the flowers to the daisies.',
    },
    {
      q: 'A parking lot holds $10$ vans and $25$ cars. What is the ratio of vans to cars in simplest form?',
      choices: ['$5:2$', '$2:25$', '$2:5$', '$2:7$'],
      answer: 2,
      solution:
        'Divide both counts by their common factor $5$: $10:25 = 2:5$. Writing $5:2$ reverses the order the question asked for, $2:25$ divides only the left-hand number, and $2:7$ compares vans to all $35$ vehicles instead of to the cars.',
    },
    {
      q: 'A shelf holds $21$ novels and $14$ comics. What is the ratio of novels to comics in simplest form?',
      choices: ['$2:3$', '$3:5$', '$21:2$', '$3:2$'],
      answer: 3,
      solution:
        'Both numbers share the factor $7$: $21:14 = 3:2$. Since there are more novels than comics, the first number must be the bigger one — so $2:3$ has the order backwards. The choice $3:5$ compares novels to all $35$ books, and $21:2$ divides only the right-hand number.',
    },
  ],
  // p2 — simplify a ratio that is handed to you
  [
    {
      q: 'Write the ratio $18:24$ in simplest form.',
      choices: ['$4:3$', '$3:4$', '$2:3$', '$3:24$'],
      answer: 1,
      solution:
        'The biggest number dividing both $18$ and $24$ is $6$: $18 \\div 6 = 3$ and $24 \\div 6 = 4$, so the answer is $3:4$. Choosing $2:3$ comes from SUBTRACTING $6$ from each side instead of dividing, $3:24$ divides only the left side, and $4:3$ swaps the order.',
    },
    {
      q: 'Write the ratio $28:35$ in simplest form.',
      choices: ['$5:4$', '$21:28$', '$4:5$', '$4:35$'],
      answer: 2,
      solution:
        'Both numbers are multiples of $7$: $28 \\div 7 = 4$ and $35 \\div 7 = 5$, giving $4:5$. Simplifying means DIVIDING both sides — subtracting $7$ from each gives $21:28$, which is a different ratio, and $4:35$ shrinks only the first number.',
    },
    {
      q: 'Write the ratio $30:45$ in simplest form.',
      choices: ['$3:2$', '$15:30$', '$2:45$', '$2:3$'],
      answer: 3,
      solution:
        'The greatest common factor of $30$ and $45$ is $15$: $30 \\div 15 = 2$ and $45 \\div 15 = 3$, so the ratio is $2:3$. Taking $15$ away from each side gives $15:30$, which is really $1:2$ — not the same comparison at all.',
    },
  ],
  // p3 — telling part-to-whole from part-to-part
  [
    {
      q: 'A shelf holds $7$ hardcover books and $5$ paperbacks. What is the ratio of paperbacks to ALL the books on the shelf?',
      choices: ['$5:12$', '$5:7$', '$7:12$', '$12:5$'],
      answer: 0,
      solution:
        'The whole shelf holds $7 + 5 = 12$ books, and $5$ of them are paperbacks, so the part-to-whole ratio is $5:12$. The ratio $5:7$ compares paperbacks to hardcovers (part-to-part), $7:12$ uses the wrong part, and $12:5$ is the whole compared to the part.',
    },
    {
      q: 'In a box of $20$ crayons, $9$ are broken and the rest are fine. What is the ratio of broken crayons to unbroken crayons?',
      choices: ['$9:20$', '$9:11$', '$11:9$', '$20:9$'],
      answer: 1,
      solution:
        'This one asks part-to-PART, so first find the other part: $20 - 9 = 11$ unbroken crayons. The ratio is $9:11$. The tempting $9:20$ compares broken crayons to the whole box, which is not what was asked, and $11:9$ reverses the order.',
    },
    {
      q: 'A bus carries $18$ passengers: $6$ adults and $12$ children. What is the ratio of adults to all passengers, in simplest form?',
      choices: ['$1:2$', '$3:1$', '$2:3$', '$1:3$'],
      answer: 3,
      solution:
        'Adults compared to everyone is $6:18$, and dividing both by $6$ gives $1:3$. The ratio $1:2$ is adults to children — a part-to-part comparison — while $2:3$ is children to all passengers, the wrong part on top.',
    },
  ],
  // p4 — ratio plus one quantity, find the other
  [
    {
      q: 'The ratio of ducks to geese at a pond is $5:2$. If there are $10$ geese, how many ducks are there?',
      choices: ['$25$', '$4$', '$13$', '$50$'],
      answer: 0,
      solution:
        'Geese are $2$ parts and there are $10$ of them, so one part is $10 \\div 2 = 5$ birds. Ducks are $5$ parts: $5 \\times 5 = 25$. Check: $25:10 = 5:2$. ✓ Answering $4$ reads the ratio upside down (treating the geese as the $5$), $13$ adds the gap $5 - 2 = 3$ instead of scaling, and $50$ multiplies by $5$ without first dividing by $2$.',
    },
    {
      q: 'The ratio of red tiles to white tiles on a floor is $3:8$. There are $24$ red tiles. How many white tiles are there?',
      choices: ['$9$', '$64$', '$29$', '$192$'],
      answer: 1,
      solution:
        'Red is $3$ parts, so one part is $24 \\div 3 = 8$ tiles, and white is $8$ parts: $8 \\times 8 = 64$. Check: $24:64 = 3:8$. ✓ The value $9$ comes from using the ratio backwards, $29$ from adding the gap $5$, and $192$ from multiplying $24 \\times 8$ without dividing by $3$.',
    },
    {
      q: 'The ratio of sunflowers to poppies in a field is $7:4$. There are $28$ sunflowers. How many poppies are there?',
      choices: ['$49$', '$112$', '$16$', '$25$'],
      answer: 2,
      solution:
        'Sunflowers are $7$ parts and there are $28$, so one part is $28 \\div 7 = 4$ flowers. Poppies are $4$ parts: $4 \\times 4 = 16$. There should be FEWER poppies than sunflowers, which rules out $49$ (the ratio used upside down) and $112$ (multiplying by $4$ but forgetting to divide by $7$). Subtracting the gap $3$ gives $25$, but ratios scale by multiplying.',
    },
  ],
  // p5 — split an amount between two shares
  [
    {
      q: 'Share $48$ stickers between two cousins in the ratio $3:5$. How many stickers does the cousin with the SMALLER share get?',
      choices: ['$18$', '$30$', '$16$', '$6$'],
      answer: 0,
      solution:
        'Total parts: $3 + 5 = 8$, so one part is $48 \\div 8 = 6$ stickers. The smaller share is $3$ parts: $3 \\times 6 = 18$. (The other cousin gets $5 \\times 6 = 30$, and $18 + 30 = 48$. ✓) Choosing $16$ divides by the $3$ instead of by the total parts, and $6$ stops at the size of a single part.',
    },
    {
      q: 'Split $56$ beads between two sisters in the ratio $3:4$. How many beads does the sister with the LARGER share get?',
      choices: ['$24$', '$28$', '$32$', '$8$'],
      answer: 2,
      solution:
        'Total parts: $3 + 4 = 7$, so one part is $56 \\div 7 = 8$ beads. The larger share is $4$ parts: $4 \\times 8 = 32$. The value $24$ is the smaller share, $8$ is one part, and $28$ splits the beads evenly down the middle, ignoring the ratio entirely.',
    },
    {
      q: 'Divide $45$ minutes of screen time between two brothers in the ratio $4:5$. How many minutes does the brother with the SMALLER share get?',
      choices: ['$25$', '$36$', '$5$', '$20$'],
      answer: 3,
      solution:
        'Total parts: $4 + 5 = 9$, so one part is $45 \\div 9 = 5$ minutes. The smaller share is $4$ parts: $4 \\times 5 = 20$ minutes. ($25 + 20 = 45$. ✓) The trap is $36$: that is $\\frac{4}{5}$ of $45$, which treats the part-to-PART ratio $4:5$ as if it were part-to-whole.',
    },
  ],
  // p6 — total given, split into two named groups
  [
    {
      q: 'A choir of $32$ singers has altos and sopranos in the ratio $3:5$. How many sopranos are in the choir?',
      choices: ['$20$', '$12$', '$4$', '$16$'],
      answer: 0,
      solution:
        'Total parts: $3 + 5 = 8$, so one part is $32 \\div 8 = 4$ singers. Sopranos are $5$ parts: $5 \\times 4 = 20$. The value $12$ counts the altos instead, $4$ is just one part, and $16$ splits the choir in half without using the ratio.',
    },
    {
      q: 'A parking lot with $42$ vehicles holds cars and motorbikes in the ratio $5:2$. How many motorbikes are there?',
      choices: ['$30$', '$12$', '$6$', '$21$'],
      answer: 1,
      solution:
        'Total parts: $5 + 2 = 7$, so one part is $42 \\div 7 = 6$ vehicles. Motorbikes are $2$ parts: $2 \\times 6 = 12$. Check: $30 + 12 = 42$. ✓ Answering $30$ counts the cars, $6$ stops at one part, and $21$ ignores the ratio and halves the lot.',
    },
    {
      q: 'A box of $54$ chocolates holds dark and milk chocolates in the ratio $4:5$. How many are dark?',
      choices: ['$30$', '$6$', '$27$', '$24$'],
      answer: 3,
      solution:
        'Total parts: $4 + 5 = 9$, so one part is $54 \\div 9 = 6$ chocolates. Dark is $4$ parts: $4 \\times 6 = 24$. ($30$ is the milk count, and $24 + 30 = 54$. ✓) One part alone is $6$, and $27$ would be an even split, which the ratio says is wrong.',
    },
  ],
  // p7 — scaling a recipe-style ratio
  [
    {
      q: 'A paint mix uses white and blue in the ratio $3:7$. A painter pours in $12$ litres of white. How many litres of blue are needed?',
      choices: ['$16$', '$28$', '$84$', '$4$'],
      answer: 1,
      solution:
        'White went from $3$ parts to $12$ litres, so one part is $12 \\div 3 = 4$ litres. Blue is $7$ parts: $7 \\times 4 = 28$ litres. Careful with $16$: that comes from noticing white grew by ADDING $9$ and adding $9$ to the blue as well — but mixes scale by multiplying. Choosing $84$ multiplies $12 \\times 7$ without dividing by $3$, and $4$ is the size of one part.',
    },
    {
      q: 'A punch recipe mixes juice and soda in the ratio $4:3$. A caterer uses $32$ cups of juice. How many cups of soda are needed?',
      choices: ['$31$', '$96$', '$24$', '$8$'],
      answer: 2,
      solution:
        'Juice went from $4$ parts to $32$ cups, so one part is $32 \\div 4 = 8$ cups. Soda is $3$ parts: $3 \\times 8 = 24$ cups. Check: $32:24 = 4:3$. ✓ The value $31$ adds the same $28$ that the juice gained, which is additive thinking, and $96$ multiplies by $3$ without dividing by $4$.',
    },
    {
      q: 'A concrete mix uses cement and sand in the ratio $2:5$. A builder measures out $45$ kg of sand. How many kilograms of cement are needed?',
      choices: ['$42$', '$90$', '$9$', '$18$'],
      answer: 3,
      solution:
        'This time the SECOND quantity is given. Sand is $5$ parts and weighs $45$ kg, so one part is $45 \\div 5 = 9$ kg. Cement is $2$ parts: $2 \\times 9 = 18$ kg. Check: $18:45 = 2:5$. ✓ The value $42$ adds the sand\'s increase of $40$ to the cement, and $90$ multiplies $45 \\times 2$ without dividing by $5$.',
    },
  ],
  // p8 — part-to-part ratio turned into a fraction of the whole
  [
    {
      q: 'A jar holds green and yellow buttons in the ratio $5:4$. What fraction of the buttons are yellow?',
      choices: ['$\\frac{4}{9}$', '$\\frac{4}{5}$', '$\\frac{5}{9}$', '$\\frac{9}{4}$'],
      answer: 0,
      solution:
        'The ratio is part-to-part, so build the whole first: $5 + 4 = 9$ parts. Yellow is $4$ of those $9$, or $\\frac{4}{9}$. The fraction $\\frac{4}{5}$ compares yellow to green rather than to the whole jar, $\\frac{5}{9}$ is the green share, and $\\frac{9}{4}$ is upside down (bigger than $1$, so it cannot be a part of the jar).',
    },
    {
      q: 'A playlist holds rock and jazz songs in the ratio $2:9$. What fraction of the songs are rock?',
      choices: ['$\\frac{2}{9}$', '$\\frac{2}{11}$', '$\\frac{9}{11}$', '$\\frac{11}{2}$'],
      answer: 1,
      solution:
        'Total parts: $2 + 9 = 11$, and rock is $2$ of them, so rock is $\\frac{2}{11}$ of the playlist. The very tempting $\\frac{2}{9}$ just copies the ratio into a fraction, which compares rock to JAZZ instead of to the whole playlist. The jazz share is $\\frac{9}{11}$, and the two shares add to $1$. ✓',
    },
    {
      q: 'A bookshelf holds fiction and non-fiction in the ratio $7:5$. What fraction of the books are non-fiction?',
      choices: ['$\\frac{5}{7}$', '$\\frac{7}{12}$', '$\\frac{5}{12}$', '$\\frac{12}{5}$'],
      answer: 2,
      solution:
        'The whole shelf is $7 + 5 = 12$ parts, and non-fiction is $5$ of them: $\\frac{5}{12}$. Writing $\\frac{5}{7}$ compares non-fiction to fiction, $\\frac{7}{12}$ is the fiction share, and $\\frac{12}{5}$ flips whole and part. Since there is less non-fiction than fiction, the answer must be under $\\frac{1}{2}$ — and $\\frac{5}{12}$ is.',
    },
  ],
  // p9 — a difference of parts pins down the whole ratio
  [
    {
      q: 'Two numbers are in the ratio $3:8$, and they differ by $25$. What is the SMALLER number?',
      choices: ['$15$', '$40$', '$5$', '$75$'],
      answer: 0,
      solution:
        'The difference is $8 - 3 = 5$ parts, and that gap equals $25$, so one part is $25 \\div 5 = 5$. The smaller number is $3$ parts: $3 \\times 5 = 15$. Check: the larger is $8 \\times 5 = 40$, and $40 - 15 = 25$. ✓ The value $40$ answers for the larger number, $5$ is one part, and $75$ multiplies the gap by $3$ without dividing by $5$ first.',
    },
    {
      q: 'Two numbers are in the ratio $5:9$, and they differ by $28$. What is the LARGER number?',
      choices: ['$35$', '$98$', '$63$', '$7$'],
      answer: 2,
      solution:
        'The gap is $9 - 5 = 4$ parts, so one part is $28 \\div 4 = 7$. The larger number is $9$ parts: $9 \\times 7 = 63$. Check: $63 - 35 = 28$. ✓ The value $35$ is the smaller number, $7$ is one part, and $98$ is the SUM of the two numbers ($14$ parts) rather than the larger one.',
    },
    {
      q: 'Two numbers are in the ratio $2:7$, and they differ by $30$. What is their SUM?',
      choices: ['$42$', '$12$', '$270$', '$54$'],
      answer: 3,
      solution:
        'The gap is $7 - 2 = 5$ parts, so one part is $30 \\div 5 = 6$. The sum uses ALL $2 + 7 = 9$ parts: $9 \\times 6 = 54$. Check: the numbers are $12$ and $42$; they differ by $30$ and add to $54$. ✓ Choices $42$ and $12$ each give only one of the two numbers, and $270$ multiplies the gap by $9$ without dividing by $5$.',
    },
  ],
  // p10 — adding or removing the same amount changes a ratio
  [
    {
      q: 'A basket holds $8$ plums and $12$ apricots — a ratio of $2:3$. If $4$ more of each fruit are added, what is the new ratio of plums to apricots?',
      choices: ['$3:4$', '$2:3$', '$6:7$', '$4:3$'],
      answer: 0,
      solution:
        'New counts: $8 + 4 = 12$ plums and $12 + 4 = 16$ apricots, and $12:16 = 3:4$. Adding the same amount to both sides really does change a ratio — only multiplying both sides leaves it alone, so $2:3$ is wrong. The choice $6:7$ adds the $4$ to the ratio NUMBERS instead of to the fruit counts.',
    },
    {
      q: 'A tank holds $9$ guppies and $6$ tetras — a ratio of $3:2$. If $3$ more of each fish are added, what is the new ratio of guppies to tetras?',
      choices: ['$3:2$', '$4:3$', '$6:5$', '$3:4$'],
      answer: 1,
      solution:
        'New counts: $9 + 3 = 12$ guppies and $6 + 3 = 9$ tetras, so the ratio is $12:9 = 4:3$. Notice the two kinds of fish have moved CLOSER in ratio, because the same $3$ is a bigger boost to the smaller group. Adding $3$ to the ratio numbers themselves would give $6:5$, and $3:4$ has the order backwards.',
    },
    {
      q: 'A drawer holds $10$ forks and $15$ spoons — a ratio of $2:3$. If $5$ forks and $5$ spoons are taken out, what is the new ratio of forks to spoons?',
      choices: ['$2:3$', '$2:1$', '$1:3$', '$1:2$'],
      answer: 3,
      solution:
        'New counts: $10 - 5 = 5$ forks and $15 - 5 = 10$ spoons, so the ratio is $5:10 = 1:2$. Taking the same amount off both sides changes the ratio too — this time it pushes the two groups further apart, so $2:3$ is not preserved. Removing the $5$ from only the forks would give $5:15 = 1:3$, and $2:1$ reverses the order.',
    },
  ],
]

const s72 = [
  // p1 — counting the parts in a three-way ratio
  [
    {
      q: 'An amount is split in the ratio $4:5:6$. How many equal parts is it divided into?',
      choices: ['$15$', '$3$', '$6$', '$120$'],
      answer: 0,
      solution:
        'Add every number in the ratio: $4 + 5 + 6 = 15$ parts. The choice $3$ counts how many shares there are, not how many parts; $6$ is only the largest share; and $120$ multiplies the three numbers, which no ratio ever asks you to do.',
    },
    {
      q: 'A prize fund is split in the ratio $1:3:7$. How many equal parts is it divided into?',
      choices: ['$3$', '$11$', '$7$', '$21$'],
      answer: 1,
      solution:
        'Total parts: $1 + 3 + 7 = 11$. Even though the smallest share is a single part, that part still has to be counted. Answering $3$ counts the shares, $7$ names only the biggest share, and $21$ multiplies $1 \\times 3 \\times 7$ instead of adding.',
    },
    {
      q: 'Three friends share a pizza in the ratio $2:2:5$. Into how many equal slices must the pizza be cut?',
      choices: ['$3$', '$5$', '$9$', '$20$'],
      answer: 2,
      solution:
        'Add all three numbers, including the repeat: $2 + 2 + 5 = 9$ slices. Two friends get $2$ slices each and the third gets $5$, and $2 + 2 + 5 = 9$. ✓ The choice $3$ counts the friends, $5$ is just the biggest share, and $20$ comes from multiplying the numbers together.',
    },
  ],
  // p2 — simplifying a three-way ratio
  [
    {
      q: 'Write the ratio $10:15:25$ in simplest form.',
      choices: ['$5:10:20$', '$2:3:5$', '$2:3:20$', '$2:15:25$'],
      answer: 1,
      solution:
        'All three numbers are divisible by $5$: $10 \\div 5 = 2$, $15 \\div 5 = 3$, $25 \\div 5 = 5$, giving $2:3:5$. Simplifying means DIVIDING every number — subtracting $5$ from each gives $5:10:20$, a different ratio. The other two choices simplify only some of the numbers and leave the rest alone.',
    },
    {
      q: 'Write the ratio $12:20:28$ in simplest form.',
      choices: ['$8:16:24$', '$3:5:28$', '$3:5:7$', '$3:20:28$'],
      answer: 2,
      solution:
        'The greatest common factor of $12$, $20$, and $28$ is $4$: dividing gives $3:5:7$. Taking $4$ away from each number instead gives $8:16:24$, which is really $1:2:3$ — not the same comparison. A shortened ratio has to shrink ALL THREE numbers by the same factor, which rules out $3:5:28$ and $3:20:28$.',
    },
    {
      q: 'Write the ratio $28:35:42$ in simplest form.',
      choices: ['$21:28:35$', '$4:5:42$', '$4:35:42$', '$4:5:6$'],
      answer: 3,
      solution:
        'Every number is a multiple of $7$: $28 \\div 7 = 4$, $35 \\div 7 = 5$, $42 \\div 7 = 6$, so the simplest form is $4:5:6$. Subtracting $7$ from each gives $21:28:35$, which reduces to $3:4:5$ — close-looking but a different ratio. The other choices divide only part of the way along.',
    },
  ],
  // p3 — splitting an amount three ways
  [
    {
      q: 'Split $84$ marbles in the ratio $1:2:4$. How big is the largest share?',
      choices: ['$48$', '$12$', '$24$', '$21$'],
      answer: 0,
      solution:
        'Total parts: $1 + 2 + 4 = 7$, so one part is $84 \\div 7 = 12$ marbles. The largest share is $4$ parts: $4 \\times 12 = 48$. Check: $12 + 24 + 48 = 84$. ✓ The value $12$ is the smallest share, $24$ is the middle one, and $21$ comes from dividing by the $4$ instead of by the total number of parts.',
    },
    {
      q: 'Split $60$ pencils in the ratio $2:3:5$. How big is the SMALLEST share?',
      choices: ['$30$', '$12$', '$18$', '$6$'],
      answer: 1,
      solution:
        'Total parts: $2 + 3 + 5 = 10$, so one part is $60 \\div 10 = 6$ pencils. The smallest share is $2$ parts: $2 \\times 6 = 12$. ($12 + 18 + 30 = 60$. ✓) The choices $30$ and $18$ are the other two shares, and $6$ stops at the size of one part.',
    },
    {
      q: 'Three workers share $\\$96$ in the ratio $1:3:4$. How much does the MIDDLE share come to?',
      choices: ['$\\$48$', '$\\$12$', '$\\$32$', '$\\$36$'],
      answer: 3,
      solution:
        'Total parts: $1 + 3 + 4 = 8$, so one part is $\\$96 \\div 8 = \\$12$. The middle share is $3$ parts: $3 \\times \\$12 = \\$36$. Check: $\\$12 + \\$36 + \\$48 = \\$96$. ✓ The value $\\$48$ is the largest share, $\\$12$ the smallest, and $\\$32$ would be an equal three-way split that ignores the ratio.',
    },
  ],
  // p4 — reading a pair out of a three-way ratio
  [
    {
      q: 'Given $p:q:r = 4:9:11$, what is $p:r$?',
      choices: ['$4:11$', '$11:4$', '$4:9$', '$9:11$'],
      answer: 0,
      solution:
        'Pick out the FIRST and THIRD numbers in that order: $p:r = 4:11$. It is already simplest, since $4$ and $11$ share no factor. Watch the order — $11:4$ is $r:p$ — and note that $4:9$ is $p:q$ while $9:11$ is $q:r$.',
    },
    {
      q: 'Given $x:y:z = 6:10:15$, what is $x:y$ in simplest form?',
      choices: ['$2:5$', '$5:3$', '$3:5$', '$2:3$'],
      answer: 2,
      solution:
        'Take the first two numbers: $x:y = 6:10$, and dividing both by $2$ gives $3:5$. The choice $2:5$ is $x:z = 6:15$ simplified, $2:3$ is $y:z = 10:15$ simplified, and $5:3$ has the order flipped.',
    },
    {
      q: 'Given $a:b:c = 8:14:21$, what is $a:b$ in simplest form?',
      choices: ['$7:4$', '$8:21$', '$2:3$', '$4:7$'],
      answer: 3,
      solution:
        'The first two numbers give $a:b = 8:14$, and both are even, so divide by $2$: $4:7$. The choice $8:21$ is $a:c$ (untouched, since those share no factor), $2:3$ is $b:c = 14:21$ simplified, and $7:4$ reverses the order.',
    },
  ],
  // p5 — three-way money split
  [
    {
      q: 'Three siblings split $\\$120$ in the ratio $3:4:5$. How much is the largest share?',
      choices: ['$\\$30$', '$\\$50$', '$\\$40$', '$\\$24$'],
      answer: 1,
      solution:
        'Total parts: $3 + 4 + 5 = 12$, so one part is $\\$120 \\div 12 = \\$10$. The largest share is $5$ parts: $5 \\times \\$10 = \\$50$. Check: $\\$30 + \\$40 + \\$50 = \\$120$. ✓ The values $\\$30$ and $\\$40$ are the other two shares, and $\\$24$ divides by the $5$ instead of by the total parts.',
    },
    {
      q: 'Three clubs share a $\\$140$ grant in the ratio $2:5:7$. How much is the smallest share?',
      choices: ['$\\$50$', '$\\$70$', '$\\$20$', '$\\$10$'],
      answer: 2,
      solution:
        'Total parts: $2 + 5 + 7 = 14$, so one part is $\\$140 \\div 14 = \\$10$. The smallest share is $2$ parts: $2 \\times \\$10 = \\$20$. ($\\$20 + \\$50 + \\$70 = \\$140$. ✓) The choices $\\$50$ and $\\$70$ are the other shares, and $\\$10$ is a single part.',
    },
    {
      q: 'Three cousins split $\\$90$ in the ratio $1:2:2$. How much does EACH of the two equal shares come to?',
      choices: ['$\\$18$', '$\\$30$', '$\\$45$', '$\\$36$'],
      answer: 3,
      solution:
        'Total parts: $1 + 2 + 2 = 5$, so one part is $\\$90 \\div 5 = \\$18$. Each of the two equal shares is $2$ parts: $2 \\times \\$18 = \\$36$. Check: $\\$18 + \\$36 + \\$36 = \\$90$. ✓ The value $\\$18$ is the odd cousin\'s share, $\\$30$ splits the money equally three ways, and $\\$45$ splits it between just two people.',
    },
  ],
  // p6 — combining two ratios whose middles already match
  [
    {
      q: 'In a smoothie, banana:milk $= 5:6$ and milk:yogurt $= 6:11$. What is banana:yogurt?',
      choices: ['$5:11$', '$11:5$', '$5:6$', '$6:11$'],
      answer: 0,
      solution:
        'Milk is $6$ in both ratios, so the middles already agree and the three-way ratio is banana:milk:yogurt $= 5:6:11$. Reading off the two ends gives banana:yogurt $= 5:11$. The choice $11:5$ answers yogurt:banana, and the other two simply repeat one of the given ratios.',
    },
    {
      q: 'On a farm, sheep:goats $= 9:4$ and goats:cows $= 4:7$. What is sheep:cows?',
      choices: ['$9:4$', '$9:7$', '$7:9$', '$4:7$'],
      answer: 1,
      solution:
        'Goats are measured as $4$ in both ratios, so no rescaling is needed: sheep:goats:cows $= 9:4:7$. The ends give sheep:cows $= 9:7$. Choosing $7:9$ reverses the order, and the other two choices are just the ratios you started with.',
    },
    {
      q: 'At a fruit stand, pears:plums $= 3:8$ and plums:figs $= 8:5$. What is figs:pears?',
      choices: ['$3:5$', '$3:8$', '$5:3$', '$8:5$'],
      answer: 2,
      solution:
        'Plums are $8$ in both ratios, so pears:plums:figs $= 3:8:5$. Now read carefully: the question asks for FIGS first, so figs:pears $= 5:3$. The tempting $3:5$ is pears:figs, in the order the three-way ratio happens to be written rather than the order asked for.',
    },
  ],
  // p7 — combining two ratios that need a common middle
  [
    {
      q: 'If $a:b = 5:4$ and $b:c = 6:7$, what is $a:b:c$?',
      choices: ['$15:12:14$', '$5:4:7$', '$15:12:7$', '$5:12:14$'],
      answer: 0,
      solution:
        'The middle $b$ is called $4$ in one ratio and $6$ in the other, and the least common multiple of $4$ and $6$ is $12$. Scale the first by $3$: $a:b = 15:12$. Scale the second by $2$: $b:c = 12:14$. Glue: $a:b:c = 15:12:14$. Just gluing the ends gives $5:4:7$, which measures $b$ with two different rulers, and the last two choices scale only one of the ratios.',
    },
    {
      q: 'If $x:y = 5:6$ and $y:z = 4:9$, what is $x:y:z$?',
      choices: ['$5:6:9$', '$10:12:27$', '$10:12:9$', '$5:12:27$'],
      answer: 1,
      solution:
        'The middle $y$ appears as $6$ and as $4$; the least common multiple is $12$. Scale the first ratio by $2$: $x:y = 10:12$. Scale the second by $3$: $y:z = 12:27$. Together: $x:y:z = 10:12:27$. The choice $5:6:9$ glues the ratios without matching the middles, while $10:12:9$ and $5:12:27$ each rescale one ratio and forget the other.',
    },
    {
      q: 'If $m:n = 2:7$ and $n:p = 3:4$, what is $m:n:p$?',
      choices: ['$2:7:4$', '$6:21:4$', '$2:21:28$', '$6:21:28$'],
      answer: 3,
      solution:
        'The middle $n$ is $7$ in one ratio and $3$ in the other, and $7$ and $3$ have least common multiple $21$. Scale the first by $3$: $m:n = 6:21$. Scale the second by $7$: $n:p = 21:28$. Glue: $m:n:p = 6:21:28$. Writing $2:7:4$ ignores the mismatch entirely; the other two choices update one ratio but leave the other behind.',
    },
  ],
  // p8 — angles in a given ratio
  [
    {
      q: 'The three angles of a triangle are in the ratio $1:2:3$. Angles of a triangle add to $180^\\circ$. How big is the largest angle?',
      choices: ['$90^\\circ$', '$30^\\circ$', '$60^\\circ$', '$180^\\circ$'],
      answer: 0,
      solution:
        'Total parts: $1 + 2 + 3 = 6$, so one part is $180^\\circ \\div 6 = 30^\\circ$. The largest angle is $3$ parts: $3 \\times 30^\\circ = 90^\\circ$ — a right angle. Check: $30^\\circ + 60^\\circ + 90^\\circ = 180^\\circ$. ✓ The choices $30^\\circ$ and $60^\\circ$ are the other two angles, and $180^\\circ$ is what you get by sharing out $360^\\circ$ by mistake.',
    },
    {
      q: 'The three angles of a triangle are in the ratio $2:2:5$. Angles of a triangle add to $180^\\circ$. How big is the SMALLEST angle?',
      choices: ['$100^\\circ$', '$20^\\circ$', '$40^\\circ$', '$80^\\circ$'],
      answer: 2,
      solution:
        'Total parts: $2 + 2 + 5 = 9$, so one part is $180^\\circ \\div 9 = 20^\\circ$. Two of the angles are $2$ parts each: $2 \\times 20^\\circ = 40^\\circ$. Check: $40^\\circ + 40^\\circ + 100^\\circ = 180^\\circ$. ✓ The value $100^\\circ$ is the largest angle, $20^\\circ$ is a single part, and $80^\\circ$ comes from sharing $360^\\circ$ instead of $180^\\circ$.',
    },
    {
      q: 'The four angles of a quadrilateral are in the ratio $1:2:3:4$. Angles of a quadrilateral add to $360^\\circ$. How big is the largest angle?',
      choices: ['$36^\\circ$', '$108^\\circ$', '$72^\\circ$', '$144^\\circ$'],
      answer: 3,
      solution:
        'Total parts: $1 + 2 + 3 + 4 = 10$, so one part is $360^\\circ \\div 10 = 36^\\circ$. The largest angle is $4$ parts: $4 \\times 36^\\circ = 144^\\circ$. Check: $36^\\circ + 72^\\circ + 108^\\circ + 144^\\circ = 360^\\circ$. ✓ The choices $36^\\circ$ and $108^\\circ$ are other angles in the figure, and $72^\\circ$ comes from using $180^\\circ$, the triangle total, by mistake.',
    },
  ],
  // p9 — chaining two ratios to compare the outer two amounts
  [
    {
      q: 'If $a:b = 2:3$ and $b:c = 9:4$, what is $a:c$ in simplest form?',
      choices: ['$1:2$', '$3:2$', '$2:3$', '$8:27$'],
      answer: 1,
      solution:
        'Match the middle: $b$ is $3$ in one ratio and $9$ in the other, so scale the first by $3$ to get $a:b = 6:9$. Now $a:b:c = 6:9:4$, so $a:c = 6:4 = 3:2$. Gluing the outer numbers gives $2:4 = 1:2$, which skips the matching step; $2:3$ reverses the answer; and $8:27$ comes from turning the second ratio upside down before combining.',
    },
    {
      q: 'If $p:q = 4:5$ and $q:r = 10:3$, what is $p:r$ in simplest form?',
      choices: ['$4:3$', '$3:8$', '$8:3$', '$6:25$'],
      answer: 2,
      solution:
        'Match the middle: $q$ is $5$ and $10$, so double the first ratio: $p:q = 8:10$. Then $p:q:r = 8:10:3$ and $p:r = 8:3$. Gluing the ends straight away gives $4:3$ — wrong, because the two ratios measure $q$ differently. The choice $3:8$ flips the order, and $6:25$ comes from inverting the second ratio.',
    },
    {
      q: 'If $u:v = 6:7$ and $v:w = 2:5$, what is $u:w$ in simplest form?',
      choices: ['$6:5$', '$35:12$', '$15:7$', '$12:35$'],
      answer: 3,
      solution:
        'Match the middle: $v$ is $7$ and $2$, whose least common multiple is $14$. Scale to get $u:v = 12:14$ and $v:w = 14:35$, so $u:v:w = 12:14:35$ and $u:w = 12:35$. The choice $6:5$ glues the outer numbers without matching, $35:12$ reverses the order, and $15:7$ comes from flipping the second ratio first.',
    },
  ],
  // p10 — a gap between two shares pins down the whole split
  [
    {
      q: 'Three donations are in the ratio $2:5:6$. The largest is $\\$36$ more than the smallest. What is the total of all three donations?',
      choices: ['$\\$117$', '$\\$54$', '$\\$9$', '$\\$468$'],
      answer: 0,
      solution:
        'The largest minus the smallest is $6 - 2 = 4$ parts, and that gap is $\\$36$, so one part is $\\$36 \\div 4 = \\$9$. The total is $2 + 5 + 6 = 13$ parts: $13 \\times \\$9 = \\$117$. Check: the donations are $\\$18$, $\\$45$, and $\\$54$, and $\\$54 - \\$18 = \\$36$. ✓ The value $\\$54$ is only the largest donation, $\\$9$ is one part, and $\\$468$ treats the whole $\\$36$ gap as the size of a single part.',
    },
    {
      q: 'Three scholarships are in the ratio $3:4:9$. The largest is $\\$45$ more than the middle one. What is the total of all three scholarships?',
      choices: ['$\\$81$', '$\\$144$', '$\\$120$', '$\\$9$'],
      answer: 1,
      solution:
        'Read which two shares are being compared: largest minus MIDDLE is $9 - 4 = 5$ parts, and that gap is $\\$45$, so one part is $\\$45 \\div 5 = \\$9$. The total is $3 + 4 + 9 = 16$ parts: $16 \\times \\$9 = \\$144$. Check: $\\$27$, $\\$36$, $\\$81$, and $\\$81 - \\$36 = \\$45$. ✓ Using the largest-minus-smallest gap of $6$ parts instead would give $\\$120$; $\\$81$ is just the biggest scholarship and $\\$9$ is one part.',
    },
    {
      q: 'Three fields have areas in the ratio $1:4:6$ hectares. The middle field is $18$ hectares larger than the smallest. What is the total area of the three fields?',
      choices: ['$24$ hectares', '$99$ hectares', '$66$ hectares', '$6$ hectares'],
      answer: 2,
      solution:
        'The middle minus the smallest is $4 - 1 = 3$ parts, and that gap is $18$ hectares, so one part is $18 \\div 3 = 6$ hectares. The total is $1 + 4 + 6 = 11$ parts: $11 \\times 6 = 66$ hectares. Check: $6$, $24$, and $36$ hectares, and $24 - 6 = 18$. ✓ Comparing the wrong pair — largest minus middle, only $2$ parts — would give $99$; $24$ is the middle field alone and $6$ is one part.',
    },
  ],
]

const s73 = [
  // p1 — solve a proportion by scaling the bottom
  [
    {
      q: 'Solve $\\frac{x}{15} = \\frac{2}{5}$.',
      choices: ['$6$', '$12$', '$37.5$', '$30$'],
      answer: 0,
      solution:
        'The bottom went from $5$ to $15$ — multiplied by $3$ — so multiply the top by $3$ as well: $x = 2 \\times 3 = 6$. Check: $\\frac{6}{15} = \\frac{2}{5}$. ✓ Choosing $12$ ADDS the $10$ that the bottom gained, $37.5$ uses the known ratio upside down, and $30$ stops at the cross-product $15 \\times 2$ without dividing by $5$.',
    },
    {
      q: 'Solve $\\frac{x}{20} = \\frac{7}{10}$.',
      choices: ['$17$', '$14$', '$140$', '$3.5$'],
      answer: 1,
      solution:
        'The bottom doubled from $10$ to $20$, so the top must double too: $x = 7 \\times 2 = 14$. Check: $\\frac{14}{20} = \\frac{7}{10}$. ✓ Adding $10$ to the top instead gives $17$, halving instead of doubling gives $3.5$, and $140$ is the cross-product $20 \\times 7$ left undivided by $10$.',
    },
    {
      q: 'Solve $\\frac{x}{9} = \\frac{8}{6}$.',
      choices: ['$11$', '$6.75$', '$72$', '$12$'],
      answer: 3,
      solution:
        'Simplify the known ratio first: $\\frac{8}{6} = \\frac{4}{3}$. The bottom goes from $3$ to $9$ — multiplied by $3$ — so $x = 4 \\times 3 = 12$. Check: $\\frac{12}{9} = \\frac{4}{3}$. ✓ Adding $3$ to the $8$ gives $11$, flipping the known ratio gives $6.75$, and $72$ is the bare cross-product $9 \\times 8$.',
    },
  ],
  // p2 — solve for a missing denominator or numerator
  [
    {
      q: 'If $\\frac{4}{7} = \\frac{20}{n}$, what is $n$?',
      choices: ['$23$', '$35$', '$140$', '$5$'],
      answer: 1,
      solution:
        'The top went from $4$ to $20$ — multiplied by $5$ — so the bottom scales the same way: $n = 7 \\times 5 = 35$. Check: $\\frac{20}{35} = \\frac{4}{7}$. ✓ Adding the $16$ that the top gained gives $23$, $5$ is the scale factor itself rather than the answer, and $140$ is $7 \\times 20$ with the division by $4$ forgotten.',
    },
    {
      q: 'If $\\frac{5}{8} = \\frac{n}{24}$, what is $n$?',
      choices: ['$21$', '$120$', '$15$', '$3$'],
      answer: 2,
      solution:
        'The bottom went from $8$ to $24$ — multiplied by $3$ — so $n = 5 \\times 3 = 15$. Check: $\\frac{15}{24} = \\frac{5}{8}$, since both reduce the same way. ✓ Adding $16$ to the top gives $21$, $3$ is just the scale factor, and $120$ is the cross-product $5 \\times 24$ before dividing by $8$.',
    },
    {
      q: 'If $\\frac{12}{n} = \\frac{4}{7}$, what is $n$?',
      choices: ['$15$', '$3$', '$84$', '$21$'],
      answer: 3,
      solution:
        'Compare tops: $4$ became $12$, so the ratio was tripled, and the bottom must be tripled too: $n = 7 \\times 3 = 21$. Check: $\\frac{12}{21} = \\frac{4}{7}$. ✓ Adding the $8$ that the top gained gives $15$, $3$ is the scale factor, and $84$ is $12 \\times 7$ without the division by $4$.',
    },
  ],
  // p3 — map and model scales, both directions
  [
    {
      q: 'A map uses the scale $1$ cm $= 8$ km. Two towns are $12$ cm apart on the map. What is the real distance between them?',
      choices: ['$96$ km', '$20$ km', '$1.5$ km', '$4$ km'],
      answer: 0,
      solution:
        'Each map centimetre stands for $8$ km, so $12$ cm stands for $12 \\times 8 = 96$ km. Real distances must come out BIGGER than map distances, which rules out $1.5$ km (that is $12 \\div 8$, the scale used upside down) and $4$ km (subtracting instead of scaling). Adding the two numbers gives $20$ km, but a scale multiplies.',
    },
    {
      q: 'A model railway uses the scale $1$ cm $= 20$ m of real track. A stretch of model track is $8$ cm long. How much real track does it stand for?',
      choices: ['$28$ m', '$0.4$ m', '$160$ m', '$12$ m'],
      answer: 2,
      solution:
        'One model centimetre means $20$ real metres, so $8$ cm means $8 \\times 20 = 160$ m. The answer has to be much larger than $8$, which knocks out $0.4$ m (that is $8 \\div 20$, the scale flipped) and $12$ m (subtracting). Adding gives $28$ m, which is not how scales work.',
    },
    {
      q: 'A map uses the scale $1$ cm $= 15$ km. Two cities are really $75$ km apart. How far apart are they on the map?',
      choices: ['$1125$ cm', '$90$ cm', '$60$ cm', '$5$ cm'],
      answer: 3,
      solution:
        'This time you are going the other way, from real distance to map distance, so DIVIDE: $75 \\div 15 = 5$ cm. Check: $5$ cm on the map stands for $5 \\times 15 = 75$ km. ✓ Multiplying instead gives $1125$ cm — over $11$ metres of paper! Adding gives $90$ and subtracting gives $60$.',
    },
  ],
  // p4 — proportional recipes and supplies
  [
    {
      q: 'A recipe uses $3$ cups of oats to make $18$ muffins. How many cups of oats are needed for $42$ muffins?',
      choices: ['$7$ cups', '$27$ cups', '$6$ cups', '$126$ cups'],
      answer: 0,
      solution:
        'One cup of oats makes $18 \\div 3 = 6$ muffins, so $42$ muffins need $42 \\div 6 = 7$ cups. Check by cross-multiplying $\\frac{3}{18} = \\frac{7}{42}$: both products are $126$. ✓ The value $27$ adds the extra $24$ muffins on as cups, $6$ is the muffins-per-cup rate rather than a number of cups, and $126$ stops at that cross-product without dividing by $18$.',
    },
    {
      q: 'A juice recipe needs $5$ cups of water for every $2$ scoops of powder. How many cups of water are needed for $9$ scoops?',
      choices: ['$12$ cups', '$22.5$ cups', '$3.6$ cups', '$18$ cups'],
      answer: 1,
      solution:
        'Each scoop needs $5 \\div 2 = 2.5$ cups, so $9$ scoops need $9 \\times 2.5 = 22.5$ cups. Setting up $\\frac{5}{2} = \\frac{x}{9}$ and cross-multiplying gives $2x = 45$, the same answer. Cross-multiplying the WRONG way round, $5x = 18$, gives $3.6$ cups — far too little water. Stopping at the product $2 \\times 9 = 18$ skips the final division, and $12$ adds $7$ more cups for the $7$ extra scoops.',
    },
    {
      q: 'A printer uses $4$ ink cartridges to print $10$ posters. At that rate, how many cartridges are needed for $25$ posters?',
      choices: ['$19$', '$40$', '$10$', '$1.6$'],
      answer: 2,
      solution:
        'Posters went from $10$ to $25$ — multiplied by $2.5$ — so the cartridges scale the same way: $4 \\times 2.5 = 10$ cartridges. Check: $\\frac{4}{10} = \\frac{10}{25}$, since $4 \\times 25 = 10 \\times 10 = 100$. ✓ Adding the extra $15$ posters as cartridges gives $19$, $40$ is the cross-product $4 \\times 10$ left undivided, and $1.6$ comes from cross-multiplying the wrong pair.',
    },
  ],
  // p5 — simplify first, then solve
  [
    {
      q: 'Solve $\\frac{n}{15} = \\frac{14}{21}$.',
      choices: ['$10$', '$8$', '$22.5$', '$210$'],
      answer: 0,
      solution:
        'Simplify the right side first: $\\frac{14}{21} = \\frac{2}{3}$. Then $\\frac{n}{15} = \\frac{2}{3}$, and since $3 \\times 5 = 15$, we need $n = 2 \\times 5 = 10$. Check: $\\frac{10}{15} = \\frac{2}{3}$. ✓ The value $8$ comes from subtracting $6$ from the $14$ because the bottom dropped by $6$, $22.5$ flips the ratio, and $210$ is the raw cross-product $14 \\times 15$.',
    },
    {
      q: 'Solve $\\frac{n}{16} = \\frac{9}{12}$.',
      choices: ['$13$', '$144$', '$12$', '$6.75$'],
      answer: 2,
      solution:
        'Simplify: $\\frac{9}{12} = \\frac{3}{4}$. Then $\\frac{n}{16} = \\frac{3}{4}$, and $4$ times $4$ is $16$, so $n = 3 \\times 4 = 12$. Check: $\\frac{12}{16} = \\frac{3}{4}$. ✓ Adding $4$ to the $9$ gives $13$, $144$ is the cross-product $9 \\times 16$ before dividing by $12$, and $6.75$ comes from cross-multiplying the wrong pair ($16n = 9 \\times 12$).',
    },
    {
      q: 'Solve $\\frac{n}{20} = \\frac{6}{8}$.',
      choices: ['$18$', '$120$', '$2.4$', '$15$'],
      answer: 3,
      solution:
        'Simplify: $\\frac{6}{8} = \\frac{3}{4}$. Since the bottom goes from $4$ to $20$ — multiplied by $5$ — the top does too: $n = 3 \\times 5 = 15$. Check: $\\frac{15}{20} = \\frac{3}{4}$. ✓ Adding $12$ to the $6$ gives $18$, $120$ is the cross-product $6 \\times 20$ undivided, and $2.4$ comes from pairing the cross-multiplication the wrong way ($20n = 6 \\times 8$).',
    },
  ],
  // p6 — enlarging and shrinking keeps the shape
  [
    {
      q: 'A $4$ inch by $7$ inch photo is enlarged so its short side becomes $12$ inches. To keep the same shape, how long must the long side become?',
      choices: ['$15$ inches', '$21$ inches', '$7$ inches', '$36$ inches'],
      answer: 1,
      solution:
        'The short side went from $4$ to $12$ — multiplied by $3$ — so the long side must be multiplied by $3$ too: $7 \\times 3 = 21$ inches. Check: $4:7 = 12:21$. ✓ Adding the extra $8$ inches to the long side gives $15$, leaving the long side alone gives $7$, and $36$ multiplies the NEW short side by $3$ a second time.',
    },
    {
      q: 'A $5$ cm by $12$ cm flag is shrunk so that its long side becomes $9$ cm. To keep the same shape, how long must the short side become?',
      choices: ['$2$ cm', '$6.75$ cm', '$3.75$ cm', '$5$ cm'],
      answer: 2,
      solution:
        'The long side went from $12$ to $9$ — multiplied by $\\frac{9}{12} = \\frac{3}{4}$ — so the short side does the same: $5 \\times \\frac{3}{4} = 3.75$ cm. Check: $5:12 = 3.75:9$, since $5 \\times 9 = 12 \\times 3.75 = 45$. ✓ Subtracting the same $3$ cm gives $2$ cm, $6.75$ shrinks the NEW long side instead of the short side, and $5$ leaves the short side unchanged.',
    },
    {
      q: 'A rectangular garden $8$ m by $20$ m is redrawn on a plan in the same shape, with the $8$ m side drawn as $6$ m. How long is the other side on the plan?',
      choices: ['$18$ m', '$20$ m', '$11.25$ m', '$15$ m'],
      answer: 3,
      solution:
        'The $8$ m side became $6$ m, a factor of $\\frac{6}{8} = \\frac{3}{4}$, so the $20$ m side becomes $20 \\times \\frac{3}{4} = 15$ m. Check: $8:20 = 6:15$, since $8 \\times 15 = 20 \\times 6 = 120$. ✓ Taking $2$ m off both sides gives $18$ m, leaving the side unchanged gives $20$ m, and shrinking twice ($15 \\times \\frac{3}{4}$) gives $11.25$ m.',
    },
  ],
  // p7 — identical objects scale with their count
  [
    {
      q: 'Six identical tiles weigh $15$ kg. How much do $10$ of the same tiles weigh?',
      choices: ['$25$ kg', '$19$ kg', '$9$ kg', '$150$ kg'],
      answer: 0,
      solution:
        'One tile weighs $15 \\div 6 = 2.5$ kg, so $10$ tiles weigh $10 \\times 2.5 = 25$ kg. Check: $\\frac{6}{15} = \\frac{10}{25}$, since $6 \\times 25 = 15 \\times 10 = 150$. ✓ Adding $4$ kg for the $4$ extra tiles gives $19$ kg, $9$ kg comes from cross-multiplying the wrong pair ($15 \\times 6 \\div 10$), and $150$ kg is the bare cross-product.',
    },
    {
      q: 'Eight identical books weigh $12$ kg. How much do $14$ of the same books weigh?',
      choices: ['$18$ kg', '$21$ kg', '$1.5$ kg', '$168$ kg'],
      answer: 1,
      solution:
        'One book weighs $12 \\div 8 = 1.5$ kg, so $14$ books weigh $14 \\times 1.5 = 21$ kg. Check: $\\frac{8}{12} = \\frac{14}{21}$, since $8 \\times 21 = 12 \\times 14 = 168$. ✓ Adding $6$ kg for the $6$ extra books gives $18$ kg, $1.5$ kg is the weight of a single book, and $168$ kg stops at the cross-product without dividing by $8$.',
    },
    {
      q: 'Nine identical bricks weigh $36$ kg. How many of these bricks weigh $60$ kg?',
      choices: ['$33$', '$4$', '$15$', '$5.4$'],
      answer: 2,
      solution:
        'One brick weighs $36 \\div 9 = 4$ kg, so $60$ kg is $60 \\div 4 = 15$ bricks. Check: $\\frac{9}{36} = \\frac{15}{60}$, since $9 \\times 60 = 36 \\times 15 = 540$. ✓ Adding the extra $24$ kg as bricks gives $33$, and $4$ is the weight of one brick, not a count. The fractional $5.4$ comes from cross-multiplying the wrong pair — and a fraction of a brick is a good clue that the pairing was wrong.',
    },
  ],
  // p8 — spotting equal ratios
  [
    {
      q: 'One of the pairs of fractions below is a proportion. Which one?',
      choices: [
        '$\\frac{8}{12}$ and $\\frac{10}{15}$',
        '$\\frac{3}{4}$ and $\\frac{4}{5}$',
        '$\\frac{5}{6}$ and $\\frac{6}{7}$',
        '$\\frac{2}{5}$ and $\\frac{3}{6}$',
      ],
      answer: 0,
      solution:
        'Both $\\frac{8}{12}$ and $\\frac{10}{15}$ reduce to $\\frac{2}{3}$, so they are equal — that is a proportion. Cross-multiplying agrees: $8 \\times 15 = 12 \\times 10 = 120$. The other pairs look alike because their numbers sit one apart, but $3 \\times 5 \\ne 4 \\times 4$, $5 \\times 7 \\ne 6 \\times 6$, and $2 \\times 6 \\ne 5 \\times 3$.',
    },
    {
      q: 'Three of these pairs of fractions are equal. Which pair is NOT?',
      choices: [
        '$\\frac{4}{6}$ and $\\frac{6}{9}$',
        '$\\frac{5}{8}$ and $\\frac{15}{25}$',
        '$\\frac{9}{12}$ and $\\frac{12}{16}$',
        '$\\frac{6}{10}$ and $\\frac{9}{15}$',
      ],
      answer: 1,
      solution:
        'Cross-multiply each pair. $4 \\times 9 = 6 \\times 6$, $9 \\times 16 = 12 \\times 12$, and $6 \\times 15 = 10 \\times 9$ — all equal, so those three are proportions. But $5 \\times 25 = 125$ while $8 \\times 15 = 120$, so $\\frac{5}{8}$ and $\\frac{15}{25}$ are not equal: the second is $\\frac{3}{5}$, and the top was tripled while the bottom was only roughly tripled.',
    },
    {
      q: 'Exactly one of these pairs of fractions is equal. Which pair is it?',
      choices: [
        '$\\frac{4}{7}$ and $\\frac{5}{8}$',
        '$\\frac{7}{9}$ and $\\frac{8}{10}$',
        '$\\frac{3}{5}$ and $\\frac{4}{7}$',
        '$\\frac{14}{21}$ and $\\frac{10}{15}$',
      ],
      answer: 3,
      solution:
        'Both $\\frac{14}{21}$ and $\\frac{10}{15}$ reduce to $\\frac{2}{3}$, and cross-multiplying confirms it: $14 \\times 15 = 21 \\times 10 = 210$. In the other pairs, adding $1$ to the top and bottom of a fraction below $1$ always makes it BIGGER, so $\\frac{5}{8} \\ne \\frac{4}{7}$ and $\\frac{8}{10} \\ne \\frac{7}{9}$; and $3 \\times 7 \\ne 5 \\times 4$.',
    },
  ],
  // p9 — scales where one centimetre is not the unit
  [
    {
      q: 'On a map, $4$ cm represents $10$ km. Two towns are really $35$ km apart. How far apart are they on the map?',
      choices: ['$87.5$ cm', '$14$ cm', '$8.75$ cm', '$140$ cm'],
      answer: 1,
      solution:
        'Set up $\\frac{4 \\text{ cm}}{10 \\text{ km}} = \\frac{x \\text{ cm}}{35 \\text{ km}}$ and cross-multiply: $10x = 140$, so $x = 14$ cm. (Or: each kilometre is $0.4$ cm on the map, and $35 \\times 0.4 = 14$.) The value $87.5$ turns the scale upside down, $8.75$ divides $35$ by $4$ instead of using both scale numbers, and $140$ stops at the cross-product.',
    },
    {
      q: 'On a map, $5$ cm represents $12$ km. Two villages are really $30$ km apart. How far apart are they on the map?',
      choices: ['$72$ cm', '$150$ cm', '$12.5$ cm', '$6$ cm'],
      answer: 2,
      solution:
        'Set up $\\frac{5 \\text{ cm}}{12 \\text{ km}} = \\frac{x \\text{ cm}}{30 \\text{ km}}$. Cross-multiplying gives $12x = 150$, so $x = 12.5$ cm. The distance grew from $12$ km to $30$ km — two and a half times — and $5 \\times 2.5 = 12.5$ agrees. ✓ Using the scale upside down gives $72$ cm, $150$ is the undivided cross-product, and $6$ comes from dividing $30$ by $5$, a number that is measured in centimetres, not kilometres.',
    },
    {
      q: 'On a map, $6$ cm represents $15$ km. Two hills are $8$ cm apart on the map. How far apart are they really?',
      choices: ['$3.2$ km', '$120$ km', '$17$ km', '$20$ km'],
      answer: 3,
      solution:
        'Each map centimetre stands for $15 \\div 6 = 2.5$ km, so $8$ cm stands for $8 \\times 2.5 = 20$ km. Check with cross-multiplication: $\\frac{6}{15} = \\frac{8}{20}$, since $6 \\times 20 = 15 \\times 8 = 120$. ✓ Flipping the scale gives $3.2$ km, $120$ is that cross-product left undivided, and $17$ comes from adding rather than scaling.',
    },
  ],
  // p10 — quantities that grow by adding are not proportional
  [
    {
      q: 'Sam is $8$ and his uncle is $32$, so their ages are in the ratio $1:4$. What will the ratio of their ages be in $8$ years?',
      choices: ['$2:5$', '$1:4$', '$3:4$', '$5:2$'],
      answer: 0,
      solution:
        'In $8$ years Sam will be $16$ and his uncle will be $40$, and $16:40 = 2:5$. Ages are not proportional over time: both grow by ADDING the same $8$ years, and adding always changes a ratio, so $1:4$ cannot survive. The choice $3:4$ adds the $8$ to the ratio NUMBERS instead of the ages, and $5:2$ has the order reversed.',
    },
    {
      q: 'Mia is $6$ and her sister is $18$, so their ages are in the ratio $1:3$. What was the ratio of their ages $2$ years ago?',
      choices: ['$1:3$', '$4:1$', '$1:4$', '$2:9$'],
      answer: 2,
      solution:
        'Two years ago Mia was $4$ and her sister was $16$, and $4:16 = 1:4$. Going backwards in time spreads the ratio further apart, so it cannot stay $1:3$ — subtracting the same amount changes a ratio just as adding does. The choice $4:1$ reverses the order, and $2:9$ comes from taking the $2$ years off Mia only ($4:18$).',
    },
    {
      q: 'A puppy weighs $4$ kg and an adult dog weighs $20$ kg — a ratio of $1:5$. If each of them gains $5$ kg, what will the ratio of their weights be?',
      choices: ['$1:5$', '$3:5$', '$25:9$', '$9:25$'],
      answer: 3,
      solution:
        'New weights: $4 + 5 = 9$ kg and $20 + 5 = 25$ kg, so the ratio is $9:25$, which does not simplify. Adding the same amount to both sides moves them CLOSER in ratio, so $1:5$ is not preserved. Adding the $5$ to the ratio numbers instead gives $6:10 = 3:5$, and $25:9$ has the two animals the wrong way round.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 7,
  sections: {
    '7.1': s71,
    '7.2': s72,
    '7.3': s73,
  },
}
