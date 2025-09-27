import { Truck, Package, Zap, Handshake } from "lucide-react";
import { motion } from "framer-motion";

export default function VisiMisiPage() {
  const missions = [
    { icon: Package, text: "Gudang modern & layanan profesional", color: "purple" },
    { icon: Truck, text: "Solusi logistik terintegrasi", color: "orange" },
    { icon: Zap, text: "Inovasi & kecepatan layanan", color: "yellow" },
    { icon: Handshake, text: "Kemitraan & konektivitas luas", color: "blue" },
  ];

  const colorMap = {
    purple: "bg-purple-500 text-white",
    orange: "bg-orange-500 text-white",
    yellow: "bg-yellow-500 text-white",
    blue: "bg-blue-500 text-white",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-white flex flex-col items-center p-8">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-extrabold mb-12 border border-gray-300 px-8 py-3 rounded-full shadow-lg bg-white"
      >
        Visi <span className="text-red-500">& Misi</span>
      </motion.h2>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-32 max-w-6xl items-start">
        {/* Vertical dividing line */}
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-red-300 via-gray-300 to-blue-300 opacity-50"></div>

        {/* VISI Column */}
        <div className="space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="px-4 py-1 bg-red-500 text-white font-bold rounded-full shadow flex items-center gap-1 animate-pulse">
              <Truck className="w-4 h-4" /> VISI
            </span>
          </motion.div>

          {[
            "Menjadi penyedia solusi pergudangan terintegrasi dan terdepan di Indonesia, yang mengoptimalkan efektivitas dan efisiensi rantai pasok bagi bisnis pelanggan.",
            "Menjadi mitra logistik pilihan utama dalam manajemen pergudangan, dengan fokus pada inovasi, keberlanjutan, perlindungan keamanan, dan kepuasan pelanggan.",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative p-4 bg-white rounded-2xl shadow"
            >
              <p className="text-gray-700 text-lg md:text-xl">{text}</p>
            </motion.div>
          ))}
        </div>

        {/* MISI Column */}
        <div className="space-y-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4 justify-end"
          >
            <span className="px-4 py-1 bg-blue-500 text-white font-bold rounded-full shadow flex items-center gap-1 animate-pulse">
              <Handshake className="w-4 h-4" /> MISI
            </span>
          </motion.div>

          {missions.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative rounded-2xl shadow-xl border-l-4 p-6 flex items-center gap-4 bg-white overflow-hidden
                ${item.color === "purple" ? "border-purple-500" : ""}
                ${item.color === "orange" ? "border-orange-500" : ""}
                ${item.color === "yellow" ? "border-yellow-500" : ""}
                ${item.color === "blue" ? "border-blue-500" : ""}
              `}
            >
              {/* Small circular number on border */}
              <div className={`absolute -left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center ${colorMap[item.color]} font-bold`}>
                {i + 1}
              </div>

              {/* Icon */}
              <item.icon className={`text-${item.color}-600 w-10 h-10 z-10`} />

              {/* Text */}
              <p className="font-medium text-gray-800 z-10">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Truck image */}
      <motion.div
        className="mt-16 left-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/truck.png"
          alt="Truck"
          className="w-96 md:w-[28rem] object-contain mx-auto animate-bounce-slow"
        />
      </motion.div>
    </div>
  );
}
