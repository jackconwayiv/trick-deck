import { CampaignType, CounterType, NexusType, ScenarioType } from "../types";

const life: CounterType = { name: "life", value: 20 };
const bricks: CounterType = { name: "bricks", value: 0 };
const akh01a: NexusType = {
  name: "Isolation of Oketra",
  color: "W",
  counters: [life],
  text: [
    {
      trigger: "supplicate",
      text: "you create a 1/1 white Warrior creature token with vigilance.",
    },
    { trigger: "die", text: "each player gains 10 life." },
  ],
};

const akh01b: NexusType = {
  name: "Ignorance of Kefnet",
  color: "U",
  counters: [life],
  text: [
    {
      trigger: "supplicate",
      text: "you scry 1, then draw a card.",
    },
    { trigger: "die", text: "each player draws a card." },
  ],
};

const akh01c: NexusType = {
  name: "Insouciance of Bontu",
  color: "B",
  counters: [life],
  text: [
    {
      trigger: "supplicate",
      text: "each Nexus loses 1 life.",
    },
    { trigger: "die", text: "each Nexus loses 3 life." },
  ],
};
const akh01d: NexusType = {
  name: "Indifference of Hazoret",
  color: "R",
  counters: [life],
  text: [
    {
      trigger: "supplicate",
      text: "you wound a foe you're facing.",
    },
    { trigger: "die", text: "wound each foe in play." },
  ],
};

const akh01e: NexusType = {
  name: "Indecision of Rhonas",
  color: "G",
  counters: [life],
  text: [
    {
      trigger: "supplicate",
      text: "that creature grows.",
    },
    { trigger: "die", text: "each creature controlled by a player grows." },
  ],
};

const akh01f: NexusType = {
  name: "Show of Supplication",
  color: "C",
  counters: [],
  isEmblem: true,
  text: [
    {
      trigger: "omniStrike",
      text: "its controller may tap and stun that creature to activate that Nexus's supplication effect.",
    },
  ],
};

const akh01: ScenarioType = {
  title: "The Gods of Amonkhet",
  intro: "You planeswalk to Amonkhet and need to appease the indifferent gods.",
  objective: "Defeat all Nexii.",
  victory:
    "The gods point you in the direction of the city, giving you their blessing.",
  nexii: [akh01f, akh01a, akh01b, akh01c, akh01d, akh01e],
};

const akh02a: NexusType = {
  name: "Scouring Sands",
  color: "W",
  counters: [life],
  text: [
    {
      trigger: "static",
      text: "Blighted lands lose all other abilities and types and gain `T: Add <>.`",
    },
    {
      trigger: "die",
      text: "for each blighted land in play, its controller must choose one: pay (X) or return it to its owner's hand, where X is the number of living Nexii.",
    },
  ],
};

const akh02b: NexusType = {
  name: "Sweltering Sun",
  color: "R",
  counters: [life],
  text: [
    {
      trigger: "upkeep",
      text: "players must distribute X blight among any (unblighted) (nonbasic) lands they control, where X is the greatest star rank among players' decks.",
    },
    {
      trigger: "die",
      text: "each player blights an (unblighted) (nonbasic) land they control.",
    },
  ],
};

const akh02c: NexusType = {
  name: "Shimmering Oasis",
  color: "U",
  counters: [life],
  text: [
    {
      trigger: "upkeep",
      text: "a player with the fewest blighted lands gets a Woe counter, plus an additional Woe counter for each dead Nexus.",
    },
    {
      trigger: "strike",
      text: "tap and stun those creatures. You may remove a blight from a land you control.",
    },
    {
      trigger: "die",
      text: "each player gets a Woe counter for each blighted land they control.",
    },
  ],
};

const akh02: ScenarioType = {
  title: "Beyond the Hekma",
  intro:
    "The city of Naktamun is sheltered by a magical barrier called the Hekma. Alas, you're outside that barrier. Make your way through the desert to safety!",
  objective: "Defeat all Nexii.",
  victory:
    "You seek water and shelter in the bustling city of Naktamun, safely within the boundaries of the Hekma's protection.",
  nexii: [akh02a, akh02b, akh02c],
};

export const akhCampaign: CampaignType = {
  code: "AKH",
  title: "Amonkhet: Approach of the Second Sun",
  description: "All is not as it seems in the desert oasis of Naktamun...",
  scenarios: [akh01, akh02],
};

export const mkmCampaign: CampaignType = {
  code: "MKM",
  title: "Murders at Karlov Manor",
  description: "Fingers go pointing when Zegana is mysteriously murdered...",
  scenarios: [akh01, akh02],
};
