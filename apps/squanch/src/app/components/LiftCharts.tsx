"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface LiftData {
  id: string;
  type: string;
  oneRM: number;
  loggedAt: string;
  user: { username: string };
}

const LIFT_TYPES = [
  { key: "squanch", label: "Squanch (Squat)", color: "#3b82f6" },
  { key: "dunch", label: "Dunch (Deadlift)", color: "#22c55e" },
  { key: "bunch", label: "Bunch (Bench)", color: "#a855f7" },
];

const USER_COLORS = [
  "#3b82f6", "#22c55e", "#a855f7", "#f59e0b", "#ef4444",
  "#06b6d4", "#ec4899", "#84cc16", "#f97316", "#6366f1",
];

export default function LiftCharts() {
  const [lifts, setLifts] = useState<LiftData[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    fetch("/api/lifts")
      .then((r) => r.json())
      .then(setLifts)
      .catch(() => {});
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="h-64 flex items-center justify-center text-gray-500">Loading chart...</div>
    );
  }

  return (
    <div className="space-y-8">
      {LIFT_TYPES.map((lt) => {
        const filtered = lifts.filter((l) => l.type === lt.key);
        const users = [...new Set(filtered.map((l) => l.user.username))];

        // Build data points per date, with one key per user
        const dateMap = new Map<string, Record<string, number>>();
        for (const l of filtered) {
          const date = new Date(l.loggedAt).toLocaleDateString();
          if (!dateMap.has(date)) dateMap.set(date, {});
          const entry = dateMap.get(date)!;
          // Keep max per user per date
          if (!entry[l.user.username] || l.oneRM > entry[l.user.username]) {
            entry[l.user.username] = Math.round(l.oneRM);
          }
        }

        const chartData = [...dateMap.entries()]
          .map(([date, vals]) => ({ date, ...vals }))
          .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

        return (
          <div key={lt.key} className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
            <h2 className="text-lg font-semibold mb-4" style={{ color: lt.color }}>
              {lt.label} — Estimated 1RM (lbs)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="date" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip
                  contentStyle={{ background: "#1a1a1a", border: "1px solid #333", borderRadius: 8 }}
                />
                <Legend />
                {users.map((user, i) => (
                  <Line
                    key={user}
                    type="monotone"
                    dataKey={user}
                    stroke={USER_COLORS[i % USER_COLORS.length]}
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    connectNulls
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
            {chartData.length === 0 && (
              <p className="text-neutral-500 text-sm text-center -mt-32 relative z-10">No data yet. Start logging!</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
