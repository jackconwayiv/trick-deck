import { useState } from "react";
import trickDeck from "./mkm.js";
import "./styles.css";
export default function App() {
  type Log = { title?: string; text: string; color: string };
  type Color = "W" | "U" | "B" | "R" | "G";

  const [log, setLog] = useState<Log[]>([]);

  const colorDictionary = {
    W: { color: "#fff2cc", symbol: "☀️" },
    U: { color: "#cfe2f3", symbol: "💧" },
    B: { color: "#d9d2e9", symbol: "💀" },
    R: { color: "#f4cccc", symbol: "🔥" },
    G: { color: "#d9ead3", symbol: "🌳" },
  };

  const rollDice = (color: string) => {
    //reset the div scroll to topmost position on click
    const bgColor = log.length % 2 === 0 ? "#E1E1E1" : "#EDEDED";
    if (rollD8() < 3) {
      drawTrick(color);
    } else setLog([{ text: "All Clear", color: bgColor }, ...log]);
  };
  const rollD8 = () => {
    return Math.floor(Math.random() * 8) + 1;
  };

  const drawTrick = (color: string) => {
    const selectedCards = trickDeck.filter((card) => card.cost.includes(color));
    const index = Math.floor(Math.random() * selectedCards.length);
    const card = selectedCards[index];
    //refactor to do this without rewriting into newCard
    const newCard = {
      name: card.name,
      cost: `(${card.cost})`,
      text: card.text,
    };
    const newLogEntry = {
      color: colorDictionary[getColor(newCard.cost) as Color].color,
      title: `${newCard.name} ${newCard.cost}`,
      text: card.text,
    };
    setLog([newLogEntry, ...log]);
  };

  const getColor = (line: string) => {
    const chars = line.split("");
    const costIndex = chars.indexOf(")");
    return line[costIndex - 1];
  };

  const renderLog = () => {
    return log.map((entry, index) => (
      <div
        style={{
          margin: "10px",
          padding: "0",
          backgroundColor: entry.color,
          border: "1px black solid",
        }}
        key={index}
      >
        {entry.title && (
          <p style={{ margin: "5px", padding: "3px" }}>
            {entry.title?.toUpperCase()}
          </p>
        )}
        <p style={{ margin: "5px", padding: "3px" }}>{entry.text}</p>
      </div>
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
