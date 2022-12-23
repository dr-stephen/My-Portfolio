import Loader from "react-loaders";
import Head from "next/head";
import { useEffect, useState } from "react";
import { MainPage } from "../components";
import styles from "../styles/Home.module.scss";


export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  
  return (
    <>
      {loading ? (
        <Loader type="pacman" />
      ) : (
        <div className={styles.container}>
          <Head>
            <title>Home</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/asicon.ico" />
            <link
              rel="stylesheet"
              href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
              integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
              crossOrigin=""
            />
          </Head>

          <main className={styles.main}>
            <span className={`${styles.tags} ${styles.top__tags}`}>
              &lt;body&gt;
            </span>
            <MainPage />
            <span className={`${styles.tags} ${styles.bottom__tags}`}>
              &lt;/body&gt;                                            
              <br />
              <span className={styles.bottom__tag__html}>&lt;/html&gt;</span>
            </span>
          </main>
        </div>
      )}
    </>
  );
}

