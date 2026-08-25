// Introduction to Algebra chapter 6 — variations for sections 6.1 and 6.2. All
// problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone, then checked forward
//    through the story (rebuild the quantities from the multiplier and confirm
//    the stated total, difference, or new ratio), not by re-reading the solution.
//  - Every question names its BASE out loud: "in the whole choir", "of the
//    original recipe", "in the two crates altogether". A ratio with an unstated
//    base is ambiguous, and so is a part with no whole attached to it.
//  - Every ratio that splits a total was chosen so the total is divisible by the
//    SUM of the parts, and every changing-ratio item solves to a whole multiplier,
//    so no count of a physical thing is ever a fraction.
//  - Every distractor is the output of a named mistake — the other quantity's
//    value, the ratio read backwards, dividing by one ratio number instead of by
//    their sum, stopping at the multiplier, reporting the AFTER value when the
//    question asked for the BEFORE, or gluing chained ratios without rescaling.
//    No two choices in an item share a VALUE.

const s61 = [
  // p1 — a two-part ratio splits a total; the trap is answering for the other group
  [
    {
      q: 'A parking lot holds cars and motorcycles in the ratio $3:2$, and there are $45$ vehicles in the whole lot. How many cars are in the lot?',
      choices: ['$18$', '$15$', '$27$', '$9$'],
      answer: 2,
      solution:
        'Write the counts as $3x$ cars and $2x$ motorcycles. The whole lot gives $3x + 2x = 5x = 45$, so $x = 9$. Cars: $3 \\times 9 = 27$. Check forward: $27$ cars and $18$ motorcycles make $45$ vehicles, and $27:18 = 3:2$. ✓ (The choice $18$ is the motorcycle count — the other group; the choice $15$ divides $45$ by the $3$ from the ratio instead of by the sum $5$; the choice $9$ stops at the multiplier $x$.)',
    },
    {
      q: 'A fruit basket holds apples and pears in the ratio $5:4$, and there are $36$ pieces of fruit in the basket altogether. How many pears are in the basket?',
      choices: ['$16$', '$20$', '$9$', '$4$'],
      answer: 0,
      solution:
        'Let there be $5x$ apples and $4x$ pears. The basket total gives $9x = 36$, so $x = 4$, and the pears number $4 \\times 4 = 16$. Check forward: $20 + 16 = 36$, and $20:16 = 5:4$. ✓ (The choice $20$ counts the apples instead; the choice $9$ divides $36$ by the $4$ from the ratio rather than by the sum $9$; the choice $4$ is the multiplier $x$, one step short of the answer.)',
    },
    {
      q: 'A choir has altos and sopranos in the ratio $4:7$, and there are $66$ singers in the whole choir. How many altos are in the choir?',
      choices: ['$42$', '$33$', '$6$', '$24$'],
      answer: 3,
      solution:
        'The sections are $4x$ altos and $7x$ sopranos, so $11x = 66$ and $x = 6$. Altos: $4 \\times 6 = 24$. Check forward: $24 + 42 = 66$ singers, and $24:42 = 4:7$. ✓ (The choice $42$ is the soprano count; the choice $33$ splits the choir into two EQUAL halves, ignoring the ratio entirely; the choice $6$ is the multiplier $x$.)',
    },
  ],
  // p2 — one quantity is handed to you; recover the multiplier, then the other
  [
    {
      q: 'Two quantities are in the ratio $3:7$. If the first quantity is $18$, what is the second?',
      choices: ['$126$', '$42$', '$22$', '$6$'],
      answer: 1,
      solution:
        'Write the quantities as $3x$ and $7x$. Since $3x = 18$, the multiplier is $x = 6$, so the second quantity is $7 \\times 6 = 42$. Check forward: $18:42 = 3:7$. ✓ (The choice $126$ multiplies $18$ by $7$ without first dividing by $3$ to find $x$; the choice $22$ adds the gap between the ratio numbers, $7 - 3 = 4$, to $18$, treating a ratio as a difference; the choice $6$ is the multiplier $x$ itself.)',
    },
    {
      q: 'Two quantities are in the ratio $8:5$. If the second quantity is $35$, what is the first?',
      choices: ['$7$', '$280$', '$38$', '$56$'],
      answer: 3,
      solution:
        'Write the quantities as $8x$ and $5x$. Since $5x = 35$, the multiplier is $x = 7$, so the first quantity is $8 \\times 7 = 56$. Check forward: $56:35 = 8:5$. ✓ (The choice $7$ is the multiplier $x$; the choice $280$ multiplies $35$ by $8$ without dividing by $5$ first; the choice $38$ adds the gap $8 - 5 = 3$ to $35$.)',
    },
    {
      q: 'Two quantities are in the ratio $9:4$. If the first quantity is $63$, what is the second?',
      choices: ['$252$', '$7$', '$28$', '$58$'],
      answer: 2,
      solution:
        'Write the quantities as $9x$ and $4x$. Since $9x = 63$, the multiplier is $x = 7$, so the second quantity is $4 \\times 7 = 28$. Check forward: $63:28 = 9:4$. ✓ (The choice $252$ multiplies $63$ by $4$ and skips the division by $9$; the choice $7$ is the multiplier $x$; the choice $58$ subtracts the gap $9 - 4 = 5$ from $63$, as if the ratio described a difference.)',
    },
  ],
  // p3 — same split, but the question asks for the SECOND group named
  [
    {
      q: 'A bookshelf holds novels and poetry books in the ratio $5:2$, and there are $56$ books on the whole shelf. How many poetry books are on the shelf?',
      choices: ['$16$', '$40$', '$28$', '$8$'],
      answer: 0,
      solution:
        'Let there be $5x$ novels and $2x$ poetry books. The shelf total gives $7x = 56$, so $x = 8$ and the poetry books number $2 \\times 8 = 16$. Check forward: $40 + 16 = 56$, and $40:16 = 5:2$. ✓ (The choice $40$ counts the novels; the choice $28$ splits the shelf in half, ignoring the ratio; the choice $8$ is the multiplier $x$.)',
    },
    {
      q: 'A garden has tulips and daisies in the ratio $7:5$, and there are $60$ flowers in the whole garden. How many daisies are in the garden?',
      choices: ['$35$', '$12$', '$5$', '$25$'],
      answer: 3,
      solution:
        'Let there be $7x$ tulips and $5x$ daisies, so $12x = 60$ and $x = 5$. Daisies: $5 \\times 5 = 25$. Check forward: $35 + 25 = 60$ flowers, and $35:25 = 7:5$. ✓ (The choice $35$ counts the tulips; the choice $12$ divides $60$ by the $5$ from the ratio instead of by the sum $12$; the choice $5$ is the multiplier $x$.)',
    },
    {
      q: 'A stamp album holds foreign and local stamps in the ratio $3:8$, and there are $88$ stamps in the whole album. How many local stamps are in the album?',
      choices: ['$24$', '$64$', '$11$', '$8$'],
      answer: 1,
      solution:
        'Let there be $3x$ foreign and $8x$ local stamps, so $11x = 88$ and $x = 8$. Local stamps: $8 \\times 8 = 64$. Check forward: $24 + 64 = 88$, and $24:64 = 3:8$. ✓ (The choice $24$ is the foreign count; the choice $11$ divides $88$ by the $8$ from the ratio instead of by the sum $11$; the choice $8$ is the multiplier $x$.)',
    },
  ],
  // p4 — a difference, not a total, supplies the equation
  [
    {
      q: 'Two numbers are in the ratio $7:3$ and differ by $28$. What is the larger number?',
      choices: ['$21$', '$49$', '$196$', '$70$'],
      answer: 1,
      solution:
        'Call the numbers $7x$ and $3x$. Their difference is $7x - 3x = 4x = 28$, so $x = 7$ and the larger number is $7 \\times 7 = 49$. Check forward: $49 - 21 = 28$, and $49:21 = 7:3$. ✓ (The choice $21$ is the smaller number; the choice $70$ is the sum of the two numbers, a different question; the choice $196$ treats the difference $28$ as the multiplier and computes $7 \\times 28$, but $28$ is $4x$, not $x$.)',
    },
    {
      q: 'Two numbers are in the ratio $9:5$ and differ by $32$. What is the smaller number?',
      choices: ['$72$', '$112$', '$40$', '$160$'],
      answer: 2,
      solution:
        'Call the numbers $9x$ and $5x$. Their difference is $4x = 32$, so $x = 8$ and the smaller number is $5 \\times 8 = 40$. Check forward: $72 - 40 = 32$, and $72:40 = 9:5$. ✓ (The choice $72$ is the larger number; the choice $112$ is their sum; the choice $160$ treats the difference $32$ as the multiplier and computes $5 \\times 32$.)',
    },
    {
      q: 'Two numbers are in the ratio $8:5$ and differ by $18$. What is the larger number?',
      choices: ['$48$', '$30$', '$78$', '$144$'],
      answer: 0,
      solution:
        'Call the numbers $8x$ and $5x$. Their difference is $3x = 18$, so $x = 6$ and the larger number is $8 \\times 6 = 48$. Check forward: $48 - 30 = 18$, and $48:30 = 8:5$. ✓ (The choice $30$ is the smaller number; the choice $78$ is their sum; the choice $144$ treats the difference $18$ as the multiplier and computes $8 \\times 18$.)',
    },
  ],
  // p5 — three parts share a total; name which share is wanted
  [
    {
      q: 'Three teams share $80$ points in the ratio $1:3:4$. How many points does the team with the biggest share receive?',
      choices: ['$40$', '$30$', '$10$', '$20$'],
      answer: 0,
      solution:
        'The shares are $x$, $3x$, and $4x$, so $8x = 80$ and $x = 10$. The biggest share is $4 \\times 10 = 40$ points. Check forward: $10 + 30 + 40 = 80$, and $10:30:40 = 1:3:4$. ✓ (The choices $10$ and $30$ are the two smaller shares; the choice $20$ divides $80$ by the $4$ from the ratio instead of by the sum $8$.)',
    },
    {
      q: 'Three cousins divide $90$ walnuts in the ratio $2:3:5$. How many walnuts does the cousin with the smallest share receive?',
      choices: ['$45$', '$27$', '$30$', '$18$'],
      answer: 3,
      solution:
        'The shares are $2x$, $3x$, and $5x$, so $10x = 90$ and $x = 9$. The smallest share is $2 \\times 9 = 18$ walnuts. Check forward: $18 + 27 + 45 = 90$, and $18:27:45 = 2:3:5$. ✓ (The choices $45$ and $27$ are the largest and middle shares; the choice $30$ divides $90$ evenly among the three cousins, throwing the ratio away.)',
    },
    {
      q: 'Three shelves hold $84$ jars in the ratio $2:5:7$. How many jars are on the shelf with the middle share?',
      choices: ['$12$', '$30$', '$42$', '$28$'],
      answer: 1,
      solution:
        'The shelves hold $2x$, $5x$, and $7x$ jars, so $14x = 84$ and $x = 6$. The middle share is $5 \\times 6 = 30$ jars. Check forward: $12 + 30 + 42 = 84$, and $12:30:42 = 2:5:7$. ✓ (The choices $12$ and $42$ are the smallest and largest shelves; the choice $28$ splits $84$ evenly across three shelves, ignoring the ratio.)',
    },
  ],
  // p6 — a difference is given but the TOTAL is wanted
  [
    {
      q: 'Green and yellow tokens sit in a box in the ratio $4:7$, and there are $18$ more yellow tokens than green ones. How many tokens are in the box altogether?',
      choices: ['$66$', '$42$', '$24$', '$198$'],
      answer: 0,
      solution:
        'With $4x$ green and $7x$ yellow, the difference is $7x - 4x = 3x = 18$, so $x = 6$. The box holds $4x + 7x = 11x = 66$ tokens. Check forward: $24$ green and $42$ yellow differ by $18$ and total $66$. ✓ (The choices $42$ and $24$ report just one colour instead of the whole box; the choice $198$ treats the difference $18$ as the multiplier and computes $11 \\times 18$, but $18$ is $3x$, not $x$.)',
    },
    {
      q: 'A farm keeps ducks and geese in the ratio $5:3$, and there are $16$ more ducks than geese. How many birds are on the farm altogether?',
      choices: ['$40$', '$24$', '$64$', '$128$'],
      answer: 2,
      solution:
        'With $5x$ ducks and $3x$ geese, the difference is $2x = 16$, so $x = 8$. The farm has $8x = 64$ birds. Check forward: $40$ ducks and $24$ geese differ by $16$ and total $64$. ✓ (The choices $40$ and $24$ are the separate flocks, not the whole farm; the choice $128$ treats the difference $16$ as the multiplier and computes $8 \\times 16$.)',
    },
    {
      q: 'A library shelf holds hardcovers and paperbacks in the ratio $9:5$, and there are $24$ more hardcovers than paperbacks. How many books are on the whole shelf?',
      choices: ['$54$', '$30$', '$336$', '$84$'],
      answer: 3,
      solution:
        'With $9x$ hardcovers and $5x$ paperbacks, the difference is $4x = 24$, so $x = 6$. The shelf holds $14x = 84$ books. Check forward: $54$ hardcovers and $30$ paperbacks differ by $24$ and total $84$. ✓ (The choices $54$ and $30$ each give only one kind of book; the choice $336$ treats the difference $24$ as the multiplier and computes $14 \\times 24$.)',
    },
  ],
  // p7 — three parts again, this time with the wanted container named outright
  [
    {
      q: 'Three tanks hold fuel in the ratio $3:5:8$, and together they hold $96$ liters. How many liters are in the largest tank?',
      choices: ['$48$', '$30$', '$18$', '$12$'],
      answer: 0,
      solution:
        'The tanks hold $3x$, $5x$, and $8x$ liters, so $16x = 96$ and $x = 6$. The largest tank holds $8 \\times 6 = 48$ liters. Check forward: $18 + 30 + 48 = 96$, and $18:30:48 = 3:5:8$. ✓ (The choices $30$ and $18$ are the other two tanks; the choice $12$ divides $96$ by the $8$ from the ratio instead of by the sum $16$.)',
    },
    {
      q: 'A red bag, a blue bag, and a green bag of sand have weights in the ratio $4:6:5$ in that order, and together they weigh $75$ kilograms. How many kilograms does the blue bag weigh?',
      choices: ['$20$', '$30$', '$25$', '$5$'],
      answer: 1,
      solution:
        'The bags weigh $4x$, $6x$, and $5x$ kilograms, so $15x = 75$ and $x = 5$. The blue bag weighs $6 \\times 5 = 30$ kilograms. Check forward: $20 + 30 + 25 = 75$, and $20:30:25 = 4:6:5$. ✓ (The choice $20$ is the red bag and the choice $25$ is the green bag — read which colour is asked for; the choice $5$ stops at the multiplier $x$.)',
    },
    {
      q: 'Three chests hold gold coins in the ratio $5:2:6$ in that order, and the three chests hold $130$ coins altogether. How many coins are in the second chest?',
      choices: ['$50$', '$60$', '$20$', '$65$'],
      answer: 2,
      solution:
        'The chests hold $5x$, $2x$, and $6x$ coins, so $13x = 130$ and $x = 10$. The second chest holds $2 \\times 10 = 20$ coins. Check forward: $50 + 20 + 60 = 130$, and $50:20:60 = 5:2:6$. ✓ (The choices $50$ and $60$ are the first and third chests; the choice $65$ divides $130$ by the $2$ from the ratio instead of by the sum $13$.)',
    },
  ],
  // p8 — money split by ratio, difference given, total wanted; the classic slip is
  // dividing the difference by one ratio number instead of by their difference
  [
    {
      q: 'Maya and Theo split a sum of money in the ratio $9:5$, and Maya receives $\\$60$ more than Theo. How much money was split in total?',
      choices: ['$\\$210$', '$\\$135$', '$\\$168$', '$\\$75$'],
      answer: 0,
      solution:
        'Write the shares as $9x$ and $5x$. The difference is $9x - 5x = 4x = 60$, so $x = 15$. The total split is $14x = \\$210$. Check forward: Maya gets $\\$135$, Theo gets $\\$75$, the gap is $\\$60$, and the two shares add to $\\$210$. ✓ (The choices $\\$135$ and $\\$75$ are the individual shares, not the total; the choice $\\$168$ divides the $\\$60$ by $5$ to get $x = 12$ — but $\\$60$ is the DIFFERENCE $4x$, not Theo’s whole share.)',
    },
    {
      q: 'Two workers split a payment in the ratio $8:3$, and the first worker receives $\\$75$ more than the second. How much was the payment in total?',
      choices: ['$\\$120$', '$\\$275$', '$\\$165$', '$\\$45$'],
      answer: 2,
      solution:
        'Write the shares as $8x$ and $3x$. The difference is $5x = 75$, so $x = 15$ and the payment is $11x = \\$165$. Check forward: $\\$120$ and $\\$45$ differ by $\\$75$ and add to $\\$165$. ✓ (The choices $\\$120$ and $\\$45$ are the two shares; the choice $\\$275$ divides the $\\$75$ by $3$ to get $x = 25$, but $\\$75$ is the difference $5x$, not the second worker’s share.)',
    },
    {
      q: 'A prize fund is split between two clubs in the ratio $7:4$, and the first club receives $\\$54$ more than the second. How much is the prize fund in total?',
      choices: ['$\\$126$', '$\\$72$', '$\\$594$', '$\\$198$'],
      answer: 3,
      solution:
        'Write the shares as $7x$ and $4x$. The difference is $3x = 54$, so $x = 18$ and the fund is $11x = \\$198$. Check forward: $\\$126$ and $\\$72$ differ by $\\$54$ and add to $\\$198$. ✓ (The choices $\\$126$ and $\\$72$ are the individual shares; the choice $\\$594$ treats the difference $\\$54$ as the multiplier and computes $11 \\times 54$, but $\\$54$ is $3x$.)',
    },
  ],
  // p9 — hard: the ratio must be rebuilt AFTER the ages move
  [
    {
      q: 'Two sisters have ages in the ratio $3:5$, and their ages add up to $32$. What will the ratio of their ages be in $4$ years?',
      choices: ['$3:5$', '$2:3$', '$7:9$', '$4:5$'],
      answer: 1,
      solution:
        'Now: ages $3x$ and $5x$ with $8x = 32$, so $x = 4$ and the sisters are $12$ and $20$. In $4$ years they will be $16$ and $24$, and $16:24$ simplifies to $2:3$ (divide both by $8$). Check forward: $12 + 4 = 16$ and $20 + 4 = 24$, and $16:24 = 2:3$. ✓ (The choice $3:5$ assumes the ratio survives the four years, but adding the same number to both parts always changes a ratio; the choice $7:9$ adds $4$ to each part of the RATIO instead of to the ages; the choice $4:5$ comes from $16:20$, which ages only the younger sister.)',
    },
    {
      q: 'A father and his daughter have ages in the ratio $7:2$, and their ages add up to $54$. What will the ratio of their ages be in $6$ years?',
      choices: ['$7:2$', '$13:8$', '$8:3$', '$4:1$'],
      answer: 2,
      solution:
        'Now: ages $7x$ and $2x$ with $9x = 54$, so $x = 6$ and they are $42$ and $12$. In $6$ years they will be $48$ and $18$, and $48:18$ simplifies to $8:3$ (divide both by $6$). Check forward: $42 + 6 = 48$, $12 + 6 = 18$, and $48:18 = 8:3$. ✓ (The choice $7:2$ assumes the ratio does not move; the choice $13:8$ adds $6$ to each part of the ratio rather than to the ages; the choice $4:1$ comes from $48:12$, which ages only the father.)',
    },
    {
      q: 'Two cousins have ages in the ratio $2:3$, and their ages add up to $25$. What was the ratio of their ages $5$ years ago?',
      choices: ['$2:3$', '$3:4$', '$1:3$', '$1:2$'],
      answer: 3,
      solution:
        'Now: ages $2x$ and $3x$ with $5x = 25$, so $x = 5$ and the cousins are $10$ and $15$. Five years ago they were $5$ and $10$, and $5:10$ simplifies to $1:2$. Check forward: $5 + 5 = 10$ and $10 + 5 = 15$, so the past ages really do grow into today’s. ✓ (The choice $2:3$ assumes the ratio is frozen in time; the choice $3:4$ comes from $15:20$, reading "ago" as "from now"; the choice $1:3$ comes from $5:15$, taking the $5$ years off only the younger cousin.)',
    },
  ],
  // p10 — hard: ratio plus perimeter, then a second step to the area
  [
    {
      q: 'A rectangular rug has length and width in the ratio $7:2$, and the ribbon sewn all the way around its edge is $72$ inches long. What is the area of the rug, in square inches?',
      choices: ['$224$', '$896$', '$448$', '$36$'],
      answer: 0,
      solution:
        'Let the length be $7x$ and the width $2x$. The ribbon runs the perimeter: $2(7x + 2x) = 18x = 72$, so $x = 4$. The rug is $28$ by $8$, giving an area of $28 \\times 8 = 224$ square inches. Check forward: the perimeter of a $28$-by-$8$ rectangle is $2(28 + 8) = 72$ inches. ✓ (The choice $896$ solves $9x = 72$, forgetting that the perimeter counts each side twice, and gets a $56$-by-$16$ rug; the choice $448$ finds the right rug but drags the perimeter formula’s factor of $2$ into the area; the choice $36$ stops at $7x + 2x$, half the perimeter.)',
    },
    {
      q: 'A rectangular poster has length and width in the ratio $5:4$, and its perimeter is $108$ centimeters. What is its area, in square centimeters?',
      choices: ['$2880$', '$720$', '$54$', '$1440$'],
      answer: 1,
      solution:
        'Let the length be $5x$ and the width $4x$. The perimeter is $2(5x + 4x) = 18x = 108$, so $x = 6$. The poster is $30$ by $24$, giving an area of $720$ square centimeters. Check forward: $2(30 + 24) = 108$ centimeters. ✓ (The choice $2880$ solves $9x = 108$, forgetting the perimeter counts each side twice, and gets a $60$-by-$48$ poster; the choice $1440$ doubles the correct area, carrying the perimeter’s factor of $2$ where it does not belong; the choice $54$ stops at half the perimeter.)',
    },
    {
      q: 'A rectangular garden plot has length and width in the ratio $8:3$, and the fence around the whole plot is $88$ meters long. What is the area of the plot, in square meters?',
      choices: ['$1536$', '$44$', '$768$', '$384$'],
      answer: 3,
      solution:
        'Let the length be $8x$ and the width $3x$. The fence is the perimeter: $2(8x + 3x) = 22x = 88$, so $x = 4$. The plot is $32$ by $12$, giving an area of $384$ square meters. Check forward: $2(32 + 12) = 88$ meters of fence. ✓ (The choice $1536$ solves $11x = 88$, forgetting the perimeter counts each side twice, and gets a $64$-by-$24$ plot; the choice $768$ doubles the correct area; the choice $44$ stops at $8x + 3x$, half the perimeter.)',
    },
  ],
]

