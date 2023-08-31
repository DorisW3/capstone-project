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
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width={16}
          height={18}
        >
          <path
            fill="slategray"
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
          />
        </svg>{" "}
        {selectedPicture.username}
      </p>
    </StyledArcticle>
  );
}

const StyledArcticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
