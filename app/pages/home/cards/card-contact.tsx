import styles from "../../../../styles/Home.module.css";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookMessenger,
} from "react-icons/fa";

export const CardContact = () => {
  return (
    <div className={styles.card}>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            height: "300px",
            flex: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <span className={styles.title}>Contact Me</span>
          <span
            style={{
              fontSize: "3em",
              fontWeight: 800,
            }}
          >
            Realize your dream with me
          </span>
          <div
            style={{
              display: "flex",
            }}
          >
            <FaLinkedin style={{ fontSize: 25, marginRight: 20 }} />
            <FaInstagram style={{ fontSize: 25, marginRight: 20 }} />
            <FaFacebookMessenger style={{ fontSize: 25, marginRight: 20 }} />
            <FaGithub style={{ fontSize: 25, marginRight: 20 }} />
          </div>
        </div>
        <div
          style={{
            flex: "60%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <input
              style={{
                width: "50%",
              }}
              type="text"
              placeholder="First name"
            />
            <input
              style={{
                width: "50%",
              }}
              type="text"
              placeholder="Last name"
            />
          </div>
          <div>
            <input
              style={{
                width: "50%",
              }}
              type="text"
              placeholder="Email address"
            />
            <input
              style={{
                width: "50%",
              }}
              type="text"
              placeholder="Subject"
            />
          </div>
          <textarea placeholder="Message" />
          <button
            style={{
              padding: 15,
              marginTop: 25,
              color: "#fff",
              fontSize: "1.1em",
              fontWeight: 700,
              border: "none",
              borderRadius: 10,
              width: "30%",
              background: "linear-gradient(to right, #d61a5e 0%, #ff8c05 100%)",
            }}
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
