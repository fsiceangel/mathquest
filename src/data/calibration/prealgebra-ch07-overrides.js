// Independent chapter audit: all 82 base stems and all 246 variant stems and
// keyed answers were compared, not inferred from their positions in a round.
// Each three-digit string records rounds 2, 3, 4 in that order. Repeated scores
// mean the actual variants retain the same reasoning demand, not auto-inheritance.
// Rubric: 1 direct taught operation; 2 short setup/routine chain;
// 3 hidden relation or multi-stage rate model; 4 insight/cases; 5 long casework.

export const baseOverrides = {
  '7.1': {
    '7.1': { level: 2, reason: 'Find the size of one ratio part, then scale the other ingredient; same demand as 7.1 problem 4.' },
  },
  '7.2': {
    '3.1': { level: 2, reason: 'The total number of ratio parts is not supplied: add the parts, find one part, then select a share.' },
    '5.1': { level: 2, reason: 'Add the ratio parts and divide the total before finding the middle share, as in 7.1 problems 5 and 6.' },
    '10.1': { level: 2, reason: 'Use the difference of ratio parts to find one part, then multiply by the total parts; the method is already practised in 7.1 problem 9.' },
  },
  '7.3': {
    '7.1': { level: 2, reason: 'Find weight per brick, then multiply by the new count; this is the same short proportional setup as problem 4.' },
  },
  '7.5': {
    '6.1': { level: 2, reason: 'Add the two given speeds and multiply by the given time; no head start, hidden time, or weighted average is involved.' },
  },
  challenge: {
    '9.1': { level: 2, reason: 'The ratio-part difference gives the unit share, then the total follows; identical reasoning to 7.2 problem 10.' },
  },
}

