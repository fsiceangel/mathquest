// Prealgebra chapter 6 — variations for the chapter challenge and the chapter
// worksheet. All problems and solutions are original MathQuest content.

const challenge = [
  // 1. A chain of decimal addends that hides two friendly pairs.
  [
    {
      q: 'Compute $2.7 + 0.45 + 5.3 + 0.55$.',
      choices: ['$8$', '$8.1$', '$8.45$', '$9$'],
      answer: 3,
      solution: 'Hunt for pairs that land on whole numbers: $2.7 + 5.3 = 8$ and $0.45 + 0.55 = 1$. Total: $8 + 1 = 9$. (Dropping the last addend gives $8.45$; adding $45$ and $55$ hundredths to get $100$ but writing it as $0.10$ instead of carrying a whole gives $8.1$; treating both hundredths pieces as too small to matter gives $8$.)',
    },
    {
      q: 'Compute $6.25 + 1.9 + 3.75 + 0.1$.',
      choices: ['$11.1$', '$12$', '$11.9$', '$11$'],
      answer: 1,
      solution: 'Reorder into friendly pairs: $6.25 + 3.75 = 10$ and $1.9 + 0.1 = 2$. Total: $10 + 2 = 12$. (Forgetting the $0.1$ gives $11.9$; adding $25$ and $75$ hundredths to $100$ but recording it as $9.1$ rather than carrying gives $11.1$; making $1.9 + 0.1$ come out as $1.0$ gives $11$.)',
    },
    {
      q: 'Four parcels weigh $8.4$ kg, $0.35$ kg, $1.6$ kg, and $0.65$ kg. What is their total weight, in kilograms?',
      choices: ['$10$', '$10.1$', '$11$', '$10.35$'],
      answer: 2,
      solution: 'Addition can be done in any order, so pair the friendly ones: $8.4 + 1.6 = 10$ and $0.35 + 0.65 = 1$. The total is $10 + 1 = 11$ kg. (Leaving out the $0.65$ kg parcel gives $10.35$; turning the $100$ hundredths into $0.10$ instead of a whole $1$ gives $10.1$; ignoring both small parcels gives $10$.)',
    },
  ],
  // 2. A decimal times a whole number, where the decimal is a neat unit fraction.
  [
    {
      q: 'Compute $0.375 \\times 40$.',
      choices: ['$1.5$', '$12$', '$15$', '$150$'],
      answer: 2,
      solution: 'Ignore the point: $375 \\times 40 = 15000$. The factors have $3$ decimal places in total, so count three spots in: $15.000 = 15$. Estimate check: $0.375$ is three eighths, and three eighths of $40$ is $15$. ✓ (Counting four decimal places gives $1.5$; counting two gives $150$; rounding $0.375$ down to $0.3$ gives $12$.)',
    },
    {
      q: 'Compute $0.625 \\times 48$.',
      choices: ['$3$', '$28.8$', '$300$', '$30$'],
      answer: 3,
      solution: 'Ignore the point: $625 \\times 48 = 30000$. With $3$ decimal places to place, that is $30.000 = 30$. Estimate check: $0.625$ is five eighths, and five eighths of $48$ is $5 \\times 6 = 30$. ✓ (Misplacing the point one spot each way gives $3$ or $300$; rounding $0.625$ to $0.6$ gives $28.8$.)',
    },
    {
      q: 'Compute $0.0625 \\times 320$.',
      choices: ['$20$', '$2$', '$19.2$', '$200$'],
      answer: 0,
      solution: 'Ignore the point: $625 \\times 320 = 200000$. The factors have $4$ decimal places, so count four spots in: $20.0000 = 20$. Estimate check: $0.0625$ is one sixteenth, and $320 \\div 16 = 20$. ✓ (Counting five decimal places gives $2$; counting three gives $200$; rounding $0.0625$ to $0.06$ gives $19.2$.)',
    },
  ],
  // 3. Dividing by a decimal — both points must move together.
  [
    {
      q: 'Compute $3.06 \\div 0.4$.',
      choices: ['$0.765$', '$7.65$', '$12.24$', '$76.5$'],
      answer: 1,
      solution: 'The divisor is not whole, so slide BOTH points one place right: $3.06 \\div 0.4 = 30.6 \\div 4 = 7.65$. Sense check: dividing by a number smaller than $1$ must make the answer bigger than $3.06$. ✓ (Sliding only the divisor gives $3.06 \\div 4 = 0.765$; sliding both two places gives $306 \\div 4 = 76.5$; multiplying by $4$ instead of dividing gives $12.24$.)',
    },
    {
      q: 'Compute $6.24 \\div 0.8$.',
      choices: ['$0.78$', '$4.992$', '$78$', '$7.8$'],
      answer: 3,
      solution: 'Slide both points one place right: $6.24 \\div 0.8 = 62.4 \\div 8 = 7.8$. Check by multiplying back: $7.8 \\times 0.8 = 6.24$. ✓ (Making the divisor whole but leaving the dividend alone gives $6.24 \\div 8 = 0.78$; sliding both two places gives $624 \\div 8 = 78$; multiplying by $0.8$ instead of dividing gives $4.992$.)',
    },
    {
      q: 'Compute $1.44 \\div 0.06$.',
      choices: ['$24$', '$0.24$', '$2.4$', '$240$'],
      answer: 0,
      solution: 'The divisor needs two slides to become whole, so the dividend gets two as well: $1.44 \\div 0.06 = 144 \\div 6 = 24$. Both numbers grew $100$ times, so the quotient is unchanged. (Sliding only the divisor gives $1.44 \\div 6 = 0.24$; sliding the divisor two places but the dividend only one gives $14.4 \\div 6 = 2.4$; giving the dividend three slides gives $1440 \\div 6 = 240$.)',
    },
  ],
  // 4. Rounding where the carry ripples through a run of nines.
  [
    {
      q: 'Round $0.7996$ to the nearest thousandth.',
      choices: ['$0.800$', '$0.799$', '$0.790$', '$0.810$'],
      answer: 0,
      solution: 'The thousandths digit is $9$ and the deciding digit next door is $6$. Since $6 \\ge 5$, round up — but $9$ thousandths plus $1$ makes $10$ thousandths, which carries into the hundredths: $0.799 + 0.001 = 0.800$. (Refusing to round up gives $0.799$; carrying a second time gives $0.810$; dropping the deciding digit and the $9$ together gives $0.790$.)',
    },
    {
      q: 'Round $12.997$ to the nearest hundredth.',
      choices: ['$12.99$', '$13.00$', '$12.90$', '$13.10$'],
      answer: 1,
      solution: 'The deciding digit is the thousandths digit, $7$, so the hundredths digit must go up. But $9$ hundredths plus $1$ is $10$ hundredths, which carries into the tenths — and that $9$ carries again into the ones: $12.99 + 0.01 = 13.00$. The trailing zeros stay, because they show which place we rounded to. (Rounding down gives $12.99$; carrying one extra time gives $13.10$; wiping out the hundredths digit gives $12.90$.)',
    },
    {
      q: 'Round $0.09951$ to the nearest thousandth.',
      choices: ['$0.099$', '$0.0995$', '$0.100$', '$0.110$'],
      answer: 2,
      solution: 'The thousandths digit is $9$, and the deciding digit just to its right is $5$, so round up: $0.099 + 0.001 = 0.100$. Distance settles it — $0.09951$ is $0.00049$ away from $0.100$ but $0.00051$ away from $0.099$. ($0.099$ is the round-down; $0.0995$ is rounded to the nearest ten-thousandth instead; $0.110$ comes from carrying twice.)',
    },
  ],
  // 5. The lower edge of a rounding interval, under round-half-up.
  [
    {
      q: 'Using the round-half-up convention, what is the smallest number that rounds to $4.3$ when rounded to the nearest tenth?',
      choices: ['$4.25$', '$4.2$', '$4.26$', '$4.35$'],
      answer: 0,
      solution: 'A number rounds to $4.3$ exactly when it is at least $4.25$ and less than $4.35$. Half-up sends the tie $4.25$ upward, so $4.25$ itself qualifies and is the smallest that does — anything below it, like $4.2499$, rounds to $4.2$. ($4.2$ rounds to $4.2$; $4.26$ does round to $4.3$ but is not the smallest; $4.35$ is the tie at the TOP, and half-up sends it to $4.4$.)',
    },
    {
      q: 'Using the round-half-up convention, what is the smallest number that rounds to $20$ when rounded to the nearest ten?',
      choices: ['$10$', '$16$', '$15$', '$25$'],
      answer: 2,
      solution: 'The numbers that round to $20$ are those from $15$ up to (but not including) $25$. The tie at $15$ rounds up under half-up, so $15$ is in — and it is the smallest, since $14.9$ rounds to $10$. ($10$ rounds to itself; $16$ rounds to $20$ but is not the smallest; $25$ is the tie at the top and rounds up to $30$.)',
    },
    {
      q: 'Using the round-half-up convention, what is the smallest number that rounds to $3.00$ when rounded to the nearest hundredth?',
      choices: ['$2.99$', '$2.996$', '$3.005$', '$2.995$'],
      answer: 3,
      solution: 'Rounding to the nearest hundredth means choosing between $2.99$ and $3.00$, and the halfway mark is $2.995$. Half-up sends that tie upward, so $2.995$ rounds to $3.00$ and nothing smaller does. ($2.99$ rounds to itself; $2.996$ does reach $3.00$ but is larger than $2.995$; $3.005$ is the tie one hundredth higher and rounds to $3.01$.)',
    },
  ],
  // 6. Building a denominator up to a power of ten.
  [
    {
      q: 'Write $\\frac{3}{32}$ as a decimal.',
      choices: ['$0.093$', '$0.09375$', '$0.332$', '$0.9375$'],
      answer: 1,
      solution: 'Since $32 \\times 3125 = 100000$, multiply top and bottom by $3125$: $\\frac{3}{32} = \\frac{9375}{100000} = 0.09375$. It terminates because $32 = 2 \\times 2 \\times 2 \\times 2 \\times 2$ is built only from $2$s. (Chopping the tail off gives $0.093$; forgetting the leading zero — that is, using $10000$ instead of $100000$ — gives $0.9375$; writing the digits $3$ and $32$ side by side gives $0.332$, but a fraction bar means division, not decoration.)',
    },
    {
      q: 'Write $\\frac{11}{80}$ as a decimal.',
      choices: ['$0.13$', '$0.118$', '$1.375$', '$0.1375$'],
      answer: 3,
      solution: 'Since $80 \\times 125 = 10000$, multiply top and bottom by $125$: $\\frac{11}{80} = \\frac{1375}{10000} = 0.1375$. Sense check: $\\frac{11}{80}$ is a bit more than $\\frac{10}{80} = 0.125$. ✓ (Stopping at hundredths gives $0.13$; counting only three decimal places gives $1.375$; gluing the digits $11$ and $80$ together gives $0.118$.)',
    },
    {
      q: 'Write $\\frac{9}{16}$ as a decimal.',
      choices: ['$0.56$', '$5.625$', '$0.5625$', '$0.916$'],
      answer: 2,
      solution: 'Since $16 \\times 625 = 10000$, multiply top and bottom by $625$: $\\frac{9}{16} = \\frac{5625}{10000} = 0.5625$. Sense check: $\\frac{9}{16}$ is just over $\\frac{8}{16} = 0.5$. ✓ (Stopping at hundredths gives $0.56$; counting three decimal places instead of four gives $5.625$; writing the digits $9$ and $16$ side by side gives $0.916$.)',
    },
  ],
  // 7. Terminate or repeat? — but only the REDUCED denominator gets a vote.
  [
    {
      q: 'Exactly one of these fractions has a decimal form that stops. Which one is it?',
      choices: ['$\\frac{9}{24}$', '$\\frac{7}{15}$', '$\\frac{4}{21}$', '$\\frac{10}{33}$'],
      answer: 0,
      solution: 'Reduce before judging! $\\frac{9}{24} = \\frac{3}{8}$, and $8 = 2 \\times 2 \\times 2$ is built only from $2$s, so it terminates as $0.375$. The others are already reduced, and $15 = 3 \\times 5$, $21 = 3 \\times 7$, and $33 = 3 \\times 11$ each smuggle in a prime other than $2$ or $5$, so all three repeat.',
    },
    {
      q: 'Which of these fractions can be written as a decimal that ends after finitely many digits?',
      choices: ['$\\frac{5}{22}$', '$\\frac{15}{24}$', '$\\frac{8}{18}$', '$\\frac{9}{21}$'],
      answer: 1,
      solution: 'Reduce first: $\\frac{15}{24} = \\frac{5}{8}$, whose denominator is all $2$s, so it terminates as $0.625$. Check the rest: $\\frac{5}{22}$ keeps the $11$, $\\frac{8}{18} = \\frac{4}{9}$ keeps the $3$s, and $\\frac{9}{21} = \\frac{3}{7}$ keeps the $7$ — every one of those repeats. Notice that $24$ looked hopeless before reducing, since $24 = 2 \\times 2 \\times 2 \\times 3$; the $3$ cancels away.',
    },
    {
      q: 'One of these fractions does NOT turn into a repeating decimal. Which one?',
      choices: ['$\\frac{7}{18}$', '$\\frac{5}{21}$', '$\\frac{13}{30}$', '$\\frac{27}{45}$'],
      answer: 3,
      solution: 'Reduce: $\\frac{27}{45} = \\frac{3}{5}$, since top and bottom share a factor of $9$. A lone $5$ on the bottom is fine, so it terminates as $0.6$. The others cannot escape their extra primes: $18 = 2 \\times 3 \\times 3$, $21 = 3 \\times 7$, and $30 = 2 \\times 3 \\times 5$ all keep a $3$, so all three repeat.',
    },
  ],
  // 8. Turning a two-digit repeating block back into a fraction.
  [
    {
      q: 'Write $0.\\overline{63}$ as a fraction in simplest form.',
      choices: ['$\\frac{7}{11}$', '$\\frac{63}{100}$', '$\\frac{63}{90}$', '$\\frac{63}{999}$'],
      answer: 0,
      solution: 'The block has TWO digits, so multiply by $100$: if $x = 0.6363\\ldots$, then $100x = 63.6363\\ldots$, and subtracting $x$ cancels the endless tails: $99x = 63$. So $x = \\frac{63}{99} = \\frac{7}{11}$ after dividing top and bottom by $9$. ($\\frac{63}{100} = 0.63$ stops, so it is a different number; $\\frac{63}{90}$ comes from subtracting $10x$ instead of $x$; $\\frac{63}{999}$ uses the $999$ that belongs to a THREE-digit block.)',
    },
    {
      q: 'Write $0.\\overline{27}$ as a fraction in simplest form.',
      choices: ['$\\frac{27}{100}$', '$\\frac{27}{90}$', '$\\frac{3}{11}$', '$\\frac{27}{999}$'],
      answer: 2,
      solution: 'Two repeating digits, so multiply by $100$: with $x = 0.2727\\ldots$, we get $100x = 27.2727\\ldots$ and $100x - x = 99x = 27$. So $x = \\frac{27}{99} = \\frac{3}{11}$ after dividing top and bottom by $9$. Check: $3 \\div 11 = 0.2727\\ldots$ ✓ ($\\frac{27}{100} = 0.27$ exactly, which stops; $\\frac{27}{90} = 0.3$ comes from subtracting $10x$ by mistake; $\\frac{27}{999}$ uses the $999$ that belongs to a THREE-digit block.)',
    },
    {
      q: 'Write $0.\\overline{72}$ as a fraction in simplest form.',
      choices: ['$\\frac{18}{25}$', '$\\frac{72}{90}$', '$\\frac{72}{999}$', '$\\frac{8}{11}$'],
      answer: 3,
      solution: 'Let $x = 0.7272\\ldots$ and multiply by $100$: $100x = 72.7272\\ldots$ Subtracting gives $99x = 72$, so $x = \\frac{72}{99} = \\frac{8}{11}$ after dividing top and bottom by $9$. ($\\frac{18}{25} = 0.72$ exactly, a decimal that stops; $\\frac{72}{90}$ comes from subtracting $10x$ instead of $x$; $\\frac{72}{999}$ uses the denominator for a three-digit block.)',
    },
  ],
  // 9. Ordering decimals that agree for the first few places.
  [
    {
      q: 'Which of these four numbers is the greatest?',
      choices: ['$0.45$', '$0.4\\overline{5}$', '$0.454$', '$0.\\overline{45}$'],
      answer: 1,
      solution: 'Write four digits of each: $0.45 = 0.4500$, $0.4\\overline{5} = 0.4555$, $0.454 = 0.4540$, and $0.\\overline{45} = 0.4545$. All four share $0.45$, so the thousandths place decides: $5 > 4 = 4 > 0$, and $0.4\\overline{5}$ takes the lead there and never gives it back. Watch where the bar sits — $0.4\\overline{5}$ repeats only the $5$, while $0.\\overline{45}$ cycles the pair.',
    },
    {
      q: 'Which of these numbers sits furthest to the RIGHT on the number line?',
      choices: ['$0.\\overline{71}$', '$0.717$', '$0.71\\overline{7}$', '$0.7\\overline{1}$'],
      answer: 2,
      solution: 'Write five digits of each: $0.\\overline{71} = 0.71717$, $0.717 = 0.71700$, $0.71\\overline{7} = 0.71777$, and $0.7\\overline{1} = 0.71111$. All start $0.71$, so look at the thousandths: three of them have a $7$ and $0.7\\overline{1}$ has a $1$, which knocks it out. Among the rest the ten-thousandths place decides: $0.71\\overline{7}$ has a $7$ there while the others have $1$ and $0$.',
    },
    {
      q: 'Which of these numbers sits furthest to the LEFT on the number line?',
      choices: ['$0.272$', '$0.27\\overline{2}$', '$0.\\overline{27}$', '$0.2\\overline{7}$'],
      answer: 0,
      solution: 'Write five digits of each: $0.272 = 0.27200$, $0.27\\overline{2} = 0.27222$, $0.\\overline{27} = 0.27272$, and $0.2\\overline{7} = 0.27777$. All four agree on $0.27$, and $0.2\\overline{7}$ pulls ahead at the thousandths with its $7$. The other three all show $2$ there, so the ten-thousandths place settles it: $0$ beats $2$ and $7$, so $0.272$ — the one that simply stops — sits furthest left.',
    },
  ],
  // 10. Multiplying by a decimal that is really a familiar fraction.
  [
    {
      q: 'Compute $9.6 \\times 0.75$.',
      choices: ['$0.72$', '$2.4$', '$7.2$', '$72$'],
      answer: 2,
      solution: 'Multiplying by $0.75$ is taking three quarters: $9.6 \\div 4 = 2.4$, and $3 \\times 2.4 = 7.2$. The digit method agrees: $96 \\times 75 = 7200$ with $1 + 2 = 3$ decimal places, giving $7.200 = 7.2$. (Taking only ONE quarter gives $2.4$; misplacing the point gives $0.72$ or $72$.)',
    },
    {
      q: 'Compute $6.4 \\times 0.125$.',
      choices: ['$0.08$', '$1.6$', '$8$', '$0.8$'],
      answer: 3,
      solution: 'Multiplying by $0.125$ is taking one eighth, so $6.4 \\div 8 = 0.8$. The digit method agrees: $64 \\times 125 = 8000$ with $1 + 3 = 4$ decimal places, giving $0.8000 = 0.8$. (Dividing by $4$ instead of $8$ gives $1.6$; counting three decimal places gives $8$, and counting five gives $0.08$.)',
    },
    {
      q: 'Compute $12.8 \\times 0.25$.',
      choices: ['$3.2$', '$0.32$', '$6.4$', '$32$'],
      answer: 0,
      solution: 'Multiplying by $0.25$ is taking one quarter, so $12.8 \\div 4 = 3.2$. The digit method agrees: $128 \\times 25 = 3200$ with $1 + 2 = 3$ decimal places, giving $3.200 = 3.2$. (Halving instead of quartering gives $6.4$; counting two decimal places gives $32$, and counting four gives $0.32$.)',
    },
  ],
  // 11. Arithmetic on repeating decimals, done through fractions.
  [
    {
      q: 'Compute $0.\\overline{5} + 0.\\overline{3}$.',
      choices: ['$0.8$', '$0.\\overline{8}$', '$0.88$', '$0.\\overline{4}$'],
      answer: 1,
      solution: 'Convert first: a single repeating digit sits over $9$, so $0.\\overline{5} = \\frac{5}{9}$ and $0.\\overline{3} = \\frac{3}{9}$. Their sum is $\\frac{8}{9} = 0.\\overline{8}$. Adding digit columns agrees — endless $5$s plus endless $3$s give endless $8$s. (Chopping both to one digit and adding $0.5 + 0.3$ gives $0.8$; chopping to two digits gives $0.55 + 0.33 = 0.88$; adding the denominators as well, as $\\frac{8}{18}$, gives $\\frac{4}{9} = 0.\\overline{4}$.)',
    },
    {
      q: 'Compute $0.\\overline{7} - 0.\\overline{4}$.',
      choices: ['$0.3$', '$0.33$', '$0.\\overline{3}$', '$0.\\overline{1}$'],
      answer: 2,
      solution: 'Convert first: $0.\\overline{7} = \\frac{7}{9}$ and $0.\\overline{4} = \\frac{4}{9}$. Subtracting gives $\\frac{3}{9} = \\frac{1}{3} = 0.\\overline{3}$. Column by column, endless $7$s minus endless $4$s leave endless $3$s. (Chopping to one digit gives $0.7 - 0.4 = 0.3$; chopping to two gives $0.77 - 0.44 = 0.33$; reducing $\\frac{3}{9}$ by dividing only the TOP by $3$ gives $\\frac{1}{9} = 0.\\overline{1}$.)',
    },
    {
      q: 'Compute $0.\\overline{1} + 0.\\overline{5}$.',
      choices: ['$0.6$', '$0.66$', '$0.\\overline{3}$', '$0.\\overline{6}$'],
      answer: 3,
      solution: 'Convert first: $0.\\overline{1} = \\frac{1}{9}$ and $0.\\overline{5} = \\frac{5}{9}$, so the sum is $\\frac{6}{9} = \\frac{2}{3} = 0.\\overline{6}$. Endless $1$s plus endless $5$s give endless $6$s. (Chopping to one digit gives $0.1 + 0.5 = 0.6$; chopping to two gives $0.11 + 0.55 = 0.66$; adding the denominators too, as $\\frac{6}{18}$, gives $\\frac{1}{3} = 0.\\overline{3}$.)',
    },
  ],
  // 12. The subtract-to-cancel-the-tail identity, read forwards.
  [
    {
      q: 'If $x = 0.\\overline{7}$, what is $9x$?',
      choices: ['$7$', '$6.3$', '$7.7$', '$63$'],
      answer: 0,
      solution: 'Multiply by $10$: $10x = 7.\\overline{7}$. Subtract $x = 0.\\overline{7}$, and the infinite tails cancel exactly, leaving $10x - x = 9x = 7$. This is the same trick that shows $0.\\overline{7} = \\frac{7}{9}$. (Treating $x$ as merely $0.7$ gives $9 \\times 0.7 = 6.3$; subtracting nothing from $10x$ reports $7.7$; multiplying $9 \\times 7$ and losing the decimal point gives $63$.)',
    },
    {
      q: 'If $x = 0.\\overline{15}$, what is $99x$?',
      choices: ['$14.85$', '$15$', '$15.15$', '$150$'],
      answer: 1,
      solution: 'The block has two digits, so multiply by $100$: $100x = 15.\\overline{15}$. Subtract $x$ and the endless tails cancel: $100x - x = 99x = 15$. (This also shows $x = \\frac{15}{99} = \\frac{5}{33}$.) Treating $x$ as exactly $0.15$ gives $99 \\times 0.15 = 14.85$; subtracting nothing from $100x$ reports $15.15$; sliding the decimal point one place too far gives $150$.',
    },
    {
      q: 'If $x = 0.\\overline{5}$, what is $18x$?',
      choices: ['$5$', '$9$', '$10$', '$9.9$'],
      answer: 2,
      solution: 'First get $9x$: since $10x = 5.\\overline{5}$, subtracting $x$ leaves $9x = 5$. The question asks for $18x$, which is double that: $18x = 10$. (Check: $x = \\frac{5}{9}$, and $18 \\times \\frac{5}{9} = 10$. ✓) Stopping at $9x$ reports $5$; treating $x$ as $0.5$ gives $18 \\times 0.5 = 9$; treating it as $0.55$ gives $9.9$.',
    },
  ],
]

