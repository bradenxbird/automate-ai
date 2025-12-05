"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import MobileMenu from "./MobileMenu";


const industryDescriptions: Record<string, string> = {
  default: "Hover an industry to see details.",
  healthcare: "Automations are used extensively in the healthcare sector for managing vast amounts of sensitive patient data, from intake forms to electronic health record (EHR) updates. This ensures accuracy and streamlines administrative tasks, which helps free up valuable time for medical professionals to focus on providing direct patient care. Furthermore, automated systems handle intricate tasks like appointment scheduling, insurance claims processing, and billing, which reduces human error and enhances financial performance. The integration of AI also assists in diagnostics, helping to improve patient outcomes through faster and more accurate analysis.",
  financial: "In the financial services and banking sector, agencies implement robust automation strategies to enhance both security and operational efficiency. These solutions are critical for advanced fraud detection, where AI algorithms analyze transactions in real-time to identify and flag suspicious activity. Automation also streamlines risk assessment, loan application processing, and data entry, significantly reducing manual work and accelerating processing times. This allows institutions to provide faster, more consistent customer service while also ensuring compliance with financial regulations.",
  retail: "Solutions in the e-commerce and retail industry leverage automation to manage everything from back-end operations to customer-facing interactions. This includes automated inventory management systems that track stock levels in real-time and trigger reorders as needed. It also covers efficient order processing, ensuring products are packed and shipped with minimal delays. Personalized marketing campaigns are automated to target customers with relevant products based on their browsing and purchase history. Customer support is also significantly enhanced through AI-powered chatbots that handle common inquiries 24/7, improving satisfaction and reducing operational costs.",
  servicebusinesses: "Automation is invaluable for a wide range of service businesses, enhancing everything from client onboarding to project management and billing. Agencies help implement systems for automated scheduling and booking, allowing clients to easily book appointments or consultations online, reducing administrative overhead. AI can also be used in project management platforms to automate task assignments, track progress, and send reminders, ensuring projects stay on schedule. For financial operations, automated invoicing and payment processing systems speed up cash flow and reduce manual data entry, allowing service providers to focus more on delivering exceptional service and less on paperwork.",
  supplychain: "Supply chain and logistics automation involves using technology to streamline the movement of products from suppliers to customers. This includes automated inventory tracking systems that provide real-time visibility into stock levels and locations. Automation is also used for optimizing transportation routes based on real-time data, which helps reduce fuel consumption and delivery times. By managing supplier relationships and automating communication, agencies help reduce delays and improve overall delivery speeds and reliability.",
  realestate: "In the real estate sector, automation can be applied to a variety of property management and client-facing tasks. Solutions automate repetitive administrative tasks such as lease administration, rent collection, and maintenance scheduling, which frees up property managers' time. For clients, automation can be used to generate documents and send automated, personalized follow-ups, ensuring smooth communication throughout the buying or selling process. This enhances the overall client experience and helps agents focus on building relationships and closing deals.",
  customerservice: "Customer service is a core area for automation, where AI-powered solutions transform how businesses interact with clients. This includes implementing intelligent chatbots and AI agents that can handle a high volume of customer inquiries instantly and accurately, 24/7. Automation also refines processes like lead qualification by using predefined criteria to route prospects to the appropriate sales team members. Additionally, automated appointment scheduling streamlines booking processes for customers and staff across various platforms.",
  marketingsales: "For the marketing and sales industry, automation agencies provide advanced services to optimize strategies and boost conversion rates. This involves implementing automated email campaigns that are triggered by specific customer actions, ensuring timely and relevant communication. Advanced lead scoring models, powered by data analytics, automatically qualify and prioritize leads based on their engagement and behavior. These systems also provide sales teams with valuable insights, allowing them to focus on high-potential prospects and create more targeted and effective pitches.",
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
        <Link href="/" className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Automate Studio Logo" 
            className="h-14 w-auto"
          />
          <span className="ml-3 text-xl font-semibold text-gray-800">Automate Studio</span>
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
                <li
                  className={
                    `cursor-pointer industry-item px-2 py-1 rounded-md transition-all 
                     hover:bg-purple-50/70 hover:text-purple-700
                     ${activeIndustry === "healthcare" ? "bg-purple-50/70 text-purple-700" : ""}`
                  }
                  data-id="healthcare"
                  onMouseEnter={() => setActiveIndustry("healthcare")}
                >
                  Healthcare
                </li>
                <li
                  className={
                    `cursor-pointer industry-item px-2 py-1 rounded-md transition-all 
                     hover:bg-purple-50/70 hover:text-purple-700
                     ${activeIndustry === "financial" ? "bg-purple-50/70 text-purple-700" : ""}`
                  }
                  data-id="financial"
                  onMouseEnter={() => setActiveIndustry("financial")}
                >
                  Financial Services & Banking
                </li>
                <li
                  className={
                    `cursor-pointer industry-item px-2 py-1 rounded-md transition-all 
                     hover:bg-purple-50/70 hover:text-purple-700
                     ${activeIndustry === "retail" ? "bg-purple-50/70 text-purple-700" : ""}`
                  }
                  data-id="retail"
                  onMouseEnter={() => setActiveIndustry("retail")}
                >
                  E-commerce & Retail
                </li>
                <li
                  className={
                    `cursor-pointer industry-item px-2 py-1 rounded-md transition-all 
                     hover:bg-purple-50/70 hover:text-purple-700
                     ${activeIndustry === "servicebusinesses" ? "bg-purple-50/70 text-purple-700" : ""}`
                  }
                  data-id="servicebusinesses"
                  onMouseEnter={() => setActiveIndustry("servicebusinesses")}
                >
                  Service Businesses
                </li>
                <li
                  className={
                    `cursor-pointer industry-item px-2 py-1 rounded-md transition-all 
                     hover:bg-purple-50/70 hover:text-purple-700
                     ${activeIndustry === "supplychain" ? "bg-purple-50/70 text-purple-700" : ""}`
                  }
                  data-id="supplychain"
                  onMouseEnter={() => setActiveIndustry("supplychain")}
                >
                  Supply Chain & Logistics
                </li>
                <li
                  className={
                    `cursor-pointer industry-item px-2 py-1 rounded-md transition-all 
                     hover:bg-purple-50/70 hover:text-purple-700
                     ${activeIndustry === "realestate" ? "bg-purple-50/70 text-purple-700" : ""}`
                  }
                  data-id="realestate"
                  onMouseEnter={() => setActiveIndustry("realestate")}
                >
                  Real Estate
                </li>
                <li
                  className={
                    `cursor-pointer industry-item px-2 py-1 rounded-md transition-all 
                     hover:bg-purple-50/70 hover:text-purple-700
                     ${activeIndustry === "customerservice" ? "bg-purple-50/70 text-purple-700" : ""}`
                  }
                  data-id="customerservice"
                  onMouseEnter={() => setActiveIndustry("customerservice")}
                >
                  Customer Service
                </li>
                <li
                  className={
                    `cursor-pointer industry-item px-2 py-1 rounded-md transition-all 
                     hover:bg-purple-50/70 hover:text-purple-700
                     ${activeIndustry === "marketingsales" ? "bg-purple-50/70 text-purple-700" : ""}`
                  }
                  data-id="marketingsales"
                  onMouseEnter={() => setActiveIndustry("marketingsales")}
                >
                  Marketing & Sales
                </li>
              </ul>

              <div className="w-2/3 text-sm leading-relaxed text-gray-700 bg-purple-50/70 rounded-lg p-4 backdrop-blur-sm shadow-inner">
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