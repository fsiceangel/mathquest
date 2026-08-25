// Prealgebra chapter 4 — variations for sections 4.7 and 4.8, the chapter
// challenge, and the chapter worksheet.
// All problems and solutions are original MathQuest content.

const s47 = [
  // 1. Add fractions that already share a denominator.
  [
    {
      q: 'Compute $\\frac{4}{11} + \\frac{5}{11}$.',
      choices: ['$\\frac{9}{22}$', '$\\frac{9}{11}$', '$\\frac{1}{11}$', '$\\frac{20}{11}$'],
      answer: 1,
      solution: 'Both pieces are elevenths, so add the tops and keep the bottom: $4 + 5 = 9$, giving $\\frac{9}{11}$. The piece size never changes when you add, so $\\frac{9}{22}$ (bottoms added) is wrong, $\\frac{1}{11}$ subtracts instead of adds, and $\\frac{20}{11}$ multiplies the tops.',
    },
    {
      q: 'Compute $\\frac{3}{8} + \\frac{4}{8}$.',
      choices: ['$\\frac{7}{16}$', '$\\frac{1}{8}$', '$\\frac{7}{8}$', '$1$'],
      answer: 2,
      solution: 'The pieces are all eighths, so add the tops: $3 + 4 = 7$, and the bottom stays $8$. The answer is $\\frac{7}{8}$. Adding the bottoms gives $\\frac{7}{16}$, subtracting the tops gives $\\frac{1}{8}$, and a slip of one on top ($3 + 4 = 8$?) would give $\\frac{8}{8} = 1$.',
    },
    {
      q: 'Leo walked $\\frac{3}{10}$ of a mile before lunch and $\\frac{4}{10}$ of a mile after lunch. How far did he walk in all?',
      choices: ['$\\frac{7}{20}$', '$\\frac{1}{10}$', '$\\frac{6}{5}$', '$\\frac{7}{10}$'],
      answer: 3,
      solution: 'Both distances are counted in tenths of a mile, so add the tops: $3 + 4 = 7$ tenths, or $\\frac{7}{10}$ of a mile. Adding the bottoms would give $\\frac{7}{20}$, subtracting gives $\\frac{1}{10}$, and multiplying the tops gives $\\frac{12}{10} = \\frac{6}{5}$ — none of those is "put the two walks together."',
    },
  ],
  // 2. Subtract with a shared denominator, then simplify.
  [
    {
      q: 'Compute $\\frac{7}{10} - \\frac{3}{10}$.',
      choices: ['$\\frac{2}{5}$', '$1$', '$\\frac{1}{5}$', '$-\\frac{2}{5}$'],
      answer: 0,
      solution: 'Same-size pieces, so subtract the tops: $7 - 3 = 4$, giving $\\frac{4}{10}$. Always finish by simplifying — divide top and bottom by $2$ to get $\\frac{2}{5}$. Adding by mistake gives $\\frac{10}{10} = 1$, subtracting backwards gives $-\\frac{2}{5}$, and halving only the top gives $\\frac{2}{10} = \\frac{1}{5}$.',
    },
    {
      q: 'Compute $\\frac{11}{12} - \\frac{5}{12}$.',
      choices: ['$\\frac{4}{3}$', '$\\frac{1}{2}$', '$\\frac{7}{12}$', '$\\frac{1}{6}$'],
      answer: 1,
      solution: 'Subtract the tops and keep twelfths: $11 - 5 = 6$, so we have $\\frac{6}{12}$. Simplify by dividing top and bottom by $6$: the answer is $\\frac{1}{2}$. Adding instead gives $\\frac{16}{12} = \\frac{4}{3}$; a subtraction slip gives $\\frac{7}{12}$; dividing the top by $6$ but the bottom by only $2$ gives $\\frac{1}{6}$.',
    },
    {
      q: 'A jug held $\\frac{11}{15}$ of a liter of cider. Someone poured out $\\frac{5}{15}$ of a liter. What fraction of a liter is left?',
      choices: ['$\\frac{16}{15}$', '$\\frac{6}{5}$', '$\\frac{2}{15}$', '$\\frac{2}{5}$'],
      answer: 3,
      solution: 'Pouring out means subtract: $\\frac{11}{15} - \\frac{5}{15} = \\frac{6}{15}$. Simplify by dividing top and bottom by $3$: $\\frac{2}{5}$ of a liter. Adding gives $\\frac{16}{15}$ (more than you started with — impossible!), dividing only the bottom by $3$ gives $\\frac{6}{5}$, and dividing only the top by $3$ gives $\\frac{2}{15}$.',
    },
  ],
  // 3. One denominator is a multiple of the other.
  [
    {
      q: 'Compute $\\frac{1}{3} + \\frac{1}{6}$.',
      choices: ['$\\frac{1}{2}$', '$\\frac{2}{9}$', '$\\frac{1}{3}$', '$\\frac{1}{18}$'],
      answer: 0,
      solution: 'Since $6$ is a multiple of $3$, use sixths: $\\frac{1}{3} = \\frac{2}{6}$. Then $\\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$. Adding straight across gives $\\frac{2}{9}$; adding the tops without converting gives $\\frac{2}{6} = \\frac{1}{3}$; multiplying gives $\\frac{1}{18}$.',
    },
    {
      q: 'Compute $\\frac{2}{5} + \\frac{1}{10}$.',
      choices: ['$\\frac{1}{5}$', '$\\frac{3}{10}$', '$\\frac{1}{2}$', '$\\frac{1}{25}$'],
      answer: 2,
      solution: 'Rewrite $\\frac{2}{5}$ in tenths: $\\frac{2}{5} = \\frac{4}{10}$. Now $\\frac{4}{10} + \\frac{1}{10} = \\frac{5}{10} = \\frac{1}{2}$. Adding across gives $\\frac{3}{15} = \\frac{1}{5}$; adding the tops but forgetting to convert gives $\\frac{3}{10}$; multiplying gives $\\frac{2}{50} = \\frac{1}{25}$.',
    },
    {
      q: 'Compute $\\frac{3}{4} - \\frac{1}{8}$.',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{7}{8}$', '$\\frac{5}{8}$'],
      answer: 3,
      solution: 'Use eighths, since $8$ is a multiple of $4$: $\\frac{3}{4} = \\frac{6}{8}$. Then $\\frac{6}{8} - \\frac{1}{8} = \\frac{5}{8}$. Subtracting straight across gives $\\frac{2}{4} = \\frac{1}{2}$; subtracting the tops without converting gives $\\frac{2}{8} = \\frac{1}{4}$; adding instead of subtracting gives $\\frac{7}{8}$.',
    },
  ],
  // 4. Unlike denominators, one a multiple of the other, with simplifying.
  [
    {
      q: 'Compute $\\frac{1}{2} + \\frac{3}{10}$.',
      choices: ['$\\frac{4}{5}$', '$\\frac{1}{3}$', '$\\frac{2}{5}$', '$\\frac{3}{20}$'],
      answer: 0,
      solution: 'The LCM of $2$ and $10$ is $10$: $\\frac{1}{2} = \\frac{5}{10}$. Then $\\frac{5}{10} + \\frac{3}{10} = \\frac{8}{10}$, which simplifies to $\\frac{4}{5}$. Adding across gives $\\frac{4}{12} = \\frac{1}{3}$; adding the tops without converting gives $\\frac{4}{10} = \\frac{2}{5}$; multiplying gives $\\frac{3}{20}$.',
    },
    {
      q: 'Compute $\\frac{3}{10} + \\frac{2}{5}$.',
      choices: ['$\\frac{1}{3}$', '$\\frac{7}{10}$', '$\\frac{1}{2}$', '$\\frac{3}{25}$'],
      answer: 1,
      solution: 'Rewrite $\\frac{2}{5}$ as $\\frac{4}{10}$, then add the tops: $\\frac{3}{10} + \\frac{4}{10} = \\frac{7}{10}$, already in lowest terms. Adding across gives $\\frac{5}{15} = \\frac{1}{3}$; forgetting to convert gives $\\frac{5}{10} = \\frac{1}{2}$; multiplying gives $\\frac{6}{50} = \\frac{3}{25}$.',
    },
    {
      q: 'A ribbon is $\\frac{5}{6}$ of a meter long. You cut off a piece $\\frac{1}{3}$ of a meter long. How long is the piece that remains?',
      choices: ['$\\frac{2}{3}$', '$\\frac{4}{3}$', '$\\frac{1}{2}$', '$\\frac{7}{6}$'],
      answer: 2,
      solution: 'Work in sixths: $\\frac{1}{3} = \\frac{2}{6}$, so what remains is $\\frac{5}{6} - \\frac{2}{6} = \\frac{3}{6} = \\frac{1}{2}$ of a meter. Subtracting the tops without converting gives $\\frac{4}{6} = \\frac{2}{3}$; subtracting straight across gives $\\frac{4}{3}$; adding gives $\\frac{7}{6}$, which is longer than the ribbon you started with.',
    },
  ],
  // 5. Unlike denominators with an improper sum.
  [
    {
      q: 'Compute $\\frac{5}{6} + \\frac{3}{4}$.',
      choices: ['$\\frac{4}{5}$', '$\\frac{19}{12}$', '$\\frac{1}{12}$', '$\\frac{5}{8}$'],
      answer: 1,
      solution: 'The LCM of $6$ and $4$ is $12$: $\\frac{5}{6} = \\frac{10}{12}$ and $\\frac{3}{4} = \\frac{9}{12}$. Add the tops: $10 + 9 = 19$, so the sum is $\\frac{19}{12}$ — a little more than $1$, which fits since both fractions are past a half. Adding across gives $\\frac{8}{10} = \\frac{4}{5}$; subtracting gives $\\frac{1}{12}$; multiplying gives $\\frac{15}{24} = \\frac{5}{8}$.',
    },
    {
      q: 'Compute $\\frac{5}{7} + \\frac{1}{2}$.',
      choices: ['$\\frac{2}{3}$', '$\\frac{3}{7}$', '$\\frac{17}{14}$', '$\\frac{5}{14}$'],
      answer: 2,
      solution: 'Since $7$ and $2$ share no factor, the common denominator is $14$: $\\frac{5}{7} = \\frac{10}{14}$ and $\\frac{1}{2} = \\frac{7}{14}$. The tops give $10 + 7 = 17$, so the sum is $\\frac{17}{14}$. Adding across gives $\\frac{6}{9} = \\frac{2}{3}$; adding the tops over $14$ without converting gives $\\frac{6}{14} = \\frac{3}{7}$; multiplying gives $\\frac{5}{14}$.',
    },
    {
      q: 'Compute $\\frac{4}{5} + \\frac{5}{6}$.',
      choices: ['$\\frac{9}{11}$', '$\\frac{2}{3}$', '$\\frac{1}{30}$', '$\\frac{49}{30}$'],
      answer: 3,
      solution: 'The common denominator is $30$: $\\frac{4}{5} = \\frac{24}{30}$ and $\\frac{5}{6} = \\frac{25}{30}$. Add the tops: $24 + 25 = 49$, giving $\\frac{49}{30}$. Since each fraction is close to $1$, an answer near $\\frac{5}{3}$ is exactly what we expect — so $\\frac{9}{11}$ (added across), $\\frac{2}{3}$ (multiplied), and $\\frac{1}{30}$ (subtracted) all fail the sanity check.',
    },
  ],
  // 6. Subtraction where the LCM beats the product.
  [
    {
      q: 'Compute $\\frac{7}{9} - \\frac{1}{6}$.',
      choices: ['$\\frac{11}{18}$', '$2$', '$\\frac{2}{3}$', '$\\frac{17}{18}$'],
      answer: 0,
      solution: 'The LCM of $9$ and $6$ is $18$, not $54$: $\\frac{7}{9} = \\frac{14}{18}$ and $\\frac{1}{6} = \\frac{3}{18}$. Subtract the tops: $14 - 3 = 11$, giving $\\frac{11}{18}$. Subtracting straight across gives $\\frac{6}{3} = 2$; subtracting the tops over $9$ gives $\\frac{6}{9} = \\frac{2}{3}$; adding gives $\\frac{17}{18}$.',
    },
    {
      q: 'Compute $\\frac{5}{6} - \\frac{4}{9}$.',
      choices: ['$\\frac{23}{18}$', '$\\frac{7}{18}$', '$\\frac{1}{6}$', '$\\frac{1}{3}$'],
      answer: 1,
      solution: 'Use the LCM $18$: $\\frac{5}{6} = \\frac{15}{18}$ and $\\frac{4}{9} = \\frac{8}{18}$. The tops give $15 - 8 = 7$, so the answer is $\\frac{7}{18}$. Adding instead gives $\\frac{23}{18}$; subtracting the tops but keeping the first bottom gives $\\frac{1}{6}$; subtracting straight across gives $\\frac{1}{3}$.',
    },
    {
      q: 'A tank was $\\frac{9}{10}$ full. After a slow leak it was only $\\frac{3}{4}$ full. What fraction of the tank leaked out?',
      choices: ['$1$', '$\\frac{33}{20}$', '$\\frac{3}{5}$', '$\\frac{3}{20}$'],
      answer: 3,
      solution: 'The leak is the difference: $\\frac{9}{10} - \\frac{3}{4}$. The LCM of $10$ and $4$ is $20$: $\\frac{18}{20} - \\frac{15}{20} = \\frac{3}{20}$ of the tank. A slow leak should be a small fraction, so $1$ (subtracted across) and $\\frac{33}{20}$ (added) are impossible, and $\\frac{3}{5}$ comes from subtracting the tops over $10$ without converting.',
    },
  ],
  // 7. Three fractions at once.
  [
    {
      q: 'Compute $\\frac{1}{2} + \\frac{1}{5} + \\frac{3}{10}$.',
      choices: ['$1$', '$\\frac{5}{17}$', '$\\frac{1}{2}$', '$\\frac{7}{10}$'],
      answer: 0,
      solution: 'All three bottoms divide $10$: $\\frac{1}{2} = \\frac{5}{10}$ and $\\frac{1}{5} = \\frac{2}{10}$. The sum is $\\frac{5}{10} + \\frac{2}{10} + \\frac{3}{10} = \\frac{10}{10} = 1$ — a perfect whole. Adding across gives $\\frac{5}{17}$; adding just the tops over $10$ gives $\\frac{5}{10} = \\frac{1}{2}$; turning $\\frac{1}{2}$ into $\\frac{2}{10}$ by mistake gives $\\frac{7}{10}$.',
    },
    {
      q: 'Compute $\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{12}$.',
      choices: ['$\\frac{3}{17}$', '$\\frac{11}{12}$', '$\\frac{1}{4}$', '$\\frac{5}{6}$'],
      answer: 1,
      solution: 'The LCM of $2$, $3$, and $12$ is $12$: the sum becomes $\\frac{6}{12} + \\frac{4}{12} + \\frac{1}{12} = \\frac{11}{12}$, already in lowest terms. Adding across gives $\\frac{3}{17}$; adding just the tops over $12$ gives $\\frac{3}{12} = \\frac{1}{4}$; converting $\\frac{1}{3}$ to $\\frac{3}{12}$ by mistake gives $\\frac{10}{12} = \\frac{5}{6}$.',
    },
    {
      q: 'Compute $\\frac{3}{4} + \\frac{1}{6} - \\frac{1}{2}$.',
      choices: ['$\\frac{1}{4}$', '$\\frac{17}{12}$', '$\\frac{5}{12}$', '$\\frac{3}{8}$'],
      answer: 2,
      solution: 'The LCM of $4$, $6$, and $2$ is $12$: the expression becomes $\\frac{9}{12} + \\frac{2}{12} - \\frac{6}{12}$. The tops give $9 + 2 - 6 = 5$, so the answer is $\\frac{5}{12}$. Using the tops without converting gives $\\frac{3}{12} = \\frac{1}{4}$; adding all three gives $\\frac{17}{12}$; working straight across gives $\\frac{3}{8}$.',
    },
  ],
  // 8. Word problem: combine two parts of one whole.
  [
    {
      q: 'Owen painted $\\frac{2}{5}$ of a fence and Nora painted $\\frac{1}{4}$ of the same fence. What fraction of the fence is painted?',
      choices: ['$\\frac{13}{20}$', '$\\frac{1}{3}$', '$\\frac{3}{20}$', '$\\frac{1}{10}$'],
      answer: 0,
      solution: 'Both fractions measure the same fence, so add them over the common denominator $20$: $\\frac{8}{20} + \\frac{5}{20} = \\frac{13}{20}$ of the fence. Adding across gives $\\frac{3}{9} = \\frac{1}{3}$; subtracting gives $\\frac{3}{20}$ (that would be how much MORE Owen painted); multiplying gives $\\frac{1}{10}$.',
    },
    {
      q: 'A muffin recipe uses $\\frac{1}{3}$ of a cup of oats and $\\frac{1}{2}$ of a cup of flour. How many cups of dry ingredients is that in total?',
      choices: ['$\\frac{2}{5}$', '$\\frac{1}{6}$', '$\\frac{5}{6}$', '$\\frac{7}{6}$'],
      answer: 2,
      solution: 'Add over the common denominator $6$: $\\frac{1}{3} = \\frac{2}{6}$ and $\\frac{1}{2} = \\frac{3}{6}$, so the total is $\\frac{5}{6}$ of a cup. Adding across gives $\\frac{2}{5}$; multiplying gives $\\frac{1}{6}$; converting $\\frac{1}{3}$ by ADDING $3$ to top and bottom instead of doubling gives $\\frac{4}{6}$ and the wrong total $\\frac{7}{6}$.',
    },
    {
      q: 'Zara read $\\frac{3}{8}$ of a book on Monday and $\\frac{1}{4}$ of it on Tuesday. What fraction of the book is still unread?',
      choices: ['$\\frac{5}{8}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{3}{8}$'],
      answer: 3,
      solution: 'First combine the reading: $\\frac{3}{8} + \\frac{2}{8} = \\frac{5}{8}$ of the book. The question asks for what is LEFT, so subtract from the whole: $1 - \\frac{5}{8} = \\frac{8}{8} - \\frac{5}{8} = \\frac{3}{8}$. Stopping at $\\frac{5}{8}$ answers the wrong question; adding the tops over $8$ gives $\\frac{4}{8}$ and the leftover $\\frac{1}{2}$; adding across gives $\\frac{1}{3}$ and the leftover $\\frac{2}{3}$.',
    },
  ],
  // 9. Denominators whose LCM is much smaller than their product.
  [
    {
      q: 'Compute $\\frac{5}{12} + \\frac{7}{18}$.',
      choices: ['$\\frac{2}{5}$', '$\\frac{29}{36}$', '$\\frac{1}{36}$', '$\\frac{11}{18}$'],
      answer: 1,
      solution: 'You do not need $216$! The LCM of $12$ and $18$ is $36$: $\\frac{5}{12} = \\frac{15}{36}$ and $\\frac{7}{18} = \\frac{14}{36}$. Add the tops: $15 + 14 = 29$, giving $\\frac{29}{36}$. Adding across gives $\\frac{12}{30} = \\frac{2}{5}$; subtracting gives $\\frac{1}{36}$; changing only the bottom of $\\frac{7}{18}$ to $36$ gives $\\frac{22}{36} = \\frac{11}{18}$.',
    },
    {
      q: 'Compute $\\frac{9}{20} + \\frac{7}{30}$.',
      choices: ['$\\frac{8}{25}$', '$\\frac{13}{60}$', '$\\frac{41}{60}$', '$\\frac{17}{30}$'],
      answer: 2,
      solution: 'The LCM of $20$ and $30$ is $60$: $\\frac{9}{20} = \\frac{27}{60}$ and $\\frac{7}{30} = \\frac{14}{60}$. The tops give $27 + 14 = 41$, so the sum is $\\frac{41}{60}$. Adding across gives $\\frac{16}{50} = \\frac{8}{25}$; subtracting gives $\\frac{13}{60}$; forgetting to double the $7$ when rewriting over $60$ gives $\\frac{34}{60} = \\frac{17}{30}$.',
    },
    {
      q: 'Compute $\\frac{11}{12} - \\frac{5}{8}$.',
      choices: ['$\\frac{3}{2}$', '$\\frac{37}{24}$', '$\\frac{1}{2}$', '$\\frac{7}{24}$'],
      answer: 3,
      solution: 'The LCM of $12$ and $8$ is $24$, not $96$: $\\frac{11}{12} = \\frac{22}{24}$ and $\\frac{5}{8} = \\frac{15}{24}$. Subtract the tops: $22 - 15 = 7$, so the answer is $\\frac{7}{24}$. Working straight across gives $\\frac{6}{4} = \\frac{3}{2}$; adding gives $\\frac{37}{24}$; scaling $\\frac{5}{8}$ by $2$ instead of $3$ gives $\\frac{10}{24}$ and the wrong answer $\\frac{1}{2}$.',
    },
  ],
  // 10. Find the missing piece.
  [
    {
      q: 'What must be added to $\\frac{3}{10}$ to make $\\frac{4}{5}$?',
      choices: ['$\\frac{1}{2}$', '$\\frac{11}{10}$', '$\\frac{1}{5}$', '$\\frac{1}{10}$'],
      answer: 0,
      solution: 'The missing piece is a subtraction: $\\frac{4}{5} - \\frac{3}{10}$. Rewrite $\\frac{4}{5} = \\frac{8}{10}$, so the gap is $\\frac{8}{10} - \\frac{3}{10} = \\frac{5}{10} = \\frac{1}{2}$. Check: $\\frac{3}{10} + \\frac{5}{10} = \\frac{8}{10} = \\frac{4}{5}$. ✓ Adding the two given fractions gives $\\frac{11}{10}$, and subtracting tops without converting gives $\\frac{1}{5}$ or $\\frac{1}{10}$.',
    },
    {
      q: 'What must be subtracted from $\\frac{5}{6}$ to leave $\\frac{1}{4}$?',
      choices: ['$\\frac{13}{12}$', '$2$', '$\\frac{7}{12}$', '$\\frac{2}{3}$'],
      answer: 2,
      solution: 'The amount removed is $\\frac{5}{6} - \\frac{1}{4}$. Over the LCM $12$: $\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$. Check: $\\frac{10}{12} - \\frac{7}{12} = \\frac{3}{12} = \\frac{1}{4}$. ✓ Adding gives $\\frac{13}{12}$, subtracting across gives $\\frac{4}{2} = 2$, and converting $\\frac{1}{4}$ to $\\frac{2}{12}$ by mistake gives $\\frac{2}{3}$.',
    },
    {
      q: 'A number $n$ satisfies $n + \\frac{2}{9} = \\frac{5}{6}$. What is $n$?',
      choices: ['$\\frac{19}{18}$', '$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{11}{18}$'],
      answer: 3,
      solution: 'Undo the addition by subtracting: $n = \\frac{5}{6} - \\frac{2}{9}$. The LCM of $6$ and $9$ is $18$: $\\frac{15}{18} - \\frac{4}{18} = \\frac{11}{18}$. Check: $\\frac{11}{18} + \\frac{4}{18} = \\frac{15}{18} = \\frac{5}{6}$. ✓ Adding gives $\\frac{19}{18}$; subtracting the tops over $18$ without scaling gives $\\frac{3}{18} = \\frac{1}{6}$; scaling $\\frac{2}{9}$ to $\\frac{6}{18}$ by mistake gives $\\frac{1}{2}$.',
    },
  ],
]

