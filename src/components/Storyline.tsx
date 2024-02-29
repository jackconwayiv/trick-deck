import { useNavigate } from "react-router-dom";
import { campaigns } from "../data/campaigns";
import { CampaignType, ScenarioType } from "../data/types";
import "../styles.css";
interface StorylineProps {
  campaign: CampaignType;
  setCampaign: React.Dispatch<React.SetStateAction<CampaignType>>;
  scene: ScenarioType;
  setScene: React.Dispatch<React.SetStateAction<ScenarioType>>;
}
export default function Storyline({
  campaign,
  setCampaign,
  scene,
  setScene,
}: StorylineProps) {
  const navigate = useNavigate();
  const renderCampaignButtons = () => {
    return campaigns.map((camp, i) => (
      <option key={i} value={i}>
        {camp.title}
      </option>
    ));
  };
  const renderScenarioButtons = () => {
    return campaign.scenarios.map((scene: ScenarioType, i) => (
      <option key={i} value={i}>
        [{campaign.scenarios.indexOf(scene) + 1}] {scene.title}
      </option>
    ));
  };
  const renderHistory = () => {
    return campaign.scenarios
      .filter(
        (checkedScene) =>
          campaign.scenarios.indexOf(checkedScene) <
          campaign.scenarios.indexOf(scene)
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
            value={campaigns.indexOf(campaign)}
            onChange={(e) => {
              setCampaign(campaigns[parseInt(e.target.value)]);
              setScene(campaigns[parseInt(e.target.value)].scenarios[0]);
            }}
          >
            {renderCampaignButtons()}
          </select>
        </div>
        <div>
          <h4>Select your scenario:</h4>
          <select
            value={campaign.scenarios.indexOf(scene)}
            onChange={(e) =>
              setScene(campaign.scenarios[parseInt(e.target.value)])
            }
          >
            {renderScenarioButtons()}
          </select>
        </div>
      </div>
      <h1>
        Campaign: [{campaign.code}] {campaign.title}
      </h1>
      <h3>{campaign.description}</h3>
      <h2>
        Current Scenario: [{campaign.scenarios.indexOf(scene) + 1}]{" "}
        {scene.title}
      </h2>
      <h4>Description: {scene.intro}</h4>
      <h4>Objective: {scene.objective}</h4>
      <button
        style={{ cursor: "pointer" }}
        onClick={() =>
          navigate(
            `/scenario/${campaign.code}/${
              campaign.scenarios.indexOf(scene) + 1
            }`
          )
        }
      >
        Begin Scenario
      </button>
      {campaign.scenarios.indexOf(scene) > 0 && <hr />}
      {campaign.scenarios.indexOf(scene) > 0 && renderHistory()}
    </>
  );
}
