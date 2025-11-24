
"use client";

import React from "react";

import { motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const categories = [
  "Calendars",
  "CCaaS",
  "CRM",
  "Vertical CRM",
  "Sales",
  "Telephony",
  "Connectors",
  "Developer Tools",
  "Customer Support",
  "AI",
  "Commerce & Payments",
  "Productivity",
] as const;

const integrationsData: Record<string, { name: string; description: string; logo: string }[]> = {
  Calendars: [
    {
      name: "Google Calendar",
      description: "Sync meetings, reminders, and AI-booked appointments instantly.",
      logo: "/integrations/google-calendar.png",
    },
    {
      name: "Microsoft Outlook",
      description: "Connect Outlook events to automated follow-ups and workflows.",
      logo: "/integrations/outlook.png",
    },
    {
      name: "Calendly",
      description: "Let AI schedule, confirm, and route meetings for your team.",
      logo: "/integrations/calendly.png",
    },
  ],
  CCaaS: [
    {
      name: "Talkdesk",
      description: "Layer AI routing and summaries on top of every live call.",
      logo: "/integrations/talkdesk.png",
    },
    {
      name: "Five9",
      description: "Pair AI agents with live agents for blended contact flows.",
      logo: "/integrations/five9.png",
    },
    {
      name: "Genesys Cloud",
      description: "Automate pre-call triage, post-call notes, and dispositions.",
      logo: "/integrations/genesys.jpeg",
    },
  ],
  CRM: [
    {
      name: "HubSpot",
      description: "Auto-log activities, update deals, and enrich contacts with AI.",
      logo: "/integrations/hubspot.jpeg",
    },
    {
      name: "Salesforce",
      description: "Sync AI conversations directly into your Salesforce objects.",
      logo: "/integrations/salesforce.png",
    },
    {
      name: "Pipedrive",
      description: "Trigger follow-ups and pipeline updates from every interaction.",
      logo: "/integrations/pipedrive.png",
    },
  ],
  "Vertical CRM": [
    {
      name: "JobNimbus",
      description: "Connect field operations, scheduling, and AI-powered updates.",
      logo: "/integrations/jobnimbus.png",
    },
    {
      name: "ServiceTitan",
      description: "Automate dispatch, confirmations, and recap messages for jobs.",
      logo: "/integrations/servicetitan.png",
    },
    {
      name: "Mindbody",
      description: "Let AI handle bookings, reschedules, and reminders for clients.",
      logo: "/integrations/mindbody.png",
    },
  ],
  Sales: [
    {
      name: "Salesloft",
      description: "Orchestrate AI-driven touchpoints across your outbound sequences.",
      logo: "/integrations/salesloft.png",
    },
    {
      name: "Outreach",
      description: "Feed call outcomes and AI notes straight into sales cadences.",
      logo: "/integrations/outreach.png",
    },
    {
      name: "Apollo",
      description: "Trigger AI follow-ups based on intent and engagement signals.",
      logo: "/integrations/apollo.jpeg",
    },
  ],
  Telephony: [
    {
      name: "Twilio",
      description: "Power programmable AI voice, SMS, and call flows at scale.",
      logo: "/integrations/twilio.png",
    },
    {
      name: "Aircall",
      description: "Bridge live agents and AI voice for smoother call experiences.",
      logo: "/integrations/aircall.png",
    },
    {
      name: "RingCentral",
      description: "Unify calling, routing, and AI automation on one platform.",
      logo: "/integrations/ringcentral.png",
    },
  ],
  Connectors: [
    {
      name: "Zapier",
      description: "Connect Automate Studio to thousands of business apps instantly.",
      logo: "/integrations/zapier.png",
    },
    {
      name: "Make.com",
      description: "Design custom workflows with AI decisions in the middle.",
      logo: "/integrations/make.png",
    },
    {
      name: "n8n",
      description: "Self-hosted automation with deep, configurable AI logic.",
      logo: "/integrations/n8n.png",
    },
  ],
  "Developer Tools": [
    {
      name: "PostgreSQL",
      description: "Query, enrich, and sync structured data with AI pipelines.",
      logo: "/integrations/postgres.png",
    },
    {
      name: "REST APIs",
      description: "Plug Automate Studio into any internal or external API.",
      logo: "/integrations/api.png",
    },
    {
      name: "Webhooks",
      description: "Trigger automations from events across your entire stack.",
      logo: "/integrations/webhooks.png",
    },
  ],
  "Customer Support": [
    {
      name: "Zendesk",
      description: "Draft replies, summarize tickets, and surface instant insights.",
      logo: "/integrations/zendesk.png",
    },
    {
      name: "Intercom",
      description: "Blend AI agents with human support across chat and inbox.",
      logo: "/integrations/intercom.png",
    },
    {
      name: "Freshdesk",
      description: "Automate triage, tagging, and quick resolutions for support.",
      logo: "/integrations/freshdesk.png",
    },
  ],
  AI: [
    {
      name: "OpenAI",
      description: "Use frontier models as the brain behind your automations.",
      logo: "/integrations/openai.png",
    },
    {
      name: "Anthropic",
      description: "Run thoughtful, safety-first AI agents for complex workflows.",
      logo: "/integrations/anthropic.png",
    },
    {
      name: "Vertex AI",
      description: "Orchestrate enterprise-grade AI inside your existing GCP stack.",
      logo: "/integrations/vertex.png",
    },
  ],
  "Commerce & Payments": [
    {
      name: "Shopify",
      description: "Automate order updates, support flows, and post-purchase journeys.",
      logo: "/integrations/shopify.png",
    },
    {
      name: "Stripe",
      description: "Trigger AI receipts, dunning flows, and revenue operations.",
      logo: "/integrations/stripe.png",
    },
    {
      name: "Recharge",
      description: "Manage AI-driven subscription updates and retention workflows.",
      logo: "/integrations/recharge.png",
    },
  ],
  Productivity: [
    {
      name: "Slack",
      description: "Pipe AI insights, alerts, and approvals into team channels.",
      logo: "/integrations/slack.png",
    },
    {
      name: "Notion",
      description: "Auto-generate docs, summaries, and playbooks from activity.",
      logo: "/integrations/notion.png",
    },
    {
      name: "Google Drive",
      description: "Search, summarize, and route documents into live workflows.",
      logo: "/integrations/google-drive.png",
    },
  ],
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] as any },
  },
});

