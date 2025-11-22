"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "AI Email Automation",
    desc: "Automatically read, categorize, and reply to emails using smart AI workflows.",
  },
  {
    title: "Document Processing",
    desc: "Extract insights from PDFs, invoices, forms, and business documents instantly.",
  },
  {
    title: "Custom AI Agents",
    desc: "We build task-specific AI agents that execute business processes for you.",
  },
  {
    title: "Workflow Integration",
    desc: "Connect AI to your CRM, spreadsheets, databases, or project management tools.",
  },
];

export default function Features() {
  return (
    <section className="relative w-full border-t border-gray-100 bg-white">
      {/* Subtle background band */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-purple-50/60 via-white to-white" />

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            What We Automate
          </motion.h2>

          <motion.p
            className="mt-3 max-w-xl text-sm text-gray-600 sm:text-base"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            From email to documents to full workflows, Automate Studio plugs intelligent
            automation directly into how your team already operates.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: 0.15 + i * 0.08,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white/80 p-[1px] shadow-sm transition-shadow hover:shadow-xl"
            >
              <div className="relative h-full rounded-2xl bg-gradient-to-br from-white via-white to-purple-50/40 p-6">
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="pointer-events-none absolute -right-16 top-10 h-32 w-32 rounded-full bg-purple-200/40 blur-2xl" />
                </div>

                <div className="relative flex h-full flex-col items-start">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
                    AI-Powered
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{f.desc}</p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-medium text-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="inline-block h-[1px] w-6 bg-purple-500" />
                    <span>See this in your workflows</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
