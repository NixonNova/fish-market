import TradingCard from "../Cards/TradingCard";

export default function TradingCards() {
  const items = [
    {
      id: 1,
      assetId: 101,
      tradeType: 1,
      fillType: 1,
      amount: 100,
      price: 2000,
      created: new Date("2021-10-04T00:00:00Z"),
    },
    {
      id: 2,
      assetId: 102,
      tradeType: 2,
      fillType: 2,
      amount: 200,
      price: 4000,
      created: new Date("2021-10-04T00:00:00Z"),
    },
    {
      id: 3,
      assetId: 103,
      tradeType: 1,
      fillType: 1,
      amount: 300,
      price: 6000,
      created: new Date("2021-10-04T00:00:00Z"),
    },
    {
      id: 4,
      assetId: 104,
      tradeType: 2,
      fillType: 2,
      amount: 400,
      price: 8000,
      created: new Date("2021-10-04T00:00:00Z"),
    },
    {
      id: 5,
      assetId: 105,
      tradeType: 1,
      fillType: 1,
      amount: 500,
      price: 10000,
      created: new Date("2021-10-04T00:00:00Z"),
    },
    {
      id: 6,
      assetId: 105,
      tradeType: 1,
      fillType: 1,
      amount: 500,
      price: 10000,
      created: new Date("2021-10-04T00:00:00Z"),
    },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item: any) => (
        <TradingCard key={item.id} item={item} />
      ))}
    </div>
  );
}
