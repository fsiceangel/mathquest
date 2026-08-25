// Prealgebra chapter 1 — variations for sections 1.2-1.4.
// All problems and solutions are original MathQuest content.

const s12 = [
  // p1 — identify the commutative property of addition
  [
    {
      q: 'Rosa writes $26 + 41 = 41 + 26$. Which property is she using?',
      choices: [
        'Associative property of addition',
        'Commutative property of addition',
        'Identity property of addition',
        'Distributive property',
      ],
      answer: 1,
      solution:
        'Rosa kept the same two numbers and only swapped their places. Swapping the order of two numbers being added is the commutative property. The associative property would regroup three numbers, and the identity property is about adding $0$.',
    },
    {
      q: 'Which equation does NOT show the commutative property of addition?',
      choices: [
        '$13 + 9 = 9 + 13$',
        '$5 + 44 = 44 + 5$',
        '$(6 + 2) + 8 = 6 + (2 + 8)$',
        '$100 + 7 = 7 + 100$',
      ],
      answer: 2,
      solution:
        'Three of these swap two numbers, which is exactly the commutative property. The odd one out keeps all three numbers in the same order and only moves the parentheses — that is the associative property.',
    },
    {
      q: 'The commutative property lets you rewrite $58 + 37$ as which of these?',
      choices: ['$58 - 37$', '$5 + 8 + 3 + 7$', '$37 - 58$', '$37 + 58$'],
      answer: 3,
      solution:
        'Commutative means the two numbers trade places while the operation stays addition: $58 + 37 = 37 + 58$. Changing the $+$ to a $-$ changes the problem, and splitting the digits apart changes the numbers themselves.',
    },
  ],
  // p2 — zero is the identity for addition
  [
    {
      q: 'What is $0 + 4{,}071$?',
      choices: ['$4{,}071$', '$0$', '$4{,}072$', '$40{,}710$'],
      answer: 0,
      solution:
        'Adding $0$ leaves a number exactly as it was: $0 + 4{,}071 = 4{,}071$. Zero is the identity for addition — the number keeps its identity.',
    },
    {
      q: 'What number goes in the blank? $\\square + 0 = 683$',
      choices: ['$0$', '$683$', '$684$', '$6830$'],
      answer: 1,
      solution:
        'Adding $0$ changes nothing, so whatever went into the blank came back out unchanged. The blank must be $683$.',
    },
    {
      q: 'A number-line walk starts at $349$ and takes a step of size $0$. Where does it end?',
      choices: ['$0$', '$350$', '$348$', '$349$'],
      answer: 3,
      solution:
        'A step of size $0$ is no step at all: $349 + 0 = 349$. You end exactly where you started, which is what makes $0$ the identity for addition.',
    },
  ],
  // p3 — reorder to find a friendly pair
  [
    {
      q: 'Compute $48 + 63 + 52$.',
      choices: ['$163$', '$153$', '$173$', '$158$'],
      answer: 0,
      solution:
        'Hunt for the pair that makes a round number: $48 + 52 = 100$. The commutative property lets you move the $52$ next to the $48$, and then $100 + 63 = 163$.',
    },
    {
      q: 'Compute $86 + 55 + 14$.',
      choices: ['$145$', '$165$', '$155$', '$150$'],
      answer: 2,
      solution:
        'The ends are friendly: $86 + 14 = 100$. Swap so they meet, then add what is left: $100 + 55 = 155$.',
    },
    {
      q: 'Compute $63 + 88 + 37$.',
      choices: ['$168$', '$178$', '$198$', '$188$'],
      answer: 3,
      solution:
        'Look past the middle number: $63 + 37 = 100$. Reorder to $63 + 37 + 88$, group the friendly pair, and finish with $100 + 88 = 188$.',
    },
  ],
  // p4 — two friendly pairs in a four-term sum
  [
    {
      q: 'Compute $34 + 46 + 6 + 4$.',
      choices: ['$90$', '$80$', '$100$', '$86$'],
      answer: 0,
      solution:
        'Two pairs round off nicely: $34 + 6 = 40$ and $46 + 4 = 50$. Reorder and regroup, then add the two round numbers: $40 + 50 = 90$.',
    },
    {
      q: 'Compute $19 + 45 + 5 + 11$.',
      choices: ['$70$', '$80$', '$90$', '$75$'],
      answer: 1,
      solution:
        'Pair the ones that finish each other off: $19 + 11 = 30$ and $45 + 5 = 50$. Then $30 + 50 = 80$.',
    },
    {
      q: 'You want to compute $58 + 26 + 4 + 12$ by making two round numbers. Which two pairs should you make?',
      choices: [
        '$58 + 26$ and $4 + 12$',
        '$58 + 4$ and $26 + 12$',
        '$58 + 12$ and $26 + 4$',
        '$58 + 26 + 4$ and $12$',
      ],
      answer: 2,
      solution:
        'You are looking for pairs whose ones digits add to $10$. Here $58 + 12 = 70$ and $26 + 4 = 30$, both round. Then $70 + 30 = 100$. The other pairings leave you with awkward numbers like $84$ or $62$.',
    },
  ],
  // p5 — missing addend
  [
    {
      q: 'What number goes in the blank? $67 + \\square = 124$',
      choices: ['$57$', '$47$', '$67$', '$191$'],
      answer: 0,
      solution:
        'Count up from $67$ in easy hops: $67$ to $100$ is $33$, and $100$ to $124$ is $24$. The hop is $33 + 24 = 57$. Check: $67 + 57 = 124$. ✓',
    },
    {
      q: 'What number goes in the blank? $\\square + 84 = 131$',
      choices: ['$57$', '$47$', '$37$', '$215$'],
      answer: 1,
      solution:
        'The blank is whatever gets you from $84$ up to $131$. From $84$ to $100$ is $16$, and $100$ to $131$ is $31$, so the blank is $16 + 31 = 47$. Check: $47 + 84 = 131$. ✓',
    },
    {
      q: 'A book has $214$ pages, and Devi has read $138$ of them. How many pages are left?',
      choices: ['$86$', '$66$', '$352$', '$76$'],
      answer: 3,
      solution:
        'The pages read plus the pages left make the whole book, so you need the blank in $138 + \\square = 214$. Count up: $138$ to $200$ is $62$, then $200$ to $214$ is $14$. That gives $62 + 14 = 76$ pages left. Check: $138 + 76 = 214$. ✓',
    },
  ],
  // p6 — round up, then compensate
  [
    {
      q: 'To compute $398 + 45$, Leo first computes $400 + 45 = 445$. What should he do next?',
      choices: [
        'Subtract $2$ to get $443$',
        'Add $2$ to get $447$',
        'Nothing — the answer is $445$',
        'Subtract $45$',
      ],
      answer: 0,
      solution:
        'Leo used $400$ in place of $398$, so he added $2$ more than he should have. His total is $2$ too big, and he takes that $2$ back: $398 + 45 = 445 - 2 = 443$.',
    },
    {
      q: 'Priya computes $57 + 96$ by first finding $57 + 100 = 157$. What is $57 + 96$?',
      choices: ['$157$', '$153$', '$161$', '$151$'],
      answer: 1,
      solution:
        'She replaced $96$ with $100$, which is $4$ too much, so her running total is $4$ too big. Give the $4$ back: $157 - 4 = 153$.',
    },
    {
      q: 'Sam wants to compute $77 + 298$ using a round number. Which plan works?',
      choices: [
        'Compute $77 + 300$, then add $2$',
        'Compute $80 + 298$, then add $3$',
        'Compute $77 + 300$, then subtract $2$',
        'Compute $77 + 300$, then subtract $3$',
      ],
      answer: 2,
      solution:
        'Rounding $298$ up to $300$ adds $2$ that does not belong, so the fix is to subtract that same $2$: $377 - 2 = 375$. Whenever you round a number UP to make it friendly, you take the extra back at the end — and the amount you take back has to match the amount you added.',
    },
  ],
  // p7 — sum of a run of consecutive numbers by pairing the ends
  [
    {
      q: 'Compute $1 + 2 + 3 + \\cdots + 30$.',
      choices: ['$450$', '$465$', '$480$', '$930$'],
      answer: 1,
      solution:
        'Pair the ends: $1 + 30 = 31$, $2 + 29 = 31$, and so on. The $30$ numbers form $15$ pairs, each summing to $31$, so the total is $15 \\times 31 = 465$.',
    },
    {
      q: 'Compute $1 + 2 + 3 + \\cdots + 16$.',
      choices: ['$120$', '$128$', '$136$', '$272$'],
      answer: 2,
      solution:
        'Pair the ends: $1 + 16 = 17$, $2 + 15 = 17$, and so on down to $8 + 9 = 17$. That is $8$ pairs of $17$, so the sum is $8 \\times 17 = 136$.',
    },
    {
      q: 'Compute $11 + 12 + 13 + \\cdots + 20$.',
      choices: ['$150$', '$165$', '$145$', '$155$'],
      answer: 3,
      solution:
        'The pairing trick does not care where the run starts. Pair the ends: $11 + 20 = 31$, $12 + 19 = 31$, $13 + 18 = 31$, $14 + 17 = 31$, $15 + 16 = 31$. Five pairs of $31$ give $5 \\times 31 = 155$.',
    },
  ],
  // p8 — treat a known sum as a single chunk
  [
    {
      q: 'If $m + n = 58$ and $m + n + p = 91$, what is $p$?',
      choices: ['$33$', '$149$', '$43$', '$23$'],
      answer: 0,
      solution:
        'You never need to know $m$ and $n$ separately. Regroup: $m + n + p = (m + n) + p = 58 + p$. Since $58 + p = 91$, count up from $58$ to $91$, which is $33$. So $p = 33$.',
    },
    {
      q: 'If $x + y + z = 84$ and $z = 29$, what is $x + y$?',
      choices: ['$113$', '$45$', '$55$', '$65$'],
      answer: 2,
      solution:
        'Regroup the sum as $(x + y) + z$, so $(x + y) + 29 = 84$. Now you are looking for the missing addend: count up from $29$ to $84$, which is $55$. So $x + y = 55$.',
    },
    {
      q: 'If $p + q = 25$, what is $p + q + p + q + 10$?',
      choices: ['$35$', '$50$', '$70$', '$60$'],
      answer: 3,
      solution:
        'Reorder so the two copies of the known chunk stand together: $(p + q) + (p + q) + 10$. Each chunk is $25$, so the total is $25 + 25 + 10 = 60$. Treating $p + q$ as one object is the whole trick.',
    },
  ],
  // p9 — a run balanced around its middle
  [
    {
      q: 'Compute $47 + 48 + 49 + 50 + 51 + 52 + 53$.',
      choices: ['$350$', '$300$', '$343$', '$400$'],
      answer: 0,
      solution:
        'These numbers balance around $50$: $47 + 53 = 100$, $48 + 52 = 100$, $49 + 51 = 100$, and $50$ sits alone in the middle. That is $3 \\times 100 + 50 = 350$. Another view: seven numbers averaging $50$ give $7 \\times 50 = 350$.',
    },
    {
      q: 'Compute $195 + 196 + 197 + 198 + 199 + 200 + 201 + 202 + 203 + 204 + 205$.',
      choices: ['$2000$', '$2200$', '$2205$', '$2420$'],
      answer: 1,
      solution:
        'Every number is a small step away from $200$, and the steps cancel in pairs: $195 + 205 = 400$, $196 + 204 = 400$, and so on, with $200$ left in the middle. There are $11$ numbers averaging $200$, so the sum is $11 \\times 200 = 2200$.',
    },
    {
      q: 'Compute $28 + 29 + 30 + 31 + 32 + 33$.',
      choices: ['$180$', '$186$', '$190$', '$183$'],
      answer: 3,
      solution:
        'This run has an even count, so there is no lonely middle number — every number gets a partner. Pair the ends: $28 + 33 = 61$, $29 + 32 = 61$, $30 + 31 = 61$. Three pairs of $61$ give $3 \\times 61 = 183$.',
    },
  ],
  // p10 — sum of a run of odd (or even) numbers
  [
    {
      q: 'What is the sum of the first eight odd numbers, $1 + 3 + 5 + \\cdots + 15$?',
      choices: ['$64$', '$72$', '$56$', '$81$'],
      answer: 0,
      solution:
        'Pair the ends: $1 + 15 = 16$, $3 + 13 = 16$, $5 + 11 = 16$, $7 + 9 = 16$. Four pairs of $16$ make $4 \\times 16 = 64$. Notice the pattern: the sum of the first $n$ odd numbers is $n \\times n$, and here $8 \\times 8 = 64$.',
    },
    {
      q: 'What is the sum of the first twelve odd numbers, $1 + 3 + 5 + \\cdots + 23$?',
      choices: ['$121$', '$144$', '$132$', '$169$'],
      answer: 1,
      solution:
        'Pair the ends: $1 + 23 = 24$, $3 + 21 = 24$, and so on. Twelve numbers make six pairs, each worth $24$, so the sum is $6 \\times 24 = 144$. That matches the square pattern too: $12 \\times 12 = 144$.',
    },
    {
      q: 'What is the sum of the first ten even numbers, $2 + 4 + 6 + \\cdots + 20$?',
      choices: ['$100$', '$90$', '$110$', '$210$'],
      answer: 2,
      solution:
        'Pair the ends just as with the odd numbers: $2 + 20 = 22$, $4 + 18 = 22$, $6 + 16 = 22$, $8 + 14 = 22$, $10 + 12 = 22$. Five pairs of $22$ give $5 \\times 22 = 110$. Evens do not follow the perfect-square pattern — each even number is one bigger than the odd number below it, and ten extra ones turn $100$ into $110$.',
    },
  ],
]

