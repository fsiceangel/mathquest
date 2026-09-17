import { useMemo, useState } from 'react'
import ArenaRun from './ArenaRun.jsx'
import { drawPaper, getMode, getPaper } from '../data/arena/index.js'
import { getCheckpoint } from '../data/checkpoints/index.js'
import { BackLink } from '../components/ui.jsx'

function NotFound({ href = '#/arena', label = 'Challenge Arena', where = 'the Arena' }) {
  return (
    <main className="page page-narrow">
      <BackLink href={href}>{label}</BackLink>
      <header className="page-head">
        <h1>That paper is not ready yet</h1>
        <p className="lede">Pick another one from {where}.</p>
      </header>
    </main>
  )
}

// A checkpoint is an authored paper that belongs to a book: everything the
// student has met so far, posed contest-style.
export function CheckpointRun({ book, number }) {
  const cp = getCheckpoint(book.id, number)
  const [nonce, setNonce] = useState(0)
  if (!cp) return <NotFound href={`#/book/${book.id}`} label={book.title} where="the book" />
  const [from, to] = cp.covers
  return (
    <ArenaRun
      key={nonce}
      title={cp.title}
      subtitle={`Checkpoint ${cp.number} · ${book.title}, chapters ${from}–${to}`}
      problems={cp.problems}
      minutes={cp.minutes ?? 25}
      storageId={`checkpoint/${cp.id}`}
      backHref={`#/book/${book.id}`}
      backLabel="Back to the book"
      onRestart={() => setNonce((n) => n + 1)}
    />
  )
}

// A drawn paper is built once per run. "Run it again" bumps the nonce, which
// draws a completely new set of problems.
export function DrawnPaper({ modeId }) {
  const mode = getMode(modeId)
  const [nonce, setNonce] = useState(0)
  const problems = useMemo(
    () => (mode ? drawPaper(mode.count, { maxDiff: mode.maxDiff }) : []),
    [mode, nonce],
  )
  if (!mode) return <NotFound />
  return (
    <ArenaRun
      key={nonce}
      title={mode.title}
      subtitle="Challenge Arena"
      problems={problems}
      minutes={mode.minutes}
      storageId={`arena/${mode.id}`}
      backHref="#/arena"
      onRestart={() => setNonce((n) => n + 1)}
    />
  )
}

export function AuthoredPaper({ paperId }) {
  const paper = getPaper(paperId)
  const [nonce, setNonce] = useState(0)
  if (!paper) return <NotFound />
  return (
    <ArenaRun
      key={nonce}
      title={paper.title}
      subtitle="Challenge Arena"
      problems={paper.problems}
      minutes={paper.minutes ?? 40}
      storageId={`arena/${paper.id}`}
      backHref="#/arena"
      onRestart={() => setNonce((n) => n + 1)}
    />
  )
}
