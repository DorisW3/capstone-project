import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      {/* <StyledLogo
        src="/applogo.png"
        alt="app-logo"
        width={400}
        height={400}
        priority={true}
      /> */}
    </StyledHeader>
  );
}

const StyledHeader = styled.section`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const StyledLogo = styled(Image)`
  background: none;
  position: fixed;
  display: flex;
  justify-content: flex-start;
`;
