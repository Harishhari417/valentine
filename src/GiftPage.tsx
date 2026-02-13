import { useParams, useNavigate } from "react-router-dom";
import "./App.css";

type GiftType = "teddy" | "chocolate" | "flowers";

export default function GiftPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const giftData: Record<GiftType, { img: string; caption: string }[]> = {
    teddy: [
      { img: "/download.jpeg", caption: "Soft & Cute Teddy 🧸" },
      { img: "/download.jpeg", caption: "Hug Me Teddy 🤍" },
    ],
    chocolate: [
      { img: "/loaded-with-chocolates.webp", caption: "Sweet Love 🍫" },
      { img: "/loaded-with-chocolates.webp", caption: "For My Sweetheart ❤️" },
    ],
    flowers: [
      { img: "/download (1).jpeg", caption: "Beautiful Roses 🌹" },
      { img: "/download (1).jpeg", caption: "Blooming Love 💐" },
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
