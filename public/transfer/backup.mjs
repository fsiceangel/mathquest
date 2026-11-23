// Portable local-only backup support. No network calls and no sync credentials.
export const FORMAT = 'sorapinkice-learning-save'
export const MAX_BYTES = 10 * 1024 * 1024
export const RECOVERY_KEY = 'sorapinkice.learning.before-import.v1'
export const APP_KEYS = Object.freeze({
  math: Object.freeze(['mathquest.v1', 'mathquest.attempts.v1']),
  chess: Object.freeze(['training5334.v1']),
})
const KEYS = Object.values(APP_KEYS).flat()
const has = (o, k) => Object.prototype.hasOwnProperty.call(o, k)
const obj = v => v !== null && typeof v === 'object' && !Array.isArray(v)
const finite = v => typeof v === 'number' && Number.isFinite(v)
const count = v => Number.isSafeInteger(v) && v >= 0
const text = v => typeof v === 'string'
const bool = v => typeof v === 'boolean'
const nonnegative = v => finite(v) && v >= 0
const fail = message => { throw new Error(message) }
const assert = (condition, message = 'The file contains incompatible save data.') => { if (!condition) fail(message) }
function safeTree(value, depth = 0, budget = { remaining: 300000 }) {
  assert(depth <= 35 && --budget.remaining > 0, 'The save data is too complex.')
  if (typeof value === 'number') assert(Number.isFinite(value))
  if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      assert(!['__proto__', 'constructor', 'prototype'].includes(key), 'Unsafe keys in save file.')
      safeTree(child, depth + 1, budget)
    }
  }
}
function parseJson(raw) {
  assert(text(raw) && new TextEncoder().encode(raw).length <= MAX_BYTES, 'Save file exceeds the 10 MB limit.')
  let value
  try { value = JSON.parse(raw) } catch { fail('This file is damaged or is not a supported save file.') }
  safeTree(value)
  return value
}
function optional(o, key, predicate) { if (has(o, key)) assert(predicate(o[key]), `Invalid ${key} in save file.`) }
function record(value, check) {
  assert(obj(value))
  for (const item of Object.values(value)) check(item)
}
function mapField(o, key, check) { if (has(o, key)) record(o[key], check) }
function requiredFields(o, shape) {
  assert(obj(o))
  for (const [key, predicate] of Object.entries(shape)) assert(has(o, key) && predicate(o[key]), `Invalid ${key} in save file.`)
}
const coordinate = p => obj(p) && finite(p.x) && finite(p.y)

