import Link from "next/link";
import styled from "styled-components";

export default function Navbar() {
  return (
    <StyledNavigation>
      <StyledLink href={"/"}>Overview</StyledLink>
      <StyledLink href={"/myart"}>My Art</StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  background-color: gray;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: white;
  text-decoration: none;
`;
