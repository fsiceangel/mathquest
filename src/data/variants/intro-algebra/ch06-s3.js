// Introduction to Algebra chapter 6 — variations for sections 6.3 and 6.5. All
// problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was re-derived from the question text alone, then checked forward
//    through the story (run the conversion chain again, or carry a concrete
//    starting amount through both percent steps), not by re-reading the solution.
//  - Conversion factors (6.3): only real, correct conversions, and the units are
//    written into every step. The fraction is shown so the reader can SEE the old
//    unit cancel, every answer carries its unit, and the single best distractor is
//    always the one that points the conversion factor upside down.
//  - Percentage problems (6.5): every question names its BASE out loud — "of the
//    original price", "of last year's total", "of the reduced price". Percent
//    change is measured against the ORIGINAL, never against the new value.
//  - Successive percent changes are multiplied, never added, and every such item
//    was verified by carrying a concrete starting amount through both steps.
//  - Every distractor is the output of a named mistake — the inverted factor, a
//    link skipped or one link too many in a chain, stopping at an intermediate
//    value, the percent of the wrong base, adding two successive percents, or
//    answering the reversed question. No two choices in an item share a VALUE.
//  - Story sanity: every money amount lands on a whole number of cents, every
//    count of a physical thing is a whole number, and no discount exceeds 100%.

