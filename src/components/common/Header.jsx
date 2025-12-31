import { useNavigate } from "react-router-dom";

export default function Header({ title }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center mb-4">
      <button
        onClick={() => navigate(-1)}
        className="absolute left-4 text-[22px] font-medium text-gray-900"
        aria-label="Back"
      >
        &lt;
      </button>
      <h1 className="flex-1 text-center text-lg font-semibold">
        {title}
      </h1>
      <div className="w-6" />
    </div>
  );
}
