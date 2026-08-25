// Prealgebra chapter 7 — variations for sections 7.4-7.6.
// All problems and solutions are original MathQuest content.

const s74 = [
  // p1 — hours to minutes
  [
    {
      q: 'How many minutes are in $7$ hours?',
      choices: ['$420$ minutes', '$700$ minutes', '$168$ minutes', '$67$ minutes'],
      answer: 0,
      solution:
        'Use the factor with hours on the bottom: $7 \\text{ h} \\times \\frac{60 \\text{ min}}{1 \\text{ h}} = 420$ minutes. The choice $700$ uses $100$ minutes per hour, $168$ multiplies by $24$ (the hours in a DAY) instead of $60$, and $67$ adds $60$ instead of multiplying by it.',
    },
    {
      q: 'A rehearsal lasts $2$ hours and $15$ minutes. How many minutes is that in total?',
      choices: ['$215$ minutes', '$120$ minutes', '$135$ minutes', '$129$ minutes'],
      answer: 2,
      solution:
        'Convert the hours, then add the leftover minutes: $2 \\times 60 = 120$, and $120 + 15 = 135$ minutes. Writing $215$ pretends an hour holds $100$ minutes, $120$ drops the extra $15$ minutes, and $129$ comes from calling the time $2.15$ hours and multiplying by $60$ — but $15$ minutes is a quarter of an hour, not $0.15$ of one.',
    },
    {
      q: 'Bread dough rests for $\\frac{3}{4}$ of an hour. How many minutes is that?',
      choices: ['$80$ minutes', '$75$ minutes', '$15$ minutes', '$45$ minutes'],
      answer: 3,
      solution:
        'Multiply by the factor $\\frac{60 \\text{ min}}{1 \\text{ h}}$: $\\frac{3}{4} \\times 60 = 45$ minutes. Choice $80$ divides by $\\frac{3}{4}$ instead of multiplying — an upside-down conversion, and it gives MORE than an hour for less than an hour. Choice $75$ uses $100$ minutes per hour, and $15$ takes only one quarter instead of three.',
    },
  ],
  // p2 — a small unit up to a bigger one
  [
    {
      q: 'Convert $750$ cm to meters.',
      choices: ['$7.5$ m', '$75{,}000$ m', '$0.75$ m', '$75$ m'],
      answer: 0,
      solution:
        'Meters are the bigger unit, so divide: $750 \\div 100 = 7.5$ m. Multiplying by $100$ gives $75{,}000$ — the conversion factor pointed the wrong way, and the size check catches it. Choice $0.75$ divides by $1000$ (the metres-in-a-kilometre factor) and $75$ divides by only $10$.',
    },
    {
      q: 'Convert $45$ mm to centimeters. ($1$ cm $= 10$ mm.)',
      choices: ['$450$ cm', '$4.5$ cm', '$0.45$ cm', '$55$ cm'],
      answer: 1,
      solution:
        'Centimeters are bigger than millimeters, so there are fewer of them: $45 \\div 10 = 4.5$ cm. Choice $450$ multiplies by $10$ instead of dividing, $0.45$ divides by $100$ (the centimeter-to-meter factor), and $55$ adds $10$ rather than dividing by it.',
    },
    {
      q: 'A walking path is $4200$ m long. How many kilometers is that?',
      choices: ['$4{,}200{,}000$ km', '$42$ km', '$4.2$ km', '$420$ km'],
      answer: 2,
      solution:
        'A kilometer is $1000$ m, and kilometers are the bigger unit, so divide: $4200 \\div 1000 = 4.2$ km. Multiplying gives $4{,}200{,}000$ km, which is further than a trip around the world. Choice $42$ divides by $100$ and $420$ divides by $10$.',
    },
  ],
  // p3 — a big unit down to a smaller one
  [
    {
      q: 'A kitten weighs $3$ pounds. How many ounces is that? ($1$ pound $= 16$ ounces.)',
      choices: ['$19$ ounces', '$48$ ounces', '$\\frac{3}{16}$ ounce', '$36$ ounces'],
      answer: 1,
      solution:
        'Ounces are smaller, so there are more of them: $3 \\times 16 = 48$ ounces. Choice $19$ adds $16$ instead of multiplying, $\\frac{3}{16}$ divides by $16$ — the upside-down factor, and far too small — and $36$ uses $12$ ounces per pound (that is inches per foot, not ounces per pound).',
    },
    {
      q: 'A recipe calls for $2.5$ pounds of potatoes. How many ounces is that? ($1$ pound $= 16$ ounces.)',
      choices: ['$18.5$ ounces', '$30$ ounces', '$40$ ounces', '$32$ ounces'],
      answer: 2,
      solution:
        'Multiply by $\\frac{16 \\text{ oz}}{1 \\text{ lb}}$: $2.5 \\times 16 = 40$ ounces. Choice $18.5$ adds $16$, choice $30$ uses $12$ ounces per pound, and $32$ ignores the half pound and converts only the $2$.',
    },
    {
      q: 'A jug holds $3$ gallons. How many pints is that? ($1$ gallon $= 8$ pints.)',
      choices: ['$\\frac{3}{8}$ pint', '$11$ pints', '$12$ pints', '$24$ pints'],
      answer: 3,
      solution:
        'Pints are smaller than gallons, so multiply: $3 \\times 8 = 24$ pints. Choice $\\frac{3}{8}$ divides instead of multiplying, $11$ adds $8$, and $12$ uses $4$ per gallon — that is the number of QUARTS in a gallon, not pints.',
    },
  ],
  // p4 — the thousand-step of the metric ladder
  [
    {
      q: 'Convert $8$ km to meters.',
      choices: ['$8000$ m', '$800$ m', '$0.008$ m', '$8{,}000{,}000$ m'],
      answer: 0,
      solution:
        'Each kilometer is $1000$ meters: $8 \\times 1000 = 8000$ m. Choice $800$ uses $100$ m per km, $0.008$ divides by $1000$ instead of multiplying, and $8{,}000{,}000$ takes one hop too many — that is the answer in MILLIMETERS.',
    },
    {
      q: 'A tunnel is $0.6$ km long. How many meters long is it?',
      choices: ['$60$ m', '$600$ m', '$0.0006$ m', '$6000$ m'],
      answer: 1,
      solution:
        'Multiply by $\\frac{1000 \\text{ m}}{1 \\text{ km}}$: $0.6 \\times 1000 = 600$ m. Choice $60$ uses $100$ m per km, $0.0006$ divides by $1000$ (the upside-down factor), and $6000$ slides the decimal point one place too far.',
    },
    {
      q: 'How many grams are in $4$ kilograms? ($1$ kg $= 1000$ g.)',
      choices: ['$400$ g', '$0.004$ g', '$1004$ g', '$4000$ g'],
      answer: 3,
      solution:
        'Grams are smaller than kilograms, so the count grows: $4 \\times 1000 = 4000$ g. Choice $400$ uses $100$ g per kg, $0.004$ divides by $1000$ instead of multiplying, and $1004$ adds $1000$ rather than multiplying by it.',
    },
  ],
  // p5 — minutes into hours
  [
    {
      q: 'A flight lasts $210$ minutes. How long is that in hours?',
      choices: ['$12{,}600$ hours', '$3.5$ hours', '$2.1$ hours', '$3.3$ hours'],
      answer: 1,
      solution:
        'Hours are the bigger unit, so divide: $210 \\div 60 = 3.5$ hours. Choice $12{,}600$ MULTIPLIES by $60$ — the classic upside-down conversion, and no flight lasts that long. Choice $2.1$ uses $100$ minutes per hour, and $3.3$ writes the leftover $30$ minutes as "$.3$" instead of as half an hour.',
    },
    {
      q: 'A bake takes $45$ minutes. What fraction of an hour is that?',
      choices: ['$\\frac{4}{3}$ hour', '$2700$ hours', '$\\frac{3}{4}$ hour', '$0.45$ hour'],
      answer: 2,
      solution:
        'Divide by $60$: $\\frac{45}{60} = \\frac{3}{4}$ hour. Choice $\\frac{4}{3}$ flips the fraction, which would make $45$ minutes LONGER than an hour. Choice $2700$ multiplies by $60$ instead of dividing, and $0.45$ pretends an hour holds $100$ minutes.',
    },
    {
      q: 'A school day runs for $390$ minutes. How long is that in hours?',
      choices: ['$3.9$ hours', '$23{,}400$ hours', '$6$ hours', '$6.5$ hours'],
      answer: 3,
      solution:
        'Divide by $60$: $390 \\div 60 = 6.5$ hours. Choice $3.9$ uses $100$ minutes per hour, $23{,}400$ multiplies by $60$ instead of dividing, and $6$ keeps only the whole hours and throws away the leftover $30$ minutes.',
    },
  ],
  // p6 — smaller unit up to bigger, with a size check
  [
    {
      q: 'A watermelon weighs $96$ ounces. How many pounds is that? ($1$ pound $= 16$ ounces.)',
      choices: ['$6$ pounds', '$1536$ pounds', '$8$ pounds', '$80$ pounds'],
      answer: 0,
      solution:
        'Pounds are bigger, so divide: $96 \\div 16 = 6$ pounds. Choice $1536$ multiplies by $16$ — an upside-down factor that makes the number grow when it should shrink. Choice $8$ uses $12$ ounces per pound, and $80$ subtracts $16$ instead of dividing.',
    },
    {
      q: 'A bottle holds $2000$ mL of water. How many liters is that? ($1$ L $= 1000$ mL.)',
      choices: ['$2{,}000{,}000$ L', '$2$ L', '$20$ L', '$200$ L'],
      answer: 1,
      solution:
        'Liters are the bigger unit, so divide: $2000 \\div 1000 = 2$ L. Choice $2{,}000{,}000$ multiplies by $1000$, $20$ divides by $100$, and $200$ divides by $10$ — only the factor $1000$ matches "milli".',
    },
    {
      q: 'A song lasts $270$ seconds. How long is that in minutes?',
      choices: ['$16{,}200$ minutes', '$2.7$ minutes', '$4.3$ minutes', '$4.5$ minutes'],
      answer: 3,
      solution:
        'Divide by $60$: $270 \\div 60 = 4.5$ minutes, which is $4$ minutes and $30$ seconds. Choice $16{,}200$ multiplies by $60$ instead of dividing, $2.7$ uses $100$ seconds per minute, and $4.3$ writes the leftover $30$ seconds as "$.3$" — but $30$ seconds is half a minute, so it must be written $.5$.',
    },
  ],
  // p7 — chained time conversions
  [
    {
      q: 'How many minutes are in $3$ days?',
      choices: ['$4320$ minutes', '$180$ minutes', '$72$ minutes', '$7200$ minutes'],
      answer: 0,
      solution:
        'Chain two factors: $3 \\text{ days} \\times \\frac{24 \\text{ h}}{1 \\text{ day}} \\times \\frac{60 \\text{ min}}{1 \\text{ h}} = 3 \\times 24 \\times 60 = 4320$ minutes. Choice $72$ stops after the hours, $180$ skips the days-to-hours link entirely, and $7200$ uses $100$ minutes per hour.',
    },
    {
      q: 'How many seconds are in $2$ hours?',
      choices: ['$120$ seconds', '$7200$ seconds', '$20{,}000$ seconds', '$3600$ seconds'],
      answer: 1,
      solution:
        'Two links in the chain: $2 \\times 60 = 120$ minutes, then $120 \\times 60 = 7200$ seconds. Choice $120$ stops at the minutes, $20{,}000$ uses $100$ for both links, and $3600$ is the count for ONE hour, not two.',
    },
    {
      q: 'How many minutes are in one full week?',
      choices: ['$1440$ minutes', '$168$ minutes', '$10{,}080$ minutes', '$16{,}800$ minutes'],
      answer: 2,
      solution:
        'Chain three factors: $7 \\times 24 \\times 60 = 10{,}080$ minutes. Choice $1440$ covers only one day, $168$ stops at the hours in a week, and $16{,}800$ uses $100$ minutes per hour.',
    },
  ],
  // p8 — two hops down (or up) the metric ladder
  [
    {
      q: 'Convert $0.7$ km to centimeters.',
      choices: ['$70{,}000$ cm', '$700$ cm', '$700{,}000$ cm', '$0.000007$ cm'],
      answer: 0,
      solution:
        'Two hops: $0.7 \\times 1000 = 700$ m, then $700 \\times 100 = 70{,}000$ cm. Choice $700$ stops at meters, $700{,}000$ multiplies by $1000$ on the second hop as well (that is the answer in millimeters), and $0.000007$ divides on both hops instead of multiplying — centimeters are tiny, so the number must get bigger.',
    },
    {
      q: 'Convert $2$ km to millimeters. ($1$ m $= 1000$ mm.)',
      choices: ['$2000$ mm', '$200{,}000$ mm', '$2{,}000{,}000$ mm', '$0.000002$ mm'],
      answer: 2,
      solution:
        'Chain the two factors: $2 \\times 1000 = 2000$ m, then $2000 \\times 1000 = 2{,}000{,}000$ mm. Choice $2000$ stops at meters, $200{,}000$ uses $100$ mm per meter (that is the centimeter count), and $0.000002$ divides twice instead of multiplying.',
    },
    {
      q: 'A hallway floor plan measures $250{,}000$ cm end to end. How many kilometers is that?',
      choices: ['$2500$ km', '$25$ km', '$0.25$ km', '$2.5$ km'],
      answer: 3,
      solution:
        'Climb the ladder twice, dividing each time: $250{,}000 \\div 100 = 2500$ m, then $2500 \\div 1000 = 2.5$ km. Choice $2500$ stops at meters, $25$ uses only $100$ m per km, and $0.25$ uses $1{,}000{,}000$ cm per km — that is the MILLIMETER count in a kilometer.',
    },
  ],
  // p9 — converting a speed, both units at once
  [
    {
      q: 'A runner moves at $18$ km per hour. What is that speed in meters per second?',
      choices: ['$5$ m/s', '$64.8$ m/s', '$0.005$ m/s', '$300$ m/s'],
      answer: 0,
      solution:
        'Convert top and bottom separately: $18$ km $= 18{,}000$ m and $1$ hour $= 3600$ s, so the speed is $\\frac{18{,}000}{3600} = 5$ m/s. Choice $64.8$ multiplies by $3.6$ instead of dividing, $0.005$ converts the time but forgets the kilometers, and $300$ divides by $60$ instead of $3600$ — that answer is meters per MINUTE.',
    },
    {
      q: 'A tram travels at $54$ km/h. What is its speed in meters per second?',
      choices: ['$194.4$ m/s', '$15$ m/s', '$900$ m/s', '$0.9$ m/s'],
      answer: 1,
      solution:
        '$54$ km $= 54{,}000$ m and $1$ hour $= 3600$ s, so the speed is $\\frac{54{,}000}{3600} = 15$ m/s. Choice $194.4$ multiplies by $3.6$ — the factor pointed the wrong way. Choice $900$ divides by $60$ only, and $0.9$ converts the hours to minutes but leaves the distance in kilometers.',
    },
    {
      q: 'A swimmer moves at $2$ meters per second. What is that speed in kilometers per hour?',
      choices: ['$120$ km/h', '$7200$ km/h', '$0.12$ km/h', '$7.2$ km/h'],
      answer: 3,
      solution:
        'In one hour the swimmer covers $2 \\times 3600 = 7200$ m, and $7200$ m $= 7200 \\div 1000 = 7.2$ km, so the speed is $7.2$ km/h. Choice $7200$ forgets to turn meters into kilometers, $120$ stops after one minute, and $0.12$ is kilometers per MINUTE — the distance was converted but the time was not.',
    },
  ],
  // p10 — converting a rate with one hop on each unit
  [
    {
      q: 'A caterpillar crawls $8$ cm every minute. How fast is that in meters per hour?',
      choices: ['$480$ m per hour', '$4.8$ m per hour', '$0.08$ m per hour', '$288$ m per hour'],
      answer: 1,
      solution:
        'Scale the time first: $8 \\times 60 = 480$ cm per hour. Then convert the distance: $480 \\div 100 = 4.8$ m per hour. Choice $480$ forgets the centimeters-to-meters hop, $0.08$ converts the distance but leaves the time in minutes, and $288$ uses $3600$ (the SECONDS in an hour) as the time factor.',
    },
    {
      q: 'A tap drips $12$ mL of water every second. How many liters is that per minute?',
      choices: ['$720$ liters per minute', '$0.012$ liters per minute', '$0.72$ liters per minute', '$43.2$ liters per minute'],
      answer: 2,
      solution:
        'Scale the time: $12 \\times 60 = 720$ mL per minute. Convert the volume: $720 \\div 1000 = 0.72$ liters per minute. Choice $720$ leaves the answer in milliliters, $0.012$ converts the volume but not the time, and $43.2$ uses $3600$ seconds — the factor for an HOUR, not a minute.',
    },
    {
      q: 'A glacier slides $6$ meters every day. How many centimeters is that per hour?',
      choices: ['$14{,}400$ cm per hour', '$0.25$ cm per hour', '$144$ cm per hour', '$25$ cm per hour'],
      answer: 3,
      solution:
        'Convert the distance: $6$ m $= 600$ cm per day. Now share that across the day’s $24$ hours: $600 \\div 24 = 25$ cm per hour. Choice $14{,}400$ MULTIPLIES by $24$ instead of dividing — a day is longer than an hour, so the number must shrink. Choice $144$ multiplies by $24$ and skips the meters-to-centimeters hop, and $0.25$ divides by $24$ correctly but never converts meters to centimeters.',
    },
  ],
]

