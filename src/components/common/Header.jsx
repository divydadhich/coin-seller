import { useNavigate } from "react-router-dom";

export default function Header({ title }) {
  const navigate = useNavigate();

  return (
    <div
      className="
        relative
        w-full
        flex items-center
        h-[56px]
        px-4
        bg-[#1c1c2b]
        overflow-x-hidden
      "
    >
      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="absolute left-4 text-[22px] font-medium text-white"
        aria-label="Back"
      >
        &lt;
      </button>

      {/* TITLE */}
      <h1 className="w-full text-center text-[16px] font-medium text-white">
        {title}
      </h1>
    </div>
  );
}
