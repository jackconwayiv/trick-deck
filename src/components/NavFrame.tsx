import { Outlet, useNavigate } from "react-router-dom";
import "../styles.css";
interface NavFrameProps {
  campaignCode: string;
  scenarioNumber: number;
}
export default function NavFrame({
  campaignCode,
  scenarioNumber,
}: NavFrameProps) {
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
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/welcome")}
          >
            👋 welcome
          </span>{" "}
          |{" "}
          <span style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
            🏠 storyline
          </span>{" "}
          |{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate(`/scenario/${campaignCode}/${scenarioNumber}`)
            }
          >
            ⚔️ scenario
          </span>{" "}
          |{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/deckbuilding")}
          >
            🃏 deckbuilding
          </span>{" "}
          |{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/printandplay")}
          >
            🖨️ print & play
          </span>{" "}
          |{" "}
          <span
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/glossary")}
          >
            📖 glossary
          </span>
        </div>
      </div>
      <hr />
      <Outlet />
    </div>
  );
}
