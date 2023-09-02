import { styled } from "styled-components";
import StyledImage from "./StyledImage.js";
import Link from "next/link.js";
import FavoriteButton from "./FavoriteButton.js";
import useSWR from "swr";

export default function PictureList({ onToggleFavorite, images, submitImage }) {
  const { data, error } = useSWR("/api/images");
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  //console.log(data.data, "id");

  return (
    <>
      <StyledList submitImage={submitImage}>
        {/* map over our data.resources to get render every image returned*/}
        {data.resources?.map((image) => (
          <StyledListItem key={image.asset_id}>
            <FavoriteButton
              onToggleFavorite={() => onToggleFavorite(image.public_id)}
              isFavorite={image.isFavorite}
            />
            <Link href={`/images/${image.public_id}`} key={image.asset_id}>
              <StyledImage
                key={image.public_id}
                src={image.url}
                height={300}
                width={200}
                priority={true}
                alt={`Image-Id: ${image.public_id}`}
              />
            </Link>
            <StyledTheme>{image.theme}</StyledTheme>
          </StyledListItem>
        ))}
      </StyledList>

      <ul>
        {images
          .filter(
            (picture) =>
              picture.username === "dolorisi" &&
              picture.id >= 1 &&
              picture.id <= 8
          )
          .map((picture) => (
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
              <StyledTheme>{picture.theme}</StyledTheme>
            </StyledListItem>
          ))}
      </ul>
    </>
  );
}

const StyledTheme = styled.h2`
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;

const StyledListItem = styled.li`
  position: relative;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;
