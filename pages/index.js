import { styled } from "styled-components";
import PictureList from "../components/PictureList";
import pictures from "../db.js";
import Overview from "@/components/Overview";

export default function Homepage() {
  return (
    <>
      <Heading>Overview</Heading>
      <StyledMain>
        <Overview />
        <Heading>My Art</Heading>
        <PictureList pictures={pictures} />
      </StyledMain>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(600px, 80%);
  margin-inline: auto;
  & ul {
    width: 100%;
  }
`;
