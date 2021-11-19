import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
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
            Hi, I&apos;m <span style={{ color: "blueviolet" }}>Khoudir</span>!
          </h1>

          <p className={styles.description}>
            I&apos;m a full stack javaScript developer specialised in Next.js,
            React.js, Node.js, Express.js, Mongodb.
          </p>
        </div>
        <div>Avatar</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/yakhousam"
          rel="noopener noreferrer"
          target="_blank"
        >
          github
        </a>
      </footer>
    </div>
  );
};

export default Home;
