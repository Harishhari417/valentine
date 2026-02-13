import { useParams, useNavigate } from "react-router-dom";
import "./App.css";

type GiftType = "teddy" | "chocolate" | "flowers" | "special";

type GiftItem = {
  type: "image" | "video";
  src: string;
  caption: string;
};

export default function GiftPage() {
  const { type } = useParams();
  const navigate = useNavigate();

  const giftData: Record<GiftType, GiftItem[]> = {
    teddy: [
      { type: "image", src: "/teddy.jpeg", caption: "I'm your teddy 🧸" },
      { type: "image", src: "/teddys.jpeg", caption: "how's your teddy 🤍" },
    ],
    chocolate: [
      { type: "image", src: "/chocolate.jpeg", caption: "I'm your chocolate 🍫" },
      { type: "image", src: "/choco.jpeg", caption: "For My Sweetheart ❤️" },
    ],
    flowers: [
      { type: "image", src: "/flower.jpeg", caption: "You're My Rose 🌹" },
      {
        type: "image",
        src: "/WhatsApp Image 2026-02-13 at 11.49.22 AM.jpeg",
        caption: "Blooming Love 💐",
      },
    ],
    special: [
      {
        type: "video",
        src: "/special.mp4", // Put this in public folder
        caption: "A Special Surprise Just For You 💖",
      },
    ],
  };

  const selectedGifts =
    type && ["teddy", "chocolate", "flowers", "special"].includes(type)
      ? giftData[type as GiftType]
      : [];

  return (
    <div className="centered-container gift-page">
      <h1 className="gift-title">
        {type ? `${type.toUpperCase()} Collection 💖` : "Gift Collection 💖"}
      </h1>

      {selectedGifts.length === 0 ? (
        <p className="empty-message">
          Oops! No gifts found for this category 😢
        </p>
      ) : (
        <div className="gift-container">
          {selectedGifts.map((item, index) => (
            <div key={index} className="gift-card enhanced-card">
              {item.type === "image" ? (
                <img src={item.src} alt="gift" />
              ) : (
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className="gift-video"
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
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
