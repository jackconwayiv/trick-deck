const tricks = [
  ["Leave a Trace", "W", "Exile target creature, then investigate."],
  [
    "Moment of Weakness",
    "1W",
    "Prevent all combat damage target creature would deal this turn. A random Nexus with the lowest life total gains life equal to that creature's power.",
  ],
  [
    "Second Guess",
    "1W",
    "Exile target creature, then return it to the battlefield tapped and removed from combat.",
  ],
  ["No Warrant", "4W", "Exile target creature unless it's a Detective."],
  [
    "Not So Fast",
    "4W",
    "Tap target creature, remove it from combat, and put a number of stun counters on it equal to its power.",
  ],
  [
    "Cuff 'Em",
    "2W",
    "Encounter a Handcuffs artifact token. When it enters play, it captures target creature.",
  ],
  [
    "Loss of Control",
    "U",
    "The next time target creature deals combat damage this turn, you mill cards equal to the damage dealt.",
  ],
  [
    "Coffee Break",
    "4U",
    "Tap target creature, remove it from combat, and put a number of stun counters on it equal to its toughness.",
  ],
  ["Fleeting Glimpse", "U", "Return target creature to its owner's hand."],
  [
    "False Lead",
    "2UU",
    "Choose one -- Exile a Clue you control, or put target creature on top of its owner's library.",
  ],
  [
    "Gross Extortion",
    "1U",
    "Spellbind target creature. (Exile it. You may cast it from exile by paying an additional 2 mana.)",
  ],
  [
    "Had a Thought",
    "3U",
    "Choose a random card from your hand with the highest mana value. Spellbind that card. (Exile it. You may cast it from exile by paying an additional 2 mana.)",
  ],
  ["Victimized", "1BB", "Destroy target creature."],
  [
    "Blackmailed",
    "B",
    "Choose one -- Discard a random card from your hand, or sacrifice a nontoken creature you control with the highest rarity.",
  ],
  [
    "Got a Bad Feeling",
    "2B",
    "Target creature gets -X/-X until end of turn, where X is half the number of mana permanents you control, rounded up.",
  ],
  [
    "You're In It Now",
    "1B",
    "Blight a (nonbasic) land you control (that isn't blighted). (Whenever it becomes tapped, you lose 1 life.)",
  ],
  [
    "Sloppy Work",
    "2BB",
    "Discard a (nonland) card, then target creature gets -X/-X until end of turn, where X is the total mana value of cards in your graveyard.",
  ],
  [
    "Body Count",
    "B",
    "Target creature gets -X/-X until end of turn, where X is the number of cards in the enemy graveyard.",
  ],
  [
    "Blowback",
    "2RR",
    "The next time target creature deals combat damage this turn, it also deals that much damage to its controller.",
  ],
  [
    "Cast into Suspicion",
    "R",
    "Suspect target creature. (It's suspected. It has menace and can't block.)",
  ],
  [
    "Collateral Damage",
    "R",
    "Wound each creature you control that isn't attacking. (Put a -1/-1 counter on each of them.)",
  ],
  [
    "Take the Heat",
    "2R",
    "Deal X damage to target creature, where X is half the number of your mana permanents, rounded up.",
  ],
  [
    "Make an Enemy",
    "1R",
    "Target creature becomes reckless. (It must attack each combat if able and must attack a random Nexus with the lowest life total if able.)",
  ],
  [
    "Blast from the Past",
    "2R",
    "Deal X damage to target creature, where X is the number of cards in your graveyard.",
  ],
  [
    "Dogged Pursuit",
    "3GG",
    "Encounter a number of tapped 1/1 white Dog creature tokens equal to target creature's toughness.",
  ],
  [
    "Led Astray",
    "G",
    "Choose one -- Collect evidence 6, or prevent all damage target creature would deal this turn.",
  ],
  [
    "Unwanted Attention",
    "3G",
    "Encounter a tapped 0/0 Elemental token with X +1/+1 counters on it, where X is the number of creatures you control plus the number of noncreature tokens you control.",
  ],
  [
    "Send into Hiding",
    "2G",
    "Cloak target creature. (Turn it face-down. It can be turned face up at any time by paying its mana cost.)",
  ],
  [
    "Sinking Suspicion",
    "2GG",
    "The next time target creature deals combat damage this turn, you get that many Woe counters.",
  ],
  [
    "Even the Odds",
    "2GG",
    "Each foe in play grows, then grows again for each slain Nexus. If there are no foes, instead each player encounters a tapped 4/4 green Troll Detective creature token, plus another one for each slain Nexus.",
  ],
];

const mkmTricks = tricks.map((trick) => {
  return { name: trick[0], cost: trick[1], text: trick[2], code: "MKM" };
});

export default mkmTricks;