const s48 = [
  // 1. Mixed number to improper fraction.
  [
    {
      q: 'Convert $3\\frac{2}{7}$ to an improper fraction.',
      choices: ['$\\frac{23}{7}$', '$\\frac{17}{7}$', '$\\frac{5}{7}$', '$\\frac{13}{7}$'],
      answer: 0,
      solution: 'Each whole is $7$ sevenths, so $3$ wholes are $3 \\times 7 = 21$ sevenths. Add the $2$ extra: $21 + 2 = 23$ sevenths, or $\\frac{23}{7}$. Multiplying the wrong pair gives $2 \\times 7 + 3 = 17$ or $3 \\times 2 + 7 = 13$, and just adding the numbers gives $\\frac{5}{7}$ — far too small for a number bigger than $3$.',
    },
    {
      q: 'Convert $4\\frac{3}{5}$ to an improper fraction.',
      choices: ['$\\frac{7}{5}$', '$\\frac{23}{5}$', '$\\frac{19}{5}$', '$\\frac{12}{5}$'],
      answer: 1,
      solution: 'Break each whole into fifths: $4 \\times 5 = 20$ fifths, plus the $3$ extra fifths, gives $\\frac{23}{5}$. Check the size: $\\frac{23}{5}$ is between $4$ and $5$. ✓ The trap answers come from adding the whole to the numerator ($\\frac{7}{5}$), swapping the roles of $4$ and $3$ ($3 \\times 5 + 4 = 19$), or multiplying $4 \\times 3$ ($\\frac{12}{5}$).',
    },
    {
      q: 'How many thirds are there in $5\\frac{2}{3}$?',
      choices: ['$7$', '$15$', '$10$', '$17$'],
      answer: 3,
      solution: 'Every whole holds $3$ thirds, so $5$ wholes hold $5 \\times 3 = 15$ thirds. The mixed number carries $2$ more, for $15 + 2 = 17$ thirds in all — that is exactly the improper fraction $\\frac{17}{3}$. Stopping at $15$ forgets the extra pieces, $7$ just adds $5 + 2$, and $10$ multiplies $5 \\times 2$.',
    },
  ],
  // 2. Improper fraction to mixed number.
  [
    {
      q: 'Convert $\\frac{23}{4}$ to a mixed number.',
      choices: ['$5\\frac{1}{4}$', '$5\\frac{3}{4}$', '$4\\frac{3}{4}$', '$6$'],
      answer: 1,
      solution: 'Divide with a remainder: $23 \\div 4 = 5$ remainder $3$, since $5 \\times 4 = 20$ and $23 - 20 = 3$. The quotient is the whole part and the remainder stays on top: $5\\frac{3}{4}$. Counting UP to the next multiple ($24 - 23 = 1$) gives the wrong remainder $5\\frac{1}{4}$; a quotient off by one gives $4\\frac{3}{4}$; rounding to the nearest whole gives $6$.',
    },
    {
      q: 'Convert $\\frac{38}{7}$ to a mixed number.',
      choices: ['$4\\frac{3}{7}$', '$5\\frac{4}{7}$', '$5\\frac{3}{7}$', '$7\\frac{3}{5}$'],
      answer: 2,
      solution: 'Divide: $38 \\div 7 = 5$ remainder $3$, because $5 \\times 7 = 35$ and $38 - 35 = 3$. So $\\frac{38}{7} = 5\\frac{3}{7}$. Using $42 - 38 = 4$ as the remainder gives $5\\frac{4}{7}$; a quotient off by one gives $4\\frac{3}{7}$; letting the divisor and the quotient trade places gives $7\\frac{3}{5}$.',
    },
    {
      q: 'A baker has $\\frac{27}{4}$ cups of sugar. Written as a mixed number, how many cups is that?',
      choices: ['$5\\frac{3}{4}$', '$7\\frac{1}{4}$', '$6\\frac{1}{4}$', '$6\\frac{3}{4}$'],
      answer: 3,
      solution: 'Divide: $27 \\div 4 = 6$ remainder $3$, since $6 \\times 4 = 24$ and $27 - 24 = 3$. That is $6\\frac{3}{4}$ cups. A quotient one too small gives $5\\frac{3}{4}$; counting up to $28$ for the remainder gives $6\\frac{1}{4}$, or $7\\frac{1}{4}$ if the quotient is bumped up too.',
    },
  ],
  // 3. What a mixed number means.
  [
    {
      q: 'The mixed number $4\\frac{3}{7}$ means the same as which expression?',
      choices: ['$4 + \\frac{3}{7}$', '$4 \\times \\frac{3}{7}$', '$\\frac{43}{7}$', '$4 - \\frac{3}{7}$'],
      answer: 0,
      solution: 'A mixed number is a hidden addition: $4\\frac{3}{7}$ means $4 + \\frac{3}{7}$, or four wholes plus three sevenths more. Two numbers written side by side usually mean multiply, but mixed numbers are the exception. And $\\frac{43}{7}$ just glues the digits together — the real improper form is $\\frac{31}{7}$.',
    },
    {
      q: 'Which of these is NOT equal to $2\\frac{3}{5}$?',
      choices: ['$2 + \\frac{3}{5}$', '$\\frac{23}{5}$', '$\\frac{13}{5}$', '$\\frac{6}{5} + \\frac{7}{5}$'],
      answer: 1,
      solution: 'A mixed number is an addition, so $2\\frac{3}{5} = 2 + \\frac{3}{5}$, and converting gives $2 \\times 5 + 3 = 13$ fifths, or $\\frac{13}{5}$. Since $\\frac{6}{5} + \\frac{7}{5} = \\frac{13}{5}$ as well, three of the four match. The odd one out is $\\frac{23}{5}$, which comes from writing the digits $2$ and $3$ next to each other instead of doing the conversion.',
    },
    {
      q: 'Where does $3\\frac{1}{4}$ sit on the number line?',
      choices: ['Exactly at $\\frac{3}{4}$', 'Between $0$ and $1$, three quarters of the way along', 'Between $3$ and $4$, one quarter of the way along', 'Between $4$ and $5$, one quarter of the way along'],
      answer: 2,
      solution: 'The whole part says which two whole numbers you are between: $3\\frac{1}{4} = 3 + \\frac{1}{4}$ is past $3$ but not yet at $4$. The fraction part says how far along: one quarter of the way. So the point sits between $3$ and $4$, a quarter of the way from $3$ toward $4$.',
    },
  ],
  // 4. Adding mixed numbers, no carrying.
  [
    {
      q: 'Compute $2\\frac{1}{3} + 1\\frac{1}{6}$.',
      choices: ['$3\\frac{2}{9}$', '$3\\frac{1}{2}$', '$3\\frac{1}{3}$', '$4\\frac{1}{2}$'],
      answer: 1,
      solution: 'Add the wholes: $2 + 1 = 3$. Add the fractions over the common denominator $6$: $\\frac{2}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2}$. Together that is $3\\frac{1}{2}$. Adding the fraction parts straight across gives $3\\frac{2}{9}$; adding the tops without converting gives $3\\frac{1}{3}$; and there is nothing to carry here, so $4\\frac{1}{2}$ is a whole too many.',
    },
    {
      q: 'Compute $3\\frac{2}{5} + 1\\frac{3}{10}$.',
      choices: ['$4\\frac{1}{3}$', '$4\\frac{1}{2}$', '$4\\frac{7}{10}$', '$5\\frac{7}{10}$'],
      answer: 2,
      solution: 'Wholes first: $3 + 1 = 4$. Fractions over $10$: $\\frac{2}{5} = \\frac{4}{10}$, so $\\frac{4}{10} + \\frac{3}{10} = \\frac{7}{10}$. The sum is $4\\frac{7}{10}$, and since $\\frac{7}{10}$ is under $1$ there is nothing to carry — $5\\frac{7}{10}$ carries a whole that does not exist. Adding across gives $4\\frac{1}{3}$; adding tops without converting gives $4\\frac{1}{2}$.',
    },
    {
      q: 'A hike has two legs: $2\\frac{1}{4}$ miles and then $3\\frac{3}{8}$ miles. How many miles is the whole hike?',
      choices: ['$5\\frac{1}{3}$', '$5\\frac{1}{2}$', '$6\\frac{5}{8}$', '$5\\frac{5}{8}$'],
      answer: 3,
      solution: 'Add the wholes: $2 + 3 = 5$ miles. Add the fractions in eighths: $\\frac{2}{8} + \\frac{3}{8} = \\frac{5}{8}$. The hike is $5\\frac{5}{8}$ miles. Adding the fractions straight across gives $5\\frac{1}{3}$; adding the tops without converting gives $5\\frac{1}{2}$; and $6\\frac{5}{8}$ carries a whole even though $\\frac{5}{8}$ never reached $1$.',
    },
  ],
  // 5. Mixed number times (or divided by) a whole number.
  [
    {
      q: 'Compute $2\\frac{1}{3} \\times 3$.',
      choices: ['$7$', '$6\\frac{1}{3}$', '$6$', '$\\frac{7}{3}$'],
      answer: 0,
      solution: 'Convert first: $2\\frac{1}{3} = \\frac{7}{3}$, and $\\frac{7}{3} \\times 3 = \\frac{21}{3} = 7$. Or think in parts: three $2$s make $6$, and three thirds make $1$ more, for $7$. Tripling only the whole part gives $6\\frac{1}{3}$; dropping the fraction gives $6$; and $\\frac{7}{3}$ is where you stop if you convert and then forget to multiply.',
    },
    {
      q: 'Compute $2\\frac{3}{4} \\times 4$.',
      choices: ['$8\\frac{3}{4}$', '$8$', '$11$', '$\\frac{11}{4}$'],
      answer: 2,
      solution: 'Convert first: $2\\frac{3}{4} = \\frac{11}{4}$, so $\\frac{11}{4} \\times 4 = 11$ — the $4$s cancel beautifully. Checking in parts: four $2$s make $8$, and four three-quarters make $3$ more, giving $11$. Multiplying only the whole part gives $8\\frac{3}{4}$, ignoring the fraction gives $8$, and $\\frac{11}{4}$ is the unmultiplied conversion.',
    },
    {
      q: 'Compute $4\\frac{1}{2} \\div 3$.',
      choices: ['$13\\frac{1}{2}$', '$1\\frac{1}{6}$', '$4\\frac{1}{6}$', '$1\\frac{1}{2}$'],
      answer: 3,
      solution: 'Convert, then divide: $4\\frac{1}{2} = \\frac{9}{2}$, and $\\frac{9}{2} \\div 3 = \\frac{9}{2} \\times \\frac{1}{3} = \\frac{3}{2} = 1\\frac{1}{2}$. Sanity check: three pieces of $1\\frac{1}{2}$ rebuild $4\\frac{1}{2}$. ✓ Multiplying by $3$ instead gives $13\\frac{1}{2}$; splitting the parts up and dividing each by $3$ gives $1\\frac{1}{6}$; dividing only the fraction part gives $4\\frac{1}{6}$.',
    },
  ],
  // 6. Subtracting mixed numbers where borrowing is needed.
  [
    {
      q: 'Compute $5\\frac{1}{4} - 2\\frac{3}{4}$.',
      choices: ['$2\\frac{1}{2}$', '$3\\frac{1}{2}$', '$3$', '$1\\frac{1}{4}$'],
      answer: 0,
      solution: 'Convert to improper fractions and the borrowing takes care of itself: $\\frac{21}{4} - \\frac{11}{4} = \\frac{10}{4} = \\frac{5}{2} = 2\\frac{1}{2}$. Subtracting the fractions in whichever order looks easier ($\\frac{3}{4} - \\frac{1}{4}$) gives $3\\frac{1}{2}$; subtracting only the wholes gives $3$; and halving just the top of $\\frac{10}{4}$ gives $1\\frac{1}{4}$.',
    },
    {
      q: 'Compute $6\\frac{1}{3} - 2\\frac{2}{3}$.',
      choices: ['$4\\frac{1}{3}$', '$3\\frac{2}{3}$', '$4$', '$3\\frac{1}{3}$'],
      answer: 1,
      solution: 'Convert first: $6\\frac{1}{3} = \\frac{19}{3}$ and $2\\frac{2}{3} = \\frac{8}{3}$. Then $\\frac{19}{3} - \\frac{8}{3} = \\frac{11}{3} = 3\\frac{2}{3}$. Flipping the fraction subtraction to $\\frac{2}{3} - \\frac{1}{3}$ gives $4\\frac{1}{3}$; subtracting only the wholes gives $4$; converting $2\\frac{2}{3}$ to $\\frac{9}{3}$ by mistake gives $3\\frac{1}{3}$.',
    },
    {
      q: 'A pitcher holds $3\\frac{1}{6}$ liters of juice. You pour out $1\\frac{5}{6}$ liters. How many liters are left?',
      choices: ['$2\\frac{2}{3}$', '$2$', '$1\\frac{2}{3}$', '$1\\frac{1}{3}$'],
      answer: 3,
      solution: 'Convert and subtract: $\\frac{19}{6} - \\frac{11}{6} = \\frac{8}{6} = \\frac{4}{3} = 1\\frac{1}{3}$ liters. Since $\\frac{1}{6}$ is smaller than $\\frac{5}{6}$, working part by part needs a borrow — subtracting the fractions the easy way instead gives $2\\frac{2}{3}$, or $1\\frac{2}{3}$ if you drop a whole but still flip the fraction subtraction. Taking only $3 - 1$ gives $2$.',
    },
  ],
  // 7. Multiplying two mixed numbers.
  [
    {
      q: 'Compute $2\\frac{1}{4} \\times 1\\frac{1}{3}$.',
      choices: ['$3$', '$2\\frac{1}{12}$', '$3\\frac{7}{12}$', '$2\\frac{1}{4}$'],
      answer: 0,
      solution: 'Convert both first: $\\frac{9}{4} \\times \\frac{4}{3}$. The $4$s cancel and $\\frac{9}{3} = 3$. Multiplying the whole parts and the fraction parts separately gives $2 + \\frac{1}{12} = 2\\frac{1}{12}$, which misses the cross pieces; adding instead of multiplying gives $3\\frac{7}{12}$; multiplying by just the whole part $1$ leaves $2\\frac{1}{4}$ unchanged.',
    },
    {
      q: 'Compute $3\\frac{1}{3} \\times 1\\frac{1}{5}$.',
      choices: ['$3\\frac{1}{15}$', '$4\\frac{8}{15}$', '$4$', '$3\\frac{1}{3}$'],
      answer: 2,
      solution: 'Convert: $\\frac{10}{3} \\times \\frac{6}{5}$. Cancel the $5$ into the $10$ and the $3$ into the $6$: $\\frac{2}{1} \\times \\frac{2}{1} = 4$. Multiplying parts separately gives $3\\frac{1}{15}$ — always too small; adding gives $4\\frac{8}{15}$; multiplying by the whole part $1$ alone leaves $3\\frac{1}{3}$.',
    },
    {
      q: 'A garden bed is $3\\frac{1}{2}$ meters long and $1\\frac{3}{7}$ meters wide. What is its area, in square meters?',
      choices: ['$3\\frac{3}{14}$', '$4\\frac{13}{14}$', '$3\\frac{1}{2}$', '$5$'],
      answer: 3,
      solution: 'Area is length times width, so convert and multiply: $\\frac{7}{2} \\times \\frac{10}{7}$. The $7$s cancel and $\\frac{10}{2} = 5$ square meters. Multiplying the parts separately gives $3\\frac{3}{14}$; adding the two side lengths gives $4\\frac{13}{14}$ (that would be a perimeter idea, not an area); multiplying by the whole part $1$ alone leaves $3\\frac{1}{2}$.',
    },
  ],
  // 8. Adding mixed numbers when the fractions overflow past 1.
  [
    {
      q: 'Compute $3\\frac{3}{4} + 2\\frac{1}{2}$.',
      choices: ['$6\\frac{1}{4}$', '$5\\frac{1}{4}$', '$5\\frac{2}{3}$', '$6$'],
      answer: 0,
      solution: 'Wholes: $3 + 2 = 5$. Fractions in quarters: $\\frac{3}{4} + \\frac{2}{4} = \\frac{5}{4} = 1\\frac{1}{4}$, which overflows past $1$, so carry the whole: $5 + 1\\frac{1}{4} = 6\\frac{1}{4}$. Forgetting to carry gives $5\\frac{1}{4}$; adding across gives $5\\frac{2}{3}$; adding the tops without converting gives $\\frac{4}{4} = 1$ and the total $6$.',
    },
    {
      q: 'Compute $4\\frac{5}{6} + 3\\frac{3}{4}$.',
      choices: ['$7\\frac{7}{12}$', '$8\\frac{7}{12}$', '$7\\frac{4}{5}$', '$8\\frac{1}{3}$'],
      answer: 1,
      solution: 'Wholes: $4 + 3 = 7$. Fractions over the LCM $12$: $\\frac{10}{12} + \\frac{9}{12} = \\frac{19}{12} = 1\\frac{7}{12}$. Carry that whole: $7 + 1\\frac{7}{12} = 8\\frac{7}{12}$. Forgetting the carry gives $7\\frac{7}{12}$; adding the fractions across gives $7\\frac{4}{5}$; adding the tops over $6$ without converting gives $\\frac{8}{6} = 1\\frac{1}{3}$ and the total $8\\frac{1}{3}$.',
    },
    {
      q: 'Two stacks of books measure $2\\frac{7}{8}$ inches and $1\\frac{5}{6}$ inches tall. Stacked together, how many inches tall are they?',
      choices: ['$3\\frac{17}{24}$', '$3\\frac{6}{7}$', '$4\\frac{17}{24}$', '$4\\frac{1}{2}$'],
      answer: 2,
      solution: 'Wholes: $2 + 1 = 3$ inches. Fractions over the LCM $24$: $\\frac{21}{24} + \\frac{20}{24} = \\frac{41}{24} = 1\\frac{17}{24}$, so carry a whole to get $4\\frac{17}{24}$ inches. Skipping the carry gives $3\\frac{17}{24}$; adding the fractions across gives $3\\frac{6}{7}$; adding the tops over $8$ gives $\\frac{12}{8} = 1\\frac{1}{2}$ and the total $4\\frac{1}{2}$.',
    },
  ],
  // 9. Division word problems with mixed numbers.
  [
    {
      q: 'A rope is $8\\frac{3}{4}$ meters long. How many pieces of length $1\\frac{1}{4}$ meters can be cut from it?',
      choices: ['$7$', '$10\\frac{15}{16}$', '$8$', '$11$'],
      answer: 0,
      solution: '"How many fit?" is a division: $8\\frac{3}{4} \\div 1\\frac{1}{4} = \\frac{35}{4} \\div \\frac{5}{4} = \\frac{35}{4} \\times \\frac{4}{5} = 7$ pieces, with nothing left over. Multiplying instead gives $10\\frac{15}{16}$; dividing just the whole parts gives $8$; dividing the wholes and the fractions separately and adding the results gives $11$.',
    },
    {
      q: 'A ribbon $9\\frac{1}{3}$ feet long is cut into pieces $1\\frac{1}{6}$ feet long. How many pieces are there?',
      choices: ['$10\\frac{8}{9}$', '$8$', '$9$', '$11$'],
      answer: 1,
      solution: 'Divide: $\\frac{28}{3} \\div \\frac{7}{6} = \\frac{28}{3} \\times \\frac{6}{7}$. Cancel the $7$ into the $28$ and the $3$ into the $6$: $4 \\times 2 = 8$ pieces. Check: $8 \\times 1\\frac{1}{6} = \\frac{56}{6} = 9\\frac{1}{3}$. ✓ Multiplying gives $10\\frac{8}{9}$; dividing only the wholes gives $9$; dividing the parts separately and adding gives $11$.',
    },
    {
      q: 'A plank $10\\frac{1}{2}$ feet long is sawn into $7$ equal pieces. How many feet long is each piece?',
      choices: ['$73\\frac{1}{2}$', '$1\\frac{1}{14}$', '$\\frac{2}{3}$', '$1\\frac{1}{2}$'],
      answer: 3,
      solution: 'Sharing equally is division: $10\\frac{1}{2} \\div 7 = \\frac{21}{2} \\times \\frac{1}{7} = \\frac{3}{2} = 1\\frac{1}{2}$ feet. Check: $7 \\times 1\\frac{1}{2} = 10\\frac{1}{2}$. ✓ Multiplying by $7$ gives $73\\frac{1}{2}$; dividing the whole part and the fraction part separately gives $1\\frac{1}{14}$; dividing backwards ($7 \\div 10\\frac{1}{2}$) gives $\\frac{2}{3}$.',
    },
  ],
  // 10. Powers of mixed numbers.
  [
    {
      q: 'Compute $\\left(2\\frac{1}{2}\\right)^2$.',
      choices: ['$4\\frac{1}{4}$', '$6\\frac{1}{4}$', '$5$', '$4\\frac{1}{2}$'],
      answer: 1,
      solution: 'Convert first: $2\\frac{1}{2} = \\frac{5}{2}$, so the square is $\\frac{25}{4} = 6\\frac{1}{4}$. Squaring the whole part and the fraction part separately gives $4 + \\frac{1}{4} = 4\\frac{1}{4}$ — too small, because it drops the cross pieces. Doubling instead of squaring gives $5$; squaring only the whole and keeping the half gives $4\\frac{1}{2}$.',
    },
    {
      q: 'Compute $\\left(2\\frac{1}{3}\\right)^2$.',
      choices: ['$4\\frac{1}{9}$', '$4\\frac{2}{3}$', '$5\\frac{4}{9}$', '$4\\frac{1}{3}$'],
      answer: 2,
      solution: 'Convert first: $2\\frac{1}{3} = \\frac{7}{3}$, and $\\left(\\frac{7}{3}\\right)^2 = \\frac{49}{9}$. Since $49 \\div 9 = 5$ remainder $4$, the answer is $5\\frac{4}{9}$. Squaring the parts separately gives $4\\frac{1}{9}$; doubling gives $4\\frac{2}{3}$; squaring only the whole part gives $4\\frac{1}{3}$.',
    },
    {
      q: 'Compute $\\left(1\\frac{1}{2}\\right)^3$.',
      choices: ['$1\\frac{1}{8}$', '$4\\frac{1}{2}$', '$2\\frac{1}{4}$', '$3\\frac{3}{8}$'],
      answer: 3,
      solution: 'Convert first: $1\\frac{1}{2} = \\frac{3}{2}$, so the cube is $\\frac{3^3}{2^3} = \\frac{27}{8}$. Since $27 \\div 8 = 3$ remainder $3$, that is $3\\frac{3}{8}$. Cubing the parts separately gives $1\\frac{1}{8}$; multiplying by $3$ instead of cubing gives $4\\frac{1}{2}$; stopping at the square gives $2\\frac{1}{4}$.',
    },
  ],
]

