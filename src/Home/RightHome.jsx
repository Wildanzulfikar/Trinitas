// RightHome.jsx
import { motion } from "framer-motion"

export default function RightHome({ image1 }) {
  return (
    <motion.div
      className="w-full mt-20 flex justify-center"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img className="w-full max-w-md lg:max-w-xl object-contain" src={image1} alt="Sewa Gudang Murah dan Strategis di Jakarta" />
    </motion.div>
  )
}
