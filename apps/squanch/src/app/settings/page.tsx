"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type CoachingStyle = "drill_sergeant" | "zen_master" | "hype_bro";

const STYLES: Array<{
  key: CoachingStyle;
  emoji: string;
  label: string;
  desc: string;
  activeClass: string;
  hoverClass: string;
}> = [
  {
    key: "drill_sergeant",
    emoji: "🔥",
    label: "Drill Sergeant",
    desc: "No excuses. Hard truths. Get after it.",
    activeClass: "border-red-500 bg-red-950/40 text-red-300",
    hoverClass: "hover:border-red-700/60 hover:bg-red-950/20",
  },
  {
    key: "zen_master",
    emoji: "🧘",
    label: "Zen Master",
    desc: "Steady progress. Balance. Long-term mindset.",
    activeClass: "border-teal-500 bg-teal-950/40 text-teal-300",
    hoverClass: "hover:border-teal-700/60 hover:bg-teal-950/20",
  },
  {
    key: "hype_bro",
    emoji: "🤙",
    label: "Hype Bro",
    desc: "LET'S GOOO. You're absolutely crushing it.",
    activeClass: "border-yellow-400 bg-yellow-950/40 text-yellow-300",
    hoverClass: "hover:border-yellow-600/60 hover:bg-yellow-950/20",
  },
];

export default function SettingsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [goalsText, setGoalsText] = useState("");
  const [coachingStyle, setCoachingStyle] = useState<CoachingStyle>("hype_bro");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; msg: string } | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;
    fetch("/api/coach/settings")
      .then((r) => r.json())
      .then((data) => {
        setGoalsText(data.goalsText ?? "");
        setCoachingStyle(data.coachingStyle ?? "hype_bro");
      })
      .finally(() => setLoading(false));
  }, [status]);

  async function handleSave() {
    setSaving(true);
    setToast(null);
    try {
      const res = await fetch("/api/coach/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goalsText, coachingStyle }),
      });
      if (!res.ok) throw new Error("Save failed");
      setToast({ type: "success", msg: "Settings saved!" });
    } catch {
      setToast({ type: "error", msg: "Failed to save. Try again." });
    } finally {
      setSaving(false);
      setTimeout(() => setToast(null), 3000);
    }
  }

  if (status === "loading" || (status === "authenticated" && loading)) {
    return (
      <div className="flex items-center justify-center py-20 text-neutral-500">
        Loading...
      </div>
    );
  }

  if (!session) return null;

  return (
    <div className="max-w-lg mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-neutral-500 text-sm mt-1">Customize your Coach Bung experience</p>
      </div>

      {/* Toast */}
      {toast && (
        <div
          className={`rounded-lg px-4 py-3 text-sm font-medium border ${
            toast.type === "success"
              ? "bg-green-900/50 border-green-700 text-green-300"
              : "bg-red-900/50 border-red-700 text-red-300"
          }`}
        >
          {toast.msg}
        </div>
      )}

      {/* Goals textarea */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-400">
          Your Goals
        </label>
        <textarea
          value={goalsText}
          onChange={(e) => setGoalsText(e.target.value)}
          rows={4}
          placeholder="e.g. Hit a 300lb squat by summer, lose 15lbs, just not embarrass myself..."
          className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 resize-none transition"
        />
      </div>

      {/* Coaching style */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-neutral-400">
          Coaching Style
        </label>
        <div className="space-y-3">
          {STYLES.map((s) => {
            const isActive = coachingStyle === s.key;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => setCoachingStyle(s.key)}
                className={`w-full text-left rounded-xl border px-5 py-4 transition cursor-pointer ${
                  isActive
                    ? s.activeClass
                    : `border-neutral-700 bg-neutral-900 text-neutral-300 ${s.hoverClass}`
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{s.emoji}</span>
                  <div>
                    <div className="font-semibold">{s.label}</div>
                    <div className={`text-xs mt-0.5 ${isActive ? "opacity-80" : "text-neutral-500"}`}>
                      {s.desc}
                    </div>
                  </div>
                  {isActive && (
                    <span className="ml-auto text-sm font-medium opacity-70">✓</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleSave}
        disabled={saving}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold rounded-lg py-3 transition"
      >
        {saving ? "Saving..." : "Save Settings"}
      </button>
    </div>
  );
}
