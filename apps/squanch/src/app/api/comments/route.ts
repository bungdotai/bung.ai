import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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
    include: { author: { select: { username: true } } },
  });

  return NextResponse.json(comment);
}
