import styled from "styled-components";
import Overview from "@/components/Overview";

export default function Homepage({ onToggleFavorite, isFavorite, images }) {
  return (
    <StyledMain>
      <Overview
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
        images={images}
      />
    </StyledMain>
  );
}

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
