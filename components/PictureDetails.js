import Image from "next/image";
import styled from "styled-components";
import StyledImage from "./StyledImage";

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
      <StyledDetails>
        <StyledUsername>
          <Image
            src="/artist.png"
            alt="artist icon from flaticon"
            width={24}
            height={24}
          />{" "}
          {selectedPicture.username}
        </StyledUsername>
        <p>&quot;{selectedPicture.theme}&quot;</p>
        <p>{selectedPicture.description}</p>
      </StyledDetails>
    </StyledArcticle>
  );
}

const StyledArcticle = styled.article`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

const StyledUsername = styled.p`
  font-weight: bold;
`;

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin: 0.5rem 0.5rem;
`;
