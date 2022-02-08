import { GridGallery } from "./components/grid-gallery";

import styles from "../../../../styles/Home.module.css";
import photosMock from "../../../../mock/photos.mock.json";

export const CardGallery = () => {
  return (
    <div className={styles.card}>
      <span
        className={styles.title}
        style={{
          display: "flex",
          marginBottom: "25px",
          justifyContent: "center",
        }}
      >
        My Gallery
      </span>
      <GridGallery photos={photosMock} />
    </div>
  );
};
