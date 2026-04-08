import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import LiftDetailClient from "./LiftDetailClient";

export const dynamic = "force-dynamic";

const LIFT_TYPES = [
  { key: "squanch", label: "Squanch (Squat)", color: "#3b82f6" },
  { key: "dunch", label: "Dunch (Deadlift)", color: "#22c55e" },
  { key: "bunch", label: "Bunch (Bench)", color: "#a855f7" },
];

export default async function LiftDetailPage({
  params,
}: {
  params: { username: string; liftType: string };
}) {
  const { username, liftType } = params;

  const lt = LIFT_TYPES.find((t) => t.key === liftType);
  if (!lt) notFound();

  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) notFound();

  const rawLifts = await prisma.lift.findMany({
    where: { userId: user.id, type: liftType },
    orderBy: { loggedAt: "desc" },
    include: {
      comments: {
        include: { author: { select: { username: true } } },
        orderBy: { createdAt: "asc" },
      },
      reactions: {
        include: { author: { select: { username: true } } },
      },
    },
  });

  // Serialize dates to strings for the client component
  const lifts = rawLifts.map((l) => ({
    ...l,
    loggedAt: l.loggedAt.toISOString(),
    comments: l.comments.map((c) => ({
      ...c,
      createdAt: c.createdAt.toISOString(),
    })),
    reactions: l.reactions.map((r) => ({
      ...r,
      createdAt: r.createdAt.toISOString(),
    })),
  }));

  return (
    <div className="space-y-6">
      <div>
        <Link
          href={`/boys/${username}`}
          className="text-neutral-500 hover:text-amber-400 text-sm transition"
        >
          ← {username}
        </Link>
        <h1 className="text-3xl font-bold text-white mt-2">
          {username} —{" "}
          <span style={{ color: lt.color }}>{lt.label}</span>
        </h1>
      </div>
      <LiftDetailClient
        username={username}
        liftType={liftType}
        liftLabel={lt.label}
        chartColor={lt.color}
        lifts={lifts}
      />
    </div>
  );
}
