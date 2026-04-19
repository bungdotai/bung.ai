import { prisma } from "./prisma";
import { sendPushToUser } from "./push";

const LIFT_LABELS: Record<string, string> = {
  squanch: "Squanch",
  dunch: "Dunch",
  bunch: "Bunch",
};

export async function upsertPendingNotification(
  liftOwnerId: string,
  liftId: string,
  actorId: string,
  type: "comment" | "reaction",
  content: string
) {
  const sendAfter = new Date(Date.now() + 30_000);
  const existing = await prisma.pendingNotification.findFirst({
    where: { liftOwnerId, liftId, actorId, sent: false },
  });
  if (existing) {
    await prisma.pendingNotification.update({
      where: { id: existing.id },
      data: {
        comments: type === "comment" ? [...existing.comments, content] : existing.comments,
        reactions: type === "reaction" ? [...existing.reactions, content] : existing.reactions,
        sendAfter,
      },
    });
  } else {
    await prisma.pendingNotification.create({
      data: {
        liftOwnerId,
        liftId,
        actorId,
        comments: type === "comment" ? [content] : [],
        reactions: type === "reaction" ? [content] : [],
        sendAfter,
      },
    });
  }
}

export async function flushPendingNotifications() {
  const due = await prisma.pendingNotification.findMany({
    where: { sent: false, sendAfter: { lte: new Date() } },
    include: {
      actor: { select: { username: true } },
      lift: { select: { type: true } },
      liftOwner: { select: { username: true } },
    },
  });

  await Promise.allSettled(
    due.map(async (n) => {
      // Atomically claim this notification by marking it sent before doing any work.
      // If another concurrent flush already claimed it, the update will match 0 rows — skip.
      const claimed = await prisma.pendingNotification.updateMany({
        where: { id: n.id, sent: false },
        data: { sent: true },
      });
      if (claimed.count === 0) return; // already handled by a concurrent flush

      const liftLabel = LIFT_LABELS[n.lift.type] ?? n.lift.type;
      const actor = n.actor.username;
      const url = `${process.env.NEXTAUTH_URL || 'https://squanch.bung.ai'}/boys/${n.liftOwner.username}/lifts/${n.lift.type}`;

      let body: string;
      if (n.reactions.length > 0 && n.comments.length > 0) {
        body = `${actor} reacted ${n.reactions.join(" ")} and commented on your ${liftLabel}`;
      } else if (n.reactions.length > 0) {
        body = `${actor} reacted ${n.reactions.join(" ")} to your ${liftLabel}`;
      } else {
        const preview = n.comments[0].slice(0, 80);
        const suffix = n.comments.length > 1 ? ` (+${n.comments.length - 1} more)` : "";
        body = `${actor} on your ${liftLabel}: "${preview}"${suffix}`;
      }

      await sendPushToUser(n.liftOwnerId, {
        title: `💬 ${actor} on your ${liftLabel}`,
        body,
        url,
      });
    })
  );
}
