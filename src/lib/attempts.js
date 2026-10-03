// Small local drafts: question IDs and fingerprints, never copies of the bank.
// Drafts are device-local; the existing family sync still handles final results.
import { gradeEntry } from './answer-entry.js'
const KEY = 'mathquest.attempts.v1'

function allAttempts() {
  try {
    const value = JSON.parse(localStorage.getItem(KEY))
    return value && typeof value === 'object' && !Array.isArray(value) ? value : {}
  } catch { return {} }
}

export function questionFingerprint(problem) {
  const fields = [problem.q, problem.choices, problem.answer, problem.fig]
  // Preserve legacy fingerprints for every unchanged multiple-choice problem.
  if (problem.answerEntry) fields.push(problem.answerEntry)
  const text = JSON.stringify(fields)
  let hash = 2166136261
  for (let i = 0; i < text.length; i++) hash = Math.imul(hash ^ text.charCodeAt(i), 16777619)
  return (hash >>> 0).toString(16)
}

export function getAttempt(storageId, kind) {
  const attempt = allAttempts()[storageId]
  if (!attempt || attempt.version !== 1 || (kind && attempt.kind !== kind)
    || !['quiz', 'arena'].includes(attempt.kind) || typeof attempt.token !== 'string'
    || !Array.isArray(attempt.questions) || !attempt.questions.length
    || !attempt.questions.every(q => typeof q?.id === 'string' && typeof q.fingerprint === 'string')
    || new Set(attempt.questions.map(q => q.id)).size !== attempt.questions.length
    || !Array.isArray(attempt.answers) || attempt.answers.length !== attempt.questions.length
    || !attempt.answers.every(a => a === null || (Number.isInteger(a) && a >= 0 && a < 5)
      || (attempt.kind === 'quiz' && a?.type === 'input' && typeof a.value === 'string' && a.value.length <= 80))
    || (attempt.inputs !== undefined && (!Array.isArray(attempt.inputs) || attempt.inputs.length !== attempt.questions.length
      || !attempt.inputs.every(v => typeof v === 'string' && v.length <= 80)))
    || !Number.isInteger(attempt.index) || attempt.index < 0 || attempt.index >= attempt.questions.length
    || !Number.isInteger(attempt.round) || attempt.round < 0
    || typeof attempt.done !== 'boolean'
    || !Array.isArray(attempt.flags) || !attempt.flags.every(i => Number.isInteger(i) && i >= 0 && i < attempt.questions.length)
    || (attempt.kind === 'arena' && (!Number.isInteger(attempt.left) || attempt.left < 0))) return null
  return attempt
}

export function saveAttempt(storageId, attempt) {
  try {
    const attempts = allAttempts()
    attempts[storageId] = { ...attempt, updatedAt: Date.now() }
    localStorage.setItem(KEY, JSON.stringify(attempts))
    window.dispatchEvent(new Event('mq-attempts'))
    return true
  } catch { return false }
}

export function clearAttempt(storageId) {
  try {
    const attempts = allAttempts()
    delete attempts[storageId]
    localStorage.setItem(KEY, JSON.stringify(attempts))
    window.dispatchEvent(new Event('mq-attempts'))
    return true
  } catch { return false }
}

export function newAttempt(kind, problems, { round = 0, seconds = 0 } = {}) {
  return {
    version: 1, kind,
    token: globalThis.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`,
    questions: problems.map(p => ({ id: p.calibration.id, fingerprint: questionFingerprint(p) })),
    answers: problems.map(() => null), inputs: problems.map(() => ''), index: 0, round, done: false, flags: [], left: seconds,
  }
}

// Preserve unaffected work if a question has been corrected in a later release.
export function reconcileAttempt(attempt, problems) {
  if (!problems || problems.length !== attempt.questions.length
    || problems.some((p, i) => p?.calibration?.id !== attempt.questions[i].id)) return null
  const changed = problems.flatMap((p, i) => questionFingerprint(p) !== attempt.questions[i].fingerprint ? [i] : [])
  const answers = attempt.answers.map((answer, i) => {
    if (changed.includes(i)) return null
    if (answer === null) return null
    if (problems[i].answerEntry) return answer?.type === 'input' && gradeEntry(answer.value, problems[i].answerEntry).valid ? answer : null
    return Number.isInteger(answer) && answer < problems[i].choices.length ? answer : null
  })
  if (!changed.length && answers.every((a, i) => a === attempt.answers[i])) return { attempt, changed: false }
  const index = answers.findIndex(a => a === null)
  return { changed: true, attempt: {
    ...attempt, questions: problems.map(p => ({ id: p.calibration.id, fingerprint: questionFingerprint(p) })),
    answers, inputs: problems.map((p,i) => changed.includes(i) ? '' : attempt.inputs?.[i] ?? ''),
    index: index < 0 ? attempt.index : index, done: false,
  } }
}

export function attemptProgress(storageId) {
  const attempt = getAttempt(storageId)
  return attempt && !attempt.done ? { answered: attempt.answers.filter(a => a !== null).length, total: attempt.answers.length } : null
}
