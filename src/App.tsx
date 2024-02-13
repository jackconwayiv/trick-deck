import { useState } from "react";
import card from "./mkm.js";
import "./styles.css";
export default function App() {
  const [results, setResults] = useState<number[]>([]);

  const rollDice = (x: number) => {
    const numbers = Array.from({ length: x }, () => rollD8());
    setResults(numbers);
  };
  const rollD8 = () => {
    return Math.floor(Math.random() * 8) + 1;
  };

  const renderCard = () => {
    return Object.values(card).join(" ");
  };

  const renderKeypad = () => {
    return (
      <div className="keypad" justify-self="center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, i) => {
          return (
            <button onClick={() => rollDice(num)} key={i}>
              {num}
            </button>
          );
        })}
      </div>
    );
  };
  const renderRolls = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {results.map((num, i) => {
          return (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                key={i}
                className="roll"
                style={{
                  color: num < 3 ? "red" : "black",
                  backgroundColor: num < 3 ? "yellow" : "white",
                  margin: "5px",
                  padding: "5px",
                }}
              >
                {num}
              </span>
              <span style={{ fontSize: "10px" }}> {num < 3 ? i + 1 : ""}</span>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="App">
      <h1>⚡ Enemy Tricks 🎲</h1>
      <h3>Click to roll that many d8's:</h3>
      {renderKeypad()}
      {/* <h2>{renderCard()}</h2> */}
      <h2>{renderRolls()}</h2>
    </div>
  );
}