const challenge = [
  // 1. Hop size on a number line that does not stop at 1.
  [
    {
      q: 'The space from $0$ to $2$ is split into $10$ equal hops. What number is at the $7$th tick mark after $0$?',
      choices: ['$\\frac{7}{5}$', '$\\frac{7}{10}$', '$\\frac{10}{7}$', '$\\frac{3}{5}$'],
      answer: 0,
      solution: 'Ten hops cover a distance of $2$, so each hop is $2 \\div 10 = \\frac{1}{5}$ — fifths, not tenths, because the line runs to $2$. Seven hops reach $7 \\times \\frac{1}{5} = \\frac{7}{5}$. Treating the hops as tenths gives $\\frac{7}{10}$, flipping gives $\\frac{10}{7}$, and counting the $3$ hops left over at the far end gives $\\frac{3}{5}$.',
    },
    {
      q: 'The space from $0$ to $5$ is split into $20$ equal hops. What number is at the $9$th tick mark after $0$?',
      choices: ['$\\frac{9}{20}$', '$\\frac{20}{9}$', '$\\frac{9}{4}$', '$\\frac{11}{4}$'],
      answer: 2,
      solution: 'Twenty hops cover $5$, so each hop is $5 \\div 20 = \\frac{1}{4}$. Nine hops land on $\\frac{9}{4}$, which sits between $2$ and $3$ — sensible, since $9$ hops is a bit under half of the way to $5$. Calling the hops twentieths gives $\\frac{9}{20}$; counting the remaining $11$ hops instead gives $\\frac{11}{4}$.',
    },
    {
      q: 'The space from $0$ to $4$ is split into equal hops, and the $5$th tick mark after $0$ lands exactly on $\\frac{5}{3}$. How many hops is the whole space split into?',
      choices: ['$3$', '$20$', '$15$', '$12$'],
      answer: 3,
      solution: 'Five equal hops reach $\\frac{5}{3}$, so one hop is $\\frac{5}{3} \\div 5 = \\frac{1}{3}$. Now ask how many thirds fit in $4$: that is $4 \\div \\frac{1}{3} = 4 \\times 3 = 12$ hops. Reading the $3$ straight off the label ignores the length of the line; $15$ and $20$ come from multiplying $5$ by the wrong partner.',
    },
  ],
  // 2. Telescoping product of fractions.
  [
    {
      q: 'Compute $\\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5} \\times \\cdots \\times \\frac{11}{12}$.',
      choices: ['$\\frac{1}{6}$', '$\\frac{11}{12}$', '$\\frac{1}{12}$', '$\\frac{2}{3}$'],
      answer: 0,
      solution: 'Every number from $3$ through $11$ shows up once on top and once on the bottom, so it all cancels. Only the first top, $2$, and the last bottom, $12$, survive: $\\frac{2}{12} = \\frac{1}{6}$. Losing that leading $2$ gives $\\frac{1}{12}$, and $\\frac{11}{12}$ or $\\frac{2}{3}$ is just one factor copied down.',
    },
    {
      q: 'Compute $\\frac{3}{4} \\times \\frac{4}{5} \\times \\frac{5}{6} \\times \\cdots \\times \\frac{9}{10}$.',
      choices: ['$\\frac{9}{10}$', '$\\frac{3}{10}$', '$\\frac{1}{10}$', '$\\frac{3}{4}$'],
      answer: 1,
      solution: 'The chain telescopes: $4$, $5$, $6$, $7$, $8$, and $9$ each appear once on top and once on the bottom and cancel out. What is left is the first numerator over the last denominator: $\\frac{3}{10}$. Forgetting that the chain starts at $3$ rather than $1$ gives $\\frac{1}{10}$.',
    },
    {
      q: 'The product $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\cdots \\times \\frac{n}{n+1}$ equals $\\frac{1}{25}$. What is $n$?',
      choices: ['$25$', '$23$', '$24$', '$12$'],
      answer: 2,
      solution: 'Everything between the ends cancels, so the product is simply $\\frac{1}{n+1}$. Setting $\\frac{1}{n+1} = \\frac{1}{25}$ gives $n + 1 = 25$, so $n = 24$ and the last factor is $\\frac{24}{25}$. Answering $25$ reports the denominator instead of $n$; $23$ steps one too far the other way.',
    },
  ],
  // 3. Dividing by a fraction, with cancelling.
  [
    {
      q: 'Compute $\\frac{2}{3} \\div \\frac{8}{9}$.',
      choices: ['$\\frac{16}{27}$', '$\\frac{3}{4}$', '$\\frac{4}{3}$', '$\\frac{27}{16}$'],
      answer: 1,
      solution: 'Flip the divisor and multiply: $\\frac{2}{3} \\times \\frac{9}{8}$. The $3$ into the $9$ leaves $3$ on top, and the $2$ into the $8$ leaves $4$ below: $\\frac{3}{4}$. Since $\\frac{8}{9}$ is close to $1$, the answer should be close to $\\frac{2}{3}$ — and $\\frac{3}{4}$ is. Forgetting to flip gives $\\frac{16}{27}$, flipping the first fraction gives $\\frac{4}{3}$, and flipping both gives $\\frac{27}{16}$.',
    },
    {
      q: 'Compute $\\frac{5}{6} \\div \\frac{25}{9}$.',
      choices: ['$\\frac{125}{54}$', '$\\frac{54}{125}$', '$\\frac{3}{10}$', '$\\frac{10}{3}$'],
      answer: 2,
      solution: 'Flip the divisor: $\\frac{5}{6} \\times \\frac{9}{25}$. Cancel the $5$ into the $25$ and the $3$ out of $6$ and $9$: $\\frac{1}{2} \\times \\frac{3}{5} = \\frac{3}{10}$. Dividing by something bigger than $1$ must shrink the number, so an answer above $\\frac{5}{6}$ is a red flag. Forgetting to flip gives $\\frac{125}{54}$; flipping the first instead gives $\\frac{10}{3}$; flipping both gives $\\frac{54}{125}$.',
    },
    {
      q: 'A number $x$ satisfies $x \\div \\frac{4}{9} = \\frac{3}{2}$. What is $x$?',
      choices: ['$\\frac{27}{8}$', '$\\frac{8}{27}$', '$\\frac{9}{4}$', '$\\frac{2}{3}$'],
      answer: 3,
      solution: 'Division is undone by multiplication, so $x = \\frac{3}{2} \\times \\frac{4}{9} = \\frac{12}{18} = \\frac{2}{3}$. Check: $\\frac{2}{3} \\div \\frac{4}{9} = \\frac{2}{3} \\times \\frac{9}{4} = \\frac{3}{2}$. ✓ Multiplying by the reciprocal instead gives $\\frac{27}{8}$; dividing the other way round gives $\\frac{8}{27}$; and $\\frac{9}{4}$ is just the flipped divisor with the work left undone.',
    },
  ],
  // 4. Negative base, negative exponent.
  [
    {
      q: 'Compute $\\left(-\\frac{2}{5}\\right)^{-3}$.',
      choices: ['$-\\frac{125}{8}$', '$\\frac{125}{8}$', '$-\\frac{8}{125}$', '$\\frac{8}{125}$'],
      answer: 0,
      solution: 'The negative exponent flips the fraction: $\\left(-\\frac{5}{2}\\right)^3$. An odd power of a negative number stays negative, and the sizes give $\\frac{125}{8}$, so the answer is $-\\frac{125}{8}$. Two different minus signs, two different jobs: the one in the exponent flips, the one in the base decides the sign. Skipping the flip gives $-\\frac{8}{125}$.',
    },
    {
      q: 'Compute $\\left(-\\frac{4}{3}\\right)^{-2}$.',
      choices: ['$-\\frac{9}{16}$', '$\\frac{9}{16}$', '$\\frac{16}{9}$', '$-\\frac{16}{9}$'],
      answer: 1,
      solution: 'Flip first: $\\left(-\\frac{3}{4}\\right)^2$. An even power of a negative number is positive, so the answer is $\\frac{9}{16}$. A negative exponent never makes the answer negative — that is why $-\\frac{9}{16}$ is wrong — and forgetting to flip gives $\\frac{16}{9}$.',
    },
    {
      q: 'Compute $\\left(-\\frac{1}{2}\\right)^{-5}$.',
      choices: ['$32$', '$-\\frac{1}{32}$', '$\\frac{1}{32}$', '$-32$'],
      answer: 3,
      solution: 'Flip the fraction: $\\left(-\\frac{2}{1}\\right)^5 = (-2)^5$. Five negative factors is an odd number, so the result is negative, and $2^5 = 32$. The answer is $-32$. Notice how the flip made the number BIGGER — raising a small fraction to a negative power always does.',
    },
  ],
  // 5. Simplify a fraction written in prime powers.
  [
    {
      q: 'Simplify $\\frac{3^4 \\times 5}{3^2 \\times 5^2}$.',
      choices: ['$\\frac{9}{5}$', '$\\frac{5}{9}$', '$\\frac{27}{5}$', '$\\frac{9}{25}$'],
      answer: 0,
      solution: 'Cancel matching primes: two $3$s and one $5$ leave each layer. On top, $3^4$ drops to $3^2 = 9$; below, $5^2$ drops to $5$. The fraction is $\\frac{9}{5}$. Cancelling only one $3$ gives $\\frac{27}{5}$; forgetting to cancel the $5$ gives $\\frac{9}{25}$; flipping gives $\\frac{5}{9}$.',
    },
    {
      q: 'The fraction $\\frac{2^6 \\times 5^2}{2^n \\times 5^3}$ simplifies to $\\frac{4}{5}$. What is $n$?',
      choices: ['$2$', '$3$', '$4$', '$8$'],
      answer: 2,
      solution: 'The $5$s always leave one $5$ on the bottom, since $5^3$ has one more factor than $5^2$. So the fraction is $\\frac{2^{6-n}}{5}$, and we need $2^{6-n} = 4 = 2^2$. That means $6 - n = 2$, so $n = 4$. Answering $2$ solves for the exponent left over rather than for $n$ itself.',
    },
    {
      q: 'Simplify $\\frac{2^4 \\times 3^3 \\times 5}{2^6 \\times 3 \\times 5^2}$.',
      choices: ['$\\frac{20}{9}$', '$\\frac{9}{10}$', '$\\frac{3}{20}$', '$\\frac{9}{20}$'],
      answer: 3,
      solution: 'Take one prime at a time. The $2$s: $2^6$ beats $2^4$ by two factors, leaving $2^2 = 4$ below. The $3$s: $3^3$ beats $3$ by two factors, leaving $3^2 = 9$ on top. The $5$s leave one $5$ below. So the fraction is $\\frac{9}{4 \\times 5} = \\frac{9}{20}$. Leaving only one extra $2$ gives $\\frac{9}{10}$; leaving only one extra $3$ gives $\\frac{3}{20}$.',
    },
  ],
  // 6. Ordering several close fractions.
  [
    {
      q: 'Which of these four fractions is the largest: $\\frac{5}{9}$, $\\frac{11}{18}$, $\\frac{4}{7}$, or $\\frac{7}{12}$?',
      choices: ['$\\frac{5}{9}$', '$\\frac{11}{18}$', '$\\frac{4}{7}$', '$\\frac{7}{12}$'],
      answer: 1,
      solution: 'All four bottoms divide $252$: the fractions become $\\frac{140}{252}$, $\\frac{154}{252}$, $\\frac{144}{252}$, and $\\frac{147}{252}$. The biggest top is $154$, so $\\frac{11}{18}$ wins. Every one of these sits just above $\\frac{1}{2}$, so the benchmark cannot break the tie — a common denominator can.',
    },
    {
      q: 'Which of these four fractions is the SMALLEST: $\\frac{5}{6}$, $\\frac{7}{9}$, $\\frac{13}{18}$, or $\\frac{11}{15}$?',
      choices: ['$\\frac{5}{6}$', '$\\frac{7}{9}$', '$\\frac{13}{18}$', '$\\frac{11}{15}$'],
      answer: 2,
      solution: 'The LCM of $6$, $9$, $18$, and $15$ is $90$: the fractions become $\\frac{75}{90}$, $\\frac{70}{90}$, $\\frac{65}{90}$, and $\\frac{66}{90}$. The smallest top is $65$, so $\\frac{13}{18}$ is the smallest fraction — but only just, since $\\frac{11}{15}$ is a single ninetieth behind it.',
    },
    {
      q: 'Which of these four fractions is closest to $\\frac{1}{2}$: $\\frac{4}{9}$, $\\frac{7}{15}$, $\\frac{5}{11}$, or $\\frac{8}{17}$?',
      choices: ['$\\frac{4}{9}$', '$\\frac{7}{15}$', '$\\frac{5}{11}$', '$\\frac{8}{17}$'],
      answer: 3,
      solution: 'Every one of these is just under a half, so measure each gap. Doubling the top and comparing with the bottom: $\\frac{4}{9} = \\frac{8}{18}$ against $\\frac{9}{18}$, a gap of $\\frac{1}{18}$. The same trick gives gaps of $\\frac{1}{30}$, $\\frac{1}{22}$, and $\\frac{1}{34}$. The smallest gap is $\\frac{1}{34}$, so $\\frac{8}{17}$ is closest. Bigger denominators make the miss smaller here — the opposite of what a quick glance suggests.',
    },
  ],
  // 7. Add and subtract three fractions at once.
  [
    {
      q: 'Compute $\\frac{7}{10} + \\frac{4}{5} - \\frac{3}{2}$.',
      choices: ['$0$', '$3$', '$\\frac{7}{5}$', '$\\frac{3}{2}$'],
      answer: 0,
      solution: 'Put everything over $10$: $\\frac{7}{10} + \\frac{8}{10} - \\frac{15}{10}$. The tops give $7 + 8 - 15 = 0$, so the whole expression is $0$. Adding all three instead gives $\\frac{30}{10} = 3$; stopping after the first two gives $\\frac{3}{2}$; forgetting to rewrite $\\frac{3}{2}$ over $10$ gives $\\frac{7}{5}$.',
    },
    {
      q: 'Compute $\\frac{7}{8} - \\frac{5}{6} + \\frac{11}{12}$.',
      choices: ['$\\frac{21}{8}$', '$\\frac{23}{24}$', '$-\\frac{7}{8}$', '$\\frac{1}{24}$'],
      answer: 1,
      solution: 'The LCM of $8$, $6$, and $12$ is $24$: the expression becomes $\\frac{21}{24} - \\frac{20}{24} + \\frac{22}{24}$. The tops give $21 - 20 + 22 = 23$, so the answer is $\\frac{23}{24}$. Adding all three gives $\\frac{63}{24} = \\frac{21}{8}$; letting the minus sign spill onto the third fraction gives $-\\frac{7}{8}$; stopping after the subtraction gives $\\frac{1}{24}$.',
    },
    {
      q: 'What must be added to $\\frac{3}{8} + \\frac{5}{12}$ to make $\\frac{3}{2}$?',
      choices: ['$\\frac{19}{24}$', '$\\frac{55}{24}$', '$\\frac{17}{24}$', '$\\frac{5}{24}$'],
      answer: 2,
      solution: 'First combine what you have, over the LCM $24$: $\\frac{9}{24} + \\frac{10}{24} = \\frac{19}{24}$. The target is $\\frac{3}{2} = \\frac{36}{24}$, so the missing piece is $\\frac{36}{24} - \\frac{19}{24} = \\frac{17}{24}$. Check: $\\frac{19}{24} + \\frac{17}{24} = \\frac{36}{24} = \\frac{3}{2}$. ✓ Stopping at $\\frac{19}{24}$ answers the wrong question, adding everything gives $\\frac{55}{24}$, and aiming at $1$ instead of $\\frac{3}{2}$ gives $\\frac{5}{24}$.',
    },
  ],
  // 8. Multiply or divide two mixed numbers.
  [
    {
      q: 'Compute $2\\frac{3}{5} \\times 1\\frac{7}{8}$.',
      choices: ['$4\\frac{7}{8}$', '$2\\frac{21}{40}$', '$4\\frac{19}{40}$', '$2\\frac{3}{5}$'],
      answer: 0,
      solution: 'Convert first: $\\frac{13}{5} \\times \\frac{15}{8}$. Cancel the $5$ into the $15$: $\\frac{13}{1} \\times \\frac{3}{8} = \\frac{39}{8}$. Since $39 \\div 8 = 4$ remainder $7$, the product is $4\\frac{7}{8}$. Multiplying the parts separately gives $2\\frac{21}{40}$ — always too small; adding gives $4\\frac{19}{40}$; multiplying by the whole part $1$ alone leaves $2\\frac{3}{5}$.',
    },
    {
      q: 'Compute $4\\frac{1}{2} \\times 2\\frac{2}{3}$.',
      choices: ['$8\\frac{1}{3}$', '$12$', '$7\\frac{1}{6}$', '$9$'],
      answer: 1,
      solution: 'Convert: $\\frac{9}{2} \\times \\frac{8}{3}$. Cancel the $3$ into the $9$ and the $2$ into the $8$: $3 \\times 4 = 12$. Multiplying wholes and fractions separately gives $8 + \\frac{1}{3} = 8\\frac{1}{3}$, which misses the cross pieces; adding gives $7\\frac{1}{6}$; multiplying by just the whole part $2$ gives $9$.',
    },
    {
      q: 'A rectangle has an area of $8\\frac{1}{4}$ square meters and a width of $1\\frac{1}{2}$ meters. How many meters long is it?',
      choices: ['$12\\frac{3}{8}$', '$9\\frac{3}{4}$', '$6\\frac{3}{4}$', '$5\\frac{1}{2}$'],
      answer: 3,
      solution: 'Area is length times width, so length is area divided by width: $\\frac{33}{4} \\div \\frac{3}{2} = \\frac{33}{4} \\times \\frac{2}{3} = \\frac{11}{2} = 5\\frac{1}{2}$ meters. Check: $5\\frac{1}{2} \\times 1\\frac{1}{2} = \\frac{11}{2} \\times \\frac{3}{2} = \\frac{33}{4} = 8\\frac{1}{4}$. ✓ Multiplying instead of dividing gives $12\\frac{3}{8}$; adding gives $9\\frac{3}{4}$; subtracting gives $6\\frac{3}{4}$.',
    },
  ],
  // 9. A fraction of a fraction of a whole amount.
  [
    {
      q: 'A shelf holds $84$ books. Exactly $\\frac{5}{7}$ of them are paperbacks, and $\\frac{3}{4}$ of the paperbacks are novels. How many paperback novels are on the shelf?',
      choices: ['$60$', '$45$', '$63$', '$15$'],
      answer: 1,
      solution: 'Work from the outside in. First, $\\frac{5}{7}$ of $84$ is $84 \\div 7 \\times 5 = 60$ paperbacks. Then $\\frac{3}{4}$ of $60$ is $60 \\div 4 \\times 3 = 45$ novels. Stopping at $60$ counts all the paperbacks; taking $\\frac{3}{4}$ of $84$ gives $63$ and skips the first step; $15$ is just one quarter of the paperbacks.',
    },
    {
      q: 'A crate holds $90$ apples. Exactly $\\frac{4}{5}$ of them are ripe, and $\\frac{5}{6}$ of the ripe apples are green. How many green ripe apples are there?',
      choices: ['$72$', '$75$', '$60$', '$18$'],
      answer: 2,
      solution: 'First, $\\frac{4}{5}$ of $90$ is $90 \\div 5 \\times 4 = 72$ ripe apples. Then $\\frac{5}{6}$ of $72$ is $72 \\div 6 \\times 5 = 60$ green ones. Stopping early gives $72$; applying $\\frac{5}{6}$ to the whole crate gives $75$ and forgets that only ripe apples were counted; $18$ is the number that is not ripe.',
    },
    {
      q: 'In a choir, $\\frac{3}{8}$ of the singers are boys, and $\\frac{4}{9}$ of the boys sing tenor. If there are exactly $12$ tenors, how many singers are in the choir?',
      choices: ['$27$', '$32$', '$2$', '$72$'],
      answer: 3,
      solution: 'Work backwards, undoing each fraction with a division. The $12$ tenors are $\\frac{4}{9}$ of the boys, so there are $12 \\div \\frac{4}{9} = 12 \\times \\frac{9}{4} = 27$ boys. Those boys are $\\frac{3}{8}$ of the choir, so the choir has $27 \\div \\frac{3}{8} = 27 \\times \\frac{8}{3} = 72$ singers. Stopping at the boys gives $27$; using only the first fraction gives $32$; multiplying by the fractions instead of dividing shrinks $12$ down to $2$.',
    },
  ],
  // 10. Undo a multiplication by a fraction.
  [
    {
      q: 'Three quarters of a mystery number is $\\frac{9}{20}$. What is the number?',
      choices: ['$\\frac{3}{5}$', '$\\frac{27}{80}$', '$\\frac{5}{3}$', '$\\frac{6}{5}$'],
      answer: 0,
      solution: 'To undo multiplying by $\\frac{3}{4}$, divide by it: $\\frac{9}{20} \\div \\frac{3}{4} = \\frac{9}{20} \\times \\frac{4}{3} = \\frac{36}{60} = \\frac{3}{5}$. Check: $\\frac{3}{4} \\times \\frac{3}{5} = \\frac{9}{20}$. ✓ Multiplying instead of dividing gives $\\frac{27}{80}$; flipping the wrong fraction gives $\\frac{5}{3}$; adding gives $\\frac{6}{5}$.',
    },
    {
      q: 'Five sixths of a mystery number is $\\frac{10}{21}$. What is the number?',
      choices: ['$\\frac{25}{63}$', '$\\frac{7}{4}$', '$\\frac{4}{7}$', '$\\frac{55}{42}$'],
      answer: 2,
      solution: 'Divide to undo: $\\frac{10}{21} \\div \\frac{5}{6} = \\frac{10}{21} \\times \\frac{6}{5} = \\frac{60}{105} = \\frac{4}{7}$. Check: $\\frac{5}{6} \\times \\frac{4}{7} = \\frac{20}{42} = \\frac{10}{21}$. ✓ Since $\\frac{5}{6}$ is less than $1$, the mystery number has to be BIGGER than $\\frac{10}{21}$ — so $\\frac{25}{63}$ (multiplied) is out. Flipping the wrong fraction gives $\\frac{7}{4}$, and adding gives $\\frac{55}{42}$.',
    },
    {
      q: 'A number is divided by $\\frac{5}{8}$, and the result is $\\frac{6}{5}$. What is the number?',
      choices: ['$\\frac{48}{25}$', '$\\frac{25}{48}$', '$\\frac{4}{3}$', '$\\frac{3}{4}$'],
      answer: 3,
      solution: 'Division is undone by multiplication, so the number is $\\frac{6}{5} \\times \\frac{5}{8} = \\frac{30}{40} = \\frac{3}{4}$. Check: $\\frac{3}{4} \\div \\frac{5}{8} = \\frac{3}{4} \\times \\frac{8}{5} = \\frac{6}{5}$. ✓ Dividing a second time gives $\\frac{48}{25}$; dividing backwards gives $\\frac{25}{48}$; flipping the final answer gives $\\frac{4}{3}$.',
    },
  ],
  // 11. The gap between two close fractions.
  [
    {
      q: 'How much bigger is $\\frac{5}{7}$ than $\\frac{7}{10}$?',
      choices: ['$\\frac{1}{70}$', '$\\frac{2}{3}$', '$\\frac{99}{70}$', '$1$'],
      answer: 0,
      solution: 'Subtract over the common denominator $70$: $\\frac{5}{7} = \\frac{50}{70}$ and $\\frac{7}{10} = \\frac{49}{70}$, so the gap is $\\frac{1}{70}$ — these two are extremely close neighbours. The cross-products $50$ and $49$ tell you which is bigger, but their difference of $1$ still has to sit over $70$. Working straight across gives $\\frac{2}{3}$, and adding gives $\\frac{99}{70}$.',
    },
    {
      q: 'How much smaller is $\\frac{4}{9}$ than $\\frac{5}{11}$?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{99}$', '$\\frac{89}{99}$', '$1$'],
      answer: 1,
      solution: 'Use the common denominator $99$: $\\frac{4}{9} = \\frac{44}{99}$ and $\\frac{5}{11} = \\frac{45}{99}$. The gap is $\\frac{45}{99} - \\frac{44}{99} = \\frac{1}{99}$. Working straight across gives $\\frac{1}{2}$, adding gives $\\frac{89}{99}$, and reporting the cross-product difference by itself gives $1$ — a whole unit apart, which is nonsense for two numbers under $\\frac{1}{2}$.',
    },
    {
      q: 'Two fractions differ by exactly $\\frac{1}{40}$. One of them is $\\frac{3}{8}$, and the other one is bigger. What is the other fraction?',
      choices: ['$\\frac{7}{20}$', '$\\frac{1}{12}$', '$\\frac{2}{5}$', '$\\frac{3}{320}$'],
      answer: 2,
      solution: 'Bigger means add the gap: $\\frac{3}{8} + \\frac{1}{40}$. Over $40$ that is $\\frac{15}{40} + \\frac{1}{40} = \\frac{16}{40} = \\frac{2}{5}$. Check: $\\frac{2}{5} - \\frac{3}{8} = \\frac{16}{40} - \\frac{15}{40} = \\frac{1}{40}$. ✓ Subtracting gives the smaller neighbour $\\frac{7}{20}$; adding straight across gives $\\frac{1}{12}$; multiplying gives $\\frac{3}{320}$.',
    },
  ],
  // 12. Scaling a recipe by a mixed number.
  [
    {
      q: 'A paint job needs $1\\frac{5}{6}$ liters of paint per coat. How many liters are needed for $2\\frac{2}{5}$ coats?',
      choices: ['$4\\frac{2}{5}$', '$2\\frac{1}{3}$', '$4\\frac{7}{30}$', '$3\\frac{2}{3}$'],
      answer: 0,
      solution: 'Convert and multiply: $\\frac{11}{6} \\times \\frac{12}{5}$. Cancel the $6$ into the $12$: $\\frac{11}{1} \\times \\frac{2}{5} = \\frac{22}{5} = 4\\frac{2}{5}$ liters. Multiplying the parts separately gives $2\\frac{1}{3}$; adding gives $4\\frac{7}{30}$; using only the whole part $2$ gives $3\\frac{2}{3}$.',
    },
    {
      q: 'A granola recipe needs $3\\frac{1}{5}$ cups of oats for one batch. How many cups are needed for $1\\frac{7}{8}$ batches?',
      choices: ['$3\\frac{7}{40}$', '$6$', '$5\\frac{3}{40}$', '$3\\frac{1}{5}$'],
      answer: 1,
      solution: 'Convert first: $\\frac{16}{5} \\times \\frac{15}{8}$. Cancel the $8$ into the $16$ and the $5$ into the $15$: $2 \\times 3 = 6$ cups exactly. Multiplying wholes and fractions separately gives $3\\frac{7}{40}$; adding gives $5\\frac{3}{40}$; multiplying by the whole part $1$ alone leaves $3\\frac{1}{5}$.',
    },
    {
      q: 'A jug holds $7\\frac{1}{2}$ cups of batter, and one pancake batch uses $1\\frac{7}{8}$ cups. How many full batches can you make?',
      choices: ['$14\\frac{1}{16}$', '$9\\frac{3}{8}$', '$5\\frac{5}{8}$', '$4$'],
      answer: 3,
      solution: '"How many fit?" is a division: $\\frac{15}{2} \\div \\frac{15}{8} = \\frac{15}{2} \\times \\frac{8}{15} = 4$ batches, with the jug emptied exactly. Multiplying instead gives $14\\frac{1}{16}$; adding gives $9\\frac{3}{8}$; subtracting gives $5\\frac{5}{8}$ — none of which answers "how many fit."',
    },
  ],
]

