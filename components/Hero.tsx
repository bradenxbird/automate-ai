"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center px-6 py-32 max-w-6xl mx-auto">

      {/* Desktop Login Button (top-right) */}
      <div className="hidden md:flex absolute top-6 right-8 z-20">
        <button className="px-5 py-2 border border-gray-300 bg-white hover:bg-gray-50 text-gray-800 rounded-lg font-medium shadow transition">
          Login
        </button>
      </div>

      {/* Background glowing blobs */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute left-[-10rem] top-20 w-[35rem] h-[35rem] bg-purple-400/20 blur-3xl rounded-full animate-pulse hidden md:block" />
        <div className="absolute right-[-10rem] top-40 w-[30rem] h-[30rem] bg-purple-300/20 blur-3xl rounded-full animate-pulse hidden md:block" />
      </motion.div>

      {/* Mobile top tag spacing fix */}
      <div className="md:mt-10" />

      {/* Top Tag */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-sm font-medium text-purple-600 tracking-widest mb-4"
      >
        • AI AUTOMATION SERVICES
      </motion.p>



      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
      >
        Automate Your Business with{" "}
        <span className="bg-gradient-to-r from-purple-600 to-purple-400 text-transparent bg-clip-text">
          Intelligence
        </span>
      </motion.h1>


      {/* Single Centered Particle Cluster Behind Heading */}
      <div className="relative w-full flex justify-center items-center pointer-events-none select-none mt-8">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -12, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, repeatType: "mirror" }}
          className="hidden md:block text-6xl mr-6 select-none"
        >
          💩
        </motion.span>

        <motion.div
          className="hidden md:flex gap-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
          }}
        >
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={`center-dot-${i}`}
              className="w-3 h-3 rounded-full bg-purple-400/40"
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: {
                  opacity: 1,
                  y: [0, -8, 0],
                  transition: {
                    duration: 2.8,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: i * 0.04,
                  },
                },
              }}
            />
          ))}
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [-6, 6, -6] }}
          transition={{ duration: 2.8, repeat: Infinity, repeatType: "mirror" }}
          className="hidden md:block text-6xl ml-6 select-none"
        >
          💸
        </motion.span>

      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg text-gray-600 max-w-xl mt-4"
      >
        Save time. Cut costs. Scale operations. Automate Studio builds custom AI
        systems designed to streamline the workflows your team performs every day.
      </motion.p>

      {/* Button Row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="flex gap-4 mt-10"
      >
        {/* Mobile Login Button */}
        <button className="md:hidden px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium shadow-md transition">
          Login
        </button>

        <button className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl font-medium transition">
          Talk With Us
        </button>

        {/* New: Call Our AI */}
        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-medium shadow-md transition">
          Call Our AI
        </button>
      </motion.div>
    </section>
  );
}