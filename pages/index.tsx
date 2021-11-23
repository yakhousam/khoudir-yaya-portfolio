import type { NextPage } from "next";
import Head from "next/head";
import { FaGithub, FaFreeCodeCamp, FaTwitter } from "react-icons/fa";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Khoudir Yaya portfolio</title>
        <meta
          name="description"
          content="I'm a full stack javaScript developer specialised in Next.js, React.js, Node.js, Express.js, Mongodb"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            Hi, I&apos;m <span className={styles.myname}>Khoudir</span>!
          </h1>

          <p className={styles.description}>
            I&apos;m a full stack javaScript developer specialised in Next.js,
            React.js, Node.js, Express.js, Mongodb.
          </p>
        </div>
        <div className={styles.avatar} />
      </main>

      <footer className={styles.footer}>
        <a
          aria-label="Link to Khoudir Yaya FreeCodeCamp account"
          href="https://www.freecodecamp.org/yakhousam"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFreeCodeCamp />
        </a>
        <a
          aria-label="Link to Khoudir Yaya github account"
          href="https://github.com/yakhousam"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          aria-label="Link to Khoudir Yaya twitter account"
          href="https://twitter.com/yksamir"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaTwitter />
        </a>
      </footer>
    </div>
  );
};

export default Home;
