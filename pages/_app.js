import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import initialEntries from "@/commentsdb";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";
import pictures from "@/db";

export default function App({ Component, pageProps }) {
  // ----- initial entires werden ge-updatet -> new entries können hinzugefügt werden
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
        <StyledAppName>Art Connect</StyledAppName>
        <Component
          {...pageProps}
          handleAddEntry={handleAddEntry}
          entriesList={entriesList}
          pictures={pictures}
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

/*pictureWithInitialEntires === routerId
const pictureWithInitialEntires = pictures.filter(
    (picture) => picture.id === 1
  );
*/
