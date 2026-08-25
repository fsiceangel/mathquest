// Progress persistence. localStorage is the always-available source of truth;
// the sync layer (sync.js) mirrors it to the family server when configured.
const KEY = 'mathquest.v1'
const ATTEMPT_QUEUE_CAP = 300

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || {}
  } catch {
    return {}
  }
}

function persist(data) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data))
  } catch {
    /* storage unavailable (private mode) — progress just won't persist */
  }
}

function progressChanged() {
  window.dispatchEvent(new Event('mq-progress'))
}

export function getResult(id) {
  return load().results?.[id] ?? null
}

export function saveResult(id, correct, total) {
  const data = load()
  data.results ??= {}
  const pct = Math.round((correct / total) * 100)
  const prev = data.results[id]
  if (!prev || pct >= prev.pct) data.results[id] = { correct, total, pct, at: Date.now() }
  data.attempts ??= []
  data.attempts.push({ itemId: id, correct, total, pct, at: Date.now() })
  if (data.attempts.length > ATTEMPT_QUEUE_CAP) data.attempts.splice(0, data.attempts.length - ATTEMPT_QUEUE_CAP)
  persist(data)
  progressChanged()
  return data.results[id]
}

// How many times a quiz has been finished. Drives which set of problem
// variations the next attempt serves (see lib/variants.js).
export function getRound(id) {
  return load().rounds?.[id] ?? 0
}

export function bumpRound(id) {
  const data = load()
  data.rounds ??= {}
  data.rounds[id] = (data.rounds[id] ?? 0) + 1
  persist(data)
}

export function starsFor(pct) {
  if (pct == null) return 0
  return pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0
}

export function markLearned(id) {
  const data = load()
  data.learned ??= {}
  if (!data.learned[id]) {
    data.learned[id] = true
    persist(data)
    progressChanged()
  }
}

export function isLearned(id) {
  return Boolean(load().learned?.[id])
}

// ---- sync support ----

export function exportProgress() {
  const data = load()
  return { results: data.results || {}, learned: data.learned || {} }
}

// Merge remote progress into local storage (best score wins; learned is
// additive). Returns true if anything local changed.
export function mergeRemote(remoteResults = {}, remoteLearned = {}) {
  const data = load()
  data.results ??= {}
  data.learned ??= {}
  let changed = false
  for (const [id, r] of Object.entries(remoteResults)) {
    const local = data.results[id]
    if (!local || r.pct > local.pct || (r.pct === local.pct && r.at > local.at)) {
      data.results[id] = r
      changed = true
    }
  }
  for (const id of Object.keys(remoteLearned)) {
    if (!data.learned[id]) {
      data.learned[id] = true
      changed = true
    }
  }
  if (changed) persist(data)
  return changed
}

export function getAttemptQueue() {
  return load().attempts || []
}

// Remove the first `count` queued attempts (they were delivered to the server).
export function trimAttemptQueue(count) {
  if (!count) return
  const data = load()
  if (!Array.isArray(data.attempts)) return
  data.attempts.splice(0, count)
  persist(data)
}
