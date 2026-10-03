import { inventory } from '../lib/content.mjs'
import { createHash } from 'node:crypto'
import { writeFile, mkdir } from 'node:fs/promises'

const { records } = await inventory()
const data = records.filter(r => r.book === 'intro-counting').map(r => {
  const { calibration, variants, ...source } = r.p
  return { ...r, sourceDigest: createHash('sha256').update(JSON.stringify(source)).digest('hex') }
})
await mkdir('tmp', { recursive: true })
await writeFile('tmp/counting-answers-source.json', JSON.stringify(data, null, 2))
console.log(`Exported ${data.length} Counting records; full SHA-256 digests exclude calibration/variants.`)
