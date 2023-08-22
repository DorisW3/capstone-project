import { useState } from "react";
import { styled } from "styled-components";

export default function FollowButton() {
  const [follow, setFollow] = useState(false);
  function handleToggle() {
    setFollow(!follow);
  }

  return (
    <StyledButton type="submit" onClick={handleToggle}>
      follow
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: slateblue;
  border-radius: 0.5em;
  margin: 0.5em 1em 3em 1em;
  padding: 0.25em 0.5em;
  color: white;
  text-decoration: none;
`;
