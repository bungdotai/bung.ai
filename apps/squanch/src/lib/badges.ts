export interface BadgeDefinition {
  slug: string; emoji: string; name: string; description: string;
}

export const BADGES: BadgeDefinition[] = [
  { slug: "first-rep", emoji: "🏋️", name: "First Rep", description: "Logged your first lift." },
  { slug: "century-club", emoji: "💯", name: "Century Club", description: "Hit a 100lb 1RM on any lift." },
  { slug: "two-plates", emoji: "🍰", name: "Two Plates", description: "Hit a 225lb 1RM on any lift." },
  { slug: "three-plates", emoji: "🏆", name: "Three Plates", description: "Hit a 315lb 1RM on any lift." },
  { slug: "four-plates", emoji: "👑", name: "Four Plates", description: "Hit a 405lb 1RM on any lift." },
  { slug: "on-a-roll", emoji: "🔥", name: "On a Roll", description: "Logged lifts 3 days in a row." },
  { slug: "week-warrior", emoji: "🗓️", name: "Week Warrior", description: "Logged every day for a full week." },
  { slug: "sunday-lifter", emoji: "☀️", name: "Sunday Lifter", description: "Logged on 5 separate Sundays." },
  { slug: "night-owl", emoji: "🌙", name: "Night Owl", description: "Logged a lift after 10pm." },
  { slug: "full-house", emoji: "🧩", name: "Full House", description: "Logged all three lifts in one day." },
  { slug: "specialist", emoji: "🎯", name: "Specialist", description: "Logged the same lift type 20 times." },
  { slug: "triathlete", emoji: "🔄", name: "Triathlete", description: "Logged all three lifts in one week." },
  { slug: "heckler", emoji: "🗣️", name: "Heckler", description: "Left 10 comments on other people's lifts." },
  { slug: "fan-club", emoji: "💪", name: "Fan Club", description: "Reacted to 20 other people's lifts." },
  { slug: "roasted", emoji: "🎤", name: "Roasted", description: "Received 10 😂 reactions on a single lift." },
  { slug: "big-announcement", emoji: "🔔", name: "Big Announcement", description: "Logged 20+ lifts with notifications on." },
  { slug: "glow-up", emoji: "📈", name: "Glow Up", description: "Improved 1RM by 20% from your first log." },
  { slug: "pr-machine", emoji: "🚀", name: "PR Machine", description: "Set 5 new PRs in a single week." },
  { slug: "balanced", emoji: "⚖️", name: "Balanced", description: "1RM within 10% across all three lifts." },
];

export interface BadgeCheckData {
  lifts: Array<{
    id: string; type: string; oneRM: number; loggedAt: Date | string;
    reactions: Array<{ emoji: string; authorId: string }>;
  }>;
  userId: string;
  commentsOnOthers: number;
  reactionsOnOthers: number;
}

function toDay(d: Date | string) {
  return new Date(d).toLocaleDateString("en-US", { timeZone: "America/Los_Angeles" });
}

function toMonday(d: Date | string) {
  const date = new Date(d);
  const day = date.getDay();
  const mon = new Date(date);
  mon.setDate(date.getDate() - (day === 0 ? 6 : day - 1));
  return mon.toLocaleDateString("en-US", { timeZone: "America/Los_Angeles" });
}

