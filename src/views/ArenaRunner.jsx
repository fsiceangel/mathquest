import { useMemo, useState } from 'react'
import ArenaRun from './ArenaRun.jsx'
import { drawPaper, getMode, getPaper } from '../data/arena/index.js'
import { getCheckpoint } from '../data/checkpoints/index.js'
import { BackLink } from '../components/ui.jsx'
import QuizView from './QuizView.jsx'
import { inDifficultyOrder } from '../data/calibration/index.js'
import { attemptProgress } from '../lib/attempts.js'

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
  const [format, setFormat] = useState(null)
  if (!cp) return <NotFound href={`#/book/${book.id}`} label={book.title} where="the book" />
  const [from, to] = cp.covers
  const practiceProgress = attemptProgress(`practice/checkpoint/${cp.id}`)
  const timedProgress = attemptProgress(`checkpoint/${cp.id}`)
  if (!format) return (
    <main className="page page-narrow">
      <BackLink href={`#/book/${book.id}`}>{book.title}</BackLink>
      <header className="page-head"><h1>{cp.title}</h1>
        <p className="lede">Mix what you learned in chapters {from}–{to}. First choose methods without a clock;
          try the timed version once the earlier problems feel comfortable. The final questions are optional stretches.</p></header>
      <div className="results-actions">
        <button className="btn btn-accent btn-lg" onClick={() => setFormat('practice')}>{practiceProgress ? `Continue practice ${practiceProgress.answered}/${practiceProgress.total}` : 'Practice without a timer'}</button>
        <button className="btn btn-ghost btn-lg" onClick={() => setFormat('timed')}>{timedProgress ? `Continue timed paper ${timedProgress.answered}/${timedProgress.total}` : `Start ${cp.minutes ?? 25}-minute paper`}</button>
      </div>
    </main>
  )
  if (format === 'practice') return <QuizView key={nonce} title={cp.title} subtitle="Checkpoint practice · No timer"
    problems={cp.problems} storageId={`practice/checkpoint/${cp.id}`} backHref={`#/book/${book.id}`}
    backLabel="Back to the book" rotateVersions={false} />
  return (
    <ArenaRun
      key={nonce}
      title={cp.title}
      subtitle={`Checkpoint ${cp.number} · ${book.title}, chapters ${from}–${to}`}
      problems={inDifficultyOrder(cp.problems)}
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
    () => (mode ? drawPaper(mode.count, { mode: mode.id }) : []),
    [mode, nonce],
  )
  if (!mode) return <NotFound />
  if (mode.minutes == null) return (
    <QuizView key={nonce} title={mode.title} subtitle="Prealgebra to contest problems · No timer"
      problems={problems} storageId="arena/bridge" backHref="#/arena" backLabel="Back to the Arena"
      onNewSet={() => setNonce(n => n + 1)} rotateVersions={false} />
  )
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
