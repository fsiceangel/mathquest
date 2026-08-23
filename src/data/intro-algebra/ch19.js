// Introduction to Algebra — Chapter 19: Exponents and Logarithms
// All problems, explanations, and examples are original MathQuest content.

const s191 = {
  id: '19.1',
  title: 'Exponential Functions',
  learn: {
    concepts: [
      {
        heading: 'The variable moves upstairs',
        body: 'In a function like $f(x) = 3 \\cdot 2^x$, the variable lives in the exponent — that is what makes it an exponential function. The number out front ($3$ here) is the starting value, since $f(0) = 3 \\cdot 2^0 = 3$, and the base ($2$ here) tells you what the output gets multiplied by each time $x$ goes up by $1$.',
      },
      {
        heading: 'Zero and negative inputs are welcome',
        body: 'All the exponent laws you already know still apply. Since $b^0 = 1$, we always have $f(0) = a$ for $f(x) = a \\cdot b^x$. And negative inputs give reciprocals: $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$. Negative exponents make small positive outputs — never negative ones!',
      },
      {
        heading: 'The base decides: growth or decay',
        body: 'If the base is bigger than $1$, each step multiplies the output by more than $1$, so the function grows. If the base is between $0$ and $1$, each step shrinks the output — that is exponential decay. The coefficient out front does not decide growth or decay; only the base does.',
      },
      {
        heading: 'Two points pin down the function',
        body: 'To find $a$ and $b$ in $f(x) = a \\cdot b^x$ from data, remember: consecutive outputs have ratio $b$. If $f(0) = 5$ and $f(1) = 15$, then $a = 5$ and $b = \\frac{15}{5} = 3$. Divide neighboring outputs to find the base; read the starting value at $x = 0$.',
      },
    ],
    examples: [
      {
        problem: 'Let $f(x) = 3 \\cdot 2^x$. Find $f(4)$, $f(0)$, and $f(-2)$.',
        steps: [
          'For $f(4)$: compute the power first, then multiply. $2^4 = 16$, so $f(4) = 3 \\cdot 16 = 48$.',
          'For $f(0)$: any nonzero base to the $0$ power is $1$, so $f(0) = 3 \\cdot 1 = 3$. The output at $0$ is just the coefficient.',
          'For $f(-2)$: a negative exponent means reciprocal, so $2^{-2} = \\frac{1}{4}$ and $f(-2) = 3 \\cdot \\frac{1}{4} = \\frac{3}{4}$.',
        ],
        answer: '$f(4) = 48$, $f(0) = 3$, $f(-2) = \\frac{3}{4}$',
      },
      {
        problem: 'An exponential function $g(x) = a \\cdot b^x$ satisfies $g(0) = 5$ and $g(1) = 15$. Find $a$ and $b$, then compute $g(2)$.',
        steps: [
          'Plug in $x = 0$: since $b^0 = 1$, we get $g(0) = a$, so $a = 5$.',
          'Each step up in $x$ multiplies the output by $b$, so $b = \\frac{g(1)}{g(0)} = \\frac{15}{5} = 3$.',
          'Then $g(2) = 5 \\cdot 3^2 = 5 \\cdot 9 = 45$. Check: $45$ is indeed $3$ times $g(1) = 15$.',
        ],
        answer: '$a = 5$, $b = 3$, and $g(2) = 45$',
      },
      {
        problem: 'A dish starts with $200$ bacteria, and the population doubles every hour. How many bacteria are there after $5$ hours?',
        steps: [
          'Doubling every hour means multiplying by $2$ each hour, so after $t$ hours the population is $200 \\cdot 2^t$.',
          'After $5$ hours: $200 \\cdot 2^5 = 200 \\cdot 32$.',
          'That is $6400$ bacteria. Notice we multiplied by $2$ five times — we did not multiply by $5$!',
        ],
        answer: 'After $5$ hours there are $200 \\cdot 2^5 = 6400$ bacteria',
      },
    ],
  },
  problems: [
    {
      q: 'If $f(x) = 2^x$, what is $f(5)$?',
      choices: ['$10$', '$25$', '$32$', '$64$'],
      answer: 2,
      solution: '$f(5) = 2^5 = 2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$. (Careful: $2^5$ means five factors of $2$, not $2 \\times 5 = 10$ and not $5^2 = 25$.)',
    },
    {
      q: 'If $f(x) = 5 \\cdot 3^x$, what is $f(0)$?',
      choices: ['$5$', '$0$', '$1$', '$15$'],
      answer: 0,
      solution: 'Since $3^0 = 1$, we get $f(0) = 5 \\cdot 1 = 5$. The value at $x = 0$ is always the coefficient out front — that is why it is called the starting value. ($15$ would be $f(1)$.)',
    },
    {
      q: 'If $f(x) = 4 \\cdot 2^x$, what is $f(3)$?',
      choices: ['$24$', '$32$', '$512$', '$64$'],
      answer: 1,
      solution: 'Power first, then multiply: $2^3 = 8$, so $f(3) = 4 \\cdot 8 = 32$. (Careful: $4 \\cdot 2 \\cdot 3 = 24$ treats the exponent like a factor, and $(4 \\cdot 2)^3 = 512$ raises the coefficient too — the exponent belongs only to the base $2$.)',
    },
    {
      q: 'Which of these functions shows exponential decay?',
      choices: ['$f(x) = 3 \\cdot (1.2)^x$', '$f(x) = 5 \\cdot (0.9)^x$', '$f(x) = 100 \\cdot 2^x$', '$f(x) = \\frac{1}{2} \\cdot 4^x$'],
      answer: 1,
      solution: 'Only the base decides growth or decay. A base between $0$ and $1$, like $0.9$, shrinks the output each step — that is decay. The function $\\frac{1}{2} \\cdot 4^x$ still grows, because its base is $4$; the small coefficient just gives it a small start.',
    },
    {
      q: 'If $f(x) = 2^x$, what is $f(-3)$?',
      choices: ['$-8$', '$-6$', '$-\\frac{1}{8}$', '$\\frac{1}{8}$'],
      answer: 3,
      solution: 'A negative exponent means reciprocal: $2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$. Negative exponents never make the answer negative — they make it small and positive.',
    },
    {
      q: 'A dish starts with $300$ bacteria, and the population doubles every hour. How many bacteria are there after $4$ hours?',
      choices: ['$1200$', '$2400$', '$4800$', '$9600$'],
      answer: 2,
      solution: 'After $4$ hours the population has doubled $4$ times: $300 \\cdot 2^4 = 300 \\cdot 16 = 4800$. ($1200$ comes from multiplying by $4$ instead of by $2^4$, and $2400$ is only three doublings.)',
    },
    {
      q: 'An exponential function $g(x) = a \\cdot b^x$ satisfies $g(0) = 7$ and $g(1) = 21$. What is the base $b$?',
      choices: ['$3$', '$14$', '$7$', '$21$'],
      answer: 0,
      solution: 'Going from $x = 0$ to $x = 1$ multiplies the output by $b$, so $b = \\frac{g(1)}{g(0)} = \\frac{21}{7} = 3$. (The difference $21 - 7 = 14$ would matter for a linear function, but exponential functions grow by ratios, not differences.)',
    },
    {
      q: 'An exponential function $f(x) = a \\cdot b^x$ with $b > 0$ satisfies $f(0) = 4$ and $f(2) = 36$. What is $f(1)$?',
      choices: ['$20$', '$18$', '$9$', '$12$'],
      answer: 3,
      solution: 'From $f(0) = 4$ we get $a = 4$. Then $f(2) = 4b^2 = 36$, so $b^2 = 9$ and $b = 3$. Therefore $f(1) = 4 \\cdot 3 = 12$. (The halfway output is not the average $20$ — exponential functions climb by ratios, and $4, 12, 36$ each triple.)',
    },
    {
      q: 'A sheet of paper is $0.1$ mm thick. Each fold doubles the thickness. After $10$ folds, how thick is the stack?',
      choices: ['$1$ mm', '$51.2$ mm', '$102.4$ mm', '$204.8$ mm'],
      answer: 2,
      solution: 'Ten folds means ten doublings: $0.1 \\cdot 2^{10} = 0.1 \\cdot 1024 = 102.4$ mm — over $10$ centimeters from ten folds! ($1$ mm is the trap of multiplying by $10$ instead of by $2^{10}$; $51.2$ mm is only $9$ folds.)',
    },
    {
      q: 'Let $f(x) = 48 \\cdot \\left(\\frac{1}{2}\\right)^x$. For what value of $x$ does $f(x) = 3$?',
      choices: ['$4$', '$3$', '$5$', '$16$'],
      answer: 0,
      solution: 'Each step up in $x$ halves the output: $48 \\to 24 \\to 12 \\to 6 \\to 3$. That took $4$ halvings, so $x = 4$. Check: $48 \\cdot \\frac{1}{16} = 3$. ✓',
    },
  ],
}

