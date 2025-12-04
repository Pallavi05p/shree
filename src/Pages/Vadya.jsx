import React from "react";
import ReactPlayer from "react-player";
import redBg from "/bg.jpg"; // Background image

// Video data: local MP4 and YouTube links
const videos = [
  { year: "2022", title: "|| 🥁 वाद्य पूजन सोहळा 2022 ||", url: "/vadya2022.mp4" },
  { year: "2019", title: "|| 🥁वाद्य पूजन सोहळा २०१९ ||", url: "https://www.youtube.com/watch?v=gAXJ9wBceto" },
  { year: "2018", title: "|| वाद्य 🌺पूजन सोहळा २०१८ ||", url: "https://www.youtube.com/watch?v=k9X-8iocFUs" },
  { year: "2018", title: "🚩🚩महाकाल प्रतिष्ठाण 🚩🚩 नाद. स्वातंत्र्याचा ! 15 आँगस्ट २०१८", url: "https://www.youtube.com/watch?v=c5prEv4o-VA" },
  { year: "2017", title: "|| वाद्य 🌺पूजन सोहळा २०१७ ||", url: "https://www.youtube.com/watch?v=XLANOAxNG8g" },
];

export default function Vadya() {
  return (
    <div
      className="relative w-full min-h-screen bg-fixed bg-cover bg-center py-20 px-6"
      style={{ backgroundImage: `url(${redBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        {/* Page Title */}
        <h1 className="text-center text-4xl font-bold text-white mb-16 drop-shadow-lg">
          🚩 वाद्य पूजन सोहळे 🚩
        </h1>

        {/* Video List */}
        <div className="flex flex-col gap-20">
          {videos.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Text Section */}
              <div className="w-full md:w-1/2 text-white text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 drop-shadow-lg">
                  {item.title}
                </h2>
              </div>

              {/* Video Section */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-yellow-400 w-full max-w-[600px] aspect-video bg-black">
                  <ReactPlayer
                    url={item.url}
                    controls
                    width="100%"
                    height="100%"
                    light={false}
                    playing={false}
                    config={
                      item.url.includes("youtube")
                        ? {
                            youtube: {
                              playerVars: {
                                modestbranding: 1,
                                rel: 0,
                                showinfo: 0,
                                disablekb: 0,
                              },
                            },
                          }
                        : {}
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
