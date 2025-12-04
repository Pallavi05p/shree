import React from "react";
import Slider from "react-slick";

// ✅ 2021 Images
import img2021_1 from "../assets/g/2021ganpati/1.jpg";
import img2021_2 from "../assets/g/2021ganpati/2.jpg";
import img2021_3 from "../assets/g/2021ganpati/3.jpg";
import img2021_4 from "../assets/g/2021ganpati/4.jpg";
import img2021_5 from "../assets/g/2021ganpati/5.jpg";

// ✅ 2020 Images
import img2020_1 from "../assets/g/2020ganpati/1.jpg";
import img2020_2 from "../assets/g/2020ganpati/2.jpg";
import img2020_3 from "../assets/g/2020ganpati/3.jpg";
import img2020_4 from "../assets/g/2020ganpati/4.jpg";
import img2020_5 from "../assets/g/2020ganpati/5.jpg";

// ✅ 2019 Images
import img2019_1 from "../assets/g/2019ganpati/sorted/1.jpg";
import img2019_2 from "../assets/g/2019ganpati/sorted/2.jpg";
import img2019_3 from "../assets/g/2019ganpati/sorted/5.jpg";
import img2019_4 from "../assets/g/2019ganpati/sorted/7.jpg";
import img2019_5 from "../assets/g/2019ganpati/sorted/9.jpg";

// ✅ 2018 Images
import img2018_1 from "../assets/g/2018ganpati/1.jpg";
import img2018_2 from "../assets/g/2018ganpati/2.jpg";
import img2018_3 from "../assets/g/2018ganpati/3.jpg";
import img2018_4 from "../assets/g/2018ganpati/4.jpg";
import img2018_5 from "../assets/g/2018ganpati/5.jpg";

// ✅ 2017 Images
import img2017_1 from "../assets/g/2017/1.jpg";
import img2017_2 from "../assets/g/2017/2.jpg";
import img2017_3 from "../assets/g/2017/3.jpg";
import img2017_4 from "../assets/g/2017/4.jpg";
import img2017_5 from "../assets/g/2017/5.jpg";

// ✅ Background
import bgImage from "/bg.jpg";

export default function Photos() {
  const gallery = [
    { year: "2021", images: [img2021_1, img2021_2, img2021_3, img2021_4, img2021_5] },
    { year: "2020", images: [img2020_1, img2020_2, img2020_3, img2020_4, img2020_5] },
    { year: "2019", images: [img2019_1, img2019_2, img2019_3, img2019_4, img2019_5] },
    { year: "2018", images: [img2018_1, img2018_2, img2018_3, img2018_4, img2018_5] },
    { year: "2017", images: [img2017_1, img2017_2, img2017_3, img2017_4, img2017_5] },
  ];

  // ✅ Carousel settings
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
      <div className="min-h-screen w-full p-6 rounded-xl">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          📸 Photo Gallery
        </h1>

        {gallery.map((album) => (
          <div key={album.year} className="mb-20">
            <h2 className="text-2xl font-semibold text-center text-yellow-300 mb-8">
              ✨ {album.year} Memories
            </h2>

            {/* ✅ Year-wise Carousel */}
            <div className="max-w-4xl mx-auto">
              <Slider {...settings}>
                {album.images.map((img, idx) => (
                  <div key={idx} className="px-4">
                    <div className="overflow-hidden rounded-2xl shadow-xl">
                      <img
                        src={img}
                        alt={`${album.year}-${idx + 1}`}
                        className="w-full h-[500px] object-cover rounded-2xl"
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
    </div>
  );
}
