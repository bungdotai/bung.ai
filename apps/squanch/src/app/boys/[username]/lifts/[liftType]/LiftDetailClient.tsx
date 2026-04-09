"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { LiftEntry, LiftInteractionsClient, DeleteLiftButton } from "@/app/components/LiftInteractions";

interface Props {
  username: string;
  liftType: string;
  liftLabel: string;
  chartColor: string;
  lifts: LiftEntry[];
}

export default function LiftDetailClient({
  username,
  liftType,
  liftLabel,
  chartColor,
  lifts: initialLifts,
}: Props) {
  const { data: session } = useSession();
  const currentUserId = (session?.user as any)?.id ?? null;
  const [lifts, setLifts] = useState<LiftEntry[]>(initialLifts);

  const handleDelete = (liftId: string) => {
    setLifts((prev) => prev.filter((l) => l.id !== liftId));
  };

  // Group by calendar day (LA time), keep best 1RM per day
  const byDay = new Map<string, number>();
  lifts.slice().reverse().forEach((l) => {
    const day = new Date(l.loggedAt).toLocaleDateString("en-US", { timeZone: "America/Los_Angeles" });
    const current = byDay.get(day) ?? 0;
    if (Math.round(l.oneRM) > current) byDay.set(day, Math.round(l.oneRM));
  });
  const chartData = Array.from(byDay.entries()).map(([date, oneRM]) => ({ date, oneRM }));

  return (
    <div className="space-y-8">
      {/* Chart */}
      <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
        <h2 className="text-lg font-semibold mb-4" style={{ color: chartColor }}>
          {liftLabel} — Estimated 1RM (lbs)
        </h2>
        {chartData.length > 0 ? (
          <div className="h-[200px] sm:h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="date" stroke="#666" fontSize={12} />
              <YAxis stroke="#666" fontSize={12} />
              <Tooltip
                contentStyle={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: 8 }}
              />
              <Line
                type="monotone"
                dataKey="oneRM"
                stroke={chartColor}
                strokeWidth={2}
                dot={{ r: 4 }}
                connectNulls
              />
            </LineChart>
          </ResponsiveContainer>
          </div>
        ) : (
          <p className="text-neutral-500 text-sm text-center py-16">No data yet.</p>
        )}
      </div>

      {/* Log entries */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-300 mb-4">Lift Log</h2>
        {lifts.length === 0 ? (
          <p className="text-neutral-500">No lifts logged yet.</p>
        ) : (
          <div className="space-y-4">
            {lifts.map((lift) => (
              <div
                key={lift.id}
                className="relative bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4"
              >
                {currentUserId && currentUserId === lift.userId && (
                  <div className="absolute top-2 right-2">
                    <DeleteLiftButton liftId={lift.id} onDelete={handleDelete} />
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div className="text-white font-medium">
                    {lift.weight} lbs × {lift.reps} reps
                  </div>
                  <div className="flex items-center gap-4 text-sm text-neutral-400">
                    <span>
                      1RM: <span className="text-amber-400 font-medium">{Math.round(lift.oneRM)}</span>
                    </span>
                    <span>
                      {new Date(lift.loggedAt).toLocaleString("en-US", {
                        timeZone: "America/Los_Angeles",
                        month: "numeric",
                        day: "numeric",
                        year: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
                <LiftInteractionsClient lift={lift} currentUserId={currentUserId} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
