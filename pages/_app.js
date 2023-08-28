import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import initialEntries from "@/commentsdb";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import pictures from "@/db";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  // ----- initial entires werden ge-updatet -> new entries können hinzugefügt werden
  const [entriesList, setEntriesList] = useLocalStorageState("initialEntries", {
    defaultValue: initialEntries,
  });

  function handleAddEntry(newEntry) {
    setEntriesList([newEntry, ...entriesList]);
  }

  const [images, setImages] = useState(pictures);

  function handleToggleFavorite(id) {
    setImages(
      images.map((image) =>
        image.id === id ? { ...image, isFavorite: !image.isFavorite } : image
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <StyledAppName>Art Connect</StyledAppName>
        <Component
          {...pageProps}
          handleAddEntry={handleAddEntry}
          entriesList={entriesList}
          onToggleFavorite={handleToggleFavorite}
          images={images}
        />
      </Layout>
    </>
  );
}

const StyledAppName = styled.h1`
  color: slateblue;
  border-bottom: 2px solid slategray;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
`;
