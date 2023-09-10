import { EntriesList } from "@/components/EntriesList";
import EntryForm from "@/components/EntryForm";
import PictureDetails from "@/components/PictureDetails";
import { useRouter } from "next/router";

export default function DetailsComments({
  entriesList,
  handleAddEntry,
  images,
}) {
  const router = useRouter();
  const routerId = router.query.index;

  // ----- nur das Bild, das auf Overview/my Art angeklickt wurde, wird dargestellt
  const selectedPicture = images.find((image) => image.id === routerId);

  //id an formular weitergeben & an die entiresList
  return (
    <main>
      <PictureDetails selectedPicture={selectedPicture} />
      <EntryForm onAddEntry={handleAddEntry} routerId={routerId} />
      <EntriesList
        entriesList={entriesList}
        handleAddEntry={handleAddEntry}
        routerId={routerId}
      />
    </main>
  );
}
