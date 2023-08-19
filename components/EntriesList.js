export function EntriesList({ entriesList }) {
  console.log(entriesList);
  return (
    <>
      {entriesList.map((entry) => (
        <section className="entries__section-entry" key={entry.id}>
          <time className="entry-date">{entry.date}</time>
          <div className="entry__content">
            <div className="entry-title__container">
              <h2 className="entry-title">
                <q>{entry.title}</q>
              </h2>
            </div>

            <p className="entry-comment">{entry.comment}</p>
          </div>
        </section>
      ))}
    </>
  );
}