const s192 = {
  id: '19.2',
  title: 'Show Me the Money',
  learn: {
    concepts: [
      {
        heading: 'Simple interest: the same amount every year',
        body: 'With simple interest, the bank pays interest only on your original deposit (the principal). At rate $r$ per year, a principal $P$ earns $P \\cdot r$ every single year, so after $t$ years the balance is $P(1 + rt)$. A $\\$400$ deposit at $10\\%$ simple interest earns exactly $\\$40$ each year, forever.',
      },
      {
        heading: 'Compound interest: interest earns interest',
        body: 'With compound interest, each year\'s interest gets added to the account, and next year\'s interest is computed on the new, bigger balance. Growing by $r$ means multiplying by $(1 + r)$, so after $t$ years of annual compounding the balance is $A = P(1 + r)^t$. It is an exponential function of time!',
      },
      {
        heading: 'Compute it year by year',
        body: 'For small numbers of years, just multiply by $(1 + r)$ once per year. At $10\\%$, a balance of $\\$500$ becomes $\\$550$, then $\\$605$, then $\\$665.50$. Notice the yearly gains grow: $\\$50$, then $\\$55$, then $\\$60.50$ — that growing gain is the interest earning interest.',
      },
      {
        heading: 'Who wins, simple or compound?',
        body: 'After exactly one year they tie — both pay $P \\cdot r$. From year two onward, compound pulls ahead, because it also pays interest on the interest already earned. The gap starts tiny and snowballs as the years pass.',
      },
    ],
    examples: [
      {
        problem: 'You deposit $\\$500$ at $10\\%$ simple interest per year. What is the balance after $3$ years?',
        steps: [
          'Simple interest pays the same amount every year: $10\\%$ of $\\$500$ is $\\$50$.',
          'Over $3$ years that is $3 \\cdot \\$50 = \\$150$ of interest.',
          'Balance: $\\$500 + \\$150 = \\$650$.',
        ],
        answer: 'The balance is $\\$650$',
      },
      {
        problem: 'You deposit $\\$500$ at $10\\%$ interest compounded annually. What is the balance after $3$ years?',
        steps: [
          'Growing by $10\\%$ means multiplying by $1.1$ each year.',
          'Year by year: $\\$500 \\to \\$550 \\to \\$605 \\to \\$665.50$.',
          'Same deposit as the simple-interest example, but $\\$665.50$ beats $\\$650$ by $\\$15.50$ — that extra money is interest earned on interest.',
        ],
        answer: 'The balance is $500(1.1)^3 = \\$665.50$',
      },
      {
        problem: 'You deposit $\\$100$ at $20\\%$ compounded annually. After how many whole years does the balance first exceed $\\$170$?',
        steps: [
          'Multiply by $1.2$ each year and watch the balance: $\\$100 \\to \\$120 \\to \\$144 \\to \\$172.80$.',
          'After $2$ years we have $\\$144$, which is not enough; after $3$ years we have $\\$172.80$, which passes $\\$170$.',
        ],
        answer: 'After $3$ years (balance $\\$172.80$)',
      },
    ],
  },
  problems: [
    {
      q: 'You deposit $\\$300$ at $5\\%$ simple interest per year. How much interest do you earn in the first year?',
      choices: ['$\\$5$', '$\\$15$', '$\\$315$', '$\\$150$'],
      answer: 1,
      solution: 'One year of interest is $5\\%$ of the principal: $0.05 \\cdot 300 = \\$15$. (The question asks for the interest earned, not the new balance of $\\$315$.)',
    },
    {
      q: 'You deposit $\\$400$ at $10\\%$ simple interest per year. What is the balance after $3$ years?',
      choices: ['$\\$120$', '$\\$440$', '$\\$532.40$', '$\\$520$'],
      answer: 3,
      solution: 'Simple interest pays $10\\%$ of $\\$400$, which is $\\$40$, every year. Three years of interest is $\\$120$, so the balance is $400 + 120 = \\$520$. ($\\$532.40$ is what compounding would give — but this account is simple interest.)',
    },
    {
      q: 'You deposit $\\$100$ at $10\\%$ interest compounded annually. What is the balance after $2$ years?',
      choices: ['$\\$110$', '$\\$120$', '$\\$121$', '$\\$122$'],
      answer: 2,
      solution: 'Multiply by $1.1$ each year: $\\$100 \\to \\$110 \\to \\$121$. The second year pays $\\$11$, not $\\$10$, because the $\\$10$ of first-year interest earns interest too. ($\\$120$ is the simple-interest answer.)',
    },
    {
      q: 'A principal $P$ earns rate $r$ per year, compounded annually, for $t$ years. Which formula gives the final balance?',
      choices: ['$A = P(1 + r)^t$', '$A = P(1 + rt)$', '$A = P + rt$', '$A = P \\cdot r^t$'],
      answer: 0,
      solution: 'Each year multiplies the balance by $(1 + r)$, and $t$ years means $t$ such multiplications: $A = P(1 + r)^t$. The formula $P(1 + rt)$ is simple interest, and $P \\cdot r^t$ forgets to keep the original money — at $r = 0.1$ it would shrink your account!',
    },
    {
      q: 'You deposit $\\$1000$ at $5\\%$ compounded annually. What is the balance after $2$ years?',
      choices: ['$\\$1100$', '$\\$1102.50$', '$\\$1050$', '$\\$1105$'],
      answer: 1,
      solution: 'Year by year: $1000 \\cdot 1.05 = \\$1050$, then $1050 \\cdot 1.05 = \\$1102.50$. The extra $\\$2.50$ beyond the simple-interest $\\$1100$ is interest on the first year\'s $\\$50$.',
    },
    {
      q: 'You deposit $\\$200$ at $10\\%$ compounded annually. What is the balance after $3$ years?',
      choices: ['$\\$260$', '$\\$242$', '$\\$266.20$', '$\\$264$'],
      answer: 2,
      solution: 'Multiply by $1.1$ three times: $\\$200 \\to \\$220 \\to \\$242 \\to \\$266.20$. ($\\$260$ is the simple-interest balance, and $\\$242$ is only two years of compounding.)',
    },
    {
      q: 'You deposit $\\$500$ at $8\\%$ for $2$ years. How much MORE does compounding annually earn than simple interest?',
      choices: ['$\\$0$', '$\\$3.20$', '$\\$40$', '$\\$4$'],
      answer: 1,
      solution: 'Simple: $\\$40$ per year, so the balance is $\\$580$. Compound: $500 \\cdot 1.08 = \\$540$, then $540 \\cdot 1.08 = \\$583.20$. The gap is $583.20 - 580 = \\$3.20$ — exactly $8\\%$ of the first year\'s $\\$40$ of interest.',
    },
    {
      q: 'Two banks offer the same rate on the same deposit: one pays simple interest, the other compounds annually. After exactly $1$ year, how do the balances compare?',
      choices: ['They are equal', 'Compound is larger', 'Simple is larger', 'It depends on the principal'],
      answer: 0,
      solution: 'In the first year, both accounts pay interest on the same principal, so both reach $P(1 + r)$. Compounding only pulls ahead starting in year two, when there is previously earned interest for the interest to grow on.',
    },
    {
      q: 'You deposit $\\$500$ at $20\\%$ compounded annually. After how many whole years does the balance first exceed $\\$860$?',
      choices: ['$1$', '$2$', '$4$', '$3$'],
      answer: 3,
      solution: 'Multiply by $1.2$ each year: $\\$500 \\to \\$600 \\to \\$720 \\to \\$864$. After $2$ years we are at $\\$720$, still short; after $3$ years we reach $\\$864 > \\$860$.',
    },
    {
      q: 'A deposit of $\\$400$, compounded annually at a fixed rate, grows to $\\$484$ in $2$ years. What is the annual rate?',
      choices: ['$10\\%$', '$21\\%$', '$10.5\\%$', '$11\\%$'],
      answer: 0,
      solution: 'Two years of growth multiplied the money by $\\frac{484}{400} = 1.21$. So $(1 + r)^2 = 1.21$, which gives $1 + r = 1.1$ and $r = 10\\%$. (The total growth was $21\\%$, but the yearly rate is not $21\\% \\div 2$ — compounding means the factors multiply, not add.)',
    },
  ],
}

