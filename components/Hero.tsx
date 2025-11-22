"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import ContactModal from "./ContactModal";
import { useState } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7 }
});

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white py-28 px-6 text-center w-full max-w-6xl mx-auto">

      {/* Soft radial background glow */}
      <motion.div
        className="absolute inset-0 -z-10 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="w-[40rem] h-[40rem] bg-purple-200/40 blur-3xl rounded-full" />
      </motion.div>

      {/* Highlight accent */}
      <motion.div
        className="absolute right-10 top-32 -z-10 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-purple-600/10 blur-2xl rounded-3xl rotate-12"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Top badge */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.7 }}
        className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/70 backdrop-blur px-4 py-1 text-xs font-medium text-gray-600 shadow-sm"
      >
        <span className="h-1.5 w-1.5 bg-purple-500 rounded-full" />
        AI Automation Services for Modern Teams
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
        className="mt-6 text-5xl md:text-6xl font-bold tracking-tight leading-tight text-gray-900"
      >
        Automate Your Business with <br />
        <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
          AI-Powered Workflows
        </span>
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7 }}
        className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
      >
        We build custom AI automation systems that save time, cut costs, and
        scale your operations effortlessly.
      </motion.p>

      {/* CTA buttons */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="flex justify-center gap-4 mt-10"
      >
        <CTAButton
          label="Login to Automate Studio"
          onClick={() => (window.location.href = "/api/auth/signin")}
        />
        <CTAButton
          label="Talk With Us"
          onClick={() => setOpen(true)}
          secondary
        />
      </motion.div>

      {/* Modal */}
      <ContactModal open={open} onClose={() => setOpen(false)} />

      {/* Bottom subtle indicator */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="mt-12 flex justify-center items-center gap-2 text-sm text-gray-500"
      >
        <span className="h-1 w-6 bg-purple-400 rounded-full" />
        Built with precision. Designed for automation.
      </motion.div>
    </section>
  );
}