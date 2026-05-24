import { PrismaClient } from '@prisma/client';
import Anthropic from '@anthropic-ai/sdk';
import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// Load .env from the app root
const __dirname = dirname(fileURLToPath(import.meta.url));
try {
  const envFile = readFileSync(resolve(__dirname, '../.env'), 'utf8');
  for (const line of envFile.split('\n')) {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) process.env[match[1].trim()] = match[2].trim();
  }
} catch {}


const prisma = new PrismaClient();
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Helper: wake Neon endpoint if needed
async function ensureDbAwake() {
  const NEON_TOKEN = process.env.NEON_TOKEN || readFileSync('/data/.openclaw/workspace/.neon-token', 'utf8').trim();
  const ENDPOINT_ID = 'ep-flat-brook-any0la8o';
  const PROJECT_ID = 'billowing-sun-57683760';
  
  try {
    const res = await fetch(`https://console.neon.tech/api/v2/projects/${PROJECT_ID}/endpoints/${ENDPOINT_ID}`, {
      headers: { 'Authorization': `Bearer ${NEON_TOKEN}` }
    });
    const data = await res.json();
    const state = data.endpoint?.current_state;
    
    if (state === 'idle') {
      console.log('DB endpoint is idle, restarting...');
      await fetch(`https://console.neon.tech/api/v2/projects/${PROJECT_ID}/endpoints/${ENDPOINT_ID}/restart`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${NEON_TOKEN}`, 'Content-Type': 'application/json' }
      });
      // Wait for restart
      await new Promise(r => setTimeout(r, 8000));
    }
  } catch (err) {
    console.warn('Failed to check/restart DB:', err.message);
  }
}

async function main() {
  // Ensure DB is awake before querying
  await ensureDbAwake();
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

  // Fetch comments since the last update (or last 30 days if no prior update)
  const lastUpdate = previousUpdates[0];
  const commentsSince = lastUpdate ? lastUpdate.generatedAt : thirtyDaysAgo;
  const recentComments = await prisma.comment.findMany({
    where: { createdAt: { gte: commentsSince } },
    include: {
      author: { select: { username: true } },
      lift: { include: { user: { select: { username: true } } } },
    },
    orderBy: { createdAt: 'asc' },
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

    // Format comments since last update
    const commentsText = recentComments.length > 0
      ? recentComments.map(c => {
          const time = new Date(c.createdAt).toLocaleString('en-US', {
            timeZone: 'America/Los_Angeles',
            month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit'
          });
          return `${c.author.username} on ${c.lift.user.username}'s ${c.lift.type} (${c.lift.weight}lbs x ${c.lift.reps} reps) at ${time}: "${c.body}"`;
        }).join('\n')
      : null;

    const userMessage = [
      prevText ? `Previous updates (last 2 weeks, for context):\n\n${prevText}` : null,
      commentsText ? `Comments since last update:\n\n${commentsText}` : null,
      `Current lift data (last 30 days):\n\n${liftText}`,
    ].filter(Boolean).join('\n\n---\n\n');

    console.log('Sending to Claude...\n');
    console.log(`Previous updates included: ${previousUpdates.length}`);
    console.log(`Comments included: ${recentComments.length}`);
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
