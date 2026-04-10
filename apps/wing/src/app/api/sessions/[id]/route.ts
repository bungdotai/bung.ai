import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const session = await prisma.session.findUnique({
    where: { id: params.id },
    include: {
      locations: { orderBy: { recordedAt: "asc" } },
      attendees: { orderBy: { markedAt: "asc" } },
    },
  });
  if (!session) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json(session, {
    headers: { "Cache-Control": "no-store, no-cache, must-revalidate" },
  });
}
