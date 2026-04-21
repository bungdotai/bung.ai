"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CoachBungTab from "./CoachBungTab";

type Tab = "stats" | "coach";

export default function ProfileTabs({
  username,
  children,
}: {
  username: string;
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const [active, setActive] = useState<Tab>(
    searchParams.get("tab") === "coach" ? "coach" : "stats"
  );

  useEffect(() => {
    if (searchParams.get("tab") === "coach") setActive("coach");
  }, [searchParams]);

  return (
    <div className="space-y-6">
      {/* Tab bar */}
      <div className="flex gap-1 border-b border-neutral-800">
        <button
          onClick={() => setActive("stats")}
          className={`px-4 py-2 text-sm font-medium transition border-b-2 -mb-px ${
            active === "stats"
              ? "border-amber-400 text-amber-400"
              : "border-transparent text-neutral-400 hover:text-white"
          }`}
        >
          Stats
        </button>
        <button
          onClick={() => setActive("coach")}
          className={`px-4 py-2 text-sm font-medium transition border-b-2 -mb-px ${
            active === "coach"
              ? "border-amber-400 text-amber-400"
              : "border-transparent text-neutral-400 hover:text-white"
          }`}
        >
          Coach Bung 🐡
        </button>
      </div>

      {/* Tab content */}
      {active === "stats" ? (
        <div>{children}</div>
      ) : (
        <CoachBungTab username={username} />
      )}
    </div>
  );
}
