import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactDOM from "react-dom";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHouse, faImage, faPalette } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <StyledNavigation>
      <StyledLink href={"/"}>
        <FontAwesomeIcon icon={faHouse} width={35} />
      </StyledLink>
      <StyledLink href={"/myart"}>
        <FontAwesomeIcon icon={faImage} width={35} />
      </StyledLink>
      <StyledLink href={"/favorites"}>
        <FontAwesomeIcon icon={faPalette} width={35} />
      </StyledLink>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: 0;
  width: min(600px, 100%);
  display: flex;
  justify-content: space-around;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  background-color: var(--background-color);
`;

const StyledLink = styled(Link)`
  background-color: none;
  padding: 0.5rem;
  color: var(--font-color);
  text-decoration: none;
`;
