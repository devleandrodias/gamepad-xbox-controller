import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState, Fragment } from "react";
import styles from "../styles/Home.module.css";

// TODO: Quando o controle for desconectado parar o event loop

const Home: NextPage = () => {
  const [status, setStatus] = useState(false);

  const [gamepad, setGamepad] = useState<Gamepad | null>(null);

  if (typeof window !== "undefined") {
    window.addEventListener("gamepadconnected", (e) => {
      setGamepad(e.gamepad);
      gameLoop();
    });

    window.addEventListener("gamepaddisconnected", (e) => {
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
      <h2>Status: {gamepad?.connected ? "Conectado" : "Disconectado"}</h2>
      {gamepad && (
        <Fragment>
          <div>
            <div style={{ marginBottom: 25 }}>
              <span>ID: </span>
              <span>{gamepad.id}</span>
            </div>
            <div>
              <span>Bottuns</span>
              {gamepad.buttons.map((b, i) => {
                return (
                  <div>
                    <span>Button: {i} </span>
                    <span>touched: {b.touched ? "Sim" : "Não"} </span>
                    <span>pressed: {b.pressed ? "Sim" : "Não"} </span>
                    <span>value: {b.value} </span>
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
