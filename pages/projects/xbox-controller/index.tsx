import { NextPage } from "next";
import { useState } from "react";

const XboxController: NextPage = () => {
  const [gamepad, setGamepad] = useState<Gamepad | null>(null);

  const controllerMap = [
    { index: 0, name: "A" },
    { index: 1, name: "B" },
    { index: 2, name: "X" },
    { index: 3, name: "Y" },
    { index: 4, name: "LB" },
    { index: 5, name: "RB" },
    { index: 6, name: "LT" },
    { index: 7, name: "RT" },
    { index: 8, name: "Show Address Bar" },
    { index: 9, name: "Show Menu" },
    { index: 10, name: "Left Stick Pressed" },
    { index: 11, name: "Right Stick Pressed" },
    { index: 12, name: "Directional Up" },
    { index: 13, name: "Directional Down" },
    { index: 14, name: "Directional Left" },
    { index: 15, name: "Directional Right" },
    { index: 16, name: "Xbox Light-Up Logo" },
  ];

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
    <div
      style={{
        padding: "0px 50px",
      }}
    >
      <h1>
        Leandro Xbox One Controller (
        {gamepad?.connected ? "Connected" : "Disconnected"})
      </h1>
      {gamepad && (
        <div>
          <div style={{ marginBottom: 25 }}>
            <span>{gamepad.id}</span>
          </div>
          <div>
            <div
              style={{
                gap: 20,
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr",
              }}
            >
              {gamepad.buttons.map((b, i) => {
                return (
                  <div
                    style={{
                      padding: 15,
                      display: "flex",
                      borderRadius: 25,
                      alignItems: "center",
                      flexDirection: "column",
                      backgroundColor: b.pressed ? "lightgreen" : "lightgray",
                    }}
                  >
                    {controllerMap[i].name}: {b.value}
                  </div>
                );
              })}
            </div>
            <div
              style={{
                gap: 20,
                marginTop: 20,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
              }}
            >
              <div
                style={{
                  padding: 20,
                  display: "flex",
                  borderRadius: 500,
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "lightgrey",
                }}
              >
                <div>{gamepad.axes[0]}</div>
                <div>{gamepad.axes[1]}</div>
              </div>
              <div
                style={{
                  padding: 20,
                  display: "flex",
                  borderRadius: 500,
                  alignItems: "center",
                  flexDirection: "column",
                  backgroundColor: "lightgrey",
                }}
              >
                <div>{gamepad.axes[2]}</div>
                <div>{gamepad.axes[3]}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default XboxController;
