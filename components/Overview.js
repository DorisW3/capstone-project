import Image from "next/image.js";
import { styled } from "styled-components";
import pictures from "../picturesdb.js";
import StyledImage from "./StyledImage.js";

export default function Overview() {
  return (
    <ul>
      {pictures.map((picture) => (
        <StyledListItem key={picture.id} className="image-styling__container">
          <StyledImage
            src={picture.image}
            alt={picture.theme}
            height={300}
            width={200}
            priority={true} // bei Bildern mit großer Datenmenge, verbessert der Code das laden
          />

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
