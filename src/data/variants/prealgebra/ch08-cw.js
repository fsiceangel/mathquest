// Prealgebra chapter 8 — variations for the chapter challenge and the chapter
// worksheet. All problems and solutions are original MathQuest content.

const challenge = [
  // 1. A percent with a friendly fraction twin, applied to a big number.
  [
    {
      q: 'What is $37.5\\%$ of $64$?',
      choices: ['$8$', '$16$', '$24$', '$40$'],
      answer: 2,
      solution: '$37.5\\% = \\frac{3}{8}$, since $\\frac{1}{8} = 12.5\\%$ and three of those make $37.5\\%$. One eighth of $64$ is $8$, so three eighths is $3 \\times 8 = 24$. (Stopping at one eighth gives $8$; rounding $37.5\\%$ down to $25\\%$ gives $16$; taking the leftover $62.5\\%$ instead gives $40$.)',
    },
    {
      q: 'What is $62.5\\%$ of $48$?',
      choices: ['$18$', '$30$', '$24$', '$6$'],
      answer: 1,
      solution: '$62.5\\% = \\frac{5}{8}$. One eighth of $48$ is $6$, so five eighths is $5 \\times 6 = 30$. (Taking the leftover $37.5\\% = \\frac{3}{8}$ gives $18$; treating $62.5\\%$ as half gives $24$; stopping at one eighth gives $6$.)',
    },
    {
      q: 'What is $87.5\\%$ of $72$?',
      choices: ['$9$', '$36$', '$54$', '$63$'],
      answer: 3,
      solution: '$87.5\\% = \\frac{7}{8}$, which is everything except one eighth. One eighth of $72$ is $9$, so $72 - 9 = 63$. (Reporting the missing eighth gives $9$; treating $87.5\\%$ as half gives $36$; rounding it down to $75\\% = \\frac{3}{4}$ gives $54$.)',
    },
  ],
  // 2. Given the part and the percent, find the whole.
  [
    {
      q: '$42$ is $35\\%$ of what number?',
      choices: ['$120$', '$14.7$', '$1.2$', '$77$'],
      answer: 0,
      solution: 'We need $0.35 \\times n = 42$, so $n = 42 \\div 0.35 = 120$. Check: $35\\%$ of $120$ is $0.35 \\times 120 = 42$. ✓ (Multiplying instead of dividing gives $42 \\times 0.35 = 14.7$, which is $35\\%$ OF $42$ — the wrong direction; dividing by $35$ instead of $0.35$ gives $1.2$; adding the $35$ as if it were a plain number gives $77$.)',
    },
    {
      q: '$51$ is $85\\%$ of what number?',
      choices: ['$43.35$', '$60$', '$0.6$', '$136$'],
      answer: 1,
      solution: 'We need $0.85 \\times n = 51$, so $n = 51 \\div 0.85 = 60$. Check: $85\\%$ of $60$ is $0.85 \\times 60 = 51$. ✓ Notice the answer must be BIGGER than $51$, since $51$ is only part of it. (Multiplying gives $0.85 \\times 51 = 43.35$; dividing by $85$ instead of $0.85$ gives $0.6$; adding gives $136$.)',
    },
    {
      q: '$91$ is $130\\%$ of what number?',
      choices: ['$118.3$', '$0.7$', '$221$', '$70$'],
      answer: 3,
      solution: 'Percents can pass $100$: here $91$ is MORE than the whole, so the answer must be smaller than $91$. From $1.3 \\times n = 91$ we get $n = 91 \\div 1.3 = 70$. Check: $1.3 \\times 70 = 91$. ✓ (Multiplying gives $1.3 \\times 91 = 118.3$, which is bigger than $91$ and so cannot be right; dividing by $130$ gives $0.7$; adding gives $221$.)',
    },
  ],
  // 3. Two discounts in a row, each with its own base.
  [
    {
      q: 'An $\\$80$ jacket is marked $30\\%$ off. At the register a coupon takes an extra $20\\%$ off the sale price. What do you pay?',
      choices: ['$\\$44.80$', '$\\$40.00$', '$\\$56.00$', '$\\$64.00$'],
      answer: 0,
      solution: 'Apply the multipliers one after the other: $0.7 \\times 80 = 56$, then $0.8 \\times 56 = 44.80$, so $\\$44.80$. (Adding the discounts into one $50\\%$ off gives $\\$40$, which is too cheap — the coupon works on the already-reduced $\\$56$, not on the original $\\$80$; $\\$56$ forgets the coupon and $\\$64$ forgets the first markdown.)',
    },
    {
      q: 'A $\\$200$ bike is marked $15\\%$ off, and a member card takes another $10\\%$ off the sale price. What do you pay?',
      choices: ['$\\$150.00$', '$\\$180.00$', '$\\$153.00$', '$\\$170.00$'],
      answer: 2,
      solution: 'First markdown: $0.85 \\times 200 = 170$. Then the card acts on that $\\$170$: $0.9 \\times 170 = 153$, so $\\$153$. (Adding to $25\\%$ off gives $\\$150$; $\\$170$ stops after the first discount; $\\$180$ applies only the $10\\%$.)',
    },
    {
      q: 'A $\\$60$ hoodie is marked $40\\%$ off, and a store coupon takes an extra $25\\%$ off the sale price. What do you pay?',
      choices: ['$\\$21.00$', '$\\$36.00$', '$\\$45.00$', '$\\$27.00$'],
      answer: 3,
      solution: 'The multipliers stack: $0.6 \\times 60 = 36$, then $0.75 \\times 36 = 27$, so $\\$27$. (Adding the discounts into one $65\\%$ off gives $0.35 \\times 60 = \\$21$; $\\$36$ stops after the markdown; $\\$45$ uses only the coupon.)',
    },
  ],
  // 4. A score as a percent, with the question aimed at the complement.
  [
    {
      q: 'Ben scored $85\\%$ on a $60$-question test. How many questions did he get WRONG?',
      choices: ['$25$', '$9$', '$51$', '$15$'],
      answer: 1,
      solution: 'He missed $100\\% - 85\\% = 15\\%$ of the questions, and $0.15 \\times 60 = 9$. Check: $0.85 \\times 60 = 51$ right, and $60 - 51 = 9$. ✓ (Subtracting the raw numbers, $85 - 60$, gives $25$ — but a percent and a question count cannot be subtracted from each other; $51$ is how many he got RIGHT; $15$ is the percent missed, not the number missed.)',
    },
    {
      q: 'Dara scored $92\\%$ on a $25$-question quiz. How many questions did she MISS?',
      choices: ['$2$', '$23$', '$8$', '$67$'],
      answer: 0,
      solution: 'She missed $100\\% - 92\\% = 8\\%$, and $0.08 \\times 25 = 2$ questions. Check: $0.92 \\times 25 = 23$ correct, and $25 - 23 = 2$. ✓ ($23$ is the number she got right; $8$ is the percent missed rather than the count; subtracting $92 - 25$ gives $67$, which is not even possible on a $25$-question quiz.)',
    },
    {
      q: 'Ravi got $6$ questions wrong on a $50$-question test. What percent did he get RIGHT?',
      choices: ['$94\\%$', '$12\\%$', '$88\\%$', '$6\\%$'],
      answer: 2,
      solution: 'He got $50 - 6 = 44$ right, so his score is $\\frac{44}{50} = \\frac{88}{100} = 88\\%$. (Subtracting the $6$ from $100$ gives $94\\%$, but $6$ is a count of questions, not a percent — on a $50$-question test each question is worth $2\\%$; $12\\%$ is the percent he got wrong; $6\\%$ just repeats the count.)',
    },
  ],
  // 5. Two changes in a row, running the chain backwards to the original.
  [
    {
      q: 'A number is increased by $30\\%$, and the result is then decreased by $30\\%$, giving $182$. What was the original number?',
      choices: ['$140$', '$182$', '$260$', '$200$'],
      answer: 3,
      solution: 'Up $30\\%$ multiplies by $1.3$; down $30\\%$ KEEPS $70\\%$, so it multiplies by $0.7$. Together: $1.3 \\times 0.7 = 0.91$ — the pair does not cancel. So $0.91 \\times n = 182$, giving $n = 182 \\div 0.91 = 200$. Check: $200 \\to 260 \\to 182$. ✓ (Assuming the two changes cancel reports the given $182$; undoing only the increase gives $182 \\div 1.3 = 140$; undoing only the decrease gives $182 \\div 0.7 = 260$.)',
    },
    {
      q: 'A number is decreased by $40\\%$, and the result is then increased by $50\\%$, giving $54$. What was the original number?',
      choices: ['$36$', '$60$', '$90$', '$48.6$'],
      answer: 1,
      solution: 'Down $40\\%$ keeps $60\\%$, so multiply by $0.6$; up $50\\%$ multiplies by $1.5$. Together $0.6 \\times 1.5 = 0.9$, so $0.9 \\times n = 54$ and $n = 54 \\div 0.9 = 60$. Check: $60 \\to 36 \\to 54$. ✓ (Undoing only the increase gives $54 \\div 1.5 = 36$; undoing only the decrease gives $54 \\div 0.6 = 90$; multiplying by $0.9$ instead of dividing gives $48.6$.)',
    },
    {
      q: 'A price rises by $10\\%$, then falls by $30\\%$, ending at $\\$154$. What was the original price?',
      choices: ['$\\$200.00$', '$\\$140.00$', '$\\$192.50$', '$\\$220.00$'],
      answer: 0,
      solution: 'The combined multiplier is $1.1 \\times 0.7 = 0.77$, so $0.77 \\times p = 154$ and $p = 154 \\div 0.77 = 200$, or $\\$200$. Check: $200 \\to 220 \\to 154$. ✓ (Adding the percents to get a net $20\\%$ drop gives $154 \\div 0.8 = \\$192.50$ — percent changes never add, because the second one acts on a different base; undoing only the rise gives $\\$140$ and undoing only the fall gives $\\$220$.)',
    },
  ],
  // 6. Comparing two stores where the bigger discount is on the bigger price.
  [
    {
      q: 'Shop A sells a kite for $\\$40$ with $25\\%$ off. Shop B sells the same kite for $\\$36$ with $15\\%$ off. Which shop is cheaper, and by how much?',
      choices: ['Shop B, by $\\$0.60$', 'Shop A, by $\\$0.60$', 'Shop A, by $\\$4.00$', 'They cost the same'],
      answer: 1,
      solution: 'Work out both final prices. Shop A: $0.75 \\times 40 = 30$. Shop B: $0.85 \\times 36 = 30.60$. Shop A wins by $30.60 - 30 = 0.60$, so $\\$0.60$. (Guessing that the lower sticker price wins gives Shop B; $\\$4.00$ is just the gap between the two sticker prices, before either discount; the prices are close but not equal.)',
    },
    {
      q: 'Store A sells a tent for $\\$90$ with $30\\%$ off. Store B sells it for $\\$75$ with $15\\%$ off. Which store is cheaper, and by how much?',
      choices: ['Store B, by $\\$0.75$', 'They cost the same', 'Store A, by $\\$0.75$', 'Store B, by $\\$15.00$'],
      answer: 2,
      solution: 'Store A: $0.7 \\times 90 = 63$. Store B: $0.85 \\times 75 = 63.75$. Store A is cheaper by $63.75 - 63 = 0.75$, so $\\$0.75$. A bigger percent off a bigger price can still win. (Assuming the cheaper sticker wins gives Store B; $\\$15$ is the sticker-price gap, which ignores both discounts.)',
    },
    {
      q: 'Market A sells a lamp for $\\$50$ with $40\\%$ off. Market B sells it for $\\$36$ with $20\\%$ off. Which market is cheaper, and by how much?',
      choices: ['Market A, by $\\$1.20$', 'Market B, by $\\$14.00$', 'They cost the same', 'Market B, by $\\$1.20$'],
      answer: 3,
      solution: 'Market A: $0.6 \\times 50 = 30$. Market B: $0.8 \\times 36 = 28.80$. This time the SMALLER discount wins: Market B is cheaper by $30 - 28.80 = 1.20$, so $\\$1.20$. (Assuming the bigger percent off always wins gives Market A; $\\$14$ is the sticker-price gap with no discounts applied.)',
    },
  ],
  // 7. Swapping the percent and the number it acts on.
  [
    {
      q: 'Which is bigger: $16\\%$ of $75$, or $75\\%$ of $16$?',
      choices: ['They are equal — both are $12$', '$16\\%$ of $75$ is bigger', '$75\\%$ of $16$ is bigger', 'They are equal — both are $120$'],
      answer: 0,
      solution: 'Both are $\\frac{16 \\times 75}{100} = 12$, so they are equal. In general $a\\%$ of $b$ equals $b\\%$ of $a$, because multiplication can be done in either order — and $75\\%$ of $16$ is the easy one to see: three quarters of $16$ is $12$. (Assuming the bigger percent or the bigger number wins picks one of the middle two; slipping the decimal point one place gives $120$.)',
    },
    {
      q: 'Without a calculator, decide which is bigger: $8\\%$ of $250$, or $25\\%$ of $80$.',
      choices: ['$8\\%$ of $250$ is bigger', 'They are equal — both are $20$', '$25\\%$ of $80$ is bigger', 'They are equal — both are $200$'],
      answer: 1,
      solution: 'Swap the roles: $8\\%$ of $250$ is $\\frac{8 \\times 250}{100} = 20$, and $25\\%$ of $80$ is a quarter of $80$, also $20$. They tie. (Assuming the bigger starting number wins picks the first; assuming the bigger percent wins picks the third; forgetting to divide by $100$ once gives $200$.)',
    },
    {
      q: 'Which is bigger: $40\\%$ of $120$, or $120\\%$ of $40$?',
      choices: ['$120\\%$ of $40$ is bigger, since $120\\%$ is more than all of it', '$40\\%$ of $120$ is bigger', 'They are equal — both are $48$', 'They are equal — both are $480$'],
      answer: 2,
      solution: 'The swap works even when a percent is over $100$: both equal $\\frac{40 \\times 120}{100} = 48$. Sanity check the second one: $120\\%$ of $40$ is $40 + 8 = 48$. ✓ (Arguing from "$120\\%$ is more than $100\\%$" ignores that it acts on the much smaller number $40$; dropping one factor of $10$ from the division gives $480$.)',
    },
  ],
  // 8. Undoing tax or a tip that is already baked into the total.
  [
    {
      q: 'With $5\\%$ sales tax included, a board game costs $\\$63$. What was the price before tax?',
      choices: ['$\\$59.85$', '$\\$66.15$', '$\\$60.00$', '$\\$58.00$'],
      answer: 2,
      solution: 'With tax you pay $105\\%$ of the shelf price, so $1.05 \\times p = 63$ and $p = 63 \\div 1.05 = 60$, or $\\$60$. Check: $5\\%$ of $60$ is $3$, and $60 + 3 = 63$. ✓ (Taking $5\\%$ OFF the total gives $\\$59.85$, but that $5\\%$ is measured from the wrong base; adding another $5\\%$ gives $\\$66.15$; subtracting $\\$5$ as if the rate were dollars gives $\\$58$.)',
    },
    {
      q: 'With $4\\%$ sales tax included, a desk lamp costs $\\$78$. What was the price before tax?',
      choices: ['$\\$75.00$', '$\\$74.88$', '$\\$81.12$', '$\\$74.00$'],
      answer: 0,
      solution: 'The total is $104\\%$ of the shelf price: $1.04 \\times p = 78$, so $p = 78 \\div 1.04 = 75$, or $\\$75$. Check: $4\\%$ of $75$ is $3$, and $75 + 3 = 78$. ✓ (Taking $4\\%$ off $\\$78$ gives $\\$74.88$ — the wrong base; adding $4\\%$ gives $\\$81.12$; treating the $4\\%$ as $\\$4$ gives $\\$74$.)',
    },
    {
      q: 'A dinner bill with a $20\\%$ tip already added came to $\\$96$. What was the bill before the tip?',
      choices: ['$\\$115.20$', '$\\$76.80$', '$\\$76.00$', '$\\$80.00$'],
      answer: 3,
      solution: 'Bill plus tip is $120\\%$ of the bill: $1.2 \\times b = 96$, so $b = 96 \\div 1.2 = 80$, or $\\$80$. Check: $20\\%$ of $80$ is $16$, and $80 + 16 = 96$. ✓ (Taking $20\\%$ off $\\$96$ gives $\\$76.80$, which measures the tip from the total instead of the bill; adding $20\\%$ gives $\\$115.20$; subtracting $\\$20$ gives $\\$76$.)',
    },
  ],
  // 9. Two subgroups of different sizes, each with its own rate.
  [
    {
      q: 'A club has $50$ members: $40\\%$ are sixth graders and the rest are seventh graders. If $75\\%$ of the sixth graders and $20\\%$ of the seventh graders ride the bus, what percent of the whole club rides the bus?',
      choices: ['$95\\%$', '$47.5\\%$', '$21\\%$', '$42\\%$'],
      answer: 3,
      solution: 'Count each group separately. Sixth graders: $0.4 \\times 50 = 20$, and $75\\%$ of them is $15$ riders. Seventh graders: $50 - 20 = 30$, and $20\\%$ of them is $6$ riders. Riders in all: $15 + 6 = 21$, so $\\frac{21}{50} = \\frac{42}{100} = 42\\%$. (Adding $75\\% + 20\\%$ gives $95\\%$ and averaging them gives $47.5\\%$ — both ignore that the groups are different sizes; $21\\%$ reports the head count instead of the percent.)',
    },
    {
      q: 'A scout troop has $200$ members: $30\\%$ joined this year and the rest are returning. If $50\\%$ of the new members and $20\\%$ of the returning members earned a hiking badge, what percent of the whole troop earned the badge?',
      choices: ['$29\\%$', '$70\\%$', '$35\\%$', '$58\\%$'],
      answer: 0,
      solution: 'New members: $0.3 \\times 200 = 60$, and half of them is $30$ badges. Returning members: $200 - 60 = 140$, and $20\\%$ of them is $28$ badges. Total: $30 + 28 = 58$, so $\\frac{58}{200} = \\frac{29}{100} = 29\\%$. (Adding the two rates gives $70\\%$; averaging them gives $35\\%$ — the returning group is more than twice as big, so it should count more; $58\\%$ reports the head count as if the troop had $100$ members.)',
    },
    {
      q: 'A library club has $150$ members: $40\\%$ are adults and the rest are children. If $25\\%$ of the adults and $60\\%$ of the children borrow e-books, what percent of the club borrows e-books?',
      choices: ['$85\\%$', '$46\\%$', '$42.5\\%$', '$69\\%$'],
      answer: 1,
      solution: 'Adults: $0.4 \\times 150 = 60$, and $25\\%$ of them is $15$ borrowers. Children: $150 - 60 = 90$, and $60\\%$ of them is $54$ borrowers. Together $15 + 54 = 69$, and $\\frac{69}{150} = \\frac{46}{100} = 46\\%$. (Adding the rates gives $85\\%$; averaging them gives $42.5\\%$; $69\\%$ reports the number of borrowers rather than their share.)',
    },
  ],
  // 10. Reversing a percent change — the return trip uses a different base.
  [
    {
      q: 'A price rises by $25\\%$. What percent decrease brings it back to the original price?',
      choices: ['$25\\%$', '$80\\%$', '$20\\%$', '$75\\%$'],
      answer: 2,
      solution: 'Try it on $\\$100$: up $25\\%$ makes $\\$125$. To get back we must drop $\\$25$ out of $\\$125$: $\\frac{25}{125} = \\frac{1}{5} = 20\\%$. (Dropping the same $25\\%$ measures from the wrong base and overshoots to $\\$93.75$; $80\\%$ is the MULTIPLIER $0.8$ misread as the size of the drop; $75\\%$ comes from $100 - 25$.)',
    },
    {
      q: 'A price falls by $20\\%$. What percent INCREASE brings it back to the original price?',
      choices: ['$20\\%$', '$25\\%$', '$125\\%$', '$80\\%$'],
      answer: 1,
      solution: 'Try it on $\\$100$: down $20\\%$ leaves $\\$80$. To climb back we must add $\\$20$ onto $\\$80$: $\\frac{20}{80} = \\frac{1}{4} = 25\\%$. The way back is always a bigger percent than the way down, because it starts from a smaller base. (Adding the same $20\\%$ only reaches $\\$96$; $125\\%$ is the multiplier $1.25$ misread as the increase; $80\\%$ is what remains after the fall.)',
    },
    {
      q: 'A price rises by $60\\%$. What percent decrease brings it back to the original price?',
      choices: ['$60\\%$', '$40\\%$', '$62.5\\%$', '$37.5\\%$'],
      answer: 3,
      solution: 'Try it on $\\$100$: up $60\\%$ makes $\\$160$. Coming back means removing $\\$60$ from $\\$160$: $\\frac{60}{160} = \\frac{3}{8} = 37.5\\%$. (Dropping $60\\%$ from $\\$160$ crashes to $\\$64$; $40\\%$ is $100 - 60$; $62.5\\%$ is the multiplier $0.625$ misread as the size of the drop.)',
    },
  ],
  // 11. Percent changes on two dimensions at once, so they multiply.
  [
    {
      q: "A rectangle's length is increased by $50\\%$ and its width is decreased by $30\\%$. What happens to its area?",
      choices: ['It stays the same', 'It goes up by $5\\%$', 'It goes up by $20\\%$', 'It goes down by $5\\%$'],
      answer: 1,
      solution: 'Area is length times width, so the two multipliers multiply: $1.5 \\times 0.7 = 1.05$. The new area is $105\\%$ of the old — a $5\\%$ increase. Check with a $10$ by $10$ rectangle: it becomes $15$ by $7$, and $105 > 100$. ✓ (Adding $+50\\%$ and $-30\\%$ gives $20\\%$; assuming an up-and-down pair cancels gives "stays the same"; $5\\%$ in the wrong direction gives the last choice.)',
    },
    {
      q: "A square's side length is increased by $10\\%$. What happens to its area?",
      choices: ['It goes up by $10\\%$', 'It goes up by $20\\%$', 'It goes up by $21\\%$', 'It goes up by $121\\%$'],
      answer: 2,
      solution: 'BOTH dimensions grow, so the area multiplier is $1.1 \\times 1.1 = 1.21$: the area is $121\\%$ of the old, an increase of $21\\%$. Check with a side of $10$: area $100$ becomes $11 \\times 11 = 121$. ✓ ($10\\%$ changes only one dimension; $20\\%$ adds the two $10\\%$ changes instead of multiplying them; $121\\%$ mistakes the multiplier $1.21$ for the size of the increase.)',
    },
    {
      q: "A rectangle's length is decreased by $40\\%$ and its width is increased by $30\\%$. What happens to its area?",
      choices: ['It goes down by $22\\%$', 'It goes down by $10\\%$', 'It goes up by $22\\%$', 'It stays the same'],
      answer: 0,
      solution: 'Multiply the multipliers: $0.6 \\times 1.3 = 0.78$, so the new area is $78\\%$ of the old — a $22\\%$ decrease. Check with a $10$ by $10$ rectangle: it becomes $6$ by $13$, an area of $78$ instead of $100$. ✓ (Adding $-40\\%$ and $+30\\%$ gives $10\\%$ down; "up by $22\\%$" has the right size but the wrong direction; assuming the changes cancel gives "stays the same".)',
    },
  ],
  // 12. Which number is the base — including answers past 100%.
  [
    {
      q: '$9$ is what percent of $6$?',
      choices: ['$150\\%$', '$66\\frac{2}{3}\\%$', '$50\\%$', '$3\\%$'],
      answer: 0,
      solution: 'The number after "of" is the base, so put $9$ over $6$: $\\frac{9}{6} = \\frac{3}{2} = 1.5 = 150\\%$. Since $9$ is bigger than $6$, the answer must be over $100\\%$. (Flipping the fraction gives $\\frac{6}{9} = 66\\frac{2}{3}\\%$, the answer to the reversed question; $50\\%$ reports only the extra, since $9$ is $50\\%$ MORE than $6$; $3\\%$ just repeats the difference $9 - 6$.)',
    },
    {
      q: '$36$ is what percent of $30$?',
      choices: ['$83\\frac{1}{3}\\%$', '$6\\%$', '$120\\%$', '$20\\%$'],
      answer: 2,
      solution: 'Part over base: $\\frac{36}{30} = \\frac{6}{5} = 1.2 = 120\\%$. (Flipping to $\\frac{30}{36} = 83\\frac{1}{3}\\%$ answers the reversed question; $20\\%$ is only the excess — $36$ is $20\\%$ more than $30$, which is not the same as being $20\\%$ of it; $6\\%$ just reports the difference $36 - 30$.)',
    },
    {
      q: '$7$ is what percent of $28$?',
      choices: ['$400\\%$', '$21\\%$', '$4\\%$', '$25\\%$'],
      answer: 3,
      solution: 'The base is the number after "of", so $\\frac{7}{28} = \\frac{1}{4} = 25\\%$. Since $7$ is smaller than $28$, the answer must be under $100\\%$ — a good check before you divide. (Flipping the fraction gives $\\frac{28}{7} = 4 = 400\\%$; reading that $4$ as a percent gives $4\\%$; $21\\%$ is just the difference $28 - 7$.)',
    },
  ],
]

