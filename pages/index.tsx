import type { NextPage } from "next";
import Head from "next/head";
import {
  FaGithub,
  FaFreeCodeCamp,
  FaTwitter,
  FaLinkedin,
  FaUser,
} from "react-icons/fa";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const currentYear = new Date().getFullYear();

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
        <div className={styles.socialLinks}>
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
          <a
            aria-label="Khoudir Yaya LinkedIn profile"
            href="https://www.linkedin.com/in/khoudir-yaya/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a
            aria-label="Khoudir Yaya PeoplePerHour profile"
            href="https://pph.me/yakhousam"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaUser />
          </a>
        </div>
        <p className={styles.copyright}>
          © {currentYear} Yaya Khoudir — Auto-Entrepreneur. Creator of{" "}
          <a
            href="https://www.affirvia.life/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.affriviaLink}
          >
            Affirvia
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
