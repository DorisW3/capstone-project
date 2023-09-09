import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import Artist from "./Artist";
import FilledArtist from "./FilledArtist";
import FilledGallery from "./FilledGallery";
import FilledStar from "./FilledStar";
import Gallery from "./Gallery";
import Star from "./Star";

export default function Navbar() {
  const router = useRouter();

  return (
    <StyledDiv>
      <StyledNavigation>
        <StyledLink href={"/"}>
          {router.pathname === "/" ? <FilledGallery /> : <Gallery />}
        </StyledLink>
        <StyledLink href={"/myart"}>
          {router.pathname === "/myart" ? <FilledArtist /> : <Artist />}
        </StyledLink>
        <StyledLink href={"/favorites"}>
          {router.pathname === "/favorites" ? <FilledStar /> : <Star />}
        </StyledLink>
      </StyledNavigation>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledNavigation = styled.nav`
  position: fixed;
  bottom: -0.1rem;
  width: min(600px, 100%);
  display: flex;
  justify-content: space-around;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-bottom: 0;
  border-top: solid 0.5px var(--border-color);
  background-color: white;
`;

const StyledLink = styled(Link)`
  background-color: none;
  padding: 0.5rem;
  text-decoration: none;
`;
