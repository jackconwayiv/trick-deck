import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Deckbuilding from "./components/Deckbuilding";
import Glossary from "./components/Glossary";
import NavFrame from "./components/NavFrame";
import Scenario from "./components/Scenario";
import Storyline from "./components/Storyline";
import TrickDeck from "./components/TrickDeck";
import { akhCampaign } from "./data/campaigns";
import { CampaignType, ScenarioType } from "./data/types";

function App() {
  const [campaign, setCampaign] = useState<CampaignType>(akhCampaign);
  const [scene, setscene] = useState<ScenarioType>(akhCampaign.scenarios[0]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<NavFrame campaign={campaign} scene={scene} />}
        >
          <Route
            index
            element={
              <Storyline
                campaign={campaign}
                setCampaign={setCampaign}
                scene={scene}
                setscene={setscene}
              />
            }
          />
          <Route path="trickdeck" element={<TrickDeck />} />
          <Route path="deckbuilding" element={<Deckbuilding />} />
          <Route path="glossary" element={<Glossary />} />
          <Route path="scenario/:campaign/:scene" element={<Scenario />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
