// MathQuest family sync server — single file, zero npm dependencies.
// Requires Node 22+ (uses the built-in node:sqlite module).
//
//   node server.js
//
// First run creates config.json with a random family code (printed on start)
// and mathquest.db next to this file. Point the site's Family Sync page at
// this server's URL and enter the family code.
import { createServer } from 'node:http'
import { DatabaseSync } from 'node:sqlite'
import { randomBytes } from 'node:crypto'
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = dirname(fileURLToPath(import.meta.url))

const configPath = join(dir, 'config.json')
if (!existsSync(configPath)) {
  const code = randomBytes(3).toString('hex').toUpperCase()
  writeFileSync(configPath, JSON.stringify({ familyCode: code, port: 3000 }, null, 2))
}
const config = JSON.parse(readFileSync(configPath, 'utf8'))

const db = new DatabaseSync(join(dir, 'mathquest.db'))
db.exec(`
  CREATE TABLE IF NOT EXISTS profiles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    created_at INTEGER NOT NULL
  );
  CREATE TABLE IF NOT EXISTS results (
    profile_id INTEGER NOT NULL,
    item_id TEXT NOT NULL,
    correct INTEGER NOT NULL,
    total INTEGER NOT NULL,
    pct INTEGER NOT NULL,
    at INTEGER NOT NULL,
    PRIMARY KEY (profile_id, item_id)
  );
  CREATE TABLE IF NOT EXISTS learned (
    profile_id INTEGER NOT NULL,
    item_id TEXT NOT NULL,
    PRIMARY KEY (profile_id, item_id)
  );
  CREATE TABLE IF NOT EXISTS attempts (
    profile_id INTEGER NOT NULL,
    item_id TEXT NOT NULL,
    correct INTEGER NOT NULL,
    total INTEGER NOT NULL,
    pct INTEGER NOT NULL,
    at INTEGER NOT NULL,
    PRIMARY KEY (profile_id, item_id, at)
  );
`)

const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, Content-Type',
}

function send(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json', ...CORS })
  res.end(JSON.stringify(data))
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (c) => {
      body += c
      if (body.length > 1_000_000) reject(new Error('body too large'))
    })
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {})
      } catch {
        reject(new Error('invalid JSON'))
      }
    })
    req.on('error', reject)
  })
}

function authorized(req) {
  const header = req.headers.authorization || ''
  const code = header.replace(/^Bearer\s+/i, '').trim().toUpperCase()
  return code === String(config.familyCode).toUpperCase()
}

function getProfile(id) {
  return db.prepare('SELECT id, name FROM profiles WHERE id = ?').get(Number(id))
}

function mergeProgress(profileId, results = {}, learned = {}, attempts = []) {
  const upsert = db.prepare(`
    INSERT INTO results (profile_id, item_id, correct, total, pct, at)
    VALUES (?, ?, ?, ?, ?, ?)
    ON CONFLICT(profile_id, item_id) DO UPDATE SET
      correct = excluded.correct, total = excluded.total,
      pct = excluded.pct, at = excluded.at
    WHERE excluded.pct > results.pct
       OR (excluded.pct = results.pct AND excluded.at > results.at)
  `)
  for (const [itemId, r] of Object.entries(results)) {
    if (!r || !Number.isFinite(r.pct)) continue
    upsert.run(profileId, itemId, r.correct | 0, r.total | 0, r.pct | 0, r.at || Date.now())
  }
  const markLearned = db.prepare('INSERT OR IGNORE INTO learned (profile_id, item_id) VALUES (?, ?)')
  for (const [itemId, v] of Object.entries(learned)) {
    if (v) markLearned.run(profileId, itemId)
  }
  const addAttempt = db.prepare(
    'INSERT OR IGNORE INTO attempts (profile_id, item_id, correct, total, pct, at) VALUES (?, ?, ?, ?, ?, ?)',
  )
  for (const a of attempts) {
    if (!a || !a.itemId || !Number.isFinite(a.at)) continue
    addAttempt.run(profileId, a.itemId, a.correct | 0, a.total | 0, a.pct | 0, a.at)
  }
}

function progressFor(profileId) {
  const results = {}
  for (const row of db.prepare('SELECT item_id, correct, total, pct, at FROM results WHERE profile_id = ?').all(profileId)) {
    results[row.item_id] = { correct: row.correct, total: row.total, pct: row.pct, at: row.at }
  }
  const learned = {}
  for (const row of db.prepare('SELECT item_id FROM learned WHERE profile_id = ?').all(profileId)) {
    learned[row.item_id] = true
  }
  return { results, learned }
}

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost')
    const path = url.pathname.replace(/\/+$/, '') || '/'

    if (req.method === 'OPTIONS') {
      res.writeHead(204, CORS)
      return res.end()
    }
    if (path === '/health') return send(res, 200, { ok: true, app: 'mathquest-sync' })

    if (!path.startsWith('/api/')) return send(res, 404, { error: 'not found' })
    if (!authorized(req)) return send(res, 401, { error: 'wrong family code' })

    if (path === '/api/profiles' && req.method === 'GET') {
      return send(res, 200, db.prepare('SELECT id, name FROM profiles ORDER BY id').all())
    }
    if (path === '/api/profiles' && req.method === 'POST') {
      const { name } = await readBody(req)
      const clean = String(name || '').trim().slice(0, 30)
      if (!clean) return send(res, 400, { error: 'name required' })
      const existing = db.prepare('SELECT id, name FROM profiles WHERE name = ?').get(clean)
      if (existing) return send(res, 200, existing)
      const info = db.prepare('INSERT INTO profiles (name, created_at) VALUES (?, ?)').run(clean, Date.now())
      return send(res, 201, { id: Number(info.lastInsertRowid), name: clean })
    }

    const progressMatch = path.match(/^\/api\/progress\/(\d+)$/)
    if (progressMatch) {
      const profile = getProfile(progressMatch[1])
      if (!profile) return send(res, 404, { error: 'no such profile' })
      if (req.method === 'GET') return send(res, 200, progressFor(profile.id))
      if (req.method === 'POST') {
        const { results, learned, attempts } = await readBody(req)
        mergeProgress(profile.id, results, learned, attempts)
        return send(res, 200, progressFor(profile.id))
      }
    }

    const summaryMatch = path.match(/^\/api\/summary\/(\d+)$/)
    if (summaryMatch && req.method === 'GET') {
      const profile = getProfile(summaryMatch[1])
      if (!profile) return send(res, 404, { error: 'no such profile' })
      const limit = Math.min(Number(url.searchParams.get('limit')) || 25, 100)
      const attempts = db
        .prepare('SELECT item_id, correct, total, pct, at FROM attempts WHERE profile_id = ? ORDER BY at DESC LIMIT ?')
        .all(profile.id, limit)
      return send(res, 200, { profile, attempts })
    }

    return send(res, 404, { error: 'not found' })
  } catch (err) {
    return send(res, 500, { error: err.message })
  }
})

const port = config.port || 3000
server.listen(port, () => {
  console.log('')
  console.log('  MathQuest sync server is running!')
  console.log(`  Port:        ${port}`)
  console.log(`  Family code: ${config.familyCode}`)
  console.log(`  Database:    ${join(dir, 'mathquest.db')}`)
  console.log('')
  console.log('  Enter the family code on the site under Family Sync.')
})
