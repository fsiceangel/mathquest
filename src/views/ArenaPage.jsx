import { arenaPapers, ARENA_MODES } from '../data/arena/index.js'
import { getResult } from '../lib/storage.js'
import { ArrowRight, Clock, Swords, Trophy } from '../components/icons.jsx'
import { BackLink } from '../components/ui.jsx'

function BestBadge({ storageId }) {
  const best = getResult(storageId)
  if (!best) return <span className="arena-best is-empty">Not attempted</span>
  return (
    <span className="arena-best">
      Best {best.correct}/{best.total}
    </span>
  )
}

function ArenaCard({ href, kicker, title, blurb, minutes, count, storageId }) {
  return (
    <a className="arena-card-link" href={href}>
      <div className="arena-card-body">
        <p className="arena-card-kicker">{kicker}</p>
        <h3>{title}</h3>
        <p className="arena-card-blurb">{blurb}</p>
        <p className="arena-card-meta">
          <span>
            <Trophy size={15} /> {count} problems
          </span>
          <span>
            <Clock size={15} /> {minutes} minutes
          </span>
          <BestBadge storageId={storageId} />
        </p>
      </div>
      <ArrowRight size={20} />
    </a>
  )
}

export default function ArenaPage() {
  return (
    <main className="page page-narrow">
      <BackLink href="#/">All books</BackLink>
      <header className="page-head arena-head">
        <span className="arena-crest">
          <Swords size={30} />
        </span>
        <p className="eyebrow">Challenge Arena</p>
        <h1>Timed problem papers</h1>
        <p className="lede">
          A paper here works like a real competition: the clock runs, the problems get harder as you go, no lesson
          links, and nothing is marked until you hand it in. Skip anything that stalls you — a blank costs the same as
          a wrong answer, so guess before the time runs out. Every problem is worked out for you at the end.
        </p>
      </header>

      {arenaPapers.length > 0 && (
        <>
          <h2 className="list-heading">Championship papers</h2>
          <div className="arena-grid">
            {arenaPapers.map((paper, i) => (
              <ArenaCard
                key={paper.id}
                href={`#/arena/paper/${paper.id}`}
                kicker={`Paper ${i + 1}`}
                title={paper.title}
                blurb={paper.blurb}
                minutes={paper.minutes ?? 40}
                count={paper.problems.length}
                storageId={`arena/${paper.id}`}
              />
            ))}
          </div>
        </>
      )}

      <h2 className="list-heading">Draw a fresh paper</h2>
      <div className="arena-grid">
        {ARENA_MODES.map((mode) => (
          <ArenaCard
            key={mode.id}
            href={`#/arena/${mode.id}`}
            kicker="Never the same twice"
            title={mode.title}
            blurb={mode.blurb}
            minutes={mode.minutes}
            count={mode.count}
            storageId={`arena/${mode.id}`}
          />
        ))}
      </div>

      <div className="arena-tips">
        <h2>How to run a good paper</h2>
        <ol>
          <li>Do a first pass and answer everything you see quickly. Flag the rest.</li>
          <li>Go back to the flagged ones with whatever time is left.</li>
          <li>With a minute to go, fill in every blank. A guess is free.</li>
          <li>Afterwards, read the solution to every problem you missed — that is where the points come from next time.</li>
        </ol>
      </div>
    </main>
  )
}
