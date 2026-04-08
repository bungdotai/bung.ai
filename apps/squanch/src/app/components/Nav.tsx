"use client";

import { useSession, signOut } from "next-auth/react";

export default function Nav() {
  const { data: session, status } = useSession();

  return (
    <nav className="flex gap-4 text-sm items-center">
      <a href="/boys" className="text-neutral-300 hover:text-white transition">Boys</a>
      {status === "loading" ? null : session ? (
        <>
          <span className="text-neutral-300">{session.user?.name}</span>
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
    </nav>
  );
}