const s193 = {
  id: '19.3',
  title: 'Interest-ing Problems',
  learn: {
    concepts: [
      {
        heading: 'Compounding more often than yearly',
        body: 'Banks often compound semiannually (twice a year) or quarterly (four times a year). An annual rate of $10\\%$ compounded semiannually means $5\\%$ per half-year: divide the rate by the number of periods per year. In $t$ years there are $n \\cdot t$ periods, each multiplying the balance by $\\left(1 + \\frac{r}{n}\\right)$.',
      },
      {
        heading: 'More often means (a little) more money',
        body: 'At a $10\\%$ annual rate, one year of semiannual compounding gives $(1.05)^2 = 1.1025$ — a hair better than the $1.1$ from annual compounding. The extra $0.25\\%$ is interest earned on the mid-year interest. More frequent compounding always wins, but by surprisingly little.',
      },
      {
        heading: 'Working backwards: divide by the growth factor',
        body: 'If a balance grew $10\\%$ to reach $\\$330$, the original was $\\frac{330}{1.1} = \\$300$. To undo growth, divide by $(1 + r)$ — do not subtract $10\\%$ of the final amount! Taking $10\\%$ off $\\$330$ gives $\\$297$, which misses the mark, because the $10\\%$ was earned on the smaller starting amount.',
      },
      {
        heading: 'Successive percents multiply',
        body: 'A $50\\%$ rise followed by a $50\\%$ fall is NOT a wash: the factors are $1.5$ and $0.5$, and $1.5 \\cdot 0.5 = 0.75$, a $25\\%$ loss overall. To combine percent changes, multiply their growth factors — never add or subtract the percents.',
      },
    ],
    examples: [
      {
        problem: 'You deposit $\\$1000$ at a $10\\%$ annual rate, compounded semiannually. What is the balance after $1$ year, and how does it compare to annual compounding?',
        steps: [
          'Semiannual means $\\frac{10\\%}{2} = 5\\%$ per half-year, and one year contains $2$ half-years.',
          'Multiply twice: $1000 \\cdot 1.05 = \\$1050$, then $1050 \\cdot 1.05 = \\$1102.50$.',
          'Annual compounding would give $\\$1100$. Semiannual wins by $\\$2.50$ — the interest earned by the mid-year $\\$50$ during the second half.',
        ],
        answer: 'The balance is $\\$1102.50$, which is $\\$2.50$ more than annual compounding',
      },
      {
        problem: 'An account earns $10\\%$ compounded annually. After $2$ years it holds $\\$605$. What was the principal?',
        steps: [
          'Two years at $10\\%$ multiplied the principal by $(1.1)^2 = 1.21$.',
          'To undo the growth, divide: $P = \\frac{605}{1.21} = 500$.',
          'Check forward: $\\$500 \\to \\$550 \\to \\$605$. ✓',
        ],
        answer: 'The principal was $\\$500$',
      },
      {
        problem: 'A jacket\'s price rises $25\\%$, then later falls $20\\%$. How does the final price compare to the original?',
        steps: [
          'Convert each change to a growth factor: up $25\\%$ is $\\times 1.25$; down $20\\%$ is $\\times 0.8$.',
          'Multiply the factors: $1.25 \\cdot 0.8 = 1$.',
          'The price is exactly back where it started! Percent changes multiply, and these two factors are reciprocals.',
        ],
        answer: 'The final price equals the original price',
      },
    ],
  },
  problems: [
    {
      q: 'A bank offers an $8\\%$ annual rate compounded quarterly. What interest rate does the account earn each quarter?',
      choices: ['$2\\%$', '$8\\%$', '$4\\%$', '$32\\%$'],
      answer: 0,
      solution: 'Quarterly means four times a year, so each quarter earns $\\frac{8\\%}{4} = 2\\%$. (Using the full $8\\%$ every quarter would be a $32\\%$-per-year account — banks are not that generous!)',
    },
    {
      q: 'An account compounds semiannually. How many compounding periods happen in $3$ years?',
      choices: ['$3$', '$1.5$', '$6$', '$12$'],
      answer: 2,
      solution: 'Semiannual means twice per year, so $3$ years contain $3 \\cdot 2 = 6$ periods. ($12$ would be quarterly compounding.)',
    },
    {
      q: 'You deposit $\\$100$ at a $10\\%$ annual rate, compounded semiannually. What is the balance after $1$ year?',
      choices: ['$\\$110$', '$\\$110.25$', '$\\$105$', '$\\$120$'],
      answer: 1,
      solution: 'The account earns $5\\%$ twice: $100 \\cdot 1.05 = \\$105$, then $105 \\cdot 1.05 = \\$110.25$. ($\\$110$ is annual compounding, and $\\$105$ stops after only half the year.)',
    },
    {
      q: 'An account grew $10\\%$ last year and now holds $\\$330$. How much was in it a year ago?',
      choices: ['$\\$297$', '$\\$300$', '$\\$303$', '$\\$320$'],
      answer: 1,
      solution: 'Undo the growth by dividing by the growth factor: $\\frac{330}{1.1} = \\$300$. Check: $300 \\cdot 1.1 = 330$. ✓ (Subtracting $10\\%$ of $\\$330$ gives $\\$297$, which is off — the $10\\%$ was earned on the smaller old balance, not on $\\$330$.)',
    },
    {
      q: 'You deposit $\\$800$ at a $10\\%$ annual rate, compounded semiannually. What is the balance after $1$ year?',
      choices: ['$\\$880$', '$\\$840$', '$\\$888$', '$\\$882$'],
      answer: 3,
      solution: 'Two half-year steps at $5\\%$: $800 \\cdot 1.05 = \\$840$, then $840 \\cdot 1.05 = \\$882$. That beats the $\\$880$ from annual compounding by $\\$2$ — the interest earned by the mid-year $\\$40$.',
    },
    {
      q: 'An account earns $20\\%$ compounded annually. After $2$ years it holds $\\$720$. What was the principal?',
      choices: ['$\\$500$', '$\\$600$', '$\\$432$', '$\\$480$'],
      answer: 0,
      solution: 'Two years multiplied the principal by $(1.2)^2 = 1.44$, so $P = \\frac{720}{1.44} = \\$500$. Check: $\\$500 \\to \\$600 \\to \\$720$. ✓ ($\\$600$ only undoes one year of growth.)',
    },
    {
      q: 'A stock price rises $50\\%$ one month, then falls $50\\%$ the next month. Where does it end up?',
      choices: ['Back at the original price', '$25\\%$ below the original price', '$25\\%$ above the original price', '$75\\%$ below the original price'],
      answer: 1,
      solution: 'Multiply the growth factors: $1.5 \\cdot 0.5 = 0.75$, so the final price is $75\\%$ of the original — a $25\\%$ loss. The fall hurts more because the $50\\%$ drop is taken from a bigger number than the $50\\%$ rise was.',
    },
    {
      q: 'Bank A pays $12\\%$ compounded annually. Bank B pays a $12\\%$ annual rate compounded semiannually. Which deal is better for a saver?',
      choices: ['Bank A', 'They are exactly the same', 'Bank B', 'It depends on how much you deposit'],
      answer: 2,
      solution: 'Per dollar, Bank A multiplies by $1.12$ each year, while Bank B multiplies by $(1.06)^2 = 1.1236$. Bank B wins. And since both are just multipliers, the winner is the same no matter the size of the deposit.',
    },
    {
      q: 'You deposit $\\$2000$ at a $20\\%$ annual rate, compounded quarterly. What is the balance after $6$ months?',
      choices: ['$\\$2200$', '$\\$2400$', '$\\$2100$', '$\\$2205$'],
      answer: 3,
      solution: 'Quarterly means $\\frac{20\\%}{4} = 5\\%$ per quarter, and $6$ months contains $2$ quarters: $2000 \\cdot 1.05 = \\$2100$, then $2100 \\cdot 1.05 = \\$2205$. ($\\$2400$ applies the whole year\'s $20\\%$ to only half a year.)',
    },
    {
      q: 'A deposit of $\\$400$, compounded semiannually, grows to $\\$441$ in exactly $1$ year. What is the annual rate?',
      choices: ['$5\\%$', '$20.5\\%$', '$10\\%$', '$10.25\\%$'],
      answer: 2,
      solution: 'Let the half-year rate be $s$. Then $(1 + s)^2 = \\frac{441}{400} = 1.1025$, so $1 + s = 1.05$ and $s = 5\\%$ per half-year. The annual rate is $2 \\cdot 5\\% = 10\\%$. (The money did grow $10.25\\%$ in total — that is the effect of compounding a $10\\%$ annual rate twice.)',
    },
  ],
}

