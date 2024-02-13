const whiteTricks = [
  {
    name: "Leave a Trace",
    cost: "W",
    text: "Exile target creature, then investigate.",
  },
  {
    name: "Moment of Weakness",
    cost: "1W",
    text: "Prevent all combat damage target creature would deal this turn. A random Nexus with the lowest life total gains life equal to that creature's power.",
  },
  {
    name: "Second Guess",
    cost: "1W",
    text: "Exile target creature, then return it to the battlefield tapped and removed from combat.",
  },
  {
    name: "No Warrant",
    cost: "4W",
    text: "Exile target creature unless it is a Detective.",
  },
];

const blueTricks = [
  {
    name: "Loss of Control",
    cost: "U",
    text: "The next time target creature deals combat damage this turn, you mill cards equal to the damage dealt.",
  },
  {
    name: "Coffee Break",
    cost: "U",
    text: "Tap target creature, remove it from combat, and put a stun counter on it.",
  },
  {
    name: "Fleeting Glimpse",
    cost: "U",
    text: "Return target creature to its owner's hand.",
  },
  {
    name: "False Lead",
    cost: "2UU",
    text: "Choose one -- Exile a Clue you control, or put target creature on top of its owner's library.",
  },
];

const blackTricks = [
  {
    name: "Victimized",
    cost: "1BB",
    text: "Destroy target creature.",
  },
  {
    name: "Blackmailed",
    cost: "B",
    text: "Choose one -- Discard a random card from your hand, or sacrifice a nontoken creature you control with the highest rarity.",
  },
  {
    name: "Got a Bad Feeling",
    cost: "1B",
    text: "Target creature gets -X/-X until end of turn, where X is half the number of mana permanents you control, rounded up.",
  },
  {
    name: "You're In It Now",
    cost: "1B",
    text: "Blight a (nonbasic) land you control (that isn't blighted). (Whenever it becomes tapped, you lose 1 life.)",
  },
];
const redTricks = [
  {
    name: "Blowback",
    cost: "2RR",
    text: "The next time target creature deals combat damage this turn, it also deals that much damage to its controller.",
  },
  {
    name: "Cast into Suspicion",
    cost: "R",
    text: "Suspect target creature. (It's suspected. It has menace and can't block.)",
  },
  {
    name: "Collateral Damage",
    cost: "R",
    text: "Wound each creature you control that isn't attacking. (Put a -1/-1 counter on each of them.)",
  },
  {
    name: "Take the Heat",
    cost: "2R",
    text: "Deal X damage to target creature, where X is half the number of your mana permanents, rounded up.",
  },
];
const greenTricks = [
  {
    name: "Dogged Pursuit",
    cost: "3GG",
    text: "Encounter a number of tapped 1/1 white Dog creature tokens equal to target creature's toughness.",
  },
  {
    name: "Led Astray",
    cost: "G",
    text: "Choose one -- Collect evidence 6, or prevent all damage target creature would deal this turn.",
  },
  {
    name: "Unwanted Attention",
    cost: "3G",
    text: "Encounter a tapped 0/0 Elemental token with X +1/+1 counters on it, where X is the number of creatures plus the number of noncreature tokens you control.",
  },
  {
    name: "Send into Hiding",
    cost: "2G",
    text: "Cloak target creature. (Turn it face-down. It can be turned face up at any time by paying its mana cost.)",
  },
];

const trickDeck = [
  ...whiteTricks,
  ...blueTricks,
  ...blackTricks,
  ...redTricks,
  ...greenTricks,
];
export default trickDeck;
