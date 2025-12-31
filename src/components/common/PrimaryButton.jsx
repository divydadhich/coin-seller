export default function PrimaryButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-blue-500 to-blue-600
                 text-white py-3 rounded-full text-lg font-semibold
                 shadow-md active:scale-95 transition "
    >
      {text}
    </button>
  );
}
