export default function QuantityInput() {
  return (
    <div className="w-full">
      <label className="text-sm text-gray-500">quantity</label>

      <div className="relative mt-2 w-full">
        <input
          type="number"
          placeholder="Please enter the amount of gold coins"
          className="
            w-full
            bg-gray-100
            rounded-full
            px-4 py-3 pr-16
            outline-none
            text-[16px]
          "
        />

        <div
          className="
            absolute
            right-2
            top-1/2
            -translate-y-1/2
            w-10 h-10
            bg-yellow-400
            rounded-full
            flex items-center justify-center
          "
        >
          🪙
        </div>
      </div>

      <p className="text-right text-sm text-gray-400 mt-2">
        0 USD
      </p>
    </div>
  );
}
