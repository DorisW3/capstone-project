import { styled } from "styled-components";
import PictureList from "../components/PictureList";
import pictures from "../db.js";

export default function Homepage() {
  return (
    <>
      <Heading>My Art</Heading>
      <PictureList pictures={pictures} />
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
`;