const families = {
  '7.1': [
    ['111', 'Simplify the ordered ratio of two stated counts by a common factor.'],
    ['111', 'Simplify an explicitly supplied two-term ratio.'],
    ['121', 'Distinguish the requested part-to-part or part-to-whole comparison.'],
    ['222', 'Find one ratio part from a stated category count, then scale the other category.'],
    ['222', 'Sum the ratio parts, divide the whole, and select the requested larger or smaller share.'],
    ['222', 'Split a stated total between two categories using the sum of ratio parts.'],
    ['222', 'Scale a recipe or mixture through one ratio part, just as in problem 4.'],
    ['111', 'Read a part-to-whole fraction from the taught ratio-parts model.'],
    ['222', 'Use the difference of ratio parts to determine the unit share, then the requested amount.'],
    ['222', 'Update both actual counts and simplify their new ratio; adding or removing equal counts is not proportional scaling.'],
  ],
  '7.2': [
    ['111', 'Add the three ratio terms; repeated terms still represent separate shares.'],
    ['111', 'Divide all three ratio terms by their common factor.'],
    ['222', 'Find the total parts and unit share before selecting one of three shares.'],
    ['111', 'Select the two requested terms from a three-way ratio and simplify where needed.'],
    ['222', 'Split the whole by the sum of three ratio parts, then select the stated share.'],
    ['111', 'The shared middle quantity already agrees, so read off the requested ordered pair.'],
    ['222', 'Match the middle quantity using common multiples, then combine all three terms.'],
    ['222', 'The angle sum is supplied in every variant; split that sum by the stated ratio, with no unannounced geometry fact.'],
    ['222', 'Match the shared middle term and simplify the ratio of the outer quantities.'],
    ['222', 'A difference between specified shares determines one part, then the total of all three shares.'],
  ],
  '7.3': [
    ['111', 'Solve a displayed proportion with the numerator unknown.'],
    ['111', 'Solve a displayed proportion by equivalent fractions or cross-multiplication.'],
    ['111', 'Use a supplied one-unit map or model scale; reversing the direction still needs only one operation.'],
    ['222', 'Set up a proportional recipe or consumption calculation; fractional scale factors use already taught fraction and decimal arithmetic.'],
    ['111', 'Simplify the known fraction and scale a displayed proportion.'],
    ['222', 'Match corresponding sides and use the same scale factor, including shrinking.'],
    ['222', 'Infer the weight per identical object, then obtain a new weight or count.'],
    ['111', 'Check fraction equivalence; finding the unequal pair changes the instruction but introduces no new mathematical prerequisite.'],
    ['222', 'Use a non-unit map scale, matching map and real distances in the correct direction.'],
    ['222', 'Update both ages or weights, then simplify the ratio of the actual quantities.'],
  ],
  '7.4': [
    ['121', 'Convert hours to minutes; the mixed-unit variant also requires adding the already stated minutes.'],
    ['111', 'Use one adjacent metric conversion, including decimal answers.'],
    ['111', 'Multiply by the explicitly supplied conversion factor.'],
    ['111', 'Apply one metric conversion by a factor of one thousand.'],
    ['111', 'Convert minutes to hours, including an already familiar fraction of an hour.'],
    ['111', 'Divide by a stated conversion factor or by sixty seconds per minute.'],
    ['222', 'Chain time-unit conversion factors; a week adds one routine factor, not a new reasoning method.'],
    ['222', 'Chain metric-unit conversions and select the direction of each factor.'],
    ['222', 'Convert both numerator and denominator units of a speed.'],
    ['222', 'Convert both amount and time units of a rate, keeping their directions separate.'],
  ],
  '7.5': [
    ['111', 'Multiply the stated speed by time in the same units.'],
    ['111', 'Divide total distance by time in matching units.'],
    ['111', 'Divide distance by the stated speed to obtain time.'],
    ['222', 'Convert the time to match the speed unit, then calculate distance.'],
    ['222', 'Infer a constant speed from the first journey, then use it for the new distance or duration.'],
    ['222', 'For opposite directions, add the speeds and use distance equals rate times time, or its direct inverse.'],
    ['333', 'Find both travel times and both distances before computing total distance divided by total time.'],
    ['333', 'Compute a head start, subtract speeds for the closing rate, then distinguish chase time from clock time or position.'],
    ['222', 'Travel times are supplied, so add the segment distances and divide by the sum of the times.'],
    ['322', 'Select the relative closing speed; variants asking only meeting time or remaining gap omit the final individual-distance stage.'],
  ],
  '7.6': [
    ['111', 'Divide price by quantity to find one unit price.'],
    ['121', 'Divide output by time or distance by fuel; the middle variant also changes minutes to hours.'],
    ['222', 'Compute and compare unit prices; equal unit prices are an allowed conclusion.'],
    ['111', 'Multiply a stated rate by time in matching units.'],
    ['111', 'Divide the amount by its rate, with no extra unit conversion.'],
    ['222', 'Compute two unit rates before comparing them.'],
    ['222', 'Find a unit price and use it to obtain a new cost or affordable quantity.'],
    ['221', 'Translate between time for one job and fraction completed; the last variant already supplies the reciprocal rate.'],
    ['333', 'Convert whole-job times to rates, add or subtract the rates as required, then invert to a whole-job time.'],
    ['222', 'Use net inflow equals inflow minus outflow, including reversing the calculation to find an unknown outflow.'],
  ],
  challenge: [
    ['222', 'The added or removed count equals the difference of ratio parts; find one part and the requested final or original amount.'],
    ['222', 'Match the middle quantity and simplify the outer ratio.'],
    ['232', 'Scale corresponding sides; the middle variant additionally combines both new side lengths into a perimeter.'],
    ['222', 'Chain rate and time conversions; the size of the integers does not by itself make the problem harder.'],
    ['333', 'Use total distance divided by total time; the last variant works backwards from a target average.'],
    ['333', 'Represent fractions of one job per unit time and track additions, losses, or unfinished work.'],
    ['222', 'Normalize prices to comparable quantities, then compare or compute a saving.'],
    ['333', 'Find a relative closing speed and an intermediate time before answering a distance question.'],
    ['222', 'Select the relevant ratio total or difference, find one part, and obtain the requested share, gap, or retained half.'],
    ['222', 'Convert distance and time units of a rate, preserving dimensional consistency.'],
    ['222', 'Find the output or capacity of one identical unit, then scale to the required number.'],
    ['333', 'Infer each worker or machine rate and add rates before calculating combined output or completion time.'],
  ],
  worksheet: [
    ['121', 'Simplify the requested ordered ratio; the middle variant first requires constructing the whole.'],
    ['222', 'Sum ratio parts, determine one part, and select a share or a difference of shares.'],
    ['222', 'Set up and solve a recipe or mixture proportion in either direction.'],
    ['222', 'Chain two unit conversions, including reversing the direction.'],
    ['111', 'Use the appropriate form of distance equals speed times time with matching units.'],
    ['222', 'Find a unit price, then a new cost or quantity.'],
    ['333', 'Use total distance and total time; the last variant reverses the model to obtain a missing return speed.'],
    ['222', 'Match the common middle term and report the requested two-way or three-way ratio.'],
    ['222', 'Combine proportional scaling with amount and time-unit conversions.'],
    ['333', 'Subtract known whole-job rates from the combined rate, then invert the remaining worker rate.'],
  ],
}

const overrides = Object.fromEntries(Object.entries(families).map(([group, rows]) => [group,
  Object.fromEntries(rows.flatMap(([scores, reason], index) => [...scores].map((score, r) => [
    `${index + 1}.${r + 2}`, { level: Number(score), reason },
  ]))),
]))

