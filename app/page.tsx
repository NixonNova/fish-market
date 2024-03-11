import Image from "next/image";
import TopBar from "./components/TopBar/TopBar";
import Toolbar from "./components/ToolBar/ToolBar";
import MainCarousel from "./components/Carousels/MainCarousel";
import TradingVolumeCarousel from "./components/Carousels/TradingVolumeCarousel";
import TradingCards from "./components/TradingCards/TradingCards";

export default function Home() {

  return (
    <div className="flex h-screen">
      <aside className="hidden lg:block bg-green-300 w-64">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center items-center m-3">
            <Image
              src="/logo.jpg"
              alt="Main Logo"
              width={100}
              height={100}
              priority
            />
            <span>Fish Market Logo</span>
          </div>
          <ul className="list-none m-3">
            <li className="p-3 hover:bg-blue-500 hover:text-white transition duration-200 cursor-pointer">
              Pre-Market
            </li>
            <li className="p-3 hover:bg-blue-500 hover:text-white transition duration-200 cursor-pointer">
              OTC Market
            </li>
            <li className="p-3 hover:bg-blue-500 hover:text-white transition duration-200 cursor-pointer">
              Points Market
            </li>
            <li className="p-3 hover:bg-blue-500 hover:text-white transition duration-200 cursor-pointer">
              Staking
            </li>
            <li className="p-3 hover:bg-blue-500 hover:text-white transition duration-200 cursor-pointer">
              Dashboard
            </li>
          </ul>
          <div className="m-3 bottom-0 absolute">Copyright text</div>
        </div>
      </aside>
      <main className="flex-1 bg-blue-300 overflow-y-auto">
        <TopBar />
        <div className="mx-3 -z-10">
        <MainCarousel />
        <Toolbar />
        <TradingVolumeCarousel />
        <TradingCards />
        </div>
      </main>
    </div>
  );
}
