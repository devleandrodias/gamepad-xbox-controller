import Link from "next/link";

import styles from "../../styles/layout/header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.link}>
        <Link href="/">
          <a className={styles.teste}>Home</a>
        </Link>
      </div>
      <div className={styles.link}>
        <Link href="/about-me">
          <a>About Me</a>
        </Link>
      </div>
      <div className={styles.link}>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </div>
      <div className={styles.link}>
        <Link href="/gallery">
          <a>Gallery</a>
        </Link>
      </div>
      <div className={styles.link}>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};
