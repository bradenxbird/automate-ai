"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu({
  open,
  close,
}: {
  open: boolean;
  close: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl 
                     rounded-b-2xl px-6 py-6 flex flex-col gap-6 z-40"
        >
          <Link href="/technologies" onClick={close} className="text-lg font-medium">
            Solutions
          </Link>
          <Link href="/compare" onClick={close} className="text-lg font-medium">
            Compare
          </Link>
          <Link href="/blog" onClick={close} className="text-lg font-medium">
            Blog
          </Link>
          <Link href="/faqs" onClick={close} className="text-lg font-medium">
            FAQs
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}