// LeftHome.jsx
import { motion } from "framer-motion"
import { Warehouse, ShieldCheck, Clock, MapPin } from "lucide-react"

export default function LeftHome({ subHeader }) {
  return (
    <motion.div
      className="flex flex-col gap-6 mt-32 lg:text-left"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Judul Utama */}
      {/* Judul Utama */}
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug lg:leading-tight">
      Solusi <span className="text-[#ED3500]">Sewa Gudang</span> yang Aman & Terpercaya
    </h1>

    <div className="w-16 h-[3px] bg-[#ED3500] rounded"></div>

    {/* Subheader */}
    <p className="text-base sm:text-lg text-gray-500 mb-2 max-w-6xl italic">
      {subHeader}
    </p>



      {/* Keunggulan dengan icon animasi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm sm:text-base">
        <Feature icon={<Warehouse className="text-[#ED3500]" size={20} />} text="Berpengalaman lebih dari 20 tahun di bidang pergudangan" delay={0.1}/>
        <Feature icon={<ShieldCheck className="text-[#ED3500]" size={20} />} text="Fasilitas modern dengan keamanan 24 jam" delay={0.2}/>
        <Feature icon={<Clock className="text-[#ED3500]" size={20} />} text="Operasional fleksibel sesuai kebutuhan bisnis Anda" delay={0.3}/>
        <Feature icon={<MapPin className="text-[#ED3500]" size={20} />} text="Lokasi strategis dengan akses langsung ke tol" delay={0.4}/>
      </div>

      {/* Tombol CTA */}
      <CallToAction />
    </motion.div>
  )
}

/* Komponen Feature dengan animasi */
function Feature({ icon, text, delay }) {
  return (
    <motion.div
      className="flex items-start gap-2"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {icon}
      <span>{text}</span>
    </motion.div>
  )
}

/* CTA Buttons */
function CallToAction() {
  return (
    <div className="flex sm:flex-row items-center sm:items-start sm:justify-start text-[14px] gap-4 sm:gap-8 mt-4">
      <a
        href="https://wa.me/6281318130037"
        className="border border-[#093FB4] rounded-[4px] px-4 py-2 hover:bg-[#093FB4] hover:text-white transition"
        aria-label="Hubungi Kami via WhatsApp"
      >
        Hubungi Kami
      </a>
      <a
        className="bg-[#093FB4] text-white rounded-[4px] px-4 py-2 hover:bg-blue-800 transition"
        href="#tentangkami"
      >
        Pelajari Selengkapnya
      </a>
    </div>
  )
}
