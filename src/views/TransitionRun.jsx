import { getTransitionSet } from '../data/transition/index.js'
import { getBook } from '../data/books.js'
import { BackLink } from '../components/ui.jsx'
import QuizView from './QuizView.jsx'

export default function TransitionRun({ setId }) {
  const set = getTransitionSet(setId)
  if (!set) return <main className="page page-narrow">
    <BackLink href="#/arena">Back to the Arena</BackLink>
    <h1>Practice not found</h1>
  </main>

  const chapterHref = `#/book/${set.book}/ch/${set.chapter}`
  const isBridge = set.kind === 'bridge'
  const targetHref = ['challenge', 'worksheet'].includes(set.group)
    ? `${chapterHref}/${set.group}` : `${chapterHref}/practice/${set.group}`
  const targetLabel = set.group === 'worksheet' ? 'Open the chapter worksheet'
    : set.group === 'challenge' ? 'Return to the chapter challenge' : `Return to practice ${set.group}`
  const subtitle = isBridge
    ? `${getBook(set.book)?.title} · Chapter ${set.chapter} · Stepping stones`
    : 'Challenge Arena · Mixed problem solving'

  return <>
    <QuizView key={set.id} title={set.title} subtitle={subtitle}
      problems={set.problems} storageId={`transition/${set.id}`} rotateVersions={false}
      backHref={isBridge ? chapterHref : '#/arena'} backLabel={isBridge ? 'Back to chapter' : 'Back to the Arena'} />
    {isBridge && <aside className="page page-narrow no-print" aria-label="Next practice">
      <div className="learning-note">
        <p>These stepping stones prepare you for later, harder versions of this practice.
          When you finish, return to the chapter group and continue where you left off.</p>
        <a className="btn btn-accent" href={targetHref}>{targetLabel}</a>
      </div>
    </aside>}
  </>
}
