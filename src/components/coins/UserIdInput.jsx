export default function UserIdInput() {
  return (
   <div>
  <label className="text-sm text-gray-500">User ID</label>

  <div className="relative mt-2">
    <input
      type="text"
      placeholder="Please enter user id"
      className="
        w-full
        bg-gray-100
        rounded-full
        pl-4
        pr-24
        py-2.5
        outline-none
        text-[16px]
      "
    />

    <button
      className="
        absolute
        right-2
        top-1/2
        -translate-y-1/2
        bg-gray-300
        text-white
        px-4
        py-1.5
        rounded-full
        text-sm
      "
    >
      Search
    </button>
  </div>
</div>
);

}
