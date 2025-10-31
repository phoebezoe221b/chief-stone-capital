import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-yellow-500/10">
      <div className="flex items-center justify-between px-6 md:px-20 py-4">
        {/* Logo only */}
        <img
          src={logo}
          alt="Chief Stone Capital Logo"
          className="w-10 h-10 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.5)]"
        />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium uppercase tracking-wide">
          <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-400 transition">About</Link></li>
          <li><Link to="/services" className="hover:text-yellow-400 transition">Services</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-yellow-400 focus:outline-none"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dimmed & Blurred Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 70, damping: 20 }}
              className="fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 bg-gradient-to-b from-black via-neutral-900 to-black border-l border-yellow-500/30 flex flex-col justify-center items-center gap-8 z-50 text-gray-200 text-lg font-medium shadow-[0_0_30px_rgba(255,215,0,0.3)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-yellow-400 hover:text-yellow-300 transition"
              >
                <X size={28} />
              </button>

              {/* Navigation Links */}
              {["Home", "About", "Services", "Contact"].map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    to={text === "Home" ? "/" : `/${text.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-yellow-400 transition-all duration-300"
                  >
                    {text}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
