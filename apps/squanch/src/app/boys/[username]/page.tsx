import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import RecentLiftsClient from "./RecentLiftsClient";
import { computeEarnedBadges } from "@/lib/badges";
import BadgeIcon from "@/app/components/BadgeIcon";

export const dynamic = "force-dynamic";

const LIFT_TYPES = [
  { key: "squanch", label: "Squanch (Squat)", color: "text-blue-400", border: "border-blue-600/40" },
  { key: "dunch", label: "Dunch (Deadlift)", color: "text-green-400", border: "border-green-600/40" },
  { key: "bunch", label: "Bunch (Bench)", color: "text-purple-400", border: "border-purple-600/40" },
];

export default async function UserStatsPage({
  params,
}: {
  params: { username: string };
}) {
  const [user, session] = await Promise.all([
    prisma.user.findUnique({
      where: { username: params.username },
      include: {
        lifts: {
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
        },
      },
    }),
    getServerSession(authOptions),
  ]);

  if (!user) notFound();

  const currentUserId = (session?.user as any)?.id ?? null;

  const [commentRow] = await prisma.$queryRaw<Array<{count: bigint}>>`
    SELECT COUNT(*) as count FROM "Comment" c
    JOIN "Lift" l ON l.id = c."liftId"
    WHERE c."authorId" = ${user.id} AND l."userId" != ${user.id}
  `;
  const [reactionRow] = await prisma.$queryRaw<Array<{count: bigint}>>`
    SELECT COUNT(*) as count FROM "Reaction" r
    JOIN "Lift" l ON l.id = r."liftId"
    WHERE r."authorId" = ${user.id} AND l."userId" != ${user.id}
  `;
  const earnedBadges = computeEarnedBadges({
    lifts: user.lifts.map(l => ({
      ...l,
      loggedAt: l.loggedAt.toISOString(),
      reactions: l.reactions.map(r => ({ emoji: r.emoji, authorId: r.authorId })),
    })),
    userId: user.id,
    commentsOnOthers: Number(commentRow?.count ?? 0),
    reactionsOnOthers: Number(reactionRow?.count ?? 0),
  });

  // All-time best 1RM per lift type
  const prs: Record<string, number> = {};
  for (const lt of LIFT_TYPES) {
    const best = user.lifts
      .filter((l) => l.type === lt.key)
      .reduce((max, l) => Math.max(max, l.oneRM), 0);
    prs[lt.key] = best;
  }

  // Recent lifts (last 10 across all types), dates serialized to strings
  const recentLifts = user.lifts.slice(0, 10).map((l) => ({
    ...l,
    loggedAt: l.loggedAt.toISOString(),
    comments: l.comments.map((c) => ({
      ...c,
      createdAt: c.createdAt.toISOString(),
    })),
    reactions: l.reactions.map((r) => ({
      ...r,
      createdAt: (r as any).createdAt?.toISOString?.() ?? "",
    })),
  }));

  return (
    <div className="space-y-8">
      <div>
        <Link href="/boys" className="text-neutral-500 hover:text-amber-400 text-sm transition">
          ← The Boys
        </Link>
        <h1 className="text-3xl font-bold text-white mt-2">{user.username}</h1>
        <p className="text-neutral-500 text-sm mt-1">
          Member since {new Date(user.createdAt).toLocaleDateString()}
        </p>
      </div>

      {/* Badges */}
      {earnedBadges.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-neutral-300 mb-4">Badges</h2>
          <div className="flex flex-wrap gap-3">
            {earnedBadges.map(b => <BadgeIcon key={b.slug} badge={b} size="lg" />)}
          </div>
        </div>
      )}

      {/* All-time PRs */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-300 mb-4">All-Time PRs</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {LIFT_TYPES.map((lt) => (
            <Link
              key={lt.key}
              href={`/boys/${user.username}/lifts/${lt.key}`}
              className={`bg-neutral-900 border ${lt.border} hover:border-opacity-80 rounded-xl p-4 sm:p-6 transition group`}
            >
              <div className={`text-sm font-medium ${lt.color} mb-1`}>{lt.label}</div>
              <div className="text-2xl font-bold text-white">
                {prs[lt.key] > 0 ? `${Math.round(prs[lt.key])} lbs` : "—"}
              </div>
              <div className="text-xs text-neutral-500 mt-2 group-hover:text-amber-400 transition">
                View history →
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent lift history */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-300 mb-4">Recent Lifts</h2>
        <RecentLiftsClient initialLifts={recentLifts} currentUserId={currentUserId} />
      </div>
    </div>
  );
}
