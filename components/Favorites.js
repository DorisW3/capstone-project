import pictures from "@/lib/db";
import FavoriteButton from "./FavoriteButton";
import StyledImage from "./StyledImage";
import Link from "next/link";
import styled from "@emotion/styled";

export default function Favorites({ onToggleFavorite, isFavorite }) {
  return (
    <StyledList>
      {pictures.map((picture) => (
        <StyledListItem key={picture.id}>
          <FavoriteButton
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
          />
          <Link href={`/details/${picture.id}`}>
            <StyledImage
              src={picture.image}
              alt={picture.theme}
              height={300}
              width={250}
              priority={true} // bei Bildern mit großer Datenmenge, verbessert der Code das laden
            />
          </Link>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

export const StyledList = styled.ul`
  list-style: none;
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

const StyledListItem = styled.li`
  position: relative;
  list-style: none;
`;
