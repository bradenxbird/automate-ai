"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center text-center px-4 sm:px-6 py-20 sm:py-28 max-w-full md:max-w-full lg:max-w-6xl mx-auto">

      {/* Background glowing blobs */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute left-[-35rem] top-20 w-[35rem] h-[35rem] bg-purple-400/20 blur-3xl rounded-full animate-pulse hidden lg:block" />
        <div className="absolute right-[-35rem] top-40 w-[30rem] h-[30rem] bg-purple-300/20 blur-3xl rounded-full animate-pulse hidden lg:block" />
      </motion.div>

      {/* Mobile top tag spacing fix */}
      <div className="mt-4 sm:mt-12" />

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
      <div className="relative w-full flex justify-center items-center pointer-events-none select-none mt-4 md:mt-6">

        <motion.div
          className="flex gap-2"
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
              className={`w-3 h-3 lg:w-6 lg:h-6 rounded-full bg-purple-400/40
  ${i >= 20 ? "hidden sm:block" : ""} 
  ${i >= 30 ? "sm:hidden md:block" : ""}`}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: {
                  opacity: 1,
                  scaleY: [1, 2.5, 0.8, 2.2, 1],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: i * 0.06,
                  },
                },
              }}
            />
          ))}
        </motion.div>

      </div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg text-gray-600 max-w-xl mt-12"
      >
        Save time. Cut costs. Scale operations. Automate Studio builds custom AI
        systems designed to streamline the workflows your team performs every day.
      </motion.p>

      {/* Button Row */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="flex flex-col md:flex-row gap-4 md:gap-4 mt-10 w-full md:w-auto items-stretch md:items-center justify-center md:justify-center"
      >

        <Link href="/technologies" className="w-[75%] md:w-auto mx-auto md:mx-0">
          <button className="w-full px-6 py-3 bg-white border border-gray-300 hover:bg-gray-50 rounded-xl font-medium transition">
            Solutions & Integrations
          </button>
        </Link>

        {/* New: Call Our AI */}
        <button className="w-[75%] md:w-auto mx-auto md:mx-0 px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium shadow-md transition">
          Book An Appointment
        </button>
      </motion.div>
    </section>
  );
}