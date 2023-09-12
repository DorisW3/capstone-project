import Link from "next/link.js";
import styled from "styled-components";
import useSWR from "swr";
import FavoriteButton from "./FavoriteButton.js";
import StyledImage from "./StyledImage.js";
import DeleteButton from "./DeleteButton.js";

export default function PictureList({
  onToggleFavorite,
  images,
  handleDelete,
}) {
  const { data, error } = useSWR("/api/images");
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <StyledList>
      {images
        .filter((picture) => picture.username === "dolorisi") //simulates one specific user, it will replaced by a proper user profile logic later
        .map((picture) => (
          <StyledListItem key={picture.id}>
            <Link href={`/details/${picture.id}`}>
              <StyledImage
                src={picture.image}
                alt={picture.theme}
                height={300}
                width={200}
                priority={true} // bei Bildern mit großer Datenmenge, verbessert der Code das laden
              />
            </Link>
            <StyledSection>
              <StyledTheme>&quot;{picture.theme}&quot;</StyledTheme>
              <StyledDiv>
                <FavoriteButton
                  onToggleFavorite={() => onToggleFavorite(picture.id)}
                  isFavorite={picture.isFavorite}
                />
                <DeleteButton handleDelete={() => handleDelete(picture.id)} />
              </StyledDiv>
            </StyledSection>
          </StyledListItem>
        ))}
    </StyledList>
  );
}

export const StyledList = styled.ul``;

const StyledListItem = styled.li`
  position: relative;
`;

const StyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: -0.5rem 0;
`;

const StyledTheme = styled.h2`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  margin: 0.75rem 0 3rem 0.75rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-start;
`;
