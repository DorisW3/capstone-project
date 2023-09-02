import pictures from "@/lib/db";
import FavoriteButton from "./FavoriteButton";
import StyledImage from "./StyledImage";
import Link from "next/link";
import styled from "@emotion/styled";

export default function Favorites({
  onToggleFavorite,
  isFavorite,
  submitImage,
}) {
  return (
    <ul>
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
              submitImage={submitImage}
              height={300}
              width={200}
              priority={true} // bei Bildern mit großer Datenmenge, verbessert der Code das laden
            />
          </Link>
        </StyledListItem>
      ))}
    </ul>
  );
}

const StyledListItem = styled.li`
  position: relative;
`;
