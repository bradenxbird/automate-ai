"use client";

import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-start w-full">
      <Hero />

      <section className="w-full max-w-6xl px-6 py-20">
        <Features />
      </section>
    </main>
  );
}