const s194 = {
  id: '19.4',
  title: 'What is a Logarithm?',
  learn: {
    concepts: [
      {
        heading: 'A logarithm asks: what exponent?',
        body: 'The expression $\\log_2 8$ asks one question: "$2$ raised to WHAT power gives $8$?" Since $2^3 = 8$, we write $\\log_2 8 = 3$. That is the whole idea — a logarithm is an exponent in disguise.',
      },
      {
        heading: 'Two costumes, one fact',
        body: 'The equations $b^x = y$ and $\\log_b y = x$ say exactly the same thing. So $5^2 = 25$ converts to $\\log_5 25 = 2$, and $\\log_{10} 1000 = 3$ converts to $10^3 = 1000$. When a log puzzles you, rewrite it in exponential form.',
      },
      {
        heading: 'Logs can be negative or fractional',
        body: 'Since $3^{-2} = \\frac{1}{9}$, we get $\\log_3 \\frac{1}{9} = -2$: logs of numbers below $1$ are negative. And since $4^{1/2} = \\sqrt{4} = 2$, we get $\\log_4 2 = \\frac{1}{2}$: logs are fractions when the answer is a root. Two freebies for every base $b$: $\\log_b b = 1$ and $\\log_b 1 = 0$.',
      },
      {
        heading: 'The first log properties',
        body: 'Because $b^n$ obviously has exponent $n$, we always have $\\log_b b^n = n$. And because multiplying powers ADDS exponents, logs turn products into sums: $\\log_b (xy) = \\log_b x + \\log_b y$ for positive $x$ and $y$. Every log rule is an exponent rule wearing its log costume.',
      },
    ],
    examples: [
      {
        problem: 'Evaluate $\\log_2 32$.',
        steps: [
          'Ask the question: $2$ to what power gives $32$?',
          'Count up the powers of $2$: $2, 4, 8, 16, 32$ — that is $2^5 = 32$.',
          'So the exponent is $5$.',
        ],
        answer: '$\\log_2 32 = 5$',
      },
      {
        problem: 'Evaluate $\\log_3 \\frac{1}{9}$.',
        steps: [
          'Ask: $3$ to what power gives $\\frac{1}{9}$?',
          'A result below $1$ needs a negative exponent: $3^{-2} = \\frac{1}{3^2} = \\frac{1}{9}$.',
          'So the exponent is $-2$.',
        ],
        answer: '$\\log_3 \\frac{1}{9} = -2$',
      },
      {
        problem: 'Solve for $x$: $\\log_5 x = 2$.',
        steps: [
          'Rewrite the log equation in exponential form: the base is $5$ and the exponent is $2$, so $x = 5^2$.',
          'Compute: $x = 25$. Check: $\\log_5 25$ asks "$5$ to what power gives $25$?" — the answer is $2$. ✓',
        ],
        answer: '$x = 25$',
      },
    ],
  },
  problems: [
    {
      q: 'Evaluate $\\log_2 8$.',
      choices: ['$4$', '$2$', '$16$', '$3$'],
      answer: 3,
      solution: 'Ask: $2$ to what power gives $8$? Since $2^3 = 8$, the answer is $3$. (Careful when counting: $2, 4, 8$ is three doublings from $1$, not four.)',
    },
    {
      q: 'Which equation says the same thing as $5^3 = 125$?',
      choices: ['$\\log_5 125 = 3$', '$\\log_3 125 = 5$', '$\\log_{125} 5 = 3$', '$\\log_5 3 = 125$'],
      answer: 0,
      solution: 'In $\\log_b y = x$, the base $b$ matches the base of the power, and the log equals the EXPONENT. Base $5$, result $125$, exponent $3$: $\\log_5 125 = 3$.',
    },
    {
      q: 'Evaluate $\\log_{10} 10000$.',
      choices: ['$3$', '$1000$', '$4$', '$5$'],
      answer: 2,
      solution: '$10$ to what power gives $10000$? Count the zeros: $10000 = 10^4$, so the log is $4$. Base-$10$ logs count zeros!',
    },
    {
      q: 'Evaluate $\\log_7 7$.',
      choices: ['$0$', '$1$', '$7$', '$49$'],
      answer: 1,
      solution: '$7$ to what power gives $7$? The first power: $7^1 = 7$, so $\\log_7 7 = 1$. For any base $b$, $\\log_b b = 1$.',
    },
    {
      q: 'Evaluate $\\log_4 1$.',
      choices: ['$0$', '$1$', '$4$', '$\\frac{1}{4}$'],
      answer: 0,
      solution: '$4$ to what power gives $1$? The zero power: $4^0 = 1$, so $\\log_4 1 = 0$. Every base gives $\\log_b 1 = 0$, because $b^0 = 1$ for every nonzero base.',
    },
    {
      q: 'Evaluate $\\log_3 \\frac{1}{9}$.',
      choices: ['$2$', '$\\frac{1}{2}$', '$-3$', '$-2$'],
      answer: 3,
      solution: '$3$ to what power gives $\\frac{1}{9}$? A negative exponent makes a reciprocal: $3^{-2} = \\frac{1}{9}$, so the log is $-2$. (It is not $2$ — that would give $9$, not $\\frac{1}{9}$.)',
    },
    {
      q: 'Evaluate $\\log_4 2$.',
      choices: ['$2$', '$-2$', '$\\frac{1}{2}$', '$\\frac{1}{4}$'],
      answer: 2,
      solution: '$4$ to what power gives $2$? A fractional exponent means a root: $4^{1/2} = \\sqrt{4} = 2$, so $\\log_4 2 = \\frac{1}{2}$. (Watch the order: $\\log_2 4 = 2$, but $\\log_4 2$ is its reciprocal.)',
    },
    {
      q: 'Solve for $x$: $\\log_5 x = 2$.',
      choices: ['$10$', '$25$', '$32$', '$52$'],
      answer: 1,
      solution: 'Rewrite in exponential form: $x = 5^2 = 25$. (Careful: $5 \\cdot 2 = 10$ multiplies instead of raising to a power, and $2^5 = 32$ swaps the base and the exponent.)',
    },
    {
      q: 'Evaluate $\\log_6 9 + \\log_6 4$.',
      choices: ['$2$', '$36$', '$13$', '$3$'],
      answer: 0,
      solution: 'Neither log is nice alone, but the sum property saves us: $\\log_6 9 + \\log_6 4 = \\log_6 (9 \\cdot 4) = \\log_6 36$. Since $6^2 = 36$, the answer is $2$. (Adding the inside numbers to get $\\log_6 13$ is the trap — logs turn PRODUCTS into sums, not sums into sums.)',
    },
    {
      q: 'Evaluate $\\log_2 \\left(\\log_3 81\\right)$.',
      choices: ['$4$', '$2$', '$3$', '$8$'],
      answer: 1,
      solution: 'Work from the inside out. First, $\\log_3 81$: since $3^4 = 81$, the inside is $4$. Then $\\log_2 4$: since $2^2 = 4$, the answer is $2$.',
    },
  ],
}

