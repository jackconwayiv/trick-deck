import { DictionaryType } from "./types";

export const colorDictionary: DictionaryType = {
  W: { color: "#fff2cc", symbol: "☀️" },
  U: { color: "#cfe2f3", symbol: "💧" },
  B: { color: "#d9d2e9", symbol: "💀" },
  R: { color: "#f4cccc", symbol: "🔥" },
  G: { color: "#d9ead3", symbol: "🌳" },
  C: { color: "#dddddd", symbol: "" },
};

export const triggerDictionary: DictionaryType = {
  supplicate: "Whenever one of your creatures supplicates before me, ",
  eachStrike: "Whenever a creature strikes me, ",
  omniStrike: "Whenever a creature strikes a Nexus, ",
  die: "When I die, ",
};
