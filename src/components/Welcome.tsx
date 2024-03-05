import { useNavigate } from "react-router-dom";
import "../styles.css";
export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Voyager MTG!</h1>
      <h2>I hope you enjoy this cooperative MTG experience!</h2>
      <h3>The App</h3>
      <ul>
        <li>
          This webapp governs the campaign storyline, enemy Nexii, and enemy
          Trick Deck.
        </li>
        <li>
          You will need a physical tabletop, your own starting decks, a tablet
          or laptop device, and a mobile device.
        </li>
        <li>You will also need to print out the Enemy Deck of cards.</li>
      </ul>
      <h3>The Starting Deck</h3>
      <ul>
        <li>60 card singleton</li>
        <li>A commander of any rarity</li>
        <li>~35 common or uncommon creatures and spells</li>
        <li>~24 basic, common, or uncommon lands</li>
      </ul>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate(`/deckbuilding`);
        }}
      >
        Deckbuilding Guide
      </button>

      <h3>The Enemy Deck & Tokens</h3>
      <ul>
        <li>Core Set Enemy Deck - Print & Play</li>
        <li>Core Set Enemy Tokens - Print & Play</li>
        <li>Visual Aide, Photos of Examples</li>
      </ul>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate(`/printandplay`);
        }}
      >
        Print & Play
      </button>
      <h3>The Community</h3>
      <ul>
        <li>
          Coming soon: links to social media where fellow Voyagers may be found!
        </li>
        <li>Discord, Twitter, Instagram, Facebook</li>
      </ul>

      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate(`/`);
        }}
      >
        Let's Play
      </button>
    </div>
  );
}
