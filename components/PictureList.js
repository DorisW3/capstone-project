import { styled } from "styled-components";
import pictures from "../db.js";
import StyledImage from "./StyledImage.js";
import Link from "next/link.js";
import FavoriteButton from "./FavoriteButton.js";

export default function PictureList({ onToggleFavorite, images }) {
  return (
    <ul>
      {images
        .filter((picture) => picture.username === "dolorisi")
        .map((picture) => (
          <StyledListItem key={picture.id}>
            <FavoriteButton
              onToggleFavorite={() => onToggleFavorite(picture.id)}
              isFavorite={picture.isFavorite}
            />
            <Link href={`/details/${picture.id}`}>
              <StyledImage
                src={picture.image}
                alt={picture.theme}
                height={300}
                width={200}
                priority={true} // bei Bildern mit großer Datenmenge, verbessert der Code das laden
              />
            </Link>
            <StyledTheme>{picture.theme}</StyledTheme>
          </StyledListItem>
        ))}
    </ul>
  );
}

const StyledTheme = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

const StyledListItem = styled.li`
  position: relative;
`;
