import PictureList from "@/components/PictureList";
import pictures from "@/db";
import styled from "@emotion/styled";

export default function favorites({ isFavoriteArt, handleToggleFavorite }) {
  const onlyFavoriteArt = pictures.filter((picture) =>
    isFavoriteArt.find(
      (favoriteArt) =>
        favoriteArt.slug === picture.slug && favoriteArt.isFavorite
    )
  );

  return (
    <>
      <Heading>Favorites</Heading>
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

const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;
