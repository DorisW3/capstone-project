import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import initialEntries from "@/lib/commentsdb";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import pictures from "@/lib/db";
import { useState } from "react";
import { SWRConfig } from "swr";

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

export default function App({ Component, pageProps, submitImage }) {
  // ----- initial entires werden ge-updatet -> new entries können hinzugefügt werden
  const [entriesList, setEntriesList] = useLocalStorageState("initialEntries", {
    defaultValue: initialEntries,
  });

  function handleAddEntry(newEntry) {
    setEntriesList([newEntry, ...entriesList]);
  }

  const [images, setImages] = useState(pictures);

  //update function

  function handleToggleFavorite(id) {
    setImages(
      images.map((image) =>
        image.id === id ? { ...image, isFavorite: !image.isFavorite } : image
      )
    );
  }

  //<SWRConfig value={{ fetcher }}> for image upload feature
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />
        <Layout>
          <StyledAppName>Art Connect</StyledAppName>
          <Component
            {...pageProps}
            handleAddEntry={handleAddEntry}
            entriesList={entriesList}
            onToggleFavorite={handleToggleFavorite}
            images={images}
            setImages={setImages}
            submitImage={submitImage}
          />
        </Layout>
      </SWRConfig>
    </>
  );
}

const StyledAppName = styled.h1`
  color: slateblue;
  border-bottom: 2px solid slategray;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
`;
