import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BalanceCard from "../components/coins/BalanceCard";

export default function CoinsSeller() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">

      {/* ===== HEADER ===== */}
      <div className="relative w-full h-[56px] bg-[#1c1c2b] flex items-center px-4">
         <button
       
        className="absolute left-4 text-[20px] text-white"
      >
        &lt;
      </button>
        <h1 className="w-full text-center text-[16px] font-medium text-white">
          Coin's Seller
        </h1>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="w-full px-4 py-4 sm:max-w-[430px] sm:mx-auto space-y-4">

        {/* MY COINS */}
        <div className="w-full bg-white rounded-xl p-4 flex justify-between items-center shadow-md">
          <p className="text-gray-500">
            My coins:
            <span className="ml-2 text-orange-400 font-semibold">0.00</span>
          </p>
          <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center">
            📄
          </div>
        </div>

        {/* USER + QUANTITY CARD */}
        <div className="w-full bg-white rounded-xl p-4 shadow-md space-y-4">

          {/* USER ID */}
          <div className="w-full">
            <label className="text-sm text-gray-500">User ID</label>
            <div className="relative mt-2 w-full">
              <input
                placeholder="Please enter user id"
                className="w-full bg-gray-100 rounded-full pl-4 pr-24 py-2.5 text-[16px] outline-none"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-300 text-white px-4 py-1.5 rounded-full text-sm">
                Search
              </button>
            </div>
          </div>

          {/* QUANTITY */}
          <div className="w-full">
            <label className="text-sm text-gray-500">Quantity</label>
            <div className="relative mt-2 w-full">
              <input
                placeholder="Please enter the amount of gold coins"
                className="w-full bg-gray-100 rounded-full px-4 py-3 pr-16 text-[16px] outline-none"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                🪙
              </div>
            </div>
            <p className="text-right text-sm text-gray-400 mt-1">0 USD</p>
          </div>
        </div>

        {/* SEND BUTTON */}
        <button className="w-full bg-blue-500 text-white py-3 rounded-full font-semibold shadow-md">
          Send
        </button>
       <BalanceCard />
       
       </div>
    </div>
  );
}
