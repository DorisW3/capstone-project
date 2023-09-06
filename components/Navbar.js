import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import FilledStar from "./FilledStar";
import Star from "./Star";
import { useRouter } from "next/router";

export default function Navbar({ isChosen }) {
  const router = useRouter();

  return (
    <StyledNavigation>
      <StyledLink href={"/"}>
        <Image
          src="/gallery.png"
          alt="gallery icon from flaticon"
          width={35}
          height={35}
        />
      </StyledLink>
      <StyledLink href={"/myart"}>
        <Image
          src="/Artist.png"
          alt="artist icon from flaticon"
          width={35}
          height={35}
        />
      </StyledLink>
      <StyledLink
        href={"/favorites"}
        isActive={router.pathname === "/favorite" ? <FilledStar /> : <Star />}
      >
        {isChosen === true ? <FilledStar /> : <Star />}
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
  margin-bottom: 0;
  border-top: solid 2px var(--border-color);
  background-color: white;
`;

const StyledLink = styled(Link)`
  background-color: none;
  padding: 0.5rem;
  text-decoration: none;
`;