const challenge = [
  {
    q: 'Let $f(x) = 5 \\cdot 2^x$ and $g(x) = 80 \\cdot \\left(\\frac{1}{2}\\right)^x$. For what value of $x$ does $f(x) = g(x)$?',
    choices: ['$1$', '$4$', '$2$', '$3$'],
    answer: 2,
    solution: 'Setting them equal: $5 \\cdot 2^x = \\frac{80}{2^x}$, so $2^x \\cdot 2^x = \\frac{80}{5} = 16$. That means $2^{2x} = 16 = 2^4$, so $2x = 4$ and $x = 2$. Check: $f(2) = 20$ and $g(2) = 80 \\cdot \\frac{1}{4} = 20$. ✓',
  },
  {
    q: 'You deposit $\\$625$ at $20\\%$ compounded annually. What is the balance after $2$ years?',
    choices: ['$\\$875$', '$\\$900$', '$\\$937.50$', '$\\$750$'],
    answer: 1,
    solution: 'Multiply by $1.2$ twice: $625 \\cdot 1.2 = \\$750$, then $750 \\cdot 1.2 = \\$900$. ($\\$875$ is the simple-interest balance $625 + 2 \\cdot 125$; compounding earns $\\$25$ more.)',
  },
  {
    q: 'Evaluate $\\log_2 \\frac{1}{32}$.',
    choices: ['$-5$', '$5$', '$-4$', '$\\frac{1}{5}$'],
    answer: 0,
    solution: '$2$ to what power gives $\\frac{1}{32}$? Since $2^5 = 32$, the reciprocal needs the negative exponent: $2^{-5} = \\frac{1}{32}$. The answer is $-5$.',
  },
  {
    q: 'A colony of $50$ bacteria triples every $2$ hours. How many bacteria are there after $8$ hours?',
    choices: ['$1350$', '$1200$', '$4050$', '$328{,}050$'],
    answer: 2,
    solution: 'In $8$ hours there are $\\frac{8}{2} = 4$ triplings, so the count is $50 \\cdot 3^4 = 50 \\cdot 81 = 4050$. (Tripling every hour would give $50 \\cdot 3^8 = 328{,}050$ — read the time step carefully! And $1350$ is only $3$ triplings.)',
  },
  {
    q: 'An account earns a $10\\%$ annual rate compounded semiannually. After exactly $1$ year it holds $\\$441$. What was the principal?',
    choices: ['$\\$396.90$', '$\\$400$', '$\\$401$', '$\\$420$'],
    answer: 1,
    solution: 'One year of semiannual compounding at $5\\%$ per half-year multiplies the principal by $(1.05)^2 = 1.1025$. So $P = \\frac{441}{1.1025} = \\$400$. Check: $400 \\to 420 \\to 441$. ✓ (Subtracting $10\\%$ of the final balance gives $\\$396.90$, the classic backwards mistake.)',
  },
  {
    q: 'If $\\log_b 64 = 3$, what is the base $b$?',
    choices: ['$2$', '$4$', '$8$', '$16$'],
    answer: 1,
    solution: 'Rewrite in exponential form: $b^3 = 64$. Since $4^3 = 64$, the base is $4$. (It is not $2$ — that answers $\\log_b 64 = 6$ — and $8$ satisfies $8^2 = 64$, which uses exponent $2$ instead of the required $3$.)',
  },
  {
    q: 'Which of these numbers is the largest?',
    choices: ['$2^{40}$', '$4^{18}$', '$8^{13}$', 'They are all equal'],
    answer: 0,
    solution: 'Rewrite everything in base $2$: $4^{18} = (2^2)^{18} = 2^{36}$ and $8^{13} = (2^3)^{13} = 2^{39}$. Comparing exponents: $40 > 39 > 36$, so $2^{40}$ wins.',
  },
  {
    q: 'You deposit $\\$1000$ at $10\\%$ for $3$ years. How much more does annual compounding earn than simple interest?',
    choices: ['$\\$0$', '$\\$30$', '$\\$33$', '$\\$31$'],
    answer: 3,
    solution: 'Simple: $\\$100$ per year gives $\\$1300$. Compound: $\\$1000 \\to \\$1100 \\to \\$1210 \\to \\$1331$. The difference is $1331 - 1300 = \\$31$.',
  },
  {
    q: 'Solve for $x$: $2^{x+1} = 32$.',
    choices: ['$5$', '$3$', '$16$', '$4$'],
    answer: 3,
    solution: 'Write both sides with base $2$: $32 = 2^5$, so $x + 1 = 5$ and $x = 4$. (Answering $5$ forgets that the exponent is $x + 1$, not $x$.) Check: $2^5 = 32$. ✓',
  },
  {
    q: 'If $\\log_{10} x = -2$, what is $x$?',
    choices: ['$-100$', '$\\frac{1}{100}$', '$-\\frac{1}{100}$', '$\\frac{1}{20}$'],
    answer: 1,
    solution: 'Rewrite: $x = 10^{-2} = \\frac{1}{10^2} = \\frac{1}{100}$. A negative exponent makes a small POSITIVE number, never a negative one — powers of $10$ are always positive.',
  },
  {
    q: 'A stock loses $20\\%$ of its value, then gains $25\\%$. Where does it end up?',
    choices: ['$5\\%$ above its original value', '$5\\%$ below its original value', 'Exactly back at its original value', '$45\\%$ above its original value'],
    answer: 2,
    solution: 'Multiply the growth factors: $0.8 \\cdot 1.25 = 1$, so the stock is exactly back where it started. The $25\\%$ gain is bigger than the $20\\%$ loss in percent, but it acts on a smaller amount — and here the two effects cancel perfectly. (Adding $-20\\% + 25\\% = 5\\%$ is the trap.)',
  },
  {
    q: 'Evaluate $\\log_5 10 + \\log_5 \\frac{5}{2}$.',
    choices: ['$2$', '$25$', '$3$', '$12.5$'],
    answer: 0,
    solution: 'Use the sum property: $\\log_5 10 + \\log_5 \\frac{5}{2} = \\log_5 \\left(10 \\cdot \\frac{5}{2}\\right) = \\log_5 25$. Since $5^2 = 25$, the answer is $2$. Neither log alone is a nice number, but their sum is!',
  },
]

