import Link from "next/link";
import styled from "styled-components";
import Star from "./Star";
import { useRouter } from "next/router";
import FilledStar from "./FilledStar";
import Artist from "./Artist";
import Gallery from "./Gallery";
import FilledGallery from "./FilledGallery";
import FilledArtist from "./FilledArtist";

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
  bottom: 0;
  width: min(600px, 100%);
  display: flex;
  justify-content: space-around;
  padding-top: 1.5rem;
  padding-bottom: 1rem;
  margin-bottom: 0;
  border-top: solid 2px var(--border-color);
  background-color: white;
`;

const StyledLink = styled(Link)`
  background-color: none;
  padding: 0.5rem;
  text-decoration: none;
`;
