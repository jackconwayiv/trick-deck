import { campaigns } from "../data/campaigns";
import { CampaignType, ScenarioType } from "../data/types";
import "../styles.css";
interface StorylineProps {
  campaign: CampaignType;
  setCampaign: React.Dispatch<React.SetStateAction<CampaignType>>;
  scene: ScenarioType;
  setscene: React.Dispatch<React.SetStateAction<ScenarioType>>;
}
export default function Storyline({
  campaign,
  setCampaign,
  scene,
  setscene,
}: StorylineProps) {
  const renderCampaignButtons = () => {
    return campaigns.map((camp, i) => (
      <button
        style={{ cursor: "pointer" }}
        key={i}
        onClick={() => setCampaign(camp)}
      >
        {camp.title}
      </button>
    ));
  };
  const renderScenarioButtons = () => {
    return campaign.scenarios.map((scene: ScenarioType, i) => (
      <button
        style={{ cursor: "pointer" }}
        key={i}
        onClick={() => setscene(scene)}
      >
        [{campaign.scenarios.indexOf(scene) + 1}] {scene.title}
      </button>
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
      <h1>Campaign: {campaign.title}</h1>
      <h3>{campaign.description}</h3>
      <h2>Current Scenario: {scene.title}</h2>
      <h4>Description: {scene.intro}</h4>
      <h4>Objective: {scene.objective}</h4>
      <hr />
      <h4>Select your campaign:</h4>
      {renderCampaignButtons()}
      <h4>Select your scenario:</h4>
      {renderScenarioButtons()}
      <hr />
      {renderHistory()}
    </>
  );
}
