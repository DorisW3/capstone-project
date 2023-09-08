import styled from "styled-components";

export default function LogoutButton({ handleLogout }) {
  return <StyledButton onClick={handleLogout}>Logout</StyledButton>;
}

const StyledButton = styled.button`
  display: flex;
  padding: 0.25rem;
`;
