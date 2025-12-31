export default function MyCoinsCard() {
  return (
    <div className="bg-white rounded-xl p-4 flex justify-between items-center shadow-sm mb-4">
      <p className="text-gray-500">
        My coins:{" "}
        <span className="text-orange-400 font-semibold">0.00</span>
      </p>

      <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center">
        📄
      </div>
    </div>
  );
}
