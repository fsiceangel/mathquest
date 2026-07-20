// Family sync client. Local storage stays the source of truth for instant UI;
// this module pushes changes to the family server in the background and pulls
// remote progress on startup. Everything degrades gracefully when offline.
import { exportProgress, mergeRemote, getAttemptQueue, trimAttemptQueue } from './storage.js'

const CFG_KEY = 'mathquest.sync.v1'

let status = 'off' // 'off' | 'syncing' | 'ok' | 'error'
const listeners = new Set()
let pushTimer = null

export function getSyncConfig() {
  try {
    return JSON.parse(localStorage.getItem(CFG_KEY)) || null
  } catch {
    return null
  }
}

export function setSyncConfig(cfg) {
  localStorage.setItem(CFG_KEY, JSON.stringify(cfg))
  setStatus(cfg ? 'ok' : 'off')
}

export function clearSyncConfig() {
  localStorage.removeItem(CFG_KEY)
  setStatus('off')
}

export function getSyncStatus() {
  return status
}

export function onSyncChange(fn) {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

function setStatus(next) {
  status = next
  for (const fn of listeners) fn(status)
}

async function api(base, code, path, options = {}) {
  const res = await fetch(base.replace(/\/+$/, '') + path, {
    ...options,
    headers: {
      Authorization: `Bearer ${code}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.error || `server said ${res.status}`)
  }
  return res.json()
}

export function testConnection(url, code) {
  return api(url, code, '/api/profiles')
}

export function createProfile(url, code, name) {
  return api(url, code, '/api/profiles', { method: 'POST', body: JSON.stringify({ name }) })
}

export function fetchSummary(limit = 25) {
  const cfg = getSyncConfig()
  if (!cfg) return Promise.resolve(null)
  return api(cfg.url, cfg.code, `/api/summary/${cfg.profileId}?limit=${limit}`)
}

// Pull remote progress, merge into local, then push the merged local state
// (plus any queued attempts) back up. Returns true if local data changed.
export async function fullSync() {
  const cfg = getSyncConfig()
  if (!cfg) return false
  setStatus('syncing')
  try {
    const remote = await api(cfg.url, cfg.code, `/api/progress/${cfg.profileId}`)
    const changed = mergeRemote(remote.results, remote.learned)
    const attempts = getAttemptQueue()
    await api(cfg.url, cfg.code, `/api/progress/${cfg.profileId}`, {
      method: 'POST',
      body: JSON.stringify({ ...exportProgress(), attempts }),
    })
    trimAttemptQueue(attempts.length)
    setStatus('ok')
    if (changed) window.dispatchEvent(new Event('mq-synced'))
    return changed
  } catch (err) {
    console.warn('sync failed:', err.message)
    setStatus('error')
    return false
  }
}

// Debounced push after local progress changes (quiz finished, learn visited).
export function schedulePush() {
  if (!getSyncConfig()) return
  clearTimeout(pushTimer)
  pushTimer = setTimeout(async () => {
    const cfg = getSyncConfig()
    if (!cfg) return
    setStatus('syncing')
    try {
      const attempts = getAttemptQueue()
      await api(cfg.url, cfg.code, `/api/progress/${cfg.profileId}`, {
        method: 'POST',
        body: JSON.stringify({ ...exportProgress(), attempts }),
      })
      trimAttemptQueue(attempts.length)
      setStatus('ok')
    } catch (err) {
      console.warn('push failed:', err.message)
      setStatus('error')
    }
  }, 1200)
}
