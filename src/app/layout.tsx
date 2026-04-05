import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "bung.ai — Projects by Bung 🐡",
  description: "Personal AI hub and project gallery. Built by Adam, powered by Bung.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🐡</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gradient-animated min-h-screen">
        {children}
      </body>
    </html>
  );
}
