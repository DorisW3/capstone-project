import pictures from "@/db";
import StyledImage from "./StyledImage";
import { styled } from "styled-components";

export default function PictureDetails() {
  return (
    <StyledArcticle key={pictures.id}>
      {}
      <StyledImage alt={pictures.title}></StyledImage>
      <p>{pictures.theme}</p>
      <p>{pictures.description}</p>
      <p>{pictures.username}</p>
    </StyledArcticle>
  );
}

const StyledArcticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
