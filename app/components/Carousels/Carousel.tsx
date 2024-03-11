"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../Cards/Card";

export default function Carousel({ settings, items, cardSettings }: any) {
  return (
    <div>
      <Slider {...settings}>
        {items.map((item: any) => (
          <Card key={item.id} item={item} cardSettings={cardSettings} />
        ))}
      </Slider>
    </div> 
  );
}
