import { useState } from "react";
import { colorDictionary, triggerDictionary } from "../data/dictionaries";
import { NexusType } from "../data/types";
import "../styles.css";
import Counter from "./Counter";
interface NexusProps {
  nexus: NexusType;
}

export default function Nexus({ nexus }: NexusProps) {
  const [isDead, setIsDead] = useState<boolean>(false);
  const renderCounters = () => {
    return nexus.counters.map((counter, i) => {
      return <Counter key={i} counter={counter} />;
    });
  };
  const renderText = () => {
    return nexus.text.map((text, i) => {
      return (
        <div key={i}>
          {triggerDictionary[text.trigger]}
          {text.text}
        </div>
      );
    });
  };
  return (
    <>
      <div
        style={{
          border: nexus.isEmblem ? "1px black dashed" : "1px black solid",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "30vw",
          minHeight: "30vh",
          backgroundColor: isDead
            ? "#BBBBBB"
            : colorDictionary[nexus.color].color,
          padding: "5px",
          margin: "5px",
        }}
      >
        <div>
          <div
            style={{
              margin: "0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <span style={{ fontSize: "24px", fontWeight: "bold" }}>
              {colorDictionary[nexus.color].symbol} {nexus.name}
            </span>
            {!nexus.isEmblem && (
              <button
                style={{ margin: "5px" }}
                onClick={() => setIsDead(!isDead)}
              >
                {isDead ? "dead" : "alive"}
              </button>
            )}
          </div>
          <div
            style={{
              margin: "0",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            {nexus.isEmblem ? "Emblem" : "Nexus"}
          </div>
          <hr />
        </div>
        {renderText()}

        <div>
          <hr />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            {renderCounters()}
          </div>
        </div>
      </div>
    </>
  );
}
