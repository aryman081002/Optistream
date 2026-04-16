import { useState } from "react";

const SmartImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-60 overflow-hidden">
      
      {/* Blurry placeholder */}
      <div
        className={`absolute inset-0 bg-gray-800 blur-md transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      ></div>

      {/* Actual Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default SmartImage;