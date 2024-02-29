import { useNavigate } from "react-router-dom";
import campaigns from "../data/campaigns/campaignBundler";
import { ScenarioType } from "../data/types";
import "../styles.css";
interface StorylineProps {
  campaignCode: string;
  setCampaignCode: React.Dispatch<React.SetStateAction<string>>;
  scenarioNumber: number;
  setScenarioNumber: React.Dispatch<React.SetStateAction<number>>;
}
export default function Storyline({
  campaignCode,
  setCampaignCode,
  scenarioNumber,
  setScenarioNumber,
}: StorylineProps) {
  const navigate = useNavigate();

  const selectedCampaign = campaigns[campaignCode];
  const selectedScenario = selectedCampaign.scenarios[scenarioNumber - 1];

  const renderCampaignButtons = () => {
    return Object.values(campaigns).map((camp, i) => (
      <option key={i} value={i}>
        {camp.title}
      </option>
    ));
  };

  const renderScenarioButtons = () => {
    return selectedCampaign.scenarios.map((scene: ScenarioType, i) => (
      <option key={i} value={i}>
        [{i + 1}] {scene.title}
      </option>
    ));
  };

  const renderHistory = () => {
    return selectedCampaign.scenarios
      .filter(
        (checkedScene) =>
          selectedCampaign.scenarios.indexOf(checkedScene) < scenarioNumber - 1
      )
      .map((checkedScene, i) => {
        return (
          <div key={i}>
            Scenario {i + 1}
            <div>Intro: {checkedScene.intro}</div>
            <div>Victory: {checkedScene.victory}</div>
          </div>
        );
      });
  };

  return (
    <>
      <h1>What is Voyager MTG?</h1>
      <p>
        <b>Voyager MTG</b> is a fan-created co-op format for{" "}
        <b>Magic: the Gathering</b> where you and your fellow planeswalkers team
        up to battle against AI opponents and level up your deck through the
        course of a storyline campaign. LEARN MORE (coming soon).
      </p>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <h4>Select your campaign:</h4>
          <select
            value={Object.keys(campaigns).indexOf(campaignCode)}
            onChange={(e) => {
              const newCampaignIndex = parseInt(e.target.value);
              const newCampaignCode = Object.keys(campaigns)[newCampaignIndex];
              setCampaignCode(newCampaignCode);
              setScenarioNumber(1);
            }}
          >
            {renderCampaignButtons()}
          </select>
        </div>
        <div>
          <h4>Select your scenario:</h4>
          <select
            value={scenarioNumber - 1}
            onChange={(e) => {
              const newScenarioNumber = parseInt(e.target.value) + 1;
              setScenarioNumber(newScenarioNumber);
            }}
          >
            {renderScenarioButtons()}
          </select>
        </div>
      </div>
      <h1>
        Campaign: [{campaignCode}] {selectedCampaign.title}
      </h1>
      <h3>{selectedCampaign.description}</h3>
      <h2>
        Current Scenario: [{scenarioNumber}] {selectedScenario.title}
      </h2>
      <h4>Description: {selectedScenario.intro}</h4>
      <h4>Objective: {selectedScenario.objective}</h4>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => navigate(`/scenario/${campaignCode}/${scenarioNumber}`)}
      >
        Begin Scenario
      </button>
      {scenarioNumber > 1 && <hr />}
      {scenarioNumber > 1 && renderHistory()}
    </>
  );
}
