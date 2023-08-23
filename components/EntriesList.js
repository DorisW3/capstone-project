import pictures from "@/db";
import { Divider } from "@mui/material";
import styled from "styled-components";

export function EntriesList({ entriesList }) {
  /* const pictureWithInitialEntires = pictures.filter(
    (picture) => picture.id === 1
  ); */
  //in const commentsForSelectedArt = entriesList.filter nach den einträgen des gewählten bildes über die id conitional rendering
  <>
    {entriesList.map((entry, index) => (
      <StyledSection key={entry.id}>
        {index > 0 ? <Divider /> : null}
        <StyledDiv>
          <time>{entry.date}</time>
          <h2>{entry.title}</h2>
          <StyledEntry>{entry.comment}</StyledEntry>
        </StyledDiv>
      </StyledSection>
    ))}
  </>;
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 85%;
  gap: 1rem;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const StyledEntry = styled.p`
  word-break: break-word;
`;
