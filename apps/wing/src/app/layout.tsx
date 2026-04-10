import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wing 🍗",
  description: "Wingdome session tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen" style={{ backgroundColor: "#0a0a0a" }}>
        {children}
        <footer className="text-center py-6 text-sm" style={{ color: "#555" }}>
          Powered by Bung 🐡
        </footer>
      </body>
    </html>
  );
}
