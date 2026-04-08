import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function BoysPage() {
  const users = await prisma.user.findMany({
    orderBy: { username: "asc" },
    include: {
      lifts: {
        select: { oneRM: true, type: true },
      },
    },
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">The Boys</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {users.map((user) => {
          const liftCount = user.lifts.length;
          const bestOneRM = user.lifts.reduce((max, l) => Math.max(max, l.oneRM), 0);
          return (
            <Link
              key={user.id}
              href={`/boys/${user.username}`}
              className="bg-neutral-900 border border-neutral-800 hover:border-amber-600/40 rounded-xl p-6 transition group"
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
