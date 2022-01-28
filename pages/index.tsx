import { NextPage } from "next";
import { useState, Fragment } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [gamepad, setGamepad] = useState<Gamepad | null>(null);

  if (typeof window !== "undefined") {
    window.addEventListener("gamepadconnected", (e) => {
      setGamepad(e.gamepad);
      gameLoop();
    });

    window.addEventListener("gamepaddisconnected", () => {
      setGamepad(null);
    });
  }

  function gameLoop() {
    const gamepads = navigator.getGamepads();
    if (!gamepads) return;
    setGamepad(gamepads[0]);
    requestAnimationFrame(gameLoop);
  }

  return (
    <Fragment>
      <h1>Leandro Xbox One Controller</h1>
      <h2>Status: {gamepad?.connected ? "Connected" : "Disconnected"}</h2>
      {gamepad && (
        <Fragment>
          <div>
            <div style={{ marginBottom: 25 }}>
              <span>ID: </span>
              <span>{gamepad.id}</span>
            </div>
            <div
              style={{
                gap: 20,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              {gamepad.buttons.map((b, i) => {
                return (
                  <div
                    style={{
                      padding: 5,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      backgroundColor: b.pressed ? "lightgreen" : "lightgray",
                    }}
                  >
                    B{i}
                    <span style={{ opacity: b.value }}>{b.value}</span>
                  </div>
                );
              })}
            </div>
            <div>
              <span>Axes</span>
              <div>{gamepad.axes[0]}</div>
              <div>{gamepad.axes[1]}</div>
              <div>{gamepad.axes[2]}</div>
              <div>{gamepad.axes[3]}</div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
