import { useNavigate } from "react-router-dom";

export default function Balance() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">

      {/* HEADER */}
      <div className="relative w-full h-[56px] bg-[#1c1c2b] flex items-center px-4">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-4 text-white text-[20px]"
        >
          &lt;
        </button>

        <h1 className="w-full text-center text-[16px] font-medium text-white">
          Balance
        </h1>

        <button
          onClick={() => navigate("/")}
          className="absolute right-4 text-white text-[18px]"
        >
          ✕
        </button>
      </div>

      {/* CONTENT */}
      <div className="w-full px-4 py-4 sm:max-w-[420px] sm:mx-auto">

        {/* WALLET */}
        <div className="bg-gradient-to-r from-[#6f5cff] to-[#7b6cff]
                        rounded-[26px] px-6 py-8 text-white mb-8 shadow-md">
          <h2 className="text-[42px] font-semibold mb-3">$0</h2>
          <p className="text-white/80 text-sm">
            Wallet Balance · USD
          </p>
        </div>

        {/* ACTIONS */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { icon: "🪙", title: "Exchange" },
            { icon: "✉️", title: "Transfer" },
            { icon: "🏦", title: "Withdraw" },
          ].map((i) => (
            <div
              key={i.title}
              className="bg-white rounded-[22px] py-6 text-center shadow-md"
            >
              <div className="w-[50px] h-[50px] mx-auto mb-3 flex items-center justify-center rounded-full bg-gray-100">
                {i.icon}
              </div>
              <p className="text-sm font-medium">{i.title}</p>
            </div>
          ))}
        </div>

        {/* RECENT */}
        <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
        <div className="bg-white rounded-[26px] h-[220px] flex flex-col items-center justify-center shadow-md">
          <div className="text-[60px] text-gray-300 mb-4">⌛</div>
          <p className="font-medium">No records yet</p>
          <p className="text-sm text-gray-400 mt-2">
            Make your first transfer
          </p>
        </div>

      </div>
    </div>
  );
}
