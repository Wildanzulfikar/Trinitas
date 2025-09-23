import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "Berapa jenis gudang penyimpanan?",
    answer: "Teks jawaban untuk pertanyaan ini.",
  },
  {
    question: "Jenis barang yang boleh disimpan?",
    answer: "Teks jawaban untuk pertanyaan ini.",
  },
  {
    question: "Dimana lokasi unit gudang?",
    answer: "Teks jawaban untuk pertanyaan ini.",
  },
  {
    question: "Bagaimana untuk akses gudang?",
    answer: "Teks jawaban untuk pertanyaan ini.",
  },
  {
    question: "Berapa harga sewa di gudang penyimpanan?",
    answer: "Teks jawaban untuk pertanyaan ini.",
  },
  {
    question: "Apakah butuh deposit?",
    answer: "Teks jawaban untuk pertanyaan ini.",
  },
  {
    question: "Bagaimana cara melakukan pembayaran?",
    answer: `Pembayaran hanya melalui transfer ke rekening PT. Trinitas Prima Sejahtera via Bank BCA.
Catatan: Trinitas Prima Sejahtera tidak menerima pembayaran cash atau meminta pembayaran melalui bank lain selain Bank BCA.`,
  },
  {
    question: "Apakah dapat dibayar setahun penuh?",
    answer: "Teks jawaban untuk pertanyaan ini.",
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
          Frequently Asked <span className="text-orange-500">Questions</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Kami rangkum pertanyaan yang paling sering ditanyakan untuk memudahkan Anda.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-gray-50 border rounded-lg shadow-sm overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium focus:outline-none"
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
