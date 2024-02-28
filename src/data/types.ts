export type DictionaryType = {
  [key: string]: any;
};

export type CounterType = {
  name: string;
  value: number;
};

type NexusText = {
  trigger: string;
  text: string;
};

export type NexusType = {
  name: string;
  color: string;
  counters: CounterType[];
  text: NexusText[];
  isEmblem?: boolean;
};

export type ScenarioType = {
  title: string;
  intro: string;
  objective: string;
  victory: string;
  nexii: NexusType[];
};

export type CampaignType = {
  code: string;
  title: string;
  description: string;
  scenarios: ScenarioType[];
};

//trick card
