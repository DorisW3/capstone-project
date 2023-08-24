import PictureList from "@/components/PictureList";
import pictures from "@/db";

export default function favorites({ isFavoriteArt, handleToggleFavorite }) {
  const onlyFavoriteArt = pictures.filter((picture) =>
    isFavoriteArt.find(
      (favoriteArt) =>
        favoriteArt.slug === picture.slug && favoriteArt.isFavorite
    )
  );

  return (
    <>
      {onlyFavoriteArt.length === 0 ? (
        "There are no favorites yet!"
      ) : (
        <PictureList
          pictures={onlyFavoriteArt}
          handleToggleFavorite={handleToggleFavorite}
          isFavoriteArt={isFavoriteArt}
        />
      )}
    </>
  );
}
