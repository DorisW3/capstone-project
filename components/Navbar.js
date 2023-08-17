import Link from "next/link";
import styled from "styled-components";

export default function Navbar() {
  return (
    <StyledNavigation>
      <Link href={"/index.js"}>Overview</Link>
      <Link href={"/myart.js"}>My Art</Link>
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
