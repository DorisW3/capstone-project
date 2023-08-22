import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import initialEntries from "@/commentsdb";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  // ----- initial entires werden ge-updatet -> new entries können hinzugefügt werden
  const [entriesList, setEntriesList] = useLocalStorageState("initialEntries", {
    defaultValue: initialEntries,
  });

  function handleAddEntry(newEntry) {
    setEntriesList([newEntry, ...entriesList]);
  }
  // -----

  // ----- favorite button
  const [filledHeart, setFilledHeart] = useState(false);

  function handleToggle() {
    setFilledHeart(!filledHeart);
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
          handleToggle={handleToggle}
          filledHeart={filledHeart}
          setFilledHeart={setFilledHeart}
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
