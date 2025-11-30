"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const faqs = [
    {
      q: "Does Automate Studio work with all types of businesses?",
      a: "Service businesses, healthcare practices, financial institutions, real estate teams, logistics providers, and e-commerce brands all benefit significantly from custom automation workflows. Automate Studio builds systems that reduce manual tasks, centralize information, and boost efficiency across every department, helping organizations scale faster with smarter, more reliable processes."
    },
    {
      q: "Does Automate Studio build custom AI agents?",
      a: "Yes. We design and deploy fully custom AI voice agents, email agents, data agents, and task automators built around your exact workflows. These agents are tailored to understand your unique business language and processes, ensuring seamless integration and maximum impact."
    },
    {
      q: "Does Automate Studio deliver projects quickly?",
      a: "Most projects take 1–3 weeks depending on complexity, integrations, and required data mapping. We prioritize efficient delivery without compromising quality, allowing your automation to start driving value as soon as possible."
    },
    {
      q: "Does Automate Studio integrate with our existing software?",
      a: "Absolutely. We work with CRMs, calendars, CCaaS platforms, telephony, data tools, spreadsheets, and proprietary internal systems through APIs or connectors. Our integrations are designed to maintain data integrity and streamline workflows across all your tools."
    },
    {
      q: "Does Automate Studio provide ongoing support after launch?",
      a: "Yes, we offer monitoring, optimization, and updates to ensure your automations stay reliable and improve over time. Continuous support helps adapt your systems to evolving business needs and technological changes."
    },
    {
      q: "Does Automate Studio create AI agents or workflow automations?",
      a: "Both. AI agents act autonomously using natural language, while workflow automations are structured, rule-based systems triggered by specific conditions. Combining these approaches allows us to deliver flexible, powerful automation solutions tailored to your needs."
    },
    {
      q: "Does Automate Studio support automated customer service workflows?",
      a: "Yes. AI can qualify leads, answer FAQs, schedule appointments, handle tier-1 support, and escalate complex issues to humans. This helps reduce response times and improve customer satisfaction while freeing up your team for higher-value tasks."
    },
    {
      q: "Does Automate Studio replace employees with automation?",
      a: "No, our systems are built to enhance productivity, not replace teams. They remove repetitive tasks so your staff can focus on strategic work. Our goal is to empower your workforce with smarter tools, not reduce headcount."
    },
    {
      q: "Does Automate Studio automate email responses?",
      a: "Yes, our AI Email Automation reads, categorizes, and drafts replies automatically using context from your systems. This ensures timely and relevant communication that maintains a professional tone and helps nurture customer relationships."
    },
    {
      q: "Does Automate Studio ensure security in all automations?",
      a: "We follow strict data-security standards, encrypted data handling, and least-privilege access across all integrations. Protecting your sensitive information is a top priority throughout every stage of automation development and deployment."
    },
    {
      q: "Does Automate Studio support unique or complex processes?",
      a: "Yes, we specialize in building custom solutions tailored to the exact workflows of your organization. Our flexible approach allows us to tackle even the most intricate automation challenges effectively."
    },
    {
      q: "Does Automate Studio automate appointment scheduling?",
      a: "Yes, AI can manage your calendar, confirm appointments, reschedule conflicts, and notify customers automatically. This reduces no-shows and scheduling errors, improving overall operational efficiency."
    },
    {
      q: "Does Automate Studio integrate with phone systems?",
      a: "We integrate with major telephony platforms to build AI calling assistants, inbound routing, and automated outbound campaigns. This enables seamless voice interactions and enhances customer engagement through intelligent call management."
    },
    {
      q: "Does Automate Studio offer transparent pricing?",
      a: "Pricing is based on complexity, integrations, data mapping, and automation volume. Every project includes fixed upfront pricing. We ensure clear communication to avoid surprises and help you plan your investment confidently."
    },
    {
      q: "Does Automate Studio help with data migration or syncing?",
      a: "Yes, we automate data syncing, transfers, backups, and ongoing synchronization using secure API pipelines. This keeps your data consistent and accessible across all platforms without manual intervention."
    },
    {
      q: "Does Automate Studio support white-label solutions?",
      a: "Yes, agencies and SaaS companies often use our systems to enhance their own offerings. Our white-label options allow partners to deliver automation under their brand while leveraging our expertise."
    },
    {
      q: "Does Automate Studio help sales teams with automation?",
      a: "AI can qualify leads, score opportunities, generate proposals, automate follow-ups, and log CRM activity automatically. These capabilities accelerate sales cycles and improve pipeline visibility for better decision-making."
    },
    {
      q: "Does Automate Studio require extensive onboarding?",
      a: "Getting started is simple, a short onboarding call, access to your tools, and clarity on what tasks you want automated. We focus on quick ramp-up to deliver value without lengthy setup times."
    },
    {
      q: "Does Automate Studio work with startups?",
      a: "Yes, automation gives startups leverage by reducing manual workload and increasing output instantly. This enables lean teams to scale efficiently and focus on growth initiatives."
    },
    {
      q: "Does Automate Studio help identify what to automate?",
      a: "Absolutely, we analyze your workflows and suggest high-impact automation opportunities tailored to your business. Our consultative approach ensures you invest in automations that deliver measurable ROI."
    }
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="relative min-h-screen w-full bg-white overflow-hidden">

      {/* Hero Header Matching Technologies Page */}
      <section className="relative w-full min-h-[38vh] flex flex-col justify-center px-6 md:px-10 pt-40 pb-20 overflow-hidden bg-gradient-to-b from-[#f7eefe] via-white to-white">
        {/* Background glows */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-80 -left-80 w-[90rem] h-[90rem] bg-purple-300/40 blur-[200px] rounded-full" />
          <div className="absolute -bottom-80 -right-80 w-[90rem] h-[90rem] bg-purple-200/40 blur-[200px] rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto w-full text-left">
          <p className="inline-flex text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100 mb-4">
            Help & Support
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Frequently Asked Questions
          </h1>

          <p className="mt-4 text-lg text-gray-700 max-w-2xl">
            Explore in-depth answers about Automate Studio’s AI powered automation systems, how they integrate with your tools, streamline operations, enhance productivity, and support your business from initial setup through long-term optimization.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl bg-white/70 backdrop-blur p-5 shadow-sm"
            >
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => setOpenIndex(i === openIndex ? -1 : i)}
              >
                <span className="text-base font-medium text-gray-900">
                  {faq.q}
                </span>
                <span className="text-gray-600 text-xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-700 mt-3 pb-3 text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