const s63 = [
  // p1 — one step up the metric ladder; the inverted factor is the trap
  [
    {
      q: 'How many millimeters are in $7$ centimeters?',
      choices: ['$0.7\\text{ mm}$', '$700\\text{ mm}$', '$7000\\text{ mm}$', '$70\\text{ mm}$'],
      answer: 3,
      solution:
        'One centimeter is $10$ millimeters, so the factor with centimeters on the BOTTOM is $\\frac{10 \\text{ mm}}{1 \\text{ cm}}$, and that fraction equals $1$. Multiply: $7 \\text{ cm} \\times \\frac{10 \\text{ mm}}{1 \\text{ cm}} = 70 \\text{ mm}$ — the cm upstairs cancels the cm downstairs and only mm survives. (The choice $0.7$ uses the factor upside down, $\\frac{1 \\text{ cm}}{10 \\text{ mm}}$, where the centimeters do not cancel at all; the choice $700$ uses $100$, which is the number of centimeters in a METER; the choice $7000$ uses $1000$, the number of millimeters in a meter.)',
    },
    {
      q: 'How many meters are in $4$ kilometers?',
      choices: ['$0.004\\text{ m}$', '$4000\\text{ m}$', '$400\\text{ m}$', '$40\\text{ m}$'],
      answer: 1,
      solution:
        'One kilometer is $1000$ meters, so use $\\frac{1000 \\text{ m}}{1 \\text{ km}}$: $4 \\text{ km} \\times \\frac{1000 \\text{ m}}{1 \\text{ km}} = 4000 \\text{ m}$. The km cancels top against bottom, leaving m. A kilometer is bigger than a meter, so the count of meters must be the bigger number. (The choice $0.004$ flips the factor to $\\frac{1 \\text{ km}}{1000 \\text{ m}}$, which leaves $\\frac{\\text{km}^2}{\\text{m}}$ — nothing cancels; the choice $400$ uses $100$, the centimeters-in-a-meter factor; the choice $40$ uses $10$.)',
    },
    {
      q: 'How many milliliters are in $2.5$ liters?',
      choices: ['$0.0025\\text{ mL}$', '$250\\text{ mL}$', '$2500\\text{ mL}$', '$25{,}000\\text{ mL}$'],
      answer: 2,
      solution:
        'One liter is $1000$ milliliters, so multiply by $\\frac{1000 \\text{ mL}}{1 \\text{ L}}$: $2.5 \\text{ L} \\times \\frac{1000 \\text{ mL}}{1 \\text{ L}} = 2500 \\text{ mL}$. The L cancels and mL is left. (The choice $0.0025$ points the factor the wrong way, $\\frac{1 \\text{ L}}{1000 \\text{ mL}}$, so the liters never cancel; the choice $250$ multiplies by $100$ instead of $1000$; the choice $25{,}000$ slides the decimal point one place too far.)',
    },
  ],
  // p2 — chains of time factors; the mistakes are a missing link or one too many
  [
    {
      q: 'How many minutes are in $4$ days?',
      choices: ['$96\\text{ min}$', '$240\\text{ min}$', '$5760\\text{ min}$', '$345{,}600\\text{ min}$'],
      answer: 2,
      solution:
        'Chain two factors, days to hours and hours to minutes: $4 \\text{ days} \\times \\frac{24 \\text{ h}}{1 \\text{ day}} \\times \\frac{60 \\text{ min}}{1 \\text{ h}}$. The word "days" cancels against the first bottom and "h" cancels against the second, leaving minutes: $4 \\times 24 \\times 60 = 5760 \\text{ min}$. (The choice $96$ stops after the first link, at $96$ HOURS; the choice $240$ is $4 \\times 60$, which skips the days-to-hours link entirely; the choice $345{,}600$ adds a third link and lands in seconds.)',
    },
    {
      q: 'How many hours are in $3$ weeks?',
      choices: ['$504\\text{ h}$', '$21\\text{ h}$', '$72\\text{ h}$', '$30{,}240\\text{ h}$'],
      answer: 0,
      solution:
        'Go weeks to days to hours: $3 \\text{ weeks} \\times \\frac{7 \\text{ days}}{1 \\text{ week}} \\times \\frac{24 \\text{ h}}{1 \\text{ day}} = 3 \\times 7 \\times 24 = 504 \\text{ h}$. Weeks cancel, then days cancel, and hours are what remain. (The choice $21$ stops after the first link, at $21$ DAYS; the choice $72$ is $3 \\times 24$, skipping the weeks-to-days link; the choice $30{,}240$ tacks on a fourth factor of $60$ and reaches minutes.)',
    },
    {
      q: 'How many seconds are in $3$ days?',
      choices: ['$72\\text{ s}$', '$4320\\text{ s}$', '$15{,}552{,}000\\text{ s}$', '$259{,}200\\text{ s}$'],
      answer: 3,
      solution:
        'Three links this time: $3 \\text{ days} \\times \\frac{24 \\text{ h}}{1 \\text{ day}} \\times \\frac{60 \\text{ min}}{1 \\text{ h}} \\times \\frac{60 \\text{ s}}{1 \\text{ min}}$. Days, hours, and minutes each cancel down the chain, leaving $3 \\times 24 \\times 60 \\times 60 = 259{,}200 \\text{ s}$. (The choice $72$ stops at hours; the choice $4320$ stops at minutes; the choice $15{,}552{,}000$ multiplies by $60$ one extra time, as though a second were itself divided into sixtieths.)',
    },
  ],
  // p3 — which way does the factor point? the answers are the operations themselves
  [
    {
      q: 'To change a length given in millimeters into centimeters, what should you do?',
      choices: ['Multiply by $10$', 'Divide by $10$', 'Divide by $100$', 'Multiply by $100$'],
      answer: 1,
      solution:
        'We want the millimeters to cancel, so millimeters must sit on the BOTTOM: use $\\frac{1 \\text{ cm}}{10 \\text{ mm}}$, which is dividing by $10$. Try it on a real length: $350 \\text{ mm} \\times \\frac{1 \\text{ cm}}{10 \\text{ mm}} = 35 \\text{ cm}$, and $35$ cm is indeed shorter-sounding than $350$ mm because a centimeter is the bigger unit. (Multiplying by $10$ uses the factor upside down, $\\frac{10 \\text{ mm}}{1 \\text{ cm}}$, and the mm would not cancel; dividing or multiplying by $100$ borrows the centimeters-in-a-meter factor, which is the wrong pair of units.)',
    },
    {
      q: 'To change a mass given in kilograms into grams, what should you do?',
      choices: ['Multiply by $100$', 'Divide by $1000$', 'Divide by $100$', 'Multiply by $1000$'],
      answer: 3,
      solution:
        'Kilograms must cancel, so kilograms go on the bottom: $\\frac{1000 \\text{ g}}{1 \\text{ kg}}$, which is multiplying by $1000$. Test it: $2 \\text{ kg} \\times \\frac{1000 \\text{ g}}{1 \\text{ kg}} = 2000 \\text{ g}$, and a gram is the smaller unit, so the count of grams should be the bigger number. (Dividing by $1000$ is the same factor upside down and would shrink the number in the wrong direction; either choice with $100$ uses a factor that does not connect these two units at all.)',
    },
    {
      q: 'To change a volume given in milliliters into liters, what should you do?',
      choices: ['Divide by $1000$', 'Multiply by $1000$', 'Divide by $10$', 'Multiply by $100$'],
      answer: 0,
      solution:
        'Milliliters must cancel, so they belong on the bottom: $\\frac{1 \\text{ L}}{1000 \\text{ mL}}$, which is dividing by $1000$. Test it: $4500 \\text{ mL} \\times \\frac{1 \\text{ L}}{1000 \\text{ mL}} = 4.5 \\text{ L}$. A liter is the larger unit, so the count of liters must be the smaller number. (Multiplying by $1000$ inverts the factor and leaves the milliliters uncancelled; dividing by $10$ or multiplying by $100$ uses factors that belong to other unit pairs.)',
    },
  ],
  // p4 — down the ladder, where the whole job is placing the decimal point
  [
    {
      q: 'A bag of rice has a mass of $750$ grams. What is its mass in kilograms?',
      choices: ['$0.75\\text{ kg}$', '$750{,}000\\text{ kg}$', '$7.5\\text{ kg}$', '$0.075\\text{ kg}$'],
      answer: 0,
      solution:
        'Since $1000 \\text{ g} = 1 \\text{ kg}$, the factor that cancels grams is $\\frac{1 \\text{ kg}}{1000 \\text{ g}}$: $750 \\text{ g} \\times \\frac{1 \\text{ kg}}{1000 \\text{ g}} = 0.75 \\text{ kg}$. Check forward: $0.75 \\text{ kg} \\times 1000 = 750 \\text{ g}$. ✓ (The choice $750{,}000$ uses the factor upside down and multiplies by $1000$, which is the wrong direction — a kilogram is bigger than a gram, so the number must get smaller; the choice $7.5$ divides by $100$; the choice $0.075$ divides by $10{,}000$.)',
    },
    {
      q: 'A ribbon is $145$ centimeters long. How long is it in meters?',
      choices: ['$14{,}500\\text{ m}$', '$14.5\\text{ m}$', '$1.45\\text{ m}$', '$0.145\\text{ m}$'],
      answer: 2,
      solution:
        'Use $\\frac{1 \\text{ m}}{100 \\text{ cm}}$ so the centimeters cancel: $145 \\text{ cm} \\times \\frac{1 \\text{ m}}{100 \\text{ cm}} = 1.45 \\text{ m}$. Check forward: $1.45 \\text{ m} \\times 100 = 145 \\text{ cm}$. ✓ A ribbon about a meter and a half long is a sensible ribbon. (The choice $14{,}500$ inverts the factor and multiplies by $100$; the choice $14.5$ divides by $10$; the choice $0.145$ divides by $1000$, which is the millimeter factor.)',
    },
    {
      q: 'A jug holds $3250$ milliliters. How many liters is that?',
      choices: ['$32.5\\text{ L}$', '$3.25\\text{ L}$', '$3{,}250{,}000\\text{ L}$', '$0.325\\text{ L}$'],
      answer: 1,
      solution:
        'Use $\\frac{1 \\text{ L}}{1000 \\text{ mL}}$: $3250 \\text{ mL} \\times \\frac{1 \\text{ L}}{1000 \\text{ mL}} = 3.25 \\text{ L}$. Check forward: $3.25 \\text{ L} \\times 1000 = 3250 \\text{ mL}$. ✓ (The choice $3{,}250{,}000$ turns the factor upside down and multiplies by $1000$; the choice $32.5$ divides by $100$; the choice $0.325$ divides by $10{,}000$.)',
    },
  ],
  // p5 — km/h into m/s: two levels of the rate, converted separately
  [
    {
      q: 'A cyclist rides at $36$ km/h. What is that speed in m/s?',
      choices: ['$129.6\\text{ m/s}$', '$10\\text{ m/s}$', '$600\\text{ m/s}$', '$0.01\\text{ m/s}$'],
      answer: 1,
      solution:
        'Convert each level: $36 \\text{ km} = 36{,}000 \\text{ m}$ and $1 \\text{ h} = 3600 \\text{ s}$, so the rate is $\\frac{36{,}000 \\text{ m}}{3600 \\text{ s}} = 10 \\text{ m/s}$. The shortcut is the same thing: $\\frac{1000}{3600} = \\frac{1}{3.6}$, so divide km/h by $3.6$. (The choice $129.6$ MULTIPLIES by $3.6$, the conversion factor upside down; the choice $600$ divides by $60$ only once, but hours to seconds needs two factors of $60$; the choice $0.01$ turns the hour into seconds yet forgets to turn the kilometers into meters.)',
    },
    {
      q: 'A river current moves at $9$ km/h. What is that in m/s?',
      choices: ['$32.4\\text{ m/s}$', '$150\\text{ m/s}$', '$0.0025\\text{ m/s}$', '$2.5\\text{ m/s}$'],
      answer: 3,
      solution:
        'Both levels change: $9 \\text{ km} = 9000 \\text{ m}$ and $1 \\text{ h} = 3600 \\text{ s}$, giving $\\frac{9000 \\text{ m}}{3600 \\text{ s}} = 2.5 \\text{ m/s}$. Equivalently $9 \\div 3.6 = 2.5$. Check forward: $2.5$ m every second is $2.5 \\times 3600 = 9000$ m every hour, which is $9$ km/h. ✓ (The choice $32.4$ multiplies by $3.6$ instead of dividing — the factor inverted; the choice $150$ uses only one factor of $60$; the choice $0.0025$ converts the time but never converts the kilometers.)',
    },
    {
      q: 'A high-speed lift descends at $126$ km/h. What is that in m/s?',
      choices: ['$453.6\\text{ m/s}$', '$2100\\text{ m/s}$', '$35\\text{ m/s}$', '$0.035\\text{ m/s}$'],
      answer: 2,
      solution:
        'Convert both levels: $126 \\text{ km} = 126{,}000 \\text{ m}$ and $1 \\text{ h} = 3600 \\text{ s}$, so the rate is $\\frac{126{,}000 \\text{ m}}{3600 \\text{ s}} = 35 \\text{ m/s}$. Check with the shortcut: $126 \\div 3.6 = 35$. ✓ (The choice $453.6$ multiplies by $3.6$, the factor upside down; the choice $2100$ divides by a single $60$; the choice $0.035$ converts hours to seconds but leaves the distance in kilometers.)',
    },
  ],
  // p6 — the same rate conversion run the other way
  [
    {
      q: 'A swimmer covers $9$ meters every second. What is that speed in km/h?',
      choices: ['$2.5\\text{ km/h}$', '$540\\text{ km/h}$', '$32.4\\text{ km/h}$', '$32{,}400\\text{ km/h}$'],
      answer: 2,
      solution:
        'Going this way, multiply by $\\frac{3600 \\text{ s}}{1 \\text{ h}}$ and by $\\frac{1 \\text{ km}}{1000 \\text{ m}}$: $\\frac{9 \\text{ m}}{1 \\text{ s}} \\times \\frac{3600 \\text{ s}}{1 \\text{ h}} \\times \\frac{1 \\text{ km}}{1000 \\text{ m}} = \\frac{9 \\times 3600}{1000} = 32.4 \\text{ km/h}$. Seconds cancel and meters cancel, leaving km per h. Short version: multiply m/s by $3.6$. (The choice $2.5$ DIVIDES by $3.6$, the factor pointed the wrong way; the choice $540$ uses only one factor of $60$; the choice $32{,}400$ converts the time but forgets to turn meters into kilometers.)',
    },
    {
      q: 'A conveyor belt carries boxes at $18$ meters per second. What is that in km/h?',
      choices: ['$64.8\\text{ km/h}$', '$5\\text{ km/h}$', '$1080\\text{ km/h}$', '$64{,}800\\text{ km/h}$'],
      answer: 0,
      solution:
        'Multiply by $3.6$: $18 \\times 3.6 = 64.8 \\text{ km/h}$. Written out, $\\frac{18 \\text{ m}}{1 \\text{ s}} \\times \\frac{3600 \\text{ s}}{1 \\text{ h}} = \\frac{64{,}800 \\text{ m}}{1 \\text{ h}}$, and $\\frac{64{,}800 \\text{ m}}{1 \\text{ h}} \\times \\frac{1 \\text{ km}}{1000 \\text{ m}} = 64.8 \\text{ km/h}$. (The choice $5$ divides by $3.6$, the conversion upside down; the choice $1080$ multiplies by a single $60$ and stops at meters per minute; the choice $64{,}800$ is the middle step in meters per hour, one factor short of the answer.)',
    },
    {
      q: 'A race car reaches $45$ meters per second. What is that in km/h?',
      choices: ['$12.5\\text{ km/h}$', '$2700\\text{ km/h}$', '$162{,}000\\text{ km/h}$', '$162\\text{ km/h}$'],
      answer: 3,
      solution:
        'Multiply by $3.6$: $45 \\times 3.6 = 162 \\text{ km/h}$. The long form: $\\frac{45 \\text{ m}}{1 \\text{ s}} \\times \\frac{3600 \\text{ s}}{1 \\text{ h}} \\times \\frac{1 \\text{ km}}{1000 \\text{ m}} = 162 \\text{ km/h}$, with the seconds and the meters both cancelling. A racing speed of about $162$ km/h is believable; $12.5$ km/h is bicycle pace. (The choice $12.5$ divides by $3.6$ instead of multiplying; the choice $2700$ uses one factor of $60$ and stops at meters per minute; the choice $162{,}000$ is the answer left in meters per hour.)',
    },
  ],
  // p7 — compound rates where BOTH the unit on top and the unit on the bottom change
  [
    {
      q: 'A candle burns down $4$ millimeters every minute. How many centimeters does it burn in one hour?',
      choices: ['$240\\text{ cm}$', '$2.4\\text{ cm}$', '$0.4\\text{ cm}$', '$24\\text{ cm}$'],
      answer: 3,
      solution:
        'Convert each level in turn. Minutes to hours: $\\frac{4 \\text{ mm}}{1 \\text{ min}} \\times \\frac{60 \\text{ min}}{1 \\text{ h}} = \\frac{240 \\text{ mm}}{1 \\text{ h}}$, with the minutes cancelling. Millimeters to centimeters: $240 \\text{ mm} \\times \\frac{1 \\text{ cm}}{10 \\text{ mm}} = 24 \\text{ cm}$. So the candle loses $24$ cm per hour. (The choice $240$ does the time level and leaves the answer in MILLIMETERS; the choice $2.4$ divides by $100$ instead of $10$; the choice $0.4$ converts $4$ mm into $0.4$ cm and forgets the hour entirely.)',
    },
    {
      q: 'A tap drips $3$ milliliters per minute. How many liters drip in one hour?',
      choices: ['$0.18\\text{ L}$', '$180\\text{ L}$', '$1.8\\text{ L}$', '$0.003\\text{ L}$'],
      answer: 0,
      solution:
        'First the time: $\\frac{3 \\text{ mL}}{1 \\text{ min}} \\times \\frac{60 \\text{ min}}{1 \\text{ h}} = \\frac{180 \\text{ mL}}{1 \\text{ h}}$. Then the volume: $180 \\text{ mL} \\times \\frac{1 \\text{ L}}{1000 \\text{ mL}} = 0.18 \\text{ L}$. A slow drip filling less than a fifth of a liter in an hour is sensible. (The choice $180$ stops with the answer in millilitres; the choice $1.8$ divides by $100$ instead of $1000$; the choice $0.003$ converts $3$ mL to litres and never uses the $60$ minutes.)',
    },
    {
      q: 'A glacier slides forward $6$ centimeters each day. How many meters does it move in a year of $365$ days?',
      choices: ['$2190\\text{ m}$', '$21.9\\text{ m}$', '$219\\text{ m}$', '$0.06\\text{ m}$'],
      answer: 1,
      solution:
        'Time first: $\\frac{6 \\text{ cm}}{1 \\text{ day}} \\times \\frac{365 \\text{ days}}{1 \\text{ year}} = \\frac{2190 \\text{ cm}}{1 \\text{ year}}$, the days cancelling. Length second: $2190 \\text{ cm} \\times \\frac{1 \\text{ m}}{100 \\text{ cm}} = 21.9 \\text{ m}$. (The choice $2190$ leaves the answer in CENTIMETERS; the choice $219$ divides by $10$ instead of $100$; the choice $0.06$ converts $6$ cm into metres but never multiplies by the $365$ days.)',
    },
  ],
  // p8 — invented units obey the same chain rule; one of the three runs backwards
  [
    {
      q: 'At an old market, $1$ crate holds $5$ boxes and $1$ box holds $8$ tins. How many tins are in $4$ crates?',
      choices: ['$52\\text{ tins}$', '$160\\text{ tins}$', '$20\\text{ tins}$', '$32\\text{ tins}$'],
      answer: 1,
      solution:
        'Chain the two factors: $4 \\text{ crates} \\times \\frac{5 \\text{ boxes}}{1 \\text{ crate}} \\times \\frac{8 \\text{ tins}}{1 \\text{ box}}$. Crates cancel, then boxes cancel, and tins are left: $4 \\times 5 \\times 8 = 160 \\text{ tins}$. (The choice $52$ is $4 \\times (5 + 8)$ — the two factors were ADDED, but factors in a chain multiply; the choice $20$ stops after the first link, at $20$ boxes; the choice $32$ uses only the second link and never converts the crates.)',
    },
    {
      q: 'On the island of Mera, $1$ drell equals $7$ punts and $1$ punt equals $3$ ticks. How many ticks are in $6$ drells?',
      choices: ['$60\\text{ ticks}$', '$42\\text{ ticks}$', '$126\\text{ ticks}$', '$18\\text{ ticks}$'],
      answer: 2,
      solution:
        'Made-up units behave exactly like real ones: $6 \\text{ drells} \\times \\frac{7 \\text{ punts}}{1 \\text{ drell}} \\times \\frac{3 \\text{ ticks}}{1 \\text{ punt}} = 6 \\times 7 \\times 3 = 126 \\text{ ticks}$. Drells cancel against the first bottom, punts against the second. (The choice $60$ is $6 \\times (7 + 3)$, adding the factors instead of multiplying them; the choice $42$ stops at $42$ punts; the choice $18$ uses only the punts-to-ticks link.)',
    },
    {
      q: 'In a trading game, $1$ gem is worth $9$ shards and $1$ shard is worth $4$ chips. A player holds $216$ chips. How many gems is that?',
      choices: ['$6\\text{ gems}$', '$7776\\text{ gems}$', '$24\\text{ gems}$', '$54\\text{ gems}$'],
      answer: 0,
      solution:
        'This chain runs downhill, so both factors flip: $216 \\text{ chips} \\times \\frac{1 \\text{ shard}}{4 \\text{ chips}} \\times \\frac{1 \\text{ gem}}{9 \\text{ shards}} = \\frac{216}{36} = 6 \\text{ gems}$. Chips cancel, then shards cancel. Check forward: $6$ gems is $6 \\times 9 = 54$ shards, and $54 \\times 4 = 216$ chips. ✓ (The choice $7776$ uses both factors upside down and multiplies by $36$, but a gem is worth more than a chip so the count must shrink; the choice $54$ stops at the number of SHARDS, one link short; the choice $24$ divides by $9$ first and then stops, using the wrong factor for the first link.)',
    },
  ],
  // p9 — convert the rate, THEN use it; one variation solves for the time instead
  [
    {
      q: 'A cheetah runs at $108$ km/h. How many meters does it cover in $6$ seconds?',
      choices: ['$30\\text{ m}$', '$648\\text{ m}$', '$180\\text{ m}$', '$10{,}800\\text{ m}$'],
      answer: 2,
      solution:
        'Convert the rate first: $\\frac{108{,}000 \\text{ m}}{3600 \\text{ s}} = 30 \\text{ m/s}$. Now distance $=$ rate $\\times$ time $= \\frac{30 \\text{ m}}{1 \\text{ s}} \\times 6 \\text{ s} = 180 \\text{ m}$, with the seconds cancelling. (The choice $30$ is the SPEED, not a distance — it still has to be multiplied by the time; the choice $648$ multiplies km/h by seconds directly, mixing two different time units; the choice $10{,}800$ divides by only one factor of $60$, giving $1800$ m per minute, and then treats that as m/s.)',
    },
    {
      q: 'A ferry moves at $27$ km/h. How far does it travel, in meters, in $40$ seconds?',
      choices: ['$7.5\\text{ m}$', '$300\\text{ m}$', '$1080\\text{ m}$', '$18{,}000\\text{ m}$'],
      answer: 1,
      solution:
        'The rate in m/s is $\\frac{27{,}000 \\text{ m}}{3600 \\text{ s}} = 7.5 \\text{ m/s}$. Then $\\frac{7.5 \\text{ m}}{1 \\text{ s}} \\times 40 \\text{ s} = 300 \\text{ m}$. Check forward: $300$ m in $40$ s is $7.5$ m/s, which is $7.5 \\times 3.6 = 27$ km/h. ✓ (The choice $7.5$ stops at the speed; the choice $1080$ is $27 \\times 40$, multiplying km/h by seconds with no conversion at all; the choice $18{,}000$ divides by one $60$, gets $450$ m per minute, and multiplies that by $40$.)',
    },
    {
      q: 'A tram travels at $36$ km/h. How many seconds does it take to cover $150$ meters?',
      choices: ['$10\\text{ s}$', '$1500\\text{ s}$', '$0.25\\text{ s}$', '$15\\text{ s}$'],
      answer: 3,
      solution:
        'Convert the rate: $\\frac{36{,}000 \\text{ m}}{3600 \\text{ s}} = 10 \\text{ m/s}$. Time $=$ distance $\\div$ rate $= 150 \\text{ m} \\times \\frac{1 \\text{ s}}{10 \\text{ m}} = 15 \\text{ s}$, and the meters cancel to leave seconds. Check forward: in $15$ s at $10$ m/s the tram goes $150$ m. ✓ (The choice $10$ reports the speed as if it were the time; the choice $1500$ MULTIPLIES by the rate instead of dividing, so the units would come out as $\\frac{\\text{m}^2}{\\text{s}}$; the choice $0.25$ works in metres per minute, $600$ m/min, and leaves the answer in minutes.)',
    },
  ],
  // p10 — long chains built on a rate; the last one runs the chain in reverse
  [
    {
      q: 'A printer prints $15$ pages per minute. How many pages does it print in $8$ hours of nonstop work?',
      choices: ['$900\\text{ pages}$', '$120\\text{ pages}$', '$432{,}000\\text{ pages}$', '$7200\\text{ pages}$'],
      answer: 3,
      solution:
        'Chain up through hours: $\\frac{15 \\text{ pages}}{1 \\text{ min}} \\times \\frac{60 \\text{ min}}{1 \\text{ h}} = \\frac{900 \\text{ pages}}{1 \\text{ h}}$, then $\\frac{900 \\text{ pages}}{1 \\text{ h}} \\times 8 \\text{ h} = 7200 \\text{ pages}$. Minutes cancel in the first step and hours in the second. (The choice $900$ stops after one hour; the choice $120$ is $15 \\times 8$, using hours as if they were minutes; the choice $432{,}000$ multiplies by $60$ one extra time, as though an hour held $3600$ minutes.)',
    },
    {
      q: 'A machine fills $9$ bottles every second. How many bottles does it fill in one full day?',
      choices: ['$777{,}600\\text{ bottles}$', '$32{,}400\\text{ bottles}$', '$540\\text{ bottles}$', '$12{,}960\\text{ bottles}$'],
      answer: 0,
      solution:
        'Climb the chain: $\\frac{9 \\text{ bottles}}{1 \\text{ s}} \\times \\frac{60 \\text{ s}}{1 \\text{ min}} \\times \\frac{60 \\text{ min}}{1 \\text{ h}} \\times \\frac{24 \\text{ h}}{1 \\text{ day}} = 9 \\times 60 \\times 60 \\times 24 = 777{,}600$ bottles per day. Seconds, minutes and hours all cancel on the way up. (The choice $540$ stops after one minute; the choice $32{,}400$ stops after one hour; the choice $12{,}960$ is $9 \\times 60 \\times 24$ — one of the two factors of $60$ is missing, so it jumps straight from minutes to days.)',
    },
    {
      q: 'A loading dock handles $720$ crates per day, spread evenly over the $24$ hours. How many crates is that per hour?',
      choices: ['$12\\text{ crates}$', '$17{,}280\\text{ crates}$', '$30\\text{ crates}$', '$0.5\\text{ crates}$'],
      answer: 2,
      solution:
        'This chain runs downwards, so the factor flips: $\\frac{720 \\text{ crates}}{1 \\text{ day}} \\times \\frac{1 \\text{ day}}{24 \\text{ h}} = \\frac{30 \\text{ crates}}{1 \\text{ h}}$, with days cancelling. Check forward: $30$ crates an hour for $24$ hours is $720$ crates. ✓ (The choice $17{,}280$ uses the factor upside down and multiplies by $24$ — but an hour is a shorter stretch than a day, so the count must go down; the choice $12$ divides by $60$, a factor that has nothing to do with days and hours; the choice $0.5$ divides by $1440$ and lands on crates per MINUTE, and a half-crate is a hint that the units are wrong.)',
    },
  ],
]

