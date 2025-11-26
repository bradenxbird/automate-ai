"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";


const industryDescriptions: Record<string, string> = {
  default: "Hover an industry to see details.",
  healthcare: "Healthcare Automations are used for patient data management, appointment scheduling, claims processing, and diagnostics assistance.",
  financial: "Financial Services & Banking automation includes fraud detection, risk assessment, loan processing, and data entry improvements.",
  retail: "E-commerce & Retail automation improves inventory management, order processing, and marketing personalization.",
  manufacturing: "Manufacturing automation supports production optimization, quality control, predictive maintenance, and supply chain tracking.",
  supplychain: "Supply Chain & Logistics automation helps with inventory tracking, route optimization, and supplier management.",
  realestate: "Real Estate automation streamlines lease admin, rent collection, and maintenance scheduling.",
  customerservice: "Customer Service automation improves chatbots, AI agents, lead qualification, and appointment scheduling.",
  marketingsales: "Marketing & Sales automation includes lead scoring, email campaigns, and analytics for conversions.",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState("default");
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll(".industry-item");
    const descEl = document.getElementById("industry-desc");

    items.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const id = el.getAttribute("data-id") || "default";
        if (descEl) descEl.textContent = industryDescriptions[id];
      });
    });

    return () => {
      items.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
      });
    };
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all
        ${scrolled ? "backdrop-blur-xl bg-white/70 shadow-sm" : "bg-transparent"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="text-xl font-semibold tracking-tight">
          Automate Studio
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10 text-gray-700">
          <div className="relative group">
            <Link href="/technologies" className="transition hover:text-purple-600">
              Solutions
            </Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button className="transition hover:text-purple-600">Industries</button>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-600 transition-all duration-300 hover:w-full"></span>

            <div
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
              className={`
                absolute top-full left-1/2 -translate-x-1/2 w-[700px]
                bg-white/80 backdrop-blur-xl shadow-xl rounded-xl p-6 flex gap-6 z-40
                transition-all duration-200
                ${industriesOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
              `}
            >
              <ul className="w-1/3 space-y-3 text-gray-700">
                <li className="hover:text-purple-600 cursor-pointer industry-item" data-id="healthcare">Healthcare</li>
                <li className="hover:text-purple-600 cursor-pointer industry-item" data-id="financial">Financial Services & Banking</li>
                <li className="hover:text-purple-600 cursor-pointer industry-item" data-id="retail">E-commerce & Retail</li>
                <li className="hover:text-purple-600 cursor-pointer industry-item" data-id="manufacturing">Manufacturing</li>
                <li className="hover:text-purple-600 cursor-pointer industry-item" data-id="supplychain">Supply Chain & Logistics</li>
                <li className="hover:text-purple-600 cursor-pointer industry-item" data-id="realestate">Real Estate</li>
                <li className="hover:text-purple-600 cursor-pointer industry-item" data-id="customerservice">Customer Service</li>
                <li className="hover:text-purple-600 cursor-pointer industry-item" data-id="marketingsales">Marketing & Sales</li>
              </ul>

              <div className="w-2/3 text-sm leading-relaxed text-gray-600">
                <p className="industry-desc" id="industry-desc">Customer service automation is a powerful tool for modern businesses, streamlining operations and enhancing efficiency. We leverage cutting-edge technology to optimize everything from interactive chatbots and AI agents to lead qualification and appointment scheduling.<br></br><br></br>
Hover over each industry below to explore the customized ways we implement AI automation tailored to your unique business needs and drive measurable growth.</p>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Link href="/compare" className="transition hover:text-purple-600">
              Compare
            </Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </div>

          <div className="relative group">
            <Link href="/blog" className="transition hover:text-purple-600">
              Blog
            </Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </div>

          <div className="relative group">
            <Link href="/faqs" className="transition hover:text-purple-600">
              FAQs
            </Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </div>
        </nav>

        {/* HAMBURGER (MOBILE) */}
        <button
          className="group md:hidden relative w-8 h-8 flex flex-col items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`
              absolute w-6 h-[3px] bg-gray-800 rounded transition-all 
              ${menuOpen ? "rotate-45 translate-y-[3px]" : "-translate-y-2"}
            `}
          />
          <span
            className={`
              absolute w-6 h-[3px] bg-gray-800 rounded transition-all 
              ${menuOpen ? "opacity-0" : "opacity-100"}
            `}
          />
          <span
            className={`
              absolute w-6 h-[3px] bg-gray-800 rounded transition-all 
              ${menuOpen ? "-rotate-45 -translate-y-[3px]" : "translate-y-2"}
            `}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu open={menuOpen} close={() => setMenuOpen(false)} />
    </header>
  );
}