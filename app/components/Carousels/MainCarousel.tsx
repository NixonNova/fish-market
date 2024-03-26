import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "./Carousel";
import NoArrow from "./NoArrow";

async function getAssets() {
  const response = await fetch("https://65d0f04fab7beba3d5e3eb78.mockapi.io/api/v1/assets")
  if  (!response.ok) {
    throw new Error("Failed to fetch assets")
  }
  return response.json()
}

export default async function MainCarousel() {

  const items = await getAssets()
  console.log(items)

  const settings = {
    dots: true,
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
          dots: true,
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

  const cardSettings = {
    classes: "min-w-80 rounded-xl flex flex-col items-center justify-center p-3 mr-3",
    width: 100,
    heigth: 50,
  }

  return (
    <div className="mt-3 mb-9">
      <Carousel settings={settings} items={items} cardSettings={cardSettings} />  
    </div>
  );
}
