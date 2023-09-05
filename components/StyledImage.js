import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  object-fit: fill;
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export default StyledImage;
