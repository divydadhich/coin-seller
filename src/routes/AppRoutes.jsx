import { Routes, Route } from "react-router-dom";
import CoinsSeller from "../pages/CoinsSeller";
import Balance from "../pages/Balance";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<CoinsSeller />} />
      <Route path="/balance" element={<Balance />} />
    </Routes>
  );
}
