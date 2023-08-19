import { Fragment } from "react";
import Divider from "@mui/material/Divider";
import { EntriesList } from "./EntriesList";

export default function EntriesSection({ entriesList }) {
  return (
    /*  <section className="entries-section">
      <div className="entries-section__entries">
        {entriesList.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null} */
    <EntriesList entriesList={entriesList} />
    /*  </Fragment>
        ))}
      </div>
    </section> */
  );
}