const s75 = [
  // p1 — distance from rate and time
  [
    {
      q: 'A ferry sails at $24$ km/h for $4$ hours. How far does it travel?',
      choices: ['$6$ km', '$96$ km', '$28$ km', '$5760$ km'],
      answer: 1,
      solution:
        'Distance is rate times time: $d = 24 \\times 4 = 96$ km. Choice $6$ divides instead of multiplying, $28$ adds the two numbers, and $5760$ turns the $4$ hours into $240$ minutes first and then multiplies ($24 \\times 240$) — but the speed is already given per HOUR, so no conversion is needed.',
    },
    {
      q: 'A rowing boat moves at $6$ km/h. How far does it go in $2.5$ hours?',
      choices: ['$8.5$ km', '$2.4$ km', '$15$ km', '$900$ km'],
      answer: 2,
      solution:
        '$d = r \\times t = 6 \\times 2.5 = 15$ km. Choice $8.5$ adds the speed and the time, $2.4$ divides $6$ by $2.5$, and $900$ converts the time to $150$ minutes and multiplies by a speed measured in hours — mixing two different time units.',
    },
    {
      q: 'A tractor moves at $8$ km/h. How far does it travel in $\\frac{3}{4}$ of an hour?',
      choices: ['$\\frac{32}{3}$ km', '$2$ km', '$360$ km', '$6$ km'],
      answer: 3,
      solution:
        '$d = 8 \\times \\frac{3}{4} = 6$ km. Choice $\\frac{32}{3}$ DIVIDES by $\\frac{3}{4}$, which would make less than an hour cover more ground than a full hour. Choice $2$ uses only one quarter of the hour, and $360$ multiplies by $45$ minutes while the speed is per hour.',
    },
  ],
  // p2 — rate from distance and time
  [
    {
      q: 'A cyclist covers $84$ km in $4$ hours. What is her average speed?',
      choices: ['$21$ km/h', '$336$ km/h', '$88$ km/h', '$\\frac{1}{21}$ km/h'],
      answer: 0,
      solution:
        'Speed is distance divided by time: $\\frac{84}{4} = 21$ km/h. Choice $336$ multiplies instead of dividing, $88$ adds, and $\\frac{1}{21}$ divides the time by the distance — the unit check catches it, since hours over kilometers is not a speed.',
    },
    {
      q: 'A bus travels $150$ miles in $2.5$ hours. What is its speed?',
      choices: ['$375$ mph', '$60$ mph', '$152.5$ mph', '$75$ mph'],
      answer: 1,
      solution:
        '$r = \\frac{d}{t} = \\frac{150}{2.5} = 60$ miles per hour. Check: $60 \\times 2.5 = 150$. ✓ Choice $375$ multiplies, $152.5$ adds, and $75$ rounds the time down to $2$ hours before dividing — that half hour matters.',
    },
    {
      q: 'A swimmer covers $400$ meters in $8$ minutes. What is her speed in meters per minute?',
      choices: ['$3200$ m per minute', '$0.02$ m per minute', '$408$ m per minute', '$50$ m per minute'],
      answer: 3,
      solution: 'Divide distance by time: $\\frac{400}{8} = 50$ meters per minute. Choice $3200$ multiplies, $408$ adds, and $0.02$ computes $\\frac{8}{400}$ — that is minutes per meter, the rate turned upside down.',
    },
  ],
  // p3 — time from distance and rate
  [
    {
      q: 'How long does it take to cycle $54$ km at $18$ km/h?',
      choices: ['$3$ hours', '$972$ hours', '$36$ hours', '$\\frac{1}{3}$ hour'],
      answer: 0,
      solution:
        'Time is distance divided by rate: $\\frac{54}{18} = 3$ hours. Check: $18 \\times 3 = 54$ km. ✓ Choice $972$ multiplies instead of dividing, $36$ subtracts, and $\\frac{1}{3}$ divides the rate by the distance.',
    },
    {
      q: 'A hiker walks $15$ km at a steady $4$ km/h. How long does the hike take?',
      choices: ['$60$ hours', '$11$ hours', '$3.75$ hours', '$\\frac{4}{15}$ hour'],
      answer: 2,
      solution:
        '$t = \\frac{d}{r} = \\frac{15}{4} = 3.75$ hours, which is $3$ hours and $45$ minutes. Choice $60$ multiplies, $11$ subtracts, and $\\frac{4}{15}$ divides the wrong way round — that would have a hiker crossing $15$ km in under $20$ minutes.',
    },
    {
      q: 'A train covers $210$ km at a steady $60$ km/h. How long does the journey take?',
      choices: ['$12{,}600$ hours', '$\\frac{2}{7}$ hour', '$3$ hours $50$ minutes', '$3.5$ hours'],
      answer: 3,
      solution:
        '$t = \\frac{210}{60} = 3.5$ hours. Choice $12{,}600$ multiplies instead of dividing and $\\frac{2}{7}$ flips the division. Choice "$3$ hours $50$ minutes" reads the $.5$ as $50$ minutes, but $0.5$ of an hour is $30$ minutes — the trip is $3$ hours $30$ minutes.',
    },
  ],
  // p4 — distance when the time is not in hours
  [
    {
      q: 'Maya walks at $5$ km/h for $24$ minutes. How far does she walk?',
      choices: ['$2$ km', '$120$ km', '$1.2$ km', '$7200$ km'],
      answer: 0,
      solution:
        'The speed is per hour, so convert first: $24$ minutes $= \\frac{24}{60} = 0.4$ hour. Then $d = 5 \\times 0.4 = 2$ km. Choice $120$ multiplies by $24$ without converting, $1.2$ uses $100$ minutes per hour, and $7200$ turns minutes into hours by MULTIPLYING by $60$ — the factor is upside down, and no one walks $7200$ km before lunch.',
    },
    {
      q: 'A go-kart travels at $30$ km/h for $20$ minutes. How far does it go?',
      choices: ['$600$ km', '$10$ km', '$6$ km', '$36{,}000$ km'],
      answer: 1,
      solution:
        'Convert the time: $20$ minutes $= \\frac{1}{3}$ hour. Then $d = 30 \\times \\frac{1}{3} = 10$ km. Choice $600$ multiplies the minutes straight into a per-hour speed, $6$ uses $100$ minutes per hour, and $36{,}000$ multiplies by $60$ to "convert" minutes to hours instead of dividing.',
    },
    {
      q: 'A boat sails at $16$ km/h for $2$ hours and $15$ minutes. How far does it sail?',
      choices: ['$32$ km', '$34.4$ km', '$36$ km', '$2160$ km'],
      answer: 2,
      solution:
        'Write the time as hours: $15$ minutes is a quarter hour, so $t = 2.25$ hours and $d = 16 \\times 2.25 = 36$ km. Choice $32$ drops the extra $15$ minutes, $34.4$ calls the time $2.15$ hours, and $2160$ multiplies by $135$ minutes while the speed is per hour.',
    },
  ],
  // p5 — find the rate, then use it again
  [
    {
      q: 'A van drives $240$ km in $4$ hours. At the same speed, how far will it go in $7$ hours?',
      choices: ['$420$ km', '$243$ km', '$1680$ km', '$180$ km'],
      answer: 0,
      solution:
        'First the speed: $\\frac{240}{4} = 60$ km/h. Then $60 \\times 7 = 420$ km. Choice $243$ just adds $3$ km for the $3$ extra hours — distance scales by multiplying, not adding. Choice $1680$ multiplies $240$ by $7$ without finding the speed, and $180$ covers only the $3$ EXTRA hours.',
    },
    {
      q: 'A train travels $180$ miles in $3$ hours. At that same speed, how long will a $300$ mile trip take?',
      choices: ['$900$ hours', '$2$ hours', '$5$ hours', '$\\frac{5}{9}$ hour'],
      answer: 2,
      solution:
        'The speed is $\\frac{180}{3} = 60$ mph, so $300$ miles takes $\\frac{300}{60} = 5$ hours. Choice $2$ counts only the extra $120$ miles and forgets the first $3$ hours. Choice $900$ multiplies instead of dividing, and $\\frac{5}{9}$ comes from calling the speed $180 \\times 3 = 540$ mph.',
    },
    {
      q: 'A cart rolls $96$ meters in $8$ seconds. At the same speed, how far does it roll in $30$ seconds?',
      choices: ['$118$ m', '$2880$ m', '$25.6$ m', '$360$ m'],
      answer: 3,
      solution:
        'Speed first: $\\frac{96}{8} = 12$ m/s. Then $12 \\times 30 = 360$ m. Choice $118$ adds $22$ seconds’ worth of nothing in particular — that is additive thinking. Choice $2880$ skips the unit rate, and $25.6$ scales by $\\frac{8}{30}$ instead of $\\frac{30}{8}$, shrinking the distance when more time should mean more distance.',
    },
  ],
  // p6 — two travelers moving apart
  [
    {
      q: 'A scooter ($15$ km/h) and a runner ($9$ km/h) leave the same corner at the same moment in OPPOSITE directions. How far apart are they after $3$ hours?',
      choices: ['$18$ km', '$72$ km', '$45$ km', '$24$ km'],
      answer: 1,
      solution:
        'Moving apart, the gap grows at the SUM of the speeds: $15 + 9 = 24$ km/h. After $3$ hours the gap is $24 \\times 3 = 72$ km. Choice $18$ uses the difference of the speeds (that is for a chase, not a split), $45$ tracks only the scooter, and $24$ is the gap after just one hour.',
    },
    {
      q: 'Two boats leave the same dock at the same time in opposite directions, one at $12$ km/h and the other at $20$ km/h. How far apart are they after half an hour?',
      choices: ['$32$ km', '$4$ km', '$16$ km', '$64$ km'],
      answer: 2,
      solution:
        'The gap grows at $12 + 20 = 32$ km/h, so in $\\frac{1}{2}$ hour it grows by $32 \\times \\frac{1}{2} = 16$ km. Choice $32$ forgets to multiply by the time, $4$ uses the difference of the speeds, and $64$ divides by $\\frac{1}{2}$ instead of multiplying by it.',
    },
    {
      q: 'Two walkers set off from the same spot in opposite directions, one at $5$ km/h and one at $7$ km/h. After how long are they $18$ km apart?',
      choices: ['$9$ hours', '$3.6$ hours', '$216$ hours', '$1.5$ hours'],
      answer: 3,
      solution:
        'The gap opens at $5 + 7 = 12$ km/h, so the time is $\\frac{18}{12} = 1.5$ hours. Choice $9$ uses the difference $7 - 5 = 2$ km/h, $3.6$ counts only the slower walker, and $216$ multiplies $18$ by $12$ instead of dividing.',
    },
  ],
  // p7 — average speed on a there-and-back trip
  [
    {
      q: 'Priya drives $60$ km to a town at $30$ km/h and returns along the same road at $20$ km/h. What is her average speed for the round trip?',
      choices: ['$24$ km/h', '$25$ km/h', '$50$ km/h', '$12$ km/h'],
      answer: 0,
      solution:
        'Average speed is TOTAL distance over TOTAL time. Out: $\\frac{60}{30} = 2$ hours. Back: $\\frac{60}{20} = 3$ hours. So $\\frac{120 \\text{ km}}{5 \\text{ h}} = 24$ km/h. Choice $25$ averages the two speeds, which is wrong because the slow leg lasts longer. Choice $50$ adds the speeds, and $12$ uses only the one-way distance.',
    },
    {
      q: 'A courier rides $36$ km out at $12$ km/h and comes back along the same route at $36$ km/h. What is the average speed for the whole ride?',
      choices: ['$24$ km/h', '$18$ km/h', '$48$ km/h', '$9$ km/h'],
      answer: 1,
      solution:
        'Out: $\\frac{36}{12} = 3$ hours. Back: $\\frac{36}{36} = 1$ hour. Total: $72$ km in $4$ hours, so the average is $\\frac{72}{4} = 18$ km/h. Choice $24$ is the plain average of $12$ and $36$ — but the slow leg took three times as long, so it pulls the answer down. Choice $48$ adds the speeds and $9$ forgets that the return trip adds distance too.',
    },
    {
      q: 'Sam walks $6$ km at $6$ km/h and then runs the next $6$ km at $12$ km/h. What is his average speed for the whole $12$ km?',
      choices: ['$9$ km/h', '$18$ km/h', '$8$ km/h', '$4$ km/h'],
      answer: 2,
      solution:
        'Walking takes $\\frac{6}{6} = 1$ hour and running takes $\\frac{6}{12} = 0.5$ hour, so he covers $12$ km in $1.5$ hours: $\\frac{12}{1.5} = 8$ km/h. Choice $9$ averages $6$ and $12$ directly, which over-counts the fast leg because it took less time. Choice $18$ adds the speeds, and $4$ divides only one leg’s $6$ km by the full $1.5$ hours.',
    },
  ],
  // p8 — a chase with a head start
  [
    {
      q: 'Raj starts walking at $9{:}00$ am at $4$ km/h. At $10{:}00$ am Nina sets off along the same path at $12$ km/h. At what time does she catch him?',
      choices: ['$10{:}30$ am', '$10{:}20$ am', '$11{:}00$ am', '$10{:}15$ am'],
      answer: 0,
      solution:
        'By $10{:}00$ am Raj is $4$ km ahead. Nina closes that gap at $12 - 4 = 8$ km/h, needing $\\frac{4}{8} = 0.5$ hour, so she catches him at $10{:}30$ am. Choice $10{:}20$ divides the gap by Nina’s full $12$ km/h and forgets that Raj keeps walking. Choice $11{:}00$ divides by Raj’s speed, and $10{:}15$ ADDS the speeds — but they are going the same way, so the gap closes at the difference.',
    },
    {
      q: 'A freight train leaves a station at $8{:}00$ am travelling $40$ km/h. An express leaves the same station at $10{:}00$ am on the same line at $60$ km/h. At what time does the express catch the freight?',
      choices: ['$10{:}48$ am', '$2{:}00$ pm', '$11{:}20$ am', '$12{:}00$ noon'],
      answer: 1,
      solution:
        'The freight has a $2$ hour head start, so the gap is $40 \\times 2 = 80$ km. The express closes it at $60 - 40 = 20$ km/h, taking $\\frac{80}{20} = 4$ hours from $10{:}00$ am — that is $2{:}00$ pm. Choice $10{:}48$ adds the speeds instead of subtracting, $11{:}20$ divides the gap by $60$ and ignores that the freight keeps moving, and $12{:}00$ noon divides by $40$.',
    },
    {
      q: 'Tom starts jogging from a park gate at $6$ km/h. Half an hour later Ellie starts from the same gate along the same path at $10$ km/h. How far from the gate does Ellie catch Tom?',
      choices: ['$4.5$ km', '$3$ km', '$1.875$ km', '$7.5$ km'],
      answer: 3,
      solution:
        'Tom’s head start is $6 \\times \\frac{1}{2} = 3$ km. Ellie closes at $10 - 6 = 4$ km/h, so she needs $\\frac{3}{4}$ hour, and in that time she rides $10 \\times \\frac{3}{4} = 7.5$ km. Check: Tom has then gone $3 + 6 \\times \\frac{3}{4} = 7.5$ km too. ✓ Choice $4.5$ forgets Tom’s head start, $3$ is the head start itself, and $1.875$ adds the speeds instead of subtracting.',
    },
  ],
  // p9 — average speed from two timed legs
  [
    {
      q: 'A journey has two parts: $2$ hours at $30$ km/h, then $3$ hours at $55$ km/h. What is the average speed for the whole journey?',
      choices: ['$45$ km/h', '$42.5$ km/h', '$85$ km/h', '$112.5$ km/h'],
      answer: 0,
      solution:
        'Total distance: $30 \\times 2 + 55 \\times 3 = 60 + 165 = 225$ km. Total time: $5$ hours. Average: $\\frac{225}{5} = 45$ km/h. Choice $42.5$ averages the two speeds, which is too low because more of the trip was spent at the faster speed. Choice $85$ adds the speeds and $112.5$ divides the distance by $2$ legs instead of by $5$ hours.',
    },
    {
      q: 'A bus runs for $2$ hours at $60$ km/h and then for $4$ hours at $45$ km/h. What is its average speed for the whole run?',
      choices: ['$52.5$ km/h', '$105$ km/h', '$50$ km/h', '$150$ km/h'],
      answer: 2,
      solution:
        'Total distance: $60 \\times 2 + 45 \\times 4 = 120 + 180 = 300$ km in $6$ hours, so the average is $\\frac{300}{6} = 50$ km/h. Choice $52.5$ averages $60$ and $45$ and lands too high, because the bus spent twice as long at the slower speed. Choice $105$ adds the speeds, and $150$ divides by the $2$ legs instead of the $6$ hours.',
    },
    {
      q: 'A delivery van drives for $30$ minutes at $40$ km/h and then for $90$ minutes at $60$ km/h. What is its average speed for the whole trip?',
      choices: ['$50$ km/h', '$100$ km/h', '$45$ km/h', '$55$ km/h'],
      answer: 3,
      solution:
        'Turn the minutes into hours: $0.5$ h and $1.5$ h. Distances: $40 \\times 0.5 = 20$ km and $60 \\times 1.5 = 90$ km, so $110$ km in $2$ hours, giving $\\frac{110}{2} = 55$ km/h. Choice $50$ averages the speeds, $100$ adds them, and $45$ pairs each speed with the WRONG leg — the long leg is the fast one, so the answer must sit above the midpoint.',
    },
  ],
  // p10 — two travelers closing on each other
  [
    {
      q: 'Two cars start $360$ km apart and drive toward each other, one at $50$ km/h and the other at $70$ km/h. How far does the SLOWER car travel before they meet?',
      choices: ['$180$ km', '$150$ km', '$210$ km', '$900$ km'],
      answer: 1,
      solution:
        'The gap closes at $50 + 70 = 120$ km/h, so they meet after $\\frac{360}{120} = 3$ hours. The slower car covers $50 \\times 3 = 150$ km. Choice $180$ splits the distance evenly, but the faster car must cover more. Choice $210$ is the faster car’s share, and $900$ uses the DIFFERENCE of the speeds — that answer is bigger than the whole gap, which is impossible.',
    },
    {
      q: 'Two hikers start $30$ km apart on a straight trail and walk toward each other, one at $4$ km/h and the other at $6$ km/h. How long until they meet?',
      choices: ['$15$ hours', '$7.5$ hours', '$3$ hours', '$5$ hours'],
      answer: 2,
      solution:
        'Walking toward each other, the gap shrinks at $4 + 6 = 10$ km/h, so they meet after $\\frac{30}{10} = 3$ hours. Choice $15$ uses the difference $6 - 4 = 2$ km/h, which is the closing speed for a chase. Choices $7.5$ and $5$ count only one hiker.',
    },
    {
      q: 'Two trains are $270$ km apart and travel toward each other at $60$ km/h and $75$ km/h. How far apart are they one hour later?',
      choices: ['$195$ km', '$210$ km', '$405$ km', '$135$ km'],
      answer: 3,
      solution:
        'In one hour they close $60 + 75 = 135$ km, so the gap is $270 - 135 = 135$ km. Choice $195$ moves only the faster train and $210$ only the slower one. Choice $405$ ADDS the closing distance, but trains heading toward each other end up nearer, not further apart.',
    },
  ],
]

