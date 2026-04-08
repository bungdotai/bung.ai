"use client";

import { useSession, signOut } from "next-auth/react";

export default function Nav() {
  const { data: session, status } = useSession();

  return (
    <nav className="flex gap-4 text-sm items-center">
      <a href="/boys" className="text-neutral-300 hover:text-white transition">Boys</a>
      {status === "loading" ? null : session ? (
        <>
          <a href={`/boys/${session.user?.name}`} className="text-amber-400 hover:text-amber-300 transition font-medium">{session.user?.name}</a>
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
