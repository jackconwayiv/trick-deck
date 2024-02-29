import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Deckbuilding from "./components/Deckbuilding";
import Glossary from "./components/Glossary";
import NavFrame from "./components/NavFrame";
import Scenario from "./components/Scenario";
import Storyline from "./components/Storyline";
import TrickDeck from "./components/TrickDeck";

function App() {
  const [campaignCode, setCampaignCode] = useState<string>("AKH");
  const [scenarioNumber, setScenarioNumber] = useState<number>(1);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<NavFrame campaignCode={campaignCode} scenarioNumber={scenarioNumber} />}
        >
          <Route
            index
            element={
              <Storyline
                campaignCode={campaignCode}
                setCampaignCode={setCampaignCode}
                scenarioNumber={scenarioNumber}
                setScenarioNumber={setScenarioNumber}
              />
            }
          />
          <Route path="trickdeck/:campaignCode/:scenarioNumber" element={<TrickDeck />} />
          <Route path="deckbuilding" element={<Deckbuilding />} />
          <Route path="glossary" element={<Glossary />} />
          <Route
            path="scenario/:campaignCode/:scenarioNumber"
            element={<Scenario setScenarioNumber={setScenarioNumber} />}
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
