"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";

interface LocationEntry {
  id: string;
  name: string;
  recordedAt: string;
}

interface Attendee {
  id: string;
  name: string;
  markedAt: string;
}

interface Session {
  id: string;
  startedAt: string;
  endedAt: string | null;
  locations: LocationEntry[];
  attendees: Attendee[];
}

interface KnownAttendee {
  id: string;
  name: string;
}

export default function SessionDetailPage() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const [session, setSession] = useState<Session | null>(null);
  const [knownAttendees, setKnownAttendees] = useState<KnownAttendee[]>([]);
  const [loading, setLoading] = useState(true);
  const [togglingName, setTogglingName] = useState<string | null>(null);
  const [newName, setNewName] = useState("");
  const [addingName, setAddingName] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch(`/api/sessions/${id}?t=${Date.now()}`, { cache: "no-store" })
        .then(r => r.ok ? r.json() : null)
        .then(data => setSession(data)),
      fetch(`/api/attendees/known?t=${Date.now()}`, { cache: "no-store" })
        .then(r => r.ok ? r.json() : [])
        .then(data => setKnownAttendees(data)),
    ]).finally(() => setLoading(false));
  }, [id]);

  const toggleAttendee = async (name: string) => {
    if (!session) return;
    setTogglingName(name);
    try {
      const existing = session.attendees.find(a => a.name === name);
      if (existing) {
        const res = await fetch(`/api/sessions/${session.id}/attendees/${existing.id}`, { method: "DELETE" });
        if (res.ok) {
          setSession(prev => prev ? { ...prev, attendees: prev.attendees.filter(a => a.id !== existing.id) } : prev);
        } else {
          alert(`Failed to remove attendee (${res.status})`);
        }
      } else {
        const res = await fetch(`/api/sessions/${session.id}/attendees`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
        if (res.ok) {
          const newAttendee = await res.json();
          setSession(prev => prev ? { ...prev, attendees: [...prev.attendees, newAttendee] } : prev);
        } else {
          alert(`Failed to add attendee (${res.status})`);
        }
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to update attendee");
    } finally {
      setTogglingName(null);
    }
  };

  const addNewAttendee = async () => {
    if (!session || !newName.trim()) return;
    setAddingName(true);
    try {
      const res = await fetch(`/api/sessions/${session.id}/attendees`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newName.trim() }),
      });
      if (res.ok) {
        const newAttendee = await res.json();
        setSession(prev => prev ? { ...prev, attendees: [...prev.attendees, newAttendee] } : prev);
        const known = await fetch(`/api/attendees/known?t=${Date.now()}`, { cache: "no-store" });
        if (known.ok) setKnownAttendees(await known.json());
        setNewName("");
      } else {
        alert(`Failed to add attendee (${res.status})`);
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to add attendee");
    } finally {
      setAddingName(false);
    }
  };

  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-2xl animate-pulse" style={{ color: "#555" }}>🍗</div>
      </main>
    );
  }

  if (!session) {
    return (
      <main className="max-w-lg mx-auto px-4 py-6">
        <div className="text-center py-20" style={{ color: "#555" }}>
          Session not found.{" "}
          <Link href="/sessions" style={{ color: "#ff6b35" }}>← Back</Link>
        </div>
      </main>
    );
  }

  const attendedNames = new Set(session.attendees.map(a => a.name));
  const allNames = [
    ...knownAttendees.map(k => k.name),
    ...session.attendees.map(a => a.name).filter(n => !knownAttendees.find(k => k.name === n)),
  ];

  const isActive = session.endedAt === null;
  const date = new Date(session.startedAt).toLocaleDateString([], {
    weekday: "long", month: "short", day: "numeric", year: "numeric",
  });
  const currentLocation = session.locations[session.locations.length - 1]?.name ?? "Unknown";

  return (
    <main className="max-w-lg mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link href="/sessions" className="text-sm mb-1 block" style={{ color: "#666" }}>
            ← Sessions
          </Link>
          <h1 className="text-xl font-bold">{date}</h1>
        </div>
        {isActive && (
          <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: "#1a3a1a", color: "#4ade80", border: "1px solid #2d6a2d" }}>
            In Progress
          </span>
        )}
      </div>

      {/* Location */}
      <div className="rounded-xl p-4 mb-5" style={{ background: "#111", border: "1px solid #222" }}>
        <div className="text-xs font-medium mb-1" style={{ color: "#666" }}>LOCATION</div>
        <div className="text-lg font-bold">📍 {currentLocation}</div>
      </div>

      {/* Attendees */}
      <div className="mb-5">
        <div className="text-xs font-medium mb-3 uppercase tracking-wider" style={{ color: "#666" }}>
          Who's Here ({attendedNames.size})
        </div>
        <div className="grid grid-cols-2 gap-2">
          {allNames.map(name => {
            const attended = attendedNames.has(name);
            const toggling = togglingName === name;
            return (
              <button
                key={name}
                onClick={() => toggleAttendee(name)}
                disabled={toggling}
                className="py-3 px-4 rounded-xl text-sm font-medium transition-all active:scale-95 disabled:opacity-60 text-left"
                style={{
                  background: attended ? "#1a3a1a" : "#111",
                  border: `1px solid ${attended ? "#2d6a2d" : "#222"}`,
                  color: attended ? "#4ade80" : "#ccc",
                }}
              >
                {attended ? "✓ " : ""}{name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Add someone */}
      <div className="rounded-xl p-4 mb-5" style={{ background: "#111", border: "1px solid #222" }}>
        <div className="text-xs font-medium mb-2" style={{ color: "#666" }}>ADD SOMEONE</div>
        <div className="flex gap-2">
          <input
            type="text"
            value={newName}
            onChange={e => setNewName(e.target.value)}
            onKeyDown={e => e.key === "Enter" && addNewAttendee()}
            placeholder="Name..."
            className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
            style={{ background: "#0a0a0a", border: "1px solid #333", color: "#f0f0f0" }}
          />
          <button
            onClick={addNewAttendee}
            disabled={!newName.trim() || addingName}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95 disabled:opacity-40"
            style={{ background: "#ff6b35", color: "#fff" }}
          >
            Add
          </button>
        </div>
      </div>

      {/* Back */}
      <button
        onClick={() => router.push("/sessions")}
        className="w-full py-3 rounded-xl text-sm font-medium transition-all active:scale-95"
        style={{ background: "#111", border: "1px solid #222", color: "#888" }}
      >
        ← Back to Sessions
      </button>
    </main>
  );
}
