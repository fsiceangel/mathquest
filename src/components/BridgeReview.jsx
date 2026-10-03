import { bridgesFor } from '../data/calibration/bridges.js'
import { transitionSets } from '../data/transition/index.js'
import { attemptProgress } from '../lib/attempts.js'

export default function BridgeReview({ book, chapter, group }) {
  const reviews = bridgesFor(book, chapter, group)
  const practices = transitionSets.filter(set => set.kind === 'bridge' && set.book === book
    && set.chapter === chapter && (!group || set.group === group))
  if (!reviews.length && !practices.length) return null
  return <aside className="learning-note no-print" aria-label="Worked examples to review">
    {reviews.map((review, i) => <p key={i}>
      {review.note}{' '}
      {review.sections.map(section => <a key={section} href={`#/book/${book}/ch/${section.split('.')[0]}/learn/${section}`}>
        Review {section}{' '}
      </a>)}
    </p>)}
    {practices.map(set => {
      const partial = attemptProgress(`transition/${set.id}`)
      return <p key={set.id}>
        <a href={`#/transition/${set.id}`}>{set.title}</a>{' · '}
        {partial ? `Continue ${partial.answered}/${partial.total}` : `${set.problems.length} stepping-stone problems`}
      </p>
    })}
  </aside>
}
