"use client";

import { useState } from "react";
import { LiftEntry, LiftInteractionsClient } from "@/app/components/LiftInteractions";

const LIFT_TYPES = [
  { key: "squanch", label: "Squanch (Squat)", color: "text-blue-400" },
  { key: "dunch", label: "Dunch (Deadlift)", color: "text-green-400" },
  { key: "bunch", label: "Bunch (Bench)", color: "text-purple-400" },
];

export default function RecentLiftsClient({
  initialLifts,
  currentUserId,
}: {
  initialLifts: LiftEntry[];
  currentUserId: string | null;
}) {
  const [lifts, setLifts] = useState<LiftEntry[]>(initialLifts);

  const handleDelete = (liftId: string) => {
    setLifts((prev) => prev.filter((l) => l.id !== liftId));
  };

  if (lifts.length === 0) {
    return <p className="text-neutral-500">No lifts logged yet.</p>;
  }

  return (
    <div className="space-y-4">
      {lifts.map((lift) => {
        const lt = LIFT_TYPES.find((t) => t.key === lift.type);
        return (
          <div key={lift.id} className="bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div className="flex items-center gap-4">
                <span className={`text-sm font-medium w-28 ${lt?.color ?? "text-neutral-400"}`}>
                  {lt?.label ?? lift.type}
                </span>
                <span className="text-white">
                  {lift.weight} lbs × {lift.reps} reps
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm text-neutral-400">
                <span>1RM: <span className="text-amber-400">{Math.round(lift.oneRM)}</span></span>
                <span>{new Date(lift.loggedAt).toLocaleString("en-US", { timeZone: "America/Los_Angeles", month: "numeric", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" })}</span>
              </div>
            </div>
            <LiftInteractionsClient lift={lift} currentUserId={currentUserId} onDelete={handleDelete} />
          </div>
        );
      })}
    </div>
  );
}
