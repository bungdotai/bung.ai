import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const VALID_EMOJIS = ["💪", "😂", "🤮"];

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { liftId, emoji } = await req.json();
  if (!liftId || !emoji || !VALID_EMOJIS.includes(emoji)) {
    return NextResponse.json({ error: "Invalid fields" }, { status: 400 });
  }

  const authorId = (session.user as any).id;

  const existing = await prisma.reaction.findUnique({
    where: { liftId_authorId_emoji: { liftId, authorId, emoji } },
  });

  if (existing) {
    await prisma.reaction.delete({ where: { id: existing.id } });
    return NextResponse.json({ action: "removed" });
  } else {
    const reaction = await prisma.reaction.create({
      data: { liftId, authorId, emoji },
    });
    return NextResponse.json({ action: "added", reaction });
  }
}
