// Root review receipts: every stem in the named chapters was compared with its
// base question. This is a difficulty/prerequisite review, not an answer proof.
import ch07Overrides, { baseOverrides as ch07Base } from './prealgebra-ch07-overrides.js'
const reviewedChapters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
const changes = [
  ['1.2',8,4,2,'Substitute the supplied sum, double it, and add a constant.'],
  ['1.5',7,4,2,'Reverse a subtraction and then add a constant.'],
  ['1.6',7,4,2,'Find the reciprocal before multiplying by the supplied factor.'],
  ['1:challenge',4,3,2,'Track several signs and multiply five factors.'],
  ['1:challenge',4,4,2,'Track several signs and combine positive and negative factors.'],
  ['1:challenge',7,3,2,'Find zero factors, then enforce the given integer interval.'],
  ['1:challenge',7,4,2,'Reverse each zero factor to find both possible roots.'],
  ['1:challenge',9,3,2,'Undo a nested negation to identify the unknown.'],
  ['1:challenge',9,4,2,'Translate the difference from a number to its opposite.'],
  ['1:challenge',12,4,3,'Combine equality of opposite differences with a separate sum.'],
  ['2.1',6,4,2,'Reverse the units-digit square rule to identify the original ending.'],
  ['2.2',7,4,2,'Evaluate the power, multiplication, and addition in order.'],
  ['2.3',3,4,2,'Combine several zero powers and then multiply.'],
  ['2.3',5,3,2,'Distinguish a negative sign outside the power from a negative base.'],
  ['2.4',5,4,2,'Reverse the negative-power relationship to find the exponent.'],
  ['2.4',7,4,2,'Translate a negative power into place value and count zeros.'],
  ['2:challenge',12,4,3,'Recognize a geometric sum and reverse it to find its endpoint.'],
  ['2:worksheet',10,4,3,'Use the difference of consecutive squares in reverse.'],
  ['3.5',6,4,2,'Find the LCM interval, convert minutes to seconds, and count flashes.'],
  ['3.5',10,4,2,'Eliminate an impossible LCM using the multiple condition; no reverse factor search.'],
  ['3.6',10,3,2,'A prime divisor count forces a single prime power.'],
  ['3:challenge',12,3,4,'Separate prime cubes from products of two distinct primes and enumerate without duplication.'],
  ['3:worksheet',2,3,2,'Combine parity and the digit-sum test, then maximize the missing digit.'],
  ['4.2',1,4,2,'Identify a fraction of the remaining fraction of the original whole.'],
  ['4.5',3,4,2,'Reverse fraction reduction to find the missing denominator.'],
  ['4:challenge',3,4,2,'Reverse division by a fraction to recover the unknown.'],
  ['4:challenge',9,4,3,'Work backwards through two nested shares of an unknown total.'],
  ['4:worksheet',1,4,2,'Reverse fraction reduction to find the missing denominator.'],
  ['4:worksheet',2,4,2,'Solve a multiplication relationship instead of directly multiplying.'],
  ['4:worksheet',3,4,2,'Translate the missing addend into a fraction subtraction.'],
  ['4:worksheet',4,4,2,'Recover an unknown divisor, which is not the same operation as finding a quotient.'],
  ['6.4',9,4,3,'The nonrepeating prefix requires shifting two copies so that only the repeating tails cancel.'],
  ['9:challenge',12,3,2,'Subtract the constant before squaring to recover the unknown.'],
  ['9:challenge',12,4,2,'Square both the coefficient and the radical when reversing the square root.'],
  ['10.1',7,3,2,'Find the supplement and double it to sum the two adjacent angles.'],
  ['10.2',1,4,2,'Use corresponding-angle equality and then solve for the variable.'],
  ['10.2',2,4,2,'Use alternate-interior-angle equality and then solve for the variable.'],
  ['10.2',3,4,2,'Translate the supplementary pair into an equation with two variable terms.'],
  ['10.2',5,4,2,'Find the supplementary angle and then the difference of the two sizes.'],
  ['10.3',9,4,3,'Recover the side count from an interior angle before finding the total angle sum.'],
  ['10:challenge',4,4,3,'Combine the average of two angles, their difference, and the triangle angle sum.'],
  ['10:challenge',5,4,2,'Use the interior/exterior ratio and supplement before recovering the side count.'],
  ['10:challenge',11,4,2,'Set up the exterior-angle equation before evaluating the requested angle.'],
  ['10:worksheet',2,4,2,'Find the acute supplement and add two copies.'],
  ['10:worksheet',3,4,2,'Find the obtuse supplement and then the difference.'],
  ['10:worksheet',4,4,2,'Subtract the third angle and split the remainder into two equal parts.'],
  ['10:worksheet',5,4,2,'Find the remaining angle sum and split it equally.'],
  ['10:worksheet',6,4,2,'Reverse the interior-angle-sum formula to recover the side count.'],
  ['11:challenge',2,4,2,'Reverse the midpoint model to recover an endpoint.'],
  ['11:challenge',10,3,2,'Find one circumference, then multiply by the number of complete turns.'],
  ['11:worksheet',2,4,2,'Reverse the perimeter formula to find the missing side.'],
  ['11:worksheet',6,4,2,'Reverse the midpoint model to recover an endpoint.'],
  ['12.3',7,4,2,'Combine equal and perpendicular diagonal conditions to identify a square.'],
  ['12:worksheet',8,4,3,'Recover a side from the diagonal, simplify the radical, then calculate perimeter.'],
  ['13:challenge',6,4,2,'Track both the unchanged median and the changed total for the mean.'],
  ['13:challenge',9,4,3,'Recover the unknown subgroup total by subtracting from the combined total.'],
  ['13:worksheet',10,4,4,'Construct six ordered values satisfying total, an even-count median, and a range simultaneously.'],
  ['14.2',7,4,2,'The second digit has fewer choices because repetition is forbidden.'],
  ['14.3',4,4,2,'Constrain the unit digit so that twice it remains a valid nonzero tens digit.'],
  ['14.3',5,3,2,'List outcomes for both feasible multiples of five, not one specified sum.'],
  ['14.3',8,3,2,'Different meal categories have different numbers of add-ons, so count each category separately.'],
  ['14.3',9,4,2,'Distinct digits permit direct place-value counting; no inequality case split is needed.'],
  ['14:challenge',6,3,4,'Count all orders, count adjacent orders using a block, then subtract the forbidden ones.'],
  ['14:challenge',9,4,3,'Reverse the pair-count model to find the number of teams.'],
  ['15:challenge',9,4,3,'Recognize a triangular total and reverse it to find the figure index.'],
]

