import { styled } from "styled-components";
import PictureList from "../../components/PictureList";
import pictures from "../../db.js";

export default function MyArt({
  onToggleFavorite,
  isFavorite,
  onFavoriteImages,
}) {
  return (
    <>
      <Heading>My Art</Heading>
      <StyledMain>
        <PictureList
          pictures={pictures}
          onToggleFavorite={onToggleFavorite}
          onFavoriteImages={onFavoriteImages}
          isFavorite={isFavorite}
        />
      </StyledMain>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(600px, 80%);
  margin-inline: auto;
  & ul {
    width: 100%;
  }
`;
