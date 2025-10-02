import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const logos = [
  "LogoSlider/logo1.png",
  "LogoSlider/logo2.png",
  "LogoSlider/logo3.png",
  "LogoSlider/logo4.png",
  "LogoSlider/logo5.png",
  "LogoSlider/logo6.png",
  "LogoSlider/logo7.png",
  "LogoSlider/logo8.png",
];

export default function LogoSlider() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["100%", "-100%"],
      transition: { repeat: Infinity, duration: 25, ease: "linear" },
    });
  }, [controls]);

  const handleHoverStart = () => controls.stop();
  const handleHoverEnd = () =>
    controls.start({
      x: ["100%", "-100%"],
      transition: { repeat: Infinity, duration: 25, ease: "linear" },
    });

  return (
    <div className="overflow-hidden w-full border-t-1 border-t-gray-200 border-b-gray-200 border-b-1 mb-20 py-8">
      <motion.div
        className="flex gap-10"
        animate={controls}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
      >
        {logos.concat(logos).map((logo, idx) => (
          <motion.img
            key={idx}
            src={logo}
            alt={`Logo ${idx}`}
            className="h-16"
            initial={{ scale: 0.85, opacity: 0.6 }}
            animate={{ scale: [0.85, 1, 0.85], opacity: [0.6, 1, 0.6] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.3, // delay tiap logo biar flow lebih smooth
            }}
            whileHover={{ scale: 1.1, opacity: 1 }}
          />
        ))}
      </motion.div>
    </div>
  );
}