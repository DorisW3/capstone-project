import Image from "next/image.js";
import { styled } from "styled-components";
import pictures from "../db.js";
import StyledImage from "./StyledImage.js";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton.js";
import { useEffect, useState } from "react";
import FollowButton from "./FollowButton.js";

export default function Overview({ onToggleFavorite, images }) {
  const [shuffledPictures, setShuffledPictures] = useState([]);

  // the code within the useEffect I research on the internet
  useEffect(() => {
    // mischt die Reihenfolge der Bilder zufällig
    const shuffled = [...images].sort(() => Math.random() - 0.5);
    setShuffledPictures(shuffled);
  }, [images]);

  console.log(shuffledPictures);
  return (
    <ul>
      {images.map((picture) => (
        <StyledListItem key={picture.id}>
          <FavoriteButton
            onToggleFavorite={() => onToggleFavorite(picture.id)}
            isFavorite={picture.isFavorite}
          />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                width={16}
                height={18}
              >
                <path
                  fill="slategray"
                  d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                />
              </svg>{" "}
              {picture.username}
            </StyledUserName>
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
