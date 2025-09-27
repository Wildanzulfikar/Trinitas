import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Berapa jenis gudang penyimpanan?",
    answer: "Saat ini gudang penyimpanan berukuran: Gudang Kecil 840m2 Gudang Menengah 1.200m2-1.400m2 Gudang Besar 2.000m2-2.508m2 Jika anda menginginkan ukuran yang lebih luas dapat menghubungi tim sales kami. Karena kami masih memiliki open space yang luas.",
  },
  {
    question: "Jenis barang yang boleh disimpan?",
    answer: "Pada ketentuan syarat sewa gudang. Calon penyewa setuju dengan tidak menyimpan barang yang melanggar hukum, barang jenis limbah dan sebagainya. Untuk lebih jelas, lihat dokumen Syarat dan Ketentuan sewa unit gudang.",
  },
  {
    question: "Dimana lokasi unit gudang?",
    answer: "PT. Trinitas Prima Sejahtera Jl. Pintu Gerbang Tol Cibitung, Gandasari, Kec. Cikarang Bar., Kabupaten Bekasi, Jawa Barat 17530 Untuk direction dapat anda klik disini.",
  },
  {
    question: "Bagaimana untuk akses gudang?",
    answer: "Penyewa diwajibkan memiliki kunci keamanan/gembok sendiri. Sehingga yang dapat keluar masuk barang dari gudang yang anda sewa adalah anda sendiri.",
  },
  {
    question: "Berapa harga sewa di gudang penyimpanan?",
    answer: "Harga sewa gudang di Trinitas Prima Sejahtera: Hanya mulai dari Rp 50.000/m2 per bulannya (belum termasuk PPN)",
  },
  {
    question: "Apakah butuh deposit?",
    answer: "Iya, deposit diberikan sebesar 1 bulan harga gudang yang disewa. Akan dikembalikan jika penyewa sudah tidak lagi menyewa gudang.",
  },
  {
    question: "Bagaimana cara melakukan pembayaran?",
    answer: `Pembayaran hanya melalui transfer ke rekening PT. Trinitas Prima Sejahtera via Bank BCA.
             Catatan: Trinitas Prima Sejahtera tidak menerima pembayaran cash atau meminta pembayaran melalui bank lain selain Bank BCA.`,
  },
  {
    question: "Apakah dapat dibayar setahun penuh?",
    answer: "Anda dapat membayar gudang penyimpanan setahun penuh.",
  },
  {
    question: "Bagaimana jika keterlambatan pembayaran?",
    answer: `Kami sangat mengharapkan kerjasama dalam hal pembayaran yang tepat waktu dari penyewa.
             Jika sampai batas waktu dan teguran tidak dibayarkan, maka akan ada sanksi keterlambatan.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-black">
          Frequently Asked <span className="text-[#ED3500]">Questions</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Kami rangkum pertanyaan yang paling sering ditanyakan untuk memudahkan Anda.
        </p>
      </div>

      <div className="max-w-3xl rounded-lg mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-100 border-b-2 border-b-gray-200 shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-5 py-6 text-left text-gray-800 font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              <span
                className={`w-7 h-7 flex items-center justify-center rounded-full ${
                  openIndex === index
                    ? "bg-black" // Terbuka = hitam solid
                    : "bg-white border border-gray-400" // Tertutup = putih + border abu
                }`}
              >
                {openIndex === index ? (
                  <FaChevronDown className="text-white" /> // Terbuka → panah bawah putih
                ) : (
                  <FaChevronUp className="text-gray-400" /> // Tertutup → panah atas abu
                )}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600 whitespace-pre-line">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
