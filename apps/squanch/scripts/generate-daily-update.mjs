import { PrismaClient } from '@prisma/client';
import Anthropic from '@anthropic-ai/sdk';

const prisma = new PrismaClient();
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function main() {
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const twoWeeksAgo = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000);

  // Fetch last 30 days of lifts
  const lifts = await prisma.$queryRaw`
    SELECT u.username, l.type, l."oneRM", l."loggedAt", l.weight, l.reps
    FROM "Lift" l JOIN "User" u ON u.id = l."userId"
    WHERE l."loggedAt" >= ${thirtyDaysAgo}
    ORDER BY l."loggedAt" DESC
  `;

  // Fetch last 14 daily updates for context
  const previousUpdates = await prisma.dailyUpdate.findMany({
    where: { generatedAt: { gte: twoWeeksAgo } },
    orderBy: { generatedAt: 'desc' },
    take: 14,
  });

  let content;

  if (!lifts || lifts.length === 0) {
    content = "The boys haven't lifted yet. Someone get in the gym.";
  } else {
    // Format lift data
    const liftText = lifts.map(l => {
      const date = new Date(l.loggedAt).toLocaleDateString('en-US', {
        timeZone: 'America/Los_Angeles',
        month: 'short', day: 'numeric'
      });
      return `${l.username}: ${l.type} — ${l.weight}lbs x ${l.reps} reps (1RM: ${Math.round(l.oneRM)}lbs) on ${date}`;
    }).join('\n');

    // Format previous updates oldest-first so Claude reads them chronologically
    const prevText = previousUpdates.length > 0
      ? previousUpdates.slice().reverse().map(u => {
          const date = new Date(u.generatedAt).toLocaleDateString('en-US', {
            timeZone: 'America/Los_Angeles',
            month: 'short', day: 'numeric'
          });
          return `--- Update from ${date} ---\n${u.content}`;
        }).join('\n\n')
      : null;

    const userMessage = [
      prevText ? `Previous updates (last 2 weeks, for context):\n\n${prevText}` : null,
      `Current lift data (last 30 days):\n\n${liftText}`,
    ].filter(Boolean).join('\n\n---\n\n');

    console.log('Sending to Claude...\n');
    console.log(`Previous updates included: ${previousUpdates.length}`);
    console.log(`Lifts included: ${lifts.length}\n`);

    const today = new Date().toLocaleDateString('en-US', {
      timeZone: 'America/Los_Angeles',
      weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
    });

    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 300,
      system: `You are writing the daily update for a group chat of bros tracking their powerlifting numbers (squat=squanch, deadlift=dunch, bench=bunch). Today is ${today}.

Tone: dry, understated, like a group chat message not an ESPN segment. No caps lock, no excessive exclamation marks. Call out good lifts matter-of-factly. Rib people for weak numbers or not showing up. Reference specific usernames and exact 1RM numbers. Use the actual dates from the lift data — do not guess or infer when things happened.

Use previous updates for continuity — reference what's changed, rivalries, people called out before who still haven't shown up. Keep it brief.

Format: 2 short paragraphs max, no headers, no markdown. Plain text only.`,
      messages: [{ role: 'user', content: userMessage }],
    });

    content = response.content[0].text;
  }

  console.log('\n=== Generated Daily Update ===\n');
  console.log(content);
  console.log('\n==============================\n');

  await prisma.dailyUpdate.create({ data: { content } });
  console.log('Saved to DB successfully.');
}

main()
  .catch(err => { console.error(err); process.exit(1); })
  .finally(() => prisma.$disconnect());
