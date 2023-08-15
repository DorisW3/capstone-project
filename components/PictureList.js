import { Fragment } from "react";
import Image from "next/image.js";
import { styled } from "styled-components";
import pictures from "../db.js";

export default function PictureList() {
  return (
    <>
      <StyledArticle>
        {pictures.map((picture) => (
          <ul key={picture.id}>
            <li>
              <StyledImage
                src={picture.image}
                alt={picture.theme}
                height={300}
                width={200}
              />
            </li>
            <StyledTheme>{picture.theme}</StyledTheme>
          </ul>
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
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;
