import PictureList from "../components/PictureList";
import pictures from "../db.js";

export default function MyArt() {
  console.log("test");
  return <PictureList pictures={pictures} />;
}
