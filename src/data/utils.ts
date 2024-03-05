export const readStorage = () => {
  const fetchedCode = localStorage.getItem("campaignCode");
  const fetchedScene = localStorage.getItem("scenarioNumber");
  const code = fetchedCode ? fetchedCode : "AKH";
  const scene = fetchedScene ? parseInt(fetchedScene) : 1;
  return { code, scene };
};

export const writeStorage = (code: string, scene: number) => {
  localStorage.setItem("campaignCode", code);
  localStorage.setItem("scenarioNumber", scene.toString());
  return { code, scene };
};
