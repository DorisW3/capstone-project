import FavoriteButton from "@/components/FavoriteButton";
import FollowButton from "@/components/FollowButton";
import StyledImage from "@/components/StyledImage";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

export default function Favorites({ images, onToggleFavorite }) {
  const Favorites = images.filter((image) => image.isFavorite);

  return (
    <>
      {Favorites.length === 0 ? (
        <StyledInfo>There are no favorites yet!</StyledInfo>
      ) : (
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
                <StyledUserName>
                  <Image
                    src="/artist.png"
                    alt="artist icon from flaticon"
                    width={24}
                    height={24}
                  />{" "}
                  {Favorite.username}
                </StyledUserName>
                <StyledDiv>
                  <FavoriteButton
                    onToggleFavorite={() => {
                      onToggleFavorite(Favorite.id);
                    }}
                    isFavorite={Favorite.isFavorite}
                  />

                  <FollowButton />
                </StyledDiv>
              </StyledContainer>
            </StyledListItem>
          ))}
        </StyledBody>
      )}
    </>
  );
}

const StyledInfo = styled.p`
  margin-top: 4rem;
`;

const StyledBody = styled.ul`
  margin-top: 4rem;
`;

const StyledListItem = styled.li`
  position: relative;
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: -0.5rem 0;
`;

const StyledUserName = styled.h2`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  margin: 0.75rem 0 3rem 0.5rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: -1.75rem;
  margin-right: 0.5rem;
`;
