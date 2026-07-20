import { useState } from 'react'
import {
  getSyncConfig,
  setSyncConfig,
  clearSyncConfig,
  testConnection,
  createProfile,
  fullSync,
  getSyncStatus,
} from '../lib/sync.js'
import { BackLink } from '../components/ui.jsx'
import { Check } from '../components/icons.jsx'

const STATUS_LABEL = {
  off: 'Not connected',
  syncing: 'Syncing…',
  ok: 'Synced',
  error: 'Server unreachable — progress is saved on this device and will sync later',
}

export default function FamilyPage() {
  const existing = getSyncConfig()
  const [url, setUrl] = useState(existing?.url || '')
  const [code, setCode] = useState(existing?.code || '')
  const [profiles, setProfiles] = useState(null)
  const [newName, setNewName] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [connected, setConnected] = useState(Boolean(existing))

  async function connect() {
    setBusy(true)
    setError('')
    try {
      const list = await testConnection(url.trim(), code.trim())
      setProfiles(list)
    } catch (err) {
      setError(
        err.message === 'Failed to fetch'
          ? 'Could not reach the server. Check the address, and that the server is running.'
          : err.message,
      )
    } finally {
      setBusy(false)
    }
  }

  async function choose(profile) {
    setSyncConfig({ url: url.trim(), code: code.trim(), profileId: profile.id, profileName: profile.name })
    setConnected(true)
    setProfiles(null)
    await fullSync()
  }

  async function addProfile() {
    if (!newName.trim()) return
    setBusy(true)
    setError('')
    try {
      const profile = await createProfile(url.trim(), code.trim(), newName.trim())
      await choose(profile)
    } catch (err) {
      setError(err.message)
    } finally {
      setBusy(false)
    }
  }

  const cfg = getSyncConfig()

  return (
    <main className="page page-narrow">
      <BackLink href="#/">Home</BackLink>
      <header className="page-head">
        <p className="eyebrow">Family Sync</p>
        <h1>Keep progress everywhere</h1>
        <p className="lede">
          Connect to your family&rsquo;s MathQuest server and your stars follow you to every computer
          and tablet. A grown-up sets this up once per device.
        </p>
      </header>

      {connected && cfg ? (
        <div className="sync-card">
          <p className="sync-row">
            <Check size={18} className="learned-check" />
            <strong>{cfg.profileName}</strong>&nbsp;is connected
          </p>
          <p className="sync-detail">Server: {cfg.url}</p>
          <p className="sync-detail">Status: {STATUS_LABEL[getSyncStatus()] ?? getSyncStatus()}</p>
          <div className="sync-actions">
            <button className="btn btn-accent" disabled={busy} onClick={async () => { setBusy(true); await fullSync(); setBusy(false) }}>
              Sync now
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => {
                setConnected(false)
                setProfiles(null)
              }}
            >
              Switch profile
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => {
                clearSyncConfig()
                setConnected(false)
                setProfiles(null)
              }}
            >
              Disconnect
            </button>
          </div>
        </div>
      ) : profiles === null ? (
        <div className="sync-card">
          <label className="field">
            <span>Server address</span>
            <input
              type="url"
              placeholder="https://your-desktop.your-tailnet.ts.net"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </label>
          <label className="field">
            <span>Family code</span>
            <input
              type="text"
              placeholder="e.g. 7FA2C1"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </label>
          {error && <p className="sync-error" role="alert">{error}</p>}
          <div className="sync-actions">
            <button className="btn btn-accent btn-lg" disabled={busy || !url.trim() || !code.trim()} onClick={connect}>
              {busy ? 'Connecting…' : 'Connect'}
            </button>
          </div>
        </div>
      ) : (
        <div className="sync-card">
          <h2 className="sync-subhead">Who is practicing on this device?</h2>
          <div className="profile-list">
            {profiles.map((p) => (
              <button key={p.id} className="btn btn-ghost btn-lg" onClick={() => choose(p)}>
                {p.name}
              </button>
            ))}
          </div>
          <div className="profile-new">
            <input
              type="text"
              placeholder="New name…"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addProfile()}
            />
            <button className="btn btn-accent" disabled={busy || !newName.trim()} onClick={addProfile}>
              Add
            </button>
          </div>
          {error && <p className="sync-error" role="alert">{error}</p>}
        </div>
      )}
    </main>
  )
}
