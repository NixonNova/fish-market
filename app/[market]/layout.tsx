import TopBar from "../components/TopBar/TopBar";

export default function MarketLayout({
  mainCarousel,
  toolbar,
  tradingVolumeCarousel,
  tradingCards,
  params,
}: {
  mainCarousel: React.ReactNode;
  toolbar: React.ReactNode;
  tradingVolumeCarousel: React.ReactNode;
  tradingCards: React.ReactNode;
  params: { market: string };
}) {
  return (
    <>
      <TopBar market={params.market} />
      <div className="mx-3 -z-10">
        {mainCarousel}
        {toolbar}
        {tradingVolumeCarousel}
        {tradingCards}
      </div>
    </>
  );
}
