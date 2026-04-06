import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { username, password, inviteCode } = await req.json();

    if (!username || !password || !inviteCode) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    const code = await prisma.inviteCode.findUnique({ where: { code: inviteCode } });
    if (!code || code.usedBy) {
      return NextResponse.json({ error: "Invalid or used invite code" }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { username } });
    if (existing) {
      return NextResponse.json({ error: "Username already taken" }, { status: 400 });
    }

    const hashed = await hash(password, 12);
    const user = await prisma.user.create({
      data: { username, password: hashed },
    });

    await prisma.inviteCode.update({
      where: { code: inviteCode },
      data: { usedBy: user.id, usedAt: new Date() },
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
