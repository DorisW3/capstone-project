import Link from "next/link";
import styled from "styled-components";

export default function Navbar() {
  return (
    <StyledNavigation>
      <StyledLink href={"/"}>Overview</StyledLink>
      <StyledLink href={"/myart"}>My Art</StyledLink>
      <StyledLink href={"/favorites"}>Favorites</StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  width: min(600px, 100%);
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

const StyledLink = styled(Link)`
  background-color: slateblue;
  border-radius: 0.5rem;
  padding: 0.5rem;
  color: white;
  text-decoration: none;
`;