const s76 = [
  // p1 — unit price
  [
    {
      q: 'A bag of $5$ bagels costs $\\$4.00$. What is the unit price?',
      choices: ['$\\$0.80$ per bagel', '$\\$1.25$ per bagel', '$\\$20.00$ per bagel', '$\\$0.08$ per bagel'],
      answer: 0,
      solution:
        '"Per bagel" means divide the price by the number of bagels: $\\$4.00 \\div 5 = \\$0.80$. Choice $\\$1.25$ divides $5$ by $4$ — that is bagels per dollar, the rate upside down. Choice $\\$20.00$ multiplies, and $\\$0.08$ slides the decimal point one place too far.',
    },
    {
      q: 'A $3$ kg bag of dog food costs $\\$18.00$. What is the price per kilogram?',
      choices: ['$\\$54.00$ per kg', '$\\$6.00$ per kg', '$\\frac{1}{6}$ kg per dollar', '$\\$15.00$ per kg'],
      answer: 1,
      solution:
        'Divide price by weight: $\\$18.00 \\div 3 = \\$6.00$ per kilogram. Choice $\\$54.00$ multiplies instead of dividing. Choice $\\frac{1}{6}$ computes $3 \\div 18$, which is kilograms per dollar — the rate upside down, and the wrong unit for this question. Choice $\\$15.00$ subtracts the $3$ kg from the price, and you cannot subtract kilograms from dollars.',
    },
    {
      q: 'Twelve identical stickers cost $\\$3.00$. What does one sticker cost?',
      choices: ['$\\$4.00$ per sticker', '$\\$36.00$ per sticker', '$\\$0.40$ per sticker', '$\\$0.25$ per sticker'],
      answer: 3,
      solution:
        'Divide: $\\$3.00 \\div 12 = \\$0.25$ per sticker. Choice $\\$4.00$ divides $12$ by $3$ — stickers per dollar rather than dollars per sticker. Choice $\\$36.00$ multiplies. Choice $\\$0.40$ also divides $12$ by $3$ to get $4$ and then just slides a decimal point in to make it look small, instead of really dividing $3$ by $12$.',
    },
  ],
  // p2 — a rate from an amount and a time
  [
    {
      q: 'A machine caps $144$ bottles in $6$ minutes. What is its rate?',
      choices: ['$864$ bottles per minute', '$24$ bottles per minute', '$138$ bottles per minute', '$\\frac{1}{24}$ bottle per minute'],
      answer: 1,
      solution:
        '"Per minute" means divide by the minutes: $\\frac{144}{6} = 24$ bottles per minute. Choice $864$ multiplies, $138$ subtracts, and $\\frac{1}{24}$ computes $\\frac{6}{144}$ — that is minutes per bottle, the rate flipped over.',
    },
    {
      q: 'A conveyor belt moves $150$ boxes in $30$ minutes. How many boxes is that per hour?',
      choices: ['$5$ boxes per hour', '$4500$ boxes per hour', '$300$ boxes per hour', '$75$ boxes per hour'],
      answer: 2,
      solution:
        'An hour is two lots of $30$ minutes, so the belt moves $150 \\times 2 = 300$ boxes per hour. Choice $5$ is the rate per MINUTE, not per hour. Choice $4500$ multiplies $150$ by $30$, and $75$ halves instead of doubling — an hour is longer than half an hour, so the count must grow.',
    },
    {
      q: 'A car uses $32$ liters of fuel to travel $400$ km. How many kilometers does it travel per liter?',
      choices: ['$12{,}800$ km per liter', '$0.08$ km per liter', '$368$ km per liter', '$12.5$ km per liter'],
      answer: 3,
      solution:
        '"Per liter" means divide the kilometers by the liters: $\\frac{400}{32} = 12.5$ km per liter. Choice $0.08$ computes $\\frac{32}{400}$, which is liters per kilometer — a correct number for a different question, but the wrong unit here. Choice $12{,}800$ multiplies and $368$ subtracts.',
    },
  ],
  // p3 — better buy
  [
    {
      q: 'Rice comes in a $5$ kg bag for $\\$12.50$ and in an $8$ kg bag for $\\$21.60$. Which is the better buy?',
      choices: [
        'the $5$ kg bag',
        'the $8$ kg bag',
        'both cost the same per kilogram',
        'the $8$ kg bag, because a bigger bag is always cheaper per kilogram',
      ],
      answer: 0,
      solution:
        'Compare unit prices. Small: $\\$12.50 \\div 5 = \\$2.50$ per kg. Large: $\\$21.60 \\div 8 = \\$2.70$ per kg. The $5$ kg bag is cheaper per kilogram, so it wins. This is exactly why "bigger is always cheaper" is not a rule you can trust — only the unit price settles it.',
    },
    {
      q: 'Juice comes in a $2$ liter bottle for $\\$3.60$ and a $3$ liter bottle for $\\$5.40$. Which is the better buy?',
      choices: [
        'the $2$ liter bottle',
        'the $3$ liter bottle',
        'they cost the same per liter',
        'the $3$ liter bottle, because it holds more juice',
      ],
      answer: 2,
      solution:
        'Small: $\\$3.60 \\div 2 = \\$1.80$ per liter. Large: $\\$5.40 \\div 3 = \\$1.80$ per liter. The unit prices are equal, so neither bottle is the better deal — buy whichever size you need. Holding more juice is not the same as costing less per liter.',
    },
    {
      q: 'A $6$-pack of yogurt costs $\\$4.20$ and a $10$-pack of the same yogurt costs $\\$6.50$. Which is the better buy?',
      choices: [
        'the $6$-pack',
        'they cost the same per cup',
        'you cannot compare packs of different sizes',
        'the $10$-pack',
      ],
      answer: 3,
      solution:
        'Divide to get the cost of one cup. Six-pack: $\\$4.20 \\div 6 = \\$0.70$ per cup. Ten-pack: $\\$6.50 \\div 10 = \\$0.65$ per cup. The $10$-pack costs less per cup, so it is the better buy — and packs of different sizes are exactly what unit prices are FOR.',
    },
  ],
  // p4 — work done equals rate times time
  [
    {
      q: 'A copier prints $25$ pages per minute. How many pages does it print in $12$ minutes?',
      choices: ['$300$ pages', '$37$ pages', '$\\frac{25}{12}$ page', '$18{,}000$ pages'],
      answer: 0,
      solution:
        'Work equals rate times time: $25 \\times 12 = 300$ pages. Choice $37$ adds the rate and the time, $\\frac{25}{12}$ divides instead of multiplying, and $18{,}000$ turns the $12$ minutes into $720$ seconds even though the rate is already per minute.',
    },
    {
      q: 'A sprinkler sprays $7$ liters per minute. How much water does it use in $15$ minutes?',
      choices: ['$22$ liters', '$105$ liters', '$\\frac{7}{15}$ liter', '$6300$ liters'],
      answer: 1,
      solution:
        'Multiply rate by time: $7 \\times 15 = 105$ liters. Choice $22$ adds, $\\frac{7}{15}$ divides, and $6300$ converts the $15$ minutes into $900$ seconds — but the rate is per minute, so no conversion belongs here.',
    },
    {
      q: 'A knitting machine makes $18$ scarves per hour. How many scarves does it make in $\\frac{1}{3}$ of an hour?',
      choices: ['$54$ scarves', '$21$ scarves', '$6$ scarves', '$1080$ scarves'],
      answer: 2,
      solution:
        'Work equals rate times time: $18 \\times \\frac{1}{3} = 6$ scarves. Choice $54$ divides by $\\frac{1}{3}$ instead of multiplying, so a third of an hour outproduces a whole hour — impossible. Choice $21$ adds $18 + 3$, and $1080$ multiplies by $60$ minutes while the rate is per hour.',
    },
  ],
  // p5 — time from an amount and a rate
  [
    {
      q: 'A pump moves $8$ liters per second. How long does it take to empty a $200$ liter tank?',
      choices: ['$1600$ seconds', '$25$ seconds', '$192$ seconds', '$\\frac{1}{25}$ second'],
      answer: 1,
      solution:
        'Time is amount divided by rate: $\\frac{200}{8} = 25$ seconds. Check: $8 \\times 25 = 200$ liters. ✓ Choice $1600$ multiplies, $192$ subtracts, and $\\frac{1}{25}$ divides $8$ by $200$ — the rate turned upside down.',
    },
    {
      q: 'A tap fills $15$ liters per minute. How long does it take to fill a $450$ liter tank? Give your answer in minutes.',
      choices: ['$6750$ minutes', '$435$ minutes', '$30$ minutes', '$1800$ minutes'],
      answer: 2,
      solution:
        '$\\frac{450}{15} = 30$ minutes. Choice $6750$ multiplies instead of dividing and $435$ subtracts. Choice $1800$ is the time in SECONDS wearing a minutes label — the question asked for minutes, so no extra factor of $60$ belongs there.',
    },
    {
      q: 'A vending machine pours $3$ cups per minute. How long does it take to serve $54$ cups?',
      choices: ['$162$ minutes', '$51$ minutes', '$\\frac{1}{18}$ minute', '$18$ minutes'],
      answer: 3,
      solution:
        'Divide the work by the rate: $\\frac{54}{3} = 18$ minutes. Choice $162$ multiplies, $51$ subtracts, and $\\frac{1}{18}$ computes $\\frac{3}{54}$, which is minutes-per-cup flipped upside down.',
    },
  ],
  // p6 — comparing two unit rates
  [
    {
      q: 'Mina swam $600$ meters in $12$ minutes. Rafa swam $700$ meters in $20$ minutes. Who swims at the faster rate?',
      choices: ['Mina', 'Rafa', 'they swim at the same rate', 'Rafa, because he swam farther'],
      answer: 0,
      solution:
        'Compare unit rates, not totals. Mina: $\\frac{600}{12} = 50$ meters per minute. Rafa: $\\frac{700}{20} = 35$ meters per minute. Mina is faster even though Rafa covered more distance — he simply had more time.',
    },
    {
      q: 'Ivy picked $84$ berries in $6$ minutes. Jonas picked $105$ berries in $7$ minutes. Who picks at the faster rate?',
      choices: ['Ivy', 'Jonas', 'they pick at the same rate', 'Ivy, because she finished in less time'],
      answer: 1,
      solution:
        'Ivy: $\\frac{84}{6} = 14$ berries per minute. Jonas: $\\frac{105}{7} = 15$ berries per minute. Jonas is faster. Finishing sooner does not make you faster — Ivy simply picked for a shorter time.',
    },
    {
      q: 'Printer A prints $220$ pages in $10$ minutes. Printer B prints $294$ pages in $14$ minutes. Which printer is faster?',
      choices: ['printer B', 'they print at the same rate', 'printer A', 'printer B, because it printed more pages'],
      answer: 2,
      solution:
        'Printer A: $\\frac{220}{10} = 22$ pages per minute. Printer B: $\\frac{294}{14} = 21$ pages per minute. Printer A is faster, even though printer B produced the bigger pile — comparing raw totals ignores the extra $4$ minutes B was given.',
    },
  ],
  // p7 — unit price, then scale it up
  [
    {
      q: 'Cherries cost $\\$9.60$ for $4$ pounds. At that rate, what do $7$ pounds cost?',
      choices: ['$\\$16.80$', '$\\$12.60$', '$\\$67.20$', '$\\$2.40$'],
      answer: 0,
      solution:
        'Unit price first: $\\$9.60 \\div 4 = \\$2.40$ per pound. Then $7 \\times \\$2.40 = \\$16.80$. Choice $\\$12.60$ adds $\\$1$ per extra pound — prices scale by multiplying, not adding. Choice $\\$67.20$ multiplies the whole $\\$9.60$ by $7$, and $\\$2.40$ stops at the unit price.',
    },
    {
      q: 'A shop sells $6$ tennis balls for $\\$15.00$. At the same rate, how much do $10$ balls cost?',
      choices: ['$\\$19.00$', '$\\$150.00$', '$\\$25.00$', '$\\$2.50$'],
      answer: 2,
      solution:
        'One ball costs $\\$15.00 \\div 6 = \\$2.50$, so $10$ balls cost $10 \\times \\$2.50 = \\$25.00$. Choice $\\$19.00$ adds $\\$1$ for each of the $4$ extra balls, $\\$150.00$ forgets to find the unit price, and $\\$2.50$ is the price of a single ball.',
    },
    {
      q: 'Almonds cost $\\$18.00$ for $4$ kg. How many kilograms can you buy with $\\$27.00$?',
      choices: ['$13$ kg', '$1.5$ kg', '$4.5$ kg', '$6$ kg'],
      answer: 3,
      solution:
        'One kilogram costs $\\$18.00 \\div 4 = \\$4.50$, so $\\$27.00$ buys $\\$27.00 \\div \\$4.50 = 6$ kg. Choice $13$ adds the extra $\\$9$ as $9$ kg, $1.5$ scales the money without ever using the price per kilogram, and $4.5$ reports the price per kilogram as though it were a weight.',
    },
  ],
  // p8 — what fraction of a job gets done
  [
    {
      q: 'A gardener can weed a whole plot in $5$ hours. What fraction of the plot does she weed in $2$ hours?',
      choices: ['$\\frac{2}{5}$', '$\\frac{5}{2}$', '$\\frac{1}{5}$', '$\\frac{2}{3}$'],
      answer: 0,
      solution:
        'She weeds $\\frac{1}{5}$ of the plot each hour, so in $2$ hours she weeds $2 \\times \\frac{1}{5} = \\frac{2}{5}$. Choice $\\frac{5}{2}$ flips the fraction and claims more than a whole plot. Choice $\\frac{1}{5}$ counts just one hour, and $\\frac{2}{3}$ compares the $2$ hours worked to the $3$ hours left instead of to the whole $5$.',
    },
    {
      q: 'A machine fills a whole silo in $9$ hours. What fraction of the silo is filled after $6$ hours?',
      choices: ['$\\frac{3}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{9}$', '$\\frac{1}{3}$'],
      answer: 1,
      solution:
        'The rate is $\\frac{1}{9}$ of the silo per hour, so $6$ hours fills $\\frac{6}{9} = \\frac{2}{3}$. Choice $\\frac{3}{2}$ divides $9$ by $6$ and overflows the silo, $\\frac{1}{9}$ is only one hour’s work, and $\\frac{1}{3}$ is the part still EMPTY.',
    },
    {
      q: 'A painter paints $\\frac{1}{6}$ of a wall each hour. How long does the whole wall take?',
      choices: ['$\\frac{1}{6}$ hour', '$36$ hours', '$\\frac{5}{6}$ hour', '$6$ hours'],
      answer: 3,
      solution:
        'It takes $6$ sixths to make a whole wall, so the job takes $6$ hours. Check: $6 \\times \\frac{1}{6} = 1$ whole wall. ✓ Choice $\\frac{1}{6}$ hour repeats the rate as if it were a time, $36$ multiplies $6$ by $6$, and $\\frac{5}{6}$ is the fraction still unpainted after one hour.',
    },
  ],
  // p9 — working together
  [
    {
      q: 'Pump A can empty a tank in $6$ hours and pump B can empty the same tank in $3$ hours. Working together, how long do they take?',
      choices: ['$2$ hours', '$4.5$ hours', '$9$ hours', '$18$ hours'],
      answer: 0,
      solution:
        'Add the RATES: $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{1}{2}$ of the tank per hour, so the tank empties in $2$ hours. Choice $4.5$ averages the two times, $9$ adds them, and $18$ multiplies them — but two pumps must beat the faster pump alone, so the answer had to be under $3$ hours.',
    },
    {
      q: 'Ravi can rake a yard in $20$ minutes and Sara can rake the same yard in $30$ minutes. Working together, how long does the raking take?',
      choices: ['$25$ minutes', '$50$ minutes', '$12$ minutes', '$600$ minutes'],
      answer: 2,
      solution:
        'Rates add: $\\frac{1}{20} + \\frac{1}{30} = \\frac{3}{60} + \\frac{2}{60} = \\frac{5}{60} = \\frac{1}{12}$ of the yard per minute, so together they finish in $12$ minutes. Choice $25$ averages the times, $50$ adds them, and $600$ multiplies them. Only $12$ passes the sanity check of beating Ravi’s solo $20$ minutes.',
    },
    {
      q: 'Hose A alone fills a trough in $12$ minutes. With hose B helping, the trough fills in $4$ minutes. How long would hose B take alone?',
      choices: ['$8$ minutes', '$16$ minutes', '$3$ minutes', '$6$ minutes'],
      answer: 3,
      solution:
        'Work in rates. Together they fill $\\frac{1}{4}$ of the trough per minute and hose A supplies $\\frac{1}{12}$, so hose B supplies $\\frac{1}{4} - \\frac{1}{12} = \\frac{3}{12} - \\frac{1}{12} = \\frac{2}{12} = \\frac{1}{6}$ per minute — that is $6$ minutes alone. Choice $8$ subtracts the TIMES instead of the rates, $16$ adds them, and $3$ divides them.',
    },
  ],
  // p10 — filling against a drain
  [
    {
      q: 'A hose pours $12$ liters per minute into a pond while a leak lets out $4$ liters per minute. Starting empty, how long does a $120$ liter pond take to fill?',
      choices: ['$15$ minutes', '$10$ minutes', '$30$ minutes', '$7.5$ minutes'],
      answer: 0,
      solution:
        'The pond gains a net $12 - 4 = 8$ liters each minute, so it fills in $\\frac{120}{8} = 15$ minutes. Choice $10$ ignores the leak, $30$ uses only the leak’s $4$ liters per minute, and $7.5$ ADDS the two rates — but the leak works against the hose, so the rates subtract.',
    },
    {
      q: 'A $90$ liter tank is filled by a pipe pouring in $15$ liters per minute while a drain releases $5$ liters per minute. Starting empty, how long does the tank take to fill?',
      choices: ['$6$ minutes', '$9$ minutes', '$18$ minutes', '$4.5$ minutes'],
      answer: 1,
      solution:
        'Net gain: $15 - 5 = 10$ liters per minute, so the time is $\\frac{90}{10} = 9$ minutes. Choice $6$ forgets the drain, $18$ divides by the drain rate alone, and $4.5$ adds the two rates instead of subtracting.',
    },
    {
      q: 'A $300$ liter pool is filled by an inflow of $25$ liters per minute with the drain left open, and it takes $20$ minutes to fill. How many liters per minute does the drain let out?',
      choices: ['$15$ liters per minute', '$40$ liters per minute', '$10$ liters per minute', '$5$ liters per minute'],
      answer: 2,
      solution:
        'The pool gains $\\frac{300}{20} = 15$ liters per minute overall. Since the inflow supplies $25$, the drain must remove $25 - 15 = 10$ liters per minute. Choice $15$ stops at the net rate, $40$ adds instead of subtracting, and $5$ subtracts the $20$ MINUTES from the $25$ liters per minute — you cannot take minutes away from a rate.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 7,
  sections: {
    '7.4': s74,
    '7.5': s75,
    '7.6': s76,
  },
}
