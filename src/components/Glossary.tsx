import "../styles.css";
export default function Glossary() {
  return (
    <>
      <h1>Glossary</h1>
      <ul>
        <li>
          NEXUS (n.): A card representation of an enemy player, usually with a
          static or triggered ability. Nexii have life totals and can be
          attacked by creatures and targeted by spells and abilities that target
          players.
        </li>
        <li>
          WOE (n.): A type of counter players can get that represent an increase
          in the enemy's hand size due to enemy draw effects. When you return a
          card to an enemy's hand, shuffle that card in the top 10 cards of the
          enemy deck and get 2 Woe counters. Whenever the enemy would draw a
          card, instead you get 2 Woe counters. Whenever the enemy would put a
          permanent into play, if it's not obvious how to resolve that, instead
          a player gets 3 Woe counters. When you would encounter an enemy card,
          if you have 3 or more Woe counters, remove 3 Woe counters and
          encounter an additional enemy card this turn.
        </li>
        <li>
          WEAL (n.): A type of counter players can get that represent a
          reduction in the enemy's hand size due to discard effects. Whenever an
          opponent would discard a card, you mill the enemy deck 1 and get a
          Weal counter. When you would encounter an enemy card, if you have 3 or
          more Weal counters, remove 3 Weal counters and encounter one fewer
          enemy card this turn.
        </li>
        <li>
          TRICK DECK: Whenever a player declares a creature as an attacker, draw
          one trick card from the trick deck whose color matches the attacked
          Nexus.
        </li>
        <li>
          FOE (n.): An enemy creature, specifically engaged with one player.
        </li>
        <li>
          ENCOUNTER (v.): Either draw a card from the enemy deck, or have the
          enemy create a token creature engaged with you.
        </li>
        <li>
          BATTLEGROUND (n.): A zone, a subset of the battlefield, which consists
          of one player's permanents and all enemy permanents engaged with that
          player.
        </li>
        <li>
          PROTECTOR (adj.): A keyword ability. "During combat, this creature
          must be attacked by at least one creature if any attackers are
          declared."
        </li>
        <li>
          IMMOBILE (adj.): A keyword ability. "This creature doesn't attack or
          block."
        </li>
      </ul>
      <h3>Sequence of Play</h3>
      <ul>
        <li>Shuffle and Draw Starting Hand (7) - no free mulligan</li>
        <li>
          Play 3 Setup Turns (simultaneously move through phases as in
          Two-Headed Giant), plus an additional setup turn for each prior failed
          attempt at this scenario (do not draw on turn 1)
        </li>
        <li>
          Reveal the Nexii after the end of the 3rd setup turn. This begins the
          Enemy Turns.
        </li>
        <h4>Enemy Turn</h4>
        <ul>
          <li>
            When starting an enemy turn, in left-to-right order, scan each
            Nexus, any Emblems, and any enemy permanents in play for upkeep
            effects and resolve them. If any player dies, the scenario is lost.
          </li>
          <li>
            Each player encounters (draws) a face-down card from the enemy deck,
            plus one additional card if they have 3 or more Woe counters. (If
            they do, remove 3 Woe counters.)
          </li>
          <li>
            In turn order, each player flips their face-down enemy cards face up
            one at a time and resolves any enters the battlefield effects or
            sorcery effects on those cards.
          </li>
          <li>
            An enemy creature flipped face up is engaged with the player who
            flipped it up in a zone called the battleground, which is a subset
            of the full battlefield.
          </li>
          <li>
            Each enemy creature (foe) has haste and attacks each turn if able.
            (Foes with immobile do not attack.)
          </li>
          <li>
            Some foes have combat-specific triggered abilities. Check for those
            as the enemy creatures attack and as you declare blockers or play
            effects.
          </li>
          <li>
            Foes are tapped after combat unless they have protector (a variant
            of vigilance) or immobile (foes with immobile do not attack or
            block).
          </li>
          <li>
            There is usually not a 2nd main phase for the enemy turn. Check
            individual enemy cards before ending the enemy turn and passing back
            to the players for a player turn.
          </li>
          <li>Note: The enemy has infinite mana.</li>
          <li>
            Note: If the enemy must make a choice, it chooses randomly. Roll a
            d6. Odd is "yes" and even is "no."
          </li>
        </ul>
        <li>
          On any player turn after the Nexii have been revealed, players may
          declare attacks on those Nexii with their creatures or target them
          with spells and abilities. (A Nexus counts as a player and an
          opponent. Players' spells that say "all players" include each living
          Nexus.)
        </li>
        <li>
          For each player creature declared as an attacker, draw a trick card
          (see "TRICK DECK" above).
        </li>
        <li>
          Play continues alternating between a player turn and an enemy turn
          until a player loses and the scenario is lost, or the victory
          condition of the scenario has been met and the players win.
        </li>
        <li>
          If you lose, you get an additional setup turn the next time you
          attempt this scenario.
        </li>
        <li>
          If you win, your decks gain a level and add some cards (and maybe a
          rank star).
        </li>
      </ul>
      <h3>Corner Cases and Balancing Rules</h3>
      <ul>
        <li>
          If an enemy would cast a trick against you but is somehow prevented
          (such as by an "opponent can't play spells on your turn" effect),
          instead you get 2 Woe counters.
        </li>
        <li>
          The enemy's hand size is calculated as:{" "}
          <i>your hand size + your Woe counters - your Weal counters</i>.
        </li>
        <li>Indestructible and hexproof on player cards become ward 3.</li>
        <li>
          If a player effect makes an enemy spell cost X more to cast, or if a
          creature permanent has ward X, roll a d6. If the rolled number is
          greater than X, the enemy chooses to pay the cost.
        </li>
      </ul>
    </>
  );
}