function validateMath(data) {
  assert(obj(data), 'Math progress must be an object.')
  // Empty progress is a valid initial MathQuest save.
  mapField(data, 'results', r => {
    requiredFields(r, { correct: count, total: count, pct: finite, at: nonnegative })
    assert(r.correct <= r.total && r.pct >= 0 && r.pct <= 100)
  })
  mapField(data, 'learned', v => assert(bool(v)))
  mapField(data, 'rounds', v => assert(count(v)))
  mapField(data, 'completedAttempts', v => assert(text(v)))
  if (has(data, 'attempts')) {
    assert(Array.isArray(data.attempts))
    for (const r of data.attempts) {
      requiredFields(r, { itemId: text, correct: count, total: count, pct: finite, at: nonnegative })
      assert(r.correct <= r.total && r.pct >= 0 && r.pct <= 100)
    }
  }
}
function validateDrafts(data) {
  record(data, draft => {
    requiredFields(draft, { version: v => v === 1, kind: v => ['quiz','arena'].includes(v), token: text,
      questions: Array.isArray, answers: Array.isArray, index: count, round: count, done: bool, flags: Array.isArray })
    const n = draft.questions.length
    assert(n > 0 && n <= 1000 && draft.answers.length === n && draft.index < n)
    for (const q of draft.questions) requiredFields(q, { id: text, fingerprint: text })
    assert(new Set(draft.questions.map(q => q.id)).size === n)
    for (const answer of draft.answers) {
      assert(answer === null || (count(answer) && answer < 5) ||
        (draft.kind === 'quiz' && obj(answer) && answer.type === 'input' && text(answer.value) && answer.value.length <= 80))
    }
    optional(draft, 'inputs', v => Array.isArray(v) && v.length === n && v.every(t => text(t) && t.length <= 80))
    assert(draft.flags.every(i => count(i) && i < n))
    if (draft.kind === 'arena') assert(count(draft.left))
    optional(draft, 'left', count)
    optional(draft, 'updatedAt', nonnegative)
  })
}
function validateChess(data) {
  requiredFields(data, { days: obj, sets: obj, review: Array.isArray })
  for (const key of ['coins', 'earned']) optional(data, key, nonnegative)
  for (const key of ['parts', 'petXp', 'decorSize', 'owned', 'badges']) mapField(data, key, v => assert(nonnegative(v)))
  optional(data, 'petPos', coordinate)
  optional(data, 'petSize', v => v === null || (finite(v) && v > 0))
  mapField(data, 'decorPos', v => assert(coordinate(v)))
  mapField(data, 'stored', v => assert(bool(v)))
  mapField(data, 'decorDirection', v => assert(['left', 'right'].includes(v)))
  mapField(data, 'equipped', v => assert(text(v)))
  if (has(data, 'settings')) {
    assert(obj(data.settings))
    optional(data.settings, 'sound', bool)
    optional(data.settings, 'goal', v => finite(v) && v > 0)
    optional(data.settings, 'skin', text)
  }
  record(data.days, d => {
    assert(obj(d))
    for (const key of ['done','clean','missed','seconds']) optional(d, key, nonnegative)
    optional(d, 'goalHit', bool)
  })
  record(data.sets, s => {
    requiredFields(s, { done: nonnegative, clean: nonnegative, total: nonnegative })
    optional(s, 'at', nonnegative)
  })
  for (const r of data.review) requiredFields(r, { id: text, partId: text, at: nonnegative })
  mapField(data, 'runs', r => {
    requiredFields(r, { idx: count, sig: text, tally: Array.isArray })
    for (const item of r.tally) {
      requiredFields(item, { id: text, clean: bool })
    }
    optional(r, 'at', nonnegative)
  })
  mapField(data, 'bookProgress', r => requiredFields(r, { clean: bool, at: nonnegative }))
  if (has(data, 'alphaArchive')) {
    assert(obj(data.alphaArchive))
    const archive = data.alphaArchive
    for (const key of ['sets','runs','parts','days']) optional(archive, key, obj)
    optional(archive, 'review', Array.isArray)
    optional(archive, 'createdAt', nonnegative)
    // Validate archived progress with the same supported shapes as live progress.
    validateChess({ days: {}, sets: {}, review: [], ...archive })
  }
}
const VALIDATORS = { 'mathquest.v1': validateMath, 'mathquest.attempts.v1': validateDrafts, 'training5334.v1': validateChess }
export function validateValue(key, raw) {
  assert(KEYS.includes(key), 'Unknown application data in save file.')
  if (raw === null) return null
  const data = parseJson(raw)
  VALIDATORS[key](data)
  return data
}
function selection(apps) {
  assert(Array.isArray(apps) && apps.length > 0 && new Set(apps).size === apps.length && apps.every(a => has(APP_KEYS, a)), 'Choose at least one application.')
  return apps.flatMap(a => APP_KEYS[a])
}
export function snapshot(storage, apps = ['math', 'chess']) {
  const values = Object.create(null)
  for (const key of selection(apps)) values[key] = storage.getItem(key)
  return values
}
export function availableApps(values) {
  return Object.keys(APP_KEYS).filter(app => APP_KEYS[app].some(key => values[key] != null))
}
export function createBackup(storage, apps = availableApps(snapshot(storage))) {
  const values = snapshot(storage, apps)
  for (const [key, raw] of Object.entries(values)) validateValue(key, raw)
  assert(availableApps(values).length > 0, 'There is no saved progress to export from this address.')
  return JSON.stringify({ format: FORMAT, version: 1, savedAt: new Date().toISOString(), data: values }, null, 2)
}
export function parseBackup(raw) {
  const input = parseJson(raw)
  assert(obj(input), 'This is not a supported learning save.')
  let values, savedAt = null
  if (input.format === FORMAT) {
    assert(input.version === 1, 'Unsupported learning save version.')
    assert(obj(input.data), 'Save data is missing.')
    for (const key of Object.keys(input.data)) assert(KEYS.includes(key), 'Unknown application data in save file.')
    values = { ...input.data }
    savedAt = text(input.savedAt) ? input.savedAt : null
  } else if (input.format === '5334-training-save') {
    assert(input.version === 1, 'Unsupported chess save version.')
    values = { 'training5334.v1': JSON.stringify(input.data) }
    savedAt = text(input.savedAt) ? input.savedAt : null
  } else if (!has(input, 'format') && has(input, 'days') && has(input, 'sets') && has(input, 'review')) {
    // Earlier Chess Puzzle Training exported the raw save object as JSON.
    values = { 'training5334.v1': raw }
  } else fail('This is not a supported learning or chess save.')
  for (const [key, value] of Object.entries(values)) validateValue(key, value)
  const apps = availableApps(values)
  assert(apps.length > 0, 'The file contains no application saves.')
  // A selected math save is one unit: absent drafts clear stale destination drafts.
  for (const app of apps) for (const key of APP_KEYS[app]) if (!has(values, key)) values[key] = null
  return { values, apps, savedAt }
}
export function describe(values, app) {
  if (app === 'math') {
    const progress = values['mathquest.v1'] === null || values['mathquest.v1'] === undefined ? {} : validateValue('mathquest.v1', values['mathquest.v1'])
    const drafts = values['mathquest.attempts.v1'] === null || values['mathquest.attempts.v1'] === undefined ? {} : validateValue('mathquest.attempts.v1', values['mathquest.attempts.v1'])
    return `${Object.keys(progress.results || {}).length} scored activities · ${Object.values(drafts).filter(d => !d.done).length} unfinished rounds`
  }
  const chess = values['training5334.v1'] == null ? {} : validateValue('training5334.v1', values['training5334.v1'])
  return `${chess.coins || 0} coins · ${Object.keys(chess.bookProgress || {}).length} book problems recorded`
}
function writeRaw(storage, key, raw) {
  if (raw === null) storage.removeItem(key)
  else storage.setItem(key, raw)
}
function transact(storage, next, previous) {
  const changed = []
  try {
    for (const [key, raw] of Object.entries(next)) {
      writeRaw(storage, key, raw)
      changed.push(key)
      assert(storage.getItem(key) === raw, 'The browser did not retain the save.')
    }
  } catch (error) {
    const failed = []
    for (const key of changed.reverse()) {
      try { writeRaw(storage, key, previous[key]); assert(storage.getItem(key) === previous[key]) }
      catch { failed.push(key) }
    }
    const result = new Error(failed.length
      ? 'Import failed and the browser also blocked full rollback. Download the recovery copy before closing this page.'
      : 'Import failed. Previous progress has been restored; no import was completed.')
    result.recovery = previous
    result.cause = error
    throw result
  }
}
export function importBackup(storage, raw, apps, expectedCurrent) {
  const parsed = parseBackup(raw)
  const keys = selection(apps)
  assert(apps.every(a => parsed.apps.includes(a)), 'The file does not contain every selected application.')
  const previous = snapshot(storage, apps)
  if (expectedCurrent) for (const key of keys) assert(previous[key] === expectedCurrent[key], 'Progress changed since this preview. Choose the file again before importing.')
  const next = Object.fromEntries(keys.map(key => [key, parsed.values[key]]))
  // This journal is written and verified before any live data can be replaced.
  const recovery = JSON.stringify({ format: FORMAT, version: 1, savedAt: new Date().toISOString(), data: previous }, null, 2)
  try { storage.setItem(RECOVERY_KEY, recovery); assert(storage.getItem(RECOVERY_KEY) === recovery) }
  catch { fail('The browser could not keep a recovery copy. Nothing was imported. Free storage space or allow site storage and try again.') }
  transact(storage, next, previous)
  return { apps, recovery }
}
export function recoveryBackup(storage) { return storage.getItem(RECOVERY_KEY) }
export function restoreRecovery(storage) {
  const raw = recoveryBackup(storage)
  assert(raw !== null, 'No recovery copy is available in this browser.')
  const record = parseJson(raw)
  assert(record.format === FORMAT && record.version === 1 && obj(record.data), 'Recovery copy is invalid.')
  const keys = Object.keys(record.data)
  assert(keys.length > 0 && keys.every(key => KEYS.includes(key)))
  // Exact raw restoration also preserves a pre-existing malformed save for recovery.
  assert(Object.values(record.data).every(v => v === null || text(v)))
  const previous = Object.fromEntries(keys.map(key => [key, storage.getItem(key)]))
  transact(storage, record.data, previous)
  return keys
}
