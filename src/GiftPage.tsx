import { useParams, useNavigate } from "react-router-dom";
import "./App.css";

type GiftType = "teddy" | "chocolate" | "flowers";

export default function GiftPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const giftData: Record<GiftType, { img: string; caption: string }[]> = {
    teddy: [
      { img: "/teddy.jpeg", caption: "I'm your teddy 🧸" },
      { img: "/teddys.jpeg", caption: "how's your teddy 🤍" },
    ],
    chocolate: [
      { img: "/chocolate.jpeg", caption: "I'm your chocolate 🍫" },
      { img: "/choco.jpeg", caption: "For My Sweetheart ❤️" },
    ],
    flowers: [
      { img: "/flower.jpeg", caption: "You're My Rose 🌹" },
      { img: "/WhatsApp Image 2026-02-13 at 11.49.22 AM.jpeg", caption: "Blooming Love 💐" },
    ],
  };

  const selectedGifts =
    type && ["teddy", "chocolate", "flowers"].includes(type)
      ? giftData[type as GiftType]
      : [];

  return (
    <div className="centered-container gift-page">
      <h1 className="gift-title">
        {type
          ? `${type.toUpperCase()} Collection 💖`
          : "Gift Collection 💖"}
      </h1>

      {selectedGifts.length === 0 ? (
        <p className="empty-message">
          Oops! No gifts found for this category 😢
        </p>
      ) : (
        <div className="gift-container">
          {selectedGifts.map((item, index) => (
            <div key={index} className="gift-card enhanced-card">
              <img src={item.img} alt="gift" />
              <p>{item.caption}</p>
            </div>
          ))}
        </div>
      )}

     <button
  className="back-button"
  onClick={() => navigate("/", { state: { showGifts: true } })}
>

        💌 Go Back to Love
      </button>
    </div>
  );
}
