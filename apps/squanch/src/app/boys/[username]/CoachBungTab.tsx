"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

type Message = {
  id: string;
  content: string;
  createdAt: string;
};

export default function CoachBungTab({ username }: { username: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/coach/history?username=${encodeURIComponent(username)}`)
      .then((r) => r.json())
      .then((data) => setMessages(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, [username]);

  if (loading) {
    return <div className="text-neutral-500 py-6">Loading...</div>;
  }

  if (messages.length === 0) {
    return (
      <div className="text-neutral-500 py-6 text-center">
        Coach Bung hasn&apos;t weighed in yet. Go log some lifts.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {messages.map((msg) => (
        <div
          key={msg.id}
          className="bg-neutral-900 border border-neutral-800 rounded-xl p-5"
        >
          <div className="text-xs text-neutral-500 mb-3">
            {new Date(msg.createdAt).toLocaleString()}
          </div>
          <div className="prose prose-invert prose-sm max-w-none text-neutral-300">
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
}
