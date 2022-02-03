import { NextPage } from "next";

import Link from "next/link";

import styles from "../../styles/Projects.module.css";

const Projects: NextPage = () => {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.projectCard}>
          <Link href="/projects/xbox-controller">
            <a>Xbox Controller</a>
          </Link>
        </div>
        <div className={styles.projectCard}>
          <Link href="/projects/project-1">
            <a>Project 1</a>
          </Link>
        </div>
        <div className={styles.projectCard}>
          <Link href="/projects/project-2">
            <a>Project 2</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
