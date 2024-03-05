import { useNavigate, useParams } from "react-router-dom";
import campaigns from "../data/campaigns/campaignBundler";
import { writeStorage } from "../data/utils";
import "../styles.css";
interface VictoryProps {
  setCampaignCode: React.Dispatch<React.SetStateAction<string>>;
  setScenarioNumber: React.Dispatch<React.SetStateAction<number>>;
}
export default function Victory({
  setCampaignCode,
  setScenarioNumber,
}: VictoryProps) {
  const { scenarioNumber, campaignCode } = useParams();

  const navigate = useNavigate();

  const selectedCampaign = campaigns[campaignCode!];
  const selectedScenario =
    selectedCampaign.scenarios[parseInt(scenarioNumber!) - 1];

  const handleClick = (destination: string) => {
    setCampaignCode(campaignCode!);
    //don't advance scenario number if you're at the last scenario
    if (parseInt(scenarioNumber!) < selectedCampaign.scenarios.length) {
      setScenarioNumber(parseInt(scenarioNumber!) + 1);
      writeStorage(campaignCode!, parseInt(scenarioNumber!) + 1);
    } else {
      setScenarioNumber(parseInt(scenarioNumber!));
      writeStorage(campaignCode!, parseInt(scenarioNumber!));
    }
    destination === "lobby" ? navigate(`/`) : navigate(`/deckbuilding`);
  };

  return (
    <>
      <h1>
        Victory in {campaignCode} {scenarioNumber}!
      </h1>
      <h4>{selectedScenario.intro}</h4>
      <h2>{selectedScenario.victory}</h2>
      <button onClick={() => handleClick("deckbuilding")}>
        Check deckbuilding guide
      </button>
      <button onClick={() => handleClick("lobby")}>Head back to lobby</button>
    </>
  );
}
