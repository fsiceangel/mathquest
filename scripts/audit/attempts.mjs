import assert from 'node:assert/strict'
import { newAttempt, saveAttempt, getAttempt, clearAttempt, reconcileAttempt, attemptProgress } from '../../src/lib/attempts.js'
import { saveResult, getRound, getAttemptQueue } from '../../src/lib/storage.js'

const values = new Map()
globalThis.localStorage = {
  getItem: key => values.get(key) ?? null,
  setItem: (key, value) => values.set(key, value),
}
globalThis.window = new EventTarget()
const problems = Array.from({ length: 5 }, (_, i) => ({
  q: `Compute ${i}+1.`, choices: ['0', '1', '2', '3', '4'], answer: i,
  calibration: { id: `test/1/1.1/${i + 1}/2` },
}))
const id = 'test/1/1.1'
const a = newAttempt('quiz', problems, { round: 1 })
a.answers = [0, 1, 2, null, null]
a.index = 2
assert.equal(saveAttempt(id, a), true)
const restored = getAttempt(id, 'quiz')
assert.deepEqual(restored.answers, a.answers)
assert.equal(restored.index, 2)
assert.equal(restored.round, 1)
assert.deepEqual(restored.questions.map(q => q.id), problems.map(p => p.calibration.id))
assert.deepEqual(attemptProgress(id), { answered: 3, total: 5 })
assert.equal(getAttempt(id, 'arena'), null)
assert.equal(reconcileAttempt(restored, [...problems].reverse()), null)
assert.equal(reconcileAttempt(restored, problems.slice(1)), null)
assert.equal(reconcileAttempt(restored, problems).changed, false)
const revised = problems.map((p, i) => i === 1 ? { ...p, q: 'A corrected question' } : p)
const reconciled = reconcileAttempt(restored, revised)
assert.equal(reconciled.changed, true)
assert.deepEqual(reconciled.attempt.answers, [0, null, 2, null, null])
assert.equal(reconciled.attempt.index, 1)
assert.equal(reconciled.attempt.done, false)
assert.equal(reconcileAttempt(restored, problems.map(p => ({ ...p, solution: 'Typo fixed' }))).changed, false)

const timed = newAttempt('arena', problems, { seconds: 720 })
Object.assign(timed, { left: 611, index: 3, flags: [1, 3], answers: [1, 2, 3, null, null] })
saveAttempt('arena/test', timed)
const timedRestored = getAttempt('arena/test', 'arena')
assert.equal(timedRestored.left, 611)
assert.deepEqual(timedRestored.flags, [1, 3])
assert.equal(timedRestored.index, 3)
clearAttempt(id)
assert.equal(getAttempt(id), null)
assert.equal(getAttempt('arena/test').token, timed.token)

saveResult(id, 3, 5, { attemptId: a.token, advanceRound: true })
saveResult(id, 3, 5, { attemptId: a.token, advanceRound: true })
assert.equal(getRound(id), 1, 'A remounted results page must not advance twice')
assert.equal(getAttemptQueue().length, 1, 'One completed attempt is one queued score')
saveResult(id, 4, 5, { attemptId: newAttempt('quiz', problems).token, advanceRound: true })
assert.equal(getRound(id), 2)
assert.equal(getAttemptQueue().length, 2)
saveResult('arena/test', 3, 5, { attemptId: timed.token })
assert.equal(getRound('arena/test'), 0)

// Numeric-entry drafts and outcomes coexist with unchanged MC records.
const entryProblems = problems.map((p,i)=>i===0 ? { ...p,answerEntry:{kind:'integer',expected:'6'} } : p)
const typed = newAttempt('quiz',entryProblems)
typed.inputs[0]='abc'
saveAttempt('typed',typed)
assert.equal(getAttempt('typed').inputs[0],'abc')
assert.equal(attemptProgress('typed').answered,0,'unsubmitted/invalid draft is not an answer')
typed.answers[0]={type:'input',value:'6.0'}
saveAttempt('typed',typed)
assert.deepEqual(reconcileAttempt(getAttempt('typed'),entryProblems).attempt.answers[0],typed.answers[0])
assert.equal(attemptProgress('typed').answered,1)
typed.answers[0]={type:'input',value:'abc'}
saveAttempt('typed',typed)
assert.equal(reconcileAttempt(getAttempt('typed'),entryProblems).attempt.answers[0],null,'invalid cached input is not a graded answer')
const migrated=reconcileAttempt(a,entryProblems)
assert.deepEqual(migrated.attempt.answers,[null,1,2,null,null],'switching one item to entry preserves all other answers')
const changedExpected=entryProblems.map((p,i)=>i===0?{...p,answerEntry:{kind:'integer',expected:'7'}}:p)
typed.answers[0]={type:'input',value:'6'}
assert.equal(reconcileAttempt(typed,changedExpected).attempt.answers[0],null)
assert.equal(reconcileAttempt(typed,changedExpected).attempt.inputs[0],'')
const badTimed={...timed,answers:[{type:'input',value:'6'},2,3,null,null]}
saveAttempt('arena/invalid-entry',badTimed)
assert.equal(getAttempt('arena/invalid-entry'),null,'timed MC does not accept input objects')

values.set('mathquest.attempts.v1', '{broken')
assert.equal(getAttempt(id), null)
for (const change of [{ answers: [] }, { index: 99 }, { answers: [6, 1, 2, null, null] }, { flags: [-1] }, { round: -1 }]) {
  saveAttempt(id, { ...a, ...change })
  assert.equal(getAttempt(id), null)
}
localStorage.setItem = () => { throw new Error('Quota exceeded') }
assert.equal(saveAttempt(id, a), false)
assert.equal(clearAttempt(id), false)
console.log('PASS: three-answer recovery, exact version/order, isolated drafts, changed-question recovery, flags/timer, idempotent scoring, corrupt and unavailable storage.')
