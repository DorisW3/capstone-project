import useSWR from "swr";
// we want to use the next Image component to display our cloudinary images
import Image from "next/image";
import styled from "styled-components";
// When setting up a detail page use the Next Link component to add the Linking
import Link from "next/link";

export default function ImageList() {
  // get image data (and error for error handling) via useSWR hook from the next api route
  const { data, error } = useSWR("/api/images");
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <StyledList>
      {/* map over our data.resources to get render every image returned*/}
      {data.resources?.map((image) => (
        <StyledListItem key={image.asset_id}>
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
        </StyledListItem>
      ))}
    </StyledList>
  );
}

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
`;
const StyledListItem = styled.li`
  margin-bottom: 2rem;
`;
const StyledImage = styled(Image)`
  object-fit: fill;
  width: 100%;
  height: 100%;
`;
