const tricks = [
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

const akhTricks = tricks.map((trick) => {
  return { name: trick[0], cost: trick[1], text: trick[2], code: "AKH" };
});

export default akhTricks;
