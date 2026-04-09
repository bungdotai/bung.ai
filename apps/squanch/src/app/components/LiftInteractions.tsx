"use client";

import { useState } from "react";

export interface Comment {
  id: string;
  body: string;
  createdAt: string;
  author: { username: string };
}

export interface Reaction {
  id: string;
  emoji: string;
  authorId: string;
  author: { username: string };
}

export interface LiftEntry {
  id: string;
  userId: string;
  type: string;
  weight: number;
  reps: number;
  oneRM: number;
  loggedAt: string;
  comments: Comment[];
  reactions: Reaction[];
}

const VALID_EMOJIS = ["💪", "😂", "🤮"];

export function ReactionBar({
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
        const mine = currentUserId
          ? reactions.some((r) => r.emoji === emoji && r.authorId === currentUserId)
          : false;
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

export function CommentSection({
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

export function DeleteLiftButton({
  liftId,
  onDelete,
}: {
  liftId: string;
  onDelete?: (liftId: string) => void;
}) {
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    if (deleting) return;
    setDeleting(true);
    const res = await fetch(`/api/lifts/${liftId}`, { method: "DELETE" });
    if (res.ok) {
      onDelete?.(liftId);
    } else {
      setDeleting(false);
      setConfirming(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setConfirming(true)}
        className="text-neutral-600 hover:text-red-400 transition text-base leading-none"
        title="Delete lift"
        aria-label="Delete lift"
      >
        ×
      </button>
      {confirming && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-neutral-900 border border-neutral-700 rounded-xl p-6 max-w-sm w-full mx-4 space-y-4">
            <p className="text-white font-medium">Delete this lift?</p>
            <p className="text-neutral-400 text-sm">This cannot be undone.</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setConfirming(false)}
                disabled={deleting}
                className="px-4 py-2 text-sm text-neutral-300 hover:text-white transition disabled:opacity-40"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="px-4 py-2 text-sm bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white rounded-lg transition"
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function LiftInteractionsClient({
  lift,
  currentUserId,
}: {
  lift: LiftEntry;
  currentUserId: string | null;
}) {
  return (
    <>
      <ReactionBar lift={lift} currentUserId={currentUserId} />
      <CommentSection lift={lift} currentUserId={currentUserId} />
    </>
  );
}
