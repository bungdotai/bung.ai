import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { upsertPendingNotification, flushPendingNotifications } from "@/lib/notifications";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { liftId, body } = await req.json();
  if (!liftId || !body?.trim()) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const authorId = (session.user as any).id;

  const comment = await prisma.comment.create({
    data: { liftId, authorId, body: body.trim() },
    include: { author: { select: { username: true } }, lift: { select: { userId: true } } },
  });

  const liftOwnerId = comment.lift.userId;
  if (liftOwnerId !== authorId) {
    await upsertPendingNotification(liftOwnerId, liftId, authorId, "comment", body.trim());
    flushPendingNotifications().catch(() => {});
  }

  const { lift: _lift, ...commentResponse } = comment;
  return NextResponse.json(commentResponse);
}
