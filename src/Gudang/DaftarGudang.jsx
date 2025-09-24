import { useRef, useEffect, useState } from "react";
import { CheckCircle, XCircle, ChevronLeft, ChevronRight } from "lucide-react";

export default function DaftarGudang() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const data = [
    {
      id: 1,
      name: "Gudang A1 - A4",
      size: "1420 m²",
      img: "daftar-gudang/A1.jpeg",
      fasilitas: { Kantor: true, Toilet: true, Wastafel: true },
      catatan: "Fasilitas ini terdapat di A1, A2",
      highlight: true,
    },
    {
      id: 2,
      name: "Gudang B2",
      size: "1420 m²",
            img: "daftar-gudang/A1.jpeg",

      fasilitas: { Kantor: true, Toilet: false, Wastafel: true },
      catatan: "Fasilitas ini terdapat di A1, A2",
      highlight: false,
    },
    {
      id: 3,
      name: "Gudang L1",
      size: "1500 m²",
            img: "daftar-gudang/A1.jpeg",

      fasilitas: { Kantor: true, Toilet: true, Wastafel: false },
      catatan: "Fasilitas ini terdapat di L1",
      highlight: false,
    },
    {
      id: 4,
      name: "Gudang B1",
      size: "1600 m²",
      img: "daftar-gudang/A1.jpeg",
      fasilitas: { Kantor: false, Toilet: true, Wastafel: true },
      catatan: "Fasilitas ini terdapat di B1",
      highlight: false,
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      let newIndex = activeIndex;

      if (direction === "left") {
        newIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
      } else {
        newIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
      }

      setActiveIndex(newIndex);
      scrollRef.current.scrollTo({
        left: newIndex * clientWidth,
        behavior: "smooth",
      });

      // looping kalau manual
      if (scrollRef.current.scrollLeft < 0) {
        scrollRef.current.scrollTo({ left: scrollWidth - clientWidth });
      }
      if (scrollRef.current.scrollLeft >= scrollWidth) {
        scrollRef.current.scrollTo({ left: 0 });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 relative">
      <h2 className="text-2xl font-bold mb-2">
        Daftar <span className="text-red-500">Gudang</span>
      </h2>
      <p className="text-gray-600 mb-4">
        Pilih gudang sesuai kebutuhan Anda, dilengkapi dengan detail luas dan fasilitas.
      </p>
      <div className="border-l-4 border-black pl-3 mb-6">
        <p className="font-medium">
          Stok Gudang Yang Masih Tersedia <b>B1, B2, L1</b>, Silahkan hubungi nomor
        </p>
      </div>

      {/* Tombol navigasi */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Scrollable Row */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-hidden scroll-smooth"
      >
        {data.map((item) => (
          <div
            key={item.id}
            className={`w-full min-w-full rounded-xl shadow-md overflow-hidden border flex-shrink-0 ${
              item.highlight ? "border-blue-400" : "border-gray-200"
            }`}
          >
            <img
              src={item.img}
              alt={item.name}
              className={`w-full h-64 object-cover ${
                item.highlight ? "border-b-4 border-blue-400" : ""
              }`}
            />
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                  {item.size}
                </span>
              </div>
              <ul className="space-y-1 mb-3">
                {Object.entries(item.fasilitas).map(([fasilitas, tersedia]) => (
                  <li
                    key={fasilitas}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    {tersedia ? (
                      <CheckCircle className="text-green-500 w-5 h-5" />
                    ) : (
                      <XCircle className="text-red-500 w-5 h-5" />
                    )}
                    <span>{fasilitas}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 text-sm">Catatan: {item.catatan}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Indikator Dot */}
      <div className="flex justify-center mt-4 space-x-2">
        {data.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-red-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
