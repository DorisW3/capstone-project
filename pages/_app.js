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

  const [isFavoriteArt, setIsFavoriteArt] = useState([]);

  function handleToggleFavorite(slug) {
    setIsFavoriteArt((isFavoriteArt) => {
      const favorite = isFavoriteArt.find((favorite) => favorite.slug === slug);

      if (favorite) {
        return isFavoriteArt.map((favorite) =>
          favorite.slug === slug
            ? { ...favorite, isFavorite: !favorite.isFavorite }
            : favorite
        );
      }

      return [...isFavoriteArt, { slug, isFavorite: true }];
    });
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
          pictures={pictures}
          isFavoriteArt={isFavoriteArt}
          setIsFavoriteArt={setIsFavoriteArt}
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
