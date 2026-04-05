import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const lifts = await prisma.lift.findMany({
    include: { user: { select: { name: true } } },
    orderBy: { loggedAt: "asc" },
  });
  return NextResponse.json(lifts);
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { type, weight, reps } = await req.json();
  if (!type || !weight || !reps) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const oneRM = weight * (1 + reps / 30);
  const userId = (session.user as any).id;

  const lift = await prisma.lift.create({
    data: { userId, type, weight, reps, oneRM },
  });

  return NextResponse.json(lift);
}
