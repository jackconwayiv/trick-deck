import { useState } from "react";
import QRCode from "react-qr-code";
import { useNavigate, useParams } from "react-router-dom";
import campaigns from "../data/campaigns/campaignBundler";
import { colorDictionary } from "../data/dictionaries";
import { NexusType } from "../data/types";
import "../styles.css";
import Nexus from "./Nexus";

interface ScenarioProps {
  setCampaignCode: React.Dispatch<React.SetStateAction<string>>;
  setScenarioNumber: React.Dispatch<React.SetStateAction<number>>;
}
export default function Scenario({
  setScenarioNumber,
  setCampaignCode,
}: ScenarioProps) {
  const { campaignCode, scenarioNumber } = useParams();

  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  const navigate = useNavigate();
  const campaign = campaigns[campaignCode!];
  const scenario = campaign.scenarios[parseInt(scenarioNumber!) - 1];
  const trickDeckURL =
    window.location.origin +
    `/trickdeck/${campaignCode}/${parseInt(scenarioNumber!)}`;
  const handleQRClick = () => {
    navigate(`/trickdeck/${campaignCode}/${parseInt(scenarioNumber!)}`);
  };
  const renderNexii = () => {
    return scenario.nexii.map((nexus: NexusType, i) => {
      return <Nexus key={i} nexus={nexus} isRevealed={isRevealed} />;
    });
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "5px",
          padding: "5px",
        }}
      >
        <div style={{ fontSize: "30px", fontWeight: "bold" }}>
          [{campaignCode}
          {scenarioNumber}] {scenario.title}
        </div>
        <div>Objective: {scenario.objective}</div>
        <button
          onClick={() => {
            if (isRevealed) {
              setScenarioNumber(parseInt(scenarioNumber!));
              setCampaignCode(campaignCode!);
              navigate(`/victory/${campaignCode}/${scenarioNumber}`);
            } else {
              setIsRevealed(true);
            }
          }}
        >
          {isRevealed ? `Complete Scenario` : `Reveal Nexii`}
        </button>
        <div>
          Enemy Deck:
          {scenario.nexii.map((nexus, i) => (
            <span key={i}>{colorDictionary[nexus.color].symbol}</span>
          ))}
          ⚙️
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {renderNexii()}
        <QRCode
          style={{ margin: "50px" }}
          onClick={handleQRClick}
          size={150}
          value={trickDeckURL}
        />
      </div>
    </div>
  );
}
