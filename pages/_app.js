import { useState } from "react";
import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import initialEntries from "@/commentsdb";

export default function App({ Component, pageProps }) {
  const [entriesList, setEntriesList] = useState(initialEntries);

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
