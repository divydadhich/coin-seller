import Header from "../components/common/Header";
import PrimaryButton from "../components/common/PrimaryButton";
import MyCoinsCard from "../components/coins/MyCoinsCard";
import UserIdInput from "../components/coins/UserIdInput";
import QuantityInput from "../components/coins/QuantityInput";
import BalanceCard from "../components/coins/BalanceCard";

export default function CoinsSeller() {
  return (
    <div className="min-h-screen bg-[#f4f6ff] flex justify-center">
      <div className="w-full max-w-[430px] px-4 py-4">

        <Header title="Coin's Seller" />

        <MyCoinsCard />

        {/* SHARED CONTAINER */}
        <div className="bg-white rounded-xl p-4 shadow-sm mb-4 space-y-4">
          <UserIdInput />
          <QuantityInput />
        </div>

        <div className="mb-6">
          <PrimaryButton text="Send" />
        </div>

        <BalanceCard />

      </div>
    </div>
  );
}
