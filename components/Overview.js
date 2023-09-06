import styled from "styled-components";
import StyledImage from "./StyledImage.js";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton.js";
import { useEffect, useState } from "react";
import FollowButton from "./FollowButton.js";
import Image from "next/image";

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
            <FavoriteButton
              onToggleFavorite={() => onToggleFavorite(picture.id)}
              isFavorite={picture.isFavorite}
            />
            <StyledUserName>
              <Image
                src="/Artist.png"
                alt="artist icon from flaticon"
                width={24}
                height={24}
              />{" "}
              {picture.username}
            </StyledUserName>
            <FollowButton />
          </StyledContainer>
        </StyledListItem>
      ))}
    </StyledBody>
  );
}

const StyledBody = styled.ul`
  margin-top: 14rem;
`;

const StyledListItem = styled.li`
  position: relative;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: -2.75rem;
`;

const StyledUserName = styled.h2`
  text-align: center;
  font-weight: 400;
  font-size: 1.2rem;
  margin-bottom: 4rem;
  padding-top: 3.85rem;
`;
