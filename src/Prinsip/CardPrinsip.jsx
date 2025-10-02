import { motion } from "framer-motion";

export default function CardPrinsip({ image, text, deskripsi }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col w-[340px] items-center gap-4 shadow bg-white p-6 rounded-2xl"
    >
      <img className="w-16 h-16 object-contain" src={image} alt={text} />
      <p className="text-center text-xl md:text-2xl font-semibold">{text}</p>
      <span className="text-[#656464] text-center text-sm md:text-base">
        {deskripsi}
      </span>
    </motion.div>
  );
}
