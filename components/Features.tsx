"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI Email Automation",
    description: "Automatically read, categorize, and reply to emails using intelligent workflows.",
  },
  {
    title: "Document Processing",
    description: "Extract insights from PDFs, invoices, forms, and business documents instantly.",
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[-75px]">
      {features.map((feat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-white shadow-sm border border-gray-200"
        >
          <h3 className="text-xl font-semibold text-gray-900">{feat.title}</h3>
          <p className="mt-3 text-gray-600">{feat.description}</p>
        </motion.div>
      ))}
    </div>
  );
}