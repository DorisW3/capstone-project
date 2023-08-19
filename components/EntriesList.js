export function EntriesList({ date, title, comment }) {
  return (
    <section className="entries__section-entry">
      <time className="entry-date">{date}</time>
      <div className="entry__content">
        <div className="entry-title__container">
          <h2 className="entry-title">
            <q>{title}</q>
          </h2>
        </div>
        <p className="entry-comment">{comment}</p>
      </div>
    </section>
  );
}
