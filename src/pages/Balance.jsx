import { useNavigate } from "react-router-dom";

export default function Balance() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f6f7fb]">

     <div className="relative flex items-center h-[68px] px-4">
  {/* LEFT: BACK */}
  <button
    onClick={() => navigate(-1)}
    className="absolute left-4 text-[22px] font-medium text-gray-900"
    aria-label="Back"
  >
    &lt;
  </button>

  {/* TITLE (OPTICAL CENTER, NOT TRUE CENTER) */}
  <h1 className="pl-8 text-[20px] font-medium text-gray-900">
    Balance
  </h1>

  {/* RIGHT: CLOSE */}
  <button
    onClick={() => navigate("/")}
    className="absolute right-4 text-[22px] font-medium text-gray-900"
    aria-label="Close"
  >
    ✕
  </button>
</div>


      {/* CONTENT */}
      <div className="w-full max-w-[420px] mx-auto px-4">

        {/* BALANCE CARD */}
        <div className="bg-gradient-to-r from-[#6f5cff] to-[#7b6cff]
                        rounded-[26px]
                        px-7 py-9
                        text-white
                        mb-10">
          <h2 className="text-[42px] font-semibold tracking-wide mb-4">
            $0
          </h2>
          <p className="text-white/80 text-[15px]">
            Wallet Balance · USD
          </p>
        </div>

        {/* ACTIONS */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { icon: "🪙", title: "Exchange", sub: "Convert coins", bg: "bg-yellow-100" },
            { icon: "✉️", title: "Transfer", sub: "Send money", bg: "bg-blue-100" },
            { icon: "🏦", title: "Withdraw", sub: "Bank withdrawal", bg: "bg-gray-100" },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-[24px] pt-7 pb-6 text-center shadow-sm"
            >
              <div
                className={`w-[52px] h-[52px] mx-auto mb-4 flex items-center justify-center
                            rounded-full ${item.bg} text-[24px]`}
              >
                {item.icon}
              </div>
              <p className="text-[15px] font-medium text-gray-900">
                {item.title}
              </p>
              <p className="text-[12px] text-gray-400 mt-1">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* RECENT ACTIVITY */}
        <h3 className="text-[19px] font-medium mb-4">
          Recent Activity
        </h3>

        <div className="bg-white rounded-[26px] h-[220px]
                        flex flex-col items-center justify-center
                        shadow-sm">
          <div className="text-[64px] text-gray-300 mb-4">⌛</div>
          <p className="text-[16px] font-medium">
            No records yet
          </p>
          <p className="text-[14px] text-gray-400 mt-2">
            Make your first transfer
          </p>
        </div>

      </div>
    </div>
  );
}
