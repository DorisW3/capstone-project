import { Fragment } from "react";
import Image from "next/image.js";
import { styled } from "styled-components";
import pictures from "../db.js";

export default function PictureList() {
  return (
    <ul>
      {pictures
        .filter((picture) => picture.username === "dolorisi")
        .map((picture) => (
          <li key={picture.id}>
            <StyledImage src={picture.image} alt={picture.theme} />

            <StyledTheme>{picture.theme}</StyledTheme>
          </li>
        ))}
    </ul>
  );
}

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const StyledTheme = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;
