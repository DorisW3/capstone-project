import EntryForm from "@/components/EntryForm";
import PictureDetails from "@/components/PictureDetails";
import { EntriesList } from "@/components/EntriesList";
import { useRouter } from "next/router";
import pictures from "@/db";

export default function DetailsComments({ entriesList, handleAddEntry }) {
  const router = useRouter();
  const routerId = router.query.index;

  // ----- nur das Bild, das auf Overview/my Art angeklickt wurde, wird dargestellt
  const selectedPicture = pictures.find((picture) => picture.id === routerId);

  //id an formular weitergeben & an die entiresList
  return (
    <>
      <h1>Details Page</h1>
      <main>
        <PictureDetails selectedPicture={selectedPicture} />
        <EntryForm onAddEntry={handleAddEntry} routerId={routerId} />
        <EntriesList
          entriesList={entriesList}
          handleAddEntry={handleAddEntry}
          routerId={routerId}
        />
      </main>
    </>
  );
}

//entriesList={selectedPicture.id === 1 ? entriesList : ["No entires yet!"]}
