import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import shiv1 from "../assets/g/2019shivjayanti/1.jpg";
import shiv2 from "../assets/g/2019shivjayanti/2.jpg";
import shiv3 from "../assets/g/2019shivjayanti/3.jpg";
import shiv4 from "../assets/g/2019shivjayanti/4.jpg";
import shiv5 from "../assets/g/2019shivjayanti/5.jpg";
import shiv6 from "../assets/g/2019shivjayanti/6.jpg";
import shiv7 from "../assets/g/2019shivjayanti/7.jpg";
import shiv8 from "../assets/g/2019shivjayanti/8.jpg";

import gan2020_1 from "../assets/g/2020ganpati/1.jpg";
import gan2020_2 from "../assets/g/2020ganpati/2.jpg";
import gan2020_3 from "../assets/g/2020ganpati/3.jpg";
import gan2020_4 from "../assets/g/2020ganpati/4.jpg";
import gan2020_5 from "../assets/g/2020ganpati/5.jpg";

import gan2018_1 from "../assets/g/2018ganpati/1.jpg";
import gan2018_2 from "../assets/g/2018ganpati/2.jpg";
import gan2018_3 from "../assets/g/2018ganpati/3.jpg";
import gan2018_4 from "../assets/g/2018ganpati/4.jpg";
import gan2018_5 from "../assets/g/2018ganpati/5.jpg";
import gan2018_6 from "../assets/g/2018ganpati/6.jpg";
import gan2018_7 from "../assets/g/2018ganpati/7.jpg";
import gan2018_8 from "../assets/g/2018ganpati/8.jpg";
import gan2018_9 from "../assets/g/2018ganpati/9.jpg";
import gan2018_10 from "../assets/g/2018ganpati/10.jpg";
import gan2018_11 from "../assets/g/2018ganpati/11.jpg";
import gan2018_12 from "../assets/g/2018ganpati/12.jpg";
import gan2018_13 from "../assets/g/2018ganpati/13.jpg";
import gan2018_14 from "../assets/g/2018ganpati/14.jpg";
import gan2018_15 from "../assets/g/2018ganpati/15.jpg";

import bgImage from "/bg.jpg";

export default function Utsav() {
  const utsavGallery = [
    { year: "2019 Shivjayanti", images: [shiv1, shiv2, shiv3, shiv4, shiv5, shiv6, shiv7, shiv8] },
    { year: "2020 Ganpati Utsav", images: [gan2020_1, gan2020_2, gan2020_3, gan2020_4, gan2020_5] },
    {
      year: "2018 Ganpati Utsav",
      images: [
        gan2018_1, gan2018_2, gan2018_3, gan2018_4, gan2018_5,
        gan2018_6, gan2018_7, gan2018_8, gan2018_9, gan2018_10,
        gan2018_11, gan2018_12, gan2018_13, gan2018_14, gan2018_15,
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div
      className="pt-24 pb-10 px-6 min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="text-4xl font-bold text-center text-white mb-12">
        🎉 Utsav Gallery
      </h1>

      {utsavGallery.map((album) => (
        <div key={album.year} className="mb-20">
          <h2 className="text-2xl font-semibold text-center text-yellow-300 mb-8">
            ✨ {album.year}
          </h2>

          <div className="max-w-4xl mx-auto">
            <Slider {...settings}>
              {album.images.map((img, idx) => (
                <div key={idx} className="px-4">
                  <div className="overflow-hidden rounded-2x p-2">
                    <img
                      src={img}
                      alt=""
                      className="w-full h-[500px] object-contain bg-black rounded-2xl"
                    />
                    <p className="text-center text-white mt-2">
                      Photo {idx + 1}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      ))}
    </div>
  );
}
