import PictureList from "@/components/PictureList";
import pictures from "@/db";
import styled from "@emotion/styled";

export default function favorites() {
  return (
    <>
      <Heading>Favorites</Heading>
      <p>There are no favorites yet!</p>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;
