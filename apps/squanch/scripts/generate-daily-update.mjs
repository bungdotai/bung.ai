import { PrismaClient } from '@prisma/client';
import Anthropic from '@anthropic-ai/sdk';

const prisma = new PrismaClient();
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function main() {
  // Fetch lifts from last 30 days
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

  const lifts = await prisma.$queryRaw`
    SELECT u.username, l.type, l."oneRM", l."loggedAt", l.weight, l.reps
    FROM "Lift" l JOIN "User" u ON u.id = l."userId"
    WHERE l."loggedAt" >= ${thirtyDaysAgo}
    ORDER BY l."loggedAt" DESC
  `;

  let content;

  if (!lifts || lifts.length === 0) {
    content = "The boys haven't lifted yet. Someone get in the gym.";
  } else {
    // Format lift data as readable text
    const liftText = lifts.map(l => {
      const date = new Date(l.loggedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      return `${l.username}: ${l.type} — ${l.weight}lbs x ${l.reps} reps (1RM: ${Math.round(l.oneRM)}lbs) on ${date}`;
    }).join('\n');

    const formatted = `Recent lifting activity (last 30 days):\n\n${liftText}`;
    console.log('Sending to Claude:\n', formatted, '\n');

    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5',
      max_tokens: 512,
      system: 'You are writing the daily update for a group chat of bros tracking their powerlifting numbers (squat=squanch, deadlift=dunch, bench=bunch).\n\nTone: dry, understated, like a group chat message not an ESPN segment. No caps lock, no excessive exclamation marks. Call out good lifts matter-of-factly. Rib people for weak numbers or not showing up. Reference specific usernames and exact 1RM numbers. If someone hasn\'t logged anything, call them out by name.\n\nFormat: 3-4 short paragraphs, no headers, no markdown formatting (plain paragraphs only). Start with whoever had the biggest lift or most notable performance.',
      messages: [{ role: 'user', content: formatted }],
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
