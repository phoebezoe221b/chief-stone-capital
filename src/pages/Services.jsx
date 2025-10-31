import { motion } from "framer-motion";
import { BarChart3, Briefcase, TrendingUp } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <BarChart3 size={40} className="text-yellow-400" />,
      title: "Investment Strategies",
      desc: "Tailored plans built to outperform markets.",
    },
    {
      icon: <Briefcase size={40} className="text-yellow-400" />,
      title: "Portfolio Management",
      desc: "Diversified, risk-optimized asset allocation.",
    },
    {
      icon: <TrendingUp size={40} className="text-yellow-400" />,
      title: "Growth Insights",
      desc: "Data-driven analytics to guide your next move.",
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
        Our Services
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((item, i) => (
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