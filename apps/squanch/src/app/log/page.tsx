"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { DeleteLiftButton } from "@/app/components/LiftInteractions";
import { formatWeight } from "@/lib/format";

interface Lift {
  id: string;
  type: string;
  weight: number;
  reps: number;
  oneRM: number;
  loggedAt: string;
}

const LIFT_TYPES = [
  { key: "squanch", label: "Squanch (Squat)", color: "text-blue-400" },
  { key: "dunch", label: "Dunch (Deadlift)", color: "text-green-400" },
  { key: "bunch", label: "Bunch (Bench)", color: "text-purple-400" },
];

export default function LogPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [type, setType] = useState("squanch");
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");
  const [loading, setLoading] = useState(false);
  const [myLifts, setMyLifts] = useState<Lift[]>([]);
  const [message, setMessage] = useState("");
  const [notifyOthers, setNotifyOthers] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/login?redirect=/log");
  }, [status, router]);

  const fetchLifts = async () => {
    const res = await fetch("/api/lifts/mine");
    if (res.ok) setMyLifts(await res.json());
  };

  const handleDelete = (liftId: string) => {
    setMyLifts((prev) => prev.filter((l) => l.id !== liftId));
  };

  useEffect(() => {
    if (status === "authenticated") fetchLifts();
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/lifts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, weight: parseFloat(weight), reps: parseInt(reps), notifyOthers }),
    });

    if (res.ok) {
      const lift = await res.json();
      setMessage(`Logged! Estimated 1RM: ${Math.round(lift.oneRM)} lbs`);
      setWeight("");
      setReps("");
      fetchLifts();
    } else {
      setMessage("Failed to log lift");
    }
    setLoading(false);
  };

  if (status === "loading") {
    return <div className="text-center text-neutral-500">Loading...</div>;
  }

  if (!session) return null;

  return (
    <div className="space-y-8">
      <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-800 max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-white mb-6">Log a Lift</h1>
        {message && (
          <div className="bg-green-900/50 border border-green-700 rounded-lg p-3 mb-4 text-green-300 text-sm">
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-neutral-400 mb-1">Lift Type</label>
            <select
              name="type"
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            >
              {LIFT_TYPES.map((lt) => (
                <option key={lt.key} value={lt.key}>
                  {lt.label}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-neutral-400 mb-1">Weight (lbs)</label>
              <input
                type="number"
                name="weight"
                id="weight"
                placeholder="Weight (lbs)"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                required
                min="0"
                step="0.5"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-400 mb-1">Reps</label>
              <input
                type="number"
                name="reps"
                id="reps"
                placeholder="Reps"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                required
                min="1"
                max="30"
              />
            </div>
          </div>
          <label className="flex items-center gap-2 text-sm text-neutral-400 cursor-pointer">
            <input
              type="checkbox"
              checked={notifyOthers}
              onChange={(e) => setNotifyOthers(e.target.checked)}
              className="accent-amber-500"
            />
            Notify the boys about your {LIFT_TYPES.find((t) => t.key === type)?.label ?? type} 💪
          </label>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Logging..." : "Log Lift"}
          </button>
        </form>
      </div>

      {/* Recent lifts per type */}
      <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
        {LIFT_TYPES.map((lt) => {
          const recent = myLifts.filter((l) => l.type === lt.key).slice(0, 5);
          return (
            <div key={lt.key} className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
              <h3 className={`font-semibold mb-3 ${lt.color}`}>{lt.label}</h3>
              {recent.length === 0 ? (
                <p className="text-neutral-600 text-sm">No entries yet</p>
              ) : (
                <ul className="space-y-2 text-sm">
                  {recent.map((l) => (
                    <li key={l.id} className="flex justify-between items-center text-neutral-300">
                      <span>
                        {formatWeight(l.weight)}×{l.reps}
                      </span>
                      <span className="flex items-center gap-3 text-neutral-500">
                        1RM: {Math.round(l.oneRM)}
                        <DeleteLiftButton liftId={l.id} onDelete={handleDelete} />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
