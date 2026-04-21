import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const VALID_STYLES = ["drill_sergeant", "zen_master", "hype_bro"] as const;
type CoachingStyle = typeof VALID_STYLES[number];

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const userId = (session.user as any).id;

  const settings = await prisma.userCoachSettings.findUnique({ where: { userId } });
  return NextResponse.json(
    settings ?? { goalsText: "", coachingStyle: "hype_bro" }
  );
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const userId = (session.user as any).id;

  const { goalsText, coachingStyle } = await req.json();
  if (!VALID_STYLES.includes(coachingStyle as CoachingStyle)) {
    return NextResponse.json({ error: "Invalid coachingStyle" }, { status: 400 });
  }

  const settings = await prisma.userCoachSettings.upsert({
    where: { userId },
    create: { userId, goalsText: goalsText ?? "", coachingStyle },
    update: { goalsText: goalsText ?? "", coachingStyle },
  });

  return NextResponse.json(settings);
}
