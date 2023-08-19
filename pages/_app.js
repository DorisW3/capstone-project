import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import initialEntries from "@/commentsdb";
import useLocalStorageState from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [entriesList, setEntriesList] = useLocalStorageState("initialEntries", {
    defaultValue: initialEntries,
  });

  function handleAddEntry(newEntry) {
    setEntriesList([newEntry, ...entriesList]);
  }

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          handleAddEntry={handleAddEntry}
          entriesList={entriesList}
        />
      </Layout>
    </>
  );
}
