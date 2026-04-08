import webpush from "web-push";
import { prisma } from "./prisma";

webpush.setVapidDetails(
  process.env.VAPID_SUBJECT!,
  process.env.VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
);

async function deleteStaleSub(id: string) {
  await prisma.pushSubscription.delete({ where: { id } }).catch(() => {});
}

export async function sendPushToUser(
  userId: string,
  payload: { title: string; body: string; url: string }
) {
  const subs = await prisma.pushSubscription.findMany({ where: { userId } });
  await Promise.allSettled(
    subs.map(async (sub) => {
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          JSON.stringify(payload)
        );
      } catch (err: any) {
        if (err.statusCode === 410) await deleteStaleSub(sub.id);
      }
    })
  );
}

export async function sendPushToAllExcept(
  excludeUserId: string,
  payload: { title: string; body: string; url: string }
) {
  const subs = await prisma.pushSubscription.findMany({
    where: { userId: { not: excludeUserId } },
  });
  await Promise.allSettled(
    subs.map(async (sub) => {
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          JSON.stringify(payload)
        );
      } catch (err: any) {
        if (err.statusCode === 410) await deleteStaleSub(sub.id);
      }
    })
  );
}
