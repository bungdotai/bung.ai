"use client";

import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import NotificationToggle from "./NotificationToggle";

export default function Nav() {
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="relative">
      {/* Mobile */}
      <div className="flex items-center gap-3 sm:hidden">
        <NotificationToggle />
        <button
          onClick={() => setOpen(!open)}
          className="text-neutral-300 hover:text-white transition text-xl leading-none"
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={close}
          />
          <div className="absolute top-full right-0 z-50 w-screen -mr-4 bg-neutral-900 border-b border-neutral-800 sm:hidden">
            <a href="/" onClick={close} className="flex items-center gap-2 py-3 px-6 text-neutral-300 hover:text-white transition">
              🏠 Home
            </a>
            <a href="/boys" onClick={close} className="flex items-center gap-2 py-3 px-6 text-neutral-300 hover:text-white transition">
              💪 The Boys
            </a>
            {status !== "loading" && session && (
              <>
                <a href="/log" onClick={close} className="flex items-center gap-2 py-3 px-6 text-neutral-300 hover:text-white transition">
                  📋 Log Lift
                </a>
                <a href={`/boys/${session.user?.name}`} onClick={close} className="flex items-center gap-2 py-3 px-6 text-amber-400 hover:text-amber-300 transition font-medium">
                  {session.user?.name}
                </a>
                <button
                  onClick={() => { close(); signOut(); }}
                  className="w-full text-left py-3 px-6 text-neutral-300 hover:text-white transition"
                >
                  Logout
                </button>
              </>
            )}
            {status !== "loading" && !session && (
              <a href="/login" onClick={close} className="flex items-center gap-2 py-3 px-6 text-neutral-300 hover:text-white transition">
                Login
              </a>
            )}
          </div>
        </>
      )}

      {/* Desktop */}
      <div className="hidden sm:flex gap-4 text-sm items-center">
        <a href="/boys" className="text-neutral-300 hover:text-white transition">Boys</a>
        {status === "loading" ? null : session ? (
          <>
            <a href={`/boys/${session.user?.name}`} className="text-amber-400 hover:text-amber-300 transition font-medium">{session.user?.name}</a>
            <NotificationToggle />
            <a href="/log" className="text-neutral-300 hover:text-white transition">Log</a>
            <button
              onClick={() => signOut()}
              className="text-neutral-300 hover:text-white transition"
            >
              Logout
            </button>
          </>
        ) : (
          <a href="/login" className="text-neutral-300 hover:text-white transition">Login</a>
        )}
      </div>
    </nav>
  );
}
