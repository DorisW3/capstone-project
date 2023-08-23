import Image from "next/image.js";
import { styled } from "styled-components";
import pictures from "../db.js";
import StyledImage from "./StyledImage.js";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton.js";
import { useState } from "react";
import FollowButton from "./FollowButton.js";

export default function Overview() {
  return (
    <ul>
      {pictures.map((picture) => (
        <StyledListItem key={picture.id}>
          <FavoriteButton />
          <Link href={`/detailscomments/${picture.id}`}>
            <StyledImage
              src={picture.image}
              alt={picture.theme}
              height={300}
              width={200}
              priority={true} // bei Bildern mit großer Datenmenge, verbessert der Code das laden
            />
          </Link>
          <StyledContainer>
            <StyledUserName>{picture.username}</StyledUserName>
            <FollowButton />
          </StyledContainer>
        </StyledListItem>
      ))}
    </ul>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledUserName = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
`;

const StyledListItem = styled.li`
  position: relative;
`;
