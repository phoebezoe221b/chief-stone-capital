import { motion } from "framer-motion";
import { Shield, Users, Gem } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Shield size={40} className="text-yellow-400" />,
      title: "Integrity & Trust",
      desc: "Our foundation lies in transparency and long-term client relationships.",
    },
    {
      icon: <Users size={40} className="text-yellow-400" />,
      title: "Expert Team",
      desc: "Seasoned professionals with a collective goal — to build lasting wealth.",
    },
    {
      icon: <Gem size={40} className="text-yellow-400" />,
      title: "Excellence in Every Step",
      desc: "We merge timeless financial wisdom with modern innovation.",
    },
  ];

  return (
    <section className="min-h-screen py-24 px-6 md:px-20 bg-black text-white text-center">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 mb-12 uppercase tracking-widest"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Us
      </motion.h2>

      <motion.p
        className="text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        At <span className="text-yellow-400 font-semibold">Chief Stone Capital</span>, we blend strategic insight, financial precision, and integrity to empower individuals and enterprises. Our commitment is to safeguard your future while nurturing sustainable growth.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-10">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-neutral-900 rounded-2xl border border-yellow-800/30 shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:shadow-[0_0_40px_rgba(255,215,0,0.3)] transition-all duration-700"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}