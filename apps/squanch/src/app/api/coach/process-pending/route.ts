import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { prisma } from "@/lib/prisma";
import { sendPushToUser } from "@/lib/push";

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const STYLE_PROMPTS: Record<string, string> = {
  drill_sergeant:
    "You are an extremely harsh, no-nonsense drill sergeant. Swear occasionally. Criticize with brutal specificity. ONLY give a genuine compliment if they hit an all-time 30-day PR — and make it brief and grudging. Never let them feel too good about themselves.",
  zen_master:
    "You are a calm, wise, philosophical lifting sensei. Speak in measured, thoughtful sentences. Find meaning in every rep. Encourage steadiness and consistency above all. No judgment — only gentle guidance.",
  hype_bro:
    "You are an absolutely unhinged hype man. Everything this person does is INSANE and LEGENDARY. Use lifting slang. Be outrageously enthusiastic. Treat every set like it's a world record attempt.",
};

function estimateOneRM(weight: number, reps: number): number {
  return weight * (1 + reps / 30);
}

export async function GET(req: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const auth = req.headers.get("authorization");
    if (auth !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  const now = new Date();

  const pending = await prisma.pendingCoaching.findMany({
    where: { scheduledAt: { lte: now } },
    include: { user: true },
  });

  if (pending.length === 0) {
    return NextResponse.json({ processed: 0 });
  }

  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);

  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  // Load all lifts from all users logged today for community context
  const communityLifts = await prisma.lift.findMany({
    where: { loggedAt: { gte: startOfToday } },
    include: { user: { select: { username: true } } },
    orderBy: { loggedAt: "asc" },
  });

  let processed = 0;

  for (const row of pending) {
    try {
      const { userId, sessionStart } = row;
      const username = row.user.username;
      const sessionEnd = new Date(sessionStart.getTime() + 4 * 60 * 60 * 1000);

      // Load session lifts
      const sessionLifts = await prisma.lift.findMany({
        where: { userId, loggedAt: { gte: sessionStart, lte: sessionEnd } },
        orderBy: { loggedAt: "asc" },
      });

      if (sessionLifts.length === 0) {
        await prisma.pendingCoaching.delete({ where: { id: row.id } });
        continue;
      }

      // Load coach settings
      const settings = await prisma.userCoachSettings.findUnique({ where: { userId } });
      const goalsText = settings?.goalsText || "No goals set";
      const coachingStyle = settings?.coachingStyle || "hype_bro";
      const stylePrompt = STYLE_PROMPTS[coachingStyle] ?? STYLE_PROMPTS.hype_bro;

      // Best 1RM per type in last 30 days
      const recentLifts = await prisma.lift.findMany({
        where: { userId, loggedAt: { gte: thirtyDaysAgo } },
      });

      const best1RM: Record<string, number> = {};
      for (const lift of recentLifts) {
        if (!best1RM[lift.type] || lift.oneRM > best1RM[lift.type]) {
          best1RM[lift.type] = lift.oneRM;
        }
      }

      // Format session lifts for prompt
      const sessionLiftsText = sessionLifts
        .map((l) => {
          const est = estimateOneRM(l.weight, l.reps);
          return `${l.type}: ${l.weight}lbs x ${l.reps} reps (1RM est: ${Math.round(est)}lbs)`;
        })
        .join("\n");

      // Format best 1RMs
      const bestRMText = ["squanch", "dunch", "bunch"]
        .map((t) => `${t}: ${best1RM[t] ? Math.round(best1RM[t]) + "lbs" : "no data"}`)
        .join(" | ");

      // Format community lifts (exclude the user themselves)
      const othersToday = communityLifts.filter((l) => l.userId !== userId);
      const communityText =
        othersToday.length > 0
          ? othersToday
              .map((l) => `${l.user.username}: ${l.type} ${l.weight}lbs x ${l.reps}`)
              .join(", ")
          : "Nobody else has logged today.";

      const prompt = `You are Coach Bung, an AI lifting coach for Squanch — a powerlifting tracker for a group of friends.
Lift names: squanch = squat, dunch = bench press, bunch = deadlift.

Coaching style: ${stylePrompt}

User: ${username}
Their goals: ${goalsText}

Their session lifts:
${sessionLiftsText}

Their best 1RMs in last 30 days:
${bestRMText}

What the other boys logged today:
${communityText}

Write a coaching message for ${username}. Be specific — mention actual weights. 3-5 sentences max. No emojis in the message itself.`;

      const response = await anthropic.messages.create({
        model: "claude-haiku-4-5",
        max_tokens: 300,
        messages: [{ role: "user", content: prompt }],
      });

      const content = (response.content[0] as any).text as string;

      // Save to DB
      await prisma.coachingMessage.create({
        data: {
          userId,
          content,
          sessionLifts: sessionLifts as any,
        },
      });

      // Send push notification
      await sendPushToUser(userId, {
        title: "Coach Bung checked in",
        body: content.slice(0, 120) + (content.length > 120 ? "…" : ""),
        url: `${process.env.NEXTAUTH_URL || "https://squanch.bung.ai"}/boys/${username}?tab=coach`,
      });

      // Delete the pending row
      await prisma.pendingCoaching.delete({ where: { id: row.id } });

      processed++;
    } catch (err) {
      console.error(`Coach Bung: failed to process userId=${row.userId}`, err);
    }
  }

  return NextResponse.json({ processed });
}