// A same-level variation can still demand an extra step or a different model.
// Keep those distinctions explicit for a future prerequisite-aware lesson plan.
const specificReasons = {
  '7.1': {
    '3.3': 'Unlike the base part-to-whole question with both counts supplied, first find unbroken crayons as 20 minus 9, then form the part-to-part ratio 9:11.',
    '9.4': 'The base requests one number; this variant requests their sum. The same difference-of-parts strategy gives one part, then multiply by 2 plus 7.',
  },
  '7.2': {
    '8.4': 'Four shares replace three, but the quadrilateral angle sum 360 degrees is explicitly supplied; no later geometry prerequisite is required.',
  },
  '7.4': {
    '1.3': 'Convert 2 hours to 120 minutes and add the separately stated 15 minutes. This is a real extra step beyond the base one-unit conversion.',
    '7.4': 'Week to days to hours to minutes adds a third familiar conversion; it remains a routine chain rather than a new method.',
  },
  '7.5': {
    '8.4': 'After finding the 3 km head start and the 4 km/h closing speed, multiply the three-quarter-hour chase time by Ellie\'s speed to find position; the base instead asks for a clock time.',
    '9.4': 'The durations are in minutes. Convert both to hours or use them consistently as weights; no unknown segment time needs to be inferred.',
    '10.3': 'Easier than the base: 30 divided by the sum 4 plus 6 directly gives meeting time. There is no final step finding an individual traveller\'s distance.',
    '10.4': 'Easier than the base: the elapsed hour is supplied, so subtract the combined closing distance from 270 km; no hidden meeting time is needed.',
  },
  '7.6': {
    '2.3': 'Unlike the base pages-per-minute quotient, the requested unit is per hour while the given duration is 30 minutes. Normalize the time unit before reporting the rate.',
    '8.4': 'Easier than the base: one-sixth of a wall per hour is already a rate, so take its reciprocal. No intermediate rate derivation and partial-time multiplication are needed.',
    '9.4': 'The base adds two solo rates; this variant subtracts the known solo rate from the combined rate before inverting. Practise the inverse-rate model first.',
    '10.4': 'The base computes fill time from net inflow; this variant computes net inflow as 300 divided by 20, then subtracts it from the stated 25 L/min inflow.',
  },
  challenge: {
    '1.3': 'After finding the unchanged soprano count, double it because the question asks for the new whole choir, not one original share.',
    '3.3': 'The base asks only for a scaled side. This variant scales 5 ft to 20 ft and then uses rectangle perimeter 2 times (12 plus 20). Rectangle perimeter is BA knowledge but is formally taught only in Prealgebra 11.1; this mixed application needs an explicit reminder.',
    '5.3': 'The distances of the two legs differ, so do not use an equal-distance shortcut. Compute 60/30 and 150/50, then divide 210 by their sum.',
    '5.4': 'Reverse-average setup: infer total allowed time as 120/48, subtract the outbound time 60/40, then divide the return distance by the remaining time. This is a new direction of the base model, not a number substitution.',
    '6.3': 'Infer an unknown drain rate by subtracting observed net fill rate from total hose rate, then invert. This reverses the base net-rate calculation.',
    '6.4': 'New two-stage work model: calculate 10 times (1/30 plus 1/45), subtract completed work from one yard, then divide the remaining 4/9 by the brother\'s solo rate. The base has one constant combined rate throughout.',
    '7.3': 'The base asks for savings per item; this variant extends the comparison to exactly 24 cups, which can be purchased as whole packs in both sizes.',
    '8.3': 'Replace the base meeting-toward-each-other model with a delayed chase: construct the 22.5 km head start, subtract speeds, then compute the jeep\'s catch-up position. Use 7.5 problem 8 before this variant.',
    '8.4': 'After computing meeting time, the requested quantity is the difference of the two travelled distances; multiply that time by the speed difference.',
    '9.3': 'One share is explicitly given, so there is no reverse difference clue; find one part from 48/6 and multiply by the 11-minus-4 difference.',
    '9.4': 'The whole prize fund is supplied; split it in the stated ratio and then retain half of the largest share. This changes the follow-up operation without requiring a new ratio method.',
  },
  worksheet: {
    '1.3': 'The base simplifies a part-to-part ratio of known counts. This variant first sums 12 and 20 to obtain the whole, then simplifies 12:32.',
    '2.3': 'After finding the unit share, use the difference 5 minus 3 instead of a single ratio term; the ratio model is unchanged.',
    '7.3': 'Unequal distances require total-distance/total-time accounting, not an equal-distance average-speed shortcut.',
    '7.4': 'New inverse average-speed setup: total time is 120/40, outbound time is 60/30, so the remaining return hour determines 60 km/h. Provide a reverse-time worked example after direct average-speed practice.',
    '10.4': 'Three workers replace two. Subtract both known solo rates from the combined rate; the extra fraction does not introduce a new work-rate model.',
  },
}

for (const [group, entries] of Object.entries(specificReasons)) {
  for (const [key, reason] of Object.entries(entries)) overrides[group][key].reason = reason
}

export default overrides
