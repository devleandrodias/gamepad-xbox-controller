import { NextPage } from "next";
import { Header } from "../app/layout/header.layout";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <main className={styles.container}>
        <div className={styles.card}>
          <Header />
        </div>
        <div className={styles.card}>Home</div>
        <div className={styles.card}>About Me</div>
        <div className={styles.card}>Projects</div>
        <div className={styles.card}>Gallery</div>
        <div className={styles.card}>Contact</div>
      </main>
    </div>
  );
};

export default Home;
