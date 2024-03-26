'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import Card from "../Cards/Card";
 
function NoArrow() {
  return (
    <></>
  );
}

export default function Carousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow:<NoArrow />,
        prevArrow:<NoArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const items = [
        {
          id: 1,
          name: 'Item 1',
          avatar: '/bitcoin.png',
        },
        {
          id: 2,
          name: 'Item 2',
          avatar: '/arbitrum.png',
        },
        {
          id: 3,
          name: 'Item 3',
          avatar: '/lido-dao.png',
        },
        {
          id: 4,
          name: 'Item 4',
          avatar: '/stacks.png',
        }
      ];

  return (
    <Slider {...settings}>
      {
        items.map((item) => (
          <Card key={item.id} item={item} /> 
        ))
      }
    </Slider>
  );
}