export function computeEarnedBadges(data: BadgeCheckData): BadgeDefinition[] {
  const { lifts, commentsOnOthers, reactionsOnOthers } = data;
  const earned: BadgeDefinition[] = [];
  const earn = (slug: string) => {
    const b = BADGES.find(b => b.slug === slug);
    if (b) earned.push(b);
  };

  // first-rep
  if (lifts.length > 0) earn("first-rep");

  // 1RM milestones
  const maxOneRM = Math.max(0, ...lifts.map(l => l.oneRM));
  if (maxOneRM >= 100) earn("century-club");
  if (maxOneRM >= 225) earn("two-plates");
  if (maxOneRM >= 315) earn("three-plates");
  if (maxOneRM >= 405) earn("four-plates");

  // night-owl: any lift after 10pm PT
  if (lifts.some(l => {
    const h = new Date(l.loggedAt).toLocaleString("en-US", { timeZone: "America/Los_Angeles", hour: "numeric", hour12: false });
    return parseInt(h) >= 22;
  })) earn("night-owl");

  // sunday-lifter: 5 distinct Sundays
  const sundays = new Set(
    lifts.filter(l => new Date(l.loggedAt).getDay() === 0).map(l => toDay(l.loggedAt))
  );
  if (sundays.size >= 5) earn("sunday-lifter");

  // on-a-roll / week-warrior: consecutive day streaks
  const days = [...new Set(lifts.map(l => toDay(l.loggedAt)))].sort();
  let maxStreak = days.length > 0 ? 1 : 0, streak = 1;
  for (let i = 1; i < days.length; i++) {
    const diff = Math.round((new Date(days[i]).getTime() - new Date(days[i-1]).getTime()) / 86400000);
    if (diff === 1) { streak++; maxStreak = Math.max(maxStreak, streak); }
    else streak = 1;
  }
  if (maxStreak >= 3) earn("on-a-roll");
  if (maxStreak >= 7) earn("week-warrior");

  // full-house: all 3 types in one day
  const byDay: Record<string, Set<string>> = {};
  for (const l of lifts) { (byDay[toDay(l.loggedAt)] ??= new Set()).add(l.type); }
  if (Object.values(byDay).some(s => ["bunch","squanch","dunch"].every(t => s.has(t)))) earn("full-house");

  // specialist: 20+ logs of same type
  const typeCounts: Record<string, number> = {};
  for (const l of lifts) typeCounts[l.type] = (typeCounts[l.type] ?? 0) + 1;
  if (Object.values(typeCounts).some(c => c >= 20)) earn("specialist");

  // triathlete: all 3 types in one ISO week
  const byWeek: Record<string, Set<string>> = {};
  for (const l of lifts) { (byWeek[toMonday(l.loggedAt)] ??= new Set()).add(l.type); }
  if (Object.values(byWeek).some(s => ["bunch","squanch","dunch"].every(t => s.has(t)))) earn("triathlete");

  // social
  if (commentsOnOthers >= 10) earn("heckler");
  if (reactionsOnOthers >= 20) earn("fan-club");

  // roasted: 10+ 😂 on a single lift
  if (lifts.some(l => l.reactions.filter(r => r.emoji === "😂").length >= 10)) earn("roasted");

  // big-announcement: 20+ lifts total (notify checkbox is on by default)
  if (lifts.length >= 20) earn("big-announcement");

  // glow-up: 20% improvement from first to best on any type
  for (const type of ["bunch","squanch","dunch"]) {
    const tl = [...lifts.filter(l => l.type === type)].sort((a,b) => new Date(a.loggedAt).getTime() - new Date(b.loggedAt).getTime());
    if (tl.length >= 2 && Math.max(...tl.map(l => l.oneRM)) >= tl[0].oneRM * 1.2) { earn("glow-up"); break; }
  }

  // pr-machine: 5 PRs in one week
  const sorted = [...lifts].sort((a,b) => new Date(a.loggedAt).getTime() - new Date(b.loggedAt).getTime());
  const weeks = [...new Set(sorted.map(l => toMonday(l.loggedAt)))];
  for (const wk of weeks) {
    const before = sorted.filter(l => toMonday(l.loggedAt) < wk);
    const during = sorted.filter(l => toMonday(l.loggedAt) === wk);
    const best: Record<string,number> = {};
    for (const l of before) best[l.type] = Math.max(best[l.type] ?? 0, l.oneRM);
    let prs = 0;
    for (const l of during) { if (l.oneRM > (best[l.type] ?? 0)) { prs++; best[l.type] = l.oneRM; } }
    if (prs >= 5) { earn("pr-machine"); break; }
  }

  // balanced: all 3 lifts' best 1RM within 10% of each other
  const bests = ["bunch","squanch","dunch"].map(t => Math.max(0, ...lifts.filter(l => l.type === t).map(l => l.oneRM)));
  if (bests.every(v => v > 0)) {
    const avg = bests.reduce((a,b) => a+b, 0) / 3;
    if (bests.every(v => Math.abs(v - avg) / avg <= 0.10)) earn("balanced");
  }

  return earned;
}
