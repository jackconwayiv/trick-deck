import { useNavigate } from "react-router-dom";
import "../styles.css";
export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Voyager MTG!</h1>
      <h2>I hope you enjoy Voyager as much as I have!</h2>
      <h3>My Starting Deck</h3>
      <p>rules for deckbuilding, star ranks, progression concepts</p>
      <h3>The Enemy Deck & Tokens</h3>
      <p>print and play, photos of my homemade cards</p>
      <h3>The App</h3>
      <p>how to use, sequence of play, etc.</p>
      <h3>The Community</h3>
      <p> discord, twitter, instagram, facebook</p>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate(`/deckbuilding`);
        }}
      >
        Deckbuilding Guide
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate(`/printandplay`);
        }}
      >
        Print & Play
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate(`/`);
        }}
      >
        Back to Lobby
      </button>
    </div>
  );
}
