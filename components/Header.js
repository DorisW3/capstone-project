import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo
        src="/logoPages2.0.png"
        alt="app-logo"
        width={600}
        height={100}
        priority={true}
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.section`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const StyledLogo = styled(Image)`
  display: flex;
  border-bottom: 2px solid var(--border-color);
`;
