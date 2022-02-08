type IGalleryPhoto = {
  url: string;
  title: string;
  subtitle: string;
  tags: string[];
};

type IGridGalleryProps = {
  photos: IGalleryPhoto[];
};

import Image from "next/image";

const tags = ["mobile", "dark", "app", "arduino", "robotic"];

import styles from "../../../../../styles/Home.module.css";

export const GridGallery = ({ photos }: IGridGalleryProps) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          marginBottom: 30,
          justifyContent: "space-evenly",
        }}
      >
        {tags.map((tag) => (
          <span
            style={{
              fontWeight: 600,
              fontSize: "1.3em",
              cursor: "pointer",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridGap: "25px",
          gridTemplateColumns: "1fr 1fr 1fr",
        }}
      >
        {photos.map((x) => {
          return (
            <Image
              className={styles.roundImage}
              key={x.url}
              src={x.url}
              alt={x.title}
              width={200}
              height={275}
              quality={100}
            />
          );
        })}
      </div>
    </>
  );
};
