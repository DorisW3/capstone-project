import { Fragment } from "react";
import Divider from "@mui/material/Divider";
import { EntriesList } from "./EntriesList";

export default function EntriesSection({ entries }) {
  return (
    <section className="entries-section">
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <EntriesList
              date={entry.date}
              title={entry.title}
              comment={entry.comment}
              id={entry.id}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
