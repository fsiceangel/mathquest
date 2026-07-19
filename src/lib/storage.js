// Progress persistence. localStorage today; the API is deliberately tiny so a
// remote backend can replace it later without touching any view code.
const KEY = 'mathquest.v1'

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

export function getResult(id) {
  return load().results?.[id] ?? null
}

export function saveResult(id, correct, total) {
  const data = load()
  data.results ??= {}
  const pct = Math.round((correct / total) * 100)
  const prev = data.results[id]
  if (!prev || pct >= prev.pct) data.results[id] = { correct, total, pct, at: Date.now() }
  persist(data)
  return data.results[id]
}

export function starsFor(pct) {
  if (pct == null) return 0
  return pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0
}

export function markLearned(id) {
  const data = load()
  data.learned ??= {}
  data.learned[id] = true
  persist(data)
}

export function isLearned(id) {
  return Boolean(load().learned?.[id])
}