export function applyPrealgebraVariantReview(book) {
  for (const [group, entries] of Object.entries(ch07Base)) {
    const ratings = book.chapters[7].sections[group]?.levels ?? book.chapters[7][group]
    for (const [key, {level}] of Object.entries(entries)) ratings[Number(key.split('.')[0]) - 1] = level
  }
  for (const [group, entries] of Object.entries(ch07Overrides)) {
    const ch = book.chapters[7], section = ch.sections[group]
    if (section) section.variantOverrides = entries
    else ch[`${group}VariantOverrides`] = entries
  }
  // These are the same taught multiplier models as section 8.3 problem 7 and
  // worksheet problem 8; being in a challenge set adds no new reasoning step.
  book.chapters[8].challenge[7] = 2
  book.chapters[8].sections['8.3'].levels[7] = 2
  book.chapters[11].worksheet[6] = 3 // Track the notch boundary as well as subtracting areas.
  book.chapters[12].worksheet[2] = 1 // Same taught 45-45-90 ratio as section 12.2 problem 3.
  book.chapters[14].sections['14.4'].levels[6] = 2 // Larger teams do not add a new counting method.
  book.chapters[15].challenge[3] = 3 // Three coin denominations require nested cases, as in 15.2 problem 8.
  for (const number of reviewedChapters) book.chapters[number].variantReview = {
    status: 'stem-reviewed', rounds: [2, 3, 4],
    note: 'All variant stems compared; nontrivial routes inspected; not every answer independently proved.',
  }
  for (const [location, slot, round, level, reason] of changes) {
    const [chapter, group] = location.includes(':') ? location.split(':') : [location.split('.')[0], location]
    const ch = book.chapters[chapter]
    const section = ch.sections[group]
    const owner = section ?? ch
    const key = section ? 'variantOverrides' : `${group}VariantOverrides`
    owner[key] ??= {}
    owner[key][`${slot}.${round}`] = {level, reason}
  }
  return book
}
