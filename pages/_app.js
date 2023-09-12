import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Login from "@/components/Login";
import LogoutButton from "@/components/Logout";
import initialEntries from "@/lib/commentsdb";
import pictures from "@/lib/db";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import useLocalStorageState from "use-local-storage-state";
import GlobalStyle from "../styles";

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

  const [isLoggedIn, setIsLoggedIn] = useLocalStorageState("LoggedIn", {
    defaultValue: false,
  });

  function handleLogout() {
    setIsLoggedIn(false);
    router.push("/");
  }

  function handleDelete(idDeleteImage) {
    const isConfirmed = window.confirm("Are you sure?");

    if (isConfirmed) {
      setImages(images.filter((image) => image.id !== idDeleteImage));
      router.push("/myart");
    }
  }

  return (
    <>
      <SWRConfig value={{ fetcher }}>
        <GlobalStyle />

        {isLoggedIn ? <Header /> : false}
        {isLoggedIn ? <LogoutButton handleLogout={handleLogout} /> : false}
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
            handleLogout={handleLogout}
            handleDelete={handleDelete}
          />
        ) : null}
        {isLoggedIn ? <Layout /> : false}
      </SWRConfig>
    </>
  );
}
