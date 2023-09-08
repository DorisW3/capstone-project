import Image from "next/image";
import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <Image
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
  position: sticky;
  top: -0.25rem;
  left: 0;
  width: 100vw;
  z-index: 1;
`;