const worksheet = [
  // 1. Turning a fraction into a percent.
  [
    {
      q: 'Write $\\frac{5}{8}$ as a percent.',
      answer: '$62.5\\%$',
      solution: 'Divide: $5 \\div 8 = 0.625$. Slide the decimal point two places right: $62.5\\%$. Check: $\\frac{5}{8}$ is a bit more than $\\frac{1}{2} = 50\\%$, and $62.5\\%$ fits. ✓',
    },
    {
      q: 'Write $\\frac{13}{25}$ as a percent.',
      answer: '$52\\%$',
      solution: 'A denominator of $25$ scales straight to $100$: multiply top and bottom by $4$ to get $\\frac{52}{100} = 52\\%$. Check: $0.52 \\times 25 = 13$. ✓',
    },
    {
      q: 'Write $\\frac{9}{16}$ as a percent.',
      answer: '$56.25\\%$',
      solution: 'Divide: $9 \\div 16 = 0.5625$. Slide two places right: $56.25\\%$. Check: $\\frac{9}{16}$ is just past $\\frac{8}{16} = \\frac{1}{2}$, so a percent just past $50\\%$ is right. ✓',
    },
  ],
  // 2. Taking a percent of a number.
  [
    {
      q: 'What is $45\\%$ of $60$?',
      answer: '$27$',
      solution: '$10\\%$ of $60$ is $6$, so $40\\%$ is $24$; $5\\%$ is half of $6$, which is $3$. Add: $24 + 3 = 27$. Or directly: $0.45 \\times 60 = 27$.',
    },
    {
      q: 'What is $15\\%$ of $140$?',
      answer: '$21$',
      solution: '$10\\%$ of $140$ is $14$ and $5\\%$ is $7$, so $15\\%$ is $14 + 7 = 21$. Or directly: $0.15 \\times 140 = 21$.',
    },
    {
      q: 'What is $120\\%$ of $45$?',
      answer: '$54$',
      solution: 'A percent over $100$ gives an answer bigger than the number you started with. $120\\% = 1.2$, so $1.2 \\times 45 = 54$. Or: all of $45$ plus $20\\%$ of it, which is $45 + 9 = 54$.',
    },
  ],
  // 3. One number as a percent of another.
  [
    {
      q: '$21$ is what percent of $35$?',
      answer: '$60\\%$',
      solution: 'Part over whole: $\\frac{21}{35}$. Divide top and bottom by $7$ to get $\\frac{3}{5}$, then scale to hundredths: $\\frac{60}{100} = 60\\%$.',
    },
    {
      q: '$18$ is what percent of $120$?',
      answer: '$15\\%$',
      solution: 'Part over whole: $\\frac{18}{120} = \\frac{3}{20}$. Multiply top and bottom by $5$: $\\frac{15}{100} = 15\\%$.',
    },
    {
      q: '$34$ is what percent of $40$?',
      answer: '$85\\%$',
      solution: 'Part over whole: $\\frac{34}{40} = \\frac{17}{20}$. Scale to hundredths by multiplying by $5$: $\\frac{85}{100} = 85\\%$.',
    },
  ],
  // 4. A discount, asked for as the price you actually pay.
  [
    {
      q: 'A $\\$28$ puzzle is on sale for $25\\%$ off. What is the sale price?',
      answer: '$\\$21$',
      solution: 'After $25\\%$ off you pay $75\\%$: $0.75 \\times 28 = 21$, so $\\$21$. Check: a quarter of $\\$28$ is $\\$7$, and $28 - 7 = 21$. ✓',
    },
    {
      q: 'A $\\$120$ scooter is on sale for $15\\%$ off. What is the sale price?',
      answer: '$\\$102$',
      solution: 'You pay $85\\%$: $0.85 \\times 120 = 102$, so $\\$102$. Check: $10\\%$ of $\\$120$ is $\\$12$ and $5\\%$ is $\\$6$, so the discount is $\\$18$, and $120 - 18 = 102$. ✓',
    },
    {
      q: 'A $\\$64$ pair of skates is on sale for $35\\%$ off. What is the sale price?',
      answer: '$\\$41.60$',
      solution: 'You pay $100\\% - 35\\% = 65\\%$: $0.65 \\times 64 = 41.60$, so $\\$41.60$. Check: the discount is $0.35 \\times 64 = 22.40$, and $64 - 22.40 = 41.60$. ✓',
    },
  ],
  // 5. Applying a percent change with a single multiplier.
  [
    {
      q: 'Increase $180$ by $25\\%$.',
      answer: '$225$',
      solution: 'Increasing by $25\\%$ means ending at $125\\%$: multiply by $1.25$. $1.25 \\times 180 = 225$. Or: a quarter of $180$ is $45$, and $180 + 45 = 225$.',
    },
    {
      q: 'Decrease $350$ by $12\\%$.',
      answer: '$308$',
      solution: 'Taking $12\\%$ away leaves $88\\%$: $0.88 \\times 350 = 308$. Check the long way: $12\\%$ of $350$ is $42$, and $350 - 42 = 308$. ✓',
    },
    {
      q: 'Increase $90$ by $140\\%$.',
      answer: '$216$',
      solution: 'An increase of $140\\%$ leaves you at $100\\% + 140\\% = 240\\%$, so multiply by $2.4$: $2.4 \\times 90 = 216$. Check: $140\\%$ of $90$ is $126$, and $90 + 126 = 216$. ✓ Do not multiply by $1.4$ — that would be a $40\\%$ increase.',
    },
  ],
  // 6. Given a percent and the part, find the whole.
  [
    {
      q: '$16\\%$ of a number is $40$. What is the number?',
      answer: '$250$',
      solution: 'From $0.16 \\times n = 40$, divide: $n = 40 \\div 0.16 = 250$. Check: $16\\%$ of $250$ is $0.16 \\times 250 = 40$. ✓',
    },
    {
      q: '$35\\%$ of a number is $84$. What is the number?',
      answer: '$240$',
      solution: 'From $0.35 \\times n = 84$, divide: $n = 84 \\div 0.35 = 240$. Check: $0.35 \\times 240 = 84$. ✓ The whole must be bigger than the part, so an answer under $84$ would be a warning sign.',
    },
    {
      q: '$150\\%$ of a number is $54$. What is the number?',
      answer: '$36$',
      solution: 'From $1.5 \\times n = 54$, divide: $n = 54 \\div 1.5 = 36$. Because the percent is over $100$, the answer is SMALLER than $54$. Check: $150\\%$ of $36$ is $36 + 18 = 54$. ✓',
    },
  ],
  // 7. Stripping out tax or a tip that is already in the total.
  [
    {
      q: 'With $7\\%$ sales tax included, a board game costs $\\$32.10$. What was its price before tax?',
      answer: '$\\$30$',
      solution: 'With tax you pay $107\\%$ of the shelf price: $1.07 \\times p = 32.10$, so $p = 32.10 \\div 1.07 = 30$, or $\\$30$. Check: $7\\%$ of $\\$30$ is $\\$2.10$, and $30 + 2.10 = 32.10$. ✓',
    },
    {
      q: 'With $5\\%$ sales tax included, a poster costs $\\$16.80$. What was its price before tax?',
      answer: '$\\$16$',
      solution: 'The total is $105\\%$ of the price: $1.05 \\times p = 16.80$, so $p = 16.80 \\div 1.05 = 16$, or $\\$16$. Check: $5\\%$ of $\\$16$ is $\\$0.80$, and $16 + 0.80 = 16.80$. ✓ Taking $5\\%$ off $\\$16.80$ would use the wrong base.',
    },
    {
      q: 'A lunch bill with a $15\\%$ tip already added came to $\\$46$. What was the bill before the tip?',
      answer: '$\\$40$',
      solution: 'Bill plus tip is $115\\%$ of the bill: $1.15 \\times b = 46$, so $b = 46 \\div 1.15 = 40$, or $\\$40$. Check: $15\\%$ of $\\$40$ is $\\$6$, and $40 + 6 = 46$. ✓',
    },
  ],
  // 8. Two changes in a row, reported as one overall change.
  [
    {
      q: 'A number is increased by $50\\%$, and then the result is decreased by $20\\%$. What is the overall percent change?',
      answer: 'An increase of $20\\%$',
      solution: 'Multiply the multipliers: $1.5 \\times 0.8 = 1.2$, so you finish at $120\\%$ of the start — a $20\\%$ increase. Check with $100$: $100 \\to 150 \\to 120$. ✓ Notice the two changes do NOT add to $30\\%$.',
    },
    {
      q: 'A number is decreased by $10\\%$, and then the result is increased by $10\\%$. What is the overall percent change?',
      answer: 'A decrease of $1\\%$',
      solution: 'Multiply: $0.9 \\times 1.1 = 0.99$, so you land at $99\\%$ of the start — $1\\%$ BELOW it, not back where you began. Check with $200$: $200 \\to 180 \\to 198$. ✓ The $10\\%$ climb acts on the smaller number $180$, so it adds back less than was taken away.',
    },
    {
      q: 'A price is increased by $20\\%$, and then the new price is increased by $20\\%$ again. What is the overall percent change?',
      answer: 'An increase of $44\\%$',
      solution: 'Multiply: $1.2 \\times 1.2 = 1.44$, which is $144\\%$ of the start — a $44\\%$ increase, not $40\\%$. Check with $\\$50$: $50 \\to 60 \\to 72$, and $\\frac{22}{50} = 44\\%$. ✓ The second rise also lifts the dollars the first rise added.',
    },
  ],
  // 9. A percent of a percent, counting heads at the end of the chain.
  [
    {
      q: 'A gym has $160$ members. $60\\%$ of them swim, and $25\\%$ of the swimmers also dive. How many members dive?',
      answer: '$24$ members',
      solution: 'Swimmers: $0.6 \\times 160 = 96$. Divers: $25\\%$ of those $96$, which is $0.25 \\times 96 = 24$. The $25\\%$ acts on the swimmers, not on the whole gym.',
    },
    {
      q: 'A bookshop has $400$ books. $35\\%$ of them are picture books, and $20\\%$ of the picture books are about animals. How many picture books about animals are there?',
      answer: '$28$ books',
      solution: 'Picture books: $0.35 \\times 400 = 140$. Animal ones: $0.2 \\times 140 = 28$. Chained percents multiply, each acting on its own base.',
    },
    {
      q: 'A festival sold $250$ tickets. $48\\%$ went to students, and $25\\%$ of the student tickets were half-price. How many half-price student tickets were sold?',
      answer: '$30$ tickets',
      solution: 'Student tickets: $0.48 \\times 250 = 120$. Half-price ones: $0.25 \\times 120 = 30$. Do not take $25\\%$ of all $250$ tickets — the quarter is a quarter of the student tickets only.',
    },
  ],
  // 10. Undoing a percent change to recover the original value.
  [
    {
      q: 'A bike lost $30\\%$ of its value and is now worth $\\$140$. What was it worth before?',
      answer: '$\\$200$',
      solution: 'Losing $30\\%$ leaves $70\\%$: $0.7 \\times p = 140$, so $p = 140 \\div 0.7 = 200$, or $\\$200$. Check: $30\\%$ of $\\$200$ is $\\$60$, and $200 - 60 = 140$. ✓',
    },
    {
      q: 'A phone lost $65\\%$ of its value and is now worth $\\$91$. What was it worth before?',
      answer: '$\\$260$',
      solution: 'Losing $65\\%$ leaves $35\\%$: $0.35 \\times p = 91$, so $p = 91 \\div 0.35 = 260$, or $\\$260$. Check: $65\\%$ of $\\$260$ is $\\$169$, and $260 - 169 = 91$. ✓',
    },
    {
      q: 'A savings account grew by $8\\%$ over the year and now holds $\\$486$. How much was in it at the start of the year?',
      answer: '$\\$450$',
      solution: 'Growing by $8\\%$ means the total is $108\\%$ of the start: $1.08 \\times s = 486$, so $s = 486 \\div 1.08 = 450$, or $\\$450$. Check: $8\\%$ of $\\$450$ is $\\$36$, and $450 + 36 = 486$. ✓ Taking $8\\%$ off $\\$486$ would measure from the wrong base.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 8,
  challenge,
  worksheet,
}