const s13 = [
  // p1 — identify the commutative property of multiplication
  [
    {
      q: 'Which equation does NOT show the commutative property of multiplication?',
      choices: [
        '$3 \\times (5 \\times 2) = (3 \\times 5) \\times 2$',
        '$12 \\times 7 = 7 \\times 12$',
        '$6 \\times 25 = 25 \\times 6$',
        '$1 \\times 8 = 8 \\times 1$',
      ],
      answer: 0,
      solution:
        'Three of these keep the same two factors and simply swap them, which is the commutative property. The first one has three factors in the same order and only moves the parentheses — that is the associative property, about grouping rather than order.',
    },
    {
      q: 'Nina rewrites $8 \\times 47 \\times 5$ as $8 \\times 5 \\times 47$. Which property lets her do that?',
      choices: [
        'Associative property of multiplication',
        'Identity property of multiplication',
        'Commutative property of multiplication',
        'Distributive property',
      ],
      answer: 2,
      solution:
        'Nina moved the $5$ past the $47$, changing the ORDER of the factors. Changing order is the commutative property. (The associative property is what she will use next, when she groups $8 \\times 5$ to get $40 \\times 47$.)',
    },
    {
      q: 'The commutative property of multiplication says $a \\times b = b \\times a$. Which statement is the picture version of this rule?',
      choices: [
        'A row of $6$ dots repeated $6$ times holds $36$ dots',
        'Multiplying any number by $1$ leaves it unchanged',
        'You may multiply the first two factors before the third',
        'A grid with $4$ rows of $9$ dots holds the same number of dots as a grid with $9$ rows of $4$ dots',
      ],
      answer: 3,
      solution:
        'Turning a grid sideways swaps the roles of "rows" and "dots per row" without adding or removing a single dot. That is exactly $4 \\times 9 = 9 \\times 4$. The other statements describe a square, the identity property, and the associative property.',
    },
  ],
  // p2 — one is the identity for multiplication
  [
    {
      q: 'What is $1 \\times 3{,}409$?',
      choices: ['$0$', '$3{,}409$', '$3{,}410$', '$34{,}090$'],
      answer: 1,
      solution:
        'One group of $3{,}409$ is just $3{,}409$. Multiplying by $1$ never changes a number, which is why $1$ is the identity for multiplication.',
    },
    {
      q: 'What number goes in the blank? $56 \\times \\square = 56$',
      choices: ['$0$', '$56$', '$1$', '$112$'],
      answer: 2,
      solution:
        'The product came out exactly equal to the number you started with, so the blank has to be the factor that changes nothing: $1$. Careful — $0$ would wipe the number out, giving $0$ instead.',
    },
    {
      q: 'Multiplying by which number leaves every number unchanged?',
      choices: ['$0$', '$10$', '$-1$', '$1$'],
      answer: 3,
      solution:
        'Only $1$ works for every number: $a \\times 1 = a$ always. Multiplying by $0$ turns everything into $0$, multiplying by $10$ shifts every number up, and multiplying by $-1$ flips the sign.',
    },
  ],
  // p3 — zero wipes out a product
  [
    {
      q: 'What is $0 \\times 1{,}286$?',
      choices: ['$0$', '$1{,}286$', '$1$', '$12{,}860$'],
      answer: 0,
      solution:
        'Zero groups of $1{,}286$ is nothing at all: $0 \\times 1{,}286 = 0$. It does not matter how big the other factor is.',
    },
    {
      q: 'Compute $7 \\times 5 \\times 0 \\times 9$.',
      choices: ['$315$', '$0$', '$21$', '$1$'],
      answer: 1,
      solution:
        'You may group factors however you like, so grab the $0$ first. Once any factor is $0$, the whole product is $0$ — the $7$, the $5$, and the $9$ never get a chance to matter.',
    },
    {
      q: 'What number goes in the blank? $\\square \\times 638 = 0$',
      choices: ['$638$', '$1$', 'No number works', '$0$'],
      answer: 3,
      solution:
        'A product of two nonzero numbers is never $0$, so the only way to land on $0$ here is to put $0$ in the blank. And it does work: $0 \\times 638 = 0$.',
    },
  ],
  // p4 — pair factors that make ten
  [
    {
      q: 'Compute $5 \\times 47 \\times 2$.',
      choices: ['$470$', '$4700$', '$235$', '$94$'],
      answer: 0,
      solution:
        'Do not start with $5 \\times 47$. Swap so the friendly factors meet: $5 \\times 2 = 10$. Then $10 \\times 47 = 470$.',
    },
    {
      q: 'Compute $50 \\times 17 \\times 2$.',
      choices: ['$170$', '$1700$', '$17{,}000$', '$850$'],
      answer: 1,
      solution:
        'Reorder to bring $50$ and $2$ together: $50 \\times 2 = 100$. Then $100 \\times 17 = 1700$.',
    },
    {
      q: 'To compute $2 \\times 79 \\times 5$ quickly, which pair should you multiply first?',
      choices: ['$2$ and $79$', '$79$ and $5$', '$2$ and $5$', 'It does not matter — no pair helps'],
      answer: 2,
      solution:
        'You want a pair whose product is round. Here $2 \\times 5 = 10$, and multiplying $79$ by $10$ is instant: $790$. The other pairs give $158$ and $395$, which leave you doing real work.',
    },
  ],
  // p5 — regroup to build 100 or 1000
  [
    {
      q: 'Compute $25 \\times 7 \\times 4$.',
      choices: ['$175$', '$700$', '$7000$', '$625$'],
      answer: 1,
      solution:
        'The $25$ and the $4$ are made for each other: $25 \\times 4 = 100$. Swap the $7$ out of the way, then $100 \\times 7 = 700$.',
    },
    {
      q: 'Compute $8 \\times 13 \\times 125$.',
      choices: ['$1300$', '$10{,}400$', '$13{,}000$', '$130{,}000$'],
      answer: 2,
      solution:
        'Just as $4$ and $25$ make $100$, the pair $8$ and $125$ makes $1000$. Regroup: $(8 \\times 125) \\times 13 = 1000 \\times 13 = 13{,}000$.',
    },
    {
      q: 'Compute $20 \\times 36 \\times 5$.',
      choices: ['$360$', '$720$', '$36{,}000$', '$3600$'],
      answer: 3,
      solution:
        'Bring the round-makers together: $20 \\times 5 = 100$. Then $100 \\times 36 = 3600$.',
    },
  ],
  // p6 — distribute over a near-round factor
  [
    {
      q: 'Compute $7 \\times 99$.',
      choices: ['$693$', '$707$', '$630$', '$603$'],
      answer: 0,
      solution:
        'Write $99$ as $100 - 1$ and distribute: $7 \\times 99 = 7 \\times 100 - 7 \\times 1 = 700 - 7 = 693$. The piece you subtract is $7$ copies of $1$, not a single $1$.',
    },
    {
      q: 'Compute $5 \\times 98$.',
      choices: ['$500$', '$480$', '$490$', '$510$'],
      answer: 2,
      solution:
        'Write $98$ as $100 - 2$: $5 \\times 98 = 5 \\times 100 - 5 \\times 2 = 500 - 10 = 490$. You take away $5$ twos, which is $10$ — not just $2$.',
    },
    {
      q: 'Compute $6 \\times 102$.',
      choices: ['$588$', '$602$', '$600$', '$612$'],
      answer: 3,
      solution:
        'This time the friendly number is BELOW the real one, so you add instead of subtract: $102 = 100 + 2$, and $6 \\times 102 = 600 + 6 \\times 2 = 600 + 12 = 612$. The extra piece is $6$ twos, not a lone $2$.',
    },
  ],
  // p7 — adjust a known product by one group
  [
    {
      q: 'You know that $23 \\times 40 = 920$. What is $23 \\times 41$?',
      choices: ['$943$', '$960$', '$921$', '$963$'],
      answer: 0,
      solution:
        'Read $23 \\times 41$ as "$41$ groups of $23$", which is one more group of $23$ than $23 \\times 40$. So $23 \\times 41 = 920 + 23 = 943$. The extra group holds $23$, not $40$ and not $1$.',
    },
    {
      q: 'You know that $18 \\times 30 = 540$. What is $18 \\times 29$?',
      choices: ['$539$', '$522$', '$510$', '$558$'],
      answer: 1,
      solution:
        'Here you have one group FEWER, so take a whole group of $18$ away: $18 \\times 29 = 540 - 18 = 522$. Removing just $1$ would be the mistake to watch for.',
    },
    {
      q: 'You know that $36 \\times 25 = 900$. What is $38 \\times 25$?',
      choices: ['$902$', '$925$', '$1800$', '$950$'],
      answer: 3,
      solution:
        'Going from $36$ to $38$ adds TWO groups of $25$, so add $2 \\times 25 = 50$: the answer is $900 + 50 = 950$. Adding one group, or adding just $2$, are the two easy slips here.',
    },
  ],
  // p8 — pull out a common factor
  [
    {
      q: 'Compute $29 \\times 46 + 29 \\times 54$.',
      choices: ['$2900$', '$5800$', '$1450$', '$290$'],
      answer: 0,
      solution:
        'Both products are built from $29$, so run the distributive property backwards: $29 \\times 46 + 29 \\times 54 = 29 \\times (46 + 54) = 29 \\times 100 = 2900$. The $29$ is counted once, not twice — that is why the answer is not $58 \\times 100$.',
    },
    {
      q: 'Compute $45 \\times 88 + 45 \\times 12$.',
      choices: ['$450$', '$4500$', '$9000$', '$4400$'],
      answer: 1,
      solution:
        'Factor out the shared $45$: $45 \\times (88 + 12) = 45 \\times 100 = 4500$. Adding the two $45$s together would double the answer by mistake.',
    },
    {
      q: 'For which number $n$ is $63 \\times n + 63 \\times 35 = 6300$?',
      choices: ['$35$', '$100$', '$65$', '$63$'],
      answer: 2,
      solution:
        'Pull out the $63$ first: the left side is $63 \\times (n + 35)$. For that to equal $6300 = 63 \\times 100$, you need $n + 35 = 100$, so $n = 65$. Check: $63 \\times 65 + 63 \\times 35 = 63 \\times 100 = 6300$. ✓',
    },
  ],
  // p9 — split a factor to build two round numbers
  [
    {
      q: 'Compute $4 \\times 16 \\times 125$.',
      choices: ['$8000$', '$800$', '$80{,}000$', '$6400$'],
      answer: 0,
      solution:
        'The $125$ is begging for an $8$, and the $16$ can supply one: $16 = 2 \\times 8$. Regroup as $(4 \\times 2) \\times (8 \\times 125) = 8 \\times 1000 = 8000$.',
    },
    {
      q: 'Compute $125 \\times 24 \\times 5$.',
      choices: ['$1500$', '$12{,}000$', '$15{,}000$', '$150{,}000$'],
      answer: 2,
      solution:
        'Break the $24$ apart to feed the $125$: $24 = 8 \\times 3$. Then $(125 \\times 8) \\times 3 \\times 5 = 1000 \\times 15 = 15{,}000$.',
    },
    {
      q: 'Compute $50 \\times 28 \\times 25$.',
      choices: ['$3500$', '$14{,}000$', '$70{,}000$', '$35{,}000$'],
      answer: 3,
      solution:
        'Split the $28$ into $4 \\times 7$ so the $25$ gets a partner: $25 \\times 4 = 100$. That leaves $50 \\times 100 \\times 7 = 5000 \\times 7 = 35{,}000$.',
    },
  ],
  // p10 — search the factor pairs
  [
    {
      q: 'Two whole numbers, each bigger than $1$, multiply to $36$. What is the largest their sum could be?',
      choices: ['$20$', '$15$', '$37$', '$12$'],
      answer: 0,
      solution:
        'List every pair with both factors above $1$: $2 \\times 18$, $3 \\times 12$, $4 \\times 9$, $6 \\times 6$. Their sums are $20$, $15$, $13$, and $12$. The lopsided pair wins, so the largest sum is $2 + 18 = 20$. ($1 \\times 36$ would give $37$, but $1$ is not allowed.)',
    },
    {
      q: 'Two whole numbers, each bigger than $1$, multiply to $40$. What is the smallest their sum could be?',
      choices: ['$14$', '$13$', '$22$', '$41$'],
      answer: 1,
      solution:
        'The pairs are $2 \\times 20$, $4 \\times 10$, and $5 \\times 8$, with sums $22$, $14$, and $13$. This time you want the pair whose factors are closest together, so the smallest sum is $5 + 8 = 13$.',
    },
    {
      q: 'Two whole numbers, each bigger than $1$, multiply to $30$. Which of these could NOT be their sum?',
      choices: ['$11$', '$13$', '$16$', '$17$'],
      answer: 2,
      solution:
        'List the pairs: $2 \\times 15$, $3 \\times 10$, $5 \\times 6$. The only sums available are $17$, $13$, and $11$. There is no pair of allowed factors adding to $16$, so $16$ is impossible.',
    },
  ],
]

