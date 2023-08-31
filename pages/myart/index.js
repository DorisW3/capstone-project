import { styled } from "styled-components";
import PictureList from "../../components/PictureList";
import pictures from "../../lib/db.js";
import Head from "next/head";
import ImageUploadForm from "@/components/ImageUploadForm";
import ImageList from "@/components/ImageList";

export default function MyArt({ onToggleFavorite, isFavorite, images }) {
  return (
    <>
      <Heading>My Art</Heading>
      <Head>
        <title>Image Upload</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledMain>
        <StyledUpload>
          <ImageUploadForm />
        </StyledUpload>
        <ImageList />

        <PictureList
          pictures={pictures}
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
          images={images}
        />
      </StyledMain>
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: min(600px, 80%);
  margin-inline: auto;
  & ul {
    width: 100%;
  }
`;

const StyledUpload = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 4rem;
  margin-top: 2rem;
  margin-bottom: 3rem;
`;
