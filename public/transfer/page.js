import { APP_KEYS, FORMAT, MAX_BYTES, snapshot, availableApps, createBackup, parseBackup, describe, importBackup, recoveryBackup, restoreRecovery } from './backup.js'

const $ = id => document.getElementById(id)
const names = { math: 'MathQuest', chess: 'Chess Puzzle Training' }
let pending = null, exportApps = [], recoveryInMemory = null, storage
const checked = container => [...container.querySelectorAll('input[data-app]:checked')].map(input => input.dataset.app)
function status(message, error = false) { $('status').textContent = message; $('status').classList.toggle('error', error) }
function download(content, prefix) {
  const url = URL.createObjectURL(new Blob([content], { type: 'application/octet-stream' }))
  const link = document.createElement('a')
  link.href = url
  link.download = `${prefix}-${new Date().toISOString().replace(/[:.]/g, '-')}.sav`
  document.body.append(link); link.click(); link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 2000)
}
function choice(app, incoming, current) {
  const label = document.createElement('label'); label.className = 'choice'
  const check = document.createElement('input'); check.type = 'checkbox'; check.dataset.app = app; check.checked = true
  const body = document.createElement('span')
  const name = document.createElement('strong'); name.textContent = names[app]
  const detail = document.createElement('small'); detail.textContent = describe(incoming, app)
  body.append(name, detail)
  if (current) {
    const before = document.createElement('small')
    try { before.textContent = availableApps(current).includes(app) ? `Currently here: ${describe(current, app)}` : 'Currently here: no save' }
    catch { before.textContent = 'Currently here: existing data could not be read; it will be kept in the recovery copy.' }
    body.append(before)
  }
  label.append(check, body)
  return label
}
function refresh() {
  const values = snapshot(storage)
  exportApps = availableApps(values)
  $('available').replaceChildren()
  for (const app of exportApps) {
    try { $('available').append(choice(app, values)) }
    catch {
      const note = document.createElement('p'); note.textContent = `${names[app]} has unreadable data here. It has not been changed. Use the original app to recover it.`
      $('available').append(note)
    }
  }
  if (!exportApps.length) $('available').textContent = 'No Math or Chess save was found at this address. To migrate, export from your original address first.'
  $('export').disabled = !checked($('available')).length
  $('recovery').hidden = !recoveryInMemory && !recoveryBackup(storage)
}
function updateImport() { $('import').disabled = !pending || !$('confirm').checked || !checked($('incoming')).length }
$('origin').textContent = window.location.origin
if (/\/transfer\/?$/.test(window.location.pathname)) {
  for (const link of document.querySelectorAll('[data-learning-home]')) link.href = 'https://learn.sorapinkice.top/'
}
try { storage = window.localStorage; refresh() }
catch { status('This browser is blocking site storage. Allow storage for this address before importing or exporting.', true); $('file').disabled = true }
$('available').addEventListener('change', () => { $('export').disabled = !checked($('available')).length })
$('incoming').addEventListener('change', updateImport)
$('confirm').addEventListener('change', updateImport)
$('export').addEventListener('click', () => {
  try { download(createBackup(storage, checked($('available'))), 'sorapinkice-learning'); status('Save download started. Your progress here is unchanged.') }
  catch (error) { status(error.message, true) }
})
let fileRequest = 0
$('file').addEventListener('change', async event => {
  const request = ++fileRequest, file = event.target.files?.[0]
  pending = null; $('preview').hidden = true; $('confirm').checked = false; updateImport()
  if (!file) return
  try {
    if (file.size > MAX_BYTES) throw new Error('Choose a save file smaller than 10 MB.')
    const raw = await file.text()
    if (request !== fileRequest) return
    const data = parseBackup(raw), current = snapshot(storage)
    pending = { raw, data, current }
    $('filename').textContent = file.name
    $('incoming').replaceChildren(...data.apps.map(app => choice(app, data.values, current)))
    $('preview').hidden = false
    status('File checked. Choose which applications to replace, then confirm below.')
  } catch (error) { status(error.message, true) }
})
$('import').addEventListener('click', () => {
  if (!pending || !$('confirm').checked) return
  try {
    const apps = checked($('incoming'))
    const result = importBackup(storage, pending.raw, apps, pending.current)
    recoveryInMemory = result.recovery
    pending = null; $('preview').hidden = true; $('file').value = ''; updateImport(); refresh()
    status(`Imported ${apps.map(app => names[app]).join(' and ')}. Other application saves were left unchanged. Reload any already-open game tabs before continuing.`)
    $('done').hidden = false
  } catch (error) {
    if (error.recovery) recoveryInMemory = JSON.stringify({ format: FORMAT, version: 1, savedAt: new Date().toISOString(), data: error.recovery }, null, 2)
    try { refresh() } catch { /* Keep the original import error visible. */ }
    if (recoveryInMemory) $('recovery').hidden = false
    status(error.message, true)
  }
})
$('download-recovery').addEventListener('click', () => {
  try {
    const content = recoveryInMemory || recoveryBackup(storage)
    if (!content) throw new Error('No recovery copy is available.')
    download(content, 'sorapinkice-before-import')
    status('Recovery copy download started.')
  } catch (error) { status(error.message, true) }
})
$('restore').addEventListener('click', () => {
  if (!window.confirm('Restore the previous save? This replaces the applications from the last import, including progress made since then.')) return
  try {
    restoreRecovery(storage)
    pending = null; $('preview').hidden = true; $('confirm').checked = false; updateImport(); refresh()
    status('Previous save restored. Reload any open game tabs before continuing.')
    $('done').hidden = false
  } catch (error) { status(error.message, true) }
})
$('reload').addEventListener('click', () => window.location.reload())
window.addEventListener('storage', event => {
  if (Object.values(APP_KEYS).flat().includes(event.key)) {
    try { refresh() } catch { status('Could not read updated browser storage.', true) }
    if (pending) status('Progress changed in another tab. Choose the import file again before replacing it.', true)
  }
})
