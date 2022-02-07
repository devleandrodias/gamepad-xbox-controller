import { NextPage } from "next";
import { Header } from "../app/layout/header.layout";

import { CardHome } from "../app/pages/home/cards/card-home";
import { CardContact } from "../app/pages/home/cards/card-contact";
import { CardGallery } from "../app/pages/home/cards/card-gallery";
import { CardProjects } from "../app/pages/home/cards/card-projects";
import { CardContactMe } from "../app/pages/home/cards/card-about-me";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <main className={styles.container}>
        <div className={styles.card}>
          <Header />
        </div>
        <CardHome />
        <CardContactMe />
        <CardProjects />
        <CardGallery />
        <CardContact />
      </main>
    </div>
  );
};

export default Home;
