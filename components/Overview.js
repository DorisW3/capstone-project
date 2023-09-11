import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FavoriteButton from "./FavoriteButton.js";
import FollowButton from "./FollowButton.js";
import StyledImage from "./StyledImage.js";

export default function Overview({ onToggleFavorite, images }) {
  const [shuffledPictures, setShuffledPictures] = useState([]);

  // the code within the useEffect I research on the internet
  useEffect(() => {
    // mischt die Reihenfolge der Bilder zufällig
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setShuffledPictures(shuffled);
  }, [images]);

  return (
    <StyledBody>
      {images.map((picture) => (
        <StyledListItem key={picture.id}>
          <Link href={`/details/${picture.id}`}>
            <StyledImage
              src={picture.image}
              alt={picture.theme}
              height={300}
              width={200}
              priority={true} // bei Bildern mit großer Datenmenge, verbessert der Code das laden
            />
          </Link>
          <StyledContainer>
            <StyledUserName>
              <Image
                src="/artist.png"
                alt="artist icon from flaticon"
                width={24}
                height={24}
              />{" "}
              {picture.username}
            </StyledUserName>
            <StyledDiv>
              <FavoriteButton
                onToggleFavorite={() => onToggleFavorite(picture.id)}
                isFavorite={picture.isFavorite}
              />

              <FollowButton />
            </StyledDiv>
          </StyledContainer>
        </StyledListItem>
      ))}
    </StyledBody>
  );
}

const StyledBody = styled.ul`
  margin-top: 4rem;
`;

const StyledListItem = styled.li`
  position: relative;
`;

const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: -0.5rem 0;
`;

const StyledUserName = styled.h2`
  text-align: center;
  font-size: 1rem;
  font-weight: 400;
  margin: 0.75rem 0 3rem 0.5rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: -1.75rem;
  margin-right: 0.5rem;
`;
