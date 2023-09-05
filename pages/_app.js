import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import initialEntries from "@/lib/commentsdb";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import pictures from "@/lib/db";
import { SWRConfig } from "swr";
import Header from "@/components/Header";

// for image upload feature
async function fetcher(...args) {
  try {
    const response = await fetch(...args);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function App({ Component, pageProps }) {
  // ----- initial entires werden ge-updatet -> new entries können hinzugefügt werden
  const [entriesList, setEntriesList] = useLocalStorageState("initialEntries", {
    defaultValue: initialEntries,
  });

  function handleAddEntry(newEntry) {
    setEntriesList([newEntry, ...entriesList]);
  }

  const [images, setImages] = useLocalStorageState("staticDummyDataImages", {
    defaultValue: pictures,
  });

  function handleAddImage(newImage) {
    setImages([newImage, ...images]);
  }

  function handleToggleFavorite(id) {
    setImages(
      images.map((image) =>
        image.id === id ? { ...image, isFavorite: !image.isFavorite } : image
      )
    );
  }

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Layout>
          <Header>Art Connect</Header>
          <Component
            {...pageProps}
            handleAddEntry={handleAddEntry}
            entriesList={entriesList}
            onToggleFavorite={handleToggleFavorite}
            images={images}
            handleAddImage={handleAddImage}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}

const StyledAppName = styled.h1`
  color: var(--font-color);
  border-bottom: 2px solid var(--background-color);
  margin-bottom: 1rem;
  padding-bottom: 2rem;
`;