// Worksheet variations — free response, so no choices.
const worksheet = [
  // 1. Simplify a fraction to lowest terms.
  [
    {
      q: 'Simplify $\\frac{60}{144}$.',
      answer: '$\\frac{5}{12}$',
      solution: 'Find the biggest common factor. Since $60 = 2^2 \\times 3 \\times 5$ and $144 = 2^4 \\times 3^2$, they share $2^2 \\times 3 = 12$. Dividing both by $12$ gives $\\frac{5}{12}$. Going in steps works too: halve twice for $\\frac{15}{36}$, then divide by $3$ for $\\frac{5}{12}$. ✓ $5$ and $12$ share no factor, so this is as far as it goes.',
    },
    {
      q: 'Simplify $\\frac{105}{135}$.',
      answer: '$\\frac{7}{9}$',
      solution: 'Both numbers end in $5$, so start by dividing by $5$: $\\frac{21}{27}$. Now both are multiples of $3$: $\\frac{7}{9}$. (The greatest common factor was $5 \\times 3 = 15$ all along.) ✓ $7$ is prime and does not divide $9$, so we are done.',
    },
    {
      q: 'The fraction $\\frac{90}{n}$ reduces to $\\frac{5}{7}$. What is $n$?',
      answer: '$126$',
      solution: 'This runs simplifying backwards. Since $90 = 5 \\times 18$, the whole fraction was scaled up by $18$, so the bottom must be $7 \\times 18 = 126$. Check: dividing $\\frac{90}{126}$ top and bottom by $18$ gives $\\frac{5}{7}$ ✓. The trap is subtracting — the $85$ from $90 - 5$ has nothing to do with it.',
    },
  ],
  // 2. Multiply two fractions, cancelling first.
  [
    {
      q: 'Compute $\\frac{5}{12} \\times \\frac{9}{10}$.',
      answer: '$\\frac{3}{8}$',
      solution: 'Cancel before multiplying: the $5$ and the $10$ share a $5$, becoming $1$ and $2$; the $9$ and the $12$ share a $3$, becoming $3$ and $4$. That leaves $\\frac{1}{4} \\times \\frac{3}{2} = \\frac{3}{8}$. Multiplying straight across first gives $\\frac{45}{120}$, which reduces to the same $\\frac{3}{8}$ ✓ — just with uglier numbers.',
    },
    {
      q: 'Compute $\\frac{7}{15} \\times \\frac{25}{28}$.',
      answer: '$\\frac{5}{12}$',
      solution: 'The $7$ and the $28$ share a $7$, becoming $1$ and $4$. The $25$ and the $15$ share a $5$, becoming $5$ and $3$. What is left is $\\frac{1}{3} \\times \\frac{5}{4} = \\frac{5}{12}$ ✓. Cancelling diagonally is perfectly legal — in a multiplication any top may cancel with any bottom.',
    },
    {
      q: 'A number $n$ satisfies $\\frac{3}{10} \\times n = \\frac{9}{35}$. What is $n$?',
      answer: '$\\frac{6}{7}$',
      solution: 'Undo the multiplication by dividing: $n = \\frac{9}{35} \\div \\frac{3}{10} = \\frac{9}{35} \\times \\frac{10}{3}$. The $9$ and $3$ leave $3$ on top, and the $10$ and $35$ leave $2$ on top and $7$ below, giving $\\frac{6}{7}$. Check: $\\frac{3}{10} \\times \\frac{6}{7} = \\frac{18}{70} = \\frac{9}{35}$ ✓.',
    },
  ],
  // 3. Add fractions with unlike denominators.
  [
    {
      q: 'Compute $\\frac{7}{15} + \\frac{4}{9}$.',
      answer: '$\\frac{41}{45}$',
      solution: 'The LCM of $15$ and $9$ is $45$, not $135$ — always hunt for the smallest one. Rewrite: $\\frac{7}{15} = \\frac{21}{45}$ and $\\frac{4}{9} = \\frac{20}{45}$. Add the tops only: $21 + 20 = 41$, so the sum is $\\frac{41}{45}$ ✓, already in lowest terms since $45 = 3^2 \\times 5$ and $41$ is prime.',
    },
    {
      q: 'Compute $\\frac{3}{14} + \\frac{5}{21}$.',
      answer: '$\\frac{19}{42}$',
      solution: 'Since $14 = 2 \\times 7$ and $21 = 3 \\times 7$, the LCM is $2 \\times 3 \\times 7 = 42$. Then $\\frac{3}{14} = \\frac{9}{42}$ and $\\frac{5}{21} = \\frac{10}{42}$, so the sum is $\\frac{19}{42}$ ✓. Adding straight across would give $\\frac{8}{35}$, which fails a quick estimate: $\\frac{3}{14}$ is about a fifth and $\\frac{5}{21}$ is about a quarter, so the answer belongs near a half.',
    },
    {
      q: 'What must be added to $\\frac{5}{16}$ to make $\\frac{7}{12}$?',
      answer: '$\\frac{13}{48}$',
      solution: 'The missing piece is $\\frac{7}{12} - \\frac{5}{16}$. The LCM of $12$ and $16$ is $48$: $\\frac{7}{12} = \\frac{28}{48}$ and $\\frac{5}{16} = \\frac{15}{48}$. Subtract the tops: $28 - 15 = 13$, so the answer is $\\frac{13}{48}$. Check: $\\frac{15}{48} + \\frac{13}{48} = \\frac{28}{48} = \\frac{7}{12}$ ✓.',
    },
  ],
  // 4. Divide fractions.
  [
    {
      q: 'Compute $\\frac{9}{14} \\div \\frac{6}{7}$.',
      answer: '$\\frac{3}{4}$',
      solution: 'Flip the second fraction and multiply: $\\frac{9}{14} \\times \\frac{7}{6}$. The $7$ cancels into the $14$ leaving $2$ below, and the $9$ and $6$ share a $3$, leaving $3$ on top and $2$ below: $\\frac{3}{2 \\times 2} = \\frac{3}{4}$ ✓. Flipping the FIRST fraction instead would give $\\frac{6}{14} \\times \\frac{9}{7}$, an entirely different number.',
    },
    {
      q: 'Compute $\\frac{5}{6} \\div \\frac{10}{21}$.',
      answer: '$\\frac{7}{4}$',
      solution: 'Dividing by a number smaller than the one you start with must give an answer bigger than $1$ — a handy sanity check. Flip and multiply: $\\frac{5}{6} \\times \\frac{21}{10}$. The $5$ and $10$ leave a $2$ below; the $21$ and $6$ leave $7$ on top and $2$ below. The result is $\\frac{7}{4}$ ✓.',
    },
    {
      q: 'A number $n$ satisfies $\\frac{8}{9} \\div n = \\frac{4}{15}$. What is $n$?',
      answer: '$\\frac{10}{3}$',
      solution: 'When the divisor is the unknown, it equals the starting number divided by the result: $n = \\frac{8}{9} \\div \\frac{4}{15} = \\frac{8}{9} \\times \\frac{15}{4} = \\frac{2 \\times 5}{3} = \\frac{10}{3}$. Check: $\\frac{8}{9} \\div \\frac{10}{3} = \\frac{8}{9} \\times \\frac{3}{10} = \\frac{24}{90} = \\frac{4}{15}$ ✓.',
    },
  ],
  // 5. Compare two fractions.
  [
    {
      q: 'Which is bigger: $\\frac{7}{9}$ or $\\frac{8}{11}$?',
      answer: '$\\frac{7}{9}$',
      solution: 'Cross-multiply, keeping track of which product belongs to which fraction: $7 \\times 11 = 77$ sits with $\\frac{7}{9}$, and $8 \\times 9 = 72$ sits with $\\frac{8}{11}$. Since $77 > 72$, the bigger fraction is $\\frac{7}{9}$ ✓. The bigger numerator does not win automatically.',
    },
    {
      q: 'Which is smaller: $\\frac{9}{13}$ or $\\frac{11}{16}$?',
      answer: '$\\frac{11}{16}$',
      solution: 'Cross-multiply: $9 \\times 16 = 144$ goes with $\\frac{9}{13}$, and $11 \\times 13 = 143$ goes with $\\frac{11}{16}$. Since $143 < 144$, the smaller fraction is $\\frac{11}{16}$ ✓ — by a hair. Read the question carefully: here the SMALLER product wins.',
    },
    {
      q: 'Which is bigger: $\\frac{13}{20}$ or $\\frac{15}{23}$?',
      answer: '$\\frac{15}{23}$',
      solution: 'Cross-multiply: $13 \\times 23 = 299$ belongs to $\\frac{13}{20}$, and $15 \\times 20 = 300$ belongs to $\\frac{15}{23}$. Since $300 > 299$, the bigger fraction is $\\frac{15}{23}$ ✓. These two differ by only $\\frac{1}{460}$, so eyeballing them could never settle it.',
    },
  ],
  // 6. Convert between improper fractions and mixed numbers.
  [
    {
      q: 'Convert $\\frac{59}{8}$ to a mixed number.',
      answer: '$7\\frac{3}{8}$',
      solution: 'Ask how many whole $8$s fit inside $59$. Since $7 \\times 8 = 56$ and $8 \\times 8 = 64$ is too big, the whole part is $7$ with $59 - 56 = 3$ left over. The leftover keeps the same bottom number: $7\\frac{3}{8}$ ✓. Counting the remainder UP to the next multiple is the classic slip — it must be less than $8$.',
    },
    {
      q: 'Convert $\\frac{94}{7}$ to a mixed number.',
      answer: '$13\\frac{3}{7}$',
      solution: 'Since $13 \\times 7 = 91$ and $94 - 91 = 3$, the answer is $13\\frac{3}{7}$. Check by going backwards: $13 \\times 7 + 3 = 94$ ✓. And $3 < 7$, so the fraction part is proper, as it must be.',
    },
    {
      q: 'Write $6\\frac{4}{9}$ as an improper fraction.',
      answer: '$\\frac{58}{9}$',
      solution: 'This runs the conversion the other direction. Each whole is $\\frac{9}{9}$, so six wholes are $\\frac{54}{9}$; adding the extra $\\frac{4}{9}$ gives $\\frac{58}{9}$ ✓. The shortcut is $6 \\times 9 + 4 = 58$ over $9$. Gluing the digits together into $\\frac{64}{9}$ is a mistake students really do make.',
    },
  ],
  // 7. Powers of fractions with negative bases.
  [
    {
      q: 'Compute $\\left(-\\frac{3}{4}\\right)^2 \\times \\left(-\\frac{2}{3}\\right)^3$.',
      answer: '$-\\frac{1}{6}$',
      solution: 'Settle the signs first: an even power kills the minus, so $\\left(-\\frac{3}{4}\\right)^2 = \\frac{9}{16}$; an odd power keeps it, so $\\left(-\\frac{2}{3}\\right)^3 = -\\frac{8}{27}$. Positive times negative is negative. Now $\\frac{9}{16} \\times \\frac{8}{27}$: the $8$ and $16$ leave a $2$ below, the $9$ and $27$ leave a $3$ below, giving $\\frac{1}{6}$. So the answer is $-\\frac{1}{6}$ ✓.',
    },
    {
      q: 'Compute $\\left(-\\frac{5}{2}\\right)^3 \\times \\left(\\frac{2}{5}\\right)^2$.',
      answer: '$-\\frac{5}{2}$',
      solution: 'The powers are $-\\frac{125}{8}$ (odd power, so the sign survives) and $\\frac{4}{25}$. Multiply: the $125$ and $25$ leave $5$ on top, the $4$ and $8$ leave $2$ below, so the answer is $-\\frac{5}{2}$ ✓. Neat shortcut: $\\frac{2}{5}$ is the reciprocal of $\\frac{5}{2}$, so two of the three factors cancel and exactly one is left.',
    },
    {
      q: 'Compute $\\left(-\\frac{3}{2}\\right)^4 \\times \\left(-\\frac{2}{3}\\right)^5$.',
      answer: '$-\\frac{2}{3}$',
      solution: 'The powers are $\\frac{81}{16}$ and $-\\frac{32}{243}$. Rather than multiplying those out, notice that $-\\frac{2}{3}$ is the negative reciprocal of $-\\frac{3}{2}$, so four pairs cancel to $1$ and a single $-\\frac{2}{3}$ is left over ✓. The long way agrees: $\\frac{81 \\times 32}{16 \\times 243} = \\frac{2592}{3888} = \\frac{2}{3}$, and the total of five minus signs makes it negative.',
    },
  ],
  // 8. Multiply and divide mixed numbers.
  [
    {
      q: 'Compute $2\\frac{1}{4} \\times 1\\frac{5}{6}$.',
      answer: '$4\\frac{1}{8}$',
      solution: 'Convert first — never multiply whole parts and fraction parts separately. $2\\frac{1}{4} = \\frac{9}{4}$ and $1\\frac{5}{6} = \\frac{11}{6}$. The $9$ and $6$ share a $3$: $\\frac{3}{4} \\times \\frac{11}{2} = \\frac{33}{8}$. Since $4 \\times 8 = 32$, that is $4\\frac{1}{8}$ ✓. The separate-parts mistake would give $2\\frac{5}{24}$, which is smaller than $2\\frac{1}{4}$ alone — impossible when multiplying by something above $1$.',
    },
    {
      q: 'Compute $2\\frac{5}{6} \\times 1\\frac{3}{5}$.',
      answer: '$4\\frac{8}{15}$',
      solution: 'Convert: $2\\frac{5}{6} = \\frac{17}{6}$ and $1\\frac{3}{5} = \\frac{8}{5}$. Nothing cancels, since $17$ is prime, so multiply straight across for $\\frac{136}{30}$, which halves to $\\frac{68}{15}$. Then $4 \\times 15 = 60$ and $68 - 60 = 8$, giving $4\\frac{8}{15}$ ✓. A rough estimate of $3 \\times 1\\frac{1}{2}$ says the answer should be somewhere near $4\\frac{1}{2}$.',
    },
    {
      q: 'Compute $5\\frac{1}{4} \\div 1\\frac{1}{2}$.',
      answer: '$3\\frac{1}{2}$',
      solution: 'Convert, then flip the divisor: $\\frac{21}{4} \\div \\frac{3}{2} = \\frac{21}{4} \\times \\frac{2}{3}$. The $21$ and $3$ leave $7$ on top; the $2$ and $4$ leave $2$ below: $\\frac{7}{2} = 3\\frac{1}{2}$ ✓. Flipping the first fraction is the usual trap, and dividing only the whole parts ($5 \\div 1 = 5$) is not right either.',
    },
  ],
  // 9. Add or subtract three fractions.
  [
    {
      q: 'Compute $\\frac{2}{3} + \\frac{1}{4} + \\frac{1}{6}$.',
      answer: '$1\\frac{1}{12}$',
      solution: 'The LCM of $3$, $4$, and $6$ is $12$, so the sum becomes $\\frac{8}{12} + \\frac{3}{12} + \\frac{2}{12} = \\frac{13}{12}$. That is past one whole, so write it as $1\\frac{1}{12}$ ✓. Noticing early that the total passes $1$ is a good check: $\\frac{2}{3} + \\frac{1}{4}$ is already $\\frac{11}{12}$.',
    },
    {
      q: 'Compute $\\frac{3}{8} + \\frac{1}{6} + \\frac{5}{12}$.',
      answer: '$\\frac{23}{24}$',
      solution: 'Use $24$, the smallest number all three bottoms divide into: $\\frac{9}{24} + \\frac{4}{24} + \\frac{10}{24} = \\frac{23}{24}$ ✓, just barely under a whole. Multiplying the three denominators together would give $576$ instead — still correct, but the numbers turn ugly fast.',
    },
    {
      q: 'Compute $\\frac{5}{6} + \\frac{3}{4} - \\frac{2}{3}$.',
      answer: '$\\frac{11}{12}$',
      solution: 'Convert everything to twelfths at once: $\\frac{10}{12} + \\frac{9}{12} - \\frac{8}{12}$. Then the tops give $10 + 9 - 8 = 11$, so the answer is $\\frac{11}{12}$ ✓. Doing the subtraction first is fine too, as long as the minus sign travels with the $\\frac{8}{12}$ and does not leak onto anything else.',
    },
  ],
  // 10. Word problem: how many fit, or how big is each share.
  [
    {
      q: 'A ribbon is $7\\frac{1}{2}$ feet long, and each bow uses $\\frac{7}{8}$ foot. How many whole bows can be made?',
      answer: '$8$ bows',
      solution: '"How many fit?" means divide: $\\frac{15}{2} \\div \\frac{7}{8} = \\frac{15}{2} \\times \\frac{8}{7} = \\frac{60}{7} = 8\\frac{4}{7}$. Nobody ties four-sevenths of a bow, so the answer is $8$ whole bows ✓, with a scrap of ribbon left over. Rounding $8\\frac{4}{7}$ up to $9$ is the trap.',
    },
    {
      q: 'A bin holds $9\\frac{1}{3}$ kilograms of flour, and each bag holds $\\frac{5}{6}$ kilogram. How many bags can be filled completely?',
      answer: '$11$ bags',
      solution: 'Divide: $\\frac{28}{3} \\div \\frac{5}{6} = \\frac{28}{3} \\times \\frac{6}{5} = \\frac{56}{5} = 11\\frac{1}{5}$. Only full bags count, so the answer is $11$ ✓, with a fifth of a bag of flour still in the bin. Multiplying instead of dividing gives about $7\\frac{7}{9}$, less flour than the bin holds — a sure sign the operation was wrong.',
    },
    {
      q: 'A board $4\\frac{2}{3}$ meters long is cut into $7$ equal pieces. How long is each piece?',
      answer: '$\\frac{2}{3}$ meter',
      solution: 'Sharing into equal pieces is also division, this time by a whole number: $\\frac{14}{3} \\div 7 = \\frac{14}{3} \\times \\frac{1}{7} = \\frac{2}{3}$ meter ✓. Check by multiplying back: $7 \\times \\frac{2}{3} = \\frac{14}{3} = 4\\frac{2}{3}$ ✓. Dividing only the whole part and ignoring the $\\frac{2}{3}$ would lose two-thirds of a meter across the whole board.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 4,
  sections: {
    '4.7': s47,
    '4.8': s48,
  },
  challenge,
  worksheet,
}
