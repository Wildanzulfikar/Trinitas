// src/components/WarehouseGallery.jsx
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const images = [
  { src: 'daftar-gudang/A1.jpeg', alt: 'Gudang 1' },
  { src: 'daftar-gudang/A1.jpeg', alt: 'Gudang 2' },
  { src: 'daftar-gudang/A1.jpeg', alt: 'Gudang 3' },
];

export default function WarehouseGallery() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative bg-gradient-to-br from-white to-blue-50 py-16 px-4 md:px-20">
      {/* Title */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-4xl font-bold">
          <span className="underline font-semibold">Suasana</span>{' '}
          <span className="text-red-500 font-bold">Gudang</span>
        </h2>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl">
          Gudang kami memiliki area luas, akses jalan yang lebar, serta fasilitas pendukung untuk kelancaran distribusi.
        </p>
      </div>

      {/* Image slider */}
      <div className="flex justify-center items-center space-x-6 mb-8">
        {images.map((img, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-md transition-all duration-300 ease-in-out shadow
                ${isActive ? 'w-[400px] h-56' : 'w-[200px] h-40 opacity-70'}
              `}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              {isActive && (
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 px-4 py-1 rounded">
                  <p className="text-white font-semibold text-sm">
                    Jalan Utama Gudang
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Panah navigasi di bawah tengah */}
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

      {/* Tombol Hubungi Kami di pojok kanan atas */}
      <div className="absolute top-8 right-8">
        <button className="flex items-center border border-blue-600 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-100 transition">
          Hubungi Kami
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
