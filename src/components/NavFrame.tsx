import { Outlet, useNavigate } from "react-router-dom";
import { CampaignType, ScenarioType } from "../data/types";
import "../styles.css";
interface NavFrameProps {
  campaign: CampaignType;
  scene: ScenarioType;
}
export default function NavFrame({ campaign, scene }: NavFrameProps) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
          ⚡ Voyager MTG 🎲
        </h1>
        <div style={{ padding: "5px", margin: "5px" }}>
          <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            storyline
          </span>{" "}
          |{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate(
                `/scenario/${campaign.code}/${
                  campaign.scenarios.indexOf(scene) + 1
                }`
              )
            }
          >
            scenario
          </span>{" "}
          |{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/deckbuilding")}
          >
            deckbuilding
          </span>{" "}
          |{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/glossary")}
          >
            glossary
          </span>{" "}
          |{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/trickdeck")}
          >
            tricks
          </span>
        </div>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}
