import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel";
import NoArrow from "./NoArrow";

export default function TradingVolumeCarousel() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NoArrow />,
    prevArrow: <NoArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = [
    {
      id: 1,
      name: "Item 1",
      image: "/bitcoin.png",
    },
    {
      id: 2,
      name: "Item 2",
      image: "/arbitrum.png",
    },
    {
      id: 3,
      name: "Item 3",
      image: "/lido-dao.png",
    },
    {
      id: 4,
      name: "Item 4",
      image: "/stacks.png",
    },
  ];

  const cardSettings = {
    classes: "bg-white rounded-lg shadow-lg p-2 mr-2",
    width: 20,
    heigth: 10,
  };

  return (
    <div className="my-6">
      <Carousel settings={settings} items={items} cardSettings={cardSettings} />
    </div>
  );
}
