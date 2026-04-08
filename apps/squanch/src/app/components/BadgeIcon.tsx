"use client";
import { useState } from "react";

interface Badge { slug: string; emoji: string; name: string; description: string; }

export default function BadgeIcon({ badge, size = "lg" }: { badge: Badge; size?: "sm" | "lg" }) {
  const [open, setOpen] = useState(false);
  const sz = size === "sm" ? "text-xl" : "text-3xl";
  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(o => !o)}
        className={`${sz} hover:scale-110 transition-transform cursor-pointer select-none leading-none`}
        aria-label={badge.name}
      >
        {badge.emoji}
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 z-50 bg-neutral-800 border border-neutral-700 rounded-xl p-3 w-44 shadow-xl text-center">
            <div className="text-2xl mb-1">{badge.emoji}</div>
            <div className="text-white font-semibold text-sm">{badge.name}</div>
            <div className="text-neutral-400 text-xs mt-1 leading-snug">{badge.description}</div>
          </div>
        </>
      )}
    </div>
  );
}
