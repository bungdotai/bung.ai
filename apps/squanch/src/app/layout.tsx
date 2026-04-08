import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Squanch 🏋️",
  description: "Track your squanch, dunch, and bunch",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Providers>
          <header className="relative border-b border-neutral-800 px-4 sm:px-6 py-4">
            <div className="max-w-5xl mx-auto flex items-center justify-between">
              <div>
                <a href="/" className="text-2xl font-bold text-white">Squanch 🏋️</a>
                <p className="text-sm text-neutral-400">Track your squanch, dunch, and bunch</p>
              </div>
              <Nav />
            </div>
          </header>
          <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8">
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
