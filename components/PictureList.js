import { Fragment } from "react";
import Image from "next/image";
import { styled } from "styled-components";
import pictures from "../lib/db.js";

export default function Picture() {
  return (
    <>
      <StyledArticle>
        {pictures.map((picture) => (
          <>
            <StyledImage
              src={picture.image}
              alt={picture.theme}
              key={picture.id}
              id={picture.id}
            />
            <StyledTheme key={picture.id}>{picture.theme}</StyledTheme>
          </>
        ))}
      </StyledArticle>
    </>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const StyledTheme = styled.h2`
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 2rem;
`;