const worksheet = [
  // 1. Adding decimals with different numbers of places.
  [
    {
      q: 'Compute $7.6 + 2.85$.',
      answer: '$10.45$',
      solution: 'Line up the decimal points, writing $7.6$ as $7.60$ so both numbers reach hundredths. Then $7.60 + 2.85 = 10.45$.',
    },
    {
      q: 'Compute $4.9 + 12.36$.',
      answer: '$17.26$',
      solution: 'Write $4.9$ as $4.90$ and stack the points in a column: $4.90 + 12.36 = 17.26$. Lining up the right-hand ends instead would be the classic trap.',
    },
    {
      q: 'Compute $0.75 + 6.9$.',
      answer: '$7.65$',
      solution: 'Write $6.9$ as $6.90$ and add with the points aligned: $0.75 + 6.90 = 7.65$.',
    },
  ],
  // 2. Subtracting a decimal from a whole number.
  [
    {
      q: 'Compute $20 - 6.81$.',
      answer: '$13.19$',
      solution: 'Write $20$ as $20.00$ and subtract with the points aligned: $20.00 - 6.81 = 13.19$. Check by adding back: $13.19 + 6.81 = 20$. ✓',
    },
    {
      q: 'Compute $9 - 3.27$.',
      answer: '$5.73$',
      solution: 'Write $9$ as $9.00$, then $9.00 - 3.27 = 5.73$. Check: $5.73 + 3.27 = 9$. ✓',
    },
    {
      q: 'Compute $15 - 8.04$.',
      answer: '$6.96$',
      solution: 'Write $15$ as $15.00$ and subtract place by place: $15.00 - 8.04 = 6.96$. Check: $6.96 + 8.04 = 15$. ✓ The empty tenths column in $8.04$ is easy to miss — that zero is doing real work.',
    },
  ],
  // 3. Multiplying two decimals by counting places.
  [
    {
      q: 'Compute $0.6 \\times 0.8$.',
      answer: '$0.48$',
      solution: 'First $6 \\times 8 = 48$; the factors have $1 + 1 = 2$ decimal places, so the answer is $0.48$.',
    },
    {
      q: 'Compute $0.04 \\times 0.5$.',
      answer: '$0.02$',
      solution: 'First $4 \\times 5 = 20$. The factors have $2 + 1 = 3$ decimal places, so place the point three spots in: $0.020$, which is $0.02$.',
    },
    {
      q: 'Compute $1.2 \\times 0.07$.',
      answer: '$0.084$',
      solution: 'First $12 \\times 7 = 84$. The factors have $1 + 2 = 3$ decimal places, so the answer needs three: $0.084$. Multiplying by a number well under $1$ shrinks $1.2$ a long way. ✓',
    },
  ],
  // 4. Sliding the point by a power of ten, in both directions.
  [
    {
      q: 'Compute $52.4 \\div 1000$.',
      answer: '$0.0524$',
      solution: 'Dividing by $1000$ slides the decimal point three places left: $52.4 \\to 5.24 \\to 0.524 \\to 0.0524$. A zero has to be written in to fill the empty tenths place.',
    },
    {
      q: 'Compute $7.3 \\div 100$.',
      answer: '$0.073$',
      solution: 'Dividing by $100$ slides the point two places left: $7.3 \\to 0.73 \\to 0.073$.',
    },
    {
      q: 'Compute $0.96 \\times 1000$.',
      answer: '$960$',
      solution: 'Multiplying slides the point the other way — three places RIGHT: $0.96 \\to 9.6 \\to 96 \\to 960$. A zero gets written in at the end to fill the ones place.',
    },
  ],
  // 5. Rounding to a named place.
  [
    {
      q: 'Round $8.361$ to the nearest tenth.',
      answer: '$8.4$',
      solution: 'The deciding digit is the hundredths digit, $6$. Since $6 \\ge 5$, the tenths digit rounds up from $3$ to $4$: the answer is $8.4$.',
    },
    {
      q: 'Round $23.6249$ to the nearest hundredth.',
      answer: '$23.62$',
      solution: 'Only the ONE digit to the right of the hundredths place decides, and that is the thousandths digit, $4$. Since $4 < 5$, round down to $23.62$. Rounding in stages — $23.6249 \\to 23.625 \\to 23.63$ — is tempting but wrong: $23.6249$ really is closer to $23.62$.',
    },
    {
      q: 'Round $0.7048$ to the nearest thousandth.',
      answer: '$0.705$',
      solution: 'The thousandths digit is $4$, and the deciding digit next door is $8$. Since $8 \\ge 5$, round up: $0.705$.',
    },
  ],
  // 6. Fraction to a terminating decimal.
  [
    {
      q: 'Write $\\frac{7}{20}$ as a decimal.',
      answer: '$0.35$',
      solution: 'Multiply top and bottom by $5$ to reach hundredths: $\\frac{7}{20} = \\frac{35}{100} = 0.35$.',
    },
    {
      q: 'Write $\\frac{9}{40}$ as a decimal.',
      answer: '$0.225$',
      solution: 'Since $40 \\times 25 = 1000$, multiply top and bottom by $25$: $\\frac{9}{40} = \\frac{225}{1000} = 0.225$. Sense check: $\\frac{9}{40}$ is a little less than $\\frac{10}{40} = 0.25$. ✓',
    },
    {
      q: 'Write $\\frac{7}{16}$ as a decimal.',
      answer: '$0.4375$',
      solution: 'Since $16 \\times 625 = 10000$, multiply top and bottom by $625$: $\\frac{7}{16} = \\frac{4375}{10000} = 0.4375$. Sense check: $\\frac{7}{16}$ is a little less than $\\frac{8}{16} = 0.5$. ✓',
    },
  ],
  // 7. Dividing by a decimal divisor.
  [
    {
      q: 'Compute $6.4 \\div 0.08$.',
      answer: '$80$',
      solution: 'Shift both decimal points two places right: $6.4 \\div 0.08 = 640 \\div 8 = 80$. Both numbers grew $100$ times, so the quotient is unchanged. Check: $80 \\times 0.08 = 6.4$. ✓',
    },
    {
      q: 'Compute $2.7 \\div 0.009$.',
      answer: '$300$',
      solution: 'Shift both points three places right: $2.7 \\div 0.009 = 2700 \\div 9 = 300$. Dividing by a tiny number gives a big answer — there are $300$ pieces of size $0.009$ inside $2.7$.',
    },
    {
      q: 'Compute $5.52 \\div 0.6$.',
      answer: '$9.2$',
      solution: 'Shift both points one place right: $5.52 \\div 0.6 = 55.2 \\div 6 = 9.2$. Check by multiplying back: $9.2 \\times 0.6 = 5.52$. ✓',
    },
  ],
  // 8. Comparing a repeating decimal with one that stops.
  [
    {
      q: 'Which is greater: $0.\\overline{4}$ or $0.44$?',
      answer: '$0.\\overline{4}$',
      solution: 'Write out digits: $0.\\overline{4} = 0.4444\\ldots$ and $0.44 = 0.4400\\ldots$ The tenths and hundredths tie, but in the thousandths place $4 > 0$ — so $0.\\overline{4}$ is greater. Here the endless digits DO win, because they keep adding on where the other number has given up.',
    },
    {
      q: 'Which is greater: $0.\\overline{81}$ or $0.815$?',
      answer: '$0.\\overline{81}$',
      solution: 'Write out digits: $0.\\overline{81} = 0.81818\\ldots$ and $0.815 = 0.81500\\ldots$ They tie through the hundredths at $0.81$, so the thousandths place decides: $8 > 5$, making $0.\\overline{81}$ greater. Careful — the bar covers the PAIR $81$, so the digits go $8, 1, 8, 1, \\ldots$',
    },
    {
      q: 'Which is greater: $0.\\overline{2}$ or $0.23$?',
      answer: '$0.23$',
      solution: 'Write out digits: $0.\\overline{2} = 0.2222\\ldots$ and $0.23 = 0.2300\\ldots$ The tenths tie at $2$, but in the hundredths place $3 > 2$ — so $0.23$ is greater, even though the other number never ends. Going on forever does not automatically make a number bigger!',
    },
  ],
  // 9. Long division into a repeating decimal, with the bar placed correctly.
  [
    {
      q: 'Write $\\frac{11}{12}$ as a decimal, using a bar for any repeating part.',
      answer: '$0.91\\overline{6}$',
      solution: 'Divide: $110 \\div 12$ is $9$ remainder $2$; then $20 \\div 12$ is $1$ remainder $8$; then $80 \\div 12$ is $6$ remainder $8$. The remainder $8$ has come back, so from here every digit is $6$: $\\frac{11}{12} = 0.91666\\ldots = 0.91\\overline{6}$. The bar covers only the $6$ — the $9$ and the $1$ happen once. (We knew it would repeat, since $12 = 2 \\times 2 \\times 3$ contains a $3$.)',
    },
    {
      q: 'Write $\\frac{7}{15}$ as a decimal, using a bar for any repeating part.',
      answer: '$0.4\\overline{6}$',
      solution: 'Divide: $70 \\div 15$ is $4$ remainder $10$; then $100 \\div 15$ is $6$ remainder $10$. The remainder $10$ repeats immediately, so every digit from here is $6$: $\\frac{7}{15} = 0.4666\\ldots = 0.4\\overline{6}$. (The denominator $15 = 3 \\times 5$ contains a $3$, so a repeat was guaranteed.)',
    },
    {
      q: 'Write $\\frac{7}{22}$ as a decimal, using a bar for any repeating part.',
      answer: '$0.3\\overline{18}$',
      solution: 'Divide: $70 \\div 22$ is $3$ remainder $4$; then $40 \\div 22$ is $1$ remainder $18$; then $180 \\div 22$ is $8$ remainder $4$. The remainder $4$ is back, so the PAIR of digits $18$ cycles from here: $\\frac{7}{22} = 0.31818\\ldots = 0.3\\overline{18}$. The leading $3$ sits outside the bar, because it happens only once.',
    },
  ],
  // 10. A repeating decimal with a non-repeating digit in front, turned into a fraction.
  [
    {
      q: 'Write $0.7\\overline{2}$ as a fraction in simplest form.',
      answer: '$\\frac{13}{18}$',
      solution: 'Let $x = 0.7222\\ldots$ Then $10x = 7.222\\ldots$ and $100x = 72.222\\ldots$ Subtract the two so the endless tails cancel: $100x - 10x = 90x = 65$. So $x = \\frac{65}{90} = \\frac{13}{18}$ after dividing top and bottom by $5$. Check: $13 \\div 18 = 0.7222\\ldots$ ✓',
    },
    {
      q: 'Write $0.4\\overline{3}$ as a fraction in simplest form.',
      answer: '$\\frac{13}{30}$',
      solution: 'Let $x = 0.4333\\ldots$ Then $10x = 4.333\\ldots$ and $100x = 43.333\\ldots$ Subtracting cancels the tails: $100x - 10x = 90x = 39$, so $x = \\frac{39}{90} = \\frac{13}{30}$ after dividing top and bottom by $3$. Check: $13 \\div 30 = 0.4333\\ldots$ ✓',
    },
    {
      q: 'Write $0.5\\overline{1}$ as a fraction in simplest form.',
      answer: '$\\frac{23}{45}$',
      solution: 'Let $x = 0.5111\\ldots$ Then $10x = 5.111\\ldots$ and $100x = 51.111\\ldots$ Subtract: $100x - 10x = 90x = 46$, since the repeating tails match and cancel. So $x = \\frac{46}{90} = \\frac{23}{45}$. Check: $23 \\div 45 = 0.5111\\ldots$ ✓',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 6,
  challenge,
  worksheet,
}
