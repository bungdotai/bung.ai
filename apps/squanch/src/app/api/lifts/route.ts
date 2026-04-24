import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { sendPushToAllExcept } from "@/lib/push";
import { formatWeight } from "@/lib/format";

export async function GET() {
  const lifts = await prisma.lift.findMany({
    include: { user: { select: { username: true } } },
    orderBy: { loggedAt: "asc" },
  });
  return NextResponse.json(lifts);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { type, weight, reps, notifyOthers } = await req.json();
  if (!type || weight == null || weight < 0 || !reps || reps < 1) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  const oneRM = weight * (1 + reps / 30);
  const userId = (session.user as any).id;
  const username = session.user?.name ?? "Someone";

  const lift = await prisma.lift.create({
    data: { userId, type, weight, reps, oneRM },
  });

  // Schedule Coach Bung message — debounced to 90 min after last lift in session
  const scheduledAt = new Date(Date.now() + 90 * 60 * 1000);
  prisma.pendingCoaching.upsert({
    where: { userId },
    create: { userId, scheduledAt, sessionStart: lift.loggedAt },
    update: { scheduledAt },
  }).catch(() => {});

  if (notifyOthers) {
    const liftLabels: Record<string, string> = {
      squanch: "Squanch (Squat)",
      dunch: "Dunch (Deadlift)",
      bunch: "Bunch (Bench)",
    };
    const liftLabel = liftLabels[type] ?? type;
    sendPushToAllExcept(userId, {
      title: `💪 ${username} hit the gym`,
      body: `${username} just logged ${formatWeight(weight)}lbs × ${reps} on ${liftLabel} (1RM: ${Math.round(oneRM)}lbs)`,
      url: `${process.env.NEXTAUTH_URL || 'https://squanch.bung.ai'}/boys/${username}/lifts/${type}`,
    }).catch(() => {});
  }

  return NextResponse.json(lift);
}
