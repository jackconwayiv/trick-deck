import { useParams } from "react-router-dom";
import { campaigns } from "../data/campaigns";
import { colorDictionary } from "../data/dictionaries";
import { CampaignType, NexusType } from "../data/types";
import "../styles.css";
import Nexus from "./Nexus";
export default function Scenario() {
  const { campaign, scene } = useParams();

  const camp = campaigns.filter(
    (camp: CampaignType) => camp.code === campaign
  )[0];
  const scenario = camp.scenarios[parseInt(scene!) - 1];
  const renderNexii = () => {
    return scenario.nexii.map((nexus: NexusType, i) => {
      return <Nexus key={i} nexus={nexus} />;
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
          [{campaign}
          {scene}] {scenario.title}
        </div>
        <div>Objective: {scenario.objective}</div>
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
      </div>
    </div>
  );
}
