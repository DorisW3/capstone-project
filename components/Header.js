import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogo
        src="/appLogo2.png"
        alt="app-logo"
        width={600}
        height={250}
        priority={true}
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
`;

const StyledLogo = styled(Image)`
  background: none;
  position: fixed;
  display: flex;
  justify-content: flex-start;
`;
