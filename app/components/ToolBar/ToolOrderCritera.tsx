export default function ToolOrderCriteria() {
  return (
    <div className="flex">
    <button className="grow bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 rounded-l">
      Buy
    </button>
    <button className="grow bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2">
      Sell
    </button>
    <button className="grow bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2">
      100% Filled
    </button>
    <button className="grow bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded-r">
      Closed
    </button>
  </div>

  );
}