const s62 = [
  // p1 — the shared quantity already matches, so the chain joins directly
  [
    {
      q: 'If $p:q = 3:5$ and $q:r = 5:8$, what is $p:r$?',
      choices: ['$3:8$', '$3:5$', '$5:8$', '$8:3$'],
      answer: 0,
      solution:
        'The $q$ parts already agree ($5$ in both), so the chain joins with no rescaling: $p:q:r = 3:5:8$. Dropping the middle term gives $p:r = 3:8$. Check forward: take $p = 3$, $q = 5$, $r = 8$; then $p:q = 3:5$ ✓ and $q:r = 5:8$ ✓. (The choices $3:5$ and $5:8$ just repeat one of the two given ratios instead of combining them; the choice $8:3$ is the answer read backwards, which compares $r$ to $p$.)',
    },
    {
      q: 'If $m:n = 4:9$ and $n:k = 9:2$, what is $m:k$?',
      choices: ['$4:9$', '$2:1$', '$1:2$', '$9:2$'],
      answer: 1,
      solution:
        'The $n$ parts match at $9$, so $m:n:k = 4:9:2$ directly. Then $m:k = 4:2$, which simplifies to $2:1$. Check forward: take $m = 4$, $n = 9$, $k = 2$; both given ratios hold, and $4$ really is twice $2$. ✓ (The choices $4:9$ and $9:2$ copy out a given ratio without chaining; the choice $1:2$ is the answer reversed, and it points the wrong way — $m$ is the bigger of the two.)',
    },
    {
      q: 'If $x:y = 6:7$ and $y:z = 7:10$, what is $x:z$?',
      choices: ['$6:7$', '$7:10$', '$3:5$', '$5:3$'],
      answer: 2,
      solution:
        'The $y$ parts already agree at $7$, so $x:y:z = 6:7:10$ and therefore $x:z = 6:10 = 3:5$. Check forward: take $x = 6$, $y = 7$, $z = 10$; then $x:y = 6:7$ ✓ and $y:z = 7:10$ ✓. (The choices $6:7$ and $7:10$ restate a given ratio; the choice $5:3$ is the answer backwards, which would make $x$ the larger quantity.)',
    },
  ],
  // p2 — adding to the smaller part levels the two counts
  [
    {
      q: 'A basket holds red and green apples in the ratio $4:7$. After $9$ more red apples are added, the two colours are equal in number. How many red apples were in the basket at first?',
      choices: ['$12$', '$21$', '$33$', '$3$'],
      answer: 0,
      solution:
        'Let the original counts be $4x$ red and $7x$ green; only the red count changes. Equality means $4x + 9 = 7x$, so $3x = 9$ and $x = 3$. The basket began with $4 \\times 3 = 12$ red apples. Check forward: $12 + 9 = 21$, which matches the $7 \\times 3 = 21$ green apples. ✓ (The choice $21$ is the green count — the other colour; the choice $33$ is the original total $12 + 21$; the choice $3$ stops at the multiplier $x$.)',
    },
    {
      q: 'Two stacks of cards are in the ratio $7:9$. After $10$ cards are added to the smaller stack, the two stacks are equal. How many cards were in the smaller stack at first?',
      choices: ['$45$', '$5$', '$35$', '$80$'],
      answer: 2,
      solution:
        'Let the stacks be $7x$ and $9x$; only the smaller one grows. Equality means $7x + 10 = 9x$, so $2x = 10$ and $x = 5$. The smaller stack held $7 \\times 5 = 35$ cards. Check forward: $35 + 10 = 45$, which matches the $9 \\times 5 = 45$ in the larger stack. ✓ (The choice $45$ is the larger stack; the choice $80$ is the original total $35 + 45$; the choice $5$ is the multiplier $x$.)',
    },
    {
      q: 'A tank of tropical fish holds guppies and tetras in the ratio $3:8$. After $15$ more guppies are added, the two kinds are equal in number. How many tetras are in the tank?',
      choices: ['$9$', '$3$', '$33$', '$24$'],
      answer: 3,
      solution:
        'Let the tank hold $3x$ guppies and $8x$ tetras; only the guppies change. Equality means $3x + 15 = 8x$, so $5x = 15$ and $x = 3$. The tetras number $8 \\times 3 = 24$. Check forward: $9 + 15 = 24$ guppies, matching the $24$ tetras. ✓ (The choice $9$ is the original guppy count — the other kind of fish; the choice $33$ is the original total $9 + 24$; the choice $3$ is the multiplier $x$.)',
    },
  ],
  // p3 — the same levelling idea, but the question asks for a sum
  [
    {
      q: 'Two numbers are in the ratio $7:4$. If the smaller number were increased by $12$, the two numbers would be equal. What is the sum of the two numbers?',
      choices: ['$28$', '$44$', '$16$', '$132$'],
      answer: 1,
      solution:
        'The numbers are $7x$ and $4x$. Equality after the increase means $4x + 12 = 7x$, so $3x = 12$ and $x = 4$. The numbers are $28$ and $16$, and their sum is $44$. Check forward: $16 + 12 = 28$ ✓, and $28:16 = 7:4$ ✓. (The choices $28$ and $16$ are the individual numbers, not the sum; the choice $132$ treats the $12$ as the multiplier and computes $11 \\times 12$, but $12$ is $3x$.)',
    },
    {
      q: 'Two numbers are in the ratio $9:5$. If the larger number were decreased by $16$, the two numbers would be equal. What is the sum of the two numbers?',
      choices: ['$36$', '$20$', '$56$', '$224$'],
      answer: 2,
      solution:
        'The numbers are $9x$ and $5x$. Equality after the decrease means $9x - 16 = 5x$, so $4x = 16$ and $x = 4$. The numbers are $36$ and $20$, and their sum is $56$. Check forward: $36 - 16 = 20$ ✓, and $36:20 = 9:5$ ✓. (The choices $36$ and $20$ are the separate numbers; the choice $224$ treats the $16$ as the multiplier and computes $14 \\times 16$.)',
    },
    {
      q: 'Two numbers are in the ratio $8:3$. If the smaller number were increased by $25$, the two numbers would be equal. What is the sum of the two numbers?',
      choices: ['$40$', '$15$', '$275$', '$55$'],
      answer: 3,
      solution:
        'The numbers are $8x$ and $3x$. Equality after the increase means $3x + 25 = 8x$, so $5x = 25$ and $x = 5$. The numbers are $40$ and $15$, and their sum is $55$. Check forward: $15 + 25 = 40$ ✓, and $40:15 = 8:3$ ✓. (The choices $40$ and $15$ are the individual numbers; the choice $275$ treats the $25$ as the multiplier and computes $11 \\times 25$.)',
    },
  ],
  // p4 — levelling again, but now the question wants the BEFORE total
  [
    {
      q: 'A drama club has actors and crew in the ratio $5:8$. If $6$ more actors join, the club will have equally many actors and crew. How many people are in the club right now, before anyone joins?',
      choices: ['$26$', '$16$', '$10$', '$32$'],
      answer: 0,
      solution:
        'Let the club have $5x$ actors and $8x$ crew. The join condition gives $5x + 6 = 8x$, so $3x = 6$ and $x = 2$. Right now the club has $10 + 16 = 26$ people. Check forward: $10 + 6 = 16$, which equals the crew count. ✓ (The choices $10$ and $16$ are the separate groups, but the question asks for the whole club; the choice $32$ is the total AFTER the six join, and the question asks for before.)',
    },
    {
      q: 'A chess club has beginners and veterans in the ratio $3:7$. If $8$ more beginners join, the club will have equally many beginners and veterans. How many members does the club have now, before anyone joins?',
      choices: ['$14$', '$20$', '$6$', '$28$'],
      answer: 1,
      solution:
        'Let the club have $3x$ beginners and $7x$ veterans. Then $3x + 8 = 7x$, so $4x = 8$ and $x = 2$. The club now has $6 + 14 = 20$ members. Check forward: $6 + 8 = 14$, matching the veterans. ✓ (The choices $6$ and $14$ are the two groups on their own; the choice $28$ is the membership after the eight join, not before.)',
    },
    {
      q: 'A hiking group has adults and children in the ratio $9:4$. If $20$ more children come along, the group will have equally many adults and children. How many people are in the group now, before anyone else comes?',
      choices: ['$36$', '$16$', '$72$', '$52$'],
      answer: 3,
      solution:
        'Let the group have $9x$ adults and $4x$ children. Then $4x + 20 = 9x$, so $5x = 20$ and $x = 4$. The group now has $36 + 16 = 52$ people. Check forward: $16 + 20 = 36$, matching the adults. ✓ (The choices $36$ and $16$ are the separate counts; the choice $72$ is the size of the group after the twenty children arrive, not the size now.)',
    },
  ],
  // p5 — only one side changes and the new ratio is not equality
  [
    {
      q: 'Two orchards have apple trees in the ratio $3:8$. After $10$ trees are planted in the first orchard, the ratio becomes $1:2$. How many apple trees did the first orchard have originally?',
      choices: ['$30$', '$40$', '$80$', '$110$'],
      answer: 0,
      solution:
        'Let the orchards start with $3x$ and $8x$ trees; only the first one changes. The new ratio gives $\\frac{3x+10}{8x} = \\frac{1}{2}$, so $2(3x + 10) = 8x$, giving $6x + 20 = 8x$ and $x = 10$. The first orchard began with $3 \\times 10 = 30$ trees. Check forward: $30 + 10 = 40$ against $80$, and $40:80 = 1:2$. ✓ (The choice $80$ is the second orchard; the choice $40$ is the first orchard AFTER the planting, when the question asks for the original; the choice $110$ is the original total.)',
    },
    {
      q: 'Two swim lanes hold swimmers in the ratio $4:9$. After $6$ swimmers climb into the first lane, the ratio becomes $2:3$. How many swimmers were in the first lane originally?',
      choices: ['$27$', '$18$', '$12$', '$39$'],
      answer: 2,
      solution:
        'Let the lanes start with $4x$ and $9x$ swimmers; only the first changes. Then $\\frac{4x+6}{9x} = \\frac{2}{3}$, so $3(4x + 6) = 18x$, giving $12x + 18 = 18x$ and $x = 3$. The first lane began with $4 \\times 3 = 12$ swimmers. Check forward: $12 + 6 = 18$ against $27$, and $18:27 = 2:3$. ✓ (The choice $27$ is the second lane; the choice $18$ is the first lane after the six climbed in; the choice $39$ is the original total.)',
    },
    {
      q: 'A bakery’s trays hold muffins and scones in the ratio $5:9$. After $12$ more muffins are baked and added, the ratio becomes $7:9$. How many scones are on the trays?',
      choices: ['$30$', '$42$', '$84$', '$54$'],
      answer: 3,
      solution:
        'Let the trays hold $5x$ muffins and $9x$ scones; only the muffins change. Then $\\frac{5x+12}{9x} = \\frac{7}{9}$, so $9(5x + 12) = 63x$, giving $45x + 108 = 63x$ and $x = 6$. The scones number $9 \\times 6 = 54$, and nothing happened to them. Check forward: $30 + 12 = 42$ muffins against $54$ scones, and $42:54 = 7:9$. ✓ (The choice $30$ is the original muffin count — the other item; the choice $42$ is the muffin count after baking; the choice $84$ is the original total.)',
    },
  ],
  // p6 — BOTH sides change by the same amount
  [
    {
      q: 'Two jars hold marbles in the ratio $9:5$. After $4$ marbles are taken out of EACH jar, the ratio becomes $7:3$. How many marbles did the larger jar hold originally?',
      choices: ['$18$', '$14$', '$10$', '$28$'],
      answer: 0,
      solution:
        'Original counts: $9x$ and $5x$. Both jars shrink by $4$, so $\\frac{9x-4}{5x-4} = \\frac{7}{3}$. Cross-multiply: $3(9x - 4) = 7(5x - 4)$, giving $27x - 12 = 35x - 28$, so $16 = 8x$ and $x = 2$. The larger jar held $9 \\times 2 = 18$ marbles. Check forward: $18 - 4 = 14$ and $10 - 4 = 6$, and $14:6 = 7:3$. ✓ (The choice $10$ is the smaller jar; the choice $14$ is the larger jar AFTER the removal, not before; the choice $28$ is the original total.)',
    },
    {
      q: 'Two boxes hold pencils in the ratio $7:3$. After $4$ pencils are added to EACH box, the ratio becomes $2:1$. How many pencils did the smaller box hold at first?',
      choices: ['$28$', '$12$', '$16$', '$40$'],
      answer: 1,
      solution:
        'Original counts: $7x$ and $3x$. Both boxes grow by $4$, so $\\frac{7x+4}{3x+4} = \\frac{2}{1}$. Cross-multiply: $7x + 4 = 2(3x + 4) = 6x + 8$, so $x = 4$. The smaller box held $3 \\times 4 = 12$ pencils. Check forward: $28 + 4 = 32$ and $12 + 4 = 16$, and $32:16 = 2:1$. ✓ (The choice $28$ is the larger box; the choice $16$ is the smaller box after the four were added; the choice $40$ is the original total.)',
    },
    {
      q: 'Two crates hold oranges in the ratio $5:3$. After $4$ oranges are taken from EACH crate, the ratio becomes $3:1$. How many oranges were in the two crates altogether at first?',
      choices: ['$10$', '$6$', '$16$', '$8$'],
      answer: 2,
      solution:
        'Original counts: $5x$ and $3x$. Both crates lose $4$, so $\\frac{5x-4}{3x-4} = \\frac{3}{1}$. Cross-multiply: $5x - 4 = 3(3x - 4) = 9x - 12$, so $8 = 4x$ and $x = 2$. The crates held $10$ and $6$, so $16$ oranges altogether. Check forward: $10 - 4 = 6$ and $6 - 4 = 2$, and $6:2 = 3:1$. ✓ (The choices $10$ and $6$ are single crates rather than the pair; the choice $8$ is what is left in the two crates after the removal, not what they started with.)',
    },
  ],
  // p7 — the shared quantity does NOT match, so rescale to its least common multiple
  [
    {
      q: 'If $a:b = 2:5$ and $b:c = 4:3$, what is $a:b:c$?',
      choices: ['$2:5:3$', '$8:20:15$', '$8:20:3$', '$15:20:8$'],
      answer: 1,
      solution:
        'The shared quantity $b$ is $5$ parts in one ratio and $4$ in the other; the least common multiple is $20$. Multiply the first ratio by $4$: $a:b = 8:20$. Multiply the second by $5$: $b:c = 20:15$. With the $b$ parts matching, the chains join: $a:b:c = 8:20:15$. Check forward: $8:20 = 2:5$ ✓ and $20:15 = 4:3$ ✓. (The choice $2:5:3$ glues the two ratios together with no rescaling at all; the choice $8:20:3$ rescales the first ratio but forgets to rescale the second, leaving $c$ at the $3$ it had when $b$ was only $4$ parts; the choice $15:20:8$ is the chain written backwards.)',
    },
    {
      q: 'If $x:y = 5:2$ and $y:z = 3:7$, what is $x:y:z$?',
      choices: ['$5:2:7$', '$15:6:7$', '$15:6:14$', '$14:6:15$'],
      answer: 2,
      solution:
        'The shared quantity $y$ is $2$ parts in one ratio and $3$ in the other; the least common multiple is $6$. Multiply the first ratio by $3$: $x:y = 15:6$. Multiply the second by $2$: $y:z = 6:14$. Joining gives $x:y:z = 15:6:14$. Check forward: $15:6 = 5:2$ ✓ and $6:14 = 3:7$ ✓. (The choice $5:2:7$ glues the ratios without rescaling at all; the choice $15:6:7$ rescales the first ratio but leaves $z$ at $7$, forgetting that doubling $y$ from $3$ to $6$ must double $z$ as well; the choice $14:6:15$ reverses the chain.)',
    },
    {
      q: 'If $p:q = 4:3$ and $q:r = 9:5$, what is $p:q:r$?',
      choices: ['$4:3:5$', '$4:9:5$', '$5:9:12$', '$12:9:5$'],
      answer: 3,
      solution:
        'The shared quantity $q$ is $3$ parts in one ratio and $9$ in the other; the least common multiple is $9$. Multiply the first ratio by $3$: $p:q = 12:9$. The second already has $q = 9$, so it stays $9:5$. Joining gives $p:q:r = 12:9:5$. Check forward: $12:9 = 4:3$ ✓ and $9:5$ ✓. (The choice $4:3:5$ glues the ratios without rescaling at all; the choice $4:9:5$ raises $q$ from $3$ to $9$ but leaves $p$ at $4$, which breaks the first ratio — whatever you multiply $q$ by, $p$ gets the same treatment; the choice $5:9:12$ is the chain backwards.)',
    },
  ],
  // p8 — a recipe where the CHANGED ingredient is the second one named
  [
    {
      q: 'A recipe uses oats and honey in the ratio $7:3$. If the honey is increased by $20$ grams, the ratio becomes $7:8$. How many grams of oats does the original recipe use?',
      choices: ['$28$', '$12$', '$32$', '$40$'],
      answer: 0,
      solution:
        'Let the original recipe use $7x$ grams of oats and $3x$ grams of honey; only the honey changes. Then $\\frac{7x}{3x+20} = \\frac{7}{8}$, so $8(7x) = 7(3x + 20)$, giving $56x = 21x + 140$, so $35x = 140$ and $x = 4$. The original recipe uses $7 \\times 4 = 28$ grams of oats. Check forward: $28$ grams of oats against $12 + 20 = 32$ grams of honey, and $28:32 = 7:8$. ✓ (The choice $12$ is the original honey — the other ingredient; the choice $32$ is the honey after the increase; the choice $40$ is the original recipe’s total weight.)',
    },
    {
      q: 'A smoothie recipe uses yogurt and berries in the ratio $5:4$. If the berries are increased by $14$ grams, the ratio becomes $5:6$. How many grams of yogurt does the original recipe use?',
      choices: ['$28$', '$35$', '$42$', '$63$'],
      answer: 1,
      solution:
        'Let the original recipe use $5x$ grams of yogurt and $4x$ grams of berries; only the berries change. Then $\\frac{5x}{4x+14} = \\frac{5}{6}$, so $6(5x) = 5(4x + 14)$, giving $30x = 20x + 70$, so $x = 7$. The original recipe uses $5 \\times 7 = 35$ grams of yogurt. Check forward: $35$ grams of yogurt against $28 + 14 = 42$ grams of berries, and $35:42 = 5:6$. ✓ (The choice $28$ is the original berries; the choice $42$ is the berries after the increase; the choice $63$ is the original recipe’s total weight.)',
    },
    {
      q: 'A tea blend uses green leaves and dried petals in the ratio $9:4$. If the petals are increased by $18$ grams, the ratio becomes $3:2$. How many grams of dried petals does the original blend use?',
      choices: ['$81$', '$54$', '$117$', '$36$'],
      answer: 3,
      solution:
        'Let the original blend use $9x$ grams of leaves and $4x$ grams of petals; only the petals change. Then $\\frac{9x}{4x+18} = \\frac{3}{2}$, so $2(9x) = 3(4x + 18)$, giving $18x = 12x + 54$, so $6x = 54$ and $x = 9$. The original blend uses $4 \\times 9 = 36$ grams of petals. Check forward: $81$ grams of leaves against $36 + 18 = 54$ grams of petals, and $81:54 = 3:2$. ✓ (The choice $81$ is the green leaves — the ingredient that never changed, but not the one asked for; the choice $54$ is the petals after the increase; the choice $117$ is the original blend’s total weight.)',
    },
  ],
  // p9 — ages: both people age, and the new ratio pins down the multiplier
  [
    {
      q: 'An aunt and her nephew have ages in the ratio $7:2$. In $4$ years, the ratio of their ages will be $3:1$. How old is the nephew now?',
      choices: ['$16$', '$56$', '$20$', '$8$'],
      answer: 0,
      solution:
        'Now: ages $7x$ and $2x$. In $4$ years: $\\frac{7x+4}{2x+4} = \\frac{3}{1}$, so $7x + 4 = 3(2x + 4) = 6x + 12$, giving $x = 8$. The nephew is $2 \\times 8 = 16$ now. Check forward: in $4$ years they will be $60$ and $20$, and $60:20 = 3:1$. ✓ (The choice $56$ is the aunt’s age — the other person; the choice $20$ is the nephew’s age in $4$ years, not now; the choice $8$ stops at the multiplier $x$.)',
    },
    {
      q: 'Two sisters have ages in the ratio $5:2$. In $8$ years, the ratio of their ages will be $3:2$. How old is the older sister now?',
      choices: ['$4$', '$18$', '$10$', '$2$'],
      answer: 2,
      solution:
        'Now: ages $5x$ and $2x$. In $8$ years: $\\frac{5x+8}{2x+8} = \\frac{3}{2}$, so $2(5x + 8) = 3(2x + 8)$, giving $10x + 16 = 6x + 24$, so $4x = 8$ and $x = 2$. The older sister is $5 \\times 2 = 10$ now. Check forward: in $8$ years they will be $18$ and $12$, and $18:12 = 3:2$. ✓ (The choice $4$ is the younger sister’s age; the choice $18$ is the older sister’s age in $8$ years, not now; the choice $2$ is the multiplier $x$.)',
    },
    {
      q: 'An older brother and his sister have ages in the ratio $5:3$. In $4$ years, the ratio of their ages will be $3:2$. How old is the sister now?',
      choices: ['$20$', '$16$', '$32$', '$12$'],
      answer: 3,
      solution:
        'Now: ages $5x$ and $3x$. In $4$ years: $\\frac{5x+4}{3x+4} = \\frac{3}{2}$, so $2(5x + 4) = 3(3x + 4)$, giving $10x + 8 = 9x + 12$ and $x = 4$. The sister is $3 \\times 4 = 12$ now. Check forward: in $4$ years they will be $24$ and $16$, and $24:16 = 3:2$. ✓ (The choice $20$ is the brother’s age; the choice $16$ is the sister’s age in $4$ years; the choice $32$ is the sum of their ages today, a different question.)',
    },
  ],
  // p10 — a transfer moves money out of one share and into the other
  [
    {
      q: 'Priya and Ravi have money in the ratio $3:5$. If Ravi gives Priya $\\$8$, the ratio becomes $5:7$. How much money do the two of them have altogether?',
      choices: ['$\\$192$', '$\\$120$', '$\\$72$', '$\\$200$'],
      answer: 0,
      solution:
        'Let them start with $3x$ and $5x$. A transfer changes both: $\\frac{3x+8}{5x-8} = \\frac{5}{7}$, so $7(3x + 8) = 5(5x - 8)$, giving $21x + 56 = 25x - 40$, so $4x = 96$ and $x = 24$. They have $\\$72$ and $\\$120$, for $\\$192$ altogether. Check forward: $72 + 8 = 80$ and $120 - 8 = 112$, and $80:112 = 5:7$. ✓ (The choices $\\$72$ and $\\$120$ are the individual amounts; the choice $\\$200$ adds the transferred $\\$8$ to the total, but money moving between two people never changes what they have between them.)',
    },
    {
      q: 'Two brothers have savings in the ratio $4:1$. If the older brother gives the younger $\\$9$, the ratio becomes $5:2$. How much do the two brothers have altogether?',
      choices: ['$\\$84$', '$\\$105$', '$\\$21$', '$\\$96$'],
      answer: 1,
      solution:
        'Let them start with $4x$ and $x$. The transfer changes both: $\\frac{4x-9}{x+9} = \\frac{5}{2}$, so $2(4x - 9) = 5(x + 9)$, giving $8x - 18 = 5x + 45$, so $3x = 63$ and $x = 21$. They have $\\$84$ and $\\$21$, for $\\$105$ altogether. Check forward: $84 - 9 = 75$ and $21 + 9 = 30$, and $75:30 = 5:2$. ✓ (The choices $\\$84$ and $\\$21$ are the separate savings; the choice $\\$96$ subtracts the transferred $\\$9$ from the total, but a transfer leaves the combined total untouched.)',
    },
    {
      q: 'Two wallets hold cash in the ratio $7:3$. If $\\$8$ is moved from the first wallet into the second, the ratio becomes $3:2$. How much cash was in the first wallet before the move?',
      choices: ['$\\$24$', '$\\$48$', '$\\$80$', '$\\$56$'],
      answer: 3,
      solution:
        'Let the wallets hold $7x$ and $3x$. Moving cash changes both: $\\frac{7x-8}{3x+8} = \\frac{3}{2}$, so $2(7x - 8) = 3(3x + 8)$, giving $14x - 16 = 9x + 24$, so $5x = 40$ and $x = 8$. The first wallet held $7 \\times 8 = \\$56$ before the move. Check forward: $56 - 8 = 48$ and $24 + 8 = 32$, and $48:32 = 3:2$. ✓ (The choice $\\$24$ is the second wallet; the choice $\\$48$ is the first wallet AFTER the move, when the question asks for before; the choice $\\$80$ is the combined total of both wallets.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 6,
  sections: { '6.1': s61, '6.2': s62 },
}
