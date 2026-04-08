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

interface Comment {
  id: string;
  body: string;
  createdAt: string;
  author: { username: string };
}

interface Reaction {
  id: string;
  emoji: string;
  authorId: string;
  author: { username: string };
}

interface LiftEntry {
  id: string;
  weight: number;
  reps: number;
  oneRM: number;
  loggedAt: string;
  comments: Comment[];
  reactions: Reaction[];
}

interface Props {
  username: string;
  liftType: string;
  liftLabel: string;
  chartColor: string;
  lifts: LiftEntry[];
}

const VALID_EMOJIS = ["💪", "😂", "🤮"];

function ReactionBar({
  lift,
  currentUserId,
}: {
  lift: LiftEntry;
  currentUserId: string | null;
}) {
  const [reactions, setReactions] = useState<Reaction[]>(lift.reactions);
  const [loading, setLoading] = useState<string | null>(null);

  const toggle = async (emoji: string) => {
    if (!currentUserId || loading) return;
    setLoading(emoji);
    const res = await fetch("/api/reactions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ liftId: lift.id, emoji }),
    });
    if (res.ok) {
      const data = await res.json();
      if (data.action === "removed") {
        setReactions((prev) =>
          prev.filter((r) => !(r.authorId === currentUserId && r.emoji === emoji))
        );
      } else {
        setReactions((prev) => [
          ...prev,
          { id: data.reaction.id, emoji, authorId: currentUserId, author: { username: "" } },
        ]);
      }
    }
    setLoading(null);
  };

  return (
    <div className="flex gap-2 mt-2">
      {VALID_EMOJIS.map((emoji) => {
        const count = reactions.filter((r) => r.emoji === emoji).length;
        const mine = currentUserId ? reactions.some((r) => r.emoji === emoji && r.authorId === currentUserId) : false;
        return (
          <button
            key={emoji}
            onClick={() => toggle(emoji)}
            disabled={!currentUserId || loading === emoji}
            className={`flex items-center gap-1 px-2 py-1 rounded-lg text-sm border transition ${
              mine
                ? "bg-amber-600/20 border-amber-600/60 text-amber-300"
                : "bg-neutral-800 border-neutral-700 text-neutral-400 hover:border-neutral-500"
            } ${!currentUserId ? "cursor-default opacity-50" : "cursor-pointer"}`}
          >
            <span>{emoji}</span>
            {count > 0 && <span className="text-xs">{count}</span>}
          </button>
        );
      })}
    </div>
  );
}

function CommentSection({
  lift,
  currentUserId,
}: {
  lift: LiftEntry;
  currentUserId: string | null;
}) {
  const [comments, setComments] = useState<Comment[]>(lift.comments);
  const [body, setBody] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim() || submitting) return;
    setSubmitting(true);
    const res = await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ liftId: lift.id, body }),
    });
    if (res.ok) {
      const comment = await res.json();
      setComments((prev) => [...prev, comment]);
      setBody("");
    }
    setSubmitting(false);
  };

  return (
    <div className="mt-3 space-y-2">
      {comments.map((c) => (
        <div key={c.id} className="text-sm text-neutral-300">
          <span className="text-amber-400 font-medium">{c.author.username}</span>
          <span className="text-neutral-500 mx-1">·</span>
          <span>{c.body}</span>
        </div>
      ))}
      {currentUserId && (
        <form onSubmit={submit} className="flex gap-2 mt-2">
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Add a comment..."
            className="flex-1 bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-1.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-amber-600/60"
          />
          <button
            type="submit"
            disabled={submitting || !body.trim()}
            className="px-3 py-1.5 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white text-sm rounded-lg transition"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default function LiftDetailClient({
  username,
  liftType,
  liftLabel,
  chartColor,
  lifts,
}: Props) {
  const { data: session } = useSession();
  const currentUserId = (session?.user as any)?.id ?? null;

  // Build chart data
  const chartData = lifts
    .slice()
    .reverse()
    .map((l) => ({
      date: new Date(l.loggedAt).toLocaleDateString(),
      oneRM: Math.round(l.oneRM),
    }));

  return (
    <div className="space-y-8">
      {/* Chart */}
      <div className="bg-neutral-900 rounded-xl p-6 border border-neutral-800">
        <h2 className="text-lg font-semibold mb-4" style={{ color: chartColor }}>
          {liftLabel} — Estimated 1RM (lbs)
        </h2>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={280}>
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
                className="bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-4"
              >
                <div className="flex items-center justify-between">
                  <div className="text-white font-medium">
                    {lift.weight} lbs × {lift.reps} reps
                  </div>
                  <div className="flex items-center gap-4 text-sm text-neutral-400">
                    <span>
                      1RM: <span className="text-amber-400 font-medium">{Math.round(lift.oneRM)}</span>
                    </span>
                    <span>{new Date(lift.loggedAt).toLocaleDateString()}</span>
                  </div>
                </div>
                <ReactionBar lift={lift} currentUserId={currentUserId} />
                <CommentSection lift={lift} currentUserId={currentUserId} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
