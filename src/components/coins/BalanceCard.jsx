import { useNavigate } from "react-router-dom";

export default function BalanceCard() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/balance")}
      className="
        bg-white rounded-xl p-4 flex items-center gap-3
        shadow-sm cursor-pointer active:scale-95 transition
      "
    >
      <div className="w-10 h-10 bg-orange-400 rounded-lg flex items-center justify-center text-white font-bold">
        B
      </div>

      <p className="font-semibold text-gray-700">
        Balance
      </p>
    </div>
  );
}
