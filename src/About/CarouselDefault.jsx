import React, { useState, useEffect } from "react";

const images = [
  "suasana-gudang/(1).jpeg",
  "suasana-gudang/(2).jpeg",
  "suasana-gudang/(3).jpeg"
];

export default function CarouselDefault() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-md relative">
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${idx === current ? 'bg-white' : 'bg-gray-400'}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
