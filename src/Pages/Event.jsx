import React from "react";
import ReactPlayer from "react-player";
import redBg from "/bg.jpg"; 

export default function Events() {
  const events = [
    {
      title:
        "|| २०२० 🚩 शिवराज्यभिषेक  दिनानिमत्त महाकाल प्रतिष्ठाण मधील युवती वादकांनी महाराजांना दिलेली मानवंदना ||",
      url: "https://www.youtube.com/embed/e9BYe9ik5mE",
    },
    {
      title:
        "|| ⛳ शिवजन्मोत्सव २०१९ , संभाजीनगर गुलमंडी चौक ते क्रांती चौक शिवजन्मोत्सव मिरवणूक ||",
      url: "https://www.youtube.com/embed/zJbbiQ5En7s",
    },
    {
      title: "|| गणेश 🎉जन्मोत्सव उत्सव २०१८... ।। पालखी सोहळा ।।",
      url: "https://www.youtube.com/embed/LdgMSLUvM5s",
    },
    {
      title: "|| 🚩शिवजन्मोत्सव २०१८ , संभाजीनगर ||",
      url: "https://www.youtube.com/embed/TvWNntP84SA",
    },
    {
      title: "|| महाकाल प्रतिष्ठान प्रवास ||२०१७ ||",
      url: "https://www.youtube.com/embed/1j3b-hytyYM",
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen bg-fixed bg-cover bg-center py-20 px-6"
      style={{ backgroundImage: `url(${redBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <h1 className="text-center text-4xl font-bold text-white mb-16 drop-shadow-lg">
          🚩 महाकाल प्रतिष्ठाण इव्हेंट्स 🚩
        </h1>

        <div className="flex flex-col gap-20">
          {events.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Video */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-yellow-400 w-full max-w-[600px] aspect-video bg-black">
                  <ReactPlayer
                    url={item.url}
                    controls
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-white text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 drop-shadow-lg leading-relaxed">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
