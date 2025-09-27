// src/components/WarehouseGallery.jsx
import React, { useState, useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const images = [
  { src: "suasana-gudang/(1).jpeg", vibe: "Suasana gudang", alt: "Gudang 1" },
  { src: "suasana-gudang/(2).jpeg", vibe: "Jalan utama gudang", alt: "Gudang 2" },
  { src: "suasana-gudang/(3).jpeg", vibe: "Parkiran", alt: "Gudang 3" },
  { src: "suasana-gudang/(4).jpeg", alt: "Gudang 4" },
  { src: "suasana-gudang/(5).jpeg", alt: "Gudang 5" },
  { src: "suasana-gudang/(6).jpeg", alt: "Gudang 6" },
  { src: "suasana-gudang/(7).jpeg", alt: "Gudang 7" },
  { src: "suasana-gudang/(8).jpeg", alt: "Gudang 8" },
  { src: "suasana-gudang/(9).jpeg", alt: "Gudang 9" },
  { src: "suasana-gudang/(10).jpeg", alt: "Gudang 10" },
];

export default function WarehouseGallery() {
  const [current, setCurrent] = useState(0);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section id="galeri" className="relative bg-gradient-to-br from-white to-blue-50 py-16 px-4 md:px-20">
      {/* Title */}
      <div className="max-w-6xl mx-auto mb-12">
        <div className="md:flex justify-between items-center">
          <h2 className="text-3xl font-extrabold mb-4">
            <span className="">Suasana</span>{" "}
            <span className="text-red-500">Gudang</span>
          </h2>
          <button className="flex items-center border border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-100 transition">
            Hubungi Kami
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl">
          Gudang kami memiliki area luas, akses jalan yang lebar, serta fasilitas
          pendukung untuk kelancaran distribusi.
        </p>
      </div>

      {/* Image slider */}
      <div
        ref={containerRef}
        className="flex max-w-6xl mx-auto items-center space-x-6 mb-8 overflow-hidden scroll-smooth px-4 md:px-0"
      >
        {images.map((img, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              ref={(el) => {
                if (el && isActive) {
                  el.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center",
                  });
                }
              }}
              className={`relative flex-shrink-0 overflow-hidden rounded-md shadow-lg cursor-pointer transform transition-all duration-500 ease-in-out
                ${isActive ? "w-[480px] h-64 scale-105 z-10" : "w-[220px] h-40 opacity-70 scale-100 z-0"}
              `}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full object-cover"
              />
              {isActive && img.vibe && (
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-1 rounded">
                  <p className="text-white font-semibold text-sm">{img.vibe}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Panah navigasi */}
      <div className="flex justify-center space-x-6">
        <button
          onClick={prevSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-shadow shadow-lg"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-shadow shadow-lg"
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
