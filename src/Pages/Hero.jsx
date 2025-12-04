import React, { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [showImage, setShowImage] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 13000);

    return () => clearTimeout(timer);
  }, []);

  // Auto audio on first click/touch anywhere
  useEffect(() => {
    const enableAudio = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play();
      }
      // Remove listener after first click
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    document.addEventListener("touchstart", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
      document.removeEventListener("touchstart", enableAudio);
    };
  }, []);

  return (
    <div className="w-full h-[60vh] md:h-[80vh] relative">

      {!showImage ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover"
        >
          <source src="/maha.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/Cover.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      )}

    </div>
  );
}
