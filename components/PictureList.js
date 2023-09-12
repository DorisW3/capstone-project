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
    <ul>
      {images
        .filter((picture) => picture.username === "dolorisi") //simulates one specific user, it will replaced by a proper user profile logic later
        .map((picture) => (
          <li key={picture.id}>
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
              <StyledTextDiv>
                <StyledTheme>&quot;{picture.theme}&quot;</StyledTheme>
                <StyledDescription>{picture.description}</StyledDescription>
              </StyledTextDiv>
              <StyledDivButtons>
                <FavoriteButton
                  onToggleFavorite={() => onToggleFavorite(picture.id)}
                  isFavorite={picture.isFavorite}
                />
                <DeleteButton handleDelete={() => handleDelete(picture.id)} />
              </StyledDivButtons>
            </StyledSection>
          </li>
        ))}
    </ul>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: -0.5rem 0 3rem 0;
`;

const StyledTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: small;
  margin: 0.5rem 0.5rem;
`;

const StyledTheme = styled.h2`
  font-weight: 500;
  font-size: medium;
`;

const StyledDescription = styled.p`
  font-size: small;
  word-break: break-word;
  text-align: start;
`;

const StyledDivButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: -0.75rem;
  margin-right: -0.5rem;
`;
