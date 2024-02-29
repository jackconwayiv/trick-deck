//write assembler function that stamps code variable (and color? and icon?) onto each card and renders it as an object
const tricks = [
  [
    "Shackle",
    "2W",
    "Encounter a Pillory of Faith enchantment token targeting this creature.",
  ],
  ["Banish", "4W", "Exile target creature."],
  [
    "Resupply",
    "2WW",
    "Prevent all combat damage target creature would deal this turn. A random Nexus with the lowest life total gains life equal to its power.",
  ],
  [
    "Hesitate",
    "1W",
    "Exile target creature, then return it to play tapped and removed from combat.",
  ],
  [
    "Surround",
    "3W",
    "Encounter X 1/1 white Soldier creature tokens where X is target creature's power. They block target creature this combat if able. Tap them at the end of combat.",
  ],
  [
    "Burden",
    "1UU",
    "Spellbind a random nonland card from your hand if able, or else spellbind target creature. (You may play spellbound cards from exile by paying 2 mana in addition to their normal costs.)",
  ],
  [
    "Forget",
    "3U",
    "Put target creature on the top or bottom of its owner's library.",
  ],
  ["Unsummon", "U", "Return target creature to its owner's hand."],
  [
    "Pause",
    "U",
    "Target creature phases out. (Treat it and anything attached to it as though they don't exist until its controller's next turn.)",
  ],
  [
    "Freeze",
    "3U",
    "The next time target creature deals combat damage this turn, tap it and put that many stun counters on it.",
  ],
  [
    "Shrivel",
    "1B",
    "Target creature gets -X/-X until end of turn, where X is your fatigue. (Your fatigue is the difference between your current hand size and your starting hand size of 7.)",
  ],
  ["Reap", "1BB", "Target creature's controller sacrifices it."],
  [
    "Salt",
    "3B",
    "The next time target creature deals damage this turn, blight X (unblighted) (nonbasic) lands you control, where X is 1 plus the number of slain Nexii.",
  ],
  [
    "Punish",
    "2BB",
    "Discard a card at random. You lose life equal to that card's mana value.",
  ],
  [
    "Expose",
    "2B",
    "Prevent all damage target creature would deal this turn. Mill a number of cards equal to that creature's power.",
  ],
  [
    "Roast",
    "XR",
    "Deal X damage to target creature, where X is the number of mana permanents you control minus 1.",
  ],
  [
    "Mutiny",
    "4R",
    "The next time target creature deals combat damage that turn, it also deals that much damage to you.",
  ],
  [
    "Scar",
    "R",
    "Wound target creature X times, where X is equal to 1 plus the number of slain Nexii.",
  ],
  [
    "Heckle",
    "1R",
    "Rile a random (untapped) creature you control with the highest toughness if able, or else rile target creature.",
  ],
  [
    "Polymorph",
    "2R",
    "Shuffle target creature into its owner's library, then reveal the top card of your library. If it's a permanent card, put it into play.",
  ],
  [
    "Cripple",
    "1G",
    "Maim target creature. (Remove all +1/+1 counters from a maimed creature and sacrifice all permanents you control that are attached to it. It loses all text and can't gain text or be modified.)",
  ],
  [
    "Disillusion",
    "1G",
    "Sacrifice a random noncreature permanent you control with the highest rarity if able, or else sacrifice target creature.",
  ],
  [
    "Sow",
    "2G",
    "The next time target creature deals combat damage this turn, you get that many Woe counters.",
  ],
  [
    "Reclaim",
    "3G",
    "Prevent all damage target creature would deal this turn. For each damage prevented in this way, exile a card from your graveyard or each Nexus gains life equal to 1 plus the number of Woe counters you have.",
  ],
  [
    "Defend",
    "3GG",
    "Untap a random eligible foe with the greatest toughness if able, and it blocks target creature if able. Otherwise, each player gets 3 Woe counters.",
  ],
];

const coreTricks = tricks.map((trick) => {
  return { name: trick[0], cost: trick[1], text: trick[2], code: "CORE" };
});

export default coreTricks;
