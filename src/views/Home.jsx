import { books } from '../data/books.js'
import { isChapterAvailable } from '../data/content.js'
import { ArrowRight, Clock, Swords } from '../components/icons.jsx'

function BookCard({ book }) {
  const ready = book.chapters.filter((c) => isChapterAvailable(book.id, c.number)).length
  return (
    <a className={`book-card accent-${book.accent}`} href={`#/book/${book.id}`}>
      <div className="book-cover">
        <span className="book-cover-title">{book.title}</span>
      </div>
      <div className="book-body">
        <p className="book-sub">{book.subtitle}</p>
        <p className="book-meta">
          {book.chapters.length} chapters
          {ready > 0 ? ` · ${ready} ready to play` : ''}
          {ready === 0 && <span className="pill">Coming soon</span>}
        </p>
        <span className="book-go">
          Open the book <ArrowRight size={16} />
        </span>
      </div>
    </a>
  )
}

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <h1>
          Learn it. Practice it. <em>Master it.</em>
        </h1>
        <p className="lede">
          Pick a book, work through each section&rsquo;s mini-lesson, earn three stars in practice,
          then take on the chapter challenge. Ready?
        </p>
      </section>
      <div className="book-grid">
        {books.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
      <a className="arena-banner accent-amber" href="#/arena">
        <span className="arena-banner-crest">
          <Swords size={28} />
        </span>
        <span className="arena-banner-body">
          <span className="arena-banner-title">Challenge Arena</span>
          <span className="arena-banner-sub">
            Timed papers that mix every chapter together and get harder as you go. The clock runs, nothing is marked
            until you hand it in, and every problem is worked out afterwards.
          </span>
          <span className="arena-banner-meta">
            <Clock size={15} /> 15 or 40 minutes
          </span>
        </span>
        <ArrowRight size={20} />
      </a>
    </main>
  )
}
