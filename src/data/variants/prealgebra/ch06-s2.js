// Prealgebra chapter 6 — variations for sections 6.3-6.4.
// All problems and solutions are original MathQuest content.

const s63 = [
  // p1 — reading a one-place decimal as a fraction
  [
    {
      q: 'Write $0.9$ as a fraction.',
      choices: ['$\\frac{9}{10}$', '$\\frac{9}{100}$', '$\\frac{1}{9}$', '$\\frac{10}{9}$'],
      answer: 0,
      solution:
        'Say it out loud: $0.9$ is nine tenths, so $0.9 = \\frac{9}{10}$. The first digit after the point is the tenths place — reading it as hundredths gives $\\frac{9}{100} = 0.09$, ten times too small. Turning the fraction over gives $\\frac{10}{9}$, which is bigger than $1$, and $\\frac{1}{9}$ is the different number $0.111\\ldots$',
    },
    {
      q: 'Write $0.3$ as a fraction.',
      choices: ['$\\frac{3}{100}$', '$\\frac{10}{3}$', '$\\frac{3}{10}$', '$\\frac{1}{3}$'],
      answer: 2,
      solution:
        'Three tenths is $\\frac{3}{10}$ — one digit after the point means tenths. Counting an extra place gives $\\frac{3}{100} = 0.03$, and reading the decimal upside down gives $\\frac{10}{3}$. Careful with $\\frac{1}{3}$: that is $0.333\\ldots$, which never stops, so it cannot equal the exact decimal $0.3$.',
    },
    {
      q: 'A snail crawls $0.1$ of a metre. Written as a fraction, how much of a metre is that?',
      choices: ['$\\frac{1}{100}$', '$\\frac{10}{1}$', '$\\frac{1}{1000}$', '$\\frac{1}{10}$'],
      answer: 3,
      solution:
        'There is exactly one digit after the point, so $0.1$ is one tenth: the snail crawls $\\frac{1}{10}$ of a metre. Miscounting the places gives hundredths ($\\frac{1}{100}$) or thousandths ($\\frac{1}{1000}$), and reading the decimal upside down gives $\\frac{10}{1} = 10$ — a snail that crawls ten metres!',
    },
  ],
  // p2 — a fraction with a power of ten on the bottom, written as a decimal
  [
    {
      q: 'Write $\\frac{8}{10}$ as a decimal.',
      choices: ['$0.08$', '$0.8$', '$8.10$', '$0.18$'],
      answer: 1,
      solution:
        'Eight tenths goes straight into the tenths place, one digit after the point: $\\frac{8}{10} = 0.8$. Two digits after the point would mean hundredths, so $0.08$ is ten times too small. The choices $8.10$ and $0.18$ just shuffle the digits $8$ and $10$ around the point instead of dividing.',
    },
    {
      q: 'Write $\\frac{6}{100}$ as a decimal.',
      choices: ['$0.6$', '$6.100$', '$0.06$', '$0.006$'],
      answer: 2,
      solution:
        'Hundredths need TWO digits after the point, and here the tenths place is empty: $\\frac{6}{100} = 0.06$. Writing $0.6$ is six tenths, ten times too big. Counting the three digits of $100$ instead of its two zeros gives thousandths, $0.006$, ten times too small.',
    },
    {
      q: 'Ravi fills $\\frac{4}{10}$ of a jug with water. Written as a decimal, how much of the jug is full?',
      choices: ['$0.04$', '$4.10$', '$0.14$', '$0.4$'],
      answer: 3,
      solution:
        'Four tenths lands in the tenths place: $\\frac{4}{10} = 0.4$, so the jug is $0.4$ full. Using two digits after the point gives $0.04$, which is four hundredths — a tenth as much water. The other two choices copy the digits $4$ and $10$ around the point rather than dividing.',
    },
  ],
  // p3 — a two-place decimal reduced to a fraction in simplest form
  [
    {
      q: 'Write $0.75$ as a fraction in simplest form.',
      choices: ['$\\frac{3}{4}$', '$\\frac{75}{10}$', '$\\frac{3}{100}$', '$\\frac{7}{5}$'],
      answer: 0,
      solution:
        '$0.75$ is seventy-five hundredths: $\\frac{75}{100}$. Both parts are divisible by $25$, so $\\frac{75}{100} = \\frac{3}{4}$. Dividing only the top by $25$ leaves $\\frac{3}{100}$; reading the decimal as tenths gives $\\frac{75}{10} = 7.5$; and $\\frac{7}{5}$ merely pulls the digits $7$ and $5$ apart.',
    },
    {
      q: 'Write $0.85$ as a fraction in simplest form.',
      choices: ['$\\frac{85}{10}$', '$\\frac{17}{20}$', '$\\frac{17}{100}$', '$\\frac{8}{5}$'],
      answer: 1,
      solution:
        'Eighty-five hundredths is $\\frac{85}{100}$, and $5$ divides both parts: $\\frac{85}{100} = \\frac{17}{20}$. Check by building back up — $20 \\times 5 = 100$ and $17 \\times 5 = 85$. ✓ Dividing only the numerator by $5$ leaves $\\frac{17}{100}$, and reading $0.85$ as tenths gives $\\frac{85}{10} = 8.5$.',
    },
    {
      q: 'A water jug is $0.6$ full. Written as a fraction in simplest form, how full is it?',
      choices: ['$\\frac{6}{100}$', '$\\frac{5}{3}$', '$\\frac{3}{10}$', '$\\frac{3}{5}$'],
      answer: 3,
      solution:
        'Six tenths is $\\frac{6}{10}$, and halving top and bottom gives $\\frac{3}{5}$. Halving only the top gives $\\frac{3}{10}$, which is half as much water; $\\frac{6}{100}$ reads the $6$ as hundredths; and $\\frac{5}{3}$ is the answer turned upside down, which would mean the jug is more than full.',
    },
  ],
  // p4 — building a denominator up to a power of ten
  [
    {
      q: 'Write $\\frac{13}{20}$ as a decimal.',
      choices: ['$0.65$', '$0.13$', '$6.5$', '$1.3$'],
      answer: 0,
      solution:
        'Build the denominator up to $100$: since $20 \\times 5 = 100$, multiply top and bottom by $5$ to get $\\frac{13}{20} = \\frac{65}{100} = 0.65$. Sense check: $\\frac{13}{20}$ should sit a little above $\\frac{10}{20} = 0.5$. ✓ Writing $0.13$ treats the fraction as $\\frac{13}{100}$, $1.3$ divides by $10$ instead of $20$, and $6.5$ has the point one place too far right.',
    },
    {
      q: 'Write $\\frac{11}{25}$ as a decimal.',
      choices: ['$0.11$', '$0.44$', '$4.4$', '$0.22$'],
      answer: 1,
      solution:
        'Since $25 \\times 4 = 100$, multiply top and bottom by $4$: $\\frac{11}{25} = \\frac{44}{100} = 0.44$. Doubling instead of quadrupling gives $\\frac{22}{50}$, and reading that numerator as hundredths produces $0.22$ — half the right answer. Writing $0.11$ treats the fraction as $\\frac{11}{100}$, and $4.4$ puts the point one place too far right.',
    },
    {
      q: 'Marisol has read $\\frac{17}{50}$ of her book. Written as a decimal, what part of the book has she read?',
      choices: ['$0.17$', '$1.7$', '$0.68$', '$0.34$'],
      answer: 3,
      solution:
        'Fifty doubles to $100$, so double both parts: $\\frac{17}{50} = \\frac{34}{100} = 0.34$. Multiplying by $4$ — the jump that takes $25$ to $100$, not $50$ — gives $0.68$, twice too much. Writing $0.17$ treats the fraction as $\\frac{17}{100}$, and $1.7$ divides by $10$ instead of by $50$.',
    },
  ],
  // p5 — which denominators give terminating decimals
  [
    {
      q: 'Exactly one of these fractions gives a terminating decimal. Which one?',
      choices: ['$\\frac{9}{16}$', '$\\frac{4}{15}$', '$\\frac{5}{21}$', '$\\frac{7}{18}$'],
      answer: 0,
      solution:
        'All four are already in simplest form, so judge the denominators: $15 = 3 \\times 5$, $21 = 3 \\times 7$, and $18 = 2 \\times 3 \\times 3$ each smuggle in a prime other than $2$ and $5$, so those three repeat. But $16 = 2 \\times 2 \\times 2 \\times 2$ is built only from $2$s, and $16 \\times 625 = 10000$, so $\\frac{9}{16} = \\frac{5625}{10000} = 0.5625$ terminates.',
    },
    {
      q: 'Which of these fractions does NOT terminate when written as a decimal?',
      choices: ['$\\frac{3}{50}$', '$\\frac{9}{40}$', '$\\frac{5}{6}$', '$\\frac{7}{32}$'],
      answer: 2,
      solution:
        'Factor each denominator: $50 = 2 \\times 5 \\times 5$, $40 = 2 \\times 2 \\times 2 \\times 5$, and $32 = 2 \\times 2 \\times 2 \\times 2 \\times 2$ use only $2$s and $5$s, so those terminate ($0.06$, $0.225$, and $0.21875$). But $6 = 2 \\times 3$ carries a $3$, and no amount of multiplying will turn a $3$ into a power of $10$ — so $\\frac{5}{6} = 0.8333\\ldots$ repeats.',
    },
    {
      q: 'A fraction is in simplest form and its denominator is $n$. For which of these values of $n$ is the decimal guaranteed to terminate?',
      choices: ['$n = 12$', '$n = 15$', '$n = 21$', '$n = 16$'],
      answer: 3,
      solution:
        'A simplest-form fraction terminates exactly when its denominator is built from $2$s and $5$s alone. Factor each candidate: $12 = 2 \\times 2 \\times 3$, $15 = 3 \\times 5$, and $21 = 3 \\times 7$ all contain a forbidden prime. Only $16 = 2 \\times 2 \\times 2 \\times 2$ passes, and since $16 \\times 625 = 10000$, any such fraction can be rewritten over $10000$.',
    },
  ],
  // p6 — reducing a hundredths fraction
  [
    {
      q: 'Write $0.44$ as a fraction in simplest form.',
      choices: ['$\\frac{44}{10}$', '$\\frac{11}{25}$', '$\\frac{11}{50}$', '$\\frac{11}{100}$'],
      answer: 1,
      solution:
        '$0.44$ is forty-four hundredths: $\\frac{44}{100}$. Both parts are divisible by $4$, giving $\\frac{11}{25}$. Dividing the top by $4$ but the bottom by only $2$ gives $\\frac{11}{50}$, and dividing the top alone gives $\\frac{11}{100}$ — whatever you do to one part you must do to the other. Reading the decimal as tenths gives $\\frac{44}{10} = 4.4$.',
    },
    {
      q: 'Write $0.08$ as a fraction in simplest form.',
      choices: ['$\\frac{4}{5}$', '$\\frac{1}{8}$', '$\\frac{2}{25}$', '$\\frac{8}{1000}$'],
      answer: 2,
      solution:
        'The $0$ in the tenths place matters: $0.08$ is eight hundredths, $\\frac{8}{100}$, which reduces by $4$ to $\\frac{2}{25}$. Ignoring that zero turns it into $\\frac{8}{10} = \\frac{4}{5}$, ten times too big; counting three decimal places gives $\\frac{8}{1000}$, ten times too small; and $\\frac{1}{8}$ is the fraction that equals $0.125$.',
    },
    {
      q: 'A bottle holds $0.52$ litres. Written as a fraction of a litre in simplest form, how much is that?',
      choices: ['$\\frac{52}{10}$', '$\\frac{13}{50}$', '$\\frac{5}{2}$', '$\\frac{13}{25}$'],
      answer: 3,
      solution:
        'Fifty-two hundredths is $\\frac{52}{100}$, and dividing both parts by $4$ gives $\\frac{13}{25}$. Check: $13 \\times 4 = 52$ and $25 \\times 4 = 100$. ✓ Dividing the top by $4$ but the bottom by only $2$ gives $\\frac{13}{50}$; reading the decimal as tenths gives $\\frac{52}{10} = 5.2$; and $\\frac{5}{2}$ just splits the digits apart.',
    },
  ],
  // p7 — comparing a fraction with a decimal
  [
    {
      q: 'Which is larger: $\\frac{9}{16}$ or $0.55$?',
      choices: ['$\\frac{9}{16}$', '$0.55$', 'They are equal', 'They cannot be compared'],
      answer: 0,
      solution:
        'Put both in the same costume. Since $16 \\times 625 = 10000$, $\\frac{9}{16} = \\frac{5625}{10000} = 0.5625$, while $0.55 = 0.5500$. The tenths tie at $5$, and in the hundredths place $6 > 5$, so $\\frac{9}{16}$ is larger. A fraction and a decimal can always be compared — you just have to convert one of them first.',
    },
    {
      q: 'Which of these numbers is the smallest?',
      choices: ['$\\frac{1}{4}$', '$0.3$', '$0.24$', '$\\frac{2}{5}$'],
      answer: 2,
      solution:
        'Convert the fractions: $\\frac{1}{4} = 0.25$ and $\\frac{2}{5} = 0.4$. Now line all four up as hundredths: $0.25$, $0.30$, $0.24$, $0.40$. The smallest is $0.24$, which slips just one hundredth below $\\frac{1}{4}$. Choosing $0.3$ because it has the fewest digits confuses length with size.',
    },
    {
      q: 'Which of these numbers has the greatest value?',
      choices: ['$\\frac{5}{8}$', '$0.72$', '$\\frac{7}{10}$', '$0.66$'],
      answer: 1,
      solution:
        'Convert the fractions: $\\frac{5}{8} = 0.625$ and $\\frac{7}{10} = 0.700$. Comparing $0.625$, $0.720$, $0.700$, and $0.660$ shows that $0.72$ is the biggest. It is tempting to assume a fraction must beat a decimal, but $\\frac{7}{10}$ falls two hundredths short.',
    },
  ],
  // p8 — eighths and sixteenths as decimals
  [
    {
      q: 'Write $\\frac{5}{8}$ as a decimal.',
      choices: ['$0.625$', '$0.58$', '$1.6$', '$0.125$'],
      answer: 0,
      solution:
        'Since $8 \\times 125 = 1000$, multiply top and bottom by $125$: $\\frac{5}{8} = \\frac{625}{1000} = 0.625$. Gluing the digits together gives $0.58$, which is not a division at all; $1.6$ is $8 \\div 5$, the division done backwards; and $0.125$ is $\\frac{1}{8}$, one piece instead of five.',
    },
    {
      q: 'Write $\\frac{3}{8}$ as a decimal.',
      choices: ['$0.38$', '$0.375$', '$0.83$', '$0.125$'],
      answer: 1,
      solution:
        'One eighth is $0.125$, so three eighths is $3 \\times 0.125 = 0.375$. Building up agrees: $\\frac{3}{8} = \\frac{375}{1000}$. The choices $0.38$ and $0.83$ paste the digits $3$ and $8$ together in the two possible orders, and $0.125$ stops after a single eighth.',
    },
    {
      q: 'Write $\\frac{1}{16}$ as a decimal.',
      choices: ['$0.16$', '$1.6$', '$0.0625$', '$0.625$'],
      answer: 2,
      solution:
        'Since $16 \\times 625 = 10000$, multiply top and bottom by $625$: $\\frac{1}{16} = \\frac{625}{10000} = 0.0625$. Four zeros mean four decimal places, so a $0$ must hold the tenths place — sliding the point one spot gives $0.625$, which is really $\\frac{10}{16}$. Pasting the digits gives $0.16$, and $1.6$ is $16 \\div 10$.',
    },
  ],
  // p9 — reduce before judging whether the decimal terminates
  [
    {
      q: 'Written as a decimal, $\\frac{22}{55}$ is:',
      choices: ['$0.22$', '$0.4$', 'a repeating decimal that never ends', '$0.55$'],
      answer: 1,
      solution:
        'Reduce before judging: top and bottom share a factor of $11$, so $\\frac{22}{55} = \\frac{2}{5}$. The surviving denominator $5$ is allowed, so the decimal stops: $\\frac{2}{5} = \\frac{4}{10} = 0.4$. Looking at the unreduced $55 = 5 \\times 11$ and panicking about the $11$ predicts a repeating decimal — but that $11$ cancels away. The other two choices simply read digits off the fraction.',
    },
    {
      q: 'Written as a decimal, $\\frac{27}{45}$ is:',
      choices: ['$0.27$', 'a repeating decimal that never ends', '$0.6$', '$0.45$'],
      answer: 2,
      solution:
        'Both parts are divisible by $9$: $\\frac{27}{45} = \\frac{3}{5}$. Since $5$ is one of the two friendly primes, the decimal terminates: $\\frac{3}{5} = \\frac{6}{10} = 0.6$. The unreduced denominator $45 = 3 \\times 3 \\times 5$ contains $3$s, which is exactly why judging too early predicts a repeat.',
    },
    {
      q: 'Tom says $\\frac{35}{56}$ must be a repeating decimal, because $56 = 2 \\times 2 \\times 2 \\times 7$ contains a $7$. Is he right?',
      choices: [
        'Yes — that factor of $7$ forces the decimal to repeat',
        'Yes — a fraction repeats whenever its numerator is odd',
        'No — it terminates, and it equals $0.35$',
        'No — it reduces to $\\frac{5}{8}$, so it terminates at $0.625$',
      ],
      answer: 3,
      solution:
        'Tom judged the denominator before reducing. Top and bottom share a factor of $7$: $\\frac{35}{56} = \\frac{5}{8}$, and the surviving denominator $8 = 2 \\times 2 \\times 2$ holds only $2$s, so the decimal terminates at $0.625$. The $7$ never got the chance to cause trouble — it cancelled. Reading the numerator digits as the answer gives $0.35$, and the numerator never decides whether a decimal repeats.',
    },
  ],
  // p10 — ordering a mixed list of fractions and decimals
  [
    {
      q: 'Which list shows $0.58$, $0.6$, and $\\frac{5}{8}$ in order from least to greatest?',
      choices: [
        '$0.58,\\ 0.6,\\ \\frac{5}{8}$',
        '$0.6,\\ 0.58,\\ \\frac{5}{8}$',
        '$\\frac{5}{8},\\ 0.58,\\ 0.6$',
        '$0.58,\\ \\frac{5}{8},\\ 0.6$',
      ],
      answer: 0,
      solution:
        'Convert everything to three decimal places: $\\frac{5}{8} = 0.625$, $0.6 = 0.600$, and $0.58 = 0.580$. Now the order is plain: $0.580 < 0.600 < 0.625$. Ranking by how many digits a number has would wrongly put $0.6$ first, and guessing that a fraction must be smallest puts $\\frac{5}{8}$ in the wrong place.',
    },
    {
      q: 'Which list shows $0.56$, $0.65$, and $\\frac{3}{5}$ in order from greatest to least?',
      choices: [
        '$0.65,\\ 0.56,\\ \\frac{3}{5}$',
        '$0.65,\\ \\frac{3}{5},\\ 0.56$',
        '$0.56,\\ \\frac{3}{5},\\ 0.65$',
        '$\\frac{3}{5},\\ 0.65,\\ 0.56$',
      ],
      answer: 1,
      solution:
        'Write $\\frac{3}{5} = \\frac{6}{10} = 0.60$. Comparing hundredths from the top down gives $0.65$, then $0.60$, then $0.56$ — so the order is $0.65$, $\\frac{3}{5}$, $0.56$. Sorting from least to greatest instead reverses the list, and mixing up the digits of $0.56$ and $0.65$ lands you at the wrong end.',
    },
    {
      q: 'Which list shows $0.2$, $0.24$, and $\\frac{1}{4}$ in order from least to greatest?',
      choices: [
        '$0.2,\\ \\frac{1}{4},\\ 0.24$',
        '$\\frac{1}{4},\\ 0.24,\\ 0.2$',
        '$0.2,\\ 0.24,\\ \\frac{1}{4}$',
        '$0.24,\\ 0.2,\\ \\frac{1}{4}$',
      ],
      answer: 2,
      solution:
        'Convert to hundredths: $\\frac{1}{4} = 0.25$ and $0.2 = 0.20$. Comparing $0.20$, $0.24$, and $0.25$ gives the order $0.2$, $0.24$, $\\frac{1}{4}$ — the fraction wins by a single hundredth. Assuming the fraction must be smallest just because it is written differently is the trap here.',
    },
  ],
]

