import "./globals.css";
import type { ReactNode } from "react";
import FloatingCallButton from "@/components/FloatingCallButton";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Automate Studio",
  description: "AI-powered dashboard",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <Navbar />
        {children}
        <FloatingCallButton />
      </body>
    </html>
  );
}