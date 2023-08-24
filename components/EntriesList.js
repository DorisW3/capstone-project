import pictures from "@/db";
import { Divider } from "@mui/material";
import styled from "styled-components";
import initialEntries from "@/commentsdb";

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
              <time>{entry.date}</time>
              <h2>{entry.title}</h2>
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
