import { useState } from "react";
import { styled } from "styled-components";

export default function FollowButton() {
  const [follow, setFollow] = useState(false);

  return (
    <StyledButton
      onClick={() => {
        setFollow(!follow);
      }}
    >
      {follow ? "unfollow" : "follow"}
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
