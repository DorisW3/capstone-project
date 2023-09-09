import { Divider } from "@mui/material";
import styled from "styled-components";

export function EntriesList({ entriesList, routerId }) {
  const pictureWithInitialEntires = entriesList.filter(
    (initialEntries) => initialEntries.picid === routerId
  );

  if (pictureWithInitialEntires.length === 0) {
    return <p style={{ marginBottom: "4rem" }}>There are no comments yet!</p>;
  } else {
    return (
      <>
        {pictureWithInitialEntires.map((entry, index) => (
          <StyledSection key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <StyledDiv>
              <StyledTime>{entry.date}</StyledTime>
              <StyledHeading>&quot;{entry.title}&quot;</StyledHeading>
              <StyledEntry>{entry.comment}</StyledEntry>
            </StyledDiv>
          </StyledSection>
        ))}
      </>
    );
  }
}

const StyledSection = styled.section`
  display: flex;
  flex-flow: column wrap;
  width: auto;
  margin: 0.25rem 1.5rem 0.5rem 1.5rem;
`;

const StyledTime = styled.time`
  padding-left: 80%;
  font-size: 11px;
`;

const StyledHeading = styled.h3`
  font-weight: 500;
  font-size: medium;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin: 1rem 0.75rem;
`;

const StyledEntry = styled.p`
  font-size: 13px;
  word-break: break-word;
  text-align: justify;
  padding: 1rem 0 0.25rem 0;
`;
