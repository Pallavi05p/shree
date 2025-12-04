import React from "react";
import bgImage from "/bg.jpg";
import one from "../assets/g/news/one.jpg";
import two from "../assets/g/news/two.jpg";
import three from "../assets/g/news/three.jpg";
import four from "../assets/g/news/four.jpg";
import five from "../assets/g/news/five.jpg";

export default function Home() {
  const sections = [
    {
      title: "Blood Donation 🩸 Camp",
      text: [
        "We 🙏🏻 appreciate your donation! Your contribution will help 🤝🏻 us change lives – literally!",
        "Someone who would have lost their life was spared because you gave us your blood.",
        "Someone’s quality of life was improved because you gave us your blood.",
        "That’s pretty ✅ remarkable, and so are you. Thank you!",
      ],
      img: one,
    },
    {
      title: "🎉 Miravnuk 2019",
      text: [
        "संभाजीनगर मधील सर्वात मोठी मिरवणुक",
        "वर्ष : २०१९",
        "|| महाकाल प्रतिष्ठान , संभाजीनगर ||",
        "अधिपती, सुखपती, छंदपती, गंधपती ... अशा गणरायाचे भाविकांनी मोठ्या 👏🏻उत्साहात स्वागत केले",
      ],
      img: two,
    },
    {
      title: "🏆 Awards Winning Moment 2017",
      text: [
        "संभाजीनगर मधील भव्य 🥁ढोल ताशा स्पर्धा",
        "वर्ष : २०१७",
        "|| महाकाल प्रतिष्ठान , संभाजीनगर ||",
        "आपल्या मंडळाने तृतीय 🥉 पारितोषिक पटकावले",
      ],
      img: three,
    },
    {
      title: "🎉 Miravnuk 2019",
      text: [
        "🌹 वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ ।🌹",
        "🌹 निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥🌹",
        "वर्ष : २०१९",
        "|| महाकाल प्रतिष्ठान , संभाजीनगर ||",
      ],
      img: four,
    },
    {
      title: "🏆 Award Winning Moment 2018",
      text: [
        "सर्वो्कृष्ट शिस्तबद्ध पथक प्रथम",
        "वर्ष : २०१८",
        "|| महाकाल प्रतिष्ठान , संभाजीनगर ||",
        "आपल्या मंडळाने प्रथम 🥇 पारितोषिक पटकावले",
      ],
      img: five,
    },
  ];

  return (
    <div
      className="w-full bg-cover bg-center bg-fixed py-3"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* ✅ Directly News Sections (Hero removed) */}
      <div>
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-10 px-6 md:px-16 py-12 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                {sec.title}
              </h1>
              {sec.text.map((line, i) => (
                <p key={i} className="mb-3 text-lg text-white leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
              <img
                src={sec.img}
                alt={sec.title}
                className="w-full max-w-lg rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
