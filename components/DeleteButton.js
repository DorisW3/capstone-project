import Image from "next/image";
import { styled } from "styled-components";

export default function DeleteButton({ handleDelete }) {
  return (
    <StyledButton type="button" onClick={handleDelete}>
      <Image
        src="/delete.png"
        alt="trash icon from flaticon"
        width={20}
        height={20}
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
