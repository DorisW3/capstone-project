import { Fragment } from "react";
import Image from "next/image.js";
import { styled } from "styled-components";
import pictures from "../db.js";
import StyledImage from "./StyledImage.js";

export default function PictureList() {
  return (
    <ul>
      {pictures
        .filter((picture) => picture.username === "dolorisi")
        .map((picture) => (
          <StyledListItem key={picture.id}>
            <StyledImage
              src={picture.image}
              alt={picture.theme}
              height={300}
              width={200}
            />

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
