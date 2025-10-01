// LeftHome.jsx
import { motion } from "framer-motion"

export default function LeftHome({ subHeader }) {
  return (
    <motion.div
      className="flex flex-col gap-6 mt-32 lg:text-left"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug lg:leading-tight">
        Solusi <span className="text-[#ED3500]">Sewa Gudang</span> yang Aman & Terpercaya
      </h1>
      <p className="text-sm sm:text-base">{subHeader}</p>
      <CallToAction />
    </motion.div>
  )
}

function CallToAction() {
  return (
    <div className="flex sm:flex-row items-center sm:items-start sm:justify-start text-[14px] gap-4 sm:gap-8">
      <a href="https://wa.me/6281318130037" className="border border-[#093FB4] rounded-[4px] px-4 py-2 hover:bg-[#093FB4] hover:text-white transition" aria-label="Hubungi Kami via WhatsApp">
        Hubungi Kami
      </a>
      <a className="bg-[#093FB4] text-white rounded-[4px] px-4 py-2 hover:bg-blue-800 transition" href="#tentangkami">
        Pelajari Selengkapnya
      </a>
    </div>
  )
}
