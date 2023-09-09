import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogoPages
        src="/logoPages2.0.png"
        alt="app-logo"
        width={414}
        height={81.5}
        sizes="(max-width: 768px) 100vw"
        priority={true}
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.section`
  display: flex;
  justify-content: center;
  position: sticky;
  top: -0.25rem;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const StyledLogoPages = styled(Image)`
  object-fit: contain;
`;
