import assert from 'node:assert/strict'
import { parseEntry, gradeEntry, isCorrectAnswer } from '../../src/lib/answer-entry.js'

let checks = 0
function equal(actual, expected) {
  assert.deepEqual(actual, expected)
  checks++
}
function number(text, kind, numerator, denominator = '1') {
  equal(parseEntry(text, kind), { valid: true, numerator, denominator })
}

for (const text of ['6', ' 6 ', '+6', '6.0', '6.', '12/2', ' １２ ／ ２ ', '-12 / -2']) {
  number(text, 'integer', '6')
}
number('−６', 'integer', '-6')
number('-0.000', 'integer', '0')
number('0 / -11', 'rational', '0')
number('0.64', 'rational', '16', '25')
number('32/50', 'rational', '16', '25')
number('16 / -25', 'rational', '-16', '25')
number('-.5', 'rational', '-1', '2')
number('+.125', 'rational', '1', '8')
number('9007199254740993', 'integer', '9007199254740993')
number('9007199254740993/9007199254740992', 'rational', '9007199254740993', '9007199254740992')
number('0.' + '0'.repeat(75) + '1', 'rational', '1', '1' + '0'.repeat(76))

for (const text of ['', ' ', 'abc', '2+3', '2*3', 'Math.PI', '6 cm', '6,7', '1,000', '1 2', '1\n2', '1e3', 'NaN', 'Infinity', '∞', '.', '--2', '1/0', '0/0', '2/-0', '1/2/3', '-1 1/2', '1'.repeat(81), null, 6]) {
  const result = parseEntry(text, 'rational')
  equal(result.valid, false)
  equal(typeof result.message, 'string')
  equal(Object.hasOwn(result, 'correct'), false)
}
for (const text of ['1.5', '3/2', '-0.1']) equal(parseEntry(text, 'integer').valid, false)
equal(gradeEntry('32/50', { kind: 'rational', expected: '0.64' }), { valid: true, correct: true })
equal(gradeEntry('0.6400000000000000001', { kind: 'rational', expected: '16/25' }), { valid: true, correct: false })
equal(gradeEntry('12/2', { kind: 'integer', expected: '6' }), { valid: true, correct: true })
equal(gradeEntry('7', { kind: 'integer', expected: '6' }), { valid: true, correct: false })
equal(gradeEntry('1.5', { kind: 'integer', expected: '6' }).valid, false)
equal(gradeEntry('abc', { kind: 'integer', expected: '6' }).correct, undefined)

equal(isCorrectAnswer({ answer: 0 }, 0), true)
equal(isCorrectAnswer({ answer: 0 }, 1), false)
equal(isCorrectAnswer({ answer: 0 }, null), false)
equal(isCorrectAnswer({ answer: 0 }, '0'), false)
equal(isCorrectAnswer({ answer: 0 }, { type: 'input', value: '0' }), false)
const inputProblem = { answer: 0, answerEntry: { kind: 'rational', expected: '16/25' } }
equal(isCorrectAnswer(inputProblem, { type: 'input', value: '0.64' }), true)
equal(isCorrectAnswer(inputProblem, { type: 'input', value: '0.65' }), false)
equal(isCorrectAnswer(inputProblem, { type: 'input', value: 'abc' }), false)
equal(isCorrectAnswer(inputProblem, 0), false)
equal(isCorrectAnswer(inputProblem, null), false)
equal(isCorrectAnswer(undefined, 0), false)
assert.throws(() => parseEntry('1', 'expression'), TypeError)
assert.throws(() => gradeEntry('1', { kind: 'integer', expected: 'abc' }), TypeError)
checks += 2
const reduced = {kind:'rational',expected:'1/4',form:'fraction',reduced:true}
equal(gradeEntry('1/4', reduced), {valid:true,correct:true})
equal(gradeEntry('2/8', reduced).valid, false)
equal(gradeEntry('0.25', reduced).valid, false)
equal(gradeEntry('0.25', reduced).correct, undefined)
equal(gradeEntry('1/3', reduced), {valid:true,correct:false})
equal(gradeEntry('-1/-4', reduced).valid, false)
equal(gradeEntry('4/1', {...reduced,expected:'4'}).valid, false)
equal(gradeEntry('4', {...reduced,expected:'4'}), {valid:true,correct:true})
equal(gradeEntry('２ ／ ８', reduced).valid, false)
equal(gradeEntry('2/8', {...reduced,reduced:false}), {valid:true,correct:true})
console.log(`Answer entry: ${checks} checks passed (exact values, format errors, and legacy choices).`)