const s65 = [
  // p1 — increase a number by a percent OF ITSELF
  [
    {
      q: 'Increase $140$ by $35\\%$ of $140$. What is the result?',
      choices: ['$49$', '$175$', '$91$', '$189$'],
      answer: 3,
      solution:
        'An increase of $35\\%$ multiplies by $1.35$: $140 \\times 1.35 = 189$. Split as a check: $35\\%$ of $140$ is $49$, and $140 + 49 = 189$. ✓ (The choice $49$ is only the increase, not the new total; the choice $175$ ADDS the number $35$ instead of $35$ percent; the choice $91$ is $140 \\times 0.65$, a $35\\%$ decrease — the change went the wrong way.)',
    },
    {
      q: 'A club had $250$ members last year. This year it has $18\\%$ more than last year’s total. How many members does it have now?',
      choices: ['$295$', '$45$', '$268$', '$205$'],
      answer: 0,
      solution:
        'The base is last year’s total, $250$. Growing by $18\\%$ of that base multiplies by $1.18$: $250 \\times 1.18 = 295$ members. Check: $18\\%$ of $250$ is $45$, and $250 + 45 = 295$, a whole number of people. ✓ (The choice $45$ is just the number of NEW members; the choice $268$ adds the number $18$; the choice $205$ is $250 \\times 0.82$, shrinking the club instead of growing it.)',
    },
    {
      q: 'Increase $64$ by $75\\%$ of $64$. What is the result?',
      choices: ['$139$', '$112$', '$48$', '$16$'],
      answer: 1,
      solution:
        'Multiply by $1.75$: $64 \\times 1.75 = 112$. Check by parts: $75\\%$ of $64$ is $48$, and $64 + 48 = 112$. ✓ (The choice $48$ is the increase alone; the choice $139$ adds the number $75$; the choice $16$ is $64 \\times 0.25$, which is what is LEFT after a $75\\%$ cut — the opposite change.)',
    },
  ],
  // p2 — decrease a number by a percent OF ITSELF
  [
    {
      q: 'Decrease $180$ by $40\\%$ of $180$. What is the result?',
      choices: ['$72$', '$108$', '$140$', '$252$'],
      answer: 1,
      solution:
        'Taking away $40\\%$ leaves $60\\%$, so multiply by $0.6$: $180 \\times 0.6 = 108$. Check the other way: $40\\%$ of $180$ is $72$, and $180 - 72 = 108$. ✓ (The choice $72$ is the amount REMOVED, not the amount left; the choice $140$ subtracts the number $40$; the choice $252$ is $180 \\times 1.4$, an increase instead of a decrease.)',
    },
    {
      q: 'A shelf held $320$ books, and the librarian removed $15\\%$ of that original count. How many books are left on the shelf?',
      choices: ['$48$', '$305$', '$272$', '$368$'],
      answer: 2,
      solution:
        'The base is the original count, $320$. Removing $15\\%$ of it leaves $85\\%$: $320 \\times 0.85 = 272$ books. Check: $15\\%$ of $320$ is $48$ books, and $320 - 48 = 272$, both whole numbers. ✓ (The choice $48$ is the number removed, which is the wrong end of the question; the choice $305$ subtracts the number $15$; the choice $368$ is $320 \\times 1.15$, adding the books instead of removing them.)',
    },
    {
      q: 'Decrease $95$ by $20\\%$ of $95$. What is the result?',
      choices: ['$76$', '$19$', '$75$', '$114$'],
      answer: 0,
      solution:
        'A $20\\%$ cut leaves $80\\%$: $95 \\times 0.8 = 76$. Check: $20\\%$ of $95$ is $19$, and $95 - 19 = 76$. ✓ (The choice $19$ is the amount taken away; the choice $75$ subtracts the number $20$ rather than $20$ percent; the choice $114$ is $95 \\times 1.2$, the change run in reverse.)',
    },
  ],
  // p3 — undo a discount; the percent belongs to the ORIGINAL, which is the unknown
  [
    {
      q: 'After a discount of $20\\%$ off the original price, a lamp costs $\\$36$. What was the original price?',
      choices: ['$\\$43.20$', '$\\$56$', '$\\$45$', '$\\$28.80$'],
      answer: 2,
      solution:
        'Let the original price be $p$. The $20\\%$ came off the ORIGINAL, so $80\\%$ of the original is what remains: $0.8p = 36$, giving $p = \\frac{36}{0.8} = 45$. Check forward: $20\\%$ of $\\$45$ is $\\$9$, and $45 - 9 = 36$. ✓ (The choice $\\$43.20$ adds $20\\%$ of the SALE price, taking the percent of the wrong base; the choice $\\$56$ adds $\\$20$; the choice $\\$28.80$ takes another $20\\%$ off, moving further from the original instead of back toward it.)',
    },
    {
      q: 'A jacket sells for $\\$78$ after a discount of $35\\%$ off the original price. What was the original price?',
      choices: ['$\\$105.30$', '$\\$113$', '$\\$50.70$', '$\\$120$'],
      answer: 3,
      solution:
        'A $35\\%$ discount off the original leaves $65\\%$ of it: $0.65p = 78$, so $p = \\frac{78}{0.65} = 120$. Check forward: $35\\%$ of $\\$120$ is $\\$42$, and $120 - 42 = 78$. ✓ (The choice $\\$105.30$ is $78 \\times 1.35$, adding $35\\%$ of the sale price — the discount was never a percent of the sale price; the choice $\\$113$ adds $\\$35$; the choice $\\$50.70$ is $78 \\times 0.65$, discounting a second time.)',
    },
    {
      q: 'After a discount of $25\\%$ off the original price, a backpack costs $\\$51$. What was the original price?',
      choices: ['$\\$63.75$', '$\\$68$', '$\\$76$', '$\\$38.25$'],
      answer: 1,
      solution:
        'The sale price is $75\\%$ of the original: $0.75p = 51$, so $p = \\frac{51}{0.75} = 68$. Check forward: $25\\%$ of $\\$68$ is $\\$17$, and $68 - 17 = 51$. ✓ (The choice $\\$63.75$ is $51 \\times 1.25$, taking the percent of the sale price instead of the original; the choice $\\$76$ adds $\\$25$; the choice $\\$38.25$ is $51 \\times 0.75$, applying the discount once more.)',
    },
  ],
  // p4 — markup on cost; the base is what the shop paid
  [
    {
      q: 'A shop pays $\\$25$ for a mug and marks it up $60\\%$ of the cost it paid. What is the selling price?',
      choices: ['$\\$15$', '$\\$85$', '$\\$10$', '$\\$40$'],
      answer: 3,
      solution:
        'The base is the $\\$25$ cost. A $60\\%$ markup multiplies by $1.6$: $25 \\times 1.6 = 40$. Check by parts: the markup is $60\\%$ of $\\$25 = \\$15$, and $25 + 15 = 40$. ✓ (The choice $\\$15$ is only the markup, not the price; the choice $\\$85$ adds $\\$60$; the choice $\\$10$ is $25 \\times 0.4$, marking the mug DOWN by $60\\%$ instead of up.)',
    },
    {
      q: 'A bakery buys a sack of flour for $\\$18$ and marks it up $45\\%$ of the price it paid. What does the bakery charge?',
      choices: ['$\\$26.10$', '$\\$8.10$', '$\\$63$', '$\\$9.90$'],
      answer: 0,
      solution:
        'Multiply the cost by $1.45$: $18 \\times 1.45 = 26.10$, a whole number of cents. Check by parts: $45\\%$ of $\\$18$ is $\\$8.10$, and $18 + 8.10 = 26.10$. ✓ (The choice $\\$8.10$ is the markup by itself; the choice $\\$63$ adds $\\$45$; the choice $\\$9.90$ is $18 \\times 0.55$, a $45\\%$ discount rather than a $45\\%$ markup.)',
    },
    {
      q: 'A store buys a chair for $\\$56$ and marks it up $75\\%$ of the cost it paid. What is the selling price?',
      choices: ['$\\$42$', '$\\$131$', '$\\$98$', '$\\$14$'],
      answer: 2,
      solution:
        'Multiply by $1.75$: $56 \\times 1.75 = 98$. Check: the markup is $75\\%$ of $\\$56 = \\$42$, and $56 + 42 = 98$. ✓ (The choice $\\$42$ stops at the markup; the choice $\\$131$ adds $\\$75$; the choice $\\$14$ is $56 \\times 0.25$, what would be left after taking $75\\%$ OFF.)',
    },
  ],
  // p5 — undo an increase; dividing, never subtracting from the new value
  [
    {
      q: 'A monthly rent rose by $10\\%$ of last year’s amount and is now $\\$792$. What was the rent before the increase?',
      choices: ['$\\$712.80$', '$\\$720$', '$\\$782$', '$\\$871.20$'],
      answer: 1,
      solution:
        'The $10\\%$ was a percent of LAST YEAR’S rent, which is the unknown. So $1.1p = 792$ and $p = \\frac{792}{1.1} = 720$. Check forward: $10\\%$ of $\\$720$ is $\\$72$, and $720 + 72 = 792$. ✓ (The choice $\\$712.80$ takes $10\\%$ off the NEW rent, the classic wrong base; the choice $\\$782$ subtracts $\\$10$; the choice $\\$871.20$ raises the rent a second time instead of undoing the rise.)',
    },
    {
      q: 'A ticket price increased by $60\\%$ of the old price and now costs $\\$72$. What was the old price?',
      choices: ['$\\$28.80$', '$\\$12$', '$\\$115.20$', '$\\$45$'],
      answer: 3,
      solution:
        'Let the old price be $p$. Rising by $60\\%$ of $p$ means $1.6p = 72$, so $p = \\frac{72}{1.6} = 45$. Check forward: $60\\%$ of $\\$45$ is $\\$27$, and $45 + 27 = 72$. ✓ (The choice $\\$28.80$ is $72 \\times 0.4$, subtracting $60\\%$ of the new price — the wrong base; the choice $\\$12$ subtracts $\\$60$; the choice $\\$115.20$ multiplies by $1.6$ again, growing the price when it should be shrunk.)',
    },
    {
      q: 'A town’s population grew by $20\\%$ of last year’s total and now stands at $8640$ people. What was last year’s total?',
      choices: ['$7200$', '$6912$', '$8620$', '$10{,}368$'],
      answer: 0,
      solution:
        'The growth was $20\\%$ of last year’s total, so $1.2p = 8640$ and $p = \\frac{8640}{1.2} = 7200$ people. Check forward: $20\\%$ of $7200$ is $1440$, and $7200 + 1440 = 8640$, all whole people. ✓ (The choice $6912$ is $8640 \\times 0.8$, taking the percent of this year’s number instead of last year’s; the choice $8620$ subtracts the number $20$; the choice $10{,}368$ grows the town again rather than undoing the growth.)',
    },
  ],
  // p6 — two successive changes; the second acts on the value the first produced
  [
    {
      q: 'A collection worth $500$ points rises $40\\%$, and the next month it falls $25\\%$ of that new value. What is it worth at the end?',
      choices: ['$575$', '$700$', '$525$', '$375$'],
      answer: 2,
      solution:
        'Turn each change into a multiplier and MULTIPLY them: $500 \\times 1.4 \\times 0.75 = 500 \\times 1.05 = 525$ points. Carry the amount through step by step to be sure: $500$ rises to $700$, and $25\\%$ of $700$ is $175$, so $700 - 175 = 525$. ✓ (The choice $575$ ADDS the percents, $+40\\% - 25\\% = +15\\%$, which is never how successive changes combine; the choice $700$ stops after the rise; the choice $375$ is $500 \\times 0.75$, applying only the fall.)',
    },
    {
      q: 'A savings balance of $\\$800$ grows $15\\%$ in one year, then drops $20\\%$ of that new balance the next year. What is the balance at the end?',
      choices: ['$\\$736$', '$\\$760$', '$\\$920$', '$\\$640$'],
      answer: 0,
      solution:
        'Multiply the factors: $800 \\times 1.15 \\times 0.8 = 800 \\times 0.92 = 736$. Step by step: $800$ grows to $\\$920$, and $20\\%$ of $\\$920$ is $\\$184$, so $920 - 184 = \\$736$. ✓ The account ends BELOW where it started, because the $20\\%$ drop worked on a bigger balance than the $15\\%$ rise did. (The choice $\\$760$ adds the percents, $+15\\% - 20\\% = -5\\%$; the choice $\\$920$ stops after the first year; the choice $\\$640$ is $800 \\times 0.8$, applying only the drop.)',
    },
    {
      q: 'A gym had $240$ members. The count fell $25\\%$, and then rose $40\\%$ of that reduced count. How many members are there at the end?',
      choices: ['$336$', '$252$', '$276$', '$180$'],
      answer: 1,
      solution:
        'Multiply: $240 \\times 0.75 \\times 1.4 = 240 \\times 1.05 = 252$ members. Step by step: $240$ falls to $180$, and $40\\%$ of $180$ is $72$, so $180 + 72 = 252$ — whole people at every stage. ✓ (The choice $276$ adds the percents, $-25\\% + 40\\% = +15\\%$, giving $240 \\times 1.15$; the choice $180$ stops after the fall; the choice $336$ is $240 \\times 1.4$, applying only the rise.)',
    },
  ],
  // p7 — dilution: the pure stuff stays put while the total grows
  [
    {
      q: 'A jug holds $20$ liters of a mixture that is $45\\%$ juice. You stir in $10$ liters of pure water. What percent of the NEW mixture is juice?',
      choices: ['$45\\%$', '$22.5\\%$', '$70\\%$', '$30\\%$'],
      answer: 3,
      solution:
        'Track the juice, which water cannot change: $45\\%$ of $20$ L is $9$ L of juice. The total grows to $20 + 10 = 30$ L, so the new concentration is $\\frac{9}{30} = 0.3 = 30\\%$ of the new mixture. (The choice $45\\%$ assumes adding water changes nothing, but the base got bigger; the choice $22.5\\%$ halves the concentration, which would be right only if the total had DOUBLED — it grew by half; the choice $70\\%$ is the share that is water, $\\frac{11 + 10}{30}$, the other component.)',
    },
    {
      q: 'A beaker holds $8$ liters of a $50\\%$ salt solution. You add $12$ liters of pure water. What percent of the new solution is salt?',
      choices: ['$50\\%$', '$20\\%$', '$80\\%$', '$25\\%$'],
      answer: 1,
      solution:
        'The salt is fixed: $50\\%$ of $8$ L is $4$ L. The new total is $8 + 12 = 20$ L, so the concentration is $\\frac{4}{20} = 0.2 = 20\\%$ of the whole new solution. (The choice $50\\%$ leaves the concentration untouched even though the total grew; the choice $80\\%$ is the share of the new solution that is WATER, $\\frac{16}{20}$; the choice $25\\%$ divides the concentration by $2$ on the hunch that "a lot more water" means half as strong, but the total went up by a factor of $2.5$, not $2$.)',
    },
    {
      q: 'A tank holds $15$ liters of a $60\\%$ antifreeze mixture. You add $5$ liters of pure water. What percent of the new mixture is antifreeze?',
      choices: ['$60\\%$', '$30\\%$', '$45\\%$', '$55\\%$'],
      answer: 2,
      solution:
        'The antifreeze stays at $60\\%$ of $15 = 9$ L. The total becomes $15 + 5 = 20$ L, so the new mixture is $\\frac{9}{20} = 0.45 = 45\\%$ antifreeze. (The choice $60\\%$ ignores the growth of the total; the choice $55\\%$ is the water’s share of the new mixture, $\\frac{6 + 5}{20}$; the choice $30\\%$ halves the concentration, but the total grew only from $15$ to $20$ liters, not to $30$.)',
    },
  ],
  // p8 — the added substance joins the WHOLE as well as the part
  [
    {
      q: 'How many grams of sugar must be stirred into $270$ grams of water so that the syrup is $25\\%$ sugar by weight of the whole syrup?',
      choices: ['$90$', '$67.5$', '$360$', '$810$'],
      answer: 0,
      solution:
        'Let $s$ be the grams of sugar. The whole SYRUP weighs $270 + s$ grams, so $\\frac{s}{270 + s} = \\frac{25}{100} = \\frac{1}{4}$. Cross-multiply: $4s = 270 + s$, so $3s = 270$ and $s = 90$. Check forward: $90$ g of sugar in $270 + 90 = 360$ g of syrup is $\\frac{90}{360} = 25\\%$. ✓ (The choice $67.5$ is $25\\%$ of the WATER alone, forgetting that the sugar is part of the syrup too; the choice $360$ is the weight of the whole syrup, one step past the question; the choice $810$ makes the water the $25\\%$ part instead of the sugar.)',
    },
    {
      q: 'How many liters of pure alcohol must be added to $48$ liters of water so that the mixture is $20\\%$ alcohol of the whole mixture?',
      choices: ['$9.6$', '$60$', '$240$', '$12$'],
      answer: 3,
      solution:
        'Let $a$ be the liters of alcohol. The whole mixture is $48 + a$ liters, so $\\frac{a}{48 + a} = \\frac{20}{100} = \\frac{1}{5}$. Cross-multiply: $5a = 48 + a$, so $4a = 48$ and $a = 12$. Check forward: $12$ L of alcohol in $60$ L of mixture is $\\frac{12}{60} = 20\\%$. ✓ (The choice $9.6$ is $20\\%$ of the water alone, using the water as the whole; the choice $60$ is the size of the finished mixture, not the alcohol added; the choice $240$ is $48 \\div 0.2$, which treats the WATER as the $20\\%$ part.)',
    },
    {
      q: 'A chemist has $60$ grams of a solution that is $8\\%$ iodine. How many grams of pure iodine must be added so that the result is $20\\%$ iodine of the new total?',
      choices: ['$12$', '$4.8$', '$9$', '$7.2$'],
      answer: 2,
      solution:
        'There are already $8\\%$ of $60 = 4.8$ grams of iodine. Let $x$ be the grams added; the iodine becomes $4.8 + x$ and the whole solution becomes $60 + x$, since the added iodine joins BOTH. So $\\frac{4.8 + x}{60 + x} = \\frac{1}{5}$, giving $5(4.8 + x) = 60 + x$, then $24 + 5x = 60 + x$, so $4x = 36$ and $x = 9$. Check forward: $13.8$ grams of iodine in $69$ grams of solution is $\\frac{13.8}{69} = 20\\%$. ✓ (The choice $12$ is $20\\%$ of the original $60$ g, ignoring both the iodine already present and the growth of the total; the choice $7.2$ is $12 - 4.8$, the apparent shortfall, and forgets that the added iodine raises the total as well; the choice $4.8$ is the iodine that was there all along.)',
    },
  ],
  // p9 — two discounts in a row are a product of what REMAINS, not a sum
  [
    {
      q: 'A price is cut $30\\%$ off the original, and then cut a further $20\\%$ off the reduced price. What single discount off the original price is this equivalent to?',
      choices: ['$50\\%$', '$44\\%$', '$56\\%$', '$10\\%$'],
      answer: 1,
      solution:
        'Work with what REMAINS: $0.7 \\times 0.8 = 0.56$, so $56\\%$ of the original price survives and $100\\% - 56\\% = 44\\%$ has been taken off. Carry a concrete price through to be certain: $\\$100$ falls to $\\$70$, and $20\\%$ of $\\$70$ is $\\$14$, leaving $\\$56$ — a $\\$44$ cut on $\\$100$. ✓ (The choice $50\\%$ adds the two percents, but the second cut acted on an already-reduced price; the choice $56\\%$ is the fraction that REMAINS, not the discount; the choice $10\\%$ subtracts one percent from the other.)',
    },
    {
      q: 'A coat is marked $40\\%$ off the original price, and a coupon then takes $10\\%$ off the reduced price. What single discount off the original price is this equivalent to?',
      choices: ['$46\\%$', '$50\\%$', '$54\\%$', '$30\\%$'],
      answer: 0,
      solution:
        'Multiply the surviving fractions: $0.6 \\times 0.9 = 0.54$, so $54\\%$ of the original price is left and the discount is $100\\% - 54\\% = 46\\%$. Check with a real price: $\\$200$ drops to $\\$120$, then the coupon removes $10\\%$ of $\\$120 = \\$12$, leaving $\\$108$ — that is $\\$92$ off $\\$200$, which is $46\\%$. ✓ (The choice $50\\%$ adds $40$ and $10$; the choice $54\\%$ reports the fraction remaining as though it were the discount; the choice $30\\%$ subtracts the percents.)',
    },
    {
      q: 'A price is cut $25\\%$ off the original, and then cut again off the reduced price so that the two cuts together are worth a single $40\\%$ discount off the original. What is the second discount?',
      choices: ['$15\\%$', '$60\\%$', '$80\\%$', '$20\\%$'],
      answer: 3,
      solution:
        'Overall, $60\\%$ of the original must remain. The first cut leaves $0.75$, so the second must satisfy $0.75 \\times r = 0.6$, giving $r = 0.8$ — that is, $80\\%$ remains and the second discount is $20\\%$ off the reduced price. Check with $\\$100$: the first cut leaves $\\$75$, and $20\\%$ of $\\$75$ is $\\$15$, leaving $\\$60$, exactly $40\\%$ off the original. ✓ (The choice $15\\%$ subtracts $25$ from $40$, adding percents in reverse; the choice $80\\%$ is the fraction that REMAINS after the second cut, not the cut itself; the choice $60\\%$ is the fraction remaining overall.)',
    },
  ],
  // p10 — weighted mixtures; the bigger batch pulls the average toward itself
  [
    {
      q: 'An alloy is made by melting $30$ grams of metal that is $20\\%$ silver together with $70$ grams of metal that is $40\\%$ silver. What percent of the new alloy is silver?',
      choices: ['$30\\%$', '$60\\%$', '$34\\%$', '$26\\%$'],
      answer: 2,
      solution:
        'Count the silver in each piece: $0.2 \\times 30 = 6$ grams and $0.4 \\times 70 = 28$ grams, for $34$ grams of silver in $30 + 70 = 100$ grams of alloy. That is $\\frac{34}{100} = 34\\%$. (The choice $30\\%$ is the plain average of $20$ and $40$, which would only be right with equal masses — there is more of the richer metal, so the answer must sit above $30\\%$; the choice $60\\%$ adds the two percents; the choice $26\\%$ attaches each percent to the wrong mass, computing $0.4 \\times 30 + 0.2 \\times 70$.)',
    },
    {
      q: 'A blend is made from $2$ liters of a drink that is $15\\%$ fruit and $3$ liters of a drink that is $40\\%$ fruit. What percent of the blend is fruit?',
      choices: ['$30\\%$', '$27.5\\%$', '$55\\%$', '$25\\%$'],
      answer: 0,
      solution:
        'Track the fruit: $0.15 \\times 2 = 0.3$ L and $0.4 \\times 3 = 1.2$ L, so $1.5$ L of fruit sits in $5$ L of blend. That is $\\frac{1.5}{5} = 0.3 = 30\\%$. (The choice $27.5\\%$ averages $15$ and $40$ evenly, but the $40\\%$ drink deserves more weight since there is more of it; the choice $55\\%$ adds the percents; the choice $25\\%$ swaps the weights, computing $0.4 \\times 2 + 0.15 \\times 3$ over $5$ liters.)',
    },
    {
      q: 'A chemist mixes $40$ grams of a $10\\%$ acid solution with $60$ grams of a second solution, and the $100$ grams that result are $22\\%$ acid. What percent acid was the second solution?',
      choices: ['$34\\%$', '$30\\%$', '$12\\%$', '$18\\%$'],
      answer: 1,
      solution:
        'The finished mixture holds $0.22 \\times 100 = 22$ grams of acid. The first solution contributed $0.1 \\times 40 = 4$ grams, so the second contributed $22 - 4 = 18$ grams — and those $18$ grams sit in $60$ grams of solution, which is $\\frac{18}{60} = 0.3 = 30\\%$. Check forward: $4 + 18 = 22$ grams of acid in $100$ grams is $22\\%$. ✓ (The choice $18\\%$ reads off the $18$ GRAMS of acid and calls it a percent, skipping the division by $60$; the choice $34\\%$ comes from averaging evenly, solving $\\frac{10 + x}{2} = 22$, which ignores the unequal masses; the choice $12\\%$ subtracts $10$ from $22$, treating percents as if they simply added.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 6,
  sections: { '6.3': s63, '6.5': s65 },
}
