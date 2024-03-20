export default function TopBar({ market }: { market: string }) {
  return (
    <nav className="sticky top-0 bg-yellow-500 p-3 flex justify-between z-10">
      <div className="py-1">
        <p className="font-bold">{market}</p>
      </div>
      <div className="py-1">
        <select
          className="w-32 rounded border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 mr-2 cursor-pointer"
          name="options"
        >
          <option value="option1">Ethereum</option>
          <option value="option2">Merlin</option>
        </select>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded mr-2">
          Connect Wallet
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded mr-2">
          Referral
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-2 rounded mr-2">
          Notifications
        </button>
      </div>
    </nav>
  );
}