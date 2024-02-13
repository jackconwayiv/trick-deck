import { useState } from "react";
import trickDeck from "./mkm.js";
import "./styles.css";
export default function App() {
  const [log, setLog] = useState<string[]>([]);

  type Color = "W" | "U" | "B" | "R" | "G";

  const colorDictionary = {
    W: { color: "#FFFFEE", symbol: "☀️" },
    U: { color: "#EEEEFF", symbol: "💧" },
    B: { color: "#EEEEEE", symbol: "💀" },
    R: { color: "#FFEEEE", symbol: "🔥" },
    G: { color: "#EEFFEE", symbol: "🌳" },
  };

  const rollDice = (color: string) => {
    if (rollD8() < 3) {
      drawTrick(color);
    } else setLog(["All Clear", ...log]);
  };
  const rollD8 = () => {
    return Math.floor(Math.random() * 8) + 1;
  };

  const drawTrick = (color: string) => {
    const selectedCards = trickDeck.filter((card) => card.cost.includes(color));
    const index = Math.floor(Math.random() * selectedCards.length);
    const card = selectedCards[index];
    const newCard = {
      name: card.name,
      cost: `(${card.cost})`,
      text: card.text,
    };
    const newLogLine = Object.values(newCard).join(" ");
    setLog([newLogLine, ...log]);
  };

  const getColor = (line: string) => {
    const chars = line.split("");
    const costIndex = chars.indexOf(")");
    return line[costIndex - 1];
  };

  const renderLog = () => {
    return log.map((line, index) => (
      <p
        style={{
          padding: "5px",
          backgroundColor: line.includes(")")
            ? colorDictionary[getColor(line) as Color].color
            : "#FEFEFE",
          border: index === 0 ? "1px black solid" : "1px gray dashed",
        }}
        key={index}
      >
        {line}
      </p>
    ));
  };

  const renderKeypad = () => {
    return (
      <div className="keypad" justify-self="center">
        {["W", "U", "B", "R", "G"].map((color, i) => {
          return (
            <button
              style={{
                backgroundColor: colorDictionary[color as Color].color,
                border: "1px black solid",
              }}
              onClick={() => rollDice(color as Color)}
              key={i}
            >
              {colorDictionary[color as Color].symbol}
            </button>
          );
        })}
      </div>
    );
  };
  return (
    <div className="App">
      <h1>⚡ Instant -- Trick 🎲</h1>
      <h3>Draw from the Trick Deck:</h3>
      {renderKeypad()}
      <div
        style={{
          margin: "auto",
          maxHeight: "65vh",
          overflowY: "auto",
          width: "90vw",
          padding: "10px",
        }}
      >
        {renderLog()}
      </div>
    </div>
  );
}
