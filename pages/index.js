import Overview from "@/components/Overview";
import styled from "styled-components";

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
  & ul {
    width: 100vw;
  }
`;
