import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function SessionsPage() {
  const sessions = await prisma.session.findMany({
    include: {
      locations: { orderBy: { recordedAt: "asc" } },
      attendees: { orderBy: { markedAt: "asc" } },
    },
    orderBy: { startedAt: "desc" },
  });

  return (
    <main className="max-w-lg mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Sessions 📋</h1>
        <Link
          href="/"
          className="text-sm px-3 py-1.5 rounded-lg transition-colors"
          style={{ color: "#888", border: "1px solid #222" }}
        >
          ← Back
        </Link>
      </div>

      {sessions.length === 0 ? (
        <div className="text-center py-20" style={{ color: "#555" }}>
          No sessions yet. Go eat some wings.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {sessions.map((session) => {
            const isActive = session.endedAt === null;
            const date = new Date(session.startedAt);
            const dateStr = date.toLocaleDateString([], {
              weekday: "short",
              month: "short",
              day: "numeric",
              year: "numeric",
            });
            const timeStr = date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });

            // Deduplicate locations by name while preserving order
            const locationNames: string[] = [];
            for (const loc of session.locations) {
              if (!locationNames.includes(loc.name)) {
                locationNames.push(loc.name);
              }
            }

            return (
              <div
                key={session.id}
                className="rounded-xl p-4"
                style={{
                  background: "#111",
                  border: `1px solid ${isActive ? "#2d6a2d" : "#222"}`,
                }}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="font-semibold">{dateStr}</div>
                    <div className="text-xs mt-0.5" style={{ color: "#666" }}>
                      {timeStr}
                      {session.endedAt &&
                        ` – ${new Date(session.endedAt).toLocaleTimeString(
                          [],
                          { hour: "2-digit", minute: "2-digit" }
                        )}`}
                    </div>
                  </div>
                  {isActive && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        background: "#1a3a1a",
                        color: "#4ade80",
                        border: "1px solid #2d6a2d",
                      }}
                    >
                      In Progress
                    </span>
                  )}
                </div>

                {/* Locations */}
                <div className="mb-3">
                  <div
                    className="text-xs font-medium mb-1.5"
                    style={{ color: "#555" }}
                  >
                    📍 {locationNames.join(" → ")}
                  </div>
                </div>

                {/* Attendees */}
                {session.attendees.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {session.attendees.map((a) => (
                      <span
                        key={a.id}
                        className="text-xs px-2.5 py-1 rounded-full"
                        style={{
                          background: "#1a1a1a",
                          border: "1px solid #333",
                          color: "#ccc",
                        }}
                      >
                        {a.name}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="text-xs" style={{ color: "#444" }}>
                    No attendees logged
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
