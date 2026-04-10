import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const session = await prisma.session.findFirst({
    where: { endedAt: null },
    include: {
      locations: { orderBy: { recordedAt: "asc" } },
      attendees: { orderBy: { markedAt: "asc" } },
    },
  });
  const headers = { 'Cache-Control': 'no-store, no-cache, must-revalidate' };
  if (!session) {
    return NextResponse.json({ error: "No active session" }, { status: 404, headers });
  }
  return NextResponse.json(session, { headers });
}
