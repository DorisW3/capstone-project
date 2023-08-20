import pictures from "@/db";
import StyledImage from "./StyledImage";
import { styled } from "styled-components";
import { useRouter } from "next/router";

export default function PictureDetails() {
  const router = useRouter();
  const { id } = router.query;

  const selectedPicture = pictures.find(
    ({ slug }) => slug === router.query.slug
  );

  console.log(selectedPicture);

  if (!selectedPicture) {
    return <p>Loading...</p>;
  }

  return (
    <StyledArcticle key={pictures.id}>
      <StyledImage
        src={selectedPicture.image}
        alt={selectedPicture.theme}
        height={300}
        width={200}
        priority={true} // bei Bildern mit großer Datenmenge, verbessert der Code das laden
      />
      <p>{selectedPicture.theme}</p>
      <p>{selectedPicture.description}</p>
      <p>{selectedPicture.username}</p>
    </StyledArcticle>
  );
}

const StyledArcticle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
