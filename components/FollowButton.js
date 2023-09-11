import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

export default function FollowButton() {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div>
      {isFollowing ? (
        <StyledImage
          src="/unfollow2.0.png"
          alt="unfollow"
          width={80}
          height={30}
          onClick={() => {
            setIsFollowing(!isFollowing);
          }}
        />
      ) : (
        <StyledImage
          src="/follow.png"
          alt="follow"
          width={80}
          height={30}
          onClick={() => {
            setIsFollowing(!isFollowing);
          }}
        />
      )}
    </div>
  );
}

const StyledImage = styled(Image)`
  cursor: pointer;
  /* &:hover {
    box-shadow: 10px 5px 5px var(--background-color);
  } */
`;
