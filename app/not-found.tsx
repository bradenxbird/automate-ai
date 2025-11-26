"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMotionValue, useSpring } from "framer-motion";

export default function NotFound() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const xPos = (e.clientX / window.innerWidth - 0.5) * 40;
    const yPos = (e.clientY / window.innerHeight - 0.5) * 40;
    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >

      {/* SOFT PURPLE GRADIENTS */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute left-[-20rem] top-[-10rem] w-[35rem] h-[35rem] bg-purple-300/30 blur-3xl rounded-full" />
        <div className="absolute right-[-15rem] bottom-[-10rem] w-[30rem] h-[30rem] bg-purple-400/25 blur-3xl rounded-full" />
      </div>

      {/* LARGE APPLE‑STYLE 404 WITH PARALLAX + PURPLE OUTLINE GLOW */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-semibold tracking-tight 
                   text-[10rem] sm:text-[14rem] lg:text-[18rem]
                   text-white drop-shadow-[0_0_25px_rgba(168,85,247,0.8)]
                   pointer-events-none select-none"
        style={{ x: smoothX, y: smoothY }}
      >
        404
      </motion.h1>

      {/* MESSAGE */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-gray-600 text-lg max-w-md mt-4"
      >
        Even the smartest AI sometimes takes a wrong turn.
        Let’s guide you back to where the magic happens.
      </motion.p>

      {/* BUTTON */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Link href="/">
          <button className="mt-10 px-6 py-3 bg-purple-600 text-white rounded-xl shadow-md hover:bg-purple-500 transition font-medium">
            Return Home
          </button>
        </Link>
      </motion.div>

    </section>
  );
}