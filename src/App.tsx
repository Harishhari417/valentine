import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import GiftPage from "./GiftPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gift/:type" element={<GiftPage />} />
    </Routes>
  );
}
