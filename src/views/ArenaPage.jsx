import { arenaPapers, ARENA_MODES } from '../data/arena/index.js'
import { getResult } from '../lib/storage.js'
import { ArrowRight, Clock, Swords, Trophy } from '../components/icons.jsx'
import { BackLink } from '../components/ui.jsx'
import { attemptProgress } from '../lib/attempts.js'
import { transitionSets } from '../data/transition/index.js'

function BestBadge({ storageId }) {
  const partial = attemptProgress(storageId)
  if (partial) return <span className="arena-best">Continue {partial.answered}/{partial.total}</span>
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
            <Clock size={15} /> {minutes == null ? 'No timer' : `${minutes} minutes`}
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
        <h1>Build toward contest problems</h1>
        <p className="lede">
          Start with Mixed Practice after Prealgebra, then try a Quick Round. Move to full papers when you can
          choose a method without a chapter hint. Timed papers save feedback until you hand them in; the last few
          problems are a stretch, and you do not need to finish every one on your first attempt.
        </p>
      </header>

      <h2 className="list-heading">Choose your own approach</h2>
      <p className="lede">Try these untimed sets when ratios, basic equations, area and volume feel familiar.
        Topics are mixed, so you decide how to begin. The final two problems are optional stretches.
        Read each solution before moving on.</p>
      <div className="arena-grid">
        {transitionSets.filter(set => set.kind === 'transfer').map((set, i) => (
          <ArenaCard key={set.id} href={`#/transition/${set.id}`} kicker={`Mixed set ${i + 1}`}
            title={set.title} blurb={set.description} minutes={null} count={set.problems.length}
            storageId={`transition/${set.id}`} />
        ))}
      </div>

      <h2 className="list-heading">Build up to a full paper</h2>
      <div className="arena-grid">
        {ARENA_MODES.map((mode, i) => (
          <ArenaCard key={mode.id} href={`#/arena/${mode.id}`} kicker={`Step ${i + 1}`}
            title={mode.title} blurb={mode.blurb} minutes={mode.minutes} count={mode.count} storageId={`arena/${mode.id}`} />
        ))}
      </div>

      {arenaPapers.length > 0 && (
        <>
          <h2 className="list-heading">Original practice papers</h2>
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

      <aside className="learning-note">
        <h2>Try an official AMC 8 sample</h2>
        <p>When mixed practice feels comfortable, use an official paper to check how you handle
          unfamiliar problems and the full contest pace.</p>
        <a href="https://maa.org/resource/sample-competition-2023-amc-8/" target="_blank" rel="noreferrer">
          Open the MAA sample paper and solutions
        </a>
      </aside>

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
