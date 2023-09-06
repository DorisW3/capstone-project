import styled from "styled-components";
import StyledImage from "./StyledImage.js";
import Link from "next/link.js";
import FavoriteButton from "./FavoriteButton.js";
import useSWR from "swr";

export default function PictureList({ onToggleFavorite, images }) {
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
              <FavoriteButton
                onToggleFavorite={() => onToggleFavorite(picture.id)}
                isFavorite={picture.isFavorite}
              />
              <StyledTheme>&quot;{picture.theme}&quot;</StyledTheme>
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 2rem;
`;

const StyledTheme = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 3rem;
  margin-top: 0.75rem;
  margin-left: 0.75rem;
`;
