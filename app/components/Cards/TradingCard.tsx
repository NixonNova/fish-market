import Image from "next/image";

interface TradingCardProps {
  id: number;
  assetId: number;
  tradeType: number; //bid or ask
  fillType: number; //single or partial
  amount: number;
  price: number;
  created: Date;
}
export default function TradingCard({ item }: { item: TradingCardProps }) {
  return (
    <div className="flex w-full max-w-sm justify-between border-2 p-3">
      {/* left content */}
      <div className="flex flex-col">
        <div className="flex gap-3">
          <div className="relative">
            <Image width={60} height={30} src="/logo.jpg" alt="logo" />
            <div className="absolute left-0 bottom-0">
              <Image width={15} height={15} src="/arbitrum.png" alt="logo" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg">
              Ethena <sup>#12345</sup>{" "}
            </span>
            <span className="inline-block bg-blue-500 text-white text-xs text-center p-1">
              Single Fill
            </span>
          </div>
        </div>

        <div className="text-xs mt-3 uppercase">Offer</div>
        <div className="font-bold">
        <div className="flex">
            <span>14.00M</span>
            <div className="flex justify-center items-center mx-1">
              <Image width={15} height={10} src="/arbitrum.png" alt="logo" />
            </div>
          </div>

          
        </div>
        <div className="text-xs">$0.000357 / Shard</div>
      </div>

      {/* right content */}
      <div className="flex flex-col items-end">
        <Image width={60} height={30} src="/logo.jpg" alt="logo" />

        <div className="text-xs mt-3 uppercase">For</div>
        <div className="font-bold">
          <div className="flex">
            <span>45000</span>
            <div className="flex justify-center items-center mx-1">
              <Image width={15} height={10} src="/arbitrum.png" alt="logo" />
            </div>
          </div>
        </div>
        <div className="text-xs">$45000</div>
      </div>
    </div>
  );
}
