import "./globals.css";
import type { ReactNode } from "react";
import FloatingCallButton from "@/components/FloatingCallButton";

export const metadata = {
  title: "Automate Studio",
  description: "AI-powered dashboard",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        {children}
        <FloatingCallButton />
      </body>
    </html>
  );
}