const s14 = [
  // p1 — the opposite of a number
  [
    {
      q: 'What is the opposite of $-25$?',
      choices: ['$-25$', '$25$', '$-\\frac{1}{25}$', '$0$'],
      answer: 1,
      solution:
        'The opposite sits the same distance from $0$ on the other side of the number line. Starting at $-25$, that puts you at $25$. (The fraction $-\\frac{1}{25}$ is the reciprocal, which is a different idea entirely.)',
    },
    {
      q: 'Which number is the same distance from $0$ as $47$, but on the other side of the number line?',
      choices: ['$\\frac{1}{47}$', '$47$', '$-47$', '$-\\frac{1}{47}$'],
      answer: 2,
      solution:
        'Same distance, other side — that is the definition of the opposite, so the answer is $-47$. You can check it with the cancelling rule: $47 + (-47) = 0$.',
    },
    {
      q: 'The opposite of a number $n$ is $-8$. What is $n$?',
      choices: ['$-8$', '$\\frac{1}{8}$', '$0$', '$8$'],
      answer: 3,
      solution:
        'Being opposites works both ways: if the opposite of $n$ is $-8$, then $n$ is the opposite of $-8$, which is $8$. Check: $8 + (-8) = 0$. ✓',
    },
  ],
  // p2 — two negations cancel
  [
    {
      q: 'Simplify $-(-31)$.',
      choices: ['$31$', '$-31$', '$0$', '$-62$'],
      answer: 0,
      solution:
        'The inner part is $-31$, and the outer minus sign asks for its opposite. Flip to the other side of the number line and you land on $31$. Two flips always bring you home.',
    },
    {
      q: 'What number goes in the blank? $-(\\square) = 17$',
      choices: ['$17$', '$\\frac{1}{17}$', '$-17$', '$0$'],
      answer: 2,
      solution:
        'You need a number whose opposite is $17$. Since the opposite of $-17$ is $17$, the blank is $-17$. Putting $17$ in the blank would give $-17$, which is the wrong side.',
    },
    {
      q: 'Overnight the temperature changed by the opposite of the opposite of $-6$ degrees. What was the change?',
      choices: ['$6$', '$0$', '$12$', '$-6$'],
      answer: 3,
      solution:
        'Take it one flip at a time. The opposite of $-6$ is $6$. The opposite of $6$ is $-6$. Two negations undo each other, so the change is $-6$ degrees — the temperature dropped.',
    },
  ],
  // p3 — a number plus its opposite is zero
  [
    {
      q: 'What is $(-23) + 23$?',
      choices: ['$0$', '$46$', '$-46$', '$-1$'],
      answer: 0,
      solution:
        'These two are opposites, and opposites always cancel: $(-23) + 23 = 0$. Picture it as walking $23$ steps left and then $23$ steps right — you are back at the start.',
    },
    {
      q: 'What number added to $84$ gives $0$?',
      choices: ['$84$', '$-84$', '$0$', '$\\frac{1}{84}$'],
      answer: 1,
      solution:
        'The number that cancels $84$ is its opposite, $-84$, since $84 + (-84) = 0$. Adding $0$ would leave you at $84$, and adding $84$ would take you to $168$.',
    },
    {
      q: 'Compute $19 + (-7) + (-19)$.',
      choices: ['$45$', '$31$', '$-31$', '$-7$'],
      answer: 3,
      solution:
        'Reorder so the opposites meet: $19 + (-19) + (-7)$. The first two cancel to $0$, leaving $0 + (-7) = -7$. Spotting the cancelling pair saves you from doing any real arithmetic.',
    },
  ],
  // p4 — one negative factor
  [
    {
      q: 'Compute $7 \\times (-9)$.',
      choices: ['$-63$', '$63$', '$-16$', '$-2$'],
      answer: 0,
      solution:
        'There is exactly one negative factor, so the sign flips once and the product is negative. The sizes give $7 \\times 9 = 63$, so the answer is $-63$.',
    },
    {
      q: 'Compute $(-5) \\times 12$.',
      choices: ['$60$', '$-7$', '$-60$', '$-17$'],
      answer: 2,
      solution:
        'One negative factor means one sign flip, so the answer is negative. Multiply the sizes: $5 \\times 12 = 60$, giving $-60$. (Watch out for adding instead of multiplying.)',
    },
    {
      q: 'What number times $8$ gives $-56$?',
      choices: ['$7$', '$-48$', '$48$', '$-7$'],
      answer: 3,
      solution:
        'The sizes must satisfy $\\square \\times 8 = 56$, so the size is $7$. The product came out negative while the $8$ is positive, so the missing factor supplies the flip: it is $-7$. Check: $(-7) \\times 8 = -56$. ✓',
    },
  ],
  // p5 — two negative factors
  [
    {
      q: 'Compute $(-9) \\times (-6)$.',
      choices: ['$54$', '$-54$', '$-15$', '$15$'],
      answer: 0,
      solution:
        'Two negative factors means two sign flips, and two flips cancel, so the product is positive. The sizes give $9 \\times 6 = 54$.',
    },
    {
      q: 'Compute $(-12) \\times (-5)$.',
      choices: ['$-60$', '$60$', '$-17$', '$17$'],
      answer: 1,
      solution:
        'Think of it as $(-1) \\times 12 \\times (-1) \\times 5$. The two factors of $-1$ multiply to $+1$ and disappear, leaving $12 \\times 5 = 60$.',
    },
    {
      q: 'What number times $-4$ gives $28$?',
      choices: ['$7$', '$-24$', '$-7$', '$24$'],
      answer: 2,
      solution:
        'The sizes give $\\square \\times 4 = 28$, so the size is $7$. The product is positive but one factor is already negative, so the missing factor must be negative too — two flips are needed to get back to positive. The answer is $-7$, and $(-7) \\times (-4) = 28$. ✓',
    },
  ],
  // p6 — count the negation signs
  [
    {
      q: 'Simplify $-(-(-13))$.',
      choices: ['$-13$', '$13$', '$0$', '$-39$'],
      answer: 0,
      solution:
        'Count the flips instead of unwrapping one at a time: there are three negation signs, and three is odd, so you end up on the negative side. The size stays $13$, so the answer is $-13$.',
    },
    {
      q: 'Simplify $-(-(-(-7)))$.',
      choices: ['$-7$', '$0$', '$7$', '$-28$'],
      answer: 2,
      solution:
        'There are four negation signs. Flips cancel in pairs, and four is even, so every flip is undone and you land back on $7$.',
    },
    {
      q: 'The expression $-(-(-(-(-9))))$ has five negation signs. What does it equal?',
      choices: ['$9$', '$-45$', '$45$', '$-9$'],
      answer: 3,
      solution:
        'Pair up the flips: four of the five cancel in two pairs, leaving one lonely flip. An odd number of negations gives a negative result, so the answer is $-9$. The signs never multiply the size — they only choose the side.',
    },
  ],
  // p7 — products of many factors of -1
  [
    {
      q: 'What is $(-1) \\times (-1) \\times (-1) \\times (-1)$?',
      choices: ['$1$', '$-1$', '$4$', '$-4$'],
      answer: 0,
      solution:
        'Four factors of $-1$: the flips pair off, and four is even, so the sign ends up positive. All the sizes are $1$, so the product is $1$. (These factors multiply, so the count never becomes the answer.)',
    },
    {
      q: 'Several factors of $-1$ are multiplied together and the product is $1$. Which of these could be the number of factors?',
      choices: ['$3$', '$8$', '$5$', '$9$'],
      answer: 1,
      solution:
        'Each factor of $-1$ flips the sign once, and the flips cancel in pairs. To land on $+1$ every flip must have a partner, so the count must be even. Of the choices, only $8$ is even.',
    },
    {
      q: 'What is $(-1) \\times (-1) \\times 6 \\times (-1)$?',
      choices: ['$6$', '$-3$', '$3$', '$-6$'],
      answer: 3,
      solution:
        'Count the negative factors: there are three, an odd number, so the product is negative. The sizes multiply to $1 \\times 1 \\times 6 \\times 1 = 6$, so the answer is $-6$.',
    },
  ],
  // p8 — sign and size of a longer product
  [
    {
      q: 'Compute $(-5) \\times 2 \\times (-3)$.',
      choices: ['$-30$', '$30$', '$-10$', '$10$'],
      answer: 1,
      solution:
        'Handle the sign and the size separately. There are two negative factors, an even count, so the product is positive. The sizes give $5 \\times 2 \\times 3 = 30$, so the answer is $30$.',
    },
    {
      q: 'Compute $(-4) \\times (-1) \\times 5 \\times (-2)$.',
      choices: ['$40$', '$-12$', '$-40$', '$12$'],
      answer: 2,
      solution:
        'Count the negatives: $-4$, $-1$, and $-2$ make three, an odd number, so the product is negative. The sizes give $4 \\times 1 \\times 5 \\times 2 = 40$, so the answer is $-40$.',
    },
    {
      q: 'Compute $(-2) \\times (-2) \\times (-2) \\times (-2) \\times 3$.',
      choices: ['$-48$', '$-24$', '$24$', '$48$'],
      answer: 3,
      solution:
        'Four negative factors is an even count, so the flips all cancel and the product is positive. The sizes give $2 \\times 2 \\times 2 \\times 2 = 16$, and then $16 \\times 3 = 48$.',
    },
  ],
  // p9 — reason about the sign without computing
  [
    {
      q: 'Nine negative numbers are multiplied together. What can you say about the product?',
      choices: ['It is positive', 'It is negative', 'It is zero', 'It could be positive or negative'],
      answer: 1,
      solution:
        'Each negative factor flips the sign once. Nine flips cancel in four pairs and leave one flip over, so the product ends up negative — no matter what the nine numbers actually are.',
    },
    {
      q: 'Five negative numbers and the number $0$ are all multiplied together. What is the product?',
      choices: ['Positive', 'Negative', 'Zero', 'It could be either sign'],
      answer: 2,
      solution:
        'Counting flips only matters once you know the size is not $0$. Here one factor IS $0$, and any product containing a factor of $0$ equals $0$. Zero has no sign to flip, so the five negatives change nothing.',
    },
    {
      q: 'The product of four numbers is negative. How many of the four numbers are negative?',
      choices: ['$0$ or $2$', 'Exactly $4$', 'Exactly $2$', '$1$ or $3$'],
      answer: 3,
      solution:
        'A negative product needs an odd number of sign flips. Out of four factors, the odd counts available are $1$ and $3$. An even count — $0$, $2$, or $4$ negatives — would give a positive product instead.',
    },
  ],
  // p10 — order of operations with negatives
  [
    {
      q: 'Compute $(-3) + (-3) \\times (-3)$.',
      choices: ['$6$', '$18$', '$-6$', '$12$'],
      answer: 0,
      solution:
        'Multiplication comes before addition, so do $(-3) \\times (-3)$ first: two negatives give $9$. Then $(-3) + 9 = 6$. Working left to right would give $(-6) \\times (-3) = 18$, which is the trap.',
    },
    {
      q: 'Compute $5 \\times (-2) + 4$.',
      choices: ['$10$', '$-6$', '$-14$', '$6$'],
      answer: 1,
      solution:
        'Multiply first: $5 \\times (-2) = -10$. Then add the $4$: $-10 + 4 = -6$. Adding $4$ to a number that is $10$ below zero moves you up to $6$ below zero.',
    },
    {
      q: 'Compute $(-4) + (-4) \\times 0$.',
      choices: ['$0$', '$-8$', '$-4$', '$4$'],
      answer: 2,
      solution:
        'The $\\times 0$ only wipes out the piece it touches. Multiply first: $(-4) \\times 0 = 0$. Then $(-4) + 0 = -4$. Adding the two $-4$s first and then multiplying by $0$ would wrongly give $0$.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 1,
  sections: {
    '1.2': s12,
    '1.3': s13,
    '1.4': s14,
  },
}
