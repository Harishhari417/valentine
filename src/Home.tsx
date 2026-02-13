import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = Math.min(noCount * 5 + 16, 36);


  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };
  const navigate = useNavigate();


  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

const gifts = [
  {
    id: 1,
    name: "Teddy Bear 🧸",
    img: "download.jpeg",
    type: "teddy",
  },
  {
    id: 2,
    name: "Chocolate 🍫",
    img: "loaded-with-chocolates.webp",
    type: "chocolate",
  },
  {
    id: 3,
    name: "Flowers 🌹",
    img: "download (1).jpeg",
    type: "flowers",
  },
  {
    id: 4,
    name: "Special Surprise 🎁",
    img: "download.png",
    type: "special",
  }
];


  return (
    <div className="centered-container">
      <div className="valentine-container">
        {yesPressed ? (
          <>
            <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
            <div className="text-container">Ok yay!!!</div>

            {/* Gift Cards Section */}
            <div className="gift-container">
              {gifts.map((gift) => (
                <div
  key={gift.id}
  className="gift-card"
  style={{ cursor: "pointer" }}
  onClick={() => navigate(`/gift/${gift.type}`)}
>

                  <img src={gift.img} alt={gift.name} />
                  <h3>{gift.name}</h3>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <img
  className="main-gif"
  src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
  alt="bear"
/>

            <h1 className="text-container">Will you be my Valentine?</h1>
            <h2 className="text-container">My dr Pengi</h2>

            <div>
              <button
                className="yes-button"
                style={{ fontSize: yesButtonSize }}
                onClick={() => setYesPressed(true)}
              >
                Yes
              </button>

              <button onClick={handleNoClick} className="no-button">
                {noCount === 0 ? "No" : getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
