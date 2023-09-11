import Image from "next/image";
import styled from "styled-components";

export default function LogoutButton({ handleLogout }) {
  return (
    <StyledButton onClick={handleLogout}>
      <Image
        src="/logout.png"
        alt="logout icon from flaticon"
        width={20}
        height={20}
      />
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  padding: 0.25rem;
  margin-top: 0.75rem;
  margin-left: 0.75rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    color: aliceblue;
  }
`;
