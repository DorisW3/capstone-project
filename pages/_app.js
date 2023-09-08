import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import initialEntries from "@/lib/commentsdb";
import useLocalStorageState from "use-local-storage-state";
import pictures from "@/lib/db";
import { SWRConfig } from "swr";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import { useState } from "react";
import Login from "@/components/Login";

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
  const router = useRouter();
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

  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />

        <Header />
        {isLoggedIn ? null : <Login setIsLoggedIn={setIsLoggedIn} />}
        {isLoggedIn ? (
          <Component
            {...pageProps}
            handleAddEntry={handleAddEntry}
            entriesList={entriesList}
            onToggleFavorite={handleToggleFavorite}
            images={images}
            handleAddImage={handleAddImage}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />
        ) : null}
        <Layout />
      </SWRConfig>
    </>
  );
}
