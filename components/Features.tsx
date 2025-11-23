"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI Voice Agent",
    description: "Handles calls that book appointments, qualify leads, answer questions, and close sales.",
  },
  {
    title: "AI Email Automation",
    description: "Automatically read, categorize, and reply to emails using intelligent workflows.",
  },
  {
    title: "Custom AI Agents",
    description: "We build fully custom AI agents designed to automate your unique business processes.",
  },
  {
    title: "Workflow Integration",
    description: "Connect AI to your CRM, spreadsheets, databases, or project management tools.",
  },
];

export default function Features() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[-100px] px-4 md:px-0">
      {features.map((feat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.04,
            rotateX: 1.5,
            rotateY: -1.5,
            transition: { type: "spring", stiffness: 350, damping: 18 }
          }}
          whileTap={{ scale: 0.97 }}
          className="
            relative p-8 rounded-3xl
            bg-white/40 backdrop-blur-xl
            shadow-[0_8px_30px_rgb(0,0,0,0.06)]
            border border-white/30
            hover:shadow-[0_16px_50px_rgb(0,0,0,0.12)]
            transition-all duration-500
          "
        >
          {/* gradient border glow */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none 
            bg-gradient-to-br from-purple-300/40 to-purple-500/20 opacity-0 
            group-hover:opacity-100 transition duration-500"></div>

          <h3 className="text-2xl font-semibold text-gray-900 tracking-tight">
            {feat.title}
          </h3>
          <p className="mt-3 text-gray-600 leading-relaxed">
            {feat.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}