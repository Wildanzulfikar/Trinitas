import { motion } from "framer-motion";

export default function Fasilitas({ image, header, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col flex-wrap gap-6 p-6 rounded-[4px] items-center text-center bg-white shadow"
    >
      <img width={88} src={image} alt={text} />
      <h1 className="font-semibold text-[#ED3500]">{header}</h1>
      <p className="text-[14px]">{text}</p>
    </motion.div>
  );
}
