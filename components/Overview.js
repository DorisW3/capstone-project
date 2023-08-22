import Image from "next/image.js";
import { styled } from "styled-components";
import pictures from "../db.js";
import StyledImage from "./StyledImage.js";
import Link from "next/link";
import FavoriteButton from "./Buttons.js";

export default function Overview({
  setFilledHeart,
  filledHeart,
  handleToggle,
}) {
  return (
    <ul>
      {pictures.map((picture) => (
        <StyledListItem key={picture.id}>
          <Link href={`/detailscomments/${picture.id}`}>
            <FavoriteButton
              setFilledHeart={setFilledHeart}
              filledHeart={filledHeart}
              handleToggle={handleToggle}
            />
            <StyledImage
              src={picture.image}
              alt={picture.theme}
              height={300}
              width={200}
              priority={true} // bei Bildern mit großer Datenmenge, verbessert der Code das laden
            />
          </Link>
          <StyledTheme>{picture.username}</StyledTheme>
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
