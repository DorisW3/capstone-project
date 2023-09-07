import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  object-fit: fill;
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

export default StyledImage;
