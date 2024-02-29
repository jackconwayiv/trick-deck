import { useState } from "react";
import { useParams } from "react-router-dom";
import campaigns from "../data/campaigns/campaignBundler";
import { colorDictionary } from "../data/dictionaries";
import trickDeck from "../data/trickCards/trickBundler";
import { TrickCardType } from "../data/types";
import "../styles.css";
export default function TrickDeck() {
  const { campaignCode, scenarioNumber } = useParams();

  type Log = { title?: string; text: string; color: string; code?: string };
  type Color = "W" | "U" | "B" | "R" | "G" | "C"; //also add C and Z?

  const [log, setLog] = useState<Log[]>([]);

  const scenario =
    campaigns[campaignCode!].scenarios[parseInt(scenarioNumber!) - 1];
  const scenarioColors = scenario.nexii.map((nexus) => nexus.color);

  const determineCardColor = (cost: string) => {
    return cost.split("").pop() || "C";
  };

  const tricks = [...trickDeck[campaignCode!], ...trickDeck["CORE"]].filter(
    (card: TrickCardType) =>
      scenarioColors.indexOf(determineCardColor(card.cost)) > -1
  );
  //calculate 2-color pairs to include from nexii for given scenario

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
    // const selectedCards = trickDeck.filter((card) => card.cost.includes(color));
    const selectedCards = tricks.filter((card) => card.cost.includes(color));

    const index = Math.floor(Math.random() * selectedCards.length);
    const card = selectedCards[index];
    //refactor to do this without rewriting into newCard
    const newCard = {
      name: card.name,
      cost: `(${card.cost})`,
      text: card.text,
      code: card.code,
    };
    const newLogEntry = {
      color: colorDictionary[determineCardColor(card.cost) as Color].color,
      title: `${newCard.name} ${newCard.cost}`,
      text: card.text,
      code: card.code,
    };
    setLog([newLogEntry, ...log]);
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
          <>
            <p style={{ margin: "5px", padding: "3px" }}>
              {entry.title?.toUpperCase()}
            </p>
            <p style={{ margin: "3px", padding: "2px" }}>
              Instant - Trick ({entry.code})
            </p>
          </>
        )}
        <p style={{ margin: "5px", padding: "3px" }}>{entry.text}</p>
      </div>
    ));
  };

  const renderKeypad = () => {
    return (
      <div className="keypad">
        {["W", "U", "B", "R", "G"]
          .filter((color) => scenarioColors.indexOf(color) > -1)
          .map((color, i) => {
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
      <h3>Draw from the {campaignCode} Trick Deck:</h3>
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
