type TrickCardType = {
  name: string;
  set: string;
  cost: string;
  text: string;
};

//trick card is an array of strings, always in the same sequence: name, cost, text
const akhTricks = [
  [
    "Eternalize",
    "4BB",
    "Exile target creature, then encounter a tapped token copy of it that's a 4/4 black Zombie in addition to its other colors and types.",
  ],
  [
    "Exert",
    "2G",
    "Tap target creature and put X stun counters on it, where X is your deck's star rank.",
  ],
];

//write assembler function that stamps code variable (and color? and icon?) onto each card and renders it as an object

const tricks = [
  {
    name: "Shackle",
    cost: "2W",
    text: "Encounter a Pillory of Faith enchantment token targeting this creature.",
  },
  {
    name: "Banish",
    cost: "4W",
    text: "Exile target creature.",
  },
  {
    name: "Resupply",
    cost: "2WW",
    text: "Prevent all combat damage target creature would deal this turn. A random Nexus with the lowest life total gains life equal to its power.",
  },
  {
    name: "Hesitate",
    cost: "1W",
    text: "Exile target creature, then return it to play tapped and removed from combat.",
  },
  {
    name: "Surround",
    cost: "3W",
    text: "Encounter X 1/1 white Soldier creature tokens where X is target creature's power. They block target creature this combat if able. Tap them at the end of combat.",
  },
  {
    name: "Burden",
    cost: "1UU",
    text: "Spellbind a random nonland card from your hand if able, or else spellbind target creature. (You may play spellbound cards from exile by paying 2 mana in addition to their normal costs.)",
  },
  {
    name: "Forget",
    cost: "3U",
    text: "Put target creature on the top or bottom of its owner's library.",
  },
  {
    name: "Unsummon",
    cost: "U",
    text: "Return target creature to its owner's hand.",
  },
  {
    name: "Pause",
    cost: "U",
    text: "Target creature phases out. (Treat it and anything attached to it as though they don't exist until its controller's next turn.)",
  },
  {
    name: "Freeze",
    cost: "3U",
    text: "The next time target creature deals combat damage this turn, tap it and put that many stun counters on it.",
  },
  {
    name: "Shrivel",
    cost: "1B",
    text: "Target creature gets -X/-X until end of turn, where X is your fatigue. (Your fatigue is the difference between your current hand size and your starting hand size of 7.)",
  },
  {
    name: "Reap",
    cost: "1BB",
    text: "Target creature's controller sacrifices it.",
  },
  {
    name: "Salt",
    cost: "3B",
    text: "The next time target creature deals damage this turn, blight X (unblighted) (nonbasic) lands you control, where X is 1 plus the number of slain Nexii.",
  },
  {
    name: "Punish",
    cost: "2BB",
    text: "Discard a card at random. You lose life equal to that card's mana value.",
  },
  {
    name: "Expose",
    cost: "2B",
    text: "Prevent all damage target creature would deal this turn. Mill a number of cards equal to that creature's power.",
  },
  {
    name: "Roast",
    cost: "XR",
    text: "Deal X damage to target creature, where X is the number of mana permanents you control minus 1.",
  },
  {
    name: "Mutiny",
    cost: "4R",
    text: "The next time target creature deals combat damage that turn, it also deals that much damage to you.",
  },
  {
    name: "Scar",
    cost: "R",
    text: "Wound target creature X times, where X is equal to 1 plus the number of slain Nexii.",
  },
  {
    name: "Heckle",
    cost: "1R",
    text: "Rile a random (untapped) creature you control with the highest toughness if able, or else rile target creature.",
  },
  {
    name: "Polymorph",
    cost: "2R",
    text: "Shuffle target creature into its owner's library, then reveal the top card of your library. If it's a permanent card, put it into play.",
  },
  {
    name: "Cripple",
    cost: "1G",
    text: "Maim target creature. (Remove all +1/+1 counters from a maimed creature and sacrifice all permanents you control that are attached to it. It loses all text and can't gain text or be modified.)",
  },
  {
    name: "Disillusion",
    cost: "1G",
    text: "Sacrifice a random noncreature permanent you control with the highest rarity if able, or else sacrifice target creature.",
  },
  {
    name: "Sow",
    cost: "2G",
    text: "The next time target creature deals combat damage this turn, you get that many Woe counters.",
  },
  {
    name: "Reclaim",
    cost: "3G",
    text: "Prevent all damage target creature would deal this turn. For each damage prevented in this way, exile a card from your graveyard or each Nexus gains life equal to 1 plus the number of Woe counters you have.",
  },
  {
    name: "Defend",
    cost: "3GG",
    text: "Untap a random eligible foe with the greatest toughness if able, and it blocks target creature if able. Otherwise, each player gets 3 Woe counters.",
  },
];

export default tricks;