const s64 = [
  // p1 — what the repeating bar means
  [
    {
      q: 'What does the notation $0.\\overline{2}$ mean?',
      choices: ['$0.222\\ldots$ with $2$s repeating forever', '$0.2$ exactly', '$0.22$ exactly', '$0.2020020002\\ldots$'],
      answer: 0,
      solution:
        'The bar says the digit underneath it repeats without ever stopping: $0.\\overline{2} = 0.2222\\ldots$ That makes it slightly bigger than $0.2$ and slightly bigger than $0.22$, since it keeps adding tiny pieces forever. The pattern $0.2020020002\\ldots$ never settles into a fixed repeating block, so no bar could describe it.',
    },
    {
      q: 'What does the notation $0.\\overline{16}$ mean?',
      choices: ['$0.16$ exactly', '$0.1666\\ldots$', '$0.161616\\ldots$', '$0.16161$ exactly'],
      answer: 2,
      solution:
        'The bar covers BOTH digits, so the whole block $16$ cycles: $0.\\overline{16} = 0.161616\\ldots$ If only the $6$ repeated we would write $0.1\\overline{6}$, which is $0.1666\\ldots$ — a different number. Anything that stops, like $0.16$ or $0.16161$, is smaller than the endless version.',
    },
    {
      q: 'Which of these is another way to write $0.4444\\ldots$, where the $4$s never stop?',
      choices: ['$0.4$', '$0.44$', '$4.\\overline{4}$', '$0.\\overline{4}$'],
      answer: 3,
      solution:
        'Put the bar over the block that repeats — here the single digit $4$ — and write $0.\\overline{4}$. Cutting the digits off early gives $0.4$ or $0.44$, both smaller. And $4.\\overline{4}$ means $4.444\\ldots$: the whole-number part must stay in front of the point, not join the repeating block.',
    },
  ],
  // p2 — ninths as repeating decimals
  [
    {
      q: 'Write $\\frac{1}{9}$ as a decimal.',
      choices: ['$0.\\overline{1}$', '$0.1$', '$0.11$', '$0.\\overline{01}$'],
      answer: 0,
      solution:
        'Divide $1$ by $9$: $10 \\div 9$ is $1$ remainder $1$, and that remainder $1$ hands the same step back forever, so the $1$s never stop: $\\frac{1}{9} = 0.\\overline{1}$. Both $0.1$ and $0.11$ stop too early. The choice $0.\\overline{01}$ repeats a two-digit block and equals $\\frac{1}{99}$, not $\\frac{1}{9}$.',
    },
    {
      q: 'Write $\\frac{5}{9}$ as a decimal.',
      choices: ['$0.55$', '$0.\\overline{5}$', '$0.5$', '$1.8$'],
      answer: 1,
      solution:
        'Long division: $50 \\div 9$ is $5$ remainder $5$, and the remainder $5$ returns at every step, so the digit $5$ repeats forever: $\\frac{5}{9} = 0.\\overline{5}$. Cutting the division short gives $0.5$ or $0.55$, and $1.8$ is $9 \\div 5$ — the division done upside down.',
    },
    {
      q: 'Write $\\frac{7}{9}$ as a decimal.',
      choices: ['$0.79$', '$0.7$', '$0.\\overline{07}$', '$0.\\overline{7}$'],
      answer: 3,
      solution:
        'Divide $7$ by $9$: $70 \\div 9$ is $7$ remainder $7$, and that remainder is exactly where we started, so the digits cycle: $\\frac{7}{9} = 0.\\overline{7}$. A single repeating digit belongs over a denominator of $9$; $0.\\overline{07}$ is $\\frac{7}{99}$, a much smaller number, while $0.79$ just pastes the digits $7$ and $9$ together.',
    },
  ],
  // p3 — scaling a known repeating decimal
  [
    {
      q: 'Write $\\frac{4}{3}$ as a decimal.',
      choices: ['$0.75$', '$1.\\overline{3}$', '$1.3$', '$0.\\overline{3}$'],
      answer: 1,
      solution:
        'Four thirds is one whole plus $\\frac{1}{3}$, and $\\frac{1}{3} = 0.333\\ldots$, so $\\frac{4}{3} = 1.333\\ldots = 1.\\overline{3}$. Dropping the whole number gives $0.\\overline{3}$; stopping the tail gives $1.3$; and $0.75$ is $\\frac{3}{4}$, the fraction turned upside down.',
    },
    {
      q: 'You know that $\\frac{1}{11} = 0.\\overline{09}$. What is $\\frac{3}{11}$ as a decimal?',
      choices: ['$0.\\overline{39}$', '$0.\\overline{03}$', '$0.\\overline{27}$', '$0.27$'],
      answer: 2,
      solution:
        'Three copies of $0.090909\\ldots$ make $0.272727\\ldots$, so $\\frac{3}{11} = 0.\\overline{27}$. Long division agrees: $30 \\div 11$ is $2$ remainder $8$, then $80 \\div 11$ is $7$ remainder $3$ — back to the start. The choice $0.\\overline{03}$ is $\\frac{1}{33}$, what you get by tripling the denominator instead of the numerator; $0.\\overline{39}$ pastes the $3$ onto the block; and $0.27$ stops after one trip round the loop.',
    },
    {
      q: 'You know that $\\frac{1}{9} = 0.\\overline{1}$. What is $\\frac{8}{9}$ as a decimal?',
      choices: ['$0.8$', '$0.\\overline{18}$', '$0.\\overline{08}$', '$0.\\overline{8}$'],
      answer: 3,
      solution:
        'Eight copies of $0.111\\ldots$ make $0.888\\ldots$, so $\\frac{8}{9} = 0.\\overline{8}$. Stopping after one digit gives $0.8$, which is really $\\frac{4}{5}$; $0.\\overline{08}$ is $\\frac{8}{99}$, a two-digit block by mistake; and $0.\\overline{18}$ drags the $1$ from $\\frac{1}{9}$ into the block, giving $\\frac{2}{11}$.',
    },
  ],
  // p4 — spotting which fractions repeat
  [
    {
      q: 'Exactly one of these fractions gives a repeating decimal. Which one?',
      choices: ['$\\frac{5}{12}$', '$\\frac{7}{10}$', '$\\frac{3}{16}$', '$\\frac{9}{25}$'],
      answer: 0,
      solution:
        'All four are already reduced, so read the denominators: $10 = 2 \\times 5$, $16 = 2 \\times 2 \\times 2 \\times 2$, and $25 = 5 \\times 5$ use only $2$s and $5$s, so those terminate ($0.7$, $0.1875$, and $0.36$). But $12 = 2 \\times 2 \\times 3$ hides a $3$, so $\\frac{5}{12} = 0.41666\\ldots$ repeats.',
    },
    {
      q: 'Which of these fractions does NOT repeat when written as a decimal?',
      choices: ['$\\frac{2}{15}$', '$\\frac{7}{16}$', '$\\frac{4}{9}$', '$\\frac{5}{7}$'],
      answer: 1,
      solution:
        'A decimal stops exactly when the reduced denominator is built from $2$s and $5$s only. Here $15 = 3 \\times 5$, $9 = 3 \\times 3$, and $7$ itself each bring in a forbidden prime, so all three repeat ($0.1\\overline{3}$, $0.\\overline{4}$, and $0.\\overline{714285}$). Only $16 = 2 \\times 2 \\times 2 \\times 2$ is pure $2$s, and $\\frac{7}{16} = 0.4375$.',
    },
    {
      q: 'Aisha reduces a fraction and gets $\\frac{7}{30}$. Without dividing, how can she tell that its decimal repeats?',
      choices: [
        'Because $7$ is a prime number',
        'Because the numerator is smaller than the denominator',
        'Because $30 = 2 \\times 3 \\times 5$ contains a $3$',
        'Because $30$ is not itself a power of $10$',
      ],
      answer: 2,
      solution:
        'Only the reduced denominator matters, and only its prime factors: a $3$ can never be multiplied up into $10$, $100$, or $1000$, so the division never comes out even. In fact $\\frac{7}{30} = 0.2333\\ldots = 0.2\\overline{3}$. A denominator does not have to BE a power of ten — $\\frac{7}{20}$ terminates happily at $0.35$ — and the numerator has no say at all.',
    },
  ],
  // p5 — a repeating tail behind a non-repeating digit
  [
    {
      q: 'Write $\\frac{7}{6}$ as a decimal.',
      choices: ['$1.\\overline{16}$', '$1.1\\overline{6}$', '$1.16$', '$1.\\overline{6}$'],
      answer: 1,
      solution:
        'Divide $7$ by $6$: one whole with remainder $1$; then $10 \\div 6$ is $1$ remainder $4$; then $40 \\div 6$ is $6$ remainder $4$. The remainder $4$ has come back, so every digit from here on is a $6$: $\\frac{7}{6} = 1.1666\\ldots = 1.1\\overline{6}$. Only the $6$ repeats — a bar over $16$ would mean $1.161616\\ldots$, and $1.\\overline{6}$ starts the repeat one digit too early.',
    },
    {
      q: 'Write $\\frac{5}{12}$ as a decimal.',
      choices: ['$0.\\overline{41}$', '$0.4\\overline{16}$', '$0.41\\overline{6}$', '$0.42$'],
      answer: 2,
      solution:
        'Long division: $50 \\div 12$ is $4$ remainder $2$; $20 \\div 12$ is $1$ remainder $8$; $80 \\div 12$ is $6$ remainder $8$. The remainder $8$ repeats, so from there every digit is $6$: $\\frac{5}{12} = 0.41666\\ldots = 0.41\\overline{6}$. The bar belongs over the $6$ alone — $0.\\overline{41}$ and $0.4\\overline{16}$ repeat the wrong blocks, and $0.42$ is the rounded value, not the exact one.',
    },
    {
      q: 'Write $\\frac{11}{15}$ as a decimal.',
      choices: ['$0.\\overline{73}$', '$0.73$', '$0.\\overline{7}$', '$0.7\\overline{3}$'],
      answer: 3,
      solution:
        'Divide: $110 \\div 15$ is $7$ remainder $5$; then $50 \\div 15$ is $3$ remainder $5$, and that remainder keeps returning, so the $3$s never stop: $\\frac{11}{15} = 0.7333\\ldots = 0.7\\overline{3}$. The $7$ happens only once, so the bar must not cover it: $0.\\overline{73}$ would mean $0.737373\\ldots$, and $0.\\overline{7}$ throws the $3$s away.',
    },
  ],
  // p6 — a one-digit repeating block back into a fraction
  [
    {
      q: 'Write $0.\\overline{8}$ as a fraction in simplest form.',
      choices: ['$\\frac{8}{9}$', '$\\frac{8}{10}$', '$\\frac{8}{11}$', '$\\frac{8}{99}$'],
      answer: 0,
      solution:
        'Let $x = 0.888\\ldots$ The repeating block is one digit long, so multiply by $10$: $10x = 8.888\\ldots$ Subtracting, the endless tails cancel and $9x = 8$, giving $x = \\frac{8}{9}$, already in lowest terms. The choice $\\frac{8}{10}$ treats the decimal as if it stopped, and $\\frac{8}{99}$ uses the power of ten meant for a TWO-digit block.',
    },
    {
      q: 'Write $0.\\overline{6}$ as a fraction in simplest form.',
      choices: ['$\\frac{3}{5}$', '$\\frac{6}{11}$', '$\\frac{2}{3}$', '$\\frac{2}{33}$'],
      answer: 2,
      solution:
        'Let $x = 0.666\\ldots$, so $10x = 6.666\\ldots$ and $10x - x = 9x = 6$. Then $x = \\frac{6}{9}$, which reduces to $\\frac{2}{3}$. The choice $\\frac{3}{5}$ is $0.6$ exactly — a decimal that stops — and $\\frac{2}{33}$ comes from dividing by $99$ instead of $9$, as though the block had two digits.',
    },
    {
      q: 'Which fraction is exactly equal to $0.\\overline{2}$?',
      choices: ['$\\frac{1}{5}$', '$\\frac{2}{11}$', '$\\frac{2}{99}$', '$\\frac{2}{9}$'],
      answer: 3,
      solution:
        'Let $x = 0.222\\ldots$; then $10x = 2.222\\ldots$, and subtracting gives $9x = 2$, so $x = \\frac{2}{9}$. One repeating digit always lands over a $9$. Watch the near-misses: $\\frac{1}{5} = 0.2$ stops, $\\frac{2}{99} = 0.\\overline{02}$ repeats a two-digit block, and $\\frac{2}{11} = 0.\\overline{18}$ is a different repeat altogether.',
    },
  ],
  // p7 — comparing a repeating decimal with a terminating one
  [
    {
      q: 'Which is greater: $0.\\overline{3}$ or $0.34$?',
      choices: ['$0.34$', '$0.\\overline{3}$', 'They are equal', 'You cannot tell'],
      answer: 0,
      solution:
        'Write out the digits: $0.\\overline{3} = 0.3333\\ldots$ and $0.34 = 0.3400\\ldots$ The tenths tie at $3$, but in the hundredths place $4 > 3$, so $0.34$ is greater. Running on forever does not automatically make a number bigger — those endless $3$s never catch up.',
    },
    {
      q: 'Which is greater: $0.\\overline{5}$ or $0.55$?',
      choices: ['$0.55$', '$0.\\overline{5}$', 'They are equal', 'You cannot tell'],
      answer: 1,
      solution:
        'Line them up: $0.\\overline{5} = 0.5555\\ldots$ and $0.55 = 0.5500\\ldots$ The first two digits match exactly, and then in the thousandths place the repeating decimal has a $5$ where $0.55$ has a $0$. So $0.\\overline{5}$ is greater — but only by a whisker.',
    },
    {
      q: 'Which of these numbers is the least?',
      choices: ['$0.\\overline{6}$', '$0.68$', '$0.6\\overline{8}$', '$0.666$'],
      answer: 3,
      solution:
        'Write four places for each: $0.\\overline{6} = 0.6666\\ldots$, $0.68 = 0.6800$, $0.6\\overline{8} = 0.6888\\ldots$, and $0.666 = 0.6660$. All have $6$ tenths. In the hundredths, $0.\\overline{6}$ and $0.666$ show a $6$ while the other two show an $8$, so the least is one of that pair; they tie again in the thousandths, and in the ten-thousandths $0.\\overline{6}$ has another $6$ while $0.666$ has run out. So $0.666$ is least — a decimal that stops is not automatically the biggest OR the smallest.',
    },
  ],
  // p8 — two-digit repeating blocks from elevenths and thirty-thirds
  [
    {
      q: 'Write $\\frac{5}{11}$ as a decimal.',
      choices: ['$0.\\overline{45}$', '$0.45$', '$0.\\overline{54}$', '$0.5\\overline{1}$'],
      answer: 0,
      solution:
        'Divide: $50 \\div 11$ is $4$ remainder $6$; then $60 \\div 11$ is $5$ remainder $5$ — and $5$ is the remainder we started with, so the pair of digits $45$ cycles forever: $\\frac{5}{11} = 0.454545\\ldots = 0.\\overline{45}$. Stopping after one block gives $0.45$; reversing the block gives $0.\\overline{54}$, which is $\\frac{6}{11}$; and $0.5\\overline{1}$ just reads the $5$ and the $11$ off the fraction.',
    },
    {
      q: 'Write $\\frac{7}{11}$ as a decimal.',
      choices: ['$0.\\overline{36}$', '$0.\\overline{63}$', '$0.63$', '$0.7\\overline{1}$'],
      answer: 1,
      solution:
        'Long division: $70 \\div 11$ is $6$ remainder $4$; then $40 \\div 11$ is $3$ remainder $7$, which is where we began — so the block $63$ repeats: $\\frac{7}{11} = 0.\\overline{63}$. Writing the two digits in the other order gives $0.\\overline{36}$, which is $\\frac{4}{11}$, and $0.63$ stops after a single trip round the loop.',
    },
    {
      q: 'Write $\\frac{7}{33}$ as a decimal.',
      choices: ['$0.21$', '$0.\\overline{12}$', '$0.\\overline{21}$', '$0.7\\overline{3}$'],
      answer: 2,
      solution:
        'Divide: $70 \\div 33$ is $2$ remainder $4$; then $40 \\div 33$ is $1$ remainder $7$, and remainder $7$ is where we started — so the pair $21$ cycles: $\\frac{7}{33} = 0.212121\\ldots = 0.\\overline{21}$. Check it backwards: a two-digit block means $\\frac{21}{99}$, which reduces straight back to $\\frac{7}{33}$. ✓ Reversing the block gives $0.\\overline{12}$, and $0.21$ stops too soon.',
    },
  ],
  // p9 — repeating decimals back into fractions, including a mixed case
  [
    {
      q: 'Write $0.\\overline{36}$ as a fraction in simplest form.',
      choices: ['$\\frac{4}{11}$', '$\\frac{36}{100}$', '$\\frac{36}{999}$', '$\\frac{4}{9}$'],
      answer: 0,
      solution:
        'The block has two digits, so multiply by $100$: if $x = 0.363636\\ldots$ then $100x = 36.3636\\ldots$, and subtracting gives $99x = 36$. So $x = \\frac{36}{99} = \\frac{4}{11}$ after dividing top and bottom by $9$. Dividing only the numerator by $9$ leaves $\\frac{4}{9}$; multiplying by $1000$ instead of $100$ gives $\\frac{36}{999}$; and $\\frac{36}{100}$ is the decimal $0.36$, which stops.',
    },
    {
      q: 'Write $0.\\overline{18}$ as a fraction in simplest form.',
      choices: ['$\\frac{18}{100}$', '$\\frac{2}{11}$', '$\\frac{2}{9}$', '$\\frac{18}{999}$'],
      answer: 1,
      solution:
        'Two repeating digits means multiplying by $100$: from $x = 0.181818\\ldots$ we get $100x = 18.1818\\ldots$ and $99x = 18$, so $x = \\frac{18}{99} = \\frac{2}{11}$. Check the other way round: $2 \\div 11 = 0.1818\\ldots$ ✓ The choice $\\frac{2}{9}$ divides only the top by $9$, $\\frac{18}{999}$ uses the power of ten meant for a three-digit block, and $\\frac{18}{100} = 0.18$ stops.',
    },
    {
      q: 'Write $0.1\\overline{6}$ as a fraction in simplest form.',
      choices: ['$\\frac{16}{99}$', '$\\frac{16}{90}$', '$\\frac{1}{60}$', '$\\frac{1}{6}$'],
      answer: 3,
      solution:
        'One digit sits outside the bar, so this needs TWO powers of ten. Let $x = 0.1666\\ldots$; then $10x = 1.666\\ldots$ and $100x = 16.666\\ldots$ Subtract the first from the second: the endless $6$s cancel and $90x = 16 - 1 = 15$, so $x = \\frac{15}{90} = \\frac{1}{6}$. Forgetting to subtract that $1$ gives $\\frac{16}{90}$; treating $16$ as the repeating block gives $\\frac{16}{99}$; and $\\frac{1}{60}$ shrinks $\\frac{1}{6}$ by an extra factor of $10$.',
    },
  ],
  // p10 — the surprise that 0.999... is exactly 1
  [
    {
      q: 'What is $0.\\overline{9} \\div 3$?',
      choices: ['$0.\\overline{3}$', '$0.3$', '$0.33$', '$0.\\overline{9}$'],
      answer: 0,
      solution:
        'First pin down $0.\\overline{9}$: with $x = 0.999\\ldots$ we get $10x = 9.999\\ldots$ and $9x = 9$, so $x = 1$ exactly. Dividing that $1$ by $3$ gives $\\frac{1}{3} = 0.\\overline{3}$. The choices $0.3$ and $0.33$ are the thirds that stop too soon, and $0.\\overline{9}$ assumes the endless $9$s survive a division untouched.',
    },
    {
      q: 'What is $1 - 0.\\overline{9}$?',
      choices: ['$0.1$', '$0.\\overline{1}$', '$0$', '$0.0\\overline{1}$'],
      answer: 2,
      solution:
        'Since $0.\\overline{9}$ IS $1$ — the multiply-and-subtract trick gives $9x = 9$ — the difference is exactly $0$. There is no final $9$ for a leftover to hide behind: any gap would have to be smaller than $0.1$, smaller than $0.01$, smaller than every decimal you could write, and the only number like that is zero. The other three choices are the imaginary gaps students picture: a tenth, $\\frac{1}{9}$, and $\\frac{1}{90}$.',
    },
    {
      q: 'Multiply both sides of $\\frac{1}{3} = 0.\\overline{3}$ by $3$. What statement do you get?',
      choices: ['$1 = 0.9$', '$1 = 0.99$', '$3 = 0.\\overline{9}$', '$1 = 0.\\overline{9}$'],
      answer: 3,
      solution:
        'The left side becomes $3 \\times \\frac{1}{3} = 1$, and the right side becomes three copies of $0.333\\ldots$, which is $0.999\\ldots$ So $1 = 0.\\overline{9}$ — the same surprising fact the multiply-and-subtract trick produces. The choice $3 = 0.\\overline{9}$ multiplies only the left side, and the two decimals that stop early are simply not equal to $1$.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 6,
  sections: {
    '6.3': s63,
    '6.4': s64,
  },
}
