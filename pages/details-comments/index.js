import initialEntries from "@/commentsdb";
import EntryForm from "@/components/EntryForm";
import { localStorage } from "node-localstorage";
import { StyledMain } from "../index";
import EntriesSection from "@/components/EntriesSection";

export default function DetailsComments({ handleSubmitEntry }) {
  const [entries, setEntries] = localStorage("entries", {
    defaultValue: [initialEntries],
  });

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([{ id: uid(), date, ...newEntry }, ...entries]);
  }

  return (
    <>
      <h1>Detail Page</h1>
      <StyledMain>
        <EntryForm
          onSubmitEntry={handleSubmitEntry}
          addEntry={handleAddEntry}
        />
        <EntriesSection />
      </StyledMain>
    </>
  );
}
