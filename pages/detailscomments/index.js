import EntryForm from "@/components/EntryForm";
import EntriesSection from "@/components/EntriesSection";
import { useState } from "react";
import initialEntries from "@/commentsdb";
import { uid } from "uid";
import PictureDetails from "@/components/PictureDetails";

export default function DetailsComments({
  onSubmit,
  entriesList,
  handleAddEntry,
}) {
  return (
    <>
      <h1>Details Page</h1>
      <main>
        <PictureDetails />
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection
          entriesList={entriesList}
          handleAddEntry={handleAddEntry}
        />
      </main>
    </>
  );
}
