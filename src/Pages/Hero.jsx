import React, { useEffect, useState } from "react";

export default function Hero() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
    }, 13000); // 13 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-[60vh] md:h-[80vh] relative">
      {!showImage ? (
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/maha.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src="/Cover.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />
      )}

      {/* Optional overlay text */}
      <div className="absolute inset-0 flex items-center justify-center">
        
      </div>
    </div>
  );
}
