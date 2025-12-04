import { useState } from "react";

export default function App() {
  const [showImage, setShowImage] = useState(false);

  const handleVideoEnd = () => {
    setShowImage(true);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      {!showImage ? (
        <video
          className="w-full h-screen object-cover"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
        >
          <source src="/maha.mp4" type="video/mp4" />
        </video>
      ) : (
        <div className="w-full h-screen flex justify-center items-center relative">
          {/* Ganpati Bappa Image */}
          <img
            src="/cover.jpg"
            alt="Ganpati Bappa"
            className="w-full h-screen object-cover"
          />

          {/* Navbar (appears after image) */}
          <nav className="absolute top-0 left-0 w-full bg-white/70 p-4 flex justify-center gap-6 text-xl font-bold">
            <a href="#home" className="hover:text-red-600">Home</a>
            <a href="#about" className="hover:text-red-600">About</a>
            <a href="#gallery" className="hover:text-red-600">Gallery</a>
            <a href="#contact" className="hover:text-red-600">Contact</a>
          </nav>
        </div>
      )}
    </div>
  );
}
