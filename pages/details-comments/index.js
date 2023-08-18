import CommentForm from "@/components/CommentForm";
import { useState } from "react";

export default function DetailsComments({ handleSubmitComment }) {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (newEntry) => {
    setEntries([...entries, newEntry]);
  };

  return (
    <>
      <h1>Detail Page</h1>
      <main>
        <CommentForm
          onSubmitComment={handleSubmitComment}
          addEntry={handleAddEntry}
        />
      </main>
    </>
  );
}
