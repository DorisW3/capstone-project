import { Divider } from "@mui/material";
import styled from "styled-components";

export function EntriesList({ entriesList }) {
  return (
    <>
      {entriesList.map((entry, index) => (
        <StyledSection key={entry.id}>
          {index > 0 ? <Divider /> : null}
          <StyledDiv key={entry.id}>
            <time>{entry.date}</time>
            <h2>{entry.title}</h2>
            <p>{entry.comment}</p>
          </StyledDiv>
        </StyledSection>
      ))}
    </>
  );
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
