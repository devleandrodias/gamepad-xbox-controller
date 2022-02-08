import Image from "next/image";

import me from "../../../../public/me.jpg";

import styles from "../../../../styles/Home.module.css";

export const CardAboutMe = () => {
  return (
    <div className={styles.card}>
      <div
        style={{
          display: "flex",
          height: "300px",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            padding: "0px 25px 0px 0px",
            justifyContent: "space-around",
          }}
        >
          <span className={styles.title}>About Me</span>
          <span className={styles.subtitle}>I am a Software Engineer</span>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
            quisquam esse eos vero consequatur a, rem, nisi repudiandae eligendi
            minima assumenda? Aliquam voluptate quisquam labore similique, ad
            accusamus tempore quod.
          </p>
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
          }}
        >
          <Image quality={100} src={me} alt="eu mesmo" />
        </div>
      </div>
    </div>
  );
};
