import FavoriteButton from "@/components/FavoriteButton";
import FollowButton from "@/components/FollowButton";
import StyledImage from "@/components/StyledImage";
import styled from "@emotion/styled";
import Link from "next/link";
import Image from "next/image";

export default function favorites({ images, onToggleFavorite }) {
  const Favorites = images.filter((image) => image.isFavorite);

  return (
    <>
      {Favorites.length === 0 ? (
        "There are no favorites yet!"
      ) : (
        <>
          <Heading>Favorites</Heading>
          <StyledBody>
            {Favorites.map((Favorite) => (
              <StyledListItem key={Favorite.id}>
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
                  <FavoriteButton
                    onToggleFavorite={() => {
                      onToggleFavorite(Favorite.id);
                    }}
                    isFavorite={Favorite.isFavorite}
                  />
                  <StyledUserName>
                    <Image
                      src="/Artist.png"
                      alt="artist icon from flaticon"
                      width={24}
                      height={24}
                    />{" "}
                    {Favorite.username}
                  </StyledUserName>
                  <FollowButton />
                </StyledContainer>
              </StyledListItem>
            ))}
          </StyledBody>
        </>
      )}
    </>
  );
}

const StyledBody = styled.ul`
  margin-top: 3rem;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const StyledListItem = styled.li`
  position: relative;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: -2.75rem;
`;

const StyledUserName = styled.h2`
  text-align: center;
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 4rem;
  padding-top: 3.85rem;
`;
