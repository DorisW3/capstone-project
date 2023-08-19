export function EntriesList({ date, title, comment, entriesList }) {
  return (
    <section className="entries__section-entry">
      {entriesList.map((entry) => (
        <time className="entry-date" key={entry.id}>
          {entry.date}
        </time>
      ))}
      <div className="entry__content">
        <div className="entry-title__container">
          <h2 className="entry-title">
            {entriesList.map((entry) => (
              <q key={entry.id}>{entry.title}</q>
            ))}
          </h2>
        </div>
        {entriesList.map((entry) => (
          <p className="entry-comment" key={entry.id}>
            {entry.comment}
          </p>
        ))}
      </div>
    </section>
  );
}
