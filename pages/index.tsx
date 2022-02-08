import { NextPage } from "next";
import { Header } from "../app/layout/header.layout";

import { CardHome } from "../app/pages/home/cards/card-home";
import { CardContact } from "../app/pages/home/cards/card-contact";
import { CardAboutMe } from "../app/pages/home/cards/card-about-me";
import { CardProjects } from "../app/pages/home/cards/card-projects";

import styles from "../styles/Home.module.css";

import { CardGallery } from "./_app/home/gallery";

const Home: NextPage = () => {
  return (
    <div>
      <main className={styles.container}>
        <div className={styles.card}>
          <Header />
        </div>
        <CardHome />
        <CardAboutMe />
        <CardProjects />
        <CardGallery />
        <CardContact />
      </main>
    </div>
  );
};

export default Home;
