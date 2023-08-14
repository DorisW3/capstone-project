import { Fragment } from "react";
import Image from "next/image.js";
import { styled } from "styled-components";
import pictures from "../db.js";

export default function PictureList() {
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
              height={300}
              width={200}
            />
            <StyledTheme key={picture.id}>{picture.theme}</StyledTheme>
          </>
        ))}
      </StyledArticle>
    </>
  );
  console.log(pictures);
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
  font-size: 1rem;
  margin-bottom: 3rem;
`;
