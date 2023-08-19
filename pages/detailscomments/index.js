import EntryForm from "@/components/EntryForm";
import EntriesSection from "@/components/EntriesSection";
import { useState } from "react";
import initialEntries from "@/commentsdb";
import { uid } from "uid";

export default function DetailsComments({ onSubmit, entriesList }) {
  const date = new Date().toLocaleDateString("en-gb", {
    dateStyle: "medium",
  });

  const newEntry = {
    id: uid,
    date: date,
  };

  return (
    <>
      <h1>Detail Page</h1>
      <main>
        <EntryForm onSubmit={onSubmit} />
        <EntriesSection
          entries={entries}
          onAddEntry={handleAddEntry}
          entriesList={entriesList}
        />
      </main>
    </>
  );
}
