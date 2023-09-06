import styled from "styled-components";
import FilledStar from "./FilledStar";
import Star from "./Star";

export default function FavoriteButton({ onToggleFavorite, isFavorite }) {
  return (
    <StyledButton type="button" onClick={onToggleFavorite}>
      {isFavorite === true ? <FilledStar /> : <Star />}
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
