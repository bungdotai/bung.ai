import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Squanch 🏋️",
  description: "Track your squanch, dunch, and bunch",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Providers>
          <header className="border-b border-neutral-800 px-6 py-4">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
              <div>
                <a href="/" className="text-2xl font-bold text-white">Squanch 🏋️</a>
                <p className="text-sm text-neutral-400">Track your squanch, dunch, and bunch</p>
              </div>
              <nav className="flex gap-4 text-sm">
                <a href="/log" className="text-neutral-300 hover:text-white transition">Log</a>
                <a href="/login" className="text-neutral-300 hover:text-white transition">Login</a>
              </nav>
            </div>
          </header>
          <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-8">
            {children}
          </main>
          <footer className="border-t border-neutral-800 px-6 py-4 text-center text-sm text-neutral-500">
            Powered by Bung 🐡
          </footer>
        </Providers>
      </body>
    </html>
  );
}
