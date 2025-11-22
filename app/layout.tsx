import "./globals.css";

export const metadata = {
  title: "Automate Studio",
  description: "AI-powered dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}