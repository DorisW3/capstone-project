import pictures from "@/lib/db";
import StyledImage from "./StyledImage";
import { styled } from "styled-components";
import { useRouter } from "next/router";

export default function PictureDetails({ selectedPicture }) {
  if (!selectedPicture) {
    return <p>Loading...</p>;
  }

  return (
    <StyledArcticle key={selectedPicture.id}>
      <StyledImage
        src={selectedPicture.image}
        alt={selectedPicture.theme}
        height={300}
        width={200}
        priority={true} // bei Bildern mit großer Datenmenge, verbessert der Code das Laden
      />
      <p>{selectedPicture.theme}</p>
      <p>{selectedPicture.description}</p>
      <p>{selectedPicture.username}</p>
    </StyledArcticle>
  );
}

const StyledArcticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
