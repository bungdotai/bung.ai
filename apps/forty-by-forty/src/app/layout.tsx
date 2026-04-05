import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "40 by 40 💰",
  description: "Are you on track to $40M by age 40?",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
