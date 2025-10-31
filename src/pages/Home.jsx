import logo from "../assets/logo.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] bg-black flex flex-col items-center justify-center overflow-hidden text-center px-4">
      {/* Glowing light + faded logo in background */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.img
          src={logo}
          alt="Dimmed Chief Stone Capital Logo"
          className="w-72 sm:w-[400px] md:w-[550px] opacity-10 blur-sm rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute w-80 sm:w-[500px] md:w-[650px] h-80 sm:h-[500px] md:h-[650px] rounded-full bg-yellow-600/10 blur-3xl"></div>
      </div>

      {/* Foreground logo */}
      <motion.img
        src={logo}
        alt="Chief Stone Capital Logo"
        className="w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full shadow-[0_0_70px_15px_rgba(255,215,0,0.4)] mb-8 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Company name */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 hover:from-yellow-200 hover:to-yellow-600 transition-all duration-700 tracking-widest leading-tight z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Chief Stone Capital
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-gray-400 mt-6 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Crafting wealth with wisdom, strategy, and timeless excellence.
      </motion.p>
    </div>
  );
}
