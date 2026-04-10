"use client";

import { useState, useEffect, useRef } from "react";
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

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);
  const [knownAttendees, setKnownAttendees] = useState<KnownAttendee[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [newName, setNewName] = useState("");
  const [addingName, setAddingName] = useState(false);
  const [togglingName, setTogglingName] = useState<string | null>(null);
  const [locationWarning, setLocationWarning] = useState(false);
  const newNameRef = useRef<HTMLInputElement>(null);

  const refreshSession = async () => {
    const res = await fetch("/api/sessions/active");
    if (res.ok) {
      const data = await res.json();
      setSession(data);
    } else {
      setSession(null);
    }
  };

  const refreshKnownAttendees = async () => {
    const res = await fetch("/api/attendees/known");
    if (res.ok) {
      setKnownAttendees(await res.json());
    }
  };

  useEffect(() => {
    Promise.all([refreshSession(), refreshKnownAttendees()]).finally(() =>
      setLoading(false)
    );
  }, []);

  const getLocation = (): Promise<{ lat: number; lng: number }> =>
    new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation not supported"));
        return;
      }
      navigator.geolocation.getCurrentPosition(
        (pos) =>
          resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        reject,
        { timeout: 10000 }
      );
    });

  const startSession = async () => {
    setActionLoading(true);
    setLocationWarning(false);
    try {
      let coords: { lat: number | null; lng: number | null } = {
        lat: null,
        lng: null,
      };
      try {
        coords = await getLocation();
      } catch {
        setLocationWarning(true);
      }
      const res = await fetch("/api/sessions/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(coords),
      });
      if (res.ok) {
        await refreshSession();
      } else {
        let message = `Failed to start session (${res.status})`;
        try {
          const data = await res.json();
          if (data?.error) message = data.error;
        } catch {
          // use status fallback
        }
        alert(message);
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to start session");
    } finally {
      setActionLoading(false);
    }
  };

  const endSession = async () => {
    if (!session) return;
    if (!confirm("End this session?")) return;
    setActionLoading(true);
    try {
      const res = await fetch(`/api/sessions/${session.id}/end`, {
        method: "POST",
      });
      if (res.ok) {
        setSession(null);
      } else {
        let message = `Failed to end session (${res.status})`;
        try {
          const data = await res.json();
          if (data?.error) message = data.error;
        } catch {
          // use status fallback
        }
        alert(message);
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to end session");
    } finally {
      setActionLoading(false);
    }
  };

  const toggleAttendee = async (name: string) => {
    if (!session) return;
    setTogglingName(name);
    try {
      const existing = session.attendees.find((a) => a.name === name);
      let res: Response;
      if (existing) {
        res = await fetch(
          `/api/sessions/${session.id}/attendees/${existing.id}`,
          { method: "DELETE" }
        );
      } else {
        res = await fetch(`/api/sessions/${session.id}/attendees`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        });
      }
      if (res.ok) {
        await refreshSession();
      } else {
        let message = `Failed to update attendee (${res.status})`;
        try {
          const data = await res.json();
          if (data?.error) message = data.error;
        } catch {
          // use status fallback
        }
        alert(message);
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
        await Promise.all([refreshSession(), refreshKnownAttendees()]);
        setNewName("");
        newNameRef.current?.focus();
      } else {
        let message = `Failed to add attendee (${res.status})`;
        try {
          const data = await res.json();
          if (data?.error) message = data.error;
        } catch {
          // use status fallback
        }
        alert(message);
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : "Failed to add attendee");
    } finally {
      setAddingName(false);
    }
  };

  const changeLocation = async () => {
    if (!session) return;
    setActionLoading(true);
    try {
      const coords = await getLocation();
      await fetch(`/api/sessions/${session.id}/location`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(coords),
      });
      await refreshSession();
    } catch {
      alert("Could not get location");
    } finally {
      setActionLoading(false);
    }
  };

  if (loading) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <div className="text-2xl animate-pulse" style={{ color: "#555" }}>
          🍗
        </div>
      </main>
    );
  }

  const currentLocation =
    session?.locations[session.locations.length - 1]?.name ?? "Unknown";

  const attendedNames = new Set(session?.attendees.map((a) => a.name) ?? []);

  // All names to show: known attendees + any session attendees not in known list
  const allNames = [
    ...knownAttendees.map((k) => k.name),
    ...(session?.attendees
      .map((a) => a.name)
      .filter((n) => !knownAttendees.find((k) => k.name === n)) ?? []),
  ];

  return (
    <main className="max-w-lg mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Wing 🍗</h1>
        <Link
          href="/sessions"
          className="text-sm px-3 py-1.5 rounded-lg transition-colors"
          style={{ color: "#888", border: "1px solid #222" }}
        >
          History
        </Link>
      </div>

      {!session ? (
        /* No active session */
        <div className="flex flex-col items-center justify-center py-20 gap-6">
          <div className="text-6xl">🍗</div>
          <p style={{ color: "#666" }} className="text-center text-sm">
            No active session. Thursday again?
          </p>
          <button
            onClick={startSession}
            disabled={actionLoading}
            className="w-full max-w-xs py-4 rounded-xl text-lg font-semibold transition-all active:scale-95 disabled:opacity-50"
            style={{
              background: "linear-gradient(135deg, #ff6b35, #ff8c42)",
              color: "#fff",
            }}
          >
            {actionLoading ? "Locating..." : "Start Wingdome Session 🍗"}
          </button>
          {locationWarning && (
            <p className="text-xs text-center" style={{ color: "#888" }}>
              Location unavailable — defaulting to Wingdome Seattle
            </p>
          )}
        </div>
      ) : (
        /* Active session */
        <div className="flex flex-col gap-5">
          {/* Location card */}
          <div
            className="rounded-xl p-4"
            style={{ background: "#111", border: "1px solid #222" }}
          >
            <div className="text-xs font-medium mb-1" style={{ color: "#666" }}>
              CURRENT LOCATION
            </div>
            <div className="text-xl font-bold">📍 {currentLocation}</div>
            <div className="text-xs mt-1" style={{ color: "#555" }}>
              Session started{" "}
              {new Date(session.startedAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>

          {/* Attendees */}
          <div>
            <div
              className="text-xs font-medium mb-3 uppercase tracking-wider"
              style={{ color: "#666" }}
            >
              Who&apos;s Here ({attendedNames.size})
            </div>
            <div className="grid grid-cols-2 gap-2">
              {allNames.map((name) => {
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
                    {attended ? "✓ " : ""}
                    {name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Add new person */}
          <div
            className="rounded-xl p-4"
            style={{ background: "#111", border: "1px solid #222" }}
          >
            <div
              className="text-xs font-medium mb-2"
              style={{ color: "#666" }}
            >
              ADD SOMEONE
            </div>
            <div className="flex gap-2">
              <input
                ref={newNameRef}
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addNewAttendee()}
                placeholder="Name..."
                className="flex-1 px-3 py-2 rounded-lg text-sm outline-none"
                style={{
                  background: "#0a0a0a",
                  border: "1px solid #333",
                  color: "#f0f0f0",
                }}
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

          {/* Actions */}
          <div className="flex gap-2 mt-2">
            <button
              onClick={changeLocation}
              disabled={actionLoading}
              className="flex-1 py-3 rounded-xl text-sm font-medium transition-all active:scale-95 disabled:opacity-50"
              style={{ background: "#111", border: "1px solid #222", color: "#ccc" }}
            >
              {actionLoading ? "Locating..." : "Change Location 📍"}
            </button>
            <button
              onClick={endSession}
              disabled={actionLoading}
              className="flex-1 py-3 rounded-xl text-sm font-medium transition-all active:scale-95 disabled:opacity-50"
              style={{ background: "#111", border: "1px solid #333", color: "#4ade80" }}
            >
              End Session ✅
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
