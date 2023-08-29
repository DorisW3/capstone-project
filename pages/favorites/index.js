import FavoriteButton from "@/components/FavoriteButton";
import FollowButton from "@/components/FollowButton";
import StyledImage from "@/components/StyledImage";
import styled from "@emotion/styled";
import Link from "next/link";

export default function favorites({ images, onToggleFavorite }) {
  const Favorites = images.filter((image) => image.isFavorite);

  return (
    <>
      {Favorites.length === 0 ? (
        "There are no favorites yet!"
      ) : (
        <>
          <Heading>Favorites</Heading>
          <ul>
            {Favorites.map((Favorite) => (
              <StyledListItem key={Favorite.id}>
                <FavoriteButton
                  onToggleFavorite={() => {
                    onToggleFavorite(Favorite.id);
                  }}
                  isFavorite={Favorite.isFavorite}
                />
                <Link href={`/details/${Favorite.id}`}>
                  <StyledImage
                    src={Favorite.image}
                    alt={Favorite.theme}
                    height={300}
                    width={200}
                    priority={true} // bei Bildern mit großer Datenmenge, verbessert der Code das laden
                  />
                </Link>
                <StyledContainer>
                  <StyledUserName>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      width={16}
                      height={18}
                    >
                      <path
                        fill="slategray"
                        d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                      />
                    </svg>{" "}
                    {Favorite.username}
                  </StyledUserName>
                  <FollowButton />
                </StyledContainer>
              </StyledListItem>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledUserName = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
`;

const StyledListItem = styled.li`
  position: relative;
`;