const worksheet = [
  {
    q: 'Let $f(x) = 2 \\cdot 3^x$. Compute $f(3)$.',
    answer: '$54$',
    solution: 'Power first: $3^3 = 27$. Then multiply by the coefficient: $f(3) = 2 \\cdot 27 = 54$.',
  },
  {
    q: 'Evaluate $\\log_2 64$.',
    answer: '$6$',
    solution: 'Ask: $2$ to what power gives $64$? Doubling from $2$: $2, 4, 8, 16, 32, 64$ — six factors of $2$, so $\\log_2 64 = 6$.',
  },
  {
    q: 'You deposit $\\$300$ at $10\\%$ simple interest per year. What is the balance after $4$ years?',
    answer: '$\\$420$',
    solution: 'Simple interest pays $10\\%$ of $\\$300$, which is $\\$30$, every year. Four years of interest is $\\$120$, so the balance is $300 + 120 = \\$420$.',
  },
  {
    q: 'You deposit $\\$300$ at $10\\%$ compounded annually. What is the balance after $2$ years?',
    answer: '$\\$363$',
    solution: 'Multiply by $1.1$ each year: $300 \\cdot 1.1 = \\$330$, then $330 \\cdot 1.1 = \\$363$. The extra $\\$3$ over the simple-interest $\\$360$ is interest on the first year\'s $\\$30$.',
  },
  {
    q: 'Rewrite the equation $4^3 = 64$ in logarithmic form.',
    answer: '$\\log_4 64 = 3$',
    solution: 'The log has the same base as the power, takes the result as its input, and equals the exponent: $\\log_4 64 = 3$.',
  },
  {
    q: 'An exponential function $f(x) = a \\cdot 2^x$ satisfies $f(3) = 40$. Find $a$.',
    answer: '$a = 5$',
    solution: 'Plug in: $f(3) = a \\cdot 2^3 = 8a = 40$, so $a = 5$. Check: $5 \\cdot 8 = 40$. ✓',
  },
  {
    q: 'You deposit $\\$1600$ at a $10\\%$ annual rate, compounded semiannually. What is the balance after $1$ year?',
    answer: '$\\$1764$',
    solution: 'Semiannual means $5\\%$ per half-year, twice: $1600 \\cdot 1.05 = \\$1680$, then $1680 \\cdot 1.05 = \\$1764$. That beats annual compounding ($\\$1760$) by $\\$4$.',
  },
  {
    q: 'Evaluate $\\log_9 27$.',
    answer: '$\\frac{3}{2}$',
    solution: 'Write both numbers as powers of $3$: we need $9^x = 27$, which is $(3^2)^x = 3^3$, so $3^{2x} = 3^3$. Matching exponents gives $2x = 3$, so $x = \\frac{3}{2}$. Check: $9^{3/2} = (\\sqrt{9})^3 = 3^3 = 27$. ✓',
  },
  {
    q: 'A price rises $25\\%$. By what percent must it then fall to return exactly to its original value?',
    answer: '$20\\%$',
    solution: 'The rise multiplies the price by $1.25 = \\frac{5}{4}$. To undo it we need the reciprocal factor $\\frac{4}{5} = 0.8$, which is a $20\\%$ decrease. Percent changes undo by reciprocal factors, not by matching percents — a $25\\%$ fall would overshoot.',
  },
  {
    q: 'A colony of $100$ bacteria doubles every half hour. After how many hours will the colony first reach $6400$ bacteria?',
    answer: '$3$ hours',
    solution: 'The colony must grow by a factor of $\\frac{6400}{100} = 64 = 2^6$, which takes $6$ doublings. Each doubling takes half an hour, so the time is $6 \\cdot \\frac{1}{2} = 3$ hours.',
  },
]

export default {
  id: 'intro-algebra-ch19',
  book: 'intro-algebra',
  number: 19,
  title: 'Exponents and Logarithms',
  intro:
    'You already know how exponents work — now watch them come alive as functions. Exponential functions describe anything that grows or shrinks by the same factor over and over: bacteria, folded paper, and especially money in the bank. Then we meet the logarithm, the friendly tool that answers the reverse question: not "what does this exponent give?" but "what exponent do I need?"',
  sections: [s191, s192, s193, s194],
  challenge,
  worksheet,
}
