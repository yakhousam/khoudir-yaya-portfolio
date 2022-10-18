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
          content="khoudir yaya, freelancer full-stack React, Node, NextJS, ExpessJS, Monogdb"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <h1 className={styles.title}>
            Hi, I&apos;m <span className={styles.myname}>Khoudir</span>!
          </h1>

          <p className={styles.description}>
            I&apos;m a full-stack JavaScript developer with expertise in
            Next.js, React.js, Node.js, Express.js and Mongodb.
          </p>
        </div>
        <div className={styles.avatar} />
      </main>

      <footer className={styles.footer}>
        <a
          aria-label="Khoudir Yaya FreeCodeCamp account"
          href="https://www.freecodecamp.org/yakhousam"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaFreeCodeCamp />
        </a>
        <a
          aria-label="Khoudir Yaya github account"
          href="https://github.com/yakhousam"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a
          aria-label="Khoudir Yaya twitter account"
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
