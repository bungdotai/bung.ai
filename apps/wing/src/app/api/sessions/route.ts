import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const sessions = await prisma.session.findMany({
    include: {
      locations: { orderBy: { recordedAt: "asc" } },
      attendees: { orderBy: { markedAt: "asc" } },
    },
    orderBy: { startedAt: "desc" },
  });
  return NextResponse.json(sessions);
}
