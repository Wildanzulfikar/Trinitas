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
      highlight: false,
    },
    {
      id: 2,
      name: "Gudang B2",
      size: "2400 m²",
      img: "daftar-gudang/B2.jpeg",

      fasilitas: { Kantor: false, Toilet: false, Wastafel: true },
      catatan: " - ",
      highlight: true,
    },
    {
      id: 3,
      name: "Gudang B3",
      size: "2400 m²",
      img: "daftar-gudang/B3.jpeg",

      fasilitas: { Kantor: false, Toilet: false, Wastafel: true },
      catatan: " - ",
      highlight: false,
    },
    {
      id: 4,
      name: "Gudang B4",
      size: "2400 m²",
      img: "daftar-gudang/B4.jpeg",
      fasilitas: { Kantor: false, Toilet: false, Wastafel: true },
      catatan: " - ",
      highlight: false,
    },
    {
      id: 5,
      name: "Gudang B5",
      size: "2000 m²",
      img: "daftar-gudang/B5.jpeg",
      fasilitas: { Kantor: true, Toilet: true, Wastafel: true },
      catatan: " - ",
      highlight: false,
    },
    {
      id: 6,
      name: "Gudang B6",
      size: "1200 m²",
      img: "daftar-gudang/B6.jpeg",
      fasilitas: { Kantor: true, Toilet: true, Wastafel: true },
      catatan: " - ",
      highlight: false,
    },
    {
      id: 7,
      name: "Gudang B7",
      size: "1600 m²",
      img: "daftar-gudang/B7.jpeg",
      fasilitas: { Kantor: false, Toilet: true, Wastafel: true },
      catatan: " - ",
      highlight: false,
    },
    {
      id: 8,
      name: "Gudang L1",
      size: "2508 m²",
      img: "daftar-gudang/L1.jpeg",
      fasilitas: { Kantor: true, Toilet: true, Wastafel: true },
      catatan: " - ",
      highlight: true,
    },
    {
      id: 9,
      name: "Gudang L2",
      size: "840 m²",
      img: "daftar-gudang/L2.jpeg",
      fasilitas: { Kantor: false, Toilet: false, Wastafel: false },
      catatan: " - ",
      highlight: false,
    },
  ];

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const cards = scrollRef.current.children;
    let newIndex = activeIndex;

    if (direction === "left") {
      newIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    } else {
      newIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    }

    setActiveIndex(newIndex);

    const targetCard = cards[newIndex];
    if (targetCard) {
      scrollRef.current.scrollTo({
        left: targetCard.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  // Auto-slide setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="px-5 md:px-5">
      <div id="gudang" className="max-w-6xl md:mx-auto py-10 relative">
        <h2 className="text-3xl font-extrabold mb-2">
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
          className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {data.map((item) => (
            <div
              key={item.id}
              className={`rounded-xl flex-shrink-0 shadow-md overflow-hidden border ${
                item.highlight ? "border-blue-400" : "border-gray-200"
              }`}
            >
              <img
                src={item.img}
                alt={item.name}
                className={`w-[368px] h-64 object-cover ${
                  item.highlight ? "border-b-4 border-blue-400" : ""
                }`}
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                    {item.size}
                  </span>
                </div>
                <ul className="space-y-3 mb-3">
                  {Object.entries(item.fasilitas).map(([fasilitas, tersedia]) => (
                    <li key={fasilitas} className="flex items-center gap-2 text-gray-700">
                      {tersedia ? (
                        <CheckCircle className="text-green-500 w-5 h-5" />
                      ) : (
                        <XCircle className="text-red-500 w-5 h-5" />
                      )}
                      <span>{fasilitas}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-500 mt-8 text-sm">Catatan: {item.catatan}</p>
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
    </div>
  );
}