export default function IntegrationsPage() {
  const [openCategory, setOpenCategory] = useState<string | "all">("all");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFilterClick = (category: string | "all") => {
    setOpenCategory((current) => (current === category ? "all" : category));
  };

  const isCategoryVisible = (category: string) => {
    return openCategory === "all" || openCategory === category;
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-600/10 via-white to-white">
        {/* Glows like homepage, no particles */}
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="absolute left-[-18rem] top-10 w-[32rem] h-[32rem] bg-purple-400/20 blur-3xl rounded-full" />
          <div className="absolute right-[-18rem] bottom-0 w-[28rem] h-[28rem] bg-purple-300/20 blur-3xl rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-center min-h-[30vh] md:min-h-[40vh] pt-16 pb-10">
          <motion.div
            {...fadeUp(0)}
            className="inline-flex mb-4 text-xs font-medium text-purple-700 bg-purple-50 border border-purple-100 rounded-full px-3 py-1 w-fit"
          >
            Integrations &amp; Solutions
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900 max-w-3xl"
          >
            AI Integrations That Automate Your Entire Business
          </motion.h1>

          <motion.p
            {...fadeUp(0.25)}
            className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl"
          >
            Designed for effortless interoperability, Automated Studio brings
            together your telephony, contact center, and data platforms powering
            AI automation and live-agent workflows across an extensive network of
            enterprise applications.
          </motion.p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] gap-10 md:gap-12 mt-8">
          {/* Left: Filters */}
          <aside className="md:pt-4 md:sticky md:top-24 md:self-start">
            <div className="hidden md:block mb-3 text-xs font-semibold text-gray-500 uppercase tracking-[0.18em]">
              Quick filter
            </div>
            <div className="flex md:flex-col gap-2 md:gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0 text-sm">
              <button
                onClick={() => handleFilterClick("all")}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 border text-xs md:text-sm transition
                  ${
                    openCategory === "all"
                      ? "bg-gray-900 text-white border-gray-900"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                  }`}
              >
                All integrations
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleFilterClick(category)}
                  className={`whitespace-nowrap rounded-full px-3.5 py-1.5 border text-xs md:text-sm transition
                    ${
                      openCategory === category
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </aside>

          {/* Right: Sections */}
          <div className="space-y-12">
            {categories.map((category) => {
              if (!isCategoryVisible(category)) return null;
              const items = integrationsData[category];

              return (
                <section
                  key={category}
                  className="border-t border-gray-100 pt-8 first:pt-0 first:border-0"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                      {category}
                    </h2>
                    <span className="text-xs font-medium text-gray-400 uppercase tracking-[0.18em]">
                      {items.length} integrations
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
                    {items.map((item, idx) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 16 }}
                        animate={
                          mounted
                            ? { opacity: 1, y: 0, scale: 1.02, rotateX: 1.5, rotateY: -1.5 }
                            : {}
                        }
                        whileHover={{
                          scale: 1.04,
                          rotateX: 1.5,
                          rotateY: -1.5,
                          transition: {
                            type: "spring",
                            stiffness: 350,
                            damping: 10,
                          },
                        }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ delay: idx * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
                        className="relative p-5 md:p-6 rounded-2xl bg-white/60 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.06)] border border-white/40 hover:shadow-[0_18px_50px_rgba(15,23,42,0.14)] transition-all duration-500 flex flex-row items-start gap-4 md:flex-col md:items-start md:gap-3"
                      >
                        <div className="flex-shrink-0 flex items-center gap-3">
                          <div className="h-9 w-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                            <img
                              src={item.logo}
                              alt={item.name + " logo"}
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <h3 className="text-sm md:text-base font-semibold text-gray-900">
                            {item.name}
                          </h3>
                        </div>
                        <div className="flex-1">
                          <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}