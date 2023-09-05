import { Divider } from "@mui/material";
import styled from "styled-components";

export function EntriesList({ entriesList, routerId }) {
  const pictureWithInitialEntires = entriesList.filter(
    (initialEntries) => initialEntries.picid === routerId
  );

  if (pictureWithInitialEntires.length === 0) {
    return <p>There are no comments yet!</p>;
  } else {
    return (
      <>
        {pictureWithInitialEntires.map((entry, index) => (
          <StyledSection key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <StyledDiv>
              <time style={{ paddingLeft: "29.5rem", fontSize: "12px" }}>
                {entry.date}
              </time>
              <h3 style={{ fontWeight: "600" }}>&quot;{entry.title}&quot;</h3>
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
  width: 100%;
  gap: 2rem;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  margin: 1.5rem 0.75rem;
`;

const StyledEntry = styled.p`
  word-break: break-word;
  text-align: justify;
  padding-top: 1rem;
`;
