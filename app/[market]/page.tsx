import MainCarousel from "../components/Carousels/MainCarousel";
import TradingVolumeCarousel from "../components/Carousels/TradingVolumeCarousel";
import Toolbar from "../components/ToolBar/ToolBar";
import TopBar from "../components/TopBar/TopBar";
import TradingCards from "../components/TradingCards/TradingCards";

export default function Page({ params }: { params: { market: string } }) {
  return (
    <>
      <TopBar market={params.market} />

      <div className="mx-3 -z-10">
        <MainCarousel />
        <Toolbar />
        <TradingVolumeCarousel />
        <TradingCards />
      </div>
    </>
  );
}
