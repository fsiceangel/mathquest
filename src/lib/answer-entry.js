// Keep number entry separate from mathematical correctness: a formatting error
// must never submit an answer or consume an attempt. No floating-point rounding.
const MAX_LENGTH = 80

function invalid(message) {
  return { valid: false, message }
}

function reduce(numerator, denominator) {
  if (denominator < 0n) {
    numerator = -numerator
    denominator = -denominator
  }
  let a = numerator < 0n ? -numerator : numerator
  let b = denominator
  while (b !== 0n) [a, b] = [b, a % b]
  return { numerator: (numerator / a).toString(), denominator: (denominator / a).toString() }
}

export function parseEntry(text, kind) {
  if (kind !== 'integer' && kind !== 'rational') {
    throw new TypeError(`Unsupported answer entry kind: ${kind}`)
  }
  if (typeof text !== 'string') return invalid('Please type a number in the answer box.')
  if (text.length > MAX_LENGTH) return invalid('That entry is too long. Please enter a shorter number.')
  const value = text.normalize('NFKC').replace(/\u2212/g, '-').trim()
  if (!value) return invalid('Type your answer before checking it.')

  let numerator, denominator
  const fraction = value.match(/^([+-]?\d+)\s*\/\s*([+-]?\d+)$/)
  if (fraction) {
    numerator = BigInt(fraction[1])
    denominator = BigInt(fraction[2])
    if (denominator === 0n) return invalid('A fraction cannot have 0 on the bottom. Please check your entry.')
  } else if (/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(value)) {
    const negative = value.startsWith('-')
    const unsigned = value.replace(/^[+-]/, '')
    const [whole, decimal = ''] = unsigned.split('.')
    numerator = BigInt((whole || '0') + decimal) * (negative ? -1n : 1n)
    denominator = 10n ** BigInt(decimal.length)
  } else if (/^[+-]?\d+\s+\d+\s*\/\s*\d+$/.test(value)) {
    return invalid('Please write a mixed number as one fraction or a decimal. For example, write 1 1/2 as 3/2.')
  } else {
    return invalid('Enter one number, such as 12, -3, 0.5, or 1/2. Leave out words, units, and calculations.')
  }

  const reduced = reduce(numerator, denominator)
  if (kind === 'integer' && reduced.denominator !== '1') {
    return invalid('This answer needs an integer, such as -2, 0, or 7. Please check your entry.')
  }
  return { valid: true, ...reduced }
}

export function gradeEntry(text, spec) {
  const entry = parseEntry(text, spec?.kind)
  if (!entry.valid) return entry
  if (spec.form === 'fraction') {
    const value = text.normalize('NFKC').replace(/\u2212/g, '-').trim()
    const fraction = /^([+-]?\d+)\s*\/\s*([+-]?\d+)$/.exec(value)
    if (!fraction && !/^[+-]?\d+$/.test(value)) return invalid('For this question, write a fraction such as 3/4, or an integer if it simplifies to one.')
    if (spec.reduced && fraction) {
      const n = BigInt(fraction[1]), d = BigInt(fraction[2])
      const abs = n < 0n ? -n : n
      if (d <= 0n || d === 1n || abs !== (BigInt(entry.numerator) < 0n ? -BigInt(entry.numerator) : BigInt(entry.numerator)) || d !== BigInt(entry.denominator)) {
        return invalid('Please simplify your fraction fully and use a positive denominator. Write an integer if it simplifies to one.')
      }
    }
  }
  const expected = parseEntry(spec.expected, spec.kind)
  if (!expected.valid) throw new TypeError('Answer entry has an invalid expected value.')
  return {
    valid: true,
    correct: entry.numerator === expected.numerator && entry.denominator === expected.denominator,
  }
}

export function isCorrectAnswer(problem, answer) {
  if (!problem) return false
  if (problem.answerEntry) {
    if (!answer || answer.type !== 'input' || typeof answer.value !== 'string') return false
    const result = gradeEntry(answer.value, problem.answerEntry)
    return result.valid && result.correct
  }
  return Number.isInteger(answer) && answer === problem.answer
}
