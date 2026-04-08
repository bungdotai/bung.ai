import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { computeEarnedBadges } from "@/lib/badges";
import BadgeIcon from "@/app/components/BadgeIcon";

export const dynamic = "force-dynamic";

export default async function BoysPage() {
  const users = await prisma.user.findMany({
    orderBy: { username: "asc" },
    include: {
      lifts: {
        select: {
          id: true,
          oneRM: true,
          type: true,
          loggedAt: true,
          reactions: { select: { emoji: true, authorId: true } },
        },
      },
    },
  });

  const commentCounts = await prisma.$queryRaw<Array<{authorId: string; count: bigint}>>`
    SELECT c."authorId", COUNT(*) as count FROM "Comment" c
    JOIN "Lift" l ON l.id = c."liftId"
    WHERE c."authorId" != l."userId"
    GROUP BY c."authorId"
  `;
  const reactionCounts = await prisma.$queryRaw<Array<{authorId: string; count: bigint}>>`
    SELECT r."authorId", COUNT(*) as count FROM "Reaction" r
    JOIN "Lift" l ON l.id = r."liftId"
    WHERE r."authorId" != l."userId"
    GROUP BY r."authorId"
  `;
  const commentMap = Object.fromEntries(commentCounts.map(c => [c.authorId, Number(c.count)]));
  const reactionMap = Object.fromEntries(reactionCounts.map(r => [r.authorId, Number(r.count)]));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">The Boys</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {users.map((user) => {
          const liftCount = user.lifts.length;
          const bestOneRM = user.lifts.reduce((max, l) => Math.max(max, l.oneRM), 0);
          const earnedBadges = computeEarnedBadges({
            lifts: user.lifts.map(l => ({ ...l, loggedAt: l.loggedAt.toISOString() })),
            userId: user.id,
            commentsOnOthers: commentMap[user.id] ?? 0,
            reactionsOnOthers: reactionMap[user.id] ?? 0,
          });
          return (
            <Link
              key={user.id}
              href={`/boys/${user.username}`}
              className="bg-neutral-900 border border-neutral-800 hover:border-amber-600/40 rounded-xl p-4 sm:p-6 transition group"
            >
              <div className="text-xl font-semibold text-white group-hover:text-amber-400 transition mb-2">
                {user.username}
              </div>
              <div className="text-sm text-neutral-500">
                {liftCount} lift{liftCount !== 1 ? "s" : ""} logged
              </div>
              {bestOneRM > 0 && (
                <div className="text-sm text-neutral-400 mt-1">
                  Best 1RM: <span className="text-amber-400">{Math.round(bestOneRM)} lbs</span>
                </div>
              )}
              {earnedBadges.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-neutral-800">
                  {earnedBadges.map(b => <BadgeIcon key={b.slug} badge={b} size="sm" />)}
                </div>
              )}
            </Link>
          );
        })}
        {users.length === 0 && (
          <p className="text-neutral-500 col-span-3">No boys yet. Start lifting!</p>
        )}
      </div>
    </div>
  );
}
