import { useMemo, useState } from 'react'
import ArenaRun from './ArenaRun.jsx'
import { drawPaper, getMode, getPaper } from '../data/arena/index.js'
import { BackLink } from '../components/ui.jsx'

function NotFound() {
  return (
    <main className="page page-narrow">
      <BackLink href="#/arena">Challenge Arena</BackLink>
      <header className="page-head">
        <h1>That paper is not ready yet</h1>
        <p className="lede">Pick another one from the Arena.</p>
      </header>
    </main>
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
