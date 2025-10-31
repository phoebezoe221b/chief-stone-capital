import logo from "../assets/logo.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] bg-black flex flex-col items-center justify-center overflow-hidden text-center px-4">
      {/* Background Glow + Dimmed Logo */}
      <div className="absolute inset-0 flex justify-center items-center">
        <motion.img
          src={logo}
          alt="Dimmed Chief Stone Capital Logo"
          className="w-64 sm:w-80 md:w-[500px] opacity-10 blur-sm rounded-full"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div className="absolute w-64 sm:w-96 md:w-[600px] h-64 sm:h-96 md:h-[600px] rounded-full bg-yellow-600/10 blur-3xl"></div>
      </div>

      {/* Foreground Logo */}
      <motion.img
        src={logo}
        alt="Chief Stone Capital Logo"
        className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-[0_0_60px_15px_rgba(255,215,0,0.4)] mb-8 z-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Company Name with Animated Gradient Shine */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl font-['Anton'] font-bold uppercase tracking-widest leading-tight z-10
                   text-shine"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Chief Stone Capital
      </motion.h1>

      {/* Tagline */}
      <motion.p
        className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 text-sm sm:text-md mt-3 font-semibold tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        CRAFTING WEALTH WITH WISDOM, STRATEGY, AND TIMELESS EXCELLENCE.
      </motion.p>
    </div>
  );
}
