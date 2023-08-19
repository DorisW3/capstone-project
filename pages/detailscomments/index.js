import EntryForm from "@/components/EntryForm";
import EntriesSection from "@/components/EntriesSection";
import { useState } from "react";
import initialEntries from "@/commentsdb";

export default function DetailsComments({ onSubmit }) {
  const [entries, setEntries] = useState(initialEntries);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });

    newEntry = {
      id: uid(),
      date: date,
      motto: newEntry.motto,
      notes: newEntry.notes,
    };

    setEntries((entries) => [newEntry, ...entries]);
  }

  return (
    <>
      <h1>Detail Page</h1>
      <main>
        <EntryForm on AddEntry={handleAddEntry} />
        <EntriesSection entries={entries} />
      </main>
    </>
  );
}
