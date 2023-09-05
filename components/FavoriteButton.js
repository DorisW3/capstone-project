import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";

export default function FavoriteButton({ onToggleFavorite, isFavorite }) {
  return (
    <StyledButton type="button" onClick={onToggleFavorite}>
      <FontAwesomeIcon
        icon={faPalette}
        width={35}
        color={
          isFavorite === true ? "var(--violette-color)" : "var(--font-color)"
        }
      />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border: none;
  background: transparent;
`;
